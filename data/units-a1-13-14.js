// Юниты A1 13–14: артикли a/an и the (go to work, go home); предлоги времени и места at / on / in

COURSE.units.push(
  // ───────────────────────────── UNIT 13 ─────────────────────────────
  {
    id: 'a1-13', level: 'A1', num: 13, track: 'main',
    books: { red: [69, 70, 71, 72] },
    title: 'A и the — go to work, go home',
    summary: 'Научимся за три секунды выбирать a, the или ничего — по простому алгоритму — и говорить go to work, go home, go to the cinema без ошибок.',
    grammar: [
      {
        title: '1. Главная идея: «какой-то» или «тот самый»',
        html: `
<div class="g-idea">В русском нет артиклей: «Я купил игру. Игра классная». Мы понимаем, что во втором предложении — <b>та самая</b> игра, по смыслу. В английском эту разницу надо <b>показать словом</b>: <b>a</b> = «какой-то, один из многих», <b>the</b> = «тот самый, понятно какой».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я купил <span class="g-gap">_</span> игру.</p><p><span class="g-gap">_</span> Игра классная.</p><p>Закрой <span class="g-gap">_</span> дверь.</p><p>Я люблю <span class="g-gap">_</span> музыку.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I bought <b>a</b> game.</span> <span class="muted">— какую-то, вы её ещё не знаете</span></p><p><span class="say"><b>The</b> game is great.</span> <span class="muted">— ту самую, о которой я сказал</span></p><p><span class="say">Close <b>the</b> door.</span> <span class="muted">— понятно какую: дверь этой комнаты</span></p><p><span class="say">I love music.</span> <span class="muted">— музыку вообще, без артикля</span></p></div>
</div>
<div class="g-tip">Представьте, что <b>a</b> — это «<b>один</b>» (a = старое «one»), а <b>the</b> — это «<b>тот самый</b>» (the ≈ that). Если по-русски хочется сказать «какой-то / один» — ставьте a. Если «тот самый / этот» — the.</div>
<p>Как читается: <b>the</b> перед согласным звуком — [ðə]: <span class="say">the game</span>; перед гласным звуком — [ði]: <span class="say">the end</span>, <span class="say">the office</span>.</p>
<div class="mini" data-q="Я скачал игру. Игра бесплатная. — I downloaded a game. ___ game is free." data-o="A|The|—" data-a="1" data-why="Игру уже упомянули, это та самая игра → the."></div>`
      },
      {
        title: '2. a / an — «один из многих», в первый раз',
        html: `
<p>Ставим <b>a/an</b>, когда предмет или человек — <b>один из многих</b>, и нам не важно, какой именно. Или мы говорим о нём <b>впервые</b>.</p>
<ul class="g-list">
<li><span class="say">I've got a cat.</span> — У меня есть кошка. <span class="muted">(кошек в мире много, у меня одна из них)</span></li>
<li><span class="say">Can I ask a question?</span> — Можно задать вопрос? <span class="muted">(какой-то один)</span></li>
<li><span class="say">Is there a cafe near here?</span> — Здесь рядом есть кафе? <span class="muted">(любое)</span></li>
<li><span class="say">She is a designer.</span> — Она дизайнер. <span class="muted">(одна из многих дизайнеров)</span></li>
<li><span class="say">Rome is a beautiful city.</span> — Рим — красивый город. <span class="muted">(один из красивых городов)</span></li>
</ul>
<table>
<tr><th>Когда</th><th>Что ставим</th><th>Пример</th></tr>
<tr><td>согласный <b>звук</b></td><td><b class="g-v">a</b></td><td><span class="say">a game</span>, <span class="say">a university</span> <span class="muted">[ju:]</span></td></tr>
<tr><td>гласный <b>звук</b></td><td><b class="g-v">an</b></td><td><span class="say">an app</span>, <span class="say">an old game</span>, <span class="say">an hour</span> <span class="muted">(h не читается)</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">a / an</span><span class="g-plus">+</span><span class="g-part g-v">ОДНА штука, которую можно посчитать</span></div>
<p>Поэтому <b>a/an никогда</b> не ставим перед множественным числом и неисчисляемым (как в прошлом уроке: water, music, money):</p>
<div class="g-bad">I bought a new headphones. I need an advice.</div>
<div class="g-good">I bought new headphones. I need some advice.</div>
<div class="g-tip">Прилагательное артикль не «отменяет»: <span class="say">a game</span> → <span class="say">a good game</span> → <span class="say">an old game</span>. Выбор a/an — по первому звуку после артикля.</div>
<div class="mini" data-q="I watched ___ interesting series." data-o="a|an|—" data-a="1" data-why="Одна вещь, упомянута впервые; interesting начинается с гласного звука → an."></div>
<div class="mini" data-q="We have ___ new chairs in the office." data-o="a|an|—" data-a="2" data-why="chairs — множественное число, a/an не бывает."></div>`
      },
      {
        title: '3. the — когда понятно, о каком именно речь',
        html: `
<div class="g-idea"><b>the</b> ставим, когда и вы, и собеседник <b>знаете</b>, о каком предмете речь. Причин всего три.</div>
<div class="g-steps"><div class="g-h">Три причины поставить the</div><ol>
<li><b>Уже говорили.</b> <span class="say">I bought a jacket and a hat. The jacket was cheap.</span> — Я купил куртку и шапку. Куртка была дешёвая.</li>
<li><b>Понятно из ситуации</b> — он тут один. В комнате: <span class="say">the door</span>, <span class="say">the window</span>, <span class="say">the light</span>, <span class="say">the floor</span>. В квартире: <span class="say">the kitchen</span>, <span class="say">the bathroom</span>. В городе: <span class="say">the station</span>, <span class="say">the airport</span>, <span class="say">the city centre</span>.</li>
<li><b>Уточнили, какой именно</b>: <span class="say">the name of this street</span> (у улицы одно название), <span class="say">the boss of our studio</span>, <span class="say">the games on my list</span>.</li>
</ol></div>
<ul class="g-list">
<li><span class="say">Where's Max? — In the kitchen.</span> — Где Макс? — На кухне. <span class="muted">(на кухне этой квартиры)</span></li>
<li><span class="say">Turn off the light, please.</span> — Выключи, пожалуйста, свет.</li>
<li><span class="say">Can you repeat the question?</span> — Можете повторить вопрос? <span class="muted">(тот, что вы задали)</span></li>
<li><span class="say">We stayed in a hotel. The hotel was great.</span> — Мы жили в отеле. Отель был отличный.</li>
</ul>
<div class="g-tip">the можно ставить перед <b>чем угодно</b>: одной вещью, многими, неисчисляемым — <span class="say">the game</span>, <span class="say">the games</span>, <span class="say">the music in this game</span>. Главное — чтобы было понятно, какие именно.</div>
<div class="g-bad">Can you open window? <span class="muted">— в комнате одно окно</span></div>
<div class="g-good">Can you open the window?</div>
<div class="mini" data-q="I've got a dog and a cat. ___ dog is very lazy." data-o="A|The|—" data-a="1" data-why="Собаку уже упомянули — та самая собака → the."></div>
<div class="mini" data-q="Where is ___ bathroom, please? (в гостях)" data-o="a|the|—" data-a="1" data-why="В квартире ванная одна, понятно какая → the."></div>`
      },
      {
        title: '4. the — всегда в этих словах',
        html: `
<p>Есть вещи, которые в мире или в ситуации <b>одни</b>. С ними the — почти всегда.</p>
<table>
<tr><th>Группа</th><th>Примеры</th></tr>
<tr><td>одно на всех</td><td><span class="say">the sun</span>, <span class="say">the moon</span>, <span class="say">the sky</span>, <span class="say">the sea</span>, <span class="say">the world</span>, <span class="say">the internet</span></td></tr>
<tr><td>«самый», «тот же»</td><td><span class="say">the same</span>, <span class="say">the best</span>, <span class="say">the first</span>, <span class="say">the last</span>, <span class="say">the capital of…</span></td></tr>
<tr><td>часть чего-то</td><td><span class="say">the top</span>, <span class="say">the end</span>, <span class="say">the middle</span>, <span class="say">the left</span>, <span class="say">the right</span></td></tr>
<tr><td>службы</td><td><span class="say">the police</span>, <span class="say">the army</span></td></tr>
<tr><td>инструменты</td><td><span class="say">play the guitar</span>, <span class="say">play the piano</span></td></tr>
<tr><td>за городом, радио</td><td><span class="say">the country</span> (деревня, природа), <span class="say">listen to the radio</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">The sky is grey today.</span> — Сегодня небо серое.</li>
<li><span class="say">We live in the same house.</span> — Мы живём в одном и том же доме.</li>
<li><span class="say">Who is the best player on your team?</span> — Кто лучший игрок в вашей команде?</li>
<li><span class="say">Our office is on the first floor.</span> — Наш офис на первом этаже. <span class="muted">(в Британии first floor — это наш второй; наш первый — the ground floor)</span></li>
<li><span class="say">Write your name at the top of the page.</span> — Напишите имя вверху страницы.</li>
<li><span class="say">My brother plays the guitar.</span> — Мой брат играет на гитаре.</li>
</ul>
<div class="g-bad">We live in same street. Who is best player?</div>
<div class="g-good">We live in <b>the</b> same street. Who is <b>the</b> best player?</div>
<p>А вот <b>TV</b> — без the: <span class="say">I watch TV every evening.</span> Но если это сам аппарат: <span class="say">Turn off the TV.</span> — Выключи телевизор.</p>
<div class="mini" data-q="Anna plays ___ piano." data-o="a|the|—" data-a="1" data-why="Играть на инструменте: play the piano, play the guitar."></div>
<div class="mini" data-q="What's on ___ TV tonight?" data-o="a|the|—" data-a="2" data-why="Смотреть телевизор, что по телевизору — TV без артикля."></div>`
      },
      {
        title: '5. Алгоритм: a, the или ничего — за три вопроса',
        html: `
<div class="g-idea">Не надо «чувствовать» артикли. Задайте себе три вопроса <b>по порядку</b> — и ответ готов. Этот алгоритм работает в 9 случаях из 10.</div>
<div class="g-steps"><div class="g-h">Перед существительным спросите себя</div><ol>
<li><b>Уже есть «хозяин»?</b> my, your, his, Kate's, this, that, some, any, one, two… → <b>артикль не нужен</b>. <span class="say">my game</span>, <span class="say">this game</span>, <span class="say">Max's game</span>.</li>
<li><b>Понятно, какой именно?</b> (уже говорили / он тут один / единственный в мире / уточнили словами) → <b>the</b>. Подходит для любых слов.</li>
<li><b>Непонятно, какой. Это ОДНА штука, которую можно посчитать?</b><br>да → <b>a / an</b>: <span class="say">I need a laptop.</span><br>нет, их много или это неисчисляемое → <b>ничего</b>: <span class="say">I need laptops.</span> <span class="say">I need coffee.</span></li>
</ol></div>
<table>
<tr><th>Фраза</th><th>Вопрос</th><th>Итог</th></tr>
<tr><td>Я купил ноутбук.</td><td>3: один, какой-то</td><td><span class="say">I bought a laptop.</span></td></tr>
<tr><td>Ноутбук очень быстрый.</td><td>2: уже говорили</td><td><span class="say">The laptop is very fast.</span></td></tr>
<tr><td>Мой ноутбук старый.</td><td>1: есть my</td><td><span class="say">My laptop is old.</span></td></tr>
<tr><td>Ноутбуки дорогие.</td><td>3: много, вообще</td><td><span class="say">Laptops are expensive.</span></td></tr>
<tr><td>Луна красивая.</td><td>2: единственная</td><td><span class="say">The moon is beautiful.</span></td></tr>
</table>
<div class="g-bad">It's the my phone. This is a Kate's bag.</div>
<div class="g-good">It's my phone. This is Kate's bag. <span class="muted">— my / Kate's уже работают как артикль</span></div>
<div class="g-tip">Проверка переводом: если в русском можно вставить «<b>какой-то / один</b>» — это a. Если можно вставить «<b>тот самый / этот</b>» — это the. Если не лезет ни то, ни другое, а речь «обо всём вообще» — ничего.</div>
<div class="mini" data-q="Я ищу работу. — I'm looking for ___ job." data-o="a|the|—" data-a="0" data-why="Какую-то одну работу (любую), слово исчисляемое → a."></div>
<div class="mini" data-q="It's ___ his laptop." data-o="a|the|—" data-a="2" data-why="Есть his — «хозяин» уже стоит, артикль не нужен."></div>`
      },
      {
        title: '6. «Вообще» — без the: I like music, I hate exams',
        html: `
<div class="g-idea">Когда мы говорим о чём-то <b>в целом</b> (все собаки, музыка вообще, игры как явление), английский <b>не ставит</b> the. Для русского это ловушка: хочется сказать «the music».</div>
<table>
<tr><th>Вообще — без the</th><th>Конкретные — the</th></tr>
<tr><td><span class="say">I like music.</span><br>Я люблю музыку.</td><td><span class="say">The music in this game is great.</span><br>Музыка в этой игре — класс.</td></tr>
<tr><td><span class="say">Dogs are friendly.</span><br>Собаки дружелюбные.</td><td><span class="say">The dogs next door are loud.</span><br>Собаки у соседей громкие.</td></tr>
<tr><td><span class="say">I don't like cold weather.</span></td><td><span class="say">The weather is nice today.</span></td></tr>
<tr><td><span class="say">Designers use Figma.</span></td><td><span class="say">The designers in our team use Figma.</span></td></tr>
</table>
<p>Тоже <b>без the</b>:</p>
<ul class="g-list">
<li>спорт и игры: <span class="say">I play football.</span> <span class="say">She plays chess.</span></li>
<li>языки и предметы: <span class="say">English is easy.</span> <span class="say">I love history.</span></li>
<li>еда по времени дня: <span class="say">What did you have for breakfast?</span> <span class="say">Lunch is at one.</span> <span class="say">Dinner is ready!</span></li>
<li>next / last + время: <span class="say">last summer</span>, <span class="say">next week</span>, <span class="say">last Monday</span></li>
</ul>
<div class="g-bad">I love the games. The English is hard. I play the football. See you the next week.</div>
<div class="g-good">I love games. English is hard. I play football. See you next week.</div>
<div class="g-tip">Сравните два инструмента: «играть на гитаре» — play <b>the</b> guitar, «играть в футбол» — play football <b>без</b> the. Спорт — голый, инструмент — с the.</div>
<div class="mini" data-q="___ cats are funny. (все кошки)" data-o="The|A|—" data-a="2" data-why="Кошки вообще, в целом → без артикля."></div>
<div class="mini" data-q="I had ___ lunch with Tom." data-o="a|the|—" data-a="2" data-why="Названия приёмов пищи — без артикля: have lunch."></div>`
      },
      {
        title: '7. go to work, go home, go to the cinema',
        html: `
<div class="g-idea">Некоторые места мы называем по их <b>главной цели</b>: работа — работать, школа — учиться, кровать — спать. Тогда говорим <b>без the</b>. Это готовые фразы — их проще запомнить парами.</div>
<table>
<tr><th>Куда</th><th>Где</th><th>Смысл</th></tr>
<tr><td><span class="say">go to work</span></td><td><span class="say">at work</span></td><td>на работу / на работе</td></tr>
<tr><td><span class="say">go to school</span></td><td><span class="say">at school</span></td><td>в школу / в школе</td></tr>
<tr><td><span class="say">go to university</span></td><td><span class="say">at university</span></td><td>в университет</td></tr>
<tr><td><span class="say">go to bed</span></td><td><span class="say">in bed</span></td><td>спать / в постели</td></tr>
<tr><td><span class="say">go to hospital</span></td><td><span class="say">in hospital</span></td><td>в больницу / в больнице</td></tr>
<tr><td><span class="say">go home</span></td><td><span class="say">at home</span></td><td>домой / дома</td></tr>
</table>
<p>Ещё так же: <span class="say">start work</span>, <span class="say">finish work</span>, <span class="say">leave school</span>, <span class="say">go to church</span>, <span class="say">in prison</span>.</p>
<div class="g-bad">I'm going to home. I go to the work at nine.</div>
<div class="g-good">I'm going home. I go to work at nine. <span class="muted">— перед home нет ни the, ни to</span></div>
<p>А вот обычные места города — <b>с the</b>:</p>
<ul class="g-list">
<li><span class="say">go to the cinema</span>, <span class="say">the theatre</span>, <span class="say">the bank</span>, <span class="say">the station</span>, <span class="say">the airport</span>, <span class="say">the city centre</span></li>
<li>к врачу: <span class="say">go to the doctor</span>, <span class="say">go to the dentist</span></li>
<li><span class="say">We went to the cinema last night.</span> — Вчера вечером мы ходили в кино.</li>
</ul>
<div class="g-tip">Запомните одну фразу-якорь: <span class="say">I go to work, then I go to the gym, then I go home and go to bed.</span> В ней всё правило целиком.</div>
<div class="mini" data-q="I'm tired. I'm going ___." data-o="to home|home|to the home" data-a="1" data-why="go home — без to и без the."></div>
<div class="mini" data-q="She is ___ bank. She needs some money." data-o="at|at the|in a" data-a="1" data-why="Банк — обычное место в городе, с the: at the bank."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I am designer.</div><div class="g-good">I am <b>a</b> designer.</div>
<div class="g-bad">I bought a game. A game is great.</div><div class="g-good">I bought a game. <b>The</b> game is great.</div>
<div class="g-bad">I like the music and the games.</div><div class="g-good">I like music and games.</div>
<div class="g-bad">Close door, please.</div><div class="g-good">Close <b>the</b> door, please.</div>
<div class="g-bad">It's a my laptop.</div><div class="g-good">It's my laptop.</div>
<div class="g-bad">I go to the work by bus. I'm going to home.</div><div class="g-good">I go to work by bus. I'm going home.</div>
<div class="g-bad">She plays guitar and the tennis.</div><div class="g-good">She plays <b>the</b> guitar and tennis.</div>
<div class="g-bad">We live in same city.</div><div class="g-good">We live in <b>the</b> same city.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Есть my / this? → ничего · Понятно какой? → <b>the</b> · Один из многих? → <b>a/an</b> · Много или вообще? → ничего · <b>go to work, go home</b>, но <b>go to the cinema</b>.</div>`
      }
    ],
    words: [
      ['a / an', 'неопределённый артикль («один, какой-то»)', 'I\'ve got an idea!', 'У меня есть идея!'],
      ['the', 'определённый артикль («тот самый»)', 'Open the door, please.', 'Открой дверь, пожалуйста.'],
      ['work', 'работа; работать', 'I go to work at nine.', 'Я иду на работу в девять.'],
      ['home', 'дом; домой', 'I\'m tired. I\'m going home.', 'Я устал. Я иду домой.'],
      ['bed', 'кровать, постель', 'I went to bed at midnight.', 'Я лёг спать в полночь.'],
      ['school', 'школа', 'What did you learn at school?', 'Что ты узнал в школе?'],
      ['university', 'университет', 'My sister is at university.', 'Моя сестра учится в университете.'],
      ['hospital', 'больница', 'His dad is in hospital.', 'Его папа в больнице.'],
      ['cinema', 'кинотеатр, кино', 'We went to the cinema yesterday.', 'Вчера мы ходили в кино.'],
      ['theatre', 'театр', 'I never go to the theatre.', 'Я никогда не хожу в театр.'],
      ['bank', 'банк', 'Is there a bank near here?', 'Здесь рядом есть банк?'],
      ['station', 'станция, вокзал', 'The station is very busy.', 'На вокзале очень людно.'],
      ['airport', 'аэропорт', 'Take a taxi to the airport.', 'Возьми такси до аэропорта.'],
      ['city centre', 'центр города', 'Do you live in the city centre?', 'Ты живёшь в центре города?'],
      ['dentist', 'стоматолог', 'I need to go to the dentist.', 'Мне нужно сходить к стоматологу.'],
      ['doctor', 'врач', 'Go to the doctor!', 'Сходи к врачу!'],
      ['kitchen', 'кухня', 'Max is in the kitchen.', 'Макс на кухне.'],
      ['light', 'свет; лампа', 'Turn off the light, please.', 'Выключи свет, пожалуйста.'],
      ['floor', 'пол; этаж', 'Our office is on the second floor.', 'Наш офис на втором этаже.'],
      ['sun', 'солнце', 'The sun is hot today.', 'Сегодня солнце жаркое.'],
      ['sky', 'небо', 'The sky in this game is beautiful.', 'Небо в этой игре красивое.'],
      ['world', 'мир', 'It\'s the best game in the world.', 'Это лучшая игра в мире.'],
      ['same', 'тот же, одинаковый', 'We work in the same studio.', 'Мы работаем в одной и той же студии.'],
      ['end', 'конец', 'I didn\'t like the end of the film.', 'Мне не понравился конец фильма.'],
      ['middle', 'середина', 'The boss is in the middle of the photo.', 'Начальник в середине фотографии.'],
      ['top', 'верх', 'Write the title at the top.', 'Напиши заголовок наверху.'],
      ['police', 'полиция', 'The police came very fast.', 'Полиция приехала очень быстро.'],
      ['guitar', 'гитара', 'Can you play the guitar?', 'Ты умеешь играть на гитаре?'],
      ['radio', 'радио', 'Dad listens to the radio in the car.', 'Папа слушает радио в машине.'],
      ['breakfast', 'завтрак', 'I don\'t usually have breakfast.', 'Я обычно не завтракаю.'],
      ['lunch', 'обед', 'We have lunch at one.', 'Мы обедаем в час.'],
      ['question', 'вопрос', 'Can I ask a question?', 'Можно задать вопрос?']
    ],
    texts: [
      {
        id: 't-a1-13-1', title: 'A new job', level: 'A1',
        text: `Last Monday I started a new job. I'm a designer in a small game studio. The studio is in the city centre, near the station.
In the morning I took a bus to work. The bus was full, so I didn't sit. At the studio the boss gave me a laptop and a desk. The desk is near the window, and I can see the sky and the river.
There are two artists and a programmer in our team. The artists are very friendly. The programmer didn't say a word all day — he had headphones on.
We had lunch at one. There is a cafe on the first floor, and the soup there is great.
In the afternoon the boss showed me our game. It's a game about a cat in space. The cat can fly, and the music is fantastic. I love music in games.
I finished work at six, went home and went to bed early. It was a good day.`,
        questions: [
          { q: 'Where is the studio?', o: ['In the city centre, near the station', 'Near the airport', 'In the country'], a: 0 },
          { q: 'Where is the cafe?', o: ['Near the river', 'On the first floor', 'At the station'], a: 1 },
          { q: 'What is the game about?', o: ['A dog in the city', 'A cat in space', 'A programmer at work'], a: 1 }
        ]
      },
      {
        id: 't-a1-13-2', title: 'After work', level: 'A1',
        text: `Anna: Hi, Max! Where are you?
Max: I'm at work. I finish work at seven today.
Anna: Do you want to go to the cinema after work? There's a new film about a detective and a robot dog.
Max: Oh, I saw the trailer! The dog is so funny.
Max: OK, but I can't stay out late. I need to go to the dentist in the morning.
Anna: No problem. Where do we meet? At the station?
Max: No, the station is always busy. Can we meet at the bank near the cinema?
Anna: Sure. After the film we can have dinner. I know a nice place.
Max: Great! I didn't have lunch today. I was in meetings all day.
Anna: And how is your brother? Is he still in hospital?
Max: No, he went home last week. Now he is in bed all day, watches TV and plays the guitar. The neighbours are not happy!
Anna: Ha! OK, see you at seven.`,
        questions: [
          { q: 'Why can\'t Max stay out late?', o: ['He has to work at night', 'He needs to go to the dentist in the morning', 'He wants to watch TV'], a: 1 },
          { q: 'Where do they meet?', o: ['At the station', 'At the bank near the cinema', 'At home'], a: 1 },
          { q: 'What does Max\'s brother do now?', o: ['He plays football', 'He works at the hospital', 'He watches TV and plays the guitar'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'My brother is ___ engineer.', o: ['a', 'an', 'the'], a: 1, why: 'Профессия, один из многих; engineer начинается с гласного звука → an.' },
      { t: 'choice', q: 'I bought a phone and a case. ___ case was cheap.', o: ['A', 'The', '—'], a: 1, why: 'Чехол уже упомянули — это тот самый чехол → the.' },
      { t: 'choice', q: 'I\'m hungry. What\'s for ___ dinner?', o: ['a', 'the', '—'], a: 2, why: 'breakfast, lunch, dinner — без артикля.' },
      { t: 'choice', q: 'Look at ___ moon! It\'s so big tonight.', o: ['a', 'the', '—'], a: 1, why: 'Луна одна на всех → the moon.' },
      { t: 'choice', q: 'I don\'t like ___ horror films.', o: ['a', 'the', '—'], a: 2, why: 'Фильмы ужасов вообще, в целом → без артикля.' },
      { t: 'choice', q: 'It\'s late. Let\'s go ___.', o: ['to home', 'home', 'the home'], a: 1, why: 'go home — без to и без артикля.' },
      { t: 'choice', q: 'We need ___ milk. The fridge is empty.', o: ['a', 'an', '—'], a: 2, why: 'milk — неисчисляемое, a/an с ним не бывает.' },
      { t: 'choice', q: 'Who is ___ girl in this photo?', o: ['a', 'the', '—'], a: 1, why: 'Уточнили, какая именно — та, что на этом фото → the.' },
      { t: 'gap', q: 'Can you turn off ___ light, please? (артикль)', a: ['the'], why: 'В комнате один свет, понятно какой → the.' },
      { t: 'gap', q: 'Is there ___ hotel near here? (артикль)', a: ['a'], why: 'Какой-нибудь отель, любой, один из многих → a.' },
      { t: 'gap', q: 'My sister plays ___ piano very well. (артикль)', a: ['the'], why: 'Музыкальные инструменты — с the: play the piano.' },
      { t: 'gap', q: 'I usually go to ___ at eleven. (кровать)', a: ['bed'], why: 'go to bed — «идти спать», устойчивая фраза без артикля.' },
      { t: 'gap', q: 'We have ___ hour for lunch. (артикль)', a: ['an'], why: 'В hour буква h не читается, первый звук гласный → an.' },
      { t: 'gap', q: 'We live in ___ same building. (артикль)', a: ['the'], why: 'the same — всегда с the.' },
      { t: 'order', a: 'I go to work at nine', ru: 'Я иду на работу в девять' },
      { t: 'order', a: 'The music in this game is great', ru: 'Музыка в этой игре — отличная' },
      { t: 'tr', q: 'Я люблю музыку и игры.', a: ['i love music and games', 'i like music and games'] },
      { t: 'tr', q: 'Закрой дверь, пожалуйста.', a: ['close the door please', 'close the door, please', 'please close the door', 'shut the door please', 'shut the door, please'] },
      { t: 'listen', say: 'Where is Max? He is in the kitchen', a: ['where is max he is in the kitchen', 'where\'s max he\'s in the kitchen', 'where is max? he is in the kitchen'] }
    ],
    test: [
      { t: 'choice', q: 'Rome is ___ beautiful city. (один из многих)', o: ['a', 'the', '—'], a: 0, why: 'Один из многих красивых городов → a (прилагательное артикль не отменяет).' },
      { t: 'choice', q: 'Rome is ___ capital of Italy.', o: ['a', 'the', '—'], a: 1, why: 'Столица у страны одна → the.' },
      { t: 'choice', q: 'Do you play ___ tennis?', o: ['a', 'the', '—'], a: 2, why: 'Спорт и игры — без артикля.' },
      { t: 'choice', q: 'Where\'s Kate? — She\'s ___ school.', o: ['at', 'at the', 'in a'], a: 0, why: 'at school — учится в школе, устойчивая фраза без the.' },
      { t: 'choice', q: 'You look ill. Go to ___ doctor.', o: ['a', 'the', '—'], a: 1, why: 'go to the doctor / the dentist — с the.' },
      { t: 'choice', q: 'Как правильно?', o: ['This is a my desk.', 'This is the my desk.', 'This is my desk.'], a: 2, why: 'my уже стоит перед словом — артикль не нужен.' },
      { t: 'choice', q: 'I didn\'t understand ___ end of this series.', o: ['an', 'the', '—'], a: 1, why: 'Конец у сериала один, уточнили какой → the end of…' },
      { t: 'gap', q: 'What\'s ___ name of this street? (артикль)', a: ['the'], why: 'У улицы одно название, уточнили какое — the name of…' },
      { t: 'gap', q: 'I watched ___ old film yesterday. (артикль)', a: ['an'], why: 'Один фильм, упомянут впервые; old начинается с гласного звука → an.' },
      { t: 'gap', q: 'I start ___ at ten and finish at six. (работа)', a: ['work'], why: 'start work, finish work — без артикля.' },
      { t: 'gap', q: 'Where are ___ children? — In the garden. (артикль)', a: ['the'], why: 'Понятно, какие дети — наши, в этом доме → the.' },
      { t: 'gap', q: 'We went to ___ airport by taxi. (артикль)', a: ['the'], why: 'airport, station, cinema, bank — обычные места города, с the.' }
    ]
  },

  // ───────────────────────────── UNIT 14 ─────────────────────────────
  {
    id: 'a1-14', level: 'A1', num: 14, track: 'main',
    books: { red: [103, 106, 107, 109] },
    title: 'At 8, on Monday, in April — предлоги времени и места',
    summary: 'Научимся говорить, когда и где: at 8, on Monday, in April; in the box, on the wall, at the door; next to, behind, opposite.',
    grammar: [
      {
        title: '1. Главная идея: одно русское «в» — три английских слова',
        html: `
<div class="g-idea">По-русски: «в 8 часов», «в понедельник», «в апреле». Везде «в». По-английски здесь <b>три разных</b> предлога: <b>at</b>, <b>on</b>, <b>in</b>. Выбор зависит от того, <b>насколько большой</b> кусок времени.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p><b>в</b> 8 часов</p><p><b>в</b> понедельник</p><p><b>в</b> апреле</p><p><b>в</b> 2026 году</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>at</b> 8 o'clock</span> <span class="muted">— точка</span></p><p><span class="say"><b>on</b> Monday</span> <span class="muted">— день</span></p><p><span class="say"><b>in</b> April</span> <span class="muted">— отрезок</span></p><p><span class="say"><b>in</b> 2026</span> <span class="muted">— отрезок</span></p></div>
</div>
<div class="g-formula"><span class="g-part">at</span> точка на часах <span class="g-sep">·</span> <span class="g-part g-v">on</span> один день (как в календаре) <span class="g-sep">·</span> <span class="g-part">in</span> всё, что длиннее дня</div>
<div class="g-tip">Представьте пирамиду: наверху маленькая точка — <b>at</b> (8:00), посередине день — <b>on</b> (Monday), внизу широкое основание — <b>in</b> (April, summer, 2026). Чем больше кусок времени — тем ниже, тем больше «внутри» — in.</div>
<div class="mini" data-q="The stream starts ___ 9 o'clock." data-o="at|on|in" data-a="0" data-why="Точное время на часах → at."></div>`
      },
      {
        title: '2. Время: at, on, in — таблица и исключения',
        html: `
<table>
<tr><th>at — точка</th><th>on — день</th><th>in — отрезок</th></tr>
<tr><td><span class="say">at 7:30</span><br><span class="say">at midnight</span><br><span class="say">at lunchtime</span></td><td><span class="say">on Friday</span><br><span class="say">on 5 May</span><br><span class="say">on my birthday</span></td><td><span class="say">in May</span><br><span class="say">in 2019</span><br><span class="say">in winter</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">The shop closes at 10.</span> — Магазин закрывается в 10.</li>
<li><span class="say">I don't work on Sundays.</span> — Я не работаю по воскресеньям. <span class="muted">(on + дни недели во мн. ч. = «по…»)</span></li>
<li><span class="say">The game comes out on 12 March.</span> — Игра выходит 12 марта.</li>
<li><span class="say">I was born in 1996.</span> — Я родился в 1996 году.</li>
<li><span class="say">It's cold here in winter.</span> — Здесь холодно зимой.</li>
</ul>
<p><b>Части дня</b> — по-разному, запомните как фразы:</p>
<table>
<tr><th>in the…</th><th>at…</th><th>on + день + часть</th></tr>
<tr><td><span class="say">in the morning</span><br><span class="say">in the afternoon</span><br><span class="say">in the evening</span></td><td><span class="say">at night</span><br><span class="say">at the weekend</span><br><span class="say">at Christmas</span></td><td><span class="say">on Monday morning</span><br><span class="say">on Friday night</span><br><span class="say">on Christmas Day</span></td></tr>
</table>
<p>И ещё два полезных «at»: <span class="say">at the moment</span> — сейчас, в данный момент; <span class="say">at the end of May</span> — в конце мая.</p>
<div class="g-bad">in Monday morning · in the night · on the weekend <span class="muted">(последнее — американский вариант)</span></div>
<div class="g-good">on Monday morning · at night · at the weekend</div>
<div class="g-tip">Если в фразе есть <b>название дня</b> — побеждает <b>on</b>: in the morning, но <b>on</b> Sunday morning.</div>
<div class="mini" data-q="I can't sleep ___ night." data-o="in|at|on" data-a="1" data-why="Исключение: at night (а утро, день, вечер — in the…)."></div>
<div class="mini" data-q="We have a meeting ___ Tuesday afternoon." data-o="in|at|on" data-a="2" data-why="Есть название дня (Tuesday) → on."></div>`
      },
      {
        title: '3. Когда предлог НЕ нужен',
        html: `
<div class="g-idea">Перед словами <b>this, last, next, every</b> предлог времени <b>не ставим</b>. И перед <b>yesterday, today, tomorrow</b> — тоже.</div>
<ul class="g-list">
<li><span class="say">I'm busy this week.</span> — Я занят на этой неделе.</li>
<li><span class="say">We went to Spain last summer.</span> — Прошлым летом мы ездили в Испанию.</li>
<li><span class="say">The update is next Monday.</span> — Обновление в следующий понедельник.</li>
<li><span class="say">I play every evening.</span> — Я играю каждый вечер.</li>
</ul>
<div class="g-bad">on next Monday · in last summer · in this evening · at every day</div>
<div class="g-good">next Monday · last summer · this evening · every day</div>
<p><b>in + срок</b> = «через»: считаем от <b>сейчас</b>.</p>
<ul class="g-list">
<li><span class="say">The match starts in five minutes.</span> — Матч начнётся через пять минут.</li>
<li><span class="say">The new season is in two weeks.</span> — Новый сезон через две недели.</li>
</ul>
<div class="g-tip">«Через 5 минут» — не «after 5 minutes», а <b>in 5 minutes</b>. Как таймер в игре: «in 5… 4… 3…».</div>
<div class="mini" data-q="I bought this game ___ last week." data-o="in|on|— (ничего)" data-a="2" data-why="Перед last / next / this / every предлог не нужен."></div>
<div class="mini" data-q="Через час — это…" data-o="after an hour|in an hour|on an hour" data-a="1" data-why="«Через» от сейчас = in + срок."></div>`
      },
      {
        title: '4. Место: in — внутри, on — на, at — у точки',
        html: `
<table>
<tr><th>Предлог</th><th>Смысл</th><th>Примеры</th></tr>
<tr><td><b class="g-v">in</b></td><td>внутри: коробка, комната, город, страна</td><td><span class="say">in the box</span>, <span class="say">in my room</span>, <span class="say">in a car</span>, <span class="say">in the water</span>, <span class="say">in London</span>, <span class="say">in Russia</span></td></tr>
<tr><td><b class="g-v">on</b></td><td>на поверхности: сверху или на стене</td><td><span class="say">on the table</span>, <span class="say">on the floor</span>, <span class="say">on the wall</span>, <span class="say">on the ceiling</span>, <span class="say">on the screen</span></td></tr>
<tr><td><b class="g-v">at</b></td><td>у точки, в пункте</td><td><span class="say">at the door</span>, <span class="say">at the bus stop</span>, <span class="say">at the traffic lights</span>, <span class="say">at my desk</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">My keys are in the bag.</span> — Ключи в сумке.</li>
<li><span class="say">There's a poster on the wall.</span> — На стене постер. <span class="muted">(по-русски «на стене» — и тут on, совпадает)</span></li>
<li><span class="say">Someone is at the door.</span> — Кто-то у двери / за дверью.</li>
<li><span class="say">He's working at his desk.</span> — Он работает за своим столом.</li>
<li><span class="say">Sochi is in the south of Russia.</span> — Сочи на юге России. <span class="muted">(части страны: in the north / south / east / west)</span></li>
<li><span class="say">I live in a city, but I want to live in the country.</span> — Я живу в городе, но хочу жить за городом.</li>
</ul>
<p>Ещё: <span class="say">at the top</span> / <span class="say">at the bottom</span> / <span class="say">at the end of the street</span> — наверху, внизу, в конце улицы. А на велосипеде и на лошади — <b>on</b>: <span class="say">on a bike</span>, <span class="say">on a horse</span>.</p>
<div class="g-bad">The picture is in the wall. We are waiting in the bus stop.</div>
<div class="g-good">The picture is on the wall. We are waiting at the bus stop.</div>
<div class="g-tip">Спросите себя: <b>можно закрыть крышку?</b> — in. <b>Можно положить сверху или повесить?</b> — on. <b>Стою рядом, как у точки на карте?</b> — at.</div>
<div class="mini" data-q="There's a spider ___ the ceiling!" data-o="in|on|at" data-a="1" data-why="Потолок — поверхность, паук на ней → on."></div>
<div class="mini" data-q="Wait for me ___ the traffic lights." data-o="in|on|at" data-a="2" data-why="Светофор — точка, у которой стоят → at."></div>`
      },
      {
        title: '5. Места-фразы: at home, in bed, on the bus',
        html: `
<p>Некоторые сочетания проще выучить готовыми — логика в них есть, но слабая.</p>
<table>
<tr><th>in</th><th>at</th><th>on</th></tr>
<tr><td><span class="say">in bed</span><br><span class="say">in hospital</span><br><span class="say">in the sky</span><br><span class="say">in the world</span><br><span class="say">in a photo</span><br><span class="say">in a book</span><br><span class="say">in a car / taxi</span><br><span class="say">in the middle</span></td><td><span class="say">at home</span><br><span class="say">at work</span><br><span class="say">at school</span><br><span class="say">at university</span><br><span class="say">at the station</span><br><span class="say">at the airport</span><br><span class="say">at Kate's</span><br><span class="say">at a party</span></td><td><span class="say">on a bus</span><br><span class="say">on a train</span><br><span class="say">on a plane</span><br><span class="say">on the first floor</span><br><span class="say">on the way home</span><br><span class="say">on the left</span><br><span class="say">on the right</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">You look great in this photo.</span> — Ты отлично выглядишь на этом фото. <span class="muted">(русское «на фото» = in)</span></li>
<li><span class="say">I met Tom at a party.</span> — Я познакомился с Томом на вечеринке. <span class="muted">(событие: at a party, at a concert, at a match)</span></li>
<li><span class="say">I was at my sister's.</span> — Я был у сестры. <span class="muted">(at + чей-то дом: at Kate's, at the doctor's)</span></li>
<li><span class="say">I read on the bus.</span> — Я читаю в автобусе.</li>
<li><span class="say">I met Anna on the way to work.</span> — Я встретил Анну по дороге на работу.</li>
<li><span class="say">We stayed at a small hotel.</span> = <span class="say">We stayed in a small hotel.</span> — с гостиницей можно и так, и так.</li>
</ul>
<div class="g-tip"><b>in</b> a car / a taxi, но <b>on</b> a bus / a train / a plane. Ассоциация: в автобусе можно <b>встать и пройтись</b> — ты «на борту» (on board). В машине только сидишь внутри — in.</div>
<div class="g-bad">in the photo — «на фото» переводят как on the photo</div>
<div class="g-good">He's in the photo. I saw it in the newspaper.</div>
<div class="mini" data-q="Where were you? — ___ Max's. We played games." data-o="In|On|At" data-a="2" data-why="У кого-то дома — at + имя с 's: at Max's."></div>
<div class="mini" data-q="I always listen to podcasts ___ the train." data-o="in|on|at" data-a="1" data-why="Общественный транспорт — on: on the bus, on the train."></div>`
      },
      {
        title: '6. Где относительно чего: next to, behind, opposite…',
        html: `
<table>
<tr><th>English</th><th>Русский</th><th>Пример</th></tr>
<tr><td><b>next to</b> / <b>beside</b> / <b>by</b></td><td>рядом с, возле</td><td><span class="say">My desk is next to the window.</span></td></tr>
<tr><td><b>between</b></td><td>между</td><td><span class="say">The cafe is between the bank and the station.</span></td></tr>
<tr><td><b>in front of</b></td><td>перед</td><td><span class="say">There's a car in front of our house.</span></td></tr>
<tr><td><b>behind</b></td><td>за, позади</td><td><span class="say">The cable is behind the monitor.</span></td></tr>
<tr><td><b>opposite</b></td><td>напротив</td><td><span class="say">The gym is opposite the cinema.</span></td></tr>
<tr><td><b>under</b></td><td>под</td><td><span class="say">The cat is under the bed.</span></td></tr>
<tr><td><b>above</b> / <b>below</b></td><td>выше / ниже (не касаясь)</td><td><span class="say">There's a lamp above the table.</span></td></tr>
</table>
<p>И ещё: <span class="say">on the left</span> — слева, <span class="say">on the right</span> — справа, <span class="say">in the middle</span> — посередине. <span class="say">I'm on the left in this photo.</span></p>
<div class="g-bad">The shop is in front of the cinema. <span class="muted">— если речь про другую сторону улицы</span></div>
<div class="g-good">The shop is opposite the cinema. <span class="muted">— напротив, через дорогу</span></div>
<div class="g-tip"><b>in front of</b> — прямо перед носом, с той же стороны. <b>opposite</b> — лицом к лицу, между вами что-то есть (стол, улица). В кафе друг сидит <b>opposite</b> you, а в очереди человек стоит <b>in front of</b> you.</div>
<div class="g-bad">The lamp is on the table. <span class="muted">— если она висит над столом</span></div>
<div class="g-good">The lamp is above the table. <span class="muted">— on = касается, above = выше, не касаясь</span></div>
<div class="mini" data-q="Подпись под картинкой: The text is ___ the picture." data-o="below|above|behind" data-a="0" data-why="Ниже, не касаясь → below."></div>
<div class="mini" data-q="Мой дом напротив парка." data-o="My house is in front of the park.|My house is opposite the park.|My house is between the park." data-a="1" data-why="«Напротив», через дорогу → opposite (без of)."></div>`
      },
      {
        title: '7. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">in 8 o'clock</div><div class="g-good"><b>at</b> 8 o'clock</div>
<div class="g-bad">in Monday</div><div class="g-good"><b>on</b> Monday</div>
<div class="g-bad">on next week · in last Friday</div><div class="g-good">next week · last Friday</div>
<div class="g-bad">in the night</div><div class="g-good"><b>at</b> night</div>
<div class="g-bad">after ten minutes <span class="muted">— «через 10 минут»</span></div><div class="g-good"><b>in</b> ten minutes</div>
<div class="g-bad">on the photo</div><div class="g-good"><b>in</b> the photo</div>
<div class="g-bad">I'm in home. She's in work.</div><div class="g-good">I'm <b>at</b> home. She's <b>at</b> work.</div>
<div class="g-bad">in the bus</div><div class="g-good"><b>on</b> the bus</div>
<div class="g-bad">opposite of the park</div><div class="g-good">opposite the park</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Время: <b>at</b> 8 · <b>on</b> Monday · <b>in</b> April (без предлога — this / next / last / every). Место: <b>in</b> внутри · <b>on</b> на поверхности · <b>at</b> у точки.</div>`
      }
    ],
    words: [
      ['at', 'в (точное время); у, в (месте)', 'See you at seven.', 'Увидимся в семь.'],
      ['on', 'в (день); на (поверхности)', 'The stream is on Friday.', 'Стрим в пятницу.'],
      ['in', 'в (месяц, год); внутри', 'My birthday is in May.', 'Мой день рождения в мае.'],
      ['o\'clock', 'час (ровно)', 'I start work at nine o\'clock.', 'Я начинаю работу в девять часов.'],
      ['half past', 'половина (после часа)', 'It\'s half past six.', 'Половина седьмого.'],
      ['midnight', 'полночь', 'The game comes out at midnight.', 'Игра выходит в полночь.'],
      ['morning', 'утро', 'I drink coffee in the morning.', 'Утром я пью кофе.'],
      ['afternoon', 'день (после обеда)', 'We have a meeting in the afternoon.', 'Днём у нас встреча.'],
      ['evening', 'вечер', 'I play games in the evening.', 'Вечером я играю в игры.'],
      ['night', 'ночь', 'I don\'t work at night.', 'Я не работаю ночью.'],
      ['weekend', 'выходные', 'What did you do at the weekend?', 'Что ты делал на выходных?'],
      ['moment', 'момент', 'I\'m busy at the moment.', 'Я сейчас занят.'],
      ['spring', 'весна', 'The park is beautiful in spring.', 'Весной парк красивый.'],
      ['summer', 'лето', 'We went to the sea in summer.', 'Летом мы ездили на море.'],
      ['autumn', 'осень', 'It often rains in autumn.', 'Осенью часто идёт дождь.'],
      ['winter', 'зима', 'It\'s dark at five in winter.', 'Зимой в пять уже темно.'],
      ['month', 'месяц', 'The update comes out next month.', 'Обновление выйдет в следующем месяце.'],
      ['birthday', 'день рождения', 'What did you do on your birthday?', 'Что ты делал в свой день рождения?'],
      ['Christmas', 'Рождество', 'We were at home at Christmas.', 'На Рождество мы были дома.'],
      ['next to', 'рядом с', 'Sit next to me!', 'Садись рядом со мной!'],
      ['between', 'между', 'The bank is between two cafes.', 'Банк между двумя кафе.'],
      ['in front of', 'перед', 'I sit in front of a computer all day.', 'Я весь день сижу перед компьютером.'],
      ['behind', 'за, позади', 'The cat is behind the sofa.', 'Кот за диваном.'],
      ['opposite', 'напротив', 'The shop is opposite my house.', 'Магазин напротив моего дома.'],
      ['under', 'под', 'My slippers are under the bed.', 'Мои тапки под кроватью.'],
      ['above', 'над, выше', 'There is a shelf above my desk.', 'Над моим столом полка.'],
      ['below', 'ниже, под', 'Read the text below the picture.', 'Прочитай текст под картинкой.'],
      ['wall', 'стена', 'There are two posters on the wall.', 'На стене два постера.'],
      ['desk', 'письменный стол', 'My phone is on the desk.', 'Мой телефон на столе.'],
      ['corner', 'угол', 'The lamp is in the corner.', 'Лампа в углу.'],
      ['bus stop', 'автобусная остановка', 'I\'m waiting at the bus stop.', 'Я жду на остановке.'],
      ['way', 'путь, дорога', 'I called you on the way home.', 'Я звонил тебе по дороге домой.']
    ],
    texts: [
      {
        id: 't-a1-14-1', title: 'My week', level: 'A1',
        text: `I'm a designer, and my week is always busy.
On Monday morning our team has a meeting at ten. The boss talks, and we drink a lot of coffee. In the afternoon I work at my desk. It's next to the window, opposite the kitchen.
On Wednesday I don't go to the office. I work at home. I start at nine and finish at five.
Every Thursday I play football with friends in the evening. We play in a small park behind our office.
On Friday night I stream my games. The stream starts at eight and ends at midnight. I don't sleep much at the weekend!
My favourite month is August. In August the studio is closed, and I go to the sea. Last summer I went to Turkey.
Now I'm planning a new trip. It's in two months, and I'm very happy about it.`,
        questions: [
          { q: 'When does the team have a meeting?', o: ['On Monday morning', 'On Friday night', 'In August'], a: 0 },
          { q: 'Where does the writer play football?', o: ['At home', 'In a park behind the office', 'At the sea'], a: 1 },
          { q: 'When does the stream end?', o: ['At eight', 'At ten', 'At midnight'], a: 2 }
        ]
      },
      {
        id: 't-a1-14-2', title: 'Where is my headset?', level: 'A1',
        text: `Max: Kate, where's my headset? The match starts in ten minutes!
Kate: Is it on your desk?
Max: No. There's a keyboard, a lamp and a cup on the desk. No headset.
Kate: Look under the desk. Your cat sleeps there.
Max: No, only the cat.
Kate: Maybe it's in your bag? You had it on the bus yesterday.
Max: No, it isn't in the bag. And it isn't on the shelf above the bed.
Kate: Did you leave it at Tom's? You were at his place on Saturday.
Max: No, I had it on Sunday evening. I played in the living room.
Kate: OK, look behind the sofa. Or between the sofa and the wall.
Max: Wait… It's here! It's on the floor behind the sofa, next to the TV.
Kate: Great. And the match?
Max: It starts in two minutes. Thanks, Kate!`,
        questions: [
          { q: 'What is under the desk?', o: ['The headset', 'The cat', 'The bag'], a: 1 },
          { q: 'When was Max at Tom\'s?', o: ['On Saturday', 'On Sunday evening', 'Yesterday on the bus'], a: 0 },
          { q: 'Where is the headset?', o: ['On the shelf above the bed', 'In the bag', 'On the floor behind the sofa'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'The concert starts ___ 7:30.', o: ['in', 'on', 'at'], a: 2, why: 'Точное время на часах → at.' },
      { t: 'choice', q: 'I was born ___ 1998.', o: ['in', 'on', 'at'], a: 0, why: 'Год — большой отрезок времени → in.' },
      { t: 'choice', q: 'What are you doing ___ the weekend?', o: ['in', 'on', 'at'], a: 2, why: 'Британский вариант — at the weekend.' },
      { t: 'choice', q: 'See you ___ Saturday!', o: ['in', 'on', 'at'], a: 1, why: 'День недели → on.' },
      { t: 'choice', q: 'I saw Anna ___ yesterday.', o: ['on', 'in', '— (ничего)'], a: 2, why: 'Перед yesterday / today / tomorrow предлог не ставим.' },
      { t: 'choice', q: 'There\'s a big map ___ the wall.', o: ['in', 'on', 'at'], a: 1, why: 'Стена — поверхность, карта на ней → on.' },
      { t: 'choice', q: 'I usually read ___ the bus.', o: ['in', 'on', 'at'], a: 1, why: 'Автобус, поезд, самолёт — on.' },
      { t: 'choice', q: 'The bank is ___ the cafe and the shop.', o: ['between', 'opposite', 'under'], a: 0, why: 'Между двумя местами → between … and …' },
      { t: 'gap', q: 'I always feel tired ___ the morning. (предлог)', a: ['in'], why: 'Части дня: in the morning / afternoon / evening.' },
      { t: 'gap', q: 'The new level comes out ___ 3 June. (предлог)', a: ['on'], why: 'Дата — это один день → on.' },
      { t: 'gap', q: 'She isn\'t here. She\'s ___ work. (предлог)', a: ['at'], why: 'at work, at home, at school — устойчивые фразы с at.' },
      { t: 'gap', q: 'The milk is ___ the fridge. (предлог)', a: ['in'], why: 'Внутри холодильника → in.' },
      { t: 'gap', q: 'The lesson starts ___ five minutes. (через)', a: ['in'], why: '«Через» + срок от сейчас = in.' },
      { t: 'gap', q: 'My cat is sleeping ___ the bed. (под)', a: ['under'], why: '«Под» = under.' },
      { t: 'order', a: 'We have a meeting on Monday morning', ru: 'У нас встреча в понедельник утром' },
      { t: 'order', a: 'The gym is opposite the station', ru: 'Спортзал напротив вокзала' },
      { t: 'tr', q: 'Я не работаю ночью.', a: ['i don\'t work at night', 'i do not work at night'] },
      { t: 'tr', q: 'Мой стол рядом с окном.', a: ['my desk is next to the window', 'my desk is by the window', 'my desk is beside the window', 'my desk is near the window', 'my table is next to the window'] },
      { t: 'listen', say: 'See you at the station at six', a: ['see you at the station at six', 'see you at the station at 6'] }
    ],
    test: [
      { t: 'choice', q: 'We don\'t go to school ___ Sundays.', o: ['in', 'on', 'at'], a: 1, why: 'Дни недели (и во мн. ч., «по воскресеньям») → on.' },
      { t: 'choice', q: 'It\'s very hot here ___ July.', o: ['in', 'on', 'at'], a: 0, why: 'Месяц → in.' },
      { t: 'choice', q: 'We have a party ___ Friday evening.', o: ['in', 'on', 'at'], a: 1, why: 'Есть название дня — on: on Friday evening.' },
      { t: 'choice', q: 'We went to Italy ___ last year.', o: ['in', 'on', '— (ничего)'], a: 2, why: 'Перед last / next / this / every предлог не нужен.' },
      { t: 'choice', q: 'Who is the man ___ this photo?', o: ['in', 'on', 'at'], a: 0, why: 'На фото, на картинке по-английски — in the photo.' },
      { t: 'choice', q: 'The bus is waiting ___ the traffic lights.', o: ['in', 'on', 'at'], a: 2, why: 'Точка на дороге, у которой стоят → at.' },
      { t: 'choice', q: 'In a cafe my friend sat ___ me, across the table.', o: ['in front of', 'opposite', 'behind'], a: 1, why: 'Лицом к лицу, через стол → opposite.' },
      { t: 'gap', q: 'Where were you? — ___ my brother\'s. (предлог)', a: ['at'], why: 'У кого-то дома: at + имя с \'s.' },
      { t: 'gap', q: 'We live ___ the second floor. (предлог)', a: ['on'], why: 'Этаж — on: on the first / second floor.' },
      { t: 'gap', q: 'Write your name ___ the top of the page. (предлог)', a: ['at'], why: 'at the top / at the bottom / at the end.' },
      { t: 'gap', q: 'There is a lamp ___ the sofa. It hangs from the ceiling. (над)', a: ['above', 'over'], why: 'Выше, не касаясь → above.' },
      { t: 'gap', q: 'I met Kate ___ the way home. (предлог)', a: ['on'], why: 'Устойчивая фраза: on the way (home / to work).' }
    ]
  }
);
