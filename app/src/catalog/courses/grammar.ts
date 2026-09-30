// Грамматика по Мёрфи: уроки A1–B2 (слова, грамматика, чтение, практика, тест) и ветка уроков-игр
import { Collection, Course } from '@engine';
import { A1_Lectures } from '../../content/lectures/a1';
import { A2_Lectures } from '../../content/lectures/a2';
import { B1_Lectures } from '../../content/lectures/b1';
import { B2_Lectures } from '../../content/lectures/b2';
import { A1_Lessons } from '../../content/lessons/a1';
import { A2_Lessons } from '../../content/lessons/a2';
import { B1_Lessons } from '../../content/lessons/b1';
import { B2_Lessons } from '../../content/lessons/b2';
import { Games_Lessons } from '../../content/lessons/games';

export const grammarCourse = new Course({ id: 'grammar', title: 'Грамматика', icon: 'graduation-cap' })
    .level('A1', new Collection({ id: 'grammar-A1' }).addLessons(A1_Lessons).addLectures(A1_Lectures))
    .level('A2', new Collection({ id: 'grammar-A2' }).addLessons(A2_Lessons).addLectures(A2_Lectures))
    .level('B1', new Collection({ id: 'grammar-B1' }).addLessons(B1_Lessons).addLectures(B1_Lectures))
    .level('B2', new Collection({ id: 'grammar-B2' }).addLessons(B2_Lessons).addLectures(B2_Lectures))
    .extraTrack('games', new Collection({ id: 'grammar-games' }).addLessons(Games_Lessons));
