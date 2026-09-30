// Озвучка: живые записи носителей (./live), иначе голос браузера (TTS). Разблокировка звука на iOS — при первом касании
import { clamp } from '@utils/math';
import { toast } from '../notifications/notify';
import { getState, update } from '../progress/store';
import { audioKey, audioMap, liveAudio, liveEligible, recUrl } from './live';
import { onGesture } from './unlock';

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
onGesture(unlockAudio);

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
        liveEl.playbackRate = clamp(rate || 1, 0.7, 1);
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
