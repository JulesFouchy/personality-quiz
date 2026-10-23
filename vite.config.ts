import { defineConfig } from 'vite';
import { sharePreviews } from './scripts/share-previews.ts';

export default defineConfig({
  // Absolute, since each route has its own page at its own depth: the site's path on GitHub Pages, or the root.
  base: process.env.SITE_URL ? new URL(process.env.SITE_URL).pathname.replace(/\/?$/, '/') : '/',
  plugins: [sharePreviews()],
});
