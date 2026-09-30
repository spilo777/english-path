// Напоминания: подписка этого устройства на уведомления (web push) через облако.
// Уведомления рассылает функция push в Supabase (раз в 15 минут проверяет, у кого сейчас «их» час).
import { cloudClient } from '../cloud/client';

export interface PushPrefs {
    hour: number;
    daily: boolean;
    streak: boolean;
}
export type PushSupport = 'ok' | 'ios-install' | 'unsupported';

const isIOS = () =>
    /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const standalone = () =>
    window.matchMedia('(display-mode: standalone)').matches ||
    (navigator as unknown as { standalone?: boolean }).standalone === true;

/** Можно ли включить уведомления в этом браузере. На iPhone — только когда сайт добавлен на экран «Домой» */
export function pushSupport(): PushSupport {
    const has = 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
    if (isIOS() && !standalone()) return 'ios-install';
    return has ? 'ok' : 'unsupported';
}

const tz = () => {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Europe/Moscow';
    } catch {
        return 'Europe/Moscow';
    }
};

async function registration(): Promise<ServiceWorkerRegistration> {
    const reg = await navigator.serviceWorker.getRegistration();
    if (reg) return reg;
    return navigator.serviceWorker.register(new URL('sw.js', document.baseURI));
}

function keyBytes(b64url: string): Uint8Array {
    const s = b64url.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((b64url.length + 3) % 4);
    return Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
}
const b64u = (buf: ArrayBuffer | null) => {
    if (!buf) return '';
    let s = '';
    new Uint8Array(buf).forEach((x) => {
        s += String.fromCharCode(x);
    });
    return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

/** Текущая подписка этого устройства и её настройки в облаке (null — не подписано) */
export async function pushStatus(): Promise<PushPrefs | null> {
    if (pushSupport() !== 'ok') return null;
    const reg = await navigator.serviceWorker.getRegistration();
    const sub = reg && (await reg.pushManager.getSubscription());
    const c = cloudClient();
    if (!sub || !c) return null;
    const { data } = await c.from('push_subs').select('hour, daily, streak').eq('endpoint', sub.endpoint).maybeSingle();
    return data && typeof data === 'object' ? (data as PushPrefs) : null;
}

/** Включить (или обновить настройки). Бросает понятную ошибку по-русски */
export async function pushEnable(prefs: PushPrefs): Promise<void> {
    const c = cloudClient();
    if (!c) throw new Error('Облако недоступно — проверьте интернет');
    const perm = Notification.permission === 'granted' ? 'granted' : await Notification.requestPermission();
    if (perm !== 'granted')
        throw new Error('Уведомления запрещены в браузере. Разрешите их в настройках сайта и попробуйте снова.');
    const reg = await registration();
    let sub = await reg.pushManager.getSubscription();
    if (!sub) {
        const { data, error } = await c.functions.invoke('push', { method: 'GET' });
        const key = data && typeof data === 'object' ? (data as { publicKey?: string }).publicKey : undefined;
        if (error || !key) throw new Error('Не удалось связаться с сервером напоминаний');
        sub = await reg.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: keyBytes(key) as BufferSource,
        });
    }
    const { error } = await c.rpc('push_subscribe', {
        p_endpoint: sub.endpoint,
        p_p256dh: b64u(sub.getKey('p256dh')),
        p_auth: b64u(sub.getKey('auth')),
        p_tz: tz(),
        p_hour: prefs.hour,
        p_daily: prefs.daily,
        p_streak: prefs.streak,
    });
    if (error)
        throw new Error(
            /not signed in/.test(error.message) ? 'Войдите в аккаунт, чтобы включить напоминания' : error.message,
        );
}

/** Выключить напоминания на этом устройстве */
export async function pushDisable(): Promise<void> {
    const reg = await navigator.serviceWorker.getRegistration();
    const sub = reg && (await reg.pushManager.getSubscription());
    if (!sub) return;
    const c = cloudClient();
    if (c) await c.from('push_subs').delete().eq('endpoint', sub.endpoint);
    await sub.unsubscribe().catch(() => false);
}

/** Прислать проверочное уведомление на все устройства аккаунта */
export async function pushTest(): Promise<number> {
    const c = cloudClient();
    if (!c) throw new Error('Облако недоступно');
    const { data, error } = await c.functions.invoke('push', { body: { op: 'test' } });
    if (error) throw new Error('Не удалось отправить проверку');
    return data && typeof data === 'object' ? Number((data as { sent?: number }).sent || 0) : 0;
}
