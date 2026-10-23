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

/** A result someone shared, as found in their link. */
export interface SharedResult {
  code: string;
  /** Empty when the sender left it out. */
  name: string;
}

const sharedKey = (quiz: Quiz) => `quiz-shared:${quiz.id}`;

/** The last shared result opened for this quiz, so its result page can offer to compare once the quiz is done. */
export function loadSharedResult(quiz: Quiz): SharedResult | undefined {
  try {
    const saved = JSON.parse(localStorage.getItem(sharedKey(quiz)) ?? 'null') as Partial<SharedResult> | null;
    if (typeof saved?.code === 'string') return { code: saved.code, name: typeof saved.name === 'string' ? saved.name : '' };
  } catch {
    // Storage unavailable or corrupted: nothing to compare with.
  }
  return undefined;
}

export function saveSharedResult(quiz: Quiz, shared: SharedResult): void {
  try {
    localStorage.setItem(sharedKey(quiz), JSON.stringify(shared));
  } catch {
    // The result page just won't offer to compare.
  }
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
