import { elements } from './data/quizzes/elements';
import { minecraftMobs } from './data/quizzes/minecraft-mobs';
import type { Quiz } from './types';

export const quizzes: Quiz[] = [minecraftMobs, elements];

export function findQuiz(id: string): Quiz | undefined {
  return quizzes.find((q) => q.id === id);
}
