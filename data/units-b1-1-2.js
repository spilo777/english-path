// Юниты B1 1–2: Present Simple и Continuous глубже (state verbs, always -ing, being) · Past Simple, Past Continuous, have / have got, used to
COURSE.units.push(
  // ───────────────────────────── UNIT B1-1 ─────────────────────────────
  {
    id: 'b1-1', level: 'B1', num: 1, track: 'main',
    books: { blue: [1, 2, 3, 4] },
    title: 'Present Simple и Continuous глубже: state verbs, always',
    summary: 'Разберёмся, когда нужен «процесс», а когда «факт», почему нельзя сказать I’m knowing, чем «You always lose» отличается от «You’re always losing» и что значит «He’s being rude».',
    grammar: [
      {
        title: '1. Главная идея: не «сейчас или обычно», а «временно или постоянно»',
        html: `
<div class="g-idea">Базу вы уже знаете (уроки a1-3 и a1-5): <b>I work</b> — обычно, <b>I'm working</b> — прямо сейчас. На B1 граница тоньше. <b>Continuous</b> — то, что идёт, ещё не закончено, временно или меняется. <b>Simple</b> — то, что постоянно, повторяется или просто правда. В русском одно «работаю» на всё, а английский заставляет выбрать взгляд.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я работаю в игровой студии.</p><p>На этой неделе я работаю из дома.</p><p>Вода кипит при 100 градусах.</p><p>Осторожно, вода кипит!</p><p>Мой английский становится лучше.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>work</b> at a game studio.</span></p><p><span class="say">I'm <b>working</b> from home this week.</span></p><p><span class="say">Water <b>boils</b> at 100 degrees.</span></p><p><span class="say">Careful, the water is <b>boiling</b>!</span></p><p><span class="say">My English is <b>getting</b> better.</span></p></div>
</div>
<table>
<tr><th>Continuous: am/is/are + -ing</th><th>Simple: work / works</th></tr>
<tr><td>в процессе, не закончено</td><td>вообще, всегда, как факт</td></tr>
<tr><td>временно: <span class="say">I'm living with my parents.</span></td><td>постоянно: <span class="say">My parents live in Tula.</span></td></tr>
<tr><td>меняется: <span class="say">Prices are going up.</span></td><td>повторяется: <span class="say">I go to the gym twice a week.</span></td></tr>
</table>
<div class="g-tip">Continuous — это <b>видео, которое идёт</b> прямо сейчас. Simple — это <b>строчка в профиле</b>: «живу в Туле, работаю дизайнером, люблю RPG».</div>
<div class="mini" data-q="Сестра живёт у друзей, пока ищет квартиру." data-o="My sister lives with friends until she finds a flat.|My sister is living with friends until she finds a flat.|My sister live with friends until she finds a flat." data-a="1" data-why="«Пока ищет» — ситуация временная, значит Continuous."></div>
<div class="mini" data-q="Lena ___ in Kazan. She was born there and loves the city." data-o="lives|is living|living" data-a="0" data-why="Живёт там всю жизнь — постоянная ситуация, Simple."></div>`
      },
      {
        title: '2. Continuous — не только «прямо сейчас»',
        html: `
<div class="g-idea">Continuous значит: <b>начал и ещё не закончил</b>. В сам момент речи вы можете этим и не заниматься — главное, что процесс «открыт».</div>
<ul class="g-list">
<li><span class="say">I'm reading a great fantasy book.</span> — Я читаю отличное фэнтези. <span class="muted">(сейчас пью кофе, но книга «в процессе»)</span></li>
<li><span class="say">Kate is learning Japanese — she wants to work in Tokyo.</span> — Кейт учит японский.</li>
<li><span class="say">We're redesigning our app. We hope to finish by summer.</span> — Мы переделываем дизайн приложения.</li>
</ul>
<p><b>Период вокруг «сейчас»</b>: today, this week, this month, these days, at the moment.</p>
<ul class="g-list">
<li><span class="say">You're playing a lot this week.</span> — Ты много играешь на этой неделе.</li>
<li><span class="say">Our studio isn't doing very well this year.</span> — У нашей студии в этом году дела так себе.</li>
<li><span class="say">What are you working on these days?</span> — Над чем ты сейчас работаешь?</li>
<li><span class="say">What's going on?</span> / <span class="say">What's happening?</span> — Что происходит?</li>
</ul>
<p>Когда объясняете, <b>почему</b> заняты или почему что-то не так, — тоже Continuous:</p>
<div class="g-bad">Please be quiet. I try to focus.</div>
<div class="g-good">Please be quiet. I'm <b>trying</b> to focus.</div>
<p><b>Изменения</b>, которые уже идут: getting, becoming, changing, improving, starting, beginning, increasing, rising, falling, growing.</p>
<div class="g-formula"><span class="g-part">am / is / are</span><span class="g-plus">+</span><span class="g-part g-v">getting / becoming</span><span class="g-plus">+</span><span class="g-part">better, worse, dark, cold…</span></div>
<ul class="g-list">
<li><span class="say">It's getting dark.</span> — Темнеет.</li>
<li><span class="say">Games are getting more and more expensive.</span> — Игры всё дорожают.</li>
<li><span class="say">I'm starting to like this job.</span> — Мне начинает нравиться эта работа.</li>
<li><span class="say">The number of players is growing fast.</span> — Число игроков быстро растёт.</li>
</ul>
<div class="g-bad">Does your English get better?</div>
<div class="g-good">Is your English <b>getting</b> better?</div>
<div class="g-tip">Русское «-ает/-еет» о переменах («темнеет», «дорожает», «холодает») почти всегда = <b>is getting + прилагательное</b>.</div>
<div class="mini" data-q="Look at those clouds. The weather ___." data-o="changes|is changing|change" data-a="1" data-why="Перемена, которая уже идёт, — Continuous."></div>
<div class="mini" data-q="Where's Max? — He ___ a shower." data-o="has|is having|have" data-a="1" data-why="Прямо сейчас в процессе — is having."></div>`
      },
      {
        title: '3. Simple — факты, привычки и «кем ты работаешь»',
        html: `
<div class="g-idea">Simple — для того, что верно <b>вообще</b>: законы природы, расписания, привычки, «как часто».</div>
<ul class="g-list">
<li><span class="say">The sun rises in the east.</span> — Солнце встаёт на востоке.</li>
<li><span class="say">Figma runs in a browser.</span> — Figma работает в браузере.</li>
<li><span class="say">How often do you update the app?</span> — Как часто вы обновляете приложение?</li>
<li><span class="say">She doesn't drink coffee very often.</span> — Она нечасто пьёт кофе.</li>
</ul>
<p><b>do как основной глагол.</b> Вопрос о профессии — только Simple:</p>
<table>
<tr><th>Вопрос</th><th>Смысл</th></tr>
<tr><td><span class="say">What do you do?</span></td><td>Кем работаешь? — <span class="say">I'm a UI designer.</span></td></tr>
<tr><td><span class="say">What are you doing?</span></td><td>Что делаешь сейчас? — <span class="say">I'm drawing icons.</span></td></tr>
</table>
<ul class="g-list"><li><span class="say">He doesn't do anything at home.</span> — Он ничего не делает дома. <span class="muted">(do дважды: помощник и основной)</span></li></ul>
<div class="g-bad">What means this word?</div>
<div class="g-good">What <b>does</b> this word <b>mean</b>?</div>
<p><b>Слово = действие.</b> Когда вы что-то делаете самим фактом слов (обещаете, извиняетесь, предлагаете), — только Simple:</p>
<p>I promise · I apologise · I suggest · I agree · I refuse · I insist · I recommend · I advise</p>
<ul class="g-list">
<li><span class="say">I promise I won't tell anyone.</span> — Обещаю, никому не скажу.</li>
<li><span class="say">I apologise for the delay.</span> — Прошу прощения за задержку.</li>
<li><span class="say">I suggest we take a break.</span> — Предлагаю сделать перерыв.</li>
<li><span class="say">I insist — dinner is on me.</span> — Я настаиваю — ужин за мой счёт.</li>
<li><span class="say">I refuse to play with cheaters.</span> — Я отказываюсь играть с читерами.</li>
</ul>
<div class="g-bad">I'm promising I'll help. · I am agree.</div>
<div class="g-good">I <b>promise</b> I'll help. · I <b>agree</b>.</div>
<div class="mini" data-q="Excuse me, what ___ this button do?" data-o="is|does|do" data-a="1" data-why="Обычный вопрос в Simple: does + начальная форма do."></div>
<div class="mini" data-q="I ___ I won't be late again." data-o="promise|am promising|promising" data-a="0" data-why="Обещание совершается самими словами — Simple."></div>`
      },
      {
        title: '4. always + Simple и always + -ing: факт или «вечно ты…»',
        html: `
<div class="g-idea"><b>always + Simple</b> — «каждый раз», спокойный факт. <b>am/is/are + always + -ing</b> — «слишком часто, вечно», обычно с раздражением (иногда с удивлением).</div>
<table>
<tr><th>Факт</th><th>«Вечно…»</th></tr>
<tr><td><span class="say">I always go to work by bike.</span><br>Я всегда езжу на велосипеде.</td><td><span class="say">I'm always forgetting my password.</span><br>Вечно я забываю пароль.</td></tr>
<tr><td><span class="say">Tom always starts work on time.</span><br>Том всегда вовремя.</td><td><span class="say">Tom's always starting new projects.</span><br>Том вечно затевает новые проекты.</td></tr>
</table>
<div class="g-formula"><span class="g-part">am / is / are</span><span class="g-plus">+</span><span class="g-part g-v">always / constantly / forever</span><span class="g-plus">+</span><span class="g-part">-ing</span></div>
<ul class="g-list">
<li><span class="say">You're always looking at your phone!</span> — Ты вечно сидишь в телефоне!</li>
<li><span class="say">My laptop is constantly crashing.</span> — Мой ноутбук постоянно виснет.</li>
<li><span class="say">He's forever complaining about the boss.</span> — Он вечно жалуется на начальника.</li>
<li><span class="say">She's always buying me little presents.</span> — Она всё время дарит мне маленькие подарки. <span class="muted">(приятное удивление)</span></li>
</ul>
<div class="g-tip">Русское <b>«вечно ты…»</b> с недовольной интонацией = <b>You're always + -ing</b>. Ударение в речи падает на <i>always</i>.</div>
<div class="mini" data-q="Ugh! You ___ my snacks!" data-o="always eat|are always eating|always are eating" data-a="1" data-why="Раздражение «вечно ты…» — am/is/are + always + -ing."></div>
<div class="mini" data-q="I ___ breakfast at eight. It's my routine." data-o="always have|am always having|always having" data-a="0" data-why="Спокойная привычка — always + Simple."></div>`
      },
      {
        title: '5. State verbs — глаголы-состояния без -ing',
        html: `
<div class="g-idea">Некоторые глаголы описывают не действие, а <b>состояние</b>: в них ничего «не происходит», нет процесса. Поэтому обычно их не ставят в Continuous — даже если речь о «прямо сейчас».</div>
<table>
<tr><th>Группа</th><th>Глаголы</th><th>Пример</th></tr>
<tr><td>хочу, люблю</td><td>like, love, hate, want, need, prefer</td><td><span class="say">I want something to eat.</span></td></tr>
<tr><td>знаю, понимаю</td><td>know, understand, realize, recognize, believe, suppose, remember, mean</td><td><span class="say">Do you understand what I mean?</span></td></tr>
<tr><td>владею, состою</td><td>belong, own, contain, consist of, fit</td><td><span class="say">This laptop belongs to the studio.</span></td></tr>
<tr><td>кажется</td><td>seem</td><td><span class="say">You seem tired.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Now I realize why the button didn't work.</span> — Теперь я понимаю, почему кнопка не работала.</li>
<li><span class="say">Sorry, I don't recognize you.</span> — Простите, я вас не узнаю.</li>
<li><span class="say">The team consists of five people.</span> — Команда состоит из пяти человек.</li>
<li><span class="say">This jacket doesn't fit me.</span> — Эта куртка мне не по размеру.</li>
<li><span class="say">I suppose you're right.</span> — Полагаю, ты прав.</li>
</ul>
<div class="g-bad">I am understanding you. · Are you knowing his name? · I'm wanting a pizza.</div>
<div class="g-good">I <b>understand</b> you. · <b>Do</b> you <b>know</b> his name? · I <b>want</b> a pizza.</div>
<div class="g-tip">А как же <b>«I'm lovin' it»</b>? В живой речи state verbs иногда ставят в -ing, чтобы подчеркнуть «прямо сейчас, эмоционально, временно»: <span class="say">I'm loving this new season!</span> <span class="say">How are you liking the game so far?</span> Это разговорный стиль. В письме, тестах и на работе — Simple.</div>
<div class="mini" data-q="Sorry, I ___ what you mean." data-o="am not understanding|don't understand|not understand" data-a="1" data-why="understand — глагол-состояние, ставим Simple."></div>
<div class="mini" data-q="This controller ___ to my brother." data-o="belongs|is belonging|belong" data-a="0" data-why="belong — состояние (принадлежность), Simple; controller — it, поэтому -s."></div>`
      },
      {
        title: '6. think, see, have, taste — один глагол, два смысла',
        html: `
<div class="g-idea">Многие глаголы бывают и состоянием, и действием. <b>Состояние</b> → Simple. <b>Действие</b> → можно Continuous.</div>
<table>
<tr><th>Глагол</th><th>Состояние (Simple)</th><th>Действие (-ing)</th></tr>
<tr><td><b>think</b></td><td><span class="say">I think it's a good idea.</span><br>считаю (мнение)</td><td><span class="say">I'm thinking about the new logo.</span><br>обдумываю</td></tr>
<tr><td><b>have</b></td><td><span class="say">I have a new laptop.</span><br>владею</td><td><span class="say">I'm having lunch.</span><br>обедаю <span class="muted">(подробно — урок b1-2)</span></td></tr>
<tr><td><b>see</b></td><td><span class="say">I see what you mean.</span><br>понимаю, вижу</td><td><span class="say">I'm seeing a client at three.</span><br>встречаюсь</td></tr>
<tr><td><b>taste, smell</b></td><td><span class="say">This soup tastes great.</span><br>имеет вкус</td><td><span class="say">I'm tasting the sauce.</span><br>пробую</td></tr>
</table>
<ul class="g-list">
<li><span class="say">What do you think of my idea?</span> — Что ты думаешь о моей идее? <span class="muted">(мнение)</span></li>
<li><span class="say">I'm thinking of quitting my job.</span> — Подумываю уйти с работы.</li>
<li><span class="say">Are you seeing anyone?</span> — Ты с кем-нибудь встречаешься?</li>
<li><span class="say">The room smells of paint.</span> — В комнате пахнет краской.</li>
</ul>
<p><b>look и feel</b> о самочувствии и виде «сейчас» — можно обе формы:</p>
<ul class="g-list">
<li><span class="say">You look tired.</span> = <span class="say">You're looking tired.</span> — Выглядишь уставшим.</li>
<li><span class="say">How do you feel?</span> = <span class="say">How are you feeling?</span> — Как ты себя чувствуешь?</li>
</ul>
<p>Но с <b>usually, often</b> — только Simple: <span class="say">I usually feel sleepy after lunch.</span></p>
<p><b>see, hear</b> в моменте обычно идут с <b>can</b>: <span class="say">Can you hear me?</span> <span class="say">I can see the boss on the map.</span></p>
<div class="g-bad">What are you thinking about my design?</div>
<div class="g-good">What <b>do</b> you <b>think of</b> my design? <span class="muted">— спрашиваем мнение</span></div>
<div class="mini" data-q="What ___ of the new trailer?" data-o="do you think|are you thinking|you think" data-a="0" data-why="Спрашиваем мнение — think как состояние, Simple."></div>
<div class="mini" data-q="I ___ of buying a new monitor." data-o="think|am thinking|thinks" data-a="1" data-why="think of doing = обдумываю, это процесс — Continuous."></div>`
      },
      {
        title: '7. He’s being rude — «ведёт себя» прямо сейчас',
        html: `
<div class="g-idea"><b>be</b> — обычно состояние: <b>He is rude</b> = он грубый (по характеру). Но <b>am/is/are being + прилагательное</b> = он <b>ведёт себя так сейчас</b>, возможно, против обыкновения.</div>
<div class="g-formula"><span class="g-part">am / is / are</span><span class="g-plus">+</span><span class="g-part g-v">being</span><span class="g-plus">+</span><span class="g-part">rude, silly, careful, selfish…</span></div>
<table>
<tr><th>Характер</th><th>Поведение сейчас</th></tr>
<tr><td><span class="say">He's selfish.</span><br>Он эгоист.</td><td><span class="say">He's being selfish.</span><br>Он сейчас ведёт себя эгоистично.</td></tr>
<tr><td><span class="say">I'm a careful driver.</span><br>Я аккуратный водитель.</td><td><span class="say">I'm being careful.</span><br>Я осторожничаю.</td></tr>
</table>
<ul class="g-list">
<li><span class="say">Why are you being so nice to me? What do you want?</span> — Чего это ты такой милый?</li>
<li><span class="say">You're being unfair — it wasn't my fault.</span> — Ты несправедлив.</li>
<li><span class="say">I'm being serious!</span> — Я серьёзно!</li>
<li><span class="say">The kids are being very quiet. Suspicious.</span> — Дети подозрительно тихие.</li>
</ul>
<p>Только о том, что человек <b>контролирует</b>. Состояния вроде tired, hungry, ill, cold — без being:</p>
<div class="g-bad">Are you being tired? · She's being ill.</div>
<div class="g-good">Are you tired? · She's ill.</div>
<div class="mini" data-q="Max usually shares, but today he ___ really selfish." data-o="is|is being|being" data-a="1" data-why="Поведение сейчас, не как обычно, — is being."></div>
<div class="mini" data-q="I ___ hungry. Let's order pizza." data-o="am being|am|being" data-a="1" data-why="Голод не контролируют — просто am."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">Please be quiet. I try to work.</div><div class="g-good">Please be quiet. I'm <b>trying</b> to work.</div>
<div class="g-bad">I am agree with you.</div><div class="g-good">I <b>agree</b> with you.</div>
<div class="g-bad">I'm knowing the answer.</div><div class="g-good">I <b>know</b> the answer.</div>
<div class="g-bad">What means this word?</div><div class="g-good">What <b>does</b> this word <b>mean</b>?</div>
<div class="g-bad">Does your English get better?</div><div class="g-good">Is your English <b>getting</b> better?</div>
<div class="g-bad">What are you thinking about my idea?</div><div class="g-good">What <b>do</b> you <b>think of</b> my idea?</div>
<div class="g-bad">You always lose your keys! <span class="muted">(с раздражением)</span></div><div class="g-good">You're always <b>losing</b> your keys!</div>
<div class="g-bad">Are you being tired?</div><div class="g-good">Are you tired?</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>Continuous</b> — процесс, временное, перемены, «вечно ты…», поведение сейчас · <b>Simple</b> — факты, привычки, профессия, state verbs и «I promise / I agree».</div>`
      }
    ],
    words: [
      ['realize', 'понимать, осознавать', 'Now I realize why it didn’t work.', 'Теперь я понимаю, почему это не работало.'],
      ['recognize', 'узнавать', 'I didn’t recognize you with a beard!', 'Я не узнал тебя с бородой!'],
      ['suppose', 'полагать, предполагать', 'I suppose you’re right.', 'Полагаю, ты прав.'],
      ['belong (to)', 'принадлежать', 'This headset belongs to Max.', 'Эта гарнитура принадлежит Максу.'],
      ['contain', 'содержать', 'The update contains three new maps.', 'Обновление содержит три новые карты.'],
      ['consist of', 'состоять из', 'Our team consists of six people.', 'Наша команда состоит из шести человек.'],
      ['seem', 'казаться', 'You seem tired today.', 'Ты сегодня кажешься уставшим.'],
      ['prefer', 'предпочитать', 'I prefer dark mode.', 'Я предпочитаю тёмную тему.'],
      ['mean', 'значить, иметь в виду', 'What does this icon mean?', 'Что означает эта иконка?'],
      ['own', 'владеть; собственный', 'Who owns this studio?', 'Кому принадлежит эта студия?'],
      ['complain', 'жаловаться', 'He’s always complaining about the servers.', 'Он вечно жалуется на серверы.'],
      ['improve', 'улучшать(ся)', 'My English is improving slowly.', 'Мой английский медленно улучшается.'],
      ['increase', 'расти, увеличивать(ся)', 'The number of players is increasing.', 'Число игроков растёт.'],
      ['behave', 'вести себя', 'The kids are behaving well today.', 'Дети сегодня хорошо себя ведут.'],
      ['selfish', 'эгоистичный', 'You’re being selfish — share the pizza!', 'Ты эгоистничаешь — поделись пиццей!'],
      ['rude', 'грубый, невежливый', 'Why is he being so rude?', 'Почему он так грубит?'],
      ['generous', 'щедрый', 'You’re being very generous today.', 'Ты сегодня очень щедрый.'],
      ['apologize', 'извиняться', 'I apologize for the delay.', 'Приношу извинения за задержку.'],
      ['insist', 'настаивать', 'I insist — it’s my treat.', 'Я настаиваю — я угощаю.'],
      ['refuse', 'отказываться', 'I refuse to pay for this DLC.', 'Я отказываюсь платить за это DLC.'],
      ['suggest', 'предлагать', 'I suggest we take a break.', 'Предлагаю сделать перерыв.'],
      ['recommend', 'советовать, рекомендовать', 'I recommend this series to everyone.', 'Советую этот сериал всем.'],
      ['promise', 'обещать; обещание', 'I promise I’ll call you back.', 'Обещаю, я перезвоню.'],
      ['smell', 'пахнуть; нюхать', 'The kitchen smells of coffee.', 'На кухне пахнет кофе.'],
      ['taste', 'иметь вкус; пробовать', 'This cake tastes amazing.', 'Этот торт потрясающий на вкус.'],
      ['temporary', 'временный', 'It’s just a temporary job.', 'Это просто временная работа.'],
      ['permanent', 'постоянный', 'Is this change permanent?', 'Это изменение навсегда?'],
      ['nowadays', 'в наше время, сейчас', 'Nowadays everyone streams games.', 'Сейчас все стримят игры.'],
      ['constantly', 'постоянно', 'My phone is constantly buzzing.', 'Мой телефон постоянно жужжит.'],
      ['annoying', 'раздражающий', 'This bug is really annoying.', 'Этот баг ужасно раздражает.'],
      ['wonder', 'интересоваться, задаваться вопросом', 'I’m wondering why he left.', 'Мне интересно, почему он ушёл.']
    ],
    texts: [
      {
        id: 't-b1-1-1', title: 'A crazy month at the studio', level: 'B1',
        text: `This month is crazy at our studio. Usually I work on mobile puzzle games, but right now I'm helping another team with a big update for their RPG. The deadline is in three weeks, so we're working late almost every day.
I normally start at ten and finish at six. These days I'm starting at nine, and I'm often leaving after eight. I don't mind, really. The project is interesting, and I'm learning a lot. My animation skills are getting better every week, and I'm starting to understand how the combat system works.
The team is great, but there is one problem: Oleg. Oleg is a good developer — he knows the engine better than anyone — but he's always complaining. The coffee is too weak, the chairs are too hard, the designers are too slow. Yesterday he was really rude to our new intern, and she almost cried. That isn't like him, so I suppose he's just tired. Honestly, everyone is tired.
Our lead, Marina, is the opposite. She never raises her voice. When something goes wrong, she smiles and says, "OK, I suggest we take a break and think." I admire that, and I'm trying to be more like her.
Right now it's seven in the evening. I'm sitting at my desk and drawing icons for the new inventory. The office smells of pizza — someone has ordered four large ones. Oleg is eating and, of course, complaining that the pizza is cold. Outside it's getting dark, and the city lights are coming on.
Do I want this month to end? Yes, I do. But I think I'll miss this team. And I promise myself one thing: after the release I will sleep for two whole days.`,
        questions: [
          { q: 'What is the writer doing this month?', o: ['Making a mobile puzzle game', 'Helping another team with an RPG update', 'Looking for a new job'], a: 1 },
          { q: 'Why does the writer think Oleg was rude?', o: ['Because he is tired', 'Because he hates the intern', 'Because the pizza was cold'], a: 0 },
          { q: 'What does Marina usually do when something goes wrong?', o: ['She shouts at the team', 'She goes home early', 'She suggests a break'], a: 2 }
        ]
      },
      {
        id: 't-b1-1-2', title: 'Twenty swords', level: 'B1',
        text: `Anya: Hey, can you hear me? My mic is acting strange again.
Den: Yes, I can hear you now. So, what do you think of the new game?
Anya: Honestly? I'm loving it so far. The world looks amazing, and the music is beautiful.
Den: Really? I don't know. It seems a bit slow to me.
Anya: That's because you're always rushing! You never read the quests.
Den: Fair. But what does "Ashen Oath" mean? I see it everywhere on the map.
Anya: I suppose it's the name of the villain's army. I'm not sure yet.
Den: Hmm. Wait, I recognize this village. Didn't we pass it an hour ago?
Anya: No, that was a different one. They all look the same, I agree.
Den: By the way, I'm thinking of buying the deluxe edition. It contains two extra dungeons.
Anya: I don't recommend it. It costs forty dollars, and the dungeons are short. Mira says they're boring.
Den: Mira is always saying that everything is boring.
Anya: True. Oh no, why is my character moving so slowly?
Den: You're carrying too much. Your bag contains about twenty swords!
Anya: They belong to me, and I need all of them.
Den: You're being silly. Nobody needs twenty swords. Sell some.
Anya: But I like them! Each one has a story.
Den: Anya, the monsters are getting closer, and you can't even run.
Anya: Fine, fine. I promise I'll sell ten. Happy now?
Den: Very. Now let's go. It's getting dark, and the wolves come out at night.
Anya: Wait, I realize something. The shop is in the village we just passed.
Den: Of course it is.`,
        questions: [
          { q: 'What does Anya think of the new game?', o: ['She loves it', 'She thinks it is slow', 'She thinks it is boring'], a: 0 },
          { q: 'Why doesn\'t Anya recommend the deluxe edition?', o: ['It is too hard', 'It is expensive and the dungeons are short', 'It doesn\'t work on her PC'], a: 1 },
          { q: 'Why is Anya\'s character moving slowly?', o: ['She is carrying too many swords', 'Her mic is broken', 'It is getting dark'], a: 0 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Shh! I ___ to concentrate.', o: ['try', 'am trying', 'tries'], a: 1, why: 'Объясняем, почему просим тишины: процесс идёт сейчас — Continuous.' },
      { t: 'choice', q: 'My brother ___ with us until he finds a flat.', o: ['lives', 'is living', 'live'], a: 1, why: '«Пока не найдёт» — временная ситуация, Continuous.' },
      { t: 'choice', q: 'What ___? — I\'m a game designer.', o: ['are you doing', 'do you do', 'you do'], a: 1, why: 'Вопрос о профессии — What do you do? (Simple).' },
      { t: 'choice', q: 'It ___ late. Let\'s go home.', o: ['gets', 'is getting', 'get'], a: 1, why: 'Перемена, которая идёт сейчас («становится поздно»), — is getting.' },
      { t: 'choice', q: 'Oh, I ___ what you mean now.', o: ['see', 'am seeing', 'sees'], a: 0, why: 'see = понимаю — состояние, Simple.' },
      { t: 'choice', q: 'He ___ his headphones! Third time this week!', o: ['always loses', 'is always losing', 'always is losing'], a: 1, why: 'Раздражение «вечно он…» — is always + -ing.' },
      { t: 'choice', q: 'This file ___ all the icons for the app.', o: ['contains', 'is containing', 'contain'], a: 0, why: 'contain — глагол-состояние, только Simple.' },
      { t: 'choice', q: 'I ___ tired after work.', o: ['usually feel', 'am usually feeling', 'usually am feeling'], a: 0, why: 'С usually feel стоит только в Simple — это привычное состояние.' },
      { t: 'gap', q: 'What ___ this icon mean? (do)', a: ['does'], why: 'Вопрос в Simple: does + mean, а не «What means».' },
      { t: 'gap', q: 'I ___ about changing jobs. (think)', a: ['am thinking', "'m thinking"], why: 'think about = обдумываю, процесс — Continuous.' },
      { t: 'gap', q: 'The number of players ___ fast. (grow)', a: ['is growing'], why: 'Рост, который идёт сейчас, — Continuous.' },
      { t: 'gap', q: 'Ice ___ at zero degrees. (melt)', a: ['melts'], why: 'Факт природы — Simple, it → -s.' },
      { t: 'gap', q: 'Why are you ___ so rude to him? He did nothing wrong. (be)', a: ['being'], why: 'Поведение прямо сейчас — are being + прилагательное.' },
      { t: 'gap', q: 'I ___ for being late. (apologise)', a: ['apologise', 'apologize'], why: 'Извинение совершается самими словами — Simple.' },
      { t: 'order', a: 'My English is slowly getting better', ru: 'Мой английский постепенно становится лучше' },
      { t: 'order', a: 'What do you think of this idea', ru: 'Что ты думаешь об этой идее?' },
      { t: 'tr', q: 'Я не понимаю, что ты имеешь в виду.', a: ["i don't understand what you mean", 'i do not understand what you mean'] },
      { t: 'tr', q: 'Вечно ты теряешь ключи!', a: ["you're always losing your keys", 'you are always losing your keys', "you're always losing keys", 'you are always losing keys'] },
      { t: 'tr', q: 'На этой неделе я работаю из дома.', a: ["i'm working from home this week", 'i am working from home this week', "this week i'm working from home", 'this week i am working from home'] },
      { t: 'listen', say: 'I promise I won\'t tell anyone', a: ["i promise i won't tell anyone", 'i promise i will not tell anyone'] }
    ],
    test: [
      { t: 'choice', q: 'The sun ___ in the east.', o: ['is rising', 'rises', 'rise'], a: 1, why: 'Факт, который верен всегда, — Simple.' },
      { t: 'choice', q: 'Prices ___ again. Everything costs more this month.', o: ['rise', 'are rising', 'rises'], a: 1, why: 'Перемена, которая идёт сейчас, — Continuous.' },
      { t: 'choice', q: 'I ___ horror films. They\'re too scary.', o: ['am not liking', 'don\'t like', 'not like'], a: 1, why: 'like — глагол-состояние: Simple, отрицание через don\'t.' },
      { t: 'choice', q: 'Why ___ the milk? Is it bad?', o: ['do you smell', 'are you smelling', 'you smell'], a: 1, why: 'smell здесь — действие «нюхать» прямо сейчас, поэтому -ing.' },
      { t: 'choice', q: 'This soup ___ amazing!', o: ['tastes', 'is tasting', 'taste'], a: 0, why: 'taste = «имеет вкус» — состояние, Simple.' },
      { t: 'choice', q: 'She is usually very calm, but today she ___ difficult.', o: ['is', 'is being', 'being'], a: 1, why: 'Поведение сейчас, не как обычно, — is being.' },
      { t: 'choice', q: 'I ___ with you — the game is too short.', o: ['am agree', 'agree', 'am agreeing'], a: 1, why: 'agree — обычный глагол-состояние: I agree, без am.' },
      { t: 'choice', q: 'Are you OK? You ___ pale.', o: ['look', 'are looking', 'оба варианта верны'], a: 2, why: 'look о виде «сейчас» бывает и в Simple, и в Continuous.' },
      { t: 'gap', q: 'I ___ Kate is from Canada, but I\'m not sure. (think)', a: ['think'], why: 'think = считаю (мнение) — Simple.' },
      { t: 'gap', q: 'He ___ about everything! It drives me crazy. (always / complain)', a: ['is always complaining', "'s always complaining"], why: 'Раздражение — is always + -ing.' },
      { t: 'gap', q: 'I ___ this series to everyone — it\'s brilliant. (recommend)', a: ['recommend'], why: 'Рекомендация совершается словами — Simple.' },
      { t: 'gap', q: 'What ___ your sister do? — She\'s a nurse. (do)', a: ['does'], why: 'Вопрос о профессии: What does she do? — Simple.' }
    ]
  },

  // ───────────────────────────── UNIT B1-2 ─────────────────────────────
  {
    id: 'b1-2', level: 'B1', num: 2, track: 'main',
    books: { blue: [5, 6, 17, 18] },
    title: 'Past Simple, Past Continuous, used to, have got',
    summary: 'Научимся рассказывать истории как носитель: события, фон и «раньше было иначе», а заодно разберёмся, когда have got, когда have, и почему I’m having a cold — ошибка.',
    grammar: [
      {
        title: '1. Главная идея: в истории есть события, фон и «раньше»',
        html: `
<div class="g-idea">Формы вы уже знаете: Past Simple (уроки a1-9, a1-10), Past Continuous (a2-1), used to (a2-9), have got (a1-6). Теперь — как их <b>сочетать</b>. Русское «играл» в английском бывает тремя разными временами — в зависимости от того, что вы хотите показать.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я играл, когда отключили свет.</p><p>Вчера я играл три часа.</p><p>В детстве я играл во дворе каждый день.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>was playing</b> when the power went off.</span></p><p><span class="say">I <b>played</b> for three hours yesterday.</span></p><p><span class="say">As a kid, I <b>used to play</b> outside every day.</span></p></div>
</div>
<table>
<tr><th>Форма</th><th>Смысл</th><th>Вопрос себе</th></tr>
<tr><td>Past Simple</td><td>событие целиком</td><td>Что случилось?</td></tr>
<tr><td>Past Continuous</td><td>процесс, фон</td><td>Что происходило тогда?</td></tr>
<tr><td>used to</td><td>привычка раньше, теперь нет</td><td>Так было раньше?</td></tr>
</table>
<div class="g-tip">Сериал: Past Continuous — декорации и фоновая музыка, Past Simple — повороты сюжета, used to — флешбэк «как было раньше».</div>
<div class="mini" data-q="В детстве я смотрел мультики каждое утро." data-o="As a kid, I was watching cartoons every morning.|As a kid, I used to watch cartoons every morning.|As a kid, I use to watch cartoons every morning." data-a="1" data-why="Регулярная привычка в прошлом, которой больше нет, — used to."></div>`
      },
      {
        title: '2. Past Simple: тонкости',
        html: `
<p><b>do как основной глагол.</b> В вопросе и отрицании do встречается дважды: помощник did + глагол do.</p>
<div class="g-bad">What did you on Saturday? · I didn't anything.</div>
<div class="g-good">What did you <b>do</b> on Saturday? · I didn't <b>do</b> anything.</div>
<p><b>be или did?</b> С was/were помощник did не нужен. Часто в одной фразе встречаются оба:</p>
<table>
<tr><th>С be</th><th>С глаголом</th></tr>
<tr><td><span class="say">Were you tired?</span></td><td><span class="say">Did you sleep well?</span></td></tr>
<tr><td><span class="say">I wasn't hungry.</span></td><td><span class="say">I didn't eat.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I wasn't hungry, so I didn't eat anything.</span> — Я не был голоден, поэтому ничего не ел.</li>
<li><span class="say">Did you go out last night, or were you too tired?</span> — Ты вчера выходил или слишком устал?</li>
</ul>
<p><b>Коварные неправильные глаголы.</b> У одних все формы одинаковые, другие легко спутать:</p>
<table>
<tr><th>Одинаковые</th><th>Не перепутайте</th></tr>
<tr><td>cut, put, shut, cost, hurt, hit, let, set</td><td>fall → <b>fell</b> (упал) · feel → <b>felt</b> (почувствовал)</td></tr>
<tr><td>read → read <span class="muted">(читается «рэд»)</span></td><td>leave → <b>left</b> (ушёл) · live → <b>lived</b> (жил)</td></tr>
</table>
<ul class="g-list">
<li><span class="say">The ticket cost fifty euros.</span> — Билет стоил пятьдесят евро.</li>
<li><span class="say">I fell off my bike and hurt my knee.</span> — Я упал с велосипеда и ушиб колено.</li>
<li><span class="say">It was cold, so I shut the window.</span> — Было холодно, и я закрыл окно.</li>
</ul>
<p>Цепочка событий «одно за другим» — только Past Simple: <span class="say">I opened my laptop, checked the mail and made some coffee.</span></p>
<div class="mini" data-q="What ___ you do last night?" data-o="did|were|was" data-a="0" data-why="do — обычный глагол, вопрос в прошлом через did."></div>
<div class="mini" data-q="I ___ my finger while I was cooking." data-o="cut|cutted|cuted" data-a="0" data-why="cut — все три формы одинаковые: cut — cut — cut."></div>`
      },
      {
        title: '3. Past Continuous: фон, прерывание и «в тот момент»',
        html: `
<div class="g-idea">Past Continuous = «был в середине процесса»: начал раньше, ещё не закончил. Отсюда три главных употребления.</div>
<p><b>1) В определённый момент или период</b>:</p>
<ul class="g-list">
<li><span class="say">At eleven last night I was still working.</span> — В одиннадцать вечера я всё ещё работал.</li>
<li><span class="say">This time last year I was living in Riga.</span> — Год назад в это время я жил в Риге.</li>
</ul>
<p><b>2) Процесс, который прервало событие</b> (when / while):</p>
<ul class="g-list">
<li><span class="say">Someone stole my phone while I was sleeping on the train.</span> — У меня украли телефон, пока я спал в поезде.</li>
<li><span class="say">I was crossing the street when I noticed Max.</span> — Я переходил улицу, когда заметил Макса.</li>
</ul>
<p><b>3) Два процесса одновременно</b>: <span class="say">While I was cooking, my flatmate was playing FIFA.</span></p>
<p>Главная тонкость — один и тот же when меняет смысл:</p>
<table>
<tr><th>Фраза</th><th>Что было</th></tr>
<tr><td><span class="say">When Lena arrived, we were having dinner.</span></td><td>мы <b>уже</b> ужинали, она пришла посреди ужина</td></tr>
<tr><td><span class="say">When Lena arrived, we had dinner.</span></td><td><b>сначала</b> она пришла, <b>потом</b> мы поужинали</td></tr>
</table>
<p>State verbs (know, want, like, need…) и в прошлом не ставят в -ing:</p>
<div class="g-bad">We were knowing each other well. · I was enjoying the party, but Max was wanting to leave.</div>
<div class="g-good">We <b>knew</b> each other well. · I was enjoying the party, but Max <b>wanted</b> to leave.</div>
<div class="mini" data-q="When the power went off, I ___ an important file." data-o="saved|was saving|save" data-a="1" data-why="Процесс шёл, и его прервало событие, — Past Continuous."></div>
<div class="mini" data-q="The phone rang, so I ___ it." data-o="was answering|answered|answer" data-a="1" data-why="Одно событие за другим — Past Simple."></div>`
      },
      {
        title: '4. have и have got: «у меня есть»',
        html: `
<div class="g-idea">Когда речь о том, что у вас <b>есть</b> (вещи, родственники, болезни, встречи в расписании), <b>have</b> и <b>have got</b> значат одно и то же. have got чаще в британской разговорной речи, have — везде, особенно в американской.</div>
<ul class="g-list">
<li><span class="say">I have a new laptop.</span> = <span class="say">I've got a new laptop.</span></li>
<li><span class="say">She has two sisters.</span> = <span class="say">She's got two sisters.</span></li>
<li><span class="say">I have a headache.</span> = <span class="say">I've got a headache.</span> — У меня болит голова.</li>
<li><span class="say">We have a meeting at three.</span> = <span class="say">We've got a meeting at three.</span></li>
</ul>
<p>Вопрос и отрицание — три варианта, но третий редкий и звучит старомодно:</p>
<table>
<tr><th>have (do)</th><th>have got</th><th>редко</th></tr>
<tr><td><span class="say">Do you have a charger?</span></td><td><span class="say">Have you got a charger?</span></td><td>Have you a charger?</td></tr>
<tr><td><span class="say">She doesn't have a car.</span></td><td><span class="say">She hasn't got a car.</span></td><td>She hasn't a car.</td></tr>
</table>
<p><b>В прошлом</b> — просто had, без got. Вопрос и отрицание — через did:</p>
<ul class="g-list">
<li><span class="say">I had long hair at university.</span> — В универе у меня были длинные волосы.</li>
<li><span class="say">Did you have a phone back then?</span> — У тебя тогда был телефон?</li>
<li><span class="say">I didn't have my phone, so I couldn't call you.</span> — У меня не было телефона.</li>
</ul>
<p>В значении «есть, владею» have не бывает в -ing:</p>
<div class="g-bad">I'm having a cold. · He's having a beard. · Had you a car?</div>
<div class="g-good">I've got a cold. · He has a beard. · Did you have a car?</div>
<div class="mini" data-q="When I was a student, I ___ a car." data-o="had got|had|have got" data-a="1" data-why="В прошлом — просто had, без got."></div>
<div class="mini" data-q="___ you have any questions?" data-o="Do|Have|Are" data-a="0" data-why="С have (без got) вопрос строится через do."></div>`
      },
      {
        title: '5. have как действие: have lunch, have a shower, have fun',
        html: `
<div class="g-idea">В английском <b>have</b> часто значит не «иметь», а <b>делать, получать опыт</b>: есть, принимать душ, болтать, веселиться. Здесь have got <b>невозможен</b>, зато можно Continuous.</div>
<table>
<tr><th>О чём</th><th>Выражения</th></tr>
<tr><td>еда</td><td>have breakfast / lunch / dinner / a coffee / a snack</td></tr>
<tr><td>отдых</td><td>have a shower / a rest / a break / a nap / a holiday / a party</td></tr>
<tr><td>общение</td><td>have a chat / a talk / an argument</td></tr>
<tr><td>опыт</td><td>have fun / a good time / trouble (doing) / an accident / a dream</td></tr>
<tr><td>разное</td><td>have a look (at) — взглянуть · have a go — попробовать · have a baby</td></tr>
</table>
<ul class="g-list">
<li><span class="say">Sorry, I can't talk — I'm having lunch.</span> — Не могу говорить, обедаю.</li>
<li><span class="say">We're having a great time here!</span> — Мы тут отлично проводим время!</li>
<li><span class="say">Can you have a look at my design?</span> — Глянешь мой макет?</li>
<li><span class="say">Let me have a go.</span> — Дай я попробую.</li>
</ul>
<p>Вопрос и отрицание — через <b>do / does / did</b>:</p>
<div class="g-bad">How often have you a break? · Had you trouble finding the office?</div>
<div class="g-good">How often <b>do</b> you <b>have</b> a break? · <b>Did</b> you <b>have</b> trouble finding the office?</div>
<table>
<tr><th>Есть (владею)</th><th>Действие</th></tr>
<tr><td><span class="say">I've got some sandwiches. Want one?</span></td><td><span class="say">I usually have a sandwich for lunch.</span></td></tr>
</table>
<div class="mini" data-q="Sorry, I can't answer. I ___ a shower." data-o="have got|am having|have" data-a="1" data-why="have a shower — действие в процессе, поэтому am having; have got тут невозможен."></div>
<div class="mini" data-q="I ___ a strange dream last night." data-o="had got|had|have got" data-a="1" data-why="have a dream — действие в прошлом: had, без got."></div>`
      },
      {
        title: '6. used to глубже',
        html: `
<div class="g-idea">Вы уже знаете: <b>used to + глагол</b> = «раньше делал, а теперь нет» (урок a2-9). Теперь нюансы.</div>
<p><b>Не только привычки, но и то, что раньше было правдой:</b></p>
<ul class="g-list">
<li><span class="say">I used to think Max was arrogant. Now we're best friends.</span> — Раньше я думал, что Макс заносчивый.</li>
<li><span class="say">This café used to be a game shop.</span> — Раньше здесь был магазин игр.</li>
<li><span class="say">I never used to like coffee.</span> — Раньше я совсем не любил кофе.</li>
</ul>
<p><b>Короткий ответ</b> — глагол после used to можно не повторять:</p>
<ul class="g-list"><li><span class="say">Do you still play chess? — Not really, but I used to.</span> — Уже нет, но раньше играл.</li></ul>
<p><b>Отрицание</b> — три варианта:</p>
<table>
<tr><th>Форма</th><th>Стиль</th></tr>
<tr><td><span class="say">I didn't use to like him.</span></td><td>обычный</td></tr>
<tr><td><span class="say">I never used to like him.</span></td><td>разговорный, очень частый</td></tr>
<tr><td><span class="say">I used not to like him.</span></td><td>книжный, редкий</td></tr>
</table>
<p><b>Для настоящего формы нет</b>: «use to» о сегодняшнем дне не бывает. Нужен Present Simple:</p>
<div class="g-bad">I use to get up at seven.</div>
<div class="g-good">I <b>usually get</b> up at seven.</div>
<p><b>Сколько раз и сколько лет</b> — не с used to. used to = «обычно, регулярно», а не «в сумме»:</p>
<div class="g-bad">I used to live in Omsk for five years. · We used to go there three times.</div>
<div class="g-good">I <b>lived</b> in Omsk for five years. · We <b>went</b> there three times.</div>
<div class="mini" data-q="Do you still watch anime? — Not much, but I ___." data-o="used|used to|use to" data-a="1" data-why="В коротком ответе остаётся used to, глагол можно опустить."></div>
<div class="mini" data-q="I ___ in Tver for three years." data-o="used to live|lived|was living" data-a="1" data-why="Указан весь срок — это законченный факт, Past Simple."></div>`
      },
      {
        title: '7. used to, was doing или be used to?',
        html: `
<div class="g-idea">Эти формы похожи внешне, но значат разное. Сравните:</div>
<table>
<tr><th>Фраза</th><th>Смысл</th></tr>
<tr><td><span class="say">I used to watch TV a lot.</span></td><td>раньше часто смотрел, теперь нет</td></tr>
<tr><td><span class="say">I was watching TV when you called.</span></td><td>был в процессе в тот момент</td></tr>
<tr><td><span class="say">I watched TV yesterday.</span></td><td>просто факт, один раз</td></tr>
<tr><td><span class="say">I'm used to working at night.</span></td><td>я <b>привык</b> работать ночью</td></tr>
</table>
<div class="g-formula"><span class="g-part g-v">used to</span><span class="g-plus">+</span><span class="g-part">глагол</span><span class="g-sep">·</span><span class="g-part">раньше</span><span class="g-sep">·</span><span class="g-part g-v">am / is / are used to</span><span class="g-plus">+</span><span class="g-part">-ing</span><span class="g-sep">·</span><span class="g-part">привык</span></div>
<ul class="g-list">
<li><span class="say">I used to live alone.</span> — Раньше я жил один. <span class="muted">(теперь нет)</span></li>
<li><span class="say">I'm used to living alone.</span> — Я привык жить один. <span class="muted">(живу и мне норм)</span></li>
</ul>
<div class="g-tip">Есть am/is/are перед used — это «привык». Нет — это «раньше». Подробно про be used to будет на уровне B2.</div>
<div class="mini" data-q="I ___ early — I've done it for years." data-o="used to get up|am used to getting up|use to get up" data-a="1" data-why="Привычка сейчас, «мне нормально» — am used to + -ing."></div>
<div class="mini" data-q="I ___ a book when the lights went out." data-o="used to read|was reading|read" data-a="1" data-why="Процесс, который прервало событие, — Past Continuous."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">What did you at the weekend?</div><div class="g-good">What did you <b>do</b> at the weekend?</div>
<div class="g-bad">When Lena arrived, we had dinner. <span class="muted">(если уже ужинали)</span></div><div class="g-good">When Lena arrived, we <b>were having</b> dinner.</div>
<div class="g-bad">We were knowing each other.</div><div class="g-good">We <b>knew</b> each other.</div>
<div class="g-bad">I'm having a cold.</div><div class="g-good">I<b>'ve got</b> a cold. / I <b>have</b> a cold.</div>
<div class="g-bad">Lisa had got long hair at school.</div><div class="g-good">Lisa <b>had</b> long hair at school.</div>
<div class="g-bad">How often have you lunch?</div><div class="g-good">How often <b>do</b> you <b>have</b> lunch?</div>
<div class="g-bad">I use to play every day. <span class="muted">(о сегодняшнем дне)</span></div><div class="g-good">I <b>usually play</b> every day.</div>
<div class="g-bad">I used to live there for five years.</div><div class="g-good">I <b>lived</b> there for five years.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>Past Simple</b> — события · <b>Past Continuous</b> — фон и процесс · <b>used to</b> — «раньше, а теперь нет» · <b>have got</b> — только «есть», <b>have</b> — и «есть», и действие.</div>`
      }
    ],
    words: [
      ['childhood', 'детство', 'I used to play outside a lot in my childhood.', 'В детстве я много играл на улице.'],
      ['suddenly', 'вдруг, внезапно', 'Suddenly the screen went black.', 'Вдруг экран погас.'],
      ['notice', 'замечать', 'I noticed a bug while I was testing.', 'Я заметил баг, пока тестировал.'],
      ['interrupt', 'перебивать, прерывать', 'Sorry, I was interrupting you.', 'Прости, я тебя перебивал.'],
      ['gradually', 'постепенно', 'Gradually the game got easier.', 'Постепенно игра стала легче.'],
      ['decade', 'десятилетие', 'Games used to be simpler a decade ago.', 'Десять лет назад игры были проще.'],
      ['survive', 'выживать', 'Only two players survived the storm.', 'Бурю пережили только два игрока.'],
      ['escape', 'сбежать, спастись', 'We escaped while the guards were sleeping.', 'Мы сбежали, пока стражники спали.'],
      ['chase', 'гнаться, преследовать', 'A dog was chasing me down the street.', 'За мной по улице гналась собака.'],
      ['hide — hid', 'прятать(ся) — спрятал(ся)', 'I hid behind a wall and waited.', 'Я спрятался за стеной и ждал.'],
      ['steal — stole', 'красть — украл', 'Someone stole my bike last week.', 'На прошлой неделе у меня украли велосипед.'],
      ['slip', 'поскользнуться', 'I slipped while I was running for the bus.', 'Я поскользнулся, когда бежал к автобусу.'],
      ['spill — spilled / spilt', 'проливать — пролил', 'I spilled coffee on my keyboard.', 'Я пролил кофе на клавиатуру.'],
      ['freeze — froze', 'замерзать, зависать — замёрз, завис', 'The game froze at the final boss.', 'Игра зависла на финальном боссе.'],
      ['break down — broke down', 'сломаться (о технике)', 'Our car broke down on the way home.', 'Наша машина сломалась по дороге домой.'],
      ['crash', 'разбиться; вылететь (о программе)', 'The server crashed at midnight.', 'Сервер упал в полночь.'],
      ['manage (to)', 'суметь, справиться', 'I managed to finish the level.', 'Я сумел пройти уровень.'],
      ['shut — shut', 'закрывать — закрыл', 'I shut the window because it was cold.', 'Я закрыл окно, потому что было холодно.'],
      ['appointment', 'запись, назначенная встреча', 'I’ve got a dentist appointment at four.', 'У меня запись к стоматологу в четыре.'],
      ['headache', 'головная боль', 'I had a terrible headache yesterday.', 'Вчера у меня ужасно болела голова.'],
      ['sore throat', 'больное горло', 'I’ve got a sore throat.', 'У меня болит горло.'],
      ['cough', 'кашель; кашлять', 'She had a bad cough all week.', 'У неё всю неделю был сильный кашель.'],
      ['flu', 'грипп', 'I stayed at home because I had the flu.', 'Я сидел дома, потому что у меня был грипп.'],
      ['beard', 'борода', 'My uncle used to have a long beard.', 'У моего дяди раньше была длинная борода.'],
      ['degree', 'диплом, учёная степень; градус', 'She’s got a degree in design.', 'У неё диплом дизайнера.'],
      ['afford', 'позволить себе (по деньгам)', 'I couldn’t afford a PC back then.', 'Тогда я не мог позволить себе ПК.'],
      ['habit', 'привычка', 'Biting my nails used to be my bad habit.', 'Раньше у меня была дурная привычка грызть ногти.'],
      ['have a look (at)', 'взглянуть', 'Can you have a look at my layout?', 'Можешь взглянуть на мой макет?'],
      ['have a chat', 'поболтать', 'We had a chat after the meeting.', 'Мы поболтали после встречи.'],
      ['have trouble (doing)', 'с трудом что-то делать, иметь проблемы', 'Did you have trouble finding the office?', 'Трудно было найти офис?'],
      ['argue', 'спорить, ссориться', 'My brother and I used to argue about the TV.', 'Мы с братом раньше ссорились из-за телевизора.']
    ],
    texts: [
      {
        id: 't-b1-2-1', title: 'The night the servers went down', level: 'B1',
        text: `It happened last winter, on the night of our biggest release. At that time I was working at a small studio in Kazan, and we were launching our first online game.
At eleven o'clock the whole team was sitting in the office. Somebody was ordering pizza, two developers were arguing about a bug, and I was checking the store page for the hundredth time. Outside it was snowing, and the streets were empty and quiet.
At midnight the game went live. For ten minutes everything was perfect. Players were joining, the chat was full of happy messages, and our boss was smiling for the first time in months.
Then, suddenly, the screens froze. While we were celebrating, forty thousand people tried to log in at the same time, and the servers crashed. Nobody said a word. Then everyone started shouting at once.
We didn't sleep that night. We had a quick meeting, drank a lot of coffee and fixed the problems one by one. I didn't do any design work at all. I answered angry players on social media until six in the morning. At one point I was typing a long reply when my laptop died too. I laughed so hard that I almost cried.
At seven the servers were working again. We had a short break, and our boss had a chat with each of us. "You did an amazing job," she said. "Now go home and get some sleep."
I don't work at that studio any more, but I often remember that night. I used to think that releases were exciting and fun. Now I know they are mostly stressful — but still a little bit magical.`,
        questions: [
          { q: 'What was the weather like that night?', o: ['It was raining', 'It was snowing', 'It was hot'], a: 1 },
          { q: 'What happened while the team was celebrating?', o: ['The servers crashed', 'The boss went home', 'The pizza arrived'], a: 0 },
          { q: 'What did the writer do that night?', o: ['He designed new icons', 'He slept in the office', 'He answered angry players online'], a: 2 }
        ]
      },
      {
        id: 't-b1-2-2', title: 'A box of old photos', level: 'B1',
        text: `Kira: Look what I found at my parents' place — a whole box of old photos.
Tim: Oh wow. Is that you? You used to have really long hair!
Kira: I did. And I used to wear these awful round glasses. I didn't use to care about fashion at all.
Tim: Who's the guy with the huge beard?
Kira: That's my uncle Sasha. He had a beard for twenty years, and then one day he shaved it off. Nobody recognized him at the family dinner!
Tim: Ha! And where are you here? You're all wet.
Kira: That was our trip to the lake. It was raining the whole day, but we were having so much fun that we didn't care.
Tim: Do you still go there?
Kira: Not really, but we used to go every summer. We had a little wooden house by the water. Well, my grandparents had it.
Tim: Have they still got it?
Kira: No, they sold it years ago. I was really upset.
Tim: What about this one? Why are you crying?
Kira: I wasn't crying! I had a terrible cold. I was sitting at home with a cup of tea when my cousin took the picture. I've got no idea why my mum kept it.
Tim: Did you use to fight with your cousin?
Kira: All the time. We used to argue about the TV. He wanted cartoons, and I wanted music videos. Once he hid the remote for a whole week.
Tim: And now?
Kira: Now we're best friends. He's got two kids, and I'm their favourite aunt. Right, I'm having a coffee break. Do you want one?
Tim: Sure. Have you got any biscuits?
Kira: I don't think so, but let me have a look.`,
        questions: [
          { q: 'What did Kira use to wear?', o: ['Round glasses', 'A long beard', 'Music T-shirts'], a: 0 },
          { q: 'Why was Kira at home in one photo?', o: ['It was raining', 'She had a bad cold', 'She was watching cartoons'], a: 1 },
          { q: 'What did Kira and her cousin use to argue about?', o: ['The lake house', 'Biscuits', 'The TV'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'What ___ you do at the weekend?', o: ['did', 'were', 'was'], a: 0, why: 'do — обычный глагол, вопрос в прошлом через did.' },
      { t: 'choice', q: 'I ___ a bath when the doorbell rang.', o: ['had', 'was having', 'have'], a: 1, why: 'Процесс, который прервал звонок, — Past Continuous.' },
      { t: 'choice', q: 'When the boss came in, we ___ the meeting. (сначала вошёл, потом начали)', o: ['were starting', 'started', 'was starting'], a: 1, why: 'Одно событие после другого — Past Simple.' },
      { t: 'choice', q: 'Lisa ___ long hair when she was at school.', o: ['had got', 'had', 'has got'], a: 1, why: 'В прошлом «было, имелось» — просто had.' },
      { t: 'choice', q: '___ you have any brothers or sisters?', o: ['Have', 'Do', 'Are'], a: 1, why: 'С have без got вопрос строится через do.' },
      { t: 'choice', q: 'I can\'t come to the phone — I ___ lunch.', o: ['have got', 'am having', 'have'], a: 1, why: 'have lunch — действие в процессе, have got здесь невозможен.' },
      { t: 'choice', q: 'Do you still play the guitar? — No, but I ___.', o: ['used', 'used to', 'use to'], a: 1, why: 'В коротком ответе остаётся used to без глагола.' },
      { t: 'choice', q: 'I ___ in Minsk for four years.', o: ['used to live', 'lived', 'was living'], a: 1, why: 'Весь срок указан — законченный факт, Past Simple.' },
      { t: 'gap', q: 'While I ___ the dishes, I broke a plate. (wash)', a: ['was washing'], why: 'Процесс, во время которого случилось событие, — Past Continuous.' },
      { t: 'gap', q: 'We ___ each other well at school. (know)', a: ['knew'], why: 'know — глагол-состояние, в -ing не ставится даже в прошлом.' },
      { t: 'gap', q: 'I ___ trouble finding the office. (not / have)', a: ["didn't have", 'did not have'], why: 'have trouble — действие, отрицание через didn\'t have.' },
      { t: 'gap', q: 'She ___ to like spicy food, but now she loves it. (never / use)', a: ['never used'], why: 'never used to — разговорное отрицание used to.' },
      { t: 'gap', q: 'Yesterday the ticket ___ fifty euros. (cost)', a: ['cost'], why: 'cost — все формы одинаковые: cost — cost — cost.' },
      { t: 'gap', q: 'I ___ tired, so I went to bed early. (be)', a: ['was'], why: 'С be прошлое — was/were, без did.' },
      { t: 'order', a: 'What were you doing at midnight', ru: 'Что ты делал в полночь?' },
      { t: 'order', a: 'Did you use to have a dog', ru: 'У тебя раньше была собака?' },
      { t: 'tr', q: 'Мы отлично провели время.', a: ['we had a great time', 'we had a good time', 'we had a wonderful time', 'we had a lot of fun', 'we had great fun'] },
      { t: 'tr', q: 'У меня болит голова.', a: ["i've got a headache", 'i have got a headache', 'i have a headache'] },
      { t: 'tr', q: 'Раньше я не пил кофе.', a: ["i didn't use to drink coffee", 'i did not use to drink coffee', 'i never used to drink coffee', 'i used not to drink coffee'] },
      { t: 'listen', say: 'I was sleeping when you called', a: ['i was sleeping when you called'] }
    ],
    test: [
      { t: 'choice', q: 'I ___ anything special yesterday.', o: ['didn\'t', 'didn\'t do', 'wasn\'t do'], a: 1, why: 'Нужен и помощник did, и основной глагол do.' },
      { t: 'choice', q: 'When I looked out of the window, it ___.', o: ['snowed', 'was snowing', 'snows'], a: 1, why: 'Снег уже шёл в тот момент — фон, Past Continuous.' },
      { t: 'choice', q: 'Kate arrived, and then we ___ dinner together.', o: ['were having', 'had', 'have'], a: 1, why: 'and then — события по порядку, Past Simple.' },
      { t: 'choice', q: 'I ___ a cold, so I stayed at home.', o: ['was having', 'had', 'had got'], a: 1, why: 'Болезнь — это «есть», не действие; в прошлом просто had.' },
      { t: 'choice', q: 'How often ___ a break at work?', o: ['have you', 'do you have', 'are you having'], a: 1, why: 'have a break — действие, вопрос через do.' },
      { t: 'choice', q: 'He ___ a beard now — he shaved it off.', o: ['hasn\'t got', 'isn\'t having', 'doesn\'t has'], a: 0, why: '«Есть/нет» — hasn\'t got (или doesn\'t have), без -ing.' },
      { t: 'choice', q: 'I ___ working at night. I\'ve done it for years.', o: ['used to', 'am used to', 'use to'], a: 1, why: 'Привык и мне нормально — am used to + -ing.' },
      { t: 'choice', q: 'I ___ to the gym three times last week.', o: ['used to go', 'went', 'was going'], a: 1, why: 'Точное число раз — законченный факт, Past Simple, не used to.' },
      { t: 'gap', q: 'This building ___ be a cinema. Now it\'s a gym. (use)', a: ['used to'], why: 'Что было правдой раньше, а теперь нет, — used to.' },
      { t: 'gap', q: 'I ___ the party, but Max wanted to leave. (enjoy)', a: ['was enjoying'], why: 'enjoy — действие в процессе (Continuous), а want — состояние (Simple).' },
      { t: 'gap', q: 'Somebody stole my bike while I ___ in the café. (sit)', a: ['was sitting'], why: 'Фоновый процесс после while — Past Continuous.' },
      { t: 'gap', q: 'Can you have a ___ at my design? (взглянуть)', a: ['look'], why: 'have a look (at) — «взглянуть», устойчивое выражение с have.' }
    ]
  }
);
