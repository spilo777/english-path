// Игровой трек: грамматика юнитов g-1, g-2, g-3 в стиле «как у Мерфи, только проще».
(function () {
  const u = COURSE.units.find((x) => x.id === 'g-1');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: игра говорит с вами командами',
      html: `
<div class="g-idea">Почти всё, что пишет игра, — это <b>команды</b>: нажми, выбери, найди. В английском команда строится проще некуда: берём <b>глагол как в словаре</b> и ставим его первым. Без «you», без окончаний.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Нажм<b>и</b> / нажм<b>ите</b> A.</p><p>Выбер<b>и</b> / выбер<b>ите</b> персонажа.</p><p>Найд<b>и</b> / найд<b>ите</b> ключ.</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Press</b> A.</span></p><p><span class="say"><b>Select</b> a character.</span></p><p><span class="say"><b>Find</b> the key.</span></p></div>
</div>
<p>В русском у команды два окончания: «на ты» (<i>нажми</i>) и «на вы» (<i>нажмите</i>). В английском форма <b>одна</b> — и для друга, и для незнакомца, и для целой команды.</p>
<ul class="g-list">
<li><span class="say">Open the map.</span> — Открой(те) карту.</li>
<li><span class="say">Talk to the old man.</span> — Поговори(те) со стариком.</li>
<li><span class="say">Save the game.</span> — Сохрани(те) игру.</li>
<li><span class="say">Run!</span> — Беги(те)!</li>
</ul>
<div class="g-tip">Команда = «чистый» глагол из словаря. Если вы знаете слово <b>jump</b> — вы уже знаете команду <b>Jump!</b></div>
<div class="mini" data-q="Как игра скажет «Выберите сложность»?" data-o="You select the difficulty.|Select the difficulty.|Selecting the difficulty." data-a="1" data-why="Команда начинается прямо с глагола, без you и без -ing."></div>`
    },
    {
      title: '2. Команда + «чтобы»: Press A to jump',
      html: `
<div class="g-idea">Игра часто объясняет, <b>зачем</b> нажимать кнопку. Для этого после команды ставят <b>to + глагол</b> — это русское «чтобы».</div>
<div class="g-formula"><span class="g-part g-v">Глагол</span><span class="g-plus">+</span><span class="g-part">что</span><span class="g-plus">+</span><span class="g-part g-v">to + глагол</span></div>
<table>
<tr><th>Английский</th><th>Перевод</th></tr>
<tr><td><span class="say">Press A to jump.</span></td><td>Нажмите A, <b>чтобы</b> прыгнуть.</td></tr>
<tr><td><span class="say">Press X to attack.</span></td><td>Нажмите X, <b>чтобы</b> атаковать.</td></tr>
<tr><td><span class="say">Press any key to start.</span></td><td>Нажмите любую клавишу, <b>чтобы</b> начать.</td></tr>
<tr><td><span class="say">Complete the quest to get a reward.</span></td><td>Выполните квест, <b>чтобы</b> получить награду.</td></tr>
</table>
<div class="g-steps"><div class="g-h">Как читать подсказку</div><ol>
<li>Первое слово — <b>что сделать</b> (Press).</li>
<li>Дальше — <b>какую кнопку / что</b> (X).</li>
<li>После <b>to</b> — <b>зачем</b> (attack).</li>
</ol></div>
<p>Обратите внимание: «нажми <b>на</b> кнопку» по-английски без «на» — просто <b>press</b> the button.</p>
<div class="g-bad">Press on A to jump.</div>
<div class="g-good">Press A to jump.</div>
<div class="mini" data-q="Press B to run. Что будет, если нажать B?" data-o="Персонаж прыгнет|Персонаж побежит|Игра сохранится" data-a="1" data-why="to run — чтобы бежать. Значит, B — бег."></div>`
    },
    {
      title: '3. Запрет: Don\'t + глагол',
      html: `
<div class="g-idea">Чтобы сказать «<b>не</b> делай», перед глаголом ставим <b>Don't</b> (коротко от do not). И всё.</div>
<div class="g-formula"><span class="g-part">Don't</span><span class="g-plus">+</span><span class="g-part g-v">глагол</span><span class="g-plus">+</span><span class="g-part">что</span></div>
<ul class="g-list">
<li><span class="say">Don't move!</span> — Не двигайся!</li>
<li><span class="say">Don't die!</span> — Не умирай!</li>
<li><span class="say">Don't attack!</span> — Не атакуй!</li>
<li><span class="say">Don't lose your items.</span> — Не потеряй свои предметы.</li>
<li><span class="say">Don't press this button.</span> — Не нажимай эту кнопку.</li>
</ul>
<p>Русские любят сказать просто «не» (<i>not</i>) или «нет» (<i>no</i>) — в английской команде так нельзя, нужен именно <b>Don't</b>.</p>
<div class="g-bad">Not move!</div>
<div class="g-good">Don't move!</div>
<div class="g-bad">No attack!</div>
<div class="g-good">Don't attack!</div>
<div class="g-tip">А чтобы попросить вежливо, добавьте <b>please</b> в начало или в конец: <span class="say">Please wait.</span> <span class="say">Wait, please.</span></div>
<div class="mini" data-q="«Не выходи из игры!»" data-o="Not quit the game!|Don't quit the game!|No quit the game!" data-a="1" data-why="Запрет = Don't + глагол."></div>
<div class="mini" data-q="Don't lose your items. Что игра советует?" data-o="Потерять предметы|Не терять предметы|Продать предметы" data-a="1" data-why="Don't lose — не теряй."></div>`
    },
    {
      title: '4. Меню и настройки: слова, которые видишь каждый день',
      html: `
<div class="g-idea">Пункты меню — это тоже команды или короткие названия. Выучите их один раз — и они работают в любой игре.</div>
<table>
<tr><th>Пункт меню</th><th>Перевод</th><th>Что это</th></tr>
<tr><td><span class="say">New Game</span></td><td>Новая игра</td><td>начать заново</td></tr>
<tr><td><span class="say">Continue</span></td><td>Продолжить</td><td>с последнего места</td></tr>
<tr><td><span class="say">Load Game</span></td><td>Загрузить игру</td><td>выбрать сохранение</td></tr>
<tr><td><span class="say">Save</span></td><td>Сохранить</td><td>запомнить прогресс</td></tr>
<tr><td><span class="say">Settings</span> / <span class="say">Options</span></td><td>Настройки</td><td>звук, графика…</td></tr>
<tr><td><span class="say">Quit</span> / <span class="say">Exit</span></td><td>Выйти</td><td>закрыть игру</td></tr>
</table>
<p>Внутри настроек:</p>
<ul class="g-list">
<li><span class="say">Audio</span> — звук · <span class="say">Graphics</span> — графика</li>
<li><span class="say">Controls</span> — управление · <span class="say">Subtitles</span> — субтитры</li>
<li><span class="say">Difficulty</span> — сложность: <span class="say">Easy</span> / <span class="say">Normal</span> / <span class="say">Hard</span></li>
</ul>
<p>После поражения игра спрашивает: <span class="say">You died. Try again?</span> — «Вы погибли. Попробовать снова?» Ответ: <b>Yes / No</b>.</p>
<div class="g-tip"><b>Save</b> и <b>Load</b> — пара: «положить в копилку» и «достать из копилки». <b>Continue</b> — это Load последнего сохранения одной кнопкой.</div>
<div class="mini" data-q="Хотите включить субтитры. Куда идти?" data-o="Load Game|Settings|Quit" data-a="1" data-why="Субтитры (Subtitles) — в настройках, Settings / Options."></div>
<div class="mini" data-q="Continue =" data-o="Продолжить|Выйти|Новая игра" data-a="0" data-why="Continue — продолжить с последнего места."></div>`
    },
    {
      title: '5. Типичные ошибки — проверьте себя',
      html: `
<div class="g-mistakes">
<div class="g-bad">You open the map. <span class="muted">— как команда</span></div><div class="g-good"><b>Open</b> the map.</div>
<div class="g-bad">Pressing A to jump.</div><div class="g-good"><b>Press</b> A to jump.</div>
<div class="g-bad">Press on any key.</div><div class="g-good">Press any key.</div>
<div class="g-bad">Not attack!</div><div class="g-good"><b>Don't</b> attack!</div>
<div class="g-bad">Don't to move!</div><div class="g-good">Don't <b>move</b>!</div>
<div class="g-bad">Select you character.</div><div class="g-good">Select <b>your</b> character. <span class="muted">— your = твой / ваш</span></div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Команда = <b>глагол</b> первым словом (<b>Press A</b>), запрет = <b>Don't + глагол</b>, «чтобы» = <b>to + глагол</b>.</div>`
    }
  ];
})();

