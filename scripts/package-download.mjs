import { execSync } from 'node:child_process';
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const downloadDir = join(root, 'download');
const zipPath = join(downloadDir, 'cmu-modelverse-initiative-website.zip');

mkdirSync(downloadDir, { recursive: true });

writeFileSync(
  join(root, 'out', 'README.txt'),
  [
    'CMU Modelverse Dev Initiative — Static Website Export',
    '',
    'This folder contains a self-contained static export of the website.',
    '',
    'How to view locally:',
    '  1. Open a terminal in this folder',
    '  2. Run:  python3 -m http.server 8080',
    '  3. Open: http://localhost:8080',
    '',
    'Alternative:',
    '  npx serve . -p 8080',
    '',
    'Note: Open index.html directly in a browser may not load all assets correctly.',
    'Use a local server as shown above.',
    '',
  ].join('\n'),
);

if (existsSync(zipPath)) {
  execSync(`rm "${zipPath}"`);
}

execSync(`cd "${join(root, 'out')}" && zip -r "${zipPath}" .`, { stdio: 'inherit' });

console.log(`\nDownload package ready: ${zipPath}`);
