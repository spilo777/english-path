import { describe, expect, it } from 'vitest';
import { addCard, cardKind, schedule } from '../src/lib/srs';
import { defaults, DAY } from '../src/lib/store';

describe('интервальные повторения', () => {
  it('новая карточка → «хорошо» дважды → повторение завтра', () => {
    const s = defaults();
    expect(addCard(s, 'Apple', 'яблоко')).toBe(true);
    expect(addCard(s, 'apple', 'яблоко')).toBe(false);
    const now = 1_000_000;
    const c1 = schedule(s.cards.apple, 2, now);
    expect(c1.state).toBe('learn');
    const c2 = schedule(c1, 2, now);
    expect(c2.state).toBe('review');
    expect(c2.due).toBe(now + DAY);
  });
  it('«снова» на выученной карточке сбрасывает интервал', () => {
    const s = defaults(); addCard(s, 'cat', 'кот');
    const c = { ...s.cards.cat, state: 'review' as const, ivl: 30, ease: 2.5 };
    expect(cardKind(c)).toBe('done');
    const n = schedule(c, 0, 0);
    expect(n.state).toBe('learn');
    expect(n.lapses).toBe(1);
    expect(n.ease).toBeCloseTo(2.3);
  });
});
