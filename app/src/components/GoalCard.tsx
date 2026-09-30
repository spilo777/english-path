// План на день: три кольца — карточки, упражнения, чтение. Строки ведут прямо к делу.
import { useDeck } from '../lib/data';
import { dueCards, newAvailable } from '../lib/srs';
import { today, useProgress } from '../lib/store';
import { Icon } from './ui';
import './GoalCard.css';

interface Ring {
    r: number;
    v: number;
    c: string;
    label: string;
    n: number;
    goal: number;
    hint: string;
    href?: string;
}

/** Куда ведут строки плана и что под ними написано (по умолчанию — общие подсказки) */
export interface GoalLinks {
    cards?: string;
    ex?: string;
    read?: string;
    exHint?: string;
    readHint?: string;
}

export function GoalCard({ title = 'План на сегодня', links }: { title?: string; links?: GoalLinks }) {
    const s = useProgress();
    const deck = useDeck();
    const act = s.activity[today()] || { reviews: 0, exercises: 0, reads: 0 };
    const due = dueCards(s).length,
        nw = deck ? newAvailable(s, deck) : 0;
    const rv = act.reviews || 0,
        rvGoal = rv + due + nw;
    const ex = act.exercises || 0,
        exGoal = 20;
    const rd = act.reads || 0,
        rdGoal = 1;
    const rings: Ring[] = [
        {
            r: 52,
            v: rvGoal ? rv / rvGoal : 1,
            c: 'var(--r1)',
            label: 'Карточки',
            n: rv,
            goal: rvGoal,
            hint: rvGoal ? 'повторить всё на сегодня' : 'сегодня нечего повторять',
            href: links?.cards,
        },
        {
            r: 39,
            v: ex / exGoal,
            c: 'var(--r2)',
            label: 'Урок',
            n: ex,
            goal: exGoal,
            hint: links?.exHint || '20 ответов в упражнениях',
            href: links?.ex,
        },
        {
            r: 26,
            v: rd / rdGoal,
            c: 'var(--r3)',
            label: 'Чтение',
            n: rd,
            goal: rdGoal,
            hint: links?.readHint || 'прочитать 1 текст',
            href: links?.read,
        },
    ];
    const done = rings.filter((g) => g.v >= 1).length;
    return (
        <div className="goal-card">
            <div className="goal-top">
                <div className="goal-text">
                    <div className="goal-h">{title}</div>
                    <div className="small muted">
                        {done === 3 ? 'Все три кольца закрыты — отличный день!' : `Закрыто ${done} из 3 колец`}
                    </div>
                </div>
                <svg className="goal-rings" viewBox="0 0 128 128" width="84" height="84" aria-hidden="true">
                    {rings.map((g) => {
                        const C = 2 * Math.PI * g.r;
                        return (
                            <g key={g.label}>
                                <circle
                                    cx="64"
                                    cy="64"
                                    r={g.r}
                                    fill="none"
                                    stroke={g.c}
                                    strokeOpacity=".16"
                                    strokeWidth="11"
                                />
                                <circle
                                    cx="64"
                                    cy="64"
                                    r={g.r}
                                    fill="none"
                                    stroke={g.c}
                                    strokeWidth="11"
                                    strokeLinecap="round"
                                    strokeDasharray={C}
                                    strokeDashoffset={C * (1 - Math.min(1, g.v))}
                                    transform="rotate(-90 64 64)"
                                    style={{ transition: 'stroke-dashoffset .8s' }}
                                />
                            </g>
                        );
                    })}
                </svg>
            </div>
            <div className="goal-rows">
                {rings.map((g) => {
                    const ok = g.v >= 1;
                    const inner = (
                        <>
                            <i style={{ background: g.c }} />
                            <span>
                                {g.label}
                                <em>{g.hint}</em>
                            </span>
                            <b>
                                {ok ? (
                                    <span className="goal-ok">
                                        <Icon name="check" /> {g.n}
                                    </span>
                                ) : (
                                    `${g.n} из ${g.goal}`
                                )}
                            </b>
                            {g.href ? <Icon name="caret-right" className="goal-go" /> : null}
                        </>
                    );
                    return g.href ? (
                        <a key={g.label} className={'goal-row' + (ok ? ' ok' : '')} href={g.href}>
                            {inner}
                        </a>
                    ) : (
                        <div key={g.label} className={'goal-row' + (ok ? ' ok' : '')}>
                            {inner}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
