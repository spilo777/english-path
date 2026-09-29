// Синхронизация с Supabase: аккаунт, слияние прогресса между устройствами, реальная редкость достижений.
// Сайт работает и без неё: всё хранится локально, облако — надстройка.
// Клиент supabase-js берётся из window.supabase (UMD-скрипт из CDN, может загрузиться позже модуля).
import { useSyncExternalStore } from 'react';
import { getState, onSave, replaceState } from './store';
import type { Card, DayActivity, Progress, UserText } from './types';

// Ключ publishable/anon — публичный: доступ к данным защищён правилами RLS в базе
export const CLOUD_CONFIG = {
  supabaseUrl: 'https://rxpmzsresfuevebkirsk.supabase.co',
  supabaseKey: 'sb_publishable_wIw_PhBUps-e0z3QlMBCIw_t3yiwJZD',
  minUsersForRarity: 10, // с какого числа учеников показывать реальную редкость достижений
};

// ───────── минимальные типы используемой части supabase-js ─────────
interface SbError { message: string; context?: { status?: number } }
export interface CloudUser { id: string; email?: string }
interface SbSession { user: CloudUser }
type SbRes<T = unknown> = { data: T; error: SbError | null };
interface SbTable {
  select(cols: string): { eq(col: string, v: string): { maybeSingle(): PromiseLike<SbRes<unknown>> } };
  upsert(rows: object | object[], opts: { onConflict: string; ignoreDuplicates?: boolean }): PromiseLike<{ error: SbError | null }>;
}
interface SbAuth {
  getSession(): Promise<{ data: { session: SbSession | null } }>;
  onAuthStateChange(cb: (event: string, session: SbSession | null) => void): unknown;
  signUp(a: { email: string; password: string; options?: { emailRedirectTo?: string } }): Promise<SbRes<{ session: SbSession | null }>>;
  signInWithPassword(a: { email: string; password: string }): Promise<{ error: SbError | null }>;
  signOut(): Promise<{ error: SbError | null }>;
  resetPasswordForEmail(email: string, opts: { redirectTo?: string }): Promise<{ error: SbError | null }>;
  resend(a: { type: 'signup'; email: string; options?: { emailRedirectTo?: string } }): Promise<{ error: SbError | null }>;
  updateUser(a: { password: string }): Promise<{ error: SbError | null }>;
}
interface SbClient {
  auth: SbAuth;
  from(table: string): SbTable;
  rpc(fn: string): PromiseLike<SbRes<unknown>>;
  functions: { invoke(name: string, opts: { body: unknown }): Promise<SbRes<unknown>> };
}
interface SbLib { createClient(url: string, key: string, opts: object): SbClient }

const sbLib = (): SbLib | null => {
  const w = window as unknown as { supabase?: SbLib };
  return w.supabase && typeof w.supabase.createClient === 'function' ? w.supabase : null;
};

// ───────── состояние модуля ─────────
let sb: SbClient | null = null;
let user: CloudUser | null = null;
let pushTimer: ReturnType<typeof setTimeout> | undefined;
let pushing = false, pulling = false;
let lastSync: Date | null = null, lastError: string | null = null;
let inited = false;
const listeners = new Set<() => void>();

export interface CloudStatus { enabled: boolean; user: CloudUser | null; lastSync: Date | null; lastError: string | null; pushing: boolean; pulling: boolean }
let snap: CloudStatus = mkStatus();
function mkStatus(): CloudStatus { return { enabled: !!sb, user, lastSync, lastError, pushing, pulling }; }
const emit = () => { snap = mkStatus(); listeners.forEach((f) => { try { f(); } catch { /* подписчик упал — не мешаем остальным */ } }); };

// что пришло по ссылке из письма (Supabase кладёт это в #hash)
const initialHash = typeof location !== 'undefined' ? location.hash || '' : '';
let authEvent: string | null = /type=recovery/.test(initialHash) ? 'recovery'
  : /type=(signup|email|magiclink)/.test(initialHash) ? 'confirmed'
    : /error_description=/.test(initialHash) ? 'link-error:' + decodeURIComponent((initialHash.match(/error_description=([^&]+)/) || [])[1] || '').replace(/\+/g, ' ')
      : null;
const redirectUrl = () => (/^https?:/.test(location.protocol) ? location.origin + location.pathname : undefined);

/** Клиент создаётся лениво: UMD-скрипт может появиться позже */
function client(): SbClient | null {
  if (sb) return sb;
  const lib = sbLib();
  if (!lib) return null;
  sb = lib.createClient(CLOUD_CONFIG.supabaseUrl, CLOUD_CONFIG.supabaseKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, storageKey: 'englishpath.auth' },
  });
  return sb;
}
const need = (): SbClient => { const c = client(); if (!c) throw new Error('Облако недоступно — проверьте интернет'); return c; };
const errMsg = (e: unknown) => (e && typeof e === 'object' && 'message' in e ? String((e as { message: unknown }).message) : String(e));

