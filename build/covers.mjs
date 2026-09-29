// Обложки для всех статей, диалогов и книг — подбираются при сборке (в CI, где есть интернет) и
// вписываются в app/public/data/library.json и books/index.json полем img. Так у пользователя нет
// ни запросов к Википедии, ни пустых обложек-заглушек: картинка есть сразу.
// Источники по порядку: главное фото статьи Википедии (wiki), поиск в Wikimedia Commons (commons),
// затем поиск в Commons по названию статьи Википедии и по английскому заголовку.
// Запуск: node build/covers.mjs  (из корня или из app/). Отчёт — в covers.log рядом с app/.
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const data = root + '/app/public/data';
const UA = { 'User-Agent': 'EnglishPath/1.0 (https://github.com/spilo777/english-path; build-time cover lookup)' };
const BAD = /(flag|logo|map|icon|diagram|coat[_ ]of[_ ]arms|signature|\.svg|\.pdf|\.tif)/i;

// карты из приложения (id → заголовок Википедии / запрос в Commons)
const mapSrc = fs.readFileSync(root + '/app/src/lib/images-map.ts', 'utf8');
const obj = (name) => { const m = mapSrc.match(new RegExp(name + '[^=]*=\\s*(\\{[\\s\\S]*?\\});')); return m ? new Function('return ' + m[1])() : {}; };
const LIB_WIKI = obj('LIB_WIKI');
const LIB_COMMONS = obj('LIB_COMMONS');

const lib = JSON.parse(fs.readFileSync(data + '/library.json', 'utf8'));
const books = JSON.parse(fs.readFileSync(data + '/books/index.json', 'utf8'));

/** id → { wiki?, commons?, title } */
const want = {};
lib.forEach((t) => { want[t.id] = { wiki: LIB_WIKI[t.id] || t.wiki, commons: LIB_COMMONS[t.id] || t.commons, title: t.title }; });
books.forEach((b) => { want[b.id] = { wiki: b.wiki, title: b.title + ' ' + (b.author || '') }; });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function getJson(url) {
  for (let i = 0; i < 3; i++) {
    try { const r = await fetch(url, { headers: UA }); if (r.ok) return await r.json(); } catch { /* повтор */ }
    await sleep(800 * (i + 1));
  }
  return null;
}

async function wikiBatch(titles) {
  const out = {};
  const uniq = [...new Set(titles)];
  for (let i = 0; i < uniq.length; i += 40) {
    const ch = uniq.slice(i, i + 40);
    const j = await getJson('https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=480&pilicense=any&pilimit=50&titles=' + encodeURIComponent(ch.join('|')));
    if (!j) continue;
    const norm = {};
    (j.query?.normalized || []).concat(j.query?.redirects || []).forEach((n) => { norm[n.from] = n.to; });
    const byT = {};
    Object.values(j.query?.pages || {}).forEach((p) => { if (p.title && p.thumbnail?.source && !BAD.test(p.thumbnail.source)) byT[p.title] = p.thumbnail.source; });
    ch.forEach((t) => { let x = norm[t] || t; x = norm[x] || x; if (byT[x]) out[t] = byT[x]; });
  }
  return out;
}

async function commons(q) {
  const j = await getJson('https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=8&gsrsearch=' + encodeURIComponent(q + ' filetype:bitmap') + '&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=480');
  const pages = Object.values(j?.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
  const hit = pages.find((p) => p.imageinfo && /jpeg|png|webp/.test(p.imageinfo[0]?.mime || '') && !BAD.test(p.title || '') && (p.imageinfo[0].width || 0) >= 300);
  return hit?.imageinfo?.[0]?.thumburl || '';
}

const img = {};
const how = {};
const w = await wikiBatch(Object.values(want).map((x) => x.wiki).filter(Boolean));
for (const [id, x] of Object.entries(want)) if (x.wiki && w[x.wiki]) { img[id] = w[x.wiki]; how[id] = 'wiki: ' + x.wiki; }
for (const [id, x] of Object.entries(want)) {
  if (img[id]) continue;
  for (const q of [x.commons, x.wiki, x.title].filter(Boolean)) {
    const u = await commons(q);
    if (u) { img[id] = u; how[id] = 'commons: ' + q; break; }
  }
}

lib.forEach((t) => { if (img[t.id]) t.img = img[t.id]; });
books.forEach((b) => { if (img[b.id]) b.img = img[b.id]; });
fs.writeFileSync(data + '/library.json', JSON.stringify(lib));
fs.writeFileSync(data + '/books/index.json', JSON.stringify(books));

const miss = Object.keys(want).filter((id) => !img[id]);
const log = [`covers: ${Object.keys(img).length}/${Object.keys(want).length}, missing ${miss.length}`, ...miss.map((id) => 'MISSING ' + id + ' ' + JSON.stringify(want[id])), ...Object.entries(how).map(([id, h]) => id + ' ← ' + h)].join('\n');
fs.writeFileSync(root + '/covers.log', log + '\n');
console.log(log.split('\n').slice(0, 1 + miss.length).join('\n'));
