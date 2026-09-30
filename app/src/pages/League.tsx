// Лига и друзья: недельное соревнование в группе до 30 человек и список друзей по коду
import { useEffect, useState, type CSSProperties, type FormEvent } from 'react';
import { lsGet, lsSet } from '@utils/storage';
import type { PageProps } from '../app/App';
import { LeagueEmblem } from '../components/LeagueEmblem';
import { Seg } from '../components/Seg';
import { BackLink, Icon, Loading, Page, plural, toast } from '../components/ui';
import { useCloud } from '../lib/cloud';
import {
    addFriend,
    daysLeft,
    friends,
    getProfile,
    joinAndBoard,
    lastResult,
    leagueOf,
    LEAGUES,
    removeFriend,
    setName,
    zones,
    type BoardRow,
    type Friend,
    type LastResult,
    type LeagueProfile,
} from '../lib/league';
import './League.css';

type Tab = 'league' | 'friends';
const col = (i: number) => ({ '--lc': leagueOf(i).color }) as CSSProperties;
const SEEN_KEY = 'ep.leagueSeen';
/** Строка таблицы → профиль участника (свой — обычный профиль) */
const userHref = (r: BoardRow) => (r.is_me || !r.code ? '#/profile' : '#/u/' + r.code);

export default function League({ params }: PageProps) {
    const st = useCloud();
    const [tab, setTab] = useState<Tab>(params[1] === 'friends' ? 'friends' : 'league');
    const [prof, setProf] = useState<LeagueProfile | null | undefined>(undefined);
    const [err, setErr] = useState('');

    useEffect(() => {
        if (!st.user) return;
        let alive = true;
        getProfile()
            .then((p) => {
                if (alive) setProf(p);
            })
            .catch((e: Error) => {
                if (alive) setErr(e.message);
            });
        return () => {
            alive = false;
        };
    }, [st.user]);

    const head = (
        <>
            <BackLink href="#/profile" label="Профиль" />
            <h1 className="page-title">Лига и друзья</h1>
        </>
    );
    if (!st.user) {
        return (
            <Page className="lg-page">
                {head}
                <div className="card stack">
                    <p>
                        Соревнуйтесь с другими учениками: каждую неделю — группа до 30 человек, лучшие поднимаются в
                        лигу выше. Друзей можно добавить по коду и видеть их серии.
                    </p>
                    <p className="muted small">Для этого нужен аккаунт — очки считаются по прогрессу в облаке.</p>
                    <a className="btn primary" href="#/account">
                        Войти или создать аккаунт
                    </a>
                </div>
            </Page>
        );
    }
    if (err)
        return (
            <Page className="lg-page">
                {head}
                <div className="card empty">{err}</div>
            </Page>
        );
    if (prof === undefined)
        return (
            <Page className="lg-page">
                {head}
                <Loading />
            </Page>
        );
    if (!prof)
        return (
            <Page className="lg-page">
                {head}
                <NameForm onDone={setProf} />
            </Page>
        );

    return (
        <Page className="lg-page">
            {head}
            <Seg
                items={[
                    ['league', 'Лига'],
                    ['friends', 'Друзья'],
                ]}
                value={tab}
                onChange={(t) => {
                    setTab(t);
                    history.replaceState(null, '', t === 'friends' ? '#/league/friends' : '#/league');
                }}
                className="lg-tabs"
            />
            {tab === 'league' ? <LeagueTab prof={prof} onRename={setProf} /> : <FriendsTab prof={prof} />}
        </Page>
    );
}

// ───────── имя ─────────
function NameForm({
    onDone,
    initial = '',
    onCancel,
}: {
    onDone: (p: LeagueProfile) => void;
    initial?: string;
    onCancel?: () => void;
}) {
    const [name, setN] = useState(initial);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState('');
    const submit = async (e: FormEvent) => {
        e.preventDefault();
        setBusy(true);
        setErr('');
        try {
            onDone(await setName(name));
        } catch (x) {
            setErr((x as Error).message);
        }
        setBusy(false);
    };
    return (
        <form className="card stack lg-name" onSubmit={submit}>
            <h3>{initial ? 'Новое имя' : 'Как вас показывать другим?'}</h3>
            <p className="muted small">Это имя увидят участники лиги и друзья. Почту никто не видит.</p>
            <input
                className="input"
                value={name}
                maxLength={24}
                placeholder="Например, Илья"
                onChange={(e) => setN(e.target.value)}
                autoFocus
            />
            {err ? <p className="lg-err small">{err}</p> : null}
            <div className="row">
                <button type="submit" className="btn primary" disabled={busy || name.trim().length < 2}>
                    {initial ? 'Сохранить' : 'Продолжить'}
                </button>
                {onCancel ? (
                    <button type="button" className="btn ghost" onClick={onCancel}>
                        Отмена
                    </button>
                ) : null}
            </div>
        </form>
    );
}

