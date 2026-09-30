// Достижения: список, значения и выдача совпадают с эталоном, снятым до разделения модуля на слои
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { ACH_LIST, achCtx, type AchExtra, CAT_COLORS, checkAch, engagement, nearAch } from '@content/achievements';
import { points, rankLadder, tier } from '@core/achievements';
import { normalize } from '../src/core/progress';
import { courseIndex } from '../src/content/lessons';
import { library } from '../src/content/texts';
import { deck } from '../src/content/word-cards';
import local from './fixtures/progress-v1.json';
import golden from './fixtures/achievements.golden.json';
import { serveDataFromDisk } from './helpers/data';

let restore: () => void;
let extra: AchExtra;
beforeAll(async () => {
    restore = serveDataFromDisk();
    const [course, words, lib] = await Promise.all([courseIndex.load(), deck.load(), library.load()]);
    extra = { course, deck: words, library: lib, courseTexts: null };
});
afterAll(() => restore());

const plain = (x: unknown) => JSON.parse(JSON.stringify(x)) as unknown;

describe('достижения', () => {
    it('список: тот же порядок, тексты, редкость, цели и цвета значков', () => {
        const list = ACH_LIST.map((a) => ({
            id: a.id,
            cat: a.cat,
            icon: a.icon,
            title: a.title,
            desc: a.desc,
            pct: a.pct,
            need: a.need,
            hidden: !!a.hidden,
            color: a.color,
        }));
        expect(list).toEqual(golden.list);
        expect(plain(CAT_COLORS)).toEqual(golden.catColors);
    });

    it('значения на сохранённом прогрессе и выданные достижения', () => {
        const s = normalize(JSON.parse(JSON.stringify(local)));
        const c = achCtx(s, extra);
        const vals: Record<string, number> = {};
        ACH_LIST.forEach((a) => (vals[a.id] = a.val(c)));
        expect(vals).toEqual(golden.vals);
        const fresh = checkAch(s, extra).map((a) => a.id);
        expect(fresh).toEqual(golden.fresh);
        expect(plain(nearAch(s, c, 5).map((x) => [x.a.id, x.p]))).toEqual(golden.near);
        const got = Object.fromEntries(fresh.map((id) => [id, 1]));
        expect(plain(engagement({ ...s, ach: got }))).toEqual(golden.engagement);
    });

    it('редкость, очки и лестница званий', () => {
        expect([0.5, 3, 10, 30, 90].map((p) => [tier(p).cls, points(p)])).toEqual(golden.tiers);
        expect(plain(rankLadder())).toEqual(golden.ladder);
    });
});
