// React: загрузка JSON с перерисовкой
import { useEffect, useState } from 'react';
import { loadJSON, peekJSON, type Loaded } from './loader';

/** Хук: загрузить один или несколько файлов. Пока грузится — data undefined */
export function useJSON<T>(path: string | null): Loaded<T> {
    const [st, setSt] = useState<Loaded<T>>(() => ({ data: path ? peekJSON<T>(path) : undefined, error: null }));
    useEffect(() => {
        if (!path) {
            setSt({ data: undefined, error: null });
            return;
        }
        const now = peekJSON<T>(path);
        if (now) {
            setSt({ data: now, error: null });
            return;
        }
        let alive = true;
        setSt({ data: undefined, error: null });
        loadJSON<T>(path)
            .then((d) => {
                if (alive) setSt({ data: d, error: null });
            })
            .catch((e) => {
                if (alive) setSt({ data: undefined, error: e });
            });
        return () => {
            alive = false;
        };
    }, [path]);
    return st;
}
