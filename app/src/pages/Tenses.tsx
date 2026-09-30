// Раздел «Курс» → «Времена»: карта всех времён, страница времени (объяснение / упражнения), тренажёр «выбери время»
import { useMemo, useRef, useState, type ReactNode } from 'react';
import { isLevel } from '@utils/level';
import { lsGet, lsSet } from '@utils/storage';
import type { PageProps } from '../app/App';
import { useMainCourse } from '../catalog/hooks';
import { useSource } from '../content/base/hooks';
import {
    recordTrainRound,
    saveTenseResult,
    tenseBest,
    tenseMastered,
    tenses as tensesSrc,
    tensesUpTo,
    trainerLevel,
    trainerQuestions,
} from '../content/tenses';
import { ding } from '../lib/sfx';
import { speakTTS } from '../lib/speech';
import { recordAnswer, update, useProgress } from '../lib/store';
import { LEVELS, type Level, type Progress, type Tense, type TenseEx } from '../lib/types';
import { esc, Html, TrBox, trSentence, useLessonEnhance } from '../components/Enhance';
import { BackLink, Icon, LoadError, Loading, Page, plural, shuffle } from '../components/ui';
import { CourseHead } from './course-head';
import '../components/Exercises.css';
import './Tenses.css';

type Time = Tense['time'];
const TIMES: Time[] = ['present', 'past', 'future'];
const TIME_RU: Record<Time, string> = { present: 'Настоящее', past: 'Прошедшее', future: 'Будущее' };
const TIME_ICO: Record<Time, string> = { present: 'clock', past: 'clock-counter-clockwise', future: 'clock-clockwise' };

// ───────── мелкие элементы ─────────
/** Схема времени на линии «прошлое → сейчас → будущее» */
function TimeLine({ t }: { t: Tense }) {
    const perf = /perfect/.test(t.aspect);
    const ref = t.time === 'past' ? (perf ? 50 : 34) : t.time === 'future' ? (perf ? 108 : 96) : 65;
    const c = 'var(--tc)';
    let g: ReactNode = null;
    if (t.aspect === 'simple') {
        g =
            t.time === 'present' ? (
                [22, 40, 58, 76, 94, 112].map((x) => <circle key={x} cx={x} cy="22" r="4" fill={c} />)
            ) : (
                <circle cx={ref} cy="22" r="6" fill={c} />
            );
    } else if (t.aspect === 'continuous') {
        g = (
            <path
                d={`M${ref - 22} 22 q5.5 -8 11 0 t11 0 t11 0 t11 0`}
                fill="none"
                stroke={c}
                strokeWidth="4"
                strokeLinecap="round"
            />
        );
    } else if (t.aspect === 'perfect') {
        g = (
            <>
                <circle cx={ref - 34} cy="22" r="5" fill={c} />
                <path d={`M${ref - 28} 22 H${ref - 4}`} stroke={c} strokeWidth="3" strokeDasharray="4 4" />
                <path d={`M${ref - 8} 16 l7 6 -7 6`} fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" />
            </>
        );
    } else if (t.aspect === 'perfect-continuous') {
        g = (
            <>
                <path
                    d={`M${ref - 40} 22 q5 -8 10 0 t10 0 t10 0 t10 0`}
                    fill="none"
                    stroke={c}
                    strokeWidth="4"
                    strokeLinecap="round"
                />
                <path d={`M${ref - 6} 15 l6 7 -6 7`} fill="none" stroke={c} strokeWidth="3" strokeLinecap="round" />
            </>
        );
    } else if (t.aspect === 'going-to') {
        g = (
            <>
                <path d={`M65 22 H${ref - 10}`} stroke={c} strokeWidth="3" strokeDasharray="4 4" />
                <circle cx={ref} cy="22" r="6" fill={c} />
            </>
        );
    }
    const refMark = t.time !== 'present' && t.aspect !== 'simple' && t.aspect !== 'going-to';
    return (
        <svg className="tl" viewBox="0 0 130 44" width="130" height="44" aria-hidden="true">
            <line x1="6" y1="22" x2="124" y2="22" stroke="currentColor" strokeOpacity=".22" strokeWidth="2" />
            <path d="M118 17 l6 5 -6 5" fill="none" stroke="currentColor" strokeOpacity=".3" strokeWidth="2" />
            <line x1="65" y1="12" x2="65" y2="32" stroke="currentColor" strokeOpacity=".45" strokeWidth="2" />
            <text x="65" y="42" fontSize="8" textAnchor="middle" fill="currentColor" opacity=".55">
                сейчас
            </text>
            {refMark ? <line x1={ref} y1="10" x2={ref} y2="34" stroke={c} strokeWidth="2" opacity=".5" /> : null}
            {g}
        </svg>
    );
}

