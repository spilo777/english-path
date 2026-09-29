// Звуки ответов: короткий синтезированный «трунь» (без файлов), выключается в настройках
import { getState } from './store';

let actx: AudioContext | null = null;
function audioCtx(): AudioContext | null {
  try {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    actx = actx || new Ctor();
    if (actx.state === 'suspended') void actx.resume();
    return actx;
  } catch { return null; }
}
// iOS: контекст нужно создать/разбудить в ответ на касание
if (typeof document !== 'undefined') {
  document.addEventListener('touchend', audioCtx, { once: true, capture: true });
  document.addEventListener('click', audioCtx, { once: true, capture: true });
}

export function ding(kind: 'ok' | 'bad' | 'done') {
  if (getState().settings.sfx === false) return;
  const ctx = audioCtx(); if (!ctx) return;
  const t0 = ctx.currentTime;
  const tone = (f: number, at: number, dur: number, vol: number, type: OscillatorType = 'sine') => {
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(f, t0 + at);
    g.gain.setValueAtTime(0.0001, t0 + at);
    g.gain.exponentialRampToValueAtTime(vol, t0 + at + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + at + dur);
    o.connect(g).connect(ctx.destination);
    o.start(t0 + at); o.stop(t0 + at + dur + 0.02);
  };
  if (kind === 'ok') { tone(880, 0, 0.16, 0.18, 'triangle'); tone(1318.5, 0.09, 0.28, 0.16, 'triangle'); tone(1760, 0.09, 0.2, 0.05, 'sine'); }
  else if (kind === 'done') { [659.3, 830.6, 987.8, 1318.5].forEach((f, i) => tone(f, i * 0.09, 0.32, 0.16, 'triangle')); }
  else { tone(220, 0, 0.16, 0.12, 'sine'); tone(196, 0.1, 0.18, 0.1, 'sine'); }
}
