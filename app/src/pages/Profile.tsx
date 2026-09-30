// Профиль (#/profile), награды (#/achievements) и статистика (#/stats)
import { useState } from 'react';
import type { PageProps } from '../app/App';
import { AchCard } from '../components/AchCard';
import { Seg } from '../components/Seg';
import { BackLink, Icon, Page, plural } from '../components/ui';
import {
    ACH_LIST,
    deckStats,
    engagement,
    pctOf,
    pctReal,
    rankLadder,
    useAchCtx,
    type Engagement,
} from '../lib/achievements';
import { useCloud } from '../lib/cloud';
import { mainUnits, passed } from '../lib/course';
import { useCourse, useDeck } from '../lib/data';
import { DAY, streak, useProgress } from '../lib/store';
import { LEVELS, type Progress } from '../lib/types';
import { ProfileHome } from './profile-home';
import './Profile.css';

export default function Profile({ params }: PageProps) {
    if (params[0] === 'achievements') return <Achievements />;
    if (params[0] === 'stats') return <Stats />;
    return <ProfileHome />;
}

const dayKey = (x: Date) =>
    x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');
/** Выучено надолго: интервал 3+ недели */
const learnedCards = (s: Progress) => Object.values(s.cards).filter((c) => c.state === 'review' && c.ivl >= 21).length;
const BackToProfile = () => <BackLink href="#/profile" label="Профиль" />;

// ───────── уровень вовлечённости и лестница званий ─────────
function EngagementCard({ e }: { e: Engagement }) {
    const [open, setOpen] = useState(false);
    const ladder = rankLadder();
    return (
        <div className="card pf-engcard">
            <button type="button" className="pf-engbtn" aria-expanded={open} onClick={() => setOpen(!open)}>
                <div className="eyebrow">Уровень вовлечённости</div>
                <div className="row pf-eng">
                    <div className="pf-lvl">{e.lvl}</div>
                    <div className="pf-grow">
                        <b className="pf-rank">
                            {e.rank} <Icon name={open ? 'caret-up' : 'caret-down'} className="pf-caret" />
                        </b>
                        <div className="progress pf-mt8">
                            <i style={{ width: (e.into / e.need) * 100 + '%' }} />
                        </div>
                        <div className="tiny muted pf-mt4">
                            {e.into} / {e.need} очков до уровня {e.lvl + 1} · всего {e.xp}
                        </div>
                    </div>
                </div>
            </button>
            {open ? (
                <ol className="pf-ladder">
                    {ladder.map((r) => {
                        const state = e.lvl > r.to ? 'done' : e.lvl >= r.from ? 'now' : 'next';
                        return (
                            <li key={r.rank} className={'pf-step ' + state}>
                                <span className="pf-step-ico">
                                    <Icon
                                        name={state === 'done' ? 'check' : state === 'now' ? 'star' : 'lock-simple'}
                                        fill={state !== 'done'}
                                    />
                                </span>
                                <span className="pf-step-name">
                                    <b>
                                        {r.rank}
                                        {state === 'now' ? <span className="pf-here"> · вы здесь</span> : null}
                                    </b>
                                    <span className="tiny muted">
                                        уровни {r.from}–{r.to} ·{' '}
                                        {r.xp ? `от ${r.xp.toLocaleString('ru-RU')} очков` : 'с самого начала'}
                                        {state === 'next' ? ` · ещё ${(r.xp - e.xp).toLocaleString('ru-RU')}` : ''}
                                    </span>
                                </span>
                            </li>
                        );
                    })}
                </ol>
            ) : null}
            <p className="tiny muted pf-note">
                Очки даются за каждое достижение: чем оно реже, тем больше очков.{' '}
                {open ? '' : 'Нажмите, чтобы увидеть все звания.'}
            </p>
        </div>
    );
}

// ───────── награды ─────────
type AchFilter = 'all' | 'got' | 'todo';
const readFilter = (): AchFilter => {
    try {
        const f = sessionStorage.getItem('achFilter');
        return f === 'got' || f === 'todo' ? f : 'all';
    } catch {
        return 'all';
    }
};

