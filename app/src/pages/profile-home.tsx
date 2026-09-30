// Профиль (#/profile): карточки-блоки — кто я, лига, друзья, XP, активность, слова, понимание, успеваемость
import { useEffect, useState, type ReactNode } from 'react';
import { Avatar } from '../components/Avatar';
import { LeagueEmblem } from '../components/LeagueEmblem';
import { BackLink, Icon, Loading, Page, RoundBtn, TopBar, plural, toast } from '../components/ui';
import { ACH_LIST, engagement } from '../lib/achievements';
import { Cloud, useCloud } from '../lib/cloud';
import {
    daysLeft,
    friends,
    getProfile,
    leagueOf,
    profileView,
    type Friend,
    type LeagueProfile,
    type PublicProfile,
} from '../lib/league';
import { currentUnit } from '../lib/course';
import { useCourse } from '../lib/data';
import { cardKind } from '../lib/srs';
import { streak, useProgress } from '../lib/store';
import type { DayActivity, Level, Progress } from '../lib/types';

const dayKey = (x: Date) =>
    x.getFullYear() + '-' + String(x.getMonth() + 1).padStart(2, '0') + '-' + String(x.getDate()).padStart(2, '0');

/** Очки как в лиге на сервере: 1 за карточку, 2 за упражнение, 10 за текст */
const dayXp = (a: DayActivity) => (a.reviews || 0) + 2 * (a.exercises || 0) + 10 * (a.reads || 0);

/** Понедельник недели, в которую попадает день (ключ YYYY-MM-DD) */
function weekOf(key: string): string {
    const d = new Date(key + 'T12:00:00');
    d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
    return dayKey(d);
}

function xpStats(s: Progress) {
    const weeks: Record<string, number> = {};
    let total = 0;
    for (const [k, a] of Object.entries(s.activity)) {
        const x = dayXp(a);
        total += x;
        const w = weekOf(k);
        weeks[w] = (weeks[w] || 0) + x;
    }
    const now = weeks[weekOf(dayKey(new Date()))] || 0;
    return { total, week: now, best: Math.max(0, ...Object.values(weeks)) };
}

/** Доля в процентах или прочерк, если данных ещё нет */
const pct = (ok: number, all: number) => (all ? Math.round((ok / all) * 100) : null);
const pctTxt = (v: number | null) => (v == null ? '—' : v + '%');

/** Кнопка «поделиться»: системное меню телефона, на компьютере — копирование текста */
function ShareBtn({ text }: { text: string }) {
    const share = async () => {
        const nav = navigator as Navigator & { share?: (d: { text: string; url?: string }) => Promise<void> };
        try {
            if (nav.share) await nav.share({ text, url: location.origin + location.pathname });
            else {
                await navigator.clipboard.writeText(text);
                toast('Скопировано');
            }
        } catch {
            /* пользователь закрыл меню */
        }
    };
    return (
        <button type="button" className="pc-share" title="Поделиться" aria-label="Поделиться" onClick={share}>
            <Icon name="export" />
        </button>
    );
}

/** Блок профиля: заголовок по центру, «поделиться» справа, ссылка «Ред.» слева */
function PCard({
    title,
    share,
    edit,
    href,
    children,
    className = '',
}: {
    title: string;
    share?: string;
    edit?: { href: string; label: string };
    href?: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <section className={'card pcard ' + className}>
            {edit ? (
                <a className="pc-edit" href={edit.href}>
                    {edit.label}
                </a>
            ) : null}
            {share ? <ShareBtn text={share} /> : null}
            {href ? (
                <a className="pc-title" href={href}>
                    {title} <Icon name="caret-right" />
                </a>
            ) : (
                <h2 className="pc-title">{title}</h2>
            )}
            {children}
        </section>
    );
}

/** Две цифры через разделитель */
function Pair({ a, b }: { a: [ReactNode, string]; b: [ReactNode, string] }) {
    return (
        <div className="pc-pair">
            <div>
                <b>{a[0]}</b>
                <span>{a[1]}</span>
            </div>
            <div>
                <b>{b[0]}</b>
                <span>{b[1]}</span>
            </div>
        </div>
    );
}

