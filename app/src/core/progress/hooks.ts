// React: подписка на прогресс
import { useSyncExternalStore } from 'react';
import { getState, getVersion, subscribe } from './store';
import type { Progress } from './types';

/** React: перерисовать компонент при любом изменении прогресса */
export function useProgress(): Progress {
    useSyncExternalStore(subscribe, getVersion, getVersion);
    return getState();
}
