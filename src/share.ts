import archivedLayouts from './data/share-layouts.json';
import type { Answers, Quiz } from './types';

const DIGITS = '0123456789abcdefghijklmnopqrstuvwxyz';

/** A quiz's question ids with their answer ids, in order: what the answer positions in a link refer to. */
export type Layout = [questionId: string, answerIds: string[]][];

/** Every layout each released quiz has had, oldest first, so links shared before an edit still decode (`npm run share-layouts`). */
export type LayoutArchive = Record<string, Layout[]>;

export const shareLayouts: LayoutArchive = archivedLayouts as unknown as LayoutArchive;

export const layoutOf = (quiz: Quiz): Layout => quiz.questions.map((q) => [q.id, q.answers.map((a) => a.id)]);

/** The layouts a link to the quiz can be made for, oldest first: the archived ones, then the current one until it's archived. */
export function versionsOf(quiz: Quiz, archive: LayoutArchive = shareLayouts): Layout[] {
  const archived = archive[quiz.id] ?? [];
  const current = layoutOf(quiz);
  const check = fingerprint(current);
  return archived.some((layout) => fingerprint(layout) === check) ? archived : [...archived, current];
}

/** Which version of the quiz a code was made for, counting from the oldest, or -1 for none. */
export function versionOf(quiz: Quiz, code: string, archive: LayoutArchive = shareLayouts): number {
  const check = code.toLowerCase().split('-')[1];
  return versionsOf(quiz, archive).findIndex((layout) => fingerprint(layout) === check);
}

/**
 * A short fingerprint of a layout, which picks the layout a link's answer positions refer to.
 * Weights and texts aren't part of it: they don't change what a position means.
 */
export function fingerprint(layout: Layout): string {
  const ids = layout.map(([questionId, answerIds]) => `${questionId}:${answerIds.join(',')}`).join(';');
  // 32-bit FNV-1a.
  let hash = 0x811c9dc5;
  for (let i = 0; i < ids.length; i++) {
    hash ^= ids.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash.toString(36).padStart(7, '0').slice(-4);
}

/** Marks a question without an answer: one added since the player finished the quiz. */
const UNANSWERED = '_';

/** Encodes answers as one digit per question (the answer's position, or `UNANSWERED`), then the quiz fingerprint. */
export function encodeAnswers(quiz: Quiz, answers: Answers): string {
  const digits = quiz.questions.map((question) => {
    if (answers[question.id] === undefined) return UNANSWERED;
    const index = question.answers.findIndex((a) => a.id === answers[question.id]);
    if (index === -1) throw new Error(`Question "${question.id}" has no answer "${answers[question.id]}"`);
    if (index >= DIGITS.length) throw new Error(`Question "${question.id}" has too many answers to share`);
    return DIGITS[index];
  });
  return `${digits.join('')}-${fingerprint(layoutOf(quiz))}`;
}

/**
 * The answers a code stands for, or undefined if it is malformed, made for an unknown version of the quiz, or has no answer left.
 * It can be partial: a code from an earlier version keeps only the answers whose question and answer still exist, and a player who
 * finished the quiz before questions were added shares without them.
 */
export function decodeAnswers(quiz: Quiz, code: string, archive: LayoutArchive = shareLayouts): Answers | undefined {
  const [digits] = code.toLowerCase().split('-');
  const layout = versionsOf(quiz, archive)[versionOf(quiz, code, archive)];
  if (digits === undefined || !layout || digits.length !== layout.length) return undefined;
  const answers: Answers = {};
  for (const [i, [questionId, answerIds]] of layout.entries()) {
    if (digits[i] === UNANSWERED) continue;
    const answerId = answerIds[DIGITS.indexOf(digits[i]!)];
    if (answerId === undefined) return undefined;
    if (quiz.questions.find((q) => q.id === questionId)?.answers.some((a) => a.id === answerId)) answers[questionId] = answerId;
  }
  return Object.keys(answers).length > 0 ? answers : undefined;
}

/** Whether a code was made for an earlier version of the quiz, whose result is now recomputed on the current one. */
export const isFromEarlierVersion = (quiz: Quiz, code: string) => code.toLowerCase().split('-')[1] !== fingerprint(layoutOf(quiz));
