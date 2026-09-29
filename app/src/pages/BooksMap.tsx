// Раздел «Курс» → «По учебнику»: юниты книги Мерфи (красная/синяя/зелёная) → какими уроками сайта они закрыты
import type { CSSProperties } from 'react';
import type { PageProps } from '../app/App';
import { BOOK_COL, BOOK_KEYS, isUnlocked, passed } from '../lib/course';
import { useCourse, useSyllabus } from '../lib/data';
import { useProgress } from '../lib/store';
import type { SyllabusLesson } from '../lib/types';
import { Icon, LoadError, Loading, Page } from '../components/ui';
import { CourseHead } from './course-head';

type BookKey = (typeof BOOK_KEYS)[number];
type BcStyle = CSSProperties & { '--bc': string };
type RowState = 'done' | 'open' | 'locked' | 'soon';

const SUB = 'Те же уроки, но в порядке учебника: какой юнит книги каким уроком сайта закрыт. Объяснения и упражнения на сайте свои — книгу можно решать параллельно.';
const isKey = (k: string | undefined): k is BookKey => !!k && (BOOK_KEYS as readonly string[]).includes(k);

export default function BooksMap({ params }: PageProps) {
  const s = useProgress();
  const { data: course, error } = useCourse();
  const { data: syl, error: e2 } = useSyllabus();
  const head = <CourseHead tab="books" sub={SUB} />;
  const err = error || e2;
  if (err) return <Page>{head}<LoadError error={err} /></Page>;
  if (!course || !syl) return <Page>{head}<Loading /></Page>;

  const p1 = params[1];
  const key: BookKey = isKey(p1) && syl.books[p1] ? p1 : 'red';
  const bk = syl.books[key];
  const col = BOOK_COL[key];
  const byUnit: Record<number, SyllabusLesson> = {};
  syl.lessons.forEach((l) => (l[key] || []).forEach((n) => { byUnit[n] = l; }));
  const nums = Object.keys(bk.units).map(Number).sort((a, b) => a - b);
  const metaOf = (id: string) => course.units.find((u) => u.id === id);
  const st = (l: SyllabusLesson): RowState => {
    const u = metaOf(l.id);
    if (!u) return 'soon';
    if (passed(s, u.id)) return 'done';
    return isUnlocked(s, u, course) ? 'open' : 'locked';
  };
  const doneN = nums.filter((n) => byUnit[n] && st(byUnit[n]) === 'done').length;

  return (
    <Page>
      {head}
      <div className="seg wl-seg">
        {BOOK_KEYS.map((k) => (
          <a key={k} href={'#/books/' + k} className={k === key ? 'on' : ''} style={{ '--bc': BOOK_COL[k] } as BcStyle}>
            <i className="ph-fill ph-book" style={{ color: k === key ? '#fff' : BOOK_COL[k] }} aria-hidden="true" /> {syl.books[k].short} · {syl.books[k].level}
          </a>
        ))}
      </div>
      <div className="book-head" style={{ '--bc': col } as BcStyle}>
        <Icon name="book-open-text" fill />
        <div>
          <b>{bk.name}</b>
          <div className="small muted">{bk.author} · {nums.length} юнитов · закрыто вами {doneN}</div>
        </div>
        <div className="progress" style={{ flexBasis: '100%' }}><i style={{ width: (nums.length ? (doneN / nums.length) * 100 : 0) + '%', background: col }} /></div>
      </div>
      <div className="bm-list">
        {nums.map((n) => {
          const l = byUnit[n];
          const s0: RowState = l ? st(l) : 'soon';
          const u = l ? metaOf(l.id) : undefined;
          return (
            <a key={n} className={'bm-row ' + s0} href={u && s0 !== 'locked' ? '#/unit/' + u.id : undefined}>
              <span className="bm-n" style={{ '--bc': col } as BcStyle}>{n}</span>
              <span className="bm-t"><b>{bk.units[n]}</b><span className="small muted">{l ? `${l.level} · ${l.title}` : ''}</span></span>
              <span className="bm-s">
                {s0 === 'done' ? <Icon name="check-circle" fill /> : s0 === 'open' ? <Icon name="play-circle" /> : s0 === 'locked' ? <Icon name="lock-simple" /> : <span className="tiny">готовится</span>}
              </span>
            </a>
          );
        })}
      </div>
    </Page>
  );
}
