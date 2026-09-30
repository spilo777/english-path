// Каналы по уровням: уровень внутри диапазона канала. Данные каналов грузятся отдельно — только когда нужны
import { ALL_LEVELS, type Level } from '@utils/level';
import { lazySource, type Source } from '../base';
import type { Channel } from './model';

const rank = (l: Level) => ALL_LEVELS.indexOf(l);
const fits = (l: Level) => (c: Channel) => rank(l) >= rank(c.levels[0]) && rank(l) <= rank(c.levels[1]);

/** Каналы, подходящие уровню */
export function channelsIn(l: Level): Source<Channel[]> {
    return lazySource('listening:' + l, () => import('./channels').then((m) => m.CHANNELS.filter(fits(l))));
}
