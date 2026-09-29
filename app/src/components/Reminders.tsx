// Настройки → «Напоминания»: включить уведомления на этом устройстве, время, виды напоминаний, проверка
import { useEffect, useState } from 'react';
import { useCloud } from '../lib/cloud';
import { pushDisable, pushEnable, pushStatus, pushSupport, pushTest, type PushPrefs } from '../lib/push';
import { Icon, toast } from './ui';
import './Reminders.css';

const HOURS = Array.from({ length: 17 }, (_, i) => i + 7); // 7:00 … 23:00
const DEF: PushPrefs = { hour: 19, daily: true, streak: true };

export function Reminders() {
  const st = useCloud();
  const support = pushSupport();
  const [prefs, setPrefs] = useState<PushPrefs | null | undefined>(undefined); // undefined — ещё узнаём
  const [draft, setDraft] = useState<PushPrefs>(DEF);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!st.user || support !== 'ok') { setPrefs(null); return; }
    let alive = true;
    pushStatus().then((p) => { if (alive) { setPrefs(p); if (p) setDraft(p); } }).catch(() => { if (alive) setPrefs(null); });
    return () => { alive = false; };
  }, [st.user, support]);

  const run = async (fn: () => Promise<void>) => {
    setBusy(true);
    try { await fn(); } catch (e) { toast(e instanceof Error ? e.message : 'Не получилось'); }
    setBusy(false);
  };
  const save = (p: PushPrefs, msg?: string) => run(async () => { await pushEnable(p); setPrefs(p); setDraft(p); if (msg) toast(msg); });

  let body;
  if (!st.user) {
    body = <p className="muted small">Напоминания приходят на телефон или компьютер, даже когда сайт закрыт. Чтобы их включить, <a href="#/account">войдите в аккаунт</a> — сервер должен знать, сколько карточек вас ждёт.</p>;
  } else if (support === 'ios-install') {
    body = (
      <div className="rem-ios small">
        <p><b>На iPhone уведомления работают, только если сайт добавлен на экран «Домой».</b></p>
        <ol>
          <li>Откройте сайт в Safari и нажмите <Icon name="export" /> «Поделиться».</li>
          <li>Выберите «На экран „Домой“» и нажмите «Добавить».</li>
          <li>Откройте English Path с иконки на экране и включите напоминания здесь.</li>
        </ol>
      </div>
    );
  } else if (support === 'unsupported') {
    body = <p className="muted small">Этот браузер не умеет показывать уведомления. Попробуйте Chrome, Edge, Firefox или Safari.</p>;
  } else if (prefs === undefined) {
    body = <p className="muted small">Проверяю…</p>;
  } else {
    const on = !!prefs;
    body = (
      <>
        <label className="st-field">Во сколько напоминать
          <select className="input st-select" value={draft.hour} disabled={busy}
            onChange={(e) => { const p = { ...draft, hour: +e.target.value }; setDraft(p); if (on) void save(p, 'Время сохранено'); }}>
            {HOURS.map((h) => <option key={h} value={h}>{String(h).padStart(2, '0')}:00</option>)}
          </select>
        </label>
        <label className="st-check small"><input type="checkbox" checked={draft.daily} disabled={busy}
          onChange={(e) => { const p = { ...draft, daily: e.target.checked }; setDraft(p); if (on) void save(p); }} />
          <span>Каждый день в это время — сколько карточек ждёт повторения (не приходит, если вы уже всё сделали)</span></label>
        <label className="st-check small"><input type="checkbox" checked={draft.streak} disabled={busy}
          onChange={(e) => { const p = { ...draft, streak: e.target.checked }; setDraft(p); if (on) void save(p); }} />
          <span>Вечером в 21:00, если серия дней может сгореть, а вы сегодня ещё не занимались</span></label>
        <div className="row rem-btns">
          {on ? (
            <>
              <button type="button" className="btn small" disabled={busy} onClick={() => run(async () => { const n = await pushTest(); toast(n ? 'Проверка отправлена — посмотрите уведомления' : 'Не дошло — попробуйте выключить и включить снова'); })}>
                <Icon name="bell-ringing" /> Проверить
              </button>
              <button type="button" className="btn small ghost" disabled={busy} onClick={() => run(async () => { await pushDisable(); setPrefs(null); toast('Напоминания выключены на этом устройстве'); })}>Выключить</button>
            </>
          ) : (
            <button type="button" className="btn small primary" disabled={busy} onClick={() => save(draft, 'Напоминания включены')}><Icon name="bell" /> Включить напоминания</button>
          )}
        </div>
        <p className="muted small">{on ? 'Включено на этом устройстве. ' : ''}Напоминания приходят на каждое устройство, где вы их включили. Время — по часовому поясу этого устройства.</p>
      </>
    );
  }
  return (
    <div className="card stack">
      <h3>Напоминания</h3>
      {body}
    </div>
  );
}
