// React: статус облака
import { useSyncExternalStore } from 'react';
import { Cloud } from './client';
import type { CloudStatus } from './types';

/** React: статус облака с перерисовкой при изменениях (вход, синхронизация, редкость) */
export function useCloud(): CloudStatus {
    return useSyncExternalStore(Cloud.onChange, Cloud.status, Cloud.status);
}
