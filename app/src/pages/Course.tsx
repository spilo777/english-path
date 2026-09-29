// Страница «Course» — в разработке
import type { PageProps } from '../app/App';
import { Page, TopBar } from '../components/ui';

export default function Course({ params }: PageProps) {
  return <Page><TopBar title="Course" sub={'Раздел переносится на новую версию сайта · ' + params.join('/')} /></Page>;
}
