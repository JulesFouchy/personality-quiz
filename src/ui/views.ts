import { playableQuizzes } from '../quizzes';
import { answerContributions, compatibility, personalitiesFor, score, winners, type PersonalityScore, type PersonalityWeight } from '../scoring';
import { MAX_NAME_LENGTH, questionPath, quizPath, resultHash, resultPath, type SharedResult } from '../routes';
import { decodeAnswers, encodeAnswers, isFromEarlierVersion } from '../share';
import type { Answers, Quiz } from '../types';
import { animateDetails } from './details';
import { el, frenchSpacing } from './dom';
import { navigate, url } from './navigation';
import {
  answer as recordAnswer,
  changedQuestions,
  forgetProgress,
  forgetSharedResult,
  loadProgress,
  loadSharedResults,
  loadShareName,
  newAnswers,
  newQuizIds,
  saveSharedResult,
  saveShareName,
  senderId,
  type Progress,
} from './progress';

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
  if (!progress.finished) return undefined;
  const own = { code: encodeAnswers(quiz, progress.answers), sender: senderId(), name: loadShareName() };
  return { ...own, href: resultUrl(quiz, own) };
}

/** Where `playUrl` leads: the result once the quiz is finished, even if questions were added since, otherwise the first unanswered question. */
export function resumeUrl(quiz: Quiz): string {
  const progress = loadProgress(quiz);
  if (progress.finished) return ownResultUrl(quiz)!.href;
  return questionUrl(quiz, quiz.questions.findIndex((q) => progress.answers[q.id] === undefined));
}