// ───────── слияние двух состояний (локальное + облачное) ─────────
const num = (x: unknown): number => (typeof x === 'number' && isFinite(x) ? x : 0);
type Obj = Record<string, unknown>;
const obj = (x: unknown): Obj => (x && typeof x === 'object' && !Array.isArray(x) ? (x as Obj) : {});

/** Слияние прогресса: a — локальное (приоритет для «своих» полей), b — облачное */
export function merge(a0: Partial<Progress> | null | undefined, b0: Partial<Progress> | null | undefined): Progress {
  const a = (a0 || {}) as Partial<Progress>, b = (b0 || {}) as Partial<Progress>;
  const out = Object.assign({}, a) as Progress;
  // удаления (надгробия): id → время удаления
  const deleted: Record<string, number> = Object.assign({}, a.deleted || {});
  Object.entries(b.deleted || {}).forEach(([k, t]) => { deleted[k] = Math.max(num(deleted[k]), num(t)); });
  out.deleted = deleted;
  // карточки: побеждает изменённая позже
  const ca = a.cards || {}, cb = b.cards || {};
  const cards: Record<string, Card> = {};
  new Set([...Object.keys(ca), ...Object.keys(cb)]).forEach((id) => {
    const x = ca[id], y = cb[id];
    let c: Card | null = !x ? y : !y ? x : (num(x.mod) !== num(y.mod) ? (num(x.mod) > num(y.mod) ? x : y) : (num(x.reps) >= num(y.reps) ? x : y));
    const del = deleted['card:' + id];
    if (c && del && del >= num(c.mod || c.added)) c = null;
    if (c) cards[id] = c;
  });
  out.cards = cards;
  // юниты: шаги объединяем, лучший результат теста — максимум
  const ua = a.units || {}, ub = b.units || {};
  const units: Progress['units'] = {};
  new Set([...Object.keys(ua), ...Object.keys(ub)]).forEach((id) => {
    const x = ua[id] || { steps: {}, testBest: null }, y = ub[id] || { steps: {}, testBest: null };
    const tb = [x.testBest, y.testBest].filter((v): v is number => v != null);
    units[id] = { steps: Object.assign({}, x.steps || {}, y.steps || {}), testBest: tb.length ? Math.max(...tb) : null };
  });
  out.units = units;
  out.textsRead = Object.assign({}, b.textsRead || {}, a.textsRead || {});
  // свои тексты: объединяем по id, минус удалённые
  const texts: Record<string, UserText> = {};
  [...(b.userTexts || []), ...(a.userTexts || [])].forEach((t) => { if (t && t.id && !deleted['text:' + t.id]) texts[t.id] = t; });
  out.userTexts = Object.values(texts).sort((x, y) => String(y.id).localeCompare(String(x.id)));
  // активность по дням: максимум по каждому полю
  const aa = a.activity || {}, ab = b.activity || {};
  const act: Record<string, DayActivity> = {};
  new Set([...Object.keys(aa), ...Object.keys(ab)]).forEach((d) => {
    const x: Obj = aa[d] || {}, y: Obj = ab[d] || {};
    const day: Record<string, number> = {};
    new Set([...Object.keys(x), ...Object.keys(y)]).forEach((k) => { day[k] = Math.max(num(x[k]), num(y[k])); });
    act[d] = day as DayActivity;
  });
  out.activity = act;
  // лимит новых слов на сегодня
  const na = a.newToday || { date: '', count: 0 }, nb = b.newToday || { date: '', count: 0 };
  out.newToday = na.date === nb.date ? { date: na.date, count: Math.max(num(na.count), num(nb.count)) } : (String(na.date) > String(nb.date) ? na : nb);
  // «знаю»: объединение, минус снятые (в старых данных значение могло быть true)
  const known: Record<string, number> = Object.assign({}, b.known || {}, a.known || {});
  Object.keys(known).forEach((id) => {
    const del = deleted['known:' + id];
    const v: unknown = known[id];
    if (del && del >= num(v === true ? 0 : v)) delete known[id];
  });
  out.known = known;
  // достижения: самая ранняя дата получения
  const ach: Record<string, number> = Object.assign({}, b.ach || {});
  Object.entries(a.ach || {}).forEach(([k, t]) => { ach[k] = ach[k] ? Math.min(num(ach[k]), num(t)) : t; });
  out.ach = ach;
  // счётчики: числа — максимум, вложенные объекты — по ключам
  const sa: Obj = a.stats || {}, sbb: Obj = b.stats || {};
  const st: Obj = {};
  new Set([...Object.keys(sa), ...Object.keys(sbb)]).forEach((k) => {
    const x = sa[k], y = sbb[k];
    if ((x && typeof x === 'object') || (y && typeof y === 'object')) {
      const ox = obj(x), oy = obj(y);
      const o: Obj = Object.assign({}, oy, ox);
      Object.keys(o).forEach((kk) => { if (typeof ox[kk] === 'number' || typeof oy[kk] === 'number') o[kk] = Math.max(num(ox[kk]), num(oy[kk])); });
      st[k] = o;
    } else st[k] = Math.max(num(x), num(y));
  });
  st.exStreak = num(sa.exStreak); // текущая серия — локальная
  out.stats = st;
  // настройки: более свежие
  out.settings = (num(a.settingsMod) >= num(b.settingsMod) ? a.settings : b.settings) as Progress['settings'];
  out.settingsMod = Math.max(num(a.settingsMod), num(b.settingsMod));
  out.imgCache = Object.assign({}, b.imgCache || {}, a.imgCache || {});
  const quiz: Record<string, number> = Object.assign({}, b.quiz || {});
  Object.entries(a.quiz || {}).forEach(([k, v]) => { quiz[k] = Math.max(num(quiz[k]), num(v)); });
  out.quiz = quiz;
  return out;
}

