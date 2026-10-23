import { playableQuizzes } from '../quizzes';
import { answerContributions, personalitiesFor, score, winners, type PersonalityWeight } from '../scoring';
import type { Quiz } from '../types';
import { animateDetails } from './details';
import { el } from './dom';
import { isComplete, loadProgress, saveProgress } from './progress';

/** Resolved by the router through `resumeHash`, from the first question, so a link to it is never stale. */
export const playHash = (quiz: Quiz) => `#/quiz/${quiz.id}`;
/** Question numbers in the URL start at 1. */
export const questionHash = (quiz: Quiz, index: number) => `#/quiz/${quiz.id}/${index + 1}`;
export const resultHash = (quiz: Quiz) => `#/quiz/${quiz.id}/result`;

/** The first unanswered question from `from` on, wrapping around to the start, or the result once there is none. */
export function resumeHash(quiz: Quiz, from = 0): string {
  const progress = loadProgress(quiz);
  const total = quiz.questions.length;
  for (let offset = 0; offset < total; offset++) {
    const index = (from + offset) % total;
    if (progress.answers[quiz.questions[index]!.id] === undefined) return questionHash(quiz, index);
  }
  return resultHash(quiz);
}

export function homeView(): Node {
  return el(
    'main',
    { class: 'page' },
    el('h1', { class: 'site-title' }, 'Quiz de personnalité'),
    el('p', { class: 'muted' }, 'Réponds honnêtement… ou pas. Puis compare avec tes ami·es.'),
    el(
      'ul',
      { class: 'quiz-list' },
      ...playableQuizzes.map((quiz) =>
        el(
          'li',
          {},
          el(
            'a',
            { class: 'card quiz-card', href: playHash(quiz) },
            el('span', { class: 'quiz-emoji', 'aria-hidden': 'true' }, quiz.emoji),
            el(
              'span',
              {},
              el('strong', {}, quiz.title),
              el('span', { class: 'muted' }, quiz.description),
              el('span', { class: 'meta' }, `${quiz.questions.length} questions · ${quiz.personalities.length} résultats possibles`),
              statusBadge(quiz),
            ),
          ),
        ),
      ),
    ),
  );
}

const TOP_MATCHES_SHOWN = 3;

/** Shows the top matches of a finished quiz, or how far along an unfinished one is. */
function statusBadge(quiz: Quiz): Node | '' {
  const progress = loadProgress(quiz);
  if (isComplete(quiz, progress)) {
    const ranking = score(quiz, progress.answers);
    const top = winners(ranking);
    // The top matches, and every personality tied for first even if that's more.
    return el(
      'span',
      { class: 'badges' },
      ...ranking.slice(0, Math.max(TOP_MATCHES_SHOWN, top.length)).map((s) =>
        el('span', { class: `badge${top.includes(s) ? ' done' : ''}` }, `${s.personality.emoji} ${s.personality.name} ${Math.round(100 * s.match)} %`),
      ),
    );
  }
  const answered = Object.keys(progress.answers).length;
  return answered > 0 ? el('span', { class: 'badges' }, el('span', { class: 'badge' }, `En cours · ${answered}/${quiz.questions.length}`)) : '';
}

export function notFoundView(): Node {
  return el('main', { class: 'page' }, el('h1', {}, 'Quiz introuvable'), el('a', { href: '#/' }, '← Retour aux quiz'));
}

/** Shows question `index`; each question has its own history entry, so the browser's back and forward buttons move between them. */
export function playView(quiz: Quiz, index: number): Node {
  const progress = loadProgress(quiz);
  const question = quiz.questions[index]!;
  const total = quiz.questions.length;
  // Goes to the next unanswered question, or the result once there is none. Only when changing an answer in a
  // finished quiz does it step to the next question instead, so the answers can be reviewed one by one.
  const choose = (answerId: string) => {
    const reviewing = isComplete(quiz, progress);
    progress.answers[question.id] = answerId;
    saveProgress(quiz, progress);
    location.hash = reviewing && index + 1 < total ? questionHash(quiz, index + 1) : resumeHash(quiz, index + 1);
  };

  return el(
    'main',
    { class: 'page' },
    el('a', { class: 'back-link', href: '#/' }, '← Tous les quiz'),
    el('p', { class: 'quiz-name' }, `${quiz.emoji} ${quiz.title}`),
    el(
      'nav',
      { class: 'progress', 'aria-label': 'Questions' },
      ...quiz.questions.map((q, i) => {
        const answered = progress.answers[q.id] !== undefined;
        const label = `Question ${i + 1}${answered ? ' (répondue)' : ''}`;
        const dot = el('a', { class: `progress-dot${answered ? ' answered' : ''}`, href: questionHash(quiz, i), 'aria-label': label, title: label });
        if (i === index) dot.setAttribute('aria-current', 'step');
        return dot;
      }),
      resultFlag(quiz, isComplete(quiz, progress)),
    ),
    el('p', { class: 'meta' }, `Question ${index + 1} / ${total}`),
    el('h1', { class: 'question' }, question.text),
    el(
      'div',
      { class: 'answers' },
      ...question.answers.map((answer) =>
        el(
          'button',
          { class: `card answer${progress.answers[question.id] === answer.id ? ' selected' : ''}`, type: 'button', onclick: () => choose(answer.id) },
          answer.text,
        ),
      ),
    ),
  );
}

