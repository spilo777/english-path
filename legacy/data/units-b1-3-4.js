// Юниты B1 3–4: Present Perfect глубже и против Past Simple; Present Perfect Continuous, how long, for / since, It's been ages since…
COURSE.units.push(
  // ───────────────────────────── UNIT B1-3 ─────────────────────────────
  {
    id: 'b1-3', level: 'B1', num: 3, track: 'main',
    books: { blue: [7, 8, 13, 14] },
    title: 'Present Perfect глубже и против Past Simple',
    summary: 'Углубим Present Perfect: новости и результат, «я здесь впервые», «лучшее, что я видел», recently и so far — и научимся выбирать между have done и did даже в хитрых случаях.',
    grammar: [
      {
        title: '1. Главная идея: Present Perfect — это настоящее время',
        html: `
<div class="g-idea"><b>Что вы уже знаете</b> (уроки a2-2, a2-3, a2-4): have / has + 3-я форма; just, already, yet; ever / never; for / since; с yesterday, ago, last… — только Past Simple. Теперь главное открытие уровня B1: Present Perfect по сути — <b>настоящее</b> время. Он сообщает, <b>как обстоят дела сейчас</b>. Past Simple рассказывает только о прошлом и про «сейчас» молчит.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Кейт ушла из команды. <span class="muted">(а сейчас? непонятно)</span></p><p>Сервер упал. <span class="muted">(лежит до сих пор или уже работает?)</span></p><p>Я забыл пароль. <span class="muted">(а сейчас помню?)</span></p></div>
  <div><div class="g-h">English</div><p><span class="say">Kate has left the team.</span> <span class="muted">— её в команде нет</span></p><p><span class="say">The server has gone down.</span> <span class="muted">— он лежит сейчас</span></p><p><span class="say">I've forgotten my password.</span> <span class="muted">— не могу войти</span></p></div>
</div>
<p>Если результат <b>уже отменился</b>, Present Perfect невозможен — остаётся только Past Simple:</p>
<table>
<tr><th>Present Perfect — так и есть сейчас</th><th>Past Simple — было, но уже не так</th></tr>
<tr><td><span class="say">Kate has left the team.</span></td><td><span class="say">Kate left the team, but she came back in May.</span></td></tr>
<tr><td><span class="say">The server has gone down. Nobody can log in.</span></td><td><span class="say">The server went down for an hour, but it's OK now.</span></td></tr>
<tr><td><span class="say">They've gone away. They'll be back on Monday.</span></td><td><span class="say">They went away, but I think they're back now.</span></td></tr>
<tr><td><span class="say">Has he lost his headphones?</span> <span class="muted">— их нет?</span></td><td><span class="say">He lost them, but then he found them.</span></td></tr>
</table>
<div class="g-bad">The server has gone down for an hour, but now it works.</div>
<div class="g-good">The server <b>went</b> down for an hour, but now it works.</div>
<div class="g-tip">Прежде чем сказать have done, спросите себя: <b>«А сейчас это правда?»</b> Если «уже нет» — Present Perfect отпадает.</div>
<div class="mini" data-q="I ___ my password, but then I remembered it." data-o="have forgotten|forgot" data-a="1" data-why="Сейчас пароль помню, результат отменился → только Past Simple."></div>
<div class="mini" data-q="— Are Max and Lena still on holiday? — No, they ___ away, but they're back now." data-o="have gone|went" data-a="1" data-why="Они уже вернулись: have gone значило бы, что их нет сейчас."></div>`
      },
      {
        title: '2. Свежие новости и just, already, yet без ошибок',
        html: `
<div class="g-idea">Present Perfect — жанр <b>«новость»</b>. Сообщаем, что что-то случилось, без даты: так пишут в новостях, чатах, уведомлениях, патчноутах. Когда начинаются подробности (когда? как? кто?) — переходим на Past Simple.</div>
<ul class="g-list">
<li><span class="say">There's been a problem with the server.</span> — Возникла проблема с сервером. <span class="muted">(there's been = there has been)</span></li>
<li><span class="say">The police have arrested three hackers.</span> — Полиция арестовала трёх хакеров.</li>
<li><span class="say">The studio has announced a sequel!</span> — Студия анонсировала продолжение!</li>
<li><span class="say">Prices have risen again.</span> — Цены опять выросли.</li>
<li><span class="say">Anna has had a baby! It's a girl.</span> — Анна родила! Девочка.</li>
</ul>
<p>А теперь — разговор. Новость → вопросы → подробности:</p>
<ul class="g-list">
<li><span class="say">Somebody has deleted the main file!</span> — Кто-то удалил главный файл! <span class="muted">(новость)</span></li>
<li><span class="say">Don't look at me. It wasn't me.</span> — Не смотри на меня. Это не я. <span class="muted">(«это был не я» — про тот момент)</span></li>
<li><span class="say">When did you last open it?</span> — Когда ты его последний раз открывал?</li>
<li><span class="say">I opened it yesterday, and it was fine.</span> — Вчера открывал, всё было нормально.</li>
</ul>
<div class="g-bad">It hasn't been me! How has it happened?</div>
<div class="g-good">It <b>wasn't</b> me! How <b>did</b> it <b>happen</b>?</div>
<p><b>just, already, yet — тонкости:</b></p>
<table>
<tr><th>Слово</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>already</b></td><td>раньше, чем ждали; в конце — удивление</td><td><span class="say">Have you finished already? Wow!</span></td></tr>
<tr><td><b>yet</b></td><td>ждём, что это случится</td><td><span class="say">Has the patch come out yet?</span></td></tr>
<tr><td><b>still … not</b></td><td>ждём давно, раздражает</td><td><span class="say">They still haven't fixed it!</span></td></tr>
<tr><td><b>just</b></td><td>только что</td><td><span class="say">I've just sent it.</span></td></tr>
<tr><td><b>just now</b></td><td>минуту назад — это точка</td><td><span class="say">I sent it just now.</span> <span class="muted">(Past Simple)</span></td></tr>
</table>
<div class="g-tip">В американских сериалах вы постоянно услышите <span class="say">I just saw him.</span>, <span class="say">Did you eat yet?</span>, <span class="say">I already told you!</span> — для just, already, yet это нормальный американский вариант. Но с датой и ago Present Perfect неправилен и в Америке.</div>
<div class="mini" data-q="— Don't forget to buy the tickets. — I ___ them!" data-o="have already bought|am already buying|already buy" data-a="0" data-why="Сделано раньше, чем напомнили, результат есть → have already bought."></div>
<div class="mini" data-q="I talked to the boss ___." data-o="just now|yet|so far" data-a="0" data-why="just now = минуту назад, это точка → подходит к Past Simple talked."></div>`
      },
      {
        title: '3. Период, который ещё идёт: recently, so far, today',
        html: `
<div class="g-idea">Present Perfect любит слова, которые обозначают отрезок <b>«от прошлого до сейчас»</b>. Период ещё не закрыт — значит, события в нём «принадлежат настоящему».</div>
<table>
<tr><th>Слова</th><th>Значение</th></tr>
<tr><td><b>recently, lately</b></td><td>недавно, в последнее время</td></tr>
<tr><td><b>in the last few days, over the past year</b></td><td>за последние несколько дней, за последний год</td></tr>
<tr><td><b>so far, up to now</b></td><td>пока что, до сих пор</td></tr>
<tr><td><b>since I arrived / since we started</b></td><td>с тех пор, как…</td></tr>
<tr><td><b>today, this week, this year</b></td><td>если период ещё не кончился</td></tr>
</table>
<ul class="g-list">
<li><span class="say">Have you heard from Max recently?</span> — Ты что-нибудь слышал от Макса в последнее время?</li>
<li><span class="say">I've watched a lot of anime lately.</span> — В последнее время я смотрю много аниме.</li>
<li><span class="say">We've fixed forty bugs in the last few days.</span> — За последние дни мы исправили сорок багов.</li>
<li><span class="say">So far the new build hasn't crashed.</span> — Пока что новая сборка не падала.</li>
<li><span class="say">It's snowed every day since we arrived.</span> — С нашего приезда снег идёт каждый день.</li>
<li><span class="say">I haven't had lunch today.</span> — Я сегодня не обедал.</li>
</ul>
<p><b>this morning</b> — смотрим на часы:</p>
<div class="g-compare">
  <div><div class="g-h">11:00 — утро ещё идёт</div><p><span class="say">Have you seen Kate this morning?</span></p></div>
  <div><div class="g-h">19:00 — утро закончилось</div><p><span class="say">Did you see Kate this morning?</span></p></div>
</div>
<p><b>I haven't seen her</b> или <b>I didn't see her</b>? Первое — «в последнее время не видел, не знаю, где она». Второе — про конкретное событие, которое уже прошло:</p>
<ul class="g-list">
<li><span class="say">Where's Lisa? — No idea. I haven't seen her.</span> — Где Лиза? — Без понятия, не видел её.</li>
<li><span class="say">Was Lisa at the party? — I don't think so. I didn't see her.</span> — Лиза была на вечеринке? — Вряд ли. Я её не видел.</li>
</ul>
<p class="muted">recently может стоять и с Past Simple, если это конкретное событие: <span class="say">I bought a new monitor recently.</span> А вот so far и lately — почти всегда Present Perfect.</p>
<div class="g-bad">I didn't have any problems so far.</div>
<div class="g-good">I <b>haven't had</b> any problems so far.</div>
<div class="mini" data-q="We ___ three serious bugs so far." data-o="have found|found|find" data-a="0" data-why="so far — «пока что, до сих пор», период не закрыт → Present Perfect."></div>
<div class="mini" data-q="— Was Tom at the meeting? — I don't know, I ___ him." data-o="didn't see|haven't seen" data-a="0" data-why="Встреча уже прошла, речь о том моменте → Past Simple."></div>`
      },
      {
        title: '4. Опыт: «лучшее, что я видел» и «я здесь впервые»',
        html: `
<div class="g-idea">Про опыт вы знаете: Have you ever…? I've never… twice, three times. На B1 добавляем две конструкции, в которых русскоговорящие ошибаются почти всегда: <b>самый… + ever</b> и <b>It's the first time…</b></div>
<p><b>А. «Лучшее, что я когда-либо…»</b> — после превосходной степени говорим обо всей жизни до сейчас:</p>
<div class="g-formula"><span class="g-part">the best / the worst / the most…</span><span class="g-plus">+</span><span class="g-part">существительное</span><span class="g-plus">+</span><span class="g-part g-v">I've ever + 3-я форма</span></div>
<ul class="g-list">
<li><span class="say">This is the best game I've ever played.</span> — Это лучшая игра, в которую я играл.</li>
<li><span class="say">It's the worst ending I've ever seen.</span> — Худшая концовка из всех, что я видел.</li>
<li><span class="say">She's the most talented artist I've ever worked with.</span> — Она самая талантливая художница, с которой я работал.</li>
<li><span class="say">It's one of the funniest shows I've ever watched.</span> — Это один из самых смешных сериалов, что я смотрел.</li>
</ul>
<p><b>Б. «Впервые» — It's the first time + Present Perfect.</b> По-русски тут настоящее время («я впервые <i>веду</i> машину»), а по-английски — have + 3-я форма:</p>
<div class="g-formula"><span class="g-part">It's / This is the first (second, third…) time</span><span class="g-plus">+</span><span class="g-part g-v">кто + have / has + 3-я форма</span></div>
<ul class="g-list">
<li><span class="say">It's the first time I've been to London.</span> — Я впервые в Лондоне.</li>
<li><span class="say">This is the first time I've driven a car.</span> — Я впервые за рулём.</li>
<li><span class="say">It's the second time the game has crashed today.</span> — Игра падает уже второй раз за сегодня.</li>
<li><span class="say">This is the third time you've been late this week!</span> — Ты уже третий раз за неделю опаздываешь!</li>
</ul>
<p>То же самое другими словами: <span class="say">I've never driven a car before.</span> — Я никогда раньше не водил. <b>before</b> в конце = «раньше, до этого».</p>
<div class="g-bad">It's the first time I am in London. · This is the first time I see this.</div>
<div class="g-good">It's the first time I<b>'ve been</b> to London. · This is the first time I<b>'ve seen</b> this.</div>
<div class="g-tip">Слышите «впервые», «уже второй раз», «самый … в жизни» — сразу включайте <b>have + 3-я форма</b>, что бы ни говорил русский.</div>
<div class="mini" data-q="This is the first time I ___ sushi." data-o="eat|am eating|have eaten" data-a="2" data-why="It's the first time + Present Perfect, даже если по-русски «я впервые ем»."></div>
<div class="mini" data-q="It's the most beautiful city I ___." data-o="ever visited|have ever visited|ever visit" data-a="1" data-why="Превосходная степень + опыт за всю жизнь → I've ever + 3-я форма."></div>`
      },
      {
        title: '5. История, а не новость: Past Simple без даты',
        html: `
<div class="g-idea">Present Perfect нужен только для того, что <b>связано с сейчас</b>: новости, результат, опыт живого человека. <b>История</b>, умершие люди, закончившиеся этапы жизни — это Past Simple, <b>даже если дата не названа</b>.</div>
<ul class="g-list">
<li><span class="say">Leonardo da Vinci painted the Mona Lisa.</span> — Леонардо да Винчи написал «Мону Лизу».</li>
<li><span class="say">Who invented the computer mouse?</span> — Кто изобрёл компьютерную мышь?</li>
<li><span class="say">Alexey Pajitnov created Tetris.</span> — Тетрис создал Алексей Пажитнов.</li>
<li><span class="say">My grandmother grew up in Odessa.</span> — Моя бабушка выросла в Одессе.</li>
<li><span class="say">Where were you born? — I was born in Omsk.</span> — Где ты родился? — В Омске.</li>
</ul>
<div class="g-compare">
  <div><div class="g-h">Новость (Present Perfect)</div><p><span class="say">Someone has invented a robot that plays chess and chats.</span></p><p><span class="say">My friend has written a game.</span></p></div>
  <div><div class="g-h">История (Past Simple)</div><p><span class="say">Who invented the telephone?</span></p><p><span class="say">Hideo Kojima wrote Metal Gear.</span></p></div>
</div>
<div class="g-bad">Where have you been born?</div>
<div class="g-good">Where <b>were</b> you <b>born</b>?</div>
<div class="g-bad">Who has painted the Mona Lisa?</div>
<div class="g-good">Who <b>painted</b> the Mona Lisa?</div>
<div class="g-tip">Рождение, детство, учёба в школе, работа великих людей прошлого — это «альбом с фотографиями». Всё закрыто → Past Simple.</div>
<div class="mini" data-q="Who ___ Tetris?" data-o="has created|created" data-a="1" data-why="Исторический факт, не новость → Past Simple."></div>
<div class="mini" data-q="My parents ___ in the same town." data-o="have grown up|grew up|grow up" data-a="1" data-why="Детство закончилось — законченный этап жизни → Past Simple."></div>`
      },
      {
        title: '6. Одни и те же слова — разные времена',
        html: `
<div class="g-idea">never, for ten years, a great holiday — такие слова бывают в <b>обоих</b> временах. Решает одно: <b>период ещё открыт</b> (→ Present Perfect) или <b>уже закрыт</b> (→ Past Simple)?</div>
<table>
<tr><th>Период открыт</th><th>Период закрыт</th></tr>
<tr><td><span class="say">I've never ridden a horse.</span> <span class="muted">— за всю жизнь</span></td><td><span class="say">I never rode a bike when I was a kid.</span> <span class="muted">— детство кончилось</span></td></tr>
<tr><td><span class="say">She's lived in Kazan for ten years.</span> <span class="muted">— живёт</span></td><td><span class="say">She lived in Kazan for ten years. Now she lives in Riga.</span></td></tr>
<tr><td><span class="say">We've waited for an hour!</span> <span class="muted">— ещё ждём</span></td><td><span class="say">We waited for an hour and then left.</span></td></tr>
<tr><td><span class="say">It's been a great holiday!</span> <span class="muted">— последний день отпуска</span></td><td><span class="say">It was a great holiday!</span> <span class="muted">— уже дома</span></td></tr>
<tr><td><span class="say">I've done a lot of work today.</span></td><td><span class="say">I did a lot of work yesterday.</span></td></tr>
<tr><td><span class="say">Have you enjoyed the course so far?</span></td><td><span class="say">Did you enjoy the film?</span> <span class="muted">— фильм кончился</span></td></tr>
</table>
<p>Период с началом и концом — <b>from … to …</b> — всегда закрыт: <span class="say">I worked at that studio from 2018 to 2022.</span> — Я работал в той студии с 2018 по 2022.</p>
<div class="g-bad">I have worked there from 2018 to 2022.</div>
<div class="g-good">I <b>worked</b> there from 2018 to 2022.</div>
<div class="g-bad">My grandfather has never been abroad. <span class="muted">— о дедушке, которого уже нет</span></div>
<div class="g-good">My grandfather <b>never went</b> abroad.</div>
<div class="mini" data-q="Grandpa ___ to the sea. He lived all his life in the mountains." data-o="has never been|never went" data-a="1" data-why="Жизнь дедушки — закрытый период → Past Simple."></div>
<div class="mini" data-q="Last evening of the trip: This ___ an amazing trip!" data-o="has been|was" data-a="0" data-why="Поездка ещё идёт, мы внутри периода → has been."></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">It's the first time I am here.</div><div class="g-good">It's the first time I<b>'ve been</b> here.</div>
<div class="g-bad">It's the best film I ever saw.</div><div class="g-good">It's the best film I<b>'ve ever seen</b>.</div>
<div class="g-bad">Where have you been born?</div><div class="g-good">Where <b>were</b> you born?</div>
<div class="g-bad">Who has invented the telephone?</div><div class="g-good">Who <b>invented</b> the telephone?</div>
<div class="g-bad">I didn't have any problems so far.</div><div class="g-good">I <b>haven't had</b> any problems so far.</div>
<div class="g-bad">It hasn't been me! I haven't touched it yesterday.</div><div class="g-good">It <b>wasn't</b> me! I <b>didn't touch</b> it yesterday.</div>
<div class="g-bad">I have worked there from 2018 to 2022.</div><div class="g-good">I <b>worked</b> there from 2018 to 2022.</div>
<div class="g-bad">The server has been down for an hour, but it's OK now.</div><div class="g-good">The server <b>was</b> down for an hour, but it's OK now.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Present Perfect — о <b>сейчас</b>: новость, результат, открытый период (so far, lately, today), «впервые» и «самый… ever». Всё <b>закрытое</b> — история, детство, from… to…, результат, который уже отменился, — <b>Past Simple</b>.</div>`
      }
    ],
    words: [
      ['steal — stole — stolen', 'красть', 'Someone has stolen my bike!', 'Кто-то украл мой велосипед!'],
      ['beat — beat — beaten', 'побеждать; бить', 'Have you beaten the final boss yet?', 'Ты уже победил финального босса?'],
      ['hide — hid — hidden', 'прятать(ся)', 'Where have you hidden the chocolate?', 'Куда ты спрятал шоколад?'],
      ['bite — bit — bitten', 'кусать', 'Our dog has never bitten anyone.', 'Наша собака никогда никого не кусала.'],
      ['freeze — froze — frozen', 'замерзать; зависать', 'My laptop has frozen again.', 'Мой ноутбук опять завис.'],
      ['shake — shook — shaken', 'трясти(сь); пожимать (руку)', 'I shook hands with the director.', 'Я пожал руку режиссёру.'],
      ['forgive — forgave — forgiven', 'прощать', 'Has she forgiven you yet?', 'Она тебя уже простила?'],
      ['rise — rose — risen', 'подниматься, расти', 'Prices have risen again.', 'Цены опять выросли.'],
      ['tear — tore — torn', 'рвать(ся)', 'I\'ve torn my favourite jeans.', 'Я порвал любимые джинсы.'],
      ['arrest', 'арестовывать', 'The police have arrested two hackers.', 'Полиция арестовала двух хакеров.'],
      ['announce', 'объявлять, анонсировать', 'The studio has announced a sequel.', 'Студия анонсировала продолжение.'],
      ['release', 'выпускать; релиз', 'They released the first part in 2015.', 'Первую часть выпустили в 2015 году.'],
      ['achieve', 'достигать, добиваться', 'She has achieved a lot this year.', 'Она многого добилась в этом году.'],
      ['manage (to do)', 'суметь, справиться; управлять', 'Have you managed to fix the bug?', 'Тебе удалось исправить баг?'],
      ['improve', 'улучшать(ся)', 'Your English has improved a lot.', 'Твой английский сильно улучшился.'],
      ['increase', 'расти, увеличивать(ся); рост', 'The number of players has increased.', 'Число игроков выросло.'],
      ['destroy', 'разрушать, уничтожать', 'The storm destroyed the old bridge.', 'Шторм разрушил старый мост.'],
      ['survive', 'выжить, пережить', 'We\'ve survived another deadline!', 'Мы пережили ещё один дедлайн!'],
      ['delete', 'удалять', 'Who has deleted my file?', 'Кто удалил мой файл?'],
      ['install', 'устанавливать', 'I\'ve just installed the update.', 'Я только что установил обновление.'],
      ['publish', 'публиковать, издавать', 'She has published her first comic.', 'Она опубликовала свой первый комикс.'],
      ['invent', 'изобретать', 'Who invented the computer mouse?', 'Кто изобрёл компьютерную мышь?'],
      ['grow up — grew up — grown up', 'расти, взрослеть', 'I grew up in a small town.', 'Я вырос в маленьком городе.'],
      ['be born — was born', 'родиться', 'Where were you born?', 'Где ты родился?'],
      ['recently', 'недавно, в последнее время', 'Have you seen any good films recently?', 'Ты видел хорошие фильмы в последнее время?'],
      ['lately', 'в последнее время', 'I\'ve been very busy lately.', 'В последнее время я очень занят.'],
      ['so far', 'пока что, до сих пор', 'So far everything has gone well.', 'Пока всё идёт хорошо.'],
      ['in the last few days', 'за последние несколько дней', 'I\'ve slept badly in the last few days.', 'Последние несколько дней я плохо сплю.'],
      ['the first time', 'первый раз, впервые', 'It\'s the first time I\'ve been here.', 'Я здесь впервые.'],
      ['apparently', 'судя по всему, по-видимому', 'Apparently, the server has crashed.', 'Судя по всему, сервер упал.'],
      ['accident', 'авария, несчастный случай; случайность', 'There\'s been an accident on the road.', 'На дороге произошла авария.']
    ],
    texts: [
      {
        id: 't-b1-3-1', title: 'What have I missed?', level: 'B1',
        text: `Kate: Max! Welcome back! You look great. How was your holiday?
Max: Amazing. Honestly, it was the best trip I've ever had. But it feels like I've been away for years. So, what have I missed?
Kate: A lot has happened. First, the studio has hired two new artists. They started on Monday.
Max: Great! Are they nice?
Kate: Very. And you won't believe this: someone has stolen the coffee machine.
Max: What? When did that happen?
Kate: Last Thursday. The police came and asked everyone questions, but they haven't found anything yet.
Max: That's terrible. How has everyone survived without coffee?
Kate: Barely. Oh, and the boss has announced the release date. We're launching in March.
Max: March? That's so soon! Have we fixed the big bug in level three?
Kate: Not yet. Actually, the build has crashed three times this week. Tom stayed at the office until midnight yesterday, but he didn't manage to fix it.
Max: Poor Tom. And my files? Has anyone deleted anything while I was away?
Kate: No, your files are safe. But I've moved your desk.
Max: You've moved my desk? Where?
Kate: Next to the window. You've always wanted that place.
Max: I have! Thanks, Kate. Is there any good news?
Kate: Yes! Our last game has sold half a million copies in the last few days. The boss was so happy that she bought pizza for everyone on Friday.
Max: And I missed the pizza. Typical!
Kate: Don't worry. So far you haven't missed the most important thing. The party is tonight.
Max: Now that's the best news I've heard today.`,
        questions: [
          { q: 'What has happened to the coffee machine?', o: ['It has broken', 'Someone has stolen it', 'Kate has moved it'], a: 1 },
          { q: 'Where is Max\'s desk now?', o: ['Next to the window', 'In Tom\'s room', 'Nobody knows'], a: 0 },
          { q: 'Why did the boss buy pizza?', o: ['It was Max\'s birthday', 'The team fixed the bug', 'The game sold very well'], a: 2 }
        ]
      },
      {
        id: 't-b1-3-2', title: 'My year of firsts', level: 'B1',
        text: `Last January I decided to try one new thing every month. It's October now, and so far I've kept my promise. Here's what I've done this year.
In February I went snowboarding for the first time. I fell about fifty times, and I've never been so cold in my life. But it was fun, and I didn't break anything!
In April I gave a talk at a design meetup. My hands were shaking, and I forgot half of my notes. Still, people liked it. Since then I've given two more talks, and it's become a bit easier every time.
In June I tried sushi. Yes, I know. I've lived in a big city all my life, but I never ate sushi when I was a student because it was too expensive. Now it's one of my favourite foods.
In August I played an online game with strangers and used only English. It was the best game night of the year. One player from Texas has become a good friend, and we've played together every weekend since then. My English has improved a lot.
Not everything has worked. In May I tried to cook a big dinner for my friends, and I burned everything. We ordered pizza. My friends still haven't forgotten it.
My grandmother, by the way, never tried anything new. She grew up in a village, lived there for eighty years and was perfectly happy.
Right now I'm doing my tenth "first": this is the first time I've written a blog post in English! I've checked it three times, so I hope there aren't too many mistakes.
Have you ever tried something like this? What's the best new thing you've done this year?`,
        questions: [
          { q: 'What happened at the design meetup?', o: ['The author didn\'t go', 'The author gave a talk', 'The author met a friend from Texas'], a: 1 },
          { q: 'Why didn\'t the author eat sushi as a student?', o: ['It was too expensive', 'The author didn\'t like fish', 'There were no sushi bars'], a: 0 },
          { q: 'What is the author\'s tenth new experience?', o: ['Cooking dinner', 'Snowboarding', 'Writing a blog post in English'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Oh no, somebody ___ my bike! It isn\'t here.', o: ['has stolen', 'is stealing', 'steals'], a: 0, why: 'Новость, результат виден сейчас (велосипеда нет), даты нет → Present Perfect.' },
      { t: 'choice', q: 'This is the first time I ___ to Japan.', o: ['am', 'have been', 'was'], a: 1, why: 'It\'s the first time + Present Perfect, хотя по-русски «я впервые в Японии».' },
      { t: 'choice', q: 'It\'s the most boring meeting I ___.', o: ['have ever had', 'ever have', 'am ever having'], a: 0, why: 'Превосходная степень + опыт до сих пор → I\'ve ever + 3-я форма.' },
      { t: 'choice', q: 'Who ___ the first iPhone?', o: ['has designed', 'designed', 'designs'], a: 1, why: 'Исторический факт, не новость → Past Simple.' },
      { t: 'choice', q: 'It\'s 7 p.m. ___ Kate this morning?', o: ['Have you seen', 'Did you see'], a: 1, why: 'Утро уже закончилось — период закрыт → Past Simple.' },
      { t: 'choice', q: '— Can I talk to Lena? — Sorry, she ___ out. She\'ll be back in an hour.', o: ['has gone', 'has been', 'goes'], a: 0, why: 'Её нет сейчас, она ещё не вернулась → has gone.' },
      { t: 'choice', q: 'We ___ any serious problems so far.', o: ['didn\'t have', 'haven\'t had', 'don\'t have'], a: 1, why: 'so far — период до сих пор открыт → Present Perfect.' },
      { t: 'choice', q: 'My dad ___ a car when he was young.', o: ['has never had', 'never had', 'never has'], a: 1, why: 'Молодость отца закончилась — закрытый период → Past Simple.' },
      { t: 'gap', q: 'Breaking news! The police ___ two hackers. (arrest)', a: ['have arrested', '\'ve arrested'], why: 'Новость без даты, результат сейчас → have + 3-я форма.' },
      { t: 'gap', q: 'It\'s the second time this week the game ___. (crash)', a: ['has crashed', '\'s crashed'], why: 'It\'s the second time + Present Perfect.' },
      { t: 'gap', q: '— I\'ve broken my glasses. — Oh no! How ___ that happen?', a: ['did'], why: 'Подробности («как это случилось?») после новости → Past Simple: did … happen.' },
      { t: 'gap', q: 'My grandmother ___ up in a small village. (grow)', a: ['grew'], why: 'Детство — закрытый этап жизни → Past Simple: grew.' },
      { t: 'gap', q: 'I ___ a lot of new people in the last few days. (meet)', a: ['have met', '\'ve met'], why: 'in the last few days — период до сейчас → Present Perfect.' },
      { t: 'gap', q: 'I sent you the file just ___.', a: ['now'], why: 'just now = «только что, минуту назад» — это точка, поэтому с Past Simple (sent).' },
      { t: 'order', a: 'Have you heard from Max recently', ru: 'Ты что-нибудь слышал от Макса в последнее время?' },
      { t: 'order', a: 'Nobody has called me yet', ru: 'Мне ещё никто не звонил.' },
      { t: 'tr', q: 'Я впервые в Лондоне.', a: ['it\'s the first time i\'ve been to london', 'it is the first time i have been to london', 'this is the first time i\'ve been to london', 'this is the first time i have been to london', 'it\'s the first time i\'ve been in london', 'it is the first time i have been in london', 'it\'s my first time in london', 'it is my first time in london', 'this is my first time in london', 'i\'m in london for the first time', 'i am in london for the first time'] },
      { t: 'tr', q: 'Где ты родился?', a: ['where were you born'] },
      { t: 'tr', q: 'Это лучший фильм, который я когда-либо видел.', a: ['it\'s the best film i\'ve ever seen', 'it is the best film i have ever seen', 'this is the best film i\'ve ever seen', 'this is the best film i have ever seen', 'it\'s the best movie i\'ve ever seen', 'it is the best movie i have ever seen', 'this is the best movie i\'ve ever seen', 'this is the best movie i have ever seen', 'it\'s the best film that i\'ve ever seen', 'this is the best film that i\'ve ever seen', 'it\'s the best movie that i\'ve ever seen', 'this is the best movie that i\'ve ever seen', 'it is the best film that i have ever seen', 'this is the best film that i have ever seen', 'it is the best movie that i have ever seen', 'this is the best movie that i have ever seen'] },
      { t: 'listen', say: 'There\'s been a problem with the server.', a: ['there\'s been a problem with the server', 'there has been a problem with the server'] }
    ],
    test: [
      { t: 'choice', q: '— Anna has quit her job! — Really? Why ___ that?', o: ['has she done', 'did she do', 'she did'], a: 1, why: 'Новость уже прозвучала, дальше вопросы о подробностях → Past Simple.' },
      { t: 'choice', q: 'It\'s only the second time I ___ this track, so be patient.', o: ['drive', 'am driving', 'have driven'], a: 2, why: 'It\'s the second time + Present Perfect.' },
      { t: 'choice', q: 'One of the most beautiful places I ___ is Lake Baikal.', o: ['have ever been to', 'ever went', 'have ever gone'], a: 0, why: 'Превосходная степень + опыт → I\'ve ever been to (побывал и вернулся).' },
      { t: 'choice', q: 'Einstein ___ the theory of relativity.', o: ['has developed', 'developed', 'develops'], a: 1, why: 'Эйнштейна нет в живых, это история → Past Simple.' },
      { t: 'choice', q: 'It\'s 4 p.m. I\'m so tired — I ___ five meetings today.', o: ['had', 'have had', 'have'], a: 1, why: 'День ещё идёт, today — открытый период → Present Perfect.' },
      { t: 'choice', q: 'I ___ my great-grandfather. He died before I was born.', o: ['have never met', 'never met', 'never meet'], a: 1, why: 'Встретить его уже невозможно — период закрыт → Past Simple.' },
      { t: 'choice', q: 'Wait, have you finished ___? That was fast!', o: ['yet', 'already', 'just now'], a: 1, why: 'Раньше, чем ожидали, с удивлением → already в конце вопроса.' },
      { t: 'choice', q: 'They ___ away for a week, but now they\'re back.', o: ['have gone', 'went', 'go'], a: 1, why: 'Они уже вернулись, результат отменился → Past Simple.' },
      { t: 'gap', q: 'I ___ my keys, but then I found them in my bag. (lose)', a: ['lost'], why: 'Ключи нашлись — «потерял» уже не правда сейчас → Past Simple.' },
      { t: 'gap', q: 'This is the third time you ___ late this week! (be)', a: ['have been', '\'ve been'], why: 'This is the third time + Present Perfect.' },
      { t: 'gap', q: 'The weather ___ terrible since we arrived. (be)', a: ['has been', '\'s been'], why: 'since we arrived — с тех пор до сейчас → Present Perfect.' },
      { t: 'gap', q: 'I haven\'t seen Kate ___. Is she OK? (в последнее время)', a: ['recently', 'lately'], why: '«В последнее время» → recently или lately, с Present Perfect.' }
    ]
  },

  // ───────────────────────────── UNIT B1-4 ─────────────────────────────
  {
    id: 'b1-4', level: 'B1', num: 4, track: 'main',
    books: { blue: [9, 10, 11, 12] },
    title: 'I have been doing — Present Perfect Continuous; how long, for, since',
    summary: 'Научимся говорить «я весь день работал — устал», «я давно собирался тебе позвонить», «мы сто лет не виделись» и точно выбирать между have been doing и have done.',
    grammar: [
      {
        title: '1. Главная идея: процесс, который тянется до сейчас',
        html: `
<div class="g-idea"><b>Что вы уже знаете</b> (урок a2-3): have / has been + -ing говорит, сколько уже длится процесс: <span class="say">I've been learning English for a year.</span> На B1 добавим второе значение — процесс <b>только что закончился</b>, и видны его следы. А ещё научимся выбирать между have been doing и have done.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Почему ты запыхался? Ты <b>бегал</b>?</p><p>У тебя красные глаза. Ты <b>плакала</b>?</p><p>Я тебя всё утро <b>ищу</b>!</p><p>Я <b>учу</b> японский полгода.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Why are you out of breath? Have you been running?</span></p><p><span class="say">Your eyes are red. Have you been crying?</span></p><p><span class="say">I've been looking for you all morning!</span></p><p><span class="say">I've been learning Japanese for six months.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part g-v">have / has been</span><span class="g-plus">+</span><span class="g-part g-v">глагол-ing</span><span class="g-sep">·</span><span class="g-part">I've been · she's been · have you been…? · I haven't been…</span></div>
<div class="g-tip">Русское «бегал», «плакала», «ищу» — несовершенный вид, процесс. Если этот процесс шёл <b>до самого сейчас</b> (или только что кончился) — это <b>have been + -ing</b>. Простое «I ran», «you cried» тут звучит как рассказ о далёком прошлом.</div>
<div class="mini" data-q="Your hands are covered in paint. ___?" data-o="Did you paint|Have you been painting|Are you painting" data-a="1" data-why="Процесс только что закончился, следы видны сейчас → have been + -ing."></div>`
      },
      {
        title: '2. Следы недавнего процесса',
        html: `
<div class="g-idea">Мы <b>видим результат-след</b>: мокро, грязно, человек устал, запыхался. Сам процесс уже кончился (или только что), но он шёл какое-то время — и именно это мы подчёркиваем.</div>
<ul class="g-list">
<li><span class="say">The street is wet. It's been raining.</span> — Улица мокрая. Шёл дождь.</li>
<li><span class="say">Sorry, I'm exhausted. I've been working since six.</span> — Прости, я без сил. Я работаю с шести.</li>
<li><span class="say">Why are you so dirty? What have you been doing?</span> — Почему ты такой грязный? Чем ты занимался?</li>
<li><span class="say">I've been talking to the boss, and she agrees with us.</span> — Я тут поговорил с начальницей, она с нами согласна.</li>
<li><span class="say">Where have you been? I've been calling you all day!</span> — Где ты был? Я весь день тебе звоню!</li>
</ul>
<p>Часто это звучит как <b>упрёк или подозрение</b> — «кто-то тут что-то делал»:</p>
<ul class="g-list">
<li><span class="say">Who's been using my mug?</span> — Кто брал мою кружку?</li>
<li><span class="say">Someone's been eating my crisps!</span> — Кто-то таскал мои чипсы!</li>
<li><span class="say">You've been playing all night, haven't you?</span> — Ты всю ночь играл, да?</li>
</ul>
<div class="g-bad">Why are you so tired? What did you do? <span class="muted">— звучит как вопрос про какой-то момент в прошлом</span></div>
<div class="g-good">Why are you so tired? What <b>have</b> you <b>been doing</b>?</div>
<div class="mini" data-q="The kitchen smells of smoke. Who ___ here?" data-o="cooked|has been cooking|is cooking" data-a="1" data-why="Запах — след недавнего процесса → has been + -ing."></div>`
      },
      {
        title: '3. Сколько уже идёт и что повторяется',
        html: `
<div class="g-idea">Главное применение — <b>How long…? for…, since…, all day</b>: процесс начался в прошлом и продолжается сейчас. Это может быть одно длинное действие или <b>много повторов</b> за период.</div>
<table>
<tr><th>Сейчас (am doing)</th><th>Сколько уже (have been doing)</th></tr>
<tr><td><span class="say">Don't disturb me. I'm working.</span></td><td><span class="say">I've been working since eight. I need a break.</span></td></tr>
<tr><td><span class="say">Hurry up! We're waiting.</span></td><td><span class="say">We've been waiting for forty minutes!</span></td></tr>
<tr><td><span class="say">It's snowing.</span></td><td><span class="say">It's been snowing all day long.</span></td></tr>
</table>
<p><b>Повторяющиеся действия</b> за период — тоже have been + -ing:</p>
<ul class="g-list">
<li><span class="say">She's been streaming every evening since she was sixteen.</span> — Она стримит каждый вечер с шестнадцати лет.</li>
<li><span class="say">We've been going to this cafe for years.</span> — Мы ходим в это кафе уже много лет.</li>
<li><span class="say">I've been playing chess online a lot lately.</span> — В последнее время я много играю в шахматы онлайн.</li>
<li><span class="say">I haven't been sleeping well recently.</span> — В последнее время я плохо сплю.</li>
</ul>
<div class="g-bad">I am working here since 2022. · How long are you waiting?</div>
<div class="g-good">I<b>'ve been working</b> here since 2022. · How long <b>have</b> you <b>been waiting</b>?</div>
<div class="g-tip">Слышите русское настоящее + «уже / с… / сколько / в последнее время» — это почти всегда <b>have been + -ing</b>, а не am doing.</div>
<div class="mini" data-q="We ___ this cafe every Friday for years." data-o="are visiting|have been visiting|visit" data-a="1" data-why="Повторяющееся действие за период до сейчас (for years) → have been + -ing."></div>
<div class="mini" data-q="Shh! I ___ on a call." data-o="have been|am" data-a="1" data-why="Просто сейчас, без «сколько уже» → Present Continuous."></div>`
      },
      {
        title: '4. have been doing или have done: процесс или результат',
        html: `
<div class="g-idea">Оба времени связаны с «сейчас», но смотрят на разное. <b>have been doing</b> — про <b>процесс</b>: чем был занят, сколько по времени (закончил или нет — не важно). <b>have done</b> — про <b>результат</b>: что готово, сколько штук, сколько раз.</div>
<div class="g-compare">
  <div><div class="g-h">Процесс (have been doing)</div><p><span class="say">She's been painting her room.</span> <span class="muted">— вся в краске, может, не закончила</span></p><p><span class="say">I've been reading this book for a week.</span> <span class="muted">— ещё читаю</span></p><p><span class="say">He's been eating too much junk food lately.</span></p></div>
  <div><div class="g-h">Результат (have done)</div><p><span class="say">She's painted her room.</span> <span class="muted">— комната готова, она жёлтая</span></p><p><span class="say">I've read it. It's great.</span> <span class="muted">— дочитал</span></p><p><span class="say">Someone has eaten all the pizza!</span> <span class="muted">— коробка пустая</span></p></div>
</div>
<table>
<tr><th>Вопрос</th><th>Время</th><th>Пример</th></tr>
<tr><td>How long…? сколько по времени?</td><td>have been doing</td><td><span class="say">How long have you been playing?</span></td></tr>
<tr><td>How much / how many? сколько штук?</td><td>have done</td><td><span class="say">How many levels have you finished?</span></td></tr>
<tr><td>How many times? сколько раз?</td><td>have done</td><td><span class="say">I've watched it three times.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I've been designing icons all morning. I've designed twelve so far.</span> — Всё утро рисую иконки. Пока нарисовал двенадцать.</li>
<li><span class="say">I'm learning Korean, but I haven't been learning it very long.</span> — Я учу корейский, но недавно.</li>
<li><span class="say">I'm learning Korean, but I haven't learnt much yet.</span> — …но выучил пока немного.</li>
</ul>
<div class="g-bad">I've been writing five emails this morning.</div>
<div class="g-good">I<b>'ve written</b> five emails this morning. <span class="muted">— количество → результат</span></div>
<div class="g-tip">Есть <b>число штук или раз</b> — берите have done. Есть <b>число часов, дней, «весь день»</b> — берите have been doing.</div>
<div class="mini" data-q="I ___ three chapters so far." data-o="have been reading|have read" data-a="1" data-why="Три главы — количество, результат → have read."></div>
<div class="mini" data-q="How long ___ that book?" data-o="have you read|have you been reading" data-a="1" data-why="How long — сколько по времени идёт процесс → have been reading."></div>`
      },
      {
        title: '5. Когда -ing нельзя, а когда — всё равно',
        html: `
<div class="g-idea">Глаголы-<b>состояния</b> (вы знаете их по b1-1: know, like, believe, understand, own, be, have в значении «иметь») в форме -ing не бывают. Для них «сколько уже» — только <b>have done</b>.</div>
<ul class="g-list">
<li><span class="say">I've known Oleg since university.</span> — Я знаю Олега с универа.</li>
<li><span class="say">How long have you had this laptop?</span> — Сколько у тебя этот ноутбук?</li>
<li><span class="say">She's been ill since Monday.</span> — Она болеет с понедельника.</li>
<li><span class="say">I've had a headache all day.</span> — У меня весь день болит голова.</li>
</ul>
<div class="g-bad">I've been knowing him for years. · How long have you been having this car?</div>
<div class="g-good">I<b>'ve known</b> him for years. · How long <b>have</b> you <b>had</b> this car?</div>
<p><b>Исключения</b> — want и mean («собираться») отлично живут в have been + -ing:</p>
<ul class="g-list">
<li><span class="say">I've been meaning to call you, but I keep forgetting.</span> — Я давно собираюсь тебе позвонить, но всё забываю.</li>
<li><span class="say">I've been wanting to try this game for months.</span> — Я уже несколько месяцев хочу попробовать эту игру.</li>
</ul>
<p><b>live и work</b> — можно и так, и так: <span class="say">I've lived here for five years.</span> = <span class="say">I've been living here for five years.</span> Но со словом <b>always</b> — только простая форма:</p>
<div class="g-bad">I've always been living in big cities.</div>
<div class="g-good">I<b>'ve always lived</b> in big cities.</div>
<p><b>С отрицанием и since / for</b> («не делал с тех пор») — обычно простая форма: <span class="say">I haven't played it since March.</span> — Я не играл в неё с марта. <span class="say">Max hasn't posted anything for weeks.</span> — Макс ничего не выкладывал уже несколько недель.</p>
<div class="mini" data-q="How long ___ Lena?" data-o="have you been knowing|have you known|do you know" data-a="1" data-why="know — глагол-состояние, без -ing → have known."></div>
<div class="mini" data-q="I've ___ to ask you something." data-o="been meaning|meant always|been mean" data-a="0" data-why="mean («собираться») можно в have been + -ing: I've been meaning to…"></div>`
      },
      {
        title: '6. for и since глубже',
        html: `
<div class="g-idea">База: <b>for</b> + отрезок (for two hours), <b>since</b> + точка старта (since Monday, since I was ten). Теперь — нюансы, которые слышны в живой речи.</div>
<table>
<tr><th>Нюанс</th><th>Пример</th></tr>
<tr><td>В утверждении for можно опустить</td><td><span class="say">They've been married ten years.</span></td></tr>
<tr><td>В отрицании for нужен</td><td><span class="say">I haven't had a day off for months.</span></td></tr>
<tr><td>В отрицании вместо for можно in</td><td><span class="say">I haven't had a day off in months.</span></td></tr>
<tr><td>С all — без for</td><td><span class="say">I've lived here all my life.</span></td></tr>
<tr><td>ever since — «с тех самых пор»</td><td><span class="say">We met in 2015 and we've been friends ever since.</span></td></tr>
<tr><td>Since when…? — «с каких пор?» (часто с удивлением)</td><td><span class="say">Since when do you like horror games?</span></td></tr>
</table>
<p><b>be married / get married</b> — классическая ловушка:</p>
<ul class="g-list">
<li><span class="say">They got married five years ago.</span> — Они поженились пять лет назад. <span class="muted">(событие → Past Simple)</span></li>
<li><span class="say">They've been married for five years.</span> — Они женаты пять лет. <span class="muted">(состояние до сих пор)</span></li>
</ul>
<div class="g-bad">I've lived here for all my life. · They are married for five years.</div>
<div class="g-good">I've lived here <b>all</b> my life. · They<b>'ve been</b> married for five years.</div>
<div class="mini" data-q="We haven't talked ___ ages." data-o="—|for|since" data-a="1" data-why="В отрицании for не опускают: haven't talked for ages."></div>
<div class="mini" data-q="I've been playing this game ___ my life." data-o="for all|all|since all" data-a="1" data-why="С all предлог не нужен: all my life."></div>`
      },
      {
        title: '7. When…? или How long…? и It\'s been ages since…',
        html: `
<div class="g-idea"><b>When…?</b> спрашивает о <b>точке</b> в прошлом → Past Simple. <b>How long…?</b> спрашивает о <b>длине</b> периода до сейчас → Present Perfect (Continuous).</div>
<div class="g-compare">
  <div><div class="g-h">When? — Past Simple</div><p><span class="say">When did it start raining?</span></p><p><span class="say">It started an hour ago.</span></p><p><span class="say">When did you first meet?</span></p><p><span class="say">At school, a long time ago.</span></p></div>
  <div><div class="g-h">How long? — Present Perfect</div><p><span class="say">How long has it been raining?</span></p><p><span class="say">For an hour. / Since two o'clock.</span></p><p><span class="say">How long have you known each other?</span></p><p><span class="say">Since school. / For ages.</span></p></div>
</div>
<p><b>«Прошло столько-то с тех пор, как…»</b> — очень частая разговорная конструкция:</p>
<div class="g-formula"><span class="g-part g-v">It's / It's been</span><span class="g-plus">+</span><span class="g-part">срок</span><span class="g-plus">+</span><span class="g-part">since</span><span class="g-plus">+</span><span class="g-part g-v">Past Simple</span></div>
<ul class="g-list">
<li><span class="say">It's been two years since I last saw Oleg.</span> — Я не видел Олега два года. <span class="muted">= I haven't seen Oleg for two years.</span></li>
<li><span class="say">It's ages since we went to the cinema.</span> — Мы сто лет не ходили в кино.</li>
<li><span class="say">How long is it since you moved?</span> — Сколько прошло с твоего переезда? <span class="muted">(= How long has it been since…?)</span></li>
<li><span class="say">It's been a while! How are you?</span> — Давно не виделись! Как ты?</li>
<li><span class="say">When did you last play it?</span> — Когда ты в последний раз в неё играл?</li>
</ul>
<div class="g-bad">It's two years since I haven't seen him.</div>
<div class="g-good">It's two years since I <b>last saw</b> him. <span class="muted">— после since точка в прошлом, без отрицания</span></div>
<div class="g-tip">Три способа сказать одно и то же: <span class="say">I haven't seen her for a year.</span> · <span class="say">It's been a year since I last saw her.</span> · <span class="say">The last time I saw her was a year ago.</span></div>
<div class="mini" data-q="It's been three months since I ___ a game." data-o="haven't finished|finished|have finished" data-a="1" data-why="После since — точка в прошлом → Past Simple, без отрицания."></div>
<div class="mini" data-q="___ did you start your course?" data-o="How long|When" data-a="1" data-why="Спрашиваем о точке старта, глагол в Past Simple (did … start) → When."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I am waiting for you for an hour!</div><div class="g-good">I<b>'ve been waiting</b> for you for an hour!</div>
<div class="g-bad">Why are you wet? Did you swim?</div><div class="g-good">Why are you wet? <b>Have</b> you <b>been swimming</b>?</div>
<div class="g-bad">I've been knowing her since school.</div><div class="g-good">I<b>'ve known</b> her since school.</div>
<div class="g-bad">I've been writing ten emails today.</div><div class="g-good">I<b>'ve written</b> ten emails today.</div>
<div class="g-bad">I've always been living here.</div><div class="g-good">I<b>'ve always lived</b> here.</div>
<div class="g-bad">We haven't met ten years.</div><div class="g-good">We haven't met <b>for</b> ten years.</div>
<div class="g-bad">It's a year since I haven't played it.</div><div class="g-good">It's a year since I <b>last played</b> it.</div>
<div class="g-bad">When have you started learning English?</div><div class="g-good">When <b>did</b> you <b>start</b> learning English?</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>have been doing</b> — процесс до сейчас или только что (сколько по времени, следы, повторы); <b>have done</b> — результат (сколько штук, сколько раз) и глаголы-состояния; <b>When?</b> → Past Simple, <b>How long?</b> → Present Perfect.</div>`
      }
    ],
    words: [
      ['mean (to do) — meant', 'собираться, намереваться; значить', 'I\'ve been meaning to call you.', 'Я давно собираюсь тебе позвонить.'],
      ['wonder', 'интересоваться, задаваться вопросом', 'I\'ve been wondering why you left.', 'Мне всё было интересно, почему ты ушёл.'],
      ['keep (doing) — kept', 'продолжать, всё время (делать)', 'I keep forgetting my umbrella.', 'Я всё время забываю зонт.'],
      ['concentrate', 'сосредоточиться', 'I\'ve been trying to concentrate all morning.', 'Я всё утро пытаюсь сосредоточиться.'],
      ['out of breath', 'запыхавшийся', 'Why are you out of breath? Have you been running?', 'Почему ты запыхался? Ты бегал?'],
      ['exhausted', 'измотанный, без сил', 'I\'m exhausted. I\'ve been working since six.', 'Я без сил. Я работаю с шести.'],
      ['breathe', 'дышать', 'Breathe slowly and relax.', 'Дыши медленно и расслабься.'],
      ['cough', 'кашлять; кашель', 'He\'s been coughing all night.', 'Он всю ночь кашлял.'],
      ['cry — cried', 'плакать; кричать', 'Have you been crying? Your eyes are red.', 'Ты плакал? У тебя красные глаза.'],
      ['stare', 'пристально смотреть, пялиться', 'You\'ve been staring at the screen for hours.', 'Ты уже несколько часов пялишься в экран.'],
      ['practise', 'тренироваться, практиковаться', 'I\'ve been practising this combo all week.', 'Я всю неделю тренирую эту комбинацию.'],
      ['train', 'тренироваться; поезд', 'She\'s been training for the marathon since May.', 'Она готовится к марафону с мая.'],
      ['save up', 'копить', 'I\'ve been saving up for a new PC.', 'Я коплю на новый ПК.'],
      ['look for', 'искать', 'I\'ve been looking for you everywhere!', 'Я тебя везде искал!'],
      ['queue', 'очередь; стоять в очереди', 'We\'ve been queuing for an hour.', 'Мы стоим в очереди уже час.'],
      ['grind', 'гриндить, фармить (в игре); молоть', 'He\'s been grinding for gold all evening.', 'Он весь вечер фармит золото.'],
      ['rehearse', 'репетировать', 'The band has been rehearsing since noon.', 'Группа репетирует с полудня.'],
      ['repair', 'ремонтировать, чинить', 'I\'ve repaired the chair — it\'s fine now.', 'Я починил стул — теперь он в порядке.'],
      ['paint', 'красить; рисовать красками', 'She\'s been painting her room all day.', 'Она весь день красит комнату.'],
      ['mess', 'беспорядок, бардак', 'What a mess! What have you been doing?', 'Ну и бардак! Чем вы тут занимались?'],
      ['wet', 'мокрый', 'The street is wet. It\'s been raining.', 'Улица мокрая. Шёл дождь.'],
      ['these days', 'сейчас, в наши дни', 'What are you working on these days?', 'Над чем ты сейчас работаешь?'],
      ['for ages', 'целую вечность, сто лет', 'I haven\'t played it for ages.', 'Я сто лет в неё не играл.'],
      ['a while', 'какое-то время', 'It\'s been a while! How are you?', 'Давно не виделись! Как ты?'],
      ['ever since', 'с тех самых пор', 'We met at school and we\'ve been friends ever since.', 'Мы познакомились в школе и с тех пор дружим.'],
      ['all day long', 'весь день напролёт', 'It\'s been snowing all day long.', 'Весь день идёт снег.'],
      ['get married', 'пожениться', 'They got married five years ago.', 'Они поженились пять лет назад.'],
      ['be married', 'быть женатым / замужем', 'How long have they been married?', 'Сколько они женаты?'],
      ['last (наречие)', 'в последний раз', 'When did you last see him?', 'Когда ты в последний раз его видел?'],
      ['deadline', 'крайний срок, дедлайн', 'We\'ve been working late because of the deadline.', 'Мы работаем допоздна из-за дедлайна.']
    ],
    texts: [
      {
        id: 't-b1-4-1', title: 'You look exhausted', level: 'B1',
        text: `Lena: Max! Where have you been? I've been calling you all morning.
Max: Sorry, my phone died. I've been at the office since six.
Lena: Since six? No wonder you look exhausted. What have you been doing?
Max: We've been fixing a bug in the new build. The game has been crashing every time a player opens the map.
Lena: And have you fixed it?
Max: Finally, yes. We fixed it about ten minutes ago. The whole team cheered.
Lena: Well done! But why is your jacket wet?
Max: It's been raining, and I've just walked from the station. I've been meaning to buy an umbrella for weeks, but I keep forgetting.
Lena: Typical. Listen, have you had lunch?
Max: Not yet. I've drunk four coffees, but I haven't eaten anything since yesterday.
Lena: Four coffees! That's why your hands are shaking. Let's go to the cafe on the corner.
Max: The one with the burgers? I haven't been there for ages.
Lena: They've changed the menu. I've been going there every Friday lately.
Max: Every Friday? So that's why you haven't been answering my messages on Fridays!
Lena: Guilty. By the way, how long have you been working on this game?
Max: Almost two years. We started it the winter before last. I've always wanted to make a game like this, but it's been really hard.
Lena: And how many bugs have you fixed so far?
Max: Honestly? I've stopped counting. Hundreds.
Lena: Then you definitely deserve a burger. Come on, I'm paying.`,
        questions: [
          { q: 'Why couldn\'t Lena reach Max?', o: ['His phone died', 'He was at the station', 'He was sleeping'], a: 0 },
          { q: 'When did the team fix the bug?', o: ['Yesterday', 'About ten minutes ago', 'They haven\'t fixed it yet'], a: 1 },
          { q: 'How often has Lena been going to the cafe lately?', o: ['Every day', 'Every Friday', 'Never'], a: 1 }
        ]
      },
      {
        id: 't-b1-4-2', title: 'It\'s been ages', level: 'B1',
        text: `Last Saturday Kate got a message from Oleg: "Hey! It's been ages. Coffee?" Kate smiled. She and Oleg were best friends at university, but after graduation they lost touch. That was almost six years ago.
They met at a small cafe in the centre. Oleg looked just like he did at university — the same glasses, the same terrible jokes.
"So, what have you been doing all these years?" Kate asked.
"Too much to tell," Oleg laughed. "I've been working as a game tester for three years. Before that I worked in a bank for two years, but I hated it. And I've been learning Japanese since last spring."
"Japanese? Since when do you like languages?"
"I've always wanted to read manga in the original. What about you? Are you still drawing?"
"Every day. I've been a UI designer since 2021. These days I'm designing menus for a mobile game. I've designed about twenty screens so far, and my boss likes them."
Oleg looked at her carefully. "You've been working too hard. You look tired."
"I know. I haven't been sleeping well lately. We have a deadline next week."
They talked for three hours. Oleg has been living in the same flat since university, and he still has the same old cat. Kate told him about her trip to Georgia and showed him her photos.
"How long is it since we last played something together?" Oleg asked.
"Since that crazy night with Heroes of Might and Magic. That was in our third year!"
"Then it's time," said Oleg. "Saturday? Online?"
"Deal," said Kate. "I've been wanting to beat you for six years."`,
        questions: [
          { q: 'How long has Oleg been learning Japanese?', o: ['For three years', 'Since last spring', 'Since university'], a: 1 },
          { q: 'Why does Kate look tired?', o: ['She has been sleeping badly because of a deadline', 'She has been travelling in Georgia', 'She has been playing games all night'], a: 0 },
          { q: 'When did they last play a game together?', o: ['Last Saturday', 'Six months ago', 'In their third year at university'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Why are you out of breath? ___?', o: ['Did you run', 'Have you been running', 'Are you running'], a: 1, why: 'Процесс только что закончился, след виден сейчас → have been + -ing.' },
      { t: 'choice', q: 'I ___ this book for a week, and I\'m only on page 50.', o: ['have read', 'have been reading', 'read'], a: 1, why: 'Процесс идёт неделю и не закончен → have been reading.' },
      { t: 'choice', q: 'I\'ve been reading since lunch. I ___ 80 pages so far.', o: ['have read', 'have been reading', 'am reading'], a: 0, why: '80 страниц — количество, результат → have read.' },
      { t: 'choice', q: 'How long ___ your cat?', o: ['have you been having', 'have you had', 'do you have'], a: 1, why: 'have = «иметь» — состояние, без -ing → have had.' },
      { t: 'choice', q: 'Tom has worked here ___ his life.', o: ['for all', 'all', 'since all'], a: 1, why: 'Со словом all предлог не нужен: all his life.' },
      { t: 'choice', q: 'I ___ this game since March — no time!', o: ['haven\'t been playing', 'haven\'t played', 'didn\'t play'], a: 1, why: '«Не делал с тех пор» — обычно простая форма: haven\'t played since.' },
      { t: 'choice', q: 'It\'s two years ___ I last saw him.', o: ['for', 'since', 'ago'], a: 1, why: 'It\'s + срок + since + Past Simple.' },
      { t: 'choice', q: 'When ___ learning English?', o: ['have you started', 'did you start', 'have you been starting'], a: 1, why: 'When…? — вопрос о точке в прошлом → Past Simple.' },
      { t: 'gap', q: 'Your eyes are red. Have you ___? (cry)', a: ['been crying'], why: 'След недавнего процесса → have been + -ing.' },
      { t: 'gap', q: 'I\'ve ___ meaning to text you for weeks.', a: ['been'], why: 'mean можно в Present Perfect Continuous: have been meaning.' },
      { t: 'gap', q: 'She ___ in this studio since 2021. (work)', a: ['has worked', 'has been working', '\'s worked', '\'s been working'], why: 'work — можно и простую, и длительную форму с since.' },
      { t: 'gap', q: 'How many levels ___ you finished today?', a: ['have'], why: 'Сколько штук — результат → have + 3-я форма (finished).' },
      { t: 'gap', q: 'I haven\'t had a day off ___ months.', a: ['for', 'in'], why: 'В отрицании for не опускают; можно также in.' },
      { t: 'gap', q: 'I\'ve ___ lived in big cities. I love them. (всегда)', a: ['always'], why: 'С always — простая форма: I\'ve always lived.' },
      { t: 'order', a: 'How long have you been waiting', ru: 'Сколько ты уже ждёшь?' },
      { t: 'order', a: 'What have you been doing lately', ru: 'Чем ты занимался в последнее время?' },
      { t: 'tr', q: 'Мы не виделись сто лет.', a: ['we haven\'t seen each other for ages', 'we have not seen each other for ages', 'we haven\'t seen each other in ages', 'we have not seen each other in ages', 'it\'s been ages since we saw each other', 'it has been ages since we saw each other', 'it\'s been ages since we last saw each other', 'it has been ages since we last saw each other', 'it\'s ages since we saw each other', 'it\'s ages since we last saw each other', 'it is ages since we last saw each other', 'we haven\'t seen each other for a long time', 'we have not seen each other for a long time', 'we haven\'t seen each other in a long time'] },
      { t: 'tr', q: 'Я весь день работаю.', a: ['i\'ve been working all day', 'i have been working all day', 'i\'ve been working all day long', 'i have been working all day long', 'i\'ve been working the whole day', 'i have been working the whole day', 'i\'ve worked all day', 'i have worked all day'] },
      { t: 'tr', q: 'Сколько вы женаты?', a: ['how long have you been married', 'how long have you been married for'] },
      { t: 'listen', say: 'I\'ve been looking for you all morning.', a: ['i\'ve been looking for you all morning', 'i have been looking for you all morning'] }
    ],
    test: [
      { t: 'choice', q: 'The kitchen is clean now. I ___ it.', o: ['have been cleaning', 'have cleaned', 'am cleaning'], a: 1, why: 'Работа закончена, важен результат → have cleaned.' },
      { t: 'choice', q: 'My hands are dirty. I ___ in the garden.', o: ['have worked', 'have been working', 'work'], a: 1, why: 'Грязные руки — след процесса → have been working.' },
      { t: 'choice', q: 'How many coffees ___ today?', o: ['have you been drinking', 'have you drunk', 'do you drink'], a: 1, why: 'How many — количество, результат → have drunk.' },
      { t: 'choice', q: 'They ___ married ten years ago.', o: ['have got', 'got', 'have been'], a: 1, why: 'Свадьба — событие в точке (ago) → got married.' },
      { t: 'choice', q: 'They haven\'t been on holiday ___ five years.', o: ['since', 'for', 'ago'], a: 1, why: 'Отрезок в отрицании → for, его не опускают.' },
      { t: 'choice', q: 'How long is it since you ___ your parents?', o: ['have visited', 'last visited', 'have been visiting'], a: 1, why: 'После since — точка в прошлом → Past Simple (last visited).' },
      { t: 'choice', q: 'I ___ a terrible headache all morning.', o: ['have been having', 'have had', 'am having'], a: 1, why: 'have в значении «иметь, болеть» — состояние → have had.' },
      { t: 'choice', q: 'Please don\'t disturb me — I ___ on an important task.', o: ['have been working', 'am working', 'have worked'], a: 1, why: 'Просто сейчас, без «сколько уже» → Present Continuous.' },
      { t: 'gap', q: 'Tom ___ in a bank for 15 years. Then he quit and became a streamer. (work)', a: ['worked'], why: 'Та работа закончилась, период закрыт → Past Simple, даже с for.' },
      { t: 'gap', q: 'It\'s ___ ages since we played together!', a: ['been'], why: 'Разговорная конструкция It\'s been + срок + since.' },
      { t: 'gap', q: 'We met at school, and we\'ve been friends ___ since.', a: ['ever'], why: 'ever since = «с тех самых пор».' },
      { t: 'gap', q: 'She\'s ___ wanting to try this game for months.', a: ['been'], why: 'want — исключение, может стоять в have been + -ing.' }
    ]
  }
);