// ───────── лига ─────────
function LeagueTab({ prof, onRename }: { prof: LeagueProfile; onRename: (p: LeagueProfile) => void }) {
    const [rows, setRows] = useState<BoardRow[] | null>(null);
    const [last, setLast] = useState<LastResult | null>(null);
    const [renaming, setRenaming] = useState(false);
    const [err, setErr] = useState('');
    useEffect(() => {
        let alive = true;
        joinAndBoard()
            .then((r) => {
                if (alive) setRows(r);
            })
            .catch((e: Error) => {
                if (alive) setErr(e.message);
            });
        lastResult()
            .then((r) => {
                if (alive) setLast(r);
            })
            .catch(() => undefined);
        return () => {
            alive = false;
        };
    }, [prof.name]);

    const lg = rows && rows[0] ? rows[0].league : prof.league;
    const L = leagueOf(lg);
    const size = rows ? rows.length : 0;
    const z = zones(size);
    const left = daysLeft();
    const seen = lsGet(SEEN_KEY) || '';
    const showLast = last && last.week !== seen;
    const hideLast = () => {
        if (last) lsSet(SEEN_KEY, last.week);
        setLast(null);
    };

    return (
        <div className="stack">
            {showLast && last ? (
                <div className={'card lg-last ' + (last.moved > 0 ? 'up' : last.moved < 0 ? 'down' : '')}>
                    <Icon name={last.moved > 0 ? 'arrow-fat-up' : last.moved < 0 ? 'arrow-fat-down' : 'equals'} fill />
                    <div className="lg-last-txt">
                        <b>
                            {last.moved > 0
                                ? `Повышение! Теперь вы в лиге «${leagueOf(last.league + 1).name}»`
                                : last.moved < 0
                                  ? `Неделя не задалась — лига «${leagueOf(last.league - 1).name}»`
                                  : 'Вы остались в своей лиге'}
                        </b>
                        <span className="small muted">
                            Прошлая неделя: {last.place}-е место, {last.xp} {plural(last.xp, 'очко', 'очка', 'очков')}
                        </span>
                    </div>
                    <button type="button" className="icon-btn" aria-label="Скрыть" onClick={hideLast}>
                        <Icon name="x" />
                    </button>
                </div>
            ) : null}

            <div className="card lg-hero" style={col(lg)}>
                <div className="lg-badge">
                    <LeagueEmblem league={lg} size={72} />
                </div>
                <div className="lg-hero-txt">
                    <div className="eyebrow">
                        Лига недели · {lg + 1} из {LEAGUES.length}
                    </div>
                    <b className="lg-title">{L.name} лига</b>
                    <span className="small muted">
                        До конца недели {left} {plural(left, 'день', 'дня', 'дней')}
                        {z.up ? ` · ${z.up} лучших поднимутся` : ''}
                        {z.down ? `, ${z.down} последних опустятся` : ''}
                    </span>
                </div>
            </div>

            {err ? (
                <div className="card empty">{err}</div>
            ) : !rows ? (
                <Loading />
            ) : (
                <ol className="card lg-board">
                    {rows.map((r) => {
                        const zone = r.place <= z.up && r.xp > 0 ? 'up' : r.place > size - z.down ? 'down' : '';
                        return (
                            <li key={r.place + r.name} className={'lg-row ' + zone + (r.is_me ? ' me' : '')}>
                                <span className="lg-place">{r.place}</span>
                                <a className="lg-ava" style={col(lg)} href={userHref(r)} tabIndex={-1}>
                                    {r.name.trim()[0]?.toUpperCase()}
                                </a>
                                <a className="lg-name-cell" href={userHref(r)}>
                                    <b>
                                        {r.name}
                                        {r.is_me ? ' · вы' : ''}
                                    </b>
                                    {r.is_friend ? <span className="pill accent lg-fr">друг</span> : null}
                                </a>
                                <span className="lg-xp">
                                    <b>{r.xp}</b>{' '}
                                    <span className="tiny muted">{plural(r.xp, 'очко', 'очка', 'очков')}</span>
                                </span>
                            </li>
                        );
                    })}
                    {size < 3 ? (
                        <li className="lg-alone small muted">
                            В группе пока мало людей. Позовите друзей — вкладка «Друзья», там ваш код. Повышение
                            начинается, когда в группе от трёх человек.
                        </li>
                    ) : null}
                </ol>
            )}

            <p className="muted small">
                Очки недели: 1 — за повторение карточки, 2 — за ответ в упражнении, 10 — за прочитанный текст. Считаются
                по прогрессу в облаке, обновляются после синхронизации. Итоги — в ночь на понедельник по Москве.
            </p>
            {renaming ? (
                <NameForm
                    initial={prof.name}
                    onDone={(p) => {
                        onRename(p);
                        setRenaming(false);
                        toast('Имя сохранено');
                    }}
                    onCancel={() => setRenaming(false)}
                />
            ) : (
                <button type="button" className="btn ghost small lg-rename" onClick={() => setRenaming(true)}>
                    <Icon name="pencil-simple" /> Имя в лиге: {prof.name}
                </button>
            )}
        </div>
    );
}

