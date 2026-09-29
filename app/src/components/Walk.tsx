// Грамматика по шагам: одна мысль → пример → сразу проверка. Прогресс — в unitState(s, id).walk
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { ding } from '../lib/sfx';
import { speak } from '../lib/speech';
import { recordAnswer, unitState, update, useProgress } from '../lib/store';
import type { Unit, UnitProgress, WalkPart, WalkStep } from '../lib/types';
import { esc, fmtQ, Html, useLessonEnhance } from './Enhance';
import { Icon, toast } from './ui';
import './Walk.css';

type WalkPos = NonNullable<UnitProgress['walk']>;

function nextLabel(parts: WalkPart[], pi: number, si: number, plain: string): string {
  if (si + 1 < parts[pi].steps.length) return plain;
  return pi + 1 >= parts.length ? 'Готово' : 'Дальше: ' + parts[pi + 1].title;
}

interface StepProps {
  st: WalkStep; active: boolean; label: string; onNext: () => void;
  answer: number | undefined; onAnswer: (i: number) => void;
}

function Step({ st, active, label, onNext, answer, onAnswer }: StepProps) {
  const btn = useRef<HTMLButtonElement>(null);
  const answered = answer != null;
  useEffect(() => { if (active && answered && st.t === 'check') btn.current?.focus({ preventScroll: true }); }, [active, answered, st.t]);
  const actions = active ? (
    <div className="wk-actions"><button ref={btn} type="button" className="btn primary" onClick={onNext}>{label} <Icon name="arrow-right" /></button></div>
  ) : null;

  if (st.t === 'check') {
    const ok = answer === st.a;
    return (
      <div className={'wk-step wk-check ' + (active ? 'active' : 'past')}>
        <div className="wk-tag"><Icon name="question" /> Попробуйте</div>
        <Html className="wk-q" html={fmtQ(st.q) + (st.ru ? `<span class="wk-qru">${esc(st.ru)}</span>` : '')} />
        <div className="mini-o">
          {st.o.map((o, i) => (
            <button type="button" key={i} disabled={!active || answered} onClick={() => onAnswer(i)}
              className={'qz-btn' + (answered && i === st.a ? ' right' : '') + (answer === i && !ok ? ' wrong' : '')}>{o}</button>
          ))}
        </div>
        {answered ? <Html className={'mini-why ' + (ok ? 'ok' : 'bad')} html={`<b>${ok ? 'Верно!' : 'Не совсем.'}</b> ${esc(st.why || '')}`} /> : null}
        {answered ? actions : null}
      </div>
    );
  }

  return (
    <div className={'wk-step wk-idea ' + (active ? 'active' : 'past') + (st.opt ? ' opt' : '')}>
      {st.opt ? <div className="wk-tag muted"><Icon name="star" /> Редко встречается — можно пропустить</div> : null}
      <Html className="wk-text" html={st.text} />
      {st.lit ? <div className="wk-lit">{st.lit.map(([en, ru], i) => <span key={i}><b>{en}</b><i>{ru}</i></span>)}</div> : null}
      {st.ex && st.ex.length ? <Html className="wk-ex" html={st.ex.map(([en, ru]) => `<div><span class="say">${esc(en)}</span><span class="wk-ru">${esc(ru)}</span></div>`).join('')} /> : null}
      {st.rows ? <div className="wk-rows-wrap"><Html tag="table" className="wk-rows" html={st.rows.map((r) => '<tr>' + r.map((c, i) => `<td>${i === 0 ? '<b>' + c + '</b>' : c}</td>`).join('') + '</tr>').join('')} /></div> : null}
      {st.bad ? <><Html className="g-bad" html={st.bad} /><Html className="g-good" html={st.good || ''} /></> : null}
      {st.tip ? <Html className="g-tip" html={st.tip} /> : null}
      {actions}
    </div>
  );
}

/** Шпаргалка по всему уроку — карточки из unit.grammar */
function Cheat({ unit }: { unit: Unit }) {
  return (
    <div className="stack lesson wk-cheat-list">
      {(unit.grammar || []).map((g, i) => <Html key={i} className="card" html={`<h3>${esc(g.title)}</h3>${g.html}`} />)}
    </div>
  );
}

