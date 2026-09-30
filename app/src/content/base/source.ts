// Источник данных: ленивый, с памятью. JSON не вшивается в сборку — грузится через core/data, когда нужен.
// peek() отдаёт уже готовое значение (та же ссылка при каждом вызове), load() — загружает.
import { loadJSON, peekJSON } from '../../core/data/loader';

export interface Source<T> {
    /** Уникальное имя источника (для отладки и кеша производных) */
    readonly key: string;
    load(): Promise<T>;
    /** Готовое значение без ожидания или undefined */
    peek(): T | undefined;
}

/** Преобразование с памятью: для одного и того же входа (по ссылке) — один и тот же результат */
function memo<A extends object, T>(fn: (a: A) => T): (a: A) => T {
    const cache = new WeakMap<A, T>();
    return (a) => {
        if (!cache.has(a)) cache.set(a, fn(a));
        return cache.get(a) as T;
    };
}

/** Файл из public/data, при необходимости преобразованный (map вызывается один раз на загруженный файл) */
export function jsonSource<Raw extends object, T = Raw>(path: string, map?: (raw: Raw) => T): Source<T> {
    const conv = map ? memo(map) : (r: Raw) => r as unknown as T;
    return {
        key: 'json:' + path,
        load: () => loadJSON<Raw>(path).then(conv),
        peek: () => {
            const raw = peekJSON<Raw>(path);
            return raw === undefined ? undefined : conv(raw);
        },
    };
}

/** Производный источник: фильтр/выборка из другого (fn вызывается один раз на значение исходного) */
export function derive<A extends object, T>(from: Source<A>, key: string, fn: (a: A) => T): Source<T> {
    const conv = memo(fn);
    return {
        key,
        load: () => from.load().then(conv),
        peek: () => {
            const a = from.peek();
            return a === undefined ? undefined : conv(a);
        },
    };
}

/** Данные, которые уже есть в коде (каналы, описания достижений) */
export function staticSource<T>(key: string, value: T): Source<T> {
    return { key, load: () => Promise.resolve(value), peek: () => value };
}
