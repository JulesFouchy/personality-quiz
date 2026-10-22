// Simulates random playthroughs of every quiz and prints how often each personality wins.
// Informational only: rare personalities are fine, this just makes rarity a choice rather than an accident.
// Real people don't answer uniformly at random, so treat the numbers as a rough indicator.
import { quizzes } from '../src/quizzes';
import { score, winners } from '../src/scoring';
import type { Answers } from '../src/types';
import { weighsOn } from '../src/validate';

const PLAYTHROUGHS = 20_000;

// Seeded so two runs on the same data print the same numbers.
function mulberry32(seed: number): () => number {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

for (const quiz of quizzes) {
  const random = mulberry32(42);
  const wins = new Map(quiz.personalities.map((p) => [p.id, 0]));
  for (let i = 0; i < PLAYTHROUGHS; i++) {
    const answers: Answers = {};
    for (const question of quiz.questions) {
      answers[question.id] = question.answers[Math.floor(random() * question.answers.length)]!.id;
    }
    // A tie splits the win between the co-winners.
    const top = winners(score(quiz, answers));
    for (const s of top) wins.set(s.personality.id, wins.get(s.personality.id)! + 1 / top.length);
  }

  console.log(`\n${quiz.emoji} ${quiz.title} (${PLAYTHROUGHS} random playthroughs, fair share ${(100 / quiz.personalities.length).toFixed(1)} %)`);
  const rows = quiz.personalities
    .map((p) => ({
      name: `${p.emoji} ${p.name}`,
      winRate: (100 * wins.get(p.id)!) / PLAYTHROUGHS,
      coverage: quiz.questions.filter((q) => weighsOn(q, p.id)).length,
    }))
    .sort((a, b) => b.winRate - a.winRate);
  for (const row of rows) {
    const bar = '█'.repeat(Math.round(row.winRate / 2));
    console.log(`  ${row.name.padEnd(18)} ${row.winRate.toFixed(1).padStart(5)} %  ${bar.padEnd(25)} weighted on ${row.coverage}/${quiz.questions.length} questions`);
  }
}
