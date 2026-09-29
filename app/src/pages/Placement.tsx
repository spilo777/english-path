// Тест на уровень: ступени A1 → A2 → B1 → B2 по 10 вопросов. Ступень сдана (≥ 7 из 10) — идём выше,
// нет — останавливаемся: с этого уровня и стоит начинать. Ответы не подсвечиваются, чтобы не подсказывать.
import { useMemo, useState } from 'react';
import type { PageProps } from '../app/App';
import { go } from '../app/router';
import { BackLink, Icon, LoadError, Loading, Page, Progress as Bar, shuffle } from '../components/ui';
import { useJSON, paths } from '../lib/data';
import { ding } from '../lib/sfx';
import { update, useProgress } from '../lib/store';
import type { Level, PlacementBank, PlacementQ } from '../lib/types';
import './Placement.css';

const STAGES = ['A1', 'A2', 'B1', 'B2'] as const;
type Stage = (typeof STAGES)[number];
const PER_STAGE = 10, PASS_AT = 7;

const ABOUT: Record<Stage, { name: string; text: string }> = {
  A1: { name: 'Начальный', text: 'Начнём с самого начала: am / is / are, простые фразы о себе, настоящее и прошедшее время. Так база встанет без дыр.' },
  A2: { name: 'Элементарный', text: 'Основы вы знаете. Уроки A1 открыты для повторения, а начнёте с A2: длительное прошедшее, Present Perfect, планы на будущее.' },
  B1: { name: 'Средний', text: 'У вас уверенная база. A1 и A2 открыты для повторения, начнёте с B1: сложные времена, условные предложения, косвенная речь.' },
  B2: { name: 'Выше среднего', text: 'Отличная база. Всё до B2 открыто для повторения, начнёте с B2 — продвинутые конструкции и тонкости.' },
};

interface Item { q: PlacementQ; order: number[] } // order — перемешанные индексы вариантов

const pick = (bank: PlacementBank, st: Stage): Item[] =>
  shuffle(bank[st]).slice(0, PER_STAGE).map((q) => ({ q, order: shuffle(q.o.map((_, i) => i)) }));

