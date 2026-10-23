import { describe, expect, it } from 'vitest';
import { frenchSpacing } from './dom';

describe('frenchSpacing', () => {
  it('makes spaces before high punctuation and inside guillemets non-breaking', () => {
    expect(frenchSpacing('Tu es… prêt·e ? Oui ! « Bien » : 52 % ; fin')).toBe('Tu es… prêt·e\u202F? Oui\u202F! «\u202FBien\u202F»\u00A0: 52\u202F%\u202F; fin');
  });

  it('leaves punctuation without a space alone', () => {
    expect(frenchSpacing('https://example.com/?q=1')).toBe('https://example.com/?q=1');
  });
});
