// Юниты 2 и 3 — be: отрицания и вопросы, this/that, мн. число, a/an; Present Simple.
// Стиль «как у Мерфи, только проще» (эталон — a1-1.js).
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-2');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: «не» и «?» делает сам глагол be',
      html: `
<div class="g-idea">В русском, чтобы сказать «не» или задать вопрос, мы просто добавляем «не» или меняем интонацию. В английском всю работу делает <b>am / is / are</b>: к нему прилепляем <b>not</b> или ставим его <b>в начало</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я <span class="g-gap">_</span> не устал.</p><p>Ты <span class="g-gap">_</span> дома?</p><p>Это <span class="g-gap">_</span> мой телефон.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I am <b>not</b> tired.</span></p><p><span class="say"><b>Are</b> you at home?</span></p><p><span class="say"><b>This</b> is my phone.</span></p></div>
</div>
<p>В этом юните четыре небольшие темы:</p>
<ul class="g-list">
<li><b>not</b> — как сказать «не»</li>
<li><b>Are you…?</b> — как задать вопрос</li>
<li><b>this / that / these / those</b> — «этот, тот, эти, те»</li>
<li><b>books, men</b> и <b>a / an</b> — один предмет или много</li>
</ul>
<div class="g-tip">Глагол be — как «главный» в предложении: и «не», и вопрос всегда крутятся вокруг него.</div>
<div class="mini" data-q="Как сказать «Я не голоден»?" data-o="I not hungry.|I am not hungry.|I not am hungry." data-a="1" data-why="Глагол am остаётся, not ставим сразу после него."></div>`
    },
    {
      title: '2. Отрицание: am / is / are + not',
      html: `
<div class="g-idea">Чтобы сказать «не», ставим <b>not</b> сразу <b>после</b> am / is / are. Больше ничего не меняется.</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">am / is / are</span><span class="g-plus">+</span><span class="g-part g-v">not</span><span class="g-plus">+</span><span class="g-part">…</span></div>
<table>
<tr><th>Полная форма</th><th>Коротко</th></tr>
<tr><td>I am not</td><td><b>I'm not</b></td></tr>
<tr><td>he / she / it is not</td><td><b>isn't</b> или <b>he's not</b></td></tr>
<tr><td>you / we / they are not</td><td><b>aren't</b> или <b>they're not</b></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I'm not tired.</span> — Я не устал.</li>
<li><span class="say">This game isn't cheap.</span> — Эта игра не дешёвая.</li>
<li><span class="say">My laptop isn't new.</span> — Мой ноутбук не новый.</li>
<li><span class="say">They aren't at home.</span> — Их нет дома.</li>
</ul>
<div class="g-bad">I amn't tired.</div>
<div class="g-good">I'm not tired. <span class="muted">— формы «amn't» не бывает</span></div>
<div class="g-bad">She not at home.</div>
<div class="g-good">She isn't at home. <span class="muted">— глагол is не выкидываем</span></div>
<div class="g-tip">Коротко: <b>is not → isn't</b>, <b>are not → aren't</b>. А у I — только <b>I'm not</b>.</div>
<div class="mini" data-q="We ___ students. (нет)" data-o="isn't|aren't|not" data-a="1" data-why="We → are, отрицание are not = aren't."></div>
<div class="mini" data-q="The room ___ big. (нет)" data-o="isn't|aren't|amn't" data-a="0" data-why="The room — один предмет (it) → is not = isn't."></div>`
    },
    {
      title: '3. Вопрос: am / is / are прыгает вперёд',
      html: `
<div class="g-idea">В вопросе am / is / are <b>меняется местами</b> с тем, кто в начале. Интонации мало — нужен порядок слов.</div>
<div class="g-formula"><span class="g-part g-v">Am / Is / Are</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">…?</span></div>
<table>
<tr><th>Утверждение</th><th>Вопрос</th></tr>
<tr><td>You are at home.</td><td><span class="say">Are you at home?</span></td></tr>
<tr><td>It is expensive.</td><td><span class="say">Is it expensive?</span></td></tr>
<tr><td>This is your bag.</td><td><span class="say">Is this your bag?</span></td></tr>
</table>
<div class="g-bad">You are tired?</div>
<div class="g-good">Are you tired?</div>
<p><b>Короткие ответы.</b> Отвечаем тем же глаголом, не повторяя всё предложение:</p>
<ul class="g-list">
<li><span class="say">Are you OK? — Yes, I am.</span> / <span class="say">No, I'm not.</span></li>
<li><span class="say">Is it new? — Yes, it is.</span> / <span class="say">No, it isn't.</span></li>
<li><span class="say">Are they designers? — Yes, they are.</span> / <span class="say">No, they aren't.</span></li>
</ul>
<div class="g-bad">Yes, I'm. <span class="muted">— в конце короткую форму не используют</span></div>
<div class="g-good">Yes, I am.</div>
<p><b>Вопросительное слово</b> ставим в самое начало, дальше — как обычный вопрос:</p>
<div class="g-formula"><span class="g-part">What / Where / How</span><span class="g-plus">+</span><span class="g-part g-v">is / are</span><span class="g-plus">+</span><span class="g-part">кто?</span></div>
<ul class="g-list">
<li><span class="say">What is this?</span> — Что это?</li>
<li><span class="say">Where is my phone?</span> — Где мой телефон?</li>
<li><span class="say">Where are you?</span> — Где ты?</li>
<li><span class="say">How old are you?</span> — Сколько тебе лет?</li>
</ul>
<div class="mini" data-q="___ it expensive?" data-o="Are|Is|Am" data-a="1" data-why="it → is, в вопросе is ставим в начало."></div>
<div class="mini" data-q="Is he at work? — No, ___." data-o="he isn't|he not|he aren't" data-a="0" data-why="Короткий ответ тем же глаголом: he is not = he isn't."></div>`
    },
    {
      title: '4. this / that / these / those',
      html: `
<div class="g-idea">Эти четыре слова показывают две вещи: <b>близко или далеко</b> и <b>один или много</b>.</div>
<table>
<tr><th></th><th>Близко (здесь)</th><th>Далеко (там)</th></tr>
<tr><td>Один</td><td><b>this</b> — этот</td><td><b>that</b> — тот</td></tr>
<tr><td>Много</td><td><b>these</b> — эти</td><td><b>those</b> — те</td></tr>
</table>
<ul class="g-list">
<li><span class="say">This is my laptop.</span> — Это мой ноутбук. <span class="muted">(у меня в руках)</span></li>
<li><span class="say">That is my car.</span> — Вон та — моя машина.</li>
<li><span class="say">These games are new.</span> — Эти игры новые.</li>
<li><span class="say">Those people are designers.</span> — Те люди — дизайнеры.</li>
</ul>
<p>С ними работают и отрицание, и вопрос: <span class="say">Is that your bag?</span> <span class="say">These aren't my books.</span></p>
<div class="g-bad">This books are new.</div>
<div class="g-good">These books are new. <span class="muted">— книг много → these</span></div>
<div class="g-tip">В длинных словах — много: <b>th-ese</b>, <b>th-ose</b> длиннее, чем this и that. Больше букв — больше предметов.</div>
<div class="mini" data-q="___ are my friends. (далеко, много)" data-o="That|These|Those" data-a="2" data-why="Далеко + много → those."></div>
<div class="mini" data-q="___ is my phone. (в руке, один)" data-o="This|These|Those" data-a="0" data-why="Близко + один → this."></div>`
    },
    {
      title: '5. Много: book → books',
      html: `
<div class="g-idea">Чтобы сделать из одного предмета много, обычно добавляем в конце <b>-s</b>. Как русское «-ы/-и», только почти всегда одинаково.</div>
<div class="g-steps"><div class="g-h">Как сделать множественное число</div><ol>
<li>Обычно + <b>s</b>: game → <span class="say">games</span>, phone → <span class="say">phones</span>, car → <span class="say">cars</span>.</li>
<li>Слово кончается на <b>s, sh, ch, x</b> → + <b>es</b>: box → <span class="say">boxes</span>, watch → <span class="say">watches</span>.</li>
<li>Согласная + <b>y</b> → <b>ies</b>: city → <span class="say">cities</span>. Но гласная + y — просто s: toy → toys.</li>
</ol></div>
<p><b>Исключения</b> — их немного, просто запомнить:</p>
<table>
<tr><th>Один</th><th>Много</th><th>Перевод</th></tr>
<tr><td>man</td><td><span class="say">men</span></td><td>мужчины</td></tr>
<tr><td>woman</td><td><span class="say">women</span></td><td>женщины</td></tr>
<tr><td>child</td><td><span class="say">children</span></td><td>дети</td></tr>
<tr><td>person</td><td><span class="say">people</span></td><td>люди</td></tr>
</table>
<div class="g-bad">Those peoples are nice.</div>
<div class="g-good">Those people are nice. <span class="muted">— people уже «много», s не нужна</span></div>
<div class="g-tip">Много предметов — значит <b>they</b>, а после they всегда <b>are</b>: <span class="say">My books are on the table.</span></div>
<div class="mini" data-q="one box — two ___" data-o="boxs|boxes|boxies" data-a="1" data-why="После x добавляем -es."></div>
<div class="mini" data-q="one child — two ___" data-o="childs|childes|children" data-a="2" data-why="Исключение: child → children."></div>`
    },
    {
      title: '6. a / an — «один, какой-то»',
      html: `
<div class="g-idea"><b>a / an</b> — это остаток слова «one» (один). Ставим его перед <b>одним</b> предметом, когда называем его впервые. На русский не переводится.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>У меня <span class="g-gap">_</span> кот.</p><p>Это <span class="g-gap">_</span> игра.</p><p>Это <span class="g-gap">_</span> игры.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I have <b>a</b> cat.</span></p><p><span class="say">It's <b>a</b> game.</span></p><p><span class="say">They're games.</span> <span class="muted">(много — без a)</span></p></div>
</div>
<div class="g-formula"><span class="g-part g-v">a</span> + согласный звук: a phone, a bag, a designer <span class="g-sep">·</span> <span class="g-part g-v">an</span> + гласный звук: an apple, an office, an old car</div>
<p>Важен именно <b>звук</b>, а не буква: <span class="say">an old laptop</span>, но <span class="say">a new laptop</span>.</p>
<div class="g-bad">It is apple.</div>
<div class="g-good">It is an apple. <span class="muted">— один предмет → нужен артикль</span></div>
<div class="g-bad">These are a books.</div>
<div class="g-good">These are books. <span class="muted">— a значит «один», с множественным не ставим</span></div>
<div class="g-tip">Перед <b>my, your, this, that</b> артикль тоже не нужен: <span class="say">This is my bag.</span>, а не «a my bag».</div>
<div class="mini" data-q="It is ___ old house." data-o="a|an|—" data-a="1" data-why="old начинается с гласного звука → an."></div>
<div class="mini" data-q="Those are ___ cats." data-o="a|an|—" data-a="2" data-why="cats — много, a/an не ставим."></div>`
    },
    {
      title: '7. Типичные ошибки — проверьте себя',
      html: `
<div class="g-mistakes">
<div class="g-bad">I amn't hungry.</div><div class="g-good">I<b>'m not</b> hungry.</div>
<div class="g-bad">She not at home.</div><div class="g-good">She <b>isn't</b> at home.</div>
<div class="g-bad">You are tired?</div><div class="g-good"><b>Are you</b> tired?</div>
<div class="g-bad">Yes, I'm.</div><div class="g-good">Yes, I <b>am</b>.</div>
<div class="g-bad">This games are new.</div><div class="g-good"><b>These</b> games are new.</div>
<div class="g-bad">two childs, three mans</div><div class="g-good">two <b>children</b>, three <b>men</b></div>
<div class="g-bad">It is a apple.</div><div class="g-good">It is <b>an</b> apple.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>not</b> — после am/is/are, в вопросе <b>am/is/are</b> — вперёд; <b>this/that</b> — один, <b>these/those</b> — много; много = <b>-s</b>, один = <b>a/an</b>.</div>`
    }
  ];
})();

