import type { SharedResult } from '../routes';
import { layoutOf, versionOf, versionsOf, type Layout } from '../share';
import type { Answer, Answers, Question, Quiz } from '../types';

export interface Progress {
  answers: Answers;
  /** The answer ids each question had when the player last answered it, or when they started for the ones they hadn't reached. */
  seen: Record<string, string[]>;
  /** Whether the player has answered every question once: questions added since don't take their result away. */
  finished: boolean;
}

const storageKey = (quiz: Quiz) => `quiz-progress:${quiz.id}`;

const seenOf = (layout: Layout): Progress['seen'] => Object.fromEntries(layout);

/**
 * What a player who saved no `seen` had seen: the oldest version of the quiz their answers fit.
 * Guessing too old only shows them a few unchanged questions as changed; guessing too new would hide real changes.
 */
function guessSeen(quiz: Quiz, answers: Answers): Progress['seen'] {
  const fits = (layout: Layout) => Object.entries(answers).every(([questionId, answerId]) => layout.some(([q, ids]) => q === questionId && ids.includes(answerId)));
  return seenOf(versionsOf(quiz).find(fits) ?? layoutOf(quiz));
}

/** Loads saved progress, dropping anything that no longer matches the quiz (e.g. after a content update). */
export function loadProgress(quiz: Quiz): Progress {
  let saved: Partial<Progress> = {};
  try {
    saved = JSON.parse(localStorage.getItem(storageKey(quiz)) ?? '{}') as Partial<Progress>;
  } catch {
    // Storage unavailable or corrupted: start over.
  }
  const answers: Answers = {};
  for (const question of quiz.questions) {
    const answerId = saved.answers?.[question.id];
    if (question.answers.some((a) => a.id === answerId)) answers[question.id] = answerId!;
  }
  if (Object.keys(answers).length === 0) return { answers, seen: seenOf(layoutOf(quiz)), finished: false };
  const allAnswered = quiz.questions.every((q) => answers[q.id] !== undefined);
  if (saved.seen && typeof saved.seen === 'object') {
    const seen = Object.fromEntries(Object.entries(saved.seen).filter(([, ids]) => Array.isArray(ids)));
    return { answers, seen, finished: allAnswered || saved.finished === true };
  }
  // Progress saved before `seen` existed: finished if it answered every question of the version it was guessed to be for.
  const seen = guessSeen(quiz, saved.answers ?? {});
  return { answers, seen, finished: allAnswered || Object.keys(seen).every((id) => saved.answers?.[id] !== undefined) };
}

/** Records an answer, and that the player has now seen every answer its question offers. */
export function answer(quiz: Quiz, progress: Progress, question: Question, answerId: string): void {
  progress.answers[question.id] = answerId;
  progress.seen[question.id] = question.answers.map((a) => a.id);
  if (quiz.questions.every((q) => progress.answers[q.id] !== undefined)) progress.finished = true;
  saveProgress(quiz, progress);
}

/** The questions added, or whose answers changed, since the player last answered them; none before they start. */
export function changedQuestions(quiz: Quiz, progress: Progress): Question[] {
  if (Object.keys(progress.answers).length === 0) return [];
  return quiz.questions.filter((question) => {
    const seen = progress.seen[question.id];
    return !seen || seen.length !== question.answers.length || question.answers.some((a) => !seen.includes(a.id));
  });
}

/** The answers of a changed question the player hasn't seen yet; none for a question added since. */
export const newAnswers = (progress: Progress, question: Question): Answer[] =>
  question.answers.filter((a) => progress.seen[question.id] && !progress.seen[question.id]!.includes(a.id));

export function saveProgress(quiz: Quiz, progress: Progress): void {
  try {
    localStorage.setItem(storageKey(quiz), JSON.stringify(progress));
  } catch {
    // Progress just won't be remembered.
  }
}

const sharedKey = (quiz: Quiz) => `quiz-shared:${quiz.id}`;

/** Whether two links come from the same person; a link from before sender ids only matches itself. */
const sameSender = (a: SharedResult, b: SharedResult) => (a.sender ? a.sender === b.sender : !b.sender && a.code === b.code && a.name === b.name);

/** Every shared result opened for this quiz, last opened first, so the result page can compare with each once the quiz is done. */
export function loadSharedResults(quiz: Quiz): SharedResult[] {
  try {
    const saved = JSON.parse(localStorage.getItem(sharedKey(quiz)) ?? '[]') as unknown;
    // Only the last one opened used to be kept.
    return (Array.isArray(saved) ? saved : [saved]).flatMap((entry: Partial<SharedResult> | null) =>
      typeof entry?.code === 'string'
        ? [{ code: entry.code, sender: typeof entry.sender === 'string' ? entry.sender : '', name: typeof entry.name === 'string' ? entry.name : '' }]
        : [],
    );
  } catch {
    // Storage unavailable or corrupted: nothing to compare with.
    return [];
  }
}

function saveSharedResults(quiz: Quiz, list: SharedResult[]): void {
  try {
    localStorage.setItem(sharedKey(quiz), JSON.stringify(list));
  } catch {
    // The result page just won't offer to compare.
  }
}

/**
 * Remembers a shared result, in place of an earlier link from the same person: they retook the quiz or changed their name since.
 * A link made for an older version of the quiz than the one remembered is older too, so it doesn't replace it.
 */
export function saveSharedResult(quiz: Quiz, shared: SharedResult): void {
  const saved = loadSharedResults(quiz);
  const previous = saved.find((s) => sameSender(s, shared));
  const kept = previous && versionOf(quiz, previous.code) > versionOf(quiz, shared.code) ? previous : shared;
  saveSharedResults(quiz, [kept, ...saved.filter((s) => !sameSender(s, shared))]);
}

export function forgetSharedResult(quiz: Quiz, shared: SharedResult): void {
  saveSharedResults(quiz, loadSharedResults(quiz).filter((s) => !sameSender(s, shared)));
}

const SENDER_KEY = 'sender-id';
let sessionSenderId: string | undefined;

/** A random id for this browser, put in its result links so its own results are told apart from friends' ones. */
export function senderId(): string {
  try {
    let id = localStorage.getItem(SENDER_KEY);
    if (!id) {
      id = randomId();
      localStorage.setItem(SENDER_KEY, id);
    }
    return id;
  } catch {
    // Without storage, at least stay the same for this visit.
    return (sessionSenderId ??= randomId());
  }
}

/** Six base-36 characters: about two billion possibilities. */
function randomId(): string {
  return Array.from(crypto.getRandomValues(new Uint8Array(6)), (byte) => (byte % 36).toString(36)).join('');
}

const NAME_KEY = 'share-name';

/** The name last put in a share link, prefilled next time. */
export function loadShareName(): string {
  try {
    return localStorage.getItem(NAME_KEY) ?? '';
  } catch {
    return '';
  }
}

export function saveShareName(name: string): void {
  try {
    localStorage.setItem(NAME_KEY, name);
  } catch {
    // The name just won't be prefilled.
  }
}
