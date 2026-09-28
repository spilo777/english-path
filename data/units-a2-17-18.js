// Юниты A2 17–18: прилагательные и глаголы с предлогами, фразовые глаголы; страдательный залог (is done, was done, is being done, has been done)
COURSE.units.push(
  // ───────────────────────────── UNIT A2-17 ─────────────────────────────
  {
    id: 'a2-17', level: 'A2', num: 17, track: 'main',
    books: { red: [112, 113, 114, 115] },
    title: 'Look at, afraid of, give up — глаголы с предлогами и фразовые',
    summary: 'Научимся правильно говорить «бояться чего-то», «ждать кого-то», «искать», а ещё освоим фразовые глаголы — от get up и give up до log in, pick up и run out of из игр.',
    grammar: [
      {
        title: '1. Главная идея: маленькое слово после глагола — часть смысла',
        html: `
<div class="g-idea">По-русски связь между словами часто показывает <b>падеж</b>: «жду <i>тебя</i>», «боюсь <i>собак</i>», «слушаю <i>музыку</i>». В английском падежей нет — эту работу делает маленькое слово после глагола или прилагательного: <b>wait for</b>, <b>afraid of</b>, <b>listen to</b>. А иногда к глаголу приклеивается частица (up, out, off…) — и получается <b>новый глагол</b> с новым смыслом: give (давать) → <b>give up</b> (сдаваться). Это <b>фразовые глаголы</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я жду <span class="g-gap">_</span> тебя.</p><p>Я боюсь <span class="g-gap">_</span> пауков.</p><p>Послушай <span class="g-gap">_</span> эту песню.</p><p>Я хорошо рисую.</p><p>Не сдавайся!</p><p>Включи свет.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I'm waiting <b>for</b> you.</span></p><p><span class="say">I'm afraid <b>of</b> spiders.</span></p><p><span class="say">Listen <b>to</b> this song.</span></p><p><span class="say">I'm good <b>at</b> drawing.</span></p><p><span class="say">Don't <b>give up</b>!</span></p><p><span class="say"><b>Turn on</b> the light.</span></p></div>
</div>
<p>В этом юните три группы:</p>
<ul class="g-list">
<li><b>прилагательное + предлог</b>: <span class="say">afraid of, good at, interested in</span></li>
<li><b>глагол + предлог</b>: <span class="say">listen to, wait for, look at</span></li>
<li><b>фразовый глагол</b>: <span class="say">get up, give up, pick up, log in</span></li>
</ul>
<div class="g-tip">Учите не слово, а <b>пару</b>: не «wait», а «wait for»; не «afraid», а «afraid of». Как предмет из набора в игре: без второй части он не работает.</div>
<div class="mini" data-q="Я жду автобус." data-o="I'm waiting the bus.|I'm waiting for the bus.|I'm waiting to the bus." data-a="1" data-why="Ждать кого-то / что-то = wait for."></div>`
      },
      {
        title: '2. Прилагательное + предлог: afraid of, good at, interested in',
        html: `
<div class="g-idea">После многих прилагательных стоит свой предлог. Он почти никогда не совпадает с русским — его надо просто запомнить.</div>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>afraid of / scared of</b></td><td>бояться</td><td><span class="say">I'm scared of deep water.</span></td></tr>
<tr><td><b>good at / bad at</b></td><td>хорошо / плохо умеет</td><td><span class="say">She's good at maths.</span></td></tr>
<tr><td><b>interested in</b></td><td>интересуется</td><td><span class="say">I'm interested in UX design.</span></td></tr>
<tr><td><b>fed up with</b></td><td>надоело, достало</td><td><span class="say">I'm fed up with this bug.</span></td></tr>
<tr><td><b>full of</b></td><td>полный (чего)</td><td><span class="say">The chat is full of spoilers.</span></td></tr>
<tr><td><b>different from</b> (или to)</td><td>отличается от</td><td><span class="say">The sequel is different from the first game.</span></td></tr>
<tr><td><b>married to</b></td><td>женат / замужем за</td><td><span class="say">Anna is married to a programmer.</span></td></tr>
<tr><td><b>angry with</b> кем-то</td><td>злится на кого</td><td><span class="say">Why are you angry with me?</span></td></tr>
<tr><td><b>angry about</b> чём-то</td><td>злится из-за чего</td><td><span class="say">Players are angry about the update.</span></td></tr>
</table>
<p>Две пары, где один предлог меняет смысл:</p>
<ul class="g-list">
<li><span class="say">It was kind of you to help me.</span> — Очень мило с твоей стороны, что помог. <span class="muted">(kind / nice <b>of</b> кого-то + to…)</span></li>
<li><span class="say">She's always nice to new players.</span> — Она всегда добра к новичкам. <span class="muted">(kind / nice <b>to</b> кому-то)</span></li>
<li><span class="say">I'm sorry about the noise.</span> — Извините за шум. <span class="muted">(sorry <b>about</b> ситуацию)</span></li>
<li><span class="say">I'm sorry for being late.</span> — Извини, что опоздал. <span class="muted">(sorry <b>for / about</b> + -ing)</span></li>
<li><span class="say">I feel sorry for him.</span> — Мне его жаль. <span class="muted">(feel sorry <b>for</b> кого-то)</span></li>
</ul>
<p><b>После предлога глагол всегда с -ing</b> (как в прошлом уроке после enjoy и before/after):</p>
<div class="g-formula"><span class="g-part">good at / afraid of / thank you for / without</span><span class="g-plus">+</span><span class="g-part g-v">глагол-ing</span></div>
<ul class="g-list">
<li><span class="say">I'm good at finding bugs.</span> — Я хорошо нахожу баги.</li>
<li><span class="say">Are you fed up with doing the same quests?</span> — Тебе не надоело делать одни и те же квесты?</li>
<li><span class="say">Thank you for helping me.</span> — Спасибо, что помог.</li>
<li><span class="say">I'm sorry for not calling you yesterday.</span> — Прости, что не позвонил вчера.</li>
<li><span class="say">Max is thinking of buying a new monitor.</span> — Макс подумывает купить новый монитор.</li>
<li><span class="say">He left without saying goodbye.</span> — Он ушёл, не попрощавшись.</li>
<li><span class="say">After finishing the level, I saved the game.</span> — Пройдя уровень, я сохранил игру.</li>
</ul>
<div class="g-bad">I'm interested by games. · She's married with a doctor. · I'm good in English.</div>
<div class="g-good">I'm interested <b>in</b> games. · She's married <b>to</b> a doctor. · I'm good <b>at</b> English.</div>
<div class="g-bad">Thank you for help me. · He left without to say goodbye.</div>
<div class="g-good">Thank you for <b>helping</b> me. · He left without <b>saying</b> goodbye.</div>
<div class="g-tip"><b>to</b> перед глаголом (want to go) — это частица. А <b>at, in, of, for, about, with, without</b> — предлоги, и после них только <b>-ing</b>.</div>
<div class="mini" data-q="I'm not very good ___ drawing faces." data-o="at|in|on" data-a="0" data-why="Хорошо / плохо уметь = good at / bad at."></div>
<div class="mini" data-q="She left the call without ___ anything." data-o="to say|say|saying" data-a="2" data-why="После предлога without глагол с -ing."></div>`
      },
      {
        title: '3. Глагол + предлог: listen to, wait for, depend on',
        html: `
<div class="g-idea">У многих глаголов есть «свой» предлог. Он стоит <b>перед тем, кого / что</b>: listen <b>to</b> music, wait <b>for</b> Max.</div>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>listen to</b></td><td>слушать</td><td><span class="say">Listen to this soundtrack!</span></td></tr>
<tr><td><b>wait for</b></td><td>ждать</td><td><span class="say">Wait for me! I'm almost ready.</span></td></tr>
<tr><td><b>ask</b> (sb) <b>for</b></td><td>просить (что-то)</td><td><span class="say">Can I ask you for help?</span></td></tr>
<tr><td><b>belong to</b></td><td>принадлежать</td><td><span class="say">This account belongs to my brother.</span></td></tr>
<tr><td><b>happen to</b></td><td>случиться с</td><td><span class="say">What happened to your phone?</span></td></tr>
<tr><td><b>talk / speak to</b> sb (<b>about</b>)</td><td>говорить с (о)</td><td><span class="say">I need to talk to the team about the deadline.</span></td></tr>
<tr><td><b>thank</b> sb <b>for</b></td><td>благодарить за</td><td><span class="say">Thanks for the invite!</span></td></tr>
<tr><td><b>think about / of</b></td><td>думать о</td><td><span class="say">I often think about my old job.</span></td></tr>
<tr><td><b>depend on</b></td><td>зависеть от</td><td><span class="say">It depends on the price.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">We're thinking of moving to another city.</span> — Мы подумываем переехать. <span class="muted">(«подумывать» — of или about)</span></li>
<li><span class="say">What do you think of the new logo?</span> — Как тебе новый логотип? <span class="muted">(мнение — think of)</span></li>
<li><span class="say">Are you coming tonight? — It depends. It depends what time you start.</span> — Зависит от того, во сколько начнёте. <span class="muted">(перед what / where / how можно без on)</span></li>
</ul>
<p><b>Ловушка наоборот:</b> по-русски предлог есть, а в английском — <b>нет</b>. Эти глаголы берут человека сразу:</p>
<ul class="g-list">
<li><span class="say">I'll call you tonight.</span> — Я позвоню тебе. <span class="muted">(так же phone, text, email)</span></li>
<li><span class="say">Text me when you're online.</span> — Напиши мне, когда будешь в сети.</li>
<li><span class="say">Let's meet Anna at the café.</span> — Давай встретимся с Анной.</li>
<li><span class="say">Let's discuss the plan.</span> — Давай обсудим план. <span class="muted">(не discuss about)</span></li>
<li><span class="say">Please answer the question.</span> — Ответь на вопрос.</li>
</ul>
<div class="g-bad">I'm listening music. · Wait me! · It depends of the weather.</div>
<div class="g-good">I'm listening <b>to</b> music. · Wait <b>for</b> me! · It depends <b>on</b> the weather.</div>
<div class="g-bad">I'll call to you. · Let's discuss about it.</div>
<div class="g-good">I'll call you. · Let's discuss it.</div>
<div class="mini" data-q="I'll text ___ after the meeting." data-o="you|to you|for you" data-a="0" data-why="call / phone / text / email + человек без предлога."></div>
<div class="mini" data-q="Do you like horror games? — It depends ___ the game." data-o="of|from|on" data-a="2" data-why="Зависеть от = depend on."></div>`
      },
      {
        title: '4. Look at, look for, look after — один глагол, разные смыслы',
        html: `
<div class="g-idea">look сам по себе — «смотреть, выглядеть». А с предлогом это уже разные действия.</div>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>look at</b></td><td>смотреть на</td><td><span class="say">Look at the screen.</span></td></tr>
<tr><td><b>look for</b></td><td>искать</td><td><span class="say">I'm looking for my headphones.</span></td></tr>
<tr><td><b>look after</b></td><td>присматривать, заботиться</td><td><span class="say">Can you look after my cat this weekend?</span></td></tr>
<tr><td><b>look up</b> a word</td><td>посмотреть (в словаре, в интернете)</td><td><span class="say">I didn't know the word, so I looked it up.</span></td></tr>
<tr><td><b>look out!</b></td><td>осторожно!</td><td><span class="say">Look out! There's a car!</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Why are you looking at me like that?</span> — Почему ты так на меня смотришь?</li>
<li><span class="say">She's looking for a new job.</span> — Она ищет новую работу.</li>
<li><span class="say">Don't lose my charger. Look after it.</span> — Не потеряй зарядку. Береги её.</li>
<li><span class="say">Bye! Look after yourself.</span> — Пока! Береги себя.</li>
</ul>
<div class="g-bad">I'm looking my keys. · Look on the camera and smile.</div>
<div class="g-good">I'm looking <b>for</b> my keys. · Look <b>at</b> the camera and smile.</div>
<div class="g-tip"><b>look for</b> = искать (процесс), <b>find</b> = найти (результат): <span class="say">I'm looking for my keys, but I can't find them.</span></div>
<div class="mini" data-q="I can't find my mouse. I'm looking ___ it." data-o="at|for|after" data-a="1" data-why="Искать = look for."></div>`
      },
      {
        title: '5. Фразовые глаголы: go in, get up, sit down — куда движемся',
        html: `
<div class="g-idea">Фразовый глагол = <b>глагол + частица</b> (in, out, up, down, on, off, away, back, over, round). Часто частица — это <b>направление</b>, как русская приставка: <b>в</b>ойти = go <b>in</b>, <b>вы</b>йти = go <b>out</b>, <b>у</b>бежать = run <b>away</b>.</div>
<table>
<tr><th>Частица</th><th>Куда</th><th>Примеры</th></tr>
<tr><td><b>in / out</b></td><td>внутрь / наружу</td><td>go in, get in, go out, get out, look out</td></tr>
<tr><td><b>up / down</b></td><td>вверх / вниз</td><td>stand up, get up, look up, sit down, lie down, fall down</td></tr>
<tr><td><b>on / off</b></td><td>на / с (транспорт и т. п.)</td><td>get on, get off, fall off</td></tr>
<tr><td><b>away / off</b></td><td>прочь</td><td>run away, go away, drive off</td></tr>
<tr><td><b>back</b></td><td>назад</td><td>come back, go back, be back</td></tr>
<tr><td><b>over / round</b></td><td>через, переворот / кругом</td><td>climb over, turn over, fall over, look round, turn around</td></tr>
</table>
<ul class="g-list">
<li><span class="say">The door was open, so I went in.</span> — Дверь была открыта, и я вошёл.</li>
<li><span class="say">The taxi stopped and we got out.</span> — Такси остановилось, и мы вышли.</li>
<li><span class="say">I got on the bus at the station and got off at the park.</span> — Я сел в автобус у вокзала и вышел у парка.</li>
<li><span class="say">I usually get up at eight.</span> — Я обычно встаю в восемь. <span class="muted">(get up — встать с кровати; stand up — встать на ноги)</span></li>
<li><span class="say">Please sit down.</span> — Садитесь, пожалуйста.</li>
<li><span class="say">Tom has gone away for a week. He'll be back on Monday.</span> — Том уехал на неделю. Вернётся в понедельник.</li>
<li><span class="say">Somebody called my name, so I looked round.</span> — Кто-то назвал меня, и я оглянулся.</li>
</ul>
<p>А здесь смысл уже <b>не угадать</b> по направлению — просто запоминаем:</p>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>carry on / go on</b></td><td>продолжать</td><td><span class="say">Don't stop. Carry on.</span></td></tr>
<tr><td><b>hold on</b></td><td>подожди (секунду)</td><td><span class="say">Hold on a minute.</span></td></tr>
<tr><td><b>get on</b></td><td>справляться, успевать</td><td><span class="say">How did you get on at the interview?</span></td></tr>
<tr><td><b>take off</b></td><td>взлетать</td><td><span class="say">The plane took off late.</span></td></tr>
<tr><td><b>go off</b></td><td>сработать, зазвонить</td><td><span class="say">My alarm went off at six.</span></td></tr>
<tr><td><b>grow up</b></td><td>вырасти</td><td><span class="say">I grew up in a small town.</span></td></tr>
<tr><td><b>wake up</b></td><td>просыпаться</td><td><span class="say">I woke up at three in the morning.</span></td></tr>
<tr><td><b>speak up</b></td><td>говорить громче</td><td><span class="say">Can you speak up? I can't hear you.</span></td></tr>
<tr><td><b>wash up</b></td><td>мыть посуду</td><td><span class="say">I'll cook, you wash up.</span></td></tr>
<tr><td><b>slow down</b></td><td>сбавить скорость</td><td><span class="say">Slow down! You're driving too fast.</span></td></tr>
<tr><td><b>break down</b></td><td>сломаться (о машине, технике)</td><td><span class="say">My car broke down on the way to work.</span></td></tr>
</table>
<div class="g-tip">Во фразовом глаголе меняется только <b>первое</b> слово: get up → <b>got</b> up, wake up → <b>woke</b> up, take off → <b>took</b> off. Частица всегда та же.</div>
<div class="mini" data-q="I can't hear you. Can you speak ___?" data-o="up|down|on" data-a="0" data-why="Говорить громче = speak up (голос «вверх»)."></div>
<div class="mini" data-q="Our flight ___ an hour late." data-o="took off|took up|took out" data-a="0" data-why="Взлетать (о самолёте) = take off."></div>`
      },
      {
        title: '6. Put it on, а не put on it: куда ставить объект',
        html: `
<div class="g-idea">У многих фразовых глаголов есть <b>объект</b> — что надеваем, что включаем. Если объект — обычное слово (the light, your coat), его можно поставить <b>до или после</b> частицы. Если это <b>it / them / me / him / her / us</b> — только <b>в середину</b>.</div>
<div class="g-formula"><span class="g-part g-v">turn on</span><span class="g-plus">+</span><span class="g-part">the light</span><span class="g-sep">·</span><span class="g-part g-v">turn</span><span class="g-plus">+</span><span class="g-part">the light</span><span class="g-plus">+</span><span class="g-part g-v">on</span><span class="g-sep">·</span><span class="g-part g-v">turn</span><span class="g-plus">+</span><span class="g-part"><b>it</b></span><span class="g-plus">+</span><span class="g-part g-v">on</span></div>
<ul class="g-list">
<li><span class="say">It was cold, so I put on my jacket.</span> = <span class="say">I put my jacket on.</span> — Я надел куртку.</li>
<li><span class="say">Here's your jacket. Put it on.</span> — Вот твоя куртка. Надень её.</li>
<li><span class="say">Your shoes are wet. Take them off.</span> — Сними их.</li>
<li><span class="say">I'm going to bed. Can you turn the TV off?</span> — Выключишь телевизор?</li>
</ul>
<table>
<tr><th>English</th><th>Значение</th><th>С it / them</th></tr>
<tr><td><b>put on / take off</b></td><td>надеть / снять</td><td>put it on, take it off</td></tr>
<tr><td><b>turn / switch on, off</b></td><td>включить / выключить</td><td>turn it on, switch it off</td></tr>
<tr><td><b>turn up / turn down</b></td><td>сделать громче (теплее) / тише</td><td>turn it down</td></tr>
<tr><td><b>pick up / put down</b></td><td>поднять / положить</td><td>pick them up</td></tr>
<tr><td><b>give / bring / take / put back</b></td><td>вернуть / принести / отнести / положить обратно</td><td>give it back</td></tr>
<tr><td><b>pay</b> sb <b>back</b></td><td>вернуть деньги</td><td>I'll pay you back.</td></tr>
<tr><td><b>try on</b></td><td>примерить</td><td>try it on</td></tr>
<tr><td><b>fill in / fill out</b></td><td>заполнить (форму)</td><td>fill it in</td></tr>
<tr><td><b>throw away</b></td><td>выбросить</td><td>throw them away</td></tr>
<tr><td><b>put away</b></td><td>убрать на место</td><td>put it away</td></tr>
<tr><td><b>look up</b></td><td>посмотреть (слово)</td><td>look it up</td></tr>
<tr><td><b>give up</b></td><td>бросить (занятие)</td><td>I gave it up.</td></tr>
<tr><td><b>wake</b> sb <b>up</b></td><td>разбудить</td><td>wake me up</td></tr>
<tr><td><b>put out / cross out</b></td><td>потушить / зачеркнуть</td><td>put it out, cross it out</td></tr>
<tr><td><b>knock over / knock down</b></td><td>опрокинуть / снести (здание)</td><td>Don't knock it over!</td></tr>
<tr><td><b>show</b> sb <b>round</b></td><td>провести экскурсию</td><td>Let me show you round.</td></tr>
</table>
<div class="g-bad">Turn off it. · Pick up them. · Wake up me at seven.</div>
<div class="g-good">Turn <b>it</b> off. · Pick <b>them</b> up. · Wake <b>me</b> up at seven.</div>
<div class="g-tip">Глаголы с <b>предлогом</b> из блоков 3–4 так не разрываются: <span class="say">look for it</span>, <span class="say">wait for them</span>, <span class="say">listen to it</span> — предлог всегда прямо перед объектом.</div>
<div class="mini" data-q="These jeans look nice. Can I try ___?" data-o="on them|them on|them in" data-a="1" data-why="them стоит между глаголом и частицей: try them on."></div>
<div class="mini" data-q="The music is too loud. Please turn ___." data-o="down it|it down|it up" data-a="1" data-why="Тише = turn down; it — в середину: turn it down."></div>`
      },
      {
        title: '7. Большая таблица: фразовые глаголы геймера',
        html: `
<div class="g-idea">В играх, чатах и на стримах фразовые глаголы — на каждом шагу. Вот самые частые. Большинство из них вы уже узнаете по частице.</div>
<table>
<tr><th>English</th><th>Значение</th><th>Пример</th></tr>
<tr><td><b>log in / log out</b></td><td>войти / выйти (из аккаунта)</td><td><span class="say">Log in with your email.</span></td></tr>
<tr><td><b>sign up</b></td><td>зарегистрироваться</td><td><span class="say">I signed up for the beta test.</span></td></tr>
<tr><td><b>set up</b></td><td>настроить, установить</td><td><span class="say">It took an hour to set up the controller.</span></td></tr>
<tr><td><b>turn on / turn off</b></td><td>включить / выключить</td><td><span class="say">Turn off the music in the settings.</span></td></tr>
<tr><td><b>pick up</b></td><td>подобрать (предмет)</td><td><span class="say">Pick up the key and open the door.</span></td></tr>
<tr><td><b>give up</b></td><td>сдаться</td><td><span class="say">Don't give up! The boss has low HP.</span></td></tr>
<tr><td><b>run out of</b></td><td>закончиться (у кого-то)</td><td><span class="say">I've run out of ammo!</span></td></tr>
<tr><td><b>level up</b></td><td>повысить уровень</td><td><span class="say">My mage levels up very fast.</span></td></tr>
<tr><td><b>power up</b></td><td>усилиться</td><td><span class="say">Power up before the final fight.</span></td></tr>
<tr><td><b>use up</b></td><td>израсходовать всё</td><td><span class="say">I've used up all my potions.</span></td></tr>
<tr><td><b>hold on</b></td><td>подожди</td><td><span class="say">Hold on, I'm reloading.</span></td></tr>
<tr><td><b>hurry up</b></td><td>поторопись</td><td><span class="say">Hurry up, the zone is closing!</span></td></tr>
<tr><td><b>come on</b></td><td>давай! ну же!</td><td><span class="say">Come on, we can win this!</span></td></tr>
<tr><td><b>carry on / go on</b></td><td>продолжать</td><td><span class="say">Go on without me. I'll catch up.</span></td></tr>
<tr><td><b>catch up (with)</b></td><td>догнать</td><td><span class="say">Wait, I need to catch up with you.</span></td></tr>
<tr><td><b>team up (with)</b></td><td>объединиться</td><td><span class="say">Let's team up with Anna's squad.</span></td></tr>
<tr><td><b>come back / go back</b></td><td>вернуться</td><td><span class="say">Go back to the last checkpoint.</span></td></tr>
<tr><td><b>look out! / watch out!</b></td><td>осторожно!</td><td><span class="say">Watch out! Sniper on the roof!</span></td></tr>
<tr><td><b>take down</b></td><td>завалить (врага)</td><td><span class="say">We took down the boss in ten minutes.</span></td></tr>
<tr><td><b>find out</b></td><td>узнать, выяснить</td><td><span class="say">I want to find out what happens next.</span></td></tr>
<tr><td><b>figure out</b></td><td>разобраться, понять</td><td><span class="say">I can't figure out this puzzle.</span></td></tr>
<tr><td><b>back up</b></td><td>сделать копию; прикрыть</td><td><span class="say">Back up your saves. · Back me up!</span></td></tr>
<tr><td><b>shut down</b></td><td>выключить; закрыться</td><td><span class="say">The servers shut down at midnight.</span></td></tr>
</table>
<div class="g-tip"><b>run out of</b> — сразу три слова: <span class="say">We've run out of time.</span> — У нас кончилось время. Если кончилось само, без «у кого», of не нужен: <span class="say">Time ran out.</span></div>
<div class="mini" data-q="I can't heal — I've ___ potions." data-o="run out of|run out|given up" data-a="0" data-why="Закончилось что-то у меня = run out of + что."></div>
<div class="mini" data-q="Before you play online, you need to ___." data-o="log in|log it in|login to" data-a="0" data-why="Войти в аккаунт = log in (глагол из двух слов)."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I'm afraid from spiders.</div><div class="g-good">I'm afraid <b>of</b> spiders.</div>
<div class="g-bad">She's interested for design.</div><div class="g-good">She's interested <b>in</b> design.</div>
<div class="g-bad">Thanks for invite me.</div><div class="g-good">Thanks for <b>inviting</b> me.</div>
<div class="g-bad">Listen me! · Wait me!</div><div class="g-good">Listen <b>to</b> me! · Wait <b>for</b> me!</div>
<div class="g-bad">I'll phone to my mum.</div><div class="g-good">I'll phone my mum.</div>
<div class="g-bad">It depends from the weather.</div><div class="g-good">It depends <b>on</b> the weather.</div>
<div class="g-bad">I'm looking my phone.</div><div class="g-good">I'm looking <b>for</b> my phone.</div>
<div class="g-bad">Your coat is here. Put on it.</div><div class="g-good">Put <b>it on</b>.</div>
<div class="g-bad">I've run out ammo.</div><div class="g-good">I've run out <b>of</b> ammo.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Учим парами: <b>afraid of, good at, interested in, listen to, wait for, depend on</b>; после предлога — <b>-ing</b>; call / text / meet — без предлога; во фразовом глаголе <b>it / them</b> — в середину: <b>turn it off, pick them up</b>.</div>`
      }
    ],
    words: [
      ["afraid of", "бояться (чего-то)", "Are you afraid of the dark?", "Ты боишься темноты?"],
      ["scared of", "испуганный; бояться", "My cat is scared of the vacuum cleaner.", "Мой кот боится пылесоса."],
      ["good at", "хорошо уметь, быть сильным в", "She's really good at drawing.", "Она очень хорошо рисует."],
      ["interested in", "интересоваться (чем-то)", "I'm interested in game design.", "Я интересуюсь геймдизайном."],
      ["fed up with", "сыт по горло, надоело", "I'm fed up with waiting.", "Мне надоело ждать."],
      ["full of", "полный (чего-то)", "The server is full of bots.", "Сервер полон ботов."],
      ["different from", "отличающийся от", "This game is different from the others.", "Эта игра отличается от других."],
      ["proud of", "гордиться (чем-то)", "I'm proud of this project.", "Я горжусь этим проектом."],
      ["belong to", "принадлежать", "Does this bag belong to you?", "Это твоя сумка?"],
      ["depend on", "зависеть от", "It depends on the weather.", "Это зависит от погоды."],
      ["happen to", "случиться с", "What happened to your laptop?", "Что случилось с твоим ноутбуком?"],
      ["look for", "искать", "I'm looking for a new job.", "Я ищу новую работу."],
      ["look after", "присматривать, заботиться", "Can you look after my dog?", "Присмотришь за моей собакой?"],
      ["give up — gave up", "сдаваться; бросать — сдался", "I almost gave up, but then I won.", "Я чуть не сдался, но потом победил."],
      ["pick up", "поднять, подобрать; забрать", "Pick up the sword.", "Подбери меч."],
      ["turn on / turn off", "включить / выключить", "Turn off the lights, please.", "Выключи свет, пожалуйста."],
      ["log in / log out", "войти / выйти (из аккаунта)", "I can't log in to my account.", "Я не могу войти в аккаунт."],
      ["run out of — ran out of", "закончиться (у кого-то)", "We ran out of coffee.", "У нас закончился кофе."],
      ["level up", "повысить уровень", "You level up after every quest.", "Ты повышаешь уровень после каждого квеста."],
      ["put on / take off", "надеть / снять; взлетать (take off)", "Take off your shoes, please.", "Сними обувь, пожалуйста."],
      ["wake up — woke up", "просыпаться; будить", "Wake me up at seven.", "Разбуди меня в семь."],
      ["hold on", "подождать (секунду)", "Hold on, I'm coming.", "Подожди, я иду."],
      ["carry on", "продолжать", "Carry on, you're doing great.", "Продолжай, у тебя отлично получается."],
      ["find out — found out", "узнать, выяснить", "I found out the truth.", "Я узнал правду."],
      ["come back — came back", "вернуться", "When are you coming back?", "Когда ты вернёшься?"],
      ["break down — broke down", "сломаться (о технике)", "My old PC broke down.", "Мой старый компьютер сломался."],
      ["throw away — threw away", "выбросить", "Don't throw it away!", "Не выбрасывай это!"],
      ["try on", "примерять", "Can I try it on?", "Можно примерить?"],
      ["set up — set up", "настроить, установить", "Can you help me set up the router?", "Поможешь настроить роутер?"],
      ["sign up", "зарегистрироваться, записаться", "I signed up for an English course.", "Я записался на курс английского."],
      ["fill in", "заполнить (форму)", "Please fill in this form.", "Заполните, пожалуйста, эту форму."]
    ],
    texts: [
      {
        id: 't-a2-17-1', title: 'Voice chat: one more try', level: 'A2',
        text: `Max: OK, everybody here? Lena, are you online?
Lena: Hold on, I can't log in. The game wants me to set up two-factor authentication.
Tom: Come on, Lena, hurry up! The raid starts in five minutes.
Lena: I'm in! Sorry for keeping you waiting.
Max: No problem. Listen to the plan. Tom, you look after the healer. Lena and I go in first.
Tom: Wait, what happened to my shield? I can't find it.
Max: Look in your bag. You picked it up after the last fight.
Tom: Found it. Thanks.
Lena: Watch out! There are three guards on the bridge!
Max: I'm running out of health. Tom, heal me!
Tom: I can't. I've used up all my mana. Go back and wait for me.
Lena: I've taken down two of them. Max, carry on, I'll catch up with you.
Max: The boss is here… He's too strong. Maybe we should give up.
Lena: No way! We're good at this. One more try.
Tom: I agree. Let's power up and go back in.
Max: OK, OK. Oh no, my PC has just shut down! It's so hot in my room.
Lena: Turn on the fan and come back quickly!
Max: I'm back. Let's do this!
Tom: And this time, look at the map before you run in, Max.`,
        questions: [
          { q: 'Why couldn\'t Lena log in at first?', o: ['She forgot her password', 'She had to set up two-factor authentication', 'The servers shut down'], a: 1 },
          { q: 'Why can\'t Tom heal Max?', o: ['He has used up his mana', 'He can\'t find his shield', 'He has given up'], a: 0 },
          { q: 'What happened to Max\'s PC?', o: ['It broke down forever', 'It shut down because it was hot', 'Somebody turned it off'], a: 1 }
        ]
      },
      {
        title: 'Afraid of the big meeting', id: 't-a2-17-2', level: 'A2',
        text: `Kate is a designer. She's good at drawing and she's really interested in mobile apps. But she has one problem: she's afraid of speaking in front of people.
Last month her boss asked her to show her new design to the client. Kate thought about it all night. She woke up at five and couldn't go back to sleep. "Maybe I should give up and ask somebody else to do it," she thought.
Her friend Anna called her in the morning. "Don't be scared of the client," Anna said. "Nobody knows this app better than you. You're just fed up with worrying. Look at your slides one more time, and then turn off your laptop and have breakfast."
Kate listened to her friend. She put on her favourite jacket and went to the office. At the meeting, she looked at the client and started talking. After a few minutes she wasn't nervous any more.
The client was very different from what she expected. He asked a lot of questions and thanked her for explaining everything so clearly. "It was very kind of you to prepare the extra screens," he said.
Now Kate is thinking of taking a course in public speaking. "It depends on the price," she says, "but I don't want to be afraid of meetings any more."`,
        questions: [
          { q: 'What is Kate afraid of?', o: ['Clients', 'Speaking in front of people', 'Mobile apps'], a: 1 },
          { q: 'Who helped Kate in the morning?', o: ['Her boss', 'Her friend Anna', 'The client'], a: 1 },
          { q: 'What is Kate thinking of doing now?', o: ['Changing her job', 'Taking a course in public speaking', 'Giving up design'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'My little brother is afraid ___ the dark.', o: ['from', 'of', 'about'], a: 1, why: 'Бояться чего-то = afraid of.' },
      { t: 'choice', q: 'Are you interested ___ photography?', o: ['in', 'on', 'for'], a: 0, why: 'Интересоваться = interested in.' },
      { t: 'choice', q: 'I\'m fed up ___ this weather. It rains every day.', o: ['of', 'with', 'from'], a: 1, why: 'Надоело = fed up with.' },
      { t: 'choice', q: 'I\'m going to call ___ tonight.', o: ['to my mum', 'my mum', 'for my mum'], a: 1, why: 'call / phone / text + человек без предлога.' },
      { t: 'choice', q: 'This laptop isn\'t mine. It belongs ___ the office.', o: ['to', 'at', 'for'], a: 0, why: 'Принадлежать = belong to.' },
      { t: 'choice', q: 'I\'ve lost my glasses. Can you help me look ___ them?', o: ['at', 'after', 'for'], a: 2, why: 'Искать = look for.' },
      { t: 'choice', q: 'Here\'s your jacket. ___', o: ['Put on it.', 'Put it on.', 'Put it.'], a: 1, why: 'it стоит между глаголом и частицей: put it on.' },
      { t: 'choice', q: 'Don\'t stop! We\'re almost there. ___!', o: ['Carry on', 'Give up', 'Take off'], a: 0, why: 'Продолжать = carry on.' },
      { t: 'gap', q: 'Thank you for ___ me with the project. (help)', a: ['helping'], why: 'После предлога for глагол с -ing.' },
      { t: 'gap', q: 'Can you ___ me up at seven tomorrow? (разбудить)', a: ['wake'], why: 'Разбудить кого-то = wake sb up.' },
      { t: 'gap', q: 'We\'ve run out ___ snacks. Let\'s order pizza.', a: ['of'], why: 'Закончиться у кого-то = run out of + что.' },
      { t: 'gap', q: 'It\'s too dark here. Can you turn the light ___? (включить)', a: ['on'], why: 'Включить = turn on; объект в середине: turn the light on.' },
      { t: 'gap', q: 'Will you come to the party? — It depends ___ the time.', a: ['on'], why: 'Зависеть от = depend on.' },
      { t: 'gap', q: 'The boss is too strong. I ___ up after ten tries. (give, прошлое)', a: ['gave'], why: 'Меняется только глагол: give up → gave up.' },
      { t: 'order', a: 'She is very good at drawing', ru: 'Она очень хорошо рисует' },
      { t: 'order', a: 'Please turn it off now', ru: 'Пожалуйста, выключи это сейчас' },
      { t: 'tr', q: 'Подожди меня!', a: ['wait for me', 'hold on for me'] },
      { t: 'tr', q: 'Не сдавайся!', a: ['don\'t give up', 'do not give up'] },
      { t: 'listen', say: 'I\'m looking for my keys.', a: ['i\'m looking for my keys', 'i am looking for my keys'] }
    ],
    test: [
      { t: 'choice', q: 'It was very nice ___ you to lend me your console.', o: ['to', 'of', 'for'], a: 1, why: 'Мило с чьей-то стороны = nice / kind of sb to…' },
      { t: 'choice', q: 'Our new game is very different ___ our first one.', o: ['from', 'of', 'with'], a: 0, why: 'Отличаться от = different from (или to).' },
      { t: 'choice', q: 'Tom left the stream without ___ goodbye.', o: ['say', 'to say', 'saying'], a: 2, why: 'После предлога without — глагол с -ing.' },
      { t: 'choice', q: 'Why are you angry ___ me? What have I done?', o: ['on', 'with', 'about'], a: 1, why: 'Злиться на человека = angry with sb (about — из-за ситуации).' },
      { t: 'gap', q: 'I\'m sorry ___ being late. The bus broke down.', a: ['for', 'about'], why: 'Извиниться за то, что сделал = sorry for / about + -ing.' },
      { t: 'choice', q: 'We need to talk. Let\'s ___ the new design tomorrow.', o: ['discuss', 'discuss about', 'discuss of'], a: 0, why: 'discuss (обсуждать) — без предлога.' },
      { t: 'choice', q: 'What\'s this word? I\'ll look ___ in the dictionary.', o: ['up it', 'it up', 'it for'], a: 1, why: 'Посмотреть слово = look up; it в середине: look it up.' },
      { t: 'gap', q: 'These old magazines are useless. Can I throw them ___?', a: ['away'], why: 'Выбросить = throw away; them в середине.' },
      { t: 'choice', q: 'My sister is a nurse. She looks ___ sick people.', o: ['for', 'at', 'after'], a: 2, why: 'Заботиться, ухаживать = look after.' },
      { t: 'gap', q: 'Are you thinking ___ changing your job? (подумываешь)', a: ['of', 'about'], why: 'Подумывать сделать = think of / about + -ing.' },
      { t: 'choice', q: 'The plane ___ at 6 a.m., so we got up at three.', o: ['took off', 'went off', 'got off'], a: 0, why: 'Самолёт взлетел = took off.' },
      { t: 'choice', q: 'I don\'t have an account yet. I need to ___ first.', o: ['sign up', 'give up', 'pick up'], a: 0, why: 'Зарегистрироваться = sign up.' }
    ]
  },

  // ───────────────────────────── UNIT A2-18 ─────────────────────────────
  {
    id: 'a2-18', level: 'A2', num: 18, track: 'main',
    books: { red: [21, 22] },
    title: 'Is done, was done — страдательный залог',
    summary: 'Научимся говорить, что с чем-то делают или сделали, когда важно не «кто», а «что случилось»: The game was made in 1984. My account has been hacked.',
    grammar: [
      {
        title: '1. Главная идея: важно не кто сделал, а что случилось',
        html: `
<div class="g-idea">Иногда нам неважно или неизвестно, <b>кто</b> сделал действие. Важно, <b>что</b> случилось с предметом. По-русски мы говорим «офис убирают», «телефон украли», «дом построен». По-английски для этого есть одна схема — <b>страдательный залог (passive)</b>: предмет стоит в начале, а действие «происходит с ним».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Офис убирают каждый день.</p><p>Мой телефон украли.</p><p>Эта игра сделана в Японии.</p><p>Меня не пригласили.</p><p>Я родился в Казани.</p></div>
  <div><div class="g-h">English</div><p><span class="say">The office <b>is cleaned</b> every day.</span></p><p><span class="say">My phone <b>was stolen</b>.</span></p><p><span class="say">This game <b>was made</b> in Japan.</span></p><p><span class="say">I <b>wasn't invited</b>.</span></p><p><span class="say">I <b>was born</b> in Kazan.</span></p></div>
</div>
<p>Сравните — одно событие, два взгляда:</p>
<ul class="g-list">
<li><span class="say">Somebody cleans the office every day.</span> — <b>active</b>: главный — тот, кто делает.</li>
<li><span class="say">The office is cleaned every day.</span> — <b>passive</b>: главный — офис; кто убирает, неважно.</li>
</ul>
<div class="g-tip">Русское «убирают», «украли», «построили» без слова «кто» — верный сигнал: по-английски нужен passive.</div>
<div class="mini" data-q="Мою машину починили." data-o="My car repaired.|My car was repaired.|My car was repair." data-a="1" data-why="Машина сама себя не чинила → passive: was + repaired."></div>`
      },
      {
        title: '2. Формула: be + третья форма глагола',
        html: `
<div class="g-formula"><span class="g-part">что / кто</span><span class="g-plus">+</span><span class="g-part g-v">be</span><span class="g-plus">+</span><span class="g-part g-v">третья форма (V3)</span></div>
<p><b>be</b> показывает время (is, was, has been…), а третья форма — само действие. Третью форму вы уже знаете по Present Perfect (I have <b>done</b>, I have <b>seen</b>).</p>
<ul class="g-list">
<li>Правильные глаголы: <b>-ed</b> — cleaned, invented, designed, released, invited.</li>
<li>Неправильные — третья колонка:</li>
</ul>
<table>
<tr><th>Глагол</th><th>V3</th><th>Пример</th></tr>
<tr><td>make</td><td><b>made</b></td><td><span class="say">Paper is made from wood.</span></td></tr>
<tr><td>build</td><td><b>built</b></td><td><span class="say">This bridge was built in 1900.</span></td></tr>
<tr><td>steal</td><td><b>stolen</b></td><td><span class="say">My bike was stolen.</span></td></tr>
<tr><td>write</td><td><b>written</b></td><td><span class="say">The book was written in French.</span></td></tr>
<tr><td>sell</td><td><b>sold</b></td><td><span class="say">Tickets are sold online.</span></td></tr>
<tr><td>speak</td><td><b>spoken</b></td><td><span class="say">English is spoken everywhere.</span></td></tr>
<tr><td>take · give · break</td><td><b>taken · given · broken</b></td><td><span class="say">The window was broken.</span></td></tr>
</table>
<div class="g-bad">The game was make in Poland.</div>
<div class="g-good">The game was <b>made</b> in Poland.</div>
<div class="mini" data-q="These photos were ___ by my sister." data-o="take|took|taken" data-a="2" data-why="После be — третья форма: take → taken."></div>`
      },
      {
        title: '3. Сейчас и всегда: is / are + V3',
        html: `
<div class="g-idea">Для того, что делают <b>обычно, регулярно, всегда</b> — Present Simple passive: <b>am / is / are + V3</b>.</div>
<table>
<tr><th></th><th>Пример</th><th>Перевод</th></tr>
<tr><td>+</td><td><span class="say">Butter is made from milk.</span></td><td>Масло делают из молока.</td></tr>
<tr><td>+</td><td><span class="say">Our servers are updated every Tuesday.</span></td><td>Серверы обновляют по вторникам.</td></tr>
<tr><td>+</td><td><span class="say">I'm never invited to these meetings.</span></td><td>Меня никогда не зовут на эти встречи.</td></tr>
<tr><td>−</td><td><span class="say">This room isn't used very much.</span></td><td>Эту комнату мало используют.</td></tr>
<tr><td>?</td><td><span class="say">Are dogs allowed in the café?</span></td><td>В кафе можно с собаками?</td></tr>
<tr><td>?</td><td><span class="say">How is this word pronounced?</span></td><td>Как произносится это слово?</td></tr>
</table>
<div class="g-steps"><div class="g-h">Вопрос в passive</div><ol>
<li>Вопросительное слово (если есть): Where / How often / When…</li>
<li><b>is / are</b> (или was / were).</li>
<li>Предмет.</li>
<li>V3 — в самом конце.</li>
</ol></div>
<ul class="g-list">
<li><span class="say">Where are these phones made?</span> — Где делают эти телефоны?</li>
<li><span class="say">How often are the windows cleaned?</span> — Как часто моют окна?</li>
</ul>
<div class="g-bad">Football plays in many countries.</div>
<div class="g-good">Football <b>is played</b> in many countries. <span class="muted">— футбол не играет сам, в него играют</span></div>
<div class="mini" data-q="Coffee ___ in Brazil and Colombia." data-o="grows|is grown|is grow" data-a="1" data-why="Кофе выращивают (он не сам) → is + grown."></div>`
      },
      {
        title: '4. В прошлом: was / were + V3 и I was born',
        html: `
<div class="g-idea">Что сделали когда-то в прошлом — Past Simple passive: <b>was / were + V3</b>. was — для одного, were — для многих.</div>
<ul class="g-list">
<li><span class="say">This house was built a hundred years ago.</span> — Этот дом построили сто лет назад.</li>
<li><span class="say">These houses were built a hundred years ago.</span> — Эти дома построили…</li>
<li><span class="say">When was the telephone invented?</span> — Когда изобрели телефон?</li>
<li><span class="say">We weren't invited to the wedding.</span> — Нас не пригласили на свадьбу.</li>
<li><span class="say">Was anybody hurt? — Yes, two people were taken to hospital.</span> — Кто-нибудь пострадал? — Да, двоих увезли в больницу.</li>
<li><span class="say">The game was released in March.</span> — Игра вышла в марте.</li>
</ul>
<p><b>Родиться</b> по-английски — тоже passive, и почти всегда в прошлом:</p>
<div class="g-formula"><span class="g-part">I / he / she</span><span class="g-plus">+</span><span class="g-part g-v">was born</span><span class="g-sep">·</span><span class="g-part">you / we / they</span><span class="g-plus">+</span><span class="g-part g-v">were born</span></div>
<ul class="g-list">
<li><span class="say">I was born in 1995.</span> — Я родился в 1995 году.</li>
<li><span class="say">Where were you born? — In Minsk.</span> — Где ты родился? — В Минске.</li>
</ul>
<div class="g-bad">I am born in Moscow. · I born in 1995. · When was invented the bicycle?</div>
<div class="g-good">I <b>was born</b> in Moscow. · I <b>was born</b> in 1995. · When <b>was the bicycle invented</b>?</div>
<div class="mini" data-q="Where ___ your parents born?" data-o="was|were|are" data-a="1" data-why="Родились в прошлом, parents — много → were born."></div>`
      },
      {
        title: '5. by — кем сделано',
        html: `
<div class="g-idea">Если всё-таки хотим сказать, <b>кто</b> сделал, добавляем <b>by</b> + кто. По-русски это часто творительный падеж или «у кого-то»: написан <i>кем?</i></div>
<div class="g-formula"><span class="g-part">passive</span><span class="g-plus">+</span><span class="g-part g-v">by</span><span class="g-plus">+</span><span class="g-part">кто сделал</span></div>
<ul class="g-list">
<li><span class="say">The telephone was invented by Alexander Bell.</span> — Телефон изобрёл Александр Белл.</li>
<li><span class="say">This logo was designed by my friend.</span> — Этот логотип нарисовал мой друг.</li>
<li><span class="say">I was bitten by a dog last week.</span> — Меня на прошлой неделе укусила собака.</li>
<li><span class="say">The game is played by millions of people.</span> — В игру играют миллионы людей.</li>
</ul>
<p>Если «кто» неважен или и так понятен — <b>by не нужен</b>:</p>
<div class="g-bad">My phone was stolen by somebody. · The office is cleaned by people.</div>
<div class="g-good">My phone was stolen. · The office is cleaned every day.</div>
<div class="g-tip">Active или passive? Спросите себя: <b>о ком / о чём</b> фраза? О дизайнере → <span class="say">Max designed the logo.</span> О логотипе → <span class="say">The logo was designed by Max.</span></div>
<div class="mini" data-q="Harry Potter ___ J. K. Rowling." data-o="wrote by|was written by|was written from" data-a="1" data-why="Книга написана кем-то → was written + by."></div>`
      },
      {
        title: '6. Прямо сейчас и уже сделано: is being done, has been done',
        html: `
<div class="g-idea">Passive работает и в других временах. Схема та же: <b>be в нужном времени + V3</b>.</div>
<table>
<tr><th>Время</th><th>Схема</th><th>Пример</th></tr>
<tr><td>сейчас, в процессе</td><td><b>is / are being</b> + V3</td><td><span class="say">My car is being repaired.</span></td></tr>
<tr><td>уже сделано (результат)</td><td><b>has / have been</b> + V3</td><td><span class="say">My account has been hacked!</span></td></tr>
</table>
<p><b>is being done</b> — работа идёт прямо сейчас, ещё не закончена:</p>
<ul class="g-list">
<li><span class="say">Sorry, the office is being cleaned at the moment.</span> — Простите, в офисе сейчас идёт уборка.</li>
<li><span class="say">New flats are being built near my house.</span> — Возле моего дома строят новые квартиры.</li>
<li><span class="say">The office is cleaned every day, but today it isn't being cleaned.</span> — Офис убирают каждый день, но сегодня не убирают.</li>
</ul>
<p><b>has been done</b> — сделано, и важен результат сейчас (как Present Perfect):</p>
<ul class="g-list">
<li><span class="say">The room isn't dirty any more. It has been cleaned.</span> — Комнату убрали.</li>
<li><span class="say">My keys have been stolen.</span> — У меня украли ключи.</li>
<li><span class="say">I'm not going to the party. I haven't been invited.</span> — Меня не пригласили.</li>
<li><span class="say">Has the bug been fixed yet?</span> — Баг уже исправили?</li>
</ul>
<p>А если назвали <b>когда</b> (yesterday, last week) — как и раньше, Past Simple:</p>
<div class="g-bad">My keys have been stolen last week.</div>
<div class="g-good">My keys <b>were stolen</b> last week. <span class="muted">— есть точное время</span></div>
<div class="mini" data-q="You can't use the lift. It ___ at the moment." data-o="is repaired|is being repaired|has repaired" data-a="1" data-why="Прямо сейчас, в процессе → is being + V3."></div>
<div class="mini" data-q="Good news! The server ___ — you can play again." data-o="has been fixed|has fixed|is fixing" data-a="0" data-why="Уже сделано, результат сейчас → has been + V3."></div>`
      },
      {
        title: '7. Will be done, can be done — с будущим и модальными',
        html: `
<div class="g-idea">После <b>will, can, must, should, might</b> и <b>going to / have to</b> ставим <b>be</b> в начальной форме + V3.</div>
<div class="g-formula"><span class="g-part">will / can / must / should</span><span class="g-plus">+</span><span class="g-part g-v">be</span><span class="g-plus">+</span><span class="g-part g-v">V3</span></div>
<ul class="g-list">
<li><span class="say">The results will be announced tomorrow.</span> — Результаты объявят завтра.</li>
<li><span class="say">This sweater should be washed by hand.</span> — Этот свитер надо стирать вручную.</li>
<li><span class="say">My old phone can't be repaired.</span> — Мой старый телефон не починить.</li>
<li><span class="say">The report must be finished by Friday.</span> — Отчёт должен быть готов к пятнице.</li>
<li><span class="say">A new stadium is going to be built here.</span> — Здесь построят новый стадион.</li>
<li><span class="say">These files have to be deleted.</span> — Эти файлы нужно удалить.</li>
</ul>
<div class="g-bad">The game will released next year. · It can't repair.</div>
<div class="g-good">The game will <b>be released</b> next year. · It can't <b>be repaired</b>.</div>
<div class="mini" data-q="The new level ___ next month." data-o="will release|will be released|will released" data-a="1" data-why="Будущее + passive → will be + V3."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">My phone stole yesterday.</div><div class="g-good">My phone <b>was stolen</b> yesterday.</div>
<div class="g-bad">I am born in 1998.</div><div class="g-good">I <b>was born</b> in 1998.</div>
<div class="g-bad">The game was create in Poland.</div><div class="g-good">The game was <b>created</b> in Poland.</div>
<div class="g-bad">English speaks in many countries.</div><div class="g-good">English <b>is spoken</b> in many countries.</div>
<div class="g-bad">When was built this house?</div><div class="g-good">When was <b>this house built</b>?</div>
<div class="g-bad">This picture was painted from my friend.</div><div class="g-good">This picture was painted <b>by</b> my friend.</div>
<div class="g-bad">My laptop is repairing now.</div><div class="g-good">My laptop <b>is being repaired</b> now.</div>
<div class="g-bad">The bug will fixed soon.</div><div class="g-good">The bug will <b>be fixed</b> soon.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Passive = <b>be + V3</b>: <b>is made</b> · <b>was made</b> · <b>is being made</b> · <b>has been made</b> · <b>will be made</b>; «кем» — через <b>by</b>; родиться — <b>was born</b>.</div>`
      }
    ],
    words: [
      ["be born — was born", "родиться — родился", "I was born in April.", "Я родился в апреле."],
      ["make — made — made", "делать — сделал — сделан", "This chair is made of wood.", "Этот стул сделан из дерева."],
      ["build — built — built", "строить — построил — построен", "The castle was built in 1500.", "Замок построили в 1500 году."],
      ["steal — stole — stolen", "красть — украл — украден", "My wallet was stolen.", "У меня украли кошелёк."],
      ["write — wrote — written", "писать — написал — написан", "The song was written in one night.", "Песню написали за одну ночь."],
      ["sell — sold — sold", "продавать — продал — продан", "The game sold a million copies.", "Игра разошлась миллионом копий."],
      ["break — broke — broken", "ломать — сломал — сломан", "The screen was broken.", "Экран был разбит."],
      ["find — found — found", "находить — нашёл — найден", "My bike was found by the police.", "Мой велосипед нашла полиция."],
      ["speak — spoke — spoken", "говорить — сказал — сказан", "Spanish is spoken in Mexico.", "В Мексике говорят по-испански."],
      ["give — gave — given", "давать — дал — дан", "I was given a free ticket.", "Мне дали бесплатный билет."],
      ["invite", "приглашать", "We were invited to the wedding.", "Нас пригласили на свадьбу."],
      ["invent", "изобретать", "Who invented the computer mouse?", "Кто изобрёл компьютерную мышь?"],
      ["create", "создавать", "This character was created by a young artist.", "Этого персонажа создал молодой художник."],
      ["design", "проектировать, разрабатывать дизайн", "The app was designed in our studio.", "Приложение спроектировали в нашей студии."],
      ["develop", "разрабатывать, развивать", "The game is developed by a small team.", "Игру разрабатывает небольшая команда."],
      ["produce", "производить, выпускать", "These cars are produced in Germany.", "Эти машины производят в Германии."],
      ["release", "выпускать; выход (игры, фильма)", "The film was released last year.", "Фильм вышел в прошлом году."],
      ["translate", "переводить (текст)", "The game has been translated into ten languages.", "Игру перевели на десять языков."],
      ["publish", "издавать, публиковать", "Her book was published in 2020.", "Её книгу издали в 2020 году."],
      ["record", "записывать", "The album was recorded in London.", "Альбом записали в Лондоне."],
      ["repair", "ремонтировать", "My phone is being repaired.", "Мой телефон сейчас в ремонте."],
      ["fix", "чинить, исправлять", "Has the bug been fixed?", "Баг исправили?"],
      ["update", "обновлять; обновление", "The app is updated every month.", "Приложение обновляют каждый месяц."],
      ["delete", "удалять", "All my saves were deleted.", "Все мои сохранения удалились."],
      ["cancel", "отменять", "The concert has been cancelled.", "Концерт отменили."],
      ["allow", "разрешать", "Phones aren't allowed in the exam.", "На экзамене телефоны запрещены."],
      ["damage", "повреждать; повреждение", "The car was badly damaged.", "Машина была сильно повреждена."],
      ["hack", "взламывать", "My account has been hacked!", "Мой аккаунт взломали!"],
      ["ban", "запрещать, банить; бан", "He was banned for cheating.", "Его забанили за читы."],
      ["by", "кем (в passive); к (сроку)", "It was painted by my sister.", "Это нарисовала моя сестра."]
    ],
    texts: [
      {
        id: 't-a2-18-1', title: 'How Tetris was made', level: 'A2',
        text: `Tetris is one of the most famous video games in the world. It is played by millions of people, and it has been released on almost every console, computer and phone. But how was it made?
The game was created in 1984 in Moscow. It was written by Alexey Pajitnov, a young programmer at a computer centre of the Academy of Sciences. The first version was made on an old Soviet computer, and it didn't have any colours or music.
The name was made from two words: "tetra" (the Greek word for "four") — because every shape is built from four squares — and "tennis", Pajitnov's favourite sport.
Soon copies of the game were shared from computer to computer, and people all over the country played it at work. Then the game was noticed abroad. In 1989 it was released on the Game Boy, and it was sold together with the console. That made it a world hit.
But Pajitnov didn't get any money at first: the rights to the game belonged to the Soviet state. In 1996 a new company was started by Pajitnov and his friend Henk Rogers, and he was finally paid for his idea.
The story is so exciting that a film about it was made in 2023. And new versions of Tetris are still being developed today.`,
        questions: [
          { q: 'Where was Tetris created?', o: ['In Tokyo', 'In Moscow', 'In London'], a: 1 },
          { q: 'Where does the name Tetris come from?', o: ['From "tetra" and "tennis"', 'From the name of a computer', 'From Pajitnov\'s city'], a: 0 },
          { q: 'Why didn\'t Pajitnov get money at first?', o: ['The game wasn\'t popular', 'The rights belonged to the state', 'He gave up programming'], a: 1 }
        ]
      },
      {
        title: 'A very bad Monday', id: 't-a2-18-2', level: 'A2',
        text: `Nick: Hi, Lena. You look terrible. What's wrong?
Lena: Everything! First, my account has been hacked. All my messages were deleted, and some strange posts were written from my name.
Nick: Oh no. Has your password been changed?
Lena: Yes, it has. I was sent a code, so now I can log in again. But that's not all.
Nick: What else happened?
Lena: My laptop was stolen from my car on Saturday. The window was broken, and my bag was taken.
Nick: That's awful! Did you call the police?
Lena: Yes, I did, but the laptop hasn't been found yet.
Nick: Were your design files on it?
Lena: Luckily, no. Our files are backed up every night. They're kept on the company server.
Nick: Good. So you can work on another computer?
Lena: I can't. The office is being repaired this week, so we're all working from home. And my old PC can't be used — it's too slow for our programs.
Nick: I've got a spare laptop. It was given to me by my brother, but I don't use it. You can borrow it.
Lena: Really? Thank you so much! I'll give it back when my new laptop is delivered.
Nick: No problem. And my advice — change all your passwords today.`,
        questions: [
          { q: 'What happened to Lena\'s account?', o: ['It was hacked', 'It was deleted by her boss', 'It was banned'], a: 0 },
          { q: 'Why can\'t Lena work in the office this week?', o: ['It is being repaired', 'It has been sold', 'It was closed by the police'], a: 0 },
          { q: 'Who gave Nick the spare laptop?', o: ['His boss', 'Lena', 'His brother'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'This bread ___ every morning in our kitchen.', o: ['bakes', 'is baked', 'is bake'], a: 1, why: 'Хлеб не печёт сам себя, и это регулярно → is + V3.' },
      { t: 'choice', q: 'My bike ___ last night.', o: ['stole', 'is stolen', 'was stolen'], a: 2, why: 'Прошлое (last night) + passive → was + V3.' },
      { t: 'choice', q: 'Where ___ you born?', o: ['are', 'were', 'did'], a: 1, why: 'Родиться — was / were born; you → were.' },
      { t: 'choice', q: 'This song was written ___ a famous DJ.', o: ['from', 'by', 'with'], a: 1, why: 'Кем сделано → by.' },
      { t: 'choice', q: 'How often ___ the servers updated?', o: ['are', 'do', 'have'], a: 0, why: 'Present Simple passive: are + предмет + V3.' },
      { t: 'choice', q: 'Sorry, you can\'t come in. The room ___ right now.', o: ['is painted', 'is being painted', 'has painted'], a: 1, why: 'Прямо сейчас, в процессе → is being + V3.' },
      { t: 'choice', q: 'Look! The door ___. It\'s blue now.', o: ['has been painted', 'has painted', 'is painting'], a: 0, why: 'Уже сделано, видим результат → has been + V3.' },
      { t: 'choice', q: 'The meeting ___ tomorrow at ten.', o: ['will hold', 'will be held', 'will held'], a: 1, why: 'Будущее passive → will be + V3 (hold → held).' },
      { t: 'gap', q: 'English ___ in many countries. (speak, present)', a: ['is spoken'], why: 'Язык сам не говорит → is + spoken.' },
      { t: 'gap', q: 'These phones ___ in China. (make, present)', a: ['are made'], why: 'phones — много → are + made.' },
      { t: 'gap', q: 'The Eiffel Tower ___ in 1889. (build)', a: ['was built'], why: 'Прошлое, один предмет → was + built.' },
      { t: 'gap', q: 'We ___ to the party. Nobody asked us. (not invite, past)', a: ['weren\'t invited', 'were not invited'], why: 'Отрицание в прошлом → weren\'t + V3.' },
      { t: 'gap', q: 'My account ___ hacked! I can\'t log in. (has / have)', a: ['has been'], why: 'Результат сейчас, account — одно → has been + V3.' },
      { t: 'order', a: 'When was this game released', ru: 'Когда вышла эта игра?' },
      { t: 'order', a: 'I was born in a small town', ru: 'Я родился в маленьком городе' },
      { t: 'order', a: 'My car is being repaired now', ru: 'Мою машину сейчас ремонтируют' },
      { t: 'tr', q: 'Мой телефон украли.', a: ['my phone was stolen', 'my phone has been stolen', 'my phone\'s been stolen'] },
      { t: 'tr', q: 'Этот логотип нарисовал мой друг.', a: ['this logo was designed by my friend', 'this logo was drawn by my friend', 'this logo was made by my friend', 'this logo was created by my friend', 'my friend designed this logo', 'my friend drew this logo'] },
      { t: 'listen', say: 'The game was made in Poland.', a: ['the game was made in poland'] },
      { t: 'listen', say: 'Has the bug been fixed?', a: ['has the bug been fixed'] }
    ],
    test: [
      { t: 'choice', q: 'Mobile phones ___ in the exam room.', o: ['don\'t allow', 'aren\'t allowed', 'aren\'t allow'], a: 1, why: 'Телефоны не «разрешают» сами — passive: aren\'t + allowed.' },
      { t: 'choice', q: 'When ___ the first iPhone ___?', o: ['was / released', 'did / released', 'was / release'], a: 0, why: 'Вопрос в passive: was + предмет + V3.' },
      { t: 'gap', q: 'Many people ___ in the accident. (hurt, past)', a: ['were hurt'], why: 'Много людей, прошлое → were + hurt (V3 = hurt).' },
      { t: 'choice', q: 'Somebody broke into our flat, but nothing ___.', o: ['stole', 'was stolen', 'has stolen'], a: 1, why: 'Ничего не украли (действие над вещами) → was stolen.' },
      { t: 'choice', q: 'My keys ___ last week, and I still haven\'t found them.', o: ['have been stolen', 'were stolen', 'are stolen'], a: 1, why: 'Есть точное время (last week) → Past Simple: were stolen.' },
      { t: 'gap', q: 'Wait, don\'t sit there! The chairs ___ painted right now. (are / being)', a: ['are being'], why: 'Прямо сейчас, в процессе → are being + V3.' },
      { t: 'gap', q: 'I can\'t go to the concert. It ___ cancelled. (has / have)', a: ['has been'], why: 'Результат сейчас → has been + V3.' },
      { t: 'choice', q: 'This jacket should ___ by hand.', o: ['wash', 'be washed', 'been washed'], a: 1, why: 'После should → be + V3.' },
      { t: 'choice', q: 'The Mona Lisa was painted ___ Leonardo da Vinci.', o: ['from', 'of', 'by'], a: 2, why: 'Кем сделано → by.' },
      { t: 'gap', q: 'The new level ___ next week. (release, future)', a: ['will be released', '\'ll be released'], why: 'Будущее passive → will be + V3.' },
      { t: 'choice', q: 'My grandmother ___ in 1950.', o: ['was born', 'is born', 'born'], a: 0, why: 'Родиться — всегда was / were born, в прошлом.' },
      { t: 'gap', q: 'He was ___ from the server for cheating. (ban)', a: ['banned'], why: 'После was — V3: ban → banned (удваиваем n).' }
    ]
  }
);