export default function Placement(_props: PageProps) {
  const { data: bank, error } = useJSON<PlacementBank>(paths.placement);
  const s = useProgress();
  const [stage, setStage] = useState(-1); // -1 — вступление
  const [items, setItems] = useState<Item[]>([]);
  const [qi, setQi] = useState(0);
  const [right, setRight] = useState(0);
  const [scores, setScores] = useState<Partial<Record<Level, number>>>({});
  const [result, setResult] = useState<{ level: Stage; top: boolean } | null>(null);

  const back = <BackLink href="#/course" label="Курс" />;
  if (error) return <Page>{back}<LoadError error={error} /></Page>;
  if (!bank) return <Page>{back}<Loading /></Page>;

  const begin = () => { setStage(0); setItems(pick(bank, 'A1')); setQi(0); setRight(0); setScores({}); setResult(null); };

  const answer = (ok: boolean) => {
    const r = right + (ok ? 1 : 0);
    if (qi + 1 < items.length) { setRight(r); setQi(qi + 1); return; }
    // ступень закончена
    const st = STAGES[stage];
    const sc = { ...scores, [st]: r };
    setScores(sc);
    if (r >= PASS_AT && stage + 1 < STAGES.length) {
      const nx = stage + 1;
      setStage(nx); setItems(pick(bank, STAGES[nx])); setQi(0); setRight(0);
      return;
    }
    const top = r >= PASS_AT; // прошёл все ступени
    const level: Stage = st;
    setResult({ level, top });
    update((x) => { x.settings.placement = { level, at: Date.now(), scores: sc }; });
    ding('done');
  };

  const apply = (lvl: Level) => {
    update((x) => {
      x.settings.startLevel = lvl;
      x.settings.decks = { ...(x.settings.decks || {}), [lvl]: true };
    });
    go('#/course');
  };

  // ───── вступление ─────
  if (stage < 0) {
    const prev = s.settings.placement;
    return (
      <Page className="place-page">
        {back}
        <div className="card place-intro stack">
          <div className="place-big"><Icon name="target" /></div>
          <h1 className="page-title">Тест на уровень</h1>
          <p>Короткие вопросы по грамматике и словам, от простых к сложным: A1 → A2 → B1 → B2. На каждой ступени 10 вопросов. Справились — тест идёт дальше, нет — останавливается: это и есть ваш уровень.</p>
          <ul className="place-rules">
            <li><Icon name="clock" /> 3–10 минут — зависит от уровня</li>
            <li><Icon name="question" /> Не уверены — жмите «Не знаю»: угадывание завысит уровень, и уроки окажутся слишком сложными</li>
            <li><Icon name="lock-open" /> В конце можно одной кнопкой открыть уроки ниже вашего уровня</li>
          </ul>
          {prev ? <p className="small muted">Прошлый результат: <b>{prev.level}</b> ({new Date(prev.at).toLocaleDateString('ru-RU')})</p> : null}
          <button type="button" className="btn primary block" onClick={begin}>Начать тест <Icon name="arrow-right" /></button>
        </div>
      </Page>
    );
  }

  // ───── результат ─────
  if (result) {
    const a = ABOUT[result.level];
    return (
      <Page className="place-page">
        {back}
        <div className="card place-result stack">
          <div className="eyebrow">Ваш уровень</div>
          <div className={'place-level lv-' + result.level}>{result.level}</div>
          <h2>{a.name}</h2>
          <p>{result.top ? 'Вы уверенно прошли все ступени теста. ' : ''}{a.text}</p>
          <div className="place-scores">
            {STAGES.map((st) => (
              <div key={st} className={'place-score' + (scores[st] == null ? ' skip' : (scores[st] || 0) >= PASS_AT ? ' ok' : ' miss')}>
                <b>{st}</b><span>{scores[st] == null ? '—' : `${scores[st]}/${PER_STAGE}`}</span>
              </div>
            ))}
          </div>
          {result.level === 'A1' ? (
            <button type="button" className="btn primary block" onClick={() => apply('A1')}>Начать с первого урока <Icon name="arrow-right" /></button>
          ) : (
            <>
              <button type="button" className="btn primary block" onClick={() => apply(result.level)}>Начать с {result.level} <Icon name="arrow-right" /></button>
              <button type="button" className="btn ghost block" onClick={() => apply('A1')}>Нет, начну с самого начала</button>
            </>
          )}
          <button type="button" className="btn ghost small" onClick={begin}><Icon name="arrow-counter-clockwise" /> Пройти тест ещё раз</button>
        </div>
      </Page>
    );
  }

  // ───── вопрос ─────
  const it = items[qi];
  return (
    <Page className="place-page">
      {back}
      <div className="place-head">
        <span className={'place-stage lv-' + STAGES[stage]}>{STAGES[stage]}</span>
        <span className="small muted">Ступень {stage + 1} из {STAGES.length} · вопрос {qi + 1} из {items.length}</span>
      </div>
      <Bar value={(qi) / items.length} />
      <Question key={stage + '-' + qi} it={it} onAnswer={answer} />
    </Page>
  );
}

function Question({ it, onAnswer }: { it: Item; onAnswer: (ok: boolean) => void }) {
  const [picked, setPicked] = useState<number | null>(null);
  const parts = useMemo(() => it.q.q.split('___'), [it]);
  const choose = (i: number | -1) => {
    if (picked != null) return;
    setPicked(i);
    // короткая пауза, чтобы было видно, что выбрано; верный ответ не показываем
    setTimeout(() => onAnswer(i === it.q.a), 220);
  };
  return (
    <div className="card place-q">
      <div className="place-text" lang={parts.length > 1 || !/[а-яё]/i.test(it.q.q) ? 'en' : 'ru'}>
        {parts.length > 1 ? <>{parts[0]}<span className="place-gap">___</span>{parts.slice(1).join('___')}</> : it.q.q}
      </div>
      {it.q.ru ? <div className="small muted">{it.q.ru}</div> : null}
      <div className="place-opts">
        {it.order.map((i) => (
          <button key={i} type="button" className={'place-opt' + (picked === i ? ' on' : '')} disabled={picked != null} onClick={() => choose(i)}>{it.q.o[i]}</button>
        ))}
      </div>
      <button type="button" className={'btn ghost small place-idk' + (picked === -1 ? ' on' : '')} disabled={picked != null} onClick={() => choose(-1)}>Не знаю</button>
    </div>
  );
}