/** Неделя: семь кружков пн–вс, закрашены дни с занятиями */
function WeekDots({ s }: { s: Progress }) {
    const now = new Date();
    const mon = new Date(now);
    mon.setDate(now.getDate() - ((now.getDay() + 6) % 7));
    const names = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const today = dayKey(now);
    return (
        <div className="pc-week">
            {names.map((n, i) => {
                const d = new Date(mon);
                d.setDate(mon.getDate() + i);
                const k = dayKey(d);
                const on = !!s.activity[k];
                return (
                    <div key={n} className={'pc-day' + (on ? ' on' : '') + (k === today ? ' today' : '')}>
                        <span>{n}</span>
                        <span className="pc-dot">{on ? <Icon name="check" /> : null}</span>
                    </div>
                );
            })}
        </div>
    );
}

function RateRow({ icon, tone, label, v }: { icon: string; tone: string; label: string; v: number | null }) {
    return (
        <div className="pc-rate">
            <span className={'pc-rate-ico ' + tone}>
                <Icon name={icon} fill />
            </span>
            <div className="pc-rate-body">
                <div className="pc-rate-top">
                    <span>{label}</span>
                    <b>{pctTxt(v)}</b>
                </div>
                <div className="progress">
                    <i style={{ width: (v || 0) + '%' }} />
                </div>
            </div>
        </div>
    );
}

