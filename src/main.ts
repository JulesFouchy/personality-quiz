import './style.css';
import { findQuiz } from './quizzes';
import { homeView, notFoundView, playView, resultView, resumeHash } from './ui/views';

const app = document.querySelector<HTMLElement>('#app')!;

// Routes: #/  ·  #/quiz/:id (redirects to where to resume)  ·  #/quiz/:id/:questionNumber  ·  #/quiz/:id/result
function route(): void {
  const [section, quizId, sub] = location.hash.replace(/^#\/?/, '').split('/');
  let view: Node;
  if (section === 'quiz' && quizId) {
    const quiz = findQuiz(quizId);
    const questionNumber = Number(sub);
    if (!quiz) view = notFoundView();
    else if (sub === 'result') view = resultView(quiz);
    else if (Number.isInteger(questionNumber) && questionNumber >= 1 && questionNumber <= quiz.questions.length) {
      view = playView(quiz, questionNumber - 1);
    } else {
      location.replace(resumeHash(quiz));
      return;
    }
  } else {
    view = homeView();
  }
  app.replaceChildren(view);
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
route();
