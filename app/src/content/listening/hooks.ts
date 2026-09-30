// React: лента видео и картинки каналов
import { useEffect, useState } from 'react';
import { artOf, feedNow, loadFeed, onArts, type Feed } from './feed';
import type { Channel, ChannelArt } from './model';

export function useFeed(): Feed | null {
    const [f, setF] = useState<Feed | null>(feedNow);
    useEffect(() => {
        let alive = true;
        void loadFeed().then((x) => {
            if (alive) setF(x);
        });
        return () => {
            alive = false;
        };
    }, []);
    return f;
}

/** Аватар и шапка канала: свежие из функции yt, пока их нет — сохранённые настоящие картинки канала */
export function useChannelArt(ch: Channel): ChannelArt {
    const [, tick] = useState(0);
    useEffect(() => {
        const off = onArts(() => tick((x) => x + 1));
        void loadFeed();
        return off;
    }, []);
    const a = artOf(ch.id);
    return { avatar: a?.avatar || ch.avatar, banner: a?.banner || ch.banner };
}
