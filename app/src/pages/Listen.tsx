// «Слушать»: YouTube-каналы для аудирования.
// #/listen — каналы и их свежие видео; #/listen/<videoId> — просмотр на сайте с английскими субтитрами
import type { CSSProperties } from 'react';
import type { PageProps } from '../app/App';
import { BackLink, Icon, Loading, Page, toast } from '../components/ui';
import { ChannelBanner } from '../components/ChannelArt';
import { ago, CHANNELS, findVideo, thumb, useFeed, type Channel, type Video } from '../lib/listen';
import { ding } from '../lib/sfx';
import { track, update, useProgress } from '../lib/store';
import './Listen.css';

const cv = (c: Channel) => ({ '--cc': c.color }) as CSSProperties;

export default function Listen({ params }: PageProps) {
  const vid = params[1];
  return vid ? <Watch vid={vid} /> : <Channels />;
}

function VideoCard({ v, ch, watched }: { v: Video; ch: Channel; watched: boolean }) {
  return (
    <a className="ls-vid" href={'#/listen/' + v.id}>
      <span className="ls-thumb">
        <img src={thumb(v.id)} alt="" loading="lazy" />
        {watched ? <b className="ls-done"><Icon name="check" /></b> : <span className="ls-play"><Icon name="play" fill /></span>}
      </span>
      <span className="ls-vtitle">{v.title}</span>
      <span className="tiny muted">{ch.short} · {ago(v.published)}</span>
    </a>
  );
}

function Channels() {
  const s = useProgress();
  const feed = useFeed();
  const w = s.watched || {};
  return (
    <Page className="ls-page">
      <BackLink href="#/library" label="Библиотека" />
      <h1 className="page-title">Слушать</h1>
      <p className="page-sub">Живая английская речь с YouTube — от медленных диалогов до подкаста для продвинутых. 20–30 минут в день с английскими субтитрами дают столько же, сколько урок: мозг привыкает к звучанию и связкам слов.</p>
      {CHANNELS.map((ch) => {
        const list = feed ? feed[ch.id] || [] : null;
        const seen = list ? list.filter((v) => w[v.id]).length : 0;
        return (
          <section key={ch.id} className="sec ls-ch" style={cv(ch)}>
            <div className="card ls-head">
              <ChannelBanner ch={ch} />
              <div className="ls-info">
                <div className="row ls-name"><b>{ch.name}</b><span className="pill">{ch.levels[0]}–{ch.levels[1]}</span><span className="pill">{ch.accent}</span></div>
                <p className="small">{ch.about}</p>
                <p className="small muted"><Icon name="lightbulb" /> {ch.how}</p>
                <a className="small ls-yt" href={'https://www.youtube.com/@' + ch.handle} target="_blank" rel="noopener">Канал на YouTube <Icon name="arrow-square-out" /></a>
              </div>
            </div>
            {list === null ? <Loading what="Загружаю видео…" /> : !list.length ? <p className="muted small">Не удалось загрузить видео — проверьте интернет.</p> : (
              <>
                {seen ? <p className="tiny muted ls-seen">Посмотрено {seen} из {list.length} последних</p> : null}
                <div className="carousel ls-row">{list.map((v) => <VideoCard key={v.id} v={v} ch={ch} watched={!!w[v.id]} />)}</div>
              </>
            )}
          </section>
        );
      })}
    </Page>
  );
}

function Watch({ vid }: { vid: string }) {
  const s = useProgress();
  const feed = useFeed();
  const found = findVideo(feed, vid);
  const ch = found ? found.ch : undefined;
  const done = !!(s.watched && s.watched[vid]);
  const ok = /^[\w-]{11}$/.test(vid);
  const mark = () => {
    if (done) return;
    update((x) => { x.watched = { ...(x.watched || {}), [vid]: Date.now() }; track(x, 'reads'); x.stats.videos = (x.stats.videos || 0) + 1; });
    ding('done');
    toast('Засчитано: +10 очков и шаг к цели дня');
  };
  const more = ch && feed ? (feed[ch.id] || []).filter((v) => v.id !== vid).slice(0, 8) : [];
  if (!ok) return <Page className="ls-page"><BackLink href="#/listen" label="Слушать" /><div className="card empty">Видео не найдено</div></Page>;
  return (
    <Page className="ls-page">
      <BackLink href="#/listen" label="Слушать" />
      {found ? <h1 className="page-title ls-wtitle">{found.v.title}</h1> : null}
      {ch ? <p className="page-sub">{ch.name} · {ch.levels[0]}–{ch.levels[1]} · {ch.accent} акцент</p> : null}
      <div className="ls-player">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${vid}?cc_load_policy=1&cc_lang_pref=en&hl=en&rel=0&modestbranding=1&playsinline=1`}
          title={found ? found.v.title : 'Видео'} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <div className="card stack ls-tips">
        <b><Icon name="headphones" /> Как смотреть с пользой</b>
        <ol className="small">
          <li>Включены английские субтитры — не переключайте на русские: мозг должен связывать звук с английскими словами.</li>
          <li>Не понятно — отмотайте 5–10 секунд назад и послушайте ещё раз. Можно замедлить до 0,75 в настройках плеера ⚙.</li>
          <li>Выпишите 3–5 фраз, которые хочется запомнить, и добавьте их в <a href="#/cards">словарь</a> (кнопка +).</li>
          {ch ? <li>{ch.how}</li> : null}
        </ol>
        <button type="button" className={'btn ' + (done ? '' : 'primary')} onClick={mark} disabled={done}>
          {done ? <><Icon name="check" /> Посмотрено</> : <><Icon name="check-circle" /> Посмотрел — засчитать</>}
        </button>
      </div>
      {more.length && ch ? (
        <section className="sec">
          <div className="sec-head"><h2>Ещё от {ch.short}</h2><a className="see-all" href="#/listen">Все каналы</a></div>
          <div className="carousel ls-row">{more.map((v) => <VideoCard key={v.id} v={v} ch={ch} watched={!!(s.watched && s.watched[v.id])} />)}</div>
        </section>
      ) : null}
      {!found && feed ? <p className="muted small">Видео не из списка каналов — смотрите как обычно.</p> : null}
    </Page>
  );
}
