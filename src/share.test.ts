import { describe, expect, it } from 'vitest';
import { quizzes } from './quizzes';
import { decodeAnswers, encodeAnswers, fingerprint, isFromEarlierVersion, layoutOf, shareLayouts, versionOf, type LayoutArchive } from './share';
import type { Answers, Quiz } from './types';

/** Picks the last answer of each question, so every answer position gets encoded somewhere. */
const lastAnswers = (quiz: Quiz): Answers => Object.fromEntries(quiz.questions.map((q) => [q.id, q.answers.at(-1)!.id]));

/** An archive holding only the quiz's current layout, as if it had been released then edited. */
const archiveOf = (quiz: Quiz): LayoutArchive => ({ [quiz.id]: [layoutOf(quiz)] });

describe('share codes', () => {
  it.each(quizzes.map((quiz) => [quiz.id, quiz] as const))('round-trip every answer of %s', (_, quiz) => {
    for (let i = 0; i < Math.max(...quiz.questions.map((q) => q.answers.length)); i++) {
      const answers: Answers = Object.fromEntries(quiz.questions.map((q) => [q.id, q.answers[Math.min(i, q.answers.length - 1)]!.id]));
      expect(decodeAnswers(quiz, encodeAnswers(quiz, answers))).toEqual(answers);
    }
  });

  const quiz = quizzes[0]!;
  const [first, second, ...rest] = quiz.questions;

  it('round-trips answers missing a question', () => {
    const answers = lastAnswers(quiz);
    delete answers[quiz.questions[0]!.id];
    expect(decodeAnswers(quiz, encodeAnswers(quiz, answers))).toEqual(answers);
  });

  it('refuses an answer the question does not have', () => {
    expect(() => encodeAnswers(quiz, { ...lastAnswers(quiz), [first!.id]: 'unknown' })).toThrow();
  });

  it('rejects a code made for an unarchived version of the quiz', () => {
    const code = encodeAnswers(quiz, lastAnswers(quiz));
    const reordered: Quiz = { ...quiz, questions: [{ ...first!, answers: [...first!.answers].reverse() }, second!, ...rest] };
    expect(decodeAnswers(reordered, code, {})).toBeUndefined();
  });

  it('decodes a code from an archived version onto reordered answers and questions', () => {
    const answers = lastAnswers(quiz);
    const code = encodeAnswers(quiz, answers);
    const reordered: Quiz = { ...quiz, questions: [second!, { ...first!, answers: [...first!.answers].reverse() }, ...rest] };
    expect(decodeAnswers(reordered, code, archiveOf(quiz))).toEqual(answers);
    expect(isFromEarlierVersion(reordered, code)).toBe(true);
    expect(isFromEarlierVersion(quiz, code)).toBe(false);
  });

  it('drops the answers an archived version had but the quiz no longer has', () => {
    const answers = lastAnswers(quiz);
    const code = encodeAnswers(quiz, answers);
    const added = { ...first!.answers[0]!, id: 'added' };
    const edited: Quiz = { ...quiz, questions: [{ ...first!, answers: [added, ...first!.answers.slice(0, -1)] }, ...rest] };
    const expected = { ...answers };
    delete expected[first!.id];
    delete expected[second!.id];
    expect(decodeAnswers(edited, code, archiveOf(quiz))).toEqual(expected);
  });

  it('rejects an archived code with no answer left', () => {
    const code = encodeAnswers(quiz, lastAnswers(quiz));
    const replaced: Quiz = { ...quiz, questions: quiz.questions.map((q) => ({ ...q, id: `new-${q.id}` })) };
    expect(decodeAnswers(replaced, code, archiveOf(quiz))).toBeUndefined();
  });

  it('numbers versions from the oldest, the current one last', () => {
    const code = encodeAnswers(quiz, lastAnswers(quiz));
    const edited: Quiz = { ...quiz, questions: rest };
    expect(versionOf(edited, code, archiveOf(quiz))).toBe(0);
    expect(versionOf(edited, encodeAnswers(edited, lastAnswers(edited)), archiveOf(quiz))).toBe(1);
    expect(versionOf(edited, 'abc-zzzz', archiveOf(quiz))).toBe(-1);
  });

  it('keeps codes valid when only weights change', () => {
    const answers = lastAnswers(quiz);
    const code = encodeAnswers(quiz, answers);
    const rebalanced: Quiz = { ...quiz, questions: quiz.questions.map((q) => ({ ...q, answers: q.answers.map((a) => ({ ...a, weights: {} })) })) };
    expect(decodeAnswers(rebalanced, code, {})).toEqual(answers);
  });

  it('rejects malformed codes', () => {
    const code = encodeAnswers(quiz, lastAnswers(quiz));
    const [digits, check] = code.split('-');
    for (const bad of ['', 'abc', digits!, `${digits}0-${check}`, `${digits!.slice(1)}-${check}`, `${'z'.repeat(digits!.length)}-${check}`]) {
      expect(decodeAnswers(quiz, bad)).toBeUndefined();
    }
  });
});

describe('share layout archive', () => {
  it.each(quizzes.filter((q) => q.released).map((quiz) => [quiz.id, quiz] as const))('has the current layout of %s (npm run share-layouts)', (_, quiz) => {
    expect(shareLayouts[quiz.id]?.find((layout) => fingerprint(layout) === fingerprint(layoutOf(quiz)))).toEqual(layoutOf(quiz));
  });

  it('tells every layout of a quiz apart by its fingerprint', () => {
    for (const layouts of Object.values(shareLayouts)) expect(new Set(layouts.map(fingerprint)).size).toBe(layouts.length);
  });
});
