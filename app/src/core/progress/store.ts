// Хранилище прогресса: один объект в localStorage['englishpath.v1'], подписка на изменения.
// Формат совместим со старым сайтом — прогресс и облачная синхронизация переносятся как есть.
import { getConfig } from '../config/current';
import { defaults, normalize } from './defaults';
import type { Progress } from './types';

/** Ключ прогресса в localStorage (читается при запуске) */
export const STORE_KEY = getConfig().storage.progressKey;
/** Порог сдачи теста — для страниц, пока они не на движке; в core читать getConfig().course.passMark */
export const PASS = getConfig().course.passMark;

function load(): Progress {
    try {
        return normalize(JSON.parse(localStorage.getItem(STORE_KEY) || '{}'));
    } catch {
        return defaults();
    }
}

let state: Progress = load();
let version = 0;
/** Номер версии состояния: растёт при каждом сохранении (для React-подписки) */
export const getVersion = () => version;
const listeners = new Set<() => void>();
const afterSave = new Set<(s: Progress) => void>();
let settingsSnap = JSON.stringify(state.settings);

function persist() {
    const snap = JSON.stringify(state.settings);
    if (snap !== settingsSnap) {
        state.settingsMod = Date.now();
        settingsSnap = snap;
    }
    try {
        localStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch {
        /* переполнение — молча */
    }
}

/** Текущее состояние (изменять только через update) */
export const getState = (): Progress => state;

/** Изменить прогресс: функция получает объект и меняет его на месте */
export function update(fn: (s: Progress) => void, opts: { silent?: boolean } = {}) {
    fn(state);
    persist();
    version++;
    listeners.forEach((l) => l());
    if (!opts.silent) afterSave.forEach((f) => f(state));
}

/** Полностью заменить состояние (облако, импорт, сброс) */
export function replaceState(next: Progress) {
    state = normalize(next);
    settingsSnap = JSON.stringify(state.settings);
    persist();
    version++;
    listeners.forEach((l) => l());
}

export function subscribe(l: () => void) {
    listeners.add(l);
    return () => {
        listeners.delete(l);
    };
}
/** Вызывается после каждого сохранения (достижения, облако) */
export function onSave(f: (s: Progress) => void) {
    afterSave.add(f);
    return () => {
        afterSave.delete(f);
    };
}
