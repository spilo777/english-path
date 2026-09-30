// Общая защита edge-функций Яндекса (translate, tts): сайт-источник, вошедший ученик, разбор запроса, лимиты.
// Ключи Яндекса — только в секретах Supabase; в логи не пишутся ни ключи, ни тексты учеников, ни ответы Яндекса.

import { createClient, type User } from 'jsr:@supabase/supabase-js@2';

export const TIMEOUT_MS = 6000;
const MAX_BODY = 2000; // байт в теле запроса

export const envInt = (name: string, def: number): number => {
    const v = parseInt(Deno.env.get(name) || '', 10);
    return Number.isFinite(v) && v > 0 ? v : def;
};

const ORIGINS = new Set(
    (
        Deno.env.get('ALLOWED_ORIGINS') ||
        'https://spilo777.github.io,http://localhost:5173,http://127.0.0.1:5173,http://localhost:4173,http://127.0.0.1:4173'
    )
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean),
);

export const admin = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, {
    auth: { persistSession: false, autoRefreshToken: false },
});

/** Заголовки ответа; CORS — только для разрешённых сайтов */
export function headers(origin: string | null, type = 'application/json'): Record<string, string> {
    const h: Record<string, string> = {
        'Content-Type': type,
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

export type Guarded =
    | { ok: false; res: Response }
    | { ok: true; user: User; body: Record<string, unknown>; json: (b: unknown, s?: number) => Response };

/**
 * Проверки до любой работы: сайт из списка, POST JSON, настоящий вошедший ученик (не анонимный ключ сайта),
 * тело не больше MAX_BODY и валидный JSON-объект.
 */
export async function guard(req: Request): Promise<Guarded> {
    const origin = req.headers.get('Origin');
    const h = headers(origin);
    const json = (b: unknown, status = 200) => new Response(JSON.stringify(b), { status, headers: h });
    const fail = (b: unknown, s: number): Guarded => ({ ok: false, res: json(b, s) });

    if (!origin || !ORIGINS.has(origin)) return fail({ error: 'origin' }, 403);
    if (req.method === 'OPTIONS') return { ok: false, res: new Response(null, { status: 204, headers: h }) };
    if (req.method !== 'POST') return fail({ error: 'method' }, 405);
    if (!(req.headers.get('Content-Type') || '').includes('application/json')) return fail({ error: 'type' }, 415);

    // JWT проверила платформа (verify_jwt); анонимный ключ сайта — тоже JWT, но пользователя за ним нет
    const token = (req.headers.get('Authorization') || '').replace(/^Bearer\s+/i, '');
    if (!token) return fail({ error: 'auth' }, 401);
    const { data, error } = await admin.auth.getUser(token);
    const user = data?.user;
    if (error || !user || user.is_anonymous) return fail({ error: 'auth' }, 401);

    const raw = await req.text();
    if (raw.length > MAX_BODY) return fail({ error: 'too_large' }, 413);
    let body: unknown;
    try {
        body = JSON.parse(raw);
    } catch {
        return fail({ error: 'bad_json' }, 400);
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) return fail({ error: 'bad_json' }, 400);
    return { ok: true, user, body: body as Record<string, unknown>, json };
}

/** Английский текст от ученика: без управляющих символов, пробелы схлопнуты. Ошибка — код для ответа */
export function cleanText(v: unknown, max: number): { text: string } | { error: string; status: number } {
    const text = String(v ?? '')
        .replace(/[\u0000-\u001f\u007f]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    if (!text) return { error: 'empty', status: 400 };
    if (text.length > max) return { error: 'too_long', status: 413 };
    if (!/[A-Za-z]/.test(text)) return { error: 'not_english', status: 400 };
    return { text };
}

export type Kind = 'tr' | 'tts';

/** Списать символы из дневных лимитов (атомарно в базе). 'ok' | 'user' | 'total' | 'error' */
export async function take(kind: Kind, user: string, chars: number, userMax: number, totalMax: number) {
    const r = await admin.rpc('yandex_take', {
        p_kind: kind,
        p_user: user,
        p_chars: chars,
        p_user_max: userMax,
        p_total_max: totalMax,
    });
    if (r.error) {
        console.error('yandex_take failed');
        return 'error';
    }
    return r.data === 'ok' || r.data === 'user' || r.data === 'total' ? r.data : 'error';
}

/** Вернуть символы, если Яндекс не ответил */
export async function refund(kind: Kind, user: string, chars: number): Promise<void> {
    const r = await admin.rpc('yandex_refund', { p_kind: kind, p_user: user, p_chars: chars });
    if (r.error) console.error('yandex_refund failed');
}

/** Лог ошибки Яндекса: только статус и код ошибки (например PERMISSION_DENIED) — без ключей и текста ученика */
export async function logYandexError(what: string, r: Response): Promise<void> {
    let code = '';
    try {
        const j = (await r.json()) as { code?: unknown; error_code?: unknown };
        const c = j?.error_code ?? j?.code;
        code = typeof c === 'string' || typeof c === 'number' ? String(c).replace(/[^\w.-]/g, '').slice(0, 40) : '';
    } catch {
        /* не JSON */
    }
    console.error(what + ' status ' + r.status + (code ? ' ' + code : ''));
}

/** Заголовок авторизации к Yandex Cloud: API-ключ сервисного аккаунта */
export const yandexAuth = (key: string) => 'Api-Key ' + key;
