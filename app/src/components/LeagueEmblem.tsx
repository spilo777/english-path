// Эмблема лиги — картинка из public/img/leagues (лёгкие AVIF/WebP собирает `npm run images`)
import { leagueOf } from '@core/league';
import './LeagueEmblem.css';

const SIZES = [64, 128, 256];
const fit = (w: number) => SIZES.find((s) => s >= w) ?? SIZES[SIZES.length - 1];

export function LeagueEmblem({ league, size = 64 }: { league: number; size?: number }) {
    const base = `img/leagues/${leagueOf(league).img}`;
    const set = (ext: string) => `${base}-${fit(size)}.${ext} 1x, ${base}-${fit(size * 2)}.${ext} 2x`;
    return (
        <picture className="league-emblem">
            <source type="image/avif" srcSet={set('avif')} />
            <img
                src={`${base}-${fit(size)}.webp`}
                srcSet={set('webp')}
                width={size}
                height={size}
                alt=""
                decoding="async"
            />
        </picture>
    );
}
