// Раздел «Грамматика» → «Уроки» (открывается первым): карточка этапа, уровни A1…C1 (сворачиваются), уроки с прогрессом и замками, готовящиеся уроки, игровой трек
import { useRef, useState } from 'react';
import { lsJSON, lsSetJSON } from '@utils/storage';
import type { PageProps } from '../app/App';
import { useMainCourse } from '../catalog/hooks';
import { useSource } from '../content/base/hooks';
import { belowStart, BOOK_KEYS, mainUnits, passed, rangeTxt, syllabus } from '../content/lessons';
import type { CourseDef } from '../engine';
import type { CourseIndex, Syllabus, UnitMeta } from '@content/lessons';
import type { Progress } from '@core/progress';
import { useProgress } from '@core/progress/hooks';
import { Icon, LoadError, Loading, Page, plural } from '../components/ui';
import { CourseHead } from './course-head';
import { PlacementHint } from '../components/PlacementHint';
import { StageCard } from '../components/StageCard';
import './Course.css';

const OPEN_KEY = 'ep.courseOpen';
type OpenMap = Record<string, boolean>;
const readOpen = (): OpenMap | null => lsJSON<OpenMap>(OPEN_KEY);
const saveOpen = (m: OpenMap) => lsSetJSON(OPEN_KEY, m);

/** Строка урока: номер/галочка/замок, описание, прогресс, лучший результат теста */
function UnitRow({ u, s, course, def }: { u: UnitMeta; s: Progress; course: CourseIndex; def: CourseDef }) {
    const unlocked = def.isUnlocked(s, u, course);
    const p = def.progress(s, u.id);
    const ok = passed(s, u.id);
    const best = s.units[u.id]?.testBest;
    return (
        <a
            className={'unit-row' + (unlocked ? '' : ' locked') + (ok ? ' passed' : '')}
            href={'#/unit/' + u.id}
            aria-disabled={unlocked ? undefined : true}
        >
            <div className="unit-num">
                {ok ? (
                    <Icon name="check" />
                ) : unlocked ? (
                    u.track === 'games' ? (
                        <Icon name="game-controller" />
                    ) : (
                        u.num
                    )
                ) : (
                    <Icon name="lock-simple" />
                )}
            </div>
            <div className="body">
                <div className="title">{u.title}</div>
                {unlocked ? <div className="muted small unit-sum">{u.summary}</div> : null}
                {unlocked && !ok && p > 0 ? (
                    <div className="progress unit-prog">
                        <i style={{ width: Math.round(p * 100) + '%' }} />
                    </div>
                ) : null}
            </div>
            {ok && best != null ? <span className="pill ok">{Math.round(best * 100)}%</span> : null}
        </a>
    );
}

type LevelInfo = CourseIndex['levels'][number];

function Level({
    l,
    course,
    def,
    syl,
    s,
    open,
    onToggle,
}: {
    l: LevelInfo;
    course: CourseIndex;
    def: CourseDef;
    syl: Syllabus;
    s: Progress;
    open: boolean;
    onToggle: (el: HTMLElement, id: string, on: boolean) => void;
}) {
    const ref = useRef<HTMLElement>(null);
    const us = mainUnits(course).filter((u) => u.level === l.id);
    const games = course.units.filter((u) => u.track === 'games' && u.level === l.id);
    const planned = syl.lessons.filter((x) => x.level === l.id && !course.units.some((u) => u.id === x.id));
    const total = us.length + planned.length;
    const done = us.filter((u) => passed(s, u.id)).length;
    const nextU = us.find((u) => def.isUnlocked(s, u, course) && !passed(s, u.id));
    const state = !us.length
        ? 'Готовится'
        : done === us.length && !planned.length
          ? 'Пройден'
          : belowStart(s, l.id)
            ? 'Открыт — можно повторить'
            : nextU
              ? `Дальше: урок ${nextU.num}`
              : 'Закрыт';
    return (
        <section ref={ref} className={'lvl' + (open ? ' open' : '')} data-lvl={l.id}>
            <button
                type="button"
                className="lvl-head"
                aria-expanded={open}
                onClick={() => {
                    if (ref.current) onToggle(ref.current, l.id, !open);
                }}
            >
                <span className={'lvl-badge lv-' + l.id}>{l.id}</span>
                <span className="lvl-info">
                    <b>{l.title.split('— ')[1] || l.title}</b>
                    <span className="small muted">
                        {done}/{total} {plural(total, 'урок', 'урока', 'уроков')} · {state}
                    </span>
                    <span className="lvl-bar">
                        <i style={{ width: (total ? (done / total) * 100 : 0) + '%' }} />
                    </span>
                </span>
                <Icon name="caret-down" className="lvl-caret" />
            </button>
            {open ? (
                <div className="lvl-body">
                    <p className="muted small lvl-goal">{l.goal}</p>
                    {us.map((u) => (
                        <UnitRow key={u.id} u={u} s={s} course={course} def={def} />
                    ))}
                    {planned.map((x) => (
                        <div key={x.id} className="unit-row locked planned">
                            <div className="unit-num">
                                <Icon name="hourglass-medium" />
                            </div>
                            <div className="body">
                                <div className="title">{x.title}</div>
                                <div className="muted small">
                                    Готовится ·{' '}
                                    {BOOK_KEYS.filter((k) => x[k] && x[k].length)
                                        .map((k) => syl.books[k].short + ' ' + rangeTxt(x[k]))
                                        .join(' · ')}
                                </div>
                            </div>
                        </div>
                    ))}
                    {games.length ? (
                        <>
                            <div className="eyebrow lvl-sub">
                                <Icon name="game-controller" /> Игровой трек
                            </div>
                            {games.map((u) => (
                                <UnitRow key={u.id} u={u} s={s} course={course} def={def} />
                            ))}
                        </>
                    ) : null}
                </div>
            ) : null}
        </section>
    );
}

const SUB =
    'От нуля до B2 по учебникам Мерфи. Урок: грамматика, слова, текст, практика и тест — следующий открывается после 80%.';

export default function Course(_props: PageProps) {
    const s = useProgress();
    const { def, index } = useMainCourse();
    const { data: course, error } = index;
    const { data: syl, error: e2 } = useSource(syllabus);
    const [openMap, setOpenMap] = useState<OpenMap | null>(readOpen);
    const err = error || e2;
    const head = <CourseHead tab="lessons" sub={SUB} />;
    if (err)
        return (
            <Page>
                {head}
                <LoadError error={err} />
            </Page>
        );
    if (!course || !syl)
        return (
            <Page>
                {head}
                <Loading />
            </Page>
        );
    const cur = def.current(s, course);
    // по умолчанию открыт уровень текущего урока
    const opened: OpenMap = openMap || { [cur ? cur.level : 'A1']: true };
    const toggle = (el: HTMLElement, id: string, on: boolean) => {
        const next = { ...opened, [id]: on };
        saveOpen(next);
        setOpenMap(next);
        // открытый уровень — прокрутить к нему, если он ушёл за край экрана
        if (on)
            setTimeout(() => {
                const r = el.getBoundingClientRect();
                if (r.top < 0 || r.top > window.innerHeight * 0.6)
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 60);
    };
    return (
        <Page>
            {head}
            <StageCard />
            <PlacementHint s={s} />
            <div className="lvl-list">
                {course.levels.map((l) => (
                    <Level
                        key={l.id}
                        l={l}
                        course={course}
                        def={def}
                        syl={syl}
                        s={s}
                        open={!!opened[l.id]}
                        onToggle={toggle}
                    />
                ))}
            </div>
        </Page>
    );
}
