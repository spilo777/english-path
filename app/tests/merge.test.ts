import { describe, expect, it } from 'vitest';
import { merge } from '../src/lib/cloud';
import { defaults } from '../src/lib/store';
import type { Card, Progress } from '../src/lib/types';

const card = (id: string, o: Partial<Card> = {}): Card => ({
  id, en: id, ru: '', ex: '', exRu: '', src: '', state: 'review', due: 0, ivl: 1, ease: 2.5, reps: 1, lapses: 0, step: 0, added: 1, mod: 1, ...o,
});
const st = (fn: (s: Progress) => void): Progress => { const s = defaults(); fn(s); return s; };

describe('слияние прогресса', () => {
  it('карточки: побеждает изменённая позже, при равном mod — больше повторений', () => {
    const a = st((s) => { s.cards.cat = card('cat', { mod: 200, ivl: 5 }); s.cards.dog = card('dog', { mod: 100, reps: 2 }); s.cards.own = card('own'); });
    const b = st((s) => { s.cards.cat = card('cat', { mod: 100, ivl: 30 }); s.cards.dog = card('dog', { mod: 100, reps: 7 }); s.cards.far = card('far'); });
    const m = merge(a, b);
    expect(m.cards.cat.ivl).toBe(5);
    expect(m.cards.dog.reps).toBe(7);
    expect(Object.keys(m.cards).sort()).toEqual(['cat', 'dog', 'far', 'own']);
  });

  it('надгробия: удалённая карточка не воскресает, изменённая после удаления — остаётся', () => {
    const a = st((s) => { s.deleted = { 'card:cat': 500, 'text:t1': 10 }; });
    const b = st((s) => {
      s.cards.cat = card('cat', { mod: 400 });
      s.cards.dog = card('dog', { mod: 900 });
      s.deleted = { 'card:dog': 800 };
      s.userTexts = [{ id: 't1', title: 'x', text: 'y', level: 'A1' }, { id: 't2', title: 'x', text: 'y', level: 'A1' }];
    });
    const m = merge(a, b);
    expect(m.cards.cat).toBeUndefined();
    expect(m.cards.dog).toBeDefined();
    expect(m.deleted).toEqual({ 'card:cat': 500, 'card:dog': 800, 'text:t1': 10 });
    expect(m.userTexts.map((t) => t.id)).toEqual(['t2']);
  });

  it('«знаю» снимается надгробием', () => {
    const a = st((s) => { s.known = { go: 100, be: 100 }; s.deleted = { 'known:go': 200 }; });
    const m = merge(a, st((s) => { s.known = { go: 100 }; }));
    expect(m.known).toEqual({ be: 100 });
  });

  it('активность: максимум по каждому полю дня', () => {
    const a = st((s) => { s.activity = { '2026-01-01': { reviews: 10, exercises: 1, reads: 0 }, '2026-01-02': { reviews: 3, exercises: 0, reads: 0 } }; });
    const b = st((s) => { s.activity = { '2026-01-01': { reviews: 4, exercises: 9, reads: 2 }, '2026-01-03': { reviews: 1, exercises: 0, reads: 0 } }; });
    const m = merge(a, b);
    expect(m.activity['2026-01-01']).toEqual({ reviews: 10, exercises: 9, reads: 2 });
    expect(Object.keys(m.activity).sort()).toEqual(['2026-01-01', '2026-01-02', '2026-01-03']);
  });

  it('юниты, достижения, счётчики и настройки', () => {
    const a = st((s) => {
      s.units.u1 = { steps: { words: true }, testBest: 0.7 };
      s.ach = { rev_1: 300 };
      s.stats.lookups = 5; s.stats.exStreak = 2; s.stats.perfect = { u1: 1 };
      s.settings.newPerDay = 20; s.settingsMod = 10;
    });
    const b = st((s) => {
      s.units.u1 = { steps: { grammar: true }, testBest: 0.9 };
      s.ach = { rev_1: 100, streak_3: 50 };
      s.stats.lookups = 8; s.stats.exStreak = 9; s.stats.perfect = { u2: 1 };
      s.settings.newPerDay = 5; s.settingsMod = 20;
    });
    const m = merge(a, b);
    expect(m.units.u1).toEqual({ steps: { words: true, grammar: true }, testBest: 0.9 });
    expect(m.ach).toEqual({ rev_1: 100, streak_3: 50 });
    expect(m.stats.lookups).toBe(8);
    expect(m.stats.exStreak).toBe(2);
    expect(m.stats.perfect).toEqual({ u1: 1, u2: 1 });
    expect(m.settings.newPerDay).toBe(5);
    expect(m.settingsMod).toBe(20);
  });
});
