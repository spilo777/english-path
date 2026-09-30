// Главная: продолжить урок, цель на день, план на сегодня, подборки статей/диалогов/книг, ближайшие награды
import { useState } from 'react';
import type { PageProps } from '../app/App';
import { ACH_LIST, engagement, nearAch, useAchCtx } from '../lib/achievements';
import { Cloud, useCloud } from '../lib/cloud';
import { currentUnit, isUnlocked, nextStep, unitProgress } from '../lib/course';
import { useBookIndex, useCourse, useDeck, useLessons, useLibrary } from '../lib/data';
import { dueCards, newAvailable } from '../lib/srs';
import { today, useProgress } from '../lib/store';
import { LEVEL_ORDER, type CourseIndex, type LessonText, type Progress } from '../lib/types';
import { AchCard } from '../components/AchCard';
import { GoalCard } from '../components/GoalCard';
import { PlacementHint } from '../components/PlacementHint';
import { openPlacement } from '../components/Modal';
import { BookPoster, TextPoster } from '../components/Posters';
import { Icon, LoadError, Loading, Page, plural, RoundBtn, Section, TopBar } from '../components/ui';
import { AvatarBtn } from './course-head';
import './Home.css';

const TIPS = [
    'Посмотрите 1–2 коротких видео на YouTube про дизайн или игры с английскими субтитрами.',
    'Shadowing: включите короткую фразу из текста урока и повторяйте за диктором 5 раз.',
    'Прочитайте одну новость на newsinlevels.com (Level 1).',
    'Поиграйте в любимую игру на английском, с английскими субтитрами. Незнакомые слова из меню добавьте в карточки.',
    'Проговорите вслух 5 предложений о своём дне: I get up at…, I work…, I play…',
    'Переключите телефон или Figma на английский язык хотя бы на неделю.',
    'Напишите 3 предложения о себе на английском и попросите Claude их проверить.',
];
const tipOfDay = () => TIPS[new Date().getDate() % TIPS.length];

const HIDE_BANNER = 'ep.hideAuthBanner';
const bannerHidden = () => {
    try {
        return !!localStorage.getItem(HIDE_BANNER);
    } catch {
        return false;
    }
};

/**
 * Первый непрочитанный текст из открытых уроков (по порядку курса) — по индексу lessons.json.
 * undefined — ещё грузится или такого нет.
 */
function useUnreadUnitText(s: Progress, course: CourseIndex | undefined): LessonText | undefined {
    const { data: lessons } = useLessons();
    if (!course || !lessons) return undefined;
    const open = new Set(course.units.filter((u) => isUnlocked(s, u, course)).map((u) => u.id));
    // уровни по порядку, внутри уровня — порядок индекса (как в старых файлах уровней)
    const levels = [...new Set(course.units.filter((u) => open.has(u.id)).map((u) => u.level))].sort(
        (a, b) => (LEVEL_ORDER[a] || 0) - (LEVEL_ORDER[b] || 0),
    );
    for (const l of levels) {
        for (const u of lessons) {
            if (u.level !== l || !open.has(u.id)) continue;
            const t = u.texts.find((x) => !s.textsRead[x.id]);
            if (t) return t;
        }
    }
    return undefined;
}

function Task({
    done,
    icon,
    title,
    sub,
    href,
    btn,
}: {
    done: boolean;
    icon: string;
    title: string;
    sub: string;
    href: string;
    btn?: string;
}) {
    return (
        <a className={'task' + (done ? ' done' : '')} href={href}>
            <div className="num">
                <Icon name={done ? 'check' : icon} />
            </div>
            <div className="body">
                <b>{title}</b>
                <span className="muted small">{sub}</span>
            </div>
            {btn && !done ? <span className="pill-btn sm">{btn}</span> : <Icon name="caret-right" className="muted" />}
        </a>
    );
}

