# Personality quiz

Static Vite + TypeScript site, no backend. Each quiz is a self-contained file in `src/data/quizzes/`, registered in `src/quizzes.ts`.

## Commands

- `npm run dev`: local site
- `npm test`: unit tests + validation of every quiz
- `npm run balance`: win frequency per personality over random playthroughs (informational)
- `npm run share-layouts`: archive the question and answer ids of every released quiz, so its share links survive edits
- `npm run build`: typecheck + static build into `dist/`

Every push to `main` deploys the site to GitHub Pages (`.github/workflows/deploy.yml`). A quiz without a `released` date stays off the deployed site but is listed in `npm run dev`. Quizzes are prepared in advance and pushed unreleased; only the user decides when one is released, by giving it the date and time of the release in French time as `released` (`2026-10-24T14:00`), so quizzes released the same day are ordered too. The home page lists the quizzes a player hasn't finished latest release first.

Share links (`src/share.ts`) store each answer's position plus a fingerprint of the question and answer ids. Every layout a released quiz has had is archived in `src/data/share-layouts.json`, so links shared before an edit still decode and are rescored on the current version. After adding, removing, reordering or renaming questions or answers of a released quiz, run `npm run share-layouts` (the tests fail until then). Old links lose their answer to a removed or renamed question or answer; editing texts and weights is safe. Saved progress remembers which answers each question had when the player answered it, so a question that gains, loses or renames an answer, or a new question, is shown to returning players as changed (`changedQuestions` in `src/ui/progress.ts`). Ids are the only thing tracked, so when rewording a released question or answer changes what it means, give it a new id. Old links then drop that answer and returning players see the question as changed. Keep the id when the meaning stays the same. A result page's URL is its share link (`src/routes.ts`).

URLs are real paths, and the build gives each route of a released quiz its own copy of the page with that quiz's link preview (`scripts/share-previews.ts`); a result page's path names its top match, whose card the preview shows. A path without its own page (an unreleased quiz, a renamed personality) falls back to `404.html`: the app, with the default preview.

## Committing (Claude)

In this repo Claude commits and pushes itself, but only once the user has validated the changes, since every push goes live. Commit messages never include a "Co-Authored-By" (or any other attribution) trailer.

## Conventions

- Code is English only, with American spelling (identifiers, ids, file names, comments). Only user-facing text is French.
- User-facing French is inclusive everywhere: never default to the masculine for the player or for unspecified people. The only exception is a noun naming the quiz's category of things, which keeps its grammatical gender like any other noun ("Quel champion de LoL es-tu ?", as "Quel légume es-tu ?"). Prefer neutral wording ("les personnes qui…", "ton équipe"), "iel" for il/elle and "le·la" for le/la, otherwise use the point médian (`ami·e`, `ami·es`, `fort·es`). Always the point médian (·): never a period, and never "X ou Y" pairs (`ton·ta`, `le·la`, `chez ellui`, not "ton ou ta", "le ou la", "chez lui ou chez elle"). Use the established inclusive form for each word (e.g. "iel" as subject, "ellui" after a preposition) and look it up when unsure.
- Use the typographic apostrophe (’) in user-facing French.
- Write plain spaces before `? ! : ; %` and inside « »: `el()` in `src/ui/dom.ts` makes them non-breaking when the text is displayed.
- A quiz's `description` is a witty, original hook, not a stock "Découvre le X qui te ressemble" ("Petit pois, piment ou pomme de terre ? Découvre en quel légume tu pourrais te réincarner.").
- Names from a game, show or other franchise use their official French name, checked against an official French source (e.g. the French Minecraft wiki), never translated by guess ("Poulpe luisant", not "Calamar luisant"). Keep the original name when the French version does too (Phantom, Piglin, LoL champions).
- A personality description states its main traits, plus whatever witty or telling details are worth adding. Never pad it to make it longer, and cut any sentence that restates a trait in other words.
- Don't reuse a question, or a close variant of its situation, from another quiz: people play them all and each quiz should feel fresh. Reuse is only acceptable between quizzes released about a month apart; unreleased quizzes count, since their release order isn't known yet. `docs/question-ideas.md` is the pool of unscored ideas.

