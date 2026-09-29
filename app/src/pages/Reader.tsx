// Чтение: #/read/<id> — статья библиотеки, текст урока (t-<урок>-N) или свой текст (u-…)
import { useEffect } from 'react';
import type { PageProps } from '../app/App';
import { go } from '../app/router';
import { LoadError, Loading, Page } from '../components/ui';
import { useCourse, useLibrary, useUnits } from '../lib/data';
import { useProgress } from '../lib/store';
import type { Level } from '../lib/types';
import { ReaderView, type ReadCtx } from './reader-core';

export default function Reader({ params }: PageProps) {
  const id = params[1] || '';
  const s = useProgress();
  const lib = useLibrary();
  const { data: course } = useCourse();
  // текст урока: t-a1-3-2 → урок a1-3 → его уровень
  const um = id.match(/^t-(.+)-\d+$/);
  const meta = um && course ? course.units.find((u) => u.id === um[1]) : undefined;
  const units = useUnits(meta ? (meta.level as Level) : null);

  const user = s.userTexts.find((x) => x.id === id);
  const libT = lib.data?.find((x) => x.id === id);
  const unit = units.data?.find((u) => u.id === meta?.id);
  const unitT = unit?.texts.find((x) => x.id === id);

  let ctx: ReadCtx | null = null;
  if (user) ctx = { t: user, user: true };
  else if (libT) ctx = { t: libT, lib: lib.data };
  else if (unit && unitT) ctx = { t: { ...unitT, level: unitT.level || unit.level }, unit: { id: unit.id, texts: unit.texts } };

  // всё загружено, а текста нет — в библиотеку (как на старом сайте)
  const settled = !!lib.data && !!course && (!meta || !!units.data || !!units.error);
  const missing = !ctx && settled;
  useEffect(() => { if (missing) go('#/library'); }, [missing]);

  if (ctx) return <ReaderView key={ctx.t.id} ctx={ctx} />;
  if (lib.error && !um) return <Page><LoadError error={lib.error} /></Page>;
  if (units.error) return <Page><LoadError error={units.error} /></Page>;
  return <Page><Loading /></Page>;
}
