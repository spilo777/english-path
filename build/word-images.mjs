// Картинки-ассоциации для карточек — подбираются заранее (в GitHub Actions, где есть интернет)
// и сохраняются в app/public/data/word-img.json: { "apple": "https://upload.wikimedia.org/…", "though": "" }.
// Пустая строка = искали, подходящей картинки нет (приложение не ищет её снова у пользователя).
// Уже найденные слова не перепроверяются — каждый запуск дозаполняет только новые.
// Источники (только ссылки, файлы не храним): главное фото статьи Википедии, затем поиск в Wikimedia Commons.
// Для глаголов ищем по форме на -ing (run → running: у статьи «Run» нет фото, у «Running» есть).
// Служебные слова (местоимения, предлоги, союзы, артикли, модальные, междометия) не ищем: картинка к ним не помогает.
// Запуск: node build/word-images.mjs [--retry-empty]. Отчёт — word-images.log в корне.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = root + '/app/public/data';
const OUT = data + '/word-img.json';
const UA = { 'User-Agent': 'EnglishPath/1.0 (https://github.com/spilo777/english-path; build-time flashcard images)' };
const BAD = /(flag|logo|map|icon|diagram|coat[_ ]of[_ ]arms|signature|chart|graph|\.svg|\.pdf|\.tif|\.gif)/i;
const SKIP_POS = /^(pron|det|prep|conj|modal|excl)$/;
const RETRY_EMPTY = process.argv.includes('--retry-empty');

/** Ключ картинки = id карточки; для форм «go — went — gone» — первое слово */
const keyOf = (en) => {
    const id = String(en).toLowerCase().trim();
    return id.includes(' — ') ? id.split(' — ')[0].trim() : id;
};
const single = (k) => /^[a-z][a-z'-]{2,}$/.test(k);

// ── какие слова нужны: колоды (с частью речи) + слова уроков ──
const want = new Map(); // key → pos
for (const w of JSON.parse(fs.readFileSync(data + '/words.json', 'utf8'))) {
    const k = keyOf(w[0]);
    if (single(k) && !SKIP_POS.test(w[5] || '')) want.set(k, w[5] || '');
}
for (const f of fs.readdirSync(data + '/units')) {
    const u = JSON.parse(fs.readFileSync(data + '/units/' + f, 'utf8'));
    for (const w of u.words || []) {
        const k = keyOf(Array.isArray(w) ? w[0] : w.en);
        if (single(k) && !want.has(k)) want.set(k, '');
    }
}

const have = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : {};
const todo = [...want.keys()].filter((k) => !(k in have) || (RETRY_EMPTY && !have[k]));
console.log(`words: ${want.size}, already have: ${Object.keys(have).length}, to look up: ${todo.length}`);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJson(url) {
    for (let i = 0; i < 3; i++) {
        try {
            const r = await fetch(url, { headers: UA });
            if (r.ok) return await r.json();
            if (r.status === 429) await sleep(5000);
        } catch {
            /* повтор */
        }
        await sleep(800 * (i + 1));
    }
    return null;
}

/** -ing форма: make → making, run → running, see → seeing */
function ing(v) {
    if (v.endsWith('ie')) return v.slice(0, -2) + 'ying';
    if (/[^aeiou]e$/.test(v) && v !== 'be') return v.slice(0, -1) + 'ing';
    if (/^[^aeiou]*[aeiou][bdgmnprt]$/.test(v)) return v + v.at(-1) + 'ing';
    return v + 'ing';
}
const cap = (s) => s[0].toUpperCase() + s.slice(1);

/** Главные фото статей Википедии, по 40 заголовков за запрос; статьи-неоднозначности отбрасываем */
async function wikiBatch(titles) {
    const out = {};
    const uniq = [...new Set(titles)];
    for (let i = 0; i < uniq.length; i += 40) {
        const ch = uniq.slice(i, i + 40);
        const j = await getJson(
            'https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageimages|pageprops&ppprop=disambiguation&piprop=thumbnail&pithumbsize=480&pilicense=any&pilimit=50&titles=' +
                encodeURIComponent(ch.join('|')),
        );
        if (!j) continue;
        const norm = {};
        (j.query?.normalized || []).concat(j.query?.redirects || []).forEach((n) => {
            norm[n.from] = n.to;
        });
        const byT = {};
        Object.values(j.query?.pages || {}).forEach((p) => {
            if (p.pageprops && 'disambiguation' in p.pageprops) return;
            if (p.title && p.thumbnail?.source && !BAD.test(p.thumbnail.source)) byT[p.title] = p.thumbnail.source;
        });
        ch.forEach((t) => {
            let x = norm[t] || t;
            x = norm[x] || x;
            if (byT[x]) out[t] = byT[x];
        });
        await sleep(150);
    }
    return out;
}

/** Поиск фото в Wikimedia Commons: первая подходящая картинка не меньше 300 px */
async function commons(q) {
    const j = await getJson(
        'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=10&gsrsearch=' +
            encodeURIComponent(q + ' filetype:bitmap') +
            '&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=480',
    );
    const pages = Object.values(j?.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
    const hit = pages.find(
        (p) =>
            p.imageinfo &&
            /jpeg|png|webp/.test(p.imageinfo[0]?.mime || '') &&
            !BAD.test(p.title || '') &&
            (p.imageinfo[0].width || 0) >= 300,
    );
    return hit?.imageinfo?.[0]?.thumburl || '';
}

// ── 1) Википедия: существительные и прочее — по слову, глаголы — по -ing и по слову ──
const titleFor = (k) => {
    const pos = want.get(k);
    return pos === 'v' ? [cap(ing(k)), cap(k)] : [cap(k)];
};
const wiki = await wikiBatch(todo.flatMap(titleFor));
const found = {};
const how = {};
for (const k of todo) {
    const t = titleFor(k).find((x) => wiki[x]);
    if (t) {
        found[k] = wiki[t];
        how[k] = 'wiki: ' + t;
    }
}
console.log(`wikipedia: ${Object.keys(found).length}/${todo.length}`);

// ── 2) Commons для оставшихся: глаголы — «running», прилагательные — «happy face» не угадываем, берём слово ──
let n = 0;
for (const k of todo) {
    if (found[k]) continue;
    const pos = want.get(k);
    const qs = pos === 'v' ? [ing(k), k] : [k];
    for (const q of qs) {
        const u = await commons(q);
        if (u) {
            found[k] = u;
            how[k] = 'commons: ' + q;
            break;
        }
    }
    if (++n % 100 === 0) console.log(`commons: ${n} checked`);
    await sleep(120);
}

for (const k of todo) have[k] = found[k] || '';
const sorted = Object.fromEntries(Object.keys(have).sort().map((k) => [k, have[k]]));
fs.writeFileSync(OUT, JSON.stringify(sorted));

const total = Object.keys(have).length;
const withImg = Object.values(have).filter(Boolean).length;
const log = [
    `word-img: ${withImg}/${total} with a picture (this run: ${Object.keys(found).length}/${todo.length} found)`,
    ...todo.filter((k) => !found[k]).map((k) => 'NONE ' + k + ' (' + (want.get(k) || '?') + ')'),
    ...Object.entries(how).map(([k, h]) => k + ' ← ' + h),
].join('\n');
fs.writeFileSync(root + '/word-images.log', log + '\n');
console.log(log.split('\n')[0]);
