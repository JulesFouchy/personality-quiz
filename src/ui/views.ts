import { playableQuizzes } from '../quizzes';
import { answerContributions, compatibility, personalitiesFor, score, winners, type PersonalityScore, type PersonalityWeight } from '../scoring';
import { MAX_NAME_LENGTH, questionPath, quizPath, resultHash, resultPath, type SharedResult } from '../routes';
import { decodeAnswers, encodeAnswers } from '../share';
import type { Answers, Quiz } from '../types';
import { animateDetails } from './details';
import { el, frenchSpacing } from './dom';
import { navigate, url } from './navigation';
import { isComplete, loadProgress, loadSharedResult, loadShareName, saveProgress, saveSharedResult, saveShareName, senderId } from './progress';

const homeUrl = url('');
/** Resolved by the router through `resumeUrl`, so a link to it is never stale. */
const playUrl = (quiz: Quiz) => url(quizPath(quiz.id));
const questionUrl = (quiz: Quiz, index: number) => url(questionPath(quiz.id, index));

/** A result's URL, which is also its share link: the path names its top match, for the link preview. */
function resultUrl(quiz: Quiz, shared: SharedResult): string {
  const answers = decodeAnswers(quiz, shared.code);
  const top = answers && winners(score(quiz, answers))[0];
  return url(resultPath(quiz.id, top?.personality.id)) + resultHash(shared);
}

/** The player's own result, with the name they share it under, once the quiz is done. */
export function ownResultUrl(quiz: Quiz): (SharedResult & { href: string }) | undefined {
  const progress = loadProgress(quiz);
  if (!isComplete(quiz, progress)) return undefined;
  const own = { code: encodeAnswers(quiz, progress.answers), sender: senderId(), name: loadShareName() };
  return { ...own, href: resultUrl(quiz, own) };
}

/** Where `playUrl` leads: the first unanswered question, or the result once there is none. */
export function resumeUrl(quiz: Quiz): string {
  const progress = loadProgress(quiz);
  const index = quiz.questions.findIndex((q) => progress.answers[q.id] === undefined);
  return index === -1 ? ownResultUrl(quiz)!.href : questionUrl(quiz, index);
}

