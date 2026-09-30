// «Слушать»: YouTube-каналы для аудирования и их видео
import type { Level } from '@utils/level';

export interface Channel {
    id: string;
    handle: string;
    name: string;
    short: string;
    levels: [Level, Level];
    accent: string;
    color: string;
    about: string;
    how: string;
    /** настоящие картинки канала (со страницы YouTube); свежие приходят из функции yt вместе с видео */
    avatar: string;
    banner: string;
    /** формат подкаста: длинные выпуски, удобно слушать без экрана */
    podcast?: boolean;
}
export interface ChannelArt {
    avatar: string;
    banner: string;
}
export interface Video {
    id: string;
    title: string;
    published: string;
    views: number;
}
