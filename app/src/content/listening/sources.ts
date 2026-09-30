// Каналы по уровням: уровень внутри диапазона канала
import { ALL_LEVELS, type Level } from '@utils/level';
import { staticSource, type Source } from '../base';
import { CHANNELS } from './channels';
import type { Channel } from './model';

const rank = (l: Level) => ALL_LEVELS.indexOf(l);

/** Каналы, подходящие уровню */
export function channelsIn(l: Level): Source<Channel[]> {
    const fit = CHANNELS.filter((c) => rank(l) >= rank(c.levels[0]) && rank(l) <= rank(c.levels[1]));
    return staticSource('listening:' + l, fit);
}