function Achievements() {
    const s = useProgress();
    useCloud();
    const c = useAchCtx();
    const [filter, setFilter] = useState<AchFilter>(readFilter);
    const all = ACH_LIST;
    const got = all.filter((a) => s.ach[a.id]);
    const e = engagement(s);
    const rarest = got.slice().sort((a, b) => pctOf(a) - pctOf(b))[0];
    const cats = [...new Set(all.map((a) => a.cat))];
    const pass = (id: string) => filter === 'all' || (filter === 'got' ? !!s.ach[id] : !s.ach[id]);
    const pick = (f: AchFilter) => {
        try {
            sessionStorage.setItem('achFilter', f);
        } catch {
            /* приватный режим */
        }
        setFilter(f);
    };
    return (
        <Page className="profile">
            <BackToProfile />
            <h1 className="page-title">Награды</h1>
            <div className="pf-grid2">
                <EngagementCard e={e} />
                <div className="card">
                    <div className="eyebrow">Коллекция</div>
                    <b className="pf-big">{got.length}</b> <span className="muted">из {all.length}</span>
                    <div className="progress pf-my8">
                        <i style={{ width: (got.length / all.length) * 100 + '%' }} />
                    </div>
                    <div className="small muted">
                        {rarest ? (
                            <>
                                Самое редкое: <Icon name={rarest.icon} fill /> <b>{rarest.title}</b> ({pctOf(rarest)}%)
                            </>
                        ) : (
                            'Пока ни одного. Первое совсем близко!'
                        )}
                    </div>
                </div>
            </div>
            <div className="row pf-filter">
                <Seg<AchFilter>
                    items={[
                        ['all', 'Все'],
                        ['got', 'Получены'],
                        ['todo', 'Впереди'],
                    ]}
                    value={filter}
                    onChange={pick}
                />
                <span className="spacer" />
                <span className="tiny muted">
                    {pctReal()
                        ? 'Процент — реальная доля учеников сайта с этим достижением'
                        : 'Процент — примерная доля учеников. Реальная статистика появится, когда учеников с аккаунтом станет 10+'}
                </span>
            </div>
            {!c ? (
                <div className="empty">Загружаю…</div>
            ) : (
                cats.map((cat) => {
                    const items = all.filter((a) => a.cat === cat && pass(a.id));
                    if (!items.length) return null;
                    const inCat = all.filter((a) => a.cat === cat);
                    return (
                        <div key={cat} className="pf-cat">
                            <div className="eyebrow pf-cat-h">
                                {cat} · {inCat.filter((a) => s.ach[a.id]).length}/{inCat.length}
                            </div>
                            <div className="ach-list">
                                {items.map((a) => (
                                    <AchCard key={a.id} a={a} ctx={c} />
                                ))}
                            </div>
                        </div>
                    );
                })
            )}
            {c && !all.some((a) => pass(a.id)) ? (
                <div className="empty">
                    {filter === 'got' ? 'Пока ни одного. Первое совсем близко!' : 'Все достижения получены!'}
                </div>
            ) : null}
        </Page>
    );
}

// ───────── статистика ─────────
interface DayBar {
    k: string;
    d: Date;
    v: number;
    a: { reviews: number; exercises: number; reads: number };
}

