import { playableQuizzes } from '../quizzes';
import { answerContributions, personalitiesFor, score, winners, type PersonalityWeight } from '../scoring';
import type { Quiz } from '../types';
import { animateDetails } from './details';
import { el } from './dom';
import { isComplete, loadProgress, saveProgress } from './progress';

export const playHash = (quiz: Quiz) => `#/quiz/${quiz.id}`;
export const resultHash = (quiz: Quiz) => `#/quiz/${quiz.id}/result`;

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

export function playView(quiz: Quiz): Node {
  const progress = loadProgress(quiz);
  const root = el('main', { class: 'page' });

  const render = () => {
    const question = quiz.questions[progress.index];
    if (!question) {
      location.replace(resultHash(quiz));
      return;
    }
    const choose = (answerId: string) => {
      progress.answers[question.id] = answerId;
      progress.index += 1;
      saveProgress(quiz, progress);
      if (progress.index >= quiz.questions.length) location.hash = resultHash(quiz);
      else render();
    };
    const back = () => {
      progress.index -= 1;
      saveProgress(quiz, progress);
      render();
    };
    const total = quiz.questions.length;
    root.replaceChildren(
      el('a', { class: 'back-link', href: '#/' }, '← Tous les quiz'),
      el('p', { class: 'quiz-name' }, `${quiz.emoji} ${quiz.title}`),
      el(
        'div',
        { class: 'progress', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': total, 'aria-valuenow': progress.index },
        el('div', { class: 'progress-fill', style: `width: ${(100 * progress.index) / total}%` }),
      ),
      el('p', { class: 'meta' }, `Question ${progress.index + 1} / ${total}`),
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
      el(
        'div',
        { class: 'play-nav' },
        progress.index > 0 ? el('button', { class: 'link-button', type: 'button', onclick: back }, '← Question précédente') : '',
        isComplete(quiz, progress) ? el('a', { class: 'link-button', href: resultHash(quiz) }, 'Voir mon résultat →') : '',
      ),
    );
    window.scrollTo(0, 0);
  };

  render();
  return root;
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
  // Goes back to the first question but keeps the answers, so you can confirm or change each one.
  const restart = () => {
    saveProgress(quiz, { ...progress, index: 0 });
    location.hash = playHash(quiz);
  };

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
      el('button', { class: 'button secondary', type: 'button', onclick: restart }, 'Refaire le quiz'),
      el('a', { class: 'button', href: '#/' }, 'Autres quiz'),
    ),
  );
}