export function ProfileHome() {
    const s = useProgress();
    const st = useCloud();
    const signed = Cloud.enabled && !!st.user;
    const email = signed ? st.user?.email || '' : '';
    const [prof, setProf] = useState<LeagueProfile | null>(null);
    const [fr, setFr] = useState<Friend[] | null>(null);

    useEffect(() => {
        if (!signed) return;
        let alive = true;
        getProfile()
            .then((p) => alive && setProf(p))
            .catch(() => undefined);
        friends()
            .then((f) => alive && setFr(f))
            .catch(() => undefined);
        return () => {
            alive = false;
        };
    }, [signed]);

    const name = prof?.name || (email ? email.split('@')[0] : 'Гость');
    const handle = prof?.friend_code ? '@' + prof.friend_code : email || 'прогресс только на этом устройстве';
    const uk = s.settings.accent === 'uk';
    const L = leagueOf(prof?.league || 0);
    const xp = xpStats(s);
    const left = daysLeft();
    const e = engagement(s);

    // слова
    let learning = 0,
        learned = Object.keys(s.known).filter((id) => !s.cards[id]).length;
    for (const c of Object.values(s.cards)) {
        const k = cardKind(c);
        if (k === 'done') learned++;
        else if (k !== 'new') learning++;
    }
    // понимание: вопросы к текстам и тесты уроков
    const st2 = s.stats as Record<string, number>;
    const texts = pct(st2.qOk || 0, st2.qAll || 0);
    const tests = Object.values(s.units)
        .map((u) => u.testBest)
        .filter((x): x is number => x != null);
    const grammar = tests.length ? Math.round((tests.reduce((a, b) => a + b, 0) / tests.length) * 100) : null;
    // успеваемость
    const answers = pct(st2.ansOk || 0, st2.ansAll || 0);
    const cards = pct(st2.rvOk || 0, st2.rvAll || 0);
    const tb = Object.values(s.tenses || {})
        .map((t) => t.best)
        .filter((x): x is number => x != null);
    const tenses = tb.length ? Math.round((tb.reduce((a, b) => a + b, 0) / tb.length) * 100) : null;

    const sync = !Cloud.enabled ? null : signed ? (
        st.lastError ? (
            <span className="pc-sync warn">
                <Icon name="warning" /> Нет связи
            </span>
        ) : (
            <span className="pc-sync ok">
                <Icon name="cloud-check" /> Синхронизирована
            </span>
        )
    ) : (
        <a className="pc-sync" href="#/account">
            <Icon name="cloud-slash" /> Отключена
        </a>
    );

    return (
        <Page className="profile">
            <TopBar
                title="Профиль"
                left={sync}
                right={<RoundBtn href="#/settings" icon="gear-six" title="Настройки" />}
            />

            <section className="card pc-me">
                <Avatar email={email} size="big" />
                <div className="pc-me-body">
                    <b className="pc-name">{name}</b>
                    <span className="muted">{handle}</span>
                    <span className="pc-lang">
                        {uk ? '🇬🇧' : '🇺🇸'} Английский ({uk ? 'UK' : 'US'})
                    </span>
                    <a className="pc-link" href={signed ? '#/league' : '#/account'}>
                        {signed ? 'Ред.' : 'Войти'}
                    </a>
                </div>
            </section>

            <PCard
                title="Лига"
                href="#/league"
                share={`Я в лиге «${L.name}» в English Path: ${xp.week} XP на этой неделе`}
                className="pc-league"
            >
                <a className="pc-league-row" href="#/league" style={{ ['--lc' as string]: L.color }}>
                    <span className="pc-emblem">
                        <LeagueEmblem league={prof?.league || 0} />
                    </span>
                    <span className="pc-league-mid">
                        <span className="tiny muted">
                            {signed
                                ? `До конца недели ${left} ${plural(left, 'день', 'дня', 'дней')}`
                                : 'Войдите, чтобы попасть в лигу'}
                        </span>
                        <span className="progress">
                            <i style={{ width: signed ? ((7 - left) / 7) * 100 + '%' : '0%' }} />
                        </span>
                        <b className="pc-league-name">{L.name}</b>
                    </span>
                    <span className="pc-league-xp">
                        <b>{xp.week}</b>
                        <span>XP</span>
                    </span>
                </a>
            </PCard>

            <PCard title="Друзья" href="#/league/friends">
                {fr && fr.length ? (
                    <div className="pc-friends">
                        {fr.slice(0, 5).map((f) => (
                            <a key={f.friend_code} className="pc-fr" href={'#/u/' + f.friend_code} title={f.name}>
                                <span className="pc-dot">{(f.name || '?')[0].toUpperCase()}</span>
                                <span className="tiny">{f.name}</span>
                            </a>
                        ))}
                        {fr.length > 5 ? (
                            <a className="pc-fr more" href="#/league/friends">
                                +{fr.length - 5}
                            </a>
                        ) : null}
                    </div>
                ) : (
                    <div className="pc-invite">
                        <b>Учиться вместе проще</b>
                        <span className="muted">Пригласите первого друга</span>
                        <a className="pc-plus" href="#/league/friends" aria-label="Добавить друга">
                            <Icon name="plus" />
                        </a>
                    </div>
                )}
            </PCard>

            <PCard title="XP" share={`English Path: ${xp.total} XP всего, лучшая неделя — ${xp.best} XP`}>
                <Pair a={[xp.total, 'Всего']} b={[xp.best, 'Лучшая неделя']} />
            </PCard>

            <PCard
                title="Активность"
                edit={{ href: '#/settings', label: 'Ред.' }}
                share={`English Path: ${streak(s)} ${plural(streak(s), 'день', 'дня', 'дней')} подряд`}
            >
                <WeekDots s={s} />
                <Pair
                    a={[streak(s), plural(streak(s), 'день подряд', 'дня подряд', 'дней подряд')]}
                    b={[Object.keys(s.activity).length, 'всего дней занятий']}
                />
            </PCard>

            <PCard
                title="Слова"
                href="#/cards"
                share={`English Path: выучено ${learned} ${plural(learned, 'слово', 'слова', 'слов')}`}
            >
                <Pair a={[learning, 'Изучаю']} b={[learned, 'Выучено']} />
            </PCard>

            <PCard title="Понимание" share={`English Path: тексты ${pctTxt(texts)}, грамматика ${pctTxt(grammar)}`}>
                <Pair a={[pctTxt(texts), 'Тексты']} b={[pctTxt(grammar), 'Грамматика']} />
            </PCard>

            <PCard
                title="Успеваемость"
                share={`English Path: верных ответов ${pctTxt(answers)}, карточки ${pctTxt(cards)}`}
            >
                <div className="pc-rates">
                    <RateRow icon="seal-check" tone="t-yellow" label="Правильные ответы" v={answers} />
                    <RateRow icon="cards" tone="t-blue" label="Карточки" v={cards} />
                    <RateRow icon="clock-countdown" tone="t-green" label="Времена" v={tenses} />
                </div>
                {answers == null && cards == null ? (
                    <p className="tiny muted pc-note">Проценты появятся после первых ответов в уроках и карточках.</p>
                ) : null}
            </PCard>

            <div className="menu-list">
                <a href="#/achievements">
                    <span className="mi" style={{ ['--c' as string]: '#E3A21A' }}>
                        <Icon name="trophy" fill />
                    </span>
                    <span>Достижения</span>
                    <em>
                        ур. {e.lvl} · {Object.keys(s.ach).length}/{ACH_LIST.length}
                    </em>
                    <Icon name="caret-right" />
                </a>
                <a href="#/stats">
                    <span className="mi" style={{ ['--c' as string]: '#4F6AF0' }}>
                        <Icon name="chart-bar" fill />
                    </span>
                    <span>Прогресс и статистика</span>
                    <Icon name="caret-right" />
                </a>
                <a href="#/settings">
                    <span className="mi" style={{ ['--c' as string]: '#8E8E99' }}>
                        <Icon name="gear-six" fill />
                    </span>
                    <span>Настройки</span>
                    <Icon name="caret-right" />
                </a>
            </div>
        </Page>
    );
}

