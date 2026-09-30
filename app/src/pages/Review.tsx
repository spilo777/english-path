// Повторение карточек: #/review (все карточки) и #/review/topic/<id> (одна коллекция)
import { useEffect, useMemo, useRef, useState } from 'react';
import type { PageProps } from '../app/App';
import { BackLink, Icon, LoadError, Loading, Page, Progress as Bar } from '../components/ui';
import { useSource } from '../content/base/hooks';
import { buildQueue } from '../content/word-cards/review-queue';
import { deck as deckSrc, topics as topicsSrc } from '../content/word-cards/sources';
import type { DeckWord, TopicCol } from '@content/word-cards';
import { getState, type Settings, tomb, track, update } from '@core/progress';
import { useProgress } from '@core/progress/hooks';
import { countNew, schedule, takeNew } from '@core/srs';
import { FlashCard, prefetchCard, type Grade, type Side } from './review-card';
import { plural } from '@utils/plural';
import { toast } from '@core/notifications/notify';
import './Review.css';

/** queue — карточки по порядку; wait — изучаемые слова, которые ждут своего времени (через 1, 5, 10 минут) */
interface Sess {
    queue: string[];
    wait: string[];
    done: number;
    graded: number;
    agains: number;
    start: number;
    total: number;
    finished: boolean;
}

const mmss = (ms: number) => {
    const t = Math.ceil(ms / 1000);
    return Math.floor(t / 60) + ':' + String(t % 60).padStart(2, '0');
};

/** Остались только слова, которые ещё рано повторять: таймер до ближайшего и кнопка «Повторить сейчас» */
function WaitScreen({
    due,
    count,
    onReady,
    onNow,
    back,
}: {
    due: number;
    count: number;
    onReady: () => void;
    onNow: () => void;
    back: string;
}) {
    const [now, setNow] = useState(Date.now());
    useEffect(() => {
        const t = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(t);
    }, []);
    const left = due - now;
    useEffect(() => {
        if (left <= 0) onReady();
    }, [left <= 0]);
    return (
        <div className="card result rv-wait">
            <div className="big">
                <Icon name="hourglass-medium" />
            </div>
            <h2>Следующее слово через {mmss(Math.max(0, left))}</h2>
            <p className="muted">
                В изучении {count} {plural(count, 'слово', 'слова', 'слов')}. Повторять раньше времени почти бесполезно
                — памяти нужно чуть «остыть». Подождите здесь, займитесь уроком или вернитесь позже: слова дождутся.
            </p>
            <div className="row rv-end">
                <button type="button" className="btn primary" onClick={onNow}>
                    Повторить сейчас
                </button>
                <a className="btn" href={back}>
                    Закончить
                </a>
            </div>
        </div>
    );
}

