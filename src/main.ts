import './style.css';
import { findQuiz } from './quizzes';
import { MAX_NAME_LENGTH } from './share';
import { homeView, notFoundView, playView, resultView, resumeHash, sharedView } from './ui/views';

const app = document.querySelector<HTMLElement>('#app')!;

// Routes: #/  ·  #/quiz/:id (redirects to where to resume)  ·  #/quiz/:id/:questionNumber  ·  #/quiz/:id/result
//   ·  #/quiz/:id/shared/:code[/:name] (someone else's result)
function route(): void {
  const [section, quizId, sub, code, name] = location.hash.replace(/^#\/?/, '').split('/');
  let view: Node;
  if (section === 'quiz' && quizId) {
    const quiz = findQuiz(quizId);
    const questionNumber = Number(sub);
    if (!quiz) view = notFoundView();
    else if (sub === 'result') view = resultView(quiz);
    else if (sub === 'shared' && code) view = sharedView(quiz, { code, name: decodeName(name) });
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

/** The sender's name from a link segment; a garbled one is dropped rather than shown. */
function decodeName(segment: string | undefined): string {
  try {
    return decodeURIComponent(segment ?? '').trim().slice(0, MAX_NAME_LENGTH);
  } catch {
    return '';
  }
}

window.addEventListener('hashchange', route);
route();
