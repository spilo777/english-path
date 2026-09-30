// Голос Яндекса (SpeechKit через edge-функцию tts, только для вошедших): mp3 → адрес для <audio>, кеш в памяти.
// Облачный модуль грузится динамически — озвучка не тянет его в стартовый бандл.

interface CloudTts {
    ttsReady(): boolean;
    yandexTts(text: string): Promise<Blob | null>;
}

const MAX_CACHED = 150;
const urls = new Map<string, string>();
const pending = new Map<string, Promise<string | null>>();

const keyOf = (text: string) => {
    const t = text.replace(/\s+/g, ' ').trim();
    return /\s/.test(t) ? t : t.toLowerCase();
};

async function cloud(): Promise<CloudTts | null> {
    try {
        const mod = (await import('../cloud/client')) as unknown as { Cloud?: Partial<CloudTts> };
        const c = mod.Cloud;
        return c && typeof c.ttsReady === 'function' && typeof c.yandexTts === 'function' ? (c as CloudTts) : null;
    } catch {
        return null;
    }
}

function remember(k: string, url: string) {
    urls.set(k, url);
    if (urls.size <= MAX_CACHED) return;
    const [oldK, oldUrl] = urls.entries().next().value as [string, string];
    urls.delete(oldK);
    URL.revokeObjectURL(oldUrl);
}

/** Адрес записи голосом Яндекса. null — не вошёл, Яндекс не настроен или не ответил */
export function yandexVoice(text: string): Promise<string | null> {
    const k = keyOf(text);
    if (!k) return Promise.resolve(null);
    const hit = urls.get(k);
    if (hit) return Promise.resolve(hit);
    const p0 = pending.get(k);
    if (p0) return p0;
    const p = cloud()
        .then((c) => (c && c.ttsReady() ? c.yandexTts(k) : null))
        .then((blob) => {
            if (!blob) return null;
            const url = URL.createObjectURL(blob);
            remember(k, url);
            return url;
        })
        .catch(() => null)
        .finally(() => pending.delete(k));
    pending.set(k, p);
    return p;
}