function Stats() {
    const s = useProgress();
    const { data: course } = useCourse();
    const deck = useDeck();
    const cards = Object.values(s.cards);
    const learned = learnedCards(s);
    const inProgress = cards.filter((c) => c.state !== 'new' && !(c.state === 'review' && c.ivl >= 21)).length;
    const newN = cards.filter((c) => c.state === 'new').length;
    const known = Object.keys(s.known).length;
    const days: DayBar[] = [];
    for (let i = 29; i >= 0; i--) {
        const d = new Date(Date.now() - i * DAY);
        const k = dayKey(d);
        const x = s.activity[k];
        const a = { reviews: x?.reviews || 0, exercises: x?.exercises || 0, reads: x?.reads || 0 };
        days.push({ k, d, a, v: a.reviews + a.exercises + a.reads * 10 });
    }
    const activeDays = Object.keys(s.activity).length;
    const units = course ? mainUnits(course) : [];
    const passedN = units.filter((u) => passed(s, u.id)).length;
    const totalReviews = Object.values(s.activity).reduce((n, a) => n + (a.reviews || 0), 0);
    const words = learned + known;
    return (
        <Page className="profile">
            <BackToProfile />
            <div className="pf-stats-head">
                <h1 className="page-title">Прогресс</h1>
                <div className="row pf-head-btns">
                    <a className="btn small" href="#/achievements">
                        <Icon name="trophy" /> Достижения
                    </a>
                    <a className="btn small" href="#/settings">
                        <Icon name="gear-six" /> Настройки
                    </a>
                </div>
            </div>
            <div className="pf-grid3">
                <div className="pf-stat">
                    <div className="pf-chip">
                        <Icon name="flame" />
                    </div>
                    <b>{streak(s)}</b>
                    <span>дней подряд</span>
                </div>
                <div className="pf-stat">
                    <div className="pf-chip">
                        <Icon name="calendar-check" />
                    </div>
                    <b>{activeDays}</b>
                    <span>дней занятий</span>
                </div>
                <div className="pf-stat">
                    <div className="pf-chip">
                        <Icon name="book-open" />
                    </div>
                    <b>{course ? `${passedN}/${units.length}` : '…'}</b>
                    <span>юнитов пройдено</span>
                </div>
            </div>
            <ActivityChart days={days} />
            <div className="pf-grid2">
                <div className="card">
                    <h3>Слова</h3>
                    <div className="pf-list">
                        <div>
                            <span>
                                Выучено надолго <span className="muted small">(интервал 3+ недели)</span>
                            </span>
                            <b>{learned}</b>
                        </div>
                        <div>
                            <span>В процессе</span>
                            <b>{inProgress}</b>
                        </div>
                        <div>
                            <span>Новые, ещё не начаты</span>
                            <b>{newN}</b>
                        </div>
                        <div>
                            <span>Всего повторений</span>
                            <b>{totalReviews}</b>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h3>Путь до B2</h3>
                    <p className="muted small">
                        Для B2 нужно около 4000 слов в активном запасе. Для комфортной игры в большинство игр хватает
                        2000–2500 (это B1).
                    </p>
                    <div className="progress pf-b2">
                        <i style={{ width: Math.min(100, (words / 4000) * 100) + '%' }} />
                    </div>
                    <div className="small muted">{words} / 4000 слов выучено (включая отмеченные «знаю»)</div>
                    <hr className="pf-hr" />
                    <div className="eyebrow pf-mb8">Колоды слов</div>
                    {LEVELS.map((l) => {
                        const d = deck ? deckStats(s, deck, l) : null;
                        const n = d ? d.learned + d.known : 0;
                        return (
                            <LevelRow
                                key={l}
                                label={l}
                                value={d ? n / Math.max(1, d.total) : 0}
                                text={d ? `${n}/${d.total}` : '…'}
                            />
                        );
                    })}
                    <hr className="pf-hr" />
                    <div className="eyebrow pf-mb8">Юниты курса</div>
                    {(course ? course.levels : []).map((l) => {
                        const us = units.filter((u) => u.level === l.id);
                        const d = us.filter((u) => passed(s, u.id)).length;
                        return (
                            <LevelRow
                                key={l.id}
                                label={l.id}
                                value={us.length ? d / us.length : 0}
                                text={us.length ? `${d}/${us.length}` : 'скоро'}
                            />
                        );
                    })}
                </div>
            </div>
        </Page>
    );
}

function LevelRow({ label, value, text }: { label: string; value: number; text: string }) {
    return (
        <div className="pf-lrow small">
            <span>{label}</span>
            <div className="progress">
                <i style={{ width: Math.min(1, value) * 100 + '%' }} />
            </div>
            <span className="muted tiny">{text}</span>
        </div>
    );
}

/** Столбики активности за 30 дней (CSS, без библиотек) с подсказкой при наведении/касании */
function ActivityChart({ days }: { days: DayBar[] }) {
    const [hover, setHover] = useState<number | null>(null);
    const max = Math.max(1, ...days.map((d) => d.v));
    const fmt = (d: Date) => d.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });
    const h = hover != null ? days[hover] : null;
    const total = days.reduce((n, d) => n + d.v, 0);
    const active = days.filter((d) => d.v).length;
    return (
        <div className="card pf-act">
            <div className="row pf-act-head">
                <h3>Активность за 30 дней</h3>
                <span className="spacer" />
                <span className="tiny muted">
                    {active} {plural(active, 'день', 'дня', 'дней')} · {total} очков
                </span>
            </div>
            <div className="pf-tip small" aria-live="polite">
                {h ? (
                    <>
                        <b>{fmt(h.d)}</b> ·{' '}
                        {h.v ? `${h.a.reviews} карт. · ${h.a.exercises} упр. · ${h.a.reads} чт.` : 'нет занятий'}
                    </>
                ) : (
                    <span className="muted">Карточки + упражнения + чтение × 10. Наведите на столбик</span>
                )}
            </div>
            <div
                className="pf-bars"
                role="img"
                aria-label={`Активность за 30 дней: ${active} активных дней`}
                onMouseLeave={() => setHover(null)}
            >
                {days.map((d, i) => (
                    <span
                        key={d.k}
                        className={'pf-bar' + (hover === i ? ' on' : '')}
                        title={`${d.k}: ${d.v}`}
                        onMouseEnter={() => setHover(i)}
                        onClick={() => setHover(i)}
                    >
                        <i
                            className={d.v ? '' : 'zero'}
                            style={{ height: (d.v ? Math.max(6, (d.v / max) * 100) : 4) + '%' }}
                        />
                    </span>
                ))}
            </div>
            <div className="row pf-axis tiny muted">
                <span>{fmt(days[0].d)}</span>
                <span className="spacer" />
                <span>сегодня</span>
            </div>
        </div>
    );
}
