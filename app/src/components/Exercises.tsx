// Упражнения урока: выбор, пропуск, порядок слов, перевод, на слух. Практика повторяет ошибки, тест — нет.
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { pickOne, shuffle } from '@utils/random';
import type { Exercise } from '@content/exercises';
import { ding, speak } from '@core/audio';
import { recordAnswer, update } from '@core/progress';
import { fmtQ, Html, trSentence, TrBox, useLessonEnhance } from './Enhance';
import { Icon } from './ui';
import { checkText, displayAnswer, norm } from '../content/exercises/check';
import { toast } from '@core/notifications/notify';
import { esc } from '@utils/text';
import { isPassing } from '@content/lessons/finish';
import './Exercises.css';

const PRAISE = ['Верно!', 'Отлично!', 'Так держать!', 'Правильно!'];

function label(e: Exercise): string {
    switch (e.t) {
        case 'gap':
            return 'Впишите пропущенное слово';
        case 'choice':
            return /_{2,}/.test(e.q) ? 'Выберите слово для пропуска' : 'Выберите правильный вариант';
        case 'order':
            return 'Соберите предложение из слов';
        case 'tr':
            return 'Переведите на английский';
        case 'listen':
            return 'Послушайте и напишите, что услышали';
    }
}

type Result = (ok: boolean, typo?: string) => void;

