import type { SharedResult } from '../routes';
import type { Answers, Quiz } from '../types';

export interface Progress {
  answers: Answers;
}

const storageKey = (quiz: Quiz) => `quiz-progress:${quiz.id}`;

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
  return { answers };
}

export function saveProgress(quiz: Quiz, progress: Progress): void {
  try {
    localStorage.setItem(storageKey(quiz), JSON.stringify(progress));
  } catch {
    // Progress just won't be remembered.
  }
}

export function isComplete(quiz: Quiz, progress: Progress): boolean {
  return quiz.questions.every((q) => progress.answers[q.id] !== undefined);
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

/** Remembers a shared result, in place of an earlier link from the same person: they retook the quiz or changed their name since. */
export function saveSharedResult(quiz: Quiz, shared: SharedResult): void {
  saveSharedResults(quiz, [shared, ...loadSharedResults(quiz).filter((s) => !sameSender(s, shared))]);
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