function AuthBanner() {
    const st = useCloud();
    const [hidden, setHidden] = useState(bannerHidden);
    if (!Cloud.enabled || st.user || hidden) return null;
    const hide = () => {
        try {
            localStorage.setItem(HIDE_BANNER, '1');
        } catch {
            /* приватный режим */
        }
        setHidden(true);
    };
    return (
        <div className="auth-banner">
            <div className="auth-banner-ico">
                <Icon name="cloud" />
            </div>
            <div className="ab-text">
                <b>Сохраните прогресс в облаке</b>
                <div className="small muted">Бесплатный аккаунт — и занятия будут одинаковыми на Mac и iPhone.</div>
            </div>
            <a className="btn small primary" href="#/account">
                Создать аккаунт
            </a>
            <button type="button" className="icon-btn" title="Скрыть" aria-label="Скрыть" onClick={hide}>
                <Icon name="x" />
            </button>
        </div>
    );
}

function NearAwards({ s }: { s: Progress }) {
    const ctx = useAchCtx();
    const e = engagement(s);
    const near = ctx ? nearAch(s, ctx) : [];
    const list = near.length ? near.map((x) => x.a) : ACH_LIST.filter((a) => !s.ach[a.id] && !a.hidden).slice(0, 3);
    return (
        <section className="sec">
            <div className="sec-head">
                <h2>Ближайшие награды</h2>
                <a className="see-all" href="#/achievements">
                    Уровень {e.lvl} · {Object.keys(s.ach).length}/{ACH_LIST.length}
                </a>
            </div>
            {ctx ? (
                <div className="ach-list">
                    {list.map((a) => (
                        <AchCard key={a.id} a={a} ctx={ctx} />
                    ))}
                </div>
            ) : (
                <Loading />
            )}
        </section>
    );
}

