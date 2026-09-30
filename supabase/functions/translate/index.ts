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
// Защита (../_shared/guard.ts): только вошедший ученик и только с сайта; дневные лимиты символов
// (атомарно в базе); кеш переводов (повтор не оплачивается); при ошибке Яндекса символы возвращаются.

import { cleanText, guard, envInt, logYandexError, refund, take, TIMEOUT_MS, admin, yandexAuth } from '../_shared/guard.ts';

const MAX_Q = 300;
const USER_MAX = envInt('YANDEX_DAILY_CHARS_USER', 10_000);
const TOTAL_MAX = envInt('YANDEX_DAILY_CHARS_TOTAL', 100_000);

type DictTr = { text: string; syn?: { text: string }[]; ex?: { text: string; tr?: { text: string }[] }[] };
type DictDef = { text: string; pos?: string; ts?: string; tr?: DictTr[] };
type Result = { source: string; text?: string; defs?: unknown[] };
// null — Яндекс не ответил (ошибка), 'none' — ответил, но перевода нет
type Outcome = Result | 'none' | null;

/** Словарная статья Яндекс.Словаря (для слов и коротких сочетаний) */
async function dictLookup(q: string, key: string): Promise<Outcome> {
    const url =
        'https://dictionary.yandex.net/api/v1/dicservice.json/lookup?lang=en-ru&ui=ru&key=' +
        encodeURIComponent(key) +
        '&text=' +
        encodeURIComponent(q);
    const r = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!r.ok) {
        await logYandexError('yandex-dict', r);
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
    return defs.length ? { source: 'yandex-dict', defs } : 'none';
}

/** Перевод через Yandex Cloud Translate */
async function cloudTranslate(q: string, key: string, folder: string | undefined): Promise<Outcome> {
    const body: Record<string, unknown> = { texts: [q], sourceLanguageCode: 'en', targetLanguageCode: 'ru' };
    if (folder) body.folderId = folder;
    const r = await fetch('https://translate.api.cloud.yandex.net/translate/v2/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: yandexAuth(key) },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!r.ok) {
        await logYandexError('yandex-translate', r);
        return null;
    }
    const d = (await r.json()) as { translations?: { text?: string }[] };
    const text = d.translations?.[0]?.text;
    return text ? { source: 'yandex-translate', text: String(text) } : 'none';
}

Deno.serve(async (req) => {
    const g = await guard(req);
    if (!g.ok) return g.res;
    const { user, body, json } = g;

    const c = cleanText(body.q, MAX_Q);
    if ('error' in c) return json({ error: c.error }, c.status);
    const q = c.text;
    const mode = body.mode === 'word' || body.mode === 'text' ? body.mode : undefined;
    const isWord = mode === 'word' || (mode !== 'text' && !/\s/.test(q));

    const dictKey = Deno.env.get('YANDEX_DICT_KEY');
    const trKey = Deno.env.get('YANDEX_TRANSLATE_API_KEY');
    const folder = Deno.env.get('YANDEX_FOLDER_ID') || undefined;
    const useDict = !!dictKey && (isWord || q.split(' ').length <= 3);
    if (!useDict && !trKey) return json({ error: 'not_configured' }, 501);

    let charged = false;
    try {
        // кеш: повтор бесплатно и без расхода лимита
        const cacheKey = (isWord ? 'w:' : 't:') + q.toLowerCase();
        const cached = await admin.from('translate_cache').select('result').eq('key', cacheKey).maybeSingle();
        if (cached.data?.result) return json(cached.data.result);

        // лимиты символов: ученик и весь сайт (списывается до запроса в Яндекс)
        const t = await take('tr', user.id, q.length, USER_MAX, TOTAL_MAX);
        if (t === 'user') return json({ error: 'user_limit' }, 429);
        if (t === 'total') return json({ error: 'total_limit' }, 429);
        if (t !== 'ok') return json({ error: 'unavailable' }, 503);
        charged = true;

        // словарь для слов, Cloud Translate для фраз (и для слов, если словаря нет)
        let out: Outcome = null;
        if (useDict) out = await dictLookup(q, dictKey!);
        if ((out === null || out === 'none') && trKey) {
            const tr = await cloudTranslate(q, trKey, folder);
            if (tr !== null || out === null) out = tr;
        }
        if (out === null) {
            await refund('tr', user.id, q.length);
            return json({ error: 'upstream' }, 502);
        }
        if (out === 'none') return json({ error: 'not_found' }, 404);

        await admin.from('translate_cache').upsert({ key: cacheKey, result: out }, { onConflict: 'key' });
        return json(out);
    } catch (e) {
        console.error('translate failed', e instanceof Error ? e.name : 'error');
        if (charged) await refund('tr', user.id, q.length);
        return json({ error: 'upstream' }, 502);
    }
});
