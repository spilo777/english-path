// Аватар аккаунта: первая буква почты или значок (гость / облако)
import { Icon } from './ui';
import './Avatar.css';

export function Avatar({ email, size, icon = 'user', off }: { email?: string | null; size?: 'big' | 'sm' | 'xs'; icon?: string; off?: boolean }) {
  const cls = 'avatar' + (size ? ' ' + size : '') + (off ? ' off' : '');
  return <div className={cls}>{email ? (email[0] || '?').toUpperCase() : <Icon name={icon} />}</div>;
}
