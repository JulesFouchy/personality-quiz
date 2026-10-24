import { describe, expect, it } from 'vitest';
import { answerContributions, compatibility, score, winners } from './scoring';
import type { Quiz } from './types';

const quiz: Quiz = {
  id: 'test',
  title: 'Test',
  emoji: '🧪',
  description: '',
  personalities: [
    { id: 'a', name: 'A', emoji: '', description: '' },
    { id: 'b', name: 'B', emoji: '', description: '' },
    { id: 'generous', name: 'Generous', emoji: '', description: '' },
  ],
  questions: [
    {
      id: 'q1',
      text: '',
      answers: [
        { id: 'x', text: '', weights: { a: 1, generous: 0.6 } },
        { id: 'y', text: '', weights: { b: 1, generous: 0.5 } },
      ],
    },
    {
      id: 'q2',
      text: '',
      answers: [
        { id: 'x', text: '', weights: { a: 1, generous: 0.6 } },
        { id: 'y', text: '', weights: { b: 1, generous: 0.5 } },
      ],
    },
  ],
};

const matchOf = (ranking: ReturnType<typeof score>, id: string) => ranking.find((s) => s.personality.id === id)?.match;

describe('score', () => {
  it('normalizes so generous weights do not win by default', () => {
    const ranking = score(quiz, { q1: 'x', q2: 'x' });
    // Raw: a = 2, generous = 1.2, but `a` got the best it could and so did `generous`.
    expect(ranking.find((s) => s.personality.id === 'generous')?.raw).toBeCloseTo(1.2);
    expect(matchOf(ranking, 'a')).toBe(1);
    expect(matchOf(ranking, 'generous')).toBe(1);
    expect(matchOf(ranking, 'b')).toBe(0);
  });

  it('rescales between the lowest and highest reachable totals', () => {
    const ranking = score(quiz, { q1: 'y', q2: 'x' });
    const generous = ranking.find((s) => s.personality.id === 'generous');
    expect(generous).toMatchObject({ min: 1, max: 1.2 });
    expect(generous?.raw).toBeCloseTo(1.1);
    expect(generous?.match).toBeCloseTo(0.5);
  });

  it('only counts answered questions', () => {
    const ranking = score(quiz, { q1: 'y' });
    expect(matchOf(ranking, 'b')).toBe(1);
    expect(matchOf(ranking, 'a')).toBe(0);
  });

  it('rejects unknown answers', () => {
    expect(() => score(quiz, { q1: 'nope' })).toThrow(/nope/);
  });
});

describe('winners', () => {
  it('returns every personality tied for first', () => {
    expect(winners(score(quiz, { q1: 'x', q2: 'x' })).map((s) => s.personality.id).sort()).toEqual(['a', 'generous']);
  });

  it('returns a single winner when there is no tie', () => {
    expect(winners(score(quiz, { q1: 'y', q2: 'y' })).map((s) => s.personality.id)).toEqual(['b']);
  });
});

describe('answerContributions', () => {
  it('lists the personalities each answer pushed toward, strongest first', () => {
    const [, second] = answerContributions(quiz, { q1: 'x', q2: 'x' });
    expect(second?.toward.map((w) => w.personality.id)).toEqual(['a', 'generous']);
  });
});

describe('compatibility', () => {
  it('is 1 for identical answers and 0 for opposite profiles', () => {
    const a = score(quiz, { q1: 'x', q2: 'x' });
    expect(compatibility(a, score(quiz, { q1: 'x', q2: 'x' }))).toBeCloseTo(1);
    expect(compatibility(a, score(quiz, { q1: 'y', q2: 'y' }))).toBeCloseTo(0);
  });

  it('is symmetric and ignores ranking order', () => {
    const a = score(quiz, { q1: 'x', q2: 'y' });
    const b = score(quiz, { q1: 'y', q2: 'y' });
    expect(compatibility(a, b)).toBeCloseTo(compatibility(b, a));
  });
});