const Freq = ({ n }: { n: number }) => (
    <span className="freq" title="Как часто встречается">
        {[1, 2, 3, 4, 5].map((i) => (
            <i key={i} className={i <= n ? 'on' : ''} />
        ))}
    </span>
);

const Score = ({ b, tag = 'span' }: { b: number; tag?: 'span' | 'b' }) => {
    const ok = b >= 0.8;
    const inner = (
        <>
            <Icon name={ok ? 'check-circle' : 'target'} fill={ok} /> {Math.round(b * 100)}%
        </>
    );
    return tag === 'b' ? (
        <b className={'tt-score' + (ok ? ' ok' : '')}>{Math.round(b * 100)}%</b>
    ) : (
        <span className={'tt-score' + (ok ? ' ok' : '')}>{inner}</span>
    );
};

function TenseTile({ t, s }: { t: Tense; s: Progress }) {
    const b = tenseBest(s, t.id);
    return (
        <a className={'tense-tile tt-' + t.time} href={'#/tenses/' + t.id}>
            <div className="tt-top">
                <span className="pill">{t.level}</span>
                <Freq n={t.freq} />
            </div>
            <TimeLine t={t} />
            <b>{t.name}</b>
            <span className="tt-ru">{t.ru}</span>
            <span className="tt-one">{t.one}</span>
            {b != null ? <Score b={b} /> : null}
        </a>
    );
}

// ───────── карта времён ─────────
function TenseMap({ list, s }: { list: Tense[]; s: Progress }) {
    const done = list.filter((t) => tenseMastered(s, t.id)).length;
    return (
        <Page>
            <CourseHead
                tab="tenses"
                sub={`Все ${list.length} времён английского: когда какое нужно, как строится, чем отличается от соседнего. Освоено ${done} из ${list.length}.`}
            />
            <a className="continue-card" href="#/tenses/train">
                <div className="cc-ill">
                    <Icon name="target" fill />
                </div>
                <div className="cc-body">
                    <div className="cc-eyebrow">Тренажёр</div>
                    <div className="cc-title">Выбери правильное время</div>
                    <div className="cc-sub">
                        20 вопросов вперемешку — главное умение: по ситуации понять, какое время нужно
                    </div>
                </div>
                <span className="pill-btn light">НАЧАТЬ</span>
            </a>
            <div className="card lesson tense-how">
                <h3>Как выбрать время за 3 вопроса</h3>
                <div className="g-steps">
                    <ol>
                        <li>
                            <b>Когда?</b> Сейчас/обычно → <b>Present</b>, было → <b>Past</b>, будет → <b>Future</b>.
                        </li>
                        <li>
                            <b>Процесс или факт?</b> Идёт, длится в какой-то момент → <b>Continuous</b> (be + -ing).
                            Просто факт, привычка → <b>Simple</b>.
                        </li>
                        <li>
                            <b>Важен результат к какому-то моменту?</b> «Уже сделал», «к тому времени» → <b>Perfect</b>{' '}
                            (have + 3-я форма).
                        </li>
                    </ol>
                </div>
                <div className="g-tip">
                    В речи и играх 90% времени — это Present Simple, Present Continuous, Past Simple, will / going to и
                    Present Perfect. Начните с них — у них 4–5 точек частоты.
                </div>
            </div>
            {TIMES.map((tm) => (
                <section className="sec" key={tm}>
                    <div className="sec-head">
                        <h2>
                            <Icon name={TIME_ICO[tm]} /> {TIME_RU[tm]}
                        </h2>
                    </div>
                    <div className="tense-grid">
                        {list
                            .filter((t) => t.time === tm)
                            .map((t) => (
                                <TenseTile key={t.id} t={t} s={s} />
                            ))}
                    </div>
                </section>
            ))}
        </Page>
    );
}

