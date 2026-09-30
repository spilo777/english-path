// Свежие видео каналов: функция yt в Supabase (RSS-ленты YouTube), кеш в памяти и localStorage
import { DAY } from '@utils/date';
import { lsJSON, lsSetJSON } from '@utils/storage';
import { functionUrl } from '../../core/cloud/config';
import { getConfig } from '../../core/config/current';
import { CHANNELS } from './channels';
import type { Channel, ChannelArt, Video } from './model';

const URL_ = functionUrl('yt');
const KEY = getConfig().storage.feed.key;
export type Feed = Record<string, Video[]>;
type Arts = Record<string, ChannelArt>;
let mem: Feed | null = null;
let arts: Arts = {};
let inflight: Promise<Feed> | null = null;
const artSubs = new Set<() => void>();

/** Лента, уже загруженная в этой вкладке (или null) */
export const feedNow = (): Feed | null => mem;
/** Свежие картинки канала из функции yt (если уже пришли) */
export const artOf = (id: string): ChannelArt | undefined => arts[id];
/** Подписка на появление свежих картинок каналов */
export function onArts(f: () => void) {
    artSubs.add(f);
    return () => {
        artSubs.delete(f);
    };
}

function readCache(): { at: number; channels: Feed; meta?: Arts } | null {
    const x = lsJSON<{ at: number; channels: Feed; meta?: Arts }>(KEY);
    return x && x.channels ? x : null;
}
function setArts(m: Arts | undefined) {
    if (m && Object.keys(m).length) {
        arts = m;
        artSubs.forEach((f) => f());
    }
}

/** Свежие видео всех каналов (кеш в памяти и localStorage на 3 часа; без сети — последняя копия) */
export function loadFeed(): Promise<Feed> {
    if (mem) return Promise.resolve(mem);
    const c = readCache();
    if (c) setArts(c.meta);
    const ttl = getConfig().storage.feed.ttlHours * 3600 * 1000;
    if (c && Date.now() - c.at < ttl) return Promise.resolve((mem = c.channels));
    if (!inflight) {
        inflight = fetch(URL_)
            .then((r) => r.json())
            .then((j: { channels?: Feed; meta?: Arts }) => {
                const ch = j && j.channels ? j.channels : {};
                setArts(j && j.meta);
                lsSetJSON(KEY, { at: Date.now(), channels: ch, meta: arts });
                return (mem = ch);
            })
            .catch(() => (c ? c.channels : {}))
            .finally(() => {
                inflight = null;
            });
    }
    return inflight;
}

/** Найти видео по id во всех каналах */
export function findVideo(feed: Feed | null, vid: string): { v: Video; ch: Channel } | null {
    if (!feed) return null;
    for (const ch of CHANNELS) {
        const v = (feed[ch.id] || []).find((x) => x.id === vid);
        if (v) return { v, ch };
    }
    return null;
}

export const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
export const ago = (iso: string) => {
    const d = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / DAY));
    return d === 0
        ? 'сегодня'
        : d === 1
          ? 'вчера'
          : d < 7
            ? `${d} дн. назад`
            : d < 30
              ? `${Math.round(d / 7)} нед. назад`
              : `${Math.round(d / 30)} мес. назад`;
};