export default function Home(_props: PageProps) {
    const s = useProgress();
    const { data: course, error } = useCourse();
    const { data: lib } = useLibrary();
    const { data: books } = useBookIndex();
    const deck = useDeck();
    const unitText = useUnreadUnitText(s, course);

    const h = new Date().getHours();
    const hello = h < 5 ? 'Доброй ночи' : h < 12 ? 'Доброе утро' : h < 18 ? 'Добрый день' : 'Добрый вечер';
    const right = (
        <>
            <RoundBtn icon="target" title="Тест на уровень" onClick={openPlacement} />
            <RoundBtn href="#/library/find" icon="magnifying-glass" title="Поиск по статьям" />
            <AvatarBtn />
        </>
    );
    const date = new Date()
        .toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })
        .replace(/^./, (c) => c.toUpperCase());

    if (error)
        return (
            <Page>
                <TopBar title={hello} right={right} sub={date} />
                <LoadError error={error} />
            </Page>
        );
    const u = course ? currentUnit(s, course) : undefined;
    if (!course || !u)
        return (
            <Page>
                <TopBar title={hello} right={right} sub={date} />
                <Loading />
            </Page>
        );

    const due = dueCards(s).length;
    const nw = deck ? newAvailable(s, deck) : 0;
    const ns = nextStep(s, u.id);
    const act = s.activity[today()] || { reviews: 0, exercises: 0, reads: 0 };
    const total = Object.keys(s.cards).length;
    const library = lib || [];
    const suggest = unitText || library.find((t) => t.level === u.level && !s.textsRead[t.id]);
    const reviewsDone = (act.reviews || 0) > 0 && due === 0 && nw === 0;
    const lessonToday = (act.exercises || 0) > 0 || !ns;
    const readToday = (act.reads || 0) > 0;
    const planDone = [reviewsDone, lessonToday, readToday].filter(Boolean).length;
    const forYou = library
        .filter((t) => !s.textsRead[t.id] && t.kind !== 'dialogue' && t.level === u.level)
        .slice(0, 10);
    const fits = (t: { level: string; id: string }) =>
        !s.textsRead[t.id] && (LEVEL_ORDER[t.level] || 0) <= LEVEL_ORDER[u.level] + 1;
    const dlgs = library.filter((t) => t.kind === 'dialogue' && t.cat === 'Диалоги из игр' && fits(t)).slice(0, 10);
    const scenes = library
        .filter((t) => t.kind === 'dialogue' && t.cat === 'Диалоги из фильмов и сериалов' && fits(t))
        .slice(0, 10);
    const bookList = (books || []).filter(
        (b) => b.kind === 'adapted' && LEVEL_ORDER[b.level] <= LEVEL_ORDER[u.level] + 1,
    );
    const p = Math.round(unitProgress(s, u.id) * 100);
    const unitHref = `#/unit/${u.id}/${ns ? ns.k : 'words'}`;
    const cardsLeft = due + nw;

    return (
        <Page>
            <TopBar title={hello} right={right} sub={date + (planDone === 3 ? ' · план выполнен' : '')} />
            <PlacementHint s={s} offerOnly />
            <div className="duo">
                <a className="continue-card" href={unitHref}>
                    <div className="cc-ill">
                        <Icon name="graduation-cap" fill />
                    </div>
                    <div className="cc-body">
                        <div className="cc-eyebrow">
                            Курс · {u.level} · юнит {u.num}
                        </div>
                        <div className="cc-title">{u.title}</div>
                        <div className="cc-sub">
                            {ns ? 'Дальше: ' + ns.label : 'Юнит пройден'} · {p}%
                        </div>
                        <div className="cc-bar">
                            <i style={{ width: p + '%' }} />
                        </div>
                    </div>
                    <span className="pill-btn light">{p ? 'ПРОДОЛЖИТЬ' : 'НАЧАТЬ'}</span>
                </a>
                <GoalCard />
            </div>
            <AuthBanner />
            <section className="sec">
                <div className="sec-head">
                    <h2>План на сегодня</h2>
                    <span className="see-all muted">{planDone}/3</span>
                </div>
                <div className="stack plan-grid">
                    <Task
                        done={reviewsDone}
                        icon="cards"
                        title="Карточки"
                        sub={
                            cardsLeft
                                ? `${due} на повторение, ${nw} ${plural(nw, 'новая', 'новые', 'новых')}`
                                : total
                                  ? 'На сегодня всё повторено'
                                  : 'Слова появятся после шага «Слова» в уроке'
                        }
                        href={cardsLeft ? '#/review' : '#/cards'}
                        btn={cardsLeft ? 'НАЧАТЬ' : ''}
                    />
                    <Task
                        done={lessonToday}
                        icon="book-open"
                        title={`Урок ${u.num}: ${u.title}`}
                        sub={ns ? 'Следующий шаг: ' + ns.label : 'Юнит пройден'}
                        href={unitHref}
                        btn={ns ? 'УРОК' : ''}
                    />
                    <Task
                        done={readToday}
                        icon="headphones"
                        title="Чтение и аудирование"
                        sub={
                            suggest
                                ? '«' + suggest.title + '» — прочитайте, прослушайте, повторите вслух'
                                : 'Выберите статью или книгу в библиотеке'
                        }
                        href={suggest ? '#/read/' + suggest.id : '#/library'}
                        btn="ЧИТАТЬ"
                    />
                    <div className="task">
                        <div className="num">
                            <Icon name="globe-hemisphere-west" />
                        </div>
                        <div className="body">
                            <b>Вне сайта: 20+ минут английского</b>
                            <span className="muted small">{tipOfDay()}</span>
                        </div>
                    </div>
                </div>
            </section>
            <Section title="Для вас" href="#/library" sub={`Статьи уровня ${u.level} о сериалах, играх и мультфильмах`}>
                {forYou.map((t) => (
                    <TextPoster key={t.id} t={t} />
                ))}
            </Section>
            <Section
                title={
                    <>
                        <Icon name="chat-circle-dots" /> Диалоги из игр
                    </>
                }
                href={'#/library/all/' + encodeURIComponent('Диалоги из игр')}
            >
                {dlgs.map((t) => (
                    <TextPoster key={t.id} t={t} />
                ))}
            </Section>
            {scenes.length ? (
                <Section
                    title={
                        <>
                            <Icon name="film-reel" /> Сцены из кино и сериалов
                        </>
                    }
                    href={'#/library/all/' + encodeURIComponent('Диалоги из фильмов и сериалов')}
                >
                    {scenes.map((t) => (
                        <TextPoster key={t.id} t={t} />
                    ))}
                </Section>
            ) : null}
            <Section
                title={
                    <>
                        <Icon name="books" /> Книги
                    </>
                }
                href="#/library/books"
            >
                {bookList.map((b) => (
                    <BookPoster key={b.id} b={b} />
                ))}
            </Section>
            <NearAwards s={s} />
        </Page>
    );
}
