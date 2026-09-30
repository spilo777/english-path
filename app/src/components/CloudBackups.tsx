// Настройки → «Резервные копии в облаке»: снимок прогресса за каждый из последних 30 дней, восстановление одной кнопкой.
// Снимки делает сама база (триггер на таблице progress); восстановление — RPC progress_restore,
// которое перед заменой сохраняет текущее состояние отдельной копией «до восстановления».
import { useEffect, useState } from 'react';
import { DAY } from '@utils/date';
import { cloudClient } from '@core/cloud';
import { useCloud } from '@core/cloud/hooks';
import { defaults, normalize, type Progress, replaceState } from '@core/progress';
import { Icon, plural, toast } from './ui';
import './CloudBackups.css';

interface Snap {
    id: number;
    day: string;
    kind: 'daily' | 'restore';
    created_at: string;
    cards: number;
    passed: number;
    active_days: number;
}

const fmtDay = (d: string) => {
    const t = new Date(d + 'T12:00:00');
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    const diff = Math.round((today.getTime() - t.getTime()) / DAY);
    const s = t.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long' });
    return diff === 0 ? 'Сегодня' : diff === 1 ? 'Вчера · ' + s : s;
};

export function CloudBackups() {
    const st = useCloud();
    const [list, setList] = useState<Snap[] | null>(null);
    const [all, setAll] = useState(false);
    const [confirm, setConfirm] = useState<number | null>(null);
    const [busy, setBusy] = useState(false);

    const load = () => {
        const c = cloudClient();
        if (!c || !st.user) {
            setList(null);
            return;
        }
        void c.rpc('progress_snapshots_list').then(({ data, error }) => {
            setList(!error && Array.isArray(data) ? (data as Snap[]) : []);
        });
    };
    useEffect(load, [st.user, st.lastSync]);

    const restore = async (id: number) => {
        const c = cloudClient();
        if (!c) return;
        setBusy(true);
        const { data, error } = await c.rpc('progress_restore', { p_id: id });
        setBusy(false);
        setConfirm(null);
        if (error || !data || typeof data !== 'object') {
            toast('Не удалось восстановить — проверьте интернет');
            return;
        }
        replaceState(normalize(Object.assign(defaults(), data as Partial<Progress>)));
        toast('Прогресс восстановлен');
        load();
    };

    if (!st.user) {
        return (
            <div className="card stack">
                <h3>Копии в облаке</h3>
                <p className="muted small">
                    Когда вы вошли в аккаунт, облако каждый день само сохраняет копию прогресса и хранит 30 дней — если
                    что-то пропало, можно вернуться к любому дню. <a href="#/account">Войти</a>
                </p>
            </div>
        );
    }
    const shown = list ? (all ? list : list.slice(0, 5)) : [];
    return (
        <div className="card stack">
            <h3>Копии в облаке</h3>
            <p className="muted small">
                Облако само сохраняет копию прогресса за каждый день и хранит 30 дней. Если что-то пропало или сбилось —
                верните прогресс на нужный день. Текущее состояние перед этим тоже сохранится, так что откат можно
                отменить.
            </p>
            {list === null ? (
                <p className="muted small">Загружаю…</p>
            ) : !list.length ? (
                <p className="muted small">Копий пока нет — первая появится после следующей синхронизации.</p>
            ) : (
                <ul className="bk-list">
                    {shown.map((s) => (
                        <li key={s.id} className="bk-row">
                            <span className={'bk-ico' + (s.kind === 'restore' ? ' undo' : '')}>
                                <Icon name={s.kind === 'restore' ? 'arrow-counter-clockwise' : 'cloud-check'} />
                            </span>
                            <span className="bk-txt">
                                <b>
                                    {s.kind === 'restore'
                                        ? 'До восстановления · ' + fmtDay(s.day).toLowerCase()
                                        : fmtDay(s.day)}
                                </b>
                                <span className="tiny muted">
                                    {s.cards} {plural(s.cards, 'карточка', 'карточки', 'карточек')} · {s.passed}{' '}
                                    {plural(s.passed, 'урок пройден', 'урока пройдено', 'уроков пройдено')} ·{' '}
                                    {s.active_days} {plural(s.active_days, 'день', 'дня', 'дней')} занятий
                                </span>
                            </span>
                            {confirm === s.id ? (
                                <span className="row bk-confirm">
                                    <button
                                        type="button"
                                        className="btn small primary"
                                        disabled={busy}
                                        onClick={() => void restore(s.id)}
                                    >
                                        Вернуть
                                    </button>
                                    <button
                                        type="button"
                                        className="btn small ghost"
                                        disabled={busy}
                                        onClick={() => setConfirm(null)}
                                    >
                                        Отмена
                                    </button>
                                </span>
                            ) : (
                                <button type="button" className="btn small" onClick={() => setConfirm(s.id)}>
                                    Восстановить
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            )}
            {list && list.length > 5 ? (
                <button type="button" className="btn small ghost bk-more" onClick={() => setAll(!all)}>
                    {all ? 'Свернуть' : `Показать все (${list.length})`}
                </button>
            ) : null}
        </div>
    );
}
