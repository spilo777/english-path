// «Слушать»: YouTube-каналы для аудирования. Свежие видео — функция yt в Supabase (RSS-ленты YouTube, кеш 3 часа)
import { useEffect, useState } from 'react';
import type { Level } from './types';

export interface Channel {
  id: string; handle: string; name: string; short: string;
  levels: [Level, Level]; accent: string; color: string;
  about: string; how: string;
}
export interface Video { id: string; title: string; published: string; views: number }

export const CHANNELS: Channel[] = [
  {
    id: 'UC9VWyvdF-91McG6kt27MeKA', handle: 'markkulek', name: 'Mark Kulek', short: 'Mark Kulek', levels: ['A1', 'A2'], accent: 'американский', color: '#E0901A',
    about: 'Короткие диалоги на бытовые темы: магазин, работа, путешествия, мнения. Говорит медленно и очень чётко, на экране — картинки и текст.',
    how: 'Идеален для shadowing: поставьте на паузу после каждой реплики и повторите вслух с той же интонацией.',
  },
  {
    id: 'UCZJJTxA36ZPNTJ1WFIByaeA', handle: 'learnenglishwithbobthecanadian', name: 'Learn English with Bob the Canadian', short: 'Bob the Canadian', levels: ['A2', 'B1'], accent: 'канадский (как американский)', color: '#E0453C',
    about: 'Боб — учитель из Канады: уроки «Let’s Learn English!» про повседневные слова и фразы, прогулки по ферме и городу. Спокойный темп, понятное произношение.',
    how: 'Смотрите с английскими субтитрами. Выписывайте 3–5 новых фраз за видео и добавляйте их в «Мои слова».',
  },
  {
    id: 'UC2L7vR43LKuBXXV2AentEMw', handle: 'lukesenglishpodcast', name: "Luke's English Podcast", short: 'Luke’s Podcast', levels: ['B1', 'B2'], accent: 'британский', color: '#4F6AF0',
    about: 'Подкаст британского преподавателя: истории, юмор, культура, разборы фраз. Живая естественная речь — длинные выпуски, как разговор с другом.',
    how: 'Слушайте на прогулке или в дороге, не пытаясь понять каждое слово: цель — привыкнуть к живой британской речи. Начните с выпусков, где тема вам интересна.',
  },
];
export const channelOf = (id: string) => CHANNELS.find((c) => c.id === id);

const URL_ = 'https://rxpmzsresfuevebkirsk.supabase.co/functions/v1/yt';
const KEY = 'ep.yt';
type Feed = Record<string, Video[]>;
let mem: Feed | null = null;
let inflight: Promise<Feed> | null = null;

function readCache(): { at: number; channels: Feed } | null {
  try { const x = JSON.parse(localStorage.getItem(KEY) || 'null'); return x && x.channels ? x : null; } catch { return null; }
}

/** Свежие видео всех каналов (кеш в памяти и localStorage на 3 часа; без сети — последняя копия) */
export function loadFeed(): Promise<Feed> {
  if (mem) return Promise.resolve(mem);
  const c = readCache();
  if (c && Date.now() - c.at < 3 * 3600 * 1000) return Promise.resolve((mem = c.channels));
  if (!inflight) {
    inflight = fetch(URL_).then((r) => r.json()).then((j: { channels?: Feed }) => {
      const ch = j && j.channels ? j.channels : {};
      try { localStorage.setItem(KEY, JSON.stringify({ at: Date.now(), channels: ch })); } catch { /* приватный режим */ }
      return (mem = ch);
    }).catch(() => (c ? c.channels : {})).finally(() => { inflight = null; });
  }
  return inflight;
}

export function useFeed(): Feed | null {
  const [f, setF] = useState<Feed | null>(mem);
  useEffect(() => { let alive = true; void loadFeed().then((x) => { if (alive) setF(x); }); return () => { alive = false; }; }, []);
  return f;
}

/** Найти видео по id во всех каналах */
export function findVideo(feed: Feed | null, vid: string): { v: Video; ch: Channel } | null {
  if (!feed) return null;
  for (const ch of CHANNELS) { const v = (feed[ch.id] || []).find((x) => x.id === vid); if (v) return { v, ch }; }
  return null;
}

export const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
export const ago = (iso: string) => {
  const d = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / 86400000));
  return d === 0 ? 'сегодня' : d === 1 ? 'вчера' : d < 7 ? `${d} дн. назад` : d < 30 ? `${Math.round(d / 7)} нед. назад` : `${Math.round(d / 30)} мес. назад`;
};