export function homeView(): Node {
  const newIds = newQuizIds(playableQuizzes.map((quiz) => quiz.id));
  return el(
    'main',
    { class: 'page' },
    el('h1', { class: 'site-title' }, 'Quiz de personnalité'),
    el('p', { class: 'muted' }, 'Tu es plutôt creeper ou petit pois ? Compare avec tes ami·es.'),
    el(
      'ul',
      { class: 'quiz-list' },
      ...homeOrder(playableQuizzes).map((quiz) => {
        const progress = loadProgress(quiz);
        // Only until the player starts it: they know about it by then.
        const isNew = newIds.has(quiz.id) && Object.keys(progress.answers).length === 0;
        return el(
          'li',
          {},
          el(
            'a',
            { class: `card quiz-card${progress.finished ? ' done' : ''}${isNew ? ' new' : ''}`, href: playUrl(quiz) },
            isNew ? el('span', { class: 'new-pill' }, 'Nouveau') : '',
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
        );
      }),
    ),
  );
}

/**
 * The quizzes that need the player first: finished ones that changed since, then the ones in progress, then the ones not started, then the finished ones.
 * Finished quizzes come last finished first, the ones finished before that was recorded after them.
 * Unfinished ones come latest release first, with the unreleased ones of `npm run dev` before them all, last registered first: the order they were written in.
 */
function homeOrder(quizzes: Quiz[]): Quiz[] {
  const key = (quiz: Quiz, index: number) => {
    const progress = loadProgress(quiz);
    if (progress.finished) return { rank: changedQuestions(quiz, progress).length > 0 ? 0 : 3, recency: new Date(progress.finishedAt ?? 0).toISOString() };
    // ISO dates and times sort as strings, and '~' after all of them.
    return { rank: Object.keys(progress.answers).length > 0 ? 1 : 2, recency: quiz.released ?? `~${String(index).padStart(6, '0')}` };
  };
  const keys = new Map(quizzes.map((quiz, index) => [quiz, key(quiz, index)]));
  return [...quizzes].sort((a, b) => {
    const [ka, kb] = [keys.get(a)!, keys.get(b)!];
    return ka.rank - kb.rank || (kb.recency > ka.recency ? 1 : kb.recency < ka.recency ? -1 : 0);
  });
}

const TOP_MATCHES_SHOWN = 3;

/** Shows the top matches of a finished quiz, or how far along an unfinished one is. */
function statusBadge(quiz: Quiz): Node | '' {
  const progress = loadProgress(quiz);
  if (progress.finished) {
    const ranking = score(quiz, progress.answers);
    const top = winners(ranking);
    // The top matches, and every personality tied for first even if that's more.
    return el(
      'span',
      { class: 'badges' },
      ...ranking.slice(0, Math.max(TOP_MATCHES_SHOWN, top.length)).map((s) =>
        el('span', { class: `badge${top.includes(s) ? ' done' : ''}` }, `${s.personality.emoji} ${s.personality.name} ${Math.round(100 * s.match)} %`),
      ),
      changedBadge(quiz, progress),
    );
  }
  const answered = Object.keys(progress.answers).length;
  return answered > 0 ? el('span', { class: 'badges' }, el('span', { class: 'badge' }, `En cours · ${answered}/${quiz.questions.length}`), changedBadge(quiz, progress)) : '';
}

/** How many questions changed since the player answered them, on the home page. */
function changedBadge(quiz: Quiz, progress: Progress): Node | '' {
  const count = changedQuestions(quiz, progress).length;
  return count > 0 ? el('span', { class: 'badge changed' }, `${changedCount(count)} : réponds-y pour mettre ton résultat à jour`) : '';
}

const changedCount = (count: number) => (count > 1 ? `${count} questions ont changé` : '1 question a changé');

/** Tells a returning player the quiz changed since they answered it, and leads to the first question that did. */
function changedNote(quiz: Quiz, progress: Progress): Node | '' {
  const changed = changedQuestions(quiz, progress);
  if (changed.length === 0) return '';
  return el(
    'section',
    { class: 'card changed-note' },
    el('p', {}, `Le quiz a évolué depuis tes réponses : ${changedCount(changed.length)}. Réponds-y pour mettre ton résultat à jour.`),
    el('a', { class: 'button', href: questionUrl(quiz, quiz.questions.indexOf(changed[0]!)) }, 'Modifier mes réponses'),
  );
}

export function notFoundView(): Node {
  return el('main', { class: 'page' }, el('h1', {}, 'Quiz introuvable'), el('a', { href: homeUrl }, '← Retour aux quiz'));
}

/** Shows question `index`; each question has its own history entry, so the browser's back and forward buttons move between them. */
export function playView(quiz: Quiz, index: number): Node {
  const progress = loadProgress(quiz);
  const question = quiz.questions[index]!;
  const total = quiz.questions.length;
  const changed = changedQuestions(quiz, progress);
  const fresh = new Set(newAnswers(progress, question));
  const choose = (answerId: string) => {
    const wasChanged = changed.includes(question);
    recordAnswer(quiz, progress, question, answerId);
    // Going over what changed leads from one changed question to the next rather than through the whole quiz.
    const nextChanged = changedQuestions(quiz, progress)[0];
    if (wasChanged) navigate(nextChanged ? questionUrl(quiz, quiz.questions.indexOf(nextChanged)) : resumeUrl(quiz));
    else navigate(index + 1 < total ? questionUrl(quiz, index + 1) : resumeUrl(quiz));
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
        const isChanged = changed.includes(q);
        const label = `Question ${i + 1}${isChanged ? ' (du nouveau)' : answered ? ' (répondue)' : ''}`;
        const dot = el('a', { class: `progress-dot${answered ? ' answered' : ''}${isChanged ? ' changed' : ''}`, href: questionUrl(quiz, i), 'aria-label': label, title: label });
        if (i === index) dot.setAttribute('aria-current', 'step');
        return dot;
      }),
      resultFlag(quiz, progress.finished),
    ),
    changed.length > 0 && el('p', { class: 'hint changed-hint' }, 'Le quiz a évolué depuis tes réponses : les questions en orange ont du nouveau.'),
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
          fresh.has(answer) && el('span', { class: 'tag new' }, 'Nouvelle'),
        ),
      ),
    ),
    moreAnswersHint(),
  );
}