## Writing questions

- Write each question spectrum first: list the realistic range of reactions to the situation, write those answers, and only then map each answer to the personalities whose traits fit it (often several, sometimes none). Don't write one answer per personality; a few tailored answers are fine, a whole question of them is not.
- No redundancy: two questions in a quiz must not ask the same thing, and two answers must not say the same thing in other words.
- Don't bundle two independent claims a player might not both recognize ("Les jeux de société, et tu gagnais presque toujours" misses someone who loved board games without always winning). A package that reads as one recognizable kind of person is fine and gives flavor ("La personne qui critique tout, mais qui a souvent raison"). Keep the flavor by adding color to the single claim rather than a second claim.
- No recognizable patterns: a personality's answers must not share wording or a recurring device across questions ("encore et encore", "cent fois", "dix fois"…), or players learn which answer leads where. Use different facets of its traits instead.
- Each answer reveals a real personality trait, and it only weighs on personalities that have it, stated in their description or clearly implied by it (someone who wants to owe nobody anything pays their own share at the restaurant). No coincidental matches (likes fish → cat).
- Answers must not give away the personality they point at. Describe how a person behaves, not the personality's signature trait or mechanic (no explosion for the creeper, no fire for the fire element). Keep answers plain and short, and don't append the reason behind the behavior ("Cours partout, juste pour le plaisir de bouger"): that tail usually restates the description and points straight at the personality.
- When every answer of a question starts with the same words, move them into the question: "Au volant, tu es la personne qui…" with "Change de file sans clignotant.", not "Qui change de file…" in every answer. Answers that are full sentences on their own can keep their "Tu" ("Un secret que tu caches :").
- Question order is the play order: spread the questions about the quiz's theme through the quiz, and alternate kinds of questions (funny, introspection, dilemma, social, stress, nostalgia…) rather than grouping them.
- A quiz has 10 to 20 questions (tested); both ends should be rare. Vary the length between quizzes.
- A question doesn't need an answer for every personality: write the answers the situation naturally calls for, and let coverage come from the quiz as a whole. Answer counts should vary: some questions with 3 or 4 answers, a few with 6 or 7. Many personalities make that hard, so prefer fewer personalities over cramming answers.
- Answers cover a wide spectrum, so everyone finds one that fits. Cover it with real answers first (up to about 7; 10 is too many). Add an escape hatch only when a common reaction would otherwise be missing (e.g. "Franchement, tu ne te mets presque jamais en colère."), not by default. An escape hatch is defined by the reaction it covers, not by its weights: like every answer, it must weigh on at least one personality whose traits fit it (tested), since an answer with no weight looks like a bug in the results recap. A common reaction no personality fits needs rewording until one does, or dropping.
- An escape hatch, or any answer that rejects the question's premise ("Aucune, merci." to "Choisis ta musique d’entrée."), comes last.

## Writing weights

A personality's score is `(raw - min) / (max - min)`, computed only over the questions where that personality has a weight. That has consequences that aren't obvious:

- A personality weighted on few questions swings harder and wins *more* often, not less. Validation checks the outcome directly: in seeded random playthroughs each personality must win between 0.5× and 1.6× its fair share. It also requires each personality to be weighted on at least a third of the questions ("weighted": one answer gives it at least 0.5 more than another), so no result is decided by a handful of answers.
- Making a personality rarer means giving its answers secondary weights for other personalities too, so it only wins when picked consistently.
- Weights are in [0, 1]. Negative weights would add nothing: adding the same amount to every answer of a question for one personality doesn't change its score, so "−0.5 on this answer" equals "+0.5 on all the others".
- `npm run balance` shows each personality's win rate, coverage, and how many answers point mainly at it.
- Never move or add a weight just to fix the balance: every weight must still fit the personality as its description portrays it. Rebalance by finding answers that genuinely fit an under-represented personality.
