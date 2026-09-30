// React: обложка статьи/книги с перерисовкой, когда найдётся
import { useEffect, useSyncExternalStore } from 'react';
import { bakedImg, coverOf, coversVersion, needCover, subscribeCovers } from './covers';

/** Ссылка на обложку статьи/книги (или undefined, пока нет или не нашлась) */
export function useCover(id: string, wikiTitle?: string, commons?: string, img?: string): string | undefined {
    useSyncExternalStore(subscribeCovers, coversVersion, coversVersion);
    const ready = img || bakedImg(id);
    useEffect(() => {
        if (!ready) needCover(id, wikiTitle, commons);
    }, [id, wikiTitle, commons, ready]);
    return ready || coverOf(id);
}
