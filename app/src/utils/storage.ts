// localStorage / sessionStorage без исключений: в приватном режиме и при переполнении
// чтение возвращает запасное значение, запись — false

type Area = 'localStorage' | 'sessionStorage';

function read(area: Area, k: string): string | null {
    try {
        return globalThis[area].getItem(k);
    } catch {
        return null;
    }
}
function write(area: Area, k: string, v: string): boolean {
    try {
        globalThis[area].setItem(k, v);
        return true;
    } catch {
        return false;
    }
}
function readJSON<T>(area: Area, k: string): T | null {
    try {
        const v = globalThis[area].getItem(k);
        return v == null ? null : (JSON.parse(v) as T);
    } catch {
        return null;
    }
}
function writeJSON(area: Area, k: string, v: unknown): boolean {
    try {
        globalThis[area].setItem(k, JSON.stringify(v));
        return true;
    } catch {
        return false;
    }
}

export function lsGet(k: string): string | null;
export function lsGet(k: string, fallback: string): string;
export function lsGet(k: string, fallback?: string): string | null {
    const v = read('localStorage', k);
    return v == null ? (fallback ?? null) : v;
}
export const lsSet = (k: string, v: string): boolean => write('localStorage', k, v);
export const lsJSON = <T>(k: string): T | null => readJSON<T>('localStorage', k);
export const lsSetJSON = (k: string, v: unknown): boolean => writeJSON('localStorage', k, v);

export function ssGet(k: string): string | null;
export function ssGet(k: string, fallback: string): string;
export function ssGet(k: string, fallback?: string): string | null {
    const v = read('sessionStorage', k);
    return v == null ? (fallback ?? null) : v;
}
export const ssSet = (k: string, v: string): boolean => write('sessionStorage', k, v);
