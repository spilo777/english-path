// Озвучка английского текста через Yandex SpeechKit для English Path.
//
// Ключи — только в секретах Supabase (Edge Functions → Secrets):
//   YANDEX_TTS_API_KEY         — API-ключ сервисного аккаунта с ролью ai.speechkit-tts.user;
//                                если не задан, берётся YANDEX_TRANSLATE_API_KEY (один ключ на оба сервиса)
//   YANDEX_FOLDER_ID           — ID каталога; для ключа сервисного аккаунта не нужен
// Настройки (необязательно):
//   YANDEX_TTS_VOICE           — голос, по умолчанию john (английский)
//   YANDEX_TTS_DAILY_CHARS_USER / YANDEX_TTS_DAILY_CHARS_TOTAL — лимиты символов в день (5 000 / 50 000)
//
// Защита (../_shared/guard.ts): только вошедший ученик и только с сайта; дневные лимиты символов;
// готовое аудио хранится в закрытом бакете tts — повтор той же фразы не оплачивается и не расходует лимит.

import { admin, cleanText, envInt, guard, headers, logYandexError, refund, take, TIMEOUT_MS, yandexAuth } from '../_shared/guard.ts';

const MAX_TEXT = 250;
const MAX_AUDIO = 1_048_576;
const USER_MAX = envInt('YANDEX_TTS_DAILY_CHARS_USER', 5_000);
const TOTAL_MAX = envInt('YANDEX_TTS_DAILY_CHARS_TOTAL', 50_000);
const VOICE = (Deno.env.get('YANDEX_TTS_VOICE') || 'john').replace(/[^a-z_]/gi, '').slice(0, 20) || 'john';

async function sha256(s: string): Promise<string> {
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join('');
}

/** Синтез через SpeechKit API v1. null — Яндекс не ответил или прислал не аудио */
async function synthesize(text: string, key: string, folder: string | undefined): Promise<Uint8Array | null> {
    const form = new URLSearchParams({ text, lang: 'en-US', voice: VOICE, format: 'mp3' });
    if (folder) form.set('folderId', folder);
    const r = await fetch('https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', Authorization: yandexAuth(key) },
        body: form,
        signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!r.ok) {
        await logYandexError('yandex-tts', r);
        return null;
    }
    const audio = new Uint8Array(await r.arrayBuffer());
    if (!audio.length || audio.length > MAX_AUDIO) {
        console.error('yandex-tts bad audio size');
        return null;
    }
    return audio;
}

Deno.serve(async (req) => {
    const g = await guard(req);
    if (!g.ok) return g.res;
    const { user, body, json } = g;

    const c = cleanText(body.text, MAX_TEXT);
    if ('error' in c) return json({ error: c.error }, c.status);
    // одно слово — без регистра (больше попаданий в кеш); во фразах регистр и знаки влияют на интонацию
    const text = /\s/.test(c.text) ? c.text : c.text.toLowerCase();

    const key = Deno.env.get('YANDEX_TTS_API_KEY') || Deno.env.get('YANDEX_TRANSLATE_API_KEY');
    if (!key) return json({ error: 'not_configured' }, 501);
    const folder = Deno.env.get('YANDEX_FOLDER_ID') || undefined;

    // аудио отдаём как octet-stream: supabase-js тогда вернёт Blob
    const audioRes = (bytes: Uint8Array | Blob) =>
        new Response(bytes, { status: 200, headers: headers(req.headers.get('Origin'), 'application/octet-stream') });

    let charged = false;
    try {
        const path = `v1/${VOICE}/${await sha256(text)}.mp3`;
        const bucket = admin.storage.from('tts');

        // кеш: повтор бесплатно и без расхода лимита
        const hit = await bucket.download(path);
        if (hit.data && hit.data.size > 0) return audioRes(hit.data);

        const t = await take('tts', user.id, text.length, USER_MAX, TOTAL_MAX);
        if (t === 'user') return json({ error: 'user_limit' }, 429);
        if (t === 'total') return json({ error: 'total_limit' }, 429);
        if (t !== 'ok') return json({ error: 'unavailable' }, 503);
        charged = true;

        const audio = await synthesize(text, key, folder);
        if (!audio) {
            await refund('tts', user.id, text.length);
            return json({ error: 'upstream' }, 502);
        }
        const up = await bucket.upload(path, audio, { contentType: 'audio/mpeg', upsert: true });
        if (up.error) console.error('tts cache upload failed');
        return audioRes(audio);
    } catch (e) {
        console.error('tts failed', e instanceof Error ? e.name : 'error');
        if (charged) await refund('tts', user.id, text.length);
        return json({ error: 'upstream' }, 502);
    }
});
