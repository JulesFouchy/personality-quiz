type Child = Node | string | false | null | undefined;
type Props = Record<string, string | number | ((event: Event) => void)>;

/**
 * Makes the spaces French typography attaches to punctuation non-breaking, so a line never starts with "?", "%" or "»", or ends with "«".
 * Narrow before ? ! ; % and inside guillemets, full width before a colon.
 */
export function frenchSpacing(text: string): string {
  return text
    .replace(/ ([?!;%»])/g, '\u202F$1')
    .replace(/« /g, '«\u202F')
    .replace(/ :/g, '\u00A0:');
}

/** Creates an element. `on*` props become listeners, the rest attributes; string children are inserted as text, never as HTML. */
export function el<K extends keyof HTMLElementTagNameMap>(tag: K, props: Props = {}, ...children: Child[]): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);
  for (const [key, value] of Object.entries(props)) {
    if (typeof value === 'function') element.addEventListener(key.slice(2).toLowerCase(), value);
    else element.setAttribute(key, String(value));
  }
  for (const child of children) {
    if (typeof child === 'string') element.append(frenchSpacing(child));
    else if (child !== false && child !== null && child !== undefined) element.append(child);
  }
  return element;
}
