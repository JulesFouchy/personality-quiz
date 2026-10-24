// Archives the current layout of every released quiz, so the links shared before its next edit keep working.
// Run it after adding, removing, reordering or renaming questions or answers in a released quiz; the tests fail until then.
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { quizzes } from '../src/quizzes';
import { fingerprint, layoutOf, shareLayouts, type LayoutArchive } from '../src/share';

const ARCHIVE_PATH = fileURLToPath(new URL('../src/data/share-layouts.json', import.meta.url));

/** One question per line, so a diff shows which layout was added. */
function formatArchive(archive: LayoutArchive): string {
  const quizBlocks = Object.entries(archive).map(([quizId, layouts]) => {
    const layoutBlocks = layouts.map((layout) => `    [\n${layout.map((entry) => `      ${JSON.stringify(entry)}`).join(',\n')}\n    ]`);
    return `  ${JSON.stringify(quizId)}: [\n${layoutBlocks.join(',\n')}\n  ]`;
  });
  return `{\n${quizBlocks.join(',\n')}\n}\n`;
}

const archive: LayoutArchive = structuredClone(shareLayouts);
for (const quiz of quizzes) {
  if (!quiz.released) continue;
  const layout = layoutOf(quiz);
  const check = fingerprint(layout);
  const archived = archive[quiz.id]?.find((l) => fingerprint(l) === check);
  if (archived && JSON.stringify(archived) !== JSON.stringify(layout)) {
    throw new Error(`${quiz.id}: the new layout has the same fingerprint "${check}" as an archived one; change an id to get another`);
  }
  if (archived) continue;
  (archive[quiz.id] ??= []).push(layout);
  console.log(`${quiz.id}: archived layout ${check}`);
}
writeFileSync(ARCHIVE_PATH, formatArchive(archive));
