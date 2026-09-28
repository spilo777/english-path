/* English Path — курс английского от нуля до B2.
   Всё работает в браузере, прогресс хранится в localStorage (есть экспорт/импорт). */
(function () {
  'use strict';

  const STORE_KEY = 'englishpath.v1';
  const DAY = 86400000;
  const PASS = 0.8;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const today = () => { const d = new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // ───────────── Хранилище ─────────────
  const defaults = () => ({
    cards: {},
    units: {},
    textsRead: {},
    userTexts: [],
    activity: {},
    newToday: { date: '', count: 0 },
    known: {},
    settings: { newPerDay: 15, rate: 0.9, voice: '', cardMode: 'en-ru', decks: { A1: true, A2: true, B1: true, B2: true } }
  });
  let S;
  try { S = Object.assign(defaults(), JSON.parse(localStorage.getItem(STORE_KEY) || '{}')); } catch (e) { S = defaults(); }
  S.settings = Object.assign(defaults().settings, S.settings);
  S.known = S.known || {};
  S.stats = Object.assign({ lookups: 0, listened: 0, exStreak: 0, exStreakBest: 0, perfect: {}, firstTryUnits: {}, attempts: {}, ruEn: 0, cleanSessions: 0, listenRight: 0 }, S.stats || {});
  S.ach = S.ach || {};
  let settingsSnap = JSON.stringify(S.settings);
  function save() {
    const snap = JSON.stringify(S.settings);
    if (snap !== settingsSnap) { S.settingsMod = Date.now(); settingsSnap = snap; }
    try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { toast('Не удалось сохранить прогресс'); }
    updateBadge(); checkAch();
    if (window.Cloud) Cloud.queuePush();
  }
  const tomb = (key) => { S.deleted = S.deleted || {}; S.deleted[key] = Date.now(); };
  const touch = (id) => { if (S.cards[id]) S.cards[id].mod = Date.now(); };
  function track(kind, n = 1) {
    const d = today();
    if (!S.activity[d]) {
      const prev = Object.keys(S.activity).sort().pop();
      if (prev && (new Date(d) - new Date(prev)) / DAY >= 7) S.stats.comeback = 1;
    }
    const now = new Date(), h = now.getHours();
    if (h >= 4 && h < 7) S.stats.early = 1;
    if (h >= 0 && h < 4) S.stats.owl = 1;
    if (h >= 3 && h < 5) S.stats.insomnia = 1;
    if (now.getMonth() === 0 && now.getDate() === 1) S.stats.newyear = 1;
    if (now.getMonth() === 9 && now.getDate() === 31) S.stats.halloween = 1;
    S.dayParts = S.dayParts || {};
    S.dayParts[d] = (S.dayParts[d] || 0) | (h < 12 ? 1 : h < 18 ? 2 : 4);
    if (S.dayParts[d] === 7) S.stats.allDay = 1;
    S.activity[d] = S.activity[d] || { reviews: 0, exercises: 0, reads: 0 };
    S.activity[d][kind] = (S.activity[d][kind] || 0) + n;
  }
  function unitState(id) { return (S.units[id] = S.units[id] || { steps: {}, testBest: null }); }

  // ───────────── Словарь ─────────────
  const DICT = Object.assign({}, window.DICT);
  COURSE.units.forEach((u) => u.words.forEach((w) => { const k = w[0].toLowerCase(); if (!DICT[k]) DICT[k] = w[1]; }));
  const DECK = (window.WORDS || []).map((w) => ({ id: w[0].toLowerCase(), en: w[0], ru: w[1], ex: w[2], exRu: w[3], lvl: w[4], pos: w[5], rank: w[6] }));
  DECK.forEach((w) => { if (!DICT[w.id]) DICT[w.id] = w.ru; });
  const DECK_BY_ID = {}; DECK.forEach((w) => { DECK_BY_ID[w.id] = w; });
  const LEVELS = ['A1', 'A2', 'B1', 'B2'];
  const lookup = (w) => EngLookup.lookup(w, DICT);

  // ───────────── Озвучка ─────────────
  let voices = [];
  function loadVoices() { voices = (speechSynthesis.getVoices() || []).filter((v) => /^en[-_]/i.test(v.lang)); }
  if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
  function pickVoice() {
    if (!voices.length) loadVoices();
    return voices.find((v) => v.name === S.settings.voice)
      || voices.find((v) => /en-US/i.test(v.lang) && /Samantha|Google US|Aria|Jenny|Ava/i.test(v.name))
      || voices.find((v) => /en-US/i.test(v.lang)) || voices[0];
  }
  // Живое произношение: записи носителей из Викисловаря (dictionaryapi.dev + Wikimedia Commons). Бесплатно, без ключа.
  const AUDIO_KEY = 'ep.audio.v1';
  let audioMap = {}; try { audioMap = JSON.parse(localStorage.getItem(AUDIO_KEY) || '{}'); } catch (e) {}
  const audioPending = {};
  let audioSaveT;
  const audioSave = () => { clearTimeout(audioSaveT); audioSaveT = setTimeout(() => { try { localStorage.setItem(AUDIO_KEY, JSON.stringify(audioMap)); } catch (e) { audioMap = {}; } }, 400); };
  const liveEligible = (w) => /^[a-z][a-z'’-]*$/i.test(w) || (!!DECK_BY_ID[w.toLowerCase()] && w.split(' ').length <= 3);
  function liveAudio(word) {
    const k = String(word).toLowerCase().trim().replace(/’/g, "'");
    const pref = S.settings.accent === 'uk' ? 'uk' : 'us';
    const pick = (x) => x && (x[pref] || x.us || x.uk || x.any) ? { u: x[pref] || x.us || x.uk || x.any, ipa: x.ipa || '' } : (x ? { u: '', ipa: x.ipa || '' } : null);
    if (k in audioMap) return Promise.resolve(pick(audioMap[k]));
    if (audioPending[k]) return audioPending[k].then(pick);
    const rec = {};
    const dict = fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(k))
      .then((r) => (r.ok ? r.json() : []))
      .then((j) => {
        (Array.isArray(j) ? j : []).forEach((e) => (e.phonetics || []).forEach((ph) => {
          if (ph.text && !rec.ipa) rec.ipa = ph.text;
          const a = ph.audio; if (!a) return;
          const tag = /-(us|uk|au|ca)\.mp3$/i.exec(a); const t = tag ? tag[1].toLowerCase() : 'any';
          const slot = t === 'us' || t === 'ca' ? 'us' : t === 'uk' ? 'uk' : 'any';
          if (!rec[slot]) rec[slot] = a;
          if (ph.text && slot === pref) rec.ipa = ph.text;
        }));
        if (!rec.ipa && Array.isArray(j) && j[0] && j[0].phonetic) rec.ipa = j[0].phonetic;
      });
    const commons = () => {
      if (rec.us || rec.uk || rec.any || /\s/.test(k)) return null;
      const titles = ['En-us-' + k + '.ogg', 'En-uk-' + k + '.ogg', 'LL-Q1860 (eng)-Vealhurl-' + k + '.wav'].map((x) => 'File:' + x).join('|');
      return fetch('https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&prop=videoinfo&viprop=url|derivatives&titles=' + encodeURIComponent(titles))
        .then((r) => r.json())
        .then((j) => Object.values((j.query || {}).pages || {}).forEach((pg) => {
          const vi = pg.videoinfo && pg.videoinfo[0]; if (!vi) return;
          const mp3 = (vi.derivatives || []).find((d) => /mpeg|mp3/.test(d.type || d.src));
          const src = mp3 ? mp3.src : vi.url;
          const slot = /En-us-/i.test(pg.title) ? 'us' : /En-uk-/i.test(pg.title) ? 'uk' : 'any';
          if (!rec[slot]) rec[slot] = src;
        }));
    };
    audioPending[k] = dict.catch(() => {}).then(commons).catch(() => {})
      .then(() => { audioMap[k] = rec; audioSave(); delete audioPending[k]; return rec; })
      .catch(() => { delete audioPending[k]; return null; });
    return audioPending[k].then(pick);
  }
  let curAudio = null, speakTok = 0;
  // iOS/Safari разрешает звук только в ответ на нажатие. Один раз «разблокируем» общий <audio> и синтез речи
  // при первом касании — после этого живые записи и голос браузера играют и после загрузки из сети.
  const liveEl = new Audio(); liveEl.preload = 'auto';
  const silentWav = (() => { try { const n = 800, b = new ArrayBuffer(44 + n * 2), d = new DataView(b); const w = (o, t) => { for (let i = 0; i < t.length; i++) d.setUint8(o + i, t.charCodeAt(i)); };
    w(0, 'RIFF'); d.setUint32(4, 36 + n * 2, true); w(8, 'WAVE'); w(12, 'fmt '); d.setUint32(16, 16, true); d.setUint16(20, 1, true); d.setUint16(22, 1, true); d.setUint32(24, 16000, true); d.setUint32(28, 32000, true); d.setUint16(32, 2, true); d.setUint16(34, 16, true); w(36, 'data'); d.setUint32(40, n * 2, true);
    return URL.createObjectURL(new Blob([b], { type: 'audio/wav' })); } catch (e) { return ''; } })();
  let audioUnlocked = false;
  function unlockAudio() {
    if (audioUnlocked) return; audioUnlocked = true;
    try { if (silentWav) { liveEl.src = silentWav; const p = liveEl.play(); if (p && p.catch) p.catch(() => { audioUnlocked = false; }); } } catch (e) {}
    try { if (window.speechSynthesis && !speechSynthesis.speaking) { const u = new SpeechSynthesisUtterance(' '); u.volume = 0; speechSynthesis.speak(u); } } catch (e) {}
  }
  ['touchend', 'click', 'keydown'].forEach((ev) => document.addEventListener(ev, unlockAudio, true));
  function stopAudio() { speakTok++; try { liveEl.pause(); } catch (e) {} curAudio = null; }
  function playLive(url, rate, fallback) {
    curAudio = liveEl;
    liveEl.onerror = fallback;
    liveEl.src = url;
    try { liveEl.playbackRate = Math.max(0.7, Math.min(1, rate || 1)); } catch (e) {}
    const pr = liveEl.play(); if (pr && pr.catch) pr.catch(fallback);
    if (S && S.stats) { S.stats.speaks = (S.stats.speaks || 0) + 1; S.stats.live = (S.stats.live || 0) + 1; }
  }
  function fillIpa(root) {
    $$('[data-ipa]', root || document).forEach((el) => {
      if (el.dataset.done) return; el.dataset.done = 1;
      if (S.settings.liveVoice === false || !liveEligible(el.dataset.ipa)) return;
      liveAudio(el.dataset.ipa).then((a) => { if (!a) return; el.innerHTML = (a.ipa ? `<span>${esc(a.ipa)}</span>` : '') + (a.u ? '<em title="Запись живого человека из Викисловаря"><i class="ph-fill ph-waveform"></i> живой голос</em>' : ''); });
    });
  }
  function speak(text, opts = {}) {
    const w = String(text || '').trim();
    stopAudio();
    if (!opts.tts && !opts.onend && !opts.queue && S.settings.liveVoice !== false && liveEligible(w)) {
      const tok = speakTok;
      const rate = opts.rate || S.settings.rate;
      let fell = false;
      const fallback = () => { if (fell || tok !== speakTok) return; fell = true; speakTTS(text, opts); };
      const k = w.toLowerCase().replace(/’/g, "'");
      if (k in audioMap) { // запись уже известна — играем сразу, в том же нажатии
        const rec = audioMap[k], pref = S.settings.accent === 'uk' ? 'uk' : 'us';
        const u = rec && (rec[pref] || rec.us || rec.uk || rec.any);
        if (!u) return speakTTS(text, opts);
        if (window.speechSynthesis) speechSynthesis.cancel();
        playLive(u, rate, fallback);
        return null;
      }
      if (window.speechSynthesis) speechSynthesis.cancel();
      const timer = setTimeout(fallback, 2500);
      liveAudio(w).then((a) => {
        clearTimeout(timer);
        if (fell || tok !== speakTok) return;
        if (!a || !a.u) return fallback();
        playLive(a.u, rate, fallback);
      }).catch(fallback);
      return null;
    }
    return speakTTS(text, opts);
  }
  function speakTTS(text, opts = {}) {
    if (!('speechSynthesis' in window)) { toast('Браузер не поддерживает озвучку'); return null; }
    if (!opts.queue) speechSynthesis.cancel();
    if (S && S.stats) S.stats.speaks = (S.stats.speaks || 0) + 1;
    const u = new SpeechSynthesisUtterance(text);
    let v = pickVoice();
    if (opts.speaker != null && opts.speaker >= 0 && voices.length > 1) { const alt = voices.filter((x) => x !== v); v = opts.speaker % 2 ? (alt.find((x) => x.lang === (v || {}).lang) || alt[0]) : v; u.pitch = [1, 0.95, 1.12, 0.88][opts.speaker % 4]; }
    if (v) u.voice = v;
    u.lang = v ? v.lang : 'en-US';
    u.rate = opts.rate || S.settings.rate;
    if (opts.onend) u.onend = opts.onend;
    speechSynthesis.speak(u);
    return u;
  }

  // ───────────── Карточки (SM-2) ─────────────
  function addCard(en, ru, ex = '', exRu = '', src = '') {
    const id = en.toLowerCase().trim();
    if (!id) return false;
    if (S.cards[id]) return false;
    S.cards[id] = { id, en: en.trim(), ru: ru.trim(), ex, exRu, src, state: 'new', due: 0, ivl: 0, ease: 2.5, reps: 0, lapses: 0, step: 0, added: Date.now(), mod: Date.now() };
    return true;
  }
  function isNewAvailableToday() {
    if (S.newToday.date !== today()) S.newToday = { date: today(), count: 0 };
    return Math.max(0, S.settings.newPerDay - S.newToday.count);
  }
  function dueCards() {
    const now = Date.now();
    return Object.values(S.cards).filter((c) => c.state !== 'new' && c.due <= now).sort((a, b) => a.due - b.due);
  }
  function newCards() { return Object.values(S.cards).filter((c) => c.state === 'new').sort((a, b) => a.added - b.added); }
  // слова из колод, которые ещё не в карточках и не отмечены «знаю»
  function deckPending(limit = Infinity) {
    const out = [];
    const decks = S.settings.decks || {};
    for (const w of DECK) {
      if (out.length >= limit) break;
      if (!decks[w.lvl] || S.cards[w.id] || S.known[w.id]) continue;
      out.push(w);
    }
    return out;
  }
  function newAvailable() { const lim = isNewAvailableToday(); const own = newCards().length; return Math.min(lim, own + (own >= lim ? 0 : deckPending(lim - own).length)); }
  // берёт n новых: сначала слова из уроков, потом из колод (добавляя их в карточки)
  function takeNew(n) {
    const ids = newCards().slice(0, n).map((c) => c.id);
    if (ids.length < n) deckPending(n - ids.length).forEach((w) => { addCard(w.en, w.ru, w.ex, w.exRu, 'deck:' + w.lvl); ids.push(w.id); });
    return ids;
  }
  function fmtIvl(ms) {
    const m = Math.round(ms / 60000);
    if (m < 60) return m + ' мин';
    const h = Math.round(m / 60); if (h < 24) return h + ' ч';
    const d = Math.round(ms / DAY); if (d < 31) return d + ' дн';
    const mo = Math.round(d / 30); if (mo < 12) return mo + ' мес';
    return (d / 365).toFixed(1) + ' г';
  }
  // grade: 0 снова, 1 трудно, 2 хорошо, 3 легко. Возвращает {due, ...изменения}
  function schedule(c, grade) {
    const now = Date.now();
    const n = Object.assign({}, c);
    if (c.state === 'new' || c.state === 'learn') {
      if (grade === 0) { n.state = 'learn'; n.step = 0; n.due = now + 60000; }
      else if (grade === 1) { n.state = 'learn'; n.due = now + 5 * 60000; }
      else if (grade === 2) {
        if ((c.step || 0) === 0 && c.state === 'new') { n.state = 'learn'; n.step = 1; n.due = now + 10 * 60000; }
        else if ((c.step || 0) === 0) { n.state = 'learn'; n.step = 1; n.due = now + 10 * 60000; }
        else { n.state = 'review'; n.ivl = 1; n.due = now + DAY; n.reps = 1; }
      } else { n.state = 'review'; n.ivl = 4; n.due = now + 4 * DAY; n.reps = 1; }
    } else {
      const ivl = Math.max(1, c.ivl || 1);
      if (grade === 0) { n.lapses = (c.lapses || 0) + 1; n.ease = Math.max(1.3, c.ease - 0.2); n.state = 'learn'; n.step = 1; n.ivl = 1; n.due = now + 10 * 60000; }
      else if (grade === 1) { n.ease = Math.max(1.3, c.ease - 0.15); n.ivl = Math.max(ivl + 1, Math.round(ivl * 1.2)); }
      else if (grade === 2) { n.ivl = Math.max(ivl + 1, Math.round(ivl * c.ease)); }
      else { n.ease = c.ease + 0.15; n.ivl = Math.max(ivl + 2, Math.round(ivl * c.ease * 1.3)); }
      if (grade > 0) { n.reps = (c.reps || 0) + 1; n.due = now + n.ivl * DAY; }
    }
    return n;
  }

  // ───────────── Курс: доступность ─────────────
  const LVL_N = { A1: 1, A2: 2, B1: 3, B2: 4, C1: 5 };
  const units = COURSE.units;
  const mainUnits = units.filter((u) => u.track === 'main').sort((a, b) => (LVL_N[a.level] - LVL_N[b.level]) || (a.num - b.num));
  const SYL = window.SYLLABUS || { books: {}, lessons: [] };
  const SYL_BY = {}; SYL.lessons.forEach((l) => { SYL_BY[l.id] = l; });
  if (!COURSE.levels.some((l) => l.id === 'C1')) COURSE.levels.push({ id: 'C1', title: 'C1 — Продвинутый', goal: 'Бонус сверх цели: тонкости грамматики по «Advanced Grammar in Use» — для текстов любой сложности' });
  COURSE.levels.forEach((l) => { l.soon = !mainUnits.some((u) => u.level === l.id); });
  const BOOK_KEYS = ['red', 'blue', 'green'];
  const BOOK_COL = { red: '#E0453C', blue: '#3B6FE0', green: '#1FA865' };
  const unitBooks = (u) => u.books || (SYL_BY[u.id] ? { red: SYL_BY[u.id].red, blue: SYL_BY[u.id].blue, green: SYL_BY[u.id].green } : {});
  const rangeTxt = (a) => { const r = []; a.slice().sort((x, y) => x - y).forEach((n) => { const l = r[r.length - 1]; if (l && n === l[1] + 1) l[1] = n; else r.push([n, n]); }); return r.map(([x, y]) => (x === y ? x : x + '–' + y)).join(', '); };
  function bookChips(u) {
    const b = unitBooks(u);
    return BOOK_KEYS.filter((k) => b[k] && b[k].length).map((k) => `<a class="book-chip" href="#/books/${k}" style="--bc:${BOOK_COL[k]}"><i class="ph-fill ph-book-bookmark"></i> ${esc((SYL.books[k] || {}).short || k)}: ${b[k].length > 1 ? 'юниты' : 'юнит'} ${rangeTxt(b[k])}</a>`).join('');
  }
  const unitById = (id) => units.find((u) => u.id === id);
  const passed = (id) => { const s = S.units[id]; return !!(s && s.testBest != null && s.testBest >= PASS); };
  function isUnlocked(u) {
    if (u.track === 'games') return passed(u.unlockAfter || 'a1-0');
    const i = mainUnits.indexOf(u);
    return i <= 0 || passed(mainUnits[i - 1].id);
  }
  const STEPS = [
    ['grammar', 'Грамматика'], ['words', 'Слова'], ['reading', 'Чтение'], ['practice', 'Практика'], ['test', 'Тест']
  ];
  function unitProgress(u) {
    const s = unitState(u.id);
    const done = STEPS.filter(([k]) => k === 'test' ? passed(u.id) : s.steps[k]).length;
    return done / STEPS.length;
  }
  function nextStep(u) {
    const s = unitState(u.id);
    for (const [k, label] of STEPS) {
      if (k === 'test' ? !passed(u.id) : !s.steps[k]) return { k, label };
    }
    return null;
  }
  function currentUnit() { return mainUnits.find((u) => isUnlocked(u) && !passed(u.id)) || mainUnits[mainUnits.length - 1]; }
  function allTexts() {
    const list = [];
    units.forEach((u) => u.texts.forEach((t) => list.push(Object.assign({ unit: u }, t))));
    S.userTexts.forEach((t) => list.push(Object.assign({ user: true }, t)));
    (window.LIBRARY || []).forEach((t) => list.push(t));
    return list;
  }

  // ───────────── UI помощники ─────────────
  let toastT;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => (t.hidden = true), 2200); }
  function updateBadge() {
    const n = dueCards().length + newAvailable();
    const b = $('#due-badge'); if (!b) return;
    b.hidden = !n; b.textContent = n;
  }
  function streak() {
    let d = new Date(); let n = 0;
    const key = (x) => x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
    if (!S.activity[key(d)]) d.setDate(d.getDate() - 1);
    while (S.activity[key(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function plural(n, one, few, many) { const m10 = n % 10, m100 = n % 100; if (m10 === 1 && m100 !== 11) return one; if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few; return many; }
  function wireSay(root) {
    $$('.say', root).forEach((el) => el.addEventListener('click', () => speak(el.textContent.replace(/[!?.]$/, ''))));
    $$('[data-alphabet]', root).forEach((el) => {
      el.innerHTML = el.dataset.alphabet.split('').map((ch) => `<button>${ch}</button>`).join('');
      $$('button', el).forEach((b) => b.addEventListener('click', () => speak(b.textContent.toLowerCase() === 'a' ? 'A.' : b.textContent, { rate: 0.8 })));
    });
    $$('[data-speak]', root).forEach((el) => el.addEventListener('click', (e) => { e.stopPropagation(); speak(el.dataset.speak); }));
    // мини-проверки внутри грамматики
    $$('.mini', root).forEach((el) => {
      const opts = (el.dataset.o || '').split('|'); const right = +el.dataset.a;
      el.innerHTML = `<div class="mini-h"><i class="ph ph-question"></i> Проверьте себя</div><div class="mini-q">${esc(el.dataset.q || '').replace(/_{2,}/g, '<span class="blank">&nbsp;</span>')}</div>
        <div class="mini-o">${opts.map((o, i) => `<button class="qz-btn" data-i="${i}">${esc(o)}</button>`).join('')}</div><div class="mini-why"></div>`;
      $$('.qz-btn', el).forEach((b) => b.addEventListener('click', () => {
        if (el.dataset.done) return; el.dataset.done = 1;
        const ok = +b.dataset.i === right;
        $$('.qz-btn', el).forEach((x, i) => { x.disabled = true; if (i === right) x.classList.add('right'); });
        if (!ok) b.classList.add('wrong');
        const w = $('.mini-why', el); w.innerHTML = `<b>${ok ? 'Верно!' : 'Не совсем.'}</b> ${esc(el.dataset.why || '')}`; w.className = 'mini-why ' + (ok ? 'ok' : 'bad');
        if (ok) speak(opts[right].replace(/[_]/g, '')); track('exercises');
        S.stats.mini = (S.stats.mini || 0) + 1; if (ok) S.stats.miniRight = (S.stats.miniRight || 0) + 1;
        S.stats.exStreak = ok ? S.stats.exStreak + 1 : 0; S.stats.exStreakBest = Math.max(S.stats.exStreakBest, S.stats.exStreak); save();
      }));
    });
  }
  const view = () => $('#view');

  // ───────────── Роутер ─────────────
  function route(keepScroll) {
    if (keepScroll !== true && window.speechSynthesis) window.speechSynthesis.cancel();
    stopAudio();
    hidePopover();
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
    const [r, a, b] = parts;
    const navKey = { '': 'today', course: 'course', unit: 'course', tenses: 'course', books: 'course', library: 'library', read: 'library', book: 'library', cards: 'cards', review: 'cards', deck: 'cards', words: 'cards', profile: 'profile', achievements: 'profile', account: 'profile', stats: 'profile', settings: 'profile' }[r || ''] || 'today';
    $$('.nav a').forEach((el) => el.classList.toggle('active', el.dataset.nav === navKey));
    const y = window.scrollY;
    if (keepScroll === true) requestAnimationFrame(() => window.scrollTo(0, y)); else window.scrollTo(0, 0);
    if (!r) return renderToday();
    if (r === 'course') return renderCourse();
    if (r === 'unit') return renderUnit(a, b || 'grammar');
    if (r === 'library') {
      if (a === 'all') { if (b) { lsSet('ep.libCat', b); lsSet('ep.libLevel', 'all'); } return renderLibrary(); }
      if (a === 'new') { renderLibrary(); const bx = $('#ut-box'); bx.hidden = false; $('#ut-title').focus(); return; }
      if (a === 'find') { renderLibrary(); const i = $('#lib-q'); i.focus(); return; }
      if (a === 'books') return renderBooks();
      return renderLibraryHome();
    }
    if (r === 'read') return renderReader(a);
    if (r === 'book') return renderBook(a, b);
    if (r === 'profile') return renderProfile();
    if (r === 'books') return renderBooksMap(a);
    if (r === 'tenses') return a === 'train' ? renderTenseTrain() : a ? renderTense(a, b) : renderTenses();
    if (r === 'cards') return renderCards();
    if (r === 'review') return renderReview();
    if (r === 'deck') return renderDeck(a);
    if (r === 'words') return renderWords(a);
    if (r === 'achievements') return withBack(renderAch);
    if (r === 'account') return withBack(renderAuth);
    if (r === 'stats') return withBack(renderStats);
    if (r === 'settings') return withBack(renderSettings);
    renderToday();
  }
  function withBack(fn) { fn(); if (!$('.backlink', view())) view().insertAdjacentHTML('afterbegin', '<a href="#/profile" class="backlink" title="Профиль"><i class="ph ph-caret-left"></i></a>'); }
  window.addEventListener('hashchange', route);

  // ───────────── Сегодня ─────────────
  function renderToday() {
    const due = dueCards().length;
    const nw = newAvailable();
    const u = currentUnit();
    const ns = nextStep(u);
    const act = S.activity[today()] || {};
    const unread = allTexts().filter((t) => t.unit && isUnlocked(t.unit) && !S.textsRead[t.id])
      .concat((window.LIBRARY || []).filter((t) => t.level === (currentUnit() || {}).level && !S.textsRead[t.id]));
    const suggest = unread[0];
    const learned = Object.values(S.cards).filter((c) => c.state === 'review' && c.ivl >= 21).length;
    const total = Object.keys(S.cards).length;
    const st = streak();
    const h = new Date().getHours();
    const hello = h < 5 ? 'Доброй ночи' : h < 12 ? 'Доброе утро' : h < 18 ? 'Добрый день' : 'Добрый вечер';
    const reviewsDone = (act.reviews || 0) > 0 && due === 0 && nw === 0;

    const lessonToday = (act.exercises || 0) > 0 || !ns;
    const readToday = (act.reads || 0) > 0;
    const planDone = [reviewsDone, lessonToday, readToday].filter(Boolean).length;
    const forYou = LIB.filter((t) => !S.textsRead[t.id] && t.kind !== 'dialogue' && t.level === u.level).slice(0, 10);
    const dlgs = LIB.filter((t) => t.kind === 'dialogue' && !S.textsRead[t.id] && LEVEL_ORDER[t.level] <= LEVEL_ORDER[u.level] + 1).slice(0, 10);
    const books = (window.BOOKS || []).filter((b) => LEVEL_ORDER[b.level] <= LEVEL_ORDER[u.level] + 1);
    const p = Math.round(unitProgress(u) * 100);
    const task = (done, ico, title, sub, href, btn) => `<a class="task ${done ? 'done' : ''}" href="${href}"><div class="num">${done ? '<i class="ph ph-check"></i>' : `<i class="ph ${ico}"></i>`}</div><div class="body"><b>${title}</b><span class="muted small">${sub}</span></div>${btn && !done ? `<span class="pill-btn sm">${btn}</span>` : '<i class="ph ph-caret-right muted"></i>'}</a>`;
    view().innerHTML = `
      ${topbar(hello, rbtn('#/library/find', 'magnifying-glass', 'Поиск по статьям') + avatarBtn(), new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' }).replace(/^./, (c) => c.toUpperCase()) + (planDone === 3 ? ' · план выполнен' : ''))}
      <a class="continue-card" href="#/unit/${u.id}/${ns ? ns.k : 'grammar'}">
        <div class="cc-ill"><i class="ph-fill ph-graduation-cap"></i></div>
        <div class="cc-body"><div class="cc-eyebrow">Курс · ${u.level} · юнит ${u.num}</div>
          <div class="cc-title">${esc(u.title)}</div>
          <div class="cc-sub">${ns ? 'Дальше: ' + esc(ns.label) : 'Юнит пройден'} · ${p}%</div>
          <div class="cc-bar"><i style="width:${p}%"></i></div></div>
        <span class="pill-btn light">${p ? 'ПРОДОЛЖИТЬ' : 'НАЧАТЬ'}</span></a>
      ${goalCard()}
      ${cloudOn() && !Cloud.status().user && !(() => { try { return localStorage.getItem('ep.hideAuthBanner'); } catch (e) { return false; } })() ? `
      <div class="auth-banner"><div class="auth-banner-ico"><i class="ph ph-cloud"></i></div><div style="flex:1;min-width:0"><b>Сохраните прогресс в облаке</b><div class="small muted">Бесплатный аккаунт — и занятия будут одинаковыми на Mac и iPhone.</div></div>
        <a class="btn small primary" href="#/account">Создать аккаунт</a><button class="icon-btn" id="hide-banner" title="Скрыть"><i class="ph ph-x"></i></button></div>` : ''}
      <section class="sec"><div class="sec-head"><h2>План на сегодня</h2><span class="see-all muted">${planDone}/3</span></div>
      <div class="stack">
        ${task(reviewsDone, 'ph-cards', 'Карточки', due + nw ? `${due} на повторение, ${nw} ${plural(nw, 'новая', 'новые', 'новых')}` : total ? 'На сегодня всё повторено' : 'Слова появятся после шага «Слова» в уроке', due + nw ? '#/review' : '#/cards', due + nw ? 'НАЧАТЬ' : '')}
        ${task(lessonToday, 'ph-book-open', `Урок ${u.num}: ${esc(u.title)}`, ns ? 'Следующий шаг: ' + ns.label : 'Юнит пройден', `#/unit/${u.id}/${ns ? ns.k : 'grammar'}`, ns ? 'УРОК' : '')}
        ${task(readToday, 'ph-headphones', 'Чтение и аудирование', suggest ? '«' + esc(suggest.title) + '» — прочитайте, прослушайте, повторите вслух' : 'Выберите статью или книгу в библиотеке', suggest ? '#/read/' + suggest.id : '#/library', 'ЧИТАТЬ')}
        <div class="task"><div class="num"><i class="ph ph-globe-hemisphere-west"></i></div><div class="body"><b>Вне сайта: 20+ минут английского</b><span class="muted small">${esc(tipOfDay())}</span></div></div>
      </div></section>
      ${section('Для вас', '#/library', forYou.map(textPoster).join(''), `Статьи уровня ${u.level} о сериалах, играх и мультфильмах`)}
      ${section('<i class="ph ph-chat-circle-dots"></i> Диалоги из игр', '#/library/all/' + encodeURIComponent('Диалоги из игр'), dlgs.map(textPoster).join(''))}
      ${section('<i class="ph ph-books"></i> Книги', '#/library/books', books.map(bookPoster).join(''))}
      ${(() => { const near = nearAch(); const e = engagement(); return `
      <section class="sec"><div class="sec-head"><h2>Ближайшие награды</h2><a class="see-all" href="#/achievements">Уровень ${e.lvl} · ${Object.keys(S.ach).length}/${ACH.list.length}</a></div>
      <div class="ach-list">${near.length ? near.map(({ a }) => achCard(a, achCtx())).join('') : ACH.list.filter((a) => !S.ach[a.id] && !a.hidden).slice(0, 3).map((a) => achCard(a, achCtx())).join('')}</div></section>`; })()}`;
    paintCovers(view());
    const hb = $('#hide-banner'); if (hb) hb.addEventListener('click', () => { try { localStorage.setItem('ep.hideAuthBanner', '1'); } catch (e) {} hb.closest('.auth-banner').remove(); });
  }
  function tipOfDay() {
    const tips = [
      'Посмотрите 1–2 коротких видео на YouTube про дизайн или игры с английскими субтитрами.',
      'Shadowing: включите короткую фразу из текста урока и повторяйте за диктором 5 раз.',
      'Прочитайте одну новость на newsinlevels.com (Level 1).',
      'Поиграйте в любимую игру на английском, с английскими субтитрами. Незнакомые слова из меню добавьте в карточки.',
      'Проговорите вслух 5 предложений о своём дне: I get up at…, I work…, I play…',
      'Переключите телефон или Figma на английский язык хотя бы на неделю.',
      'Напишите 3 предложения о себе на английском и попросите Claude их проверить.'
    ];
    return tips[new Date().getDate() % tips.length];
  }

  // ───────────── Курс ─────────────
  // Верх раздела «Курс»: заголовок + переключатель подразделов
  function courseHead(tab, sub) {
    const tabs = [['lessons', '#/course', 'graduation-cap', 'Уроки'], ['tenses', '#/tenses', 'clock-countdown', 'Времена'], ['books', '#/books/red', 'books', 'По учебнику']];
    return `${topbar('Курс', avatarBtn())}
      <nav class="tabs" role="tablist">${tabs.map(([k, h, ic, t]) => `<a href="${h}" role="tab" aria-selected="${k === tab}" class="${k === tab ? 'on' : ''}"><i class="ph${k === tab ? '-fill' : ''} ph-${ic}"></i>${t}</a>`).join('')}</nav>
      ${sub ? `<p class="page-sub">${sub}</p>` : ''}`;
  }
  const openLevels = () => { try { return JSON.parse(lsGet('ep.courseOpen', 'null')); } catch (e) { return null; } };
  function renderCourse() {
    const cur = currentUnit();
    const saved = openLevels() || { [cur ? cur.level : 'A1']: true };
    const lvlHtml = COURSE.levels.map((l) => {
      const us = mainUnits.filter((u) => u.level === l.id);
      const games = units.filter((u) => u.track === 'games' && u.level === l.id);
      const planned = SYL.lessons.filter((x) => x.level === l.id && !unitById(x.id));
      const total = us.length + planned.length;
      const done = us.filter((u) => passed(u.id)).length;
      const nextU = us.find((u) => isUnlocked(u) && !passed(u.id));
      const open = !!saved[l.id];
      const state = !us.length ? 'Готовится' : done === us.length && !planned.length ? 'Пройден' : nextU ? `Дальше: урок ${nextU.num}` : 'Закрыт';
      return `
      <section class="lvl ${open ? 'open' : ''}" data-lvl="${l.id}">
        <button class="lvl-head" aria-expanded="${open}">
          <span class="lvl-badge lv-${l.id}">${l.id}</span>
          <span class="lvl-info"><b>${esc(l.title.split('— ')[1] || l.title)}</b><span class="small muted">${done}/${total} ${plural(total, 'урок', 'урока', 'уроков')} · ${state}</span>
            <span class="lvl-bar"><i style="width:${total ? (done / total) * 100 : 0}%"></i></span></span>
          <i class="ph ph-caret-down lvl-caret"></i>
        </button>
        <div class="lvl-body">
          <p class="muted small lvl-goal">${esc(l.goal)}</p>
          ${us.map(unitRow).join('')}
          ${planned.map((x) => `<div class="unit-row locked planned"><div class="unit-num"><i class="ph ph-hourglass-medium"></i></div><div class="body"><div class="title">${esc(x.title)}</div><div class="muted small">Готовится · ${BOOK_KEYS.filter((k) => x[k] && x[k].length).map((k) => SYL.books[k].short + ' ' + rangeTxt(x[k])).join(' · ')}</div></div></div>`).join('')}
          ${games.length ? `<div class="eyebrow lvl-sub"><i class="ph ph-game-controller"></i> Игровой трек</div>` + games.map(unitRow).join('') : ''}
        </div>
      </section>`;
    }).join('');
    view().innerHTML = `${courseHead('lessons', 'От нуля до B2 (и бонусом C1) по трём учебникам Мерфи. Каждый урок — грамматика, слова, текст, практика и тест; следующий открывается после теста на 80%.')}
      <div class="lvl-list">${lvlHtml}</div>`;
    $$('.lvl-head').forEach((b) => b.addEventListener('click', () => {
      const sec = b.closest('.lvl'); const on = !sec.classList.contains('open');
      sec.classList.toggle('open', on); b.setAttribute('aria-expanded', on);
      const st = openLevels() || { [cur ? cur.level : 'A1']: true }; st[sec.dataset.lvl] = on; lsSet('ep.courseOpen', JSON.stringify(st));
      if (on) setTimeout(() => { const r = sec.getBoundingClientRect(); if (r.top < 0 || r.top > window.innerHeight * 0.6) sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60);
    }));
  }
  function renderBooksMap(key) {
    if (!SYL.books[key]) key = 'red';
    const bk = SYL.books[key];
    const byUnit = {}; SYL.lessons.forEach((l) => (l[key] || []).forEach((n) => { byUnit[n] = l; }));
    const nums = Object.keys(bk.units).map(Number).sort((a, b) => a - b);
    const st = (l) => { const u = unitById(l.id); if (!u) return 'soon'; if (passed(u.id)) return 'done'; return isUnlocked(u) ? 'open' : 'locked'; };
    const doneN = nums.filter((n) => byUnit[n] && st(byUnit[n]) === 'done').length;
    view().innerHTML = `
      ${courseHead('books', 'Те же уроки, но в порядке учебника: какой юнит книги каким уроком сайта закрыт. Объяснения и упражнения на сайте свои — книгу можно решать параллельно.')}
      <div class="seg wl-seg">${BOOK_KEYS.map((k) => `<a href="#/books/${k}" class="${k === key ? 'on' : ''}" style="--bc:${BOOK_COL[k]}"><i class="ph-fill ph-book" style="color:${k === key ? '#fff' : BOOK_COL[k]}"></i> ${esc(SYL.books[k].short)} · ${SYL.books[k].level}</a>`).join('')}</div>
      <div class="book-head" style="--bc:${BOOK_COL[key]}"><i class="ph-fill ph-book-open-text"></i><div><b>${esc(bk.name)}</b><div class="small muted">${esc(bk.author)} · ${nums.length} юнитов · закрыто вами ${doneN}</div></div>
        <div class="progress" style="flex-basis:100%"><i style="width:${(doneN / nums.length) * 100}%;background:${BOOK_COL[key]}"></i></div></div>
      <div class="bm-list">${nums.map((n) => { const l = byUnit[n]; const s0 = l ? st(l) : 'soon'; const u = l && unitById(l.id);
        return `<a class="bm-row ${s0}" ${u && s0 !== 'locked' ? `href="#/unit/${u.id}"` : ''}><span class="bm-n" style="--bc:${BOOK_COL[key]}">${n}</span><span class="bm-t"><b>${esc(bk.units[n])}</b><span class="small muted">${l ? `${l.level} · ${esc(l.title)}` : ''}</span></span>
          <span class="bm-s">${s0 === 'done' ? '<i class="ph-fill ph-check-circle"></i>' : s0 === 'open' ? '<i class="ph ph-play-circle"></i>' : s0 === 'locked' ? '<i class="ph ph-lock-simple"></i>' : '<span class="tiny">готовится</span>'}</span></a>`; }).join('')}</div>`;
  }
  function unitRow(u) {
    const unlocked = isUnlocked(u);
    const p = unitProgress(u);
    const ok = passed(u.id);
    return `<a class="unit-row ${unlocked ? '' : 'locked'} ${ok ? 'passed' : ''}" href="#/unit/${u.id}">
      <div class="unit-num">${ok ? '<i class="ph ph-check"></i>' : unlocked ? (u.track === 'games' ? '<i class="ph ph-game-controller"></i>' : u.num) : '<i class="ph ph-lock-simple"></i>'}</div>
      <div class="body"><div class="title">${esc(u.title)}</div><div class="muted small">${esc(u.summary)}</div>
      ${unlocked && !ok && p > 0 ? `<div class="progress" style="margin-top:8px;max-width:240px"><i style="width:${Math.round(p * 100)}%"></i></div>` : ''}</div>
      ${ok && S.units[u.id] ? `<span class="pill ok">${Math.round(S.units[u.id].testBest * 100)}%</span>` : ''}
    </a>`;
  }

  // ───────────── Юнит ─────────────
  function renderUnit(id, tab) {
    const u = unitById(id);
    if (!u) return renderCourse();
    if (!isUnlocked(u)) { toast('Сначала пройдите предыдущий юнит'); location.hash = '#/course'; return; }
    const s = unitState(u.id);
    const stepsHtml = STEPS.map(([k, label], i) => {
      const done = k === 'test' ? passed(u.id) : s.steps[k];
      return `<a href="#/unit/${u.id}/${k}" class="${k === tab ? 'active' : ''} ${done ? 'done' : ''}"><b class="st-n">${done ? '<i class="ph ph-check"></i>' : i + 1}</b><span>${label}</span></a>`;
    }).join('');
    view().innerHTML = `
      <a href="#/course" class="small"><i class="ph ph-arrow-left"></i> Программа</a>
      <div class="eyebrow" style="margin-top:14px">${u.track === 'games' ? 'Игровой трек' : 'Юнит ' + u.num} · ${u.level}</div>
      <h1>${esc(u.title)}</h1>
      ${bookChips(u) ? `<div class="book-chips">${bookChips(u)}</div>` : ''}
      <div class="steps">${stepsHtml}</div>
      <div id="unit-body"></div>`;
    const body = $('#unit-body');
    const nextBtn = (k) => {
      const i = STEPS.findIndex(([x]) => x === k);
      const nx = STEPS[i + 1];
      return nx ? `<a class="btn primary" href="#/unit/${u.id}/${nx[0]}" data-complete="${k}">Дальше: ${nx[1]} <i class="ph ph-arrow-right"></i></a>` : '';
    };
    const wireComplete = () => $$('[data-complete]', body).forEach((a) => a.addEventListener('click', () => { s.steps[a.dataset.complete] = true; track('exercises', 0); save(); }));

    if (tab === 'grammar') {
      body.innerHTML = `<div class="stack lesson">${u.grammar.map((g) => `<div class="card"><h3>${esc(g.title)}</h3>${g.html}</div>`).join('')}
        <div class="row">${nextBtn('grammar')}</div></div>`;
      wireSay(body); wireComplete();
    } else if (tab === 'words') {
      const inCards = u.words.filter((w) => S.cards[w[0].toLowerCase()]).length;
      body.innerHTML = `
        <div class="card">
          <div class="row" style="margin-bottom:8px"><h3 style="margin:0">${u.words.length} ${plural(u.words.length, 'слово', 'слова', 'слов')}</h3><span class="spacer"></span>
          <button class="btn small ${inCards === u.words.length ? '' : 'primary'}" id="add-all" ${inCards === u.words.length ? 'disabled' : ''}>${inCards === u.words.length ? '<i class="ph ph-check"></i> Все в карточках' : '+ Добавить все в карточки'}</button></div>
          <p class="muted small">Прослушайте каждое слово и повторите вслух. Потом добавьте их в карточки: дальше они будут приходить на повторение сами.</p>
          <div class="word-list">${u.words.map((w) => `
            <div class="word-item">
              <button class="icon-btn" data-speak="${esc(w[0])}" aria-label="Слушать"><i class="ph ph-speaker-high"></i></button>
              <div style="flex:1"><div><span class="w">${esc(w[0])}</span> — ${esc(w[1])}</div>
              <div class="ex"><span class="say-ex" data-speak="${esc(w[2])}" style="cursor:pointer">${esc(w[2])}</span> · ${esc(w[3])}</div></div>
              ${S.cards[w[0].toLowerCase()] ? '<span class="pill ok">в карточках</span>' : ''}
            </div>`).join('')}</div>
        </div>
        <div class="row" style="margin-top:16px">${nextBtn('words')}</div>`;
      wireSay(body); wireComplete();
      $('#add-all').addEventListener('click', () => {
        let n = 0; u.words.forEach((w) => { if (addCard(w[0], w[1], w[2], w[3], u.id)) n++; });
        s.steps.words = true; save(); toast(`Добавлено: ${n}`); renderUnit(id, tab);
      });
    } else if (tab === 'reading') {
      body.innerHTML = `
        <p class="muted">Прочитайте каждый текст. Нажимайте на незнакомые слова, чтобы увидеть перевод. Потом включите озвучку и прочитайте вслух вместе с диктором.</p>
        <div class="stack">${u.texts.map((t) => `
          <a class="unit-row" href="#/read/${t.id}"><div class="unit-num">${S.textsRead[t.id] ? '<i class="ph ph-check"></i>' : '<i class="ph ph-book-open-text"></i>'}</div>
          <div class="body"><div class="title">${esc(t.title)}</div><div class="muted small">${t.text.split(/\s+/).length} слов</div></div></a>`).join('')}</div>
        <div class="row" style="margin-top:16px">${nextBtn('reading')}</div>`;
      wireComplete();
    } else if (tab === 'practice') {
      runExercises(body, shuffle(u.practice), {
        mode: 'practice',
        onFinish: (score) => { s.steps.practice = true; save(); return `<a class="btn primary" href="#/unit/${u.id}/test">Перейти к тесту <i class="ph ph-arrow-right"></i></a>`; }
      });
    } else if (tab === 'test') {
      body.innerHTML = `<div class="card ex-wrap">
        <h3>Итоговый тест</h3>
        <p class="muted">${u.test.length} заданий без подсказок. Чтобы открыть следующий юнит, нужно 80% и больше.${s.testBest != null ? ` Лучший результат: <b>${Math.round(s.testBest * 100)}%</b>.` : ''}</p>
        <button class="btn primary" id="start-test">Начать тест</button></div>`;
      $('#start-test').addEventListener('click', () => runExercises(body, shuffle(u.test), {
        mode: 'test',
        onFinish: (score) => {
          const wasPassed = passed(u.id);
          S.stats.attempts[u.id] = (S.stats.attempts[u.id] || 0) + 1;
          if (score >= 1) S.stats.perfect[u.id] = true;
          if (score >= PASS && S.stats.attempts[u.id] === 1) S.stats.firstTryUnits[u.id] = true;
          if (score >= PASS && S.stats.attempts[u.id] > 1 && !wasPassed) S.stats.retry = 1;
          s.testBest = Math.max(s.testBest || 0, score);
          save();
          if (score >= PASS) {
            const nx = mainUnits[mainUnits.indexOf(u) + 1];
            const gm = units.find((x) => x.track === 'games' && !passed(x.id));
            return `<p>${wasPassed ? 'Тест пройден снова.' : 'Юнит пройден! <i class="ph ph-confetti"></i>'}</p>
              ${nx && u.track === 'main' ? `<a class="btn primary" href="#/unit/${nx.id}">Следующий юнит <i class="ph ph-arrow-right"></i></a>` : ''}
              ${!nx && u.track === 'main' ? `<p class="muted small" style="width:100%">Это последний юнит A1 на сайте. Попросите Claude добавить блок A2.</p>` : ''}
              ${u.id === 'a1-0' && gm ? `<a class="btn" href="#/unit/${gm.id}">Открылся игровой трек <i class="ph ph-game-controller"></i></a>` : ''}
              <a class="btn" href="#/course">К программе</a>`;
          }
          return `<p>Нужно 80%. Повторите грамматику и слова, потом попробуйте ещё раз.</p>
            <button class="btn primary" data-reroute>Ещё раз</button>
            <a class="btn" href="#/unit/${u.id}/grammar">К грамматике</a>`;
        }
      }));
    }
  }

  // ───────────── Упражнения ─────────────
  function norm(s) {
    let x = String(s).toLowerCase().replace(/[’‘`]/g, "'");
    x = x.replace(/\bcan't\b/g, 'cannot').replace(/\bwon't\b/g, 'will not').replace(/n't\b/g, ' not')
      .replace(/\bi'm\b/g, 'i am').replace(/'re\b/g, ' are').replace(/\b(he|she|it|that|what|where|who|there)'s\b/g, '$1 is')
      .replace(/'ll\b/g, ' will').replace(/'ve\b/g, ' have');
    return x.replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();
  }
  function lev(a, b) {
    const m = a.length, n = b.length; const d = Array.from({ length: m + 1 }, (_, i) => [i]);
    for (let j = 1; j <= n; j++) d[0][j] = j;
    for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  function checkText(input, answers) {
    const v = norm(input);
    if (!v) return { ok: false };
    for (const a of answers) if (norm(a) === v) return { ok: true };
    for (const a of answers) { const na = norm(a); if (na.length > 5 && lev(na, v) === 1) return { ok: true, typo: a }; }
    return { ok: false };
  }
  function displayAnswer(e) {
    if (e.t === 'choice') return e.o[e.a];
    if (e.t === 'order') return e.a;
    return e.a[0];
  }

  function runExercises(root, list, { mode, onFinish }) {
    let queue = list.map((e) => ({ e, retry: false }));
    const total = list.length;
    let firstTryRight = 0; let answered = 0; let idx = 0;
    const retried = new Set();
    let hadMistake = false;

    function show() {
      if (idx >= queue.length) return finish();
      const { e, retry } = queue[idx];
      const pct = Math.round((Math.min(answered, total) / total) * 100);
      const label = { gap: 'Вставьте пропущенное слово', choice: 'Выберите вариант', order: 'Соберите предложение', tr: 'Переведите на английский', listen: 'Напишите, что услышали' }[e.t];
      root.innerHTML = `<div class="card ex-wrap">
        <div class="ex-head"><div class="progress"><i style="width:${pct}%"></i></div><span class="tiny muted">${Math.min(answered + 1, total)}/${total}${retry ? ' · повтор' : ''}</span></div>
        <div class="ex-label">${label}${e.hint ? ` · <span class="pill">${esc(e.hint)}</span>` : ''}</div>
        <div id="ex-body"></div>
        <div id="ex-fb"></div>
        <div class="ex-actions" id="ex-actions"></div></div>`;
      const b = $('#ex-body', root), acts = $('#ex-actions', root);
      let getValue = null;

      if (e.t === 'choice') {
        b.innerHTML = `<div class="ex-q">${fmtQ(e.q)}</div><div class="options">${e.o.map((o, i) => `<button class="option" data-i="${i}">${esc(o)}</button>`).join('')}</div>`;
        $$('.option', b).forEach((btn) => btn.addEventListener('click', () => {
          if (btn.dataset.lock) return;
          $$('.option', b).forEach((x) => (x.dataset.lock = 1));
          const ok = +btn.dataset.i === e.a;
          btn.classList.add(ok ? 'correct' : 'wrong');
          if (!ok) $$('.option', b)[e.a].classList.add('correct');
          result(ok);
        }));
        return;
      }
      if (e.t === 'order') {
        const words = e.a.split(' ');
        let picked = [];
        b.innerHTML = `<div class="ex-q" style="font-size:18px">${esc(e.ru)}</div><div class="chips target" id="tgt"></div><div class="chips" id="src">${shuffle(words.map((w, i) => ({ w, i }))).map(({ w, i }) => `<button class="chip" data-i="${i}">${esc(w)}</button>`).join('')}</div>`;
        const tgt = $('#tgt', b);
        const redraw = () => {
          tgt.innerHTML = picked.map((i, k) => `<button class="chip" data-k="${k}">${esc(words[i])}</button>`).join('');
          $$('#src .chip', b).forEach((c) => c.classList.toggle('used', picked.includes(+c.dataset.i)));
          $$('.chip', tgt).forEach((c) => c.addEventListener('click', () => { picked.splice(+c.dataset.k, 1); redraw(); }));
        };
        $$('#src .chip', b).forEach((c) => c.addEventListener('click', () => { if (!picked.includes(+c.dataset.i)) { picked.push(+c.dataset.i); redraw(); } }));
        getValue = () => picked.map((i) => words[i]).join(' ');
      } else if (e.t === 'listen') {
        b.innerHTML = `<div class="row" style="margin:10px 0 16px"><button class="btn" id="play"><i class="ph ph-speaker-high"></i> Слушать</button><button class="btn ghost small" id="slow"><i class="ph ph-person-simple-walk"></i> Медленно</button></div>
          <input class="input" id="inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Напишите по-английски">`;
        $('#play', b).addEventListener('click', () => speak(e.say));
        $('#slow', b).addEventListener('click', () => speak(e.say, { rate: 0.6 }));
        setTimeout(() => speak(e.say), 250);
        getValue = () => $('#inp', b).value;
      } else {
        const q = e.t === 'tr' ? `<div class="ex-q">${esc(e.q)}</div>` : `<div class="ex-q">${fmtQ(e.q)}</div>`;
        b.innerHTML = `${q}<input class="input" id="inp" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="${e.t === 'tr' ? 'Перевод на английский' : 'Пропущенное слово'}">`;
        getValue = () => $('#inp', b).value;
      }
      const inp = $('#inp', b); if (inp) { setTimeout(() => inp.focus(), 50); inp.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') check(); }); }
      acts.innerHTML = `<button class="btn primary" id="chk">Проверить</button>${mode === 'practice' ? '<button class="btn ghost" id="idk">Не знаю</button>' : ''}`;
      $('#chk', acts).addEventListener('click', check);
      const idk = $('#idk', acts); if (idk) idk.addEventListener('click', () => result(false));
      function check() {
        const v = getValue();
        if (!v || !v.trim()) { toast('Введите ответ'); return; }
        let r;
        if (e.t === 'order') r = { ok: norm(v) === norm(e.a) };
        else r = checkText(v, e.a);
        if (inp) inp.disabled = true;
        result(r.ok, r.typo);
      }
    }
    function fmtQ(q) { return esc(q).replace(/_{2,}/g, '<span class="blank">&nbsp;</span>'); }

    function result(ok, typo) {
      const item = queue[idx];
      if (!item.retry) { answered++; if (ok) firstTryRight++; }
      if (ok) { S.stats.exStreak++; S.stats.exStreakBest = Math.max(S.stats.exStreakBest, S.stats.exStreak); } else S.stats.exStreak = 0;
      if (!ok) hadMistake = true;
      if (ok && item.e.t === 'listen') S.stats.listenRight++;
      if (!item.retry) { S.stats.exType = S.stats.exType || {}; S.stats.exType[item.e.t] = (S.stats.exType[item.e.t] || 0) + 1; }
      track('exercises');
      const e = item.e;
      const ans = displayAnswer(e);
      const fb = $('#ex-fb', root);
      fb.innerHTML = ok
        ? `<div class="feedback ok"><b>${typo ? 'Верно, но с опечаткой' : pick(['Верно!', 'Отлично!', 'Так держать!', 'Правильно!'])}</b>${typo ? `<div class="right">Правильно пишется: <b>${esc(typo)}</b></div>` : ''}${e.why ? `<div class="why">${esc(e.why)}</div>` : ''}</div>`
        : `<div class="feedback bad"><b>Не совсем.</b><div class="right">Правильный ответ: <b>${esc(ans)}</b></div>${e.why ? `<div class="why">${esc(e.why)}</div>` : ''}</div>`;
      if (e.t === 'listen' || e.t === 'tr' || e.t === 'order') { const say = e.t === 'listen' ? e.say : ans; setTimeout(() => speak(say), 200); }
      if (!ok && mode === 'practice' && !retried.has(e)) { retried.add(e); queue.push({ e, retry: true }); }
      const acts = $('#ex-actions', root);
      acts.innerHTML = `<button class="btn primary" id="nxt">Дальше <i class="ph ph-arrow-right"></i></button>`;
      const nx = $('#nxt', acts); nx.focus();
      nx.addEventListener('click', () => { idx++; show(); });
      save();
    }
    function finish() {
      const score = total ? firstTryRight / total : 1;
      if (mode === 'practice' && !hadMistake) S.stats.flawless = 1;
      const extra = onFinish ? onFinish(score) : '';
      root.innerHTML = `<div class="card ex-wrap result">
        <div class="big" style="color:${score >= PASS ? 'var(--ok)' : 'var(--bad)'}">${Math.round(score * 100)}%</div>
        <p class="muted">${firstTryRight} из ${total} с первой попытки</p>
        <div class="row" style="justify-content:center">${extra}</div></div>`;
      $$('[data-reroute]', root).forEach((b) => b.addEventListener('click', route));
    }
    show();
  }
  const pick = (a) => a[Math.floor(Math.random() * a.length)];

  // ───────────── Чтение ─────────────
  const LIB = (window.LIBRARY || []).slice();
  const LEVEL_ORDER = { A1: 1, A2: 2, B1: 3, B2: 4 };
  LIB.sort((a, b) => (LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]) || a.title.localeCompare(b.title));
  const CAT_ICON = { 'Сериалы': '<i class="ph ph-television-simple"></i>', 'Мультфильмы': '<i class="ph ph-palette"></i>', 'Игры': '<i class="ph ph-game-controller"></i>', 'Аниме': '<i class="ph ph-flower-lotus"></i>', 'Кино': '<i class="ph ph-film-slate"></i>', 'Про экран': '<i class="ph ph-popcorn"></i>', 'Диалоги из игр': '<i class="ph ph-chat-circle-dots"></i>' };
  const wordsIn = (t) => t.text.split(/\s+/).filter(Boolean).length;
  const minsIn = (t) => Math.max(1, Math.round(wordsIn(t) / 90));
  const lsGet = (k, d) => { try { const v = localStorage.getItem(k); return v == null ? d : v; } catch (e) { return d; } };
  const lsSet = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  // Обложки статей: картинки по теме из Википедии / Wikimedia Commons (только ссылки, кешируются на 30 дней)
  const LIB_WIKI = {'lib-a1-shrek':'Shrek','lib-a1-peppa-pig':'Peppa Pig','lib-a2-ted-lasso':'Ted Lasso','lib-b1-speedrunning':'Speedrunning','lib-a2-sherlock':'Sherlock (TV series)','lib-a2-futurama':'Futurama','lib-a2-ratatouille':'Ratatouille (film)','lib-a1-minions':'Minions (film)','lib-a1-finding-nemo':'Finding Nemo','lib-b1-elden-ring':'Elden Ring','lib-a1-kung-fu-panda':'Kung Fu Panda (film)','lib-b1-dota-2':'Dota 2','lib-a1-tetris':'Tetris','lib-a1-pokemon':'Pokémon','lib-a1-lion-king':'The Lion King','lib-a2-zootopia':'Zootopia','lib-a2-coco':'Coco (2017 film)','lib-b2-chernobyl':'Chernobyl (miniseries)','lib-b1-witcher-3':'The Witcher 3: Wild Hunt','lib-b2-villains':'Villain','lib-a1-winnie-the-pooh':'Winnie-the-Pooh','lib-a1-frozen':'Frozen (2013 film)','lib-a1-cars':'Cars (film)','lib-a2-shrek-2':'Shrek 2','lib-b2-voice-actors':'Voice acting','lib-a1-the-sims':'The Sims','lib-b2-disco-elysium':'Disco Elysium','lib-a1-spongebob':'SpongeBob SquarePants','lib-b1-naruto':'Naruto','lib-a2-the-witcher':'The Witcher (TV series)','lib-a1-mr-bean':'Mr. Bean','lib-b2-streaming-wars':'Netflix','lib-b1-skyrim':'The Elder Scrolls V: Skyrim','lib-b1-arcane':'League of Legends','lib-b2-binge-watching':'Binge-watching','lib-b2-anime-west':'Anime','lib-b1-spirited-away':'Spirited Away','lib-b1-squid-game':'Squid Game','lib-b1-one-piece':'One Piece','lib-b1-attack-on-titan':'Attack on Titan','lib-b2-game-storytelling':'Video game','lib-b2-baldurs-gate-3':"Baldur's Gate 3",'lib-b1-indie-games':'Stardew Valley','lib-a2-brooklyn-99':'Brooklyn Nine-Nine','lib-a2-big-bang-theory':'The Big Bang Theory','lib-b2-cyberpunk-2077':'Cyberpunk 2077','lib-a2-inside-out':'Inside Out (2015 film)','lib-b1-pixar-story':'Pixar','lib-b1-peaky-blinders':'Peaky Blinders','lib-b1-gta-v':'Grand Theft Auto V','lib-a2-gravity-falls':'Gravity Falls','lib-b2-better-call-saul':'Better Call Saul','lib-b1-breaking-bad':'Breaking Bad','lib-b2-fandoms':'Fandom','lib-a1-toy-story':'Toy Story','lib-a2-only-murders':'Only Murders in the Building','lib-b2-true-detective':'True Detective','lib-a1-simpsons':'The Simpsons','lib-a2-spider-verse':'Spider-Man: Into the Spider-Verse','lib-a1-super-mario':'Mario','lib-a1-doctor-who':'Doctor Who','lib-b2-bojack-horseman':'BoJack Horseman','lib-b2-animated-film':'Animation','lib-a2-himym':'How I Met Your Mother','lib-b1-game-of-thrones':'Game of Thrones','lib-a2-avatar-tla':'Avatar: The Last Airbender','lib-a2-adventure-time':'Adventure Time','lib-b2-learning-with-tv':'Subtitles','lib-a2-up':'Up (2009 film)','lib-a1-among-us':'Among Us','lib-a2-httyd':'How to Train Your Dragon (2010 film)','lib-b2-dubbing-subtitles':'Dubbing','lib-a1-stranger-things':'Stranger Things','lib-b1-the-crown':'The Crown (TV series)','lib-b2-red-dead-redemption-2':'Red Dead Redemption 2','lib-b1-lost':'Lost (TV series)','lib-a2-stranger-things-80s':'Stranger Things'};
  const LIB_COMMONS = {'lib-a2-mandalorian':'Cosplay of Blue Mandalorian','lib-a1-minecraft':'Minecraft Skeleton','lib-a1-tom-and-jerry':'cat chasing','lib-b1-black-mirror':'Broken Samsung Galaxy','lib-a2-the-office':'Dunder Mifflin','lib-b1-dark':'Fermes de la Forêt-Noire','lib-b2-rick-and-morty':'Rick and Morty opening credits','lib-b2-succession':'SuccessionTV','lib-a1-friends':'Friends Central Perk couch','lib-b2-sitcoms':'WUTV television studios','lib-b1-money-heist':'Money Heist Berlin character','lib-b1-the-last-of-us':'Cosplay of Ellie and Joel from The Last of Us','lib-a1-wednesday':'Wednesday Addams at FlameCon','lib-a2-modern-family':'Cast of Modern Family Golden Globes','lib-a2-friends-central-perk':'Central Perk NYC couch','lib-b1-house-md':'Gregory House dry brush portrait','lib-b2-spoilers':'SPOILER.png','lib-b2-mr-robot':'Elliot alderson','lib-b2-severance':'Office Corridor Basilica'};
  Object.assign(LIB_WIKI, {'dlg-a1-tavern':'Tavern','dlg-a1-weapon-shop':'Blacksmith','dlg-a1-quest-giver':'Village','dlg-a1-character-select':'Cosplay','dlg-a1-farm':'Farm','dlg-a1-skin-shop':'Esports','dlg-a1-training':'Obstacle course','dlg-a1-gate-guard':'City gate','dlg-a2-lobby':'LAN party','dlg-a2-racing':'Pit stop','dlg-a2-coop-puzzle':'Ta Prohm','dlg-a2-mmo-first-day':'Massively multiplayer online role-playing game','dlg-a2-boss':'Throne','dlg-a2-lost-pet':'Beagle','dlg-a2-spaceport':'Spaceport','dlg-a2-find-key':'Haunted house','dlg-b1-squad-voice':'Headset (audio)','dlg-b1-radio-night':'Walkie-talkie','dlg-b1-docking':'International Space Station','dlg-b1-support-bug':'Software bug','dlg-b1-coach-halftime':'Manager (association football)','dlg-b1-smuggler':'Smuggling','dlg-b1-raid-night':'Dragon','dlg-b1-scientist-puzzle':'Crystal','dlg-b2-faction-talks':'Diplomacy','dlg-b2-interrogation':'Interrogation','dlg-b2-moba-draft':'Multiplayer online battle arena','dlg-b2-moral-choice':'Trolley problem','dlg-b2-streamer-chat':'Live streaming','dlg-b2-final-boss':'Boss (video games)','dlg-b2-post-match':'Esports','dlg-b2-strategy-deal':'Salt'});
  (window.BOOKS || []).concat(window.BOOK_INDEX || []).forEach((b) => { if (b.wiki) LIB_WIKI[b.id] = b.wiki; });
  let libImgMap = null, libImgLoading = null;
  function libImages() {
    if (libImgMap) return Promise.resolve(libImgMap);
    try { const c = JSON.parse(localStorage.getItem('ep.libimg.v3') || 'null'); if (c && Date.now() - c.t < 30 * DAY && Object.keys(c.m).length > 50) { libImgMap = c.m; return Promise.resolve(libImgMap); } } catch (e) {}
    if (libImgLoading) return libImgLoading;
    const m = {};
    const ids = Object.keys(LIB_WIKI);
    const chunks = []; for (let i = 0; i < ids.length; i += 40) chunks.push(ids.slice(i, i + 40));
    const wiki = Promise.all(chunks.map((ch) => fetch('https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=480&pilicense=any&titles=' + encodeURIComponent(ch.map((k) => LIB_WIKI[k]).join('|')))
      .then((r) => r.json()).then((j) => {
        const norm = {}; ((j.query || {}).normalized || []).concat((j.query || {}).redirects || []).forEach((n) => { norm[n.from] = n.to; });
        const byT = {}; Object.values((j.query || {}).pages || {}).forEach((p) => { if (p.thumbnail) byT[p.title] = p.thumbnail.source; });
        ch.forEach((k) => { let t = LIB_WIKI[k]; t = norm[t] || t; t = norm[t] || t; if (byT[t]) m[k] = byT[t]; });
      }).catch(() => {})));
    const commons = Promise.all(Object.entries(LIB_COMMONS).map(([k, q]) => fetch('https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=3&gsrsearch=' + encodeURIComponent(q) + '&prop=imageinfo&iiprop=url|mime&iiurlwidth=480')
      .then((r) => r.json()).then((j) => { const p = Object.values((j.query || {}).pages || {}).sort((a, b) => a.index - b.index).find((x) => x.imageinfo && /jpeg|png/.test(x.imageinfo[0].mime)); if (p) m[k] = p.imageinfo[0].thumburl; }).catch(() => {})));
    libImgLoading = Promise.all([wiki, commons]).then(() => {
      libImgMap = m; libImgLoading = null;
      if (Object.keys(m).length > 50) { try { localStorage.setItem('ep.libimg.v3', JSON.stringify({ t: Date.now(), m })); } catch (e) {} }
      return m;
    });
    return libImgLoading;
  }
  function paintCovers(root) {
    libImages().then((m) => {
      $$('.lib-cover[data-img]', root || document).forEach((el) => {
        const u = m[el.dataset.img]; if (!u || el.querySelector('img')) return;
        const im = new Image(); im.alt = ''; im.referrerPolicy = 'no-referrer'; im.loading = 'lazy';
        im.onload = () => el.classList.add('has-img'); im.onerror = () => im.remove();
        im.src = u; el.appendChild(im);
      });
    });
  }
  function myLevel() { const u = currentUnit(); return u ? u.level : 'A1'; }

  function renderLibrary() {
    const lvl = lsGet('ep.libLevel', myLevel());
    const cat = lsGet('ep.libCat', 'all');
    const hideRead = lsGet('ep.libHideRead', '') === '1';
    const q = (sessionStorage.getItem('ep.libQ') || '').toLowerCase();
    const cats = ['all', ...Object.keys(CAT_ICON).filter((c) => LIB.some((t) => t.cat === c))];
    const list = LIB.filter((t) => (lvl === 'all' || t.level === lvl) && (cat === 'all' || t.cat === cat) && (!hideRead || !S.textsRead[t.id])
      && (!q || (t.title + ' ' + t.about + ' ' + t.ru).toLowerCase().includes(q)));
    const readN = LIB.filter((t) => S.textsRead[t.id]).length;
    const unitGroups = units.filter(isUnlocked).map((u) => ({ u, texts: u.texts }));
    view().innerHTML = `
      <a href="#/library" class="backlink"><i class="ph ph-caret-left"></i></a>
      <div class="row" style="align-items:flex-end"><div style="flex:1;min-width:220px"><h1 class="page-title" style="margin-bottom:4px">Все статьи</h1>
        <p class="muted" style="margin:0">${LIB.length} статей и диалогов · прочитано ${readN}</p></div>
        <button class="btn small" id="ut-toggle"><i class="ph ph-plus"></i> Свой текст</button></div>
      <div class="card" id="ut-box" style="margin-top:16px" hidden>
        <h3>Свой текст</h3>
        <p class="muted small">Статья, диалог из игры, субтитры, описание квеста — вставьте и читайте с переводом по тапу.</p>
        <div class="stack"><input class="input" id="ut-title" placeholder="Название" style="font-size:16px"><textarea class="input" id="ut-text" placeholder="Вставьте английский текст"></textarea><div><button class="btn primary" id="ut-add">Добавить</button></div></div>
      </div>
      <div class="lib-filters">
        <div class="seg lib-lvl">${['all', 'A1', 'A2', 'B1', 'B2'].map((l) => `<button data-lvl="${l}" class="${lvl === l ? 'on' : ''}">${l === 'all' ? 'Все' : l}${l === myLevel() ? ' •' : ''}</button>`).join('')}</div>
        <div class="chips-row">${cats.map((c) => `<button class="fchip ${cat === c ? 'on' : ''}" data-cat="${esc(c)}">${c === 'all' ? 'Все темы' : CAT_ICON[c] + ' ' + esc(c)}</button>`).join('')}</div>
        <div class="row" style="gap:10px"><input class="input lib-search" id="lib-q" placeholder="Поиск: Shrek, таверна, Witcher…" value="${esc(q)}">
          <label class="row small" style="gap:8px;cursor:pointer;white-space:nowrap"><input type="checkbox" id="lib-hide" ${hideRead ? 'checked' : ''}> Скрыть прочитанные</label></div>
      </div>
      <p class="tiny muted" style="margin:6px 0 12px">${lvl === 'all' ? 'Все уровни' : 'Уровень ' + lvl} · ${list.length} ${plural(list.length, 'статья', 'статьи', 'статей')}. Точка • — ваш текущий уровень. Читать чуть выше своего уровня полезно, но не больше чем на шаг.</p>
      <div class="lib-grid">${list.map(libCard).join('') || '<div class="empty" style="grid-column:1/-1"><div class="big"><i class="ph ph-magnifying-glass"></i></div>Ничего не нашлось — смените фильтр.</div>'}</div>
      ${S.userTexts.length ? `<h2 style="margin-top:34px">Мои тексты</h2><div class="stack">${S.userTexts.map((t) => textRow(t, true)).join('')}</div>` : ''}
      <details class="lib-units"><summary><h2 style="display:inline">Тексты из уроков</h2> <span class="muted small">${unitGroups.reduce((s, g) => s + g.texts.length, 0)}</span></summary>
        ${unitGroups.map(({ u, texts }) => `<div class="eyebrow" style="margin-top:14px">${u.track === 'games' ? '<i class="ph ph-game-controller"></i> ' : 'Юнит ' + u.num + ' · '}${esc(u.title)}</div><div class="stack">${texts.map((t) => textRow(t)).join('')}</div>`).join('')}
      </details>`;
    paintCovers(view());
    $$('[data-lvl]').forEach((b) => b.addEventListener('click', () => { lsSet('ep.libLevel', b.dataset.lvl); renderLibrary(); }));
    $$('[data-cat]').forEach((b) => b.addEventListener('click', () => { lsSet('ep.libCat', b.dataset.cat); renderLibrary(); }));
    $('#lib-hide').addEventListener('change', (e) => { lsSet('ep.libHideRead', e.target.checked ? '1' : ''); renderLibrary(); });
    let qt; $('#lib-q').addEventListener('input', (e) => { clearTimeout(qt); qt = setTimeout(() => { try { sessionStorage.setItem('ep.libQ', e.target.value); } catch (x) {} renderLibrary(); const i = $('#lib-q'); i.focus(); i.setSelectionRange(i.value.length, i.value.length); }, 250); });
    $('#ut-toggle').addEventListener('click', () => { const b = $('#ut-box'); b.hidden = !b.hidden; if (!b.hidden) $('#ut-title').focus(); });
    $('#ut-add').addEventListener('click', () => {
      const title = $('#ut-title').value.trim() || 'Мой текст';
      const text = $('#ut-text').value.trim();
      if (!text) { toast('Вставьте текст'); return; }
      const t = { id: 'u-' + Date.now(), title, text, level: '' };
      S.userTexts.unshift(t); save(); location.hash = '#/read/' + t.id;
    });
    $$('[data-del]').forEach((b) => b.addEventListener('click', (ev) => {
      ev.preventDefault(); ev.stopPropagation();
      if (!confirm('Удалить текст?')) return;
      S.userTexts = S.userTexts.filter((t) => t.id !== b.dataset.del); tomb('text:' + b.dataset.del); save(); renderLibrary();
    }));
  }
  function libCard(t) {
    const read = S.textsRead[t.id];
    const qz = (S.quiz || {})[t.id];
    return `<a class="lib-card cat-${Object.keys(CAT_ICON).indexOf(t.cat)}" href="#/read/${t.id}">
      <div class="lib-cover" data-img="${t.id}"><span>${CAT_ICON[t.cat] || '<i class="ph ph-book-open-text"></i>'}</span>${read ? '<b class="lib-done"><i class="ph-fill ph-check"></i></b>' : ''}</div>
      <div class="lib-body">
        <div class="lib-meta"><span class="pill accent">${t.level}</span><span class="tiny muted">${CAT_ICON[t.cat] || ''} ${esc(t.cat)}</span></div>
        <div class="lib-title">${esc(t.title)}</div>
        <div class="lib-ru">${esc(t.ru)}</div>
        <div class="tiny muted">${esc(t.about)} · ${minsIn(t)} мин · ${wordsIn(t)} слов${qz != null ? ` · тест ${qz}/${t.questions.length}` : ''}</div>
      </div></a>`;
  }
  function textRow(t, user) {
    return `<a class="unit-row" href="#/read/${t.id}"><div class="unit-num">${S.textsRead[t.id] ? '<i class="ph ph-check"></i>' : '<i class="ph ph-book-open-text"></i>'}</div>
      <div class="body"><div class="title">${esc(t.title)}</div><div class="muted small">${wordsIn(t)} слов${t.level ? ' · ' + t.level : ''}</div></div>
      ${user ? `<button class="icon-btn" data-del="${t.id}" title="Удалить"><i class="ph ph-x"></i></button>` : ''}</a>`;
  }

  // ───────────── Общие блоки нового интерфейса ─────────────
  function userInitial() { const st = cloudOn() ? Cloud.status() : {}; return st.user && st.user.email ? esc(st.user.email[0].toUpperCase()) : ''; }
  function topbar(title, right = '', sub = '') {
    const st = streak(); const on = !!S.activity[today()];
    return `<div class="topbar"><a class="streak-pill ${on ? 'on' : ''}" href="#/profile" title="Дней подряд"><i class="ph-fill ph-flame"></i><b>${st}</b></a><span class="spacer"></span>${right}</div>
      <h1 class="page-title">${title}</h1>${sub ? `<p class="page-sub">${sub}</p>` : ''}`;
  }
  const rbtn = (href, ico, title, id = '') => `<a class="rbtn" href="${href}" title="${title}" aria-label="${title}"${id ? ` id="${id}"` : ''}><i class="ph ph-${ico}"></i></a>`;
  const avatarBtn = () => { const i = userInitial(); return `<a class="rbtn av" href="#/profile" title="Профиль">${i || '<i class="ph ph-user"></i>'}</a>`; };
  function section(title, href, inner, sub = '') {
    if (!inner) return '';
    return `<section class="sec"><div class="sec-head"><h2>${title}</h2>${href ? `<a class="see-all" href="${href}">См. все</a>` : ''}</div>${sub ? `<p class="sec-sub">${sub}</p>` : ''}<div class="carousel">${inner}</div></section>`;
  }
  const catIdx = (c) => Object.keys(CAT_ICON).indexOf(c);
  function poster({ href, img, title, band, cap, icon, cls = '', done, progress }) {
    return `<a class="poster" href="${href}"><div class="poster-img lib-cover ${cls}" data-img="${img}"><span>${icon}</span>
      ${done ? '<b class="lib-done"><i class="ph-fill ph-check"></i></b>' : ''}
      <div class="poster-band"><b>${esc(title)}</b><span>${band}</span></div>
      ${progress ? `<i class="poster-prog" style="width:${Math.round(progress * 100)}%"></i>` : ''}</div>
      <div class="poster-cap">${cap}</div></a>`;
  }
  const dlgLines = (t) => t.text.split(/\n+/).filter((l) => /^[A-Z][\w .'’-]{0,24}:/.test(l.trim())).length;
  function textPoster(t) {
    const dlg = t.kind === 'dialogue';
    return poster({ href: '#/read/' + t.id, img: t.id, title: t.title, band: `${esc(t.cat)} · ${t.level}`, cls: 'cat-' + catIdx(t.cat), icon: CAT_ICON[t.cat] || '<i class="ph ph-book-open-text"></i>', done: S.textsRead[t.id],
      cap: dlg ? `<i class="ph ph-chat-circle-dots"></i> Диалог · ${dlgLines(t)} реплик` : `<i class="ph ph-article"></i> Статья · ${minsIn(t)} мин` });
  }
  // ───────────── Книги ─────────────
  const allBooks = () => (window.BOOKS || []).concat(window.BOOK_INDEX || []);
  const chapN = (b) => (Array.isArray(b.chapters) ? b.chapters.length : b.chapters || 0);
  const bookDone = (b) => { let n = 0; for (let i = 0; i < chapN(b); i++) if (S.textsRead[b.id + '#' + i]) n++; return n; };
  function bookPoster(b) {
    const n = chapN(b), d = bookDone(b);
    return poster({ href: '#/book/' + b.id, img: b.id, title: b.title, band: `${esc(b.author)} · ${b.level}`, cls: 'book' + (b.kind === 'original' ? ' orig' : ''), icon: '<i class="ph ph-book"></i>',
      done: n && d >= n, progress: d && d < n ? d / n : 0,
      cap: `<i class="ph ph-book-open"></i> ${b.kind === 'original' ? 'Оригинал' : 'Адаптация'} · ${n} ${plural(n, 'глава', 'главы', 'глав')}` });
  }
  const APP_VER = ((document.querySelector('script[src*="js/app.js"]') || {}).src || '').split('?v=')[1] || '';
  const bookWait = {}, bookProm = {}, bookFull = {};
  window.BOOK_LOADED = (b) => { if (b && b.id) { bookFull[b.id] = b; if (bookWait[b.id]) bookWait[b.id](b); } };
  function loadBook(id) {
    const ad = (window.BOOKS || []).find((x) => x.id === id); if (ad) return Promise.resolve(ad);
    if (bookFull[id]) return Promise.resolve(bookFull[id]);
    if (!(window.BOOK_INDEX || []).some((x) => x.id === id)) return Promise.resolve(null);
    if (bookProm[id]) return bookProm[id];
    bookProm[id] = new Promise((res) => {
      bookWait[id] = res;
      const sc = document.createElement('script');
      sc.src = 'data/books/' + id + '.js' + (APP_VER ? '?v=' + APP_VER : '');
      sc.onerror = () => { delete bookProm[id]; res(null); };
      document.head.appendChild(sc);
    });
    return bookProm[id];
  }
  function renderBooks() {
    const ad = window.BOOKS || [], or = window.BOOK_INDEX || [];
    view().innerHTML = `<a href="#/library" class="backlink"><i class="ph ph-caret-left"></i></a>
      <h1 class="page-title">Книги</h1><p class="page-sub">Адаптированные версии написаны простым языком под уровень. Оригиналы — полные тексты классики из Project Gutenberg (общественное достояние), с переводом по тапу.</p>
      <h2 class="sec-h">Адаптированные</h2><div class="poster-grid">${ad.map(bookPoster).join('')}</div>
      <h2 class="sec-h">Классика в оригинале</h2><div class="poster-grid">${or.map(bookPoster).join('')}</div>`;
    paintCovers(view());
  }
  function renderBook(id, ch) {
    const meta = allBooks().find((b) => b.id === id);
    if (!meta) return renderLibraryHome();
    const hash = location.hash;
    if (!Array.isArray(meta.chapters) && !bookFull[id]) view().innerHTML = `<a href="#/library" class="backlink"><i class="ph ph-caret-left"></i></a><div class="empty"><div class="big"><i class="ph ph-book-open"></i></div>Открываю книгу «${esc(meta.title)}»…</div>`;
    loadBook(id).then((b) => {
      if (location.hash !== hash) return;
      if (!b) { view().innerHTML = `<a href="#/library" class="backlink"><i class="ph ph-caret-left"></i></a><div class="empty"><div class="big"><i class="ph ph-wifi-slash"></i></div>Не удалось загрузить книгу. Проверьте интернет и обновите страницу.</div>`; return; }
      b = Object.assign({}, meta, b);
      const n = b.chapters.length;
      if (ch != null && ch !== '') {
        const i = Math.max(0, Math.min(n - 1, parseInt(ch, 10) || 0));
        const c = b.chapters[i];
        lsSet('ep.bookAt.' + id, String(i));
        return renderReader(null, { id: id + '#' + i, title: c.title, text: c.text, level: b.level, book: b, chapter: i });
      }
      const d = bookDone(b);
      const firstUnread = b.chapters.findIndex((c, i) => !S.textsRead[id + '#' + i]);
      const at = Math.max(0, Math.min(n - 1, lsGet('ep.bookAt.' + id, '') !== '' ? +lsGet('ep.bookAt.' + id, 0) : firstUnread));
      const words = b.chapters.reduce((s, c) => s + wordsIn(c), 0);
      const orig = b.kind === 'original';
      const pair = allBooks().find((x) => x.id !== b.id && x.wiki === b.wiki);
      view().innerHTML = `
        <a href="#/library" class="backlink"><i class="ph ph-caret-left"></i></a>
        <div class="book-hero">
          <div class="poster-img lib-cover book${orig ? ' orig' : ''}" data-img="${b.id}"><span><i class="ph ph-book"></i></span></div>
          <div class="book-info">
            <div class="lib-meta"><span class="pill accent">${b.level}</span><span class="pill">${orig ? 'Оригинал' : 'Адаптированная'}</span></div>
            <h1>${esc(b.title)}</h1>
            <div class="book-author">${esc(b.author)}</div>
            <p class="muted">${esc(b.ru || '')}</p>
            <div class="small muted">${n} ${plural(n, 'глава', 'главы', 'глав')} · ${words.toLocaleString('ru-RU')} слов · ≈ ${Math.max(1, Math.round(words / 90 / 60))} ч чтения</div>
            <div class="progress" style="margin:12px 0 16px"><i style="width:${(d / n) * 100}%"></i></div>
            <a class="pill-btn" href="#/book/${b.id}/${at}">${d || lsGet('ep.bookAt.' + id, '') ? 'ПРОДОЛЖИТЬ · гл. ' + (at + 1) : 'НАЧАТЬ ЧИТАТЬ'}</a>
          </div>
        </div>
        ${orig ? `<div class="g-tip" style="margin:18px 0 0">Это полный оригинальный текст без упрощений — язык XIX века бывает непростым. ${pair ? `Если тяжело, начните с <a href="#/book/${pair.id}">адаптированной версии (${pair.level})</a>.` : 'Если тяжело — начните с адаптированных книг.'}</div>` : pair ? `<div class="g-tip" style="margin:18px 0 0">Когда дочитаете, попробуйте <a href="#/book/${pair.id}">оригинал этой книги</a> — вы удивитесь, сколько уже понимаете.</div>` : ''}
        <h2 class="sec-h">Главы</h2>
        <div class="chap-list">${b.chapters.map((c, i) => { const r = S.textsRead[b.id + '#' + i]; return `<a class="chap-row ${r ? 'done' : ''} ${i === at && !r ? 'cur' : ''}" href="#/book/${b.id}/${i}"><span class="chap-num">${r ? '<i class="ph ph-check"></i>' : i + 1}</span><span class="chap-title">${esc(c.title)}</span><span class="tiny muted">${minsIn(c)} мин</span><i class="ph ph-caret-right muted"></i></a>`; }).join('')}</div>`;
      paintCovers(view());
    });
  }

  // ───────────── Библиотека: витрина ─────────────
  function renderLibraryHome() {
    const lvl = myLevel(), LV = LEVEL_ORDER[lvl];
    const dist = (t) => Math.abs(LEVEL_ORDER[t.level] - LV) + (LEVEL_ORDER[t.level] > LV + 1 ? 2 : 0);
    const rank = (a, b) => ((S.textsRead[a.id] ? 1 : 0) - (S.textsRead[b.id] ? 1 : 0)) || (dist(a) - dist(b)) || (LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level]);
    const arts = LIB.filter((t) => t.kind !== 'dialogue');
    const forYou = arts.filter((t) => !S.textsRead[t.id] && (t.level === lvl || LEVEL_ORDER[t.level] === LV + 1)).slice(0, 12);
    const byCat = (c) => LIB.filter((t) => t.cat === c).sort(rank).slice(0, 14);
    const reading = allBooks().filter((b) => (S.bookPos || {})[b.id] || lsGet('ep.bookAt.' + b.id, '')).filter((b) => bookDone(b) < chapN(b));
    const adapted = (window.BOOKS || []).slice().sort((a, b) => Math.abs(LEVEL_ORDER[a.level] - LV) - Math.abs(LEVEL_ORDER[b.level] - LV));
    const catSec = (c, title, sub) => section(`${CAT_ICON[c] || ''} ${title}`, '#/library/all/' + encodeURIComponent(c), byCat(c).map(textPoster).join(''), sub);
    const lvTiles = COURSE.levels.map((l, i) => { const us = mainUnits.filter((u) => u.level === l.id); const dn = us.filter((u) => passed(u.id)).length;
      return `<a class="coll-tile t${i}" href="#/course"><div class="coll-ill"><i class="ph-fill ph-${['plant', 'tree-evergreen', 'mountains', 'rocket-launch'][i] || 'star'}"></i></div><b>${l.id}</b><span>${esc((l.title.split('— ')[1] || l.title))}</span><span class="coll-meta">${us.length ? dn + ' из ' + us.length + ' юнитов' : 'скоро'}</span></a>`; }).join('');
    view().innerHTML = `
      ${topbar('Библиотека', rbtn('#/library/new', 'plus', 'Свой текст') + rbtn('#/library/find', 'magnifying-glass', 'Поиск'), `${LIB.length} статей и диалогов · ${allBooks().length} книг · ваш уровень ${lvl}`)}
      ${reading.length ? section('Продолжить чтение', '', reading.map(bookPoster).join('')) : ''}
      ${section('Для вас', '#/library/all', forYou.map(textPoster).join(''), `Статьи уровня ${lvl} и на шаг выше — самое полезное для роста`)}
      ${section('<i class="ph ph-books"></i> Адаптированные книги', '#/library/books', adapted.map(bookPoster).join(''), 'Классика, пересказанная простым языком под ваш уровень')}
      ${catSec('Диалоги из игр', 'Диалоги из игр', 'Таверны, лобби, рейды и боссы — живая речь, которую вы услышите в играх. По ролям, с озвучкой разными голосами')}
      ${catSec('Сериалы', 'Сериалы')}
      ${catSec('Игры', 'Игры')}
      ${catSec('Мультфильмы', 'Мультфильмы')}
      ${catSec('Аниме', 'Аниме')}
      ${catSec('Кино', 'Кино')}
      ${catSec('Про экран', 'Про экран')}
      ${section('<i class="ph ph-crown-simple"></i> Классика в оригинале', '#/library/books', (window.BOOK_INDEX || []).map(bookPoster).join(''), 'Полные тексты без упрощений — цель уровня B2')}
      <section class="sec"><div class="sec-head"><h2>Грамматика по уровням</h2><a class="see-all" href="#/course">См. все</a></div><div class="coll-grid">${lvTiles}<a class="coll-tile t5" href="#/tenses"><div class="coll-ill"><i class="ph-fill ph-clock-countdown"></i></div><b>Времена</b><span>Все ${(window.TENSES || []).length} времён: карта и тренажёр</span><span class="coll-meta">${(window.TENSES || []).filter((t) => (((S.tenses || {})[t.id] || {}).best || 0) >= 0.8).length} освоено</span></a></div></section>
      ${S.userTexts.length ? `<section class="sec"><div class="sec-head"><h2>Мои тексты</h2><a class="see-all" href="#/library/new">Добавить</a></div><div class="stack">${S.userTexts.map((t) => textRow(t, true)).join('')}</div></section>` : ''}
      <a class="list-link" href="#/library/all"><i class="ph ph-list-magnifying-glass"></i><span><b>Все статьи списком</b><span class="small muted">Фильтры по уровню и теме, поиск, тексты из уроков</span></span><i class="ph ph-caret-right muted"></i></a>`;
    paintCovers(view());
    $$('[data-del]').forEach((b) => b.addEventListener('click', (ev) => {
      ev.preventDefault(); ev.stopPropagation();
      if (!confirm('Удалить текст?')) return;
      S.userTexts = S.userTexts.filter((t) => t.id !== b.dataset.del); tomb('text:' + b.dataset.del); save(); renderLibraryHome();
    }));
  }

  // ───────────── Цель на сегодня: три кольца ─────────────
  function goalCard(title = 'Цель на сегодня') {
    const act = S.activity[today()] || {};
    const due = dueCards().length, nw = newAvailable();
    const rv = act.reviews || 0, rvGoal = rv + due + nw;
    const ex = act.exercises || 0, exGoal = 20;
    const rd = act.reads || 0, rdGoal = 1;
    const rings = [
      { r: 52, v: rvGoal ? rv / rvGoal : 1, c: 'var(--r1)', label: 'Карточки', n: rv, goal: rvGoal, hint: rvGoal ? 'повторить всё на сегодня' : 'сегодня нечего повторять' },
      { r: 39, v: ex / exGoal, c: 'var(--r2)', label: 'Упражнения', n: ex, goal: exGoal, hint: '20 ответов в упражнениях' },
      { r: 26, v: rd / rdGoal, c: 'var(--r3)', label: 'Чтение', n: rd, goal: rdGoal, hint: 'прочитать 1 текст' }
    ];
    rings.forEach((g) => { g.val = g.v >= 1 ? `<span class="goal-ok"><i class="ph ph-check"></i> ${g.n}</span>` : `${g.n} из ${g.goal}`; });
    const svg = rings.map((g) => { const C = 2 * Math.PI * g.r; return `<circle cx="64" cy="64" r="${g.r}" fill="none" stroke="${g.c}" stroke-opacity=".16" stroke-width="10"/><circle cx="64" cy="64" r="${g.r}" fill="none" stroke="${g.c}" stroke-width="10" stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - Math.min(1, g.v))}" transform="rotate(-90 64 64)" style="transition:stroke-dashoffset .8s"/>`; }).join('');
    const done = rings.filter((g) => g.v >= 1).length;
    return `<div class="goal-card"><div class="goal-text"><div class="goal-h">${title}</div>
      ${rings.map((g) => `<div class="goal-row"><i style="background:${g.c}"></i><span>${g.label}<em>${g.hint}</em></span><b>${g.val}</b></div>`).join('')}
      <div class="small muted" style="margin-top:6px">${done === 3 ? 'Все три кольца закрыты — отличный день!' : 'Закройте все три кольца'}</div></div>
      <svg class="goal-rings" viewBox="0 0 128 128" width="128" height="128">${svg}</svg></div>`;
  }

  // ───────────── Профиль ─────────────
  function streakCal() {
    const now = new Date(); const y = now.getFullYear(), m = now.getMonth();
    const first = new Date(y, m, 1); const days = new Date(y, m + 1, 0).getDate();
    const off = (first.getDay() + 6) % 7;
    const key = (d) => y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');
    let cells = '';
    for (let i = 0; i < off; i++) cells += '<span></span>';
    for (let d = 1; d <= days; d++) {
      const on = !!S.activity[key(d)], isT = d === now.getDate(), fut = d > now.getDate();
      const prevOn = d > 1 && !!S.activity[key(d - 1)], nextOn = d < days && !!S.activity[key(d + 1)];
      cells += `<span class="cal-d ${on ? 'on' : ''} ${on && prevOn && (off + d - 1) % 7 ? 'jl' : ''} ${on && nextOn && (off + d) % 7 ? 'jr' : ''} ${isT ? 'today' : ''} ${fut ? 'fut' : ''}"><b>${d}</b></span>`;
    }
    const active = Object.keys(S.activity).filter((k) => k.startsWith(y + '-' + String(m + 1).padStart(2, '0'))).length;
    return `<div class="card cal-card"><div class="row" style="margin-bottom:12px"><div><div class="goal-h" style="margin:0">${now.toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' }).replace(/^./, (c) => c.toUpperCase())}</div><div class="small muted">${active} ${plural(active, 'день', 'дня', 'дней')} занятий в этом месяце</div></div><span class="spacer"></span><span class="streak-pill on big"><i class="ph-fill ph-flame"></i><b>${streak()}</b></span></div>
      <div class="cal-grid">${['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((d) => `<em>${d}</em>`).join('')}${cells}</div></div>`;
  }
  function renderProfile() {
    const st = cloudOn() ? Cloud.status() : {};
    const email = st.user && st.user.email;
    const e = engagement();
    const cards = Object.values(S.cards);
    const learned = cards.filter((c) => c.state === 'review' && c.ivl >= 21).length + Object.keys(S.known).length;
    const days = Object.keys(S.activity).length;
    const recent = ACH.list.filter((a) => S.ach[a.id]).sort((a, b) => S.ach[b.id] - S.ach[a.id]).slice(0, 3);
    const medal = ['#C9853E', '#A7B1BE', '#E3B23C', '#4F6AF0', '#9A55F0', '#E8456B'][Math.min(5, Math.floor((e.lvl - 1) / 2))];
    view().innerHTML = `
      ${topbar('Профиль', rbtn('#/settings', 'gear-six', 'Настройки'))}
      <a class="prof-head" href="#/account">
        <div class="avatar big">${email ? esc(email[0].toUpperCase()) : '<i class="ph ph-user"></i>'}</div>
        <div style="flex:1;min-width:0"><b class="acc-mail">${email ? esc(email) : 'Гость'}</b>
          <div class="small muted">${email ? (st.lastError ? '<i class="ph ph-warning"></i> Нет связи — прогресс отправится позже' : '<i class="ph ph-cloud-check"></i> Прогресс сохранён в облаке') : '<i class="ph ph-cloud-slash"></i> Войдите, чтобы прогресс был на всех устройствах'}</div></div>
        <i class="ph ph-caret-right muted"></i></a>
      <a class="league" href="#/achievements" style="--m:${medal}">
        <div class="league-medal"><i class="ph-fill ph-medal"></i><b>${e.lvl}</b></div>
        <div style="flex:1;min-width:0"><div class="eyebrow" style="margin:0">Уровень ${e.lvl}</div><div class="league-rank">${esc(e.rank)}</div>
          <div class="progress" style="margin:8px 0 4px"><i style="width:${(e.into / e.need) * 100}%"></i></div>
          <div class="tiny muted">${e.into} / ${e.need} XP до уровня ${e.lvl + 1} · всего ${e.xp} XP</div></div></a>
      <div class="tiles4">
        <div class="tile t-orange"><i class="ph-fill ph-flame"></i><b>${streak()}</b><span>дней подряд</span></div>
        <div class="tile t-blue"><i class="ph-fill ph-calendar-check"></i><b>${days}</b><span>${plural(days, 'день', 'дня', 'дней')} занятий</span></div>
        <div class="tile t-green"><i class="ph-fill ph-seal-check"></i><b>${learned}</b><span>слов выучено</span></div>
        <div class="tile t-yellow"><i class="ph-fill ph-trophy"></i><b>${Object.keys(S.ach).length}</b><span>наград из ${ACH.list.length}</span></div>
      </div>
      ${streakCal()}
      ${recent.length ? `<section class="sec"><div class="sec-head"><h2>Последние награды</h2><a class="see-all" href="#/achievements">См. все</a></div><div class="ach-list">${recent.map((a) => achCard(a, achCtx())).join('')}</div></section>` : ''}
      <div class="menu-list">
        <a href="#/achievements"><span class="mi" style="--c:#E3A21A"><i class="ph-fill ph-trophy"></i></span><span>Достижения</span><em>${Object.keys(S.ach).length}/${ACH.list.length}</em><i class="ph ph-caret-right"></i></a>
        <a href="#/stats"><span class="mi" style="--c:#4F6AF0"><i class="ph-fill ph-chart-bar"></i></span><span>Прогресс и статистика</span><i class="ph ph-caret-right"></i></a>
        <a href="#/account"><span class="mi" style="--c:#1FA865"><i class="ph-fill ph-cloud"></i></span><span>${email ? 'Аккаунт и синхронизация' : 'Войти или создать аккаунт'}</span><i class="ph ph-caret-right"></i></a>
        <a href="#/settings"><span class="mi" style="--c:#8E8E99"><i class="ph-fill ph-gear-six"></i></span><span>Настройки</span><i class="ph ph-caret-right"></i></a>
      </div>`;
  }

  // ───────────── Времена: карта, страница времени, тренажёр ─────────────
  const TENSES = window.TENSES || [];
  const TENSE_BY = {}; TENSES.forEach((t) => { TENSE_BY[t.id] = t; });
  const TIME_RU = { present: 'Настоящее', past: 'Прошедшее', future: 'Будущее' };
  const TIME_ICO = { present: 'clock', past: 'clock-counter-clockwise', future: 'clock-clockwise' };
  function tlSvg(t) {
    const perf = /perfect/.test(t.aspect); const ref = t.time === 'past' ? (perf ? 50 : 34) : t.time === 'future' ? (perf ? 108 : 96) : 65;
    const c = 'var(--tc)';
    let g = '';
    if (t.aspect === 'simple') g = t.time === 'present' ? [22, 40, 58, 76, 94, 112].map((x) => `<circle cx="${x}" cy="22" r="4" fill="${c}"/>`).join('') : `<circle cx="${ref}" cy="22" r="6" fill="${c}"/>`;
    else if (t.aspect === 'continuous') g = `<path d="M${ref - 22} 22 q5.5 -8 11 0 t11 0 t11 0 t11 0" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/>`;
    else if (t.aspect === 'perfect') g = `<circle cx="${ref - 34}" cy="22" r="5" fill="${c}"/><path d="M${ref - 28} 22 H${ref - 4}" stroke="${c}" stroke-width="3" stroke-dasharray="4 4"/><path d="M${ref - 8} 16 l7 6 -7 6" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`;
    else if (t.aspect === 'perfect-continuous') g = `<path d="M${ref - 40} 22 q5 -8 10 0 t10 0 t10 0 t10 0" fill="none" stroke="${c}" stroke-width="4" stroke-linecap="round"/><path d="M${ref - 6} 15 l6 7 -6 7" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round"/>`;
    else if (t.aspect === 'going-to') g = `<path d="M65 22 H${ref - 10}" stroke="${c}" stroke-width="3" stroke-dasharray="4 4"/><circle cx="${ref}" cy="22" r="6" fill="${c}"/>`;
    const refMark = t.time !== 'present' && t.aspect !== 'simple' && t.aspect !== 'going-to' ? `<line x1="${ref}" y1="10" x2="${ref}" y2="34" stroke="${c}" stroke-width="2" opacity=".5"/>` : '';
    return `<svg class="tl" viewBox="0 0 130 44" width="130" height="44" aria-hidden="true"><line x1="6" y1="22" x2="124" y2="22" stroke="currentColor" stroke-opacity=".22" stroke-width="2"/><path d="M118 17 l6 5 -6 5" fill="none" stroke="currentColor" stroke-opacity=".3" stroke-width="2"/>
      <line x1="65" y1="12" x2="65" y2="32" stroke="currentColor" stroke-opacity=".45" stroke-width="2"/><text x="65" y="42" font-size="8" text-anchor="middle" fill="currentColor" opacity=".55">сейчас</text>${refMark}${g}</svg>`;
  }
  const freqDots = (n) => `<span class="freq" title="Как часто встречается">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= n ? 'on' : ''}"></i>`).join('')}</span>`;
  const tenseBest = (id) => ((S.tenses || {})[id] || {}).best;
  function tenseTile(t) {
    const b = tenseBest(t.id);
    return `<a class="tense-tile tt-${t.time}" href="#/tenses/${t.id}">
      <div class="tt-top"><span class="pill">${t.level}</span>${freqDots(t.freq)}</div>
      ${tlSvg(t)}
      <b>${esc(t.name)}</b><span class="tt-ru">${esc(t.ru)}</span><span class="tt-one">${esc(t.one)}</span>
      ${b != null ? `<span class="tt-score ${b >= 0.8 ? 'ok' : ''}"><i class="ph${b >= 0.8 ? '-fill' : ''} ph-${b >= 0.8 ? 'check-circle' : 'target'}"></i> ${Math.round(b * 100)}%</span>` : ''}</a>`;
  }
  function renderTenses() {
    const done = TENSES.filter((t) => (tenseBest(t.id) || 0) >= 0.8).length;
    view().innerHTML = `
      ${courseHead('tenses', `Все ${TENSES.length} времён английского: когда какое нужно, как строится, чем отличается от соседнего. Освоено ${done} из ${TENSES.length}.`)}
      <a class="continue-card" href="#/tenses/train"><div class="cc-ill"><i class="ph-fill ph-target"></i></div>
        <div class="cc-body"><div class="cc-eyebrow">Тренажёр</div><div class="cc-title">Выбери правильное время</div><div class="cc-sub">20 вопросов вперемешку — главное умение: по ситуации понять, какое время нужно</div></div>
        <span class="pill-btn light">НАЧАТЬ</span></a>
      <div class="card lesson tense-how"><h3 style="margin-top:0">Как выбрать время за 3 вопроса</h3>
        <div class="g-steps"><ol>
          <li><b>Когда?</b> Сейчас/обычно → <b>Present</b>, было → <b>Past</b>, будет → <b>Future</b>.</li>
          <li><b>Процесс или факт?</b> Идёт, длится в какой-то момент → <b>Continuous</b> (be + -ing). Просто факт, привычка → <b>Simple</b>.</li>
          <li><b>Важен результат к какому-то моменту?</b> «Уже сделал», «к тому времени» → <b>Perfect</b> (have + 3-я форма).</li>
        </ol></div>
        <div class="g-tip">В речи и играх 90% времени — это Present Simple, Present Continuous, Past Simple, will / going to и Present Perfect. Начните с них — у них 4–5 точек частоты.</div>
      </div>
      ${['present', 'past', 'future'].map((tm) => `<section class="sec"><div class="sec-head"><h2><i class="ph ph-${TIME_ICO[tm]}"></i> ${TIME_RU[tm]}</h2></div>
        <div class="tense-grid">${TENSES.filter((t) => t.time === tm).map(tenseTile).join('')}</div></section>`).join('')}`;
  }
  function renderTense(id, tab) {
    const t = TENSE_BY[id];
    if (!t) return renderTenses();
    const i = TENSES.indexOf(t), prev = TENSES[i - 1], next = TENSES[i + 1];
    const blocks = t.html.split(/(?=<h3>)/).map((h) => h.trim()).filter(Boolean);
    const b = tenseBest(t.id);
    view().innerHTML = `
      <a href="#/tenses" class="backlink"><i class="ph ph-caret-left"></i></a>
      <div class="tense-hero tt-${t.time}">
        ${tlSvg(t)}
        <div style="min-width:0;flex:1"><div class="lib-meta"><span class="pill">${t.level}</span><span class="tiny muted">${TIME_RU[t.time]} · встречается ${freqDots(t.freq)}</span></div>
        <h1 style="margin:6px 0 0">${esc(t.name)}</h1><div class="muted">${esc(t.ru)} — ${esc(t.one)}</div></div>
      </div>
      <div class="seg wl-seg" style="margin:16px 0"><a href="#/tenses/${t.id}" class="${tab !== 'practice' ? 'on' : ''}"><i class="ph ph-book-open"></i> Объяснение</a><a href="#/tenses/${t.id}/practice" class="${tab === 'practice' ? 'on' : ''}"><i class="ph ph-pencil-simple-line"></i> Упражнения · ${t.ex.length}${b != null ? ` <b class="tt-score ${b >= 0.8 ? 'ok' : ''}">${Math.round(b * 100)}%</b>` : ''}</a></div>
      <div id="tense-body"></div>
      <div class="chap-nav">${prev ? `<a class="btn" href="#/tenses/${prev.id}"><i class="ph ph-caret-left"></i> ${esc(prev.name)}</a>` : '<span></span>'}${next ? `<a class="btn" href="#/tenses/${next.id}">${esc(next.name)} <i class="ph ph-caret-right"></i></a>` : '<span></span>'}</div>`;
    const body = $('#tense-body');
    if (tab === 'practice') return tenseQuiz(body, t.ex.map((e) => Object.assign({ tid: t.id }, e)), (score) => {
      S.tenses = S.tenses || {}; const r = S.tenses[t.id] = S.tenses[t.id] || {};
      r.best = Math.max(r.best || 0, score); r.at = Date.now(); save();
    }, `#/tenses/${t.id}`);
    body.innerHTML = `<div class="stack lesson">
      <div class="card tense-formula"><h3 style="margin-top:0">Формула</h3>
        <div class="tf-row"><span class="tf-k plus">+</span><div>${t.formula.plus}</div></div>
        <div class="tf-row"><span class="tf-k minus">−</span><div>${t.formula.minus}</div></div>
        <div class="tf-row"><span class="tf-k q">?</span><div>${t.formula.q}</div></div>
        <div class="tf-markers"><span class="tiny muted">Слова-подсказки:</span> ${t.markers.map((m) => `<span class="say mk">${esc(m)}</span>`).join('')}</div>
        ${t.compare && t.compare.length ? `<div class="tf-markers"><span class="tiny muted">Не путать с:</span> ${t.compare.filter((c) => TENSE_BY[c]).map((c) => `<a class="pill accent" href="#/tenses/${c}">${esc(TENSE_BY[c].name)}</a>`).join(' ')}</div>` : ''}
      </div>
      ${blocks.map((h) => `<div class="card">${h}</div>`).join('')}
      <a class="pill-btn" href="#/tenses/${t.id}/practice" style="align-self:flex-start">К УПРАЖНЕНИЯМ · ${t.ex.length}</a></div>`;
    wireSay(body);
  }
  // общий движок вопросов «выбери форму»
  function tenseQuiz(root, qs, onDone, backHref, shuffleOpts) {
    let n = 0, right = 0; const wrongBy = {};
    const draw = () => {
      if (n >= qs.length) {
        const sc = right / qs.length; onDone && onDone(sc);
        const weak = Object.entries(wrongBy).sort((a, b) => b[1] - a[1]).slice(0, 3).filter(([id]) => TENSE_BY[id]);
        root.innerHTML = `<div class="card result"><div class="big"><i class="ph ${sc >= 0.8 ? 'ph-confetti' : 'ph-target'}"></i></div><h2>${right} из ${qs.length}</h2>
          <p class="muted">${sc >= 0.8 ? 'Отлично! Это время у вас в руках.' : sc >= 0.5 ? 'Хорошо, но есть над чем поработать. Перечитайте объяснение и попробуйте ещё раз.' : 'Пока сложновато — перечитайте объяснение, особенно блок «Не путать».'}</p>
          ${weak.length ? `<p class="small">Чаще всего ошибки в: ${weak.map(([id]) => `<a href="#/tenses/${id}">${esc(TENSE_BY[id].name)}</a>`).join(', ')}</p>` : ''}
          <div class="row" style="justify-content:center"><button class="btn primary" id="tq-again">Ещё раз</button><a class="btn" href="${backHref}">Готово</a></div></div>`;
        $('#tq-again').addEventListener('click', () => { n = 0; right = 0; Object.keys(wrongBy).forEach((k) => delete wrongBy[k]); if (shuffleOpts) qs = shuffle(qs); draw(); });
        return;
      }
      const q = qs[n];
      let opts = q.o.map((o, i) => ({ o, i }));
      if (shuffleOpts) opts = shuffle(opts);
      const tt = TENSE_BY[q.tid];
      root.innerHTML = `<div class="card">
        <div class="row small muted" style="margin-bottom:8px"><span>Вопрос ${n + 1} из ${qs.length}</span><span class="spacer"></span><span>верно ${right}</span></div>
        <div class="progress" style="margin-bottom:18px"><i style="width:${(n / qs.length) * 100}%"></i></div>
        <div class="ex-q tq-q">${esc(q.q).replace('___', '<span class="tq-gap">___</span>')}${q.v ? ` <span class="muted tq-v">(${esc(q.v)})</span>` : ''}</div>
        <div class="stack" style="gap:10px;margin-top:16px">${opts.map((x) => `<button class="option" data-i="${x.i}">${esc(x.o)}</button>`).join('')}</div>
        <div id="tq-fb"></div></div>`;
      $$('.option', root).forEach((btn) => btn.addEventListener('click', () => {
        if (root.dataset.lock === String(n)) return; root.dataset.lock = String(n);
        const ok = +btn.dataset.i === q.a;
        $$('.option', root).forEach((x) => { x.disabled = true; if (+x.dataset.i === q.a) x.classList.add('correct'); });
        if (!ok) { btn.classList.add('wrong'); wrongBy[q.tid] = (wrongBy[q.tid] || 0) + 1; } else right++;
        const full = q.q.replace('___', q.o[q.a]);
        track('exercises'); S.stats.exStreak = ok ? S.stats.exStreak + 1 : 0; S.stats.exStreakBest = Math.max(S.stats.exStreakBest, S.stats.exStreak); save();
        $('#tq-fb').innerHTML = `<div class="feedback ${ok ? 'ok' : 'bad'}"><b>${ok ? 'Верно!' : 'Не совсем.'}</b> ${esc(q.why || '')}
          <div class="right"><span class="say-inline" data-speak="${esc(full)}"><i class="ph ph-speaker-high"></i> ${esc(full)}</span>${tt && shuffleOpts ? ` · <a href="#/tenses/${tt.id}">${esc(tt.name)}</a>` : ''}</div></div>
          <div class="ex-actions" style="margin-top:14px"><button class="btn primary" id="tq-next" style="width:100%">${n + 1 < qs.length ? 'Дальше' : 'Результат'}</button></div>`;
        wireSay($('#tq-fb'));
        if (ok) speakTTS(full, { rate: S.settings.rate });
        $('#tq-next').addEventListener('click', () => { n++; draw(); window.scrollTo({ top: 0, behavior: 'smooth' }); });
        $('#tq-next').focus({ preventScroll: true });
      }));
    };
    draw();
  }
  function renderTenseTrain() {
    const lv = lsGet('ep.tenseLvl', LEVEL_ORDER[myLevel()] >= 2 ? myLevel() : 'A2');
    const pool = TENSES.filter((t) => LEVEL_ORDER[t.level] <= LEVEL_ORDER[lv]);
    view().innerHTML = `
      <a href="#/tenses" class="backlink"><i class="ph ph-caret-left"></i></a>
      <h1 class="page-title">Тренажёр времён</h1>
      <p class="page-sub">Вопросы из ${pool.length} ${plural(pool.length, 'времени', 'времён', 'времён')} вперемешку. Выберите, до какого уровня брать времена:</p>
      <div class="seg wl-seg" style="margin-bottom:16px">${LEVELS.map((l) => `<a href="#/tenses/train" data-tl="${l}" class="${l === lv ? 'on' : ''}">до ${l} · ${TENSES.filter((t) => LEVEL_ORDER[t.level] <= LEVEL_ORDER[l]).length}</a>`).join('')}</div>
      <div id="tt-body"></div>`;
    $$('[data-tl]').forEach((a) => a.addEventListener('click', (e) => { e.preventDefault(); lsSet('ep.tenseLvl', a.dataset.tl); renderTenseTrain(); }));
    const qs = shuffle(pool.flatMap((t) => t.ex.map((e) => Object.assign({ tid: t.id }, e)))).slice(0, 20);
    tenseQuiz($('#tt-body'), qs, (sc) => { S.stats.tenseTrain = (S.stats.tenseTrain || 0) + 1; S.stats.tenseBest = Math.max(S.stats.tenseBest || 0, sc); save(); }, '#/tenses', true);
  }

  let readerSentences = [];
  let readerSpeakers = [];
  function renderReader(id, given) {
    const t = given || allTexts().find((x) => x.id === id);
    if (!t) return renderLibraryHome();
    readerSentences = []; readerSpeakers = [];
    const isDlg = t.kind === 'dialogue';
    const paras = t.text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
    let sid = 0;
    const speakersOrder = [];
    const sentHtml = (p, spk) => {
      const sents = p.match(/[^.!?…]+[.!?…]*["')\]”]*\s*/g) || [p];
      return sents.map((s) => {
        const i = sid++; readerSentences.push(s.trim()); readerSpeakers.push(spk);
        let first = true;
        const inner = s.replace(/([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’]*(?:-[A-Za-zÀ-ÿ]+)*)|([^A-Za-zÀ-ÿ]+)/g, (m, w, other) => {
          if (w) { const known = S.cards[EngLookup.clean(w)] || lookup(w).some((r) => S.cards[r.word]); const f = first; first = false; return `<span class="w${known ? ' known' : ''}" data-s="${i}"${f ? ' data-first="1"' : ''}>${esc(w)}</span>`; }
          return esc(other);
        });
        return `<span class="s" data-sid="${i}">${inner}</span>`;
      }).join('');
    };
    const html = paras.map((p) => {
      const m = isDlg && p.match(/^([A-Z][\w .'’-]{0,24}):\s*(.+)$/);
      if (m) {
        let k = speakersOrder.indexOf(m[1]); if (k < 0) { speakersOrder.push(m[1]); k = speakersOrder.length - 1; }
        return `<div class="bub ${k % 2 ? 'right' : 'left'} spk-${k % 4}"><b class="who">${esc(m[1])}</b><p>${sentHtml(m[2], k)}</p></div>`;
      }
      return '<p>' + sentHtml(p, -1) + '</p>';
    }).join('');
    const lib = !t.unit && !t.user && !t.book;
    const back = t.unit ? `#/unit/${t.unit.id}/reading` : t.book ? `#/book/${t.book.id}` : '#/library';
    const nextT = lib ? LIB.filter((x) => x.level === t.level && x.id !== t.id && !S.textsRead[x.id] && x.cat === t.cat)[0] || LIB.filter((x) => x.level === t.level && x.id !== t.id && !S.textsRead[x.id])[0] : null;
    view().innerHTML = `
      <a href="${back}" class="backlink"><i class="ph ph-caret-left"></i></a>
      ${t.book ? `<div class="reader-head"><div class="lib-cover sm book" data-img="${t.book.id}"><span><i class="ph ph-book"></i></span></div><div style="min-width:0"><div class="lib-meta"><span class="pill accent">${t.book.level}</span><span class="tiny muted">${esc(t.book.title)} · ${esc(t.book.author)} · глава ${t.chapter + 1} из ${t.book.chapters.length}</span></div><h1 style="margin:6px 0 2px">${esc(t.title)}</h1></div></div>` : ''}
      ${lib ? `<div class="reader-head"><div class="lib-cover sm cat-${Object.keys(CAT_ICON).indexOf(t.cat)}" data-img="${t.id}"><span>${CAT_ICON[t.cat] || '<i class="ph ph-book-open-text"></i>'}</span></div>
        <div style="min-width:0"><div class="lib-meta"><span class="pill accent">${t.level}</span><span class="tiny muted">${CAT_ICON[t.cat] || ''} ${esc(t.cat)} · ${esc(t.about)} · ${minsIn(t)} мин</span></div>
        <h1 style="margin:6px 0 2px">${esc(t.title)}</h1><div class="muted small">${esc(t.ru)}</div></div></div>` : t.book ? '' : `<h1 style="margin-top:14px">${esc(t.title)}</h1>`}
      <div class="reader-bar">
        <button class="btn small primary" id="rd-play"><i class="ph-fill ph-play"></i> Слушать</button>
        <button class="btn small" id="rd-stop" hidden><i class="ph-fill ph-stop"></i> Стоп</button>
        <div class="seg tap-seg" title="Что выделять по нажатию"><button data-tap="word" class="${tapMode() === 'word' ? 'on' : ''}"><i class="ph ph-cursor-click"></i> Слово</button><button data-tap="sent" class="${tapMode() === 'sent' ? 'on' : ''}"><i class="ph ph-text-align-left"></i> Предложение</button></div>
        <select class="input" id="rd-rate"><option value="0.7">0.7×</option><option value="0.85">0.85×</option><option value="1">1×</option></select>
        <span class="spacer"></span>
        <button class="btn small" id="rd-done">${S.textsRead[t.id] ? '<i class="ph ph-check"></i> Прочитано' : 'Отметить прочитанным'}</button>
      </div>
      <div class="card reader-text ${isDlg ? 'dialog' : ''}" id="rd-text">${html}</div>
      ${t.book ? `<div class="chap-nav">${t.chapter > 0 ? `<a class="btn" href="#/book/${t.book.id}/${t.chapter - 1}"><i class="ph ph-caret-left"></i> Назад</a>` : '<span></span>'}<a class="btn ghost" href="#/book/${t.book.id}">Все главы</a>${t.chapter < t.book.chapters.length - 1 ? `<a class="btn primary" href="#/book/${t.book.id}/${t.chapter + 1}" id="chap-next">Следующая глава <i class="ph ph-caret-right"></i></a>` : '<span></span>'}</div>` : ''}
      <p class="muted small" style="margin-top:12px"><i class="ph ph-hand-tap"></i> Нажмите на слово — перевод и «+ В карточки». Кнопка «Всё предложение» в подсказке (или режим «Предложение» сверху) — перевод и озвучка целого предложения. Чтобы перевести фразу целиком, выделите несколько слов${window.matchMedia('(hover: none)').matches ? ' (долгое нажатие и протянуть)' : ' мышкой'}.</p>
      ${t.questions && t.questions.length ? `<div class="card quiz" id="quiz"><h3>Проверьте понимание</h3>${t.questions.map((qq, qi) => `
        <div class="qz" data-q="${qi}"><div class="qz-q">${qi + 1}. ${esc(qq.q)}</div><div class="qz-o">${qq.o.map((o, oi) => `<button class="qz-btn" data-o="${oi}">${esc(o)}</button>`).join('')}</div></div>`).join('')}
        <div id="qz-res" class="small"></div></div>` : ''}
      ${nextT ? `<a class="next-read" href="#/read/${nextT.id}"><span class="muted small">Следующая статья ${nextT.level}</span><b>${esc(nextT.title)} <i class="ph ph-arrow-right"></i></b></a>` : ''}`;
    paintCovers(view());
    const rate = $('#rd-rate'); rate.value = S.settings.rate <= 0.75 ? '0.7' : S.settings.rate >= 0.95 ? '1' : '0.85';
    let playing = false;
    const playFrom = (i) => {
      $$('.s.speaking').forEach((x) => x.classList.remove('speaking'));
      if (playing && i >= readerSentences.length && i > 0) { S.stats.listened++; save(); }
      if (!playing || i >= readerSentences.length) { stop(); return; }
      const el = $(`.s[data-sid="${i}"]`); if (el) { el.classList.add('speaking'); el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      speak(readerSentences[i], { rate: +rate.value, onend: () => playFrom(i + 1), speaker: readerSpeakers[i] });
    };
    const stop = () => { playing = false; if (window.speechSynthesis) speechSynthesis.cancel(); $$('.s.speaking').forEach((x) => x.classList.remove('speaking')); $('#rd-play').hidden = false; $('#rd-stop').hidden = true; };
    $('#rd-play').addEventListener('click', () => { playing = true; $('#rd-play').hidden = true; $('#rd-stop').hidden = false; playFrom(0); });
    $('#rd-stop').addEventListener('click', stop);
    const markRead = () => {
      if (t.book) { S.bookPos = S.bookPos || {}; S.bookPos[t.book.id] = Math.max(S.bookPos[t.book.id] || 0, t.chapter + 1); }
      if (!S.textsRead[t.id]) { S.textsRead[t.id] = today(); track('reads'); }
      if (t.unit && t.unit.texts.every((x) => S.textsRead[x.id])) unitState(t.unit.id).steps.reading = true;
      save(); $('#rd-done').innerHTML = '<i class="ph ph-check"></i> Прочитано';
    };
    $('#rd-done').addEventListener('click', () => { markRead(); toast('Отмечено'); });
    $$('[data-tap]').forEach((b) => b.addEventListener('click', () => { lsSet('ep.tapMode', b.dataset.tap); $$('[data-tap]').forEach((x) => x.classList.toggle('on', x === b)); hidePopover(); toast(b.dataset.tap === 'sent' ? 'Нажмите на любое место предложения — перевод и озвучка' : 'Нажмите на слово — перевод и «+ В карточки»'); }));
    // вопросы на понимание
    const answers = {};
    $$('.qz-btn').forEach((b) => b.addEventListener('click', () => {
      const box = b.closest('.qz'); const qi = +box.dataset.q; if (qi in answers) return;
      const qq = t.questions[qi]; const oi = +b.dataset.o; answers[qi] = oi === qq.a;
      $$('.qz-btn', box).forEach((x, k) => { x.disabled = true; if (k === qq.a) x.classList.add('right'); });
      if (oi !== qq.a) b.classList.add('wrong');
      track('exercises'); S.stats.exStreak = oi === qq.a ? S.stats.exStreak + 1 : 0; S.stats.exStreakBest = Math.max(S.stats.exStreakBest, S.stats.exStreak);
      if (Object.keys(answers).length === t.questions.length) {
        const right = Object.values(answers).filter(Boolean).length;
        S.quiz = S.quiz || {}; S.quiz[t.id] = Math.max(S.quiz[t.id] || 0, right);
        markRead();
        $('#qz-res').innerHTML = `<div class="feedback ${right === t.questions.length ? 'ok' : right ? '' : 'bad'}" style="${right && right < t.questions.length ? 'background:var(--warn-soft);color:var(--warn)' : ''}"><b>${right} из ${t.questions.length}</b> — ${right === t.questions.length ? 'отлично, вы всё поняли!' : right ? 'хорошо. Перечитайте места с ошибками.' : 'текст пока сложноват — попробуйте статью уровнем ниже.'} Статья отмечена прочитанной.</div>`;
      } else save();
    }));
    // клик по слову
    $('#rd-text').addEventListener('click', (ev) => {
      if (String(window.getSelection && window.getSelection()).trim().includes(' ')) return; // выделена фраза
      if (tapMode() === 'sent') { const se = ev.target.closest('.s'); if (se) showSentence(+se.dataset.sid, t); return; }
      const w = ev.target.closest('.w'); if (!w) return;
      $$('.w.sel').forEach((x) => x.classList.remove('sel'));
      w.classList.add('sel');
      if (tapMode() === 'sent') { showSentence(+w.dataset.s, t); return; }
      showWord(w, w.textContent, readerSentences[+w.dataset.s], t, !w.dataset.first && /^[A-Z]/.test(w.textContent), +w.dataset.s);
    });
    // выделение фразы
    const onSel = () => setTimeout(() => {
      const sel = window.getSelection(); if (!sel || sel.isCollapsed) return;
      const txt = String(sel).replace(/\s+/g, ' ').trim().replace(/^[^A-Za-z]+|[^A-Za-z']+$/g, '');
      if (!txt || !txt.includes(' ') || txt.split(' ').length > 10) return;
      const rng = sel.getRangeAt(0); if (!$('#rd-text').contains(rng.commonAncestorContainer)) return;
      const sEl = (rng.startContainer.parentElement || {}).closest ? rng.startContainer.parentElement.closest('.s') : null;
      showPhrase(rng.getBoundingClientRect(), txt, sEl ? readerSentences[+sEl.dataset.sid] : '', t);
    }, 10);
    $('#rd-text').addEventListener('mouseup', onSel);
    $('#rd-text').addEventListener('touchend', onSel);
  }

  // Автоперевод (MyMemory, бесплатно, без ключа) — для слов не из словаря и фраз
  const trMem = {};
  function autoTranslate(q) {
    const k = q.toLowerCase().trim();
    if (trMem[k]) return trMem[k];
    const ya = window.Cloud && Cloud.yandexReady && Cloud.yandexReady()
      ? Cloud.yandex(k, /\s/.test(k) ? 'text' : 'word').then((d) => (d && d.text) || (d && d.defs && d.defs[0] && d.defs[0].tr.slice(0, 2).map((t) => t.text).join(', ')) || null)
      : Promise.resolve(null);
    trMem[k] = ya.then((y) => y || myMemory(k));
    return trMem[k];
  }
  // MyMemory: выбираем лучший вариант из машинного перевода и памяти переводов, остальные — как альтернативы
  const trAlts = {};
  function myMemory(k) {
    return fetch('https://api.mymemory.translated.net/get?langpair=en|ru&q=' + encodeURIComponent(k))
      .then((r) => r.json())
      .then((j) => {
        const cyr = (x) => x && /[а-яё]/i.test(x) && !/MYMEMORY|QUERY LENGTH|INVALID/i.test(x);
        const clean = (x) => x.replace(/\s+/g, ' ').replace(/^["«»“”'\s]+|["«»“”'\s]+$/g, '').replace(/\s*[.!?]+$/, (m) => (/\s/.test(k) ? m.trim() : '')).trim();
        const cand = {};
        const bump = (t, w) => { if (!cyr(t)) return; const c = clean(t); if (!c || c.length > (/\s/.test(k) ? 700 : 120)) return; const key = c.toLowerCase(); cand[key] = cand[key] || { t: c, w: 0 }; cand[key].w += w; };
        const main = j && j.responseData && j.responseData.translatedText;
        ((j && j.matches) || []).forEach((m) => {
          const q = +m.match || 0; if (q < 0.7) return;
          const src = String(m.segment || '').toLowerCase().replace(/[^a-z' ]/g, '').trim();
          const exact = src === k.replace(/[^a-z' ]/g, '').trim();
          bump(m.translation, q * (m['created-by'] === 'MT!' ? 1.3 : 1) * (exact ? 1.2 : 0.6));
        });
        bump(main, 0.9);
        const list = Object.values(cand).sort((x, y) => y.w - x.w).map((x) => x.t);
        const lower = [...new Set(list.map((x) => (/\s/.test(k) ? x : x.toLowerCase())))];
        trAlts[k] = lower.slice(0, 4);
        return lower[0] || null;
      })
      .catch(() => { delete trMem[k]; return null; });
  }
  function altChips(el, k, input) {
    const alts = (trAlts[k.toLowerCase().trim()] || []).slice(1);
    if (!el || !alts.length) return;
    el.innerHTML = '<span class="tiny muted">Другие варианты:</span> ' + alts.map((a) => `<button type="button" class="alt-chip">${esc(a)}</button>`).join('');
    $$('.alt-chip', el).forEach((b) => b.addEventListener('click', () => { input.value = b.textContent; input.focus(); }));
  }
  // Словарная статья Яндекса: транскрипция, части речи, варианты
  const POS_RU = { noun: 'сущ.', verb: 'гл.', adjective: 'прил.', adverb: 'нареч.', pronoun: 'мест.', preposition: 'предлог', conjunction: 'союз', numeral: 'числ.', interjection: 'межд.', participle: 'прич.', 'adverbial participle': 'деепр.', particle: 'частица', determiner: 'опр.' };
  function yaBlock(el, word) {
    if (!el || !(window.Cloud && Cloud.yandexReady && Cloud.yandexReady())) return Promise.resolve(null);
    return Cloud.yandex(word, 'word').then((d) => {
      if (!d || !d.defs || !d.defs.length || !el.isConnected) return null;
      el.innerHTML = `${d.defs[0].ts ? `<div class="ya-ts">[${esc(d.defs[0].ts)}]</div>` : ''}` + d.defs.slice(0, 3).map((df) => `
        <div class="ya-def"><span class="ya-pos">${esc(POS_RU[df.pos] || df.pos || '')}</span> ${df.tr.slice(0, 4).map((t) => esc(t.text)).join(', ')}</div>`).join('')
        + `<a class="ya-attr" href="https://tech.yandex.ru/dictionary/" target="_blank" rel="noopener">Реализовано с помощью сервиса «Яндекс.Словарь»</a>`;
      el.hidden = false;
      return d;
    });
  }
  function placePop(pop, r) {
    pop.hidden = false;
    const pw = Math.min(330, window.innerWidth - 24);
    const left = Math.min(Math.max(12, r.left + r.width / 2 - pw / 2), window.innerWidth - pw - 12);
    let top = r.bottom + 8;
    if (top + 240 > window.innerHeight) top = Math.max(12, r.top - 250);
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
  }
  const exMark = (sentence, raw) => (sentence || '').replace(new RegExp('\\b(' + raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'i'), '**$1**');
  const gtUrl = (q) => 'https://translate.google.com/?sl=en&tl=ru&op=translate&text=' + encodeURIComponent(q);
  function markKnownWords(base) { $$('.w').forEach((w) => { if (EngLookup.clean(w.textContent) === base || lookup(w.textContent).some((x) => x.word === base)) w.classList.add('known'); }); }

  function showWord(anchor, raw, sentence, t, maybeName, sid) {
    const pop = $('#popover');
    const res = lookup(raw);
    S.stats.lookups++; save();
    const base = res[0] ? res[0].word : EngLookup.clean(raw);
    const inCards = !!S.cards[base];
    pop.innerHTML = `
      <div class="row" style="gap:10px"><div class="pw">${esc(raw)}</div><button class="icon-btn" id="pp-say"><i class="ph ph-speaker-high"></i></button><span class="spacer"></span><button class="icon-btn" id="pp-x"><i class="ph ph-x"></i></button></div>
      <div class="ipa" data-ipa="${esc(res[0] ? res[0].word : EngLookup.clean(raw))}"></div>
      ${res.length ? `<div class="tr">${esc(res[0].tr)}</div>${res[0].word !== EngLookup.clean(raw) ? `<div class="alt">форма слова <b>${esc(res[0].word)}</b></div>` : ''}${res.slice(1, 3).map((r) => `<div class="alt">${esc(r.word)}: ${esc(r.tr)}</div>`).join('')}<div class="ya-box" id="pp-ya" hidden></div>`
        : `<div class="alt" style="margin-top:4px">${maybeName ? 'Похоже на имя или название.' : 'Нет во встроенном словаре —'} <span id="pp-status">перевожу…</span></div>
           <input class="input pp-input" id="pp-tr" placeholder="Перевод" autocomplete="off"><div class="alt-row" id="pp-alts"></div>`}
      <div class="actions">
        ${inCards ? '<span class="pill ok"><i class="ph ph-check"></i> в карточках</span>' : '<button class="btn small primary" id="pp-add">+ В карточки</button>'}
        ${sid != null ? '<button class="btn small" id="pp-sent"><i class="ph ph-text-align-left"></i> Всё предложение</button>' : ''}
        <a class="btn small ghost" target="_blank" rel="noopener" href="${gtUrl(sentence || raw)}">Переводчик <i class="ph ph-arrow-up-right"></i></a>
      </div>`;
    placePop(pop, anchor.getBoundingClientRect());
    fillIpa(pop);
    const sayW = res[0] ? res[0].word : raw;
    speak(sayW);
    $('#pp-say').addEventListener('click', () => speak(sayW));
    $('#pp-x').addEventListener('click', hidePopover);
    const ps = $('#pp-sent'); if (ps) ps.addEventListener('click', () => showSentence(sid, t));
    if (res.length) yaBlock($('#pp-ya'), base);
    if (!res.length) autoTranslate(raw).then((tr) => {
      const inp = $('#pp-tr'), st = $('#pp-status'); if (!inp || !st) return;
      if (tr) { if (!inp.value) inp.value = tr; st.textContent = 'автоперевод, можно поправить:'; altChips($('#pp-alts'), raw, inp); }
      else st.textContent = 'впишите перевод сами (или откройте переводчик):';
    });
    const add = $('#pp-add');
    if (add) add.addEventListener('click', () => {
      const tr = res.length ? res[0].tr : ($('#pp-tr').value || '').trim();
      if (!tr) { toast('Впишите перевод'); $('#pp-tr').focus(); return; }
      addCard(res.length ? base : raw.toLowerCase(), tr, exMark(sentence, raw), '', t ? 'text:' + t.id : '');
      save(); markKnownWords(base);
      toast('Добавлено в карточки'); hidePopover();
    });
  }
  function showPhrase(rect, phrase, sentence, t) {
    const pop = $('#popover');
    const id = phrase.toLowerCase();
    const inCards = !!S.cards[id];
    pop.innerHTML = `
      <div class="row" style="gap:10px"><div class="pw" style="font-size:19px">${esc(phrase)}</div><span class="spacer"></span><button class="icon-btn" id="pp-say"><i class="ph ph-speaker-high"></i></button><button class="icon-btn" id="pp-x"><i class="ph ph-x"></i></button></div>
      <div class="alt" style="margin-top:4px">Фраза · <span id="pp-status">перевожу…</span></div>
      <input class="input pp-input" id="pp-tr" placeholder="Перевод фразы" autocomplete="off"><div class="alt-row" id="pp-alts"></div>
      <div class="actions">
        ${inCards ? '<span class="pill ok"><i class="ph ph-check"></i> в карточках</span>' : '<button class="btn small primary" id="pp-add">+ Фразу в карточки</button>'}
        <a class="btn small ghost" target="_blank" rel="noopener" href="${gtUrl(phrase)}">Переводчик <i class="ph ph-arrow-up-right"></i></a>
      </div>`;
    placePop(pop, rect);
    S.stats.lookups++; save();
    speak(phrase);
    $('#pp-say').addEventListener('click', () => speak(phrase));
    $('#pp-x').addEventListener('click', () => { hidePopover(); window.getSelection().removeAllRanges(); });
    autoTranslate(phrase).then((tr) => { const inp = $('#pp-tr'), st = $('#pp-status'); if (!inp || !st) return; if (tr) { inp.value = tr; st.textContent = 'автоперевод, можно поправить:'; altChips($('#pp-alts'), phrase, inp); } else st.textContent = 'впишите перевод:'; });
    const add = $('#pp-add');
    if (add) add.addEventListener('click', () => {
      const tr = ($('#pp-tr').value || '').trim();
      if (!tr) { toast('Впишите перевод'); $('#pp-tr').focus(); return; }
      addCard(phrase, tr, exMark(sentence, phrase), '', t ? 'text:' + t.id : '');
      save(); toast('Фраза добавлена в карточки'); hidePopover(); window.getSelection().removeAllRanges();
    });
  }
  const tapMode = () => lsGet('ep.tapMode', 'word');
  function showSentence(i, t) {
    const text = readerSentences[i]; if (!text) return;
    const el = $(`.s[data-sid="${i}"]`);
    $$('.w.sel').forEach((x) => x.classList.remove('sel'));
    $$('.s.sel-sent').forEach((x) => x.classList.remove('sel-sent'));
    if (el) el.classList.add('sel-sent');
    const pop = $('#popover');
    const spk = readerSpeakers[i];
    const rate = () => { const r = $('#rd-rate'); return r ? +r.value : S.settings.rate; };
    pop.innerHTML = `
      <div class="row" style="gap:8px;margin-bottom:6px"><span class="eyebrow" style="margin:0">Предложение ${i + 1} из ${readerSentences.length}</span><span class="spacer"></span>
        <button class="icon-btn" id="ps-prev" title="Предыдущее" ${i ? '' : 'disabled'}><i class="ph ph-caret-left"></i></button>
        <button class="icon-btn" id="ps-next" title="Следующее" ${i < readerSentences.length - 1 ? '' : 'disabled'}><i class="ph ph-caret-right"></i></button>
        <button class="icon-btn" id="pp-x"><i class="ph ph-x"></i></button></div>
      <div class="ps-en">${esc(text)}</div>
      <div class="ps-ru" id="ps-ru"><span class="muted">перевожу…</span></div>
      <div class="actions">
        <button class="btn small primary" id="ps-say"><i class="ph-fill ph-play"></i> Слушать</button>
        <button class="btn small" id="ps-slow"><i class="ph ph-timer"></i> Медленно</button>
        <a class="btn small ghost" target="_blank" rel="noopener" href="${gtUrl(text)}">Переводчик <i class="ph ph-arrow-up-right"></i></a>
      </div>
      <div class="tiny muted" style="margin-top:10px">Послушайте и повторите вслух 2–3 раза — это shadowing, лучший способ поставить произношение.</div>`;
    placePop(pop, (el || view()).getBoundingClientRect());
    if (el) requestAnimationFrame(() => { const pr = pop.getBoundingClientRect(), er = el.getBoundingClientRect(); if (pr.top > er.top - 20 && er.bottom > pr.top - 12) window.scrollBy({ top: er.bottom - pr.top + 24, behavior: 'smooth' }); else if (er.top < 70) window.scrollBy({ top: er.top - 90, behavior: 'smooth' }); });
    S.stats.lookups++; save();
    const say = (r) => { $$('.s.speaking').forEach((x) => x.classList.remove('speaking')); if (el) el.classList.add('speaking'); speak(text, { rate: r, speaker: spk, onend: () => el && el.classList.remove('speaking') }); };
    say(rate());
    $('#ps-say').addEventListener('click', () => say(rate()));
    $('#ps-slow').addEventListener('click', () => say(0.6));
    $('#ps-prev').addEventListener('click', () => showSentence(i - 1, t));
    $('#ps-next').addEventListener('click', () => showSentence(i + 1, t));
    $('#pp-x').addEventListener('click', hidePopover);
    autoTranslate(text).then((tr) => { const b = $('#ps-ru'); if (!b || readerSentences[i] !== text || !pop.contains(b)) return; b.innerHTML = tr ? esc(tr) : '<span class="muted">Не удалось перевести автоматически — откройте «Переводчик».</span>'; });
  }
  function hidePopover() { const p = $('#popover'); if (p) p.hidden = true; $$('.w.sel').forEach((x) => x.classList.remove('sel')); $$('.s.sel-sent').forEach((x) => x.classList.remove('sel-sent')); }
  document.addEventListener('mousedown', (ev) => { if (!ev.target.closest('#popover') && !ev.target.closest('.w') && !ev.target.closest('.s')) hidePopover(); });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') hidePopover(); });


  // ───────────── Карточки ─────────────
  function renderCards() {
    const all = Object.values(S.cards);
    const due = dueCards().length;
    const nw = newAvailable();
    const q = (location.hash.split('?')[1] || '');
    view().innerHTML = `
      ${topbar('Словарь', `<button class="rbtn" id="d-add" title="Добавить слово"><i class="ph ph-plus"></i></button><button class="rbtn" id="d-find" title="Найти слово"><i class="ph ph-magnifying-glass"></i></button>`)}
      <div class="now-card">
        <div class="now-ill"><i class="ph-fill ph-cards"></i></div>
        <div style="flex:1;min-width:0"><div class="eyebrow" style="margin:0 0 2px">Сейчас учу</div>
          <b class="now-title">${(() => { const on = LEVELS.filter((l) => (S.settings.decks || {})[l]); return on.length ? 'Колоды ' + on.join(' · ') : 'Только мои слова'; })()}</b>
          <div class="small muted">${due + nw ? `${due} на повторение · ${nw} ${plural(nw, 'новая', 'новые', 'новых')}` : 'На сегодня всё повторено'}</div></div>
        ${due + nw ? '<a class="pill-btn" href="#/review">НАЧАТЬ</a>' : '<span class="pill ok"><i class="ph ph-check"></i> Готово</span>'}
      </div>
      ${goalCard('Цель обучения на сегодня')}
      ${(() => {
        const cnt = (k) => wordsOf(k).length;
        const nNew = cnt('new'), nLearn = cnt('learn'), nFam = cnt('fam'), nDone = cnt('done');
        return `<div class="tiles4">
          <a class="tile t-blue" href="#/words/new"><i class="ph-fill ph-sparkle"></i><b>${nNew}</b><span>Новые</span><i class="ph ph-caret-right tile-go"></i></a>
          <a class="tile t-yellow" href="#/words/learn"><i class="ph-fill ph-lightning"></i><b>${nLearn}</b><span>Изучаю</span><i class="ph ph-caret-right tile-go"></i></a>
          <a class="tile t-orange" href="#/words/fam"><i class="ph-fill ph-eye"></i><b>${nFam}</b><span>Знакомые</span><i class="ph ph-caret-right tile-go"></i></a>
          <a class="tile t-green" href="#/words/done"><i class="ph-fill ph-seal-check"></i><b>${nDone}</b><span>Выученные</span><i class="ph ph-caret-right tile-go"></i></a></div>`; })()}
      <section class="sec"><div class="sec-head"><h2>Мои коллекции</h2></div>
      <p class="sec-sub">${DECK.length} самых нужных слов от A1 до B2 — по частоте в живой речи. Включённые колоды приходят в карточки по порядку.</p>
      <div class="coll-grid">${LEVELS.map(deckTile).join('')}${deckTile('phr')}
        <a class="coll-tile t5" href="#/words/mine"><div class="coll-ill"><i class="ph-fill ph-bookmark-simple"></i></div><b>Мои слова</b><span>Добавленные из текстов и вручную</span><span class="coll-meta">${(() => { const n = all.filter((c) => !DECK_BY_ID[c.id]).length; return n + ' ' + plural(n, 'слово', 'слова', 'слов'); })()}</span></a></div></section>
      <div class="card" id="add-box" hidden style="margin-bottom:16px">
        <div class="small" style="font-weight:650;margin-bottom:8px">Добавить слово вручную</div>
        <div class="row"><input class="input" id="nc-en" placeholder="english" style="flex:1;min-width:120px;font-size:15px;padding:10px"><input class="input" id="nc-ru" placeholder="перевод" style="flex:1;min-width:120px;font-size:15px;padding:10px"><button class="btn small primary" id="nc-add">Добавить</button></div>
      </div>
      <div class="card">
        <div class="row" style="margin-bottom:10px"><h3 style="margin:0">Все слова · ${all.length}</h3><span class="spacer"></span>
          <input class="input" id="cf" placeholder="Поиск" style="max-width:200px;padding:8px 12px;font-size:14px"></div>
        <div class="word-list" id="clist"></div>
      </div>`;
    const listEl = $('#clist');
    const drawList = (f = '') => {
      const items = all.filter((c) => !f || c.en.toLowerCase().includes(f) || c.ru.toLowerCase().includes(f)).sort((a, b) => b.added - a.added);
      listEl.innerHTML = items.length ? items.slice(0, 300).map((c) => `
        <div class="word-item"><button class="icon-btn" data-speak="${esc(c.en)}"><i class="ph ph-speaker-high"></i></button>
          ${c.img ? `<img src="${esc(c.img)}" alt="" referrerpolicy="no-referrer" style="width:40px;height:40px;border-radius:10px;object-fit:cover;flex-shrink:0" onerror="this.remove()">` : ''}
          <div style="flex:1"><span class="w">${esc(c.en)}</span> — ${esc(c.ru)}<div class="ex">${c.state === 'new' ? 'новая' : c.state === 'learn' ? 'изучается' : 'следующее повторение через ' + fmtIvl(Math.max(0, c.due - Date.now()))}</div></div>
          <span class="pill ${c.ivl >= 21 ? 'ok' : c.state === 'new' ? '' : 'accent'}">${c.ivl >= 21 ? 'выучено' : c.state === 'new' ? 'новая' : 'в процессе'}</span>
          <button class="icon-btn" data-del="${esc(c.id)}" title="Удалить"><i class="ph ph-x"></i></button></div>`).join('')
        : '<div class="empty"><div class="big">⧉</div>Слов пока нет. Добавьте их из урока или из текста.</div>';
      wireSay(listEl);
      $$('[data-del]', listEl).forEach((b) => b.addEventListener('click', () => { if (confirm('Удалить карточку?')) { delete S.cards[b.dataset.del]; tomb('card:' + b.dataset.del); save(); renderCards(); } }));
    };
    drawList();
    $$('[data-deck]').forEach((cb) => cb.addEventListener('change', () => { S.settings.decks = S.settings.decks || {}; S.settings.decks[cb.dataset.deck] = cb.checked; save(); renderCards(); }));
    $('#cf').addEventListener('input', (e) => drawList(e.target.value.toLowerCase().trim()));
    $('#d-add').addEventListener('click', () => { const b = $('#add-box'); b.hidden = !b.hidden; if (!b.hidden) { b.scrollIntoView({ block: 'center', behavior: 'smooth' }); $('#nc-en').focus(); } });
    $('#d-find').addEventListener('click', () => { const f = $('#cf'); f.scrollIntoView({ block: 'center', behavior: 'smooth' }); f.focus(); });
    $('#nc-en').addEventListener('blur', () => {
      const en = $('#nc-en').value.trim(); if (!en || $('#nc-ru').value.trim()) return;
      const hit = lookup(en)[0]; if (hit && !en.includes(' ')) { $('#nc-ru').value = hit.tr; return; }
      $('#nc-ru').placeholder = 'перевожу…';
      autoTranslate(en).then((tr) => { if (tr && !$('#nc-ru').value) $('#nc-ru').value = tr; $('#nc-ru').placeholder = 'перевод'; });
    });
    $('#nc-add').addEventListener('click', () => {
      const en = $('#nc-en').value.trim(), ru = $('#nc-ru').value.trim();
      if (!en || !ru) { toast('Заполните оба поля'); return; }
      if (!addCard(en, ru, '', '', 'manual')) { toast('Такое слово уже есть'); return; }
      save(); renderCards(); toast('Добавлено');
    });
  }

  // Картинка-ассоциация: Википедия (главное фото статьи), затем Wikimedia Commons. Результат кешируется.
  S.imgCache = S.imgCache || {};
  const imgPending = {};
  function autoImage(en) {
    const k = en.toLowerCase().trim();
    if (k in S.imgCache) return Promise.resolve(S.imgCache[k] || null);
    if (imgPending[k]) return imgPending[k];
    const title = encodeURIComponent(k.replace(/ /g, '_'));
    const bad = /(flag|logo|map|icon|diagram|coat[_ ]of[_ ]arms|\.svg)/i;
    const wiki = fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + title)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => (j && j.type === 'standard' && j.thumbnail && !bad.test(j.thumbnail.source) ? j.thumbnail.source : null));
    const commons = () => fetch('https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=8&gsrsearch=' + encodeURIComponent(k + ' filetype:bitmap') + '&prop=imageinfo&iiprop=url|mime&iiurlwidth=480')
      .then((r) => r.json())
      .then((j) => {
        const pages = Object.values((j.query && j.query.pages) || {}).sort((a, b) => a.index - b.index);
        const hit = pages.find((p) => p.imageinfo && /jpeg|png|webp/.test(p.imageinfo[0].mime) && !bad.test(p.title));
        return hit ? hit.imageinfo[0].thumburl : null;
      });
    imgPending[k] = wiki.then((u) => u || commons())
      .then((u) => { S.imgCache[k] = u || ''; try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) {} delete imgPending[k]; return u; })
      .catch(() => { delete imgPending[k]; return null; }); // нет интернета — не кешируем
    return imgPending[k];
  }

  function deckStats(lvl) {
    const ws = DECK.filter((w) => w.lvl === lvl);
    let learned = 0, study = 0, known = 0;
    ws.forEach((w) => { const c = S.cards[w.id]; if (S.known[w.id]) known++; else if (c && c.state === 'review' && c.ivl >= 21) learned++; else if (c && c.state !== 'new') study++; });
    return { total: ws.length, learned, study, known };
  }
  function deckRow(lvl) {
    const st = deckStats(lvl);
    const on = !!(S.settings.decks || {})[lvl];
    const lv = COURSE.levels.find((l) => l.id === lvl);
    const pct = (x) => (x / Math.max(1, st.total)) * 100;
    return `<div class="card" style="padding:16px">
      <div class="row">
        <div class="deck-badge">${lvl}</div>
        <div style="flex:1;min-width:160px"><b>${st.total} слов</b><div class="muted small">${esc(lv ? lv.title.split('— ')[1] : '')} · выучено ${st.learned + st.known}, в процессе ${st.study}</div></div>
        <a class="btn small" href="#/deck/${lvl}">Слова</a>
        <label class="row small" style="gap:6px;cursor:pointer"><input type="checkbox" data-deck="${lvl}" ${on ? 'checked' : ''}> Учить</label>
      </div>
      <div class="stack-bar"><i style="width:${pct(st.learned + st.known)}%"></i><i style="width:${pct(st.study)}%"></i></div>
    </div>`;
  }
  function deckTile(lvl) {
    const phr = lvl === 'phr';
    const ws = phr ? DECK.filter((w) => w.pos === 'phr') : DECK.filter((w) => w.lvl === lvl);
    let learned = 0, study = 0;
    ws.forEach((w) => { const c = S.cards[w.id]; if (S.known[w.id] || (c && c.state === 'review' && c.ivl >= 21)) learned++; else if (c && c.state !== 'new') study++; });
    const on = !phr && !!(S.settings.decks || {})[lvl];
    const i = phr ? 4 : LEVELS.indexOf(lvl);
    const lv = COURSE.levels.find((l) => l.id === lvl);
    const bars = [1, 2, 3, 4].map((k) => `<i class="${k <= (phr ? 2 : i + 1) ? 'on' : ''}" style="height:${k * 25}%"></i>`).join('');
    return `<a class="coll-tile t${i}" href="#/deck/${lvl}"><div class="coll-ill"><i class="ph-fill ph-${phr ? 'puzzle-piece' : ['plant', 'tree-evergreen', 'mountains', 'rocket-launch'][i]}"></i></div>
      <div class="coll-top"><b>${phr ? 'Фразовые глаголы' : lvl}</b><span class="sig">${bars}</span></div>
      <span>${phr ? 'give up, look for, get on…' : esc(lv ? lv.title.split('— ')[1] || '' : '')}</span>
      <span class="coll-meta">${learned} / ${ws.length} выучено${study ? ` · в процессе ${study}` : ''}${!phr && !on ? ' · <b class="off-tag">выключена</b>' : ''}</span>
      <div class="coll-bar"><i style="width:${(learned / Math.max(1, ws.length)) * 100}%"></i><i style="width:${(study / Math.max(1, ws.length)) * 100}%"></i></div></a>`;
  }
  // Слова по статусу: новые / изучаю / знакомые / выученные / мои
  const cardKind = (c) => c.state === 'new' ? 'new' : c.state === 'learn' || c.ivl < 7 ? 'learn' : c.ivl < 21 ? 'fam' : 'done';
  function wordsOf(kind) {
    const cs = Object.values(S.cards);
    if (kind === 'mine') return cs.filter((c) => !DECK_BY_ID[c.id]);
    const list = cs.filter((c) => cardKind(c) === kind);
    if (kind === 'done') Object.keys(S.known).forEach((id) => { if (!S.cards[id]) { const w = DECK_BY_ID[id]; list.push({ id, en: w ? w.en : id, ru: w ? w.ru : '', known: true, added: S.known[id] }); } });
    return list;
  }
  const WL = {
    new: ['Новые', 'Слова в очереди: ещё ни разу не приходили в карточки. Они появятся в повторении по лимиту новых слов в день.'],
    learn: ['Изучаю', 'Слова, которые вы только начали учить: повторяются часто — через минуты, часы и первые дни.'],
    fam: ['Знакомые', 'Вы их уже неплохо помните: следующее повторение через неделю-две.'],
    done: ['Выученные', 'Интервал больше 3 недель — слово в долгой памяти. Сюда же попадают слова, отмеченные «Знаю».'],
    mine: ['Мои слова', 'Слова, добавленные вручную и из текстов (не из колод).']
  };
  function renderWords(kind) {
    if (!WL[kind]) return renderCards();
    const items = wordsOf(kind).sort((a, b) => (b.added || 0) - (a.added || 0));
    view().innerHTML = `
      <a href="#/cards" class="backlink"><i class="ph ph-caret-left"></i></a>
      <h1 class="page-title">${WL[kind][0]} · ${items.length}</h1>
      <p class="page-sub">${WL[kind][1]}</p>
      <div class="seg wl-seg">${Object.keys(WL).map((k) => `<a href="#/words/${k}" class="${k === kind ? 'on' : ''}">${WL[k][0]}</a>`).join('')}</div>
      ${items.length ? `<input class="input" id="wq" placeholder="Поиск по слову или переводу" style="margin:14px 0">` : ''}
      <div class="card"><div class="word-list" id="wl"></div></div>
      ${kind === 'new' || kind === 'learn' ? `<div style="margin-top:16px"><a class="pill-btn" href="#/review">ПОВТОРИТЬ СЕЙЧАС</a></div>` : ''}`;
    const draw = (q = '') => {
      const f = items.filter((c) => !q || c.en.toLowerCase().includes(q) || (c.ru || '').toLowerCase().includes(q));
      $('#wl').innerHTML = f.slice(0, 400).map((c) => `<div class="word-item"><button class="icon-btn" data-speak="${esc(c.en)}"><i class="ph ph-speaker-high"></i></button>
        <div style="flex:1;min-width:0"><span class="w">${esc(c.en)}</span> — ${esc(c.ru)}<div class="ex">${c.known ? 'отмечено «Знаю»' : c.state === 'new' ? 'ещё не повторялось' : 'следующее повторение ' + (c.due <= Date.now() ? 'сейчас' : 'через ' + fmtIvl(c.due - Date.now()))}</div></div></div>`).join('')
        || `<div class="empty"><div class="big"><i class="ph ph-cards"></i></div>${items.length ? 'Ничего не найдено' : 'Здесь пока пусто'}</div>`;
      wireSay($('#wl'));
    };
    draw();
    const q = $('#wq'); if (q) q.addEventListener('input', () => draw(q.value.toLowerCase().trim()));
  }
  function renderDeck(lvl) {
    const phr = lvl === 'phr';
    if (!LEVELS.includes(lvl) && !phr) return renderCards();
    const ws = phr ? DECK.filter((w) => w.pos === 'phr') : DECK.filter((w) => w.lvl === lvl);
    let shown = 150;
    view().innerHTML = `
      <a href="#/cards" class="backlink"><i class="ph ph-caret-left"></i></a>
      <div class="row" style="align-items:center"><h1 class="page-title" style="margin:0;flex:1">${phr ? 'Фразовые глаголы' : 'Колода ' + lvl}</h1>
        ${phr ? '' : `<label class="switch-row"><input type="checkbox" id="deck-on" ${(S.settings.decks || {})[lvl] ? 'checked' : ''}><span class="switch"></span> Учить</label>`}</div>
      ${phr ? '<p class="muted">Глагол + маленькое слово (up, out, on…) = новое значение: give up — сдаваться, look for — искать. В играх и сериалах они повсюду. Все они уже входят в колоды по уровням.</p>' : ''}
      <p class="muted">Слова, которые вы уже знаете, отметьте «Знаю» — они не будут приходить в карточки. Слова идут от самых частых к более редким (частота по английским субтитрам фильмов и сериалов) — в этом же порядке они будут приходить в карточки.</p>
      <div class="row" style="margin:16px 0"><input class="input" id="dq" placeholder="Поиск по слову или переводу" style="flex:1;font-size:15px;padding:10px 14px">
        <select class="input" id="df"><option value="all">Все</option><option value="todo">Ещё не начаты</option><option value="cards">В карточках</option><option value="known">Отмечены «знаю»</option></select></div>
      <div class="card"><div class="word-list" id="dl"></div><div style="text-align:center;margin-top:12px"><button class="btn small" id="dmore">Показать ещё</button></div></div>`;
    const draw = () => {
      const q = $('#dq').value.toLowerCase().trim(), f = $('#df').value;
      const items = ws.filter((w) => (!q || w.id.includes(q) || w.ru.toLowerCase().includes(q))
        && (f === 'all' || (f === 'known' && S.known[w.id]) || (f === 'cards' && S.cards[w.id]) || (f === 'todo' && !S.cards[w.id] && !S.known[w.id])));
      $('#dl').innerHTML = items.slice(0, shown).map((w) => {
        const c = S.cards[w.id];
        const status = S.known[w.id] ? '<span class="pill ok">знаю</span>' : c ? `<span class="pill ${c.ivl >= 21 ? 'ok' : 'accent'}">${c.ivl >= 21 ? 'выучено' : c.state === 'new' ? 'в очереди' : 'учу'}</span>` : '';
        return `<div class="word-item"><button class="icon-btn" data-speak="${esc(w.en)}"><i class="ph ph-speaker-high"></i></button>
          <div style="flex:1;min-width:0"><span class="w">${esc(w.en)}</span> <span class="tiny muted">${esc(w.pos || '')}${w.rank ? ' · №' + w.rank + ' по частоте' : ''}</span> — ${esc(w.ru)}
          <div class="ex"><span data-speak="${esc(w.ex)}" style="cursor:pointer">${esc(w.ex)}</span> · ${esc(w.exRu)}</div></div>
          ${status}${c && c.state !== 'new' ? '' : `<button class="btn small ghost" data-known="${esc(w.id)}">${S.known[w.id] ? 'Вернуть' : 'Знаю'}</button>`}</div>`;
      }).join('') || '<div class="empty">Ничего не найдено</div>';
      $('#dmore').hidden = items.length <= shown;
      wireSay($('#dl'));
      $$('[data-known]').forEach((b) => b.addEventListener('click', () => {
        const id = b.dataset.known;
        if (S.known[id]) { delete S.known[id]; tomb('known:' + id); } else { S.known[id] = Date.now(); if (S.cards[id] && S.cards[id].state === 'new') { delete S.cards[id]; tomb('card:' + id); } }
        save(); draw();
      }));
    };
    $('#dq').addEventListener('input', () => { shown = 150; draw(); });
    $('#df').addEventListener('change', () => { shown = 150; draw(); });
    $('#dmore').addEventListener('click', () => { shown += 300; draw(); });
    const don = $('#deck-on'); if (don) don.addEventListener('change', () => { S.settings.decks = S.settings.decks || {}; S.settings.decks[lvl] = don.checked; save(); toast(don.checked ? 'Слова этой колоды будут приходить в карточки' : 'Колода выключена'); });
    draw();
  }

  function renderReview() {
    // перемешиваем новые с повторениями: два старых, одно новое
    const dueIds = dueCards().map((c) => c.id), newIds = takeNew(isNewAvailableToday());
    save();
    let queue = [];
    while (dueIds.length || newIds.length) {
      if (dueIds.length) queue.push(dueIds.shift());
      if (dueIds.length) queue.push(dueIds.shift());
      if (newIds.length) queue.push(newIds.shift());
    }
    let doneCount = 0, graded = 0, agains = 0;
    const sessionStart = Date.now();
    const startTotal = queue.length;

    const mode = S.settings.cardMode;
    view().innerHTML = `
      <div class="row"><a href="#/cards" class="backlink" style="margin:0"><i class="ph ph-caret-left"></i></a><span class="spacer"></span>
        <select class="input" id="rv-mode"><option value="en-ru">англ <i class="ph ph-arrow-right"></i> рус</option><option value="ru-en">рус <i class="ph ph-arrow-right"></i> англ</option><option value="mix">вперемешку</option></select></div>
      <div class="ex-head" style="margin-top:16px"><div class="progress"><i id="rv-bar" style="width:0"></i></div><span class="tiny muted" id="rv-left"></span></div>
      <div id="rv"></div>`;
    $('#rv-mode').value = mode;
    $('#rv-mode').addEventListener('change', (e) => { S.settings.cardMode = e.target.value; save(); });

    function next() {
      const root = $('#rv');
      $('#rv-bar').style.width = Math.round((doneCount / Math.max(1, startTotal)) * 100) + '%';
      $('#rv-left').textContent = queue.length ? `осталось ${queue.length}` : '';
      if (!queue.length) {
        keyHandler = null;
        if (graded >= 20 && agains === 0) { S.stats.cleanSessions++; save(); }
        root.innerHTML = `<div class="card result"><div class="big"><i class="ph ph-confetti"></i></div><h2>На сегодня всё!</h2><p class="muted">Повторено карточек: ${doneCount}. Возвращайтесь завтра — слова придут сами.</p>
          <div class="row" style="justify-content:center"><a class="btn primary" href="#/">На главную</a></div></div>`;
        updateBadge(); return;
      }
      const id = queue[0];
      const c = S.cards[id];
      if (!c) { queue.shift(); return next(); }
      const m = S.settings.cardMode === 'mix' ? (Math.random() < 0.5 ? 'en-ru' : 'ru-en') : S.settings.cardMode;
      const exHtml = c.ex ? esc(c.ex).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>') : '';
      const exPlain = c.ex ? c.ex.replace(/\*\*/g, '') : '';
      const dw = DECK_BY_ID[c.id];
      const abstractPos = /^(pron|det|prep|conj|modal|num|excl|adv)$/;
      const wantImg = S.settings.autoImg !== false && !c.noImg && c.id.length > 2 && !c.id.includes(' ') && !(dw && abstractPos.test(dw.pos || ''));
      const imgSlot = (c.img || wantImg) ? `<div class="assoc loading" id="fc-img"></div>` : '';
      const front = m === 'en-ru'
        ? `${imgSlot}<div class="front">${esc(c.en)}</div><div class="ipa" data-ipa="${esc(c.en)}"></div>${exHtml ? `<div class="ex">${exHtml}</div>` : ''}`
        : `${imgSlot}<div class="front" style="font-size:32px">${esc(c.ru)}</div>${c.exRu ? `<div class="ex">${esc(c.exRu)}</div>` : ''}<div class="muted small" style="margin-top:14px">Вспомните английское слово и скажите вслух</div>`;
      const q = encodeURIComponent(c.en);
      const tools = `<div class="img-tools">
          <span class="tiny muted">Картинка:</span>
          <a class="btn small" target="_blank" rel="noopener" href="https://yandex.ru/images/search?text=${q}">Яндекс</a>
          <a class="btn small" target="_blank" rel="noopener" href="https://www.google.com/search?tbm=isch&q=${q}">Google</a>
          <button class="btn small" id="img-set"><i class="ph ph-pencil-simple"></i> Своя</button>
        </div>
        <div class="img-form" id="img-form" hidden><input class="input" id="img-url" placeholder="Вставьте адрес картинки (ПКМ по картинке — «Копировать адрес»)" value="${esc(c.img || '')}"><button class="btn small primary" id="img-save">OK</button></div>`;
      const back = m === 'en-ru'
        ? `<div class="back">${esc(c.ru)}${c.exRu ? `<div class="exru">${esc(c.exRu)}</div>` : ''}${tools}</div>`
        : `<div class="back">${esc(c.en)}<div class="ipa" data-ipa="${esc(c.en)}"></div>${exHtml ? `<div class="exru">${exHtml}</div>` : ''}${tools}</div>`;
      root.innerHTML = `<div class="card fc" id="fc">${front}<div id="fc-back" hidden>${back}</div>
        <div class="row" style="margin-top:18px"><button class="icon-btn" id="fc-say"><i class="ph ph-speaker-high"></i></button>${exPlain ? '<button class="btn small ghost" id="fc-ex"><i class="ph ph-speaker-high"></i> Пример</button>' : ''}</div></div>
        <div id="fc-actions" style="margin-top:16px"><button class="btn primary" style="width:100%" id="fc-show">Показать ответ <span class="kbd" style="color:#fff;border-color:rgba(255,255,255,.4)">пробел</span></button></div>`;
      fillIpa(root);
      if (m === 'en-ru') speak(c.en);
      if (queue[1] && S.cards[queue[1]] && S.settings.liveVoice !== false && liveEligible(S.cards[queue[1]].en)) liveAudio(S.cards[queue[1]].en);
      const fillImg = (url) => {
        const slot = $('#fc-img'); if (!slot) return;
        if (!url) { slot.remove(); return; }
        slot.innerHTML = `<img src="${esc(url)}" alt="" referrerpolicy="no-referrer"><button class="assoc-x" title="Не показывать картинку для этого слова"><i class="ph ph-x"></i></button>`;
        const im = $('img', slot);
        im.onload = () => slot.classList.remove('loading');
        im.onerror = () => { slot.remove(); if (!c.img && S.imgCache) { S.imgCache[c.id] = ''; save(); } };
        $('.assoc-x', slot).addEventListener('click', (ev) => { ev.stopPropagation(); S.cards[id].noImg = true; S.cards[id].img = undefined; touch(id); save(); slot.remove(); toast('Картинка скрыта для этого слова'); });
      };
      if (c.img) fillImg(c.img);
      else if (wantImg) autoImage(c.en).then((u) => { if (queue[0] === id) fillImg(u); });
      // заранее подгружаем картинку для следующей карточки
      if (queue[1] && S.cards[queue[1]] && !S.cards[queue[1]].img) autoImage(S.cards[queue[1]].en).then((u) => { if (u) new Image().src = u; });
      $('#fc-say').addEventListener('click', () => speak(c.en));
      const exb = $('#fc-ex'); if (exb) exb.addEventListener('click', () => speak(exPlain));
      let shown = false;
      const show = () => {
        if (shown) return; shown = true;
        $('#fc-back').hidden = false;
        if (m === 'ru-en') speak(c.en);
        $('#img-set').addEventListener('click', () => { const f = $('#img-form'); f.hidden = !f.hidden; if (!f.hidden) $('#img-url').focus(); });
        const saveImg = () => {
          const v = $('#img-url').value.trim();
          if (v && !/^(https?:\/\/|data:image\/)/i.test(v)) { toast('Нужна ссылка, начинающаяся с http'); return; }
          S.cards[id].img = v || undefined; c.img = v || undefined; if (v) S.cards[id].noImg = false; touch(id); save();
          let slot = $('#fc-img');
          if (!slot && v) { $('#fc').insertAdjacentHTML('afterbegin', '<div class="assoc loading" id="fc-img"></div>'); slot = $('#fc-img'); }
          fillImg(v || null);
          $('#img-form').hidden = true; toast(v ? 'Картинка сохранена' : 'Картинка убрана');
        };
        $('#img-save').addEventListener('click', saveImg);
        $('#img-url').addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.stopPropagation(); saveImg(); } });
        const lbl = (g) => { const n = schedule(c, g); return fmtIvl(Math.max(60000, n.due - Date.now())); };
        $('#fc-actions').innerHTML = `<div class="grades">
          <button class="btn again" data-g="0">Снова<small>${lbl(0)}</small></button>
          <button class="btn" data-g="1">Трудно<small>${lbl(1)}</small></button>
          <button class="btn good" data-g="2">Хорошо<small>${lbl(2)}</small></button>
          <button class="btn" data-g="3">Легко<small>${lbl(3)}</small></button></div>
          <p class="tiny muted" style="text-align:center;margin-top:10px">Клавиши <span class="kbd">1</span><span class="kbd">2</span><span class="kbd">3</span><span class="kbd">4</span>${c.state === 'new' ? ' · <a href="javascript:void 0" id="fc-known">Уже знаю это слово, больше не показывать</a>' : ''}</p>`;
        const kn = $('#fc-known'); if (kn) kn.addEventListener('click', markKnown);
        $$('[data-g]').forEach((b) => b.addEventListener('click', () => grade(+b.dataset.g)));
      };
      $('#fc-show').addEventListener('click', show);
      $('#fc').addEventListener('click', (e) => { if (!e.target.closest('button, a, input')) show(); });
      keyHandler = (ev) => {
        if (ev.target.tagName === 'INPUT' || ev.target.tagName === 'SELECT') return;
        if (ev.code === 'Space' || ev.key === 'Enter') { ev.preventDefault(); show(); }
        else if (shown && ['1', '2', '3', '4'].includes(ev.key)) grade(+ev.key - 1);
      };
      function markKnown() {
        S.known[id] = Date.now(); delete S.cards[id]; tomb('card:' + id);
        queue.shift();
        const more = takeNew(1).filter((x) => !queue.includes(x));
        queue.push(...more);
        save(); toast('Отмечено как известное'); next();
      }
      let gradedThis = false;
      function grade(g) {
        if (!shown || gradedThis) return;
        gradedThis = true;
        const wasNew = c.state === 'new';
        const n = schedule(c, g);
        n.mod = Date.now();
        S.cards[id] = n;
        if (wasNew) { isNewAvailableToday(); S.newToday.count++; }
        track('reviews');
        graded++; if (g === 0) agains++;
        if (m === 'ru-en') S.stats.ruEn++;
        if (S.settings.cardMode === 'mix') S.stats.mixRev = (S.stats.mixRev || 0) + 1;
        const hh = new Date().getHours(), mm = new Date().getMinutes();
        if (hh >= 23) S.stats.late = (S.stats.late || 0) + 1;
        if (hh === 0 && mm === 0) S.stats.midnight = 1;
        if (graded === 50 && Date.now() - sessionStart < 5 * 60000) S.stats.speedrun = 1;
        queue.shift();
        if (n.state === 'learn') {
          // вернётся через несколько карточек
          const pos = Math.min(queue.length, g === 0 ? 3 : 6);
          queue.splice(pos, 0, id);
        } else doneCount++;
        save(); next();
      }
    }
    let keyHandler = null;
    const onKey = (ev) => { if (location.hash !== '#/review') { document.removeEventListener('keydown', onKey); return; } keyHandler && keyHandler(ev); };
    document.addEventListener('keydown', onKey);
    if (!queue.length) {
      $('#rv').innerHTML = `<div class="card empty"><div class="big"><i class="ph ph-check"></i></div>Сейчас повторять нечего. ${Object.keys(S.cards).length ? 'Следующие карточки придут позже.' : 'Добавьте слова из урока.'}</div>`;
      return;
    }
    next();
  }

  // ───────────── Прогресс ─────────────
  function renderStats() {
    const cards = Object.values(S.cards);
    const learned = cards.filter((c) => c.state === 'review' && c.ivl >= 21).length;
    const inProgress = cards.filter((c) => c.state !== 'new' && !(c.state === 'review' && c.ivl >= 21)).length;
    const days = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date(Date.now() - i * DAY);
      const k = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      const a = S.activity[k] || {};
      days.push({ k, v: (a.reviews || 0) + (a.exercises || 0) + (a.reads || 0) * 10 });
    }
    const max = Math.max(1, ...days.map((d) => d.v));
    const activeDays = Object.keys(S.activity).length;
    const passedN = mainUnits.filter((u) => passed(u.id)).length;
    const totalReviews = Object.values(S.activity).reduce((s, a) => s + (a.reviews || 0), 0);
    view().innerHTML = `
      <div class="row"><h1 style="margin:0">Прогресс</h1><span class="spacer"></span><a class="btn small" href="#/achievements"><i class="ph ph-trophy"></i> Достижения</a><a class="btn small" href="#/settings"><i class="ph ph-gear-six"></i> Настройки</a></div>
      <div class="grid-3" style="margin:20px 0">
        <div class="stat"><div class="chip-ico"><i class="ph ph-flame"></i></div><b>${streak()}</b><span>дней подряд</span></div>
        <div class="stat"><div class="chip-ico"><i class="ph ph-calendar-check"></i></div><b>${activeDays}</b><span>дней занятий</span></div>
        <div class="stat"><div class="chip-ico"><i class="ph ph-book-open"></i></div><b>${passedN}/${mainUnits.length}</b><span>юнитов пройдено</span></div>
      </div>
      <div class="card" style="margin-bottom:16px">
        <h3>Активность за 30 дней</h3>
        <div class="bars">${days.map((d) => `<i class="${d.v ? '' : 'zero'}" style="height:${d.v ? Math.max(6, (d.v / max) * 100) : 4}%" title="${d.k}: ${d.v}"></i>`).join('')}</div>
      </div>
      <div class="grid-2">
        <div class="card">
          <h3>Слова</h3>
          <div class="word-list">
            <div class="word-item"><span style="flex:1">Выучено надолго <span class="muted small">(интервал 3+ недели)</span></span><b>${learned}</b></div>
            <div class="word-item"><span style="flex:1">В процессе</span><b>${inProgress}</b></div>
            <div class="word-item"><span style="flex:1">Новые, ещё не начаты</span><b>${cards.filter((c) => c.state === 'new').length}</b></div>
            <div class="word-item"><span style="flex:1">Всего повторений</span><b>${totalReviews}</b></div>
          </div>
        </div>
        <div class="card">
          <h3>Путь до B2</h3>
          <p class="muted small">Для B2 нужно около 4000 слов в активном запасе. Для комфортной игры в большинство игр хватает 2000–2500 (это B1).</p>
          <div class="progress" style="height:10px;margin:12px 0 6px"><i style="width:${Math.min(100, ((learned + Object.keys(S.known).length) / 4000) * 100)}%"></i></div>
          <div class="small muted">${learned + Object.keys(S.known).length} / 4000 слов выучено (включая отмеченные «знаю»)</div>
          <hr>
          <div class="eyebrow">Колоды слов</div>
          ${LEVELS.map((l) => { const d = deckStats(l); return `<div class="row small" style="margin-bottom:6px"><span style="width:36px;font-weight:600">${l}</span><div class="progress" style="flex:1"><i style="width:${((d.learned + d.known) / Math.max(1, d.total)) * 100}%"></i></div><span class="muted tiny">${d.learned + d.known}/${d.total}</span></div>`; }).join('')}
          <hr><div class="eyebrow">Юниты курса</div>
          ${COURSE.levels.map((l) => { const us = mainUnits.filter((u) => u.level === l.id); const d = us.filter((u) => passed(u.id)).length; return `<div class="row small" style="margin-bottom:6px"><span style="width:36px;font-weight:600">${l.id}</span><div class="progress" style="flex:1"><i style="width:${us.length ? (d / us.length) * 100 : 0}%"></i></div><span class="muted tiny">${us.length ? d + '/' + us.length : 'скоро'}</span></div>`; }).join('')}
        </div>
      </div>`;
  }

  // ───────────── Достижения ─────────────
  function bestStreak() {
    const days = Object.keys(S.activity).sort();
    let best = 0, cur = 0, prev = null;
    days.forEach((d) => { const t = new Date(d).getTime(); cur = prev != null && Math.round((t - prev) / DAY) === 1 ? cur + 1 : 1; best = Math.max(best, cur); prev = t; });
    return best;
  }
  function achCtx() {
    const cards = Object.values(S.cards);
    const acts = Object.entries(S.activity);
    const levelUnits = (L) => mainUnits.filter((u) => u.level === L);
    const courseTexts = units.flatMap((u) => u.texts.map((t) => t.id));
    const deckDone = {};
    LEVELS.forEach((l) => { const d = deckStats(l); deckDone[l] = d.total > 0 && d.learned + d.known >= d.total ? 1 : 0; });
    return {
      reviews: acts.reduce((a, [, v]) => a + (v.reviews || 0), 0),
      exercises: acts.reduce((a, [, v]) => a + (v.exercises || 0), 0),
      dayMax: acts.reduce((a, [, v]) => Math.max(a, v.reviews || 0), 0),
      activeDays: acts.length,
      weekendDays: acts.filter(([d]) => [0, 6].includes(new Date(d + 'T12:00').getDay())).length,
      bestStreak: bestStreak(),
      learned: cards.filter((c) => c.state === 'review' && c.ivl >= 21).length,
      mastered: cards.filter((c) => c.state === 'review' && c.ivl >= 90).length,
      known: Object.keys(S.known).length,
      ownCards: cards.filter((c) => c.src === 'manual' || String(c.src).startsWith('text:')).length,
      deckDone,
      passed: (id) => (passed(id) ? 1 : 0),
      unitsPassed: mainUnits.filter((u) => passed(u.id)).length,
      gamesPassed: units.filter((u) => u.track === 'games' && passed(u.id)).length,
      levelDone: (L) => (levelUnits(L).length && levelUnits(L).every((u) => passed(u.id)) ? 1 : 0),
      perfectTests: Object.keys(S.stats.perfect).length,
      perfectLevel: (L) => (levelUnits(L).length && levelUnits(L).every((u) => S.stats.perfect[u.id]) ? 1 : 0),
      firstTry: Object.keys(S.stats.firstTryUnits).length,
      textsRead: Object.keys(S.textsRead).length,
      allCourseTextsRead: courseTexts.every((id) => S.textsRead[id]) ? 1 : 0,
      userTexts: S.userTexts.length,
      achCount: Object.keys(S.ach).length,
      allOthers: ACH.list.every((a) => a.id === 'platinum' || S.ach[a.id]) ? 1 : 0,
      ...['lookups', 'listened', 'exStreakBest', 'ruEn', 'cleanSessions', 'listenRight'].reduce((o, k) => ((o[k] = S.stats[k] || 0), o), {}),
      ...['early', 'owl', 'insomnia', 'newyear', 'comeback', 'backup', 'voice', 'logo', 'speedrun', 'flawless'].reduce((o, k) => ((o[k] = S.stats[k] ? 1 : 0), o), {}),
      flawlessPractice: S.stats.flawless ? 1 : 0,
      deckHalf: LEVELS.reduce((o, l) => { const d = deckStats(l); o[l] = d.total && (d.learned + d.known) * 2 >= d.total ? 1 : 0; return o; }, {}),
      mixRev: S.stats.mixRev || 0, late: S.stats.late || 0, mini: S.stats.mini || 0, miniRight: S.stats.miniRight || 0, speaks: S.stats.speaks || 0,
      phrases: cards.filter((c) => c.id.includes(' ') && String(c.src).startsWith('text:')).length,
      customImgs: cards.filter((c) => c.img).length,
      fullWeekend: acts.some(([d]) => { const x = new Date(d + 'T12:00'); if (x.getDay() !== 6) return false; const n = new Date(x.getTime() + DAY); const k = n.getFullYear() + '-' + String(n.getMonth() + 1).padStart(2, '0') + '-' + String(n.getDate()).padStart(2, '0'); return !!S.activity[k]; }) ? 1 : 0,
      retryPassed: S.stats.retry ? 1 : 0,
      exType: Object.assign({ order: 0, tr: 0, gap: 0, choice: 0, listen: 0 }, S.stats.exType || {}),
      libAll: (window.LIBRARY || []).length && (window.LIBRARY || []).every((t) => S.textsRead[t.id]) ? 1 : 0,
      readB2: (window.LIBRARY || []).some((t) => t.level === 'B2' && S.textsRead[t.id]) ? 1 : 0,
      readCat: (window.LIBRARY || []).reduce((o, t) => { if (S.textsRead[t.id]) o[t.cat] = (o[t.cat] || 0) + 1; return o; }, { 'Сериалы': 0, 'Мультфильмы': 0, 'Игры': 0 }),
      animeAll: (() => { const a = (window.LIBRARY || []).filter((t) => t.cat === 'Аниме'); return a.length && a.every((t) => S.textsRead[t.id]) ? 1 : 0; })(),
      quizPerfect: Object.entries(S.quiz || {}).filter(([id, v]) => { const t = (window.LIBRARY || []).find((x) => x.id === id); return t && v >= t.questions.length; }).length,
      account: window.Cloud && Cloud.user && Cloud.user() ? 1 : 0,
      halloween: S.stats.halloween ? 1 : 0, midnight: S.stats.midnight ? 1 : 0, allDay: S.stats.allDay ? 1 : 0
    };
  }
  let achBusy = false;
  function checkAch() {
    if (achBusy || !window.ACH) return;
    achBusy = true;
    const fresh = [];
    for (let pass = 0; pass < 3; pass++) {
      const c = achCtx();
      let any = false;
      ACH.list.forEach((a) => { if (!S.ach[a.id] && a.val(c) >= a.need) { S.ach[a.id] = Date.now(); fresh.push(a); any = true; } });
      if (!any) break;
    }
    if (fresh.length) { try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) {} fresh.forEach(achPopup); }
    achBusy = false;
  }
  const popQueue = [];
  let popBusy = false;
  function achPopup(a) {
    popQueue.push(a);
    if (popBusy) return;
    const nextPop = () => {
      const x = popQueue.shift();
      if (!x) { popBusy = false; return; }
      popBusy = true;
      const t = ACH.tier(pctOf(x));
      const el = document.createElement('div');
      el.className = 'ach-pop ' + t.cls;
      const col = x.color || ['#8b5cf6', '#5b4ff5'];
      el.innerHTML = `<div class="ach-icon ${t.cls}" style="--c1:${col[0]};--c2:${col[1]}"><i class="ph-fill ph-${x.icon}"></i></div><div><div class="tiny" style="opacity:.7">Достижение получено</div><b>${esc(x.title)}</b><div class="tiny"><span class="tier-${t.cls}">${t.name}</span> · ${pctOf(x)}% учеников</div></div>`;
      document.body.appendChild(el);
      requestAnimationFrame(() => el.classList.add('in'));
      setTimeout(() => { el.classList.remove('in'); setTimeout(() => { el.remove(); nextPop(); }, 350); }, 3800);
    };
    nextPop();
  }
  function engagement() {
    const xp = ACH.list.filter((a) => S.ach[a.id]).reduce((s, a) => s + ACH.points(pctOf(a)), 0);
    let lvl = 1, need = 60, acc = 0;
    while (xp >= acc + need) { acc += need; lvl++; need = Math.round(need * 1.25); }
    return { xp, lvl, into: xp - acc, need, rank: ACH.RANKS[Math.min(ACH.RANKS.length - 1, Math.floor((lvl - 1) / 2))] };
  }
  // реальный процент по всем ученикам из облака, иначе — оценка
  const pctOf = (a) => { const r = window.Cloud && Cloud.realPct(a.id); return r == null ? a.pct : Math.max(0.1, r); };
  const pctReal = () => !!(window.Cloud && Cloud.realPct('rev_1') != null);
  function achCard(a, c) {
    const got = S.ach[a.id];
    const P = pctOf(a);
    const t = ACH.tier(P);
    const secret = a.hidden && !got;
    const v = Math.min(a.need, a.val(c));
    const prog = !got && !secret && a.need > 1 ? `<div class="progress" style="margin-top:8px"><i style="width:${(v / a.need) * 100}%"></i></div><div class="tiny muted" style="margin-top:3px">${v.toLocaleString('ru-RU')} / ${a.need.toLocaleString('ru-RU')}</div>` : '';
    const col = a.color || ['#8b5cf6', '#5b4ff5'];
    return `<div class="ach ${got ? 'got' : 'locked'} r-${t.cls}">
      <div class="ach-icon ${t.cls}" style="--c1:${secret ? '#475569' : col[0]};--c2:${secret ? '#0f172a' : col[1]}">${secret ? '<i class="ph-fill ph-question"></i>' : `<i class="ph-fill ph-${a.icon}"></i>`}${got ? '' : '<b class="ach-lock"><i class="ph-fill ph-lock-simple"></i></b>'}</div>
      <div style="flex:1;min-width:0">
        <div class="row" style="gap:8px"><b>${secret ? 'Секретное достижение' : esc(a.title)}</b></div>
        <div class="small muted">${secret ? 'Продолжайте заниматься, чтобы узнать' : esc(a.desc)}</div>
        ${prog}
        ${got ? `<div class="tiny muted" style="margin-top:4px">Получено ${new Date(got).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</div>` : ''}
      </div>
      <div class="ach-rar"><span class="rar-pill ${t.cls}">${t.name}</span><span class="tier-${t.cls}">${P}%</span></div>
    </div>`;
  }
  function renderAch() {
    const c = achCtx();
    const all = ACH.list;
    const got = all.filter((a) => S.ach[a.id]);
    const e = engagement();
    const rarest = got.slice().sort((a, b) => pctOf(a) - pctOf(b))[0];
    const filter = sessionStorage.getItem('achFilter') || 'all';
    const cats = [...new Set(all.map((a) => a.cat))];
    const pass = (a) => filter === 'all' || (filter === 'got' ? S.ach[a.id] : !S.ach[a.id]);
    view().innerHTML = `
      <h1>Награды</h1>
      <div class="grid-2" style="margin:20px 0">
        <div class="card">
          <div class="eyebrow">Уровень вовлечённости</div>
          <div class="row" style="gap:14px"><div class="lvl-badge">${e.lvl}</div><div style="flex:1"><b style="font-size:18px">${e.rank}</b>
          <div class="progress" style="margin-top:8px"><i style="width:${(e.into / e.need) * 100}%"></i></div>
          <div class="tiny muted" style="margin-top:4px">${e.into} / ${e.need} очков до уровня ${e.lvl + 1} · всего ${e.xp}</div></div></div>
          <p class="tiny muted" style="margin:12px 0 0">Очки даются за каждое достижение: чем оно реже, тем больше очков.</p>
        </div>
        <div class="card">
          <div class="eyebrow">Коллекция</div>
          <b style="font-size:26px">${got.length}</b> <span class="muted">из ${all.length}</span>
          <div class="progress" style="margin:8px 0"><i style="width:${(got.length / all.length) * 100}%"></i></div>
          <div class="small muted">${rarest ? `Самое редкое: <i class="ph-fill ph-${rarest.icon}"></i> <b>${esc(rarest.title)}</b> (${pctOf(rarest)}%)` : 'Пока ни одного. Первое совсем близко!'}</div>
        </div>
      </div>
      <div class="row" style="margin-bottom:16px">
        <div class="seg">${[['all', 'Все'], ['got', 'Получены'], ['todo', 'Впереди']].map(([k, l]) => `<button data-f="${k}" class="${filter === k ? 'on' : ''}">${l}</button>`).join('')}</div>
        <span class="spacer"></span>
        <span class="tiny muted">${pctReal() ? 'Процент — реальная доля учеников сайта с этим достижением' : 'Процент — примерная доля учеников. Реальная статистика появится, когда учеников с аккаунтом станет 10+'}</span>
      </div>
      ${cats.map((cat) => { const items = all.filter((a) => a.cat === cat && pass(a)); if (!items.length) return ''; const g = all.filter((a) => a.cat === cat && S.ach[a.id]).length;
        return `<div class="eyebrow" style="margin-top:20px">${cat} · ${g}/${all.filter((a) => a.cat === cat).length}</div><div class="ach-list">${items.map((a) => achCard(a, c)).join('')}</div>`; }).join('')}`;
    $$('[data-f]').forEach((b) => b.addEventListener('click', () => { try { sessionStorage.setItem('achFilter', b.dataset.f); } catch (e) {} withBack(renderAch); }));
  }
  function nearAch(n = 3) {
    const c = achCtx();
    return ACH.list.filter((a) => !S.ach[a.id] && !a.hidden && a.need > 1)
      .map((a) => ({ a, p: Math.min(1, a.val(c) / a.need) })).filter((x) => x.p > 0)
      .sort((x, y) => y.p - x.p).slice(0, n);
  }

  const NAV_CLOUD = ($('#nav-account .ico') || { outerHTML: '<span class="ico"><i class="ph ph-cloud"></i></span>' }).outerHTML;
  // ───────────── Аккаунт: вход, регистрация, восстановление ─────────────
  let authMode = 'up';      // up | in | sent | forgot | forgot-sent | reset
  let authEmail = '';
  const cloudOn = () => !!(window.Cloud && Cloud.enabled);
  const authErr = (e) => {
    const m = String((e && e.message) || e);
    if (/Invalid login/i.test(m)) return 'Неверный email или пароль.';
    if (/not confirmed/i.test(m)) return 'Почта ещё не подтверждена. Откройте письмо и нажмите ссылку — или отправьте письмо ещё раз.';
    if (/already registered|already exists/i.test(m)) return 'Аккаунт с этой почтой уже есть. Перейдите на вкладку «Вход».';
    if (/Password should|at least 6/i.test(m)) return 'Пароль слишком короткий — нужно минимум 6 символов.';
    if (/valid email|invalid.*email|email.*invalid/i.test(m)) return 'Похоже, в адресе почты опечатка.';
    if (/rate limit|too many|security purposes/i.test(m)) return 'Слишком много попыток. Подождите минуту и попробуйте снова.';
    if (/same.*password|different from the old/i.test(m)) return 'Новый пароль должен отличаться от старого.';
    if (/fetch|network/i.test(m)) return 'Нет связи с сервером. Проверьте интернет.';
    return m;
  };
  const eye = (id) => `<button type="button" class="pw-eye" data-eye="${id}" aria-label="Показать пароль"><i class="ph ph-eye"></i></button>`;
  function renderAuth() {
    const ev = window.Cloud && Cloud.takeAuthEvent ? Cloud.takeAuthEvent() : null;
    if (ev === 'recovery') authMode = 'reset';
    if (ev === 'confirmed') setTimeout(() => toast('Почта подтверждена — вы вошли'), 300);
    const linkErr = ev && ev.startsWith('link-error:') ? ev.slice(11) : '';
    if (!cloudOn()) {
      view().innerHTML = `<div class="auth-wrap"><div class="card auth-card"><div class="auth-ico"><i class="ph ph-cloud"></i></div><h1>Аккаунт</h1><p class="muted">Облако сейчас недоступно — проверьте интернет и обновите страницу. Всё, что вы делаете, продолжает сохраняться в этом браузере.</p></div></div>`;
      return;
    }
    const st = Cloud.status();
    if (st.user && authMode !== 'reset') return renderAccountPage(st);

    const tabs = (authMode === 'in' || authMode === 'up') ? `
      <div class="seg auth-seg"><button data-mode="up" class="${authMode === 'up' ? 'on' : ''}">Регистрация</button><button data-mode="in" class="${authMode === 'in' ? 'on' : ''}">Вход</button></div>` : '';
    let body = '';
    if (authMode === 'up' || authMode === 'in') {
      const up = authMode === 'up';
      body = `
        <form class="auth-form" id="auth-form" novalidate>
          <label class="fld"><span>Почта</span><input class="input" id="a-email" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com" value="${esc(authEmail)}" required></label>
          <label class="fld"><span>Пароль ${up ? '<i class="muted">минимум 6 символов</i>' : '<a href="javascript:void 0" id="a-forgot" class="fld-link">Забыли пароль?</a>'}</span>
            <div class="pw"><input class="input" id="a-pass" type="password" autocomplete="${up ? 'new-password' : 'current-password'}" placeholder="${up ? 'Придумайте пароль' : 'Ваш пароль'}" required>${eye('a-pass')}</div></label>
          <div class="auth-err" id="a-err" role="alert"></div>
          <button class="btn primary auth-cta" id="a-go" type="submit">${up ? 'Создать аккаунт' : 'Войти'}</button>
          <p class="tiny muted auth-foot">${up ? 'Уже есть аккаунт? <a href="javascript:void 0" data-mode="in">Войти</a>' : 'Ещё нет аккаунта? <a href="javascript:void 0" data-mode="up">Зарегистрироваться</a>'}</p>
        </form>`;
    } else if (authMode === 'sent') {
      body = `<div class="auth-state"><div class="auth-big"><i class="ph ph-envelope-simple-open"></i></div><h2>Проверьте почту</h2>
        <p class="muted">Мы отправили письмо на <b>${esc(authEmail)}</b>. Нажмите в нём ссылку «Confirm your mail» — сайт откроется, и вы сразу окажетесь в аккаунте.</p>
        <p class="tiny muted">Письма нет пару минут? Загляните в «Спам» или «Промоакции».</p>
        <div class="auth-err" id="a-err"></div>
        <button class="btn primary auth-cta" id="a-resend">Отправить письмо ещё раз</button>
        <p class="tiny muted auth-foot">Уже подтвердили на другом устройстве? <a href="javascript:void 0" data-mode="in">Войти</a> · <a href="javascript:void 0" data-mode="up">Другая почта</a></p></div>`;
    } else if (authMode === 'forgot') {
      body = `<form class="auth-form" id="auth-form" novalidate>
        <p class="muted small" style="margin:0 0 4px">Пришлём письмо со ссылкой — по ней можно задать новый пароль. Прогресс не пострадает.</p>
        <label class="fld"><span>Почта аккаунта</span><input class="input" id="a-email" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com" value="${esc(authEmail)}" required></label>
        <div class="auth-err" id="a-err"></div>
        <button class="btn primary auth-cta" id="a-go" type="submit">Отправить ссылку</button>
        <p class="tiny muted auth-foot"><a href="javascript:void 0" data-mode="in"><i class="ph ph-arrow-left"></i> Назад ко входу</a></p></form>`;
    } else if (authMode === 'forgot-sent') {
      body = `<div class="auth-state"><div class="auth-big"><i class="ph ph-key"></i></div><h2>Письмо отправлено</h2>
        <p class="muted">Ссылка для нового пароля ушла на <b>${esc(authEmail)}</b>. Откройте её на этом устройстве.</p>
        <p class="tiny muted auth-foot"><a href="javascript:void 0" data-mode="in"><i class="ph ph-arrow-left"></i> Назад ко входу</a></p></div>`;
    } else if (authMode === 'reset') {
      body = `<form class="auth-form" id="auth-form" novalidate>
        <p class="muted small" style="margin:0 0 4px">${st.user ? 'Придумайте новый пароль для ' + esc(st.user.email || '') + '.' : 'Ссылка устарела. Запросите новую.'}</p>
        <label class="fld"><span>Новый пароль <i class="muted">минимум 6 символов</i></span><div class="pw"><input class="input" id="a-pass" type="password" autocomplete="new-password" placeholder="Новый пароль" required>${eye('a-pass')}</div></label>
        <div class="auth-err" id="a-err"></div>
        <button class="btn primary auth-cta" id="a-go" type="submit">Сохранить пароль</button></form>`;
    }
    const titles = { up: ['Создайте аккаунт', 'Прогресс будет сохраняться в облаке и совпадать на Mac и iPhone.'], in: ['С возвращением', 'Войдите, чтобы продолжить с того же места.'], sent: ['', ''], forgot: ['Восстановление пароля', ''], 'forgot-sent': ['', ''], reset: ['Новый пароль', ''] }[authMode];
    view().innerHTML = `
      <div class="auth-wrap">
        <div class="card auth-card">
          ${titles[0] ? `<div class="auth-ico"><i class="ph ph-cloud"></i></div><h1>${titles[0]}</h1>${titles[1] ? `<p class="muted auth-sub">${titles[1]}</p>` : ''}` : ''}
          ${linkErr ? `<div class="auth-err show" style="margin-bottom:12px">Ссылка из письма не сработала: ${esc(linkErr)}. Запросите новую.</div>` : ''}
          ${tabs}${body}
        </div>
        ${authMode === 'up' || authMode === 'in' ? `
        <div class="auth-perks">
          <div><span><i class="ph ph-devices"></i></span><b>Одно обучение на всех устройствах</b><small>Начали на Mac — продолжили в метро с iPhone</small></div>
          <div><span><i class="ph ph-lifebuoy"></i></span><b>Прогресс не потеряется</b><small>Даже если очистить браузер или сменить телефон</small></div>
          <div><span><i class="ph ph-trophy"></i></span><b>Настоящая редкость достижений</b><small>Сравнение с другими учениками</small></div>
        </div>
        <p class="tiny muted" style="text-align:center;margin-top:14px">Без аккаунта всё тоже работает — прогресс хранится в этом браузере.</p>` : ''}
      </div>`;

    $$('[data-mode]').forEach((b) => b.addEventListener('click', () => { const e = $('#a-email'); if (e) authEmail = e.value.trim(); authMode = b.dataset.mode; renderAuth(); }));
    $$('[data-eye]').forEach((b) => b.addEventListener('click', () => { const i = $('#' + b.dataset.eye); i.type = i.type === 'password' ? 'text' : 'password'; b.classList.toggle('on', i.type === 'text'); i.focus(); }));
    const f = $('#a-forgot'); if (f) f.addEventListener('click', () => { authEmail = $('#a-email').value.trim(); authMode = 'forgot'; renderAuth(); });
    const errBox = $('#a-err');
    const showErr = (t) => { if (errBox) { errBox.textContent = t; errBox.classList.toggle('show', !!t); } };
    const busy = (btn, on, label) => { if (!btn) return; btn.disabled = on; if (on) { btn.dataset.l = btn.textContent; btn.innerHTML = '<span class="spin"></span>' + (label || 'Секунду…'); } else btn.textContent = btn.dataset.l || btn.textContent; };
    const validEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
    const first = $('#a-email') && !$('#a-email').value ? $('#a-email') : $('#a-pass'); if (first && window.innerWidth > 760) first.focus();

    const form = $('#auth-form');
    if (form) form.addEventListener('submit', async (ev) => {
      ev.preventDefault(); showErr('');
      const btn = $('#a-go');
      const email = $('#a-email') ? $('#a-email').value.trim() : '';
      const pass = $('#a-pass') ? $('#a-pass').value : '';
      if ($('#a-email') && !validEmail(email)) { showErr('Введите почту в формате name@example.com.'); $('#a-email').focus(); return; }
      if ($('#a-pass') && pass.length < 6) { showErr('Пароль — минимум 6 символов.'); $('#a-pass').focus(); return; }
      authEmail = email || authEmail;
      try {
        if (authMode === 'up') {
          busy(btn, true, 'Создаю аккаунт…');
          const r = await Cloud.signUp(email, pass);
          if (r.needsConfirm) { authMode = 'sent'; renderAuth(); } else { toast('Аккаунт создан'); authMode = 'in'; }
        } else if (authMode === 'in') {
          busy(btn, true, 'Вхожу…');
          await Cloud.signIn(email, pass);
          toast('Вы вошли — прогресс синхронизируется');
        } else if (authMode === 'forgot') {
          busy(btn, true, 'Отправляю…');
          await Cloud.resetPassword(email);
          authMode = 'forgot-sent'; renderAuth();
        } else if (authMode === 'reset') {
          busy(btn, true, 'Сохраняю…');
          await Cloud.updatePassword(pass);
          authMode = 'in'; toast('Пароль изменён'); renderAuth();
        }
      } catch (e) {
        busy(btn, false);
        const m = authErr(e);
        showErr(m);
        if (authMode === 'in' && /не подтверждена/.test(m)) { authMode = 'sent'; renderAuth(); }
      }
    });
    const rs = $('#a-resend');
    if (rs) rs.addEventListener('click', async () => {
      showErr(''); busy(rs, true, 'Отправляю…');
      try { await Cloud.resendConfirm(authEmail); busy(rs, false); rs.innerHTML = '<i class="ph ph-check"></i> Письмо отправлено ещё раз'; rs.disabled = true; setTimeout(() => { rs.disabled = false; rs.textContent = 'Отправить письмо ещё раз'; }, 60000); }
      catch (e) { busy(rs, false); showErr(authErr(e)); }
    });
  }
  function renderAccountPage(st) {
    const email = (st.user && st.user.email) || '';
    const cards = Object.keys(S.cards).length, days = Object.keys(S.activity).length, ach = Object.keys(S.ach).length;
    view().innerHTML = `
      <div class="auth-wrap">
        <div class="card auth-card">
          <div class="acc-head"><div class="avatar">${esc((email[0] || '?').toUpperCase())}</div>
            <div style="min-width:0"><b class="acc-mail">${esc(email)}</b>
            <div class="small ${st.lastError ? '' : 'muted'}" style="${st.lastError ? 'color:var(--bad)' : ''}">${st.lastError ? '<i class="ph ph-warning"></i> Не удалось синхронизировать' : st.pushing || st.pulling ? '<i class="ph ph-arrows-clockwise"></i> Синхронизация…' : '<i class="ph ph-cloud"></i> Всё сохранено в облаке' + (st.lastSync ? ' · ' + st.lastSync.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) : '')}</div></div></div>
          ${st.lastError ? `<div class="auth-err show" style="margin-top:14px">${esc(authErr(st.lastError))} Прогресс в безопасности в этом браузере и отправится, когда связь вернётся.</div>` : ''}
          <div class="grid-3 acc-stats"><div><b>${cards}</b><span>слов</span></div><div><b>${days}</b><span>${plural(days, 'день', 'дня', 'дней')}</span></div><div><b>${ach}</b><span>достижений</span></div></div>
          <p class="small muted">Войдите с этой почтой на iPhone или другом компьютере — прогресс подтянется автоматически. Синхронизация идёт сама, кнопка ниже нужна только если хочется обновить прямо сейчас.</p>
          <div class="acc-actions">
            <button class="btn" id="acc-sync"><i class="ph ph-arrows-clockwise"></i> Синхронизировать</button>
            <button class="btn ghost" id="acc-pw">Сменить пароль</button>
            <button class="btn ghost" id="acc-out" style="color:var(--bad)">Выйти</button>
          </div>
        </div>
      </div>`;
    $('#acc-sync').addEventListener('click', async () => { await Cloud.pull(); toast(Cloud.status().lastError ? 'Не получилось — проверьте интернет' : 'Синхронизировано'); });
    $('#acc-pw').addEventListener('click', () => { authMode = 'reset'; renderAuth(); });
    $('#acc-out').addEventListener('click', async () => { if (!confirm('Выйти из аккаунта? Прогресс останется и в облаке, и в этом браузере.')) return; await Cloud.signOut(); authMode = 'in'; toast('Вы вышли'); renderAuth(); });
  }
  // строка аккаунта в настройках
  function renderAccount() {
    const box = $('#acc-card'); if (box) {
      const st = cloudOn() ? Cloud.status() : {};
      box.innerHTML = st.user
        ? `<a class="acc-row" href="#/account"><div class="avatar sm">${esc(((st.user.email || '?')[0]).toUpperCase())}</div><div style="flex:1;min-width:0"><b>${esc(st.user.email || '')}</b><div class="small muted">${st.lastError ? 'Ошибка синхронизации' : '<i class="ph ph-cloud"></i> Синхронизировано'}</div></div><i class="ph ph-caret-right muted"></i></a>`
        : `<a class="acc-row" href="#/account"><div class="avatar sm off"><i class="ph ph-cloud"></i></div><div style="flex:1"><b>Войти или создать аккаунт</b><div class="small muted">Чтобы прогресс был на всех устройствах</div></div><i class="ph ph-caret-right muted"></i></a>`;
    }
    const nav = $('#nav-account'); if (nav) {
      const st = cloudOn() ? Cloud.status() : {};
      nav.innerHTML = st.user
        ? `<span class="avatar xs">${esc(((st.user.email || '?')[0]).toUpperCase())}</span><span>${st.lastError ? 'Нет связи' : 'Аккаунт'}</span>`
        : `${NAV_CLOUD}<span>Войти</span>`;
    }
    if (location.hash === '#/account' && cloudOn() && Cloud.status().user && authMode !== 'reset') renderAccountPage(Cloud.status());
  }

  // ───────────── Настройки ─────────────
  function renderSettings() {
    loadVoices();
    view().innerHTML = `
      <h1>Настройки</h1>
      <div class="stack" style="margin-top:20px">
        <div class="card" id="acc-card" style="padding:8px"></div>
        <div class="card stack">
          <h3 style="margin:0">Карточки</h3>
          <label class="field">Новых слов в день
            <select class="input" id="st-new">${[5, 10, 15, 20, 25, 30, 40].map((n) => `<option ${n === S.settings.newPerDay ? 'selected' : ''}>${n}</option>`).join('')}</select></label>
          <p class="muted small" style="margin:0">15 — спокойный темп (≈ 4000 слов за 9 месяцев), 25 — быстрый (≈ 5 месяцев, но 30–40 минут на повторения в день). Новые слова из уроков идут первыми, затем слова из колод.</p>
        </div>
        <div class="card stack">
          <h3 style="margin:0">Картинки-ассоциации</h3>
          <label class="row small" style="gap:10px;cursor:pointer"><input type="checkbox" id="st-img" ${S.settings.autoImg !== false ? 'checked' : ''}> Автоматически показывать картинку в карточках</label>
          <p class="muted small" style="margin:0">Картинка подбирается сама из Википедии и Wikimedia Commons и загружается только при показе карточки — сайт их не хранит, только ссылки. Для абстрактных слов (however, would) картинки обычно нет. Неудачную можно скрыть крестиком или заменить своей.</p>
        </div>
        <div class="card stack">
          <h3 style="margin:0">Озвучка</h3>
          <label class="row small" style="gap:10px;cursor:pointer"><input type="checkbox" id="st-live" ${S.settings.liveVoice !== false ? 'checked' : ''}> Живое произношение слов — записи носителей из Викисловаря</label>
          <label class="field">Акцент для живых записей
            <select class="input" id="st-accent"><option value="us" ${S.settings.accent !== 'uk' ? 'selected' : ''}>Американский</option><option value="uk" ${S.settings.accent === 'uk' ? 'selected' : ''}>Британский</option></select></label>
          <div><button class="btn small" id="st-live-test"><i class="ph ph-speaker-high"></i> Проверить: water</button></div>
          <p class="muted small" style="margin:0">Отдельные слова звучат голосом реального человека, если запись есть (у большинства частых слов есть), и рядом показывается транскрипция. Предложения и слова без записи читает голос браузера, его можно выбрать ниже.</p>
          <label class="field">Голос
            <select class="input" id="st-voice"><option value="">Автоматически</option>${voices.map((v) => `<option value="${esc(v.name)}" ${v.name === S.settings.voice ? 'selected' : ''}>${esc(v.name)} (${v.lang})</option>`).join('')}</select></label>
          <label class="field">Скорость
            <select class="input" id="st-rate">${[0.7, 0.8, 0.9, 1].map((r) => `<option value="${r}" ${r === S.settings.rate ? 'selected' : ''}>${r}×</option>`).join('')}</select></label>
          <div><button class="btn small" id="st-test"><i class="ph ph-speaker-high"></i> Проверить: Hello! Nice to meet you.</button></div>
          <p class="muted small" style="margin:0">На Mac самые живые голоса — Samantha, Ava, Zoe (можно скачать в Системных настройках <i class="ph ph-arrow-right"></i> Универсальный доступ <i class="ph ph-arrow-right"></i> Устный контент).</p>
        </div>
        <div class="card stack">
          <h3 style="margin:0">Резервная копия</h3>
          <p class="muted small" style="margin:0">Прогресс хранится в этом браузере. Периодически сохраняйте копию в файл — так его можно перенести на другое устройство или восстановить.</p>
          <div class="row"><button class="btn" id="st-export">Скачать копию</button><label class="btn">Загрузить из файла<input type="file" id="st-import" accept="application/json" hidden></label></div>
        </div>
        <div class="card stack">
          <h3 style="margin:0">Сброс</h3>
          <div><button class="btn" id="st-reset" style="color:var(--bad)">Стереть весь прогресс</button></div>
        </div>
      </div>`;
    renderAccount();
    $('#st-img').addEventListener('change', (e) => { S.settings.autoImg = e.target.checked; save(); toast('Сохранено'); });
    $('#st-new').addEventListener('change', (e) => { S.settings.newPerDay = +e.target.value; save(); toast('Сохранено'); });
    $('#st-live').addEventListener('change', (e) => { S.settings.liveVoice = e.target.checked; save(); toast('Сохранено'); });
    $('#st-accent').addEventListener('change', (e) => { S.settings.accent = e.target.value; save(); speak('water'); });
    $('#st-live-test').addEventListener('click', () => speak('water'));
    $('#st-voice').addEventListener('change', (e) => { S.settings.voice = e.target.value; S.stats.voice = 1; save(); speak('Hello! Nice to meet you.'); });
    $('#st-rate').addEventListener('change', (e) => { S.settings.rate = +e.target.value; save(); speak('Hello! Nice to meet you.'); });
    $('#st-test').addEventListener('click', () => speak('Hello! Nice to meet you.'));
    $('#st-export').addEventListener('click', () => {
      S.stats.backup = 1; save();
      const blob = new Blob([JSON.stringify(S, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'english-path-backup-' + today() + '.json'; a.click();
    });
    $('#st-import').addEventListener('change', (e) => {
      const f = e.target.files[0]; if (!f) return;
      const r = new FileReader();
      r.onload = () => { try { const d = JSON.parse(r.result); if (!d.cards) throw 0; S = Object.assign(defaults(), d); save(); toast('Прогресс восстановлен'); route(); } catch (err) { toast('Не удалось прочитать файл'); } };
      r.readAsText(f);
    });
    $('#st-reset').addEventListener('click', () => { if (confirm('Точно стереть весь прогресс? Это нельзя отменить.')) { S = defaults(); save(); toast('Прогресс стёрт'); location.hash = '#/'; } });
  }

  // ───────────── Старт ─────────────
  let logoClicks = 0;
  const brand = $('.brand');
  if (brand) brand.addEventListener('click', () => { if (++logoClicks >= 10) { S.stats.logo = 1; save(); } });
  if (window.Cloud) {
    Cloud.init({
      get: () => S,
      replace: (x) => {
        // при возврате в приложение облако присылает данные: если ничего не поменялось — ничего не трогаем
        const strip = (o) => { const c = Object.assign({}, o); delete c.imgCache; return JSON.stringify(c); };
        const changed = strip(Object.assign(defaults(), x)) !== strip(S);
        S = Object.assign(defaults(), x);
        S.settings = Object.assign(defaults().settings, S.settings);
        S.stats = Object.assign({ lookups: 0, listened: 0, exStreak: 0, exStreakBest: 0, perfect: {}, firstTryUnits: {}, attempts: {}, ruEn: 0, cleanSessions: 0, listenRight: 0 }, S.stats || {});
        S.known = S.known || {}; S.ach = S.ach || {}; S.imgCache = S.imgCache || {};
        settingsSnap = JSON.stringify(S.settings);
        try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) {}
        updateBadge();
        // перерисовываем только обзорные экраны и только если данные правда изменились;
        // уроки, упражнения, чтение, времена и книги никогда не сбрасываем
        if (changed && /^(#\/?)?(course|cards|profile|achievements|stats|library)?\/?$/.test(location.hash)) route(true);
      }
    });
    Cloud.onChange(() => { renderAccount(); if (location.hash === '#/profile') renderProfile(); if (location.hash === '#/achievements') withBack(renderAch); if (location.hash === '' || location.hash === '#/') { let hidden = false; try { hidden = !!localStorage.getItem('ep.hideAuthBanner'); } catch (e) {} if (!!$('.auth-banner') !== (!Cloud.status().user && !hidden)) renderToday(); } });
    const ev0 = Cloud.peekAuthEvent && Cloud.peekAuthEvent();
    if (ev0 === 'recovery' || (ev0 && ev0.startsWith('link-error'))) setTimeout(() => { location.hash = '#/account'; }, 50);
    else if (ev0 === 'confirmed') setTimeout(() => { Cloud.takeAuthEvent(); toast('Почта подтверждена — вы вошли в аккаунт'); location.hash = '#/'; }, 800);
  }
  updateBadge();
  route();
  setTimeout(checkAch, 600);

})();
