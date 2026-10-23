// Link previews (Open Graph) for share links. Previewers fetch a page without running JavaScript and never see the part of a
// URL after "#", so each personality of each released quiz gets a static page carrying its card as an image; the page then
// forwards the visitor to the shared result in the app. The site's own pages get a default preview.
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { runnerImport, type Plugin } from 'vite';
import type * as QuizzesModule from '../src/quizzes.ts';
import type * as ShareModule from '../src/share.ts';
import type { Personality, Quiz } from '../src/types.ts';
import type * as DomModule from '../src/ui/dom.ts';

const require = createRequire(import.meta.url);

// Set by `loadQuizzes`, from the site's own modules.
let frenchSpacing: typeof DomModule.frenchSpacing;
let previewPath: typeof ShareModule.previewPath;

/**
 * Every quiz, hidden ones included, loaded fresh through Vite: this config can't import the site's modules directly, since they
 * use extensionless imports.
 */
async function loadQuizzes(): Promise<Quiz[]> {
  const load = async <T>(file: string) =>
    (await runnerImport<T>(fileURLToPath(new URL(`../src/${file}`, import.meta.url)), { configFile: false, logLevel: 'error' })).module;
  const [quizzes, share, dom] = await Promise.all([load<typeof QuizzesModule>('quizzes.ts'), load<typeof ShareModule>('share.ts'), load<typeof DomModule>('ui/dom.ts')]);
  frenchSpacing = dom.frenchSpacing;
  previewPath = share.previewPath;
  return quizzes.quizzes;
}

const SITE_NAME = 'Quiz de personnalité';
const SITE_TAGLINE = 'Réponds honnêtement… ou pas. Puis compare avec tes ami·es.';
const WIDTH = 1200;
const HEIGHT = 630;
const DEFAULT_IMAGE = 'preview.png';

// The site's light theme (src/style.css).
const COLORS = { bg: '#f6f4ef', surface: '#ffffff', text: '#1f1d1a', muted: '#6b665e', accent: '#5b8c3a', compare: '#d9893f' };

// Satori takes a React-like element tree; this builds one without React.
interface Element {
  type: string;
  props: Record<string, unknown>;
}

function h(type: string, props: Record<string, unknown>, ...children: (Element | string)[]): Element {
  return { type, props: { ...props, children } };
}

/** The Twemoji file for an emoji: code points in hex, without the variation selector unless the emoji is a ZWJ sequence. */
async function emojiSvg(emoji: string): Promise<string> {
  const codes = [...emoji].map((c) => c.codePointAt(0)!.toString(16));
  const name = codes.includes('200d') ? codes.join('-') : codes.filter((c) => c !== 'fe0f').join('-');
  return readFile(require.resolve(`@twemoji/svg/${name}.svg`), 'utf8');
}

const emojiDataUri = async (emoji: string) => `data:image/svg+xml;base64,${Buffer.from(await emojiSvg(emoji)).toString('base64')}`;

let fonts: { name: string; data: Buffer; weight: 400 | 600 | 800; style: 'normal' }[] | undefined;

async function render(tree: Element): Promise<Buffer> {
  const [{ default: satori }, { Resvg }] = await Promise.all([import('satori'), import('@resvg/resvg-js')]);
  fonts ??= await Promise.all(
    ([400, 600, 800] as const).map(async (weight) => ({
      name: 'Inter',
      data: await readFile(require.resolve(`@fontsource/inter/files/inter-latin-${weight}-normal.woff`)),
      weight,
      style: 'normal' as const,
    })),
  );
  const svg = await satori(tree as Parameters<typeof satori>[0], {
    width: WIDTH,
    height: HEIGHT,
    fonts,
    loadAdditionalAsset: async (code, segment) => (code === 'emoji' ? emojiDataUri(segment) : segment),
  });
  return new Resvg(svg, { fitTo: { mode: 'width', value: WIDTH } }).render().asPng();
}

/** Smaller text for longer descriptions, so the longest still fits the card. */
function descriptionSize(description: string): number {
  if (description.length <= 200) return 32;
  if (description.length <= 320) return 28;
  if (description.length <= 420) return 25;
  return 22;
}

/** The personality's card as on a shared result page: the sender's orange border, emoji, name and full description. */
async function personalityImage(quiz: Quiz, personality: Personality): Promise<Buffer> {
  return render(
    h(
      'div',
      { style: { display: 'flex', width: '100%', height: '100%', padding: 40, background: COLORS.bg, fontFamily: 'Inter' } },
      h(
        'div',
        {
          style: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: '36px 48px',
            background: COLORS.surface,
            border: `4px solid ${COLORS.compare}`,
            borderRadius: 32,
          },
        },
        h('div', { style: { display: 'flex', fontSize: 26, fontWeight: 600, color: COLORS.muted } }, frenchSpacing(`${quiz.emoji} ${quiz.title}`)),
        h(
          'div',
          { style: { display: 'flex', flex: 1, alignItems: 'center', gap: 48 } },
          h('img', { src: await emojiDataUri(personality.emoji), width: 190, height: 190 }),
          h(
            'div',
            { style: { display: 'flex', flexDirection: 'column', flex: 1, gap: 12 } },
            h('div', { style: { display: 'flex', fontSize: 64, fontWeight: 800, color: COLORS.text, lineHeight: 1.1 } }, personality.name),
            h(
              'div',
              { style: { display: 'flex', fontSize: descriptionSize(personality.description), color: COLORS.text, lineHeight: 1.35 } },
              frenchSpacing(personality.description),
            ),
          ),
        ),
        h('div', { style: { display: 'flex', fontSize: 28, fontWeight: 800, color: COLORS.accent } }, frenchSpacing('Fais le quiz et compare tes résultats')),
      ),
    ),
  );
}