export function homeView(): Node {
  return el(
    'main',
    { class: 'page' },
    el('h1', { class: 'site-title' }, 'Quiz de personnalité'),
    el('p', { class: 'muted' }, 'Tu es plutôt creeper ou petit pois ? Compare avec tes ami·es.'),
    el(
      'ul',
      { class: 'quiz-list' },
      ...playableQuizzes.map((quiz) =>
        el(
          'li',
          {},
          el(
            'a',
            { class: `card quiz-card${isComplete(quiz, loadProgress(quiz)) ? ' done' : ''}`, href: playUrl(quiz) },
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
  return el('main', { class: 'page' }, el('h1', {}, 'Quiz introuvable'), el('a', { href: homeUrl }, '← Retour aux quiz'));
}

/** Shows question `index`; each question has its own history entry, so the browser's back and forward buttons move between them. */
export function playView(quiz: Quiz, index: number): Node {
  const progress = loadProgress(quiz);
  const question = quiz.questions[index]!;
  const total = quiz.questions.length;
  const choose = (answerId: string) => {
    progress.answers[question.id] = answerId;
    saveProgress(quiz, progress);
    navigate(index + 1 < total ? questionUrl(quiz, index + 1) : resumeUrl(quiz));
  };

  return el(
    'main',
    { class: 'page' },
    el('a', { class: 'back-link', href: homeUrl }, '← Tous les quiz'),
    el('p', { class: 'quiz-name' }, `${quiz.emoji} ${quiz.title}`),
    el(
      'nav',
      { class: 'progress', 'aria-label': 'Questions' },
      ...quiz.questions.map((q, i) => {
        const answered = progress.answers[q.id] !== undefined;
        const label = `Question ${i + 1}${answered ? ' (répondue)' : ''}`;
        const dot = el('a', { class: `progress-dot${answered ? ' answered' : ''}`, href: questionUrl(quiz, i), 'aria-label': label, title: label });
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
  const flag = el('button', { class: 'progress-flag', type: 'button', 'aria-label': label, title: label, onclick: () => navigate(ownResultUrl(quiz)!.href) }, '🏁');
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

interface WinnerCardOptions {
  extraClass?: string;
  /** `h2` for a second card on the page. */
  heading?: 'h1' | 'h2';
}

function winnerCard(top: PersonalityScore[], lead: string, { extraClass = '', heading = 'h1' }: WinnerCardOptions = {}): Node {
  return el(
    'section',
    { class: `card winner${extraClass}` },
    el('p', { class: 'meta' }, lead),
    ...top.map(({ personality }) =>
      el(
        'div',
        { class: 'winner-entry' },
        el('div', { class: 'winner-emoji', 'aria-hidden': 'true' }, personality.emoji),
        el(heading, {}, personality.name),
        el('p', {}, personality.description),
      ),
    ),
  );
}

const percent = (match: number) => `${Math.round(100 * match)} %`;

function bar(match: number, index: number, extraClass: string): Node {
  return el('span', { class: `bar${extraClass}` }, el('span', { class: 'bar-fill', style: `width: ${Math.round(100 * match)}%; --index: ${index}` }));
}

/** Whose side something is on a shared result page: the sender's or the visitor's. */
type Side = 'theirs' | 'yours';

/** The scores a ranking shows: the visitor's, a shared result's, or both side by side. */
type RankingScores = Partial<Record<Side, PersonalityScore[]>>;

/** Every personality's match, best first by the `sortBy` side's scores, whose bar also comes first when both are shown. */
function rankingList(scores: RankingScores, sortBy: Side): Node {
  const sides = (sortBy === 'theirs' ? (['theirs', 'yours'] as const) : (['yours', 'theirs'] as const)).flatMap((side) => {
    const ranking = scores[side];
    return ranking ? [{ side, ranking, top: winners(ranking) }] : [];
  });
  const order = scores[sortBy]!;
  const sortTop = winners(order);
  return el(
    'ol',
    { class: `ranking${sides.length > 1 ? ' compared' : ''}` },
    ...order.map(({ personality }, index) => {
      const matches = sides.map(({ side, ranking, top }) => ({
        side,
        match: ranking.find((s) => s.personality.id === personality.id)!.match,
        isTop: top.some((s) => s.personality.id === personality.id),
      }));
      const bars = matches.map(({ side, match }) => bar(match, index, ` ${side}`));
      return el(
        'li',
        {},
        animateDetails(
          el(
            'details',
            { class: `ranking-item${sortTop.some((s) => s.personality.id === personality.id) ? ' top' : ''}` },
            el(
              'summary',
              { class: 'ranking-row' },
              el('span', { class: 'ranking-emoji', 'aria-hidden': 'true' }, personality.emoji),
              el('span', { class: 'ranking-name' }, personality.name),
              bars.length > 1 ? el('span', { class: 'bars' }, ...bars) : bars[0],
              el(
                'span',
                { class: 'ranking-percent' },
                ...matches.map(({ side, match, isTop }) => el('span', { class: `${side}${isTop ? ' best' : ''}` }, percent(match))),
              ),
              el('span', { class: 'chevron', 'aria-hidden': 'true' }),
            ),
            el('p', { class: 'ranking-description' }, personality.description),
          ),
        ),
      );
    }),
  );
}

/** Labels telling the sender's side from the visitor's. */
type Sides = Record<Side, string>;

/** Toggles which side a compared ranking is sorted by; its buttons double as the legend of the bar colors. */
function sortControl(labels: Sides, sortBy: Side, onSort: (side: Side) => void): Node {
  const buttons = (['theirs', 'yours'] as const).map((side) => {
    const button = el('button', { class: `sort-option ${side}`, type: 'button', 'aria-pressed': String(side === sortBy) }, labels[side]);
    button.addEventListener('click', () => {
      for (const other of buttons) other.setAttribute('aria-pressed', String(other === button));
      onSort(side);
    });
    return button;
  });
  return el('div', { class: 'sort', role: 'group', 'aria-label': 'Trier' }, el('span', { class: 'meta' }, 'Trier selon :'), ...buttons);
}

function tag(text: string, extraClass = ''): Node {
  return el('span', { class: `tag${extraClass}` }, text);
}

/** How a shared result's answers are shown: next to the visitor's own once they've played. */
interface SharedRecap {
  yours?: Answers;
  tags: Sides;
}

/**
 * The answers given, each with every possible answer.
 * The visitor's own choice is the highlighted one; on a shared result, the sender's choice is outlined instead.
 */
function recapList(quiz: Quiz, answers: Answers, shared?: SharedRecap): Node {
  return el(
    'ol',
    { class: 'recap' },
    ...answerContributions(quiz, answers).map(({ question, answer, toward }, index) => {
      const yourAnswer = shared ? question.answers.find((a) => a.id === shared.yours?.[question.id]) : answer;
      const compared = shared?.yours !== undefined;
      return el(
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
              compared &&
                yourAnswer &&
                (yourAnswer.id === answer.id
                  ? el('p', { class: 'recap-yours same' }, 'Même réponse que toi')
                  : el('p', { class: 'recap-yours' }, tag(shared.tags.yours), el('span', {}, yourAnswer.text))),
            ),
            el(
              'ul',
              { class: 'all-answers' },
              ...question.answers.map((option) => {
                const weights = personalitiesFor(quiz, option);
                const isTheirs = shared !== undefined && option.id === answer.id;
                const isYours = option.id === yourAnswer?.id;
                return el(
                  'li',
                  { class: `${isYours ? 'chosen' : ''}${isTheirs ? ' theirs' : ''}` },
                  el('p', {}, option.text),
                  compared &&
                    (isTheirs || isYours) &&
                    el('span', { class: 'tags' }, isTheirs && tag(shared.tags.theirs, ' theirs'), isYours && tag(shared.tags.yours)),
                  weights.length > 0 && chips(weights),
                );
              }),
            ),
          ),
        ),
      );
    }),
  );
}

/**
 * Copies the player's result link, or hands it to the system share sheet.
 * On their result page (`onOwnResult`), the page's own URL is that link too and follows the name.
 */
function shareSection(quiz: Quiz, onOwnResult: boolean): Node {
  // The share sheet beats the clipboard on phones; on desktop it's an unexpected dialog.
  const useShareSheet = 'share' in navigator && matchMedia('(pointer: coarse)').matches;
  const label = useShareSheet ? 'Partager le lien' : 'Copier le lien';
  const input = el('input', {
    class: 'share-name',
    type: 'text',
    maxlength: MAX_NAME_LENGTH,
    placeholder: 'Ton pseudo',
    'aria-label': 'Ton pseudo',
    value: loadShareName(),
  });
  // Keeps the address bar on the link as shared, name included.
  input.addEventListener('input', () => {
    saveShareName(input.value.trim());
    if (onOwnResult) history.replaceState(null, '', ownResultUrl(quiz)!.href);
  });
  const button = el('button', { class: 'button', type: 'button' }, label);
  button.addEventListener('click', async () => {
    const url = new URL(ownResultUrl(quiz)!.href, location.origin).href;
    if (useShareSheet) {
      try {
        await navigator.share({ title: quiz.title, text: 'Compare ton résultat avec le mien !', url });
      } catch {
        // Share sheet dismissed.
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      button.textContent = frenchSpacing('Lien copié !');
      setTimeout(() => (button.textContent = frenchSpacing(label)), 2000);
    } catch {
      prompt('Copie ce lien :', url);
    }
  });
  return el(
    'section',
    { class: 'card share' },
    el('h2', {}, 'Partage ton résultat'),
    el('p', { class: 'muted' }, 'La personne qui ouvre le lien voit tout ton résultat, et peut le comparer au sien.'),
    el('div', { class: 'share-form' }, input, button),
  );
}

export function resultView(quiz: Quiz): Node {
  const progress = loadProgress(quiz);
  const ranking = score(quiz, progress.answers);
  const top = winners(ranking);
  const shared = loadSharedResult(quiz);
  // Not when the shared result is the player's own, opened to try the link.
  const canCompare = shared !== undefined && decodeAnswers(quiz, shared.code) !== undefined && shared.sender !== senderId();

  return el(
    'main',
    { class: 'page' },
    el('a', { class: 'back-link', href: homeUrl }, '← Tous les quiz'),
    el('p', { class: 'quiz-name' }, `${quiz.emoji} ${quiz.title}`),
    winnerCard(top, top.length > 1 ? 'Égalité ! Tu es à la fois…' : 'Tu es…'),
    el('h2', {}, 'Ta répartition'),
    el('p', { class: 'hint' }, 'Touche une personnalité pour lire sa description.'),
    rankingList({ yours: ranking }, 'yours'),
    canCompare &&
      el('a', { class: 'card compare-link', href: resultUrl(quiz, shared) }, shared.name ? `Compare tes résultats avec ${shared.name} →` : 'Compare ton résultat avec celui de la personne qui t’a envoyé le lien →'),
    shareSection(quiz, true),
    el('h2', {}, 'Tes réponses'),
    el('p', { class: 'hint' }, 'Touche une question pour revoir toutes les réponses possibles.'),
    recapList(quiz, progress.answers),
    el(
      'div',
      { class: 'actions' },
      // Keeps the answers, so you can confirm or change each one.
      el('a', { class: 'button secondary', href: questionUrl(quiz, 0) }, 'Refaire le quiz'),
      el('a', { class: 'button', href: homeUrl }, 'Autres quiz'),
    ),
  );
}

/** What a compatibility score says about two people, from the most alike down. */
const COMPATIBILITY_VERDICTS: [minimum: number, verdict: string][] = [
  [0.9, 'À ce stade, vous êtes la même personne en deux exemplaires.'],
  [0.7, 'Comme les deux doigts de la main.'],
  [0.5, 'Assez de points communs pour bien vous entendre, assez de différences pour ne jamais vous ennuyer.'],
  [0.3, 'Vous ne voyez pas toujours les choses du même œil… ça fait de bons débats.'],
  [0, 'Comme chien et chat. Mais il paraît que les contraires s’attirent.'],
];

/** How alike the visitor and the sender are, and how many answers they have in common. */
function compatibilityCard(quiz: Quiz, theirAnswers: Answers, yourAnswers: Answers, theirs: PersonalityScore[], yours: PersonalityScore[]): Node {
  const same = quiz.questions.filter((q) => theirAnswers[q.id] === yourAnswers[q.id]).length;
  const theirTop = winners(theirs);
  const sameResult = winners(yours).some((s) => theirTop.some((t) => t.personality.id === s.personality.id));
  const total = quiz.questions.length;
  // Identical answers always give the same result, so that case doesn't announce it.
  const inCommon =
    same === total
      ? 'Vous avez donné exactement les mêmes réponses !'
      : `${sameResult ? 'Même résultat ! ' : ''}${
          same === 0 ? 'Vous n’avez donné aucune réponse en commun.' : `Vous avez donné la même réponse à ${same} question${same > 1 ? 's' : ''} sur ${total}.`
        }`;
  const value = compatibility(theirs, yours);
  const verdict = COMPATIBILITY_VERDICTS.find(([minimum]) => value >= minimum)![1];
  return el(
    'section',
    { class: 'card compat' },
    el('p', { class: 'meta' }, 'Compatibilité'),
    el('p', { class: 'compat-score', style: `--compat: ${Math.round(100 * value)}%` }, percent(value)),
    el('p', { class: 'compat-verdict' }, verdict),
    el('p', { class: 'compat-details muted' }, inCommon),
  );
}

/** Someone's result from a share link, compared with the visitor's own once they've done the quiz. */
export function sharedView(quiz: Quiz, shared: SharedResult): Node {
  const answers = decodeAnswers(quiz, shared.code);
  if (!answers) {
    return el(
      'main',
      { class: 'page' },
      el('a', { class: 'back-link', href: homeUrl }, '← Tous les quiz'),
      el('h1', {}, 'Lien périmé'),
      el('p', { class: 'muted' }, 'Ce lien ne correspond pas à la version actuelle du quiz, qui a sans doute changé depuis le partage.'),
      el('div', { class: 'actions' }, el('a', { class: 'button', href: playUrl(quiz) }, 'Faire le quiz')),
    );
  }
  saveSharedResult(quiz, shared);
  const { name } = shared;
  const sender = name || 'La personne qui t’a envoyé ce lien';
  const sortLabels: Sides = name ? { theirs: name, yours: 'Toi' } : { theirs: 'Son score', yours: 'Ton score' };
  const tags: Sides = name ? { theirs: name, yours: 'Toi' } : { theirs: 'Son choix', yours: 'Ton choix' };
  const ranking = score(quiz, answers);
  const top = winners(ranking);
  const progress = loadProgress(quiz);
  const complete = isComplete(quiz, progress);
  const yours = complete ? score(quiz, progress.answers) : undefined;
  const started = Object.keys(progress.answers).length > 0;
  const scores: RankingScores = { theirs: ranking, yours };
  const rankingSlot = el('div', {}, rankingList(scores, 'theirs'));

  return el(
    'main',
    { class: 'page' },
    el('a', { class: 'back-link', href: homeUrl }, '← Tous les quiz'),
    el('p', { class: 'quiz-name' }, `${quiz.emoji} ${quiz.title}`),
    el(
      'div',
      { class: `winners${yours ? ' duo' : ''}` },
      winnerCard(top, top.length > 1 ? `Égalité ! ${sender} est à la fois…` : `${sender} est…`, { extraClass: ' theirs' }),
      yours && winnerCard(winners(yours), winners(yours).length > 1 ? 'Et toi, tu es à la fois…' : 'Et toi, tu es…', { extraClass: ' yours', heading: 'h2' }),
    ),
    yours && compatibilityCard(quiz, answers, progress.answers, ranking, yours),
    el('h2', {}, yours ? 'Vos répartitions' : 'Sa répartition'),
    yours && sortControl(sortLabels, 'theirs', (side) => rankingSlot.replaceChildren(rankingList(scores, side))),
    el('p', { class: 'hint' }, 'Touche une personnalité pour lire sa description.'),
    rankingSlot,
    // Where the result page has its share card.
    yours
      ? shareSection(quiz, false)
      : el(
          'section',
          { class: 'card invite' },
          el('p', {}, started ? 'Termine le quiz pour comparer vos résultats.' : 'Fais le quiz pour comparer vos résultats.'),
          el('a', { class: 'button', href: playUrl(quiz) }, started ? 'Continuer le quiz' : 'Faire le quiz'),
        ),
    el('h2', {}, 'Ses réponses'),
    el('p', { class: 'hint' }, 'Touche une question pour revoir toutes les réponses possibles.'),
    recapList(quiz, answers, { yours: yours && progress.answers, tags }),
    el(
      'div',
      { class: 'actions' },
      complete && el('a', { class: 'button secondary', href: ownResultUrl(quiz)!.href }, 'Voir mon résultat'),
      el('a', { class: 'button', href: homeUrl }, 'Autres quiz'),
    ),
  );
}
