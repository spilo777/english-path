// Напоминания English Path (web push).
// GET              → { publicKey } — открытый ключ VAPID для подписки в браузере (ключи создаются один раз и живут в Vault)
// POST {op:'test'} → тестовое уведомление на устройства вошедшего (Authorization: Bearer <токен пользователя>)
// POST {op:'cron'} → разослать напоминания тем, у кого сейчас «их» час (вызывает pg_cron, заголовок x-cron-secret)
// Шифрование — RFC 8291 (aes128gcm), подпись — VAPID (RFC 8292), всё на WebCrypto без сторонних библиотек.
import { createClient } from 'npm:@supabase/supabase-js@2';

const URL_ = Deno.env.get('SUPABASE_URL')!;
const SERVICE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const db = createClient(URL_, SERVICE, { auth: { persistSession: false } });
const SITE = 'https://spilo777.github.io/english-path/';
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
};
const json = (x: unknown, status = 200) => new Response(JSON.stringify(x), { status, headers: { ...CORS, 'Content-Type': 'application/json' } });

// ───────── base64url ─────────
const b64u = (buf: ArrayBuffer | Uint8Array) => {
  const b = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  let s = ''; for (const x of b) s += String.fromCharCode(x);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};
const unb64u = (s: string) => {
  const t = s.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((s.length + 3) % 4);
  return Uint8Array.from(atob(t), (c) => c.charCodeAt(0));
};
const cat = (...a: Uint8Array[]) => { const o = new Uint8Array(a.reduce((n, x) => n + x.length, 0)); let i = 0; for (const x of a) { o.set(x, i); i += x.length; } return o; };
const enc = new TextEncoder();

// ───────── ключи VAPID ─────────
interface Vapid { publicKey: string; privateJwk: JsonWebKey; subject: string }
let vapidCache: Vapid | null = null;
async function vapid(): Promise<Vapid> {
  if (vapidCache) return vapidCache;
  const { data } = await db.rpc('push_get_secret', { p_name: 'push_vapid' });
  if (typeof data === 'string' && data) return (vapidCache = JSON.parse(data));
  // первый запуск — создаём пару ключей и сохраняем в Vault (повторно не перезаписывается)
  const kp = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  const pub = new Uint8Array(await crypto.subtle.exportKey('raw', kp.publicKey));
  const v: Vapid = { publicKey: b64u(pub), privateJwk: await crypto.subtle.exportKey('jwk', kp.privateKey), subject: 'mailto:noreply@englishpath.app' };
  await db.rpc('push_set_secret', { p_name: 'push_vapid', p_value: JSON.stringify(v) });
  const again = await db.rpc('push_get_secret', { p_name: 'push_vapid' }); // вдруг параллельный запуск успел раньше
  return (vapidCache = typeof again.data === 'string' && again.data ? JSON.parse(again.data) : v);
}

