# Personality quiz

Static Vite + TypeScript site, no backend. Each quiz is a self-contained file in `src/data/quizzes/`, registered in `src/quizzes.ts`.

## Commands

- `npm run dev`: local site
- `npm test`: scoring tests + validation of every quiz
- `npm run balance`: win frequency per personality over random playthroughs (informational)
- `npm run build`: typecheck + static build into `dist/`

Every push to `main` deploys the site to GitHub Pages (`.github/workflows/deploy.yml`). A quiz with `hidden: true` stays off the deployed site but is listed in `npm run dev`.

## Committing (Claude)

In this repo Claude commits and pushes itself, but only once the user has validated the changes, since every push goes live.

## Conventions

- Code is English only, with American spelling (identifiers, ids, file names, comments). Only user-facing text is French.
- User-facing French is inclusive everywhere, with no exception: never default to the masculine for the player or for unspecified people. Prefer neutral wording ("les personnes qui…", "ton équipe"), "iel" for il/elle and "le.a" for le/la, otherwise use the point médian (`ami·e`, `ami·es`, `fort·es`).
- Don't reuse a question, or a close variant of its situation, from another quiz: people play them all and each quiz should feel fresh. Reuse is only acceptable between quizzes released about a month apart. `docs/question-ideas.md` is the pool of unscored ideas.

## Writing questions

- No redundancy: two questions in a quiz must not ask the same thing, and two answers must not say the same thing in other words.
- Each answer reveals a real personality trait, and it only weighs on personalities whose description has that trait. No coincidental matches (likes fish → cat).
- Answers must not give away the personality they point at. Describe how a person behaves, not the personality's signature trait or mechanic (no explosion for the creeper, no fire for the fire element).
- Question order is the play order: spread themed questions through the quiz and alternate categories rather than grouping them.
- A question doesn't need an answer for every personality: write the answers the situation naturally calls for, and let coverage come from the quiz as a whole.
- Answers cover a wide spectrum, so everyone finds one that fits. Cover it with real answers first (up to about 7; 10 is too many). Add an escape hatch only when a common reaction would otherwise be missing (e.g. "Franchement, tu ne te mets presque jamais en colère."), not by default.

## Writing weights

A personality's score is `(raw - min) / (max - min)`, computed only over the questions where that personality has a weight. That has consequences that aren't obvious:

- A personality weighted on few questions swings harder and wins *more* often, not less. So validation requires each personality to be weighted on at least half the questions, where "weighted" means one answer gives it at least 0.5 more than another. Making one rare means giving its answers secondary weights for other personalities too, so it only wins when picked consistently.
- Weights are in [0, 1]. Negative weights would add nothing: adding the same amount to every answer of a question for one personality doesn't change its score, so "−0.5 on this answer" equals "+0.5 on all the others".
- Check `npm run balance` after editing weights. Rare personalities are fine if intended.
- Never move or add a weight just to fix the balance: every weight must still match a trait in that personality's description. Rebalance by finding answers that genuinely fit an under-represented personality.
