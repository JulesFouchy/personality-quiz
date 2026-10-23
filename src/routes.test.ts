import { describe, expect, it } from 'vitest';
import { parseRoute, questionPath, quizPath, resultHash, resultPath } from './routes';

describe('parseRoute', () => {
  it('reads the paths it builds', () => {
    expect(parseRoute('', '')).toEqual({ page: 'home' });
    expect(parseRoute(quizPath('zodiac'), '')).toEqual({ page: 'quiz', quizId: 'zodiac' });
    expect(parseRoute(questionPath('zodiac', 2), '')).toEqual({ page: 'question', quizId: 'zodiac', number: 3 });
    expect(parseRoute(resultPath('zodiac'), '')).toEqual({ page: 'result', quizId: 'zodiac' });
  });

  it('reads a result and its sender from the hash, whatever the personality in the path', () => {
    const shared = { code: '0123-abcd', name: 'Léa / Jules' };
    expect(parseRoute(resultPath('zodiac', 'aries'), resultHash(shared))).toEqual({ page: 'result', quizId: 'zodiac', shared });
    expect(parseRoute(resultPath('zodiac'), resultHash({ code: '0123-abcd', name: '' }))).toEqual({
      page: 'result',
      quizId: 'zodiac',
      shared: { code: '0123-abcd', name: '' },
    });
  });

  it('drops a garbled name', () => {
    expect(parseRoute(resultPath('zodiac', 'aries'), '#0123-abcd/%E0%A4%A')).toMatchObject({ shared: { code: '0123-abcd', name: '' } });
  });

  it('sends unknown paths home or to the quiz', () => {
    expect(parseRoute('assets/x.js', '')).toEqual({ page: 'home' });
    expect(parseRoute('quiz/zodiac/what/ever', '')).toEqual({ page: 'quiz', quizId: 'zodiac' });
  });
});
