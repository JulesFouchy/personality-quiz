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
