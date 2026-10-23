import './style.css';
import { findQuiz } from './quizzes';
import { parseRoute } from './routes';
import { BASE, navigate } from './ui/navigation';
import { homeView, notFoundView, ownResultUrl, playView, resultView, resumeUrl, sharedView } from './ui/views';

const SITE_NAME = 'Quiz de personnalité';

const app = document.querySelector<HTMLElement>('#app')!;

function route(): void {
  const path = location.pathname.startsWith(BASE) ? location.pathname.slice(BASE.length) : '';
  const route = parseRoute(path, location.hash);
  let view: Node;
  let title = SITE_NAME;
  if (route.page === 'home') {
    view = homeView();
  } else {
    const quiz = findQuiz(route.quizId);
    if (!quiz) view = notFoundView();
    else {
      title = quiz.title;
      const own = ownResultUrl(quiz);
      if (route.page === 'question' && route.number >= 1 && route.number <= quiz.questions.length) {
        view = playView(quiz, route.number - 1);
      } else if (route.page === 'result' && route.shared && own?.code === route.shared.code) {
        // The player's own result, under the URL they'd share: keep it up to date with their current name and top match.
        if (own.href !== location.pathname + location.hash) history.replaceState(null, '', own.href);
        view = resultView(quiz);
      } else if (route.page === 'result' && route.shared) {
        view = sharedView(quiz, route.shared);
      } else {
        navigate(route.page === 'result' && own ? own.href : resumeUrl(quiz), { replace: true });
        return;
      }
    }
  }
  document.title = title;
  app.replaceChildren(view);
  window.scrollTo(0, 0);
}

// Links within the site move without reloading the page.
document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = (event.target as Element).closest('a');
  if (!link || link.target || link.origin !== location.origin || !link.pathname.startsWith(BASE)) return;
  event.preventDefault();
  navigate(link.href);
});

window.addEventListener('popstate', route);
route();
