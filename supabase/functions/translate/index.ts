// Перевод через Яндекс для English Path (en → ru).
//
// Ключи — только в секретах Supabase (Edge Functions → Secrets), в код сайта и в репозиторий они не попадают:
//   YANDEX_TRANSLATE_API_KEY   — API-ключ сервисного аккаунта Yandex Cloud (роль ai.translate.user)
//   YANDEX_FOLDER_ID           — ID каталога Yandex Cloud; для ключа сервисного аккаунта не нужен
//   YANDEX_DICT_KEY            — ключ API Яндекс.Словаря (словарные статьи для слов), необязательно
// Настройки (необязательно):
//   YANDEX_DAILY_CHARS_USER    — символов в день на ученика, по умолчанию 10 000
//   YANDEX_DAILY_CHARS_TOTAL   — символов в день на весь сайт, по умолчанию 100 000 (защита бюджета)
//   ALLOWED_ORIGINS            — сайты, с которых можно звать функцию, через запятую
//
// Защита:
//   • только вошедший ученик: JWT проверяет платформа (verify_jwt), а здесь — что это настоящий пользователь
//     (анонимный ключ сайта тоже JWT, но пользователя за ним нет);
//   • запросы только с сайта (CORS + проверка Origin), только POST JSON, короткий текст;
//   • дневные лимиты символов на ученика и на весь сайт (атомарно в базе, public.translate_take);
//   • кеш переводов (public.translate_cache): повтор не оплачивается и не расходует лимит;
//   • таймаут к Яндексу; в логи не пишутся ни ключи, ни текст запросов, ни ответы Яндекса.

import { createClient } from 'jsr:@supabase/supabase-js@2';

const MAX_Q = 300; // символов в запросе
const MAX_BODY = 2000; // байт в теле запроса
const TIMEOUT_MS = 6000;

const envInt = (name: string, def: number) => {
  const v = parseInt(Deno.env.get(name) || '', 10);
  return Number.isFinite(v) && v > 0 ? v : def;
};
const USER_MAX = envInt('YANDEX_DAILY_CHARS_USER', 10_000);
const TOTAL_MAX = envInt('YANDEX_DAILY_CHARS_TOTAL', 100_000);
const ORIGINS = new Set(
  (Deno.env.get('ALLOWED_ORIGINS') ||
    'https://spilo777.github.io,http://localhost:5173,http://127.0.0.1:5173,http://localhost:4173,http://127.0.0.1:4173')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean),
);

const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, {
  auth: { persistSession: false, autoRefreshToken: false },
});

function headers(origin: string | null): Record<string, string> {
  const h: Record<string, string> = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
    Vary: 'Origin',
  };
  if (origin && ORIGINS.has(origin)) {
    h['Access-Control-Allow-Origin'] = origin;
    h['Access-Control-Allow-Headers'] = 'authorization, x-client-info, apikey, content-type';
    h['Access-Control-Allow-Methods'] = 'POST, OPTIONS';
    h['Access-Control-Max-Age'] = '86400';
  }
  return h;
}

type DictTr = { text: string; syn?: { text: string }[]; ex?: { text: string; tr?: { text: string }[] }[] };
type DictDef = { text: string; pos?: string; ts?: string; tr?: DictTr[] };
type Result = { source: string; text?: string; defs?: unknown[] };

/** Словарная статья Яндекс.Словаря (для слов и коротких сочетаний) */
async function dictLookup(q: string, key: string): Promise<Result | null> {
  const url =
    'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?lang=en-ru&ui=ru&key=' +
    encodeURIComponent(key) +
    '&text=' +
    encodeURIComponent(q);
  const r = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!r.ok) {
    console.error('yandex-dict status', r.status);
    return null;
  }
  const d = (await r.json()) as { def?: DictDef[] };
  const defs = (d.def || []).slice(0, 4).map((df) => ({
    text: String(df.text || ''),
    pos: String(df.pos || ''),
    ts: String(df.ts || ''),
    tr: (df.tr || []).slice(0, 5).map((t) => ({
      text: String(t.text || ''),
      syn: (t.syn || []).slice(0, 3).map((s) => String(s.text || '')),
      ex: (t.ex || []).slice(0, 1).map((e) => ({ en: String(e.text || ''), ru: String((e.tr || [])[0]?.text || '') })),
    })),
  }));
  return defs.length ? { source: 'yandex-dict', defs } : null;
}

