import { score, weightOf, winners } from './scoring';
import type { Answers, Question, Quiz } from './types';

/** A question only steadies a personality's score if its answers differ by at least this much for it. */
const MIN_WEIGHT_SPREAD = 0.5;
/** Share of the questions that must weigh on each personality. Fewer make its score swing, so it wins more often than it should. */
const MIN_COVERAGE = 0.5;

export function weighsOn(question: Question, personalityId: string): boolean {
  const weights = question.answers.map((a) => weightOf(a, personalityId));
  return Math.max(...weights) - Math.min(...weights) >= MIN_WEIGHT_SPREAD;
}

function duplicates(ids: string[]): string[] {
  return [...new Set(ids.filter((id, i) => ids.indexOf(id) !== i))];
}

/**
 * The answers that favor `personalityId` the most: its best answer on every question,
 * breaking ties by whichever gives the other personalities the least.
 */
export function bestAnswersFor(quiz: Quiz, personalityId: string): Answers {
  const answers: Answers = {};
  for (const question of quiz.questions) {
    const othersTotal = (a: (typeof question.answers)[number]) =>
      quiz.personalities.filter((p) => p.id !== personalityId).reduce((sum, p) => sum + weightOf(a, p.id), 0);
    const best = [...question.answers].sort(
      (a, b) => weightOf(b, personalityId) - weightOf(a, personalityId) || othersTotal(a) - othersTotal(b),
    )[0];
    if (best) answers[question.id] = best.id;
  }
  return answers;
}

/** Returns a list of human-readable problems; empty means the quiz is valid. */
export function validateQuiz(quiz: Quiz): string[] {
  const errors: string[] = [];
  const at = (where: string, message: string) => errors.push(`${quiz.id} > ${where}: ${message}`);

  const personalityIds = quiz.personalities.map((p) => p.id);
  for (const id of duplicates(personalityIds)) at('personalities', `duplicate id "${id}"`);
  for (const id of duplicates(quiz.questions.map((q) => q.id))) at('questions', `duplicate id "${id}"`);
  if (quiz.personalities.length < 2) at('personalities', 'needs at least 2 personalities');
  if (quiz.questions.length === 0) at('questions', 'needs at least 1 question');

  for (const question of quiz.questions) {
    if (question.answers.length < 2) at(question.id, 'needs at least 2 answers');
    for (const id of duplicates(question.answers.map((a) => a.id))) at(question.id, `duplicate answer id "${id}"`);
    for (const answer of question.answers) {
      for (const [personalityId, weight] of Object.entries(answer.weights)) {
        if (!personalityIds.includes(personalityId)) at(`${question.id}.${answer.id}`, `unknown personality "${personalityId}"`);
        if (!(weight >= 0 && weight <= 1)) at(`${question.id}.${answer.id}`, `weight ${weight} for "${personalityId}" is outside [0, 1]`);
      }
    }
  }
  // The checks below score the quiz, which assumes the structure above is sound.
  if (errors.length > 0) return errors;

  const requiredCoverage = Math.ceil(MIN_COVERAGE * quiz.questions.length);
  for (const personality of quiz.personalities) {
    const coverage = quiz.questions.filter((q) => weighsOn(q, personality.id)).length;
    if (coverage < requiredCoverage) {
      at(personality.id, `weighted on only ${coverage}/${quiz.questions.length} questions, needs ${requiredCoverage} (an answer weighing at least ${MIN_WEIGHT_SPREAD} more than another)`);
    }
    const ranking = score(quiz, bestAnswersFor(quiz, personality.id));
    const own = ranking.find((s) => s.personality.id === personality.id);
    if (own && own.max - own.min <= 0) {
      at(personality.id, 'no question tells this personality apart (every answer gives it the same weight)');
      continue;
    }
    const top = winners(ranking);
    if (!top.some((s) => s.personality.id === personality.id)) {
      at(personality.id, `can never win: even its best answers make ${top.map((s) => s.personality.id).join(', ')} win`);
    } else if (top.length > 1) {
      at(personality.id, `can only ever tie with ${top.filter((s) => s.personality.id !== personality.id).map((s) => s.personality.id).join(', ')}`);
    }
  }
  return errors;
}

export function validateQuizzes(quizzes: Quiz[]): string[] {
  const errors = duplicates(quizzes.map((q) => q.id)).map((id) => `duplicate quiz id "${id}"`);
  return errors.concat(quizzes.flatMap(validateQuiz));
}
