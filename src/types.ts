export type Category =
  | 'funny'
  | 'introspection'
  | 'dilemma'
  | 'absurd-scenario'
  | 'social'
  | 'stress'
  | 'aesthetic'
  | 'habits'
  | 'values'
  | 'nostalgia'
  | 'themed';

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
  category: Category;
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
  /** Not listed or playable on the deployed site yet; still available in `npm run dev`. */
  hidden?: boolean;
  personalities: Personality[];
  questions: Question[];
}

/** Chosen answer id, keyed by question id. */
export type Answers = Record<string, string>;
