// Чтение: #/read/<id> — статья библиотеки, текст урока (t-<урок>-N) или свой текст (u-…)
import { useEffect } from 'react';
import type { PageProps } from '../app/App';
import { go } from '../app/router';
import { LoadError, Loading, Page } from '../components/ui';
import { useCourse, useLibrary, useUnit } from '../lib/data';
import { useProgress } from '../lib/store';
import { ReaderView, type ReadCtx } from './reader-core';

export default function Reader({ params }: PageProps) {
  const id = params[1] || '';
  const s = useProgress();
  const lib = useLibrary();
  const { data: course } = useCourse();
  // текст урока: t-a1-3-2 → файл юнита a1-3
  const um = id.match(/^t-(.+)-\d+$/);
  const meta = um && course ? course.units.find((u) => u.id === um[1]) : undefined;
  const uf = useUnit(meta ? meta.id : null);

  const user = s.userTexts.find((x) => x.id === id);
  const libT = lib.data?.find((x) => x.id === id);
  const unit = uf.data && uf.data.id === meta?.id ? uf.data : undefined; // не прошлый юнит
  const unitT = unit?.texts.find((x) => x.id === id);

  let ctx: ReadCtx | null = null;
  if (user) ctx = { t: user, user: true };
  else if (libT) ctx = { t: libT, lib: lib.data };
  else if (unit && unitT) ctx = { t: { ...unitT, level: unitT.level || unit.level }, unit: { id: unit.id, texts: unit.texts } };

  // всё загружено, а текста нет — в библиотеку (как на старом сайте)
  const settled = !!lib.data && !!course && (!meta || !!unit || !!uf.error);
  const missing = !ctx && settled;
  useEffect(() => { if (missing) go('#/library'); }, [missing]);

  if (ctx) return <ReaderView key={ctx.t.id} ctx={ctx} />;
  if (lib.error && !um) return <Page><LoadError error={lib.error} /></Page>;
  if (uf.error) return <Page><LoadError error={uf.error} /></Page>;
  return <Page><Loading /></Page>;
}
