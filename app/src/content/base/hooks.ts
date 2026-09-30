// React: загрузка источника с перерисовкой (как useJSON, но для любого Source)
import { useEffect, useState } from 'react';
import type { Loaded } from '../../core/data/loader';
import type { Source } from './source';

/** Пока грузится — data undefined; готовое значение отдаётся сразу, без мигания */
export function useSource<T>(src: Source<T> | null): Loaded<T> {
    const [st, setSt] = useState<{ key: string | null } & Loaded<T>>(() => ({
        key: src ? src.key : null,
        data: src ? src.peek() : undefined,
        error: null,
    }));
    const key = src ? src.key : null;
    useEffect(() => {
        if (!src) {
            setSt({ key: null, data: undefined, error: null });
            return;
        }
        const now = src.peek();
        if (now !== undefined) {
            setSt({ key: src.key, data: now, error: null });
            return;
        }
        let alive = true;
        setSt({ key: src.key, data: undefined, error: null });
        src.load()
            .then((d) => {
                if (alive) setSt({ key: src.key, data: d, error: null });
            })
            .catch((e: Error) => {
                if (alive) setSt({ key: src.key, data: undefined, error: e });
            });
        return () => {
            alive = false;
        };
        // источник определяется ключом: новый объект с тем же ключом — тот же источник
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);
    // источник сменился, эффект ещё не отработал — не показываем данные старого
    if (st.key !== key) return { data: src ? src.peek() : undefined, error: null };
    return { data: st.data, error: st.error };
}
