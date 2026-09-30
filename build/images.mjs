// Сжимает картинки для сайта: build/images-src/<папка>/<имя>.png|jpg (любой размер, исходники в git не идут)
//   → app/public/img/<папка>/<имя>-<размер>.avif и .webp (размеры SIZES, по ширине).
// Уже обработанные файлы пропускаются, пока исходник не изменится.
// Запуск (sharp ставится вместе с зависимостями app/):
//   node build/images.mjs            — обработать новые и изменённые
//   node build/images.mjs --force    — пересобрать всё
//   node build/images.mjs --watch    — следить за папкой и сжимать сразу
import fs from 'node:fs/promises';
import { watch } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'build/images-src');
const OUT = path.join(root, 'app/public/img');
// 64 — обычный показ, 128 — ретина, 256 — крупный показ на ретине
const SIZES = [64, 128, 256];
const INPUT = /\.(png|jpe?g|webp|tiff?)$/i;
const FORCE = process.argv.includes('--force');
const WATCH = process.argv.includes('--watch');

// sharp лежит в app/node_modules — ищем его оттуда
const sharp = (await import(createRequire(path.join(root, 'app/package.json')).resolve('sharp'))).default;

const kb = (b) => (b / 1024).toFixed(1) + ' КБ';
const mtime = (f) => fs.stat(f).then((s) => s.mtimeMs, () => 0);

async function* walk(dir) {
    for (const e of await fs.readdir(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) yield* walk(p);
        else if (INPUT.test(e.name)) yield p;
    }
}

async function one(src) {
    const rel = path.relative(SRC, src);
    const base = path.join(OUT, path.dirname(rel), path.parse(rel).name);
    const outs = SIZES.flatMap((w) => [`${base}-${w}.avif`, `${base}-${w}.webp`]);
    if (!FORCE) {
        const t = await mtime(src);
        if ((await Promise.all(outs.map(mtime))).every((o) => o > t)) return null;
    }
    await fs.mkdir(path.dirname(base), { recursive: true });
    const img = sharp(src, { limitInputPixels: false });
    const res = await Promise.all(
        SIZES.flatMap((w) => {
            const r = img.clone().resize(w, w, { fit: 'inside', withoutEnlargement: true });
            return [
                r.clone().avif({ quality: 60, effort: 6 }).toFile(`${base}-${w}.avif`),
                r.clone().webp({ quality: 82, alphaQuality: 90, effort: 6, smartSubsample: true }).toFile(`${base}-${w}.webp`),
            ];
        }),
    );
    const before = (await fs.stat(src)).size;
    const after = res.reduce((s, r) => s + r.size, 0);
    console.log(`✔ ${rel.padEnd(26)} ${kb(before).padStart(11)} → ${kb(after).padStart(8)} (все версии)`);
    return { before, after };
}

let n = 0, before = 0, after = 0;
for await (const f of walk(SRC)) {
    const r = await one(f);
    if (r) (n++, (before += r.before), (after += r.after));
}
console.log(n ? `Обработано: ${n}. Было ${kb(before)}, стало ${kb(after)}.` : 'Новых или изменённых картинок нет.');

if (WATCH) {
    console.log(`Слежу за ${path.relative(root, SRC)}/ (Ctrl+C — выход)`);
    const wait = new Map();
    watch(SRC, { recursive: true }, (_, name) => {
        if (!name || !INPUT.test(name)) return;
        const f = path.join(SRC, name);
        clearTimeout(wait.get(f));
        // ждём, пока файл докопируется
        wait.set(f, setTimeout(() => mtime(f).then((t) => t && one(f)).catch((e) => console.error(`✘ ${name}: ${e.message}`)), 400));
    });
}
