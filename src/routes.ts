// The site's URLs. Paths are relative to the site's base URL and directory-style, so the build can give each route of a released
// quiz its own page with that quiz's link preview (scripts/share-previews.ts). A result page carries its answers after "#", which
// makes its URL the share link itself.

/** Longest sender name kept in a link. */
export const MAX_NAME_LENGTH = 30;

/** A result as a link carries it. */
export interface SharedResult {
  /** The answers, from `encodeAnswers`. */
  code: string;
  /** Empty when the sender left it out. */
  name: string;
}

export type Route =
  | { page: 'home' }
  /** Redirects to where to resume. */
  | { page: 'quiz'; quizId: string }
  /** `number` starts at 1 and isn't checked against the quiz. */
  | { page: 'question'; quizId: string; number: number }
  /** Without `shared`, redirects to the player's own result. The personality in the path only selects the link preview. */
  | { page: 'result'; quizId: string; shared?: SharedResult };

export const quizPath = (quizId: string) => `quiz/${quizId}/`;
/** Question numbers in the URL start at 1. */
export const questionPath = (quizId: string, index: number) => `quiz/${quizId}/${index + 1}/`;
/** `personalityId` is the result's top match, whose card the link preview shows. */
export const resultPath = (quizId: string, personalityId?: string) => `quiz/${quizId}/result/${personalityId ? `${personalityId}/` : ''}`;
export const resultHash = ({ code, name }: SharedResult) => `#${code}${name ? `/${encodeURIComponent(name)}` : ''}`;

/** The name from a link; a garbled one is dropped rather than shown. */
function decodeName(segment: string): string {
  try {
    return decodeURIComponent(segment).trim().slice(0, MAX_NAME_LENGTH);
  } catch {
    return '';
  }
}

/** Reads a path relative to the base URL, and the hash; anything unknown is the home page. */
export function parseRoute(path: string, hash: string): Route {
  const [section, quizId, sub, ...rest] = path.split('/').filter(Boolean);
  if (section !== 'quiz' || !quizId) return { page: 'home' };
  if (sub === undefined) return { page: 'quiz', quizId };
  if (sub === 'result' && rest.length <= 1) {
    const fragment = hash.replace(/^#/, '');
    if (!fragment) return { page: 'result', quizId };
    const slash = fragment.indexOf('/');
    const shared = slash === -1 ? { code: fragment, name: '' } : { code: fragment.slice(0, slash), name: decodeName(fragment.slice(slash + 1)) };
    return { page: 'result', quizId, shared };
  }
  const number = Number(sub);
  if (rest.length === 0 && Number.isInteger(number)) return { page: 'question', quizId, number };
  return { page: 'quiz', quizId };
}
