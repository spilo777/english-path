// Живое произношение: записи носителей (Викисловарь через dictionaryapi.dev, Wikimedia Commons)
// и транскрипция; кеш в localStorage['ep.audio.v1']
import { lsJSON, lsSetJSON } from '@utils/storage';
import { peekJSON } from '../data/loader';
import { paths } from '../data/paths';
import { getState } from '../progress/store';

const settings = () => getState().settings;

export interface AudioRec {
    us?: string;
    uk?: string;
    any?: string;
    ipa?: string;
}
const AUDIO_KEY = 'ep.audio.v1';
export let audioMap: Record<string, AudioRec> = lsJSON<Record<string, AudioRec>>(AUDIO_KEY) || {};
const audioPending: Record<string, Promise<AudioRec | null>> = {};
let audioSaveT: ReturnType<typeof setTimeout> | undefined;
const audioSave = () => {
    clearTimeout(audioSaveT);
    audioSaveT = setTimeout(() => {
        // не влезло в хранилище — начинаем кеш заново
        if (!lsSetJSON(AUDIO_KEY, audioMap)) audioMap = {};
    }, 400);
};

export const audioKey = (w: string) => String(w).toLowerCase().trim().replace(/’/g, "'");
const accent = (): 'us' | 'uk' => (settings().accent === 'uk' ? 'uk' : 'us');
export const recUrl = (x: AudioRec | undefined) => {
    const p = accent();
    return x ? x[p] || x.us || x.uk || x.any || '' : '';
};
const pick = (x: AudioRec | null | undefined) => (x ? { u: recUrl(x), ipa: x.ipa || '' } : null);

let deckIds: Set<string> | null = null;
function inDeck(k: string): boolean {
    if (!deckIds) {
        const rows = peekJSON<[string, ...unknown[]][]>(paths.words);
        if (!rows) return false;
        deckIds = new Set(rows.map((w) => w[0].toLowerCase()));
    }
    return deckIds.has(k);
}
/** Для чего ищем запись: одно слово или короткое слово колоды (phrasal verbs) */
export const liveEligible = (w: string) =>
    /^[a-z][a-z'’-]*$/i.test(w) || (inDeck(w.toLowerCase()) && w.split(' ').length <= 3);

// узкие типы ответов внешних API
interface DictPhon {
    text?: string;
    audio?: string;
}
interface DictEntry {
    phonetic?: string;
    phonetics?: DictPhon[];
}
interface CommonsPage {
    title?: string;
    videoinfo?: { url?: string; derivatives?: { src?: string; type?: string }[] }[];
}

/** Запись произношения и транскрипция (кеш в localStorage). null — нет сети */
export function liveAudio(word: string): Promise<{ u: string; ipa: string } | null> {
    const k = audioKey(word);
    if (k in audioMap) return Promise.resolve(pick(audioMap[k]));
    if (k in audioPending) return audioPending[k].then(pick);
    const pref = accent();
    const rec: AudioRec = {};
    const dict = fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + encodeURIComponent(k))
        .then((r) => (r.ok ? r.json() : []) as Promise<unknown>)
        .then((j) => {
            const list = (Array.isArray(j) ? j : []) as DictEntry[];
            list.forEach((e) =>
                (e.phonetics || []).forEach((ph) => {
                    if (ph.text && !rec.ipa) rec.ipa = ph.text;
                    const a = ph.audio;
                    if (!a) return;
                    const tag = /-(us|uk|au|ca)\.mp3$/i.exec(a);
                    const t = tag ? tag[1].toLowerCase() : 'any';
                    const slot = t === 'us' || t === 'ca' ? 'us' : t === 'uk' ? 'uk' : 'any';
                    if (!rec[slot]) rec[slot] = a;
                    if (ph.text && slot === pref) rec.ipa = ph.text;
                }),
            );
            if (!rec.ipa && list[0]?.phonetic) rec.ipa = list[0].phonetic;
        });
    const commons = () => {
        if (rec.us || rec.uk || rec.any || /\s/.test(k)) return null;
        const titles = ['En-us-' + k + '.ogg', 'En-uk-' + k + '.ogg', 'LL-Q1860 (eng)-Vealhurl-' + k + '.wav']
            .map((x) => 'File:' + x)
            .join('|');
        return fetch(
            'https://commons.wikimedia.org/w/api.php?action=query&format=json&origin=*&prop=videoinfo&viprop=url|derivatives&titles=' +
                encodeURIComponent(titles),
        )
            .then((r) => r.json() as Promise<{ query?: { pages?: Record<string, CommonsPage> } }>)
            .then((j) =>
                Object.values(j.query?.pages || {}).forEach((pg) => {
                    const vi = pg.videoinfo?.[0];
                    if (!vi) return;
                    const mp3 = (vi.derivatives || []).find((d) => /mpeg|mp3/.test(d.type || d.src || ''));
                    const src = mp3?.src || vi.url;
                    if (!src) return;
                    const title = pg.title || '';
                    const slot = /En-us-/i.test(title) ? 'us' : /En-uk-/i.test(title) ? 'uk' : 'any';
                    if (!rec[slot]) rec[slot] = src;
                }),
            );
    };
    const p: Promise<AudioRec | null> = dict
        .catch(() => undefined)
        .then(commons)
        .catch(() => undefined)
        .then(() => {
            audioMap[k] = rec;
            audioSave();
            delete audioPending[k];
            return rec;
        })
        .catch(() => {
            delete audioPending[k];
            return null;
        });
    audioPending[k] = p;
    return p.then(pick);
}

/** Уже известная запись слова (без запроса в сеть) */
export const knownLive = (word: string) => pick(audioMap[audioKey(word)]);
