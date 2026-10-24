// Link previews (Open Graph). Previewers fetch a page without running JavaScript, so the build gives every route of each released
// quiz its own copy of the app's page, carrying that quiz's preview: the quiz's card, or on a result page the card of its top
// match. Other paths fall back to 404.html, a copy with the site's default preview.
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { runnerImport, type Plugin, type ViteDevServer } from 'vite';
import type * as QuizzesModule from '../src/quizzes.ts';
import type * as RoutesModule from '../src/routes.ts';
import type { Personality, Quiz } from '../src/types.ts';
import type * as DomModule from '../src/ui/dom.ts';

const require = createRequire(import.meta.url);

type Routes = typeof RoutesModule;

/** The site's modules this script uses, loaded fresh through Vite: this config can't import them directly, since they use extensionless imports. */
interface Site {
  /** Every quiz, unreleased ones included. */
  quizzes: Quiz[];
  routes: Routes;
  frenchSpacing: typeof DomModule.frenchSpacing;
}

async function loadSite(): Promise<Site> {
  const load = async <T>(file: string) =>
    (await runnerImport<T>(fileURLToPath(new URL(`../src/${file}`, import.meta.url)), { configFile: false, logLevel: 'error' })).module;
  const [quizzes, routes, dom] = await Promise.all([load<typeof QuizzesModule>('quizzes.ts'), load<Routes>('routes.ts'), load<typeof DomModule>('ui/dom.ts')]);
  return { quizzes: quizzes.quizzes, routes, frenchSpacing: dom.frenchSpacing };
}

const SITE_NAME = 'Quiz de personnalité';
const SITE_TAGLINE = 'Tu es plutôt creeper ou petit pois ? Compare avec tes ami·es.';
const SITE_EMOJI = '🥸';
const WIDTH = 1200;
const HEIGHT = 630;
const IMAGE = 'preview.png';

// The site's dark theme (src/style.css).
const COLORS = { bg: '#171614', surface: '#22201d', text: '#f0ece4', muted: '#a39d92', border: '#3a3631', accent: '#8cc063', compare: '#e3a062' };

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

/**
 * French spacing as Satori handles it: it lays out a narrow no-break space too wide, so images use a regular one.
 */
const imageText = (site: Site, text: string) => site.frenchSpacing(text).replace(/\u202F/g, '\u00A0');

/** Text that only wraps between words: Satori would also break after a hyphen, splitting "es-tu" in a title. */
function words(site: Site, text: string, style: Record<string, unknown>): Element {
  return h(
    'div',
    { style: { display: 'flex', flexWrap: 'wrap', columnGap: '0.25em', ...style } },
    ...imageText(site, text)
      .split(' ')
      .map((word) => h('div', { style: { display: 'flex', flexShrink: 0 } }, word)),
  );
}

interface CardContent {
  border: string;
  header?: string;
  emoji: string;
  heading: string;
  body: string;
  footer: string;
  footerColor: string;
}

/** A card in the site's style: a big emoji next to a heading and its text, between a header and a footer line. */
async function cardImage(site: Site, { border, header, emoji, heading, body, footer, footerColor }: CardContent): Promise<Buffer> {
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
            border: `4px solid ${border}`,
            borderRadius: 32,
          },
        },
        header ? h('div', { style: { display: 'flex', fontSize: 26, fontWeight: 600, color: COLORS.muted } }, imageText(site, header)) : '',
        h(
          'div',
          { style: { display: 'flex', flex: 1, alignItems: 'center', gap: 48 } },
          h('img', { src: await emojiDataUri(emoji), width: 190, height: 190 }),
          h(
            'div',
            { style: { display: 'flex', flexDirection: 'column', flex: 1, gap: 12 } },
            words(site, heading, { fontSize: 64, fontWeight: 800, color: COLORS.text, lineHeight: 1.1 }),
            h('div', { style: { display: 'flex', fontSize: descriptionSize(body), color: COLORS.text, lineHeight: 1.35 } }, imageText(site, body)),
          ),
        ),
        h('div', { style: { display: 'flex', fontSize: 28, fontWeight: 800, color: footerColor } }, imageText(site, footer)),
      ),
    ),
  );
}

