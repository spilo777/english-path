// Уроки A1 (новая версия): a1-2 — be: отрицания и вопросы, this/that, мн. число, a/an; a1-3 — Present Simple.
(function () {
  const put = (u) => { const i = COURSE.units.findIndex((x) => x.id === u.id); if (i >= 0) COURSE.units[i] = u; else COURSE.units.push(u); };
  [
    // ───────────────────────────── UNIT 2 ─────────────────────────────
    {
      id: 'a1-2', level: 'A1', num: 2, track: 'main',
      books: { red: [2, 43, 65, 66, 74] },
      title: 'Is it? It isn\'t — вопросы и отрицания, this/that',
      summary: 'Как сказать «это не мой телефон», спросить «Ты дома? Кто это?», показать «этот / те» и сказать про один предмет или много.',
      grammar: [
        {
          title: '1. Главная идея: «не» и «?» делает сам глагол be',
          html: `
<div class="g-idea">В русском, чтобы сказать «не» или задать вопрос, мы добавляем «не» или просто меняем интонацию. В английском всю работу делает <b>am / is / are</b>: к нему прилепляем <b>not</b> или ставим его <b>в начало</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я <span class="g-gap">_</span> не устал.</p><p>Ты <span class="g-gap">_</span> дома?</p><p>Это <span class="g-gap">_</span> мой телефон.</p><p>Эти книги <span class="g-gap">_</span> новые.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I am <b>not</b> tired.</span></p><p><span class="say"><b>Are</b> you at home?</span></p><p><span class="say"><b>This</b> is my phone.</span></p><p><span class="say"><b>These</b> book<b>s</b> are new.</span></p></div>
</div>
<p>В этом уроке пять небольших тем:</p>
<ul class="g-list">
<li><b>not</b> — как сказать «не»</li>
<li><b>Are you…?</b> — как задать вопрос и коротко ответить</li>
<li><b>What / Where / Who / How</b> — вопросы со словом-вопросом</li>
<li><b>this / that / these / those</b> — «этот, тот, эти, те»</li>
<li><b>books, men</b> и <b>a / an</b> — один предмет или много</li>
</ul>
<div class="g-tip">Глагол be — «главный» в предложении: и «не», и вопрос всегда крутятся вокруг него. Сам он никуда не исчезает.</div>
<div class="mini" data-q="Как сказать «Я не голоден»?" data-o="I not hungry.|I am not hungry.|I not am hungry." data-a="1" data-why="Глагол am остаётся, not ставим сразу после него."></div>`
        },
        {
          title: '2. Отрицание: am / is / are + not',
          html: `
<div class="g-idea">Чтобы сказать «не», ставим <b>not</b> сразу <b>после</b> am / is / are. Больше ничего не меняется.</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">am / is / are</span><span class="g-plus">+</span><span class="g-part g-v">not</span><span class="g-plus">+</span><span class="g-part">…</span></div>
<p>В разговоре not почти всегда сокращают. У is и are есть <b>два</b> одинаково правильных коротких варианта:</p>
<table>
<tr><th>Полная форма</th><th>Коротко 1</th><th>Коротко 2</th></tr>
<tr><td>I am not</td><td><b>I'm not</b></td><td>—</td></tr>
<tr><td>he / she / it is not</td><td><b>he isn't</b></td><td><b>he's not</b></td></tr>
<tr><td>you / we / they are not</td><td><b>they aren't</b></td><td><b>they're not</b></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I'm not tired.</span> — Я не устал.</li>
<li><span class="say">This laptop isn't new.</span> — Этот ноутбук не новый.</li>
<li><span class="say">It's not expensive.</span> — Это не дорого.</li>
<li><span class="say">My friends aren't here.</span> — Моих друзей здесь нет.</li>
<li><span class="say">We're not at work.</span> — Мы не на работе.</li>
</ul>
<div class="g-bad">I amn't tired.</div>
<div class="g-good">I'm not tired. <span class="muted">— формы «amn't» не бывает</span></div>
<div class="g-bad">She not at home.</div>
<div class="g-good">She isn't at home. <span class="muted">— глагол is не выкидываем</span></div>
<div class="g-tip">«Нет дома», «нет здесь» — по-английски тоже через be: <span class="say">Tom isn't at home.</span> — Тома нет дома. Никакого особого слова для «нет» не нужно.</div>
<div class="mini" data-q="We ___ students. (не)" data-o="isn't|aren't|not" data-a="1" data-why="We → are, отрицание are not = aren't."></div>
<div class="mini" data-q="Какой вариант НЕправильный?" data-o="It isn't cold.|It's not cold.|It not cold." data-a="2" data-why="Без is нельзя: isn't и 's not — оба верны, а просто not — нет."></div>`
        },
        {
          title: '3. Вопрос: am / is / are прыгает вперёд',
          html: `
<div class="g-idea">В вопросе am / is / are <b>меняется местами</b> с тем, кто в начале. Одной интонации мало — нужен порядок слов.</div>
<div class="g-formula"><span class="g-part g-v">Am / Is / Are</span><span class="g-plus">+</span><span class="g-part">кто</span><span class="g-plus">+</span><span class="g-part">…?</span></div>
<table>
<tr><th>Утверждение</th><th>Вопрос</th></tr>
<tr><td>You are at home.</td><td><span class="say">Are you at home?</span></td></tr>
<tr><td>It is expensive.</td><td><span class="say">Is it expensive?</span></td></tr>
<tr><td>I am late.</td><td><span class="say">Am I late?</span></td></tr>
<tr><td>Your friend is a designer.</td><td><span class="say">Is your friend a designer?</span></td></tr>
</table>
<p><b>«Кто» может быть длинным</b> — your friend, this bag, Tom and Anna. Весь этот кусок стоит <b>сразу после</b> is/are и не разрывается:</p>
<div class="g-bad">Is at home your cat?</div>
<div class="g-good">Is your cat at home?</div>
<div class="g-bad">You are tired?</div>
<div class="g-good">Are you tired?</div>
<p><b>Короткие ответы.</b> Не повторяем всё предложение — только кто + тот же глагол:</p>
<table>
<tr><th>Вопрос</th><th>Да</th><th>Нет</th></tr>
<tr><td><span class="say">Are you OK?</span></td><td>Yes, I am.</td><td>No, I'm not.</td></tr>
<tr><td><span class="say">Is it new?</span></td><td>Yes, it is.</td><td>No, it isn't. / No, it's not.</td></tr>
<tr><td><span class="say">Are they here?</span></td><td>Yes, they are.</td><td>No, they aren't. / No, they're not.</td></tr>
</table>
<div class="g-bad">Yes, I'm. / Yes, it's.</div>
<div class="g-good">Yes, I am. / Yes, it is. <span class="muted">— в «да»-ответе в конце не сокращаем</span></div>
<div class="g-tip">Про чужой предмет отвечаем через it или they: <span class="say">Is this bag new? — Yes, it is.</span> <span class="say">Are these books new? — No, they aren't.</span></div>
<div class="mini" data-q="___ your friends at work?" data-o="Is|Are|Am" data-a="1" data-why="your friends — много (they) → are, в вопросе он идёт в начало."></div>
<div class="mini" data-q="Is Tom at work? — No, ___." data-o="he isn't|he not|he aren't" data-a="0" data-why="Короткий ответ тем же глаголом: he is not = he isn't."></div>`
        },
        {
          title: '4. What, Where, Who, How: вопросы со словом-вопросом',
          html: `
<div class="g-idea">Вопросительное слово ставим в <b>самое начало</b>, а дальше — всё как в обычном вопросе: <b>is / are</b> + кто.</div>
<div class="g-formula"><span class="g-part g-v">What / Where / Who / How</span><span class="g-plus">+</span><span class="g-part">is / are</span><span class="g-plus">+</span><span class="g-part">кто?</span></div>
<table>
<tr><th>Слово</th><th>Значит</th><th>Пример</th></tr>
<tr><td><b>what</b></td><td>что, какой</td><td><span class="say">What is this?</span> — Что это?</td></tr>
<tr><td><b>where</b></td><td>где</td><td><span class="say">Where is my phone?</span> — Где мой телефон?</td></tr>
<tr><td><b>who</b></td><td>кто</td><td><span class="say">Who is that man?</span> — Кто тот мужчина?</td></tr>
<tr><td><b>how</b></td><td>как</td><td><span class="say">How are you?</span> — Как ты? Как дела?</td></tr>
</table>
<p>Полезные готовые вопросы — учите их целиком:</p>
<ul class="g-list">
<li><span class="say">What is your name?</span> — Как тебя зовут? <span class="muted">(дословно «Что твоё имя?»)</span></li>
<li><span class="say">Where are you from?</span> — Откуда ты? <span class="muted">(from — в конце!)</span></li>
<li><span class="say">How old are you?</span> — Сколько тебе лет? <span class="muted">(дословно «Насколько ты старый?»)</span></li>
<li><span class="say">Why are you late?</span> — Почему ты опоздал? <span class="muted">(why — почему)</span></li>
</ul>
<p>С is в разговоре почти всегда сливаются: <b>what's, where's, who's, how's</b>.</p>
<ul class="g-list">
<li><span class="say">What's this?</span> — Что это?</li>
<li><span class="say">Where's Anna?</span> — Где Анна?</li>
<li><span class="say">Who's that?</span> — Кто это (там)?</li>
</ul>
<div class="g-bad">How old you are?</div>
<div class="g-good">How old are you? <span class="muted">— после слова-вопроса сначала are, потом you</span></div>
<div class="g-bad">From where are you?</div>
<div class="g-good">Where are you from?</div>
<div class="g-tip">Возраст — через <b>be</b>, а не «иметь»: <span class="say">I am twenty.</span> — Мне двадцать. Дословно: «Я есть двадцать».</div>
<div class="mini" data-q="___ is that woman? — She is my teacher." data-o="What|Who|Where" data-a="1" data-why="Спрашиваем про человека → who."></div>
<div class="mini" data-q="Правильный вопрос:" data-o="Where you are from?|Where are you from?|From where you are?" data-a="1" data-why="Where + are + you, а from уходит в конец."></div>`
        },
        {
          title: '5. this / that / these / those',
          html: `
<div class="g-idea">Эти четыре слова показывают две вещи: <b>близко или далеко</b> и <b>один или много</b>.</div>
<table>
<tr><th></th><th>Близко (здесь)</th><th>Далеко (там)</th></tr>
<tr><td>Один</td><td><b>this</b> — этот, это</td><td><b>that</b> — тот, то</td></tr>
<tr><td>Много</td><td><b>these</b> — эти</td><td><b>those</b> — те</td></tr>
</table>
<p><b>С предметом</b> после них:</p>
<ul class="g-list">
<li><span class="say">This laptop is old.</span> — Этот ноутбук старый. <span class="muted">(он у меня на столе)</span></li>
<li><span class="say">That car is expensive.</span> — Та машина дорогая. <span class="muted">(вон там)</span></li>
<li><span class="say">These apples are cheap.</span> — Эти яблоки дешёвые.</li>
<li><span class="say">Those people are designers.</span> — Те люди — дизайнеры.</li>
</ul>
<p><b>Без предмета</b> — просто «это»:</p>
<ul class="g-list">
<li><span class="say">This is my room.</span> — Это моя комната.</li>
<li><span class="say">Is that your bag?</span> — Это (вон там) твоя сумка?</li>
<li><span class="say">Who's that?</span> — Кто это (там)?</li>
</ul>
<p><b>Три живые ситуации:</b></p>
<table>
<tr><th>Ситуация</th><th>Как сказать</th></tr>
<tr><td>Знакомим людей</td><td><span class="say">Anna, this is Max.</span> — Анна, это Макс.</td></tr>
<tr><td>По телефону</td><td><span class="say">Hi, this is Ilya. Is that Tom?</span> — Привет, это Илья. Это Том? <span class="muted">(this — я, that — собеседник)</span></td></tr>
<tr><td>Ответ на чужие слова</td><td><span class="say">I'm from London. — Oh, that's nice!</span> — О, как здорово! <span class="say">That's right.</span> — Верно. <span class="muted">(right — правильный)</span></td></tr>
</table>
<div class="g-bad">This books are new.</div>
<div class="g-good">These books are new. <span class="muted">— книг много → these</span></div>
<div class="g-tip">Длинные слова — для многого: <b>th-ese</b>, <b>th-ose</b> длиннее, чем this и that. Больше букв — больше предметов.</div>
<div class="mini" data-q="___ are my friends. (там, много)" data-o="That|These|Those" data-a="2" data-why="Далеко + много → those."></div>
<div class="mini" data-q="Знакомим: «Tom, ___ is Anna.»" data-o="this|these|those" data-a="0" data-why="Представляем одного человека рядом → this is…"></div>`
        },
        {
          title: '6. Много: book → books',
          html: `
<div class="g-idea">Чтобы сказать про много предметов, обычно добавляем в конце <b>-s</b>. Как русское «-ы/-и», только почти всегда одинаково.</div>
<div class="g-steps"><div class="g-h">Как сделать множественное число</div><ol>
<li>Обычно + <b>s</b>: book → <span class="say">books</span>, phone → <span class="say">phones</span>, car → <span class="say">cars</span>.</li>
<li>Кончается на <b>s, sh, ch, x</b> → + <b>es</b>: box → <span class="say">boxes</span>, bus (автобус) → <span class="say">buses</span>.</li>
<li>Согласная + <b>y</b> → <b>ies</b>: city (город) → <span class="say">cities</span>. Но гласная + y — просто s: boy (мальчик) → <span class="say">boys</span>.</li>
<li>Многие слова на <b>f / fe</b> → <b>ves</b>: knife (нож) → <span class="say">knives</span>, wife (жена) → <span class="say">wives</span>.</li>
</ol></div>
<p><b>Особые слова</b> — без -s, их просто запоминаем:</p>
<table>
<tr><th>Один</th><th>Много</th><th>Перевод</th></tr>
<tr><td>man</td><td><span class="say">men</span></td><td>мужчины</td></tr>
<tr><td>woman</td><td><span class="say">women</span></td><td>женщины</td></tr>
<tr><td>child</td><td><span class="say">children</span></td><td>дети</td></tr>
<tr><td>person</td><td><span class="say">people</span></td><td>люди</td></tr>
<tr><td>foot / tooth</td><td><span class="say">feet / teeth</span></td><td>ступни / зубы</td></tr>
<tr><td>fish / sheep</td><td><span class="say">fish / sheep</span></td><td>рыбы / овцы <span class="muted">(не меняются)</span></td></tr>
</table>
<p><b>people</b> — это уже «много» (они). Значит, после него <b>are</b>:</p>
<div class="g-bad">These people is nice. / These peoples are nice.</div>
<div class="g-good">These people are nice.</div>
<p>Есть слова, которые <b>всегда</b> во множественном — даже если предмет один: <b>jeans</b> (джинсы), <b>glasses</b> (очки). <span class="say">My jeans are new.</span> — Мои джинсы новые.</p>
<div class="g-tip">Много предметов — значит <b>they</b>, а после they всегда <b>are</b>: <span class="say">My books are on the table.</span></div>
<div class="mini" data-q="one box — two ___" data-o="boxs|boxes|boxies" data-a="1" data-why="После x добавляем -es."></div>
<div class="mini" data-q="one child — two ___" data-o="childs|childes|children" data-a="2" data-why="Особое слово: child → children."></div>`
        },
        {
          title: '7. a / an — «один, какой-то»',
          html: `
<div class="g-idea"><b>a / an</b> — это остаток слова «one» (один). Ставим его перед <b>одним</b> предметом или человеком, когда говорим, <b>что это</b> или <b>кто это</b>. На русский не переводится.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Это <span class="g-gap">_</span> яблоко.</p><p>Она <span class="g-gap">_</span> учитель.</p><p>Это <span class="g-gap">_</span> яблоки.</p></div>
  <div><div class="g-h">English</div><p><span class="say">It's <b>an</b> apple.</span></p><p><span class="say">She's <b>a</b> teacher.</span></p><p><span class="say">They're apples.</span> <span class="muted">(много — без a)</span></p></div>
</div>
<p>Когда ставим a/an:</p>
<ul class="g-list">
<li><b>Что это за предмет:</b> <span class="say">This is a laptop.</span> — Это ноутбук.</li>
<li><b>Кто человек, профессия:</b> <span class="say">Max is a designer.</span> — Макс дизайнер.</li>
<li><b>Предмет + какой:</b> <span class="say">It's a big house.</span> — Это большой дом. <span class="say">He's a nice man.</span> — Он приятный мужчина.</li>
</ul>
<div class="g-formula"><span class="g-part g-v">a</span> + согласный звук: a phone, a bag, a new car <span class="g-sep">·</span> <span class="g-part g-v">an</span> + гласный звук: an apple, an old car, an expensive bag</div>
<p>Важен <b>звук</b>, а не буква. Поэтому <b>an</b> hour (час — h не читается) и <b>a</b> university (университет — звучит «ю»).</p>
<div class="g-bad">It is apple. / She is teacher.</div>
<div class="g-good">It is an apple. / She is a teacher. <span class="muted">— один предмет или человек → нужен a/an</span></div>
<div class="g-bad">These are a books.</div>
<div class="g-good">These are books. <span class="muted">— a значит «один», с множественным не ставим</span></div>
<div class="g-tip">Если перед предметом уже стоит <b>my, your, this, that</b> — a/an не нужен: <span class="say">This is my bag.</span>, а не «a my bag».</div>
<div class="mini" data-q="It is ___ old house." data-o="a|an|—" data-a="1" data-why="old начинается с гласного звука → an."></div>
<div class="mini" data-q="Those are ___ cats." data-o="a|an|—" data-a="2" data-why="cats — много, a/an не ставим."></div>`
        },
        {
          title: '8. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">I amn't hungry.</div><div class="g-good">I<b>'m not</b> hungry.</div>
<div class="g-bad">She not at home.</div><div class="g-good">She <b>isn't</b> at home.</div>
<div class="g-bad">You are tired?</div><div class="g-good"><b>Are you</b> tired?</div>
<div class="g-bad">Is at home your cat?</div><div class="g-good">Is <b>your cat</b> at home?</div>
<div class="g-bad">Yes, I'm.</div><div class="g-good">Yes, I <b>am</b>.</div>
<div class="g-bad">How old you are?</div><div class="g-good">How old <b>are you</b>?</div>
<div class="g-bad">This games are new.</div><div class="g-good"><b>These</b> games are new.</div>
<div class="g-bad">two childs, three mans</div><div class="g-good">two <b>children</b>, three <b>men</b></div>
<div class="g-bad">These people is nice.</div><div class="g-good">These people <b>are</b> nice.</div>
<div class="g-bad">It is a apple.</div><div class="g-good">It is <b>an</b> apple.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>not</b> — после am/is/are, в вопросе <b>am/is/are</b> — вперёд (What/Where/Who — ещё раньше); <b>this/that</b> — один, <b>these/those</b> — много; много = <b>-s</b>, один = <b>a/an</b>.</div>`
        }
      ],
      words: [
        ['this', 'этот, это (близко)', 'This is my room.', 'Это моя комната.'],
        ['that', 'тот, то (далеко)', 'That is a big house.', 'Вон то — большой дом.'],
        ['these', 'эти', 'These books are new.', 'Эти книги новые.'],
        ['those', 'те', 'Those people are my friends.', 'Те люди — мои друзья.'],
        ['not', 'не', 'It is not my phone.', 'Это не мой телефон.'],
        ['what', 'что, какой', 'What is this?', 'Что это?'],
        ['where', 'где', 'Where are you?', 'Где ты?'],
        ['who', 'кто', 'Who is that man?', 'Кто тот мужчина?'],
        ['here', 'здесь, сюда', 'I am here.', 'Я здесь.'],
        ['there', 'там, туда', 'Your bag is there.', 'Твоя сумка там.'],
        ['phone', 'телефон', 'Where is my phone?', 'Где мой телефон?'],
        ['book', 'книга', 'This book is good.', 'Эта книга хорошая.'],
        ['table', 'стол', 'The phone is on the table.', 'Телефон на столе.'],
        ['chair', 'стул', 'This chair is old.', 'Этот стул старый.'],
        ['room', 'комната', 'My room is small.', 'Моя комната маленькая.'],
        ['house', 'дом (здание)', 'That house is very big.', 'Тот дом очень большой.'],
        ['car', 'машина', 'Is that your car?', 'Это твоя машина?'],
        ['cat', 'кошка, кот', 'The cat is on the chair.', 'Кот на стуле.'],
        ['dog', 'собака', 'My dog is small and nice.', 'Моя собака маленькая и милая.'],
        ['apple', 'яблоко', 'An apple, please.', 'Яблоко, пожалуйста.'],
        ['box', 'коробка', 'My cat is in the box.', 'Мой кот в коробке.'],
        ['big', 'большой', 'It is a big room.', 'Это большая комната.'],
        ['small', 'маленький', 'The room is small.', 'Комната маленькая.'],
        ['new', 'новый', 'Is this laptop new?', 'Этот ноутбук новый?'],
        ['old', 'старый', 'My laptop is old.', 'Мой ноутбук старый.'],
        ['expensive', 'дорогой', 'This phone is expensive.', 'Этот телефон дорогой.'],
        ['cheap', 'дешёвый', 'This bag is cheap.', 'Эта сумка дешёвая.'],
        ['hot', 'горячий, жаркий', 'The coffee is hot.', 'Кофе горячий.'],
        ['cold', 'холодный', 'It is cold here.', 'Здесь холодно.'],
        ['on', 'на', 'The book is on the table.', 'Книга на столе.'],
        ['in', 'в', 'The cat is in the box.', 'Кот в коробке.'],
        ['people', 'люди', 'Those people are nice.', 'Те люди приятные.'],
        ['child — children', 'ребёнок — дети', 'These children are very nice.', 'Эти дети очень милые.'],
        ['laptop', 'ноутбук', 'My laptop is on the table.', 'Мой ноутбук на столе.'],
        ['bag', 'сумка, рюкзак', 'Is this your bag?', 'Это твоя сумка?']
      ],
      texts: [
        {
          id: 't-a1-2-1', title: 'My room', level: 'A1',
          text: `This is my room. It isn't big, but it's nice. It's my office too.
This is my table, and that is my chair. The chair is new. It isn't cheap! My laptop is on the table. It's old, but it's good.
These are my books. They're in English. Are they new? No, they aren't. They're old books, but they're very good.
What is that in the box? Is it a bag? No, it isn't. It's my cat! My cat is small and very nice. It is always in the box.
Where are my friends now? They aren't here. Max and Anna are at work. I'm at home. I'm not tired, and I'm not hungry. I'm happy here.
Is my room big? No, it isn't. Is it a good room? Yes, it is!`,
          questions: [
            { q: 'Is the room big?', o: ['Yes, it is.', 'No, it isn\'t.', 'Yes, they are.'], a: 1 },
            { q: 'Where is the laptop?', o: ['on the table', 'in the box', 'on the chair'], a: 0 },
            { q: 'What is in the box?', o: ['a bag', 'a book', 'a cat'], a: 2 }
          ]
        },
        {
          id: 't-a1-2-2', title: 'Where is my phone?', level: 'A1',
          text: `Anna: Tom, where is my phone?
Tom: Is it in your bag?
Anna: No, it isn't. My bag is here, but my phone isn't in it.
Tom: Is it on the table?
Anna: No, it isn't. These are my books, and that's my laptop. But where's my phone?
Tom: What's that on the chair? Is that your phone?
Anna: That? No, that's your phone, Tom. It's new. My phone is old.
Tom: Oh, yes. Sorry! Is your phone in the car?
Anna: The car? Yes! It's in the car. Thank you, Tom!
Tom: No problem. Now, where are my apples? They aren't in the box!
Anna: Those apples? They're in my bag. Sorry, Tom! I'm very hungry!
Tom: That's OK. Apples are cheap!`,
          questions: [
            { q: 'What is on the chair?', o: ['a new phone', 'an old phone', 'a laptop'], a: 0 },
            { q: 'Where is the old phone?', o: ['in the bag', 'on the table', 'in the car'], a: 2 },
            { q: 'Where are the apples?', o: ['in the box', 'in a bag', 'on the table'], a: 1 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: '___ at work now. (Я не…)', o: ['I amn\'t', 'I\'m not', 'I isn\'t'], a: 1, why: 'Формы amn\'t нет: I am not = I\'m not.' },
        { t: 'choice', q: '___ your friend a designer?', o: ['Are', 'Is', 'Am'], a: 1, why: 'your friend — один человек (he/she) → is, в вопросе is идёт в начало.' },
        { t: 'choice', q: 'Выберите правильный вопрос:', o: ['Is at home your cat?', 'Is your cat at home?', 'Your cat at home is?'], a: 1, why: 'Is + кто (your cat) + остальное; «кто» не разрываем.' },
        { t: 'choice', q: 'Are you tired? — Yes, ___.', o: ['I\'m', 'I am', 'I are'], a: 1, why: 'В конце «да»-ответа не сокращаем: Yes, I am.' },
        { t: 'choice', q: '___ is that man? — He is my teacher.', o: ['What', 'Who', 'Where'], a: 1, why: 'Спрашиваем о человеке → who.' },
        { t: 'choice', q: '___ are my books. (у меня в руках)', o: ['This', 'These', 'Those'], a: 1, why: 'Близко + много → these.' },
        { t: 'choice', q: 'one box — two ___', o: ['boxs', 'boxes', 'boxies'], a: 1, why: 'После x добавляем -es.' },
        { t: 'choice', q: 'It is ___ old laptop.', o: ['a', 'an', '—'], a: 1, why: 'old начинается с гласного звука → an.' },
        { t: 'gap', q: 'My friends ___ at home. (не)', a: ['aren\'t', 'are not'], why: 'My friends = they → are not = aren\'t.' },
        { t: 'gap', q: 'Is the room big? — No, it ___.', a: ['isn\'t', 'is not'], why: 'Короткий ответ тем же глаголом: it is not = it isn\'t.' },
        { t: 'gap', q: '___ are you from? — From Kazan.', a: ['where'], why: 'Спрашиваем «откуда» → Where … from?' },
        { t: 'gap', q: 'one child — two ___', a: ['children'], why: 'Особое слово: child → children.' },
        { t: 'gap', q: 'one woman — two ___', a: ['women'], why: 'Особое слово: woman → women (меняется гласная, без -s).' },
        { t: 'gap', q: 'Hi, Tom! ___ is Anna. She is my friend. (знакомим)', a: ['this'], why: 'Когда знакомим людей, говорим This is …' },
        { t: 'order', a: 'Is your laptop on the table', ru: 'Твой ноутбук на столе?' },
        { t: 'order', a: 'Those people are not my friends', ru: 'Те люди — не мои друзья' },
        { t: 'tr', q: 'Ты дома?', a: ['are you at home', 'are you home'] },
        { t: 'tr', q: 'Эти яблоки не дорогие.', a: ['these apples are not expensive', 'these apples aren\'t expensive', 'these apples\'re not expensive'] },
        { t: 'listen', say: 'Where is my bag?', a: ['where is my bag', 'where\'s my bag'] },
        { t: 'listen', say: 'These children are hungry', a: ['these children are hungry'] }
      ],
      test: [
        { t: 'choice', q: 'This laptop ___ new. (не)', o: ['isn\'t', 'aren\'t', 'not'], a: 0, why: 'This laptop — один предмет (it) → is not = isn\'t.' },
        { t: 'choice', q: '___ your friends at work?', o: ['Is', 'Are', 'Am'], a: 1, why: 'your friends — много (they) → are в начале вопроса.' },
        { t: 'choice', q: 'Is Max a teacher? — No, ___.', o: ['he not', 'he\'s not', 'he aren\'t'], a: 1, why: 'he is not = he\'s not (или he isn\'t): глагол is не пропускаем.' },
        { t: 'choice', q: '___ old are you? — I am twenty.', o: ['What', 'How', 'Who'], a: 1, why: 'Возраст спрашиваем How old…?' },
        { t: 'choice', q: '___ cats in the car are big. (там, много)', o: ['That', 'These', 'Those'], a: 2, why: 'Далеко + много → those.' },
        { t: 'choice', q: 'one man — two ___', o: ['mans', 'men', 'mens'], a: 1, why: 'Особое слово: man → men, без -s.' },
        { t: 'choice', q: 'Выберите правильное предложение:', o: ['These are a books.', 'These are books.', 'These is books.'], a: 1, why: 'Много → are и без a (a значит «один»).' },
        { t: 'gap', q: 'Those people ___ my friends. (be)', a: ['are'], why: 'people — это много (они) → are.' },
        { t: 'gap', q: '___ is this? — It is an apple.', a: ['what'], why: 'Спрашиваем о предмете → what.' },
        { t: 'gap', q: 'Are these your books? — Yes, they ___.', a: ['are'], why: 'these books = they → Yes, they are (без сокращения в конце).' },
        { t: 'gap', q: 'My dog is ___ small dog. (a / an)', a: ['a'], why: 'small начинается с согласного звука → a.' },
        { t: 'gap', q: 'I ___ a teacher. I am a designer. (не)', a: ['am not', '\'m not'], why: 'Отрицание с I — только am not (I\'m not).' }
      ]
    },

    // ───────────────────────────── UNIT 3 ─────────────────────────────
    {
      id: 'a1-3', level: 'A1', num: 3, track: 'main',
      books: { red: [5] },
      title: 'I work, she works — Present Simple',
      summary: 'Как рассказать о привычках, работе и распорядке дня: I work, she works, always / usually / never.',
      grammar: [
        {
          title: '1. Главная идея: «обычно, всегда, каждый день»',
          html: `
<div class="g-idea"><b>Present Simple</b> (простое настоящее время) — для того, что бывает <b>регулярно</b> или <b>верно вообще</b>: привычки, работа, распорядок дня, факты. Не «прямо сейчас», а «вообще, обычно».</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я работаю из дома.</p><p>Она играет в игры каждый вечер.</p><p>Кошки любят коробки.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I work from home.</span></p><p><span class="say">She plays games every evening.</span></p><p><span class="say">Cats love boxes.</span></p></div>
</div>
<p>Хорошая новость: тут <b>не нужен</b> am / is / are. Глагол-действие сам по себе и есть глагол предложения.</p>
<div class="g-bad">I am work from home.</div>
<div class="g-good">I work from home.</div>
<div class="g-tip">Правило из прошлых уроков: в предложении обязательно есть глагол. Если есть действие (work, play, read) — оно и есть глагол, и <b>am/is/are</b> ему не нужен.</div>
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
<p>То же самое — с <b>любым именем</b> и с <b>одним</b> человеком или предметом (всё, что можно заменить на he / she / it). А <b>много</b> людей или предметов (they) — без s:</p>
<table>
<tr><th>Один → + s</th><th>Много → без s</th></tr>
<tr><td><span class="say">Max works from home.</span></td><td><span class="say">Max and Anna work from home.</span></td></tr>
<tr><td><span class="say">My friend lives in London.</span></td><td><span class="say">My friends live in London.</span></td></tr>
<tr><td><span class="say">My cat sleeps on the chair.</span></td><td><span class="say">These cats sleep in a box.</span></td></tr>
<tr><td><span class="say">This child speaks English.</span></td><td><span class="say">People speak English here.</span></td></tr>
</table>
<div class="g-bad">She work in an office.</div>
<div class="g-good">She work<b>s</b> in an office.</div>
<div class="g-bad">They plays games. / People speaks English.</div>
<div class="g-good">They play games. / People speak English. <span class="muted">— s только у одного</span></div>
<div class="g-tip">Запоминалка: <b>«он, она, оно — хвостик s»</b>. Одна s у одного. Не путайте с множественным числом: у <i>предметов</i> s значит «много» (books), а у <i>глагола</i> s значит «один» (works).</div>
<div class="mini" data-q="Tom ___ English." data-o="speak|speaks|is speak" data-a="1" data-why="Tom = he → speak + s."></div>
<div class="mini" data-q="My friends ___ games at night." data-o="play|plays|are play" data-a="0" data-why="My friends = they → без s и без are."></div>`
        },
        {
          title: '3. Как пишется: -s, -es или -ies',
          html: `
<div class="g-idea">Почти всегда просто <b>+s</b>. Но есть несколько маленьких правил написания — те же, что у множественного числа (box → boxes, city → cities).</div>
<div class="g-steps"><div class="g-h">Смотрим на конец глагола</div><ol>
<li>Обычно → <b>+ s</b>: work → <span class="say">works</span>, read → <span class="say">reads</span>, like → <span class="say">likes</span>.</li>
<li>Кончается на <b>s, sh, ch, x</b> → <b>+ es</b>: watch → <span class="say">watches</span>, finish (заканчивать) → <span class="say">finishes</span>.</li>
<li>Два коротких глагола на <b>o</b> → <b>+ es</b>: go → <span class="say">goes</span>, do → <span class="say">does</span>.</li>
<li><b>Согласная + y</b> → y меняем на <b>ies</b>: study → <span class="say">studies</span>, try (пробовать) → <span class="say">tries</span>.</li>
<li>Но <b>гласная + y</b> → просто s: play → <span class="say">plays</span>.</li>
</ol></div>
<table>
<tr><th>Глагол</th><th>he / she / it</th><th>Почему</th></tr>
<tr><td>live</td><td><b>lives</b></td><td>+ s</td></tr>
<tr><td>watch</td><td><b>watches</b></td><td>ch → es</td></tr>
<tr><td>go / do</td><td><b>goes / does</b></td><td>o → es</td></tr>
<tr><td>study</td><td><b>studies</b></td><td>d + y → ies</td></tr>
<tr><td>play</td><td><b>plays</b></td><td>a + y → s</td></tr>
<tr><td>have</td><td><b>has</b></td><td>исключение</td></tr>
</table>
<p><b>have → has</b> — единственное настоящее исключение. Оно очень частое: <span class="say">She has a dog.</span> — У неё есть собака. <span class="say">He has breakfast at eight.</span> — Он завтракает в восемь.</p>
<div class="g-bad">He haves a new laptop.</div>
<div class="g-good">He <b>has</b> a new laptop.</div>
<div class="g-bad">She playes games. / She plaies games.</div>
<div class="g-good">She <b>plays</b> games.</div>
<div class="mini" data-q="Anna ___ English every day. (study)" data-o="studys|studies|studyes" data-a="1" data-why="Согласная d + y → ies."></div>
<div class="mini" data-q="Max ___ a big table. (have)" data-o="haves|has|have" data-a="1" data-why="have у he/she/it → has."></div>`
        },
        {
          title: '4. Как звучит -s: [s], [z] или [iz]',
          html: `
<div class="g-idea">На письме хвостик один, а звучит он по-разному. Русскоговорящие часто говорят везде глухое «с» — привыкайте к трём вариантам.</div>
<table>
<tr><th>Звук</th><th>Когда</th><th>Примеры</th></tr>
<tr><td><b>[s]</b></td><td>после глухих: k, p, t, f</td><td><span class="say">works</span>, <span class="say">likes</span>, <span class="say">gets up</span></td></tr>
<tr><td><b>[z]</b></td><td>после звонких и гласных</td><td><span class="say">plays</span>, <span class="say">lives</span>, <span class="say">reads</span>, <span class="say">goes</span></td></tr>
<tr><td><b>[iz]</b></td><td>после s, sh, ch, x — лишний слог</td><td><span class="say">watches</span>, <span class="say">finishes</span></td></tr>
</table>
<p>Два глагола меняют ещё и гласный звук: <span class="say">does</span> — «даз», <span class="say">says</span> (говорит) — «сэз».</p>
<div class="g-tip">Правило то же, что у слов во множественном числе: <span class="say">books</span> [s], <span class="say">phones</span> [z], <span class="say">boxes</span> [iz]. Выучили одно — знаете и другое.</div>
<div class="mini" data-q="Как звучит окончание в watches?" data-o="[s]|[z]|[iz]" data-a="2" data-why="После ch появляется лишний слог [iz]."></div>`
        },
        {
          title: '5. Когда нужен: привычки, работа, факты, чувства',
          html: `
<div class="g-idea">Present Simple — это «моя обычная жизнь» и «так устроен мир». Четыре главные ситуации:</div>
<table>
<tr><th>Что</th><th>Пример</th></tr>
<tr><td>Привычки, распорядок</td><td><span class="say">I get up at seven.</span> — Я встаю в семь.</td></tr>
<tr><td>Работа, где живём</td><td><span class="say">Anna works in an office. She lives in Kazan.</span></td></tr>
<tr><td>Факты</td><td><span class="say">Children love games.</span> — Дети любят игры. <span class="say">People in London speak English.</span></td></tr>
<tr><td>Чувства и желания</td><td><span class="say">I like this game.</span> <span class="say">She wants a new phone.</span></td></tr>
</table>
<p>Со словами <b>like, love, want</b> особенно часто ошибаются — по-русски «мне нравится», и кажется, что нужен ещё один глагол:</p>
<div class="g-bad">I am like this game. / Me like this game.</div>
<div class="g-good">I like this game. — Мне нравится эта игра.</div>
<div class="g-bad">She want a coffee.</div>
<div class="g-good">She wants a coffee. <span class="muted">— и здесь he/she/it + s</span></div>
<div class="g-tip">«Мне нравится» по-английски — «Я люблю-слабо»: <b>I like</b>. Тот, кому нравится, всегда стоит в начале: <span class="say">Max likes coffee.</span> — Максу нравится кофе.</div>
<div class="mini" data-q="Ему нравится эта игра." data-o="He likes this game.|He is like this game.|Him like this game." data-a="0" data-why="like — обычный глагол: He + likes, без is."></div>`
        },
        {
          title: '6. Как часто: always, usually, often, sometimes, never',
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
<li><span class="say">We sometimes eat at the office.</span> — Мы иногда едим в офисе.</li>
<li><span class="say">He is always late.</span> — Он всегда опаздывает.</li>
<li><span class="say">I am never tired in the morning.</span> — Я никогда не устаю по утрам.</li>
</ul>
<div class="g-bad">I get up usually at seven.</div>
<div class="g-good">I usually get up at seven.</div>
<div class="g-bad">He always is late.</div>
<div class="g-good">He is always late.</div>
<p><b>never</b> уже значит «не». Второе «не» не нужно, а глагол у he/she/it всё равно с s:</p>
<div class="g-bad">She never not drinks coffee.</div>
<div class="g-good">She never drinks coffee. — Она никогда не пьёт кофе.</div>
<div class="g-tip">Слово «как часто» встаёт <b>вплотную перед действием</b>: usually <b>get up</b>, never <b>drinks</b>. А am/is/are пропускает вперёд. Как «не» в прошлом уроке: <i>is not</i> — <i>is never</i>.</div>
<div class="mini" data-q="Правильный порядок:" data-o="We play often games.|We often play games.|Often we games play." data-a="1" data-why="often — прямо перед глаголом play."></div>
<div class="mini" data-q="Правильный порядок:" data-o="She is usually happy.|She usually is happy.|Usually she happy is." data-a="0" data-why="С is слово частоты стоит после него."></div>`
        },
        {
          title: '7. Когда: every day, in the morning, at seven',
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
<div class="g-bad">He goes to work in seven.</div>
<div class="g-good">He goes to work at seven. <span class="muted">— время по часам — at</span></div>
<div class="g-tip">Запомните пары как целое: <b>in the</b> morning, <b>in the</b> evening, но <b>at</b> night. Перед «every» ничего не ставим.</div>
<div class="mini" data-q="Он читает вечером." data-o="He reads in the evening.|He in the evening reads.|He read at the evening." data-a="0" data-why="he → reads; in the evening — в конце."></div>`
        },
        {
          title: '8. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">I am work from home.</div><div class="g-good">I <b>work</b> from home.</div>
<div class="g-bad">She live in Moscow.</div><div class="g-good">She <b>lives</b> in Moscow.</div>
<div class="g-bad">They plays games.</div><div class="g-good">They <b>play</b> games.</div>
<div class="g-bad">People speaks English.</div><div class="g-good">People <b>speak</b> English.</div>
<div class="g-bad">He haves a dog.</div><div class="g-good">He <b>has</b> a dog.</div>
<div class="g-bad">Anna studys English.</div><div class="g-good">Anna <b>studies</b> English.</div>
<div class="g-bad">He watchs videos.</div><div class="g-good">He <b>watches</b> videos.</div>
<div class="g-bad">I am like this game.</div><div class="g-good">I <b>like</b> this game.</div>
<div class="g-bad">I get up usually early.</div><div class="g-good">I <b>usually get up</b> early.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>I / you / we / they work</b> · <b>he / she / it works</b> (goes, watches, studies, <b>has</b>) · always / usually / never — <b>перед</b> глаголом, но <b>после</b> am/is/are.</div>`
        }
      ],
      words: [
        ['work', 'работать; работа', 'I work from home.', 'Я работаю из дома.'],
        ['live', 'жить', 'She lives in Moscow.', 'Она живёт в Москве.'],
        ['play', 'играть', 'We play games at night.', 'Мы играем в игры ночью.'],
        ['read', 'читать', 'He reads every evening.', 'Он читает каждый вечер.'],
        ['watch', 'смотреть (видео, фильм)', 'He watches videos in the evening.', 'Он смотрит видео вечером.'],
        ['drink', 'пить', 'I drink coffee in the morning.', 'Я пью кофе утром.'],
        ['eat', 'есть, кушать', 'We eat at home.', 'Мы едим дома.'],
        ['go', 'идти, ехать (he goes)', 'She goes to work at eight.', 'Она идёт на работу в восемь.'],
        ['get up', 'вставать (с кровати)', 'I get up at seven.', 'Я встаю в семь.'],
        ['sleep', 'спать', 'The cat sleeps on my chair.', 'Кот спит на моём стуле.'],
        ['like', 'нравиться, любить', 'I like this game.', 'Мне нравится эта игра.'],
        ['love', 'любить, обожать', 'She loves cats.', 'Она обожает кошек.'],
        ['want', 'хотеть', 'I want a new laptop.', 'Я хочу новый ноутбук.'],
        ['speak', 'говорить (на языке)', 'He speaks English.', 'Он говорит по-английски.'],
        ['have', 'иметь, у меня есть (he has)', 'She has a dog.', 'У неё есть собака.'],
        ['do', 'делать (he does)', 'He does the work at night.', 'Он делает работу ночью.'],
        ['study', 'учиться, изучать (he studies)', 'Anna studies English every day.', 'Анна учит английский каждый день.'],
        ['English', 'английский язык', 'My friends speak English.', 'Мои друзья говорят по-английски.'],
        ['coffee', 'кофе', 'Max drinks coffee in the morning.', 'Макс пьёт кофе утром.'],
        ['tea', 'чай', 'I like hot tea.', 'Я люблю горячий чай.'],
        ['breakfast', 'завтрак', 'I have breakfast at eight.', 'Я завтракаю в восемь.'],
        ['game', 'игра', 'This game is new.', 'Эта игра новая.'],
        ['video', 'видео', 'She watches videos in English.', 'Она смотрит видео на английском.'],
        ['every day', 'каждый день', 'I read every day.', 'Я читаю каждый день.'],
        ['morning', 'утро', 'Good morning!', 'Доброе утро!'],
        ['evening', 'вечер', 'In the evening I play games.', 'Вечером я играю в игры.'],
        ['night', 'ночь', 'Good night!', 'Спокойной ночи!'],
        ['office', 'офис', 'He works in an office.', 'Он работает в офисе.'],
        ['always', 'всегда', 'She is always happy.', 'Она всегда весёлая.'],
        ['usually', 'обычно', 'I usually get up early.', 'Я обычно встаю рано.'],
        ['often', 'часто', 'We often play games.', 'Мы часто играем в игры.'],
        ['sometimes', 'иногда', 'I sometimes drink tea.', 'Я иногда пью чай.'],
        ['never', 'никогда', 'He never has breakfast.', 'Он никогда не завтракает.'],
        ['early', 'рано', 'I get up early.', 'Я встаю рано.']
      ],
      texts: [
        {
          id: 't-a1-3-1', title: 'Max, a designer', level: 'A1',
          text: `This is Max. He is a designer, and he lives in Kazan. He works from home.
Max usually gets up at seven. He drinks coffee and has breakfast at eight. He never has a big breakfast.
At nine he works. He has a big table and a new laptop. He likes the work, and he is never late!
In the evening Max plays games. He often plays with friends from London. They speak English in the game, so Max studies English every day. He reads books in English and watches videos.
Tom is a friend from London. He works in an office. He gets up early and goes to work at eight. He sometimes plays with Max at night.
At night Max is tired, but he is happy. He usually goes to sleep at twelve.`,
          questions: [
            { q: 'Max works…', o: ['in an office', 'from home', 'in London'], a: 1 },
            { q: 'In the evening Max usually…', o: ['plays games', 'goes to work', 'has breakfast'], a: 0 },
            { q: 'Who works in an office?', o: ['Max', 'Tom', 'Anna'], a: 1 }
          ]
        },
        {
          id: 't-a1-3-2', title: 'My cat', level: 'A1',
          text: `I have a cat. It is small and old, and it is very nice.
My cat sleeps in the morning, in the evening and at night! It sleeps on my chair, on my bag and on my laptop.
It eats at seven in the morning and at seven in the evening. But it is always hungry!
My cat loves boxes. It often sleeps in a box on the table. It never sleeps in the new cat house. The cat house is expensive, but the box is cheap. Cats!
In the evening I play games, and my cat watches the game. Sometimes it plays too.
My friend Anna has a dog. The dog is big, and it loves people. It often plays with children.
Anna likes cats, and I like dogs. But the cat and the dog are not friends!`,
          questions: [
            { q: 'The cat often sleeps…', o: ['in a box', 'in the car', 'in the office'], a: 0 },
            { q: 'The cat is always…', o: ['tired', 'hungry', 'late'], a: 1 },
            { q: 'Who has a dog?', o: ['Anna', 'Max', 'Tom'], a: 0 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: 'My friend ___ in London.', o: ['live', 'lives', 'is live'], a: 1, why: 'My friend — один (he/she) → live + s.' },
        { t: 'choice', q: 'My friends ___ in London.', o: ['live', 'lives', 'are live'], a: 0, why: 'My friends — много (they) → без s и без are.' },
        { t: 'choice', q: 'I ___ coffee every morning.', o: ['am drink', 'drink', 'drinks'], a: 1, why: 'Есть глагол-действие — am не нужен; у I без s.' },
        { t: 'choice', q: 'Anna ___ English every day.', o: ['studys', 'studies', 'studyes'], a: 1, why: 'Согласная + y → ies: studies.' },
        { t: 'choice', q: 'Max ___ a new laptop.', o: ['have', 'haves', 'has'], a: 2, why: 'have у he/she/it → has.' },
        { t: 'choice', q: 'Правильный порядок:', o: ['She gets up usually at seven.', 'She usually gets up at seven.', 'She usually get up at seven.'], a: 1, why: 'usually — перед глаголом, а у she глагол с s.' },
        { t: 'choice', q: 'Правильный порядок:', o: ['I am often tired in the evening.', 'I often tired am in the evening.', 'Often I tired in the evening.'], a: 0, why: 'С am слово частоты стоит после него.' },
        { t: 'choice', q: 'Как звучит окончание в «plays»?', o: ['[s]', '[z]', '[iz]'], a: 1, why: 'После гласного звука -s звучит звонко: [z].' },
        { t: 'gap', q: 'He ___ videos in the evening. (watch)', a: ['watches'], why: 'После ch добавляем -es.' },
        { t: 'gap', q: 'She ___ to work at eight. (go)', a: ['goes'], why: 'go → goes: после o добавляем -es.' },
        { t: 'gap', q: 'My cat ___ on my bag. (sleep)', a: ['sleeps'], why: 'My cat = it → + s.' },
        { t: 'gap', q: 'Tom and Anna ___ games at night. (play)', a: ['play'], why: 'Tom and Anna = they → без s.' },
        { t: 'gap', q: 'She ___ the work at home. (do)', a: ['does'], why: 'do у he/she/it → does.' },
        { t: 'gap', q: 'He never ___ breakfast. (have)', a: ['has'], why: 'never не меняет глагол: he + has.' },
        { t: 'order', a: 'She never drinks coffee', ru: 'Она никогда не пьёт кофе' },
        { t: 'order', a: 'We often play games at night', ru: 'Мы часто играем в игры ночью' },
        { t: 'tr', q: 'Он говорит по-английски.', a: ['he speaks english'] },
        { t: 'tr', q: 'Я обычно встаю в семь.', a: ['i usually get up at seven', 'i usually get up at 7', 'i usually get up at seven o\'clock'] },
        { t: 'listen', say: 'She lives in Moscow', a: ['she lives in moscow'] },
        { t: 'listen', say: 'He always gets up early', a: ['he always gets up early'] }
      ],
      test: [
        { t: 'choice', q: 'Those people ___ English.', o: ['speak', 'speaks', 'is speak'], a: 0, why: 'people — много (они) → без s.' },
        { t: 'choice', q: 'Kate ___ this game.', o: ['love', 'loves', 'is love'], a: 1, why: 'Kate = she → love + s, без is.' },
        { t: 'choice', q: 'I ___ a new phone.', o: ['want', 'wants', 'am want'], a: 0, why: 'I — без s, и am с глаголом-действием не нужен.' },
        { t: 'choice', q: 'go → he ___', o: ['gos', 'goes', 'gose'], a: 1, why: 'go и do получают -es: goes, does.' },
        { t: 'choice', q: 'Правильный порядок:', o: ['Tom never is late.', 'Tom is never late.', 'Tom is late never.'], a: 1, why: 'С is слово частоты стоит после него.' },
        { t: 'choice', q: 'Выберите правильное предложение:', o: ['She is work in an office.', 'She works in an office.', 'She work in an office.'], a: 1, why: 'She + глагол + s, без is.' },
        { t: 'gap', q: 'My friend ___ a cat. (have)', a: ['has'], why: 'Один друг (he/she) → has.' },
        { t: 'gap', q: 'Max ___ English at night. (study)', a: ['studies'], why: 'Согласная + y → ies.' },
        { t: 'gap', q: 'Anna ___ the work early. (do)', a: ['does'], why: 'do у he/she/it → does.' },
        { t: 'gap', q: 'He ___ up at six. (get)', a: ['gets'], why: 'get up: s получает глагол get → he gets up.' },
        { t: 'gap', q: 'She ___ books every evening. (read)', a: ['reads'], why: 'she → read + s.' },
        { t: 'gap', q: 'The cat ___ in the box. (play)', a: ['plays'], why: 'Гласная + y → просто s: plays.' }
      ]
    }
  ].forEach(put);
})();
