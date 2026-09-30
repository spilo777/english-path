// Синхронизация с Supabase: аккаунт, слияние прогресса между устройствами, реальная редкость достижений.
// Сайт работает и без неё: всё хранится локально, облако — надстройка.
// Клиент supabase-js берётся из window.supabase: UMD-скрипт из CDN подгружается сам после первого экрана (init),
// чтобы не задерживать открытие сайта.
import { lsGet } from '@utils/storage';
import { getState, onSave, replaceState } from '../progress/store';
import type { Progress } from '../progress/types';
import { getConfig } from '../config/current';
import { AUTH_KEY } from './config';
import { merge, num, obj, payload, strip } from './merge';
import type { CloudStatus, CloudUser, SbClient, SbLib, YandexResult } from './types';

const sbLib = (): SbLib | null => {
    const w = window as unknown as { supabase?: SbLib };
    return w.supabase && typeof w.supabase.createClient === 'function' ? w.supabase : null;
};

// ───────── состояние модуля ─────────
let sb: SbClient | null = null;
let user: CloudUser | null = null;
let pushTimer: ReturnType<typeof setTimeout> | undefined;
let pushing = false,
    pulling = false;
let lastSync: Date | null = null,
    lastError: string | null = null;
let inited = false;
const listeners = new Set<() => void>();

let libLoading = false;
/** Подгрузить UMD-скрипт supabase-js; по готовности — колбэк */
function loadLib(done: () => void): void {
    if (sbLib()) {
        done();
        return;
    }
    libLoading = true;
    const el = document.createElement('script');
    el.src = getConfig().cloud.sdkUrl;
    el.async = true;
    el.onload = () => {
        libLoading = false;
        done();
        emit();
    };
    el.onerror = () => {
        libLoading = false;
        emit();
    };
    document.head.appendChild(el);
}

let snap: CloudStatus = mkStatus();
function mkStatus(): CloudStatus {
    return { enabled: !!sb, loading: libLoading || !inited, user, lastSync, lastError, pushing, pulling };
}
const emit = () => {
    snap = mkStatus();
    listeners.forEach((f) => {
        try {
            f();
        } catch {
            /* подписчик упал — не мешаем остальным */
        }
    });
};

// что пришло по ссылке из письма (Supabase кладёт это в #hash)
const initialHash = typeof location !== 'undefined' ? location.hash || '' : '';
let authEvent: string | null = /type=recovery/.test(initialHash)
    ? 'recovery'
    : /type=(signup|email|magiclink)/.test(initialHash)
      ? 'confirmed'
      : /error_description=/.test(initialHash)
        ? 'link-error:' +
          decodeURIComponent((initialHash.match(/error_description=([^&]+)/) || [])[1] || '').replace(/\+/g, ' ')
        : null;
const redirectUrl = () => (/^https?:/.test(location.protocol) ? location.origin + location.pathname : undefined);

/** Клиент создаётся лениво: UMD-скрипт может появиться позже */
function client(): SbClient | null {
    if (sb) return sb;
    const lib = sbLib();
    if (!lib) return null;
    const { url, key } = getConfig().cloud;
    sb = lib.createClient(url, key, {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true,
            storageKey: AUTH_KEY,
        },
    });
    return sb;
}
const need = (): SbClient => {
    const c = client();
    if (!c) throw new Error('Облако недоступно — проверьте интернет');
    return c;
};
const errMsg = (e: unknown) =>
    e && typeof e === 'object' && 'message' in e ? String((e as { message: unknown }).message) : String(e);

// ───────── операции с облаком ─────────
async function pull(): Promise<void> {
    const c = client();
    if (!c || !user || pulling) return;
    pulling = true;
    emit();
    try {
        const { data, error } = await c
            .from('progress')
            .select('state, updated_at')
            .eq('user_id', user.id)
            .maybeSingle();
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
    } catch (e) {
        lastError = errMsg(e);
    }
    pulling = false;
    emit();
}

async function push(force = false): Promise<void> {
    const c = client();
    if (!c || !user) return;
    if (pushing && !force) {
        queuePush();
        return;
    }
    pushing = true;
    try {
        const s = getState();
        const { error } = await c
            .from('progress')
            .upsert({ user_id: user.id, state: payload(s), device: deviceName() }, { onConflict: 'user_id' });
        if (error) throw error;
        // достижения — отдельной таблицей для статистики редкости
        const uid = user.id;
        const rows = Object.entries(s.ach || {}).map(([ach_id, t]) => ({
            user_id: uid,
            ach_id,
            unlocked_at: new Date(num(t) || Date.now()).toISOString(),
        }));
        if (rows.length) {
            const r = await c
                .from('user_achievements')
                .upsert(rows, { onConflict: 'user_id,ach_id', ignoreDuplicates: true });
            if (r.error) throw r.error;
        }
        lastSync = new Date();
        lastError = null;
    } catch (e) {
        lastError = errMsg(e);
    }
    pushing = false;
    emit();
}