/** Floats at the bottom of the screen while the last answers are below it, which a phone otherwise gives no sign of. */
function moreAnswersHint(): Node {
  const end = el('div', { class: 'answers-end' });
  const hint = el(
    'button',
    { class: 'more-answers', type: 'button', onclick: () => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' }) },
    'Scroll pour voir la suite',
  );
  // Hidden once the end of the answers clears the hint's own height above the bottom of the screen.
  new IntersectionObserver(([entry]) => hint.classList.toggle('shown', !entry!.isIntersecting), { rootMargin: '0px 0px -48px 0px' }).observe(end);
  return el('div', {}, end, hint);
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
  const contributions = new Map(answerContributions(quiz, answers).map((c) => [c.question.id, c]));
  return el(
    'ol',
    { class: 'recap' },
    ...quiz.questions.flatMap((question, index) => {
      // A question added since the player finished, or that a link from an earlier version of the quiz has no answer for.
      const contribution = contributions.get(question.id);
      if (!contribution && !shared) return [];
      const answer = contribution?.answer;
      const toward = contribution?.toward ?? [];
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
              answer
                ? el('p', { class: 'recap-answer' }, answer.text)
                : el('p', { class: 'recap-answer muted' }, 'Pas de réponse : la question a changé depuis sa participation.'),
              toward.length > 0 && chips(toward.slice(0, 3)),
              compared &&
                yourAnswer &&
                (yourAnswer.id === answer?.id
                  ? el('p', { class: 'recap-yours same' }, 'Même réponse que toi')
                  : el('p', { class: 'recap-yours' }, tag(shared.tags.yours), el('span', {}, yourAnswer.text))),
            ),
            el(
              'ul',
              { class: 'all-answers' },
              ...question.answers.map((option) => {
                const weights = personalitiesFor(quiz, option);
                const isTheirs = shared !== undefined && option.id === answer?.id;
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

/** A button that copies a link, or hands it to the system share sheet. */
function shareButton(labels: { share: string; copy: string }, extraClass: string, title: string, text: string, href: () => string): HTMLButtonElement {
  // The share sheet beats the clipboard on phones; on desktop it's an unexpected dialog.
  const useShareSheet = 'share' in navigator && matchMedia('(pointer: coarse)').matches;
  const label = useShareSheet ? labels.share : labels.copy;
  const button = el('button', { class: `button${extraClass}`, type: 'button' }, label);
  button.addEventListener('click', async () => {
    const url = new URL(href(), location.origin).href;
    if (useShareSheet) {
      try {
        await navigator.share({ title, text, url });
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
  return button;
}

/**
 * Shares the player's result link, or just the quiz for those who'd rather keep their result to themselves.
 * On their result page (`onOwnResult`), the page's own URL is the result link too and follows the name.
 */
function shareSection(quiz: Quiz, onOwnResult: boolean): Node {
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
  const resultButton = shareButton({ share: 'Partager le lien', copy: 'Copier le lien' }, '', quiz.title, 'Compare ton résultat avec le mien !', () => ownResultUrl(quiz)!.href);
  const quizButton = shareButton({ share: 'Partager le quiz', copy: 'Copier le lien du quiz' }, ' secondary small', quiz.title, quiz.description, () => playUrl(quiz));
  return el(
    'section',
    { class: 'card share' },
    el('h2', {}, 'Partage ton résultat'),
    el('p', { class: 'muted' }, 'La personne qui ouvre le lien voit tout ton résultat, et peut le comparer au sien.'),
    el('div', { class: 'share-form' }, input, resultButton),
    el('div', { class: 'share-quiz' }, el('p', { class: 'muted' }, 'Ou partage juste le quiz, sans ton résultat :'), quizButton),
  );
}

/** A pill of the comparisons list; the page being viewed is shown dimmed, without a link. */
function personPill(top: PersonalityScore[], name: string, href: string, extraClass: string, isCurrent: boolean, ...extra: Node[]): HTMLLIElement {
  const content = [
    el('span', { 'aria-hidden': 'true' }, top.map((s) => s.personality.emoji).join('')),
    el('strong', {}, name),
    el('span', { class: 'muted' }, top.map((s) => s.personality.name).join(', ')),
    ...extra,
  ];
  return el(
    'li',
    { class: `person${extraClass}${isCurrent ? ' current' : ''}` },
    isCurrent
      ? el('span', { class: 'person-link', 'aria-current': 'page', title: 'Tu es déjà sur cette page' }, ...content)
      : el('a', { class: 'person-link', href }, ...content),
  );
}

/**
 * The player's own result, then everyone whose shared result they opened, most compatible first, each linking to its page.
 * `current` is the shared result being viewed, if any.
 */
function comparisonsSection(quiz: Quiz, yours: PersonalityScore[], current?: SharedResult): Node | '' {
  const people = loadSharedResults(quiz)
    .flatMap((shared) => {
      // Invalid links have nothing to compare.
      const answers = decodeAnswers(quiz, shared.code);
      if (!answers) return [];
      const theirs = score(quiz, answers);
      return [{ shared, top: winners(theirs), value: compatibility(theirs, yours) }];
    })
    .sort((a, b) => b.value - a.value);
  if (people.length === 0) return '';
  const section = el(
    'section',
    { class: 'comparisons' },
    el('h2', {}, 'Tes comparaisons'),
    el('p', { class: 'hint' }, 'Touche une personne pour revoir votre comparaison.'),
  );
  const list = el('ul', { class: 'people' }, personPill(winners(yours), 'Toi', ownResultUrl(quiz)!.href, ' own', !current));
  let remaining = people.length;
  for (const { shared, top, value } of people) {
    const name = shared.name || 'Anonyme';
    const isCurrent = current !== undefined && current.code === shared.code && current.sender === shared.sender && current.name === shared.name;
    const forget = el('button', { class: 'person-forget', type: 'button', 'aria-label': `Oublier ${name}`, title: 'Oublier' }, '×');
    const item = personPill(top, name, resultUrl(quiz, shared), '', isCurrent, el('span', { class: 'person-compat', style: `--compat: ${Math.round(100 * value)}%` }, percent(value)));
    item.append(forget);
    forget.addEventListener('click', () => {
      const who = shared.name || 'cette personne';
      if (!confirm(frenchSpacing(`Retirer ${who} de tes comparaisons ? Rouvrir son lien l’y remettra.`))) return;
      forgetSharedResult(quiz, shared);
      // Going back reopens their page, which remembers them again: an undo.
      if (isCurrent) return navigate(ownResultUrl(quiz)!.href);
      item.remove();
      if (--remaining === 0) section.remove();
    });
    list.append(item);
  }
  section.append(list);
  return section;
}

/** Many players stop at the top result, so the way to the next quiz doesn't wait for the end of the page. */
function nextQuizButton(): Node {
  return el('div', { class: 'actions next-quiz' }, el('a', { class: 'button', href: homeUrl }, 'Faire un autre quiz'));
}

export function resultView(quiz: Quiz): Node {
  const progress = loadProgress(quiz);
  const ranking = score(quiz, progress.answers);
  const top = winners(ranking);

  return el(
    'main',
    { class: 'page' },
    el('a', { class: 'back-link', href: homeUrl }, '← Tous les quiz'),
    el('p', { class: 'quiz-name' }, `${quiz.emoji} ${quiz.title}`),
    changedNote(quiz, progress),
    winnerCard(top, top.length > 1 ? 'Égalité ! Tu es à la fois…' : 'Tu es…'),
    nextQuizButton(),
    shareSection(quiz, true),
    comparisonsSection(quiz, ranking),
    el('h2', {}, 'Ta répartition'),
    el('p', { class: 'hint' }, 'Touche une personnalité pour lire sa description.'),
    rankingList({ yours: ranking }, 'yours'),
    el('h2', {}, 'Tes réponses'),
    el('p', { class: 'hint' }, 'Touche une question pour revoir toutes les réponses possibles.'),
    // Keeps the answers, so you can confirm or change each one.
    el('div', { class: 'recap-actions' }, el('a', { class: 'button secondary small', href: questionUrl(quiz, 0) }, 'Modifier mes réponses')),
    recapList(quiz, progress.answers),
    el('div', { class: 'actions' }, el('a', { class: 'button', href: homeUrl }, 'Faire un autre quiz')),
    import.meta.env?.DEV ? forgetButton(quiz) : '',
  );
}

/** Dev only: erases your answers to the quiz, to replay it as a newcomer. */
function forgetButton(quiz: Quiz): Node {
  const forget = () => {
    forgetProgress(quiz);
    navigate(homeUrl);
  };
  return el('div', { class: 'actions' }, el('button', { class: 'button danger', type: 'button', onclick: forget }, 'Oublier mes résultats (dev)'));
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
  // Questions added since either person finished, or left out of a link from an earlier version of the quiz, don't count.
  const both = quiz.questions.filter((q) => theirAnswers[q.id] !== undefined && yourAnswers[q.id] !== undefined);
  const same = both.filter((q) => theirAnswers[q.id] === yourAnswers[q.id]).length;
  const theirTop = winners(theirs);
  const sameResult = winners(yours).some((s) => theirTop.some((t) => t.personality.id === s.personality.id));
  const total = both.length;
  // Identical answers (nearly) always give the same result, so that case doesn't announce it.
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
      el('h1', {}, 'Lien invalide'),
      el('p', { class: 'muted' }, 'Ce lien ne correspond à aucune version du quiz : il a peut-être été coupé en le copiant.'),
      el('div', { class: 'actions' }, el('a', { class: 'button', href: playUrl(quiz) }, 'Faire le quiz')),
    );
  }
  // Not the player's own, opened from an older result of theirs.
  if (shared.sender !== senderId()) saveSharedResult(quiz, shared);
  const { name } = shared;
  const sender = name || 'La personne qui t’a envoyé ce lien';
  const sortLabels: Sides = name ? { theirs: name, yours: 'Toi' } : { theirs: 'Son score', yours: 'Ton score' };
  const tags: Sides = name ? { theirs: name, yours: 'Toi' } : { theirs: 'Son choix', yours: 'Ton choix' };
  const ranking = score(quiz, answers);
  const top = winners(ranking);
  const progress = loadProgress(quiz);
  const yours = progress.finished ? score(quiz, progress.answers) : undefined;
  const started = Object.keys(progress.answers).length > 0;
  const scores: RankingScores = { theirs: ranking, yours };
  const rankingSlot = el('div', {}, rankingList(scores, 'theirs'));

  return el(
    'main',
    { class: 'page' },
    el('a', { class: 'back-link', href: homeUrl }, '← Tous les quiz'),
    el('p', { class: 'quiz-name' }, `${quiz.emoji} ${quiz.title}`),
    isFromEarlierVersion(quiz, shared.code) &&
      el('p', { class: 'hint' }, 'Le quiz a évolué depuis ce partage : ce résultat est recalculé sur la version actuelle et peut avoir changé.'),
    el(
      'div',
      { class: `winners${yours ? ' duo' : ''}` },
      winnerCard(top, top.length > 1 ? `Égalité ! ${sender} est à la fois…` : `${sender} est…`, { extraClass: ' theirs' }),
      yours && winnerCard(winners(yours), winners(yours).length > 1 ? 'Et toi, tu es à la fois…' : 'Et toi, tu es…', { extraClass: ' yours', heading: 'h2' }),
    ),
    yours && compatibilityCard(quiz, answers, progress.answers, ranking, yours),
    yours && nextQuizButton(),
    // Where the result page has its share card.
    yours
      ? shareSection(quiz, false)
      : el(
          'section',
          { class: 'card invite' },
          el('p', {}, started ? 'Termine le quiz pour comparer vos résultats.' : 'Fais le quiz pour comparer vos résultats.'),
          el('a', { class: 'button', href: playUrl(quiz) }, started ? 'Continuer le quiz' : 'Faire le quiz'),
        ),
    yours && comparisonsSection(quiz, yours, shared),
    el('h2', {}, yours ? 'Vos répartitions' : 'Sa répartition'),
    yours && sortControl(sortLabels, 'theirs', (side) => rankingSlot.replaceChildren(rankingList(scores, side))),
    el('p', { class: 'hint' }, 'Touche une personnalité pour lire sa description.'),
    rankingSlot,
    el('h2', {}, 'Ses réponses'),
    el('p', { class: 'hint' }, 'Touche une question pour revoir toutes les réponses possibles.'),
    recapList(quiz, answers, { yours: yours && progress.answers, tags }),
    el('div', { class: 'actions' }, el('a', { class: 'button', href: homeUrl }, 'Faire un autre quiz')),
  );
}
