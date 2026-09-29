// Собирает app/src/styles/icons.css: только используемые иконки Phosphor (обычные и заливка) как CSS-маски.
// Разметка не меняется: <i class="ph ph-house"> / <i class="ph-fill ph-house">.
// Источник SVG: git clone --depth 1 --filter=blob:none --sparse https://github.com/phosphor-icons/core
//               && git sparse-checkout set assets/regular assets/fill
// Запуск: node build/icons.mjs <папка phosphor core>
import fs from 'node:fs';
import path from 'node:path';

const core = process.argv[2];
if (!core) { console.error('usage: node build/icons.mjs <phosphor-core dir>'); process.exit(1); }
const app = new URL('../app/', import.meta.url).pathname;
const all = new Set(fs.readdirSync(path.join(core, 'assets/regular')).map((f) => f.replace(/\.svg$/, '')));

export function usedIcons(appDir, known) {
  const used = new Set();
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).forEach((e) => {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.(tsx?|css)$/.test(e.name) && !p.endsWith('icons.css')) {
      const src = fs.readFileSync(p, 'utf8');
      // строки-литералы целиком, совпадающие с именем иконки, и классы ph-<имя>
      for (const m of src.matchAll(/['"`]([a-z0-9-]+)['"`]/g)) if (known.has(m[1])) used.add(m[1]);
      for (const m of src.matchAll(/ph-([a-z0-9-]+)/g)) if (known.has(m[1])) used.add(m[1]);
    }
  });
  walk(path.join(appDir, 'src'));
  // иконки из данных: поля icon/ic/ico и классы в html контента
  for (const f of fs.readdirSync(path.join(appDir, 'public/data'))) {
    if (!f.endsWith('.json')) continue;
    const src = fs.readFileSync(path.join(appDir, 'public/data', f), 'utf8');
    for (const m of src.matchAll(/"(?:icon|ic|ico)"\s*:\s*"([a-z0-9-]+)"/g)) if (known.has(m[1])) used.add(m[1]);
    for (const m of src.matchAll(/ph-([a-z0-9-]+)/g)) if (known.has(m[1])) used.add(m[1]);
  }
  return [...used].sort();
}

const svgUrl = (file) => {
  const svg = fs.readFileSync(file, 'utf8').replace(/\s*fill="currentColor"/, '').replace(/\n/g, '');
  return 'url("data:image/svg+xml,' + svg.replace(/"/g, "'").replace(/</g, '%3C').replace(/>/g, '%3E').replace(/#/g, '%23') + '")';
};

const names = usedIcons(app, all);
let css = `/* Сгенерировано build/icons.mjs — не править руками. Иконок: ${names.length} */
.ph, .ph-fill { display: inline-block; width: 1em; height: 1em; vertical-align: -0.125em; flex-shrink: 0; font-style: normal; line-height: 1; }
.ph::before, .ph-fill::before { content: ""; display: block; width: 100%; height: 100%; background: currentColor; -webkit-mask: var(--ph) center / contain no-repeat; mask: var(--ph) center / contain no-repeat; }
`;
for (const n of names) {
  css += `.ph-${n}{--ph:${svgUrl(path.join(core, 'assets/regular', n + '.svg'))}}\n`;
  const fill = path.join(core, 'assets/fill', n + '-fill.svg');
  if (fs.existsSync(fill)) css += `.ph-fill.ph-${n}{--ph:${svgUrl(fill)}}\n`;
}
fs.writeFileSync(path.join(app, 'src/styles/icons.css'), css);
fs.writeFileSync(path.join(app, 'src/styles/icons.json'), JSON.stringify(names));
console.log(names.length, 'icons,', (css.length / 1024).toFixed(0), 'KB');
