// Подсказка про тест на уровень: новичку — предложить тест; выбравшему уровень — напомнить, откуда он начинает
import { startLevel } from '../content/lessons/progress';
import { PASS, type Progress } from '@core/progress';
import { openPlacement } from './Modal';
import { Icon } from './ui';
import './PlacementHint.css';

/** offerOnly — только большая карточка для новичка (для главной), без строки-ссылки */
export function PlacementHint({ s, offerOnly }: { s: Progress; offerOnly?: boolean }) {
    const anyPassed = Object.values(s.units).some((u) => u.testBest != null && u.testBest >= PASS);
    const lvl = startLevel(s);
    if (!offerOnly && s.settings.startLevel && s.settings.startLevel !== 'A1') {
        return (
            <p className="small muted place-note">
                <Icon name="flag" /> Вы начинаете с уровня <b>{lvl}</b> — уроки ниже открыты для повторения.{' '}
                <a href="#/settings">Изменить</a> ·{' '}
                <button type="button" className="linkish" onClick={openPlacement}>
                    Пройти тест ещё раз
                </button>
            </p>
        );
    }
    /** Новичок: ещё не сдал ни одного урока, не проходил тест и не выбирал уровень */
    const newbie = !anyPassed && !s.settings.placement && !s.settings.startLevel;
    if (!newbie) {
        if (offerOnly) return null;
        const last = s.settings.placement;
        return (
            <p className="small muted place-note">
                <Icon name="target" />{' '}
                {last ? (
                    <>
                        По тесту ваш уровень — <b>{last.known === undefined ? last.level : last.known || 'с нуля'}</b>
                        .{' '}
                    </>
                ) : null}
                <button type="button" className="linkish" onClick={openPlacement}>
                    {last ? 'Пройти тест ещё раз' : 'Пройти тест на уровень'}
                </button>
            </p>
        );
    }
    return (
        <button type="button" className="card place-card" onClick={openPlacement}>
            <span className="place-ico">
                <Icon name="target" />
            </span>
            <span className="place-txt">
                <b>Уже знаете английский?</b>
                <span className="small muted">
                    Тест на уровень за 3–10 минут — и начнёте с нужного места, а не с азбуки.
                </span>
            </span>
            <Icon name="caret-right" />
        </button>
    );
}
