// Юниты B1 17–18: исчисляемые и неисчисляемые глубже, a/an, some, a или the; the: school / the school, в общем и конкретно, the giraffe, the rich, названия с the и без
COURSE.units.push(
  // ───────────────────────────── UNIT B1-17 ─────────────────────────────
  {
    id: 'b1-17', level: 'B1', num: 17, track: 'main',
    books: { blue: [69, 70, 71, 72] },
    title: 'Исчисляемые, a/an и the глубже',
    summary: 'Научимся за секунду решать, что ставить перед существительным: a, the, some или ничего — и не спотыкаться о слова, которые меняют смысл (a noise / noise, a paper / paper), и о «коварные» неисчисляемые вроде feedback, progress, luggage.',
    grammar: [
      {
        title: '1. Главная идея: перед каждым существительным — маленькое решение',
        html: `
<div class="g-idea">Что вы уже знаете (уроки A1-12 и A1-13): <b>a</b> — «какой-то, один из», <b>the</b> — «тот самый», неисчисляемое (music, water) — без a и без -s. На B1 главное — делать этот выбор <b>автоматически</b>. В русском такого решения нет вообще, поэтому мозг пропускает его. Наша задача — превратить его в привычку-алгоритм.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Вчера посмотрел <span class="g-gap">_</span> фильм. <span class="g-gap">_</span> Фильм был скучный, но <span class="g-gap">_</span> музыка — огонь.</p><p>Я люблю <span class="g-gap">_</span> музыку.</p><p>Мне нужен <span class="g-gap">_</span> совет.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Yesterday I watched <b>a</b> film. <b>The</b> film was boring, but <b>the</b> music was amazing.</span></p><p><span class="say">I love music.</span> <span class="muted">(ничего — музыка вообще)</span></p><p><span class="say">I need <b>some</b> advice.</span> <span class="muted">(advice не считается)</span></p></div>
</div>
<div class="g-steps"><div class="g-h">Алгоритм «что поставить перед существительным»</div><ol>
<li>Слово <b>считается</b> (one game, two games)? Или нет (music, advice)?</li>
<li>Если это <b>одна штука исчисляемого</b> — голым его оставить <b>нельзя</b>: нужно a / the / my / this / one…</li>
<li>Слушатель понимает, <b>какой именно</b>? → <b>the</b>.</li>
<li>Не понимает / неважно: одна штука → <b>a/an</b>; много или неисчисляемое → <b>some</b> (какое-то количество) или <b>ничего</b> (вообще, в целом).</li>
</ol></div>
<table>
<tr><th>Смысл</th><th>одна штука</th><th>много</th><th>не считается</th></tr>
<tr><td>какой-то, один из</td><td><span class="say">a game</span></td><td><span class="say">some games</span></td><td><span class="say">some music</span></td></tr>
<tr><td>тот самый</td><td><span class="say">the game</span></td><td><span class="say">the games</span></td><td><span class="say">the music</span></td></tr>
<tr><td>вообще</td><td>—</td><td><span class="say">games</span></td><td><span class="say">music</span></td></tr>
</table>
<div class="g-tip">Прочерк в таблице — самое важное место. «Игра» в единственном числе <b>не может стоять одна</b>: <i>I play game</i> — это как сказать по-русски «я играю в игр». Хочется «вообще» — берите множественное: <span class="say">I love games.</span></div>
<div class="mini" data-q="He doesn't have ___ car. He goes everywhere by bike." data-o="—|a|some" data-a="1" data-why="car — одна штука исчисляемого, голым не бывает → a car."></div>
<div class="mini" data-q="I can't hear you. There's too much ___ here." data-o="noise|a noise|noises" data-a="0" data-why="Шум вообще, фоном — неисчисляемое: too much noise."></div>`
      },
      {
        title: '2. Одно слово — два смысла: a noise или noise',
        html: `
<div class="g-idea">Многие слова бывают и исчисляемыми, и неисчисляемыми — но <b>смысл меняется</b>. Неисчисляемое — это «вещество, масса, явление вообще». Исчисляемое — «одна отдельная штука, один случай».</div>
<table>
<tr><th>Слово</th><th>неисчисляемое</th><th>исчисляемое</th></tr>
<tr><td>noise</td><td>шум вообще: <span class="say">There's too much noise.</span></td><td>отдельный звук: <span class="say">Did you hear a noise?</span></td></tr>
<tr><td>paper</td><td>бумага: <span class="say">I need some paper.</span></td><td>газета, статья: <span class="say">She wrote a paper on UX.</span></td></tr>
<tr><td>hair</td><td>все волосы: <span class="say">She has long hair.</span></td><td>один волос: <span class="say">There's a hair in my soup!</span></td></tr>
<tr><td>room</td><td>место: <span class="say">Is there room for my bag?</span></td><td>комната: <span class="say">It's a nice room.</span></td></tr>
<tr><td>experience</td><td>опыт работы: <span class="say">I have five years of experience.</span></td><td>случай, впечатление: <span class="say">The concert was an amazing experience.</span></td></tr>
<tr><td>time</td><td>время: <span class="say">I don't have time.</span></td><td>раз; «провести время»: <span class="say">We had a great time!</span></td></tr>
<tr><td>light</td><td>свет: <span class="say">Light travels fast.</span></td><td>лампа: <span class="say">There's a light on in the office.</span></td></tr>
<tr><td>glass</td><td>стекло: <span class="say">Careful, there's broken glass.</span></td><td>стакан: <span class="say">Can I have a glass of water?</span></td></tr>
<tr><td>business</td><td>бизнес, дела: <span class="say">Business is going well.</span></td><td>компания: <span class="say">She runs a small business.</span></td></tr>
</table>
<p>Напитки — обычно неисчисляемые (<span class="say">I don't drink coffee.</span>), но в кафе «один кофе» = одна чашка: <span class="say">Two coffees and a tea, please.</span></p>
<div class="g-bad">I have a lot of experiences in UI design.</div>
<div class="g-good">I have a lot of <b>experience</b> in UI design. <span class="muted">— опыт работы не считается</span></div>
<div class="g-bad">Your hairs are too long.</div>
<div class="g-good">Your <b>hair is</b> too long.</div>
<div class="g-tip">Проверка: можно ли сказать «одна штука, две штуки» в этом смысле? «Два шума» — да, это два отдельных звука (two noises). «Два опыта работы» — нет. Значит, experience о работе не считается.</div>
<div class="mini" data-q="We don't have ___ for a sofa in this flat." data-o="a room|room|rooms" data-a="1" data-why="room без артикля = место, пространство (неисчисляемое)."></div>
<div class="mini" data-q="Thanks for the party! We had ___." data-o="great time|a great time|the great time" data-a="1" data-why="have a great time — «отлично провести время», здесь time исчисляемое."></div>`
      },
      {
        title: '3. Неисчисляемые, которые так и хочется посчитать',
        html: `
<div class="g-idea">На A1 вы выучили advice, information, news, furniture. На B1 список растёт — и с каждым из этих слов нельзя <b>a</b> и нельзя <b>-s</b>, а глагол — в единственном числе (<b>is / was / has</b>).</div>
<table>
<tr><th>English</th><th>по-русски</th><th>пример</th></tr>
<tr><td>feedback</td><td>отзыв(ы), фидбек</td><td><span class="say">Thanks for the feedback!</span></td></tr>
<tr><td>progress</td><td>успехи, прогресс</td><td><span class="say">You've made great progress.</span></td></tr>
<tr><td>accommodation</td><td>жильё</td><td><span class="say">Accommodation is expensive here.</span></td></tr>
<tr><td>luggage / baggage</td><td>багаж, вещи</td><td><span class="say">How much luggage do you have?</span></td></tr>
<tr><td>equipment</td><td>оборудование</td><td><span class="say">The equipment is new.</span></td></tr>
<tr><td>traffic</td><td>движение, пробки</td><td><span class="say">There was heavy traffic.</span></td></tr>
<tr><td>damage</td><td>ущерб, повреждения</td><td><span class="say">The storm caused a lot of damage.</span></td></tr>
<tr><td>behaviour</td><td>поведение</td><td><span class="say">His behaviour was strange.</span></td></tr>
<tr><td>permission</td><td>разрешение</td><td><span class="say">You need permission to use this photo.</span></td></tr>
<tr><td>luck · chaos</td><td>удача · хаос</td><td><span class="say">It was bad luck.</span></td></tr>
<tr><td>scenery</td><td>пейзаж, виды</td><td><span class="say">What beautiful scenery!</span></td></tr>
<tr><td>research · evidence · knowledge</td><td>исследование · доказательства · знания</td><td><span class="say">We need more research.</span></td></tr>
</table>
<p>Если нужна «одна штука», у многих слов есть <b>исчисляемый близнец</b>:</p>
<table>
<tr><th>не считается</th><th>считается</th></tr>
<tr><td>work — работа вообще</td><td><span class="say">a job</span> — место работы</td></tr>
<tr><td>travel — путешествия вообще</td><td><span class="say">a trip, a journey</span> — одна поездка</td></tr>
<tr><td>scenery — пейзаж</td><td><span class="say">a view</span> — вид (из окна, с горы)</td></tr>
<tr><td>luggage — багаж</td><td><span class="say">a bag, a suitcase</span></td></tr>
<tr><td>advice — совет(ы)</td><td><span class="say">a tip, a suggestion</span></td></tr>
<tr><td>weather — погода</td><td><span class="say">It's a lovely day.</span></td></tr>
<tr><td>bread — хлеб</td><td><span class="say">a loaf</span> — буханка</td></tr>
</table>
<p>А ещё универсальный способ: <span class="say">a piece of advice</span>, <span class="say">a piece of equipment</span>, <span class="say">a bowl of rice</span>, <span class="say">a grain of sand</span>.</p>
<div class="g-bad">We had a very good travel. · The news were shocking. · Good luck with a new work!</div>
<div class="g-good">We had a very good <b>trip</b>. · The news <b>was</b> shocking. · Good luck with the new <b>job</b>!</div>
<div class="g-tip">Слова-«массы» легко узнать по смыслу: это то, что нельзя положить на стол по одному. Фидбек, прогресс, багаж, мебель, пробки — всё это «куча», а не отдельные предметы.</div>
<div class="mini" data-q="Could you give me ___ on my portfolio?" data-o="a feedback|some feedback|feedbacks" data-a="1" data-why="feedback неисчисляемое: без a и -s, можно some feedback."></div>
<div class="mini" data-q="Look! What ___ from this window!" data-o="a view|a scenery|view" data-a="0" data-why="view считается (a view), scenery — нет."></div>`
      },
      {
        title: '4. a/an — «что это за вид»: профессии, описания, What a…!',
        html: `
<div class="g-idea">a/an часто значит не «один», а <b>«из какой категории»</b>: кто человек по профессии, что это за вещь, какой он. Во множественном числе в этом значении слово стоит <b>само по себе</b> — без some.</div>
<table>
<tr><th>одна штука</th><th>много</th></tr>
<tr><td><span class="say">Chess is a strategy game.</span></td><td><span class="say">Chess and Go are strategy games.</span></td></tr>
<tr><td><span class="say">She's a UX designer.</span></td><td><span class="say">They're both UX designers.</span></td></tr>
<tr><td><span class="say">That's a nice chair.</span></td><td><span class="say">Those are nice chairs.</span></td></tr>
<tr><td><span class="say">I'm an optimist.</span></td><td><span class="say">We're optimists.</span></td></tr>
</table>
<p><b>Внешность.</b> Части тела при описании — через a/an или без артикля во множественном, <b>не</b> через the:</p>
<ul class="g-list">
<li><span class="say">The villain has a scar and red eyes.</span> — У злодея шрам и красные глаза.</li>
<li><span class="say">My cat has a very long tail.</span> — У моего кота очень длинный хвост.</li>
</ul>
<p><b>Восклицания What…!</b> — a/an только с исчисляемым в единственном числе:</p>
<ul class="g-list">
<li><span class="say">What a beautiful level!</span> · <span class="say">What a surprise!</span></li>
<li><span class="say">What awful graphics!</span> · <span class="say">What terrible weather!</span> <span class="muted">(мн. ч. и неисчисляемое — без a)</span></li>
</ul>
<p><b>Недомогания:</b> <span class="say">I have a headache.</span> <span class="say">She's got a sore throat.</span> <span class="say">I think I'm getting a cold.</span></p>
<div class="g-bad">My brother is programmer. · When I was child, I played Tetris.</div>
<div class="g-good">My brother is <b>a</b> programmer. · When I was <b>a</b> child, I played Tetris.</div>
<div class="g-bad">She has the blue eyes. · What a nice weather!</div>
<div class="g-good">She has blue eyes. · What nice weather!</div>
<div class="mini" data-q="Most of my friends are ___." data-o="designers|some designers|a designers" data-a="0" data-why="«Кто они такие» во множественном — просто designers, без some."></div>
<div class="mini" data-q="What ___ idea! Let's try it." data-o="—|a great|great" data-a="1" data-why="idea — исчисляемое в ед. числе → What a great idea!"></div>`
      },
      {
        title: '5. some с множественным: «несколько» и «некоторые»',
        html: `
<div class="g-idea">С множественным числом <b>some</b> бывает в двух ролях — и звучит по-разному. А в разговоре «вообще» some не нужен совсем.</div>
<table>
<tr><th>Роль</th><th>Смысл</th><th>Пример</th></tr>
<tr><td>some = несколько</td><td>какое-то количество, безударное [səm]</td><td><span class="say">I've watched some great series lately.</span></td></tr>
<tr><td>some = некоторые</td><td>часть, но не все; под ударением [sʌm]</td><td><span class="say">Some players never read tutorials.</span></td></tr>
<tr><td>без some</td><td>вообще, все такие</td><td><span class="say">Players hate long tutorials.</span></td></tr>
</table>
<p>В первом значении some часто можно опустить — смысл почти тот же:</p>
<ul class="g-list">
<li><span class="say">I need (some) new headphones.</span> — Мне нужны новые наушники.</li>
<li><span class="say">The room was empty except for a desk and (some) chairs.</span></li>
</ul>
<p>Во втором значении some не выбросишь — он противопоставляет «одни» и «другие»:</p>
<ul class="g-list">
<li><span class="say">Some games are free, but most aren't.</span></li>
<li><span class="say">Tomorrow it will rain in some parts of the city.</span></li>
</ul>
<div class="g-bad">My sister is an illustrator. She draws some book covers. <span class="muted">— про профессию, «вообще»</span></div>
<div class="g-good">She draws book covers.</div>
<div class="g-bad">I love some cats. <span class="muted">— если любите кошек вообще</span></div>
<div class="g-good">I love cats.</div>
<div class="g-tip">Спросите себя: можно ли добавить «но не все»? Если да — нужен ударный <b>some</b>. Если речь о привычке, профессии, вкусах — some не нужен.</div>
<div class="mini" data-q="___ people learn languages faster than others." data-o="—|Some|The" data-a="1" data-why="Часть людей в противопоставлении другим → Some people."></div>
<div class="mini" data-q="He's a baker. He makes ___ bread and cakes." data-o="some|—|a" data-a="1" data-why="Профессия, чем занимается вообще → без some."></div>`
      },
      {
        title: '6. a или the — глубже: вид или конкретный, «и так понятно»',
        html: `
<div class="g-idea">Правило «в первый раз — a, потом — the» вы знаете. Но the ставится не только «во второй раз». Главный вопрос — <b>может ли слушатель показать пальцем, о каком именно предмете речь?</b></div>
<div class="g-steps"><div class="g-h">Когда the, даже если слово звучит впервые</div><ol>
<li><b>Уточнение делает предмет единственным:</b> <span class="say">Sit on the chair nearest the window.</span> — такой стул один.</li>
<li><b>Понятно из обстановки:</b> в комнате — <span class="say">the light, the door, the floor</span>; в городе — <span class="say">the station, the city centre</span>; в магазине — <span class="say">the manager</span>.</li>
<li><b>«Свой» в жизни:</b> <span class="say">I cleaned the car.</span> (мою машину), <span class="say">Did you feed the cat?</span></li>
<li><b>Привычные «сервисы»:</b> <span class="say">I'm going to the bank / the post office / the doctor / the dentist.</span> — даже если вы не думаете о конкретном банке.</li>
</ol></div>
<p><b>Вид или конкретный.</b> a/an — «какого типа», the — «вот этот самый»:</p>
<ul class="g-list">
<li><span class="say">We stayed at a cheap hostel.</span> — Мы жили в дешёвом хостеле. <span class="muted">(какого типа)</span></li>
<li><span class="say">The hostel where we stayed was cheap.</span> — Хостел, где мы жили, был дешёвым. <span class="muted">(тот самый)</span></li>
</ul>
<p><b>Ловушка:</b> уточнение не всегда = the. Если таких может быть несколько, остаётся a:</p>
<ul class="g-list">
<li><span class="say">It's a game that I play every evening.</span> — одна из игр, в которые я играю.</li>
<li><span class="say">It's the game that I play most.</span> — такая одна: «больше всего».</li>
<li><span class="say">He's a friend of my brother.</span> — один из друзей брата.</li>
</ul>
<table>
<tr><th>the (известно какой)</th><th>a (любой, один из)</th></tr>
<tr><td><span class="say">I have to go to the bank.</span></td><td><span class="say">Is there a bank near here?</span></td></tr>
<tr><td><span class="say">I hate going to the dentist.</span></td><td><span class="say">My cousin is a dentist.</span></td></tr>
<tr><td><span class="say">Did you get the job?</span> <span class="muted">(на который подавался)</span></td><td><span class="say">It's hard to find a job now.</span></td></tr>
</table>
<div class="mini" data-q="Can you turn off ___ light? I'm trying to sleep." data-o="a|the|—" data-a="1" data-why="Свет в этой комнате — понятно из обстановки → the."></div>
<div class="mini" data-q="We had dinner in ___ best restaurant in town." data-o="a|the|—" data-a="1" data-why="«Лучший» бывает только один → the best."></div>`
      },
      {
        title: '7. a = «в / за каждый»: twice a week, $5 a month',
        html: `
<div class="g-idea">Русские «в неделю», «в день», «за килограмм», «в час» по-английски — это просто <b>a/an</b>. Не in, не for, и не per (per — официальный стиль).</div>
<div class="g-formula"><span class="g-part">сколько раз / сколько стоит</span><span class="g-plus">+</span><span class="g-part g-v">a / an</span><span class="g-plus">+</span><span class="g-part">период или единица</span></div>
<ul class="g-list">
<li><span class="say">I stream three times a week.</span> — Я стримлю три раза в неделю.</li>
<li><span class="say">The subscription is ten dollars a month.</span> — Подписка стоит десять долларов в месяц.</li>
<li><span class="say">Apples are two euros a kilo.</span> — Яблоки по два евро за килограмм.</li>
<li><span class="say">She works eight hours a day, five days a week.</span></li>
<li><span class="say">The speed limit is sixty kilometres an hour.</span> <span class="muted">(hour — с гласного звука → an)</span></li>
</ul>
<div class="g-bad">I go to the gym two times in week.</div>
<div class="g-good">I go to the gym <b>twice a week</b>.</div>
<div class="g-tip">once a day · twice a week · three times a month — «раз», «два раза» для 1 и 2 обычно once и twice.</div>
<div class="mini" data-q="Как сказать «раз в год»?" data-o="one time in year|once a year|once in the year" data-a="1" data-why="Частота: once + a + период → once a year."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I'm looking for new work in a game studio.</div><div class="g-good">I'm looking for <b>a new job</b> in a game studio.</div>
<div class="g-bad">Thanks for the advices and the feedbacks!</div><div class="g-good">Thanks for the <b>advice</b> and the <b>feedback</b>!</div>
<div class="g-bad">He has many experience of travels.</div><div class="g-good">He has a lot of <b>travel experience</b>. / He's been on <b>many trips</b>.</div>
<div class="g-bad">My friend is designer, she has the green eyes.</div><div class="g-good">My friend is <b>a</b> designer, she has green eyes.</div>
<div class="g-bad">I like the horror games, but music in this one is bad.</div><div class="g-good">I like <b>horror games</b>, but <b>the music</b> in this one is bad. <span class="muted">— вообще → без the, конкретная → the</span></div>
<div class="g-bad">Is there the bank near here? I have to go to a bank.</div><div class="g-good">Is there <b>a</b> bank near here? I have to go to <b>the</b> bank.</div>
<div class="g-bad">We play football two times in week.</div><div class="g-good">We play football <b>twice a week</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Одна штука исчисляемого никогда не стоит одна · вид / один из → <b>a</b> · понятно какой → <b>the</b> · вообще → <b>ничего</b> · некоторые → <b>some</b> · feedback, progress, luggage, advice — без a и -s · twice <b>a</b> week.</div>`
      }
    ],
    words: [
      ["feedback", "отзыв, обратная связь", "The client gave us some useful feedback.", "Клиент дал нам полезную обратную связь."],
      ["progress", "прогресс, успехи", "You've made a lot of progress this month.", "Ты сильно продвинулся за этот месяц."],
      ["accommodation", "жильё, размещение", "Accommodation in the city centre is expensive.", "Жильё в центре города дорогое."],
      ["luggage", "багаж", "We didn't have much luggage — just two bags.", "Багажа у нас было немного — всего две сумки."],
      ["equipment", "оборудование", "All the equipment in the studio is new.", "Всё оборудование в студии новое."],
      ["traffic", "движение, пробки", "There was heavy traffic on the way to the airport.", "По дороге в аэропорт были жуткие пробки."],
      ["damage", "ущерб, повреждение", "The flood caused a lot of damage.", "Наводнение нанесло большой ущерб."],
      ["behaviour", "поведение", "The bot's behaviour is a bit strange.", "Поведение бота немного странное."],
      ["permission", "разрешение", "Did you ask for permission to use the photo?", "Ты спросил разрешения использовать фото?"],
      ["luck", "удача, везение", "Good luck with the interview!", "Удачи на собеседовании!"],
      ["scenery", "пейзаж, природа вокруг", "The scenery in this game is stunning.", "Пейзажи в этой игре потрясающие."],
      ["view", "вид (на что-то)", "What a view from the top!", "Какой вид с вершины!"],
      ["trip", "поездка", "We had a great trip to Kazan.", "Мы отлично съездили в Казань."],
      ["journey", "путь, поездка (длинная)", "The journey took eight hours.", "Дорога заняла восемь часов."],
      ["travel", "путешествия (вообще)", "She spends all her money on travel.", "Она тратит все деньги на путешествия."],
      ["experience", "опыт; впечатление, случай", "I have three years of experience in UX.", "У меня три года опыта в UX."],
      ["noise", "шум; звук", "Did you hear a strange noise?", "Ты слышал странный звук?"],
      ["research", "исследование, изучение", "We did some user research before the redesign.", "Мы провели исследование пользователей перед редизайном."],
      ["evidence", "доказательства, улики", "There's no evidence that he cheated.", "Нет доказательств, что он жульничал."],
      ["knowledge", "знания", "Her knowledge of fonts is amazing.", "Её знания шрифтов поразительны."],
      ["suggestion", "предложение, идея", "That's a good suggestion. Let's try it.", "Хорошая идея. Давай попробуем."],
      ["accident", "авария; случайность", "There's been an accident on the bridge.", "На мосту произошла авария."],
      ["headache", "головная боль", "I have a headache after that meeting.", "У меня голова болит после той встречи."],
      ["loaf", "буханка, батон", "Can you buy a loaf of bread?", "Купишь буханку хлеба?"],
      ["queue", "очередь", "There was a long queue outside the cinema.", "У кинотеатра была длинная очередь."],
      ["patience", "терпение", "You need a lot of patience to finish this level.", "Нужно много терпения, чтобы пройти этот уровень."],
      ["space", "место, пространство; космос", "We don't have much space in our flat.", "У нас в квартире мало места."],
      ["optimist", "оптимист", "I'm an optimist — we'll finish on time.", "Я оптимист — мы закончим вовремя."],
      ["once — twice", "один раз — два раза", "I call my parents twice a week.", "Я звоню родителям два раза в неделю."],
      ["subscription", "подписка", "The subscription costs five dollars a month.", "Подписка стоит пять долларов в месяц."]
    ],
    texts: [
      {
        id: 't-b1-17-1', title: 'Our trip to a game convention', level: 'B1',
        text: `Once a year our studio sends a small team to a big game convention in Berlin. This year I was lucky: they chose me. Here is a short report for everyone who stayed at home.

The journey started badly. There was heavy traffic on the way to the airport, and we nearly missed the flight. Then Max realised he had too much luggage — he had packed a monitor "just in case". The airline asked him to pay forty euros a kilo for the extra weight. What a start!

The accommodation was better than we expected. We stayed at a small hotel near the river. The hotel was old, but the rooms were clean and there was a view of the water from the window. The weather was terrible, though, so we didn't see much of the scenery.

The convention itself was an amazing experience. There were hundreds of stands, and some of them had very clever equipment: motion chairs, giant screens, even a room where the floor moved. We played some demos, talked to some designers from Poland and Japan, and collected a lot of information about new tools.

The most useful part for me was a talk about feedback. The speaker said that players rarely give good feedback directly, so studios need research, not just opinions. She gave a piece of advice that I really liked: "Watch what players do, not what they say."

On the last day we had a problem. Somebody spilled coffee on Max's laptop, and the damage was serious. Luckily, the laptop was new and the insurance covered it. Good luck, bad luck — that's travel.

I made real progress with my portfolio during this trip, and I came back with lots of new ideas. If you get the chance to go next year, take it — but leave the monitor at home.`,
        questions: [
          { q: 'Why did they nearly miss the flight?', o: ['Because of heavy traffic', 'Because Max lost his passport', 'Because the hotel was far'], a: 0 },
          { q: 'Why didn\'t they see much of the scenery?', o: ['They were too busy', 'The weather was terrible', 'The hotel had no windows'], a: 1 },
          { q: 'What advice did the speaker give?', o: ['Ask players for their opinion', 'Buy good equipment', 'Watch what players do, not what they say'], a: 2 }
        ]
      },
      {
        id: 't-b1-17-2', title: 'Can I get some feedback?', level: 'B1',
        text: `Nika: Hi, Oleg. Have you got a minute? I'd like some feedback on the new menu screens.
Oleg: Sure, I've got time now. Send me the file.
Nika: Done. It's a file called "Menu v3". The first page is the main menu, and the second page is the settings.
Oleg: OK, I see it. First of all, what a nice colour palette! The blue works really well with the background.
Nika: Thanks! I spent a whole day on it.
Oleg: It shows. Now, a suggestion: the buttons are a bit too small. Some players play on a TV from the sofa, and they won't be able to read the text.
Nika: Good point. What size do you recommend?
Oleg: Try twenty-four pixels for the main text. And there isn't enough room between the buttons.
Nika: I'll fix that. What about the settings page?
Oleg: It's clear, but there's too much information on one screen. Players don't read long lists. Split it into tabs: sound, graphics, controls.
Nika: That makes sense. Honestly, I don't have much experience with console games. I've only worked on mobile apps before.
Oleg: That's normal. You've made great progress in three months. Here's a piece of advice: play some console games this week and look only at the menus. You'll learn a lot.
Nika: That sounds like the best homework ever.
Oleg: Ha! It is. One more thing — the icon in the top corner. Is it a gear or a flower?
Nika: It's a gear! It's the icon from our old kit.
Oleg: Then it needs a redraw. It looks like a flower from the sofa.
Nika: Noted. I'll send you a new version on Thursday. Thanks for the feedback — really useful.
Oleg: Any time. And good luck with the tabs!`,
        questions: [
          { q: 'What does Oleg like about the screens?', o: ['The icons', 'The colour palette', 'The long settings list'], a: 1 },
          { q: 'Why are small buttons a problem?', o: ['Some players play on a TV from the sofa', 'They use too much memory', 'The client hates them'], a: 0 },
          { q: 'What is Nika\'s "homework"?', o: ['To read a book about fonts', 'To play console games and look at the menus', 'To draw a flower'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Could you give me ___ about which laptop to buy?', o: ['an advice', 'some advice', 'advices'], a: 1, why: 'advice неисчисляемое: без a и -s → some advice.' },
      { t: 'choice', q: 'Listen! Did you hear ___? I think someone is at the door.', o: ['noise', 'a noise', 'the noises'], a: 1, why: 'Один отдельный звук → исчисляемое: a noise.' },
      { t: 'choice', q: 'We had a very good ___ to the mountains last summer.', o: ['travel', 'trip', 'luggage'], a: 1, why: 'Одна поездка — trip (исчисляемое); travel — путешествия вообще.' },
      { t: 'choice', q: 'The news about the release date ___ unexpected.', o: ['was', 'were', 'are'], a: 0, why: 'news — неисчисляемое, глагол в единственном числе: was.' },
      { t: 'choice', q: 'Chess and Go are ___.', o: ['a board games', 'some board games', 'board games'], a: 2, why: '«Что это такое» во множественном — просто board games, без some.' },
      { t: 'choice', q: '___ players never finish the story — they just want the multiplayer.', o: ['Some', 'The', '—'], a: 0, why: 'Часть игроков, а не все → Some.' },
      { t: 'choice', q: 'It\'s hard to find ___ good job in design right now.', o: ['the', 'a', '—'], a: 1, why: 'Любую работу из многих, не конкретную → a.' },
      { t: 'choice', q: 'I\'m going to ___ doctor this afternoon. My back hurts.', o: ['a', 'the', '—'], a: 1, why: 'go to the doctor — «сходить к врачу», устойчиво с the.' },
      { t: 'gap', q: 'She has five years of ___ in game design. (experience)', a: ['experience'], why: 'Опыт работы — неисчисляемое, без -s.' },
      { t: 'gap', q: 'Can you buy a ___ of bread on your way home? (буханка)', a: ['loaf'], why: 'bread не считается → считаем буханками: a loaf of bread.' },
      { t: 'gap', q: 'Her ___ is really long — almost to her waist. (hair)', a: ['hair'], why: 'Все волосы на голове — hair без -s, глагол is.' },
      { t: 'gap', q: 'I only play online three times ___ week. (a / the)', a: ['a'], why: 'Частота: … times a week.' },
      { t: 'gap', q: 'My uncle is ___ architect. (a / an)', a: ['an'], why: 'Профессия → a/an; architect с гласного звука → an.' },
      { t: 'gap', q: 'Can I have two ___ and a tea, please? (coffee)', a: ['coffees'], why: 'В кафе coffee = чашка кофе, считается: two coffees.' },
      { t: 'order', a: 'You have made great progress', ru: 'Ты добился больших успехов' },
      { t: 'order', a: 'What a beautiful view from here', ru: 'Какой красивый вид отсюда!' },
      { t: 'tr', q: 'У нас было мало багажа.', a: ['we didn\'t have much luggage', 'we did not have much luggage', 'we had little luggage', 'we didn\'t have much baggage', 'we did not have much baggage', 'we had little baggage', 'we didn\'t have a lot of luggage', 'we did not have a lot of luggage', 'we didn\'t have a lot of baggage', 'we did not have a lot of baggage'] },
      { t: 'tr', q: 'Мой брат — программист. Он работает восемь часов в день.', a: ['my brother is a programmer he works eight hours a day', 'my brother is a programmer he works 8 hours a day', 'my brother\'s a programmer he works eight hours a day', 'my brother\'s a programmer he works 8 hours a day', 'my brother is a developer he works eight hours a day', 'my brother is a developer he works 8 hours a day'] },
      { t: 'listen', say: 'Thanks for the feedback', a: ['thanks for the feedback'] },
      { t: 'listen', say: 'We had a great time', a: ['we had a great time'] }
    ],
    test: [
      { t: 'choice', q: 'I can\'t come tonight. I don\'t have ___.', o: ['a time', 'time', 'the times'], a: 1, why: 'time = время вообще → неисчисляемое, без a.' },
      { t: 'choice', q: 'Be careful! There\'s broken ___ on the floor.', o: ['a glass', 'glass', 'glasses'], a: 1, why: 'Стекло как материал — неисчисляемое.' },
      { t: 'gap', q: 'We need to buy some new ___ for the office: desks, chairs and a sofa. (furniture)', a: ['furniture'], why: 'furniture неисчисляемое, без -s.' },
      { t: 'choice', q: 'There was so much ___ that we were an hour late.', o: ['traffic', 'a traffic', 'traffics'], a: 0, why: 'traffic неисчисляемое: much traffic.' },
      { t: 'choice', q: 'The villain in this series has ___.', o: ['the long black coat and the scar', 'a long black coat and a scar', 'long black coat and scar'], a: 1, why: 'Описание внешности → a/an, не the; голым ед. число не бывает.' },
      { t: 'choice', q: 'My sister writes ___ for a gaming magazine. That\'s her job.', o: ['articles', 'some articles', 'the articles'], a: 0, why: 'Чем человек занимается вообще → без some и без the.' },
      { t: 'gap', q: 'We stayed at ___ very small hostel. (a / the)', a: ['a'], why: 'Какого типа хостел, упоминаем впервые → a.' },
      { t: 'gap', q: '___ hostel where we stayed had free breakfast. (A / The)', a: ['The', 'the'], why: 'where we stayed делает хостел единственным → The.' },
      { t: 'choice', q: 'It\'s ___ that I play with my friends — one of many.', o: ['the game', 'a game', 'game'], a: 1, why: 'Уточнение есть, но таких игр несколько → a game.' },
      { t: 'choice', q: 'Excuse me, I\'d like to speak to ___ manager, please.', o: ['a', 'the', '—'], a: 1, why: 'Менеджер этого магазина — понятно из обстановки → the.' },
      { t: 'gap', q: 'Accommodation here ___ very expensive in summer. (be, Present Simple)', a: ['is'], why: 'accommodation неисчисляемое → глагол в единственном: is.' },
      { t: 'choice', q: 'The internet costs twenty dollars ___ month.', o: ['in', 'a', 'for the'], a: 1, why: 'Цена за период: … a month.' }
    ]
  },

  // ───────────────────────────── UNIT B1-18 ─────────────────────────────
  {
    id: 'b1-18', level: 'B1', num: 18, track: 'main',
    books: { blue: [73, 74, 75, 76, 77, 78] },
    title: 'The: school или the school, названия с the и без',
    summary: 'Разберёмся, когда the обязательно (the equator, the same, the giraffe, the rich), когда его ставить нельзя (platform 5, go to bed, in hospital, Mount Elbrus) — и по каким признакам угадывать the в названиях улиц, зданий, газет и компаний.',
    grammar: [
      {
        title: '1. Главная идея: the — «такой один», номер и функция — без the',
        html: `
<div class="g-idea">Что вы уже знаете (уроки A1-13 и A2-22): the sun, the internet, go to work, go home, the Volga, the Alps. На B1 разбираем <b>тонкие пары</b>, где одно и то же слово бывает с the и без: <b>school</b> и <b>the school</b>, <b>Earth</b> и <b>the earth</b>, <b>space</b> и <b>the space</b>, <b>Cambridge University</b> и <b>the University of Cambridge</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p><span class="g-gap">_</span> Земля вращается вокруг <span class="g-gap">_</span> Солнца.</p><p>Посадка у <span class="g-gap">_</span> выхода 12.</p><p>Брат в больнице. Я поехал в больницу его навестить.</p><p><span class="g-gap">_</span> Богатые должны платить больше.</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>The</b> earth goes round <b>the</b> sun.</span></p><p><span class="say">Boarding at Gate 12.</span> <span class="muted">(номер — без the)</span></p><p><span class="say">My brother is <b>in hospital</b>. I went to <b>the hospital</b> to visit him.</span></p><p><span class="say"><b>The rich</b> should pay more.</span></p></div>
</div>
<div class="g-steps"><div class="g-h">Три вопроса вместо зубрёжки</div><ol>
<li>Предмет <b>один такой</b> в мире или в ситуации? → <b>the</b>.</li>
<li>У предмета есть <b>номер</b>, или я говорю о месте по его <b>функции</b> (учиться, лечиться, спать)? → <b>без the</b>.</li>
<li>Это <b>имя</b>? → смотрим тип названия (блоки 6–7).</li>
</ol></div>
<div class="mini" data-q="Посадка у выхода 7: Boarding at ___." data-o="the Gate 7|Gate 7|a Gate 7" data-a="1" data-why="Номер работает как имя → без the: Gate 7."></div>`
      },
      {
        title: '2. Один в мире — the; с номером — без the',
        html: `
<p><b>the</b> — если такое <b>одно</b>: в мире, в стране, в здании, в рейтинге.</p>
<ul class="g-list">
<li><span class="say">Have you ever crossed the equator?</span> — Ты когда-нибудь пересекал экватор?</li>
<li><span class="say">Tokyo is the capital of Japan.</span> · <span class="say">Our office is on the fifth floor.</span></li>
<li><span class="say">The deadline is at the end of the month.</span></li>
<li><span class="say">It's the best level in the game.</span> · <span class="say">We have the same keyboard.</span> <span class="muted">(same — всегда the)</span></li>
</ul>
<p><b>Космос: осторожно с парами</b></p>
<table>
<tr><th>с the</th><th>без the</th></tr>
<tr><td><span class="say">the earth</span> — Земля (мир, где живём), <span class="say">the ground</span> — земля под ногами</td><td><span class="say">Earth</span> — планета среди других: <span class="say">Mars is further from the sun than Earth.</span></td></tr>
<tr><td><span class="say">the space</span> — конкретное место: <span class="say">The parking space was too small.</span></td><td><span class="say">space</span> — космос: <span class="say">I'd love to travel in space.</span></td></tr>
<tr><td><span class="say">the sun</span> — наше Солнце</td><td><span class="say">a sun</span> — любая звезда с планетами: <span class="say">This planet has two suns.</span></td></tr>
</table>
<p>Также всегда с the: <span class="say">the world</span>, <span class="say">the universe</span>, <span class="say">the sky</span>, <span class="say">the sea</span>, <span class="say">the country</span> (деревня, природа).</p>
<p><b>Номер = имя, поэтому без the:</b></p>
<table>
<tr><th>Что</th><th>Пример</th></tr>
<tr><td>платформа, выход, комната</td><td><span class="say">platform 4</span>, <span class="say">Gate 12</span>, <span class="say">room 305</span></td></tr>
<tr><td>страница, вопрос, раздел</td><td><span class="say">page 29</span>, <span class="say">question 3</span>, <span class="say">section B</span></td></tr>
<tr><td>размер, витамин</td><td><span class="say">size 42</span>, <span class="say">vitamin D</span></td></tr>
<tr><td>игры и сериалы</td><td><span class="say">level 5</span>, <span class="say">season 2</span>, <span class="say">episode 8</span>, <span class="say">chapter 3</span></td></tr>
</table>
<div class="g-bad">I'm stuck on the level 5. · The train leaves from the platform 2.</div>
<div class="g-good">I'm stuck on <b>level 5</b>. · The train leaves from <b>platform 2</b>.</div>
<div class="g-tip">Но: <span class="say">the fifth level</span>, <span class="say">the second season</span> — порядковое числительное (fifth, second) делает предмет «единственным» → the. Номер после слова — без the, номер перед словом — с the.</div>
<div class="mini" data-q="Have you watched ___ yet? It's the best one." data-o="the season 3|season 3|a season 3" data-a="1" data-why="Слово + номер → без the: season 3."></div>
<div class="mini" data-q="I'd love to see Earth from ___." data-o="the space|space|a space" data-a="1" data-why="Космос — space без артикля."></div>`
      },
      {
        title: '3. school или the school: функция или здание',
        html: `
<div class="g-idea">Если человек идёт в место <b>ради его главной цели</b> (учиться, лечиться, сидеть, молиться) — без the. Если он там <b>гость, посетитель, работник</b> или мы говорим о <b>здании</b> — the.</div>
<table>
<tr><th>Место</th><th>По назначению (без the)</th><th>Как здание (the)</th></tr>
<tr><td>school</td><td><span class="say">My son goes to school.</span> <span class="muted">(ученик)</span></td><td><span class="say">I went to the school to talk to his teacher.</span></td></tr>
<tr><td>university, college</td><td><span class="say">She's at university.</span> <span class="muted">(студентка)</span></td><td><span class="say">I went to the university for a job interview.</span></td></tr>
<tr><td>hospital</td><td><span class="say">He's in hospital.</span> <span class="muted">(пациент)</span></td><td><span class="say">I went to the hospital to visit him.</span></td></tr>
<tr><td>prison / jail</td><td><span class="say">He was sent to prison.</span> <span class="muted">(заключённый)</span></td><td><span class="say">Journalists visited the prison.</span></td></tr>
<tr><td>church</td><td><span class="say">They go to church on Sundays.</span></td><td><span class="say">Workers are repairing the church.</span></td></tr>
</table>
<p>Сюда же — «домашние» фразы, которые вы знаете с A1, но теперь видите пары:</p>
<ul class="g-list">
<li><span class="say">I'm going to bed.</span> — Я спать. · <span class="say">The cat is sleeping on the bed.</span> — на кровати (мебель).</li>
<li><span class="say">What time do you finish work?</span> · <span class="say">The work you did yesterday was great.</span> (та работа)</li>
<li><span class="say">Let's go home.</span> · <span class="say">I work from home.</span> · <span class="say">Make yourself at home.</span></li>
<li><span class="say">When I leave school, I want to go to college.</span></li>
</ul>
<div class="g-bad">My grandma is in the hospital, so I visit hospital every day.</div>
<div class="g-good">My grandma is <b>in hospital</b>, so I visit <b>the hospital</b> every day.</div>
<p><b>Та же логика — еда и TV.</b> Действие (поесть, посмотреть) — без артикля; конкретный предмет или «какой» — с артиклем:</p>
<table>
<tr><th>Действие (без артикля)</th><th>Предмет / «какой»</th></tr>
<tr><td><span class="say">What did you have for breakfast?</span></td><td><span class="say">We had a big breakfast.</span> <span class="muted">(прилагательное → a)</span></td></tr>
<tr><td><span class="say">Lunch is at one.</span></td><td><span class="say">The lunch at the conference was great.</span></td></tr>
<tr><td><span class="say">I watch TV in the evening.</span></td><td><span class="say">Turn off the TV.</span> <span class="muted">(сам аппарат)</span></td></tr>
</table>
<p>А эти — всегда с the: <span class="say">listen to the radio</span>, <span class="say">go to the cinema / the theatre</span>, <span class="say">on the internet</span>.</p>
<div class="g-bad">We had very nice dinner. · I found it in internet.</div>
<div class="g-good">We had <b>a</b> very nice dinner. · I found it <b>on the internet</b>.</div>
<div class="g-tip">В американском английском говорят <span class="say">in the hospital</span> даже про пациента — в сериалах вы услышите именно так. Оба варианта правильные; главное — не путать школьника и родителя.</div>
<div class="mini" data-q="Mum went to ___ to meet my teacher." data-o="school|the school|a school" data-a="1" data-why="Мама не ученица — идёт в здание → the school."></div>
<div class="mini" data-q="He broke his leg and was taken to ___." data-o="hospital|the hospitals|a hospitals" data-a="0" data-why="Пациент, по назначению → hospital без the (брит.)."></div>`
      },
      {
        title: '4. Вообще или конкретно: children или the children',
        html: `
<div class="g-idea">О чём-то <b>в целом</b> (все такие, как явление) — без the. О <b>конкретной</b> группе, которую можно «очертить» (эти, наши, в этой игре) — the. Русский язык это не различает, поэтому здесь больше всего ошибок.</div>
<table>
<tr><th>Вообще (без the)</th><th>Конкретно (the)</th></tr>
<tr><td><span class="say">Children learn by playing.</span></td><td><span class="say">We took the children to the park.</span> <span class="muted">(наших)</span></td></tr>
<tr><td><span class="say">I can't work without music.</span></td><td><span class="say">I didn't like the film, but the music was great.</span></td></tr>
<tr><td><span class="say">All games need testing.</span></td><td><span class="say">All the games on this shelf are mine.</span></td></tr>
<tr><td><span class="say">Life is short.</span></td><td><span class="say">The life of a game tester is not easy.</span></td></tr>
</table>
<p><b>Самое тонкое:</b> уточнение само по себе ещё не делает группу конкретной.</p>
<ul class="g-list">
<li><span class="say">I like working with people who give honest feedback.</span> — всё ещё «вообще»: любые люди такого типа.</li>
<li><span class="say">I like the people I work with.</span> — конкретные: мои коллеги.</li>
<li><span class="say">Do you like strong black coffee?</span> — вообще, тип кофе.</li>
<li><span class="say">The coffee in our office is awful.</span> — конкретный кофе.</li>
</ul>
<div class="g-steps"><div class="g-h">Тест «можно пересчитать?»</div><ol>
<li>Могу я показать или перечислить эту группу (эти дети, кофе в нашем офисе, люди в моей команде)? → <b>the</b>.</li>
<li>Это любые представители типа, где угодно? → <b>без the</b>, даже если есть длинное уточнение.</li>
</ol></div>
<p>И отдельная ловушка: «большинство» — <b>most</b> без the: <span class="say">Most people play on their phones.</span> (но <span class="say">most of the people in my team</span> — см. урок A2-13).</p>
<div class="g-bad">The most gamers hate the ads. · I'm interested in the history.</div>
<div class="g-good"><b>Most</b> gamers hate ads. · I'm interested in history.</div>
<div class="mini" data-q="___ people I met at the festival were really friendly." data-o="—|The|Some the" data-a="1" data-why="Конкретные люди — те, кого я встретил → The."></div>
<div class="mini" data-q="I don't trust ___ who never say sorry." data-o="people|the people|a people" data-a="0" data-why="Любые люди такого типа — «вообще», без the."></div>`
      },
      {
        title: '5. The giraffe, the guitar, the rich, the French — the для целого вида и группы',
        html: `
<p><b>1) the + единственное число = весь вид</b> (животное, изобретение, инструмент, валюта). Звучит как в энциклопедии:</p>
<ul class="g-list">
<li><span class="say">The cheetah is the fastest land animal.</span> — Гепард — самое быстрое животное на суше.</li>
<li><span class="say">When was the smartphone invented?</span></li>
<li><span class="say">The euro is the currency of many countries.</span></li>
<li><span class="say">Can you play the piano?</span> — но <span class="say">I want to buy a piano.</span> (один инструмент-предмет)</li>
</ul>
<p>Исключение: <b>man</b> в значении «человечество» — без the: <span class="say">the history of man</span>.</p>
<p><b>2) the + прилагательное = группа людей</b> (всегда множественное число, без -s):</p>
<table>
<tr><th>Группа</th><th>Один человек</th></tr>
<tr><td><span class="say">the rich</span>, <span class="say">the poor</span></td><td><span class="say">a rich man</span>, <span class="say">a poor family</span></td></tr>
<tr><td><span class="say">the young</span>, <span class="say">the old</span>, <span class="say">the elderly</span></td><td><span class="say">an old lady</span></td></tr>
<tr><td><span class="say">the homeless</span>, <span class="say">the unemployed</span></td><td><span class="say">a homeless person</span></td></tr>
<tr><td><span class="say">the sick</span>, <span class="say">the injured</span></td><td><span class="say">an injured player</span></td></tr>
</table>
<ul class="g-list"><li><span class="say">The injured were taken to hospital.</span> — Пострадавших отвезли в больницу. <span class="muted">(were — их много)</span></li></ul>
<p><b>3) Национальности</b> — три типа:</p>
<table>
<tr><th>Окончание</th><th>Весь народ</th><th>Один человек</th></tr>
<tr><td>-ch, -sh</td><td><span class="say">the French, the British, the Dutch</span></td><td><span class="say">a Frenchman, a British woman</span></td></tr>
<tr><td>-ese, -ss</td><td><span class="say">the Chinese, the Japanese, the Swiss</span></td><td><span class="say">a Japanese designer</span></td></tr>
<tr><td>остальные</td><td><span class="say">Italians, Russians, Mexicans</span></td><td><span class="say">an Italian, a Russian</span></td></tr>
</table>
<p>Универсальный безопасный вариант: <span class="say">French people</span>, <span class="say">Japanese people</span>, <span class="say">Russian people</span>.</p>
<div class="g-bad">the richs · She's an English. · French are famous for cheese.</div>
<div class="g-good">the rich · She's <b>English</b> / an English woman. · <b>The French</b> are famous for cheese.</div>
<div class="mini" data-q="We should do more to help ___." data-o="the homeless|homeless|the homelesses" data-a="0" data-why="Группа людей: the + прилагательное, без -s."></div>
<div class="mini" data-q="___ invented many things, including paper." data-o="Chinese|The Chinese|The Chineses" data-a="1" data-why="Народ, слово на -ese → the Chinese, без -s."></div>`
      },
      {
        title: '6. Названия 1: люди, титулы, география',
        html: `
<div class="g-idea">Имена — без the. Большинство географических названий — тоже. The появляется, когда в названии есть <b>«нарицательное» слово-объединение</b>, <b>множественное число</b> или это <b>вода и пустыня</b>.</div>
<p><b>Титулы + имя — без the:</b> <span class="say">Doctor Petrova</span>, <span class="say">President Lincoln</span>, <span class="say">Captain Price</span>, <span class="say">Uncle Sasha</span>, <span class="say">Queen Elizabeth</span>. Сравните: <span class="say">We called the doctor.</span> — <span class="say">We called Doctor Petrova.</span></p>
<p><b>Mount и Lake + имя — тоже без the:</b> <span class="say">Mount Elbrus</span>, <span class="say">Mount Fuji</span>, <span class="say">Lake Baikal</span>. Но: <span class="say">We had a picnic by the lake.</span> (просто озеро)</p>
<table>
<tr><th>Без the</th><th>С the</th></tr>
<tr><td>континенты, страны, штаты: <span class="say">Asia, Brazil, Texas</span></td><td>Republic / Kingdom / States: <span class="say">the Czech Republic, the UK, the USA</span></td></tr>
<tr><td>один остров, одна гора: <span class="say">Bali, Everest</span></td><td>группа: <span class="say">the Maldives, the Alps, the Urals</span></td></tr>
<tr><td>города: <span class="say">Kazan, Seoul</span></td><td>вода и пустыни: <span class="say">the Pacific, the Baltic Sea, the Volga, the Suez Canal, the Sahara</span></td></tr>
<tr><td>фамилия: <span class="say">Ivanov</span></td><td>вся семья: <span class="say">the Ivanovs, the Simpsons</span></td></tr>
<tr><td><span class="say">northern Italy</span>, <span class="say">South Africa</span>, <span class="say">North America</span></td><td><span class="say">the north of Italy</span>, <span class="say">the south of France</span></td></tr>
</table>
<div class="g-bad">We met the Doctor Smith. · I climbed the Mount Elbrus. · They live in the northern Spain.</div>
<div class="g-good">We met <b>Doctor Smith</b>. · I climbed <b>Mount Elbrus</b>. · They live in <b>northern Spain</b> / <b>the north of Spain</b>.</div>
<div class="g-tip">На картах и в играх (подписи локаций) the обычно не пишут: на карте просто «Pacific Ocean», но в речи — <span class="say">We sailed across the Pacific.</span></div>
<div class="mini" data-q="Have you seen ___? It's a cartoon about a funny family." data-o="Simpsons|the Simpsons|a Simpsons" data-a="1" data-why="Фамилия во множественном = вся семья → the Simpsons."></div>
<div class="mini" data-q="The highest mountain in Europe is ___." data-o="the Mount Elbrus|Mount Elbrus|a Mount Elbrus" data-a="1" data-why="Mount + имя → без the."></div>`
      },
      {
        title: '7. Названия 2: улицы, здания, газеты, компании',
        html: `
<div class="g-steps"><div class="g-h">Алгоритм для названий в городе</div><ol>
<li>Улица, площадь, парк? → <b>без the</b>: <span class="say">Oxford Street</span>, <span class="say">Broadway</span>, <span class="say">Times Square</span>, <span class="say">Gorky Park</span>.</li>
<li>«Место или человек + здание»? → <b>без the</b>: <span class="say">Pulkovo Airport</span>, <span class="say">Victoria Station</span>, <span class="say">Harvard University</span>, <span class="say">Buckingham Palace</span>, <span class="say">Edinburgh Castle</span>.</li>
<li>Первое слово — прилагательное, а не имя? → <b>the</b>: <span class="say">the Royal Palace</span>, <span class="say">the National Gallery</span>, <span class="say">the White House</span>.</li>
<li>Отель, театр, кино, музей, другое здание? → <b>the</b>: <span class="say">the Hilton</span>, <span class="say">the Bolshoi</span>, <span class="say">the Hermitage</span>, <span class="say">the Eiffel Tower</span>, <span class="say">the Kremlin</span>.</li>
<li>Есть <b>of</b>? → <b>the</b>: <span class="say">the Bank of England</span>, <span class="say">the Museum of Modern Art</span>, <span class="say">the University of Tokyo</span>.</li>
<li>Название на <b>-'s / -s</b> (по имени владельца или святого)? → <b>без the</b>: <span class="say">McDonald's</span>, <span class="say">Joe's Bar</span>, <span class="say">St Isaac's Cathedral</span>.</li>
</ol></div>
<table>
<tr><th>Тип</th><th>the?</th><th>Примеры</th></tr>
<tr><td>газеты</td><td>да</td><td><span class="say">the Guardian</span>, <span class="say">the New York Times</span></td></tr>
<tr><td>организации</td><td>да</td><td><span class="say">the BBC</span>, <span class="say">the UN</span>, <span class="say">the European Union</span>, <span class="say">the Red Cross</span></td></tr>
<tr><td>компании, бренды</td><td>нет</td><td><span class="say">Nintendo</span>, <span class="say">Sony</span>, <span class="say">Valve</span>, <span class="say">Figma</span></td></tr>
</table>
<p>Одно и то же место — два названия: <span class="say">Cambridge University</span> = <span class="say">the University of Cambridge</span>. Разницу делает <b>of</b>.</p>
<div class="g-bad">I work at the Ubisoft. · We had lunch at the McDonald's on the Nevsky Prospect.</div>
<div class="g-good">I work at <b>Ubisoft</b>. · We had lunch at <b>McDonald's</b> on <b>Nevsky Prospect</b>.</div>
<div class="g-tip">Запоминалка: <b>the</b> любит «здания с билетом» (музей, театр, отель), слово <b>of</b> и «прилагательное впереди». Без the — улицы, «Имя + Airport/University/Station», бренды и всё на <b>-'s</b>.</div>
<div class="mini" data-q="We stayed at ___ near the station." data-o="Hilton|the Hilton|Hilton's" data-a="1" data-why="Отели — с the: the Hilton."></div>
<div class="mini" data-q="My flight lands at ___ at 6 pm." data-o="the Heathrow Airport|Heathrow Airport|a Heathrow Airport" data-a="1" data-why="Имя места + Airport → без the."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">The flight to Rome is boarding at the Gate 15.</div><div class="g-good">The flight to Rome is boarding at <b>Gate 15</b>.</div>
<div class="g-bad">He's a guard. He works in prison.</div><div class="g-good">He's a guard. He works <b>at the prison</b>. <span class="muted">— in prison = сидит в тюрьме</span></div>
<div class="g-bad">She went to the bed at 2 am after the work.</div><div class="g-good">She went to <b>bed</b> at 2 am after <b>work</b>.</div>
<div class="g-bad">The life is hard for the young designers.</div><div class="g-good"><b>Life</b> is hard for <b>young designers</b>. / … for <b>the young</b>.</div>
<div class="g-bad">The Japanese are making great games, and I met a Japanese in Tokyo.</div><div class="g-good">… and I met <b>a Japanese designer</b> in Tokyo.</div>
<div class="g-bad">We visited the Buckingham Palace and Tower of London.</div><div class="g-good">We visited <b>Buckingham Palace</b> and <b>the Tower of London</b>.</div>
<div class="g-bad">He's at the Harvard University and works for the Google.</div><div class="g-good">He's at <b>Harvard University</b> and works for <b>Google</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Один такой → <b>the</b> · номер (level 5, Gate 12) → без the · место по назначению (school, hospital, bed, work) → без the · вообще → без the, конкретная группа → <b>the</b> · the giraffe, the piano, the rich, the French · the: вода, множественное, of, здания с билетом; без the: улицы, Имя + Airport, бренды, -'s.</div>`
      }
    ],
    words: [
      ["equator", "экватор", "It's always hot near the equator.", "Около экватора всегда жарко."],
      ["capital", "столица", "Seoul is the capital of South Korea.", "Сеул — столица Южной Кореи."],
      ["universe", "вселенная", "The game has its own universe with its own rules.", "У игры своя вселенная со своими правилами."],
      ["planet", "планета", "Which planet is closest to Earth?", "Какая планета ближе всего к Земле?"],
      ["ground", "земля (под ногами), почва", "He dropped his phone on the ground.", "Он уронил телефон на землю."],
      ["platform", "платформа", "The train leaves from platform 6.", "Поезд отправляется с шестой платформы."],
      ["gate", "выход (в аэропорту); ворота", "Please go to Gate 21.", "Пожалуйста, пройдите к выходу 21."],
      ["episode", "серия, эпизод", "Don't spoil episode 8!", "Не спойлерь восьмую серию!"],
      ["vitamin", "витамин", "Oranges are full of vitamin C.", "В апельсинах много витамина C."],
      ["prison", "тюрьма", "In the series, he spends five years in prison.", "В сериале он проводит пять лет в тюрьме."],
      ["patient", "пациент; терпеливый", "The patient is still in hospital.", "Пациент всё ещё в больнице."],
      ["visitor", "посетитель, гость", "Visitors can't enter the hospital after 8 pm.", "Посетителям нельзя в больницу после 20:00."],
      ["college", "колледж, вуз", "My sister is at college in Kazan.", "Моя сестра учится в колледже в Казани."],
      ["church", "церковь", "The old church in the village is beautiful.", "Старая церковь в деревне очень красивая."],
      ["elderly", "пожилой; the elderly — пожилые люди", "The app is designed for the elderly.", "Приложение сделано для пожилых людей."],
      ["homeless", "бездомный", "The charity helps the homeless.", "Фонд помогает бездомным."],
      ["unemployed", "безработный", "Many young people are unemployed.", "Многие молодые люди без работы."],
      ["injured", "раненый, пострадавший", "The injured were taken to hospital.", "Пострадавших отвезли в больницу."],
      ["invention", "изобретение", "The printing press was a great invention.", "Печатный станок был великим изобретением."],
      ["currency", "валюта", "The yen is the currency of Japan.", "Иена — валюта Японии."],
      ["instrument", "музыкальный инструмент", "Can you play any instrument?", "Ты умеешь играть на каком-нибудь инструменте?"],
      ["ocean", "океан", "We flew over the Atlantic Ocean.", "Мы пролетели над Атлантическим океаном."],
      ["desert", "пустыня", "The first level takes place in the desert.", "Первый уровень проходит в пустыне."],
      ["continent", "континент, материк", "Africa is a huge continent.", "Африка — огромный континент."],
      ["coast", "побережье", "We rented a house on the coast.", "Мы сняли дом на побережье."],
      ["northern", "северный", "They live in northern Norway.", "Они живут на севере Норвегии."],
      ["southern", "южный", "Southern Spain is hot in summer.", "На юге Испании летом жарко."],
      ["cathedral", "собор", "St Isaac's Cathedral is in St Petersburg.", "Исаакиевский собор находится в Петербурге."],
      ["palace", "дворец", "The Winter Palace is part of the Hermitage.", "Зимний дворец — часть Эрмитажа."],
      ["gallery", "галерея", "We spent all day at the National Gallery.", "Мы провели весь день в Национальной галерее."],
      ["avenue", "проспект, авеню", "The office is on Fifth Avenue.", "Офис находится на Пятой авеню."]
    ],
    texts: [
      {
        id: 't-b1-18-1', title: 'Building a world map for our game', level: 'B1',
        text: `This month our team is designing the world map for a travel game. The player flies around the world, visits famous places and collects photos. My job is the map screen, and I've learned more about the word "the" than in five years of school.

The first problem was the labels. On real maps, the article is usually left out, so we wrote "Pacific Ocean" and "Sahara Desert" without it. But in the dialogues the characters speak normally: "We're flying over the Pacific!" and "Welcome to the Sahara!"

The second problem was the names themselves. Our writer, Lena, made a list of rules and stuck it on the wall. Countries and cities have no article: Brazil, Japan, Kazan. But the USA, the UK and the Czech Republic do. Rivers and seas always have it: the Volga, the Nile, the Black Sea. One mountain has no article — Mount Fuji, Mount Elbrus — but a group does: the Alps, the Andes.

In the city levels, things got even trickier. The player lands at Pulkovo Airport, takes a taxi along Nevsky Prospect and stops at the Hermitage. In London, she walks through Hyde Park, visits Buckingham Palace, then the Tower of London. In New York, she has a burger at a place called Joe's and watches a show at the Majestic Theatre. Lena's rule: streets, parks and "Name + Airport" have no article; museums, theatres, hotels and anything with "of" have one.

There is also a funny side quest on level 7. A family called the Petrovs have lost their dog somewhere in northern Italy, and the player has to find it before the end of the day.

Yesterday our tester sent a bug report: "In the menu, it says 'the Level 7'." Lena fixed it in a minute. Now she says the rules are the best thing she has made this year.`,
        questions: [
          { q: 'Why did they write "Pacific Ocean" without "the" on the map?', o: ['Because it is a mistake', 'Because on maps the article is usually left out', 'Because the ocean is small'], a: 1 },
          { q: 'Where does the player stop after Nevsky Prospect?', o: ['At the Hermitage', 'At Hyde Park', 'At Joe\'s'], a: 0 },
          { q: 'What was the bug in the menu?', o: ['The dog was missing', 'It said "the Level 7"', 'The map had no labels'], a: 1 }
        ]
      },
      {
        id: 't-b1-18-2', title: 'A busy week', level: 'B1',
        text: `Artem: Hey, you weren't online all week. Is everything OK?
Vera: Kind of. My dad was in hospital for three days. He fell off a ladder and broke his arm.
Artem: Oh no! Is he all right?
Vera: He's fine now, he's back home. But I went to the hospital every evening after work, so I didn't have time for games. And the food in the hospital! I brought him soup from home every day.
Artem: That's nice of you. My grandma always says that hospitals are the worst places to eat.
Vera: She's right. And on Wednesday I had to go to my brother's school, because his teacher wanted to talk to me. Mum was at the hospital with Dad.
Artem: Is your brother in trouble?
Vera: Not really. He just plays games in class. The teacher said that children need more sleep, not more screens. He goes to bed at one in the morning!
Artem: Ha. Most teenagers do. I did, too.
Vera: I know. Anyway, I told him: no phone in bed. Let's see how long that lasts.
Artem: Good luck. By the way, did you see the news about the new studio in the city centre? The one on Pushkin Street?
Vera: The one with the huge logo? Yes! I heard they're looking for designers.
Artem: They are. And they want people who understand the elderly — they're making an app for older people.
Vera: That's interesting. My dad could be the tester. He hates apps with tiny buttons.
Artem: Perfect. Send them your portfolio. The deadline is the end of the month.
Vera: I will. First I need to sleep. I'm going to bed right now — at nine, like a real adult.
Artem: See you tomorrow, then!`,
        questions: [
          { q: 'Why was Vera\'s dad in hospital?', o: ['He was ill with flu', 'He broke his arm', 'He had a car accident'], a: 1 },
          { q: 'Why did Vera go to her brother\'s school?', o: ['His teacher wanted to talk to her', 'She teaches there', 'She took him to class'], a: 0 },
          { q: 'Who is the new studio\'s app for?', o: ['Children', 'Gamers', 'Older people'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: 'Our office is on ___ floor.', o: ['seventh', 'the seventh', 'a seventh'], a: 1, why: 'Порядковое числительное — этаж такой один → the seventh.' },
      { t: 'choice', q: 'Your train leaves from ___.', o: ['platform 9', 'the platform 9', 'a platform 9'], a: 0, why: 'Слово + номер → без the.' },
      { t: 'choice', q: 'Many people dream of travelling in ___.', o: ['the space', 'space', 'a space'], a: 1, why: 'Космос — space без артикля.' },
      { t: 'choice', q: 'Ellie is ten. She goes to ___ every day.', o: ['school', 'the school', 'a school'], a: 0, why: 'Ребёнок-ученик идёт учиться → school без the.' },
      { t: 'choice', q: 'Don\'t sit on ___ — I\'ve just made it.', o: ['bed', 'the bed', 'a bed'], a: 1, why: 'Кровать как мебель, конкретная → the bed.' },
      { t: 'choice', q: '___ is the tallest animal in the world.', o: ['Giraffe', 'The giraffe', 'A giraffes'], a: 1, why: 'the + ед. число = весь вид животных.' },
      { t: 'choice', q: 'We need to create more jobs for ___.', o: ['the unemployed', 'unemployed', 'the unemployeds'], a: 0, why: 'Группа людей: the + прилагательное, без -s.' },
      { t: 'choice', q: 'We took a boat trip on ___ Seine in Paris.', o: ['—', 'the', 'a'], a: 1, why: 'Реки всегда с the.' },
      { t: 'gap', q: 'I was in a hurry, so I didn\'t have ___. (завтрак)', a: ['breakfast'], why: 'Приём пищи вообще → breakfast без артикля.' },
      { t: 'gap', q: '___ people in my team all use Figma. (The / —)', a: ['The', 'the'], why: 'Конкретная группа — моя команда → The.' },
      { t: 'gap', q: 'My cousin is ___ college now. She studies animation. (at / at the)', a: ['at'], why: 'Студентка, учится → at college без the.' },
      { t: 'gap', q: 'Don\'t tell me what happens in ___ 5! I haven\'t seen it yet. (серия)', a: ['episode'], why: 'Слово + номер работает как имя → episode 5, без the.' },
      { t: 'gap', q: 'The Louvre is in Paris, and ___ Prado is in Madrid. (the / —)', a: ['the', 'The'], why: 'Музеи — с the.' },
      { t: 'gap', q: 'Five people were hurt in the crash. ___ injured were taken to hospital. (пострадавшие)', a: ['The', 'the'], why: 'Группа людей: the + прилагательное → the injured.' },
      { t: 'order', a: 'He was taken to hospital', ru: 'Его отвезли в больницу' },
      { t: 'order', a: 'Most people play on their phones', ru: 'Большинство людей играет на телефонах' },
      { t: 'tr', q: 'Я играю на гитаре, но не умею играть на пианино.', a: ['i play the guitar but i can\'t play the piano', 'i play the guitar but i cannot play the piano', 'i play the guitar but i can not play the piano', 'i can play the guitar but i can\'t play the piano', 'i can play the guitar but i cannot play the piano', 'i play the guitar but i don\'t know how to play the piano', 'i play the guitar but i do not know how to play the piano'] },
      { t: 'tr', q: 'Мы жили в отеле «Хилтон» на Пятой авеню.', a: ['we stayed at the hilton on fifth avenue', 'we lived in the hilton on fifth avenue', 'we stayed in the hilton on fifth avenue', 'we stayed at the hilton hotel on fifth avenue', 'we stayed in the hilton hotel on fifth avenue'] },
      { t: 'listen', say: 'I am going to bed', a: ['i am going to bed', 'i\'m going to bed'] },
      { t: 'listen', say: 'The earth goes round the sun', a: ['the earth goes round the sun', 'the earth goes around the sun'] }
    ],
    test: [
      { t: 'choice', q: 'My shoes are ___ size as yours.', o: ['same', 'the same', 'a same'], a: 1, why: 'same — всегда с the.' },
      { t: 'choice', q: 'I\'m stuck on ___ — the boss is too strong.', o: ['the level 12', 'level 12', 'a level 12'], a: 1, why: 'Слово + номер → без the.' },
      { t: 'choice', q: 'Her father is a guard. He works at ___.', o: ['prison', 'the prison', 'prisons'], a: 1, why: 'Он не заключённый, а работник → здание: the prison.' },
      { t: 'gap', q: 'Jack had an accident and is still ___ hospital. (in / in the — брит.)', a: ['in'], why: 'Пациент (брит.) → in hospital без the.' },
      { t: 'choice', q: '___ is changing very fast in big cities.', o: ['The life', 'Life', 'A life'], a: 1, why: 'Жизнь вообще → без the.' },
      { t: 'choice', q: 'I didn\'t like ___ we had at the hotel — it was far too sweet.', o: ['coffee', 'the coffee', 'a coffees'], a: 1, why: 'Конкретный кофе — тот, что пили в отеле → the.' },
      { t: 'choice', q: '___ are famous for their cheese and bikes.', o: ['Dutch', 'The Dutch', 'The Dutches'], a: 1, why: 'Народ на -ch → the Dutch, без -s.' },
      { t: 'gap', q: 'When was ___ telephone invented? (a / the)', a: ['the'], why: 'Изобретение как вид → the telephone.' },
      { t: 'choice', q: 'We spent a week in ___.', o: ['the Philippines', 'Philippines', 'a Philippines'], a: 0, why: 'Название во множественном → the.' },
      { t: 'choice', q: 'They live in ___ Canada, near the border.', o: ['the southern', 'southern', 'the south'], a: 1, why: 'northern / southern + страна → без the.' },
      { t: 'gap', q: 'I read about it in ___ Guardian. (the / —)', a: ['the', 'The'], why: 'Газеты — с the.' },
      { t: 'choice', q: 'Let\'s meet at the entrance to ___.', o: ['the Gorky Park', 'Gorky Park', 'a Gorky Park'], a: 1, why: 'Парки, улицы, площади → без the.' }
    ]
  }
);
