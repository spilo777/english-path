// React: основной курс приложения из движка и его индекс (уроки + описания уровней)
import { useSource } from '../content/base/hooks';
import type { CourseIndex } from '../content/lessons/model';
import type { Loaded } from '../core/data/loader';
import { useCourseDef } from '../engine/react';
import type { CourseDef } from '../engine/types';
import { MAIN_COURSE } from './courses/grammar';

/** Основной курс (грамматика по Мёрфи). index.data — как course.json, пока грузится — undefined */
export function useMainCourse(): { def: CourseDef; index: Loaded<CourseIndex> } {
    const def = useCourseDef(MAIN_COURSE);
    const index = useSource(def ? def.index() : null);
    if (!def) throw new Error(`Каталог: нет курса «${MAIN_COURSE}»`);
    return { def, index };
}
