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

  it('rejects a release time that is not YYYY-MM-DDTHH:MM', () => {
    expect(validateQuiz({ ...base, released: '2026-10-24T14:30' })).toEqual([]);
    for (const released of ['2026-10-24', '24/10/2026 14:30', '2026-13-01T14:30', '2026-10-24 14:30', '2026-10-24T25:00']) {
      expect(validateQuiz({ ...base, released }).join('\n')).toMatch(/is not YYYY-MM-DDTHH:MM/);
    }
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

  it('rejects an answer that points at no personality', () => {
    const errors = validateQuiz(
      withAnswers([
        { id: 'x', text: '', weights: { a: 1, b: 1 } },
        { id: 'y', text: '', weights: { a: 0 } },
      ]),
    );
    expect(errors.join('\n')).toMatch(/q1.y: points at no personality/);
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
      answers: [
        { id: 'x', text: '', weights: { a: 1, b: 0.3 } },
        { id: 'y', text: '', weights: {} },
      ],
    });
    const errors = validateQuiz({ ...base, questions: [...base.questions, onlyA('q2'), onlyA('q3'), onlyA('q4')] });
    expect(errors.join('\n')).toMatch(/b: weighted on only 1\/4 questions, needs 2/);
    expect(errors.join('\n')).not.toMatch(/a: weighted/);
  });

  it('rejects a personality that wins far more or less than its fair share', () => {
    const mostlyA = (id: string): Quiz['questions'][number] => ({
      id,
      text: '',
      answers: [
        ...['w', 'x', 'y', 'z'].map((answerId) => ({ id: answerId, text: '', weights: { a: 1 } })),
        { id: 'v', text: '', weights: { b: 1 } },
      ],
    });
    const errors = validateQuiz({ ...base, questions: ['q1', 'q2', 'q3'].map(mostlyA) }).join('\n');
    expect(errors).toMatch(/a: wins \d+\.\d % of random playthroughs/);
    expect(errors).toMatch(/b: wins \d+\.\d % of random playthroughs/);
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

  it('has between 10 and 20 questions per quiz', () => {
    for (const quiz of quizzes) {
      expect(quiz.questions.length, quiz.id).toBeGreaterThanOrEqual(10);
      expect(quiz.questions.length, quiz.id).toBeLessThanOrEqual(20);
    }
  });
});
