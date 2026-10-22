import './style.css';
import { findQuiz } from './quizzes';
import { homeView, notFoundView, playView, resultView } from './ui/views';

const app = document.querySelector<HTMLElement>('#app')!;

// Routes: #/  ·  #/quiz/:id  ·  #/quiz/:id/result
function route(): void {
  const [section, quizId, sub] = location.hash.replace(/^#\/?/, '').split('/');
  let view: Node;
  if (section === 'quiz' && quizId) {
    const quiz = findQuiz(quizId);
    if (!quiz) view = notFoundView();
    else view = sub === 'result' ? resultView(quiz) : playView(quiz);
  } else {
    view = homeView();
  }
  app.replaceChildren(view);
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
route();
