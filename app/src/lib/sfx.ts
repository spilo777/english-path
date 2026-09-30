// Звуки ответов: короткий синтезированный «трунь» (без файлов), выключается в настройках
import { getState } from './store';

let actx: AudioContext | null = null;
function audioCtx(): AudioContext | null {
    try {
        const Ctor =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!Ctor) return null;
        actx = actx || new Ctor();
        // iOS переводит звук в 'interrupted' после озвучки/звонка — будим из любого состояния, кроме 'running'
        if (actx.state !== 'running') void actx.resume().catch(() => undefined);
        return actx;
    } catch {
        return null;
    }
}
// iOS: звуки сайта как у медиа — играют и при беззвучном режиме (как озвучка слов)
try {
    const nav = navigator as unknown as { audioSession?: { type: string } };
    if (nav.audioSession) nav.audioSession.type = 'playback';
} catch {
    /* старые браузеры */
}
// будим звук на каждом касании, пока он не заработает (не один раз: iOS может снова его приостановить)
function unlock() {
    const ctx = audioCtx();
    if (!ctx || ctx.state === 'running') return;
    try {
        const src = ctx.createBufferSource();
        src.buffer = ctx.createBuffer(1, 1, 22050);
        src.connect(ctx.destination);
        src.start(0);
    } catch {
        /* ничего */
    }
}
if (typeof document !== 'undefined')
    ['touchend', 'click', 'keydown'].forEach((ev) =>
        document.addEventListener(ev, unlock, { capture: true, passive: true }),
    );

export function ding(kind: 'ok' | 'bad' | 'done') {
    if (getState().settings.sfx === false) return;
    const ctx = audioCtx();
    if (!ctx) return;
    // звук ещё просыпается — сыграть, как только проснётся
    if (ctx.state !== 'running') {
        void ctx
            .resume()
            .then(() => play(ctx, kind))
            .catch(() => undefined);
        return;
    }
    play(ctx, kind);
}

function play(ctx: AudioContext, kind: 'ok' | 'bad' | 'done') {
    const t0 = ctx.currentTime;
    const tone = (f: number, at: number, dur: number, vol: number, type: OscillatorType = 'sine') => {
        const o = ctx.createOscillator(),
            g = ctx.createGain();
        o.type = type;
        o.frequency.setValueAtTime(f, t0 + at);
        g.gain.setValueAtTime(0.0001, t0 + at);
        g.gain.exponentialRampToValueAtTime(vol, t0 + at + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
        o.connect(g).connect(ctx.destination);
        o.start(t0 + at);
        o.stop(t0 + at + dur + 0.02);
    };
    if (kind === 'ok') {
        tone(880, 0, 0.16, 0.18, 'triangle');
        tone(1318.5, 0.09, 0.28, 0.16, 'triangle');
        tone(1760, 0.09, 0.2, 0.05, 'sine');
    } else if (kind === 'done') {
        [659.3, 830.6, 987.8, 1318.5].forEach((f, i) => tone(f, i * 0.09, 0.32, 0.16, 'triangle'));
    }
    // «ту-дут»: две ноты вниз, с паузой — слышно и на динамике телефона
    else {
        tone(392, 0, 0.13, 0.17, 'triangle');
        tone(784, 0, 0.1, 0.03, 'sine');
        tone(262, 0.17, 0.26, 0.18, 'triangle');
        tone(524, 0.17, 0.2, 0.03, 'sine');
    }
}