/** A quiz's card: its emoji, title, hook and size. */
const quizImage = (site: Site, quiz: Quiz) =>
  cardImage(site, {
    border: COLORS.border,
    emoji: quiz.emoji,
    heading: quiz.title,
    body: quiz.description,
    footer: `${quiz.questions.length} questions · ${quiz.personalities.length} résultats possibles`,
    footerColor: COLORS.muted,
  });

/** A result's top match, as on a shared result page: the sender's orange border, emoji, name and full description. */
const personalityImage = (site: Site, quiz: Quiz, personality: Personality) =>
  cardImage(site, {
    border: COLORS.compare,
    header: `${quiz.emoji} ${quiz.title}`,
    emoji: personality.emoji,
    heading: personality.name,
    body: personality.description,
    footer: 'Fais le quiz et compare tes résultats',
    footerColor: COLORS.accent,
  });

/** The site's default preview: its emoji, name and tagline. */
async function defaultImage(site: Site): Promise<Buffer> {
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
      h('img', { src: await emojiDataUri(SITE_EMOJI), width: 160, height: 160 }),
      h('div', { style: { display: 'flex', fontSize: 80, fontWeight: 800, color: COLORS.text } }, SITE_NAME),
      h('div', { style: { display: 'flex', fontSize: 34, color: COLORS.muted } }, imageText(site, SITE_TAGLINE)),
    ),
  );
}

interface Preview {
  title: string;
  description: string;
  /** The image's path, relative to the site's root. */
  image: string;
}

/** The preview of a route path from src/routes.ts, among `quizzes`; anything else gets the site's default. */
function previewOf(site: Site, quizzes: Quiz[], path: string): Preview {
  const { parseRoute, quizPath, resultPath } = site.routes;
  const route = parseRoute(path, '');
  const quiz = route.page !== 'home' ? quizzes.find((q) => q.id === route.quizId) : undefined;
  if (!quiz) return { title: SITE_NAME, description: SITE_TAGLINE, image: IMAGE };
  const personality = quiz.personalities.find((p) => path === resultPath(quiz.id, p.id));
  if (personality) {
    return { title: quiz.title, description: 'Voici mon résultat. Fais le quiz à ton tour et compare avec le mien !', image: `${resultPath(quiz.id, personality.id)}${IMAGE}` };
  }
  return { title: quiz.title, description: quiz.description, image: `${quizPath(quiz.id)}${IMAGE}` };
}

/** Every route path of a quiz: its own, each question's, and its result's with and without a top match. */
function quizPaths({ routes }: Site, quiz: Quiz): string[] {
  return [
    routes.quizPath(quiz.id),
    ...quiz.questions.map((_, index) => routes.questionPath(quiz.id, index)),
    routes.resultPath(quiz.id),
    ...quiz.personalities.map((p) => routes.resultPath(quiz.id, p.id)),
  ];
}

const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Wraps the tags this plugin adds to the app's page, so the build can swap them for each route's copy.
const START = '<!-- preview -->';
const END = '<!-- /preview -->';

function previewTags(site: Site, { title, description, image }: Preview, siteUrl: string): string {
  const tags = [
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:title" content="${escapeHtml(site.frenchSpacing(title))}" />`,
    `<meta property="og:description" content="${escapeHtml(site.frenchSpacing(description))}" />`,
    `<meta property="og:image" content="${escapeHtml(siteUrl + image)}" />`,
    `<meta property="og:image:width" content="${WIDTH}" />`,
    `<meta property="og:image:height" content="${HEIGHT}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];
  return [START, ...tags, END].join('\n    ');
}

/** The app's page with `preview`'s title and tags in place of the ones it has. */
function withPreview(site: Site, html: string, preview: Preview, siteUrl: string): string {
  const start = html.indexOf(START);
  const end = html.indexOf(END) + END.length;
  return (html.slice(0, start) + previewTags(site, preview, siteUrl) + html.slice(end)).replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(preview.title)}</title>`,
  );
}