// ───────── движок вопросов «выбери форму» ─────────
type Q = TenseEx & { tid: string };

function TenseQuiz({
    qs: qs0,
    byId,
    onDone,
    backHref,
    shuffleOpts,
}: {
    qs: Q[];
    byId: Record<string, Tense>;
    onDone: (score: number) => void;
    backHref: string;
    shuffleOpts?: boolean;
}) {
    const s = useProgress();
    const [qs, setQs] = useState(qs0);
    const [n, setN] = useState(0);
    const [right, setRight] = useState(0);
    const [wrongBy, setWrongBy] = useState<Record<string, number>>({});
    const [picked, setPicked] = useState<number | null>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const q = qs[n] as Q | undefined;
    // порядок вариантов для текущего вопроса (в тренажёре — перемешан)
    const opts = useMemo(() => {
        if (!q) return [];
        const a = q.o.map((o, i) => ({ o, i }));
        return shuffleOpts ? shuffle(a) : a;
    }, [q, shuffleOpts]);

    if (!q) {
        const sc = qs.length ? right / qs.length : 0;
        const weak = Object.entries(wrongBy)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 3)
            .filter(([id]) => byId[id]);
        const again = () => {
            setN(0);
            setRight(0);
            setWrongBy({});
            setPicked(null);
            if (shuffleOpts) setQs(shuffle(qs));
        };
        return (
            <div className="card result">
                <div className="big">
                    <Icon name={sc >= 0.8 ? 'confetti' : 'target'} />
                </div>
                <h2>
                    {right} из {qs.length}
                </h2>
                <p className="muted">
                    {sc >= 0.8
                        ? 'Отлично! Это время у вас в руках.'
                        : sc >= 0.5
                          ? 'Хорошо, но есть над чем поработать. Перечитайте объяснение и попробуйте ещё раз.'
                          : 'Пока сложновато — перечитайте объяснение, особенно блок «Не путать».'}
                </p>
                {weak.length ? (
                    <p className="small">
                        Чаще всего ошибки в:{' '}
                        {weak.map(([id], i) => (
                            <span key={id}>
                                {i ? ', ' : ''}
                                <a href={'#/tenses/' + id}>{byId[id].name}</a>
                            </span>
                        ))}
                    </p>
                ) : null}
                <div className="row tq-actions">
                    <button type="button" className="btn primary" onClick={again}>
                        Ещё раз
                    </button>
                    <a className="btn" href={backHref}>
                        Готово
                    </a>
                </div>
            </div>
        );
    }

    const tt = byId[q.tid];
    const full = q.q.replace('___', q.o[q.a]);
    const tr = trSentence(q.q, q.o[q.a]);
    const ok = picked === q.a;
    const qHtml =
        esc(q.q).replace('___', '<span class="tq-gap">___</span>') +
        (q.v ? ` <span class="muted tq-v">(${esc(q.v)})</span>` : '');

    const choose = (i: number) => {
        if (picked != null) return;
        const good = i === q.a;
        setPicked(i);
        ding(good ? 'ok' : 'bad');
        if (good) setRight((r) => r + 1);
        else setWrongBy((w) => ({ ...w, [q.tid]: (w[q.tid] || 0) + 1 }));
        update((st) => recordAnswer(st, good));
        if (good) speakTTS(full, { rate: s.settings.rate });
        requestAnimationFrame(() => nextRef.current?.focus({ preventScroll: true }));
    };
    const next = () => {
        const last = n + 1 >= qs.length;
        if (last) onDone(right / qs.length);
        setPicked(null);
        setN(n + 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="card" key={n}>
            <div className="row small muted tq-head">
                <span>
                    Вопрос {n + 1} из {qs.length}
                </span>
                <span className="spacer" />
                <span>верно {right}</span>
            </div>
            <div className="progress tq-prog">
                <i style={{ width: (n / qs.length) * 100 + '%' }} />
            </div>
            <div className="ex-label">
                Выберите правильную форму
                {q.v ? (
                    <>
                        {' '}
                        глагола <b>{q.v}</b>
                    </>
                ) : null}
            </div>
            <Html className="ex-q tq-q" html={qHtml} />
            {tr ? <TrBox text={tr} /> : null}
            <div className="stack tq-opts">
                {opts.map((x) => (
                    <button
                        key={x.i}
                        type="button"
                        disabled={picked != null}
                        onClick={() => choose(x.i)}
                        className={
                            'option' +
                            (picked != null && x.i === q.a ? ' correct' : '') +
                            (picked === x.i && !ok ? ' wrong' : '')
                        }
                    >
                        {x.o}
                    </button>
                ))}
            </div>
            {picked != null ? (
                <>
                    <div className={'feedback ' + (ok ? 'ok' : 'bad')}>
                        <b>{ok ? 'Верно!' : 'Не совсем.'}</b> {q.why || ''}
                        <div className="right">
                            <Html
                                tag="span"
                                className="say-inline-wrap"
                                html={`<span class="say-inline" data-speak="${esc(full)}"><i class="ph ph-speaker-high"></i> ${esc(full)}</span>`}
                            />
                            {tt && shuffleOpts ? (
                                <>
                                    {' '}
                                    · <a href={'#/tenses/' + tt.id}>{tt.name}</a>
                                </>
                            ) : null}
                        </div>
                    </div>
                    <div className="ex-actions tq-next">
                        <button ref={nextRef} type="button" className="btn primary" onClick={next}>
                            {n + 1 < qs.length ? 'Дальше' : 'Результат'}
                        </button>
                    </div>
                </>
            ) : null}
        </div>
    );
}

