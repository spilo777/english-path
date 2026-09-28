// Юниты A2 11–12: короткие ответы, Have you?, хвостики, so/neither, too/enough; nobody/anything/nowhere, no/none, every/all
COURSE.units.push(
  // ───────────────────────────── UNIT A2-11 ─────────────────────────────
  {
    id: 'a2-11', level: 'A2', num: 11, track: 'main',
    books: { red: [40, 41, 42, 91, 92] },
    title: 'Too, enough; so am I, neither do I; Have you? Don\'t you?',
    summary: 'Научимся отвечать коротко и живо: «Да, я тоже», «Я тоже нет», «Правда?», «…, да?» — и говорить «слишком» и «достаточно».',
    grammar: [
      {
        title: '1. Главная идея: английский отвечает эхом помощника',
        html: `
<div class="g-idea">По-русски в коротком ответе мы говорим «да», «тоже», «правда?» — и глагол не повторяем. По-английски почти любой короткий ответ строится на <b>глаголе-помощнике</b> из первой фразы: am, is, was, do, did, have, can, will… Английский как будто отвечает эхом.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>— Ты устал? — Да <span class="g-gap">_</span>.</p><p>— Я люблю кофе. — Я тоже.</p><p>— Я не люблю холод. — Я тоже нет.</p><p>— Я делаю игру. — Правда?</p><p>Хорошая серия, да?</p></div>
  <div><div class="g-h">English</div><p><span class="say">Are you tired? — Yes, I <b>am</b>.</span></p><p><span class="say">I love coffee. — So <b>do</b> I.</span></p><p><span class="say">I don't like cold weather. — Neither <b>do</b> I.</span></p><p><span class="say">I'm making a game. — <b>Are</b> you?</span></p><p><span class="say">It's a good episode, <b>isn't</b> it?</span></p></div>
</div>
<p>Помощники, которые работают в коротких ответах:</p>
<div class="g-formula"><span class="g-part g-v">am / is / are</span><span class="g-sep">·</span><span class="g-part g-v">was / were</span><span class="g-sep">·</span><span class="g-part g-v">do / does / did</span><span class="g-sep">·</span><span class="g-part g-v">have / has</span><span class="g-sep">·</span><span class="g-part g-v">can · will · would · might · must</span></div>
<div class="g-tip">Главный вопрос юнита: «Какой помощник был в первой фразе?» Нашли — вставьте его в ответ. Не нашли (обычный глагол в Present или Past Simple) — берите <b>do / does / did</b>.</div>
<div class="mini" data-q="Do you play chess? — Yes, I ___." data-o="do|play|am" data-a="0" data-why="В вопросе помощник do → в ответе тоже do."></div>`
      },
      {
        title: '2. Yes, I am. — She isn\'t, but he is',
        html: `
<div class="g-idea">Короткий ответ = <b>кто + помощник</b>. Остальное не повторяем — и так понятно.</div>
<table>
<tr><th>Вопрос</th><th>Да</th><th>Нет</th></tr>
<tr><td><span class="say">Are you ready?</span></td><td><span class="say">Yes, I am.</span></td><td><span class="say">No, I'm not.</span></td></tr>
<tr><td><span class="say">Is there a save point here?</span></td><td><span class="say">Yes, there is.</span></td><td><span class="say">No, there isn't.</span></td></tr>
<tr><td><span class="say">Have you finished the logo?</span></td><td><span class="say">Yes, I have.</span></td><td><span class="say">No, I haven't.</span></td></tr>
<tr><td><span class="say">Will Max be online?</span></td><td><span class="say">Yes, he will.</span></td><td><span class="say">No, he won't.</span></td></tr>
<tr><td><span class="say">Did you like the finale?</span></td><td><span class="say">Yes, I did.</span></td><td><span class="say">No, I didn't.</span></td></tr>
</table>
<p>Так же мы «обрываем» вторую половину фразы после <b>but</b>:</p>
<ul class="g-list">
<li><span class="say">Kate isn't tired, but Max is.</span> — Кейт не устала, а Макс устал.</li>
<li><span class="say">I don't like horror, but my sister does.</span> — Я не люблю ужасы, а сестра любит.</li>
<li><span class="say">Tom has got a PS5, but I haven't.</span> — У Тома есть PS5, а у меня нет.</li>
<li><span class="say">I didn't enjoy the party, but Anna did.</span> — Мне вечеринка не понравилась, а Анне понравилась.</li>
<li><span class="say">I was busy, but I'm not now.</span> — Я был занят, но сейчас нет.</li>
<li><span class="say">Will Anna come to the stream? — She might.</span> — Анна придёт на стрим? — Может быть.</li>
<li><span class="say">Are you leaving? — Yes, I'm afraid I must.</span> — Ты уходишь? — Да, боюсь, надо.</li>
</ul>
<div class="g-steps"><div class="g-h">Какой помощник взять</div><ol>
<li>В первой фразе есть am/is/are, was/were, have, can, will, might, must → берём <b>его же</b>.</li>
<li>Обычный глагол сейчас (like, work, play) → <b>do / does</b>.</li>
<li>Обычный глагол в прошлом (liked, went, won) → <b>did</b>.</li>
</ol></div>
<p>В конце фразы помощник звучит <b>полностью</b>: короткие I'm, he's, we've там нельзя. А отрицательные isn't, haven't, can't — можно.</p>
<div class="g-bad">Max isn't tired, but I'm. · Are you busy? — Yes, I'm.</div>
<div class="g-good">Max isn't tired, but I <b>am</b>. · Yes, I <b>am</b>.</div>
<div class="g-bad">Do you like pizza? — Yes, I like.</div>
<div class="g-good">Do you like pizza? — Yes, I <b>do</b>.</div>
<div class="mini" data-q="I don't play Dota, but my brother ___." data-o="don't|does|is" data-a="1" data-why="Обычный глагол play в настоящем, brother — он → does."></div>
<div class="mini" data-q="Are you hungry? — Yes, I ___." data-o="'m|am|do" data-a="1" data-why="В конце ответа помощник полный: I am, а не I'm."></div>`
      },
      {
        title: '3. Oh, have you? — «Правда? Серьёзно?»',
        html: `
<div class="g-idea">Когда нам что-то рассказывают, по-русски мы говорим «Правда?», «Да ну?». По-английски чаще отвечают мини-вопросом: <b>помощник + кто</b>. Это показывает, что вы слушаете и вам интересно (или вы удивлены).</div>
<ul class="g-list">
<li><span class="say">I'm learning Japanese. — Are you? Why?</span> — Я учу японский. — Правда? Зачем?</li>
<li><span class="say">I was at the concert yesterday. — Were you? How was it?</span> — Я вчера был на концерте. — Да? И как?</li>
<li><span class="say">Anna has bought a new laptop. — Has she? Which one?</span> — Анна купила новый ноутбук. — Да? Какой?</li>
<li><span class="say">There's a bug in the new build. — Is there? Where?</span> — В новой сборке баг. — Да? Где?</li>
<li><span class="say">It's raining again. — Is it? Oh no.</span> — Опять дождь. — Правда? О нет.</li>
</ul>
<p>Фраза с <b>not</b> → мини-вопрос тоже с not:</p>
<ul class="g-list">
<li><span class="say">Max can't drive. — Can't he? I didn't know that.</span> — Макс не умеет водить. — Да? Я не знал.</li>
<li><span class="say">I'm not hungry. — Aren't you? I am.</span> — Я не голоден. — Нет? А я да.</li>
</ul>
<p>Обычный глагол → <b>do / does / did</b>:</p>
<ul class="g-list">
<li><span class="say">I play the guitar. — Do you?</span> — Я играю на гитаре. — Правда?</li>
<li><span class="say">Kate works at night. — Does she?</span> — Кейт работает по ночам. — Серьёзно?</li>
<li><span class="say">We won the tournament! — Did you? Cool!</span> — Мы выиграли турнир! — Правда? Круто!</li>
<li><span class="say">Tom doesn't eat meat. — Doesn't he?</span> — Том не ест мясо. — Да ну?</li>
</ul>
<div class="g-bad">I watched the finale last night. — Were you?</div>
<div class="g-good">I watched the finale last night. — <b>Did</b> you? <span class="muted">— watched: обычный глагол в прошлом → did</span></div>
<div class="g-tip">Это как лайк в чате: коротко, но собеседник видит, что вам не всё равно. Голос идёт вверх — интерес. Можно добавить <span class="say">Really?</span>: <span class="say">Did you? Really?</span></div>
<div class="mini" data-q="Kate speaks three languages. — ___ Which ones?" data-o="Is she?|Does she?|Do she?" data-a="1" data-why="speaks — обычный глагол, Kate — она → Does she?"></div>`
      },
      {
        title: '4. …, isn\'t it? — хвостики «да? правда?»',
        html: `
<div class="g-idea">Русское «…, да?», «…, правда?», «…, не так ли?» по-английски — маленький хвостик в конце: <b>помощник + местоимение</b>. Правило одно: <b>плюс → хвостик с минусом, минус → хвостик с плюсом</b>.</div>
<div class="g-formula"><span class="g-part">It's a great game,</span><span class="g-plus">+</span><span class="g-part g-v">isn't it?</span><span class="g-sep">·</span><span class="g-part">You aren't busy,</span><span class="g-plus">+</span><span class="g-part g-v">are you?</span></div>
<table>
<tr><th>Фраза с плюсом</th><th>Хвостик с минусом</th></tr>
<tr><td>You've played it,</td><td><span class="say">You've played it, haven't you?</span></td></tr>
<tr><td>Max was at the party,</td><td><span class="say">Max was at the party, wasn't he?</span></td></tr>
<tr><td>You speak German,</td><td><span class="say">You speak German, don't you?</span></td></tr>
<tr><td>You'll help me,</td><td><span class="say">You'll help me, won't you?</span></td></tr>
</table>
<table>
<tr><th>Фраза с минусом</th><th>Хвостик с плюсом</th></tr>
<tr><td>Tom can't come,</td><td><span class="say">Tom can't come, can he?</span></td></tr>
<tr><td>They didn't win,</td><td><span class="say">They didn't win, did they?</span></td></tr>
<tr><td>Kate doesn't live here,</td><td><span class="say">Kate doesn't live here, does she?</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как сделать хвостик</div><ol>
<li>Найдите помощника. Нет его — берите do / does / did.</li>
<li>Поменяйте знак: плюс → минус, минус → плюс.</li>
<li>Вместо имени или вещи — местоимение: Max → <b>he</b>, the game → <b>it</b>, your friends → <b>they</b>.</li>
</ol></div>
<div class="g-bad">You like this series, isn't it?</div>
<div class="g-good">You like this series, <b>don't you</b>? <span class="muted">— «не так ли» не всегда isn't it: помощник берём из фразы</span></div>
<div class="g-bad">Max is at home, isn't Max?</div>
<div class="g-good">Max is at home, isn't <b>he</b>?</div>
<div class="g-tip">Особый случай: <span class="say">I'm late, aren't I?</span> — «Я опоздал, да?» (не «amn't I»).</div>
<div class="mini" data-q="The last level was hard, ___?" data-o="wasn't it|isn't it|was it" data-a="0" data-why="Плюс в прошлом (was) → хвостик wasn't it."></div>
<div class="mini" data-q="You don't play Fortnite, ___?" data-o="don't you|do you|are you" data-a="1" data-why="Минус (don't) → хвостик с плюсом: do you?"></div>`
      },
      {
        title: '5. too и either; So am I, Neither do I',
        html: `
<div class="g-idea">«Тоже» в английском бывает двух видов. После плюса — <b>too</b>, после минуса — <b>either</b>. Оба стоят в конце фразы.</div>
<table>
<tr><th>После плюса: too</th><th>После минуса: either</th></tr>
<tr><td><span class="say">I'm tired. — I'm tired too.</span></td><td><span class="say">I'm not ready. — I'm not ready either.</span></td></tr>
<tr><td><span class="say">I liked the film. — I liked it too.</span></td><td><span class="say">I can't cook. — I can't either.</span></td></tr>
<tr><td><span class="say">Anna is a designer. Her brother is a designer too.</span></td><td><span class="say">Max doesn't watch TV. He doesn't read the news either.</span></td></tr>
</table>
<p>Короче и живее: <b>So / Neither + помощник + кто</b>.</p>
<div class="g-formula"><span class="g-part g-v">So</span><span class="g-plus">+</span><span class="g-part">помощник</span><span class="g-plus">+</span><span class="g-part">I</span> = я тоже <span class="g-sep">·</span> <span class="g-part g-v">Neither / Nor</span><span class="g-plus">+</span><span class="g-part">помощник</span><span class="g-plus">+</span><span class="g-part">I</span> = я тоже нет</div>
<table>
<tr><th>Фраза</th><th>Я тоже</th><th>Я тоже нет</th></tr>
<tr><td>I'm working. / I'm not ready.</td><td><span class="say">So am I.</span></td><td><span class="say">Neither am I.</span></td></tr>
<tr><td>I play Minecraft. / I don't play it.</td><td><span class="say">So do I.</span></td><td><span class="say">Neither do I.</span></td></tr>
<tr><td>I slept badly. / I didn't sleep.</td><td><span class="say">So did I.</span></td><td><span class="say">Neither did I.</span></td></tr>
<tr><td>I've finished. / I haven't seen it.</td><td><span class="say">So have I.</span></td><td><span class="say">Neither have I.</span></td></tr>
<tr><td>I'd like pizza. / I won't be there.</td><td><span class="say">So would I.</span></td><td><span class="say">Neither will I.</span></td></tr>
</table>
<p>Можно не только про себя: <span class="say">Kate can't draw. — Neither can Tom.</span> — Кейт не умеет рисовать. — Том тоже. <span class="say">I was late today. — So was Max.</span> — Я сегодня опоздал. — Макс тоже.</p>
<p><b>Nor</b> = neither: <span class="say">I'm not married. — Nor am I.</span> В чате и в разговоре часто просто <span class="say">Me too.</span> / <span class="say">Me neither.</span></p>
<div class="g-bad">So I am. · Neither I have.</div>
<div class="g-good">So <b>am I</b>. · Neither <b>have I</b>. <span class="muted">— помощник всегда перед «кто»</span></div>
<div class="g-bad">I don't like spiders too. · Neither don't I.</div>
<div class="g-good">I don't like spiders <b>either</b>. · Neither <b>do</b> I. <span class="muted">— в neither уже есть «не», второе not не нужно</span></div>
<div class="g-tip"><b>never</b> — это тоже минус: <span class="say">I never go to the gym. — Neither do I.</span></div>
<div class="mini" data-q="I've never been to Japan. — ___" data-o="So have I.|Neither have I.|Neither I have." data-a="1" data-why="never — отрицание, помощник have → Neither have I."></div>
<div class="mini" data-q="I'm hungry. — ___" data-o="So am I.|So I am.|Neither am I." data-a="0" data-why="Плюс, помощник am, порядок So + am + I."></div>`
      },
      {
        title: '6. enough — «достаточно»',
        html: `
<div class="g-idea"><b>enough</b> = достаточно. Хитрость только в месте: <b>перед</b> существительным, но <b>после</b> прилагательного или наречия.</div>
<div class="g-formula"><span class="g-part g-v">enough</span><span class="g-plus">+</span><span class="g-part">money / time / players</span><span class="g-sep">·</span><span class="g-part">fast / good / old</span><span class="g-plus">+</span><span class="g-part g-v">enough</span></div>
<table>
<tr><th>enough + предмет</th><th>признак + enough</th></tr>
<tr><td><span class="say">We don't have enough players.</span></td><td><span class="say">This PC isn't fast enough.</span></td></tr>
<tr><td><span class="say">Is there enough space on your disk?</span></td><td><span class="say">My English isn't good enough yet.</span></td></tr>
<tr><td><span class="say">I've got enough time today.</span></td><td><span class="say">You didn't speak loud enough.</span></td></tr>
</table>
<p>enough может стоять и <b>один</b>, без слова после:</p>
<ul class="g-list">
<li><span class="say">More pizza? — No, thanks. I've had enough.</span> — Ещё пиццы? — Нет, спасибо, я наелся.</li>
<li><span class="say">I've got some money, but not enough.</span> — Деньги есть, но не хватает.</li>
<li><span class="say">You don't sleep enough.</span> — Ты мало спишь (недостаточно).</li>
</ul>
<p>Для кого / для чего и что сделать:</p>
<ul class="g-list">
<li><span class="say">This T-shirt isn't big enough for me.</span> — enough <b>for</b> + кто/что</li>
<li><span class="say">I haven't got enough money for a new GPU.</span></li>
<li><span class="say">Is Max old enough to play this game?</span> — enough <b>to</b> + глагол</li>
<li><span class="say">The text isn't big enough for me to read.</span> — for + кто + to + глагол</li>
</ul>
<div class="g-bad">This laptop isn't enough fast. · We have money enough.</div>
<div class="g-good">This laptop isn't <b>fast enough</b>. · We have <b>enough money</b>.</div>
<div class="g-bad">My English is good enough for watch series.</div>
<div class="g-good">My English is good enough <b>to watch</b> series.</div>
<div class="g-tip">С признаком enough «догоняет» слово: сначала какой (fast), потом «достаточно». С предметом — наоборот, enough бежит впереди.</div>
<div class="mini" data-q="My laptop isn't ___ for this game." data-o="enough powerful|powerful enough|enough power" data-a="1" data-why="Прилагательное + enough: powerful enough."></div>
<div class="mini" data-q="We don't have ___ to finish today." data-o="time enough|enough time|enough of time" data-a="1" data-why="enough стоит перед существительным: enough time."></div>`
      },
      {
        title: '7. too — «слишком», too much, too many',
        html: `
<div class="g-idea"><b>too</b> перед прилагательным = <b>слишком</b>, то есть больше, чем нужно, и это проблема. Это не «очень»! <b>very</b> — просто очень, <b>too</b> — уже мешает.</div>
<ul class="g-list">
<li><span class="say">The music is too loud. Can you turn it down?</span> — Музыка слишком громкая.</li>
<li><span class="say">I can't play now. I'm too tired.</span> — Не могу играть, я слишком устал.</li>
<li><span class="say">You're driving too fast!</span> — Ты едешь слишком быстро!</li>
<li><span class="say">You work too hard.</span> — Ты слишком много работаешь.</li>
</ul>
<div class="g-bad">This game is too good! I love it.</div>
<div class="g-good">This game is <b>really</b> good! <span class="muted">— хорошее «очень» → very / really; too — когда плохо</span></div>
<p><b>too much</b> — с тем, что не считают, <b>too many</b> — с тем, что считают (как much / many):</p>
<ul class="g-list">
<li><span class="say">There's too much sugar in this coffee.</span> — Слишком много сахара.</li>
<li><span class="say">I spend too much time on my phone.</span> — Я провожу слишком много времени в телефоне.</li>
<li><span class="say">There are too many ads in this app.</span> — Слишком много рекламы.</li>
<li><span class="say">I ate too much.</span> — Я переел. <span class="muted">(too much без слова после)</span></li>
</ul>
<p><b>too</b> и <b>not enough</b> — две стороны одной проблемы:</p>
<table>
<tr><th>too…</th><th>= not … enough</th></tr>
<tr><td><span class="say">The chair is too low.</span></td><td><span class="say">It isn't high enough.</span></td></tr>
<tr><td><span class="say">The jacket is too small.</span></td><td><span class="say">It isn't big enough.</span></td></tr>
<tr><td><span class="say">The sound is too quiet.</span></td><td><span class="say">It isn't loud enough.</span></td></tr>
</table>
<p>Для кого и что сделать — так же, как с enough:</p>
<ul class="g-list">
<li><span class="say">These shoes are too tight for me.</span> — too … <b>for</b> кто</li>
<li><span class="say">I'm too tired to go out.</span> — too … <b>to</b> + глагол</li>
<li><span class="say">He speaks too fast for me to understand.</span> — too … for кто to …</li>
</ul>
<div class="g-bad">There are too much people here. · I'm too tired for go out.</div>
<div class="g-good">There are too <b>many</b> people here. · I'm too tired <b>to go</b> out.</div>
<div class="g-tip">Место решает! <span class="say">I'm tired too.</span> (в конце) — «я тоже устал». <span class="say">I'm too tired.</span> (перед прилагательным) — «я слишком устал».</div>
<div class="mini" data-q="There are ___ bugs in this build." data-o="too much|too many|too" data-a="1" data-why="bugs можно посчитать → too many."></div>
<div class="mini" data-q="It's ___ cold to play football outside." data-o="too|very|enough" data-a="0" data-why="Холод мешает играть (to play) → too."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">Do you like sushi? — Yes, I like.</div><div class="g-good">Yes, I <b>do</b>.</div>
<div class="g-bad">She isn't ready, but I'm.</div><div class="g-good">She isn't ready, but I <b>am</b>.</div>
<div class="g-bad">We won! — Were you?</div><div class="g-good">We won! — <b>Did</b> you?</div>
<div class="g-bad">You work from home, isn't it?</div><div class="g-good">You work from home, <b>don't you</b>?</div>
<div class="g-bad">I'm cold. — So I am.</div><div class="g-good">So <b>am I</b>.</div>
<div class="g-bad">I can't swim. — Neither can't I. / I can't too.</div><div class="g-good">Neither <b>can</b> I. / I can't <b>either</b>.</div>
<div class="g-bad">It isn't enough big.</div><div class="g-good">It isn't <b>big enough</b>.</div>
<div class="g-bad">This series is too interesting!</div><div class="g-good">This series is <b>very</b> interesting!</div>
<div class="g-bad">There is too many noise.</div><div class="g-good">There is too <b>much</b> noise.</div>
<div class="g-bad">She is too young for drive.</div><div class="g-good">She is too young <b>to drive</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Короткий ответ = <b>помощник из первой фразы</b>: Yes, I am · Did you? · …, isn't it? · So do I · Neither can I. А ещё: <b>enough money</b>, но <b>fast enough</b>; <b>too</b> = слишком (проблема), не «очень».</div>`
      }
    ],
    words: [
      ["enough", "достаточно", "We don't have enough players.", "У нас не хватает игроков."],
      ["too", "слишком; тоже (в конце фразы)", "It's too late to call him.", "Слишком поздно ему звонить."],
      ["either", "тоже (после отрицания)", "I can't draw either.", "Я тоже не умею рисовать."],
      ["neither", "тоже не (Neither do I)", "I don't like spiders. — Neither do I.", "Я не люблю пауков. — Я тоже."],
      ["nor", "и не, тоже не", "I'm not ready. — Nor am I.", "Я не готов. — Я тоже."],
      ["me neither", "я тоже нет (разг.)", "I haven't seen it. — Me neither.", "Я это не смотрел. — Я тоже."],
      ["really", "правда, действительно; очень", "Did you? Really?", "Правда? Серьёзно?"],
      ["agree", "соглашаться", "I agree with you.", "Я с тобой согласен."],
      ["surprised", "удивлённый", "I was surprised — she didn't know!", "Я удивился — она не знала!"],
      ["actually", "вообще-то, на самом деле", "Actually, I haven't played it.", "Вообще-то я в неё не играл."],
      ["exactly", "точно, именно", "Exactly! That's what I think.", "Точно! Я так и думаю."],
      ["loud", "громкий; громко", "The music is too loud.", "Музыка слишком громкая."],
      ["noisy", "шумный", "This café is too noisy for work.", "Это кафе слишком шумное для работы."],
      ["crowded", "переполненный, людный", "The metro was too crowded.", "В метро было слишком много людей."],
      ["heavy", "тяжёлый", "The box is too heavy for me.", "Коробка слишком тяжёлая для меня."],
      ["weak", "слабый", "My character is too weak for this boss.", "Мой персонаж слишком слаб для этого босса."],
      ["strong", "сильный, крепкий", "Is this coffee strong enough?", "Кофе достаточно крепкий?"],
      ["powerful", "мощный", "My PC isn't powerful enough.", "Мой компьютер недостаточно мощный."],
      ["spicy", "острый (о еде)", "This soup is too spicy for me.", "Этот суп для меня слишком острый."],
      ["sweet", "сладкий; милый", "The cake isn't sweet enough.", "Торт недостаточно сладкий."],
      ["space", "место, пространство; космос", "There isn't enough space on my disk.", "На диске не хватает места."],
      ["reach", "дотянуться, достать; добраться", "I can't reach the top shelf.", "Я не могу дотянуться до верхней полки."],
      ["fit", "подходить по размеру, влезать", "These jeans don't fit me.", "Эти джинсы мне не подходят."],
      ["afford", "позволить себе (по деньгам)", "I can't afford a new laptop.", "Я не могу позволить себе новый ноутбук."],
      ["spend — spent", "тратить; проводить (время) — потратил", "I spent too much money last month.", "Я потратил слишком много денег в прошлом месяце."],
      ["tight", "тесный, узкий", "These shoes are too tight.", "Эти ботинки слишком тесные."],
      ["bright", "яркий", "The screen is too bright at night.", "Ночью экран слишком яркий."],
      ["sure", "уверенный", "Will she come? — I'm sure she will.", "Она придёт? — Уверен, что да."],
      ["a bit", "немного, чуть-чуть", "It's a bit too expensive.", "Это немного дороговато."],
      ["patient", "терпеливый", "I'm not patient enough for puzzle games.", "Мне не хватает терпения для головоломок."]
    ],
    texts: [
      {
        id: 't-a2-11-1', title: 'Game night on Friday', level: 'A2',
        text: `Lena: You're coming to the game night on Friday, aren't you?
Max: I am, but Tom isn't. He has to work late.
Lena: Does he? That's a pity. Is Anna coming?
Max: She might. She hasn't decided yet.
Lena: I've bought a new board game. It's called Space Traders.
Max: Have you? I've never played it.
Lena: Neither have I. But the reviews are great.
Max: I love strategy games.
Lena: So do I. But the rules are always long, aren't they?
Max: Yes, they are. Last time I didn't read them, and I lost in twenty minutes!
Lena: Did you? Poor Max. OK, what about food? I don't want pizza again.
Max: Neither do I. Let's order sushi.
Lena: Good idea. Oh, and my flat isn't very big. There isn't enough space for eight people.
Max: Is there enough space for six?
Lena: Yes, there is. So we can invite two more people.
Max: Great. I'll ask Kate. She can't come on Saturdays, but she can on Fridays.
Lena: Can she? Perfect. You'll bring your speaker, won't you?
Max: Of course I will. But it's quite loud.
Lena: It isn't too loud. It's fine. See you on Friday!`,
        questions: [
          { q: 'Why isn\'t Tom coming?', o: ['He has to work late', 'He is ill', 'He doesn\'t like games'], a: 0 },
          { q: 'What food do they want to order?', o: ['Pizza', 'Sushi', 'Burgers'], a: 1 },
          { q: 'How many people can come to Lena\'s flat?', o: ['Eight', 'Six', 'Four'], a: 1 }
        ]
      },
      {
        id: 't-a2-11-2', title: 'Too big, too small, just right', level: 'A2',
        text: `Last month I decided to buy a new chair for my home office. I work as a designer, and I sit at my desk for eight or nine hours a day, so I really need a good chair.
The first chair in the shop was too big. My feet didn't reach the floor! The second one was nice, but it wasn't strong enough — it made a strange noise every time I moved. The third chair looked perfect, but it was too expensive. I couldn't afford it.
Then I looked online. There were too many chairs and too many reviews. I spent two evenings on them, and in the end I was too tired to choose anything.
My friend Anna said, "You're too careful. Come to my office and try my chair." So I did. It was comfortable, and it was cheap enough for me. I ordered the same one.
It came last week. The box was very heavy — too heavy for me to carry alone, so my neighbour helped me. Now my back doesn't hurt, and I can work long enough to finish my projects on time. And the chair is good enough for long gaming nights too!`,
        questions: [
          { q: 'Why didn\'t he buy the third chair?', o: ['It was too big', 'It was too expensive', 'It wasn\'t strong enough'], a: 1 },
          { q: 'Where did he try the chair that he bought?', o: ['In a shop', 'In Anna\'s office', 'At home'], a: 1 },
          { q: 'Who helped him with the box?', o: ['Anna', 'His neighbour', 'His boss'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I don\'t like horror films, but my brother ___.', o: ['does', 'is', 'likes'], a: 0, why: 'Не повторяем глагол: обычный глагол в настоящем, brother — он → does.' },
      { t: 'choice', q: 'Is Kate at work today? — No, she ___.', o: ['doesn\'t', 'isn\'t', 'not'], a: 1, why: 'В вопросе помощник is → в ответе isn\'t.' },
      { t: 'choice', q: 'I\'ve just finished the level. — ___ Was it hard?', o: ['Have you?', 'Did you?', 'Are you?'], a: 0, why: 'В фразе have finished → реакция тем же помощником: Have you?' },
      { t: 'choice', q: 'Tom can\'t swim. — ___ I didn\'t know that.', o: ['Can he?', 'Can\'t he?', 'Doesn\'t he?'], a: 1, why: 'Фраза с минусом (can\'t) → реакция тоже с минусом: Can\'t he?' },
      { t: 'choice', q: 'You live near the office, ___?', o: ['don\'t you', 'aren\'t you', 'do you'], a: 0, why: 'live — обычный глагол, плюс → хвостик с минусом don\'t you.' },
      { t: 'choice', q: 'I\'m really tired. — ___', o: ['So do I.', 'So am I.', 'Neither am I.'], a: 1, why: 'Плюс, помощник am → So am I.' },
      { t: 'choice', q: 'I didn\'t watch the new episode. — ___', o: ['Neither did I.', 'So did I.', 'Neither didn\'t I.'], a: 0, why: 'Минус в прошлом → Neither did I, второе not не нужно.' },
      { t: 'choice', q: 'This boss is ___ hard for me. I can\'t beat him.', o: ['very', 'too', 'enough'], a: 1, why: 'Сложность мешает победить → too (слишком).' },
      { t: 'gap', q: 'I don\'t like spicy food. — I don\'t like it ___. (тоже)', a: ['either'], why: '«Тоже» после отрицания → either.' },
      { t: 'gap', q: 'My laptop isn\'t ___ for this game. (powerful + enough)', a: ['powerful enough'], why: 'Прилагательное + enough.' },
      { t: 'gap', q: 'We haven\'t got ___ to buy a new sofa. (money + enough)', a: ['enough money'], why: 'enough стоит перед существительным.' },
      { t: 'gap', q: 'There are ___ people in this chat. I can\'t read everything. (слишком много)', a: ['too many'], why: 'people можно посчитать → too many.' },
      { t: 'gap', q: 'Anna isn\'t coming, ___ she? (хвостик)', a: ['is'], why: 'Фраза с минусом (isn\'t) → хвостик с плюсом: is she?' },
      { t: 'gap', q: 'I was at the concert last night. — ___ you? How was it?', a: ['Were'], why: 'Реакция на was с you → Were you?' },
      { t: 'order', a: 'The music is too loud for me', ru: 'Музыка слишком громкая для меня' },
      { t: 'order', a: 'I am too tired to play tonight', ru: 'Я слишком устал, чтобы играть сегодня вечером' },
      { t: 'tr', q: 'Мне тоже нравится эта игра.', a: ['i like this game too', 'i also like this game', 'i like this game as well'] },
      { t: 'tr', q: 'У нас недостаточно времени.', a: ['we don\'t have enough time', 'we do not have enough time', 'we haven\'t got enough time', 'we have not got enough time', 'we haven\'t enough time'] },
      { t: 'listen', say: 'It isn\'t big enough, is it?', a: ['it isn\'t big enough is it', 'it is not big enough is it'] }
    ],
    test: [
      { t: 'choice', q: 'Kate has been to Japan, but I ___.', o: ['haven\'t', 'didn\'t', 'don\'t'], a: 0, why: 'В первой части has been (Present Perfect) → помощник have: I haven\'t.' },
      { t: 'choice', q: 'Will you come to the meeting tomorrow? — I ___. I\'m not sure yet.', o: ['might', 'might to', 'am might'], a: 0, why: 'Короткий ответ — только помощник: I might (без to и без am).' },
      { t: 'choice', q: 'Max doesn\'t eat meat. — ___ Does he eat fish?', o: ['Does he?', 'Doesn\'t he?', 'Isn\'t he?'], a: 1, why: 'Фраза с doesn\'t → реакция Doesn\'t he?' },
      { t: 'gap', q: 'You\'ll help me with the logo, ___ you?', a: ['won\'t'], why: 'Плюс с will → хвостик с минусом: won\'t you?' },
      { t: 'gap', q: 'They didn\'t win the match, ___ they?', a: ['did'], why: 'Минус с didn\'t → хвостик с плюсом: did they?' },
      { t: 'choice', q: 'I never drink coffee after six. — ___', o: ['So do I.', 'Neither do I.', 'Neither don\'t I.'], a: 1, why: 'never — отрицание, поэтому Neither do I.' },
      { t: 'choice', q: 'I\'d like to visit Iceland. — ___', o: ['So do I.', 'So would I.', 'So am I.'], a: 1, why: 'I\'d = I would → So would I.' },
      { t: 'gap', q: 'I can\'t draw. — Neither ___ Anna.', a: ['can'], why: 'Помощник из первой фразы — can: Neither can Anna.' },
      { t: 'choice', q: 'She speaks ___ for me to understand.', o: ['too fast', 'fast enough', 'too much fast'], a: 0, why: 'Скорость мешает понять → too fast for me to understand.' },
      { t: 'choice', q: 'Is your English ___ to watch series without subtitles?', o: ['enough good', 'good enough', 'too good'], a: 1, why: 'Прилагательное + enough + to + глагол.' },
      { t: 'gap', q: 'No more cake, thanks. I\'ve had ___.', a: ['enough'], why: 'enough без существительного = «достаточно, хватит».' },
      { t: 'gap', q: 'You spend ___ time on your phone. (слишком много)', a: ['too much'], why: 'time нельзя посчитать → too much.' }
    ]
  },

  // ───────────────────────────── UNIT A2-12 ─────────────────────────────
  {
    id: 'a2-12', level: 'A2', num: 12, track: 'main',
    books: { red: [77, 78, 79, 80] },
    title: 'Nobody, anything, nowhere — no, none, every, all',
    summary: 'Научимся говорить «никто ничего не сказал», «где-то рядом», «нечего делать», «все знают» и «весь день» — без двойных отрицаний.',
    grammar: [
      {
        title: '1. Главная идея: в английском одно «не» на предложение',
        html: `
<div class="g-idea">По-русски отрицаний может быть сколько угодно: «<b>Никто никогда ничего не</b> сказал». По-английски отрицание в предложении <b>одно</b>. Либо <b>not</b> у глагола + any-слова, либо no-слово + глагол без not.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я <b>ничего не</b> знаю.</p><p><b>Никто не</b> пришёл.</p><p>У нас <b>нет никаких</b> проблем.</p><p>Мне <b>некуда</b> идти.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I don't know <b>anything</b>.</span> = <span class="say">I know <b>nothing</b>.</span></p><p><span class="say"><b>Nobody</b> came.</span></p><p><span class="say">We have <b>no</b> problems.</span></p><p><span class="say">I have <b>nowhere</b> to go.</span></p></div>
</div>
<div class="g-formula"><span class="g-part g-v">not</span><span class="g-plus">+</span><span class="g-part">any…</span><span class="g-sep">·</span><span class="g-part">или</span><span class="g-sep">·</span><span class="g-part">глагол без not</span><span class="g-plus">+</span><span class="g-part g-v">no…</span></div>
<div class="g-bad">I don't know nothing.</div>
<div class="g-good">I don't know <b>anything</b>. / I know <b>nothing</b>.</div>
<div class="g-tip">Считайте «минусы»: в английском предложении должен быть ровно <b>один</b> минус. not + nothing = два минуса — перебор.</div>
<div class="mini" data-q="Он ничего не сказал." data-o="He didn't say nothing.|He didn't say anything.|He said anything." data-a="1" data-why="Одно отрицание: didn't + anything (или said nothing)."></div>`
      },
      {
        title: '2. not any, no и none',
        html: `
<div class="g-idea"><b>no</b> + существительное = <b>not any</b> (или not a). Смысл одинаковый — «нет никаких, ни одного».</div>
<table>
<tr><th>not … any / not a</th><th>= no …</th></tr>
<tr><td><span class="say">There aren't any bugs.</span></td><td><span class="say">There are no bugs.</span></td></tr>
<tr><td><span class="say">We don't have any milk.</span></td><td><span class="say">We have no milk.</span></td></tr>
<tr><td><span class="say">There isn't a lift in this building.</span></td><td><span class="say">There's no lift in this building.</span></td></tr>
<tr><td><span class="say">Kate and Tom don't have any kids.</span></td><td><span class="say">Kate and Tom have no kids.</span></td></tr>
</table>
<p><b>no</b> особенно часто после <b>have</b> и <b>there is / there are</b>: <span class="say">I have no idea.</span> — Понятия не имею. <span class="say">There's no time!</span> — Нет времени!</p>
<p><b>none</b> — это «ни одного, нисколько», но <b>без</b> существительного после. Чаще всего — как короткий ответ на How much? / How many?</p>
<ul class="g-list">
<li><span class="say">How much money have you got? — None.</span> — Сколько у тебя денег? — Нисколько.</li>
<li><span class="say">How many mistakes did you find? — None.</span> — Сколько ошибок нашёл? — Ни одной.</li>
<li><span class="say">I wanted some cookies, but there were none.</span> — Я хотел печенья, но его не было.</li>
</ul>
<p><b>none</b> и <b>no-one</b> — не одно и то же:</p>
<table>
<tr><th>Вопрос</th><th>Ответ «ноль»</th></tr>
<tr><td><span class="say">How many people came?</span> — сколько?</td><td><span class="say">None.</span></td></tr>
<tr><td><span class="say">Who came?</span> — кто?</td><td><span class="say">No-one.</span> / <span class="say">Nobody.</span></td></tr>
</table>
<div class="g-bad">We don't have no coffee. · I have none money.</div>
<div class="g-good">We don't have <b>any</b> coffee. / We have <b>no</b> coffee. · I have <b>no</b> money.</div>
<div class="mini" data-q="Everything was OK. There were ___ problems." data-o="any|no|none" data-a="1" data-why="Глагол без not + существительное → no problems."></div>
<div class="mini" data-q="How many tickets are left? — ___." data-o="No|None|Nobody" data-a="1" data-why="Ответ на How many без существительного → None."></div>`
      },
      {
        title: '3. nobody, nothing — anybody, anything',
        html: `
<div class="g-idea">Для людей — слова на <b>-body / -one</b>, для вещей — на <b>-thing</b>. -body и -one значат одно и то же: anybody = anyone, nobody = no-one.</div>
<table>
<tr><th></th><th>not + any…</th><th>= no…</th></tr>
<tr><td>люди</td><td><span class="say">There isn't anybody here.</span></td><td><span class="say">There's nobody here.</span></td></tr>
<tr><td>люди</td><td><span class="say">I don't know anyone in this city.</span></td><td><span class="say">I know no-one in this city.</span></td></tr>
<tr><td>вещи</td><td><span class="say">She didn't say anything.</span></td><td><span class="say">She said nothing.</span></td></tr>
<tr><td>вещи</td><td><span class="say">There isn't anything in the fridge.</span></td><td><span class="say">There's nothing in the fridge.</span></td></tr>
</table>
<p><b>nobody / nothing</b> можно поставить в <b>начало</b> фразы или ответить одним словом. <b>any-</b> в значении «никто / ничего» так не работает:</p>
<ul class="g-list">
<li><span class="say">Nobody lives in that house.</span> — В том доме никто не живёт.</li>
<li><span class="say">Nothing happened.</span> — Ничего не случилось.</li>
<li><span class="say">Who did you talk to? — Nobody.</span> — С кем ты говорил? — Ни с кем.</li>
<li><span class="say">What's in the box? — Nothing.</span> — Что в коробке? — Ничего.</li>
</ul>
<div class="g-steps"><div class="g-h">Как выбрать</div><ol>
<li>У глагола есть <b>not</b> (don't, didn't, isn't, can't) → <b>anybody / anything</b>.</li>
<li>Глагол без not → <b>nobody / nothing</b>.</li>
<li>Слово стоит первым или это ответ из одного слова → <b>nobody / nothing</b>.</li>
</ol></div>
<p>После <b>nobody</b> глагол как после «он»: <span class="say">Nobody knows.</span> — Никто не знает. <span class="say">Nobody has called.</span> — Никто не звонил.</p>
<div class="g-bad">Don't tell nobody! · Anybody came.</div>
<div class="g-good">Don't tell <b>anybody</b>! · <b>Nobody</b> came.</div>
<div class="mini" data-q="I can't remember ___." data-o="nothing|anything|nobody" data-a="1" data-why="У глагола уже есть not (can't) → anything."></div>
<div class="mini" data-q="___ answered the phone." data-o="Anybody|Nobody|Nothing" data-a="1" data-why="Первое слово во фразе и глагол без not → Nobody (о человеке)."></div>`
      },
      {
        title: '4. some-, any-, no- + body, thing, where',
        html: `
<div class="g-idea">Все эти слова собраны из двух кирпичиков: начало (some / any / no / every) + конец (-body/-one — люди, -thing — вещи, -where — места). Выучите схему — и получите 12 слов сразу.</div>
<table>
<tr><th></th><th>люди</th><th>вещи</th><th>места</th></tr>
<tr><td><b>some-</b> «-то»</td><td>somebody, someone — кто-то</td><td>something — что-то</td><td>somewhere — где-то, куда-то</td></tr>
<tr><td><b>any-</b> «-нибудь»</td><td>anybody, anyone</td><td>anything</td><td>anywhere</td></tr>
<tr><td><b>no-</b> «ни-»</td><td>nobody, no-one</td><td>nothing</td><td>nowhere</td></tr>
</table>
<p><b>some-</b> — в обычных утвердительных фразах, когда мы не знаем, кто/что/где именно:</p>
<ul class="g-list">
<li><span class="say">Somebody is at the door.</span> — Кто-то у двери.</li>
<li><span class="say">Kate said something, but I didn't hear.</span> — Кейт что-то сказала, но я не расслышал.</li>
<li><span class="say">Max lives somewhere near the station.</span> — Макс живёт где-то у станции.</li>
</ul>
<p><b>any-</b> — в вопросах и после not (как some / any, которые вы уже знаете):</p>
<ul class="g-list">
<li><span class="say">Is anybody online?</span> — Кто-нибудь в сети?</li>
<li><span class="say">Are you doing anything at the weekend?</span> — Делаешь что-нибудь на выходных?</li>
<li><span class="say">Did you go anywhere in the summer?</span> — Ты куда-нибудь ездил летом?</li>
<li><span class="say">I'm not going anywhere today.</span> — Я сегодня никуда не иду.</li>
</ul>
<p><b>nowhere</b> — нигде, никуда: <span class="say">There's nowhere to sit.</span> — Некуда сесть.</p>
<div class="g-tip">Если вы что-то предлагаете или просите, берите <b>some-</b> и в вопросе: <span class="say">Would you like something to drink?</span> — Хочешь чего-нибудь выпить?</div>
<div class="g-bad">I didn't go nowhere. · Somebody knows? <span class="muted">(в вопросе)</span></div>
<div class="g-good">I didn't go <b>anywhere</b>. · Does <b>anybody</b> know?</div>
<div class="mini" data-q="I've lost my keys. They must be ___ in the flat." data-o="anywhere|somewhere|nowhere" data-a="1" data-why="Утверждение, место неизвестно → somewhere."></div>
<div class="mini" data-q="I didn't meet ___ interesting at the party." data-o="somebody|anybody|nobody" data-a="1" data-why="Уже есть not (didn't) → anybody."></div>`
      },
      {
        title: '5. something new, nothing to do',
        html: `
<div class="g-idea">Эти слова любят два «прицепа»: прилагательное <b>после</b> них и <b>to + глагол</b> (что можно сделать).</div>
<p><b>something + прилагательное</b> — прилагательное идёт <b>после</b>, а не перед (в отличие от обычных слов):</p>
<ul class="g-list">
<li><span class="say">Let's play something new.</span> — Давай поиграем во что-нибудь новое.</li>
<li><span class="say">Did you meet anybody interesting?</span> — Ты встретил кого-нибудь интересного?</li>
<li><span class="say">We always go to the same bar. Let's go somewhere different.</span> — Пойдём куда-нибудь в другое место.</li>
<li><span class="say">What's that message? — Oh, nothing important.</span> — Да так, ничего важного.</li>
</ul>
<div class="g-bad">I want to watch new something.</div>
<div class="g-good">I want to watch <b>something new</b>.</div>
<p><b>something + to + глагол</b> — «что-то, что можно / нужно сделать»:</p>
<ul class="g-list">
<li><span class="say">I'm hungry. I want something to eat.</span> — Хочу чего-нибудь поесть.</li>
<li><span class="say">Have you got anything to read?</span> — У тебя есть что почитать?</li>
<li><span class="say">There's nothing to do in this town.</span> — В этом городе нечего делать.</li>
<li><span class="say">Tom has nobody to talk to.</span> — Тому не с кем поговорить.</li>
<li><span class="say">There's nowhere to park here.</span> — Здесь негде припарковаться.</li>
</ul>
<div class="g-tip">Русские «нечего», «некуда», «не с кем» — это ровно nothing to…, nowhere to…, nobody to… Одно слово-отрицание, глагол без not: <span class="say">I have nothing to wear!</span> — Мне нечего надеть!</div>
<div class="mini" data-q="Мне нечего делать." data-o="I don't have nothing to do.|I have nothing to do.|I have nothing do." data-a="1" data-why="nothing + to + глагол, и без второго not."></div>`
      },
      {
        title: '6. every и all; everybody, everything',
        html: `
<div class="g-idea"><b>every</b> = каждый. После него — <b>одна</b> вещь (единственное число) и глагол как после «он»: every player <b>has</b>, не have. <b>all</b> = все — и после него множественное число.</div>
<table>
<tr><th>every + один</th><th>all (the) + много</th></tr>
<tr><td><span class="say">Every level is different.</span></td><td><span class="say">All the levels are different.</span></td></tr>
<tr><td><span class="say">Every player has a role.</span></td><td><span class="say">All players have a role.</span></td></tr>
<tr><td><span class="say">Every student passed the test.</span></td><td><span class="say">All the students passed the test.</span></td></tr>
</table>
<p><b>every day</b> и <b>all day</b> — совсем разные вещи:</p>
<table>
<tr><th>Фраза</th><th>Значит</th><th>Отвечает на</th></tr>
<tr><td><span class="say">I play every day.</span></td><td>каждый день</td><td>как часто?</td></tr>
<tr><td><span class="say">I played all day.</span></td><td>весь день, целый день</td><td>как долго?</td></tr>
</table>
<p>Так же: <span class="say">every morning</span> — каждое утро, <span class="say">all morning</span> — всё утро; <span class="say">every weekend</span> / <span class="say">all weekend</span>; <span class="say">every night</span> / <span class="say">all night</span>.</p>
<p><b>every-</b> + body / thing / where:</p>
<ul class="g-list">
<li><span class="say">Everybody knows this song.</span> — Все знают эту песню. (= everyone)</li>
<li><span class="say">Have you got everything you need?</span> — У тебя есть всё, что нужно?</li>
<li><span class="say">I've looked everywhere for my headphones.</span> — Я везде искал наушники.</li>
</ul>
<div class="g-bad">Everybody are here. · Everyone have a phone.</div>
<div class="g-good">Everybody <b>is</b> here. · Everyone <b>has</b> a phone. <span class="muted">— по-русски «все» — много, а по-английски everybody — как «каждый»: глагол как после he</span></div>
<div class="g-bad">Every houses in the street are the same.</div>
<div class="g-good">Every <b>house</b> in the street <b>is</b> the same.</div>
<div class="mini" data-q="Everyone ___ tired after the release." data-o="are|is|were all" data-a="1" data-why="После everyone глагол как после he → is."></div>
<div class="mini" data-q="It rained ___ yesterday, from morning to night." data-o="every day|all day|everyday" data-a="1" data-why="С утра до вечера, весь день → all day."></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">Nobody didn't come.</div><div class="g-good">Nobody <b>came</b>.</div>
<div class="g-bad">I don't see nothing.</div><div class="g-good">I don't see <b>anything</b>. / I see <b>nothing</b>.</div>
<div class="g-bad">We have none time.</div><div class="g-good">We have <b>no</b> time.</div>
<div class="g-bad">Who called? — None.</div><div class="g-good">Who called? — <b>Nobody</b>. / <b>No-one</b>.</div>
<div class="g-bad">There isn't somebody here.</div><div class="g-good">There isn't <b>anybody</b> here. / There's <b>nobody</b> here.</div>
<div class="g-bad">I want interesting something.</div><div class="g-good">I want <b>something interesting</b>.</div>
<div class="g-bad">There isn't nowhere to sit.</div><div class="g-good">There's <b>nowhere</b> to sit. / There isn't <b>anywhere</b> to sit.</div>
<div class="g-bad">Everybody love this game.</div><div class="g-good">Everybody <b>loves</b> this game.</div>
<div class="g-bad">I worked every day yesterday.</div><div class="g-good">I worked <b>all day</b> yesterday.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Одно отрицание: <b>not + any…</b> или <b>no…</b> (nobody, nothing, nowhere, no, none). some- — в утверждении, any- — в вопросе и после not. <b>every / everybody</b> + глагол как после he; <b>every day</b> — каждый, <b>all day</b> — весь.</div>`
      }
    ],
    words: [
      ["no", "никакой, нет (перед существительным)", "There are no bugs in this build.", "В этой сборке нет багов."],
      ["none", "ни одного, нисколько", "How many are left? — None.", "Сколько осталось? — Ни одного."],
      ["nobody", "никто", "Nobody knows the answer.", "Никто не знает ответа."],
      ["no-one", "никто", "No-one called me today.", "Сегодня мне никто не звонил."],
      ["nothing", "ничего, ничто", "Nothing happened.", "Ничего не случилось."],
      ["nowhere", "нигде, никуда", "There's nowhere to park.", "Негде припарковаться."],
      ["anybody", "кто-нибудь (в вопросе); никого (после not)", "Is anybody online?", "Кто-нибудь в сети?"],
      ["anyone", "кто-нибудь; никого (после not)", "I don't know anyone here.", "Я никого здесь не знаю."],
      ["anything", "что-нибудь; ничего (после not)", "Did you buy anything?", "Ты что-нибудь купил?"],
      ["anywhere", "где-нибудь, куда-нибудь; нигде (после not)", "I'm not going anywhere.", "Я никуда не иду."],
      ["somebody", "кто-то", "Somebody took my charger.", "Кто-то взял мою зарядку."],
      ["someone", "кто-то", "Someone is at the door.", "Кто-то у двери."],
      ["something", "что-то, что-нибудь", "Let's play something new.", "Давай сыграем во что-нибудь новое."],
      ["somewhere", "где-то, куда-то", "My keys are somewhere in the flat.", "Мои ключи где-то в квартире."],
      ["everybody", "все (люди)", "Everybody likes this song.", "Всем нравится эта песня."],
      ["everyone", "все (люди)", "Everyone is here.", "Все здесь."],
      ["everything", "всё", "Everything is ready.", "Всё готово."],
      ["everywhere", "везде, повсюду", "I've looked everywhere.", "Я искал везде."],
      ["every", "каждый", "I play every evening.", "Я играю каждый вечер."],
      ["all day", "весь день, целый день", "It rained all day.", "Весь день шёл дождь."],
      ["empty", "пустой", "The server was empty.", "Сервер был пустой."],
      ["lonely", "одинокий", "I felt lonely — I had nobody to talk to.", "Мне было одиноко — не с кем было поговорить."],
      ["hide — hid", "прятать(ся) — спрятал(ся)", "The cat hid somewhere under the bed.", "Кот спрятался где-то под кроватью."],
      ["search", "искать, обыскивать", "I searched everywhere.", "Я искал везде."],
      ["look for", "искать", "Are you looking for something?", "Ты что-то ищешь?"],
      ["happen", "случаться, происходить", "Did anything happen?", "Что-нибудь случилось?"],
      ["lose — lost", "терять — потерял", "I've lost my headphones.", "Я потерял наушники."],
      ["whole", "целый, весь", "I watched the whole season.", "Я посмотрел весь сезон."],
      ["important", "важный", "It's nothing important.", "Ничего важного."],
      ["different", "другой, разный", "Let's go somewhere different.", "Пойдём куда-нибудь в другое место."]
    ],
    texts: [
      {
        id: 't-a2-12-1', title: 'The empty server', level: 'A2',
        text: `Last Sunday I logged in to my favourite online game at nine in the morning. Usually the main city is full of players, and everybody is busy. But that morning there was nobody there. Nothing moved. No music, no chat, no traders. The whole server was empty.
"Is anybody here?" I wrote in the chat. Nobody answered. I went to the market, but there was nothing to buy. I went to the arena, but there was nobody to fight. I checked everywhere — the forest, the castle, the old mine. I didn't find anyone.
I felt a bit lonely. Then I saw something strange on the map: a small light somewhere in the mountains. I had nothing to do, so I went there.
It took me twenty minutes. At the top of the mountain there was a big stone door. Suddenly somebody wrote in the chat: "Hello? Are you in the mountains too?" It was a player from Brazil. He had nowhere to go either, so he followed the light too.
We opened the door together. Behind it was a secret boss. We fought him all morning, and in the end we won! Later the developers wrote that every player on the server got a free gift that day. But only two players found the door.`,
        questions: [
          { q: 'What was strange about the server?', o: ['It was too crowded', 'Nobody was there', 'Everything was expensive'], a: 1 },
          { q: 'Where did he see the light?', o: ['In the market', 'In the mountains', 'In the castle'], a: 1 },
          { q: 'Who helped him to open the door?', o: ['Nobody', 'A player from Brazil', 'The developers'], a: 1 }
        ]
      },
      {
        id: 't-a2-12-2', title: 'Where is everything?', level: 'A2',
        text: `Anna: Max, have you seen my headphones? I can't find them anywhere.
Max: No, I haven't. Did you leave them somewhere in the office?
Anna: No, I didn't take them anywhere. They were on my desk last night.
Max: Did anybody come in the morning?
Anna: Nobody. I was here all morning. Nobody came, and nothing happened.
Max: That's strange. Is anything else missing?
Anna: Actually, yes. My charger. And my notebook.
Max: Wow. Somebody took everything?
Anna: I don't know. I've looked everywhere — under the desk, in my bag, in the kitchen.
Max: Wait. What's that under the sofa?
Anna: Where? I can't see anything.
Max: There's something black there. Look!
Anna: It's my charger! And… my headphones! And the notebook!
Max: Who put them there?
Anna: Oh no. I know. My cat! I bring her to work every Friday. She likes to hide things.
Max: So nobody took anything. The cat did it.
Anna: Yes. Everybody here loves her, but she's a little thief.
Max: Well, now you have everything. Let's get some coffee.
Anna: Good idea. But this time, nobody leaves anything on the desk!`,
        questions: [
          { q: 'Where were the headphones last night?', o: ['In Anna\'s bag', 'On Anna\'s desk', 'In the kitchen'], a: 1 },
          { q: 'Where did they find the things?', o: ['Under the sofa', 'Under the desk', 'In the kitchen'], a: 0 },
          { q: 'Who hid the things?', o: ['Max', 'Nobody', 'Anna\'s cat'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'There aren\'t ___ cookies left.', o: ['no', 'any', 'none'], a: 1, why: 'У глагола уже есть not (aren\'t) → any.' },
      { t: 'choice', q: 'We have ___ milk. Can you buy some?', o: ['no', 'any', 'none'], a: 0, why: 'Глагол без not + существительное → no.' },
      { t: 'choice', q: 'How many emails did you get today? — ___.', o: ['No', 'None', 'Nobody'], a: 1, why: 'Ответ «ноль» на How many без существительного → None.' },
      { t: 'choice', q: 'Who was at the meeting? — ___.', o: ['None', 'Nothing', 'No-one'], a: 2, why: 'На вопрос Who? отвечаем о людях → No-one / Nobody.' },
      { t: 'choice', q: 'I\'m bored. There\'s ___ to do.', o: ['anything', 'nothing', 'something'], a: 1, why: 'Глагол без not (There\'s) + «нечего» → nothing.' },
      { t: 'choice', q: 'Is ___ coming to the stream tonight?', o: ['anybody', 'nobody', 'everybody are'], a: 0, why: 'Обычный вопрос «кто-нибудь?» → anybody.' },
      { t: 'choice', q: 'Everybody ___ Tom. He\'s very friendly.', o: ['like', 'likes', 'are like'], a: 1, why: 'После everybody глагол как после he → likes.' },
      { t: 'choice', q: 'I stayed at home and played ___ yesterday.', o: ['every day', 'all day', 'every days'], a: 1, why: 'Весь вчерашний день (как долго?) → all day.' },
      { t: 'gap', q: 'I can\'t see ___. It\'s too dark. (ничего)', a: ['anything'], why: 'Уже есть can\'t → any-слово: anything.' },
      { t: 'gap', q: '___ lives in that old house. It\'s empty. (никто)', a: ['Nobody', 'No-one', 'No one'], why: 'В начале фразы, глагол без not → Nobody / No-one.' },
      { t: 'gap', q: 'My phone is ___ in this room, but I can\'t find it. (где-то)', a: ['somewhere'], why: 'Утверждение, место неизвестно → somewhere.' },
      { t: 'gap', q: 'Let\'s go ___ different this weekend. (куда-нибудь)', a: ['somewhere'], why: 'Предложение, утверждение → somewhere; прилагательное после него.' },
      { t: 'gap', q: '___ player gets a free skin. (каждый)', a: ['Every'], why: 'Каждый + одна вещь → every player.' },
      { t: 'gap', q: 'I didn\'t go ___ in the summer. I stayed at home. (никуда)', a: ['anywhere'], why: 'Уже есть didn\'t → anywhere.' },
      { t: 'order', a: 'Nobody told me anything about it', ru: 'Никто ничего мне об этом не сказал' },
      { t: 'order', a: 'I want something to eat', ru: 'Я хочу чего-нибудь поесть' },
      { t: 'tr', q: 'Мне нечего надеть.', a: ['i have nothing to wear', 'i\'ve got nothing to wear', 'i have got nothing to wear', 'i don\'t have anything to wear', 'i do not have anything to wear', 'i haven\'t got anything to wear'] },
      { t: 'tr', q: 'Все знают эту игру.', a: ['everybody knows this game', 'everyone knows this game', 'everybody knows that game', 'everyone knows that game'] },
      { t: 'listen', say: 'Is there anything interesting on TV?', a: ['is there anything interesting on tv'] }
    ],
    test: [
      { t: 'choice', q: 'Выберите правильное: «Я ничего не купил».', o: ['I didn\'t buy nothing.', 'I bought nothing.', 'I didn\'t bought anything.'], a: 1, why: 'Одно отрицание: bought nothing (или didn\'t buy anything).' },
      { t: 'choice', q: 'It\'s a nice flat, but there\'s ___ balcony.', o: ['no', 'none', 'not'], a: 0, why: 'no + существительное = there isn\'t a balcony.' },
      { t: 'choice', q: 'I wanted some oranges, but the shop had ___.', o: ['no', 'none', 'nothing'], a: 1, why: 'Без существительного после → none.' },
      { t: 'gap', q: 'Don\'t tell ___ about the surprise! (никому)', a: ['anybody', 'anyone'], why: 'Don\'t уже отрицание → anybody / anyone.' },
      { t: 'choice', q: 'Kate said ___, but the music was too loud and I didn\'t hear.', o: ['anything', 'something', 'nothing'], a: 1, why: 'Утверждение: она что-то сказала → something.' },
      { t: 'choice', q: 'Did you meet anybody ___ at the conference?', o: ['interesting', 'interesting people', 'an interesting'], a: 0, why: 'Прилагательное идёт после anybody: anybody interesting.' },
      { t: 'gap', q: 'Tom is lonely. He has ___ to talk to. (не с кем)', a: ['nobody', 'no-one', 'no one'], why: '«Не с кем» → nobody to + глагол, без not.' },
      { t: 'gap', q: 'There isn\'t ___ to sit in this café. (негде)', a: ['anywhere'], why: 'Уже есть isn\'t → anywhere.' },
      { t: 'choice', q: '___ in our team has a laptop.', o: ['All', 'Everyone', 'Every'], a: 1, why: 'Everyone (все люди) + has; all без существительного так не ставят, every нужен со словом после.' },
      { t: 'choice', q: 'Every room in the hotel ___ a sea view.', o: ['have', 'has', 'are having'], a: 1, why: 'every + единственное число → has.' },
      { t: 'choice', q: 'I go to the gym ___ — Monday, Tuesday, Wednesday…', o: ['all days', 'all day', 'every day'], a: 2, why: 'Как часто? Каждый день → every day.' },
      { t: 'gap', q: 'I\'ve lost my glasses. I\'ve looked ___, but I can\'t find them. (везде)', a: ['everywhere'], why: 'Все места → everywhere.' }
    ]
  }
);