async function vapidHeader(endpoint: string): Promise<string> {
  const v = await vapid();
  const key = await crypto.subtle.importKey('jwk', v.privateJwk, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign']);
  const head = b64u(enc.encode(JSON.stringify({ typ: 'JWT', alg: 'ES256' })));
  const body = b64u(enc.encode(JSON.stringify({ aud: new URL(endpoint).origin, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: v.subject })));
  const sig = await crypto.subtle.sign({ name: 'ECDSA', hash: 'SHA-256' }, key, enc.encode(head + '.' + body));
  return `vapid t=${head}.${body}.${b64u(sig)}, k=${v.publicKey}`;
}

// ───────── шифрование содержимого (RFC 8291) ─────────
async function hmac(key: Uint8Array, data: Uint8Array): Promise<Uint8Array> {
  const k = await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return new Uint8Array(await crypto.subtle.sign('HMAC', k, data));
}
async function encrypt(p256dh: string, authSecret: string, payload: string): Promise<Uint8Array> {
  const as = await crypto.subtle.generateKey({ name: 'ECDH', namedCurve: 'P-256' }, true, ['deriveBits']);
  const asPub = new Uint8Array(await crypto.subtle.exportKey('raw', as.publicKey));
  return encryptWith(p256dh, authSecret, payload, as.privateKey, asPub, crypto.getRandomValues(new Uint8Array(16)));
}
/** То же с заданными ключом сервера и солью (для проверки по примеру из RFC 8291) */
async function encryptWith(p256dh: string, authSecret: string, payload: string, asPriv: CryptoKey, asPub: Uint8Array, salt: Uint8Array): Promise<Uint8Array> {
  const uaPub = unb64u(p256dh), auth = unb64u(authSecret);
  const as = { privateKey: asPriv };
  const uaKey = await crypto.subtle.importKey('raw', uaPub, { name: 'ECDH', namedCurve: 'P-256' }, false, []);
  const shared = new Uint8Array(await crypto.subtle.deriveBits({ name: 'ECDH', public: uaKey }, as.privateKey, 256));
  const prkKey = await hmac(auth, shared);
  const ikm = await hmac(prkKey, cat(enc.encode('WebPush: info\0'), uaPub, asPub, new Uint8Array([1])));
  const prk = await hmac(salt, ikm);
  const cek = (await hmac(prk, cat(enc.encode('Content-Encoding: aes128gcm\0'), new Uint8Array([1])))).slice(0, 16);
  const nonce = (await hmac(prk, cat(enc.encode('Content-Encoding: nonce\0'), new Uint8Array([1])))).slice(0, 12);
  const aes = await crypto.subtle.importKey('raw', cek, 'AES-GCM', false, ['encrypt']);
  const ct = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv: nonce }, aes, cat(enc.encode(payload), new Uint8Array([2]))));
  const rs = new Uint8Array([0, 0, 16, 0]); // 4096
  return cat(salt, rs, new Uint8Array([asPub.length]), asPub, ct);
}

interface Sub { id: number; user_id: string; endpoint: string; p256dh: string; auth: string; tz: string; hour: number; daily: boolean; streak: boolean; last_daily: string | null; last_streak: string | null; fails: number }
interface Msg { title: string; body: string; url: string; tag: string }

/** Отправить одно уведомление. true — доставлено; 'gone' — подписка больше не действует */
async function send(sub: Sub, msg: Msg): Promise<true | 'gone' | 'fail'> {
  try {
    const body = await encrypt(sub.p256dh, sub.auth, JSON.stringify(msg));
    const r = await fetch(sub.endpoint, {
      method: 'POST',
      headers: { Authorization: await vapidHeader(sub.endpoint), 'Content-Encoding': 'aes128gcm', 'Content-Type': 'application/octet-stream', TTL: '43200', Urgency: 'normal', Topic: msg.tag },
      body,
    });
    if (r.status === 404 || r.status === 410) return 'gone';
    return r.ok ? true : 'fail';
  } catch { return 'fail'; }
}

async function markResult(sub: Sub, res: true | 'gone' | 'fail', patch: Partial<Sub>) {
  if (res === 'gone' || (res === 'fail' && sub.fails >= 4)) { await db.from('push_subs').delete().eq('id', sub.id); return; }
  await db.from('push_subs').update(res === true ? { ...patch, fails: 0 } : { fails: sub.fails + 1 }).eq('id', sub.id);
}

// ───────── что написать человеку ─────────
const plural = (n: number, one: string, few: string, many: string) => {
  const m10 = n % 10, m100 = n % 100;
  return m10 === 1 && m100 !== 11 ? one : m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14) ? few : many;
};
/** Местные дата и час в часовом поясе человека */
function local(tz: string, t = new Date()): { date: string; hour: number; dayKey: (shift: number) => string } {
  const fmt = (d: Date) => {
    const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23' }).formatToParts(d).map((x) => [x.type, x.value]));
    return { date: `${p.year}-${p.month}-${p.day}`, hour: +p.hour };
  };
  let now; try { now = fmt(t); } catch { tz = 'Europe/Moscow'; now = fmt(t); }
  return { ...now, dayKey: (shift: number) => fmt(new Date(t.getTime() - shift * 86400000)).date };
}

interface State { cards?: Record<string, { state?: string; due?: number }>; activity?: Record<string, unknown>; settings?: { newPerDay?: number }; newToday?: { date?: string; count?: number } }
function summary(st: State, tz: string) {
  const L = local(tz);
  const now = Date.now();
  const due = Object.values(st.cards || {}).filter((c) => c && c.state !== 'new' && typeof c.due === 'number' && c.due <= now).length;
  const act = st.activity || {};
  const studied = !!act[L.date];
  let streak = 0, i = studied ? 0 : 1;
  while (act[L.dayKey(i)]) { streak++; i++; }
  return { due, studied, streak, L };
}