// ───────── страница времени ─────────
function TensePage({
    t,
    list,
    byId,
    tab,
    s,
}: {
    t: Tense;
    list: Tense[];
    byId: Record<string, Tense>;
    tab?: string;
    s: Progress;
}) {
    const ref = useRef<HTMLDivElement>(null);
    useLessonEnhance(ref, [t.id, tab]);
    const i = list.indexOf(t),
        prev = list[i - 1],
        next = list[i + 1];
    const blocks = useMemo(
        () =>
            t.html
                .split(/(?=<h3>)/)
                .map((h) => h.trim())
                .filter(Boolean),
        [t.html],
    );
    const b = tenseBest(s, t.id);
    const practice = tab === 'practice';
    const qs = useMemo(() => t.ex.map((e) => ({ ...e, tid: t.id })), [t]);
    const markers = useMemo(() => t.markers.map((m) => `<span class="say mk">${esc(m)}</span>`).join(' '), [t.markers]);
    const compare = (t.compare || []).filter((c) => byId[c]);
    const save = (score: number) => update((st) => saveTenseResult(st, t.id, score));
    return (
        <Page>
            <div ref={ref} key={t.id + '/' + (practice ? 'p' : 'e')} className="tense-page">
                <BackLink href="#/tenses" />
                <div className={'tense-hero tt-' + t.time}>
                    <TimeLine t={t} />
                    <div className="th-body">
                        <div className="lib-meta">
                            <span className="pill">{t.level}</span>
                            <span className="tiny muted">
                                {TIME_RU[t.time]} · встречается <Freq n={t.freq} />
                            </span>
                        </div>
                        <Html className="th-title" html={`<h1>${esc(t.name)}</h1>`} />
                        <div className="muted">
                            {t.ru} — {t.one}
                        </div>
                    </div>
                </div>
                <div className="seg wl-seg tense-seg">
                    <a href={'#/tenses/' + t.id} className={practice ? '' : 'on'}>
                        <Icon name="book-open" /> Объяснение
                    </a>
                    <a href={'#/tenses/' + t.id + '/practice'} className={practice ? 'on' : ''}>
                        <Icon name="pencil-simple-line" /> Упражнения · {t.ex.length}
                        {b != null ? (
                            <>
                                {' '}
                                <Score b={b} tag="b" />
                            </>
                        ) : null}
                    </a>
                </div>
                {practice ? (
                    <TenseQuiz qs={qs} byId={byId} onDone={save} backHref={'#/tenses/' + t.id} />
                ) : (
                    <div className="stack lesson">
                        <div className="card tense-formula">
                            <h3>Формула</h3>
                            <div className="tf-row">
                                <span className="tf-k plus">+</span>
                                <Html html={t.formula.plus} />
                            </div>
                            <div className="tf-row">
                                <span className="tf-k minus">−</span>
                                <Html html={t.formula.minus} />
                            </div>
                            <div className="tf-row">
                                <span className="tf-k q">?</span>
                                <Html html={t.formula.q} />
                            </div>
                            <div className="tf-markers">
                                <span className="tiny muted">Слова-подсказки:</span>{' '}
                                <Html tag="span" className="tf-mk" html={markers} />
                            </div>
                            {compare.length ? (
                                <div className="tf-markers">
                                    <span className="tiny muted">Не путать с:</span>{' '}
                                    {compare.map((c) => (
                                        <a key={c} className="pill accent" href={'#/tenses/' + c}>
                                            {byId[c].name}
                                        </a>
                                    ))}
                                </div>
                            ) : null}
                        </div>
                        {blocks.map((h, k) => (
                            <Html key={k} className="card" html={h} />
                        ))}
                        <a className="pill-btn tq-go" href={'#/tenses/' + t.id + '/practice'}>
                            К УПРАЖНЕНИЯМ · {t.ex.length}
                        </a>
                    </div>
                )}
                <div className="chap-nav">
                    {prev ? (
                        <a className="btn" href={'#/tenses/' + prev.id}>
                            <Icon name="caret-left" /> {prev.name}
                        </a>
                    ) : (
                        <span />
                    )}
                    {next ? (
                        <a className="btn" href={'#/tenses/' + next.id}>
                            {next.name} <Icon name="caret-right" />
                        </a>
                    ) : (
                        <span />
                    )}
                </div>
            </div>
        </Page>
    );
}

