import { beforeEach, describe, expect, it, vi } from 'vitest';
import { quizzes } from '../quizzes';
import { fingerprint, shareLayouts } from '../share';
import type { Answers, Quiz } from '../types';
import { answer, changedQuestions, forgetSharedResult, loadProgress, loadSharedResults, newAnswers, saveSharedResult } from './progress';

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

  it('keeps a link made for a newer version of the quiz over an older one from the same sender', () => {
    const [older, newer] = shareLayouts[quiz.id]!.slice(-2).map((layout) => `${'0'.repeat(layout.length)}-${fingerprint(layout)}`);
    saveSharedResult(quiz, { code: older!, sender: 'alice', name: 'Alice' });
    saveSharedResult(quiz, { code: newer!, sender: 'alice', name: 'Alix' });
    saveSharedResult(quiz, { code: 'b', sender: 'bob', name: 'Bob' });
    saveSharedResult(quiz, { code: older!, sender: 'alice', name: 'Alice' });
    expect(loadSharedResults(quiz)).toEqual([
      { code: newer, sender: 'alice', name: 'Alix' },
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

describe('changed questions', () => {
  const progressKey = `quiz-progress:${quiz.id}`;
  const [first, second, ...rest] = quiz.questions;
  const firstAnswers = (q: Quiz): Answers => Object.fromEntries(q.questions.map((question) => [question.id, question.answers[0]!.id]));

  it('has none while the player is up to date', () => {
    const progress = loadProgress(quiz);
    for (const question of quiz.questions) answer(quiz, progress, question, question.answers[0]!.id);
    expect(changedQuestions(quiz, loadProgress(quiz))).toEqual([]);
  });

  it('lists the questions added or given new answers since, until they are answered again', () => {
    const before: Quiz = { ...quiz, questions: [{ ...first!, answers: first!.answers.slice(0, -1) }, ...rest] };
    const progress = loadProgress(before);
    for (const question of before.questions) answer(before, progress, question, question.answers[0]!.id);
    const now = loadProgress(quiz);
    expect(changedQuestions(quiz, now)).toEqual([first, second]);
    expect(newAnswers(now, first!)).toEqual([first!.answers.at(-1)]);
    expect(newAnswers(now, second!)).toEqual([]);
    answer(quiz, now, first!, first!.answers[0]!.id);
    expect(changedQuestions(quiz, loadProgress(quiz))).toEqual([second]);
  });

  it('keeps the quiz finished when a question is added', () => {
    const before: Quiz = { ...quiz, questions: rest };
    const progress = loadProgress(before);
    for (const question of before.questions) answer(before, progress, question, question.answers[0]!.id);
    expect(loadProgress(quiz).finished).toBe(true);
    const started = loadProgress(before);
    delete started.answers[rest[0]!.id];
    started.finished = false;
    answer(before, started, rest[1]!, rest[1]!.answers[0]!.id);
    expect(loadProgress(quiz).finished).toBe(false);
  });

  it('remembers when the quiz was first finished, not when a changed question was answered again', () => {
    vi.setSystemTime(1000);
    const before: Quiz = { ...quiz, questions: rest };
    const progress = loadProgress(before);
    for (const question of before.questions) answer(before, progress, question, question.answers[0]!.id);
    expect(loadProgress(quiz).finishedAt).toBe(1000);
    vi.setSystemTime(2000);
    answer(quiz, loadProgress(quiz), first!, first!.answers[0]!.id);
    expect(loadProgress(quiz).finishedAt).toBe(1000);
    vi.useRealTimers();
  });

  it('does not count progress saved before tracking changes as finished while it misses a question of its version', () => {
    const answers = firstAnswers(quiz);
    delete answers[first!.id];
    localStorage.setItem(progressKey, JSON.stringify({ answers }));
    expect(loadProgress(quiz).finished).toBe(false);
  });

  it('guesses what progress saved before tracking changes had seen from the oldest version its answers fit', () => {
    const layouts = shareLayouts[quiz.id]!;
    const previous = layouts.at(-2)!;
    const answers = firstAnswers(quiz);
    localStorage.setItem(progressKey, JSON.stringify({ answers }));
    const changed = changedQuestions(quiz, loadProgress(quiz)).map((q) => q.id);
    // Every question whose answers differ from the previous version, at least.
    for (const question of quiz.questions) {
      const ids = previous.find(([id]) => id === question.id)?.[1];
      if (JSON.stringify(ids) !== JSON.stringify(question.answers.map((a) => a.id))) expect(changed).toContain(question.id);
    }
  });

  it('has none for progress saved before tracking changes on a quiz that never changed', () => {
    const unreleased: Quiz = { ...quiz, id: 'never-released' };
    localStorage.setItem('quiz-progress:never-released', JSON.stringify({ answers: firstAnswers(unreleased) }));
    expect(changedQuestions(unreleased, loadProgress(unreleased))).toEqual([]);
  });
});

describe('new quizzes', () => {
  // The result is kept for the whole visit, so each visit needs a fresh copy of the module.
  const visit = async (ids: string[]) => {
    vi.resetModules();
    return (await import('./progress')).newQuizIds(ids);
  };

  it('shows none as new on a first visit, then the ones added since the last visit', async () => {
    expect(await visit(['a', 'b'])).toEqual(new Set());
    expect(await visit(['a', 'b', 'c'])).toEqual(new Set(['c']));
    expect(await visit(['a', 'b', 'c'])).toEqual(new Set());
  });

  it('keeps showing them as new until the page reloads', async () => {
    await visit(['a']);
    vi.resetModules();
    const { newQuizIds } = await import('./progress');
    expect(newQuizIds(['a', 'b'])).toEqual(new Set(['b']));
    expect(newQuizIds(['a', 'b'])).toEqual(new Set(['b']));
  });
});