function Session({ deck, tc, extra }: { deck: DeckWord[]; tc?: TopicCol; extra?: boolean }) {
    const s = useProgress();
    const sess = useRef<Sess | null>(null);
    const [turn, setTurn] = useState(0);
    const byId = useMemo(() => new Map(deck.map((w) => [w.id, w])), [deck]);

    useEffect(() => {
        if (sess.current) return;
        let queue: string[] = [];
        update((st) => {
            queue = buildQueue(st, deck, tc, extra);
        });
        sess.current = {
            queue,
            wait: [],
            done: 0,
            graded: 0,
            agains: 0,
            start: Date.now(),
            total: queue.length,
            finished: false,
        };
        setTurn(1);
    }, [deck, tc, extra]);

    /** Следующая карточка: пропустить удалённые, в конце сессии — «чистая сессия» для достижений */
    const next = () => {
        const x = sess.current;
        if (!x) return;
        const cards = getState().cards;
        const now = Date.now();
        // изучаемые слова, чьё время подошло, идут первыми — как в Anki
        x.wait = x.wait.filter((id) => cards[id]);
        const ready = x.wait.filter((id) => cards[id].due <= now).sort((a, b) => cards[a].due - cards[b].due);
        if (ready.length) {
            x.wait = x.wait.filter((id) => !ready.includes(id));
            x.queue.unshift(...ready);
        }
        while (x.queue.length && !cards[x.queue[0]]) x.queue.shift();
        if (!x.queue.length && !x.wait.length && !x.finished) {
            x.finished = true;
            if (x.graded >= 20 && x.agains === 0)
                update((st) => {
                    st.stats.cleanSessions = (st.stats.cleanSessions || 0) + 1;
                });
        }
        setTurn((t) => t + 1);
    };

    const x = sess.current;
    const head = x && x.queue.length ? s.cards[x.queue[0]] : undefined;
    const nextCard = x && x.queue[1] ? s.cards[x.queue[1]] : undefined;
    useEffect(() => {
        if (nextCard) prefetchCard(nextCard, byId.get(nextCard.id)?.pos, byId.has(nextCard.id));
    }, [turn]);

    const setMode = (v: Settings['cardMode']) =>
        update((st) => {
            st.settings.cardMode = v;
        });

    const onGrade = (g: Grade, side: Side) => {
        if (!x || !head) return;
        const id = head.id;
        const wasNew = head.state === 'new';
        // вне очереди знакомую карточку расписание не трогаем (иначе интервалы раздуются); «Снова» — как обычно: слово забыто
        const early = !!extra && !wasNew && g > 0 && head.due > Date.now();
        const n = early ? head : schedule(head, g, Date.now(), { fuzz: true });
        update((st) => {
            st.cards[id] = n;
            if (wasNew) countNew(st);
            track(st, 'reviews');
            st.stats.rvAll = (st.stats.rvAll || 0) + 1; // «вспомнил» — всё, кроме «Снова»
            if (g > 0) st.stats.rvOk = (st.stats.rvOk || 0) + 1;
            if (side === 'ru-en') st.stats.ruEn = (st.stats.ruEn || 0) + 1;
            if (st.settings.cardMode === 'mix') st.stats.mixRev = (st.stats.mixRev || 0) + 1;
            const d = new Date();
            if (d.getHours() >= 23) st.stats.late = (st.stats.late || 0) + 1;
            if (d.getHours() === 0 && d.getMinutes() === 0) st.stats.midnight = 1;
            if (x.graded + 1 === 50 && Date.now() - x.start < 5 * 60000) st.stats.speedrun = 1;
        });
        if (n.leech && !head.leech)
            toast(`«${head.en}» — трудное слово: забыто ${n.lapses} раз. Добавьте картинку-ассоциацию или свой пример`);
        x.graded++;
        if (g === 0) x.agains++;
        x.queue.shift();
        if (!early && n.state === 'learn')
            x.wait.push(id); // вернётся, когда пройдёт интервал (1, 5 или 10 минут)
        else x.done++;
        next();
    };

    // «Уже знаю»: слово — в выученные, из карточек убираем, на его место в сессию — следующее новое слово
    const onKnown = () => {
        if (!x || !head) return;
        const id = head.id;
        x.queue.shift();
        update((st) => {
            st.known[id] = Date.now();
            delete st.cards[id];
            tomb(st, 'card:' + id);
            const more = takeNew(st, deck, 1).filter((k) => !x.queue.includes(k));
            x.queue.push(...more);
        });
        toast('Отмечено как выученное');
        next();
    };

    // «Повторить сейчас» на экране ожидания: ближайшее слово — без ожидания
    const takeNext = () => {
        if (!x || !x.wait.length) return;
        const cards = getState().cards;
        const id = [...x.wait].sort((a, b) => (cards[a]?.due || 0) - (cards[b]?.due || 0))[0];
        x.wait = x.wait.filter((k) => k !== id);
        x.queue.unshift(id);
        setTurn((t) => t + 1);
    };

    const side: Side = useMemo(() => {
        const mode = getState().settings.cardMode;
        return mode === 'mix' ? (Math.random() < 0.5 ? 'en-ru' : 'ru-en') : mode;
    }, [turn]);

    let body;
    if (!x) body = <Loading />;
    else if (!x.total) {
        body = (
            <div className="card empty">
                <div className="big">
                    <Icon name="check" />
                </div>
                {extra ? (
                    'Карточек для занятия нет: включите колоды в словаре или добавьте слова из урока.'
                ) : (
                    <>
                        Сейчас повторять нечего.{' '}
                        {Object.keys(s.cards).length ? 'Следующие карточки придут позже.' : 'Добавьте слова из урока.'}
                    </>
                )}
                {!extra && !tc ? (
                    <div className="rv-end">
                        <a className="btn" href="#/review/extra">
                            Занятие вне очереди
                        </a>
                    </div>
                ) : null}
            </div>
        );
    } else if (!head && x.wait.length) {
        const cards = s.cards;
        const nextDue = Math.min(...x.wait.map((id) => cards[id]?.due || Date.now()));
        body = (
            <WaitScreen
                due={nextDue}
                count={x.wait.length}
                onReady={next}
                onNow={takeNext}
                back={tc ? '#/topic/' + tc.id : '#/cards'}
            />
        );
    } else if (!head) {
        body = (
            <div className="card result">
                <div className="big">
                    <Icon name="confetti" />
                </div>
                <h2>{tc || extra ? 'Сессия закончена!' : 'На сегодня всё!'}</h2>
                <p className="muted">
                    {tc
                        ? `«${tc.title}»: повторено ${x.done}. Эти слова теперь будут приходить в обычные карточки по расписанию.`
                        : extra
                          ? `Пройдено карточек: ${x.done}. Знакомые слова, отмеченные «Уже знаю», больше не придут.`
                          : `Повторено карточек: ${x.done}. Возвращайтесь завтра — слова придут сами.`}
                </p>
                <div className="row rv-end">
                    {tc ? (
                        <>
                            <a className="btn primary" href={'#/topic/' + tc.id}>
                                К коллекции
                            </a>
                            <a className="btn" href="#/cards">
                                В словарь
                            </a>
                        </>
                    ) : (
                        <>
                            <a className="btn primary" href="#/">
                                На главную
                            </a>
                            <a className="btn" href={'#/review/extra/' + Date.now()}>
                                Ещё занятие вне очереди
                            </a>
                        </>
                    )}
                </div>
            </div>
        );
    } else {
        body = (
            <FlashCard
                key={turn}
                c={head}
                pos={byId.get(head.id)?.pos}
                side={side}
                onGrade={onGrade}
                onKnown={onKnown}
                early={!!extra && head.state !== 'new' && head.due > Date.now()}
            />
        );
    }

    return (
        <>
            <div className="row rv-top">
                <BackLink href={tc ? '#/topic/' + tc.id : '#/cards'} />
                {tc ? <b className="rv-topic">{tc.title}</b> : extra ? <b className="rv-topic">Вне очереди</b> : null}
                <span className="rv-spacer" />
                <select
                    className="input rv-mode"
                    aria-label="Сторона карточки"
                    value={s.settings.cardMode}
                    onChange={(e) => setMode(e.target.value as Settings['cardMode'])}
                >
                    <option value="en-ru">англ → рус</option>
                    <option value="ru-en">рус → англ</option>
                    <option value="mix">вперемешку</option>
                </select>
            </div>
            {x && x.total ? (
                <div className="ex-head">
                    <Bar value={x.done / Math.max(1, x.total)} />
                    <span className="tiny muted">
                        {x.queue.length + x.wait.length ? `осталось ${x.queue.length + x.wait.length}` : ''}
                    </span>
                </div>
            ) : null}
            {body}
        </>
    );
}

export default function Review({ params }: PageProps) {
    const { data: deck } = useSource(deckSrc);
    const topicId = params[1] === 'topic' ? params[2] : undefined;
    const extra = params[1] === 'extra';
    const topics = useSource(topicsSrc);
    if (topicId && topics.error)
        return (
            <Page className="rv">
                <LoadError error={topics.error} />
            </Page>
        );
    if (!deck || (topicId && !topics.data))
        return (
            <Page className="rv">
                <Loading />
            </Page>
        );
    const tc = topicId ? topics.data?.cols.find((c) => c.id === topicId) : undefined;
    return (
        <Page className="rv">
            <Session key={params.join('/')} deck={deck} tc={tc} extra={extra} />
        </Page>
    );
}
