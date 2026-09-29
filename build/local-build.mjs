// Локальная сборка без npm: esbuild из глобального tsx + React из глобальных пакетов.
// Результат — app/.local (как dist), чтобы гонять Playwright у себя. Боевая сборка — Vite в GitHub Actions.
import { build } from '/home/claude/.npm-global/lib/node_modules/tsx/node_modules/esbuild/lib/main.js';
import fs from 'fs';
const app = '/home/claude/English/app';
const out = app + '/.local';
fs.rmSync(out, { recursive: true, force: true });
fs.cpSync(app + '/public', out, { recursive: true });
const t0 = Date.now();
await build({
  entryPoints: [app + '/src/main.tsx'], bundle: true, splitting: true, format: 'esm', outdir: out + '/assets',
  jsx: 'automatic', target: 'es2022', sourcemap: 'inline', logLevel: 'warning',
  nodePaths: ['/home/claude/.npm-global/lib/node_modules'],
  define: { 'process.env.NODE_ENV': '"development"', 'import.meta.env.DEV': 'true', 'import.meta.env.BASE_URL': '"./"' },
  loader: { '.svg': 'file', '.png': 'file' },
});
let html = fs.readFileSync(app + '/index.html', 'utf8')
  .replace('<script type="module" src="/src/main.tsx"></script>', '<link rel="stylesheet" href="assets/main.css"><script type="module" src="assets/main.js"></script>');
fs.writeFileSync(out + '/index.html', html);
// esbuild не подключает CSS ленивых чанков — склеиваем всё в main.css
const css = fs.readdirSync(out + '/assets').filter((f) => f.endsWith('.css'));
const all = ['main.css', ...css.filter((f) => f !== 'main.css')].filter((f) => fs.existsSync(out + '/assets/' + f)).map((f) => fs.readFileSync(out + '/assets/' + f, 'utf8')).join('\n');
fs.writeFileSync(out + '/assets/main.css', all);
console.log('built in', Date.now() - t0, 'ms');
