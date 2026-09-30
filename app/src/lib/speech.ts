// Озвучка: живые записи носителей (Викисловарь: dictionaryapi.dev + Wikimedia Commons), иначе голос браузера (TTS).
import { useEffect, useState } from 'react';
import { lsJSON, lsSetJSON } from '@utils/storage';
import { toast } from '../components/ui';
import { paths, peekJSON } from './data';
import { getState, update } from './store';
import type { DeckWordRow } from './types';

export interface SpeakOpts {
    rate?: number;
    speaker?: number;
    onend?: () => void;
    tts?: boolean;
}

const hasTTS = () => typeof window !== 'undefined' && 'speechSynthesis' in window;
const settings = () => getState().settings;

// ───────── голоса браузера ─────────
let voices: SpeechSynthesisVoice[] = [];
function loadVoices() {
    if (!hasTTS()) return;
    voices = (speechSynthesis.getVoices() || []).filter((v) => /^en[-_]/i.test(v.lang));
}
if (hasTTS()) {
    loadVoices();
    try {
        speechSynthesis.addEventListener('voiceschanged', loadVoices);
    } catch {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
}

/** Английские голоса браузера */
export function listVoices(): SpeechSynthesisVoice[] {
    if (!voices.length) loadVoices();
    return voices;
}

function pickVoice(): SpeechSynthesisVoice | undefined {
    if (!voices.length) loadVoices();
    const name = settings().voice;
    return (
        voices.find((v) => v.name === name) ||
        voices.find((v) => /en-US/i.test(v.lang) && /Samantha|Google US|Aria|Jenny|Ava/i.test(v.name)) ||
        voices.find((v) => /en-US/i.test(v.lang)) ||
        voices[0]
    );
}

const countSpeak = (live: boolean) =>
    update(
        (s) => {
            s.stats.speaks = (s.stats.speaks || 0) + 1;
            if (live) s.stats.live = (s.stats.live || 0) + 1;
        },
        { silent: true },
    );

/** Голос браузера. speaker — номер говорящего в диалоге (другой голос и высота) */
export function speakTTS(text: string, opts: SpeakOpts = {}): SpeechSynthesisUtterance | null {
    if (!hasTTS()) {
        toast('Браузер не поддерживает озвучку');
        return null;
    }
    speechSynthesis.cancel();
    countSpeak(false);
    const u = new SpeechSynthesisUtterance(text);
    let v = pickVoice();
    if (opts.speaker != null && opts.speaker >= 0 && voices.length > 1) {
        const alt = voices.filter((x) => x !== v);
        v = opts.speaker % 2 ? alt.find((x) => x.lang === v?.lang) || alt[0] : v;
        u.pitch = [1, 0.95, 1.12, 0.88][opts.speaker % 4];
    }
    if (v) u.voice = v;
    u.lang = v ? v.lang : 'en-US';
    u.rate = opts.rate || settings().rate;
    if (opts.onend) u.onend = opts.onend;
    speechSynthesis.speak(u);
    return u;
}

// ───────── живое произношение ─────────
interface AudioRec {
    us?: string;
    uk?: string;
    any?: string;
    ipa?: string;
}
const AUDIO_KEY = 'ep.audio.v1';
let audioMap: Record<string, AudioRec> = lsJSON<Record<string, AudioRec>>(AUDIO_KEY) || {};
const audioPending: Record<string, Promise<AudioRec | null>> = {};
let audioSaveT: ReturnType<typeof setTimeout> | undefined;
const audioSave = () => {
    clearTimeout(audioSaveT);
    audioSaveT = setTimeout(() => {
        // не влезло в хранилище — начинаем кеш заново
        if (!lsSetJSON(AUDIO_KEY, audioMap)) audioMap = {};
    }, 400);
};

const audioKey = (w: string) => String(w).toLowerCase().trim().replace(/’/g, "'");
const accent = (): 'us' | 'uk' => (settings().accent === 'uk' ? 'uk' : 'us');
const recUrl = (x: AudioRec | undefined) => {
    const p = accent();
    return x ? x[p] || x.us || x.uk || x.any || '' : '';
};
const pick = (x: AudioRec | null | undefined) => (x ? { u: recUrl(x), ipa: x.ipa || '' } : null);

let deckIds: Set<string> | null = null;
function inDeck(k: string): boolean {
    if (!deckIds) {
        const rows = peekJSON<DeckWordRow[]>(paths.words);
        if (!rows) return false;
        deckIds = new Set(rows.map((w) => w[0].toLowerCase()));
    }
    return deckIds.has(k);
}
/** Для чего ищем запись: одно слово или короткое слово колоды (phrasal verbs) */
const liveEligible = (w: string) =>
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

// ───────── общий <audio> и разблокировка iOS ─────────
// iOS/Safari разрешает звук только в ответ на нажатие: один раз «будим» общий <audio> и синтез речи
// при первом касании — после этого записи играют и после загрузки из сети.
const liveEl: HTMLAudioElement | null = typeof Audio !== 'undefined' ? new Audio() : null;
if (liveEl) liveEl.preload = 'auto';
let speakTok = 0;

const silentWav = (() => {
    try {
        const n = 800,
            b = new ArrayBuffer(44 + n * 2),
            d = new DataView(b);
        const w = (o: number, t: string) => {
            for (let i = 0; i < t.length; i++) d.setUint8(o + i, t.charCodeAt(i));
        };
        w(0, 'RIFF');
        d.setUint32(4, 36 + n * 2, true);
        w(8, 'WAVE');
        w(12, 'fmt ');
        d.setUint32(16, 16, true);
        d.setUint16(20, 1, true);
        d.setUint16(22, 1, true);
        d.setUint32(24, 16000, true);
        d.setUint32(28, 32000, true);
        d.setUint16(32, 2, true);
        d.setUint16(34, 16, true);
        w(36, 'data');
        d.setUint32(40, n * 2, true);
        return URL.createObjectURL(new Blob([b], { type: 'audio/wav' }));
    } catch {
        return '';
    }
})();

let audioUnlocked = false;
function unlockAudio() {
    if (audioUnlocked) return;
    audioUnlocked = true;
    try {
        if (liveEl && silentWav) {
            liveEl.src = silentWav;
            liveEl.play().catch(() => {
                audioUnlocked = false;
            });
        }
    } catch {
        /* нет audio */
    }
    try {
        if (hasTTS() && !speechSynthesis.speaking) {
            const u = new SpeechSynthesisUtterance(' ');
            u.volume = 0;
            speechSynthesis.speak(u);
        }
    } catch {
        /* нет синтеза */
    }
}
if (typeof document !== 'undefined')
    ['touchend', 'click', 'keydown'].forEach((ev) => document.addEventListener(ev, unlockAudio, true));

function stopAudio() {
    speakTok++;
    try {
        liveEl?.pause();
    } catch {
        /* ничего */
    }
}

/** Остановить любую озвучку */
export function stopSpeech() {
    stopAudio();
    if (hasTTS()) speechSynthesis.cancel();
}

function playLive(url: string, rate: number, fallback: () => void) {
    if (!liveEl) {
        fallback();
        return;
    }
    liveEl.onerror = fallback;
    liveEl.src = url;
    try {
        liveEl.playbackRate = Math.max(0.7, Math.min(1, rate || 1));
    } catch {
        /* старый браузер */
    }
    liveEl.play().catch(fallback);
    countSpeak(true);
}

/** Произнести: для слов — живая запись (если включено), иначе/при ошибке — голос браузера. Fallback на TTS через 2.5 с */
export function speak(text: string, opts: SpeakOpts = {}): void {
    const w = String(text || '').trim();
    stopAudio();
    if (!opts.tts && !opts.onend && settings().liveVoice !== false && liveEligible(w)) {
        const tok = speakTok;
        const rate = opts.rate || settings().rate;
        let fell = false;
        const fallback = () => {
            if (fell || tok !== speakTok) return;
            fell = true;
            speakTTS(text, opts);
        };
        const k = audioKey(w);
        if (k in audioMap) {
            // запись уже известна — играем сразу, в том же нажатии
            const u = recUrl(audioMap[k]);
            if (!u) {
                speakTTS(text, opts);
                return;
            }
            if (hasTTS()) speechSynthesis.cancel();
            playLive(u, rate, fallback);
            return;
        }
        if (hasTTS()) speechSynthesis.cancel();
        const timer = setTimeout(fallback, 2500);
        liveAudio(w)
            .then((a) => {
                clearTimeout(timer);
                if (fell || tok !== speakTok) return;
                if (!a || !a.u) {
                    fallback();
                    return;
                }
                playLive(a.u, rate, fallback);
            })
            .catch(fallback);
        return;
    }
    speakTTS(text, opts);
}

/** Транскрипция слова и есть ли живая запись (для метки «живой голос») */
export function useIpa(word: string): { ipa?: string; live: boolean } {
    const on = settings().liveVoice !== false && !!word && liveEligible(word.trim());
    const [st, setSt] = useState<{ w: string; ipa?: string; live: boolean }>(() => {
        const a = on ? pick(audioMap[audioKey(word)]) : null;
        return { w: word, ipa: a?.ipa || undefined, live: !!a?.u };
    });
    useEffect(() => {
        if (!on) {
            setSt({ w: word, live: false });
            return;
        }
        let alive = true;
        liveAudio(word.trim()).then((a) => {
            if (alive) setSt({ w: word, ipa: a?.ipa || undefined, live: !!a?.u });
        });
        return () => {
            alive = false;
        };
    }, [word, on]);
    return st.w === word ? { ipa: st.ipa, live: st.live } : { live: false };
}
