// Картинка-ассоциация для карточки: подобранные при сборке (word-img.json), иначе поиск; кеш в прогрессе (imgCache)
import { loadJSON } from '../data/loader';
import { paths } from '../data/paths';
import { getState, update } from '../progress/store';
import type { CommonsResp } from './covers';

const imgPending: Record<string, Promise<string | null>> = {};
const BAD_IMG = /(flag|logo|map|icon|diagram|coat[_ ]of[_ ]arms|\.svg)/i;

interface Summary {
    type?: string;
    thumbnail?: { source?: string };
}

/** Ключ картинки: id карточки; для форм «go — went — gone» — первое слово */
export const imgKey = (en: string) => {
    const id = en.toLowerCase().trim();
    return id.includes(' — ') ? id.split(' — ')[0].trim() : id;
};

/** Картинки, подобранные заранее при сборке: слово → адрес, '' — подходящей нет */
let wordImgs: Promise<Record<string, string>> | null = null;
const bakedWords = () =>
    (wordImgs ||= loadJSON<Record<string, string>>(paths.wordImg).catch(() => ({}) as Record<string, string>));

/** Сначала готовая таблица со сборки; слова, которых в ней нет (свои слова), ищутся на ходу */
export async function autoImage(en: string): Promise<string | null> {
    const k = imgKey(en);
    const m = await bakedWords();
    if (k in m) return m[k] || null;
    return liveImage(k);
}

/** Википедия (главное фото статьи), затем Wikimedia Commons. Результат — в прогрессе (imgCache) */
function liveImage(k: string): Promise<string | null> {
    const cache = getState().imgCache || {};
    if (k in cache) return Promise.resolve(cache[k] || null);
    if (k in imgPending) return imgPending[k];
    const title = encodeURIComponent(k.replace(/ /g, '_'));
    const wiki = fetch('https://en.wikipedia.org/api/rest_v1/page/summary/' + title)
        .then((r) => (r.ok ? (r.json() as Promise<Summary>) : null))
        .then((j) => {
            const src = j?.thumbnail?.source;
            return j && j.type === 'standard' && src && !BAD_IMG.test(src) ? src : null;
        });
    const commons = () =>
        fetch(
            'https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&generator=search&gsrnamespace=6&gsrlimit=8&gsrsearch=' +
                encodeURIComponent(k + ' filetype:bitmap') +
                '&prop=imageinfo&iiprop=url|mime&iiurlwidth=480',
        )
            .then((r) => r.json() as Promise<CommonsResp>)
            .then((j) => {
                const pages = Object.values(j.query?.pages || {}).sort((a, b) => (a.index || 0) - (b.index || 0));
                const hit = pages.find(
                    (p) =>
                        p.imageinfo && /jpeg|png|webp/.test(p.imageinfo[0]?.mime || '') && !BAD_IMG.test(p.title || ''),
                );
                return hit?.imageinfo?.[0]?.thumburl || null;
            });
    const p = wiki
        .then((u) => u || commons())
        .then((u) => {
            update(
                (s) => {
                    s.imgCache = s.imgCache || {};
                    s.imgCache[k] = u || '';
                },
                { silent: true },
            );
            delete imgPending[k];
            return u;
        })
        .catch(() => {
            delete imgPending[k];
            return null;
        }); // нет интернета — не кешируем
    imgPending[k] = p;
    return p;
}
