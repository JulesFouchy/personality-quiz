import { describe, expect, it } from 'vitest';
import { quizzes } from './quizzes';
import type { Quiz } from './types';
import { validateQuiz, validateQuizzes } from './validate';

const base: Quiz = {
  id: 'test',
  title: 'Test',
  emoji: '🧪',
  description: '',
  personalities: [
    { id: 'a', name: 'A', emoji: '', description: '' },
    { id: 'b', name: 'B', emoji: '', description: '' },
  ],
  questions: [
    {
      id: 'q1',
      text: '',
      category: 'funny',
      answers: [
        { id: 'x', text: '', weights: { a: 1 } },
        { id: 'y', text: '', weights: { b: 1 } },
      ],
    },
  ],
};

const withAnswers = (answers: Quiz['questions'][number]['answers']): Quiz => ({
  ...base,
  questions: [{ ...base.questions[0]!, answers }],
});

describe('validateQuiz', () => {
  it('accepts a sound quiz', () => {
    expect(validateQuiz(base)).toEqual([]);
  });

  it('rejects unknown personalities and out-of-range weights', () => {
    const errors = validateQuiz(
      withAnswers([
        { id: 'x', text: '', weights: { a: 1.5 } },
        { id: 'y', text: '', weights: { a: -0.5, b: 1, c: 1 } },
      ]),
    );
    expect(errors.join('\n')).toMatch(/1.5 for "a" is outside \[0, 1\]/);
    expect(errors.join('\n')).toMatch(/-0.5 for "a" is outside \[0, 1\]/);
    expect(errors.join('\n')).toMatch(/unknown personality "c"/);
  });

  it('rejects a personality no question tells apart', () => {
    const errors = validateQuiz(
      withAnswers([
        { id: 'x', text: '', weights: { a: 1 } },
        { id: 'y', text: '', weights: { a: 1 } },
      ]),
    );
    expect(errors.join('\n')).toMatch(/b: no question tells/);
  });

  it('rejects a personality weighted on too few questions', () => {
    const onlyA = (id: string): Quiz['questions'][number] => ({
      id,
      text: '',
      category: 'funny',
      answers: [
        { id: 'x', text: '', weights: { a: 1, b: 0.3 } },
        { id: 'y', text: '', weights: {} },
      ],
    });
    const errors = validateQuiz({ ...base, questions: [...base.questions, onlyA('q2'), onlyA('q3')] });
    expect(errors.join('\n')).toMatch(/b: weighted on only 1\/3 questions, needs 2/);
    expect(errors.join('\n')).not.toMatch(/a: weighted/);
  });

  it('rejects a personality that can only tie', () => {
    const errors = validateQuiz(
      withAnswers([
        { id: 'x', text: '', weights: { a: 1, b: 1 } },
        { id: 'y', text: '', weights: {} },
      ]),
    );
    expect(errors.join('\n')).toMatch(/can only ever tie/);
  });
});

describe('quiz data', () => {
  it('is valid', () => {
    expect(validateQuizzes(quizzes)).toEqual([]);
  });
});
