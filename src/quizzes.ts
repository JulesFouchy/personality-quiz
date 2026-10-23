import { cables } from './data/quizzes/cables';
import { fileFormats } from './data/quizzes/file-formats';
import { frenchSongs } from './data/quizzes/french-songs';
import { lolChampions } from './data/quizzes/lol-champions';
import { minecraftMobs } from './data/quizzes/minecraft-mobs';
import { sports } from './data/quizzes/sports';
import { villains } from './data/quizzes/villains';
import { vegetables } from './data/quizzes/vegetables';
import { zodiac } from './data/quizzes/zodiac';
import type { Quiz } from './types';

/** Every quiz, hidden ones included, so tests and the balance report cover them all. */
export const quizzes: Quiz[] = [minecraftMobs, lolChampions, zodiac, sports, vegetables, fileFormats, cables, frenchSongs, villains];

/** The quizzes players can see and play. */
export const playableQuizzes: Quiz[] = import.meta.env?.DEV ? quizzes : quizzes.filter((q) => !q.hidden);

export function findQuiz(id: string): Quiz | undefined {
  return playableQuizzes.find((q) => q.id === id);
}
