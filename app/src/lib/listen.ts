// «Слушать»: YouTube-каналы для аудирования. Свежие видео — функция yt в Supabase (RSS-ленты YouTube, кеш 3 часа)
import { useEffect, useState } from 'react';
import { DAY } from '@utils/date';
import { ALL_LEVELS } from '@utils/level';
import { lsJSON, lsSetJSON } from '@utils/storage';
import type { Level } from './types';

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

export const CHANNELS: Channel[] = [
    {
        id: 'UC9VWyvdF-91McG6kt27MeKA',
        handle: 'markkulek',
        name: 'Mark Kulek',
        short: 'Mark Kulek',
        levels: ['A1', 'A2'],
        accent: 'американский',
        color: '#E0901A',
        about: 'Короткие диалоги на бытовые темы: магазин, работа, путешествия, мнения. Говорит медленно и очень чётко, на экране — картинки и текст.',
        how: 'Идеален для shadowing: поставьте на паузу после каждой реплики и повторите вслух с той же интонацией.',
        avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_lfMCqyLqt25fsZQjRtselqgeUULWJnS0go6Y7ZsS703XY=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/UsQSnN0RuDBSy--FNW_JKmJdjpP_XxkTTIhPhCortUtojECV2v2xz3E1FhOkaDBTEHGq1O50=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCZJJTxA36ZPNTJ1WFIByaeA',
        handle: 'learnenglishwithbobthecanadian',
        name: 'Learn English with Bob the Canadian',
        short: 'Bob the Canadian',
        levels: ['A2', 'B1'],
        accent: 'канадский (как американский)',
        color: '#E0453C',
        about: 'Боб — учитель из Канады: уроки «Let’s Learn English!» про повседневные слова и фразы, прогулки по ферме и городу. Спокойный темп, понятное произношение.',
        how: 'Смотрите с английскими субтитрами. Выписывайте 3–5 новых фраз за видео и добавляйте их в «Мои слова».',
        avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_lMRW8LVTYxA-tVtwpTuFpmosup5x3-hJ5yWmL835zK8g=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/ZhfveHmwqLNZPVDyOIMn8EtCDI5qTvdbBudV5kfn0N1CxLZ6UijKp4uKyTC7EcLxD7Qkczyr9w=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UC2L7vR43LKuBXXV2AentEMw',
        handle: 'lukesenglishpodcast',
        name: "Luke's English Podcast",
        short: 'Luke’s Podcast',
        levels: ['B1', 'B2'],
        accent: 'британский',
        color: '#4F6AF0',
        about: 'Подкаст британского преподавателя: истории, юмор, культура, разборы фраз. Живая естественная речь — длинные выпуски, как разговор с другом.',
        how: 'Слушайте на прогулке или в дороге, не пытаясь понять каждое слово: цель — привыкнуть к живой британской речи. Начните с выпусков, где тема вам интересна.',
        podcast: true,
        avatar: 'https://yt3.googleusercontent.com/Rmzu3c21PAiDTbSw7gI8yuzLRTInRJzkJB_dc8cIhNC95B5RO-XjmowRfk5NIQo4o5W7thv0=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/YjB6w5etu40vJ_gV7MpRLfYcBrS6ucE1hLjnDu2HUc0QY2cyFm98FAz9aThH0IVn5-6u_JA_=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCeTVoczn9NOZA9blls3YgUg',
        handle: 'EnglishClass101',
        name: 'Learn English with EnglishClass101',
        short: 'EnglishClass101',
        levels: ['A1', 'A2'],
        accent: 'американский',
        color: '#2E86DE',
        about: 'Уроки для самого старта: базовые фразы, числа, еда, знакомство, 100 главных слов. Много коротких роликов по 5–10 минут с текстом на экране.',
        how: 'Берите ролики «Absolute Beginner» и «Learn English in 3 Minutes». Повторяйте фразы вслух вслед за диктором — это и есть тренировка.',
        avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_n32LxxC0eRV4vBernV3V3NsCegihpcKHWsrEk3gzYtf0c=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/vG8pt4nSzsCmHIvRcXQ9Tu8pHHMzSFvmoCxUPY8rvAeEsD1A9Lc0s6MYiHWtU6K--Kf8tGsc=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCKyTokYo0nK2OA-az-sDijA',
        handle: 'VOALearningEnglish',
        name: 'VOA Learning English',
        short: 'VOA Learning English',
        levels: ['A1', 'B1'],
        accent: 'американский',
        color: '#1F4E9C',
        about: 'Новости и истории, начитанные медленно и простыми словами (около 1500 базовых слов). Есть уроки «Let’s Learn English» для начинающих.',
        how: 'Начните с «Let’s Learn English» (A1–A2), потом переходите к медленным новостям. Слушайте сначала без текста, потом с субтитрами.',
        avatar: 'https://yt3.googleusercontent.com/bYjN-CYamiBAcRhvsN5ONAd21QHXCZNN9IPDtx5SK76mkKLv642FOm2wr1B9edvuQ_zcctLMwA=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/YcYULryTLkh2AzYP8cEDFbWByN_Q-8AwVGoiiayOB9_C9964Q3Uir7m0NC-m2FFgSNs8tghLxw=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCGLGVRO_9qDc8VDGGMTcUiQ',
        handle: 'SpeakEnglishWithTiffani',
        name: 'Speak English With Tiffani',
        short: 'Tiffani',
        levels: ['A2', 'B1'],
        accent: 'американский',
        color: '#D6336C',
        about: 'Тиффани — энергичный учитель из США: разговорные фразы, как отвечать на вопросы, английский для интервью и работы. Говорит чётко, объясняет просто.',
        how: 'Выбирайте ролики «Speak English fluently» и «English conversation practice» — в них есть паузы, чтобы ответить вслух.',
        avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_n-r2OM65QfiFzoArP3_KysCkGo0RWoCcpGwKkO0Z0Flig=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/iELgEasi29ibhguKBLEmpLulpSkfoYYJscYu5RgWigTMcbdtaBD-c7P_lH61mzk0iyDOgkPS=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UC_XZoWueXyWuwVG4B_AEmmg',
        handle: 'ArnelsEverydayEnglish',
        name: 'Arnel’s Everyday English',
        short: 'Arnel’s English',
        levels: ['A2', 'B1'],
        accent: 'американский',
        color: '#0CA678',
        about: 'Спокойные уроки про повседневный английский: фразовые глаголы, частые ошибки, «как сказать по-другому». Много примеров из жизни.',
        how: 'Одна тема — одно видео: после просмотра составьте 3 своих предложения с новыми фразами и добавьте их в «Мои слова».',
        avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kqXUSMjKQY-rG5VNKQDeyp_FC3Ocalmsiol2Zr615v6w=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/nBCFQZI2g2I2r5_wLnnsOEef0io8mPu2G1yox5awgMItNO_m-mLI9Co8z7CmtFHYaajawuw0h4k=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCKcZoWbqWzXSYzxQL9utJ1g',
        handle: 'AdeptEnglish',
        name: 'Adept English',
        short: 'Adept English',
        levels: ['A2', 'B1'],
        accent: 'британский',
        color: '#7048E8',
        about: 'Подкаст для тренировки слуха: спокойная британская речь на интересные темы — привычки, история, психология, жизнь в Англии.',
        how: 'Слушайте один выпуск несколько раз: сначала общий смысл, потом детали. Удобно в дороге — видео почти не нужно.',
        podcast: true,
        avatar: 'https://yt3.googleusercontent.com/vyOmdesekO9WvTfb9sBLLpkydu9zUjadr2x3K-wYbAaFemaH25JYg_fDMXWsf1ViwThqAqRs=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/TtKQLbieUwDGFiH2ur35Y6GLd5ENBXNtGXPOYTTzseiAzH1qC30cl3ie1OrQw1RVqPI_uvFAWA=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCxJGMJbjokfnr2-s4_RXPxQ',
        handle: 'SpeakEnglishWithVanessa',
        name: 'Speak English With Vanessa',
        short: 'Vanessa',
        levels: ['B1', 'B2'],
        accent: 'американский',
        color: '#F08C00',
        about: 'Ванесса учит «настоящему» разговорному английскому: как говорят носители в жизни, сленг, связная речь, уроки-прогулки и диалоги с мужем.',
        how: 'Пробуйте её упражнения на «shadowing» и «conversation lesson» — повторяйте вслух за ней, копируя темп и интонацию.',
        avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_kVsraP2aOOCCwX6FKamHjeC3aGT7AoYwAEf6MHHnW9mEE=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/WOcQwMGTEa2w0BMALdV95do4y9IgBmnPnKbs-hCEvw_Pb6sx8gfFRrF7nG2kFeVnF1rAliSF=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCHaHD477h-FeBbVh9Sh7syA',
        handle: 'bbclearningenglish',
        name: 'BBC Learning English',
        short: 'BBC Learning English',
        levels: ['A2', 'B2'],
        accent: 'британский',
        color: '#B8001F',
        about: 'Классика от BBC: «6 Minute English» (подкаст на 6 минут), новости простым языком, грамматика и произношение. Очень чёткая британская речь.',
        how: '«6 Minute English» — идеальная ежедневная привычка: один выпуск за завтраком, выпишите 2–3 слова из словарика в конце.',
        podcast: true,
        avatar: 'https://yt3.googleusercontent.com/ANAs2cAwxesjyoe3vsyhZGzlTafbicnuGMzPNSAuJdpTwg8CesHkViMTCrYqAJEGaKXG6_KEUg=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/Imj6xMM2h0Zc3wpaCxxNrFAcy0a6KvJ5_y7iXfQRSWxb1sdG80yDIc0JDXnf6Og0fi-GiR_3ksM=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCwk6ifONlkvqnoMF2uyA05g',
        handle: 'PapaTeachMe',
        name: 'Learn English with Papa Teach Me',
        short: 'Papa Teach Me',
        levels: ['B1', 'B2'],
        accent: 'британский (лондонский)',
        color: '#212529',
        about: 'Живой британский английский с юмором: как на самом деле говорят в Лондоне, сленг, произношение, частые ошибки. Короткие и весёлые ролики.',
        how: 'Смотрите с английскими субтитрами и повторяйте фразы с его британской интонацией — очень помогает звучать естественнее.',
        avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_mHFztEg0amoYsOtS9P_WxrdmipHLse-PE8dMtXrIFpJzw=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/h2obm36RAYNWlMfidS50xNLntzyOxCcKnj38Cj0Jrjo0fFxzU-myWEBLf2qXctgBI_7BgQfliSQ=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCz4tgANd4yy8Oe0iXCdSWfA',
        handle: 'EnglishwithLucy',
        name: 'English with Lucy',
        short: 'English with Lucy',
        levels: ['B1', 'B2'],
        accent: 'британский',
        color: '#C2255C',
        about: 'Один из самых популярных каналов: британское произношение, продвинутая лексика, грамматика и различия британского и американского английского.',
        how: 'Выбирайте ролики про лексику («Stop saying…», «Advanced vocabulary») и сразу добавляйте понравившиеся слова в карточки.',
        avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_nZnUEKXrbewVcDQSSWIa1xPXjUZCwNF-b8Hz2CsybaZU4=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/cuyx8AK_NIjjaGws-PTJU4oTSf94QJTh6c15HSjzzX2k6bhSEz8WC3cz5rnZ_oLIiGKX38Ms9Q=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCKgpamMlm872zkGDcBJHYDg',
        handle: 'LearnEnglishWithTVSeries',
        name: 'Learn English With TV Series',
        short: 'English With TV Series',
        levels: ['B1', 'B2'],
        accent: 'американский',
        color: '#343A40',
        about: 'Английский по сценам из сериалов и фильмов: разбирают реплики, сленг, быструю речь и связки слов, потом проигрывают сцену ещё раз.',
        how: 'Сначала посмотрите сцену без субтитров, после разбора — снова. Разница в понимании сразу заметна.',
        avatar: 'https://yt3.googleusercontent.com/ytc/AIdro_n6-w6FLV8bqbCARAQdcch-xOgjpwIZkAWxh2ZbuWnULQ=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/UanNSmh-67GbjaLFzih5Jobhy3JKjKKSRLFJIMlF2W6zthYqLKiB1HRIrXVlgoYNe9crrLV3hug=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCvn_XCl_mgQmt3sD753zdJA',
        handle: 'rachelsenglish',
        name: 'Rachel’s English',
        short: 'Rachel’s English',
        levels: ['B1', 'B2'],
        accent: 'американский',
        color: '#5C940D',
        about: 'Лучший канал про американское произношение: как звучат слова в быстрой речи, редукции, интонация, «ленивые» звуки носителей.',
        how: 'Берите короткие ролики про конкретный звук или фразу и тренируйтесь вслух 5 минут. Записывайте себя и сравнивайте.',
        avatar: 'https://yt3.googleusercontent.com/9PaqSmys-JJVyYRuwEUPYrR5SGgTcSCIcqUobHyznUhv2KA3ImJ1I2HEYHwlOO21zltEXthrFJ4=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/NHmKrmawDppRJKQ0X0lXlVXgUMcNJTN-n_6WLxp069NOYG9HAHD2Yh7A9EyyKYsyX7upii7E5Q=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCajKaiBJSwYcDFbfMICpSpA',
        handle: 'AllEarsEnglishPodcast',
        name: 'All Ears English',
        short: 'All Ears English',
        levels: ['B1', 'B2'],
        accent: 'американский',
        color: '#E8590C',
        about: 'Популярный подкаст: живые разговоры двух ведущих о жизни, работе и общении по-английски. Много естественных фраз и идиом.',
        how: 'Слушайте фоном по дороге, а раз в неделю — внимательно, выписывая фразы. Цель — привыкнуть к скорости настоящего разговора.',
        podcast: true,
        avatar: 'https://yt3.googleusercontent.com/200BUon5hZ0oISIJ5N9r209LgJJEMQHTFKrg5jfb1PV6Xo9rUuMmg8r3Ieh-jyquq-a1bFQZzGI=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/-rfUmOERdromNjKR2p0NIkeyYyA97uW3bGSNxuPHy1iTJnK3fkPlfhTPI4QwuQbdGo8HRgf1Kw=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
    {
        id: 'UCa2aEN90vKFPyWcHsSMFKCA',
        handle: 'englishlearningforcuriousminds',
        name: 'English Learning for Curious Minds',
        short: 'Curious Minds',
        levels: ['B1', 'B2'],
        accent: 'британский',
        color: '#1098AD',
        about: 'Подкаст-рассказы об истории, науке и культуре: интересные истории, начитанные чуть медленнее обычного и с пояснением сложных слов.',
        how: 'Выбирайте темы, которые вам и так интересны, — так проще слушать 20–30 минут подряд и не терять нить.',
        podcast: true,
        avatar: 'https://yt3.googleusercontent.com/Hx2U8h5H1W3x6OALKWjAvNTAoys17QDfJWkVjRMMqcQdZ8fJO34kSIaSQtRGn7wXEV52E8fWBg=s240-c-k-c0x00ffffff-no-rj',
        banner: 'https://yt3.googleusercontent.com/vKCjlk5C1qvmhiW1PdLC5Tj1P6fuEtuYNbyB-qpzkHXr8Vki7ji8DHXUxOBSiJEImNmJ926M1Q=w1280-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    },
];
const LV: readonly string[] = ALL_LEVELS;
CHANNELS.sort(
    (a, b) => LV.indexOf(a.levels[0]) - LV.indexOf(b.levels[0]) || LV.indexOf(a.levels[1]) - LV.indexOf(b.levels[1]),
);
export const channelOf = (id: string) => CHANNELS.find((c) => c.id === id);
/** Каналы, подходящие уровню (уровень внутри диапазона канала), — первыми */
export const channelsFor = (lvl: Level) => {
    const i = LV.indexOf(lvl);
    const fit = (c: Channel) => i >= LV.indexOf(c.levels[0]) && i <= LV.indexOf(c.levels[1]);
    return [...CHANNELS.filter(fit), ...CHANNELS.filter((c) => !fit(c))];
};

const URL_ = 'https://rxpmzsresfuevebkirsk.supabase.co/functions/v1/yt';
const KEY = 'ep.yt';
type Feed = Record<string, Video[]>;
type Arts = Record<string, ChannelArt>;
let mem: Feed | null = null;
let arts: Arts = {};
let inflight: Promise<Feed> | null = null;
const artSubs = new Set<() => void>();

function readCache(): { at: number; channels: Feed; meta?: Arts } | null {
    const x = lsJSON<{ at: number; channels: Feed; meta?: Arts }>(KEY);
    return x && x.channels ? x : null;
}
function setArts(m: Arts | undefined) {
    if (m && Object.keys(m).length) {
        arts = m;
        artSubs.forEach((f) => f());
    }
}

/** Свежие видео всех каналов (кеш в памяти и localStorage на 3 часа; без сети — последняя копия) */
export function loadFeed(): Promise<Feed> {
    if (mem) return Promise.resolve(mem);
    const c = readCache();
    if (c) setArts(c.meta);
    if (c && Date.now() - c.at < 3 * 3600 * 1000) return Promise.resolve((mem = c.channels));
    if (!inflight) {
        inflight = fetch(URL_)
            .then((r) => r.json())
            .then((j: { channels?: Feed; meta?: Arts }) => {
                const ch = j && j.channels ? j.channels : {};
                setArts(j && j.meta);
                lsSetJSON(KEY, { at: Date.now(), channels: ch, meta: arts });
                return (mem = ch);
            })
            .catch(() => (c ? c.channels : {}))
            .finally(() => {
                inflight = null;
            });
    }
    return inflight;
}

export function useFeed(): Feed | null {
    const [f, setF] = useState<Feed | null>(mem);
    useEffect(() => {
        let alive = true;
        void loadFeed().then((x) => {
            if (alive) setF(x);
        });
        return () => {
            alive = false;
        };
    }, []);
    return f;
}

/** Аватар и шапка канала: свежие из функции yt, пока их нет — сохранённые настоящие картинки канала */
export function useChannelArt(ch: Channel): ChannelArt {
    const [, tick] = useState(0);
    useEffect(() => {
        const f = () => tick((x) => x + 1);
        artSubs.add(f);
        void loadFeed();
        return () => {
            artSubs.delete(f);
        };
    }, []);
    const a = arts[ch.id];
    return { avatar: a?.avatar || ch.avatar, banner: a?.banner || ch.banner };
}

/** Найти видео по id во всех каналах */
export function findVideo(feed: Feed | null, vid: string): { v: Video; ch: Channel } | null {
    if (!feed) return null;
    for (const ch of CHANNELS) {
        const v = (feed[ch.id] || []).find((x) => x.id === vid);
        if (v) return { v, ch };
    }
    return null;
}

export const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
export const ago = (iso: string) => {
    const d = Math.max(0, Math.round((Date.now() - new Date(iso).getTime()) / DAY));
    return d === 0
        ? 'сегодня'
        : d === 1
          ? 'вчера'
          : d < 7
            ? `${d} дн. назад`
            : d < 30
              ? `${Math.round(d / 7)} нед. назад`
              : `${Math.round(d / 30)} мес. назад`;
};
