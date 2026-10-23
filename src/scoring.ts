import type { Answer, Answers, Personality, Question, Quiz } from './types';

const EPSILON = 1e-9;

export interface PersonalityScore {
  personality: Personality;
  /** Sum of the chosen answers' weights. */
  raw: number;
  /** Lowest and highest raw score reachable over the answered questions. */
  min: number;
  max: number;
  /** `raw` rescaled to [0, 1] between `min` and `max`: the "% match". */
  match: number;
}

export function weightOf(answer: Answer, personalityId: string): number {
  return answer.weights[personalityId] ?? 0;
}

function chosenAnswer(question: Question, answers: Answers): Answer | undefined {
  const answerId = answers[question.id];
  if (answerId === undefined) return undefined;
  const answer = question.answers.find((a) => a.id === answerId);
  if (!answer) throw new Error(`Unknown answer "${answerId}" for question "${question.id}"`);
  return answer;
}

/**
 * Scores every personality over the answered questions, best match first.
 * Normalizing per personality keeps one that was given generous weights overall from winning by default.
 */
export function score(quiz: Quiz, answers: Answers): PersonalityScore[] {
  const scores = quiz.personalities.map((personality): PersonalityScore => {
    let raw = 0;
    let min = 0;
    let max = 0;
    for (const question of quiz.questions) {
      const answer = chosenAnswer(question, answers);
      if (!answer) continue;
      const weights = question.answers.map((a) => weightOf(a, personality.id));
      raw += weightOf(answer, personality.id);
      min += Math.min(...weights);
      max += Math.max(...weights);
    }
    const match = max - min > EPSILON ? (raw - min) / (max - min) : 0;
    return { personality, raw, min, max, match };
  });
  return scores.sort((a, b) => b.match - a.match);
}

/** The top of a ranking, with every personality tied for first. */
export function winners(ranking: PersonalityScore[]): PersonalityScore[] {
  const best = ranking[0]?.match ?? 0;
  return ranking.filter((s) => best - s.match < EPSILON);
}

export interface PersonalityWeight {
  personality: Personality;
  weight: number;
}

export interface AnswerContribution {
  question: Question;
  answer: Answer;
  /** Personalities this answer pushed toward, strongest first. */
  toward: PersonalityWeight[];
}

/** Personalities an answer pushes toward, strongest first. */
export function personalitiesFor(quiz: Quiz, answer: Answer): PersonalityWeight[] {
  return quiz.personalities
    .map((personality) => ({ personality, weight: weightOf(answer, personality.id) }))
    .filter((w) => w.weight > 0)
    .sort((a, b) => b.weight - a.weight);
}

export function answerContributions(quiz: Quiz, answers: Answers): AnswerContribution[] {
  return quiz.questions.flatMap((question) => {
    const answer = chosenAnswer(question, answers);
    return answer ? [{ question, answer, toward: personalitiesFor(quiz, answer) }] : [];
  });
}

/**
 * How alike two results are, in [0, 1]: the correlation of their match profiles, rescaled from [-1, 1].
 * Two people who answer differently but land on similar personalities still come out compatible.
 * Random pairs of players center around 0.5, so the full range gets used.
 */
export function compatibility(a: PersonalityScore[], b: PersonalityScore[]): number {
  const bMatches = new Map(b.map((s) => [s.personality.id, s.match]));
  const xs = a.map((s) => s.match);
  const ys = a.map((s) => bMatches.get(s.personality.id) ?? 0);
  const mean = (values: number[]) => values.reduce((sum, v) => sum + v, 0) / values.length;
  const mx = mean(xs);
  const my = mean(ys);
  let covariance = 0;
  let vx = 0;
  let vy = 0;
  for (const [i, x] of xs.entries()) {
    const y = ys[i]!;
    covariance += (x - mx) * (y - my);
    vx += (x - mx) ** 2;
    vy += (y - my) ** 2;
  }
  // A flat profile has no shape to compare with.
  if (vx < EPSILON || vy < EPSILON) return 0.5;
  return (covariance / Math.sqrt(vx * vy) + 1) / 2;
}