/** Пошаговая грамматика урока. next — кнопка «Дальше: …» на экране «пройдено» (от страницы урока) */
export function Walk({ unit, next }: { unit: Unit; next?: ReactNode }) {
  const s = useProgress();
  const parts = unit.walk || [];
  const w: WalkPos = s.units[unit.id]?.walk || { part: 0, step: 0, done: false };
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const root = useRef<HTMLDivElement>(null);
  useLessonEnhance(root, [w.part, w.step, w.done], { unitId: unit.id });

  const total = parts.reduce((a, p) => a + p.steps.length, 0);
  const doneSteps = Math.min(parts.slice(0, w.part).reduce((a, p) => a + p.steps.length, 0) + w.step, total);
  const cur: WalkPart | undefined = parts[w.part];

  const setWalk = (fn: (x: WalkPos, st: UnitProgress) => void) => update((st) => {
    const u = unitState(st, unit.id);
    u.walk = u.walk || { part: 0, step: 0, done: false };
    fn(u.walk, u);
  });

  // сохранённая позиция за концом (например, урок стал короче) — считаем пройденным
  useEffect(() => {
    if (parts.length && w.part >= parts.length && !w.done) setWalk((x, u) => { x.done = true; u.steps.grammar = true; });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [w.part, w.done, parts.length]);

  // новый шаг — прокрутить к нему
  useEffect(() => {
    if (w.step <= 0 || !root.current) return;
    root.current.querySelector('.wk-step.active')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [w.part, w.step]);

  const advance = () => {
    let finished = false;
    setWalk((x, u) => {
      x.step++;
      if (x.step >= (parts[x.part]?.steps.length || 0)) { x.part++; x.step = 0; }
      if (x.part >= parts.length) { finished = !x.done; x.done = true; u.steps.grammar = true; }
    });
    if (finished) ding('done');
  };

  const answer = (pi: number, si: number, st: WalkStep, i: number) => {
    if (st.t !== 'check') return;
    const key = pi + '-' + si;
    if (answers[key] != null) return;
    const ok = i === st.a;
    setAnswers({ ...answers, [key]: i });
    ding(ok ? 'ok' : 'bad');
    if (ok) setTimeout(() => speak(st.o[st.a].replace(/_/g, '')), 350);
    update((x) => {
      recordAnswer(x, ok);
      x.stats.mini = (x.stats.mini || 0) + 1;
      if (ok) x.stats.miniRight = (x.stats.miniRight || 0) + 1;
    });
  };

  const goPart = (i: number) => {
    if (i <= w.part || w.done) setWalk((x) => { x.part = i; x.step = 0; x.done = false; });
    else toast('Сначала пройдите текущую часть');
  };

  const restart = () => { setAnswers({}); setWalk((x) => { x.part = 0; x.step = 0; x.done = false; }); };

  if (!parts.length) return <div ref={root}><Cheat unit={unit} /></div>;

  return (
    <div ref={root} className="walk">
      <div className="wk-head">
        <div className="progress"><i style={{ width: Math.round((doneSteps / (total || 1)) * 100) + '%' }} /></div>
        <span className="tiny muted">{doneSteps}/{total} шагов</span>
      </div>
      <div className="wk-parts">
        {parts.map((p, i) => {
          const done = i < w.part || w.done;
          return (
            <button type="button" key={i} title={p.title} onClick={() => goPart(i)}
              className={'wk-part' + (i === w.part && !w.done ? ' on' : '') + (done ? ' done' : '')}>
              {done ? <Icon name="check" /> : i + 1}
            </button>
          );
        })}
        {cur && !w.done ? <div className="wk-title"><span className="tiny muted">Часть {w.part + 1} из {parts.length}</span><b>{cur.title}</b></div> : null}
      </div>

      {w.done ? (
        <>
          <div className="card result wk-done">
            <div className="big"><Icon name="confetti" /></div>
            <h2>Грамматика урока пройдена</h2>
            <p className="muted">Ниже — шпаргалка по всему уроку. К ней можно вернуться в любой момент.</p>
            <div className="row wk-done-actions">
              <button type="button" className="btn" onClick={restart}><Icon name="arrow-counter-clockwise" /> Пройти заново</button>
              {next}
            </div>
          </div>
          <details className="wk-cheat" open>
            <summary><h3>Шпаргалка</h3></summary>
            <Cheat unit={unit} />
          </details>
        </>
      ) : (
        <>
          <div className="wk-flow">
            {cur ? cur.steps.slice(0, w.step + 1).map((st, si) => (
              <Step key={w.part + '-' + si} st={st} active={si === w.step}
                label={nextLabel(parts, w.part, si, st.t === 'check' ? 'Дальше' : 'Понятно, дальше')}
                onNext={advance} answer={answers[w.part + '-' + si]} onAnswer={(i) => answer(w.part, si, st, i)} />
            )) : null}
          </div>
          {(unit.grammar || []).length ? (
            <details className="wk-cheat">
              <summary><Icon name="list-magnifying-glass" /> Шпаргалка по всему уроку (для тех, кто уже знает тему)</summary>
              <Cheat unit={unit} />
            </details>
          ) : null}
        </>
      )}
    </div>
  );
}
