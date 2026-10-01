// Раздел «Грамматика» (открывается первым, макет «Грамматика»): баннер текущего урока, степпер уровней A1…C1
// с заливкой по пройденным урокам, уроки выбранного уровня (прогресс, замки, готовящиеся, игровой трек)
import { useState } from 'react';
import { lsGet, lsSet } from '@utils/storage';
import type { PageProps } from '../app/App';
import { useMainCourse } from '../catalog/hooks';
import { useSource } from '../content/base/hooks';
import { belowStart, BOOK_KEYS, mainUnits, passed, rangeTxt, syllabus } from '../content/lessons';
import type { CourseDef } from '../engine';
import type { CourseIndex, Syllabus, UnitMeta } from '@content/lessons';
import type { Progress } from '@core/progress';
import { useProgress } from '@core/progress/hooks';
import { Icon, LoadError, Loading, Page } from '../components/ui';
import { CourseHead } from './course-head';
import { PlacementHint } from '../components/PlacementHint';
import { LessonHero } from '../components/LessonHero';
import { LevelStepper, type StepLevel } from '../components/LevelStepper';
import { plural } from '@utils/plural';
import './Course.css';

// выбранный в степпере уровень (пока не выбран — уровень текущего урока)
const LVL_KEY = 'ep.courseLvl';

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

/** Уроки уровня: готовые и готовящиеся (из программы), пройдено */
function levelData(l: LevelInfo, course: CourseIndex, syl: Syllabus, s: Progress) {
    const us = mainUnits(course).filter((u) => u.level === l.id);
    const games = course.units.filter((u) => u.track === 'games' && u.level === l.id);
    const planned = syl.lessons.filter((x) => x.level === l.id && !course.units.some((u) => u.id === x.id));
    const done = us.filter((u) => passed(s, u.id)).length;
    return { us, games, planned, done, total: us.length + planned.length };
}

/** Уроки выбранного уровня */
function LevelLessons({
    l,
    course,
    def,
    syl,
    s,
}: {
    l: LevelInfo;
    course: CourseIndex;
    def: CourseDef;
    syl: Syllabus;
    s: Progress;
}) {
    const { us, games, planned, done, total } = levelData(l, course, syl, s);
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
        <section className="lvl-lessons" data-lvl={l.id} aria-label={'Уроки ' + l.id}>
            <div className="ll-head">
                <h2 className="ll-title">
                    {l.id} · {l.title.split('— ')[1] || l.title}
                </h2>
                <span className="small muted">
                    {done}/{total} {plural(total, 'урок', 'урока', 'уроков')} · {state}
                </span>
            </div>
            <p className="muted small ll-goal">{l.goal}</p>
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
            {!us.length && !planned.length ? <p className="empty">Уроки этого уровня готовятся.</p> : null}
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
    const [pick, setPick] = useState<string>(() => lsGet(LVL_KEY, ''));
    const err = error || e2;
    const head = <CourseHead sub={SUB} />;
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
    const levels: StepLevel[] = course.levels.map((l) => {
        const d = levelData(l, course, syl, s);
        return { id: l.id, done: d.done, total: d.total, current: cur?.level === l.id, soon: !d.us.length };
    });
    const selId = course.levels.some((l) => l.id === pick) ? pick : cur ? cur.level : course.levels[0].id;
    const sel = course.levels.find((l) => l.id === selId) || course.levels[0];
    const select = (id: string) => {
        lsSet(LVL_KEY, id);
        setPick(id);
    };
    return (
        <Page className="gram">
            {head}
            <LessonHero />
            <LevelStepper levels={levels} selected={sel.id} onSelect={select} />
            <PlacementHint s={s} />
            <LevelLessons key={sel.id} l={sel} course={course} def={def} syl={syl} s={s} />
        </Page>
    );
}
