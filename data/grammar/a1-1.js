// Юнит 1 — to be. Эталон стиля грамматики «как у Мерфи, только проще».
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-1');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: в английском нельзя без глагола',
      html: `
<div class="g-idea">По-русски мы говорим <b>«Я студент»</b> — и глагола тут нет. По-английски так <b>нельзя</b>: в каждом предложении обязательно должен быть глагол. Если «действия» нет, ставим глагол-связку <b>be</b> («быть, являться»).</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я <span class="g-gap">_</span> студент.</p><p>Она <span class="g-gap">_</span> дома.</p><p>Мы <span class="g-gap">_</span> из России.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>am</b> a student.</span></p><p><span class="say">She <b>is</b> at home.</span></p><p><span class="say">We <b>are</b> from Russia.</span></p></div>
</div>
<div class="g-tip">Представьте, что в русском на месте пропуска стоит невидимое слово «есть»: «Я <i>есть</i> студент». В английском это слово всегда видно — это <b>am / is / are</b>.</div>
<div class="mini" data-q="Как сказать «Я голоден»?" data-o="I hungry.|I am hungry.|Am I hungry." data-a="1" data-why="Нужен глагол: I + am + hungry."></div>`
    },
    {
      title: '2. Какую форму ставить: am, is или are',
      html: `
<p>У глагола <b>be</b> три формы. Какую ставить — зависит только от того, <b>кто</b> в начале предложения.</p>
<table>
<tr><th>Кто</th><th>Форма</th><th>Пример</th></tr>
<tr><td><b>I</b> — я</td><td><b class="g-v">am</b></td><td><span class="say">I am tired.</span></td></tr>
<tr><td><b>he</b> — он, <b>she</b> — она, <b>it</b> — оно/это</td><td><b class="g-v">is</b></td><td><span class="say">She is happy.</span></td></tr>
<tr><td><b>you</b> — ты/вы, <b>we</b> — мы, <b>they</b> — они</td><td><b class="g-v">are</b></td><td><span class="say">They are friends.</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">am / is / are</span><span class="g-plus">+</span><span class="g-part">кто / какой / где</span></div>
<div class="g-steps"><div class="g-h">Запомнить легко — всего три правила</div><ol>
<li><b>I</b> → всегда <b>am</b>. Только так и никак иначе.</li>
<li><b>Один</b> человек или предмет (he, she, it, Tom, my cat) → <b>is</b>.</li>
<li><b>Все остальные</b> (you, we, they, Tom and Anna, my friends) → <b>are</b>.</li>
</ol></div>
<div class="mini" data-q="My friends ___ from London." data-o="am|is|are" data-a="2" data-why="My friends — много людей (они = they) → are."></div>
<div class="mini" data-q="Tom ___ a designer." data-o="am|is|are" data-a="1" data-why="Tom — один человек (он = he) → is."></div>`
    },
    {
      title: '3. Коротко, как говорят в жизни',
      html: `
<p>В разговоре и в чатах почти всегда используют <b>короткие формы</b>. Буква пропадает, вместо неё — апостроф <b>'</b>.</p>
<table>
<tr><th>Полная форма</th><th>Коротко</th><th>Звучит</th></tr>
<tr><td>I am</td><td><b>I'm</b></td><td><span class="say">I'm</span></td></tr>
<tr><td>he is / she is / it is</td><td><b>he's / she's / it's</b></td><td><span class="say">it's</span></td></tr>
<tr><td>you are / we are / they are</td><td><b>you're / we're / they're</b></td><td><span class="say">they're</span></td></tr>
</table>
<p>Смысл тот же, просто быстрее: <span class="say">I'm fine.</span> = I am fine. <span class="say">It's cold.</span> = It is cold.</p>
<div class="mini" data-q="Короткая форма от «we are»:" data-o="we's|we're|wer" data-a="1" data-why="are → 're, поэтому we're."></div>`
    },
    {
      title: '4. it — «это» и всё, что не человек',
      html: `
<p><b>it</b> — это «он/она/оно» для <b>предметов и животных</b>, а ещё «это» в коротких фразах.</p>
<ul class="g-list">
<li><span class="say">It is a good game.</span> — Это хорошая игра.</li>
<li><span class="say">It's cold today.</span> — Сегодня холодно. <span class="muted">(погода — всегда it)</span></li>
<li><span class="say">Where is my phone? — It is on the table.</span> — Где мой телефон? — Он на столе.</li>
</ul>
<div class="g-bad">She is on the table. <span class="muted">— про телефон</span></div>
<div class="g-good">It is on the table.</div>
<div class="g-tip">Русский «он/она» для вещей (телефон — <i>он</i>, игра — <i>она</i>) в английском всегда превращается в <b>it</b>. Рода у предметов нет.</div>
<div class="mini" data-q="Про игру: «Она интересная»" data-o="She is interesting.|It is interesting.|He is interesting." data-a="1" data-why="Игра — предмет, значит it."></div>`
    },
    {
      title: '5. a / an перед профессией и «кто это»',
      html: `
<p>Когда говорим, <b>кем</b> является человек (профессия, роль), перед словом ставим маленькое <b>a</b>. На русский оно не переводится.</p>
<ul class="g-list">
<li><span class="say">I am a student.</span> — Я студент.</li>
<li><span class="say">She is a teacher.</span> — Она учитель.</li>
<li><span class="say">He is an engineer.</span> — Он инженер. <span class="muted">(engineer начинается с гласного звука → <b>an</b>)</span></li>
</ul>
<div class="g-formula"><span class="g-part">a</span> перед согласным звуком: a student, a designer <span class="g-sep">·</span> <span class="g-part">an</span> перед гласным: an artist, an engineer</div>
<p>А вот если после am/is/are идёт <b>какой?</b> (прилагательное) или <b>где?</b> — артикль <b>не нужен</b>:</p>
<div class="g-bad">I am a tired.</div>
<div class="g-good">I am tired. <span class="muted">— «уставший» отвечает на вопрос «какой?»</span></div>
<div class="mini" data-q="Он художник." data-o="He is artist.|He is a artist.|He is an artist." data-a="2" data-why="Профессия → нужен артикль; artist начинается с гласной → an."></div>`
    },
    {
      title: '6. Типичные ошибки — проверьте себя',
      html: `
<div class="g-mistakes">
<div class="g-bad">I student.</div><div class="g-good">I <b>am a</b> student.</div>
<div class="g-bad">He are my friend.</div><div class="g-good">He <b>is</b> my friend.</div>
<div class="g-bad">I is happy.</div><div class="g-good">I <b>am</b> happy.</div>
<div class="g-bad">My friends is from Kazan.</div><div class="g-good">My friends <b>are</b> from Kazan.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>I am</b> · <b>he / she / it is</b> · <b>you / we / they are</b> — и никогда не пропускаем этот глагол.</div>`
    }
  ];
})();