/** Ends the row of question dots; opens the result once every question is answered. */
function resultFlag(quiz: Quiz, complete: boolean): Node {
  const label = complete ? 'Voir mon résultat' : 'Réponds à toutes les questions pour voir ton résultat';
  const flag = el('button', { class: 'progress-flag', type: 'button', 'aria-label': label, title: label, onclick: () => (location.hash = resultHash(quiz)) }, '🏁');
  if (!complete) flag.disabled = true;
  return flag;
}

function chips(weights: PersonalityWeight[]): Node {
  return el(
    'span',
    { class: 'chips' },
    ...weights.map(({ personality }) => el('span', { class: 'chip' }, `${personality.emoji} ${personality.name}`)),
  );
}

export function resultView(quiz: Quiz): Node {
  const progress = loadProgress(quiz);
  if (!isComplete(quiz, progress)) {
    location.replace(playHash(quiz));
    return document.createDocumentFragment();
  }
  const ranking = score(quiz, progress.answers);
  const top = winners(ranking);

  return el(
    'main',
    { class: 'page' },
    el('a', { class: 'back-link', href: '#/' }, '← Tous les quiz'),
    el('p', { class: 'quiz-name' }, `${quiz.emoji} ${quiz.title}`),
    el(
      'section',
      { class: 'card winner' },
      el('p', { class: 'meta' }, top.length > 1 ? 'Égalité ! Tu es à la fois…' : 'Tu es…'),
      ...top.map(({ personality }) =>
        el(
          'div',
          { class: 'winner-entry' },
          el('div', { class: 'winner-emoji', 'aria-hidden': 'true' }, personality.emoji),
          el('h1', {}, personality.name),
          el('p', {}, personality.description),
        ),
      ),
    ),
    el('h2', {}, 'Ta répartition'),
    el('p', { class: 'hint' }, 'Touche un personnage pour lire sa description.'),
    el(
      'ol',
      { class: 'ranking' },
      ...ranking.map(({ personality, match }, index) => {
        const percent = Math.round(100 * match);
        const isTop = top.some((s) => s.personality.id === personality.id);
        return el(
          'li',
          { style: `--index: ${index}` },
          animateDetails(
            el(
              'details',
              { class: `ranking-item${isTop ? ' top' : ''}` },
              el(
                'summary',
                { class: 'ranking-row' },
                el('span', { class: 'ranking-emoji', 'aria-hidden': 'true' }, personality.emoji),
                el('span', { class: 'ranking-name' }, personality.name),
                el('span', { class: 'bar' }, el('span', { class: 'bar-fill', style: `width: ${percent}%` })),
                el('span', { class: 'ranking-percent' }, `${percent} %`),
                el('span', { class: 'chevron', 'aria-hidden': 'true' }),
              ),
              el('p', { class: 'ranking-description' }, personality.description),
            ),
          ),
        );
      }),
    ),
    el('h2', {}, 'Tes réponses'),
    el('p', { class: 'hint' }, 'Touche une question pour revoir toutes les réponses possibles.'),
    el(
      'ol',
      { class: 'recap' },
      ...answerContributions(quiz, progress.answers).map(({ question, answer, toward }, index) =>
        el(
          'li',
          {},
          animateDetails(
            el(
              'details',
              { class: 'card recap-item' },
              el(
                'summary',
                {},
                el(
                  'div',
                  { class: 'recap-head' },
                  el('span', { class: 'recap-number' }, String(index + 1)),
                  el('p', { class: 'recap-question' }, question.text),
                  el('span', { class: 'chevron', 'aria-hidden': 'true' }),
                ),
                el('p', { class: 'recap-answer' }, answer.text),
                toward.length > 0 && chips(toward.slice(0, 3)),
              ),
              el(
                'ul',
                { class: 'all-answers' },
                ...question.answers.map((option) => {
                  const weights = personalitiesFor(quiz, option);
                  return el(
                    'li',
                    { class: option.id === answer.id ? 'chosen' : '' },
                    el('p', {}, option.text),
                    weights.length > 0 && chips(weights),
                  );
                }),
              ),
            ),
          ),
        ),
      ),
    ),
    el(
      'div',
      { class: 'actions' },
      // Keeps the answers, so you can confirm or change each one.
      el('a', { class: 'button secondary', href: questionHash(quiz, 0) }, 'Refaire le quiz'),
      el('a', { class: 'button', href: '#/' }, 'Autres quiz'),
    ),
  );
}
