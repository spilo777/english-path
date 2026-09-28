// Раздел «Времена», часть 1: Present Simple, Present Continuous, Past Simple, Past Continuous.
window.TENSES = (window.TENSES || []).concat([
  {
    id: 'present-simple',
    name: 'Present Simple',
    ru: 'Настоящее простое',
    time: 'present',
    aspect: 'simple',
    level: 'A1',
    freq: 5,
    one: 'Регулярно, всегда, факты',
    formula: {
      plus: 'I / you / we / they <b>work</b> · he / she / it <b>works</b>',
      minus: "I <b>don't work</b> · she <b>doesn't work</b>",
      q: '<b>Do</b> you <b>work</b>? · <b>Does</b> she <b>work</b>?'
    },
    markers: ['always', 'usually', 'often', 'sometimes', 'never', 'every day', 'on Mondays'],
    compare: ['present-continuous'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea">Present Simple — это время для того, что происходит <b>обычно, регулярно, всегда</b>. Не «прямо сейчас», а «вообще, по жизни». По-русски: «Я работаю дизайнером», «Она играет по выходным».</div>
<ul class="g-list">
<li><b>Привычки и то, что повторяется:</b> <span class="say">I play games every evening.</span> — Я играю в игры каждый вечер. <span class="say">She drinks coffee in the morning.</span> — Она пьёт кофе по утрам.</li>
<li><b>Факты о себе и о мире:</b> <span class="say">I work as a designer.</span> — Я работаю дизайнером. <span class="say">Water boils at 100 degrees.</span> — Вода кипит при 100 градусах.</li>
<li><b>Расписания:</b> <span class="say">The server restarts at 3 a.m.</span> — Сервер перезагружается в 3 ночи. <span class="say">The show starts at nine.</span> — Шоу начинается в девять.</li>
<li><b>Что любим, знаем, хотим:</b> <span class="say">I like this game.</span> — Мне нравится эта игра. <span class="say">He knows the answer.</span> — Он знает ответ.</li>
</ul>
<h3>2. Как строится</h3>
<table>
<tr><th></th><th>I / you / we / they</th><th>he / she / it</th></tr>
<tr><td><b>+</b></td><td>I <b>work</b></td><td>she <b>works</b></td></tr>
<tr><td><b>−</b></td><td>I <b>don't work</b></td><td>she <b>doesn't work</b></td></tr>
<tr><td><b>?</b></td><td><b>Do</b> you <b>work</b>?</td><td><b>Does</b> she <b>work</b>?</td></tr>
</table>
<div class="g-formula"><span class="g-part">he / she / it</span><span class="g-plus">+</span><span class="g-part g-v">глагол + s</span><span class="g-sep">·</span><span class="g-part">остальные</span><span class="g-plus">+</span><span class="g-part g-v">глагол</span></div>
<div class="g-steps"><div class="g-h">Как добавлять -s</div><ol>
<li>Обычно просто <b>+s</b>: work → works, play → plays.</li>
<li>После s, sh, ch, x, o → <b>+es</b>: watch → watches, go → goes, do → does.</li>
<li>Согласная + y → <b>-ies</b>: study → studies. (Но play → plays: перед y гласная.)</li>
<li>Особый: have → <b>has</b>.</li>
</ol></div>
<p>В отрицании и вопросе <b>-s «переезжает»</b> в does, а глагол остаётся голым: she <b>doesn't</b> work (не works).</p>
<div class="g-bad">She doesn't likes horror.</div>
<div class="g-good">She doesn't like horror.</div>
<h3>3. Слова-подсказки</h3>
<ul class="g-list">
<li><b>always</b> — всегда: <span class="say">He always wins.</span> — Он всегда выигрывает.</li>
<li><b>usually / often</b> — обычно / часто: <span class="say">We usually play online.</span> — Мы обычно играем онлайн.</li>
<li><b>sometimes / never</b> — иногда / никогда: <span class="say">I never skip cutscenes.</span> — Я никогда не пропускаю кат-сцены.</li>
<li><b>every day / on Mondays</b> — каждый день / по понедельникам: <span class="say">The team meets on Mondays.</span> — Команда встречается по понедельникам.</li>
</ul>
<p>Слова always, usually, often, never ставим <b>перед глаголом</b>: I <b>often</b> play. Но после am/is/are: I am <b>often</b> late.</p>
<h3>4. Не путать с Present Continuous</h3>
<div class="g-compare">
<div><div class="g-h">Present Simple</div><p><span class="say">I play games.</span></p><p class="muted">Вообще, регулярно, это моё хобби.</p></div>
<div><div class="g-h">Present Continuous</div><p><span class="say">I am playing a game.</span></p><p class="muted">Прямо сейчас, в эту минуту.</p></div>
</div>
<p>В русском одно слово «играю» — и для «вообще», и для «сейчас». В английском надо выбрать.</p>
<div class="g-bad">I am working as a designer. <span class="muted">— если это ваша профессия</span></div>
<div class="g-good">I work as a designer.</div>
<div class="g-bad">He play every day.</div>
<div class="g-good">He plays every day.</div>
<h3>5. В играх и сериалах</h3>
<ul class="g-list">
<li><span class="say">The shop opens at dawn.</span> — Лавка открывается на рассвете. <span class="muted">(NPC-торговец)</span></li>
<li><span class="say">This potion restores 50 health.</span> — Это зелье восстанавливает 50 здоровья. <span class="muted">(описание предмета)</span></li>
<li><span class="say">Nobody goes into that forest.</span> — Никто не ходит в тот лес. <span class="muted">(житель деревни)</span></li>
<li><span class="say">Do you play ranked?</span> — Ты играешь в рейтинговые? <span class="muted">(чат)</span></li>
</ul>
<h3>6. Запомнить и проверить</h3>
<div class="g-tip">Present Simple — это <b>«по жизни»</b>. Спросите себя: «Так бывает обычно?» Если да — Present Simple. А про he/she/it помните: <b>одна змейка -s</b> ползёт за глаголом, а в отрицании и вопросе она заползает в <b>does</b>.</div>
<div class="mini" data-q="My brother ___ in a big studio." data-o="work|works|is work" data-a="1" data-why="Факт о работе брата, he → works."></div>
<div class="mini" data-q="___ you usually play at night?" data-o="Are|Do|Does" data-a="1" data-why="usually → Present Simple, you → Do."></div>`,
    ex: [
      { q: "She ___ tennis every Sunday.", v: "play", o: ["plays", "is playing", "played"], a: 0, why: "every Sunday — регулярно → Present Simple, she → -s." },
      { q: "I ___ as a UI designer.", v: "work", o: ["am working", "work", "worked"], a: 1, why: "Это профессия, факт о жизни → Present Simple, а не «прямо сейчас»." },
      { q: "My cat ___ fish.", v: "not like", o: ["isn't liking", "don't like", "doesn't like"], a: 2, why: "Вкусы — Present Simple; my cat = it → doesn't, глагол без -s." },
      { q: "___ your sister watch anime?", v: "", o: ["Does", "Is", "Do"], a: 0, why: "Вопрос про привычку, sister = she → Does." },
      { q: "We usually ___ online after work.", v: "play", o: ["are playing", "play", "played"], a: 1, why: "usually — подсказка Present Simple, we → без -s." },
      { q: "The game ___ at 10 a.m. every day.", v: "update", o: ["updated", "is updating", "updates"], a: 2, why: "every day + расписание → Present Simple, it → -s." },
      { q: "He never ___ the tutorial.", v: "skip", o: ["skips", "is skipping", "skipped"], a: 0, why: "never — привычка → Present Simple, he → skips." },
      { q: "They ___ coffee in the evening.", v: "not drink", o: ["aren't drinking", "don't drink", "doesn't drink"], a: 1, why: "Привычка → Present Simple; they → don't." },
      { q: "My friend ___ English very well.", v: "speak", o: ["speak", "is speaking", "speaks"], a: 2, why: "Умение, факт → Present Simple; my friend = he → speaks." },
      { q: "How often ___ you go to the gym?", v: "", o: ["do", "are", "does"], a: 0, why: "How often — как часто → Present Simple; you → do." },
      { q: "Anna ___ Russian and English.", v: "know", o: ["is knowing", "knows", "knew"], a: 1, why: "know — глагол знания, в Continuous не ставится; факт → knows." },
      { q: "The shop ___ on Sundays.", v: "not open", o: ["isn't opening", "didn't open", "doesn't open"], a: 2, why: "on Sundays — регулярно → Present Simple; shop = it → doesn't." },
      { q: "She often ___ her homework late at night.", v: "do", o: ["does", "is doing", "do"], a: 0, why: "often → Present Simple; do для she → does." },
      { q: "I ___ this song. It's my favourite.", v: "love", o: ["am loving", "love", "loved"], a: 1, why: "Чувства и «нравится» — постоянное состояние (любимая песня) → Present Simple: I love. «I'm loving it» — разговорное «прямо сейчас кайфую», здесь не подходит." }
    ]
  },
  {
    id: 'present-continuous',
    name: 'Present Continuous',
    ru: 'Настоящее длительное',
    time: 'present',
    aspect: 'continuous',
    level: 'A1',
    freq: 5,
    one: 'Прямо сейчас, в процессе',
    formula: {
      plus: "I <b>am working</b> · she <b>is working</b> · they <b>are working</b>",
      minus: "I<b>'m not working</b> · she <b>isn't working</b>",
      q: '<b>Are</b> you <b>working</b>? · <b>Is</b> she <b>working</b>?'
    },
    markers: ['now', 'right now', 'at the moment', 'Look!', 'Listen!', 'today', 'these days'],
    compare: ['present-simple'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea">Present Continuous — это <b>«прямо сейчас, в процессе»</b>. Действие началось и ещё не закончилось. Как будто вы включили камеру и снимаете: «Я сейчас играю», «Она сейчас рисует».</div>
<ul class="g-list">
<li><b>Прямо в эту секунду:</b> <span class="say">I am playing right now.</span> — Я сейчас играю. <span class="say">Look! It's raining.</span> — Смотри! Идёт дождь.</li>
<li><b>В этот период, временно:</b> <span class="say">I'm learning English these days.</span> — Я сейчас (в последнее время) учу английский. <span class="say">She is working from home this week.</span> — На этой неделе она работает из дома.</li>
<li><b>Планы, о которых уже договорились:</b> <span class="say">We are meeting tomorrow.</span> — Мы встречаемся завтра. <span class="say">I'm flying to Kazan on Friday.</span> — В пятницу я лечу в Казань.</li>
</ul>
<h3>2. Как строится</h3>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">am / is / are</span><span class="g-plus">+</span><span class="g-part g-v">глагол + ing</span></div>
<table>
<tr><th></th><th>Пример</th><th>Коротко</th></tr>
<tr><td><b>+</b></td><td>She <b>is working</b>.</td><td>She's working.</td></tr>
<tr><td><b>−</b></td><td>She <b>is not working</b>.</td><td>She isn't working.</td></tr>
<tr><td><b>?</b></td><td><b>Is</b> she <b>working</b>?</td><td>—</td></tr>
</table>
<p>am / is / are — как в to be: I <b>am</b>, he/she/it <b>is</b>, you/we/they <b>are</b>.</p>
<div class="g-steps"><div class="g-h">Как добавлять -ing</div><ol>
<li>Обычно просто <b>+ing</b>: play → playing, watch → watching.</li>
<li>Немая e в конце пропадает: make → making, write → writing.</li>
<li>Короткий глагол «согласная-гласная-согласная» — удваиваем последнюю: run → running, sit → sitting, stop → stopping.</li>
<li>ie → <b>y</b>: die → dying, lie → lying.</li>
</ol></div>
<div class="g-bad">I playing now.</div>
<div class="g-good">I <b>am</b> playing now. <span class="muted">— без am/is/are нельзя</span></div>
<h3>3. Слова-подсказки</h3>
<ul class="g-list">
<li><b>now / right now</b> — сейчас: <span class="say">He is sleeping now.</span> — Он сейчас спит.</li>
<li><b>at the moment</b> — в данный момент: <span class="say">I'm busy at the moment.</span> — Я сейчас занят.</li>
<li><b>Look! / Listen!</b> — Смотри! / Слушай!: <span class="say">Listen! Someone is knocking.</span> — Слушай! Кто-то стучит.</li>
<li><b>today / this week / these days</b> — сегодня / на этой неделе / в последнее время: <span class="say">They're testing the new build this week.</span> — На этой неделе они тестируют новую сборку.</li>
</ul>
<h3>4. Не путать с Present Simple</h3>
<div class="g-compare">
<div><div class="g-h">Present Simple</div><p><span class="say">She draws every day.</span></p><p class="muted">Обычно, регулярно.</p></div>
<div><div class="g-h">Present Continuous</div><p><span class="say">She is drawing now.</span></p><p class="muted">Сейчас, в процессе.</p></div>
</div>
<p>Глаголы <b>знать, хотеть, любить, понимать, иметь</b> (know, want, like, love, understand, need, have в значении «иметь») почти никогда не ставят в -ing. Это не действия, а состояния.</p>
<div class="g-bad">I am knowing the answer.</div>
<div class="g-good">I know the answer.</div>
<div class="g-bad">What do you do now? <span class="muted">— если спрашиваем «чем ты сейчас занят»</span></div>
<div class="g-good">What are you doing now?</div>
<h3>5. В играх и сериалах</h3>
<ul class="g-list">
<li><span class="say">They're coming! Get ready!</span> — Они идут! Приготовься! <span class="muted">(кат-сцена)</span></li>
<li><span class="say">I'm reloading, cover me!</span> — Перезаряжаюсь, прикрой! <span class="muted">(голосовой чат)</span></li>
<li><span class="say">What are you doing here, stranger?</span> — Что ты тут делаешь, чужак? <span class="muted">(NPC)</span></li>
<li><span class="say">The bridge is falling apart!</span> — Мост разваливается! <span class="muted">(сериал)</span></li>
</ul>
<h3>6. Запомнить и проверить</h3>
<div class="g-tip">-ing — это <b>кнопка «Запись»</b> на камере: действие идёт прямо в кадре. А <b>am/is/are</b> — батарейка: без неё камера не работает.</div>
<div class="mini" data-q="Shh! The baby ___." data-o="sleeps|is sleeping|sleeping" data-a="1" data-why="Shh! — прямо сейчас → is sleeping; без is нельзя."></div>
<div class="mini" data-q="I ___ what you mean." data-o="am understanding|understand|understanding" data-a="1" data-why="understand — состояние, не ставится в -ing."></div>`,
    ex: [
      { q: "Look! Tom ___ the boss.", v: "fight", o: ["fights", "is fighting", "fought"], a: 1, why: "Look! — происходит прямо сейчас → Present Continuous." },
      { q: "I can't talk. I ___ right now.", v: "drive", o: ["am driving", "drive", "was driving"], a: 0, why: "right now → Present Continuous, I → am." },
      { q: "___ you watching the new series at the moment?", v: "", o: ["Do", "Is", "Are"], a: 2, why: "at the moment + -ing → Present Continuous; you → Are." },
      { q: "She ___ from home this week.", v: "work", o: ["is working", "works", "worked"], a: 0, why: "this week — временно → Present Continuous." },
      { q: "Listen! Somebody ___ at the door.", v: "knock", o: ["knocks", "knocked", "is knocking"], a: 2, why: "Listen! — прямо сейчас → is knocking." },
      { q: "We ___ the game now, we're eating.", v: "not play", o: ["don't play", "aren't playing", "didn't play"], a: 1, why: "now → Present Continuous; we → aren't." },
      { q: "What ___ you doing? — I'm drawing icons.", v: "", o: ["are", "do", "does"], a: 0, why: "doing + ответ «сейчас рисую» → Present Continuous, you → are." },
      { q: "My brother ___ Japanese these days.", v: "learn", o: ["learns", "is learning", "learned"], a: 1, why: "these days — в последнее время, временно → Present Continuous." },
      { q: "Hurry up! Everybody ___ for you.", v: "wait", o: ["waits", "waited", "is waiting"], a: 2, why: "Hurry up! — ситуация прямо сейчас → is waiting (everybody = один → is)." },
      { q: "It ___ now, so take an umbrella.", v: "rain", o: ["is raining", "rains", "rained"], a: 0, why: "now → Present Continuous: it is raining." },
      { q: "I ___ my friends tonight. We booked a table.", v: "meet", o: ["meet", "am meeting", "met"], a: 1, why: "Договорённый план на вечер → Present Continuous." },
      { q: "Why ___ she crying?", v: "", o: ["does", "do", "is"], a: 2, why: "crying — форма -ing → нужен is (she)." },
      { q: "Be quiet! The kids ___ .", v: "sleep", o: ["are sleeping", "sleep", "is sleeping"], a: 0, why: "Be quiet! — сейчас; the kids = they → are sleeping." },
      { q: "He ___ to music at the moment, he's reading.", v: "not listen", o: ["doesn't listen", "isn't listening", "didn't listen"], a: 1, why: "at the moment → Present Continuous; he → isn't listening." }
    ]
  },
  {
    id: 'past-simple',
    name: 'Past Simple',
    ru: 'Прошедшее простое',
    time: 'past',
    aspect: 'simple',
    level: 'A1',
    freq: 5,
    one: 'Сделал в прошлом, закончено',
    formula: {
      plus: 'I / she <b>worked</b> · I <b>went</b> (неправильный)',
      minus: "I <b>didn't work</b> · she <b>didn't go</b>",
      q: '<b>Did</b> you <b>work</b>? · <b>Did</b> she <b>go</b>?'
    },
    markers: ['yesterday', 'last week', 'last year', 'ago', 'in 2020', 'when I was a child'],
    compare: ['past-continuous', 'present-simple'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea">Past Simple — это обычное <b>прошедшее время</b>: что-то случилось в прошлом и <b>закончилось</b>. По-русски: «сделал», «пошёл», «купил». Почти всегда понятно <b>когда</b>: вчера, в прошлом году, два дня назад.</div>
<ul class="g-list">
<li><b>Одно законченное действие:</b> <span class="say">I finished the level yesterday.</span> — Я прошёл уровень вчера. <span class="say">She bought a new laptop last week.</span> — На прошлой неделе она купила новый ноутбук.</li>
<li><b>Цепочка событий по порядку:</b> <span class="say">He opened the door, saw the monster and ran.</span> — Он открыл дверь, увидел монстра и побежал.</li>
<li><b>Привычки в прошлом:</b> <span class="say">When I was a child, I played outside every day.</span> — В детстве я каждый день играл на улице.</li>
</ul>
<h3>2. Как строится</h3>
<table>
<tr><th></th><th>Правильный</th><th>Неправильный</th></tr>
<tr><td><b>+</b></td><td>I <b>played</b></td><td>I <b>went</b></td></tr>
<tr><td><b>−</b></td><td>I <b>didn't play</b></td><td>I <b>didn't go</b></td></tr>
<tr><td><b>?</b></td><td><b>Did</b> you <b>play</b>?</td><td><b>Did</b> you <b>go</b>?</td></tr>
</table>
<div class="g-formula"><span class="g-part">Кто угодно</span><span class="g-plus">+</span><span class="g-part g-v">глагол + ed / 2-я форма</span></div>
<p>Хорошая новость: форма <b>одна для всех</b> — I, you, he, they. Никаких -s.</p>
<div class="g-steps"><div class="g-h">Как добавлять -ed</div><ol>
<li>Обычно <b>+ed</b>: work → worked, play → played.</li>
<li>Есть e на конце → <b>+d</b>: like → liked, save → saved.</li>
<li>Согласная + y → <b>-ied</b>: study → studied, try → tried.</li>
<li>Короткий «согласная-гласная-согласная» → удваиваем: stop → stopped.</li>
</ol></div>
<p><b>Неправильные глаголы</b> надо просто выучить: go → <b>went</b>, see → <b>saw</b>, buy → <b>bought</b>, get → <b>got</b>, make → <b>made</b>, have → <b>had</b>, be → <b>was / were</b>.</p>
<p>В отрицании и вопросе прошлое «уходит» в <b>did</b>, а глагол возвращается в начальную форму.</p>
<div class="g-bad">I didn't went there.</div>
<div class="g-good">I didn't go there.</div>
<h3>3. Слова-подсказки</h3>
<ul class="g-list">
<li><b>yesterday</b> — вчера: <span class="say">I called him yesterday.</span> — Я позвонил ему вчера.</li>
<li><b>last night / last week / last year</b> — вчера вечером / на прошлой неделе / в прошлом году: <span class="say">We watched a movie last night.</span></li>
<li><b>... ago</b> — ... назад: <span class="say">The patch came out two days ago.</span> — Патч вышел два дня назад.</li>
<li><b>in 2020 / when I was ...</b> — в 2020 году / когда я был ...: <span class="say">She moved to Moscow in 2020.</span></li>
</ul>
<h3>4. Не путать с Past Continuous</h3>
<div class="g-compare">
<div><div class="g-h">Past Simple</div><p><span class="say">I played at 8.</span></p><p class="muted">Сыграл. Факт, результат.</p></div>
<div><div class="g-h">Past Continuous</div><p><span class="say">I was playing at 8.</span></p><p class="muted">В 8 я был в процессе игры.</p></div>
</div>
<p>Очень похоже на русское <b>«сделал»</b> (Past Simple) и <b>«делал в тот момент»</b> (Past Continuous).</p>
<div class="g-bad">Did you saw the new episode?</div>
<div class="g-good">Did you see the new episode?</div>
<div class="g-bad">I go to the cinema yesterday.</div>
<div class="g-good">I went to the cinema yesterday.</div>
<h3>5. В играх и сериалах</h3>
<ul class="g-list">
<li><span class="say">The dragon destroyed our village.</span> — Дракон уничтожил нашу деревню. <span class="muted">(NPC)</span></li>
<li><span class="say">Who took my sword?</span> — Кто взял мой меч? <span class="muted">(квест)</span></li>
<li><span class="say">GG, you played well!</span> — GG, ты хорошо сыграл! <span class="muted">(чат после матча)</span></li>
<li><span class="say">I didn't do it, I swear!</span> — Это не я, клянусь! <span class="muted">(сериал)</span></li>
</ul>
<h3>6. Запомнить и проверить</h3>
<div class="g-tip">Past Simple — это <b>фотография</b> из прошлого: щёлк — и готово, действие закончено. В вопросе и отрицании прошлое живёт только в <b>did</b>: одного «прошлого» в предложении достаточно.</div>
<div class="mini" data-q="We ___ the boss two hours ago." data-o="beat|beated|were beating" data-a="0" data-why="ago → Past Simple; beat — неправильный глагол, форма не меняется."></div>
<div class="mini" data-q="We watched the film yesterday. ___ you like the ending?" data-o="Do|Did|Were" data-a="1" data-why="Концовку уже посмотрели → вопрос в прошлом: Did + like."></div>`,
    ex: [
      { q: "I ___ this game last year.", v: "buy", o: ["bought", "was buying", "buy"], a: 0, why: "last year → Past Simple; buy — неправильный: bought." },
      { q: "She ___ the project two days ago.", v: "finish", o: ["finishes", "finished", "was finishing"], a: 1, why: "two days ago → законченное действие → Past Simple." },
      { q: "We ___ the match yesterday.", v: "not win", o: ["don't win", "weren't winning", "didn't win"], a: 2, why: "yesterday → Past Simple; отрицание: didn't + win." },
      { q: "___ you see the new trailer last night?", v: "", o: ["Did", "Do", "Were"], a: 0, why: "last night → Past Simple; вопрос: Did + see." },
      { q: "He ___ to Italy in 2019.", v: "go", o: ["goes", "went", "was going"], a: 1, why: "in 2019 → Past Simple; go → went." },
      { q: "When I was a child, I ___ cartoons every morning.", v: "watch", o: ["watch", "am watching", "watched"], a: 2, why: "When I was a child — привычка в прошлом → Past Simple." },
      { q: "They ___ the door, looked inside and left.", v: "open", o: ["opened", "were opening", "open"], a: 0, why: "Цепочка событий одно за другим → Past Simple." },
      { q: "I ___ my phone at home this morning.", v: "leave", o: ["leave", "left", "was leaving"], a: 1, why: "this morning (уже прошло), разовое действие → left." },
      { q: "What ___ you do last weekend?", v: "", o: ["do", "were", "did"], a: 2, why: "last weekend → Past Simple; вопрос: did + do." },
      { q: "My friend ___ me yesterday.", v: "not call", o: ["didn't call", "doesn't call", "wasn't calling"], a: 0, why: "yesterday → Past Simple; didn't + call." },
      { q: "The film ___ at 9 and ended at 11.", v: "start", o: ["starts", "started", "was starting"], a: 1, why: "Два законченных события в прошлом (ended) → started." },
      { q: "She ___ the answer, so she said nothing.", v: "not know", o: ["wasn't knowing", "doesn't know", "didn't know"], a: 2, why: "Рассказ о прошлом (said); know не ставится в -ing → didn't know." },
      { q: "I ___ a great idea in the shower an hour ago.", v: "have", o: ["had", "have", "was having"], a: 0, why: "an hour ago → Past Simple; have → had." },
      { q: "___ Anna come to the party last Friday?", v: "", o: ["Does", "Did", "Was"], a: 1, why: "last Friday — прошлая пятница, вечеринка прошла + come → Did." }
    ]
  },
  {
    id: 'past-continuous',
    name: 'Past Continuous',
    ru: 'Прошедшее длительное',
    time: 'past',
    aspect: 'continuous',
    level: 'A2',
    freq: 4,
    one: 'Был в процессе в прошлом',
    formula: {
      plus: 'I / she <b>was working</b> · you / they <b>were working</b>',
      minus: "I <b>wasn't working</b> · they <b>weren't working</b>",
      q: '<b>Was</b> she <b>working</b>? · <b>Were</b> you <b>working</b>?'
    },
    markers: ['at 8 yesterday', 'at that moment', 'when', 'while', 'all day yesterday'],
    compare: ['past-simple'],
    html: `
<h3>1. Когда используем</h3>
<div class="g-idea">Past Continuous — это <b>«был в процессе»</b> в какой-то момент прошлого. Как Present Continuous, только камера снимала <b>тогда</b>. По-русски это «делал» (не «сделал»): «В 8 вечера я играл», «Я шёл домой, когда…».</div>
<ul class="g-list">
<li><b>Процесс в конкретный момент прошлого:</b> <span class="say">At 10 p.m. I was watching a series.</span> — В 10 вечера я смотрел сериал. <span class="say">What were you doing at midnight?</span> — Что ты делал в полночь?</li>
<li><b>Фон, который прервало событие:</b> <span class="say">I was cooking when the lights went out.</span> — Я готовил, когда вырубили свет. <span class="say">She was sleeping when you called.</span> — Она спала, когда ты позвонил.</li>
<li><b>Два процесса одновременно:</b> <span class="say">I was coding while he was testing.</span> — Я писал код, пока он тестировал.</li>
</ul>
<h3>2. Как строится</h3>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">was / were</span><span class="g-plus">+</span><span class="g-part g-v">глагол + ing</span></div>
<table>
<tr><th></th><th>I / he / she / it</th><th>you / we / they</th></tr>
<tr><td><b>+</b></td><td>I <b>was playing</b></td><td>we <b>were playing</b></td></tr>
<tr><td><b>−</b></td><td>I <b>wasn't playing</b></td><td>we <b>weren't playing</b></td></tr>
<tr><td><b>?</b></td><td><b>Was</b> he <b>playing</b>?</td><td><b>Were</b> you <b>playing</b>?</td></tr>
</table>
<p>Всё просто: <b>was</b> для I, he, she, it; <b>were</b> для you, we, they. Правила -ing — те же, что в Present Continuous (make → making, run → running).</p>
<div class="g-bad">They was playing.</div>
<div class="g-good">They were playing.</div>
<h3>3. Слова-подсказки</h3>
<ul class="g-list">
<li><b>at 8 yesterday / at that moment</b> — вчера в 8 / в тот момент: <span class="say">At that moment I was reading.</span> — В тот момент я читал.</li>
<li><b>when</b> — когда (обычно рядом стоит Past Simple): <span class="say">We were talking when the boss came in.</span> — Мы болтали, когда вошёл начальник.</li>
<li><b>while</b> — пока, в то время как: <span class="say">While I was waiting, I checked my email.</span> — Пока я ждал, я проверил почту.</li>
<li><b>all day / all evening</b> — весь день / весь вечер: <span class="say">It was raining all day.</span> — Весь день шёл дождь.</li>
</ul>
<h3>4. Не путать с Past Simple</h3>
<div class="g-compare">
<div><div class="g-h">Past Simple</div><p><span class="say">When he came, I cooked dinner.</span></p><p class="muted">Он пришёл — и тогда я приготовил ужин.</p></div>
<div><div class="g-h">Past Continuous</div><p><span class="say">When he came, I was cooking dinner.</span></p><p class="muted">Я уже был в процессе, а он пришёл.</p></div>
</div>
<p>Длинное действие-фон — <b>Past Continuous</b>. Короткое действие, которое «врезалось» в него, — <b>Past Simple</b>.</p>
<div class="g-bad">I was watching TV when the phone was ringing.</div>
<div class="g-good">I was watching TV when the phone rang.</div>
<div class="g-bad">I was knowing him well.</div>
<div class="g-good">I knew him well. <span class="muted">— know не ставим в -ing</span></div>
<h3>5. В играх и сериалах</h3>
<ul class="g-list">
<li><span class="say">We were guarding the gate when they attacked.</span> — Мы охраняли ворота, когда они напали. <span class="muted">(стражник)</span></li>
<li><span class="say">Sorry, I was loading, what did you say?</span> — Извини, у меня грузилось, что ты сказал? <span class="muted">(голосовой чат)</span></li>
<li><span class="say">Where were you going that night?</span> — Куда ты шёл той ночью? <span class="muted">(допрос в детективе)</span></li>
<li><span class="say">I wasn't sleeping, I was thinking.</span> — Я не спал, я думал. <span class="muted">(сериал)</span></li>
</ul>
<h3>6. Запомнить и проверить</h3>
<div class="g-tip">Представьте фильм: <b>Past Continuous</b> — это фоновая сцена, которая идёт (дождь шёл, герой шёл по улице), а <b>Past Simple</b> — резкое событие в кадре (вдруг раздался выстрел). Фон — was/were + ing, событие — 2-я форма.</div>
<div class="mini" data-q="At 9 p.m. yesterday we ___ a movie." data-o="watched|were watching|was watching" data-a="1" data-why="Конкретный момент прошлого → процесс; we → were."></div>
<div class="mini" data-q="She was cooking when I ___ ." data-o="was arriving|arrived|arrive" data-a="1" data-why="Короткое событие прервало процесс → Past Simple."></div>`,
    ex: [
      { q: "At 8 p.m. yesterday I ___ a new level.", v: "play", o: ["was playing", "played", "am playing"], a: 0, why: "Конкретный момент в прошлом (в 8 вечера) → процесс → Past Continuous." },
      { q: "She ___ when the phone rang.", v: "sleep", o: ["slept", "was sleeping", "is sleeping"], a: 1, why: "Фон (спала), который прервал звонок → Past Continuous." },
      { q: "We ___ dinner when the lights went out.", v: "have", o: ["had", "was having", "were having"], a: 2, why: "Процесс-фон + прерывание (went out); we → were." },
      { q: "While I ___ , my brother was cleaning the room.", v: "cook", o: ["was cooking", "cooked", "were cooking"], a: 0, why: "while + два процесса одновременно → was cooking (I → was)." },
      { q: "What ___ you doing at midnight?", v: "", o: ["did", "were", "was"], a: 1, why: "doing + конкретный момент прошлого → Past Continuous; you → were." },
      { q: "I was walking home when I ___ an old friend.", v: "meet", o: ["was meeting", "meet", "met"], a: 2, why: "Короткое событие прервало процесс → Past Simple: met." },
      { q: "When I looked out of the window, it ___ .", v: "rain", o: ["was raining", "rained", "is raining"], a: 0, why: "Когда я выглянул, дождь уже шёл — фон в момент прошлого → Past Continuous. rained значило бы «пошёл именно тогда»." },
      { q: "They ___ at that moment, they were eating.", v: "not work", o: ["didn't work", "weren't working", "wasn't working"], a: 1, why: "at that moment → процесс; they → weren't." },
      { q: "___ he driving when the accident happened?", v: "", o: ["Did", "Were", "Was"], a: 2, why: "driving + фон для события → Past Continuous; he → Was." },
      { q: "The kids ___ while we were talking.", v: "draw", o: ["were drawing", "drew", "was drawing"], a: 0, why: "while + параллельные процессы → were drawing (kids = they)." },
      { q: "I ___ TV when you called, I was reading.", v: "not watch", o: ["didn't watch", "wasn't watching", "weren't watching"], a: 1, why: "Фон в момент звонка → Past Continuous; I → wasn't." },
      { q: "When the boss came in, everybody ___ memes.", v: "look at", o: ["looked at", "look at", "was looking at"], a: 2, why: "Когда вошёл босс, все уже были в процессе → was looking (everybody → was)." },
      { q: "This time last week we ___ on the beach.", v: "lie", o: ["were lying", "lay", "are lying"], a: 0, why: "This time last week — момент в прошлом → процесс; lie → lying." },
      { q: "He ___ his bike when he fell.", v: "ride", o: ["rode", "was riding", "were riding"], a: 1, why: "Процесс (ехал), который прервало падение → was riding (he → was)." }
    ]
  }
]);
