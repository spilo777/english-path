// Страница «BooksMap» — в разработке
import type { PageProps } from '../app/App';
import { Page, TopBar } from '../components/ui';

export default function BooksMap({ params }: PageProps) {
  return <Page><TopBar title="BooksMap" sub={'Раздел переносится на новую версию сайта · ' + params.join('/')} /></Page>;
}
