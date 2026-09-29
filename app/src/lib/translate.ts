// Автоперевод слов не из словаря и фраз: Яндекс через облако (если настроен), иначе MyMemory (бесплатно, без ключа)

interface YaDef { tr?: { text?: string }[] }
interface YaResult { text?: string; defs?: YaDef[] }
interface CloudYa { yandexReady(): boolean; yandex(q: string, mode: 'word' | 'text'): Promise<unknown> }

const trMem = new Map<string, Promise<string | null>>();
const trAlts = new Map<string, string[]>();

const norm = (q: string) => q.toLowerCase().trim();

/** Яндекс через облачный модуль. Модуля/настройки нет — null */
async function yandex(k: string): Promise<string | null> {
  try {
    const mod = (await import('./cloud')) as unknown as { Cloud?: Partial<CloudYa> };
    const c = mod.Cloud;
    if (!c || typeof c.yandexReady !== 'function' || typeof c.yandex !== 'function' || !c.yandexReady()) return null;
    const d = (await c.yandex(k, /\s/.test(k) ? 'text' : 'word')) as YaResult | null;
    if (!d) return null;
    if (d.text) return d.text;
    const tr = d.defs?.[0]?.tr;
    return tr ? tr.slice(0, 2).map((t) => t.text || '').filter(Boolean).join(', ') || null : null;
  } catch { return null; }
}

interface MMMatch { match?: number | string; segment?: string; translation?: string; 'created-by'?: string }
interface MMResponse { responseData?: { translatedText?: string }; matches?: MMMatch[] }

// MyMemory: лучший вариант из машинного перевода и памяти переводов, остальные — альтернативы
async function myMemory(k: string): Promise<string | null> {
  const r = await fetch('https://api.mymemory.translated.net/get?langpair=en|ru&q=' + encodeURIComponent(k));
  const j = (await r.json()) as MMResponse | null;
  const phrase = /\s/.test(k);
  const cyr = (x: string | undefined): x is string => !!x && /[а-яё]/i.test(x) && !/MYMEMORY|QUERY LENGTH|INVALID/i.test(x);
  const clean = (x: string) => x.replace(/\s+/g, ' ').replace(/^["«»“”'\s]+|["«»“”'\s]+$/g, '').replace(/\s*[.!?]+$/, (m) => (phrase ? m.trim() : '')).trim();
  const cand: Record<string, { t: string; w: number }> = {};
  const bump = (t: string | undefined, w: number) => {
    if (!cyr(t)) return;
    const c = clean(t); if (!c || c.length > (phrase ? 700 : 120)) return;
    const key = c.toLowerCase();
    cand[key] = cand[key] || { t: c, w: 0 };
    cand[key].w += w;
  };
  const main = j?.responseData?.translatedText;
  (j?.matches || []).forEach((m) => {
    const q = +(m.match ?? 0) || 0; if (q < 0.7) return;
    const src = String(m.segment || '').toLowerCase().replace(/[^a-z' ]/g, '').trim();
    const exact = src === k.replace(/[^a-z' ]/g, '').trim();
    bump(m.translation, q * (m['created-by'] === 'MT!' ? 1.3 : 1) * (exact ? 1.2 : 0.6));
  });
  bump(main, 0.9);
  const list = Object.values(cand).sort((x, y) => y.w - x.w).map((x) => x.t);
  const uniq = [...new Set(list.map((x) => (phrase ? x : x.toLowerCase())))];
  trAlts.set(k, uniq.slice(0, 4));
  return uniq[0] || null;
}

/** Перевод en→ru с кешем в памяти. null — не удалось (без сети не кешируется) */
export function autoTranslate(q: string): Promise<string | null> {
  const k = norm(q);
  const hit = trMem.get(k);
  if (hit) return hit;
  const p = yandex(k).then((y) => y || myMemory(k)).catch(() => { trMem.delete(k); return null; });
  trMem.set(k, p);
  return p;
}

/** Другие варианты перевода (кроме основного) — известны после autoTranslate */
export function translationAlts(q: string): string[] {
  return (trAlts.get(norm(q)) || []).slice(1);
}

/** Ссылка на Google Переводчик */
export const gtUrl = (q: string) => 'https://translate.google.com/?sl=en&tl=ru&op=translate&text=' + encodeURIComponent(q);
