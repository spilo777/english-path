/* Синхронизация с Supabase: аккаунт, слияние прогресса между устройствами, реальная редкость достижений.
   Сайт работает и без неё: всё хранится локально, облако — надстройка. */
(function () {
  'use strict';
  const cfg = window.EP_CONFIG || {};
  const enabled = !!(cfg.supabaseUrl && cfg.supabaseKey && window.supabase && window.supabase.createClient);
  let sb = null, app = null, user = null;
  let pushTimer = null, pushing = false, lastSync = null, lastError = null, pulling = false;
  const listeners = new Set();
  // что пришло по ссылке из письма (Supabase кладёт это в #hash)
  const initialHash = location.hash || '';
  let authEvent = /type=recovery/.test(initialHash) ? 'recovery' : /type=(signup|email|magiclink)/.test(initialHash) ? 'confirmed' : /error_description=/.test(initialHash) ? 'link-error:' + decodeURIComponent((initialHash.match(/error_description=([^&]+)/) || [])[1] || '').replace(/\+/g, ' ') : null;
  const redirectUrl = () => (/^https?:/.test(location.protocol) ? location.origin + location.pathname : undefined);
  const emit = () => listeners.forEach((f) => { try { f(); } catch (e) {} });

  if (enabled) {
    sb = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseKey, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: 'englishpath.auth' }
    });
  }

  // ───── слияние двух состояний (локальное + облачное) ─────
  const num = (x) => (typeof x === 'number' && isFinite(x) ? x : 0);
  function merge(a, b) {
    a = a || {}; b = b || {};
    const out = Object.assign({}, a);
    // удаления (надгробия): id → время удаления
    const deleted = Object.assign({}, a.deleted || {});
    Object.entries(b.deleted || {}).forEach(([k, t]) => { deleted[k] = Math.max(num(deleted[k]), num(t)); });
    out.deleted = deleted;
    // карточки: побеждает изменённая позже
    const cards = {};
    const ids = new Set([...Object.keys(a.cards || {}), ...Object.keys(b.cards || {})]);
    ids.forEach((id) => {
      const x = (a.cards || {})[id], y = (b.cards || {})[id];
      let c = !x ? y : !y ? x : (num(x.mod) !== num(y.mod) ? (num(x.mod) > num(y.mod) ? x : y) : (num(x.reps) >= num(y.reps) ? x : y));
      if (c && deleted['card:' + id] && deleted['card:' + id] >= num(c.mod || c.added)) c = null;
      if (c) cards[id] = c;
    });
    out.cards = cards;
    // юниты: шаги объединяем, лучший результат теста — максимум
    const units = {};
    new Set([...Object.keys(a.units || {}), ...Object.keys(b.units || {})]).forEach((id) => {
      const x = (a.units || {})[id] || {}, y = (b.units || {})[id] || {};
      const tb = [x.testBest, y.testBest].filter((v) => v != null);
      units[id] = { steps: Object.assign({}, x.steps || {}, y.steps || {}), testBest: tb.length ? Math.max(...tb) : null };
    });
    out.units = units;
    out.textsRead = Object.assign({}, b.textsRead || {}, a.textsRead || {});
    // свои тексты: объединяем по id, минус удалённые
    const texts = {};
    [...(b.userTexts || []), ...(a.userTexts || [])].forEach((t) => { if (t && t.id && !deleted['text:' + t.id]) texts[t.id] = t; });
    out.userTexts = Object.values(texts).sort((x, y) => String(y.id).localeCompare(String(x.id)));
    // активность по дням: максимум по каждому полю
    const act = {};
    new Set([...Object.keys(a.activity || {}), ...Object.keys(b.activity || {})]).forEach((d) => {
      const x = (a.activity || {})[d] || {}, y = (b.activity || {})[d] || {};
      act[d] = {};
      new Set([...Object.keys(x), ...Object.keys(y)]).forEach((k) => { act[d][k] = Math.max(num(x[k]), num(y[k])); });
    });
    out.activity = act;
    // лимит новых слов на сегодня
    const na = a.newToday || {}, nb = b.newToday || {};
    out.newToday = na.date === nb.date ? { date: na.date, count: Math.max(num(na.count), num(nb.count)) } : (String(na.date) > String(nb.date) ? na : nb);
    // «знаю»: объединение, минус снятые
    const known = Object.assign({}, b.known || {}, a.known || {});
    Object.keys(known).forEach((id) => { if (deleted['known:' + id] && deleted['known:' + id] >= num(known[id] === true ? 0 : known[id])) delete known[id]; });
    out.known = known;
    // достижения: самая ранняя дата получения
    const ach = Object.assign({}, b.ach || {});
    Object.entries(a.ach || {}).forEach(([k, t]) => { ach[k] = ach[k] ? Math.min(num(ach[k]), num(t)) : t; });
    out.ach = ach;
    // счётчики
    const sa = a.stats || {}, sbb = b.stats || {}, st = {};
    new Set([...Object.keys(sa), ...Object.keys(sbb)]).forEach((k) => {
      const x = sa[k], y = sbb[k];
      if (x && typeof x === 'object' || y && typeof y === 'object') {
        const o = Object.assign({}, y || {}, x || {});
        Object.keys(o).forEach((kk) => { if (typeof (x || {})[kk] === 'number' || typeof (y || {})[kk] === 'number') o[kk] = Math.max(num((x || {})[kk]), num((y || {})[kk])); });
        st[k] = o;
      } else st[k] = Math.max(num(x), num(y));
    });
    st.exStreak = num(sa.exStreak); // текущая серия — локальная
    out.stats = st;
    // настройки: более свежие
    out.settings = num(a.settingsMod) >= num(b.settingsMod) ? a.settings : b.settings;
    out.settingsMod = Math.max(num(a.settingsMod), num(b.settingsMod));
    out.imgCache = Object.assign({}, b.imgCache || {}, a.imgCache || {});
    const quiz = Object.assign({}, b.quiz || {});
    Object.entries(a.quiz || {}).forEach(([k, v]) => { quiz[k] = Math.max(num(quiz[k]), num(v)); });
    out.quiz = quiz;
    return out;
  }

  function payload(S) {
    const p = Object.assign({}, S);
    delete p.imgCache; // кеш картинок у каждого устройства свой
    return p;
  }

  // ───── операции с облаком ─────
  async function pull() {
    if (!sb || !user || pulling) return;
    pulling = true;
    try {
      const { data, error } = await sb.from('progress').select('state, updated_at').eq('user_id', user.id).maybeSingle();
      if (error) throw error;
      if (data && data.state) {
        const merged = merge(app.get(), data.state);
        app.replace(merged);
      }
      await push(true);
      lastError = null;
    } catch (e) { lastError = e.message || String(e); }
    pulling = false;
    emit();
  }

  async function push(force) {
    if (!sb || !user) return;
    if (pushing && !force) { queuePush(); return; }
    pushing = true;
    try {
      const S = app.get();
      const { error } = await sb.from('progress').upsert({ user_id: user.id, state: payload(S), device: deviceName() }, { onConflict: 'user_id' });
      if (error) throw error;
      // достижения — отдельной таблицей для статистики редкости
      const rows = Object.entries(S.ach || {}).map(([ach_id, t]) => ({ user_id: user.id, ach_id, unlocked_at: new Date(num(t) || Date.now()).toISOString() }));
      if (rows.length) {
        const r = await sb.from('user_achievements').upsert(rows, { onConflict: 'user_id,ach_id', ignoreDuplicates: true });
        if (r.error) throw r.error;
      }
      lastSync = new Date(); lastError = null;
    } catch (e) { lastError = e.message || String(e); }
    pushing = false;
    emit();
  }

  function queuePush() {
    if (!sb || !user) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(() => push(), 3000);
  }

  function deviceName() {
    const ua = navigator.userAgent;
    if (/iPhone/.test(ua)) return 'iPhone';
    if (/iPad/.test(ua)) return 'iPad';
    if (/Android/.test(ua)) return 'Android';
    if (/Mac/.test(ua)) return 'Mac';
    if (/Windows/.test(ua)) return 'Windows';
    return 'Browser';
  }

  // ───── редкость достижений ─────
  let rarity = null, rarityAt = 0;
  async function loadRarity() {
    if (!sb || !user) return null;
    if (rarity && Date.now() - rarityAt < 10 * 60000) return rarity;
    try {
      const { data, error } = await sb.rpc('achievement_stats');
      if (error) throw error;
      const total = data && data.length ? Number(data[0].total_users) : 0;
      const map = {};
      (data || []).forEach((r) => { map[r.ach_id] = Number(r.holders); });
      rarity = { total, map }; rarityAt = Date.now();
      emit();
    } catch (e) { /* нет сети — остаются оценки */ }
    return rarity;
  }
  // реальный процент, если учеников достаточно, иначе null
  function realPct(achId) {
    if (!rarity || rarity.total < (cfg.minUsersForRarity || 10)) return null;
    return Math.round(((rarity.map[achId] || 0) / rarity.total) * 1000) / 10;
  }

  // ───── аккаунт ─────
  async function signUp(email, password) {
    const { data, error } = await sb.auth.signUp({ email, password, options: { emailRedirectTo: redirectUrl() } });
    if (error) throw error;
    return { needsConfirm: !data.session };
  }
  async function signIn(email, password) {
    const { error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }
  async function signOut() { await push(true); await sb.auth.signOut(); }
  async function resetPassword(email) {
    const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: redirectUrl() });
    if (error) throw error;
  }
  async function resendConfirm(email) {
    const { error } = await sb.auth.resend({ type: 'signup', email, options: { emailRedirectTo: redirectUrl() } });
    if (error) throw error;
  }
  async function updatePassword(password) {
    const { error } = await sb.auth.updateUser({ password });
    if (error) throw error;
  }

  function init(api) {
    app = api;
    if (!sb) return;
    sb.auth.getSession().then(({ data }) => {
      user = data.session ? data.session.user : null;
      emit();
      if (user) { pull(); loadRarity(); }
    });
    sb.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY') authEvent = 'recovery';
      const was = user && user.id;
      user = session ? session.user : null;
      if (user && user.id !== was) { pull(); loadRarity(); }
      emit();
    });
    document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && user) pull(); else if (user) push(); });
    window.addEventListener('online', () => { if (user) pull(); });
  }

  // ───── перевод через Яндекс (edge-функция translate, только для вошедших) ─────
  let yaOff = false;
  const yaCache = {};
  async function yandex(q, mode) {
    if (!sb || !user || yaOff) return null;
    const k = (mode || '') + ':' + q.toLowerCase();
    if (k in yaCache) return yaCache[k];
    try {
      const { data, error } = await sb.functions.invoke('translate', { body: { q, mode } });
      if (error) {
        const st = error.context && error.context.status;
        if (st === 501) yaOff = true;           // ключи ещё не добавлены
        if (st === 404) yaCache[k] = null;
        return null;
      }
      yaCache[k] = data || null;
      return yaCache[k];
    } catch (e) { return null; }
  }

  window.Cloud = {
    yandex, yandexReady: () => !!(sb && user && !yaOff),
    enabled, init, merge, pull, push, queuePush, signIn, signUp, signOut, resetPassword, resendConfirm, updatePassword, loadRarity, realPct,
    takeAuthEvent: () => { const e = authEvent; authEvent = null; return e; },
    peekAuthEvent: () => authEvent,
    user: () => user,
    status: () => ({ enabled, user, lastSync, lastError, pushing, pulling }),
    onChange: (f) => listeners.add(f)
  };
})();