// ───────── друзья ─────────
function FriendsTab({ prof }: { prof: LeagueProfile }) {
    const [list, setList] = useState<Friend[] | null>(null);
    const [code, setCode] = useState('');
    const [busy, setBusy] = useState(false);
    const [confirm, setConfirm] = useState('');
    const load = () => {
        friends()
            .then(setList)
            .catch(() => setList([]));
    };
    useEffect(load, []);

    const add = async (e: FormEvent) => {
        e.preventDefault();
        setBusy(true);
        try {
            const n = await addFriend(code);
            toast(`${n} теперь в друзьях`);
            setCode('');
            load();
        } catch (x) {
            toast((x as Error).message);
        }
        setBusy(false);
    };
    const share = async () => {
        const text = `Давай учить английский вместе в English Path! Мой код друга: ${prof.friend_code}\nhttps://spilo777.github.io/english-path/#/league/friends`;
        try {
            if (navigator.share) {
                await navigator.share({ text });
                return;
            }
            await navigator.clipboard.writeText(text);
            toast('Приглашение скопировано');
        } catch {
            /* отменили */
        }
    };
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(prof.friend_code);
            toast('Код скопирован');
        } catch {
            toast('Код: ' + prof.friend_code);
        }
    };

    return (
        <div className="stack">
            <div className="card lg-code">
                <div>
                    <div className="eyebrow">Ваш код друга</div>
                    <button type="button" className="lg-code-val" onClick={copy} title="Скопировать">
                        {prof.friend_code} <Icon name="copy" />
                    </button>
                </div>
                <button type="button" className="btn primary small" onClick={share}>
                    <Icon name="share-network" /> Позвать друга
                </button>
            </div>

            <form className="card row lg-add" onSubmit={add}>
                <input
                    className="input"
                    value={code}
                    maxLength={6}
                    placeholder="Код друга"
                    onChange={(e) => setCode(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
                />
                <button type="submit" className="btn" disabled={busy || code.length !== 6}>
                    Добавить
                </button>
            </form>

            {list === null ? (
                <Loading />
            ) : !list.length ? (
                <div className="card empty">
                    <div className="big">
                        <Icon name="users-three" />
                    </div>
                    Друзей пока нет. Отправьте свой код — и видьте серии и очки друг друга.
                </div>
            ) : (
                <ul className="card lg-friends">
                    {list.map((f) => (
                        <li key={f.friend_code} className="lg-row">
                            <a className="lg-ava" style={col(f.league)} href={'#/u/' + f.friend_code} tabIndex={-1}>
                                {f.name.trim()[0]?.toUpperCase()}
                            </a>
                            <a className="lg-name-cell" href={'#/u/' + f.friend_code}>
                                <b>{f.name}</b>
                                <span className="tiny muted">{leagueOf(f.league).name} лига</span>
                            </a>
                            <span className="lg-fstat" title="Дней подряд">
                                <Icon name="flame" fill /> {f.streak}
                            </span>
                            <span className="lg-xp">
                                <b>{f.week_xp}</b> <span className="tiny muted">за неделю</span>
                            </span>
                            {confirm === f.friend_code ? (
                                <span className="row lg-rm">
                                    <button
                                        type="button"
                                        className="btn small"
                                        onClick={() => {
                                            void removeFriend(f.friend_code).then(() => {
                                                setConfirm('');
                                                load();
                                            });
                                        }}
                                    >
                                        Удалить
                                    </button>
                                    <button type="button" className="btn small ghost" onClick={() => setConfirm('')}>
                                        Нет
                                    </button>
                                </span>
                            ) : (
                                <button
                                    type="button"
                                    className="icon-btn lg-x"
                                    aria-label={'Удалить ' + f.name}
                                    onClick={() => setConfirm(f.friend_code)}
                                >
                                    <Icon name="x" />
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
