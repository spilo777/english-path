// Страница «Settings» — в разработке
import type { PageProps } from '../app/App';
import { Page, TopBar } from '../components/ui';

export default function Settings({ params }: PageProps) {
  return <Page><TopBar title="Settings" sub={'Раздел переносится на новую версию сайта · ' + params.join('/')} /></Page>;
}
