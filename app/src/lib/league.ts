// Лиги и друзья: обёртки над RPC в Supabase (очки недели сервер считает сам по облачному прогрессу)
import { cloudClient } from './cloud';

export interface LeagueProfile {
    name: string;
    friend_code: string;
    league: number;
}
export interface BoardRow {
    place: number;
    name: string;
    xp: number;
    is_me: boolean;
    is_friend: boolean;
    league: number;
    week: string;
    /** код друга — по нему открывается профиль */
    code?: string;
    members: number;
}
export interface Friend {
    name: string;
    friend_code: string;
    league: number;
    streak: number;
    week_xp: number;
}
export interface LastResult {
    week: string;
    league: number;
    place: number;
    xp: number;
    moved: number;
}

export const LEAGUES: { name: string; color: string; icon: string }[] = [
    { name: 'Бронзовая', color: '#C0773A', icon: 'shield' },
    { name: 'Серебряная', color: '#8E9AAB', icon: 'shield' },
    { name: 'Золотая', color: '#E0A100', icon: 'shield-star' },
    { name: 'Сапфировая', color: '#2563EB', icon: 'shield-star' },
    { name: 'Рубиновая', color: '#E11D48', icon: 'shield-chevron' },
    { name: 'Изумрудная', color: '#10A36E', icon: 'shield-chevron' },
    { name: 'Аметистовая', color: '#8B5CF6', icon: 'crown-simple' },
    { name: 'Жемчужная', color: '#B08968', icon: 'crown-simple' },
    { name: 'Обсидиановая', color: '#334155', icon: 'crown' },
    { name: 'Алмазная', color: '#0EA5C6', icon: 'diamond' },
];
export const leagueOf = (i: number) => LEAGUES[Math.max(0, Math.min(LEAGUES.length - 1, i))];

/** Сколько поднимается и опускается в группе такого размера (как в league_rollover на сервере) */
export const zones = (size: number) => ({
    up: size >= 10 ? 5 : size >= 3 ? 1 : 0,
    down: size >= 10 ? 5 : size >= 5 ? 1 : 0,
});

const need = () => {
    const c = cloudClient();
    if (!c) throw new Error('Облако недоступно — проверьте интернет');
    return c;
};
const rows = <T>(data: unknown): T[] => (Array.isArray(data) ? (data as T[]) : []);
const errText = (m: string) =>
    /code not found/.test(m)
        ? 'Такого кода нет — проверьте буквы'
        : /own code/.test(m)
          ? 'Это ваш собственный код'
          : /too many/.test(m)
            ? 'Друзей уже 100 — это максимум'
            : /name length/.test(m)
              ? 'Имя — от 2 до 24 символов'
              : /not allowed/.test(m)
                ? 'Профиль виден только участникам вашей группы в лиге и друзьям'
                : /not signed in/.test(m)
                  ? 'Войдите в аккаунт'
                  : 'Не получилось — проверьте интернет';

export async function getProfile(): Promise<LeagueProfile | null> {
    const { data, error } = await need().rpc('profile_get');
    if (error) throw new Error(errText(error.message));
    return rows<LeagueProfile>(data)[0] || null;
}
export async function setName(name: string): Promise<LeagueProfile> {
    const { data, error } = await need().rpc('profile_set_name', { p_name: name });
    if (error) throw new Error(errText(error.message));
    return rows<LeagueProfile>(data)[0];
}
export async function joinAndBoard(): Promise<BoardRow[]> {
    const c = need();
    await c.rpc('league_join');
    const { data, error } = await c.rpc('league_board');
    if (error) throw new Error(errText(error.message));
    return rows<BoardRow>(data);
}
export async function lastResult(): Promise<LastResult | null> {
    const { data } = await need().rpc('league_last_result');
    return rows<LastResult>(data)[0] || null;
}
export async function friends(): Promise<Friend[]> {
    const { data, error } = await need().rpc('friends_list');
    if (error) throw new Error(errText(error.message));
    return rows<Friend>(data);
}
export async function addFriend(code: string): Promise<string> {
    const { data, error } = await need().rpc('friend_add', { p_code: code });
    if (error) throw new Error(errText(error.message));
    return String(data || '');
}
export async function removeFriend(code: string): Promise<void> {
    const { error } = await need().rpc('friend_remove', { p_code: code });
    if (error) throw new Error(errText(error.message));
}
/** Публичная сводка профиля: только ник, код и агрегаты (видят группа лиги и друзья) */
export interface PublicProfile {
    name: string;
    code: string;
    league: number;
    is_me: boolean;
    is_friend: boolean;
    streak: number;
    week_xp: number;
    total_xp: number;
    active_days: number;
    learning: number;
    learned: number;
    passed: string[];
    grammar: number | null;
    start_level: string | null;
    accent: string | null;
    answers: number | null;
    ach: number;
}
export async function profileView(code: string): Promise<PublicProfile> {
    const { data, error } = await need().rpc('profile_view', { p_code: code });
    if (error) throw new Error(errText(error.message));
    return data as PublicProfile;
}

/** Тихо записаться в лигу этой недели (при запуске сайта), если профиль уже есть */
export function touchLeague(): void {
    const c = cloudClient();
    if (c)
        void c.rpc('league_join').then(
            () => undefined,
            () => undefined,
        );
}

/** Дней до конца недели (воскресенье включительно, по Москве) */
export function daysLeft(): number {
    const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'Europe/Moscow' }));
    const dow = (now.getDay() + 6) % 7; // пн = 0
    return 7 - dow;
}