/** Чужой профиль (#/u/<код>): этап курса, лига, XP, активность, слова, успеваемость */
export function UserProfile({ code }: { code: string }) {
    const st = useCloud();
    const { data: course } = useCourse();
    const [p, setP] = useState<PublicProfile | null>(null);
    const [err, setErr] = useState('');
    const signed = Cloud.enabled && !!st.user;

    useEffect(() => {
        if (!signed) return;
        let alive = true;
        profileView(code)
            .then((x) => alive && setP(x))
            .catch((e: Error) => alive && setErr(e.message));
        return () => {
            alive = false;
        };
    }, [code, signed]);

    const back = <BackLink href="#/league" label="Лига" />;
    if (!signed)
        return (
            <Page>
                {back}
                <p className="muted">Войдите в аккаунт, чтобы смотреть профили участников лиги.</p>
            </Page>
        );
    if (err)
        return (
            <Page>
                {back}
                <p className="muted">{err}</p>
            </Page>
        );
    if (!p)
        return (
            <Page>
                {back}
                <Loading />
            </Page>
        );

    // этап курса: восстанавливаем по пройденным урокам и стартовому уровню
    const fake = {
        units: Object.fromEntries(p.passed.map((id) => [id, { steps: {}, testBest: 1, mod: 0 }])),
        settings: { startLevel: (p.start_level || undefined) as Level | undefined },
    } as unknown as Progress;
    const u = course ? currentUnit(fake, course) : undefined;
    const L = leagueOf(p.league);
    const uk = p.accent === 'uk';

    return (
        <Page className="profile">
            {back}
            <section className="card pc-me">
                <span className="pc-bigava" style={{ ['--lc' as string]: L.color }}>
                    {(p.name || '?')[0].toUpperCase()}
                </span>
                <div className="pc-me-body">
                    <b className="pc-name">{p.name}</b>
                    <span className="muted">@{p.code}</span>
                    <span className="pc-lang">
                        {uk ? '🇬🇧' : '🇺🇸'} Английский ({uk ? 'UK' : 'US'})
                    </span>
                    {p.is_friend ? <span className="pill accent pc-friend-tag">друг</span> : null}
                </div>
            </section>

            <PCard title="Сейчас изучает">
                {u ? (
                    <div className="pc-stage">
                        <span className="pc-stage-lvl">{u.level}</span>
                        <div>
                            <b>
                                Урок {u.num}. {u.title}
                            </b>
                            <span className="muted small">
                                Пройдено уроков: {p.passed.length}
                                {p.start_level && p.start_level !== 'A1' ? ` · начал с ${p.start_level}` : ''}
                            </span>
                        </div>
                    </div>
                ) : (
                    <Loading />
                )}
            </PCard>

            <PCard title="Лига" className="pc-league">
                <div className="pc-league-row" style={{ ['--lc' as string]: L.color }}>
                    <span className="pc-emblem">
                        <LeagueEmblem league={p.league} />
                    </span>
                    <span className="pc-league-mid">
                        <b className="pc-league-name">{L.name}</b>
                        <span className="tiny muted">очки за эту неделю</span>
                    </span>
                    <span className="pc-league-xp">
                        <b>{p.week_xp}</b>
                        <span>XP</span>
                    </span>
                </div>
            </PCard>

            <PCard title="XP">
                <Pair a={[p.total_xp, 'Всего']} b={[p.week_xp, 'За неделю']} />
            </PCard>

            <PCard title="Активность">
                <Pair
                    a={[p.streak, plural(p.streak, 'день подряд', 'дня подряд', 'дней подряд')]}
                    b={[p.active_days, 'всего дней занятий']}
                />
            </PCard>

            <PCard title="Слова">
                <Pair a={[p.learning, 'Изучает']} b={[p.learned, 'Выучено']} />
            </PCard>

            <PCard title="Успеваемость">
                <Pair a={[pctTxt(p.grammar), 'Тесты уроков']} b={[pctTxt(p.answers), 'Верные ответы']} />
            </PCard>

            <p className="tiny muted pc-note">
                Наград: {p.ach} из {ACH_LIST.length}. Профиль видят участники вашей группы в лиге и друзья.
            </p>
        </Page>
    );
}
