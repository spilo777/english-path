// Достижения: разное
import { CATS, type AddAch } from '../add';

export function miscAch(add: AddAch) {
    const { M } = CATS;
    add(M, 'backup', 'floppy-disk', 'Страховка', 'Сохраните резервную копию прогресса', 16, 1, (c) => c.backup);
    add(M, 'voice', 'waveform', 'Свой голос', 'Выберите голос озвучки в настройках', 19, 1, (c) => c.voice);
    add(M, 'ach_10', 'medal', 'Коллекционер', 'Получите 10 достижений', 38, 10, (c) => c.achCount);
    add(M, 'ach_30', 'trophy', 'Охотник за ачивками', 'Получите 30 достижений', 13, 30, (c) => c.achCount);
    add(M, 'ach_60', 'sparkle', 'Легенда', 'Получите 60 достижений', 2.1, 60, (c) => c.achCount);
    add(M, 'platinum', 'diamonds-four', 'Платина', 'Получите все остальные достижения', 0.2, 1, (c) => c.allOthers);
}
