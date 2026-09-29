// Юниты A2 15–16: предлоги времени и движения (from…to, until, since, for, during, while, to/in/at, through, on/at/by/with/about); глагол + to / -ing, want you to, to = «чтобы»
COURSE.units.push(
  // ───────────────────────────── UNIT A2-15 ─────────────────────────────
  {
    id: 'a2-15', level: 'A2', num: 15, track: 'main',
    books: { red: [104, 105, 108, 110, 111] },
    title: 'Until, since, during, while, through — предлоги',
    summary: 'Научимся говорить «до пятницы», «с 2020 года», «во время фильма», «пока я ждал», «через лес», «на автобусе» и «книга Толкина» — без ошибок в маленьких словах.',
    grammar: [
      {
        title: '1. Главная идея: одно русское слово — несколько английских',
        html: `
<div class="g-idea">Русские предлоги «до», «с», «во время», «пока», «через», «на» в английском распадаются на <b>разные</b> слова. Выбор зависит от вопроса: <b>сколько длится?</b> <b>с какого момента?</b> <b>до какого момента?</b> <b>куда движемся?</b> Выучите вопрос — и предлог выберется сам.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я работаю <b>до</b> шести.</p><p>Я здесь <b>с</b> утра.</p><p>Я играл <b>два часа</b>.</p><p>Он уснул <b>во время</b> фильма.</p><p>Он уснул, <b>пока</b> я говорил.</p><p>Мы шли <b>через</b> парк.</p><p>Я еду <b>на</b> автобусе.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I work <b>until</b> six.</span></p><p><span class="say">I've been here <b>since</b> the morning.</span></p><p><span class="say">I played <b>for</b> two hours.</span></p><p><span class="say">He fell asleep <b>during</b> the film.</span></p><p><span class="say">He fell asleep <b>while</b> I was talking.</span></p><p><span class="say">We walked <b>through</b> the park.</span></p><p><span class="say">I'm going <b>by</b> bus.</span></p></div>
</div>
<table>
<tr><th>Вопрос</th><th>Слово</th><th>Пример</th></tr>
<tr><td>До какого момента?</td><td><b class="g-v">until</b></td><td><span class="say">until Friday</span></td></tr>
<tr><td>С какого момента и до сих пор?</td><td><b class="g-v">since</b></td><td><span class="say">since 2020</span></td></tr>
<tr><td>Сколько длится?</td><td><b class="g-v">for</b></td><td><span class="say">for a week</span></td></tr>
<tr><td>Во время чего?</td><td><b class="g-v">during</b> / <b class="g-v">while</b></td><td><span class="say">during the match</span></td></tr>
</table>
<div class="g-tip">С at 8, on Monday, in April вы уже знакомы (урок A1 «At 8, on Monday, in April»). Сегодня — следующий шаг: <b>отрезки времени</b> и <b>движение</b>.</div>
<div class="mini" data-q="Я играл в эту игру три часа." data-o="I played this game since three hours.|I played this game for three hours.|I played this game during three hours." data-a="1" data-why="Сколько длилось? Отрезок времени → for."></div>`
      },
      {
        title: '2. From… to, until (till): «с… по», «до»',
        html: `
<div class="g-idea"><b>from … to …</b> — начало и конец отрезка. <b>until</b> — только конец: действие идёт <b>до</b> какого-то момента и там останавливается.</div>
<div class="g-formula"><span class="g-part g-v">from</span><span class="g-part">начало</span><span class="g-plus">→</span><span class="g-part g-v">to / until</span><span class="g-part">конец</span></div>
<ul class="g-list">
<li><span class="say">I work from Monday to Friday.</span> — Я работаю с понедельника по пятницу.</li>
<li><span class="say">The shop is open from nine to eight.</span> — Магазин открыт с девяти до восьми.</li>
<li><span class="say">We lived in Kazan from 2015 until 2021.</span> — Мы жили в Казани с 2015 по 2021. <span class="muted">(from … until — тоже можно)</span></li>
<li><span class="say">The sale lasts until Sunday.</span> — Распродажа идёт до воскресенья.</li>
<li><span class="say">I stayed in bed until eleven.</span> — Я валялся в кровати до одиннадцати.</li>
<li><span class="say">Wait here till I come back.</span> — Подожди здесь, пока я не вернусь. <span class="muted">(till = until, разговорное)</span></li>
</ul>
<p><b>until</b> может стоять и перед целой фразой. Про будущее после until — <b>настоящее время</b>, как после when:</p>
<div class="g-bad">Don't turn off the PC until the update will finish.</div>
<div class="g-good">Don't turn off the PC until the update <b>finishes</b>.</div>
<p>Не путайте вопросы «до какого момента?» и «когда?»:</p>
<table>
<tr><th>Вопрос</th><th>Ответ</th></tr>
<tr><td><span class="say">How long will you be away?</span> — Как долго тебя не будет?</td><td><span class="say">Until Monday.</span> — До понедельника.</td></tr>
<tr><td><span class="say">When are you coming back?</span> — Когда вернёшься?</td><td><span class="say">On Monday.</span> — В понедельник.</td></tr>
</table>
<div class="g-tip">Русское «пока не…» (подожди, пока я не вернусь) — это <b>until</b> без not: <span class="say">Wait until I come back.</span> Лишнее «не» в английском не нужно.</div>
<div class="mini" data-q="The server will be offline ___ 6 pm." data-o="until|since|during" data-a="0" data-why="До какого момента? → until."></div>
<div class="mini" data-q="Let's wait until the boss ___." data-o="will appear|appears|appear" data-a="1" data-why="После until про будущее — настоящее время: the boss appears."></div>`
      },
      {
        title: '3. Since и for: «с» и «в течение»',
        html: `
<div class="g-idea">Вы уже встречали их с Present Perfect (урок «Have you ever…? How long?»). Повторим коротко и добавим важное. <b>since</b> = с момента в прошлом <b>до сейчас</b>. <b>for</b> = сколько длится, в любом времени.</div>
<table>
<tr><th>since + момент</th><th>for + отрезок</th></tr>
<tr><td><span class="say">since Monday</span></td><td><span class="say">for three days</span></td></tr>
<tr><td><span class="say">since 2019</span></td><td><span class="say">for five years</span></td></tr>
<tr><td><span class="say">since ten o'clock</span></td><td><span class="say">for two hours</span></td></tr>
<tr><td><span class="say">since I was a kid</span></td><td><span class="say">for a long time</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I've worked at this studio since 2022.</span> — Я работаю в этой студии с 2022 года. <span class="muted">(и сейчас тоже)</span></li>
<li><span class="say">It has been raining since I arrived.</span> — Дождь идёт с тех пор, как я приехал.</li>
<li><span class="say">I stayed at my friend's flat for a week.</span> — Я жил у друга неделю. <span class="muted">(прошлое)</span></li>
<li><span class="say">I'm going to Spain for the weekend.</span> — Я еду в Испанию на выходные. <span class="muted">(будущее)</span></li>
</ul>
<p>Сравните три способа рассказать одну историю:</p>
<ul class="g-list">
<li><span class="say">I lived in Moscow from 2010 to 2018.</span> — с… по… (закончилось)</li>
<li><span class="say">I lived in Moscow until 2018.</span> — до 2018 (потом уехал)</li>
<li><span class="say">I've lived in Kazan since 2018.</span> — с 2018 и до сих пор</li>
</ul>
<div class="g-bad">I have known him since five years. · I live here since 2018.</div>
<div class="g-good">I have known him <b>for</b> five years. · I <b>have lived</b> here since 2018.</div>
<div class="g-tip">since — «с тех пор», это <b>точка</b> на календаре. for — это <b>линейка</b>: сколько сантиметров времени. Русское «уже пять лет» — всегда <b>for</b>.</div>
<div class="mini" data-q="We have been friends ___ school." data-o="for|since|from" data-a="1" data-why="«Со школы» — точка в прошлом до сейчас → since."></div>
<div class="mini" data-q="I'm going away ___ a few days." data-o="since|during|for" data-a="2" data-why="Сколько длится? Отрезок → for, даже в будущем."></div>`
      },
      {
        title: '4. Before, after, during, while — до, после, во время, пока',
        html: `
<div class="g-idea"><b>during</b> и <b>while</b> оба значат «во время», но после <b>during</b> идёт существительное (фильм, урок, матч), а после <b>while</b> — целая фраза с глаголом (while I was sleeping).</div>
<div class="g-formula"><span class="g-part g-v">during</span><span class="g-plus">+</span><span class="g-part">the film / the meeting</span><span class="g-sep">·</span><span class="g-part g-v">while</span><span class="g-plus">+</span><span class="g-part">I was watching / we were eating</span></div>
<ul class="g-list">
<li><span class="say">Please don't talk during the film.</span> — Не разговаривайте во время фильма.</li>
<li><span class="say">Please don't talk while I'm watching.</span> — Не разговаривайте, пока я смотрю.</li>
<li><span class="say">My internet died during the match.</span> — Интернет упал во время матча.</li>
<li><span class="say">Somebody called while you were out.</span> — Кто-то звонил, пока тебя не было.</li>
<li><span class="say">I often listen to podcasts while I'm drawing.</span> — Я часто слушаю подкасты, пока рисую.</li>
</ul>
<p><b>before</b> и <b>after</b> работают с обоими вариантами: <span class="say">before the meeting</span> и <span class="say">before you go out</span>, <span class="say">after lunch</span> и <span class="say">after we finished</span>.</p>
<p>Сколько длилось — это снова <b>for</b>, не during:</p>
<div class="g-bad">We played during three hours. · I fell asleep during I was reading.</div>
<div class="g-good">We played <b>for</b> three hours. · I fell asleep <b>while</b> I was reading.</div>
<p>После <b>before / after</b> можно поставить глагол с <b>-ing</b> — так короче:</p>
<ul class="g-list">
<li><span class="say">I always save the file before closing it.</span> — Я всегда сохраняю файл перед тем, как закрыть.</li>
<li><span class="say">After finishing the game, I watched the credits.</span> — Пройдя игру, я посмотрел титры.</li>
</ul>
<div class="g-bad">before to go · after to eat</div>
<div class="g-good">before <b>going</b> · after <b>eating</b></div>
<div class="mini" data-q="I got a message ___ the meeting." data-o="during|while|for" data-a="0" data-why="the meeting — существительное → during."></div>
<div class="mini" data-q="Think carefully before ___ the button." data-o="to press|press|pressing" data-a="2" data-why="После before глагол с -ing: before pressing."></div>`
      },
      {
        title: '5. To, in, at: куда и где. Arrive и get',
        html: `
<div class="g-idea"><b>to</b> — движение «куда» (go, come, walk, fly, return to). <b>in / at</b> — «где» мы находимся или что-то делаем. Главная ловушка — <b>home</b> и <b>arrive</b>.</div>
<table>
<tr><th>Куда? → to</th><th>Где? → in / at</th></tr>
<tr><td><span class="say">I'm going to Berlin.</span></td><td><span class="say">I live in Berlin.</span></td></tr>
<tr><td><span class="say">She went to work.</span></td><td><span class="say">She is at work.</span></td></tr>
<tr><td><span class="say">We went to a party.</span></td><td><span class="say">We met at a party.</span></td></tr>
<tr><td><span class="say">What time do you go to bed?</span></td><td><span class="say">I like reading in bed.</span></td></tr>
</table>
<p><b>home</b> — особое слово. Куда? — <b>без to</b>. Где? — <b>at home</b>.</p>
<div class="g-bad">I'm going to home. · I work in home.</div>
<div class="g-good">I'm going <b>home</b>. · I work <b>at home</b>.</div>
<p><b>arrive</b> («прибыть») никогда не бывает с to:</p>
<table>
<tr><th>Куда</th><th>Как</th><th>Пример</th></tr>
<tr><td>страна, город</td><td><b>arrive in</b></td><td><span class="say">We arrived in Tokyo at night.</span></td></tr>
<tr><td>другие места</td><td><b>arrive at</b></td><td><span class="say">I arrived at the airport early.</span></td></tr>
<tr><td>любое место</td><td><b>get to</b></td><td><span class="say">What time did you get to the office?</span></td></tr>
<tr><td>домой</td><td><b>get / arrive home</b></td><td><span class="say">I got home at midnight.</span></td></tr>
</table>
<div class="g-bad">We arrived to London on Friday.</div>
<div class="g-good">We arrived <b>in</b> London on Friday. / We got <b>to</b> London on Friday.</div>
<div class="g-tip">Русское «приехал <b>в</b> Лондон» тянет к to. Запомните пару: <b>get to</b> — но <b>arrive in / at</b>. Если сомневаетесь — говорите get to, это всегда верно (кроме home / here / there: get home).</div>
<div class="mini" data-q="What time did you arrive ___ the station?" data-o="to|at|in" data-a="1" data-why="arrive + не город и не страна → at."></div>
<div class="mini" data-q="I'm tired. Let's go ___." data-o="to home|home|at home" data-a="1" data-why="Куда? домой → go home, без to."></div>`
      },
      {
        title: '6. Through, across, over, along: предлоги движения',
        html: `
<div class="g-idea">Эти предлоги показывают <b>путь</b>: через что, по чему, мимо чего проходит движение. Представьте персонажа в игре — куда он бежит.</div>
<table>
<tr><th>Предлог</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>into</b> / <b>out of</b></td><td>в(нутрь) / из</td><td><span class="say">He jumped into the water.</span></td></tr>
<tr><td><b>on</b> / <b>off</b></td><td>на / с (поверхности)</td><td><span class="say">Don't fall off the roof!</span></td></tr>
<tr><td><b>up</b> / <b>down</b></td><td>вверх / вниз</td><td><span class="say">We ran up the hill.</span></td></tr>
<tr><td><b>over</b> / <b>under</b></td><td>над, через (сверху) / под</td><td><span class="say">She jumped over the wall.</span></td></tr>
<tr><td><b>through</b></td><td>сквозь, через (внутри чего-то)</td><td><span class="say">We walked through the forest.</span></td></tr>
<tr><td><b>across</b></td><td>поперёк, на другую сторону</td><td><span class="say">The dog swam across the river.</span></td></tr>
<tr><td><b>along</b></td><td>вдоль, по</td><td><span class="say">I walked along the beach.</span></td></tr>
<tr><td><b>past</b></td><td>мимо</td><td><span class="say">He walked past me.</span></td></tr>
<tr><td><b>round / around</b></td><td>вокруг; за (угол)</td><td><span class="say">The café is round the corner.</span></td></tr>
</table>
<p>Русское «через» — это три разных английских слова:</p>
<ul class="g-list">
<li><span class="say">The light came through the window.</span> — Свет шёл через окно. <span class="muted">(сквозь, внутри)</span></li>
<li><span class="say">Walk across the street.</span> — Перейдите через улицу. <span class="muted">(с одной стороны на другую)</span></li>
<li><span class="say">The plane flew over the mountains.</span> — Самолёт пролетел над горами. <span class="muted">(сверху)</span></li>
</ul>
<p>Как объяснить дорогу: <span class="say">Go along this street, past the bank, under the bridge, and the shop is on the left.</span> — Идите по этой улице, мимо банка, под мостом, и магазин будет слева.</p>
<p>Ещё три мелочи: <span class="say">Look out of the window.</span> (выглянуть <b>из</b> окна), <span class="say">We walked around the old town.</span> (гуляли <b>по</b> городу), <span class="say">Put the charger in your bag.</span> — с put обычно <b>in</b>, а не into.</p>
<div class="g-bad">We walked across the forest. · Put your feet off the table.</div>
<div class="g-good">We walked <b>through</b> the forest. · Take your feet <b>off</b> the table.</div>
<div class="g-tip">through — как пуля <b>сквозь</b> что-то (туннель, лес, толпу). across — как мост <b>поперёк</b> реки. over — как мяч <b>над</b> сеткой.</div>
<div class="mini" data-q="The train goes ___ a long tunnel." data-o="across|through|over" data-a="1" data-why="Внутри туннеля, насквозь → through."></div>
<div class="mini" data-q="He took his phone ___ his pocket." data-o="out of|off|from in" data-a="0" data-why="Изнутри кармана наружу → out of."></div>`
      },
      {
        title: '7. On, at, by, with, about — готовые выражения',
        html: `
<div class="g-idea">Эти предлоги часто нельзя вывести логикой — их просто запоминают вместе со словом, как готовые блоки.</div>
<table>
<tr><th>Предлог</th><th>Выражения</th></tr>
<tr><td><b>on</b></td><td><span class="say">on holiday</span> (в отпуске), <span class="say">on TV</span>, <span class="say">on the radio</span>, <span class="say">on the phone</span>, <span class="say">on fire</span> (горит), <span class="say">on time</span> (вовремя)</td></tr>
<tr><td><b>at</b></td><td>возраст, скорость, температура: <span class="say">at 25</span>, <span class="say">at the age of 25</span>, <span class="say">at 100 km an hour</span>, <span class="say">at 100 degrees</span></td></tr>
<tr><td><b>by</b></td><td>транспорт: <span class="say">by bus</span>, <span class="say">by car</span>, <span class="say">by plane</span>, <span class="say">by bike</span> — но <span class="say">on foot</span> (пешком). Автор: <span class="say">a song by Adele</span></td></tr>
<tr><td><b>with / without</b></td><td>с / без: <span class="say">coffee with milk</span>, <span class="say">a man with a beard</span>, <span class="say">I cut it with scissors.</span></td></tr>
<tr><td><b>about</b></td><td>о, про: <span class="say">talk about games</span>, <span class="say">a film about space</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Anna isn't at work. She's on holiday.</span> — Анны нет на работе. Она в отпуске.</li>
<li><span class="say">I was on the phone for an hour.</span> — Я час говорил по телефону.</li>
<li><span class="say">The meeting started on time.</span> — Встреча началась вовремя.</li>
<li><span class="say">He started his own studio at 30.</span> — Он открыл свою студию в 30 лет.</li>
<li><span class="say">Have you read any books by Stephen King?</span> — Ты читал книги Стивена Кинга?</li>
<li><span class="say">Who's the girl with the red hair?</span> — Кто эта девушка с рыжими волосами?</li>
<li><span class="say">I draw with a tablet, not with a mouse.</span> — Я рисую планшетом, а не мышкой.</li>
<li><span class="say">Don't go without me!</span> — Не уходи без меня!</li>
<li><span class="say">I don't know much about cars.</span> — Я мало знаю о машинах.</li>
</ul>
<div class="g-bad">I go to work on bus. · I came by foot. · I cut it by knife.</div>
<div class="g-good">I go to work <b>by</b> bus. · I came <b>on</b> foot. · I cut it <b>with</b> a knife.</div>
<div class="g-tip">Русский творительный падеж («рисую <i>планшетом</i>», «режу <i>ножом</i>») — это <b>with</b>. А «еду <i>автобусом</i>» — это <b>by</b>, и без артикля: by bus, не by the bus.</div>
<div class="mini" data-q="Is there anything good ___ TV tonight?" data-o="in|at|on" data-a="2" data-why="Готовое выражение: on TV."></div>
<div class="mini" data-q="I usually get to the office ___ bike." data-o="by|on|with" data-a="0" data-why="Транспорт → by + слово без артикля: by bike."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I've lived here since three years.</div><div class="g-good">I've lived here <b>for</b> three years.</div>
<div class="g-bad">I live in Kazan since 2018.</div><div class="g-good">I <b>have lived</b> in Kazan since 2018.</div>
<div class="g-bad">Wait until I will finish.</div><div class="g-good">Wait until I <b>finish</b>.</div>
<div class="g-bad">We talked during two hours.</div><div class="g-good">We talked <b>for</b> two hours.</div>
<div class="g-bad">He called during I was sleeping.</div><div class="g-good">He called <b>while</b> I was sleeping.</div>
<div class="g-bad">Before to leave, turn off the light.</div><div class="g-good">Before <b>leaving</b>, turn off the light.</div>
<div class="g-bad">We arrived to Paris at noon.</div><div class="g-good">We arrived <b>in</b> Paris at noon.</div>
<div class="g-bad">I'm going to home.</div><div class="g-good">I'm going <b>home</b>.</div>
<div class="g-bad">We walked across the tunnel.</div><div class="g-good">We walked <b>through</b> the tunnel.</div>
<div class="g-bad">I came here by foot.</div><div class="g-good">I came here <b>on</b> foot.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>until</b> — до момента · <b>since</b> — с момента до сейчас · <b>for</b> — сколько длится · <b>during</b> + существительное, <b>while</b> + фраза · <b>go to</b>, но <b>go home</b>, <b>arrive in/at</b> · <b>through</b> — насквозь · <b>by</b> bus, <b>on</b> foot, <b>with</b> a pen.</div>`
      }
    ],
    words: [
      ["until", "до (какого-то момента), пока не", "I'll be at the office until seven.", "Я буду в офисе до семи."],
      ["since", "с (какого-то момента), с тех пор как", "I've played this game since Monday.", "Я играю в эту игру с понедельника."],
      ["during", "во время", "Phones off during the meeting, please.", "Выключите телефоны во время встречи, пожалуйста."],
      ["while", "пока, в то время как", "I listen to music while I work.", "Я слушаю музыку, пока работаю."],
      ["through", "через, сквозь", "We drove through a small town.", "Мы проехали через маленький городок."],
      ["across", "через, поперёк, на другую сторону", "Be careful when you walk across the road.", "Будь осторожен, когда переходишь дорогу."],
      ["along", "вдоль, по", "We walked along the river.", "Мы гуляли вдоль реки."],
      ["past", "мимо; после (о времени)", "The bus went past me.", "Автобус проехал мимо меня."],
      ["over", "над, через (сверху)", "The cat jumped over the fence.", "Кот перепрыгнул через забор."],
      ["into", "в, внутрь", "She ran into the room.", "Она вбежала в комнату."],
      ["out of", "из, наружу", "He took a key out of his bag.", "Он достал ключ из сумки."],
      ["off", "с, прочь (с поверхности)", "The phone fell off the table.", "Телефон упал со стола."],
      ["round / around", "вокруг; по; за (углом)", "The shop is just round the corner.", "Магазин прямо за углом."],
      ["towards", "к, по направлению к", "The monster is coming towards us!", "Монстр идёт к нам!"],
      ["without", "без", "I can't work without coffee.", "Я не могу работать без кофе."],
      ["about", "о, про; около", "It's a series about a hacker.", "Это сериал про хакера."],
      ["arrive", "прибывать, приезжать", "We arrived in Rome at night.", "Мы приехали в Рим ночью."],
      ["get to — got to", "добраться до — добрался", "How do I get to the station?", "Как мне добраться до вокзала?"],
      ["on foot", "пешком", "It's close. Let's go on foot.", "Это близко. Пойдём пешком."],
      ["on time", "вовремя", "The train arrived on time.", "Поезд прибыл вовремя."],
      ["on holiday", "в отпуске", "My boss is on holiday this week.", "Мой начальник в отпуске на этой неделе."],
      ["on fire", "в огне, горит", "The building in the game is on fire!", "Здание в игре горит!"],
      ["bridge", "мост", "Go under the bridge and turn left.", "Пройдите под мостом и поверните налево."],
      ["corner", "угол", "Meet me at the corner.", "Встретимся на углу."],
      ["tunnel", "туннель", "The train went through a long tunnel.", "Поезд прошёл через длинный туннель."],
      ["stairs", "лестница (ступеньки)", "Don't run down the stairs!", "Не бегай вниз по лестнице!"],
      ["cross", "пересекать, переходить", "Cross the street at the lights.", "Переходите улицу на светофоре."],
      ["fall — fell", "падать — упал", "I fell off my bike yesterday.", "Я вчера упал с велосипеда."],
      ["last", "длиться, продолжаться", "The festival lasts until Sunday.", "Фестиваль длится до воскресенья."],
      ["fall asleep — fell asleep", "заснуть — заснул", "I fell asleep during the film.", "Я уснул во время фильма."]
    ],
    texts: [
      {
        id: 't-a2-15-1', title: 'A weekend in Prague', level: 'A2',
        text: `Last spring my friend Max and I went to Prague for four days. We went by train because it's cheaper than the plane. The journey lasted eleven hours, and I slept for most of it. Max played games on his Switch while I was sleeping.
We arrived in Prague early in the morning. Our hotel was near the old town, so we went there on foot. We went along a beautiful river, across an old stone bridge, and through a small park. The hotel was just round the corner from the main square.
We couldn't check in until two o'clock, so we left our bags at the hotel and went out. During the first day we saw a lot of old churches and a clock that is more than six hundred years old. Before going back to the hotel, we had dinner in a small café. The waiter talked to us about the history of the city for half an hour.
On the last evening we went on a boat trip. We went under six bridges, and the city looked amazing at night.
We got home on Monday night. I've been back at work since Tuesday, but I still think about Prague every day.`,
        questions: [
          { q: 'How did they travel to Prague?', o: ['By plane', 'By train', 'By car'], a: 1 },
          { q: 'What did Max do while the writer was sleeping?', o: ['He read a book', 'He played games', 'He talked to the waiter'], a: 1 },
          { q: 'When could they check in?', o: ['Early in the morning', 'Not until two o\'clock', 'After dinner'], a: 1 }
        ]
      },
      {
        id: 't-a2-15-2', title: 'The late designer', level: 'A2',
        text: `Kate: Hi, Tom! You're late again. The meeting started at ten.
Tom: I know, sorry. I was on the phone with the client until half past nine, and then my bus didn't come.
Kate: Why didn't you come by bike?
Tom: I fell off it on Saturday. So I've been coming to work on foot or by bus since Monday.
Kate: Oh no! Are you OK?
Tom: Yes, I'm fine. Did I miss anything important during the meeting?
Kate: Not much. The boss talked about the new game for about an hour. The new characters look great. Anna is working on them.
Tom: Is Anna here? I need to talk to her about the icons.
Kate: No, she's on holiday until Friday. She's in Spain with her family.
Tom: OK, I'll wait until she comes back. Is the deadline still on the twentieth?
Kate: Yes. We have to work on the menus from Monday to Wednesday next week.
Tom: Fine. By the way, who's the man with the blue jacket in the boss's office?
Kate: That's our new sound designer. He arrived at the office an hour before you.
Tom: Ha ha. Very funny. Next time I'll be on time, I promise.`,
        questions: [
          { q: 'Why was Tom late?', o: ['He slept too long', 'He was on the phone and the bus didn\'t come', 'He went to Spain'], a: 1 },
          { q: 'How long will Anna be on holiday?', o: ['Until Friday', 'For a month', 'Since Monday'], a: 0 },
          { q: 'Who is the man with the blue jacket?', o: ['The boss', 'A client', 'The new sound designer'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I waited for the bus ___ twenty minutes.', o: ['since', 'for', 'during'], a: 1, why: 'Сколько длилось? Отрезок времени → for.' },
      { t: 'choice', q: 'My sister has worked in this bank ___ 2019.', o: ['for', 'from', 'since'], a: 2, why: 'С момента в прошлом до сейчас, Present Perfect → since.' },
      { t: 'choice', q: 'Our office is open ___ Monday to Friday.', o: ['from', 'since', 'until'], a: 0, why: 'Начало и конец отрезка → from … to.' },
      { t: 'choice', q: 'My phone rang ___ I was having a shower.', o: ['during', 'while', 'for'], a: 1, why: 'Дальше целая фраза с глаголом → while.' },
      { t: 'choice', q: 'Nobody spoke ___ the exam.', o: ['during', 'while', 'for'], a: 0, why: 'the exam — существительное → during.' },
      { t: 'choice', q: 'We arrived ___ Madrid late at night.', o: ['to', 'in', 'at'], a: 1, why: 'arrive + город или страна → in.' },
      { t: 'choice', q: 'The tennis ball flew ___ the net.', o: ['over', 'through', 'along'], a: 0, why: 'Над сеткой, сверху → over.' },
      { t: 'choice', q: 'This is a painting ___ Van Gogh. He painted it in 1889.', o: ['of', 'with', 'by'], a: 2, why: 'Автор картины, книги, песни → by.' },
      { t: 'gap', q: 'Don\'t leave ___ I call you. (до тех пор, пока не)', a: ['until', 'till'], why: 'Действие идёт до момента → until (till), без лишнего not.' },
      { t: 'gap', q: 'I always check my mail before ___ work. (start)', a: ['starting'], why: 'После before глагол с -ing.' },
      { t: 'gap', q: 'I usually go to work ___ foot.', a: ['on'], why: 'Пешком — готовое выражение on foot.' },
      { t: 'gap', q: 'We walked ___ the dark forest. (сквозь)', a: ['through'], why: 'Внутри леса, насквозь → through.' },
      { t: 'gap', q: 'I\'m tired. I\'m going ___ now. (домой)', a: ['home'], why: 'Go home — без to.' },
      { t: 'gap', q: 'Do you drink coffee ___ sugar? (без)', a: ['without'], why: '«Без» → without.' },
      { t: 'order', a: 'She is on holiday until Monday', ru: 'Она в отпуске до понедельника' },
      { t: 'order', a: 'I fell asleep during the film', ru: 'Я уснул во время фильма' },
      { t: 'tr', q: 'Я живу здесь с 2020 года.', a: ['i have lived here since 2020', 'i\'ve lived here since 2020', 'i have been living here since 2020', 'i\'ve been living here since 2020'] },
      { t: 'tr', q: 'Мы шли вдоль реки.', a: ['we walked along the river', 'we were walking along the river', 'we went along the river'] },
      { t: 'listen', say: 'What time did you get to the office?', a: ['what time did you get to the office'] }
    ],
    test: [
      { t: 'choice', q: 'How long will you be in Berlin? — ___ Sunday.', o: ['On', 'Until', 'Since'], a: 1, why: 'How long? — до какого момента → Until Sunday.' },
      { t: 'choice', q: 'When are you coming back? — ___ Sunday.', o: ['On', 'Until', 'For'], a: 0, why: 'When? — день → On Sunday.' },
      { t: 'choice', q: 'I\'ve known Max ___ we were at university.', o: ['for', 'since', 'during'], a: 1, why: 'С момента в прошлом (целая фраза) до сейчас → since.' },
      { t: 'choice', q: 'We lived in Minsk ___ 2020, and then we moved to Riga.', o: ['since', 'for', 'until'], a: 2, why: 'Прошлое закончилось в 2020 → until (до).' },
      { t: 'gap', q: 'After ___ the level, I saved the game. (finish)', a: ['finishing'], why: 'После after глагол с -ing.' },
      { t: 'choice', q: 'My phone rang three times ___ the night.', o: ['during', 'while', 'since'], a: 0, why: 'the night — существительное → during (во время, в течение ночи).' },
      { t: 'choice', q: 'What time did you get ___ the airport?', o: ['at', 'to', 'in'], a: 1, why: 'get + место → get to.' },
      { t: 'gap', q: 'I was ___ the phone with my mum for an hour.', a: ['on'], why: 'Говорить по телефону → on the phone.' },
      { t: 'choice', q: 'The dog ran ___ the road, and a car nearly hit it.', o: ['across', 'through', 'over'], a: 0, why: 'С одной стороны дороги на другую → across.' },
      { t: 'gap', q: 'She got her first job as a designer ___ the age of 22.', a: ['at'], why: 'Возраст → at (the age of) 22.' },
      { t: 'choice', q: 'I opened the box ___ a knife.', o: ['by', 'with', 'on'], a: 1, why: 'Инструмент (чем?) → with.' },
      { t: 'gap', q: 'Please don\'t touch anything until the teacher ___. (come)', a: ['comes'], why: 'После until про будущее — Present Simple: comes.' }
    ]
  },

  // ───────────────────────────── UNIT A2-16 ─────────────────────────────
  {
    id: 'a2-16', level: 'A2', num: 16, track: 'main',
    books: { red: [51, 52, 53, 54] },
    title: 'I enjoy doing, I want to do — -ing и to',
    summary: 'Научимся правильно ставить второй глагол: «хочу поиграть», «люблю играть», «закончил рисовать», «хочу, чтобы ты пришёл» и «пошёл в магазин, чтобы купить хлеб».',
    grammar: [
      {
        title: '1. Главная идея: второй глагол бывает в трёх формах',
        html: `
<div class="g-idea">По-русски второй глагол почти всегда в одной форме: «хочу <i>играть</i>», «люблю <i>играть</i>», «закончил <i>играть</i>». В английском у второго глагола <b>три</b> формы, и выбор зависит от <b>первого</b> глагола.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я могу <b>играть</b>.</p><p>Я хочу <b>играть</b>.</p><p>Мне нравится <b>играть</b>.</p><p>Я закончил <b>играть</b>.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I can <b>play</b>.</span></p><p><span class="say">I want <b>to play</b>.</span></p><p><span class="say">I enjoy <b>playing</b>.</span></p><p><span class="say">I finished <b>playing</b>.</span></p></div>
</div>
<table>
<tr><th>Форма</th><th>Пример</th><th>Когда</th></tr>
<tr><td><b class="g-v">play</b></td><td><span class="say">I must play.</span></td><td>после can, must, will…</td></tr>
<tr><td><b class="g-v">to play</b></td><td><span class="say">I want to play.</span></td><td>после want, decide, hope…</td></tr>
<tr><td><b class="g-v">playing</b></td><td><span class="say">I enjoy playing.</span></td><td>после enjoy, finish, mind…</td></tr>
</table>
<div class="g-tip">Правила «на логику» тут почти нет — это как род у слов в русском. Поэтому учим глаголы <b>кучками</b>: кучка «to», кучка «-ing» и кучка «можно и так, и так».</div>
<div class="mini" data-q="I enjoy ___ in the evening." data-o="draw|to draw|drawing" data-a="2" data-why="После enjoy — всегда -ing."></div>`
      },
      {
        title: '2. Play, to play, playing — что вы уже знаете',
        html: `
<div class="g-idea">Вы давно пользуетесь всеми тремя формами — просто соберём их в одну таблицу.</div>
<table>
<tr><th>После чего</th><th>Форма</th><th>Пример</th></tr>
<tr><td>can, could, will, shall, might, may, must, should, would</td><td><b>play</b></td><td><span class="say">You should sleep more.</span></td></tr>
<tr><td>do / does / did</td><td><b>play</b></td><td><span class="say">Did you sleep well?</span></td></tr>
<tr><td>going to, have to, want, would like, used to</td><td><b>to play</b></td><td><span class="say">I have to go now.</span></td></tr>
<tr><td>am / is / are, was / were</td><td><b>playing</b></td><td><span class="say">She was sleeping.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Shall I open the window?</span> — Открыть окно?</li>
<li><span class="say">It might rain later.</span> — Позже может пойти дождь.</li>
<li><span class="say">What are you going to do tonight?</span> — Что будешь делать вечером?</li>
<li><span class="say">I used to play football.</span> — Раньше я играл в футбол.</li>
<li><span class="say">Be quiet, please. I'm working.</span> — Тише, пожалуйста. Я работаю.</li>
</ul>
<div class="g-bad">I must to go. · Can you to help me? · I want go home.</div>
<div class="g-good">I must <b>go</b>. · Can you <b>help</b> me? · I want <b>to go</b> home.</div>
<div class="g-tip">Модальные глаголы (can, must, should, will…) — «короли»: после них никаких to. А want, have, going — обычные глаголы, им нужен мостик <b>to</b>.</div>
<div class="mini" data-q="You should ___ a break." data-o="take|to take|taking" data-a="0" data-why="После should — глагол без to."></div>
<div class="mini" data-q="I have ___ this logo by Friday." data-o="finish|to finish|finishing" data-a="1" data-why="have to + глагол: have to finish."></div>`
      },
      {
        title: '3. Глагол + to: want to, decide to, hope to',
        html: `
<div class="g-idea">После этих глаголов второй глагол идёт с <b>to</b>. Почти все они про <b>планы, желания, решения</b> — то, что ещё впереди.</div>
<div class="g-formula"><span class="g-part">want · need · plan · decide · hope · expect · try · learn · offer · promise · refuse · forget</span><span class="g-plus">+</span><span class="g-part g-v">to + глагол</span></div>
<ul class="g-list">
<li><span class="say">I want to learn Japanese.</span> — Я хочу выучить японский.</li>
<li><span class="say">We don't need to hurry.</span> — Нам не нужно спешить.</li>
<li><span class="say">Anna has decided to leave the studio.</span> — Анна решила уйти из студии.</li>
<li><span class="say">I hope to see you soon.</span> — Надеюсь скоро тебя увидеть.</li>
<li><span class="say">I didn't expect to win.</span> — Я не ожидал выиграть.</li>
<li><span class="say">I tried to fix the bug, but I couldn't.</span> — Я пытался исправить баг, но не смог.</li>
<li><span class="say">My brother is learning to drive.</span> — Брат учится водить.</li>
<li><span class="say">Max offered to help me.</span> — Макс предложил мне помочь.</li>
<li><span class="say">She promised to call.</span> — Она обещала позвонить.</li>
<li><span class="say">He refused to answer.</span> — Он отказался отвечать.</li>
<li><span class="say">I forgot to save the file!</span> — Я забыл сохранить файл!</li>
</ul>
<p>«Решил <b>не</b>…», «обещал <b>не</b>…» — <b>not</b> ставим прямо перед to:</p>
<ul class="g-list">
<li><span class="say">I decided not to buy the game.</span> — Я решил не покупать игру.</li>
<li><span class="say">He promised not to be late.</span> — Он обещал не опаздывать.</li>
</ul>
<div class="g-bad">I decided to not buy it. · I didn't decide to buy it. <span class="muted">— если имеется в виду «решил не покупать»</span></div>
<div class="g-good">I decided <b>not to</b> buy it.</div>
<div class="g-tip">to похоже на стрелку <b>→</b> в будущее: хочу → сделать, решил → сделать, обещал → сделать.</div>
<div class="mini" data-q="We've decided ___ a new game together." data-o="making|to make|make" data-a="1" data-why="После decide — to + глагол."></div>
<div class="mini" data-q="Don't forget ___ the door." data-o="to lock|locking|lock" data-a="0" data-why="forget + to: не забудь сделать."></div>`
      },
      {
        title: '4. Глагол + -ing: enjoy doing, finish doing',
        html: `
<div class="g-idea">После этих глаголов второй глагол идёт с <b>-ing</b>. Здесь to <b>нельзя</b>.</div>
<div class="g-formula"><span class="g-part">enjoy · mind · finish · stop · suggest</span><span class="g-plus">+</span><span class="g-part g-v">глагол-ing</span></div>
<table>
<tr><th>Глагол</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>enjoy</b></td><td>получать удовольствие</td><td><span class="say">I enjoy drawing.</span></td></tr>
<tr><td><b>mind</b></td><td>быть против (в вопросах и с not)</td><td><span class="say">I don't mind waiting.</span></td></tr>
<tr><td><b>finish</b></td><td>закончить</td><td><span class="say">Have you finished eating?</span></td></tr>
<tr><td><b>stop</b></td><td>перестать</td><td><span class="say">Has it stopped raining?</span></td></tr>
<tr><td><b>suggest</b></td><td>предложить (идею)</td><td><span class="say">Kate suggested ordering pizza.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Do you enjoy working from home?</span> — Тебе нравится работать из дома?</li>
<li><span class="say">I don't mind getting up early.</span> — Я не против рано вставать.</li>
<li><span class="say">Stop talking and listen!</span> — Хватит болтать, слушай!</li>
<li><span class="say">Max suggested going to the cinema.</span> — Макс предложил сходить в кино.</li>
</ul>
<div class="g-bad">I enjoy to play. · She suggested to go out.</div>
<div class="g-good">I enjoy <b>playing</b>. · She suggested <b>going</b> out.</div>
<div class="g-tip">Сравните два «предложил»: <span class="say">He offered to help.</span> — предложил <b>сам</b> что-то сделать (to). <span class="say">He suggested watching a film.</span> — предложил <b>идею</b> для всех (-ing).</div>
<div class="mini" data-q="Have you finished ___ the report?" data-o="to write|writing|write" data-a="1" data-why="После finish — только -ing."></div>
<div class="mini" data-q="Do you mind ___ a bit longer?" data-o="waiting|to wait|wait" data-a="0" data-why="После mind — только -ing."></div>`
      },
      {
        title: '5. Like doing и like to do; would like to do',
        html: `
<div class="g-idea">После <b>like, love, hate, prefer, start, begin, continue</b> можно и <b>-ing</b>, и <b>to</b> — смысл почти одинаковый. Но с <b>would</b> (would like, would love, would prefer, would hate) — <b>только to</b>.</div>
<table>
<tr><th>Глагол</th><th>-ing</th><th>to</th></tr>
<tr><td>like</td><td><span class="say">I like playing chess.</span></td><td><span class="say">I like to play chess.</span></td></tr>
<tr><td>love</td><td><span class="say">She loves dancing.</span></td><td><span class="say">She loves to dance.</span></td></tr>
<tr><td>hate</td><td><span class="say">I hate being late.</span></td><td><span class="say">I hate to be late.</span></td></tr>
<tr><td>prefer</td><td><span class="say">I prefer travelling by train.</span></td><td><span class="say">I prefer to travel by train.</span></td></tr>
<tr><td>start / begin</td><td><span class="say">It started raining.</span></td><td><span class="say">It started to rain.</span></td></tr>
</table>
<p>А теперь <b>would</b> — «хотел бы» про конкретный раз:</p>
<ul class="g-list">
<li><span class="say">I'd like to try this game.</span> — Я бы хотел попробовать эту игру.</li>
<li><span class="say">I'd love to go to Japan one day.</span> — Я бы очень хотел когда-нибудь поехать в Японию.</li>
<li><span class="say">Would you like to sit down? — No, I'd prefer to stand.</span> — Хотите сесть? — Нет, я лучше постою.</li>
<li><span class="say">I'd hate to lose my save.</span> — Мне бы очень не хотелось потерять сохранение.</li>
<li><span class="say">I like this flat. I wouldn't like to move.</span> — Мне нравится эта квартира. Я бы не хотел переезжать.</li>
</ul>
<div class="g-bad">I would like playing tonight.</div>
<div class="g-good">I would like <b>to play</b> tonight.</div>
<div class="g-tip"><b>like</b> = нравится вообще (всегда). <b>would like</b> = хочу сейчас, конкретно. <span class="say">I like swimming.</span> — люблю плавать. <span class="say">I'd like to swim.</span> — хочу поплавать (сейчас).</div>
<div class="mini" data-q="Would you like ___ with us tonight?" data-o="coming|to come|come" data-a="1" data-why="После would like — только to."></div>
<div class="mini" data-q="I love ___ old films." data-o="watching|watch|to watching" data-a="0" data-why="После love можно -ing (или to watch)."></div>`
      },
      {
        title: '6. I want you to…, He told me to…',
        html: `
<div class="g-idea">«Я хочу, <b>чтобы ты</b> пришёл» — по-английски без «что» и без второго подлежащего: <b>want + кто + to + глагол</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я хочу, чтобы ты пришёл.</p><p>Она хочет, чтобы я подождал.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I want <b>you to come</b>.</span></p><p><span class="say">She wants <b>me to wait</b>.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">want / would like / ask / tell / advise / expect / persuade / teach</span><span class="g-plus">+</span><span class="g-part">me, you, him, her, us, them, Anna</span><span class="g-plus">+</span><span class="g-part g-v">to + глагол</span></div>
<ul class="g-list">
<li><span class="say">Do you want me to help you?</span> — Хочешь, я тебе помогу?</li>
<li><span class="say">Would you like me to send the files?</span> — Хотите, я пришлю файлы?</li>
<li><span class="say">The client asked us to change the colours.</span> — Клиент попросил нас поменять цвета.</li>
<li><span class="say">My friend advised me to buy this laptop.</span> — Друг посоветовал мне купить этот ноутбук.</li>
<li><span class="say">I didn't expect them to come so early.</span> — Я не ожидал, что они придут так рано.</li>
<li><span class="say">We persuaded Tom to join our team.</span> — Мы уговорили Тома присоединиться к команде.</li>
<li><span class="say">My dad taught me to swim.</span> — Папа научил меня плавать.</li>
</ul>
<p>«Сказал <b>не</b> делать» — <b>told … not to</b>:</p>
<ul class="g-list">
<li><span class="say">The boss told me to wait.</span> — Начальник сказал мне подождать.</li>
<li><span class="say">The boss told me not to wait.</span> — Начальник сказал мне не ждать.</li>
</ul>
<p>Два исключения — <b>make</b> (заставлять) и <b>let</b> (разрешать): после них <b>без to</b>.</p>
<ul class="g-list">
<li><span class="say">This show always makes me laugh.</span> — Это шоу всегда меня смешит.</li>
<li><span class="say">My mum didn't let me play at night.</span> — Мама не разрешала мне играть ночью.</li>
<li><span class="say">Let's go!</span> — Пошли! <span class="muted">(let's = let us, тоже без to)</span></li>
</ul>
<div class="g-bad">I want that you come. · She made me to wait. · Let me to see.</div>
<div class="g-good">I want <b>you to come</b>. · She made me <b>wait</b>. · Let me <b>see</b>.</div>
<div class="mini" data-q="Мама хочет, чтобы я позвонил." data-o="Mum wants that I call.|Mum wants me to call.|Mum wants I call." data-a="1" data-why="want + кто (me) + to + глагол."></div>
<div class="mini" data-q="He let me ___ his tablet." data-o="to use|use|using" data-a="1" data-why="После let — глагол без to."></div>`
      },
      {
        title: '7. I went to the shop to buy… — to = «чтобы»',
        html: `
<div class="g-idea"><b>to + глагол</b> отвечает на вопрос <b>зачем?</b> Это русское «чтобы», только короче.</div>
<ul class="g-list">
<li><span class="say">I went to the shop to buy some bread.</span> — Я пошёл в магазин, чтобы купить хлеб.</li>
<li><span class="say">Why are you going out? — To get some fresh air.</span> — Зачем ты выходишь? — Подышать воздухом.</li>
<li><span class="say">I turned on the TV to watch the news.</span> — Я включил телевизор, чтобы посмотреть новости.</li>
<li><span class="say">I need money to buy a new PC.</span> — Мне нужны деньги, чтобы купить новый компьютер.</li>
<li><span class="say">I don't have time to watch series.</span> — У меня нет времени смотреть сериалы.</li>
</ul>
<p><b>to</b> или <b>for</b>? Смотрим, что идёт дальше:</p>
<table>
<tr><th>to + глагол</th><th>for + существительное</th></tr>
<tr><td><span class="say">I went out to get a coffee.</span></td><td><span class="say">I went out for a coffee.</span></td></tr>
<tr><td><span class="say">They're going to Italy to see friends.</span></td><td><span class="say">They're going to Italy for a holiday.</span></td></tr>
<tr><td><span class="say">We need money to buy food.</span></td><td><span class="say">We need money for food.</span></td></tr>
</table>
<div class="g-bad">I went to the shop for buy bread. · I came here for to learn English.</div>
<div class="g-good">I went to the shop <b>to buy</b> bread. · I came here <b>to learn</b> English.</div>
<p><b>wait</b> — три варианта:</p>
<ul class="g-list">
<li><span class="say">Please wait for me.</span> — Подожди меня. <span class="muted">(wait for + кого/что)</span></li>
<li><span class="say">I'm waiting to see the doctor.</span> — Я жду, чтобы попасть к врачу. <span class="muted">(wait to + глагол)</span></li>
<li><span class="say">We're waiting for the game to load.</span> — Мы ждём, пока загрузится игра. <span class="muted">(wait for + что + to + глагол)</span></li>
</ul>
<div class="g-tip">«Для чего?» → если дальше <b>действие</b> — to, если <b>предмет</b> — for. Русское «для того, чтобы» никогда не превращается в «for to».</div>
<div class="mini" data-q="I called Anna ___ her about the party." data-o="for ask|to ask|for asking" data-a="1" data-why="Зачем? Дальше действие → to + глагол."></div>
<div class="mini" data-q="Let's go out ___ dinner." data-o="for|to|for to" data-a="0" data-why="Дальше существительное (dinner) → for."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I can to speak English.</div><div class="g-good">I can <b>speak</b> English.</div>
<div class="g-bad">I want go to the concert.</div><div class="g-good">I want <b>to go</b> to the concert.</div>
<div class="g-bad">I enjoy to watch anime.</div><div class="g-good">I enjoy <b>watching</b> anime.</div>
<div class="g-bad">Have you finished to eat?</div><div class="g-good">Have you finished <b>eating</b>?</div>
<div class="g-bad">She suggested to order pizza.</div><div class="g-good">She suggested <b>ordering</b> pizza.</div>
<div class="g-bad">I'd like going to the beach.</div><div class="g-good">I'd like <b>to go</b> to the beach.</div>
<div class="g-bad">I want that you help me.</div><div class="g-good">I want <b>you to help</b> me.</div>
<div class="g-bad">He told me don't wait.</div><div class="g-good">He told me <b>not to</b> wait.</div>
<div class="g-bad">This film makes me to cry.</div><div class="g-good">This film makes me <b>cry</b>.</div>
<div class="g-bad">I came here for learn English.</div><div class="g-good">I came here <b>to learn</b> English.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>can/must + play</b> · <b>want/decide/hope + to play</b> · <b>enjoy/finish/mind/stop/suggest + playing</b> · <b>like/love + оба</b>, но <b>would like + to</b> · <b>want you to</b> · <b>make/let + play</b> · зачем? — <b>to</b> + глагол, <b>for</b> + существительное.</div>`
      }
    ],
    words: [
      ["enjoy", "получать удовольствие, наслаждаться", "I enjoy playing co-op games.", "Мне нравится играть в кооперативные игры."],
      ["mind", "возражать, быть против", "Do you mind waiting a minute?", "Ты не против подождать минутку?"],
      ["finish", "заканчивать", "I've finished drawing the icons.", "Я закончил рисовать иконки."],
      ["suggest", "предлагать (идею)", "She suggested playing a new game.", "Она предложила поиграть в новую игру."],
      ["decide", "решать", "I decided to start a blog.", "Я решил завести блог."],
      ["plan", "планировать", "We plan to release the game in May.", "Мы планируем выпустить игру в мае."],
      ["hope", "надеяться", "I hope to finish on time.", "Надеюсь закончить вовремя."],
      ["expect", "ожидать", "I didn't expect to see you here.", "Не ожидал тебя здесь увидеть."],
      ["offer", "предлагать (сделать самому)", "Tom offered to drive me home.", "Том предложил отвезти меня домой."],
      ["promise", "обещать", "I promise to call you tomorrow.", "Обещаю позвонить тебе завтра."],
      ["refuse", "отказываться", "The cat refused to eat.", "Кот отказался есть."],
      ["forget — forgot", "забывать — забыл", "I forgot to charge my phone.", "Я забыл зарядить телефон."],
      ["learn — learnt/learned", "учиться, узнавать — выучил", "I'm learning to play the guitar.", "Я учусь играть на гитаре."],
      ["try", "пытаться; пробовать", "I tried to call you twice.", "Я дважды пытался тебе позвонить."],
      ["need", "нуждаться, быть нужным", "You don't need to come early.", "Тебе не нужно приходить рано."],
      ["prefer", "предпочитать", "I prefer working at night.", "Я предпочитаю работать ночью."],
      ["hate", "ненавидеть", "I hate waiting in queues.", "Ненавижу стоять в очередях."],
      ["begin — began", "начинать — начал", "It began to snow.", "Пошёл снег."],
      ["continue", "продолжать", "Please continue reading.", "Пожалуйста, продолжайте читать."],
      ["ask", "просить; спрашивать", "She asked me to help her.", "Она попросила меня помочь ей."],
      ["tell — told", "сказать, велеть — сказал", "He told me to be careful.", "Он велел мне быть осторожным."],
      ["advise", "советовать", "The doctor advised me to rest.", "Врач посоветовал мне отдохнуть."],
      ["persuade", "уговорить, убедить", "We persuaded Anna to come.", "Мы уговорили Анну прийти."],
      ["teach — taught", "учить (кого-то) — учил", "My friend taught me to draw.", "Друг научил меня рисовать."],
      ["let — let", "позволять — позволил", "Let me try again.", "Дай мне попробовать ещё раз."],
      ["make — made", "заставлять — заставил", "The teacher made us repeat it.", "Учитель заставил нас повторить."],
      ["laugh", "смеяться", "This streamer always makes me laugh.", "Этот стример всегда меня смешит."],
      ["practise", "практиковаться, тренироваться", "I practise speaking every day.", "Я каждый день тренирую речь."],
      ["fresh air", "свежий воздух", "I went out to get some fresh air.", "Я вышел подышать свежим воздухом."],
      ["hurry", "спешить", "We don't need to hurry.", "Нам не нужно спешить."]
    ],
    texts: [
      {
        id: 't-a2-16-1', title: 'Why I started streaming', level: 'A2',
        text: `Two years ago I decided to start streaming. I'm a designer, and I spend all day at the computer, but in the evenings I enjoy playing old horror games. My friend Max suggested showing my games online. At first I refused to do it. I didn't want people to see my mistakes!
But Max persuaded me to try. He offered to help with the equipment, and he taught me to use the streaming software. I bought a good microphone to make my voice clearer, and I designed my own channel logo.
My first stream was terrible. I forgot to turn on the microphone, and for twenty minutes nobody could hear me. Only three people watched, and one of them was my mum. But I didn't stop streaming. I promised to stream every Friday.
Now about two hundred people watch me every week. I don't mind playing badly — people love laughing at my screams. Some viewers ask me to play games that they like, and I'm happy to try them.
I'd like to make streaming my second job one day. I hope to have a thousand viewers next year. My advice? If you want to start something new, don't wait for the perfect moment to come. Just begin.`,
        questions: [
          { q: 'Who persuaded the writer to start streaming?', o: ['His mum', 'His friend Max', 'His viewers'], a: 1 },
          { q: 'What went wrong during the first stream?', o: ['The game didn\'t work', 'He forgot to turn on the microphone', 'Nobody watched'], a: 1 },
          { q: 'What would he like to do one day?', o: ['Make streaming his second job', 'Stop playing horror games', 'Buy a new computer'], a: 0 }
        ]
      },
      {
        id: 't-a2-16-2', title: 'Plans for Saturday', level: 'A2',
        text: `Anna: Hi, Tom! What do you want to do on Saturday?
Tom: I don't know. I need to finish my portfolio, but I'd love to do something fun too.
Anna: Would you like to go to the new game exhibition? Kate suggested going together.
Tom: Sounds great! When does it start?
Anna: At eleven. Kate wants us to meet at the metro station at half past ten.
Tom: OK. Can you remind me? I always forget to check the time.
Anna: Sure. Do you mind taking the bus there? The metro line is closed at the weekend.
Tom: No problem. I don't mind travelling by bus.
Anna: Great. After the exhibition, I'd like to go to that Korean café to have lunch.
Tom: Good idea. I'd prefer to sit outside if it's sunny.
Anna: Me too. Oh, and my brother asked me to bring him. Is that OK?
Tom: Of course. Your brother is funny. He always makes me laugh.
Anna: He does. But please don't let him talk about his cat for an hour!
Tom: Ha ha. I'll try to stop him. Should I bring anything?
Anna: Bring your phone to take photos. Kate says the exhibition is amazing.
Tom: Perfect. I hope to finish my portfolio on Friday, so I'll be free all day.`,
        questions: [
          { q: 'Where does Kate want them to meet?', o: ['At the café', 'At the metro station', 'At the exhibition'], a: 1 },
          { q: 'How will they travel to the exhibition?', o: ['By metro', 'On foot', 'By bus'], a: 2 },
          { q: 'Why should Tom bring his phone?', o: ['To take photos', 'To call Kate', 'To check the time'], a: 0 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'I don\'t want ___ to bed yet.', o: ['go', 'to go', 'going'], a: 1, why: 'После want — to + глагол.' },
      { t: 'choice', q: 'Do you enjoy ___ new recipes?', o: ['to cook', 'cooking', 'cook'], a: 1, why: 'После enjoy — только -ing.' },
      { t: 'choice', q: 'You must ___ your password.', o: ['change', 'to change', 'changing'], a: 0, why: 'После must — глагол без to.' },
      { t: 'choice', q: 'Kate suggested ___ a break.', o: ['to take', 'take', 'taking'], a: 2, why: 'После suggest — -ing.' },
      { t: 'choice', q: 'We\'ve decided ___ to the sea this summer.', o: ['to go', 'going', 'go'], a: 0, why: 'После decide — to + глагол.' },
      { t: 'choice', q: 'I\'d love ___ your new project.', o: ['seeing', 'to see', 'see'], a: 1, why: 'После would love — только to.' },
      { t: 'choice', q: 'My parents didn\'t let me ___ games at night.', o: ['to play', 'playing', 'play'], a: 2, why: 'После let — глагол без to.' },
      { t: 'choice', q: 'He went to the bank ___ some money.', o: ['for get', 'to get', 'for getting'], a: 1, why: 'Зачем? Дальше действие → to + глагол.' },
      { t: 'gap', q: 'Has it stopped ___ ? (rain)', a: ['raining'], why: 'После stop (перестать) — -ing.' },
      { t: 'gap', q: 'I forgot ___ the milk. (buy)', a: ['to buy'], why: 'После forget — to + глагол.' },
      { t: 'gap', q: 'I don\'t mind ___ at weekends. (work)', a: ['working'], why: 'После mind — -ing.' },
      { t: 'gap', q: 'The teacher told us ___ late. (not / be)', a: ['not to be'], why: 'Велел не делать → told + кто + not to.' },
      { t: 'gap', q: 'I went out ___ some fresh air. (to / for)', a: ['for'], why: 'Дальше существительное (some fresh air) → for.' },
      { t: 'gap', q: 'Do you want me ___ you? (help)', a: ['to help'], why: 'want + кто + to + глагол.' },
      { t: 'order', a: 'I want you to meet my friend', ru: 'Я хочу, чтобы ты познакомился с моим другом' },
      { t: 'order', a: 'Have you finished reading the book', ru: 'Ты закончил читать книгу?' },
      { t: 'tr', q: 'Я надеюсь тебя скоро увидеть.', a: ['i hope to see you soon', 'i hope i will see you soon', 'i hope i see you soon'] },
      { t: 'tr', q: 'Мне нравится рисовать по вечерам.', a: ['i like drawing in the evening', 'i like to draw in the evening', 'i like drawing in the evenings', 'i like to draw in the evenings', 'i enjoy drawing in the evening', 'i enjoy drawing in the evenings'] },
      { t: 'listen', say: 'Would you like me to send you the file?', a: ['would you like me to send you the file'] }
    ],
    test: [
      { t: 'choice', q: 'I\'m going ___ a new laptop next month.', o: ['buy', 'to buy', 'buying'], a: 1, why: 'going to + глагол.' },
      { t: 'choice', q: 'Max offered ___ me with the move.', o: ['helping', 'to help', 'help'], a: 1, why: 'offer (предложить сделать самому) — to + глагол.' },
      { t: 'choice', q: 'It suddenly started ___.', o: ['snow', 'snowing', 'snows'], a: 1, why: 'После start можно -ing (или to snow).' },
      { t: 'choice', q: 'My friend persuaded ___ this series.', o: ['me watch', 'me to watch', 'that I watch'], a: 1, why: 'persuade + кто + to + глагол.' },
      { t: 'choice', q: 'This song always makes me ___ sad.', o: ['feel', 'to feel', 'feeling'], a: 0, why: 'После make (заставлять) — глагол без to.' },
      { t: 'gap', q: 'I\'ve finished ___ the menu screen. (design)', a: ['designing'], why: 'После finish — -ing.' },
      { t: 'gap', q: 'He refused ___ the question. (answer)', a: ['to answer'], why: 'После refuse — to + глагол.' },
      { t: 'gap', q: 'My sister decided ___ the job. She didn\'t like it. (not / take)', a: ['not to take'], why: 'Решила не делать → decide + not to.' },
      { t: 'choice', q: 'We waited for the doors ___.', o: ['open', 'to open', 'opening'], a: 1, why: 'wait for + что + to + глагол.' },
      { t: 'choice', q: 'Would you like to go by car? — No, I\'d prefer ___.', o: ['walking', 'to walk', 'walk'], a: 1, why: 'После would prefer — только to.' },
      { t: 'gap', q: 'I don\'t have time ___ breakfast today. (have)', a: ['to have'], why: 'time + to + глагол: время, чтобы сделать.' },
      { t: 'gap', q: 'Kate asked me ___ her the photos. (send)', a: ['to send'], why: 'ask + кто + to + глагол.' }
    ]
  }
);
