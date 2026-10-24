/** How much an answer corresponds to each personality, in [0, 1]. Missing personalities count as 0. */
export type Weights = Record<string, number>;

export interface Answer {
  id: string;
  text: string;
  weights: Weights;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
}

export interface Personality {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

export interface Quiz {
  id: string;
  title: string;
  emoji: string;
  description: string;
  /** When the quiz went live on the deployed site, as YYYY-MM-DDTHH:MM in French time. Without it the quiz is only in `npm run dev`. */
  released?: string;
  personalities: Personality[];
  questions: Question[];
}

/** Chosen answer id, keyed by question id. */
export type Answers = Record<string, string>;
