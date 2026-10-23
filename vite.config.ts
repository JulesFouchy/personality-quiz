import { defineConfig } from 'vite';
import { sharePreviews } from './scripts/share-previews.ts';

export default defineConfig({
  // Relative asset paths so the build works from any sub-path (e.g. GitHub Pages).
  base: './',
  plugins: [sharePreviews()],
});
