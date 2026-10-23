import { describe, expect, it } from 'vitest';
import { quizzes } from './quizzes';
import { decodeAnswers, encodeAnswers } from './share';
import type { Answers, Quiz } from './types';

/** Picks the last answer of each question, so every answer position gets encoded somewhere. */
const lastAnswers = (quiz: Quiz): Answers => Object.fromEntries(quiz.questions.map((q) => [q.id, q.answers.at(-1)!.id]));

describe('share codes', () => {
  it.each(quizzes.map((quiz) => [quiz.id, quiz] as const))('round-trip every answer of %s', (_, quiz) => {
    for (let i = 0; i < Math.max(...quiz.questions.map((q) => q.answers.length)); i++) {
      const answers: Answers = Object.fromEntries(quiz.questions.map((q) => [q.id, q.answers[Math.min(i, q.answers.length - 1)]!.id]));
      expect(decodeAnswers(quiz, encodeAnswers(quiz, answers))).toEqual(answers);
    }
  });

  const quiz = quizzes[0]!;

  it('refuses incomplete answers', () => {
    const answers = lastAnswers(quiz);
    delete answers[quiz.questions[0]!.id];
    expect(() => encodeAnswers(quiz, answers)).toThrow();
  });

  it('rejects a code made for another version of the quiz', () => {
    const code = encodeAnswers(quiz, lastAnswers(quiz));
    const [first, ...rest] = quiz.questions;
    const reordered: Quiz = { ...quiz, questions: [{ ...first!, answers: [...first!.answers].reverse() }, ...rest] };
    expect(decodeAnswers(reordered, code)).toBeUndefined();
  });

  it('keeps codes valid when only weights change', () => {
    const answers = lastAnswers(quiz);
    const code = encodeAnswers(quiz, answers);
    const rebalanced: Quiz = { ...quiz, questions: quiz.questions.map((q) => ({ ...q, answers: q.answers.map((a) => ({ ...a, weights: {} })) })) };
    expect(decodeAnswers(rebalanced, code)).toEqual(answers);
  });

  it('rejects malformed codes', () => {
    const code = encodeAnswers(quiz, lastAnswers(quiz));
    const [digits, check] = code.split('-');
    for (const bad of ['', 'abc', digits!, `${digits}0-${check}`, `${digits!.slice(1)}-${check}`, `${'z'.repeat(digits!.length)}-${check}`]) {
      expect(decodeAnswers(quiz, bad)).toBeUndefined();
    }
  });
});
