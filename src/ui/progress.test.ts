import { beforeEach, describe, expect, it, vi } from 'vitest';
import { quizzes } from '../quizzes';
import { forgetSharedResult, loadSharedResults, saveSharedResult } from './progress';

const quiz = quizzes[0]!;
const key = `quiz-shared:${quiz.id}`;

beforeEach(() => {
  const store = new Map<string, string>();
  vi.stubGlobal('localStorage', {
    getItem: (k: string) => store.get(k) ?? null,
    setItem: (k: string, v: string) => store.set(k, v),
  });
});

describe('shared results', () => {
  it('keeps every person, last opened first', () => {
    saveSharedResult(quiz, { code: 'a', sender: 'alice', name: 'Alice' });
    saveSharedResult(quiz, { code: 'b', sender: 'bob', name: 'Bob' });
    expect(loadSharedResults(quiz).map((s) => s.name)).toEqual(['Bob', 'Alice']);
  });

  it('replaces an earlier link from the same sender', () => {
    saveSharedResult(quiz, { code: 'a', sender: 'alice', name: 'Alice' });
    saveSharedResult(quiz, { code: 'b', sender: 'bob', name: 'Bob' });
    saveSharedResult(quiz, { code: 'c', sender: 'alice', name: 'Alix' });
    expect(loadSharedResults(quiz)).toEqual([
      { code: 'c', sender: 'alice', name: 'Alix' },
      { code: 'b', sender: 'bob', name: 'Bob' },
    ]);
  });

  it('tells links without a sender apart unless they are identical', () => {
    saveSharedResult(quiz, { code: 'a', sender: '', name: '' });
    saveSharedResult(quiz, { code: 'b', sender: '', name: '' });
    saveSharedResult(quiz, { code: 'a', sender: '', name: '' });
    expect(loadSharedResults(quiz).map((s) => s.code)).toEqual(['a', 'b']);
  });

  it('forgets one person only', () => {
    saveSharedResult(quiz, { code: 'a', sender: 'alice', name: 'Alice' });
    saveSharedResult(quiz, { code: 'b', sender: 'bob', name: 'Bob' });
    forgetSharedResult(quiz, { code: 'a', sender: 'alice', name: 'Alice' });
    expect(loadSharedResults(quiz).map((s) => s.name)).toEqual(['Bob']);
  });

  it('reads the single result older versions saved', () => {
    localStorage.setItem(key, JSON.stringify({ code: 'a', sender: 'alice' }));
    expect(loadSharedResults(quiz)).toEqual([{ code: 'a', sender: 'alice', name: '' }]);
    saveSharedResult(quiz, { code: 'b', sender: 'bob', name: 'Bob' });
    expect(loadSharedResults(quiz).map((s) => s.sender)).toEqual(['bob', 'alice']);
  });

  it('drops malformed entries and survives corrupted storage', () => {
    localStorage.setItem(key, JSON.stringify([null, { name: 'no code' }, { code: 'a', sender: 3 }]));
    expect(loadSharedResults(quiz)).toEqual([{ code: 'a', sender: '', name: '' }]);
    localStorage.setItem(key, '{not json');
    expect(loadSharedResults(quiz)).toEqual([]);
  });
});
