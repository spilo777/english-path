// Маленький hash-роутер: #/unit/a1-3/practice → ['unit', 'a1-3', 'practice'].
// Хеш выбран потому, что GitHub Pages не умеет отдавать index.html на любые пути.
import { useSyncExternalStore } from 'react';

const parse = () => location.hash.replace(/^#\/?/, '').split('?')[0].split('/').filter(Boolean).map(decodeURIComponent);

let parts = parse();
let key = location.hash;
const listeners = new Set<() => void>();
window.addEventListener('hashchange', () => {
    parts = parse();
    key = location.hash;
    listeners.forEach((l) => l());
});

export function useRoute(): string[] {
    useSyncExternalStore(
        (l) => {
            listeners.add(l);
            return () => {
                listeners.delete(l);
            };
        },
        () => key,
        () => key,
    );
    return parts;
}

/** Перейти по адресу (#/…) */
export function go(to: string) {
    const h = to.startsWith('#') ? to : '#' + (to.startsWith('/') ? to : '/' + to);
    if (location.hash === h) {
        parts = parse();
        listeners.forEach((l) => l());
    } else location.hash = h;
}

/** Ссылка для href */
export const href = (...segs: (string | number)[]) => '#/' + segs.map((x) => encodeURIComponent(String(x))).join('/');