(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-3');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: «обычно, всегда, каждый день»',
      html: `
<div class="g-idea"><b>Present Simple</b> (простое настоящее время) — для того, что бывает <b>регулярно</b>: привычки, работа, распорядок дня, факты. Не «прямо сейчас», а «вообще, обычно».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я работаю из дома.</p><p>Она играет в игры каждый вечер.</p><p>Кошки любят рыбу.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I work from home.</span></p><p><span class="say">She plays games every evening.</span></p><p><span class="say">Cats like fish.</span></p></div>
</div>
<p>Хорошая новость: тут <b>не нужен</b> am / is / are. Глагол-действие сам по себе и есть глагол предложения.</p>
<div class="g-bad">I am work from home.</div>
<div class="g-good">I work from home.</div>
<div class="g-tip">Правило из прошлых юнитов: в предложении обязательно есть глагол. Если есть действие (work, play, read) — оно и есть глагол, и <b>am/is/are</b> ему не нужен.</div>
<div class="mini" data-q="Я живу в Москве." data-o="I am live in Moscow.|I live in Moscow.|I living in Moscow." data-a="1" data-why="Есть глагол-действие live — am не нужен."></div>`
    },
    {
      title: '2. Форма: глагол как в словаре, но he / she / it + s',
      html: `
<div class="g-idea">Берём глагол как в словаре — и всё. Одно исключение: после <b>he, she, it</b> в конец глагола добавляем <b>-s</b>.</div>
<table>
<tr><th>Кто</th><th>Глагол</th><th>Пример</th></tr>
<tr><td>I, you, we, they</td><td><b>work</b></td><td><span class="say">We play games.</span></td></tr>
<tr><td>he, she, it</td><td><b class="g-v">works</b></td><td><span class="say">She plays games.</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">he / she / it</span><span class="g-plus">+</span><span class="g-part g-v">глагол + s</span></div>
<p>То же самое — с <b>любым именем</b> и <b>одним</b> человеком или предметом (всё, что можно заменить на he/she/it):</p>
<ul class="g-list">
<li><span class="say">Max works from home.</span> — Макс работает из дома.</li>
<li><span class="say">My cat sleeps all day.</span> — Мой кот спит весь день.</li>
<li><span class="say">Anna likes this series.</span> — Анне нравится этот сериал.</li>
<li><span class="say">My friends play online.</span> — Мои друзья играют онлайн. <span class="muted">(много = they → без s)</span></li>
</ul>
<div class="g-bad">She work in an office.</div>
<div class="g-good">She work<b>s</b> in an office.</div>
<div class="g-bad">They plays games.</div>
<div class="g-good">They play games. <span class="muted">— s только у одного</span></div>
<div class="g-tip">Запоминалка: <b>«он, она, оно — хвостик s»</b>. Одна s у одного человека.</div>
<div class="mini" data-q="Tom ___ English." data-o="speak|speaks|is speak" data-a="1" data-why="Tom = he → speak + s."></div>
<div class="mini" data-q="We ___ coffee in the morning." data-o="drink|drinks|are drink" data-a="0" data-why="We — без s, и am/is/are не нужен."></div>`
    },
    {
      title: '3. Как пишется: -s, -es или -ies',
      html: `
<div class="g-idea">Почти всегда просто <b>+s</b>. Но есть три маленьких правила написания — их надо знать, чтобы писать без ошибок.</div>
<div class="g-steps"><div class="g-h">Смотрим на конец глагола</div><ol>
<li>Обычно → <b>+ s</b>: work → <span class="say">works</span>, read → <span class="say">reads</span>, like → <span class="say">likes</span>.</li>
<li>Кончается на <b>s, sh, ch, x</b> или <b>o</b> → <b>+ es</b>: watch → <span class="say">watches</span>, go → <span class="say">goes</span>, do → <span class="say">does</span>.</li>
<li><b>Согласная + y</b> → y меняем на <b>ies</b>: study → <span class="say">studies</span>.</li>
<li>Но <b>гласная + y</b> → просто s: play → <span class="say">plays</span>.</li>
</ol></div>
<table>
<tr><th>Глагол</th><th>he / she / it</th><th>Почему</th></tr>
<tr><td>live</td><td><b>lives</b></td><td>+ s</td></tr>
<tr><td>watch</td><td><b>watches</b></td><td>ch → es</td></tr>
<tr><td>go</td><td><b>goes</b></td><td>o → es</td></tr>
<tr><td>study</td><td><b>studies</b></td><td>d + y → ies</td></tr>
<tr><td>play</td><td><b>plays</b></td><td>a + y → s</td></tr>
<tr><td>have</td><td><b>has</b></td><td>исключение</td></tr>
</table>
<div class="g-bad">He haves a new laptop.</div>
<div class="g-good">He <b>has</b> a new laptop.</div>
<div class="g-bad">She playes games. / She plaies games.</div>
<div class="g-good">She <b>plays</b> games.</div>
<div class="g-tip">Окончание -es звучит как лишний слог «из»: <span class="say">watches</span> — «вотчиз». Если после такого конца трудно произнести просто «с» — пишем es.</div>
<div class="mini" data-q="Anna ___ English every day. (study)" data-o="studys|studies|studyes" data-a="1" data-why="Согласная d + y → ies."></div>
<div class="mini" data-q="He ___ series in the evening. (watch)" data-o="watchs|watches|watchies" data-a="1" data-why="После ch добавляем -es."></div>`
    },
    {
      title: '4. Как часто: always, usually, often, sometimes, never',
      html: `
<div class="g-idea">Слова «как часто» ставим <b>перед</b> глаголом-действием. Но если глагол — am/is/are, то <b>после</b> него.</div>
<table>
<tr><th>Слово</th><th>Перевод</th><th>Как часто</th></tr>
<tr><td><b>always</b></td><td>всегда</td><td>100%</td></tr>
<tr><td><b>usually</b></td><td>обычно</td><td>~80%</td></tr>
<tr><td><b>often</b></td><td>часто</td><td>~60%</td></tr>
<tr><td><b>sometimes</b></td><td>иногда</td><td>~30%</td></tr>
<tr><td><b>never</b></td><td>никогда</td><td>0%</td></tr>
</table>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">usually</span><span class="g-plus">+</span><span class="g-part">глагол</span><span class="g-sep">·</span><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part">am/is/are</span><span class="g-plus">+</span><span class="g-part g-v">usually</span></div>
<ul class="g-list">
<li><span class="say">I usually get up at seven.</span> — Я обычно встаю в семь.</li>
<li><span class="say">She often plays with friends.</span> — Она часто играет с друзьями.</li>
<li><span class="say">He is always late.</span> — Он всегда опаздывает.</li>
<li><span class="say">I am never tired in the morning.</span> — Я никогда не устаю утром.</li>
</ul>
<div class="g-bad">I get up usually at seven.</div>
<div class="g-good">I usually get up at seven.</div>
<div class="g-bad">He always is late.</div>
<div class="g-good">He is always late.</div>
<p><b>never</b> уже значит «не». Второе «не» не нужно, а глагол у he/she/it всё равно с s:</p>
<div class="g-bad">She never not drinks coffee.</div>
<div class="g-good">She never drinks coffee. — Она никогда не пьёт кофе.</div>
<div class="g-tip">Слово «как часто» встаёт <b>вплотную перед действием</b>: usually <b>get up</b>, never <b>drinks</b>. А am/is/are пропускает вперёд.</div>
<div class="mini" data-q="Правильный порядок:" data-o="We play often games.|We often play games.|Often we games play." data-a="1" data-why="often — прямо перед глаголом play."></div>
<div class="mini" data-q="Правильный порядок:" data-o="She is usually happy.|She usually is happy.|Usually she happy is." data-a="0" data-why="С is слово частоты стоит после него."></div>`
    },
    {
      title: '5. Когда: every day, in the evening, at seven',
      html: `
<div class="g-idea">Present Simple любит слова о времени: <b>когда</b> и <b>как регулярно</b>. Их обычно ставим в <b>конец</b> предложения.</div>
<table>
<tr><th>Английский</th><th>Перевод</th></tr>
<tr><td><b>every</b> day / evening</td><td>каждый день / вечер</td></tr>
<tr><td><b>in the</b> morning / evening</td><td>утром / вечером</td></tr>
<tr><td><b>at</b> night</td><td>ночью</td></tr>
<tr><td><b>at</b> seven</td><td>в семь (часов)</td></tr>
</table>
<ul class="g-list">
<li><span class="say">I drink coffee in the morning.</span> — Я пью кофе утром.</li>
<li><span class="say">Max studies English every day.</span> — Макс учит английский каждый день.</li>
<li><span class="say">We play games at night.</span> — Мы играем в игры ночью.</li>
<li><span class="say">She has breakfast at eight.</span> — Она завтракает в восемь.</li>
</ul>
<div class="g-bad">I every day read.</div>
<div class="g-good">I read every day.</div>
<div class="g-tip">Запомните пары как целое: <b>in the</b> morning, <b>in the</b> evening, но <b>at</b> night. Перед «every» ничего не ставим.</div>
<div class="mini" data-q="Он читает вечером." data-o="He reads in the evening.|He in the evening reads.|He read at the evening." data-a="0" data-why="he → reads; in the evening — в конце."></div>`
    },
    {
      title: '6. Типичные ошибки — проверьте себя',
      html: `
<div class="g-mistakes">
<div class="g-bad">I am work from home.</div><div class="g-good">I <b>work</b> from home.</div>
<div class="g-bad">She live in Moscow.</div><div class="g-good">She <b>lives</b> in Moscow.</div>
<div class="g-bad">They plays games.</div><div class="g-good">They <b>play</b> games.</div>
<div class="g-bad">He haves a dog.</div><div class="g-good">He <b>has</b> a dog.</div>
<div class="g-bad">Anna studys English.</div><div class="g-good">Anna <b>studies</b> English.</div>
<div class="g-bad">He watchs videos.</div><div class="g-good">He <b>watches</b> videos.</div>
<div class="g-bad">I get up usually early.</div><div class="g-good">I <b>usually get up</b> early.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>I / you / we / they work</b> · <b>he / she / it works</b> (goes, watches, studies, <b>has</b>) · always / usually / never — <b>перед</b> глаголом, но <b>после</b> am/is/are.</div>`
    }
  ];
})();
