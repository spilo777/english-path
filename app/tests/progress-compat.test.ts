// Совместимость формата прогресса: localStorage['englishpath.v1'] и состояние в облаке (Supabase).
// Эталон (fixtures/progress-v1.golden.json) снят с кода до перестройки на слои. Если тест упал —
// формат или слияние изменились: это допустимо только осознанно, с обновлением эталона в том же коммите.
import { beforeAll, describe, expect, it } from 'vitest';
import local from './fixtures/progress-v1.json';
import remote from './fixtures/progress-v1-remote.json';
import golden from './fixtures/progress-v1.golden.json';
import type { Progress } from '../src/lib/types';

type Store = typeof import('../src/lib/store');
type CloudMod = typeof import('../src/lib/cloud');
const clone = <T>(x: T): T => JSON.parse(JSON.stringify(x)) as T;
const plain = (x: unknown) => JSON.parse(JSON.stringify(x)) as unknown;

let store: Store;
let cloud: CloudMod;

beforeAll(async () => {
    // сохранённый прогресс лежит в localStorage до загрузки модуля — как у вернувшегося пользователя
    localStorage.setItem('englishpath.v1', JSON.stringify(local));
    store = await import('../src/lib/store');
    cloud = await import('../src/lib/cloud');
});

describe('формат прогресса v1', () => {
    it('ключ хранилища не меняется', () => {
        expect(store.STORE_KEY).toBe('englishpath.v1');
    });

    it('пустое и умолчания совпадают с эталоном', () => {
        expect(plain(store.normalize({}))).toEqual(golden.empty);
        expect(plain(store.defaults())).toEqual(golden.defaults);
    });

    it('сохранённый прогресс читается без потерь', () => {
        expect(plain(store.normalize(clone(local)))).toEqual(golden.normalized);
        expect(plain(store.getState())).toEqual(golden.normalized);
    });

    it('сохранение пишет тот же JSON под тем же ключом', () => {
        store.update(() => {}, { silent: true });
        const saved = JSON.parse(localStorage.getItem('englishpath.v1') || 'null') as unknown;
        expect(saved).toEqual(golden.normalized);
    });

    it('слияние с облаком совпадает с эталоном в обе стороны', () => {
        const l = clone(local) as Partial<Progress>,
            r = clone(remote) as Partial<Progress>;
        expect(plain(cloud.merge(l, r))).toEqual(golden.mergeLR);
        expect(plain(cloud.merge(clone(remote) as Partial<Progress>, clone(local) as Partial<Progress>))).toEqual(
            golden.mergeRL,
        );
    });

    it('слияние с самим собой ничего не меняет в данных', () => {
        const m = cloud.merge(clone(local) as Partial<Progress>, clone(local) as Partial<Progress>);
        expect(plain(m.cards)).toEqual(local.cards);
        expect(plain(m.units)).toEqual(local.units);
        expect(plain(m.settings)).toEqual(local.settings);
        expect(plain(m.known)).toEqual(local.known);
    });
});
