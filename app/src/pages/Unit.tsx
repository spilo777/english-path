// Страница урока: шапка (уровень, название, книги), шаги (слова → грамматика → чтение → практика → тест),
// сброс урока с подтверждением, закрытые и «готовящиеся» уроки. Маршруты: #/unit/<id> и #/unit/<id>/<шаг>.
import { useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import type { PageProps } from '../app/App';
import { go } from '../app/router';
import { ExerciseRunner } from '../components/Exercises';
import { esc, Html, useLessonEnhance } from '../components/Enhance';
import { dlgLines, minsIn, wordsIn } from '../components/Posters';
import { Walk } from '../components/Walk';
import { BackLink, Icon, LoadError, Loading, Page, plural, shuffle, toast } from '../components/ui';
import { isUnlocked, mainUnits, nextStep, passed, STEPS, unitBooksParts, type StepKey } from '../lib/course';
import { useCourse, useSyllabus, useUnit } from '../lib/data';
import { speak } from '../lib/speech';
import { addCard, cardId } from '../lib/srs';
import { getState, PASS, resetUnit, tomb, track, unitState, update, useProgress } from '../lib/store';
import type { BookRefs, CourseIndex, Level, Syllabus, Unit as UnitData, UnitMeta } from '../lib/types';
import './Unit.css';

const isStep = (x: string | undefined): x is StepKey => !!x && STEPS.some(([k]) => k === x);
const unitHref = (id: string, k?: string) => '#/unit/' + encodeURIComponent(id) + (k ? '/' + k : '');

// ───────── шапка ─────────
interface HeadProps {
    level: Level;
    eyebrow: string;
    title: string;
    meta: { id: string; books?: BookRefs | null };
    syllabus?: Syllabus;
}

function UnitHead({ level, eyebrow, title, meta, syllabus }: HeadProps) {
    const parts = unitBooksParts({ id: meta.id, books: meta.books ?? null }, syllabus);
    return (
        <>
            <BackLink href="#/course" label="Программа" />
            <div className="eyebrow">
                {eyebrow} · {level}
            </div>
            <h1 className="page-title unit-title">{title}</h1>
            {parts.length ? (
                <div className="book-chips">
                    {parts.map((p) => (
                        <span
                            key={p.key}
                            className="book-chip"
                            title="Какие юниты учебника проходим"
                            style={{ '--bc': p.color } as CSSProperties}
                        >
                            <Icon name="book-bookmark" fill /> {p.text}
                        </span>
                    ))}
                </div>
            ) : null}
        </>
    );
}

/** Кнопка «Дальше: <следующий шаг>» — отмечает текущий шаг пройденным */
function NextBtn({ id, k }: { id: string; k: StepKey }) {
    const i = STEPS.findIndex(([x]) => x === k);
    const nx = STEPS[i + 1];
    if (!nx) return null;
    const done = () =>
        update((s) => {
            unitState(s, id).steps[k] = true;
            track(s, 'exercises', 0);
        });
    return (
        <a className="btn primary" href={unitHref(id, nx[0])} onClick={done}>
            Дальше: {nx[1]} <Icon name="arrow-right" />
        </a>
    );
}

// ───────── Слова ─────────
function WordsTab({ unit }: { unit: UnitData }) {
    const s = useProgress();
    const words = unit.words || [];
    const inCards = words.filter((w) => s.cards[cardId(w[0])]).length;
    const handled = words.filter((w) => s.cards[cardId(w[0])] || s.known[cardId(w[0])]).length;
    const all = handled === words.length;

    const addAll = () => {
        let n = 0;
        update((x) => {
            words.forEach((w) => {
                if (!x.known[cardId(w[0])] && addCard(x, w[0], w[1], w[2], w[3], unit.id)) n++;
            });
            unitState(x, unit.id).steps.words = true;
        });
        toast(`Добавлено: ${n}`);
    };

    // «Знаю» — слово не нужно учить; ещё не начатая карточка убирается (как в темах словаря)
    const toggleKnown = (id: string) =>
        update((x) => {
            if (x.known[id]) {
                delete x.known[id];
                tomb(x, 'known:' + id);
                return;
            }
            x.known[id] = Date.now();
            if (x.cards[id] && x.cards[id].state === 'new') {
                delete x.cards[id];
                tomb(x, 'card:' + id);
            }
        });

    return (
        <>
            <div className="card">
                <div className="row ut-words-head">
                    <h3>
                        {words.length} {plural(words.length, 'слово', 'слова', 'слов')}
                    </h3>
                    <span className="spacer" />
                    <button
                        type="button"
                        className={'btn small' + (all ? '' : ' primary')}
                        disabled={all}
                        onClick={addAll}
                    >
                        {all ? (
                            <>
                                <Icon name="check" />{' '}
                                {inCards === words.length ? 'Все в карточках' : 'Все в карточках или «знаю»'}
                            </>
                        ) : (
                            '+ Добавить все в карточки'
                        )}
                    </button>
                </div>
                <p className="muted small">
                    Начните урок со слов: они встретятся в объяснении, текстах и упражнениях. Прослушайте каждое и
                    повторите вслух, потом добавьте все в карточки — дальше они будут приходить на повторение сами.
                </p>
                <div className="word-list">
                    {words.map((w) => {
                        const id = cardId(w[0]);
                        const c = s.cards[id];
                        const known = !!s.known[id];
                        return (
                            <div className="word-item" key={id}>
                                <button
                                    type="button"
                                    className="icon-btn"
                                    aria-label="Слушать"
                                    onClick={() => speak(w[0])}
                                >
                                    <Icon name="speaker-high" />
                                </button>
                                <div className="wi-body">
                                    <div>
                                        <span className="w">{w[0]}</span> — {w[1]}
                                    </div>
                                    <div className="ex">
                                        <span
                                            className="say-ex"
                                            role="button"
                                            tabIndex={0}
                                            onClick={() => speak(w[2])}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') speak(w[2]);
                                            }}
                                        >
                                            {w[2]}
                                        </span>{' '}
                                        · {w[3]}
                                    </div>
                                </div>
                                <div className="wi-side">
                                    {known ? (
                                        <span className="pill ok">знаю</span>
                                    ) : c ? (
                                        <span className="pill ok">в карточках</span>
                                    ) : null}
                                    {!c || c.state === 'new' ? (
                                        <button
                                            type="button"
                                            className="btn small ghost"
                                            onClick={() => toggleKnown(id)}
                                        >
                                            {known ? 'Вернуть' : 'Знаю'}
                                        </button>
                                    ) : null}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="row">
                <NextBtn id={unit.id} k="words" />
            </div>
        </>
    );
}

// ───────── Грамматика ─────────
function WordsMini({ unit }: { unit: UnitData }) {
    const [all, setAll] = useState(false);
    const wl = unit.words || [];
    if (!wl.length) return null;
    return (
        <div className="card words-mini">
            <div className="row wm-head">
                <h3>
                    <Icon name="cards" /> Слова этого урока
                </h3>
                <span className="spacer" />
                <a className="small" href={unitHref(unit.id, 'words')}>
                    Все {wl.length} с примерами
                </a>
            </div>
            <div className={'wm-list' + (all ? ' all' : '')}>
                {wl.map((w, i) => (
                    <button
                        type="button"
                        key={i}
                        className={'wm-chip' + (i >= 12 ? ' more' : '')}
                        onClick={() => speak(w[0])}
                    >
                        <b>{w[0]}</b> <span>{w[1].split(/[,;]/)[0]}</span>
                    </button>
                ))}
                {wl.length > 12 && !all ? (
                    <button type="button" className="wm-toggle" onClick={() => setAll(true)}>
                        ещё {wl.length - 12}
                    </button>
                ) : null}
            </div>
            <p className="tiny muted wm-hint">
                Нажмите на слово — прозвучит. Любое английское слово ниже тоже нажимается и показывает перевод, а{' '}
                <span className="lw nw">пунктиром</span> подчёркнуты слова, которых ещё нет в ваших карточках.
            </p>
        </div>
    );
}

function GrammarTab({ unit }: { unit: UnitData }) {
    const ref = useRef<HTMLDivElement>(null);
    const hasWalk = !!(unit.walk && unit.walk.length);
    // с пошаговой грамматикой Walk оживляет свой HTML сам; ref тогда не подключён
    useLessonEnhance(ref, [unit.id, hasWalk], { unitId: unit.id });
    return (
        <div className="stack lesson">
            <WordsMini unit={unit} />
            {hasWalk ? (
                <Walk unit={unit} next={<NextBtn id={unit.id} k="grammar" />} />
            ) : (
                <>
                    <div ref={ref} className="stack lesson">
                        {(unit.grammar || []).map((g, i) => (
                            <Html key={unit.id + i} className="card" html={`<h3>${esc(g.title)}</h3>${g.html}`} />
                        ))}
                    </div>
                    <div className="row">
                        <NextBtn id={unit.id} k="grammar" />
                    </div>
                </>
            )}
        </div>
    );
}

// ───────── Чтение ─────────
function ReadingTab({ unit }: { unit: UnitData }) {
    const s = useProgress();
    return (
        <>
            <p className="muted">
                Прочитайте каждый текст. Нажимайте на незнакомые слова, чтобы увидеть перевод. Потом включите озвучку и
                прочитайте вслух вместе с диктором.
            </p>
            <div className="stack ut-texts">
                {(unit.texts || []).map((t) => {
                    const lines = dlgLines(t);
                    const read = !!s.textsRead[t.id];
                    const n = wordsIn(t);
                    const q = (t.questions || []).length;
                    return (
                        <a
                            key={t.id}
                            className={'unit-row' + (read ? ' passed' : '')}
                            href={'#/read/' + encodeURIComponent(t.id)}
                        >
                            <div className="unit-num">
                                <Icon name={read ? 'check' : lines ? 'chat-circle-dots' : 'book-open-text'} />
                            </div>
                            <div className="body">
                                <div className="title">{t.title}</div>
                                <div className="muted small">
                                    {lines
                                        ? `Диалог · ${lines} ${plural(lines, 'реплика', 'реплики', 'реплик')}`
                                        : `${n} ${plural(n, 'слово', 'слова', 'слов')}`}{' '}
                                    · {minsIn(t)} мин
                                    {q ? ` · ${q} ${plural(q, 'вопрос', 'вопроса', 'вопросов')}` : ''}
                                </div>
                            </div>
                            <Icon name="caret-right" className="ut-go" />
                        </a>
                    );
                })}
            </div>
            <div className="row">
                <NextBtn id={unit.id} k="reading" />
            </div>
        </>
    );
}

// ───────── Практика ─────────
function PracticeTab({ unit }: { unit: UnitData }) {
    const list = useMemo(() => shuffle(unit.practice || []), [unit]);
    const finish = (): ReactNode => {
        update((s) => {
            unitState(s, unit.id).steps.practice = true;
        });
        return (
            <a className="btn primary" href={unitHref(unit.id, 'test')}>
                Перейти к тесту <Icon name="arrow-right" />
            </a>
        );
    };
    return <ExerciseRunner list={list} mode="practice" unitId={unit.id} onFinish={finish} />;
}

// ───────── Тест ─────────
function TestTab({ unit, course }: { unit: UnitData; course: CourseIndex }) {
    const s = useProgress();
    const [attempt, setAttempt] = useState(0);
    const best = s.units[unit.id]?.testBest;
    const total = (unit.test || []).length;
    // новая попытка — новый порядок заданий (и новый прогон)
    const list = useMemo(() => (attempt ? shuffle(unit.test || []) : []), [unit, attempt]);

    const finish = (score: number): ReactNode => {
        const wasPassed = passed(getState(), unit.id);
        update((x) => {
            const st = x.stats;
            st.attempts = st.attempts || {};
            st.perfect = st.perfect || {};
            st.firstTryUnits = st.firstTryUnits || {};
            st.attempts[unit.id] = (st.attempts[unit.id] || 0) + 1;
            if (score >= 1) st.perfect[unit.id] = true;
            if (score >= PASS && st.attempts[unit.id] === 1) st.firstTryUnits[unit.id] = true;
            if (score >= PASS && st.attempts[unit.id] > 1 && !wasPassed) st.retry = 1;
            const u = unitState(x, unit.id);
            u.testBest = Math.max(u.testBest || 0, score);
        });
        if (score >= PASS) {
            const main = mainUnits(course);
            const i = main.findIndex((m) => m.id === unit.id);
            const nx = i >= 0 ? main[i + 1] : undefined;
            const gm = course.units.find((m) => m.track === 'games' && !passed(getState(), m.id));
            return (
                <>
                    <p className="ut-res-msg">
                        {wasPassed ? (
                            'Тест пройден снова.'
                        ) : (
                            <>
                                Юнит пройден! <Icon name="confetti" />
                            </>
                        )}
                    </p>
                    {nx && unit.track === 'main' ? (
                        <a className="btn primary" href={unitHref(nx.id)}>
                            Следующий юнит <Icon name="arrow-right" />
                        </a>
                    ) : null}
                    {!nx && unit.track === 'main' ? (
                        <p className="muted small ut-res-msg">
                            Это последний урок на сайте — следующие уроки готовятся.
                        </p>
                    ) : null}
                    {unit.id === 'a1-0' && gm ? (
                        <a className="btn" href={unitHref(gm.id)}>
                            Открылся игровой трек <Icon name="game-controller" />
                        </a>
                    ) : null}
                    <a className="btn" href="#/course">
                        К программе
                    </a>
                </>
            );
        }
        return (
            <>
                <p className="ut-res-msg">Нужно 80%. Повторите грамматику и слова, потом попробуйте ещё раз.</p>
                <button type="button" className="btn primary" onClick={() => setAttempt((a) => a + 1)}>
                    Ещё раз
                </button>
                <a className="btn" href={unitHref(unit.id, 'grammar')}>
                    К грамматике
                </a>
            </>
        );
    };

    if (!attempt) {
        return (
            <div className="card ex-wrap ut-test-intro">
                <h3>Итоговый тест</h3>
                <p className="muted">
                    {total} {plural(total, 'задание', 'задания', 'заданий')} без подсказок. Чтобы открыть следующий
                    юнит, нужно 80% и больше.
                    {best != null ? (
                        <>
                            {' '}
                            Лучший результат: <b>{Math.round(best * 100)}%</b>.
                        </>
                    ) : null}
                </p>
                <button type="button" className="btn primary" onClick={() => setAttempt(1)}>
                    Начать тест
                </button>
            </div>
        );
    }
    return <ExerciseRunner list={list} mode="test" unitId={unit.id} onFinish={finish} />;
}

// ───────── сброс урока ─────────
function RestartConfirm({ id, onClose }: { id: string; onClose: () => void }) {
    const ok = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        ok.current?.focus({ preventScroll: true });
    }, []);
    const reset = () => {
        update((s) => {
            resetUnit(s, id);
        });
        toast('Урок сброшен');
        onClose();
        go(unitHref(id, 'words'));
    };
    return (
        <div className="card ut-confirm" role="alertdialog" aria-labelledby="ut-confirm-t">
            <div className="ut-confirm-ico">
                <Icon name="arrow-counter-clockwise" />
            </div>
            <div className="ut-confirm-body">
                <b id="ut-confirm-t">Начать урок заново?</b>
                <p className="muted small">
                    Отметки шагов, прогресс грамматики и результат теста этого урока сбросятся. Слова в карточках
                    останутся.
                </p>
                <div className="row">
                    <button ref={ok} type="button" className="btn primary small" onClick={reset}>
                        Сбросить урок
                    </button>
                    <button type="button" className="btn ghost small" onClick={onClose}>
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
}

// ───────── состояния без урока ─────────
function Stub({ icon, title, text, children }: { icon: string; title: string; text: ReactNode; children?: ReactNode }) {
    return (
        <div className="card ut-stub">
            <div className="big">
                <Icon name={icon} />
            </div>
            <h2>{title}</h2>
            <p className="muted">{text}</p>
            <div className="row ut-stub-actions">{children}</div>
        </div>
    );
}

// ───────── страница ─────────
export default function Unit({ params }: PageProps) {
    const id = params[1] || '';
    const s = useProgress();
    const { data: course, error: cErr } = useCourse();
    const { data: syllabus } = useSyllabus();
    const meta: UnitMeta | undefined = course?.units.find((u) => u.id === id);
    const unlocked = !!(meta && course && isUnlocked(s, meta, course));
    // файл юнита грузим, только когда урок открыт
    const { data: uData, error: uLoadErr } = useUnit(meta && unlocked ? id : null);
    // при переходе между уроками хук ещё отдаёт прошлый юнит — не показываем его
    const unit = uData?.id === id ? uData : undefined;
    // файла нет (404) — как раньше «юнита нет в файле уровня»: «Готовится»
    const missing = !!uLoadErr && /: 404$/.test(uLoadErr.message);
    const uErr = missing ? null : uLoadErr;
    const [confirm, setConfirm] = useState(false);

    const urlTab = isStep(params[2]) ? params[2] : undefined;
    const tab: StepKey = urlTab || nextStep(s, id)?.k || 'words';

    // без шага в адресе — закрепить выбранный шаг, чтобы отметка «пройдено» не переключала вкладку
    useEffect(() => {
        if (unit && unlocked && !urlTab) location.replace(unitHref(id, tab));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [unit, unlocked, urlTab, id]);
    useEffect(() => {
        setConfirm(false);
    }, [id]);

    if (cErr) return <LoadError error={cErr} />;
    if (!course) return <Loading />;

    // урока нет в курсе: есть в программе — «Готовится», иначе — не найден
    if (!meta) {
        const lesson = syllabus?.lessons.find((l) => l.id === id);
        if (!lesson) {
            if (!syllabus) return <Loading />;
            return (
                <Page className="unit-page">
                    <BackLink href="#/course" label="Программа" />
                    <Stub
                        icon="question"
                        title="Урок не найден"
                        text="Такого урока нет в программе. Откройте программу курса и выберите урок из списка."
                    >
                        <a className="btn primary" href="#/course">
                            К программе
                        </a>
                    </Stub>
                </Page>
            );
        }
        return (
            <Page className="unit-page">
                <UnitHead
                    level={lesson.level}
                    eyebrow="Урок"
                    title={lesson.title}
                    meta={{ id: lesson.id }}
                    syllabus={syllabus}
                />
                <Stub
                    icon="hourglass-medium"
                    title="Готовится"
                    text="Этот урок уже есть в программе, но ещё не опубликован. Пока можно пройти открытые уроки или почитать библиотеку."
                >
                    <a className="btn primary" href="#/course">
                        К программе
                    </a>
                    <a className="btn" href="#/library">
                        Библиотека
                    </a>
                </Stub>
            </Page>
        );
    }

    const eyebrow = meta.track === 'games' ? 'Игровой трек' : 'Юнит ' + meta.num;
    const head = <UnitHead level={meta.level} eyebrow={eyebrow} title={meta.title} meta={meta} syllabus={syllabus} />;

    if (!unlocked) {
        const main = mainUnits(course);
        const prevId =
            meta.track === 'games' ? meta.unlockAfter || 'a1-0' : main[main.findIndex((u) => u.id === meta.id) - 1]?.id;
        const prev = course.units.find((u) => u.id === prevId);
        return (
            <Page className="unit-page">
                {head}
                <Stub
                    icon="lock-simple"
                    title="Урок пока закрыт"
                    text={
                        prev ? (
                            <>Сначала пройдите предыдущий юнит — «{prev.title}» — и сдайте его тест на 80% и больше.</>
                        ) : (
                            'Сначала пройдите предыдущий юнит.'
                        )
                    }
                >
                    {prev ? (
                        <a className="btn primary" href={unitHref(prev.id)}>
                            К предыдущему уроку
                        </a>
                    ) : null}
                    <a className="btn" href="#/course">
                        К программе
                    </a>
                </Stub>
            </Page>
        );
    }

    if (uErr)
        return (
            <Page className="unit-page">
                {head}
                <LoadError error={uErr} />
            </Page>
        );
    if (!unit && !missing)
        return (
            <Page className="unit-page">
                {head}
                <Loading />
            </Page>
        );
    if (!unit) {
        return (
            <Page className="unit-page">
                {head}
                <Stub
                    icon="hourglass-medium"
                    title="Готовится"
                    text="Материалы этого урока ещё готовятся. Загляните позже."
                >
                    <a className="btn primary" href="#/course">
                        К программе
                    </a>
                </Stub>
            </Page>
        );
    }

    const u = s.units[id];
    return (
        <Page className="unit-page">
            {head}
            <div className="row steps-row">
                <nav className="steps" aria-label="Шаги урока">
                    {STEPS.map(([k, label], i) => {
                        const done = k === 'test' ? passed(s, id) : !!u?.steps[k];
                        return (
                            <a
                                key={k}
                                href={unitHref(id, k)}
                                className={(k === tab ? 'active' : '') + (done ? ' done' : '')}
                                aria-current={k === tab ? 'step' : undefined}
                            >
                                <b className="st-n">{done ? <Icon name="check" /> : i + 1}</b>
                                <span>{label}</span>
                            </a>
                        );
                    })}
                </nav>
                <span className="spacer" />
                <button
                    type="button"
                    className="btn ghost small ut-restart"
                    title="Сбросить прогресс этого урока"
                    onClick={() => setConfirm(!confirm)}
                    aria-expanded={confirm}
                >
                    <Icon name="arrow-counter-clockwise" /> Заново
                </button>
            </div>
            {confirm ? <RestartConfirm id={id} onClose={() => setConfirm(false)} /> : null}
            <div className="unit-body" key={id + '/' + tab}>
                {tab === 'words' ? (
                    <WordsTab unit={unit} />
                ) : tab === 'grammar' ? (
                    <GrammarTab unit={unit} />
                ) : tab === 'reading' ? (
                    <ReadingTab unit={unit} />
                ) : tab === 'practice' ? (
                    <PracticeTab unit={unit} />
                ) : (
                    <TestTab unit={unit} course={course} />
                )}
            </div>
        </Page>
    );
}