(function () {
  const u = COURSE.units.find((x) => x.id === 'g-2');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: как понять любое задание',
      html: `
<div class="g-idea">Задание в квестовом журнале — это команда из прошлого юнита: <b>глагол + что + куда</b>. Найдите первый глагол — и вы уже знаете, что делать. Остальные слова — подробности.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Доставьте письмо кузнецу.</p><p>Одолейте волков.</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Deliver</b> the letter to the blacksmith.</span></p><p><span class="say"><b>Defeat</b> the wolves.</span></p></div>
</div>
<table>
<tr><th>Глагол</th><th>Что делать</th><th>Пример</th></tr>
<tr><td><span class="say">collect</span></td><td>собрать</td><td><span class="say">Collect 5 herbs</span></td></tr>
<tr><td><span class="say">defeat</span></td><td>одолеть</td><td><span class="say">Defeat the wolves</span></td></tr>
<tr><td><span class="say">deliver</span></td><td>доставить</td><td><span class="say">Deliver the letter</span></td></tr>
<tr><td><span class="say">reach</span></td><td>добраться до</td><td><span class="say">Reach the old tower</span></td></tr>
<tr><td><span class="say">escort</span></td><td>сопроводить</td><td><span class="say">Escort the merchant</span></td></tr>
<tr><td><span class="say">return</span></td><td>вернуться</td><td><span class="say">Return to Mira</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Читаем задание за 3 шага</div><ol>
<li>Первое слово — <b>глагол</b>: что делать (Deliver).</li>
<li>Потом — <b>что / кого</b> (the letter).</li>
<li>После <b>to</b> + место или человек — <b>куда / кому</b> (to the blacksmith).</li>
</ol></div>
<p>Мелочи в журнале: <b>2/6</b> — сделано 2 из 6, <b>(Optional)</b> — необязательно, <span class="say">Quest complete!</span> — квест выполнен.</p>
<div class="mini" data-q="Reach the cave. Что нужно сделать?" data-o="Одолеть пещеру|Добраться до пещеры|Собрать пещеру" data-a="1" data-why="reach — добраться до."></div>`
    },
    {
      title: '2. Два разных to: «куда» и «чтобы»',
      html: `
<div class="g-idea">В заданиях <b>to</b> встречается дважды, и смысл у него разный. Правило простое: смотрите, <b>что стоит после to</b>.</div>
<table>
<tr><th>После to</th><th>Значит</th><th>Пример</th></tr>
<tr><td>место / человек</td><td><b>куда, к кому</b></td><td><span class="say">Go to the cave.</span></td></tr>
<tr><td><b>глагол</b></td><td><b>чтобы</b></td><td><span class="say">…to find the sword.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Go to the cave to find the sword.</span> — Идите <b>в</b> пещеру, <b>чтобы найти</b> меч.</li>
<li><span class="say">Talk to the guard to open the gate.</span> — Поговорите <b>со</b> стражником, <b>чтобы открыть</b> ворота.</li>
<li><span class="say">Sell items to get gold.</span> — Продавайте предметы, <b>чтобы получить</b> золото.</li>
</ul>
<p>Ловушка: по-русски «чтобы», поэтому хочется сказать <i>for</i>. Но перед глаголом — только <b>to</b>.</p>
<div class="g-bad">Sell items for get gold.</div>
<div class="g-good">Sell items <b>to</b> get gold.</div>
<div class="g-tip">Видите <b>to + глагол</b> — мысленно подставляйте «чтобы». Видите <b>to + the …</b> — подставляйте «в / к».</div>
<div class="mini" data-q="Talk to the king to start the quest. Что значит «to start»?" data-o="к королю|чтобы начать|начал" data-a="1" data-why="После to стоит глагол start — значит, это «чтобы начать»."></div>`
    },
    {
      title: '3. want to и need to: «хочу» и «нужно»',
      html: `
<div class="g-idea">NPC постоянно говорят, чего они <b>хотят</b> и что вам <b>нужно</b> сделать. Для этого: <b>want to</b> + глагол и <b>need to</b> + глагол. После них глагол как в словаре.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я хочу <span class="g-gap">_</span> купить меч.</p><p>Вам нужно <span class="g-gap">_</span> найти ключ.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I want <b>to</b> buy a sword.</span></p><p><span class="say">You need <b>to</b> find the key.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">want to / need to</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<p>Это обычный Present Simple, поэтому работают знакомые правила:</p>
<table>
<tr><th>Как</th><th>Пример</th><th>Перевод</th></tr>
<tr><td>he / she + <b>s</b></td><td><span class="say">She needs to rest.</span></td><td>Ей нужно отдохнуть.</td></tr>
<tr><td>don't / doesn't</td><td><span class="say">You don't need to fight.</span></td><td>Вам не нужно сражаться.</td></tr>
<tr><td>Do / Does…?</td><td><span class="say">Do you want to help me?</span></td><td>Хотите мне помочь?</td></tr>
<tr><td>What do…?</td><td><span class="say">What do I need to do?</span></td><td>Что мне нужно сделать?</td></tr>
</table>
<p>Без глагола — просто <b>want / need</b> + предмет, и <b>to</b> не нужно: <span class="say">I need a key.</span> <span class="say">Do you want some gold?</span></p>
<div class="g-bad">I want buy a torch.</div>
<div class="g-good">I want <b>to</b> buy a torch.</div>
<div class="g-bad">He need to go.</div>
<div class="g-good">He need<b>s</b> to go.</div>
<div class="g-tip">Фраза <b>You need to…</b> в подсказке — ваш главный друг: всё, что после неё, и есть то, что игра от вас хочет.</div>
<div class="mini" data-q="Mira ___ to find her ring." data-o="need|needs|to need" data-a="1" data-why="Mira — она (she), поэтому needs."></div>
<div class="mini" data-q="«Я хочу продать меч»" data-o="I want sell a sword.|I want to sell a sword.|I want selling a sword." data-a="1" data-why="want to + глагол из словаря."></div>`
    },
    {
      title: '4. have to: «должен, приходится»',
      html: `
<div class="g-idea"><b>have to</b> + глагол — «должен, придётся»: так надо по правилам, выбора нет. По смыслу очень близко к need to.</div>
<ul class="g-list">
<li><span class="say">You have to defeat the boss.</span> — Вы должны победить босса.</li>
<li><span class="say">We have to buy a torch.</span> — Нам придётся купить факел.</li>
<li><span class="say">I have to go, sorry.</span> — Мне пора, извини. <span class="muted">(частая фраза в чате)</span></li>
<li><span class="say">She has to work tomorrow.</span> — Ей завтра работать.</li>
</ul>
<p>С he / she / it — <b>has to</b> (как have → has).</p>
<div class="g-formula"><span class="g-part">I / you / we / they</span><span class="g-plus">+</span><span class="g-part g-v">have to</span><span class="g-sep">·</span><span class="g-part">he / she / it</span><span class="g-plus">+</span><span class="g-part g-v">has to</span></div>
<p>Главная ловушка — отрицание. <b>don't have to</b> значит «<b>не обязательно</b>», а <b>не</b> «нельзя»:</p>
<div class="g-bad">You don't have to fight. = Тебе нельзя сражаться.</div>
<div class="g-good">You don't have to fight. = Можно не сражаться. <span class="muted">(хочешь — дерись, не хочешь — не надо)</span></div>
<p>А «нельзя» в игре — это просто запрет: <span class="say">Don't fight!</span></p>
<div class="g-tip"><b>need to</b> — «мне это нужно», <b>have to</b> — «так заставляют правила». В подсказках оба значат одно: <b>сделай это</b>.</div>
<div class="mini" data-q="You don't have to talk to the guard. Что это значит?" data-o="Со стражником говорить нельзя|Со стражником говорить не обязательно|Надо поговорить со стражником" data-a="1" data-why="don't have to = не обязательно, а не запрет."></div>
<div class="mini" data-q="He ___ to find the key." data-o="have|has|haves" data-a="1" data-why="he → has to."></div>`
    },
    {
      title: '5. Диалог с NPC и типичные ошибки',
      html: `
<p>Ваши ответы в диалоге и у торговца собраны из того, что вы уже знаете:</p>
<table>
<tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td><span class="say">What do I need to do?</span></td><td>Что мне нужно сделать?</td></tr>
<tr><td><span class="say">Tell me more.</span></td><td>Расскажите подробнее.</td></tr>
<tr><td><span class="say">I want to buy a potion.</span></td><td>Я хочу купить зелье.</td></tr>
<tr><td><span class="say">How much is it?</span></td><td>Сколько это стоит?</td></tr>
<tr><td><span class="say">You don't have enough gold.</span></td><td>У вас недостаточно золота.</td></tr>
</table>
<p>Кнопки: <b>Accept</b> — взять квест, <b>Decline</b> — отказаться, <b>Leave</b> — уйти.</p>
<div class="g-mistakes">
<div class="g-bad">I want buy a sword.</div><div class="g-good">I want <b>to</b> buy a sword.</div>
<div class="g-bad">She need to rest.</div><div class="g-good">She need<b>s</b> to rest.</div>
<div class="g-bad">Go to the cave for find the ring.</div><div class="g-good">Go to the cave <b>to</b> find the ring.</div>
<div class="g-bad">What I need to do?</div><div class="g-good">What <b>do</b> I need to do?</div>
<div class="g-bad">He have to go.</div><div class="g-good">He <b>has</b> to go.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Задание = <b>глагол + что + куда</b>; <b>want to / need to / have to + глагол</b>; <b>to + глагол</b> = «чтобы»; <b>don't have to</b> = «не обязательно».</div>`
    }
  ];
})();

