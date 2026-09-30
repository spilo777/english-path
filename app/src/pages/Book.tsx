// Книга: #/book/<id> — карточка книги и список глав; #/book/<id>/<глава> — чтение главы
import { useEffect } from 'react';
import { clamp } from '@utils/math';
import type { PageProps } from '../app/App';
import { go } from '../app/router';
import { Cover, minsIn, wordsIn } from '../components/Posters';
import { BackLink, Icon, Loading, Page, plural } from '../components/ui';
import { useSource } from '../content/base/hooks';
import { bookBody, bookIndex } from '../content/books';
import type { Book as BookT, BookMeta } from '@content/books';
import { useProgress } from '@core/progress/hooks';
import { lsGet, lsSet, ReaderView } from './reader-core';
import './Book.css';

export default function Book({ params }: PageProps) {
    const id = params[1] || '';
    const chParam = params[2];
    const idx = useSource(bookIndex);
    const meta = idx.data?.find((b) => b.id === id);
    const full = useSource(meta ? bookBody(id) : null);
    const missing = !!idx.data && !meta;
    useEffect(() => {
        if (missing) go('#/library');
    }, [missing]);

    if (!meta)
        return (
            <Page>
                <Loading />
            </Page>
        );
    if (full.error)
        return (
            <Page>
                <BackLink href="#/library" />
                <div className="empty">
                    <div className="big">
                        <Icon name="wifi-slash" />
                    </div>
                    Не удалось загрузить книгу. Проверьте интернет и обновите страницу.
                </div>
            </Page>
        );
    if (!full.data)
        return (
            <Page>
                <BackLink href="#/library" />
                <div className="empty">
                    <div className="big">
                        <Icon name="book-open" />
                    </div>
                    Открываю книгу «{meta.title}»…
                </div>
            </Page>
        );
    const b = full.data;
    const n = b.chapters.length;
    if (chParam != null && chParam !== '') {
        const i = clamp(parseInt(chParam, 10) || 0, 0, n - 1);
        return <Chapter key={id + '#' + i} meta={{ ...meta, chapters: n }} b={b} i={i} />;
    }
    return <BookCard meta={meta} b={b} all={idx.data || []} />;
}

function Chapter({ meta, b, i }: { meta: BookMeta; b: BookT; i: number }) {
    const c = b.chapters[i];
    useEffect(() => {
        lsSet('ep.bookAt.' + b.id, String(i));
    }, [b.id, i]);
    return (
        <ReaderView
            ctx={{ t: { id: b.id + '#' + i, title: c.title, text: c.text, level: b.level }, book: meta, chapter: i }}
        />
    );
}

function BookCard({ meta, b, all }: { meta: BookMeta; b: BookT; all: BookMeta[] }) {
    const s = useProgress();
    const n = b.chapters.length;
    const readCh = (i: number) => !!s.textsRead[b.id + '#' + i];
    let d = 0;
    for (let i = 0; i < n; i++) if (readCh(i)) d++;
    const firstUnread = b.chapters.findIndex((_, i) => !readCh(i));
    const saved = lsGet('ep.bookAt.' + b.id, '');
    const at = clamp(saved !== '' ? +saved : firstUnread, 0, n - 1);
    const words = b.chapters.reduce((sum, c) => sum + wordsIn(c), 0);
    const orig = meta.kind === 'original';
    const pair = all.find((x) => x.id !== b.id && !!x.wiki && x.wiki === meta.wiki);

    return (
        <Page className="book-page">
            <BackLink href="#/library" />
            <div className="book-hero">
                <Cover
                    id={b.id}
                    wiki={meta.wiki}
                    img={meta.img}
                    cls={'poster-img book' + (orig ? ' orig' : '')}
                    icon="book"
                />
                <div className="book-info">
                    <div className="lib-meta">
                        <span className="pill accent">{meta.level}</span>
                        <span className="pill">{orig ? 'Оригинал' : 'Адаптированная'}</span>
                    </div>
                    <h1>{meta.title}</h1>
                    <div className="book-author">{meta.author}</div>
                    <p className="muted">{meta.ru || ''}</p>
                    <div className="small muted">
                        {n} {plural(n, 'глава', 'главы', 'глав')} · {words.toLocaleString('ru-RU')} слов · ≈{' '}
                        {Math.max(1, Math.round(words / 90 / 60))} ч чтения
                    </div>
                    <div className="progress book-prog">
                        <i style={{ width: (n ? (d / n) * 100 : 0) + '%' }} />
                    </div>
                    <a className="pill-btn" href={`#/book/${b.id}/${at}`}>
                        {d || saved ? 'ПРОДОЛЖИТЬ · гл. ' + (at + 1) : 'НАЧАТЬ ЧИТАТЬ'}
                    </a>
                </div>
            </div>
            {orig ? (
                <div className="g-tip book-tip">
                    Это полный оригинальный текст без упрощений — язык XIX века бывает непростым.{' '}
                    {pair ? (
                        <>
                            Если тяжело, начните с{' '}
                            <a href={'#/book/' + pair.id}>адаптированной версии ({pair.level})</a>.
                        </>
                    ) : (
                        'Если тяжело — начните с адаптированных книг.'
                    )}
                </div>
            ) : pair ? (
                <div className="g-tip book-tip">
                    Когда дочитаете, попробуйте <a href={'#/book/' + pair.id}>оригинал этой книги</a> — вы удивитесь,
                    сколько уже понимаете.
                </div>
            ) : null}
            <h2 className="sec-h">Главы</h2>
            <div className="chap-list">
                {b.chapters.map((c, i) => {
                    const r = readCh(i);
                    return (
                        <a
                            key={i}
                            className={'chap-row' + (r ? ' done' : '') + (i === at && !r ? ' cur' : '')}
                            href={`#/book/${b.id}/${i}`}
                        >
                            <span className="chap-num">{r ? <Icon name="check" /> : i + 1}</span>
                            <span className="chap-title">{c.title}</span>
                            <span className="tiny muted">{minsIn(c)} мин</span>
                            <Icon name="caret-right" className="muted" />
                        </a>
                    );
                })}
            </div>
        </Page>
    );
}