function queuePush(): void {
    if (!sb || !user) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(() => {
        void push();
    }, getConfig().cloud.pushDebounceMs);
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
    if (rarity && Date.now() - rarityAt < getConfig().cloud.rarityTtlMinutes * 60000) return;
    try {
        const { data, error } = await c.rpc('achievement_stats');
        if (error) throw error;
        const rows = Array.isArray(data) ? data.map(obj) : [];
        const total = rows.length ? Number(rows[0].total_users) || 0 : 0;
        const map: Record<string, number> = {};
        rows.forEach((r) => {
            map[String(r.ach_id)] = Number(r.holders) || 0;
        });
        rarity = { total, map };
        rarityAt = Date.now();
        emit();
    } catch {
        /* нет сети — остаются оценки */
    }
}
/** Реальный процент учеников с достижением, если учеников достаточно, иначе null */
function realPct(achId: string): number | null {
    if (!rarity || rarity.total < getConfig().cloud.minUsersForRarity) return null;
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
async function signOut(): Promise<void> {
    await push(true);
    await need().auth.signOut();
}
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
        if (user) {
            void pull();
            void loadRarity();
        }
    });
    c.auth.onAuthStateChange((event, session) => {
        if (event === 'PASSWORD_RECOVERY') authEvent = 'recovery';
        const was = user && user.id;
        user = session ? session.user : null;
        if (user && user.id !== was) {
            void pull();
            void loadRarity();
        }
        emit();
    });
    onSave(() => queuePush());
    document.addEventListener('visibilitychange', () => {
        if (!user) return;
        if (document.visibilityState === 'visible') void pull();
        else void push();
    });
    window.addEventListener('online', () => {
        if (user) void pull();
    });
}

function init(): void {
    if (inited) return;
    inited = true;
    loadLib(() => {
        const c = client();
        if (c) start(c);
    });
    emit();
}

// ───────── перевод через Яндекс (edge-функция translate, только для вошедших) ─────────
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
    } catch {
        return null;
    }
}

// ───────── озвучка через Яндекс (edge-функция tts, только для вошедших) ─────────
let ttsOff = false;
let ttsFails = 0;
async function yandexTts(text: string): Promise<Blob | null> {
    const c = client();
    if (!c || !user || ttsOff) return null;
    try {
        const { data, error } = await c.functions.invoke('tts', { body: { text } });
        if (error) {
            const st = error.context && error.context.status;
            // ключа нет или исчерпан дневной лимит — до перезагрузки страницы говорит браузер
            if (st === 501 || st === 429) ttsOff = true;
            else if (++ttsFails >= 3) ttsOff = true; // Яндекс раз за разом не отвечает
            return null;
        }
        ttsFails = 0;
        return data instanceof Blob && data.size > 0 ? new Blob([data], { type: 'audio/mpeg' }) : null;
    } catch {
        return null;
    }
}

/** Клиент облака для других модулей (напоминания и т. п.); null — облако не загружено */
export const cloudClient = (): SbClient | null => client();

/** Есть сохранённый вход — облако нужно сразу, а не «когда-нибудь потом» */
export const hasSession = (): boolean => !!lsGet(AUTH_KEY);

export const Cloud = {
    /** Облако доступно (клиент supabase загружен) */
    get enabled(): boolean {
        return !!client();
    },
    init,
    status: (): CloudStatus => snap,
    user: (): CloudUser | null => user,
    onChange(fn: () => void): () => void {
        listeners.add(fn);
        return () => {
            listeners.delete(fn);
        };
    },
    signUp,
    signIn,
    signOut,
    resetPassword,
    resendConfirm,
    updatePassword,
    pull,
    push,
    queuePush,
    loadRarity,
    realPct,
    merge,
    takeAuthEvent: (): string | null => {
        const e = authEvent;
        authEvent = null;
        return e;
    },
    peekAuthEvent: (): string | null => authEvent,
    yandexReady: (): boolean => !!(sb && user && !yaOff),
    yandex,
    ttsReady: (): boolean => !!(sb && user && !ttsOff),
    yandexTts,
};
