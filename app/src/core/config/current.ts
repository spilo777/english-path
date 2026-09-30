// Текущий конфиг движка. ENEngine вызывает setConfig при создании; модули читают getConfig() в момент вызова.
// Исключение — ключи хранилища (storage.*): их читают один раз при запуске.
import { DEFAULT_CONFIG } from './defaults';
import type { DeepPartial, EngineConfig } from './types';

let current: EngineConfig = DEFAULT_CONFIG;

const isPlain = (x: unknown): x is Record<string, unknown> => !!x && typeof x === 'object' && !Array.isArray(x);

/** Глубокое слияние: объекты — по полям, массивы и значения — заменяются целиком */
export function mergeConfig<T>(base: T, over: DeepPartial<T> | undefined): T {
    if (!isPlain(over)) return base;
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [k, v] of Object.entries(over)) {
        if (v === undefined) continue;
        out[k] = isPlain(v) && isPlain(out[k]) ? mergeConfig(out[k], v) : v;
    }
    return out as T;
}

export const getConfig = (): EngineConfig => current;

/** Задать конфиг поверх значений по умолчанию (не поверх предыдущего вызова) */
export function setConfig(over?: DeepPartial<EngineConfig>): EngineConfig {
    current = Object.freeze(mergeConfig(DEFAULT_CONFIG, over));
    return current;
}
