# Personality quiz

Static Vite + TypeScript site, no backend. Each quiz is a self-contained file in `src/data/quizzes/`, registered in `src/quizzes.ts`.

## Commands

- `npm run dev`: local site
- `npm test`: scoring tests + validation of every quiz
- `npm run balance`: win frequency per personality over random playthroughs (informational)
- `npm run build`: typecheck + static build into `dist/`

Every push to `main` deploys the site to GitHub Pages (`.github/workflows/deploy.yml`). A quiz with `hidden: true` stays off the deployed site but is listed in `npm run dev`. Quizzes are prepared in advance and pushed hidden; only the user decides when one is released by removing `hidden`.

Share links (`src/share.ts`) store each answer's position plus a fingerprint of the question and answer ids. On a released quiz, adding, removing, reordering or renaming questions or answers turns every link already shared into "Lien périmé"; editing texts and weights is safe. Links open a preview page generated per personality at build time (`scripts/share-previews.ts`), so renaming a personality id breaks the links that point to it.

## Committing (Claude)

In this repo Claude commits and pushes itself, but only once the user has validated the changes, since every push goes live. Commit messages never include a "Co-Authored-By" (or any other attribution) trailer.

## Conventions

- Code is English only, with American spelling (identifiers, ids, file names, comments). Only user-facing text is French.
- User-facing French is inclusive everywhere, with no exception: never default to the masculine for the player or for unspecified people. Prefer neutral wording ("les personnes qui…", "ton équipe"), "iel" for il/elle and "la·le" for le/la, otherwise use the point médian (`ami·e`, `ami·es`, `fort·es`). Always the point médian (·): never a period, and never "X ou Y" pairs (`ton·ta`, `la·le`, `chez ellui`, not "ton ou ta", "le ou la", "chez lui ou chez elle"). Use the established inclusive form for each word (e.g. "iel" as subject, "ellui" after a preposition) and look it up when unsure.
- Use the typographic apostrophe (’) in user-facing French.
- Write plain spaces before `? ! : ; %` and inside « »: `el()` in `src/ui/dom.ts` makes them non-breaking when the text is displayed.
- A quiz's `description` is a witty, original hook, not a stock "Découvre le X qui te ressemble" ("Petit pois, piment ou pomme de terre ? Découvre en quel légume tu pourrais te réincarner.").
- Names from a game, show or other franchise use their official French name, checked against an official French source (e.g. the French Minecraft wiki), never translated by guess ("Poulpe luisant", not "Calamar luisant"). Keep the original name when the French version does too (Phantom, Piglin, LoL champions).
- Personality descriptions can be long: put in every witty or telling detail about the personality rather than trimming to the bare traits.
- Don't reuse a question, or a close variant of its situation, from another quiz: people play them all and each quiz should feel fresh. Reuse is only acceptable between quizzes released about a month apart; hidden quizzes count, since their release order isn't known yet. `docs/question-ideas.md` is the pool of unscored ideas.

## Writing questions

- Write each question spectrum first: list the realistic range of reactions to the situation, write those answers, and only then map each answer to the personalities whose traits fit it (often several, sometimes none). Don't write one answer per personality; a few tailored answers are fine, a whole question of them is not.
- No redundancy: two questions in a quiz must not ask the same thing, and two answers must not say the same thing in other words.
- Don't bundle two independent claims a player might not both recognize ("Les jeux de société, et tu gagnais presque toujours" misses someone who loved board games without always winning). A package that reads as one recognizable kind of person is fine and gives flavor ("La personne qui critique tout, mais qui a souvent raison"). Keep the flavor by adding color to the single claim rather than a second claim.
- No recognizable patterns: a personality's answers must not share wording or a recurring device across questions ("encore et encore", "cent fois", "dix fois"…), or players learn which answer leads where. Use different facets of its traits instead.
- Each answer reveals a real personality trait, and it only weighs on personalities whose description has that trait. No coincidental matches (likes fish → cat).
- Answers must not give away the personality they point at. Describe how a person behaves, not the personality's signature trait or mechanic (no explosion for the creeper, no fire for the fire element). Keep answers plain and short, and don't append the reason behind the behavior ("Cours partout, juste pour le plaisir de bouger"): that tail usually restates the description and points straight at the personality.
- Question order is the play order: spread themed questions through the quiz and alternate categories rather than grouping them.
- A quiz has 10 to 20 questions (tested); both ends should be rare. Vary the length between quizzes.
- A question doesn't need an answer for every personality: write the answers the situation naturally calls for, and let coverage come from the quiz as a whole. Answer counts should vary: some questions with 3 or 4 answers, a few with 6 or 7. Many personalities make that hard, so prefer fewer personalities over cramming answers.
- Answers cover a wide spectrum, so everyone finds one that fits. Cover it with real answers first (up to about 7; 10 is too many). Add an escape hatch only when a common reaction would otherwise be missing (e.g. "Franchement, tu ne te mets presque jamais en colère."), not by default. An escape hatch is defined by the reaction it covers, not by its weights: like every answer, it must weigh on at least one personality whose traits fit it (tested), since an answer with no weight looks like a bug in the results recap. A common reaction no personality fits needs rewording until one does, or dropping.

## Writing weights

A personality's score is `(raw - min) / (max - min)`, computed only over the questions where that personality has a weight. That has consequences that aren't obvious:

- A personality weighted on few questions swings harder and wins *more* often, not less. Validation checks the outcome directly: in seeded random playthroughs each personality must win between 0.5× and 1.6× its fair share. It also requires each personality to be weighted on at least a third of the questions ("weighted": one answer gives it at least 0.5 more than another), so no result is decided by a handful of answers.
- Making a personality rarer means giving its answers secondary weights for other personalities too, so it only wins when picked consistently.
- Weights are in [0, 1]. Negative weights would add nothing: adding the same amount to every answer of a question for one personality doesn't change its score, so "−0.5 on this answer" equals "+0.5 on all the others".
- `npm run balance` shows each personality's win rate, coverage, and how many answers point mainly at it.
- Never move or add a weight just to fix the balance: every weight must still match a trait in that personality's description. Rebalance by finding answers that genuinely fit an under-represented personality.
