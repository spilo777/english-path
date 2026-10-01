// Баннер текущего урока (макет «Грамматика»): «Урок N», тема, кнопка начать/продолжить; фон — цвет и картинка уровня
import type { CSSProperties } from 'react';
import { useMainCourse } from '../catalog/hooks';
import { nextStep, passed } from '../content/lessons';
import { useProgress } from '@core/progress/hooks';
import './LessonHero.css';

/**
 * Оформление уровней: цвет плашки и картинка-ковёр (img/levels/<уровень>.jpg, для телефона — <уровень>-m.jpg,
 * вырезанный центр). Картинки приходят уже затемнёнными; dim — добавить затемнение 20 %, если нет.
 */
export const LEVEL_ART: Record<string, { color: string; img?: string; imgM?: string; dim?: boolean }> = {
    A1: { color: '#e04c26', img: 'img/levels/a1.jpg', imgM: 'img/levels/a1-m.jpg' },
    A2: { color: '#2f9e62' },
    B1: { color: '#8a5cf0' },
    B2: { color: '#3b6df0' },
    C1: { color: '#2b2f3a' },
};

export function LessonHero() {
    const s = useProgress();
    const { def, index } = useMainCourse();
    const course = index.data;
    const u = course ? def.current(s, course) : undefined;
    if (!u) return null;
    const ns = nextStep(s, u.id);
    const p = Math.round(def.progress(s, u.id) * 100);
    const done = passed(s, u.id);
    const art = LEVEL_ART[u.level] || LEVEL_ART.A1;
    // url() в CSS-переменной браузер считает от файла стилей — даём полный адрес от страницы
    const abs = (x: string) => `url("${new URL(x, document.baseURI).href}")`;
    const style = {
        '--lv-color': art.color,
        '--lv-img': art.img ? abs(art.img) : undefined,
        '--lv-img-m': art.img ? abs(art.imgM || art.img) : undefined,
    } as CSSProperties;
    const label = done ? 'Повторить урок' : p && ns ? 'Продолжить: ' + ns.label : 'Начать урок';
    return (
        <section
            className={'lhero' + (art.img ? ' has-img' : '') + (art.dim ? ' dim' : '')}
            style={style}
            aria-label="Текущий урок"
        >
            <span className="lhero-lv" aria-hidden="true">
                {u.level}
            </span>
            <div className="lhero-body">
                <div className="lhero-text">
                    <h2 className="lhero-title">Урок {u.num}</h2>
                    <p className="lhero-sub">{u.title}</p>
                    {p > 0 && !done ? (
                        <div className="lhero-prog" title={`Урок пройден на ${p}%`}>
                            <i style={{ width: p + '%' }} />
                        </div>
                    ) : null}
                </div>
                <a className="lhero-btn" href={`#/unit/${u.id}/${ns ? ns.k : 'words'}`}>
                    {label}
                </a>
            </div>
        </section>
    );
}
