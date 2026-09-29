// Страница «Review» — в разработке
import type { PageProps } from '../app/App';
import { Page, TopBar } from '../components/ui';

export default function Review({ params }: PageProps) {
  return <Page><TopBar title="Review" sub={'Раздел переносится на новую версию сайта · ' + params.join('/')} /></Page>;
}
