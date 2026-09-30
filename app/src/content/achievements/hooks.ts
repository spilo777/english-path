// React: данные курса для достижений и контекст для карточек достижений
import { useEffect, useMemo, useState } from 'react';
import { useCloud } from '../../core/cloud/hooks';
import { useProgress } from '../../core/progress/hooks';
import type { Progress } from '../../core/progress/types';
import { useSource } from '../base/hooks';
import type { CourseIndex } from '../lessons/model';
import { courseIndex, lessonsIndex } from '../lessons/sources';
import { library } from '../texts/sources';
import { deck } from '../word-cards/sources';
import { achCtx, setAchExtra } from './context';
import type { AchCtx, AchExtra } from './model';

/** Id текстов уроков. Уровни грузятся, только когда «прочитаны все тексты курса» в принципе возможно:
 *  у каждого юнита курса есть хотя бы один прочитанный текст (id текстов — t-<юнит>-<n>). */
function courseTextsNeeded(s: Progress, course: CourseIndex): boolean {
    if (s.ach.read_all) return false;
    const read = Object.keys(s.textsRead);
    return course.units.every((u) => read.some((id) => id.startsWith('t-' + u.id + '-')));
}

/** Собирает данные курса для достижений. Пока что-то грузится — null */
export function useAchContextData(): AchExtra | null {
    const s = useProgress();
    const { data: course } = useSource(courseIndex);
    const { data: words } = useSource(deck);
    const { data: lib } = useSource(library);
    const [courseTexts, setCourseTexts] = useState<string[] | null>(null);
    const wantTexts = !!course && courseTextsNeeded(s, course);
    useEffect(() => {
        if (!wantTexts || !course || courseTexts) return;
        let alive = true;
        // id текстов — из компактного индекса lessons.json (юниты курса)
        const ids = new Set(course.units.map((u) => u.id));
        lessonsIndex
            .load()
            .then((all) => {
                if (alive) setCourseTexts(all.filter((u) => ids.has(u.id)).flatMap((u) => u.texts.map((t) => t.id)));
            })
            .catch(() => {
                /* нет сети — проверим позже */
            });
        return () => {
            alive = false;
        };
    }, [wantTexts, course, courseTexts]);
    const extra = useMemo<AchExtra | null>(
        () => (course && words && lib ? { course, deck: words, library: lib, courseTexts } : null),
        [course, words, lib, courseTexts],
    );
    useEffect(() => {
        setAchExtra(extra);
    }, [extra]);
    return extra;
}

/** Контекст достижений для карточек (перерисовывается при изменении прогресса и облака) */
export function useAchCtx(): AchCtx | null {
    const s = useProgress();
    const extra = useAchContextData();
    useCloud();
    return extra ? achCtx(s, extra) : null;
}