/** Что отправляем в облако: кеш картинок у каждого устройства свой */
function payload(s: Progress): Omit<Progress, 'imgCache'> {
  const p: Partial<Progress> = Object.assign({}, s);
  delete p.imgCache;
  return p as Omit<Progress, 'imgCache'>;
}
const strip = (s: Progress) => JSON.stringify(payload(s));

// ───────── операции с облаком ─────────
async function pull(): Promise<void> {
  const c = client();
  if (!c || !user || pulling) return;
  pulling = true; emit();
  try {
    const { data, error } = await c.from('progress').select('state, updated_at').eq('user_id', user.id).maybeSingle();
    if (error) throw error;
    const remote = obj(data).state;
    if (remote && typeof remote === 'object') {
      const cur = getState();
      const merged = merge(cur, remote as Partial<Progress>);
      // если ничего не поменялось — ничего не трогаем (не перерисовываем страницы)
      if (strip(merged) !== strip(cur)) replaceState(merged);
    }
    await push(true);
    lastError = null;
  } catch (e) { lastError = errMsg(e); }
  pulling = false;
  emit();
}

async function push(force = false): Promise<void> {
  const c = client();
  if (!c || !user) return;
  if (pushing && !force) { queuePush(); return; }
  pushing = true;
  try {
    const s = getState();
    const { error } = await c.from('progress').upsert({ user_id: user.id, state: payload(s), device: deviceName() }, { onConflict: 'user_id' });
    if (error) throw error;
    // достижения — отдельной таблицей для статистики редкости
    const uid = user.id;
    const rows = Object.entries(s.ach || {}).map(([ach_id, t]) => ({ user_id: uid, ach_id, unlocked_at: new Date(num(t) || Date.now()).toISOString() }));
    if (rows.length) {
      const r = await c.from('user_achievements').upsert(rows, { onConflict: 'user_id,ach_id', ignoreDuplicates: true });
      if (r.error) throw r.error;
    }
    lastSync = new Date(); lastError = null;
  } catch (e) { lastError = errMsg(e); }
  pushing = false;
  emit();
}

function queuePush(): void {
  if (!sb || !user) return;
  clearTimeout(pushTimer);
  pushTimer = setTimeout(() => { void push(); }, 3000);
}

function deviceName(): string {
  const ua = navigator.userAgent;
  if (/iPhone/.test(ua)) return 'iPhone';
  if (/iPad/.test(ua)) return 'iPad';
  if (/Android/.test(ua)) return 'Android';
  if (/Mac/.test(ua)) return 'Mac';
  if (/Windows/.test(ua)) return 'Windows';
  return 'Browser';
}

// ───────── редкость достижений ─────────
let rarity: { total: number; map: Record<string, number> } | null = null;
let rarityAt = 0;
async function loadRarity(): Promise<void> {
  const c = client();
  if (!c || !user) return;
  if (rarity && Date.now() - rarityAt < 10 * 60000) return;
  try {
    const { data, error } = await c.rpc('achievement_stats');
    if (error) throw error;
    const rows = Array.isArray(data) ? data.map(obj) : [];
    const total = rows.length ? Number(rows[0].total_users) || 0 : 0;
    const map: Record<string, number> = {};
    rows.forEach((r) => { map[String(r.ach_id)] = Number(r.holders) || 0; });
    rarity = { total, map }; rarityAt = Date.now();
    emit();
  } catch { /* нет сети — остаются оценки */ }
}
/** Реальный процент учеников с достижением, если учеников достаточно, иначе null */
function realPct(achId: string): number | null {
  if (!rarity || rarity.total < CLOUD_CONFIG.minUsersForRarity) return null;
  return Math.round(((rarity.map[achId] || 0) / rarity.total) * 1000) / 10;
}

