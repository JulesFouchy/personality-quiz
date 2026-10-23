import { score, weightOf, winners } from './scoring';
import type { Answers, Quiz } from './types';

// Seeded so two runs on the same data give the same numbers.
function mulberry32(seed: number): () => number {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Share of random playthroughs each personality wins, keyed by personality id; a tie splits the win.
 * Real people don't answer uniformly at random, so this is an estimate of fairness, not a prediction.
 */
export function winRates(quiz: Quiz, playthroughs: number): Map<string, number> {
  const random = mulberry32(42);
  const wins = new Map(quiz.personalities.map((p) => [p.id, 0]));
  for (let i = 0; i < playthroughs; i++) {
    const answers: Answers = {};
    for (const question of quiz.questions) {
      answers[question.id] = question.answers[Math.floor(random() * question.answers.length)]!.id;
    }
    const top = winners(score(quiz, answers));
    for (const s of top) wins.set(s.personality.id, wins.get(s.personality.id)! + 1 / top.length);
  }
  return new Map([...wins].map(([id, count]) => [id, count / playthroughs]));
}

/** How many answers point mainly at this personality: it has the answer's highest weight, at least 0.5. */
export function mainAnswerCount(quiz: Quiz, personalityId: string): number {
  return quiz.questions
    .flatMap((q) => q.answers)
    .filter((answer) => {
      const own = weightOf(answer, personalityId);
      return own >= 0.5 && quiz.personalities.every((p) => weightOf(answer, p.id) <= own);
    }).length;
}
