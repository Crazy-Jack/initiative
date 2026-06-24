import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import puppeteer from 'puppeteer-core';

const root = process.cwd();
const outDir = join(root, 'out');
const downloadDir = join(root, 'download');
const mhtmlPath = join(downloadDir, 'cmu-modelverse-initiative-website.mhtml');
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const port = 8765;
const url = `http://127.0.0.1:${port}/`;

mkdirSync(downloadDir, { recursive: true });

const server = spawn('python3', ['-m', 'http.server', String(port), '--bind', '127.0.0.1'], {
  cwd: outDir,
  stdio: 'ignore',
});

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const stopServer = () => {
  if (!server.killed) server.kill('SIGTERM');
};

try {
  await wait(800);

  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 120000 });

  // Scroll through page so below-the-fold content renders for the snapshot.
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.max(window.innerHeight * 0.75, 400);
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await delay(250);
    }
    window.scrollTo(0, 0);
    await delay(500);
  });

  await wait(1500);

  const client = await page.createCDPSession();
  const { data } = await client.send('Page.captureSnapshot', { format: 'mhtml' });
  writeFileSync(mhtmlPath, data, 'utf8');

  await browser.close();
  console.log(`MHTML export ready: ${mhtmlPath}`);
} catch (error) {
  console.error('MHTML export failed:', error);
  process.exitCode = 1;
} finally {
  stopServer();
}
