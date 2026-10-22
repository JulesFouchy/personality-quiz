const DURATION_MS = 260;
const EASING = 'cubic-bezier(0.2, 0.8, 0.2, 1)';

/**
 * Animates a <details> element's height when it opens or closes, and fades its content in.
 * Native <details> toggles instantly, and CSS can't yet animate to `height: auto` in every browser.
 */
export function animateDetails(details: HTMLDetailsElement): HTMLDetailsElement {
  const summary = details.querySelector(':scope > summary');
  if (!summary) return details;
  let running: Animation | undefined;

  summary.addEventListener('click', (event) => {
    event.preventDefault();
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      details.open = !details.open;
      return;
    }
    const closing = details.open && !details.classList.contains('closing');
    const from = details.offsetHeight;
    running?.cancel();

    // Measure the other end synchronously; the browser doesn't paint in between.
    details.open = !closing;
    const to = details.offsetHeight;
    details.open = true;

    details.classList.toggle('closing', closing);
    details.style.overflow = 'hidden';
    running = details.animate({ height: [`${from}px`, `${to}px`] }, { duration: DURATION_MS, easing: EASING });
    if (!closing) {
      for (const child of details.children) {
        if (child === summary) continue;
        child.animate(
          { opacity: [0, 1], transform: ['translateY(-6px)', 'none'] },
          { duration: DURATION_MS, easing: EASING },
        );
      }
    }
    running.onfinish = () => {
      details.open = !closing;
      details.classList.remove('closing');
      details.style.overflow = '';
      running = undefined;
    };
  });
  return details;
}