/** The site's default preview: its name, tagline and the emoji of every released quiz. */
async function defaultImage(quizzes: Quiz[]): Promise<Buffer> {
  return render(
    h(
      'div',
      {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28,
          width: '100%',
          height: '100%',
          background: COLORS.bg,
          fontFamily: 'Inter',
        },
      },
      h('div', { style: { display: 'flex', gap: 28 } }, ...(await Promise.all(quizzes.map(async (q) => h('img', { src: await emojiDataUri(q.emoji), width: 110, height: 110 }))))),
      h('div', { style: { display: 'flex', fontSize: 80, fontWeight: 800, color: COLORS.text } }, SITE_NAME),
      h('div', { style: { display: 'flex', fontSize: 34, color: COLORS.muted } }, frenchSpacing(SITE_TAGLINE)),
    ),
  );
}

const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function previewTags(title: string, description: string, imageUrl: string): string {
  return [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:title" content="${escapeHtml(frenchSpacing(title))}" />`,
    `<meta property="og:description" content="${escapeHtml(frenchSpacing(description))}" />`,
    `<meta property="og:image" content="${escapeHtml(imageUrl)}" />`,
    `<meta property="og:image:width" content="${WIDTH}" />`,
    `<meta property="og:image:height" content="${HEIGHT}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ].join('\n    ');
}

/** The page a share link opens: previewers read its tags; visitors are sent on to the shared result, whose code follows "#". */
function personalityPage(quiz: Quiz, personality: Personality, siteUrl: string): string {
  const appUrl = `../../#/quiz/${quiz.id}/`;
  return `<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="robots" content="noindex" />
    <title>${escapeHtml(`${personality.name} · ${quiz.title}`)}</title>
    ${previewTags(
      `${personality.emoji} ${personality.name} · ${quiz.title}`,
      'Voici mon résultat. Fais le quiz à ton tour et compare avec le mien !',
      `${siteUrl}${previewPath(quiz, personality).replace(/\.html$/, '.png')}`,
    )}
    <script>
      location.replace(${JSON.stringify(appUrl)} + (location.hash.length > 1 ? 'shared/' + location.hash.slice(1) : ''));
    </script>
  </head>
  <body>
    <a href="${appUrl}">${escapeHtml(quiz.title)}</a>
  </body>
</html>
`;
}

/**
 * Generates a preview page and image for each personality of each released quiz, and adds the default preview to the site.
 * Preview tags need absolute image URLs: the build takes the site's URL from `SITE_URL`, which the deploy workflow sets.
 */
export function sharePreviews(): Plugin {
  let siteUrl = '';
  return {
    name: 'share-previews',
    configResolved(config) {
      if (config.command !== 'build') return;
      siteUrl = process.env.SITE_URL ?? '';
      if (siteUrl && !siteUrl.endsWith('/')) siteUrl += '/';
      if (!siteUrl) config.logger.warn('SITE_URL is not set: link previews will point at relative image URLs, which previewers ignore.');
    },
    async transformIndexHtml(html) {
      await loadQuizzes();
      return html.replace('</head>', `  ${previewTags(SITE_NAME, SITE_TAGLINE, `${siteUrl}${DEFAULT_IMAGE}`)}\n  </head>`);
    },
    // In `npm run dev`, previews are rendered on request, hidden quizzes included.
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const path = req.url?.split(/[?#]/)[0] ?? '';
        const match = /^\/s\/([\w-]+)\/([\w-]+)\.(html|png)$/.exec(path);
        if (path !== `/${DEFAULT_IMAGE}` && !match) return next();
        try {
          const quizzes = await loadQuizzes();
          if (!match) {
            res.setHeader('Content-Type', 'image/png');
            res.end(await defaultImage(quizzes));
            return;
          }
          const [, quizId, personalityId, extension] = match;
          const quiz = quizzes.find((q) => q.id === quizId);
          const personality = quiz?.personalities.find((p) => p.id === personalityId);
          if (!quiz || !personality) return next();
          if (extension === 'png') {
            res.setHeader('Content-Type', 'image/png');
            res.end(await personalityImage(quiz, personality));
          } else {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(personalityPage(quiz, personality, `http://${req.headers.host}/`));
          }
        } catch (error) {
          next(error);
        }
      });
    },
    async generateBundle() {
      const released = (await loadQuizzes()).filter((quiz) => !quiz.hidden);
      this.emitFile({ type: 'asset', fileName: DEFAULT_IMAGE, source: await defaultImage(released) });
      for (const quiz of released) {
        for (const personality of quiz.personalities) {
          const page = previewPath(quiz, personality);
          this.emitFile({ type: 'asset', fileName: page, source: personalityPage(quiz, personality, siteUrl) });
          this.emitFile({ type: 'asset', fileName: page.replace(/\.html$/, '.png'), source: await personalityImage(quiz, personality) });
        }
      }
    },
  };
}
