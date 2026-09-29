// Настоящие картинки YouTube-канала: круглый аватар и шапка (баннер)
import type { CSSProperties, SyntheticEvent } from 'react';
import { useChannelArt, type Channel } from '../lib/listen';
import './ChannelArt.css';

/** картинка не загрузилась (нет сети) — остаётся цветной фон канала, без значка «битой» картинки */
const hide = (e: SyntheticEvent<HTMLImageElement>) => { e.currentTarget.style.visibility = 'hidden'; };

export function ChannelCard({ ch }: { ch: Channel }) {
  const art = useChannelArt(ch);
  return (
    <a className="ls-card" href="#/listen" style={{ '--cc': ch.color } as CSSProperties}>
      <span className="ls-card-ban"><img src={art.banner} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={hide} /></span>
      <span className="ls-card-body">
        <img className="ch-ava ls-card-ava" src={art.avatar} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={hide} />
        <b>{ch.short}</b>
        <span className="tiny muted">{ch.levels[0]}–{ch.levels[1]} · {ch.accent}</span>
      </span>
    </a>
  );
}

export function ChannelBanner({ ch }: { ch: Channel }) {
  const art = useChannelArt(ch);
  return (
    <div className="ls-ban">
      <img className="ls-ban-img" src={art.banner} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={hide} />
      <img className="ch-ava ls-ava" src={art.avatar} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={hide} />
    </div>
  );
}