function dailyMsg(s: ReturnType<typeof summary>): Msg | null {
  if (s.studied && !s.due) return null; // сегодня уже всё сделано
  if (s.due && s.streak >= 2 && !s.studied) return { title: `🔥 Серия ${s.streak} ${plural(s.streak, 'день', 'дня', 'дней')}`, body: `${s.due} ${plural(s.due, 'карточка ждёт', 'карточки ждут', 'карточек ждут')} повторения — 5 минут, и серия продолжится.`, url: '#/review', tag: 'daily' };
  if (s.due) return { title: 'Пора повторить слова', body: `${s.due} ${plural(s.due, 'карточка ждёт', 'карточки ждут', 'карточек ждут')} повторения. Это займёт пару минут.`, url: '#/review', tag: 'daily' };
  return { title: 'Пять минут английского?', body: 'Сегодня ещё не занимались — один шаг урока или несколько новых слов.', url: '#/', tag: 'daily' };
}
function streakMsg(s: ReturnType<typeof summary>): Msg | null {
  if (s.studied || s.streak < 2) return null;
  return { title: `⏳ Серия ${s.streak} ${plural(s.streak, 'день', 'дня', 'дней')} сгорит в полночь`, body: 'Хватит нескольких карточек, чтобы её сохранить.', url: '#/review', tag: 'streak' };
}
const STREAK_HOUR = 21;

async function cron(): Promise<Record<string, number>> {
  const out = { checked: 0, sent: 0, gone: 0, failed: 0 };
  const { data: subs } = await db.from('push_subs').select('*').limit(5000);
  const states = new Map<string, State>();
  for (const sub of (subs || []) as Sub[]) {
    out.checked++;
    const L = local(sub.tz);
    const wantDaily = sub.daily && L.hour === sub.hour && sub.last_daily !== L.date;
    const wantStreak = sub.streak && L.hour === Math.max(STREAK_HOUR, sub.hour + 2) && L.hour <= 22 && sub.last_streak !== L.date;
    if (!wantDaily && !wantStreak) continue;
    if (!states.has(sub.user_id)) {
      const { data } = await db.from('progress').select('state').eq('user_id', sub.user_id).maybeSingle();
      states.set(sub.user_id, ((data && data.state) || {}) as State);
    }
    const s = summary(states.get(sub.user_id)!, sub.tz);
    const msg = wantDaily ? dailyMsg(s) : streakMsg(s);
    const patch: Partial<Sub> = wantDaily ? { last_daily: L.date } : { last_streak: L.date };
    if (!msg) { await db.from('push_subs').update(patch).eq('id', sub.id); continue; }
    const res = await send(sub, { ...msg, url: SITE + msg.url });
    if (res === true) out.sent++; else if (res === 'gone') out.gone++; else out.failed++;
    await markResult(sub, res, patch);
  }
  return out;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: CORS });
  try {
    if (req.method === 'GET') return json({ publicKey: (await vapid()).publicKey });
    const body = await req.json().catch(() => ({}));
    if (body.op === 'cron') {
      const { data: secret } = await db.rpc('push_get_secret', { p_name: 'push_cron_secret' });
      if (!secret || req.headers.get('x-cron-secret') !== secret) return json({ error: 'forbidden' }, 403);
      return json(await cron());
    }
    if (body.op === 'test') {
      const token = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
      const { data: u } = await db.auth.getUser(token);
      if (!u || !u.user) return json({ error: 'not signed in' }, 401);
      const { data: subs } = await db.from('push_subs').select('*').eq('user_id', u.user.id);
      let ok = 0;
      for (const sub of (subs || []) as Sub[]) {
        const res = await send(sub, { title: 'Напоминания включены ✓', body: 'Так будет выглядеть напоминание. Нажмите, чтобы открыть English Path.', url: SITE + '#/', tag: 'test' });
        if (res === true) ok++;
        await markResult(sub, res, {});
      }
      return json({ sent: ok, devices: (subs || []).length });
    }
    return json({ error: 'unknown op' }, 400);
  } catch (e) {
    return json({ error: String(e) }, 500);
  }
});
