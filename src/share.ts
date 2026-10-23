import type { Answers, Personality, Quiz } from './types';

/** Longest sender name kept in a link. */
export const MAX_NAME_LENGTH = 30;

/**
 * The static page a share link points to, relative to the site root: it gives link previews this personality's card, then
 * forwards to the shared result. Generated at build time by `scripts/share-previews.ts`, so it only exists for released quizzes.
 */
export const previewPath = (quiz: Quiz, personality: Personality) => `s/${quiz.id}/${personality.id}.html`;

const DIGITS = '0123456789abcdefghijklmnopqrstuvwxyz';

/**
 * A short fingerprint of the quiz's question and answer ids, in order.
 * A link only stores answer positions, so it must stop decoding once those positions mean something else.
 * Weights and texts aren't part of it: rebalancing a quiz keeps old links valid.
 */
function fingerprint(quiz: Quiz): string {
  const ids = quiz.questions.map((q) => `${q.id}:${q.answers.map((a) => a.id).join(',')}`).join(';');
  // 32-bit FNV-1a.
  let hash = 0x811c9dc5;
  for (let i = 0; i < ids.length; i++) {
    hash ^= ids.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(36).padStart(7, '0').slice(-4);
}

/** Encodes a complete set of answers as one digit per question (the answer's position), then the quiz fingerprint. */
export function encodeAnswers(quiz: Quiz, answers: Answers): string {
  const digits = quiz.questions.map((question) => {
    const index = question.answers.findIndex((a) => a.id === answers[question.id]);
    if (index === -1) throw new Error(`Question "${question.id}" has no answer to share`);
    if (index >= DIGITS.length) throw new Error(`Question "${question.id}" has too many answers to share`);
    return DIGITS[index];
  });
  return `${digits.join('')}-${fingerprint(quiz)}`;
}

/** The answers a code stands for, or undefined if it is malformed or was made for another version of the quiz. */
export function decodeAnswers(quiz: Quiz, code: string): Answers | undefined {
  const [digits, check] = code.toLowerCase().split('-');
  if (digits === undefined || check !== fingerprint(quiz) || digits.length !== quiz.questions.length) return undefined;
  const answers: Answers = {};
  for (const [i, question] of quiz.questions.entries()) {
    const answer = question.answers[DIGITS.indexOf(digits[i]!)];
    if (!answer) return undefined;
    answers[question.id] = answer.id;
  }
  return answers;
}