// ───────── одно задание ─────────
function Ask({ e, mode, done, onResult }: { e: Exercise; mode: 'practice' | 'test'; done: boolean; onResult: Result }) {
    const [val, setVal] = useState('');
    const [chosen, setChosen] = useState<number | null>(null);
    const [picked, setPicked] = useState<number[]>([]);
    const inp = useRef<HTMLInputElement>(null);
    const words = useMemo(() => (e.t === 'order' ? e.a.split(' ') : []), [e]);
    const srcOrder = useMemo(() => shuffle(words.map((w, i) => ({ w, i }))), [words]);

    const trS = e.t === 'choice' ? trSentence(e.q, e.o[e.a]) : e.t === 'gap' ? trSentence(e.q, e.a[0]) : '';

    useEffect(() => {
        if (e.t === 'listen') {
            const t = setTimeout(() => speak(e.say), 250);
            return () => clearTimeout(t);
        }
    }, [e]);
    useEffect(() => {
        const t = setTimeout(() => inp.current?.focus(), 50);
        return () => clearTimeout(t);
    }, [e]);

    const check = () => {
        if (done) return;
        const v = e.t === 'order' ? picked.map((i) => words[i]).join(' ') : val;
        if (!v.trim()) {
            toast('Введите ответ');
            return;
        }
        if (e.t === 'order') onResult(norm(v) === norm(e.a));
        else if (e.t !== 'choice') {
            const r = checkText(v, e.a);
            onResult(r.ok, r.typo);
        }
    };

    if (e.t === 'choice') {
        return (
            <div className="ex-body">
                <Html className="ex-q" html={fmtQ(e.q)} />
                {trS ? <TrBox text={trS} /> : null}
                <div className="options">
                    {e.o.map((o, i) => (
                        <button
                            type="button"
                            key={i}
                            disabled={done && chosen == null}
                            className={
                                'option' +
                                (chosen != null && i === e.a ? ' correct' : '') +
                                (chosen === i && i !== e.a ? ' wrong' : '')
                            }
                            onClick={() => {
                                if (chosen != null || done) return;
                                setChosen(i);
                                onResult(i === e.a);
                            }}
                        >
                            {o}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    const input = (ph: string) => (
        <input
            ref={inp}
            className="input"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            placeholder={ph}
            value={val}
            disabled={done}
            onChange={(ev) => setVal(ev.target.value)}
            onKeyDown={(ev) => {
                if (ev.key === 'Enter') check();
            }}
        />
    );

    return (
        <>
            <div className="ex-body">
                {e.t === 'order' ? (
                    <>
                        <Html className="ex-q ex-q-ru" html={esc(e.ru)} />
                        <div className="chips target">
                            {picked.map((i, k) => (
                                <button
                                    type="button"
                                    className="chip"
                                    key={k}
                                    disabled={done}
                                    onClick={() => setPicked(picked.filter((_, j) => j !== k))}
                                >
                                    {words[i]}
                                </button>
                            ))}
                        </div>
                        <div className="chips">
                            {srcOrder.map(({ w, i }) => (
                                <button
                                    type="button"
                                    key={i}
                                    className={'chip' + (picked.includes(i) ? ' used' : '')}
                                    disabled={done}
                                    onClick={() => {
                                        if (!picked.includes(i)) setPicked([...picked, i]);
                                    }}
                                >
                                    {w}
                                </button>
                            ))}
                        </div>
                    </>
                ) : e.t === 'listen' ? (
                    <>
                        <div className="row ex-listen">
                            <button type="button" className="btn" onClick={() => speak(e.say)}>
                                <Icon name="speaker-high" /> Слушать
                            </button>
                            <button
                                type="button"
                                className="btn ghost small"
                                onClick={() => speak(e.say, { rate: 0.6 })}
                            >
                                <Icon name="person-simple-walk" /> Медленно
                            </button>
                        </div>
                        {input('Напишите по-английски')}
                    </>
                ) : (
                    <>
                        <Html className="ex-q" html={e.t === 'tr' ? esc(e.q) : fmtQ(e.q)} />
                        {trS ? <TrBox text={trS} /> : null}
                        {input(e.t === 'tr' ? 'Перевод на английский' : 'Пропущенное слово')}
                    </>
                )}
            </div>
            {!done ? (
                <div className="ex-actions">
                    <button type="button" className="btn primary" onClick={check}>
                        Проверить
                    </button>
                    {mode === 'practice' ? (
                        <button type="button" className="btn ghost" onClick={() => onResult(false)}>
                            Не знаю
                        </button>
                    ) : null}
                </div>
            ) : null}
        </>
    );
}

interface Item {
    e: Exercise;
    retry: boolean;
}
interface Fb {
    ok: boolean;
    typo?: string;
    praise: string;
}
interface Props {
    list: Exercise[];
    mode?: 'practice' | 'test';
    onFinish?: (score: number) => ReactNode;
    unitId?: string;
}

function Runner({ list, mode = 'practice', onFinish, unitId }: Props) {
    const [queue, setQueue] = useState<Item[]>(() => list.map((e) => ({ e, retry: false })));
    const [idx, setIdx] = useState(0);
    const [answered, setAnswered] = useState(0);
    const [right, setRight] = useState(0);
    const [fb, setFb] = useState<Fb | null>(null);
    const [finished, setFinished] = useState<{ score: number; right: number; extra: ReactNode } | null>(null);
    const retried = useRef(new Set<Exercise>());
    const hadMistake = useRef(false);
    const nextRef = useRef<HTMLButtonElement>(null);
    const root = useRef<HTMLDivElement>(null);
    const total = list.length;
    useLessonEnhance(root, [idx, fb, finished], { unitId });

    useEffect(() => {
        if (fb) nextRef.current?.focus({ preventScroll: true });
    }, [fb]);

    const item = queue[idx];
    const result: Result = (ok, typo) => {
        if (fb || !item) return;
        const { e, retry } = item;
        ding(ok ? 'ok' : 'bad');
        if (!retry) {
            setAnswered((n) => n + 1);
            if (ok) setRight((n) => n + 1);
        }
        if (!ok) hadMistake.current = true;
        update((s) => {
            recordAnswer(s, ok);
            if (ok && e.t === 'listen') s.stats.listenRight = (s.stats.listenRight || 0) + 1;
            if (!retry) {
                s.stats.exType = s.stats.exType || {};
                s.stats.exType[e.t] = (s.stats.exType[e.t] || 0) + 1;
            }
        });
        if (e.t === 'listen' || e.t === 'tr' || e.t === 'order') {
            const say = e.t === 'listen' ? e.say : displayAnswer(e);
            setTimeout(() => speak(say), 200);
        }
        if (!ok && mode === 'practice' && !retried.current.has(e)) {
            retried.current.add(e);
            setQueue((q) => [...q, { e, retry: true }]);
        }
        setFb({ ok, typo, praise: pickOne(PRAISE) });
    };

    const next = () => {
        if (idx + 1 >= queue.length) {
            // повтор ошибки к этому моменту уже в очереди
            const score = total ? right / total : 1;
            ding(score >= 0.8 ? 'done' : 'ok');
            if (mode === 'practice' && !hadMistake.current)
                update((s) => {
                    s.stats.flawless = 1;
                });
            setFinished({ score, right, extra: onFinish ? onFinish(score) : null });
            return;
        }
        setFb(null);
        setIdx(idx + 1);
    };

    if (finished) {
        return (
            <div ref={root} className="card ex-wrap result">
                <div className="big" style={{ color: isPassing(finished.score) ? 'var(--ok)' : 'var(--bad)' }}>
                    {Math.round(finished.score * 100)}%
                </div>
                <p className="muted">
                    {finished.right} из {total} с первой попытки
                </p>
                <div className="row ex-result-actions">{finished.extra}</div>
            </div>
        );
    }
    if (!item)
        return (
            <div className="card ex-wrap">
                <p className="muted">Заданий нет.</p>
            </div>
        );

    const { e, retry } = item;
    const shownAnswered = answered - (fb && !retry ? 1 : 0);
    const pct = total ? Math.round((Math.min(shownAnswered, total) / total) * 100) : 0;
    const ans = displayAnswer(e);
    const why = 'why' in e && e.why ? <div className="why">{e.why}</div> : null;

    return (
        <div ref={root} className="card ex-wrap">
            <div className="ex-head">
                <div className="progress">
                    <i style={{ width: pct + '%' }} />
                </div>
                <span className="tiny muted">
                    {Math.min(shownAnswered + 1, total)}/{total}
                    {retry ? ' · повтор' : ''}
                </span>
            </div>
            <div className="ex-label">
                {label(e)}
                {e.t === 'gap' && e.hint ? (
                    <>
                        {' '}
                        · <span className="pill">{e.hint}</span>
                    </>
                ) : null}
            </div>
            <Ask key={idx} e={e} mode={mode} done={!!fb} onResult={result} />
            {fb ? (
                <>
                    {fb.ok ? (
                        <div className="feedback ok">
                            <b>{fb.typo ? 'Верно, но с опечаткой' : fb.praise}</b>
                            {fb.typo ? (
                                <Html className="right" html={`Правильно пишется: <b>${esc(fb.typo)}</b>`} />
                            ) : null}
                            {why}
                        </div>
                    ) : (
                        <div className="feedback bad">
                            <b>Не совсем.</b>
                            <Html className="right" html={`Правильный ответ: <b>${esc(ans)}</b>`} />
                            {why}
                        </div>
                    )}
                    <div className="ex-actions">
                        <button ref={nextRef} type="button" className="btn primary" onClick={next}>
                            Дальше <Icon name="arrow-right" />
                        </button>
                    </div>
                </>
            ) : null}
        </div>
    );
}

let listSeq = 0;
const listIds = new WeakMap<Exercise[], number>();

/** Прогон списка заданий. onFinish(score 0..1) — вернуть кнопки для экрана результата. Новый list — начать заново */
export function ExerciseRunner(props: Props) {
    let k = listIds.get(props.list);
    if (k == null) {
        k = ++listSeq;
        listIds.set(props.list, k);
    }
    return <Runner key={k} {...props} />;
}
