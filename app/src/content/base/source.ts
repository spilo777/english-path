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

/** Несколько источников как один: массив их значений (готов, когда готовы все) */
export function all<T>(key: string, parts: readonly Source<T>[]): Source<T[]> {
    let last: { vals: T[]; out: T[] } | null = null;
    // та же ссылка, пока значения частей не изменились — и после load(), и в peek()
    const stable = (vals: T[]): T[] => {
        if (!last || last.vals.length !== vals.length || last.vals.some((v, i) => v !== vals[i]))
            last = { vals, out: vals.slice() };
        return last.out;
    };
    return {
        key,
        load: () => Promise.all(parts.map((p) => p.load())).then(stable),
        peek: () => {
            const vals: T[] = [];
            for (const p of parts) {
                const v = p.peek();
                if (v === undefined) return undefined;
                vals.push(v);
            }
            return stable(vals);
        },
    };
}

/** Источник, который зависит от значения другого: например, уроки уровня → их тела */
export function chain<A extends object, T>(from: Source<A>, key: string, next: (a: A) => Source<T>): Source<T> {
    const pick = memo(next);
    return {
        key,
        load: () => from.load().then((a) => pick(a).load()),
        peek: () => {
            const a = from.peek();
            return a === undefined ? undefined : pick(a).peek();
        },
    };
}
