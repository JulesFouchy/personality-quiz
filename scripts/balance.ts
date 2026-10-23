// Prints how often each personality wins random playthroughs of every quiz, and how many answers point mainly at it.
// The tests already enforce the allowed win-rate range; this shows the detail while writing weights.
import { mainAnswerCount, winRates } from '../src/balance';
import { quizzes } from '../src/quizzes';
import { weighsOn } from '../src/validate';

const PLAYTHROUGHS = 20_000;

for (const quiz of quizzes) {
  const rates = winRates(quiz, PLAYTHROUGHS);
  console.log(`
${quiz.emoji} ${quiz.title} (${PLAYTHROUGHS} random playthroughs, fair share ${(100 / quiz.personalities.length).toFixed(1)} %)`);
  const rows = quiz.personalities
    .map((p) => ({
      name: `${p.emoji} ${p.name}`,
      winRate: 100 * rates.get(p.id)!,
      coverage: quiz.questions.filter((q) => weighsOn(q, p.id)).length,
      mainAnswers: mainAnswerCount(quiz, p.id),
    }))
    .sort((a, b) => b.winRate - a.winRate);
  const nameWidth = Math.max(...rows.map((row) => row.name.length));
  for (const row of rows) {
    const bar = '█'.repeat(Math.round(row.winRate / 2));
    console.log(
      `  ${row.name.padEnd(nameWidth)}${row.winRate.toFixed(1).padStart(5)} %  ${bar.padEnd(25)} weighted on ${row.coverage}/${quiz.questions.length} questions, main answer of ${row.mainAnswers}`,
    );
  }
}
