---
description: Create a new personality quiz, from the personality list to a validated, hidden quiz file
argument-hint: <quiz title, e.g. "Quel Pokémon es-tu ?">
---

Create the quiz: $ARGUMENTS

Follow every rule in CLAUDE.md ("Conventions", "Writing questions", "Writing weights"). The steps below are the order to work in.

1. **Agree on the personalities first.** Let the theme set the count: a closed set keeps its natural size (the five senses, the four elements), an open theme gets as many as stay clearly distinct, usually around 8 to 12. Propose them with clearly distinct personalities, each with two or three traits and its official French name (checked against an official French source), and ask the user to confirm or change the list before writing anything else. Point out pairs that risk overlapping.
2. **Write the descriptions.** Each one is built from its traits, since answers may only weigh on personalities whose description has that trait. Check again for overlaps (two personalities that would score on the same answers) and differentiate them now rather than after the questions exist.
3. **Read the questions of every other quiz** in `src/data/quizzes/` and keep that list in mind: no question or close variant of its situation may be reused. `docs/question-ideas.md` has unused ideas.
4. **Write the questions**, mixing themed questions with everyday situations, in play order. For each one, list the realistic reactions first, then map them to personalities. Length varies between quizzes within 10 to 20 (both ends rare), depending on how much the theme has to say or just to offer different kinds of quizzes; say which you chose and why. Vary the number of answers per question too (see CLAUDE.md).
5. **Create the file** `src/data/quizzes/<id>.ts` with `hidden: true`, register it in `src/quizzes.ts`, and remove the idea from `docs/quiz-ideas.md` if it was listed there.
6. **Check it:** `npm test`, `npx tsc`, `npm run balance`. Fix validation errors; for balance, only change weights that genuinely fit a trait.
7. **Get an independent review.** Spawn a fresh agent (not a fork: it must not share your reasoning) and have it read CLAUDE.md, the new quiz file and the other quizzes, then go through every answer and report each violation of the "Conventions" and "Writing questions" rules: answers that give away a personality, coincidental matches, weights not backed by a trait in the description, redundant questions or answers, answers bundling two independent claims, wording or devices that recur across one personality's answers, questions written one-answer-per-personality instead of from the range of real reactions, questions reused from another quiz, non-inclusive wording, needless escape hatches, missing common reactions. Ask for the quoted answer, the rule, and a suggested fix. Apply the fixes you agree with, rerun step 6, and keep the ones you rejected for the report.
8. **Report and stop.** List the personalities, the questions, the balance numbers, any personality at the coverage minimum, and the review findings you didn't apply, with why. Don't commit yet: the user plays the quiz in `npm run dev` first. Once validated it's pushed still hidden; never remove `hidden` yourself.
