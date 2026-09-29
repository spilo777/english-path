// Страница «Profile» — в разработке
import type { PageProps } from '../app/App';
import { Page, TopBar } from '../components/ui';

export default function Profile({ params }: PageProps) {
  return <Page><TopBar title="Profile" sub={'Раздел переносится на новую версию сайта · ' + params.join('/')} /></Page>;
}