(function () {
  const u = COURSE.units.find((x) => x.id === 'g-3');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: в бою говорят обрывками',
      html: `
<div class="g-idea">В войсе и чате нет времени на полные предложения. Выкидывают <b>I</b>, <b>am / is / are</b> и всё, что понятно без слов. Остаётся самое важное.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Сзади!</p><p>Уже бегу!</p><p>Нужна помощь!</p></div>
  <div><div class="g-h">English</div><p><span class="say">Behind you!</span></p><p><span class="say">On my way!</span></p><p><span class="say">Need help!</span></p></div>
</div>
<p>Тут английский похож на русский: мы тоже кричим «Сзади!», а не «Враг находится сзади тебя».</p>
<table>
<tr><th>Как говорят</th><th>Полностью</th><th>Перевод</th></tr>
<tr><td><span class="say">Need help!</span></td><td>I need help.</td><td>Нужна помощь!</td></tr>
<tr><td><span class="say">On my way!</span></td><td>I am on my way.</td><td>Иду!</td></tr>
<tr><td><span class="say">Ready?</span></td><td>Are you ready?</td><td>Готовы?</td></tr>
<tr><td><span class="say">Nice shot!</span></td><td>That is a nice shot.</td><td>Классный выстрел!</td></tr>
<tr><td><span class="say">Low!</span></td><td>I am low (on health).</td><td>Мало здоровья!</td></tr>
</table>
<div class="g-tip">В игре сокращайте смело — так звучит естественно. А в упражнениях курса и в письмах пишите полностью: <b>I am ready</b>, а не просто ready.</div>
<div class="mini" data-q="Тиммейт кричит: On my way! Что он имеет в виду?" data-o="Это мой путь|Уже иду к тебе|Уйди с дороги" data-a="1" data-why="On my way = I am on my way — я в пути, уже бегу."></div>`
    },
    {
      title: '2. Команды для команды: Follow me! и Let\'s…',
      html: `
<div class="g-idea">Приказы в войсе — это та же форма, что в меню игры: <b>глагол первым словом</b>. А чтобы позвать всех сделать что-то <b>вместе</b>, ставим <b>Let's</b> + глагол («давай / давайте»).</div>
<ul class="g-list">
<li><span class="say">Follow me!</span> — За мной!</li>
<li><span class="say">Cover me!</span> — Прикрой меня!</li>
<li><span class="say">Wait for me!</span> — Подожди меня!</li>
<li><span class="say">Push!</span> — Давим! Вперёд!</li>
<li><span class="say">Fall back!</span> — Отходим!</li>
<li><span class="say">Don't push, wait!</span> — Не лезь, жди!</li>
</ul>
<div class="g-formula"><span class="g-part">Let's</span><span class="g-plus">+</span><span class="g-part g-v">глагол</span></div>
<ul class="g-list">
<li><span class="say">Let's go!</span> — Погнали!</li>
<li><span class="say">Let's queue together.</span> — Давай вместе в поиск.</li>
<li><span class="say">Let's go left.</span> — Давайте налево.</li>
</ul>
<div class="g-bad">Let's to go!</div>
<div class="g-good">Let's go! <span class="muted">— после Let's глагол без to</span></div>
<div class="mini" data-q="«Давайте подождём Лину»" data-o="Let's wait for Lina.|Let's to wait for Lina.|We wait Lina!" data-a="0" data-why="Let's + глагол без to; wait for — ждать кого-то."></div>`
    },
    {
      title: '3. can для просьб: Can you…? Can I…?',
      html: `
<div class="g-idea"><b>Can you</b> + глагол? — самая простая вежливая просьба: «Можешь…?». <b>Can I</b> + глагол? — «Можно мне…?». Главное: чтобы получился вопрос, <b>can</b> идёт первым.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Ты можешь меня полечить?</p><p class="muted">вопрос — только интонацией</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Can you</b> heal me?</span></p><p class="muted">слова меняются местами</p></div>
</div>
<div class="g-formula"><span class="g-part g-v">Can</span><span class="g-plus">+</span><span class="g-part">you / I</span><span class="g-plus">+</span><span class="g-part">глагол</span><span class="g-plus">+</span><span class="g-part">?</span></div>
<table>
<tr><th>Просьба</th><th>Перевод</th></tr>
<tr><td><span class="say">Can you heal me?</span></td><td>Можешь меня полечить?</td></tr>
<tr><td><span class="say">Can you wait?</span></td><td>Можешь подождать?</td></tr>
<tr><td><span class="say">Can you repeat, please?</span></td><td>Можешь повторить?</td></tr>
<tr><td><span class="say">Can you write it in chat?</span></td><td>Напиши это в чат?</td></tr>
<tr><td><span class="say">Can I join?</span></td><td>Можно к вам?</td></tr>
</table>
<p>Ответы: <span class="say">Sure!</span> / <span class="say">Yes, I can.</span> / <span class="say">Sorry, I can't.</span></p>
<div class="g-bad">You can heal me? <span class="muted">— по-русски, одной интонацией</span></div>
<div class="g-good">Can you heal me?</div>
<div class="g-bad">Can you to heal me?</div>
<div class="g-good">Can you heal me? <span class="muted">— после can глагол без to</span></div>
<p>Если английский пока слабый, эти фразы спасают:</p>
<ul class="g-list">
<li><span class="say">Sorry, my English is bad.</span> — Извините, у меня плохой английский.</li>
<li><span class="say">Slowly, please.</span> — Помедленнее, пожалуйста.</li>
<li><span class="say">I don't understand.</span> — Я не понимаю.</li>
<li><span class="say">No mic, sorry.</span> — Нет микрофона, извините.</li>
</ul>
<div class="g-tip"><b>Could you…?</b> — то же самое, но мягче. Хорошо для незнакомых: <span class="say">Could you repeat, please?</span></div>
<div class="mini" data-q="«Можно к вам в команду?»" data-o="I can join?|Can I join?|Can I to join?" data-a="1" data-why="Вопрос: Can первым, потом I, потом глагол без to."></div>
<div class="mini" data-q="___ you wait for me?" data-o="Can|Do|Are" data-a="0" data-why="Просьба «можешь…?» = Can you + глагол."></div>`
    },
    {
      title: '4. Сленг чата и что звучит грубовато',
      html: `
<div class="g-idea">В чате пишут сокращениями. Большинство — дружелюбные, но несколько слов легко звучат как оскорбление, если не знать контекст.</div>
<table>
<tr><th>Пишут</th><th>Полностью</th><th>Значение</th></tr>
<tr><td><b>glhf</b></td><td>good luck, have fun</td><td>удачи! (в начале)</td></tr>
<tr><td><b>gg</b> / <b>wp</b></td><td>good game / well played</td><td>хорошая игра (в конце)</td></tr>
<tr><td><b>brb</b></td><td>be right back</td><td>сейчас вернусь</td></tr>
<tr><td><b>afk</b></td><td>away from keyboard</td><td>отошёл</td></tr>
<tr><td><b>np</b> / <b>ty</b></td><td>no problem / thank you</td><td>без проблем / спасибо</td></tr>
<tr><td><b>op</b></td><td>overpowered</td><td>имба</td></tr>
<tr><td><b>nerf</b> / <b>buff</b></td><td>—</td><td>ослабить / усилить</td></tr>
<tr><td><b>lag</b></td><td>—</td><td>лаги</td></tr>
<tr><td><b>carry</b></td><td>—</td><td>тащить команду</td></tr>
</table>
<div class="g-steps"><div class="g-h">Осторожно: грубовато</div><ol>
<li><b>noob</b> о себе — нормально (<span class="say">Sorry, I'm a noob.</span>), о другом — обзывательство.</li>
<li><b>ez</b> (easy) после победы — насмешка над соперником.</li>
<li><b>gg</b> в середине проигранного матча — «всё, сдаёмся», команду это злит.</li>
<li><b>Shut up!</b> — «заткнись». Вежливо: <span class="say">Can you be quiet, please?</span></li>
</ol></div>
<div class="g-bad">you noob, cover me</div>
<div class="g-good">can you cover me? ty!</div>
<div class="g-tip">Правило безопасности простое: <b>glhf</b> в начале, <b>gg wp</b> в конце, <b>ty</b> за помощь. С этими тремя вас везде примут за своего.</div>
<div class="mini" data-q="Что вежливо написать сопернику после матча?" data-o="ez|gg wp|noob" data-a="1" data-why="gg wp — хорошая игра, хорошо сыграно. ez и noob звучат как насмешка."></div>
<div class="mini" data-q="Тиммейт пишет brb. Что делать?" data-o="Он сдаётся — выходить|Он скоро вернётся — подождать|Он лагает — перезапустить" data-a="1" data-why="brb = be right back, сейчас вернусь."></div>`
    },
    {
      title: '5. Типичные ошибки — проверьте себя',
      html: `
<div class="g-mistakes">
<div class="g-bad">You can heal me?</div><div class="g-good"><b>Can you</b> heal me?</div>
<div class="g-bad">Can you to repeat?</div><div class="g-good">Can you <b>repeat</b>, please?</div>
<div class="g-bad">Let's to queue.</div><div class="g-good">Let's <b>queue</b>.</div>
<div class="g-bad">Wait me!</div><div class="g-good">Wait <b>for</b> me!</div>
<div class="g-bad">I not understand.</div><div class="g-good">I <b>don't</b> understand.</div>
<div class="g-bad">ez noob</div><div class="g-good">gg wp</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>В бою — коротко (<b>Need help!</b>), приказ — <b>глагол первым</b>, вместе — <b>Let's + глагол</b>, просьба — <b>Can you + глагол?</b>, и <b>gg wp</b> вместо <b>ez</b>.</div>`
    }
  ];
})();