/** Перевод фразы через Yandex Cloud Translate */
async function cloudTranslate(q: string, key: string, folder: string | undefined): Promise<Result | null> {
  const body: Record<string, unknown> = { texts: [q], sourceLanguageCode: 'en', targetLanguageCode: 'ru' };
  if (folder) body.folderId = folder;
  const r = await fetch('https://translate.api.cloud.yandex.net/translate/v2/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Api-Key ' + key },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!r.ok) {
    console.error('yandex-translate status', r.status);
    return null;
  }
  const d = (await r.json()) as { translations?: { text?: string }[] };
  const text = d.translations?.[0]?.text;
  return text ? { source: 'yandex-translate', text: String(text) } : null;
}

Deno.serve(async (req) => {
  const origin = req.headers.get('Origin');
  const h = headers(origin);
  const json = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: h });

  // 1) только с разрешённых сайтов
  if (!origin || !ORIGINS.has(origin)) return json({ error: 'origin' }, 403);
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: h });
  if (req.method !== 'POST') return json({ error: 'method' }, 405);
  if (!(req.headers.get('Content-Type') || '').includes('application/json')) return json({ error: 'type' }, 415);

  // 2) только настоящий вошедший пользователь
  const token = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
  if (!token) return json({ error: 'auth' }, 401);
  const { data: auth, error: authErr } = await admin.auth.getUser(token);
  const user = auth?.user;
  if (authErr || !user || user.is_anonymous) return json({ error: 'auth' }, 401);

  // 3) разбор и проверка запроса
  const raw = await req.text();
  if (raw.length > MAX_BODY) return json({ error: 'too_large' }, 413);
  let body: { q?: unknown; mode?: unknown };
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: 'bad_json' }, 400);
  }
  const q = String(body?.q ?? '')
    .replace(/[\u0000-\u001f\u007f]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (!q) return json({ error: 'empty' }, 400);
  if (q.length > MAX_Q) return json({ error: 'too_long' }, 413);
  if (!/[A-Za-z]/.test(q)) return json({ error: 'not_english' }, 400);
  const mode = body?.mode === 'word' || body?.mode === 'text' ? body.mode : undefined;
  const isWord = mode === 'word' || (mode !== 'text' && !/\s/.test(q));

  const dictKey = Deno.env.get('YANDEX_DICT_KEY');
  const trKey = Deno.env.get('YANDEX_TRANSLATE_API_KEY');
  const folder = Deno.env.get('YANDEX_FOLDER_ID') || undefined;
  const useDict = !!dictKey && (isWord || q.split(' ').length <= 3);
  if (!useDict && !trKey) return json({ error: 'not_configured' }, 501);

  try {
    // 4) кеш: повтор бесплатно и без расхода лимита
    const cacheKey = (isWord ? 'w:' : 't:') + q.toLowerCase();
    const cached = await admin.from('translate_cache').select('result').eq('key', cacheKey).maybeSingle();
    if (cached.data?.result) return json(cached.data.result);

    // 5) лимиты символов: ученик и весь сайт (списывается до запроса в Яндекс)
    const take = await admin.rpc('translate_take', {
      p_user: user.id,
      p_chars: q.length,
      p_user_max: USER_MAX,
      p_total_max: TOTAL_MAX,
    });
    if (take.error) {
      console.error('translate_take failed');
      return json({ error: 'unavailable' }, 503);
    }
    if (take.data === 'user') return json({ error: 'user_limit' }, 429);
    if (take.data === 'total') return json({ error: 'total_limit' }, 429);
    if (take.data !== 'ok') return json({ error: 'unavailable' }, 503);

    // 6) Яндекс: словарь для слов, Cloud Translate для фраз (и для слов, если словаря нет)
    let result: Result | null = null;
    if (useDict) result = await dictLookup(q, dictKey!);
    if (!result && trKey) result = await cloudTranslate(q, trKey, folder);
    if (!result) return json({ error: 'not_found' }, 404);

    await admin.from('translate_cache').upsert({ key: cacheKey, result }, { onConflict: 'key' });
    return json(result);
  } catch (e) {
    console.error('translate failed', e instanceof Error ? e.name : 'error');
    return json({ error: 'upstream' }, 502);
  }
});
