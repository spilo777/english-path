// Карточка «Этап курса»: текущий урок, следующий шаг и прогресс — видна сверху раздела «Словарь»
import { currentUnit, nextStep, unitProgress } from '../lib/course';
import { useCourse } from '../lib/data';
import { useProgress } from '../lib/store';
import type { CourseIndex, Progress } from '../lib/types';
import { Icon } from './ui';

/** Адрес следующего шага текущего урока (для кнопок «Продолжить» и плана на день) */
export function stageHref(s: Progress, course: CourseIndex | undefined): string {
    const u = course ? currentUnit(s, course) : undefined;
    if (!u) return '#/course';
    const ns = nextStep(s, u.id);
    return `#/unit/${u.id}/${ns ? ns.k : 'words'}`;
}

export function StageCard() {
    const s = useProgress();
    const { data: course } = useCourse();
    const u = course ? currentUnit(s, course) : undefined;
    if (!u) return null;
    const ns = nextStep(s, u.id);
    const p = Math.round(unitProgress(s, u.id) * 100);
    return (
        <a className="continue-card" href={stageHref(s, course)}>
            <div className="cc-ill">
                <Icon name="graduation-cap" fill />
            </div>
            <div className="cc-body">
                <div className="cc-eyebrow">
                    Этап · {u.level} · урок {u.num}
                </div>
                <div className="cc-title">{u.title}</div>
                <div className="cc-sub">
                    {ns ? 'Дальше: ' + ns.label : 'Урок пройден'} · {p}%
                </div>
                <div className="cc-bar">
                    <i style={{ width: p + '%' }} />
                </div>
            </div>
            <span className="pill-btn light">{p ? 'ПРОДОЛЖИТЬ' : 'НАЧАТЬ'}</span>
        </a>
    );
}