// ───────── тренажёр ─────────
const LVL_KEY = 'ep.tenseLvl';

function TenseTrain({ list, byId }: { list: Tense[]; byId: Record<string, Tense> }) {
    const s = useProgress();
    const { def, index } = useMainCourse();
    const course = index.data;
    const ref = useRef<HTMLDivElement>(null);
    const my: Level = (course && def.current(s, course)?.level) || 'A1';
    const saved = lsGet(LVL_KEY);
    const [pick, setPick] = useState<Level | null>(isLevel(saved) ? saved : null);
    const [round, setRound] = useState(0);
    const lv: Level = trainerLevel(my, pick);
    const pool = tensesUpTo(list, lv);
    // 20 случайных вопросов; новый набор — при смене уровня или повторном выборе
    const qs = useMemo(
        () => trainerQuestions(list, lv),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [list, lv, round],
    );
    useLessonEnhance(ref, [lv, round]);
    const done = (sc: number) => update((st) => recordTrainRound(st, sc));
    return (
        <Page>
            <BackLink href="#/tenses" />
            <h1 className="page-title">Тренажёр времён</h1>
            <p className="page-sub">
                Вопросы из {pool.length} {plural(pool.length, 'времени', 'времён', 'времён')} вперемешку. Выберите, до
                какого уровня брать времена:
            </p>
            <div className="seg wl-seg">
                {LEVELS.map((l) => (
                    <a
                        key={l}
                        href="#/tenses/train"
                        className={l === lv ? 'on' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            lsSet(LVL_KEY, l);
                            setPick(l);
                            setRound((r) => r + 1);
                        }}
                    >
                        до {l} · {tensesUpTo(list, l).length}
                    </a>
                ))}
            </div>
            <div ref={ref} key={lv + '/' + round}>
                <TenseQuiz qs={qs} byId={byId} onDone={done} backHref="#/tenses" shuffleOpts />
            </div>
        </Page>
    );
}

export default function Tenses({ params }: PageProps) {
    const s = useProgress();
    const { data: list, error } = useSource(tensesSrc);
    const byId = useMemo(() => Object.fromEntries((list || []).map((t) => [t.id, t])) as Record<string, Tense>, [list]);
    if (error)
        return (
            <Page>
                <CourseHead tab="tenses" />
                <LoadError error={error} />
            </Page>
        );
    if (!list)
        return (
            <Page>
                <CourseHead tab="tenses" />
                <Loading />
            </Page>
        );
    const [, a, b] = params;
    if (a === 'train') return <TenseTrain list={list} byId={byId} />;
    const t = a ? byId[a] : undefined;
    if (t) return <TensePage t={t} list={list} byId={byId} tab={b} s={s} />;
    return <TenseMap list={list} s={s} />;
}
