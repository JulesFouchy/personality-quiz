/** The site's base path, e.g. "/personality-quiz/" on GitHub Pages. */
export const BASE = import.meta.env.BASE_URL;

/** The absolute path of a route path from `src/routes.ts`. */
export const url = (path: string) => `${BASE}${path}`;

/**
 * Moves to `href` without reloading the page. The router renders it once the current render is done, so a view can redirect
 * while it renders.
 */
export function navigate(href: string, { replace = false } = {}): void {
  if (replace) history.replaceState(null, '', href);
  else history.pushState(null, '', href);
  queueMicrotask(() => window.dispatchEvent(new PopStateEvent('popstate')));
}
