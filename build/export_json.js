// Экспорт всего контента старого сайта в JSON для нового приложения
globalThis.window = globalThis;
const fs = require('fs'), path = require('path');
const root = '/home/claude/English';
const html = fs.readFileSync(root + '/index.html', 'utf8');
const files = [...html.matchAll(/src="(data\/[^"?]+)/g)].map((m) => m[1]);
files.forEach((f) => require(root + '/' + f));
const out = root + '/app/public/data';
const w = (p, o) => { fs.mkdirSync(path.dirname(out + '/' + p), { recursive: true }); fs.writeFileSync(out + '/' + p, JSON.stringify(o)); };
// курс
const LV = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };
const units = COURSE.units;
const meta = units.map((u) => ({ id: u.id, level: u.level, num: u.num, track: u.track, title: u.title, summary: u.summary || '', books: u.books || null, unlockAfter: u.unlockAfter || null, hasWalk: !!(u.walk && u.walk.length) }))
  .sort((a, b) => (LV[a.level] - LV[b.level]) || (a.track === b.track ? a.num - b.num : a.track === 'main' ? -1 : 1));
const levels = COURSE.levels.map((l) => ({ id: l.id, title: l.title, goal: l.goal }));
if (!levels.some((l) => l.id === 'C1')) levels.push({ id: 'C1', title: 'C1 — Продвинутый', goal: 'Бонус сверх цели: тонкости грамматики по «Advanced Grammar in Use»' });
w('course.json', { levels, units: meta });
for (const L of Object.keys(LV)) { const us = units.filter((u) => u.level === L); if (us.length) w(`units/${L}.json`, us); }
w('syllabus.json', SYLLABUS);
w('words.json', WORDS);
w('dict.json', DICT);
w('forms.json', typeof FORMS !== 'undefined' ? FORMS : {});
w('library.json', LIBRARY);
w('topics.json', { cats: TOPIC_CATS, cols: TOPIC_COLS });
w('tenses.json', TENSES);
// книги
const bookIndex = [];
(BOOKS || []).forEach((b) => { w(`books/${b.id}.json`, b); bookIndex.push({ id: b.id, title: b.title, author: b.author, level: b.level, kind: b.kind || 'adapted', wiki: b.wiki, ru: b.ru, chapters: b.chapters.length, words: b.chapters.reduce((s, c) => s + c.text.split(/\s+/).length, 0) }); });
(BOOK_INDEX || []).forEach((m) => {
  let got = null; globalThis.BOOK_LOADED = (b) => { got = b; };
  delete require.cache[require.resolve(root + '/data/books/' + m.id + '.js')];
  require(root + '/data/books/' + m.id + '.js');
  w(`books/${m.id}.json`, Object.assign({}, m, got));
  bookIndex.push(Object.assign({}, m));
});
w('books/index.json', bookIndex);
const sizes = {}; const walk = (d) => fs.readdirSync(d).forEach((f) => { const p = d + '/' + f; if (fs.statSync(p).isDirectory()) walk(p); else sizes[p.replace(out + '/', '')] = fs.statSync(p).size; });
walk(out);
const tot = Object.values(sizes).reduce((a, b) => a + b, 0);
console.log('files', Object.keys(sizes).length, 'MB', (tot / 1e6).toFixed(1));
console.log(Object.entries(sizes).filter(([k]) => !k.startsWith('books/bk')).map(([k, v]) => k + ' ' + (v / 1e3).toFixed(0) + 'k').join('\n'));
