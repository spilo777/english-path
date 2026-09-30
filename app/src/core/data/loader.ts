// Загрузка JSON из public/data: кеш в памяти, версия сборки в адресе (?v=) для service worker
import { getConfig } from '../config/current';

const cache = new Map<string, Promise<unknown>>();
const ready = new Map<string, unknown>();

// версия сборки в адресе: данные одной выкладки кешируются навсегда (service worker), новая выкладка — свежие файлы
export const dataUrl = (path: string) => {
    const { app, data } = getConfig();
    return new URL(data.root + path + (app.build ? '?v=' + app.build.slice(0, 10) : ''), document.baseURI).toString();
};

export function loadJSON<T>(path: string): Promise<T> {
    if (!cache.has(path)) {
        const p = fetch(dataUrl(path))
            .then((r) => {
                if (!r.ok) throw new Error(`${path}: ${r.status}`);
                return r.json();
            })
            .then((j) => {
                ready.set(path, j);
                return j;
            })
            .catch((e) => {
                cache.delete(path);
                throw e;
            });
        cache.set(path, p);
    }
    return cache.get(path) as Promise<T>;
}

/** Уже загруженные данные (или undefined) — без ожидания */
export const peekJSON = <T>(path: string): T | undefined => ready.get(path) as T | undefined;

export interface Loaded<T> {
    data: T | undefined;
    error: Error | null;
}
