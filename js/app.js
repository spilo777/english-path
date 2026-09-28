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
    S.activity[d] = S.activity[d] || { reviews: 0, exercises: 0, reads: 0 };
    S.activity[d][kind] = (S.activity[d][kind] || 0) + n;
  }
  function unitState(id) { return (S.units[id] = S.units[id] || { steps: {}, testBest: null }); }

  // ───────────── Словарь ─────────────
  const DICT = Object.assign({}, window.DICT);
  COURSE.units.forEach((u) => u.words.forEach((w) => { const k = w[0].toLowerCase(); if (!DICT[k]) DICT[k] = w[1]; }));
  const DECK = (window.WORDS || []).map((w) => ({ id: w[0].toLowerCase(), en: w[0], ru: w[1], ex: w[2], exRu: w[3], lvl: w[4], pos: w[5], rank: w[6] }));
  DECK.forEach((w) => { if (!DICT[w.id]) DICT[w.id] = w.ru; });
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
  function speak(text, opts = {}) {
    if (!('speechSynthesis' in window)) { toast('Браузер не поддерживает озвучку'); return null; }
    if (!opts.queue) speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice(); if (v) u.voice = v;
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
  const units = COURSE.units;
  const mainUnits = units.filter((u) => u.track === 'main');
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
  }
  const view = () => $('#view');

  // ───────────── Роутер ─────────────
  function route() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    hidePopover();
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean).map(decodeURIComponent);
    const [r, a, b] = parts;
    const navKey = { '': 'today', course: 'course', unit: 'course', library: 'library', read: 'library', cards: 'cards', review: 'cards', deck: 'cards', achievements: 'achievements', account: 'account', stats: 'stats', settings: 'settings' }[r || ''] || 'today';
    $$('.nav a').forEach((el) => el.classList.toggle('active', el.dataset.nav === navKey));
    window.scrollTo(0, 0);
    if (!r) return renderToday();
    if (r === 'course') return renderCourse();
    if (r === 'unit') return renderUnit(a, b || 'grammar');
    if (r === 'library') return renderLibrary();
    if (r === 'read') return renderReader(a);
    if (r === 'cards') return renderCards();
    if (r === 'review') return renderReview();
    if (r === 'deck') return renderDeck(a);
    if (r === 'achievements') return renderAch();
    if (r === 'account') return renderAuth();
    if (r === 'stats') return renderStats();
    if (r === 'settings') return renderSettings();
    renderToday();
  }
  window.addEventListener('hashchange', route);

  // ───────────── Сегодня ─────────────
  function renderToday() {
    const due = dueCards().length;
    const nw = newAvailable();
    const u = currentUnit();
    const ns = nextStep(u);
    const act = S.activity[today()] || {};
    const unread = allTexts().filter((t) => !t.user && isUnlocked(t.unit) && !S.textsRead[t.id]);
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
    const eng = engagement();
    const R = 52, CIRC = 2 * Math.PI * R;
    view().innerHTML = `
      <section class="hero">
        <div style="flex:1;min-width:0">
          <div class="eyebrow">${new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
          <h1>${hello}!</h1>
          <p>${planDone === 3 ? 'План на сегодня выполнен. Отличная работа — завтра продолжим.' : 'Около 40–60 минут сегодня. Регулярность важнее длительности.'}</p>
          <div class="hero-chips">
            <span class="hchip">🔥 ${st} ${plural(st, 'день', 'дня', 'дней')} подряд</span>
            <span class="hchip">🏆 Уровень ${eng.lvl} · ${eng.rank}</span>
            <span class="hchip">📘 ${u.level}, юнит ${u.num}</span>
          </div>
        </div>
        <div class="ring">
          <svg width="120" height="120" viewBox="0 0 120 120"><circle cx="60" cy="60" r="${R}" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="10"/>
          <circle cx="60" cy="60" r="${R}" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-dasharray="${CIRC}" stroke-dashoffset="${CIRC * (1 - planDone / 3)}" style="transition:stroke-dashoffset .8s"/></svg>
          <div class="ring-label"><div><b>${planDone}/3</b><span>плана</span></div></div>
        </div>
      </section>
      <div class="grid-4" style="margin-bottom:26px">
        <div class="stat"><div class="chip-ico">🃏</div><b>${due + nw}</b><span>карточек на сегодня</span></div>
        <div class="stat"><div class="chip-ico">🧠</div><b>${total}</b><span>слов в работе</span></div>
        <div class="stat"><div class="chip-ico">✅</div><b>${learned}</b><span>выучено надолго</span></div>
        <div class="stat"><div class="chip-ico">🎖️</div><b>${Object.keys(S.ach).length}</b><span>достижений</span></div>
      </div>
      ${cloudOn() && !Cloud.status().user && !(() => { try { return localStorage.getItem('ep.hideAuthBanner'); } catch (e) { return false; } })() ? `
      <div class="auth-banner"><div class="auth-banner-ico">☁︎</div><div style="flex:1;min-width:0"><b>Сохраните прогресс в облаке</b><div class="small muted">Бесплатный аккаунт — и занятия будут одинаковыми на Mac и iPhone.</div></div>
        <a class="btn small primary" href="#/account">Создать аккаунт</a><button class="icon-btn" id="hide-banner" title="Скрыть">✕</button></div>` : ''}
      <div class="row" style="margin-bottom:12px"><h2 style="margin:0">План на сегодня</h2></div>
      <div class="stack">
        <div class="task ${reviewsDone ? 'done' : ''}">
          <div class="num">${reviewsDone ? '✓' : '🃏'}</div>
          <div class="body"><b>Карточки</b><span class="muted small">${due + nw ? `${due} на повторение, ${nw} ${plural(nw, 'новая', 'новые', 'новых')}` : total ? 'На сегодня всё повторено' : 'Пока пусто. Карточки появятся после шага «Слова» в уроке'}</span></div>
          ${due + nw ? '<a class="btn primary" href="#/review">Начать</a>' : ''}
        </div>
        <div class="task ${lessonToday ? 'done' : ''}">
          <div class="num">${lessonToday ? '✓' : '📘'}</div>
          <div class="body"><b>Урок ${u.num}: ${esc(u.title)}</b><span class="muted small">${ns ? 'Следующий шаг: ' + ns.label : 'Юнит пройден'}</span>
            <div class="progress" style="margin-top:8px"><i style="width:${Math.round(unitProgress(u) * 100)}%"></i></div></div>
          ${ns ? `<a class="btn ${due + nw ? '' : 'primary'}" href="#/unit/${u.id}/${ns.k}">Продолжить</a>` : ''}
        </div>
        <div class="task ${(act.reads || 0) > 0 ? 'done' : ''}">
          <div class="num">${readToday ? '✓' : '🎧'}</div>
          <div class="body"><b>Чтение и аудирование</b><span class="muted small">${suggest ? 'Текст: «' + esc(suggest.title) + '». Прочитайте, потом прослушайте и повторите вслух' : 'Все тексты прочитаны. Добавьте свой в «Чтение» или перечитайте любимый'}</span></div>
          <a class="btn" href="${suggest ? '#/read/' + suggest.id : '#/library'}">Читать</a>
        </div>
        <div class="task">
          <div class="num">🌍</div>
          <div class="body"><b>Вне сайта: 20+ минут английского</b><span class="muted small">${esc(tipOfDay())}</span></div>
        </div>
      </div>
      ${(() => { const near = nearAch(); const e = engagement(); return `
      <div class="row" style="margin:28px 0 10px"><h2 style="margin:0">Ближайшие достижения</h2><span class="spacer"></span><a class="small" href="#/achievements">Уровень ${e.lvl} · ${Object.keys(S.ach).length}/${ACH.list.length} →</a></div>
      <div class="ach-list">${near.length ? near.map(({ a }) => achCard(a, achCtx())).join('') : ACH.list.filter((a) => !S.ach[a.id] && !a.hidden).slice(0, 3).map((a) => achCard(a, achCtx())).join('')}</div>`; })()}`;
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
  function renderCourse() {
    const lvlHtml = COURSE.levels.map((l) => {
      const us = mainUnits.filter((u) => u.level === l.id);
      const games = units.filter((u) => u.track === 'games' && u.level === l.id);
      const done = us.filter((u) => passed(u.id)).length;
      return `
      <div class="level-block">
        <div class="row" style="margin-bottom:6px"><h2 style="margin:0">${l.title}</h2>${us.length ? `<span class="pill ${done === us.length ? 'ok' : 'accent'}">${done}/${us.length}</span>` : ''}</div>
        <p class="muted small">${esc(l.goal)}</p>
        ${l.soon && !us.length ? `<div class="soon">Этот уровень добавим, когда вы дойдёте до него. Программа строится блоками по мере прохождения.</div>` : ''}
        ${us.map(unitRow).join('')}
        ${games.length ? `<div class="eyebrow" style="margin-top:18px">🎮 Игровой трек</div>` + games.map(unitRow).join('') : ''}
      </div>`;
    }).join('');
    view().innerHTML = `
      <h1>Программа</h1>
      <p class="muted">От нуля до B2: чтобы играть в любые игры, читать и общаться. Каждый юнит — грамматика, слова, текст, практика и тест. Следующий юнит открывается после теста на 80%+.</p>
      <hr>${lvlHtml}`;
  }
  function unitRow(u) {
    const unlocked = isUnlocked(u);
    const p = unitProgress(u);
    const ok = passed(u.id);
    return `<a class="unit-row ${unlocked ? '' : 'locked'} ${ok ? 'passed' : ''}" href="#/unit/${u.id}">
      <div class="unit-num">${ok ? '✓' : unlocked ? (u.track === 'games' ? '🎮' : u.num) : '🔒'}</div>
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
      return `<a href="#/unit/${u.id}/${k}" class="${k === tab ? 'active' : ''} ${done ? 'done' : ''}">${i + 1}. ${label}</a>`;
    }).join('');
    view().innerHTML = `
      <a href="#/course" class="small">← Программа</a>
      <div class="eyebrow" style="margin-top:14px">${u.track === 'games' ? 'Игровой трек' : 'Юнит ' + u.num} · ${u.level}</div>
      <h1>${esc(u.title)}</h1>
      <div class="steps">${stepsHtml}</div>
      <div id="unit-body"></div>`;
    const body = $('#unit-body');
    const nextBtn = (k) => {
      const i = STEPS.findIndex(([x]) => x === k);
      const nx = STEPS[i + 1];
      return nx ? `<a class="btn primary" href="#/unit/${u.id}/${nx[0]}" data-complete="${k}">Дальше: ${nx[1]} →</a>` : '';
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
          <button class="btn small ${inCards === u.words.length ? '' : 'primary'}" id="add-all" ${inCards === u.words.length ? 'disabled' : ''}>${inCards === u.words.length ? '✓ Все в карточках' : '+ Добавить все в карточки'}</button></div>
          <p class="muted small">Прослушайте каждое слово и повторите вслух. Потом добавьте их в карточки: дальше они будут приходить на повторение сами.</p>
          <div class="word-list">${u.words.map((w) => `
            <div class="word-item">
              <button class="icon-btn" data-speak="${esc(w[0])}" aria-label="Слушать">🔊</button>
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
          <a class="unit-row" href="#/read/${t.id}"><div class="unit-num">${S.textsRead[t.id] ? '✓' : '📖'}</div>
          <div class="body"><div class="title">${esc(t.title)}</div><div class="muted small">${t.text.split(/\s+/).length} слов</div></div></a>`).join('')}</div>
        <div class="row" style="margin-top:16px">${nextBtn('reading')}</div>`;
      wireComplete();
    } else if (tab === 'practice') {
      runExercises(body, shuffle(u.practice), {
        mode: 'practice',
        onFinish: (score) => { s.steps.practice = true; save(); return `<a class="btn primary" href="#/unit/${u.id}/test">Перейти к тесту →</a>`; }
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
          s.testBest = Math.max(s.testBest || 0, score);
          save();
          if (score >= PASS) {
            const nx = mainUnits[mainUnits.indexOf(u) + 1];
            const gm = units.find((x) => x.track === 'games' && !passed(x.id));
            return `<p>${wasPassed ? 'Тест пройден снова.' : 'Юнит пройден! 🎉'}</p>
              ${nx && u.track === 'main' ? `<a class="btn primary" href="#/unit/${nx.id}">Следующий юнит →</a>` : ''}
              ${!nx && u.track === 'main' ? `<p class="muted small" style="width:100%">Это последний юнит A1 на сайте. Попросите Claude добавить блок A2.</p>` : ''}
              ${u.id === 'a1-0' && gm ? `<a class="btn" href="#/unit/${gm.id}">Открылся игровой трек 🎮</a>` : ''}
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
        b.innerHTML = `<div class="row" style="margin:10px 0 16px"><button class="btn" id="play">🔊 Слушать</button><button class="btn ghost small" id="slow">🐢 Медленно</button></div>
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
      track('exercises');
      const e = item.e;
      const ans = displayAnswer(e);
      const fb = $('#ex-fb', root);
      fb.innerHTML = ok
        ? `<div class="feedback ok"><b>${typo ? 'Верно, но с опечаткой' : pick(['Верно!', 'Отлично!', 'Так держать!', 'Правильно!'])}</b>${typo ? `<div class="right">Правильно пишется: <b>${esc(typo)}</b></div>` : ''}</div>`
        : `<div class="feedback bad"><b>Не совсем.</b><div class="right">Правильный ответ: <b>${esc(ans)}</b></div></div>`;
      if (e.t === 'listen' || e.t === 'tr' || e.t === 'order') { const say = e.t === 'listen' ? e.say : ans; setTimeout(() => speak(say), 200); }
      if (!ok && mode === 'practice' && !retried.has(e)) { retried.add(e); queue.push({ e, retry: true }); }
      const acts = $('#ex-actions', root);
      acts.innerHTML = `<button class="btn primary" id="nxt">Дальше →</button>`;
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
  function renderLibrary() {
    const groups = units.filter(isUnlocked).map((u) => ({ u, texts: u.texts }));
    view().innerHTML = `
      <h1>Чтение</h1>
      <p class="muted">Нажимайте на слова, чтобы увидеть перевод и добавить их в карточки. Слова, которые уже в карточках, подчёркнуты.</p>
      <div class="card" style="margin:20px 0">
        <h3>Добавить свой текст</h3>
        <p class="muted small">Статья, диалог из игры, субтитры, текст песни для себя — вставьте и читайте с переводом.</p>
        <div class="stack">
          <input class="input" id="ut-title" placeholder="Название" style="font-size:16px">
          <textarea class="input" id="ut-text" placeholder="Вставьте английский текст"></textarea>
          <div><button class="btn primary" id="ut-add">Добавить</button></div>
        </div>
      </div>
      ${S.userTexts.length ? `<div class="eyebrow">Мои тексты</div><div class="stack" style="margin-bottom:24px">${S.userTexts.map((t) => textRow(t, true)).join('')}</div>` : ''}
      ${groups.map(({ u, texts }) => `<div class="eyebrow" style="margin-top:8px">${u.track === 'games' ? '🎮 ' : 'Юнит ' + u.num + ' · '}${esc(u.title)}</div>
        <div class="stack" style="margin-bottom:16px">${texts.map((t) => textRow(t)).join('')}</div>`).join('')}
      ${units.some((u) => !isUnlocked(u)) ? '<div class="soon">Новые тексты открываются вместе с юнитами.</div>' : ''}`;
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
  function textRow(t, user) {
    return `<a class="unit-row" href="#/read/${t.id}"><div class="unit-num">${S.textsRead[t.id] ? '✓' : '📖'}</div>
      <div class="body"><div class="title">${esc(t.title)}</div><div class="muted small">${t.text.split(/\s+/).length} слов${t.level ? ' · ' + t.level : ''}</div></div>
      ${user ? `<button class="icon-btn" data-del="${t.id}" title="Удалить">✕</button>` : ''}</a>`;
  }

  let readerSentences = [];
  function renderReader(id) {
    const t = allTexts().find((x) => x.id === id);
    if (!t) return renderLibrary();
    readerSentences = [];
    const paras = t.text.split(/\n+/).map((p) => p.trim()).filter(Boolean);
    let sid = 0;
    const html = paras.map((p) => {
      const sents = p.match(/[^.!?…]+[.!?…]*["')\]]*\s*/g) || [p];
      return '<p>' + sents.map((s) => {
        const i = sid++; readerSentences.push(s.trim());
        const inner = s.replace(/([A-Za-zÀ-ÿ][A-Za-zÀ-ÿ'’]*(?:-[A-Za-zÀ-ÿ]+)*)|([^A-Za-zÀ-ÿ]+)/g, (m, w, other) => {
          if (w) { const known = S.cards[EngLookup.clean(w)] || lookup(w).some((r) => S.cards[r.word]); return `<span class="w${known ? ' known' : ''}" data-s="${i}">${esc(w)}</span>`; }
          return esc(other);
        });
        return `<span class="s" data-sid="${i}">${inner}</span>`;
      }).join('') + '</p>';
    }).join('');
    const back = t.unit ? `#/unit/${t.unit.id}/reading` : '#/library';
    view().innerHTML = `
      <a href="${back}" class="small">← ${t.unit ? 'К уроку' : 'Все тексты'}</a>
      <h1 style="margin-top:14px">${esc(t.title)}</h1>
      <div class="reader-bar">
        <button class="btn small primary" id="rd-play">▶ Слушать</button>
        <button class="btn small" id="rd-stop" hidden>■ Стоп</button>
        <select class="input" id="rd-rate"><option value="0.7">0.7×</option><option value="0.85">0.85×</option><option value="1">1×</option></select>
        <span class="spacer"></span>
        <button class="btn small" id="rd-done">${S.textsRead[t.id] ? '✓ Прочитано' : 'Отметить прочитанным'}</button>
      </div>
      <div class="card reader-text" id="rd-text">${html}</div>
      <p class="muted small" style="margin-top:14px">Совет: сначала прочитайте без озвучки, нажимая на незнакомые слова. Потом включите звук и читайте вслух вместе с диктором. Чтобы повторить одну фразу, нажмите на любое слово в ней и выберите «🔊 Предложение».</p>`;
    const rate = $('#rd-rate'); rate.value = S.settings.rate <= 0.75 ? '0.7' : S.settings.rate >= 0.95 ? '1' : '0.85';
    let playing = false;
    const playFrom = (i) => {
      $$('.s.speaking').forEach((x) => x.classList.remove('speaking'));
      if (playing && i >= readerSentences.length && i > 0) { S.stats.listened++; save(); }
      if (!playing || i >= readerSentences.length) { stop(); return; }
      const el = $(`.s[data-sid="${i}"]`); if (el) { el.classList.add('speaking'); el.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      speak(readerSentences[i], { rate: +rate.value, onend: () => playFrom(i + 1) });
    };
    const stop = () => { playing = false; if (window.speechSynthesis) speechSynthesis.cancel(); $$('.s.speaking').forEach((x) => x.classList.remove('speaking')); $('#rd-play').hidden = false; $('#rd-stop').hidden = true; };
    $('#rd-play').addEventListener('click', () => { playing = true; $('#rd-play').hidden = true; $('#rd-stop').hidden = false; playFrom(0); });
    $('#rd-stop').addEventListener('click', stop);
    $('#rd-done').addEventListener('click', () => {
      if (!S.textsRead[t.id]) { S.textsRead[t.id] = today(); track('reads'); }
      if (t.unit && t.unit.texts.every((x) => S.textsRead[x.id])) unitState(t.unit.id).steps.reading = true;
      save(); $('#rd-done').textContent = '✓ Прочитано'; toast('Отмечено');
    });
    $('#rd-text').addEventListener('click', (ev) => {
      const w = ev.target.closest('.w'); if (!w) return;
      $$('.w.sel').forEach((x) => x.classList.remove('sel'));
      w.classList.add('sel');
      showWord(w, w.textContent, readerSentences[+w.dataset.s], t);
    });
  }

  function showWord(anchor, raw, sentence, t) {
    const pop = $('#popover');
    const res = lookup(raw);
    S.stats.lookups++; save();
    const base = res[0] ? res[0].word : EngLookup.clean(raw);
    const inCards = !!S.cards[base];
    const gt = (q) => 'https://translate.google.com/?sl=en&tl=ru&op=translate&text=' + encodeURIComponent(q);
    pop.innerHTML = `
      <div class="row" style="gap:10px"><div class="pw">${esc(raw)}</div><button class="icon-btn" id="pp-say">🔊</button><span class="spacer"></span><button class="icon-btn" id="pp-x">✕</button></div>
      ${res.length ? `<div class="tr">${esc(res[0].tr)}</div>${res[0].word !== EngLookup.clean(raw) ? `<div class="alt">форма слова <b>${esc(res[0].word)}</b></div>` : ''}${res.slice(1).map((r) => `<div class="alt">${esc(r.word)}: ${esc(r.tr)}</div>`).join('')}`
        : `<div class="alt" style="margin-top:6px">Этого слова пока нет во встроенном словаре. Посмотрите перевод по ссылке и сохраните сами:</div>
           <input class="input" id="pp-tr" placeholder="Ваш перевод" style="font-size:15px;padding:10px 12px;margin-top:8px">`}
      <div class="actions">
        ${inCards ? '<span class="pill ok">✓ в карточках</span>' : '<button class="btn small primary" id="pp-add">+ В карточки</button>'}
        <button class="btn small" id="pp-sent">🔊 Предложение</button>
        <a class="btn small ghost" target="_blank" rel="noopener" href="${gt(sentence || raw)}">Перевести фразу ↗</a>
      </div>`;
    pop.hidden = false;
    const r = anchor.getBoundingClientRect();
    const pw = Math.min(320, window.innerWidth - 24);
    let left = Math.min(Math.max(12, r.left + r.width / 2 - pw / 2), window.innerWidth - pw - 12);
    let top = r.bottom + 8;
    if (top + 220 > window.innerHeight) top = Math.max(12, r.top - 230);
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
    speak(raw);
    $('#pp-say').addEventListener('click', () => speak(raw));
    $('#pp-x').addEventListener('click', hidePopover);
    $('#pp-sent').addEventListener('click', () => speak(sentence || raw));
    const add = $('#pp-add');
    if (add) add.addEventListener('click', () => {
      const tr = res.length ? res[0].tr : ($('#pp-tr').value || '').trim();
      if (!tr) { toast('Впишите перевод'); $('#pp-tr').focus(); return; }
      const ex = (sentence || '').replace(new RegExp('\\b(' + raw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')\\b', 'i'), '**$1**');
      addCard(base, tr, ex, '', t ? 'text:' + t.id : '');
      save();
      $$('.w').forEach((w) => { if (EngLookup.clean(w.textContent) === base || lookup(w.textContent).some((x) => x.word === base)) w.classList.add('known'); });
      toast('Добавлено в карточки'); hidePopover();
    });
  }
  function hidePopover() { const p = $('#popover'); if (p) p.hidden = true; $$('.w.sel').forEach((x) => x.classList.remove('sel')); }
  document.addEventListener('click', (ev) => { if (!ev.target.closest('#popover') && !ev.target.closest('.w')) hidePopover(); });
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') hidePopover(); });

  // ───────────── Карточки ─────────────
  function renderCards() {
    const all = Object.values(S.cards);
    const due = dueCards().length;
    const nw = newAvailable();
    const q = (location.hash.split('?')[1] || '');
    view().innerHTML = `
      <h1>Карточки</h1>
      <p class="muted">Интервальные повторения: каждое слово приходит ровно тогда, когда вы начинаете его забывать. 10–15 минут в день.</p>
      <div class="card" style="margin:20px 0">
        <div class="row">
          <div><b style="font-size:22px">${due + nw}</b> <span class="muted">к повторению сейчас</span><div class="muted small">${due} повторить · ${nw} ${plural(nw, 'новая', 'новые', 'новых')} (лимит ${S.settings.newPerDay} в день)</div></div>
          <span class="spacer"></span>
          <a class="btn primary ${due + nw ? '' : 'disabled'}" href="#/review" ${due + nw ? '' : 'style="pointer-events:none;opacity:.45"'}>Начать повторение</a>
        </div>
      </div>
      <h2>Колоды по уровням</h2>
      <p class="muted small">${DECK.length} самых нужных слов от A1 до B2. Новые слова приходят по порядку: сначала A1, потом A2 и дальше, а внутри уровня — от самых частых в живой речи к более редким. Выключите уровень, если он пока не нужен.</p>
      <div class="stack" style="margin-bottom:28px">${LEVELS.map(deckRow).join('')}</div>
      <div class="card">
        <div class="row" style="margin-bottom:10px"><h3 style="margin:0">Все слова · ${all.length}</h3><span class="spacer"></span>
          <input class="input" id="cf" placeholder="Поиск" style="max-width:200px;padding:8px 12px;font-size:14px"></div>
        <div class="card" style="box-shadow:none;background:var(--surface-2);border:0;padding:14px;margin-bottom:12px">
          <div class="small" style="font-weight:600;margin-bottom:8px">Добавить слово вручную</div>
          <div class="row"><input class="input" id="nc-en" placeholder="english" style="flex:1;min-width:120px;font-size:15px;padding:10px"><input class="input" id="nc-ru" placeholder="перевод" style="flex:1;min-width:120px;font-size:15px;padding:10px"><button class="btn small primary" id="nc-add">Добавить</button></div>
        </div>
        <div class="word-list" id="clist"></div>
      </div>`;
    const listEl = $('#clist');
    const drawList = (f = '') => {
      const items = all.filter((c) => !f || c.en.toLowerCase().includes(f) || c.ru.toLowerCase().includes(f)).sort((a, b) => b.added - a.added);
      listEl.innerHTML = items.length ? items.slice(0, 300).map((c) => `
        <div class="word-item"><button class="icon-btn" data-speak="${esc(c.en)}">🔊</button>
          ${c.img ? `<img src="${esc(c.img)}" alt="" referrerpolicy="no-referrer" style="width:40px;height:40px;border-radius:10px;object-fit:cover;flex-shrink:0" onerror="this.remove()">` : ''}
          <div style="flex:1"><span class="w">${esc(c.en)}</span> — ${esc(c.ru)}<div class="ex">${c.state === 'new' ? 'новая' : c.state === 'learn' ? 'изучается' : 'следующее повторение через ' + fmtIvl(Math.max(0, c.due - Date.now()))}</div></div>
          <span class="pill ${c.ivl >= 21 ? 'ok' : c.state === 'new' ? '' : 'accent'}">${c.ivl >= 21 ? 'выучено' : c.state === 'new' ? 'новая' : 'в процессе'}</span>
          <button class="icon-btn" data-del="${esc(c.id)}" title="Удалить">✕</button></div>`).join('')
        : '<div class="empty"><div class="big">⧉</div>Слов пока нет. Добавьте их из урока или из текста.</div>';
      wireSay(listEl);
      $$('[data-del]', listEl).forEach((b) => b.addEventListener('click', () => { if (confirm('Удалить карточку?')) { delete S.cards[b.dataset.del]; tomb('card:' + b.dataset.del); save(); renderCards(); } }));
    };
    drawList();
    $$('[data-deck]').forEach((cb) => cb.addEventListener('change', () => { S.settings.decks = S.settings.decks || {}; S.settings.decks[cb.dataset.deck] = cb.checked; save(); renderCards(); }));
    $('#cf').addEventListener('input', (e) => drawList(e.target.value.toLowerCase().trim()));
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
  function renderDeck(lvl) {
    if (!LEVELS.includes(lvl)) return renderCards();
    const ws = DECK.filter((w) => w.lvl === lvl);
    let shown = 150;
    view().innerHTML = `
      <a href="#/cards" class="small">← Карточки</a>
      <h1 style="margin-top:14px">Колода ${lvl}</h1>
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
        return `<div class="word-item"><button class="icon-btn" data-speak="${esc(w.en)}">🔊</button>
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
      <div class="row"><a href="#/cards" class="small">← Карточки</a><span class="spacer"></span>
        <select class="input" id="rv-mode"><option value="en-ru">англ → рус</option><option value="ru-en">рус → англ</option><option value="mix">вперемешку</option></select></div>
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
        root.innerHTML = `<div class="card result"><div class="big">🎉</div><h2>На сегодня всё!</h2><p class="muted">Повторено карточек: ${doneCount}. Возвращайтесь завтра — слова придут сами.</p>
          <div class="row" style="justify-content:center"><a class="btn primary" href="#/">На главную</a></div></div>`;
        updateBadge(); return;
      }
      const id = queue[0];
      const c = S.cards[id];
      if (!c) { queue.shift(); return next(); }
      const m = S.settings.cardMode === 'mix' ? (Math.random() < 0.5 ? 'en-ru' : 'ru-en') : S.settings.cardMode;
      const exHtml = c.ex ? esc(c.ex).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>') : '';
      const exPlain = c.ex ? c.ex.replace(/\*\*/g, '') : '';
      const wantImg = S.settings.autoImg !== false && !c.noImg;
      const imgSlot = (c.img || wantImg) ? `<div class="assoc loading" id="fc-img"></div>` : '';
      const front = m === 'en-ru'
        ? `${imgSlot}<div class="front">${esc(c.en)}</div>${exHtml ? `<div class="ex">${exHtml}</div>` : ''}`
        : `${imgSlot}<div class="front" style="font-size:32px">${esc(c.ru)}</div>${c.exRu ? `<div class="ex">${esc(c.exRu)}</div>` : ''}<div class="muted small" style="margin-top:14px">Вспомните английское слово и скажите вслух</div>`;
      const q = encodeURIComponent(c.en);
      const tools = `<div class="img-tools">
          <a class="btn small" target="_blank" rel="noopener" href="https://www.google.com/search?tbm=isch&q=${q}">🖼 Google Картинки</a>
          <a class="btn small" target="_blank" rel="noopener" href="https://yandex.ru/images/search?text=${q}">🖼 Яндекс Картинки</a>
          <button class="btn small ghost" id="img-set">✎ Своя картинка</button>
        </div>
        <div class="img-form" id="img-form" hidden><input class="input" id="img-url" placeholder="Вставьте адрес картинки (ПКМ по картинке → «Копировать адрес»)" value="${esc(c.img || '')}"><button class="btn small primary" id="img-save">OK</button></div>`;
      const back = m === 'en-ru'
        ? `<div class="back">${esc(c.ru)}${c.exRu ? `<div class="exru">${esc(c.exRu)}</div>` : ''}${tools}</div>`
        : `<div class="back">${esc(c.en)}${exHtml ? `<div class="exru">${exHtml}</div>` : ''}${tools}</div>`;
      root.innerHTML = `<div class="card fc" id="fc">${front}<div id="fc-back" hidden>${back}</div>
        <div class="row" style="margin-top:18px"><button class="icon-btn" id="fc-say">🔊</button>${exPlain ? '<button class="btn small ghost" id="fc-ex">🔊 Пример</button>' : ''}</div></div>
        <div id="fc-actions" style="margin-top:16px"><button class="btn primary" style="width:100%" id="fc-show">Показать ответ <span class="kbd" style="color:#fff;border-color:rgba(255,255,255,.4)">пробел</span></button></div>`;
      if (m === 'en-ru') speak(c.en);
      const fillImg = (url) => {
        const slot = $('#fc-img'); if (!slot) return;
        if (!url) { slot.remove(); return; }
        slot.innerHTML = `<img src="${esc(url)}" alt="" referrerpolicy="no-referrer"><button class="assoc-x" title="Не показывать картинку для этого слова">✕</button>`;
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
      $('#rv').innerHTML = `<div class="card empty"><div class="big">✓</div>Сейчас повторять нечего. ${Object.keys(S.cards).length ? 'Следующие карточки придут позже.' : 'Добавьте слова из урока.'}</div>`;
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
      <div class="row"><h1 style="margin:0">Прогресс</h1><span class="spacer"></span><a class="btn small" href="#/achievements">🏆 Достижения</a><a class="btn small" href="#/settings">⚙︎ Настройки</a></div>
      <div class="grid-3" style="margin:20px 0">
        <div class="stat"><div class="chip-ico">🔥</div><b>${streak()}</b><span>дней подряд</span></div>
        <div class="stat"><div class="chip-ico">📅</div><b>${activeDays}</b><span>дней занятий</span></div>
        <div class="stat"><div class="chip-ico">📘</div><b>${passedN}/${mainUnits.length}</b><span>юнитов пройдено</span></div>
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
      flawlessPractice: S.stats.flawless ? 1 : 0
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
      el.innerHTML = `<div class="ach-icon ${t.cls}">${x.icon}</div><div><div class="tiny" style="opacity:.7">Достижение получено</div><b>${esc(x.title)}</b><div class="tiny"><span class="tier-${t.cls}">${t.name}</span> · ${pctOf(x)}% учеников</div></div>`;
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
    return `<div class="ach ${got ? 'got' : 'locked'}">
      <div class="ach-icon ${t.cls}">${secret ? '？' : a.icon}</div>
      <div style="flex:1;min-width:0">
        <div class="row" style="gap:8px"><b>${secret ? 'Секретное достижение' : esc(a.title)}</b></div>
        <div class="small muted">${secret ? 'Продолжайте заниматься, чтобы узнать' : esc(a.desc)}</div>
        ${prog}
        ${got ? `<div class="tiny muted" style="margin-top:4px">Получено ${new Date(got).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</div>` : ''}
      </div>
      <div class="ach-rar"><span class="tier-${t.cls}">${P}%</span><span class="tiny muted">${t.name}</span></div>
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
      <h1>Достижения</h1>
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
          <div class="small muted">${rarest ? `Самое редкое: ${rarest.icon} <b>${esc(rarest.title)}</b> (${pctOf(rarest)}%)` : 'Пока ни одного. Первое совсем близко!'}</div>
        </div>
      </div>
      <div class="row" style="margin-bottom:16px">
        <div class="seg">${[['all', 'Все'], ['got', 'Полученные'], ['todo', 'Не полученные']].map(([k, l]) => `<button data-f="${k}" class="${filter === k ? 'on' : ''}">${l}</button>`).join('')}</div>
        <span class="spacer"></span>
        <span class="tiny muted">${pctReal() ? 'Процент — реальная доля учеников сайта с этим достижением' : 'Процент — примерная доля учеников. Реальная статистика появится, когда учеников с аккаунтом станет 10+'}</span>
      </div>
      ${cats.map((cat) => { const items = all.filter((a) => a.cat === cat && pass(a)); if (!items.length) return ''; const g = all.filter((a) => a.cat === cat && S.ach[a.id]).length;
        return `<div class="eyebrow" style="margin-top:20px">${cat} · ${g}/${all.filter((a) => a.cat === cat).length}</div><div class="ach-list">${items.map((a) => achCard(a, c)).join('')}</div>`; }).join('')}`;
    $$('[data-f]').forEach((b) => b.addEventListener('click', () => { try { sessionStorage.setItem('achFilter', b.dataset.f); } catch (e) {} renderAch(); }));
  }
  function nearAch(n = 3) {
    const c = achCtx();
    return ACH.list.filter((a) => !S.ach[a.id] && !a.hidden && a.need > 1)
      .map((a) => ({ a, p: Math.min(1, a.val(c) / a.need) })).filter((x) => x.p > 0)
      .sort((x, y) => y.p - x.p).slice(0, n);
  }

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
  const eye = (id) => `<button type="button" class="pw-eye" data-eye="${id}" aria-label="Показать пароль">👁</button>`;
  function renderAuth() {
    const ev = window.Cloud && Cloud.takeAuthEvent ? Cloud.takeAuthEvent() : null;
    if (ev === 'recovery') authMode = 'reset';
    if (ev === 'confirmed') setTimeout(() => toast('Почта подтверждена — вы вошли'), 300);
    const linkErr = ev && ev.startsWith('link-error:') ? ev.slice(11) : '';
    if (!cloudOn()) {
      view().innerHTML = `<div class="auth-wrap"><div class="card auth-card"><div class="auth-ico">☁︎</div><h1>Аккаунт</h1><p class="muted">Облако сейчас недоступно — проверьте интернет и обновите страницу. Всё, что вы делаете, продолжает сохраняться в этом браузере.</p></div></div>`;
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
      body = `<div class="auth-state"><div class="auth-big">📬</div><h2>Проверьте почту</h2>
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
        <p class="tiny muted auth-foot"><a href="javascript:void 0" data-mode="in">← Назад ко входу</a></p></form>`;
    } else if (authMode === 'forgot-sent') {
      body = `<div class="auth-state"><div class="auth-big">🔑</div><h2>Письмо отправлено</h2>
        <p class="muted">Ссылка для нового пароля ушла на <b>${esc(authEmail)}</b>. Откройте её на этом устройстве.</p>
        <p class="tiny muted auth-foot"><a href="javascript:void 0" data-mode="in">← Назад ко входу</a></p></div>`;
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
          ${titles[0] ? `<div class="auth-ico">☁︎</div><h1>${titles[0]}</h1>${titles[1] ? `<p class="muted auth-sub">${titles[1]}</p>` : ''}` : ''}
          ${linkErr ? `<div class="auth-err show" style="margin-bottom:12px">Ссылка из письма не сработала: ${esc(linkErr)}. Запросите новую.</div>` : ''}
          ${tabs}${body}
        </div>
        ${authMode === 'up' || authMode === 'in' ? `
        <div class="auth-perks">
          <div><span>🔄</span><b>Одно обучение на всех устройствах</b><small>Начали на Mac — продолжили в метро с iPhone</small></div>
          <div><span>🛟</span><b>Прогресс не потеряется</b><small>Даже если очистить браузер или сменить телефон</small></div>
          <div><span>🏆</span><b>Настоящая редкость достижений</b><small>Сравнение с другими учениками</small></div>
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
      try { await Cloud.resendConfirm(authEmail); busy(rs, false); rs.textContent = '✓ Письмо отправлено ещё раз'; rs.disabled = true; setTimeout(() => { rs.disabled = false; rs.textContent = 'Отправить письмо ещё раз'; }, 60000); }
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
            <div class="small ${st.lastError ? '' : 'muted'}" style="${st.lastError ? 'color:var(--bad)' : ''}">${st.lastError ? '⚠︎ Не удалось синхронизировать' : st.pushing || st.pulling ? '⟳ Синхронизация…' : '☁︎ Всё сохранено в облаке' + (st.lastSync ? ' · ' + st.lastSync.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }) : '')}</div></div></div>
          ${st.lastError ? `<div class="auth-err show" style="margin-top:14px">${esc(authErr(st.lastError))} Прогресс в безопасности в этом браузере и отправится, когда связь вернётся.</div>` : ''}
          <div class="grid-3 acc-stats"><div><b>${cards}</b><span>слов</span></div><div><b>${days}</b><span>${plural(days, 'день', 'дня', 'дней')}</span></div><div><b>${ach}</b><span>достижений</span></div></div>
          <p class="small muted">Войдите с этой почтой на iPhone или другом компьютере — прогресс подтянется автоматически. Синхронизация идёт сама, кнопка ниже нужна только если хочется обновить прямо сейчас.</p>
          <div class="acc-actions">
            <button class="btn" id="acc-sync">⟳ Синхронизировать</button>
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
        ? `<a class="acc-row" href="#/account"><div class="avatar sm">${esc(((st.user.email || '?')[0]).toUpperCase())}</div><div style="flex:1;min-width:0"><b>${esc(st.user.email || '')}</b><div class="small muted">${st.lastError ? 'Ошибка синхронизации' : '☁︎ Синхронизировано'}</div></div><span class="muted">→</span></a>`
        : `<a class="acc-row" href="#/account"><div class="avatar sm off">☁︎</div><div style="flex:1"><b>Войти или создать аккаунт</b><div class="small muted">Чтобы прогресс был на всех устройствах</div></div><span class="muted">→</span></a>`;
    }
    const nav = $('#nav-account'); if (nav) {
      const st = cloudOn() ? Cloud.status() : {};
      nav.innerHTML = st.user
        ? `<span class="avatar xs">${esc(((st.user.email || '?')[0]).toUpperCase())}</span><span>${st.lastError ? 'Нет связи' : 'Аккаунт'}</span>`
        : `<span class="ico">☁︎</span><span>Войти</span>`;
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
          <label class="field">Голос
            <select class="input" id="st-voice"><option value="">Автоматически</option>${voices.map((v) => `<option value="${esc(v.name)}" ${v.name === S.settings.voice ? 'selected' : ''}>${esc(v.name)} (${v.lang})</option>`).join('')}</select></label>
          <label class="field">Скорость
            <select class="input" id="st-rate">${[0.7, 0.8, 0.9, 1].map((r) => `<option value="${r}" ${r === S.settings.rate ? 'selected' : ''}>${r}×</option>`).join('')}</select></label>
          <div><button class="btn small" id="st-test">🔊 Проверить: Hello! Nice to meet you.</button></div>
          <p class="muted small" style="margin:0">На Mac самые живые голоса — Samantha, Ava, Zoe (можно скачать в Системных настройках → Универсальный доступ → Устный контент).</p>
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
        S = Object.assign(defaults(), x);
        S.settings = Object.assign(defaults().settings, S.settings);
        S.stats = Object.assign({ lookups: 0, listened: 0, exStreak: 0, exStreakBest: 0, perfect: {}, firstTryUnits: {}, attempts: {}, ruEn: 0, cleanSessions: 0, listenRight: 0 }, S.stats || {});
        S.known = S.known || {}; S.ach = S.ach || {}; S.imgCache = S.imgCache || {};
        settingsSnap = JSON.stringify(S.settings);
        try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) {}
        updateBadge();
        // не сбиваем повторение, упражнения и чтение на середине
        if (!/^#\/(review|unit\/[^/]+\/(practice|test)|read\/)/.test(location.hash)) route();
      }
    });
    Cloud.onChange(() => { renderAccount(); if (location.hash === '#/achievements') renderAch(); if (location.hash === '' || location.hash === '#/') { let hidden = false; try { hidden = !!localStorage.getItem('ep.hideAuthBanner'); } catch (e) {} if (!!$('.auth-banner') !== (!Cloud.status().user && !hidden)) renderToday(); } });
    const ev0 = Cloud.peekAuthEvent && Cloud.peekAuthEvent();
    if (ev0 === 'recovery' || (ev0 && ev0.startsWith('link-error'))) setTimeout(() => { location.hash = '#/account'; }, 50);
    else if (ev0 === 'confirmed') setTimeout(() => { Cloud.takeAuthEvent(); toast('Почта подтверждена — вы вошли в аккаунт'); location.hash = '#/'; }, 800);
  }
  updateBadge();
  route();
  setTimeout(checkAch, 600);

})();