/**
 * Gives every route of each released quiz its own page and preview image, and the site a default preview.
 * Preview tags need absolute image URLs: the build takes the site's URL from `SITE_URL`, which the deploy workflow sets.
 */
export function sharePreviews(): Plugin {
  let siteUrl = '';
  let server: ViteDevServer | undefined;
  return {
    name: 'share-previews',
    // After Vite has written the app's page, which the build copies.
    enforce: 'post',
    configResolved(config) {
      if (config.command !== 'build') return;
      siteUrl = process.env.SITE_URL ?? '';
      if (siteUrl && !siteUrl.endsWith('/')) siteUrl += '/';
      if (!siteUrl) config.logger.warn('SITE_URL is not set: link previews will point at relative image URLs, which previewers ignore.');
    },
    async transformIndexHtml(html, context) {
      const site = await loadSite();
      if (!server) return html.replace('</head>', `  ${previewTags(site, previewOf(site, [], ''), siteUrl)}\n  </head>`);
      // In `npm run dev`, each route gets its preview on request, unreleased quizzes included.
      const origin = server.resolvedUrls?.local[0] ?? '/';
      const path = new URL(context.originalUrl ?? context.path, 'http://localhost').pathname.slice(server.config.base.length);
      return withPreview(site, html.replace('</head>', `  ${START}${END}\n  </head>`), previewOf(site, site.quizzes, path), origin);
    },
    configureServer(devServer) {
      server = devServer;
      devServer.middlewares.use(async (req, res, next) => {
        const match = /^\/(?:quiz\/([\w-]+)\/(?:result\/([\w-]+)\/)?)?preview\.png$/.exec(req.url?.split(/[?#]/)[0] ?? '');
        if (!match) return next();
        try {
          const site = await loadSite();
          const [, quizId, personalityId] = match;
          const quiz = site.quizzes.find((q) => q.id === quizId);
          const personality = quiz?.personalities.find((p) => p.id === personalityId);
          if (quizId && !quiz) return next();
          if (personalityId && !personality) return next();
          res.setHeader('Content-Type', 'image/png');
          res.end(await (personality ? personalityImage(site, quiz!, personality) : quiz ? quizImage(site, quiz) : defaultImage(site)));
        } catch (error) {
          next(error);
        }
      });
    },
    async generateBundle(_, bundle) {
      const site = await loadSite();
      const released = site.quizzes.filter((quiz) => quiz.released);
      const page = bundle['index.html'];
      if (page?.type !== 'asset' || typeof page.source !== 'string') throw new Error('share-previews: the app page index.html is missing from the bundle');
      const html = page.source;
      this.emitFile({ type: 'asset', fileName: '404.html', source: html });
      this.emitFile({ type: 'asset', fileName: IMAGE, source: await defaultImage(site) });
      for (const quiz of released) {
        for (const path of quizPaths(site, quiz)) {
          this.emitFile({ type: 'asset', fileName: `${path}index.html`, source: withPreview(site, html, previewOf(site, released, path), siteUrl) });
        }
        this.emitFile({ type: 'asset', fileName: `${site.routes.quizPath(quiz.id)}${IMAGE}`, source: await quizImage(site, quiz) });
        for (const personality of quiz.personalities) {
          this.emitFile({
            type: 'asset',
            fileName: `${site.routes.resultPath(quiz.id, personality.id)}${IMAGE}`,
            source: await personalityImage(site, quiz, personality),
          });
        }
      }
    },
  };
}
