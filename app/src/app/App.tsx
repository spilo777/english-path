// Корень приложения: маршруты → страницы. Страницы грузятся лениво, чтобы первый экран открывался быстро.
import { lazy, Suspense, useEffect, type ComponentType, type LazyExoticComponent } from 'react';
import { Layout, type NavKey } from '../components/Layout';
import { Loading, Toaster } from '../components/ui';
import { useRoute } from './router';
import { AppChrome } from './AppChrome';

export type PageProps = { params: string[] };
type PageC = LazyExoticComponent<ComponentType<PageProps>>;

const P = {
  home: lazy(() => import('../pages/Home')),
  course: lazy(() => import('../pages/Course')),
  unit: lazy(() => import('../pages/Unit')),
  tenses: lazy(() => import('../pages/Tenses')),
  library: lazy(() => import('../pages/Library')),
  reader: lazy(() => import('../pages/Reader')),
  book: lazy(() => import('../pages/Book')),
  cards: lazy(() => import('../pages/Dictionary')),
  review: lazy(() => import('../pages/Review')),
  profile: lazy(() => import('../pages/Profile')),
  settings: lazy(() => import('../pages/Settings')),
  placement: lazy(() => import('../pages/Placement')),
  league: lazy(() => import('../pages/League')),
  listen: lazy(() => import('../pages/Listen')),
};

/** Какая страница, какой пункт меню подсвечен и узкая ли колонка */
function resolve(r: string, parts: string[]): [PageC, NavKey, boolean] {
  switch (r) {
    case '': return [P.home, 'today', false];
    case 'course': return [P.course, 'course', false];
    case 'placement': return [P.placement, 'course', true];
    case 'league': return [P.league, 'profile', true];
    case 'listen': return [P.listen, 'library', !!parts[1]];
    case 'unit': return [P.unit, 'course', true];
    case 'tenses': return [P.tenses, 'course', !!parts[1] && parts[1] !== 'train'];
    case 'books': return [P.course, 'course', false]; // раздел «По учебнику» объединён с «Уроками»
    case 'library': return [P.library, 'library', false];
    case 'read': return [P.reader, 'library', true];
    case 'book': return [P.book, 'library', parts[2] != null];
    case 'cards': case 'deck': case 'words': case 'topic': return [P.cards, 'cards', false];
    case 'review': return [P.review, 'cards', true];
    case 'profile': case 'achievements': case 'stats': return [P.profile, 'profile', false];
    case 'settings': case 'account': return [P.settings, 'profile', true];
    default: return [P.home, 'today', false];
  }
}

export function App() {
  const parts = useRoute();
  const r = parts[0] || '';
  const [Page, nav, narrow] = resolve(r, parts);
  useEffect(() => { window.scrollTo(0, 0); }, [parts.join('/')]);
  return (
    <AppChrome>
      {(badge) => (
        <Layout active={nav} badge={badge} narrow={narrow}>
          <Suspense fallback={<Loading />}>
            <Page params={parts} />
          </Suspense>
          <Toaster />
        </Layout>
      )}
    </AppChrome>
  );
}