// ───────── аккаунт ─────────
async function signUp(email: string, password: string): Promise<{ needsConfirm: boolean }> {
  const { data, error } = await need().auth.signUp({ email, password, options: { emailRedirectTo: redirectUrl() } });
  if (error) throw error;
  return { needsConfirm: !data.session };
}
async function signIn(email: string, password: string): Promise<void> {
  const { error } = await need().auth.signInWithPassword({ email, password });
  if (error) throw error;
}
async function signOut(): Promise<void> { await push(true); await need().auth.signOut(); }
async function resetPassword(email: string): Promise<void> {
  const { error } = await need().auth.resetPasswordForEmail(email, { redirectTo: redirectUrl() });
  if (error) throw error;
}
async function resendConfirm(email: string): Promise<void> {
  const { error } = await need().auth.resend({ type: 'signup', email, options: { emailRedirectTo: redirectUrl() } });
  if (error) throw error;
}
async function updatePassword(password: string): Promise<void> {
  const { error } = await need().auth.updateUser({ password });
  if (error) throw error;
}

/** Подключение к облаку: сессия, подписки на смену входа, сохранения, видимость вкладки */
function start(c: SbClient) {
  emit();
  void c.auth.getSession().then(({ data }) => {
    user = data.session ? data.session.user : null;
    emit();
    if (user) { void pull(); void loadRarity(); }
  });
  c.auth.onAuthStateChange((event, session) => {
    if (event === 'PASSWORD_RECOVERY') authEvent = 'recovery';
    const was = user && user.id;
    user = session ? session.user : null;
    if (user && user.id !== was) { void pull(); void loadRarity(); }
    emit();
  });
  onSave(() => queuePush());
  document.addEventListener('visibilitychange', () => {
    if (!user) return;
    if (document.visibilityState === 'visible') void pull(); else void push();
  });
  window.addEventListener('online', () => { if (user) void pull(); });
}

function init(): void {
  if (inited) return;
  inited = true;
  const c = client();
  if (c) { start(c); return; }
  // UMD-скрипт ещё не загрузился — ждём окончания загрузки страницы
  const retry = () => { const x = client(); if (x) start(x); };
  if (document.readyState === 'complete') setTimeout(retry, 0);
  else window.addEventListener('load', retry, { once: true });
}

// ───────── перевод через Яндекс (edge-функция translate, только для вошедших) ─────────
export interface YandexResult { text?: string; defs?: { tr: { text: string }[] }[] }
let yaOff = false;
const yaCache: Record<string, YandexResult | null> = {};
async function yandex(q: string, mode?: 'word' | 'text'): Promise<YandexResult | null> {
  const c = client();
  if (!c || !user || yaOff) return null;
  const k = (mode || '') + ':' + q.toLowerCase();
  if (k in yaCache) return yaCache[k];
  try {
    const { data, error } = await c.functions.invoke('translate', { body: { q, mode } });
    if (error) {
      const st = error.context && error.context.status;
      if (st === 501) yaOff = true; // ключи ещё не добавлены
      if (st === 404) yaCache[k] = null;
      return null;
    }
    yaCache[k] = data && typeof data === 'object' ? (data as YandexResult) : null;
    return yaCache[k];
  } catch { return null; }
}

export const Cloud = {
  /** Облако доступно (клиент supabase загружен) */
  get enabled(): boolean { return !!client(); },
  init,
  status: (): CloudStatus => snap,
  user: (): CloudUser | null => user,
  onChange(fn: () => void): () => void { listeners.add(fn); return () => { listeners.delete(fn); }; },
  signUp, signIn, signOut, resetPassword, resendConfirm, updatePassword,
  pull, push, queuePush, loadRarity, realPct, merge,
  takeAuthEvent: (): string | null => { const e = authEvent; authEvent = null; return e; },
  peekAuthEvent: (): string | null => authEvent,
  yandexReady: (): boolean => !!(sb && user && !yaOff),
  yandex,
};

/** React: статус облака с перерисовкой при изменениях (вход, синхронизация, редкость) */
export function useCloud(): CloudStatus {
  return useSyncExternalStore(Cloud.onChange, () => snap, () => snap);
}
