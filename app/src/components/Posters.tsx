// Обложки и постеры статей/книг (карусели, сетки, карточки библиотеки)
import { useEffect, useState, type ReactNode } from 'react';
import { dlgLines, minsIn, wordsIn } from '@utils/text';
import { useCover } from '../lib/images';
import { useProgress } from '../lib/store';
import type { BookMeta, TextItem } from '../lib/types';
import { Icon, plural } from './ui';

/** Категория статьи → иконка; порядок задаёт цвет обложки (cat-0…cat-6) */
export const CAT_ICON: Record<string, string> = {
    Сериалы: 'television-simple',
    Мультфильмы: 'palette',
    Игры: 'game-controller',
    Аниме: 'flower-lotus',
    Кино: 'film-slate',
    'Про экран': 'popcorn',
    'Диалоги из игр': 'chat-circle-dots',
    'Диалоги из фильмов и сериалов': 'film-reel',
};
export const catIdx = (c?: string) => Object.keys(CAT_ICON).indexOf(c || '');
export const catIcon = (c?: string) => CAT_ICON[c || ''] || 'book-open-text';
// объём текста — в utils; реэкспорт для Library, Book, Reader
export { dlgLines, minsIn, wordsIn };

/** Цветная обложка с иконкой; картинка из Википедии поверх, когда загрузится */
export function Cover({
    id,
    wiki,
    commons,
    img,
    cls = '',
    icon,
    children,
}: {
    id: string;
    wiki?: string;
    commons?: string;
    img?: string;
    cls?: string;
    icon: string;
    children?: ReactNode;
}) {
    const src = useCover(id, wiki, commons, img);
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);
    useEffect(() => {
        setLoaded(false);
        setFailed(false);
    }, [src]);
    return (
        <div className={'lib-cover' + (cls ? ' ' + cls : '') + (loaded ? ' has-img' : '')}>
            <span>
                <Icon name={icon} />
            </span>
            {src && !failed ? (
                <img
                    src={src}
                    alt=""
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onLoad={() => setLoaded(true)}
                    onError={() => setFailed(true)}
                />
            ) : null}
            {children}
        </div>
    );
}

interface PosterProps {
    href: string;
    id: string;
    wiki?: string;
    commons?: string;
    img?: string;
    title: string;
    band: string;
    cap: ReactNode;
    icon: string;
    cls?: string;
    done?: boolean;
    progress?: number;
}

function Poster({ href, id, wiki, commons, img, title, band, cap, icon, cls = '', done, progress }: PosterProps) {
    return (
        <a className="poster" href={href}>
            <Cover
                id={id}
                wiki={wiki}
                commons={commons}
                img={img}
                cls={'poster-img' + (cls ? ' ' + cls : '')}
                icon={icon}
            >
                {done ? (
                    <b className="lib-done">
                        <Icon name="check" />
                    </b>
                ) : null}
                <div className="poster-band">
                    <b>{title}</b>
                    <span>{band}</span>
                </div>
                {progress ? <i className="poster-prog" style={{ width: Math.round(progress * 100) + '%' }} /> : null}
            </Cover>
            <div className="poster-cap">{cap}</div>
        </a>
    );
}

/** Статья или диалог библиотеки */
export function TextPoster({ t }: { t: TextItem }) {
    const s = useProgress();
    const dlg = t.kind === 'dialogue';
    return (
        <Poster
            href={'#/read/' + t.id}
            id={t.id}
            wiki={t.wiki}
            commons={t.commons}
            img={t.img}
            title={t.title}
            band={`${t.cat || ''} · ${t.level}`}
            cls={'cat-' + catIdx(t.cat)}
            icon={catIcon(t.cat)}
            done={!!s.textsRead[t.id]}
            cap={
                dlg ? (
                    <>
                        <Icon name="chat-circle-dots" /> Диалог · {dlgLines(t)} реплик
                    </>
                ) : (
                    <>
                        <Icon name="article" /> Статья · {minsIn(t)} мин
                    </>
                )
            }
        />
    );
}

const chapN = (b: BookMeta) => b.chapters || 0;

/** Книга: обложка, автор, прогресс по главам */
export function BookPoster({ b }: { b: BookMeta }) {
    const s = useProgress();
    const n = chapN(b);
    let d = 0;
    for (let i = 0; i < n; i++) if (s.textsRead[b.id + '#' + i]) d++;
    return (
        <Poster
            href={'#/book/' + b.id}
            id={b.id}
            wiki={b.wiki}
            img={b.img}
            title={b.title}
            band={`${b.author} · ${b.level}`}
            cls={'book' + (b.kind === 'original' ? ' orig' : '')}
            icon="book"
            done={!!n && d >= n}
            progress={d && d < n ? d / n : 0}
            cap={
                <>
                    <Icon name="book-open" /> {b.kind === 'original' ? 'Оригинал' : 'Адаптация'} · {n}{' '}
                    {plural(n, 'глава', 'главы', 'глав')}
                </>
            }
        />
    );
}

/** Карточка статьи в списке библиотеки */
export function LibCard({ t }: { t: TextItem }) {
    const s = useProgress();
    const read = !!s.textsRead[t.id];
    const qz = (s.quiz || {})[t.id];
    return (
        <a className={'lib-card cat-' + catIdx(t.cat)} href={'#/read/' + t.id}>
            <Cover id={t.id} wiki={t.wiki} commons={t.commons} img={t.img} icon={catIcon(t.cat)}>
                {read ? (
                    <b className="lib-done">
                        <Icon name="check" />
                    </b>
                ) : null}
            </Cover>
            <div className="lib-body">
                <div className="lib-meta">
                    <span className="pill accent">{t.level}</span>
                    <span className="tiny muted">
                        {CAT_ICON[t.cat || ''] ? <Icon name={CAT_ICON[t.cat || '']} /> : null} {t.cat}
                    </span>
                </div>
                <div className="lib-title">{t.title}</div>
                <div className="lib-ru">{t.ru}</div>
                <div className="tiny muted">
                    {t.about} · {minsIn(t)} мин · {wordsIn(t)} слов
                    {qz != null ? ` · тест ${qz}/${(t.questions || []).length}` : ''}
                </div>
            </div>
        </a>
    );
}
