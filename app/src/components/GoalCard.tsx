// Цель на день: три кольца — карточки, упражнения, чтение
import { useDeck } from '../lib/data';
import { dueCards, newAvailable } from '../lib/srs';
import { today, useProgress } from '../lib/store';
import { Icon } from './ui';
import './GoalCard.css';

interface Ring { r: number; v: number; c: string; label: string; n: number; goal: number; hint: string }

export function GoalCard({ title = 'Цель на сегодня' }: { title?: string }) {
  const s = useProgress();
  const deck = useDeck();
  const act = s.activity[today()] || { reviews: 0, exercises: 0, reads: 0 };
  const due = dueCards(s).length, nw = deck ? newAvailable(s, deck) : 0;
  const rv = act.reviews || 0, rvGoal = rv + due + nw;
  const ex = act.exercises || 0, exGoal = 20;
  const rd = act.reads || 0, rdGoal = 1;
  const rings: Ring[] = [
    { r: 52, v: rvGoal ? rv / rvGoal : 1, c: 'var(--r1)', label: 'Карточки', n: rv, goal: rvGoal, hint: rvGoal ? 'повторить всё на сегодня' : 'сегодня нечего повторять' },
    { r: 39, v: ex / exGoal, c: 'var(--r2)', label: 'Упражнения', n: ex, goal: exGoal, hint: '20 ответов в упражнениях' },
    { r: 26, v: rd / rdGoal, c: 'var(--r3)', label: 'Чтение', n: rd, goal: rdGoal, hint: 'прочитать 1 текст' },
  ];
  const done = rings.filter((g) => g.v >= 1).length;
  return (
    <div className="goal-card">
      <div className="goal-text">
        <div className="goal-h">{title}</div>
        {rings.map((g) => (
          <div className="goal-row" key={g.label}>
            <i style={{ background: g.c }} />
            <span>{g.label}<em>{g.hint}</em></span>
            <b>{g.v >= 1 ? <span className="goal-ok"><Icon name="check" /> {g.n}</span> : `${g.n} из ${g.goal}`}</b>
          </div>
        ))}
        <div className="small muted goal-foot">{done === 3 ? 'Все три кольца закрыты — отличный день!' : 'Закройте все три кольца'}</div>
      </div>
      <svg className="goal-rings" viewBox="0 0 128 128" width="128" height="128" aria-hidden="true">
        {rings.map((g) => {
          const C = 2 * Math.PI * g.r;
          return (
            <g key={g.label}>
              <circle cx="64" cy="64" r={g.r} fill="none" stroke={g.c} strokeOpacity=".16" strokeWidth="10" />
              <circle cx="64" cy="64" r={g.r} fill="none" stroke={g.c} strokeWidth="10" strokeLinecap="round" strokeDasharray={C}
                strokeDashoffset={C * (1 - Math.min(1, g.v))} transform="rotate(-90 64 64)" style={{ transition: 'stroke-dashoffset .8s' }} />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
