// Игровой трек (новая версия): g-2 — квесты, NPC и торговец (want to / need to / have to, to = «чтобы»); g-3 — онлайн, чат и войс (короткие фразы, команды и Let's, Present Continuous в бою, can для просьб, сленг).
(function () {
  const put = (u) => { const i = COURSE.units.findIndex((x) => x.id === u.id); if (i >= 0) COURSE.units[i] = u; else COURSE.units.push(u); };
  [
    // ───────────────────────────── GAMING 2 ─────────────────────────────
    {
      id: 'g-2', level: 'A1', num: 2, track: 'games', unlockAfter: 'a1-4',
      title: 'Игры: квесты и диалоги с NPC',
      summary: 'Понимать квестовый журнал и реплики NPC, отвечать в диалогах и торговаться: want to / need to / have to + глагол, to = «чтобы», How much is / are…?',
      grammar: [
        {
          title: '1. Главная идея: задание — это команда',
          html: `
<div class="g-idea">Цель в квестовом журнале (<span class="say">objective</span>) — это та же команда, что в меню игры: <b>глагол первым словом</b>. Найдите этот глагол — и вы уже знаете, что делать. Остальные слова — подробности: что и куда.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Доставьте письмо торговцу.</p><p>Одолейте волков.</p><p>Вернитесь к Мире.</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Deliver</b> the letter to the merchant.</span></p><p><span class="say"><b>Defeat</b> the wolves.</span></p><p><span class="say"><b>Return</b> to Mira.</span></p></div>
</div>
<table>
<tr><th>Глагол</th><th>Что делать</th><th>Пример</th></tr>
<tr><td><span class="say">collect</span></td><td>собрать</td><td><span class="say">Collect 5 herbs.</span></td></tr>
<tr><td><span class="say">defeat</span></td><td>одолеть</td><td><span class="say">Defeat the wolves.</span></td></tr>
<tr><td><span class="say">deliver</span></td><td>доставить</td><td><span class="say">Deliver the letter.</span></td></tr>
<tr><td><span class="say">reach</span></td><td>добраться до</td><td><span class="say">Reach the old tower.</span></td></tr>
<tr><td><span class="say">escort</span></td><td>сопроводить</td><td><span class="say">Escort the merchant.</span></td></tr>
<tr><td><span class="say">return</span></td><td>вернуться, вернуть</td><td><span class="say">Return the key to Mira.</span></td></tr>
<tr><td><span class="say">talk to</span></td><td>поговорить с</td><td><span class="say">Talk to the merchant.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Читаем задание за 3 шага</div><ol>
<li>Первое слово — <b>глагол</b>: что делать (Deliver).</li>
<li>Потом — <b>что / кого</b> (the letter).</li>
<li><b>to</b> + место или человек — <b>куда / кому</b> (to the merchant).</li>
</ol></div>
<p>Мелочи в журнале: <b>2/6</b> — сделано 2 из 6; <b>(Optional)</b> — необязательная цель; <span class="say">Quest complete!</span> — квест выполнен.</p>
<div class="g-bad">Reach to the tower.</div>
<div class="g-good">Reach the tower. <span class="muted">— reach уже значит «добраться до», to не нужно</span></div>
<div class="mini" data-q="Reach the cave. Что нужно сделать?" data-o="Одолеть пещеру|Добраться до пещеры|Собрать пещеру" data-a="1" data-why="reach — добраться до какого-то места."></div>
<div class="mini" data-q="Return the key to Mira. Кому отдать ключ?" data-o="Торговцу|Мире|Никому, ключ надо найти" data-a="1" data-why="to + человек = кому: to Mira — Мире."></div>`
        },
        {
          title: '2. Два разных to: «куда» и «чтобы»',
          html: `
<div class="g-idea">Вы уже знаете из меню: <b>Press A to jump</b> — «нажми A, <b>чтобы</b> прыгнуть». В заданиях <b>to</b> встречается ещё и в значении «куда». Правило простое: смотрите, <b>что стоит после to</b>.</div>
<table>
<tr><th>После to</th><th>Значит</th><th>Пример</th></tr>
<tr><td>место / человек</td><td><b>куда, к кому</b></td><td><span class="say">Go to the cave.</span></td></tr>
<tr><td><b>глагол</b></td><td><b>чтобы</b></td><td><span class="say">…to find the key.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Go to the cave to find the key.</span> — Идите <b>в</b> пещеру, <b>чтобы найти</b> ключ.</li>
<li><span class="say">Talk to the merchant to buy a potion.</span> — Поговорите <b>с</b> торговцем, <b>чтобы купить</b> зелье.</li>
<li><span class="say">Sell herbs to get gold.</span> — Продавайте травы, <b>чтобы получить</b> золото.</li>
<li><span class="say">Defeat the wolves to reach the tower.</span> — Одолейте волков, <b>чтобы добраться</b> до башни.</li>
</ul>
<p>Ловушка: по-русски «чтобы» или «для», поэтому хочется сказать <b>for</b>. Правило: перед <b>глаголом</b> — только <b>to</b>. А <b>for</b> ставим перед <b>предметом</b>: «за что».</p>
<div class="g-formula"><span class="g-part">to</span><span class="g-plus">+</span><span class="g-part g-v">глагол</span><span class="g-sep">·</span><span class="g-part">for</span><span class="g-plus">+</span><span class="g-part g-v">предмет</span></div>
<ul class="g-list">
<li><span class="say">Sell the sword to get gold.</span> — Продай меч, чтобы получить золото.</li>
<li><span class="say">Sell the sword for 100 gold.</span> — Продай меч за 100 золотых.</li>
</ul>
<div class="g-bad">Sell herbs for get gold.</div>
<div class="g-good">Sell herbs <b>to</b> get gold.</div>
<div class="g-tip">Видите <b>to + глагол</b> — мысленно подставляйте «чтобы». Видите <b>to + the …</b> или имя — «в / к / кому».</div>
<div class="mini" data-q="Talk to Mira to start the quest. Что значит «to start»?" data-o="к Мире|чтобы начать|начал" data-a="1" data-why="После to стоит глагол start — значит, это «чтобы начать»."></div>
<div class="mini" data-q="Sell the old sword ___ 50 gold." data-o="to|for|at" data-a="1" data-why="После пропуска предмет (50 gold), а не глагол → for, «за 50 золотых»."></div>`
        },
        {
          title: '3. want to и need to: «хочу» и «нужно»',
          html: `
<div class="g-idea">NPC постоянно говорят, чего они <b>хотят</b> и что вам <b>нужно</b> сделать. Для этого: <b>want to</b> + глагол и <b>need to</b> + глагол. Глагол после них — как в словаре.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я хочу <span class="g-gap">_</span> купить меч.</p><p>Вам нужно <span class="g-gap">_</span> найти ключ.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I want <b>to</b> buy a sword.</span></p><p><span class="say">You need <b>to</b> find the key.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">want to / need to</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<p>Обратите внимание: по-русски «<b>вам</b> нужно», а по-английски «<b>you</b> need» — как будто «вы нуждаетесь». Начинаем с того, <b>кто</b>.</p>
<div class="g-bad">To you need to find the key.</div>
<div class="g-good">You need to find the key.</div>
<p>want и need — обычные глаголы Present Simple, поэтому работают все правила из уроков 3–4:</p>
<table>
<tr><th>Правило</th><th>Пример</th><th>Перевод</th></tr>
<tr><td>he / she + <b>s</b></td><td><span class="say">Mira needs to find the key.</span></td><td>Мире нужно найти ключ.</td></tr>
<tr><td>don't / doesn't</td><td><span class="say">I don't want to sell it.</span></td><td>Я не хочу это продавать.</td></tr>
<tr><td>Do / Does…?</td><td><span class="say">Do you want to help?</span></td><td>Хотите помочь?</td></tr>
<tr><td>What do…?</td><td><span class="say">What do I need to do?</span></td><td>Что мне нужно сделать?</td></tr>
</table>
<p>Если после want / need <b>предмет</b>, а не действие, — <b>to</b> не нужно:</p>
<ul class="g-list">
<li><span class="say">I need a potion.</span> — Мне нужно зелье.</li>
<li><span class="say">Mira wants her key.</span> — Мира хочет свой ключ.</li>
<li><span class="say">I need to buy a potion.</span> — Мне нужно <b>купить</b> зелье. <span class="muted">(действие → to)</span></li>
</ul>
<div class="g-bad">I want buy a sword.</div>
<div class="g-good">I want <b>to</b> buy a sword.</div>
<div class="g-bad">He need to go.</div>
<div class="g-good">He need<b>s</b> to go. <span class="muted">— s ставим к want / need, а не к последнему глаголу</span></div>
<div class="g-tip">Фраза <b>You need to…</b> в подсказке — ваш главный друг: всё, что после неё, и есть то, что игра от вас хочет.</div>
<div class="mini" data-q="Mira ___ to find her key." data-o="need|needs|to need" data-a="1" data-why="Mira — она (she), поэтому needs."></div>
<div class="mini" data-q="«Мне нужен меч»" data-o="I need a sword.|I need to a sword.|To me need a sword." data-a="0" data-why="После need предмет (a sword) → to не нужно; начинаем с I."></div>`
        },
        {
          title: '4. have to: «должен, приходится»',
          html: `
<div class="g-idea"><b>have to</b> + глагол — «должен, придётся»: так требуют правила, выбора нет. В подсказках это почти то же, что need to: <b>сделай это</b>.</div>
<ul class="g-list">
<li><span class="say">You have to defeat the wolves.</span> — Вы должны одолеть волков.</li>
<li><span class="say">We have to buy potions.</span> — Нам придётся купить зелья.</li>
<li><span class="say">I have to go, sorry.</span> — Мне пора, извини. <span class="muted">(частая фраза в чате)</span></li>
<li><span class="say">She has to work on Saturday.</span> — Ей приходится работать в субботу.</li>
</ul>
<div class="g-formula"><span class="g-part">I / you / we / they</span><span class="g-plus">+</span><span class="g-part g-v">have to</span><span class="g-sep">·</span><span class="g-part">he / she / it</span><span class="g-plus">+</span><span class="g-part g-v">has to</span></div>
<p>Вопросы и отрицания — через <b>do / does</b>, как у любого глагола:</p>
<ul class="g-list">
<li><span class="say">Do I have to talk to the merchant?</span> — Мне обязательно говорить с торговцем?</li>
<li><span class="say">Does she have to go to the cave?</span> — Ей нужно идти в пещеру?</li>
</ul>
<div class="g-bad">Have I to talk to him?</div>
<div class="g-good"><b>Do</b> I have to talk to him?</div>
<p>Главная ловушка — отрицание. <b>don't have to</b> значит «<b>не обязательно</b>», а вовсе не «нельзя»:</p>
<table>
<tr><th>Фраза</th><th>Значит</th></tr>
<tr><td><span class="say">You don't have to attack.</span></td><td>Можно не атаковать (как хотите).</td></tr>
<tr><td><span class="say">Don't attack!</span></td><td>Не атакуйте! (запрет)</td></tr>
</table>
<div class="g-tip">Запрет — это команда с <b>Don't</b>, как в меню: <b>Don't attack!</b> А <b>don't have to</b> — это свобода: «не надо, если не хотите».</div>
<div class="mini" data-q="You don't have to collect the herbs. Что это значит?" data-o="Травы собирать нельзя|Травы собирать не обязательно|Травы нужно собрать" data-a="1" data-why="don't have to = не обязательно, а не запрет."></div>
<div class="mini" data-q="He ___ to find the key." data-o="have|has|haves" data-a="1" data-why="he, she, it → has to."></div>`
        },
        {
          title: '5. Диалог с NPC: что говорят и что отвечать',
          html: `
<div class="g-idea"><b>NPC</b> (non-player character) — персонажи, которыми управляет игра. Их реплики похожи во всех играх, а ваши варианты ответа — это короткие вопросы из урока 4.</div>
<table>
<tr><th>NPC говорит</th><th>Перевод</th></tr>
<tr><td><span class="say">Please help me, traveler!</span></td><td>Пожалуйста, помогите мне, путник!</td></tr>
<tr><td><span class="say">Bring me five herbs.</span></td><td>Принесите мне пять трав.</td></tr>
<tr><td><span class="say">You need to find my key.</span></td><td>Вам нужно найти мой ключ.</td></tr>
<tr><td><span class="say">Here is your reward.</span></td><td>Вот ваша награда.</td></tr>
</table>
<table>
<tr><th>Вы отвечаете</th><th>Перевод</th></tr>
<tr><td><span class="say">What do I need to do?</span></td><td>Что мне нужно сделать?</td></tr>
<tr><td><span class="say">Where is the cave?</span></td><td>Где пещера?</td></tr>
<tr><td><span class="say">Do I have to go now?</span></td><td>Мне нужно идти сейчас?</td></tr>
<tr><td><span class="say">What is the reward?</span></td><td>Какая награда?</td></tr>
<tr><td><span class="say">Not now.</span></td><td>Не сейчас.</td></tr>
<tr><td><span class="say">Goodbye.</span></td><td>До свидания. (выйти из диалога)</td></tr>
</table>
<p>Кнопки под диалогом: <span class="say">Accept</span> — принять квест, <span class="say">Decline</span> — отказаться.</p>
<div class="g-bad">What I need to do?</div>
<div class="g-good">What <b>do</b> I need to do? <span class="muted">— в вопросе нужен do, как в уроке 4</span></div>
<div class="mini" data-q="Как спросить NPC «Что мне нужно сделать?»" data-o="What I need to do?|What do I need to do?|What need I do?" data-a="1" data-why="Вопрос в Present Simple: What + do + I + need to + глагол."></div>`
        },
        {
          title: '6. У торговца: How much? и enough',
          html: `
<div class="g-idea">У торговца (<span class="say">merchant</span>) две кнопки: <span class="say">Buy</span> — купить и <span class="say">Sell</span> — продать. Цену спрашиваем <b>How much…?</b>, а про деньги говорим <b>enough</b> — «достаточно».</div>
<table>
<tr><th>Один предмет</th><th>Много</th></tr>
<tr><td><span class="say">How much <b>is</b> this sword?</span></td><td><span class="say">How much <b>are</b> these swords?</span></td></tr>
<tr><td><span class="say">It cost<b>s</b> 50 gold.</span></td><td><span class="say">They cost 80 gold.</span></td></tr>
</table>
<p>Правило как в уроке 1: один предмет → <b>is</b>, много → <b>are</b>. А <b>cost</b> — обычный глагол: it cost<b>s</b>, they cost.</p>
<div class="g-bad">How much is these potions?</div>
<div class="g-good">How much <b>are</b> these potions?</div>
<p><b>gold</b> в играх — это деньги, их не считают по штукам: <b>50 gold</b>, а не 50 golds.</p>
<div class="g-bad">It costs 50 golds.</div>
<div class="g-good">It costs 50 <b>gold</b>.</div>
<p><b>enough</b> ставим <b>перед</b> предметом: <span class="say">You don't have enough gold.</span> — У вас недостаточно золота. <span class="say">I have enough potions.</span> — У меня достаточно зелий.</p>
<div class="g-tip">Увидели <b>not enough</b> — вам чего-то не хватает: <i>not enough gold</i>, <i>not enough health</i>. Это одна из самых частых фраз в любой игре.</div>
<div class="mini" data-q="How much ___ these herbs?" data-o="is|are|costs" data-a="1" data-why="these herbs — много предметов → are."></div>`
        },
        {
          title: '7. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">I want buy a sword.</div><div class="g-good">I want <b>to</b> buy a sword.</div>
<div class="g-bad">She need to sleep.</div><div class="g-good">She need<b>s</b> to sleep.</div>
<div class="g-bad">Go to the cave for find the key.</div><div class="g-good">Go to the cave <b>to</b> find the key.</div>
<div class="g-bad">What I need to do?</div><div class="g-good">What <b>do</b> I need to do?</div>
<div class="g-bad">He have to go.</div><div class="g-good">He <b>has</b> to go.</div>
<div class="g-bad">Reach to the tower.</div><div class="g-good">Reach the tower.</div>
<div class="g-bad">How much is these swords?</div><div class="g-good">How much <b>are</b> these swords?</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Задание = <b>глагол + что + куда</b>; <b>want to / need to / have to + глагол</b>; <b>to + глагол</b> = «чтобы», <b>for + предмет</b> = «за»; <b>don't have to</b> = «не обязательно».</div>`
        }
      ],
      words: [
        ['objective', 'цель (задания)', 'New objective: find the cave.', 'Новая цель: найдите пещеру.'],
        ['collect', 'собирать', 'Collect five herbs.', 'Соберите пять трав.'],
        ['defeat', 'победить, одолеть; поражение', 'Defeat the wolves.', 'Одолейте волков.'],
        ['deliver', 'доставить', 'Deliver the letter to the merchant.', 'Доставьте письмо торговцу.'],
        ['reach', 'добраться до', 'Reach the old tower.', 'Доберитесь до старой башни.'],
        ['escort', 'сопроводить', 'Escort the merchant to the village.', 'Сопроводите торговца до деревни.'],
        ['return', 'вернуться; вернуть', 'Return the key to Mira.', 'Верните ключ Мире.'],
        ['complete', 'выполнить; выполненный', 'Quest complete!', 'Квест выполнен!'],
        ['journal', 'журнал', 'The quest is in your journal.', 'Квест у вас в журнале.'],
        ['help', 'помогать; помощь', 'Please help me!', 'Пожалуйста, помогите мне!'],
        ['bring', 'приносить', 'Bring me three herbs.', 'Принесите мне три травы.'],
        ['give', 'давать', 'Give the key to Mira.', 'Отдайте ключ Мире.'],
        ['traveler', 'путник, путешественник', 'Thank you, traveler.', 'Спасибо, путник.'],
        ['accept', 'принять', 'Accept the quest?', 'Принять квест?'],
        ['decline', 'отказаться', 'Accept or decline?', 'Принять или отказаться?'],
        ['need to', 'нужно (сделать)', 'You need to find the key.', 'Вам нужно найти ключ.'],
        ['want to', 'хотеть (сделать)', 'I want to buy a sword.', 'Я хочу купить меч.'],
        ['have to', 'должен, приходится (сделать)', 'You have to defeat the wolves.', 'Вы должны одолеть волков.'],
        ['talk to', 'поговорить с', 'Talk to the merchant.', 'Поговорите с торговцем.'],
        ['merchant', 'торговец', 'The merchant sells potions.', 'Торговец продаёт зелья.'],
        ['buy', 'покупать', 'Buy a health potion.', 'Купите зелье здоровья.'],
        ['sell', 'продавать', 'Sell your old sword.', 'Продайте свой старый меч.'],
        ['sword', 'меч', 'This sword is expensive.', 'Этот меч дорогой.'],
        ['gold', 'золото, золотые (деньги)', 'You have 200 gold.', 'У вас 200 золотых.'],
        ['price', 'цена', 'Price: 50 gold.', 'Цена: 50 золотых.'],
        ['cost', 'стоить', 'It costs 10 gold.', 'Это стоит 10 золотых.'],
        ['enough', 'достаточно', 'You don\'t have enough gold.', 'У вас недостаточно золота.'],
        ['potion', 'зелье', 'Drink a potion.', 'Выпейте зелье.'],
        ['village', 'деревня', 'Mira lives in the village.', 'Мира живёт в деревне.'],
        ['cave', 'пещера', 'The wolves live in the cave.', 'Волки живут в пещере.'],
        ['tower', 'башня', 'Where is the tower?', 'Где башня?'],
        ['letter', 'письмо', 'Deliver this letter, please.', 'Доставьте это письмо, пожалуйста.'],
        ['dangerous', 'опасный', 'The cave is dangerous at night.', 'Ночью пещера опасна.'],
        ['safe', 'безопасный; в безопасности', 'You are safe here.', 'Здесь вы в безопасности.'],
        ['wolf', 'волк (мн. ч. wolves)', 'Defeat six wolves.', 'Победите шесть волков.'],
        ['herb', 'трава (лечебная)', 'The merchant buys herbs.', 'Торговец покупает травы.']
      ],
      texts: [
        {
          id: 't-g-2-1', title: 'Mira\'s Key', level: 'A1',
          text: `Mira: Hello, traveler! Please help me!
> What do I need to do?
Mira: Wolves live in the cave. They are dangerous. One wolf has my key. I need my key!
> Where is the cave?
Mira: Go to the old tower. The cave is there.
> Why do you need the key?
Mira: It is the key to my house. I want to go home!
> Do I have to attack the wolves?
Mira: Yes, you have to defeat them. And you need to buy potions. The merchant in the village sells them.
> What is the reward?
Mira: 150 gold and a health potion.
> OK. I want to help.
[Accept]  [Decline]

JOURNAL — Mira's Key
Objective: Reach the old tower (0/1)
Objective: Defeat the wolves (0/6)
Objective: Find Mira's key (0/1)
Objective: Return the key to Mira (0/1)
Optional: Collect 5 herbs (0/5)
Reward: 150 gold, a health potion`,
          questions: [
            { q: 'Where do the wolves live?', o: ['In the village', 'In the cave', 'In Mira\'s house'], a: 1 },
            { q: 'What does Mira want?', o: ['Her key', 'A sword', 'Five potions'], a: 0 },
            { q: 'Who sells potions?', o: ['Mira', 'The merchant', 'The wolves'], a: 1 }
          ]
        },
        {
          id: 't-g-2-2', title: 'At the Merchant', level: 'A1',
          text: `Merchant: Hello, traveler! Do you want to buy or sell?
> I want to buy a health potion. How much is it?
Merchant: It costs 10 gold.
> I need three potions.
Merchant: Three potions — 30 gold. Here you are.
> How much is this sword?
Merchant: This sword? It is a very good sword. The price is 300 gold.
> 300 gold? It is expensive! I don't have enough gold.
Merchant: Do you want to sell something? I buy herbs and old weapons.
> I want to sell five herbs.
Merchant: Five herbs… 50 gold. OK?
> OK. And how much are these swords?
Merchant: They are cheap. They cost 80 gold. But they are old.
> Thank you. I don't need an old sword.
Merchant: Goodbye, traveler! The cave is dangerous at night!

+50 gold
Optional: Collect 5 herbs (5/5) — complete!`,
          questions: [
            { q: 'How much is one health potion?', o: ['10 gold', '30 gold', '300 gold'], a: 0 },
            { q: 'Why doesn\'t the traveler buy the good sword?', o: ['It is old', 'The traveler doesn\'t have enough gold', 'The merchant doesn\'t sell it'], a: 1 },
            { q: 'What does the traveler sell?', o: ['An old sword', 'Five herbs', 'Three potions'], a: 1 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: 'Collect five herbs. Что нужно сделать?', o: ['Продать пять трав', 'Собрать пять трав', 'Купить пять трав'], a: 1, why: 'collect — собирать.' },
        { t: 'choice', q: 'Escort the merchant to the village.', o: ['Одолейте торговца в деревне', 'Сопроводите торговца до деревни', 'Найдите торговца в деревне'], a: 1, why: 'escort — сопроводить, охранять в пути; to the village — до деревни.' },
        { t: 'choice', q: 'Кнопка, чтобы взять квест:', o: ['Decline', 'Accept', 'Return'], a: 1, why: 'Accept — принять, Decline — отказаться.' },
        { t: 'choice', q: 'You don\'t have enough gold.', o: ['Вам не нужно золото', 'У вас недостаточно золота', 'У вас много золота'], a: 1, why: 'not enough — недостаточно: золото есть, но его мало.' },
        { t: 'choice', q: 'Go to the cave to find the key. Что значит «to find»?', o: ['в пещеру', 'чтобы найти', 'нашёл'], a: 1, why: 'to + глагол = «чтобы».' },
        { t: 'choice', q: 'I want ___ a potion.', o: ['buy', 'to buy', 'buys'], a: 1, why: 'После want перед действием нужен to: want to + глагол.' },
        { t: 'choice', q: 'The traveler ___ to buy a sword.', o: ['want', 'wants', 'is want'], a: 1, why: 'The traveler — он (he) → wants с окончанием -s.' },
        { t: 'choice', q: 'How much ___ these potions?', o: ['is', 'are', 'costs'], a: 1, why: 'these potions — много предметов → are.' },
        { t: 'gap', q: 'You ___ to find the key. (нужно)', a: ['need'], why: 'need to + глагол = «нужно»; you — без -s.' },
        { t: 'gap', q: 'I ___ to buy a potion. (хочу)', a: ['want'], why: 'want to + глагол = «хочу».' },
        { t: 'gap', q: 'She ___ to sleep. (ей нужно)', a: ['needs'], why: 'she → needs: -s к need, а не к sleep.' },
        { t: 'gap', q: '___ the letter to the merchant. (доставьте)', a: ['deliver'], why: 'Задание — команда: глагол deliver первым словом.' },
        { t: 'gap', q: 'The potion ___ 10 gold. (стоит)', a: ['costs'], why: 'The potion — оно (it) → costs с -s.' },
        { t: 'gap', q: 'You ___ have to attack. (не обязательно)', a: ['don\'t', 'do not'], why: 'don\'t have to = не обязательно.' },
        { t: 'order', a: 'What do I need to do', ru: 'Что мне нужно сделать?' },
        { t: 'order', a: 'I want to sell five herbs', ru: 'Я хочу продать пять трав.' },
        { t: 'tr', q: 'Принесите мне три травы.', a: ['bring me three herbs', 'bring me 3 herbs', 'please bring me three herbs', 'bring me three herbs please'] },
        { t: 'tr', q: 'Я хочу продать меч.', a: ['i want to sell a sword', 'i want to sell the sword', 'i want to sell my sword'] },
        { t: 'listen', say: 'Thank you, traveler', a: ['thank you traveler', 'thank you traveller'] }
      ],
      test: [
        { t: 'choice', q: 'Defeat the wolves =', o: ['Найдите волков', 'Одолейте волков', 'Сопроводите волков'], a: 1, why: 'defeat — победить, одолеть.' },
        { t: 'choice', q: 'Reach the tower =', o: ['Доберитесь до башни', 'Сопроводите до башни', 'Верните башню'], a: 0, why: 'reach — добраться до места.' },
        { t: 'choice', q: 'Sell herbs ___ get gold.', o: ['for', 'to', 'at'], a: 1, why: 'После пропуска глагол get → to, «чтобы получить».' },
        { t: 'choice', q: 'Sell herbs ___ 50 gold.', o: ['to', 'for', 'at'], a: 1, why: 'После пропуска предмет (50 gold) → for, «за 50 золотых».' },
        { t: 'choice', q: 'You don\'t have to talk to the merchant. Это значит:', o: ['С торговцем говорить нельзя', 'С торговцем говорить не обязательно', 'С торговцем нужно поговорить'], a: 1, why: 'don\'t have to = не обязательно; запрет был бы Don\'t talk…' },
        { t: 'choice', q: 'Как запретить: «Не продавай меч!»', o: ['Don\'t sell the sword!', 'You don\'t have to sell the sword.', 'Not sell the sword!'], a: 0, why: 'Запрет = Don\'t + глагол; don\'t have to — только «не обязательно».' },
        { t: 'choice', q: 'Правильный вопрос:', o: ['What I need to do?', 'What do I need to do?', 'What need I to do?'], a: 1, why: 'В вопросе Present Simple нужен do: What do I need to do?' },
        { t: 'choice', q: 'These swords ___ 80 gold.', o: ['cost', 'costs', 'is cost'], a: 0, why: 'These swords — они (they) → cost без -s.' },
        { t: 'gap', q: 'He ___ to defeat the wolves. (должен — have to)', a: ['has'], why: 'he, she, it → has to.' },
        { t: 'gap', q: '___ Mira want to go home? (вопрос)', a: ['does'], why: 'Вопрос про she (Mira) → Does + want без -s.' },
        { t: 'gap', q: 'The merchant ___ herbs. (покупает)', a: ['buys'], why: 'The merchant — он (he) → buys с -s.' },
        { t: 'gap', q: 'I don\'t have ___ gold. (достаточно)', a: ['enough'], why: 'enough ставим перед предметом: enough gold.' }
      ]
    },

    // ───────────────────────────── GAMING 3 ─────────────────────────────
    {
      id: 'g-3', level: 'A1', num: 3, track: 'games', unlockAfter: 'a1-7',
      title: 'Игры: онлайн, чат и войс',
      summary: 'Говорить с командой в войсе и чате: короткие фразы, команды и Let\'s, что происходит прямо сейчас, просьбы с can и сленг — без грубостей.',
      grammar: [
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
<tr><td><span class="say">Nice shot!</span></td><td>That was a nice shot.</td><td>Классный выстрел!</td></tr>
<tr><td><span class="say">Two enemies!</span></td><td>There are two enemies.</td><td>Два врага!</td></tr>
</table>
<div class="g-bad">I ready. <span class="muted">— это ни коротко, ни полностью</span></div>
<div class="g-good">Ready! <span class="muted">или</span> I'm ready.</div>
<div class="g-tip">Выкидывать можно только <b>всё начало целиком</b>: Ready! А если начали с I — договаривайте с <b>am</b>: I'm ready. В упражнениях курса и в письмах пишите полностью.</div>
<div class="mini" data-q="Тиммейт кричит: On my way! Что он имеет в виду?" data-o="Это мой путь|Уже иду к тебе|Уйди с дороги" data-a="1" data-why="On my way = I am on my way — я в пути, уже бегу."></div>`
        },
        {
          title: '2. Команды: Follow me! Don\'t push! Let\'s go!',
          html: `
<div class="g-idea">Приказ в войсе — та же форма, что в меню игры: <b>глагол первым словом</b>. Запрет — <b>Don't</b> + глагол. А чтобы позвать всех сделать что-то <b>вместе</b>, ставим <b>Let's</b> + глагол («давай / давайте»).</div>
<ul class="g-list">
<li><span class="say">Follow me!</span> — За мной!</li>
<li><span class="say">Cover me!</span> — Прикрой меня!</li>
<li><span class="say">Wait for me!</span> — Подожди меня!</li>
<li><span class="say">Push!</span> — Давим! Вперёд!</li>
<li><span class="say">Fall back!</span> — Отходим!</li>
<li><span class="say">Don't push, wait!</span> — Не лезь, жди!</li>
</ul>
<div class="g-bad">Wait me!</div>
<div class="g-good">Wait <b>for</b> me! <span class="muted">— ждать кого-то = wait for</span></div>
<div class="g-formula"><span class="g-part">Let's</span><span class="g-plus">+</span><span class="g-part g-v">глагол</span><span class="g-sep">·</span><span class="g-part">Let's not</span><span class="g-plus">+</span><span class="g-part g-v">глагол</span></div>
<ul class="g-list">
<li><span class="say">Let's go!</span> — Погнали!</li>
<li><span class="say">Let's queue together.</span> — Давай вместе в поиск.</li>
<li><span class="say">Let's go to the tower.</span> — Давайте к башне.</li>
<li><span class="say">Let's not push. Let's wait.</span> — Давайте не будем лезть. Подождём.</li>
</ul>
<p><b>Let's</b> = let us, «давай <b>мы</b>». Поэтому <b>we</b> после него не нужно.</p>
<div class="g-bad">Let's to go!</div>
<div class="g-good">Let's go! <span class="muted">— после Let's глагол без to</span></div>
<div class="g-bad">Let's don't push.</div>
<div class="g-good">Let's <b>not</b> push.</div>
<div class="g-tip">Пожелания часто строятся как команды: <span class="say">Have fun!</span> — Веселитесь! Вместе с <span class="say">Good luck!</span> (Удачи!) получается чатовое glhf.</div>
<div class="mini" data-q="«Давайте подождём Лину»" data-o="Let's wait for Lina.|Let's to wait for Lina.|Let's we wait Lina." data-a="0" data-why="Let's + глагол без to и без we; ждать кого-то = wait for."></div>
<div class="mini" data-q="«Давайте не будем давить!»" data-o="Let's don't push!|Let's not push!|Not let's push!" data-a="1" data-why="Отрицание с Let's — Let's not + глагол."></div>`
        },
        {
          title: '3. Что происходит прямо сейчас: I\'m healing!',
          html: `
<div class="g-idea">В бою всё происходит <b>прямо сейчас</b>. Для этого у вас уже есть Present Continuous из урока 5: <b>am / is / are + глагол-ing</b>.</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part">am / is / are</span><span class="g-plus">+</span><span class="g-part g-v">глагол-ing</span></div>
<ul class="g-list">
<li><span class="say">I'm healing, cover me!</span> — Я лечусь, прикрой!</li>
<li><span class="say">I'm waiting for you.</span> — Я жду тебя.</li>
<li><span class="say">They're pushing!</span> — Они давят!</li>
<li><span class="say">Lina is lagging.</span> — У Лины лаги.</li>
<li><span class="say">Where are you going?</span> — Куда ты идёшь?</li>
<li><span class="say">I'm following you.</span> — Я иду за тобой.</li>
</ul>
<p>Сравните с Present Simple — это «обычно, всегда»:</p>
<table>
<tr><th>Обычно</th><th>Прямо сейчас</th></tr>
<tr><td><span class="say">I play every evening.</span></td><td><span class="say">I'm playing now.</span></td></tr>
<tr><td><span class="say">She heals the team.</span> <span class="muted">(её роль)</span></td><td><span class="say">She's healing me.</span></td></tr>
</table>
<div class="g-bad">I healing, cover me!</div>
<div class="g-good">I<b>'m</b> healing, cover me! <span class="muted">— без am нельзя</span></div>
<div class="mini" data-q="Прямо сейчас они давят. Как сказать?" data-o="They push!|They're pushing!|They pushing!" data-a="1" data-why="Прямо сейчас → are + -ing: They're pushing."></div>`
        },
        {
          title: '4. Просьбы: Can you…? Can I…? Could you…?',
          html: `
<div class="g-idea">Из урока 7 вы знаете <b>can</b>. В игре это главный способ попросить: <b>Can you</b> + глагол? — «Можешь…?». <b>Can I</b> + глагол? — «Можно мне…?». Чтобы получился вопрос, <b>can</b> идёт первым.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Ты можешь меня полечить?</p><p class="muted">вопрос — только интонацией</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>Can you</b> heal me?</span></p><p class="muted">слова меняются местами</p></div>
</div>
<div class="g-formula"><span class="g-part g-v">Can</span><span class="g-plus">+</span><span class="g-part">you / I</span><span class="g-plus">+</span><span class="g-part">глагол</span><span class="g-plus">+</span><span class="g-part">?</span></div>
<table>
<tr><th>Просьба</th><th>Перевод</th></tr>
<tr><td><span class="say">Can you heal me?</span></td><td>Можешь меня полечить?</td></tr>
<tr><td><span class="say">Can you wait for us?</span></td><td>Можешь нас подождать?</td></tr>
<tr><td><span class="say">Can you help him?</span></td><td>Можешь ему помочь?</td></tr>
<tr><td><span class="say">Can I play with you?</span></td><td>Можно с вами поиграть?</td></tr>
</table>
<p>После глагола — <b>me, him, her, us, them</b> (урок 7), а не I, he, she:</p>
<div class="g-bad">Can you heal he?</div>
<div class="g-good">Can you heal <b>him</b>?</div>
<div class="g-bad">Can you to heal me?</div>
<div class="g-good">Can you heal me? <span class="muted">— после can глагол без to</span></div>
<p>Ответы: <span class="say">Sure!</span> / <span class="say">Of course!</span> / <span class="say">Sorry, I can't.</span></p>
<div class="g-tip"><b>Could you…?</b> — то же самое, но мягче. Хорошо для незнакомых: <span class="say">Could you repeat, please?</span></div>
<div class="mini" data-q="«Можно мне с вами поиграть?»" data-o="I can play with you?|Can I play with you?|Can I to play with you?" data-a="1" data-why="Вопрос: Can первым, потом I, потом глагол без to."></div>
<div class="mini" data-q="Can you cover ___? (её)" data-o="she|her|hers" data-a="1" data-why="После глагола — форма her."></div>`
        },
        {
          title: '5. Если английский пока слабый',
          html: `
<div class="g-idea">Не молчите — пять фраз решают почти любую проблему. Все они собраны из того, что вы уже знаете: can, don't, not.</div>
<table>
<tr><th>Фраза</th><th>Перевод</th></tr>
<tr><td><span class="say">Sorry, my English is not very good.</span></td><td>Извините, у меня не очень хороший английский.</td></tr>
<tr><td><span class="say">Can you repeat, please?</span></td><td>Можете повторить, пожалуйста?</td></tr>
<tr><td><span class="say">I don't understand.</span></td><td>Я не понимаю.</td></tr>
<tr><td><span class="say">Can you write it in chat?</span></td><td>Можете написать это в чат?</td></tr>
<tr><td><span class="say">No mic, sorry.</span></td><td>Нет микрофона, извините.</td></tr>
</table>
<div class="g-bad">I not understand.</div>
<div class="g-good">I <b>don't</b> understand.</div>
<div class="g-bad">My English not good.</div>
<div class="g-good">My English <b>is</b> not very good.</div>
<div class="g-tip">В онлайн-играх полно людей, для которых английский тоже не родной. Одна фраза про ваш английский обычно сразу делает всех терпеливее.</div>
<div class="mini" data-q="Вы не поняли тиммейта. Что написать?" data-o="I not understand.|I don't understand.|I doesn't understand." data-a="1" data-why="Отрицание в Present Simple: I + don't + глагол."></div>`
        },
        {
          title: '6. Сленг чата и что звучит грубовато',
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
<p>Про сам матч: <span class="say">lobby</span> — лобби, <span class="say">queue</span> — очередь на матч, <span class="say">rank</span> — ранг, <span class="say">respawn</span> — возрождение.</p>
<div class="g-steps"><div class="g-h">Осторожно: грубовато</div><ol>
<li><b>noob</b> о себе — нормально (<span class="say">Sorry, I'm a noob.</span>), о другом — обзывательство.</li>
<li><b>ez</b> (easy) после победы — насмешка над соперником.</li>
<li><b>gg</b> в середине проигранного матча — «всё, сдаёмся», команду это злит.</li>
</ol></div>
<div class="g-bad">you noob, cover me</div>
<div class="g-good">can you cover me? ty!</div>
<div class="g-tip">Правило безопасности простое: <b>glhf</b> в начале, <b>gg wp</b> в конце, <b>ty</b> за помощь. С этими тремя вас везде примут за своего.</div>
<div class="mini" data-q="Что вежливо написать сопернику после матча?" data-o="ez|gg wp|noob" data-a="1" data-why="gg wp — хорошая игра, хорошо сыграно. ez и noob звучат как насмешка."></div>
<div class="mini" data-q="Тиммейт пишет brb. Что делать?" data-o="Он сдаётся — выходить|Он скоро вернётся — подождать|Он лагает — перезапустить" data-a="1" data-why="brb = be right back, сейчас вернусь."></div>`
        },
        {
          title: '7. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">You can heal me?</div><div class="g-good"><b>Can you</b> heal me?</div>
<div class="g-bad">Can you to repeat?</div><div class="g-good">Can you <b>repeat</b>, please?</div>
<div class="g-bad">Can you help he?</div><div class="g-good">Can you help <b>him</b>?</div>
<div class="g-bad">Let's to queue.</div><div class="g-good">Let's <b>queue</b>.</div>
<div class="g-bad">Wait me!</div><div class="g-good">Wait <b>for</b> me!</div>
<div class="g-bad">I healing!</div><div class="g-good">I<b>'m</b> healing!</div>
<div class="g-bad">I not understand.</div><div class="g-good">I <b>don't</b> understand.</div>
<div class="g-bad">ez noob</div><div class="g-good">gg wp</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>В бою — коротко (<b>Need help!</b>), приказ — <b>глагол первым</b>, вместе — <b>Let's + глагол</b>, сейчас — <b>I'm + -ing</b>, просьба — <b>Can you + глагол?</b>, и <b>gg wp</b> вместо <b>ez</b>.</div>`
        }
      ],
      words: [
        ['follow me', 'за мной', 'Follow me! I know the way.', 'За мной! Я знаю дорогу.'],
        ['cover me', 'прикрой меня', 'Cover me, I need to heal.', 'Прикрой меня, мне нужно подлечиться.'],
        ['need help', 'нужна помощь', 'Need help! Two enemies!', 'Нужна помощь! Два врага!'],
        ['on my way', 'иду, уже в пути', 'Wait, I\'m on my way!', 'Подожди, уже бегу!'],
        ['behind you', 'сзади тебя', 'Look out, behind you!', 'Осторожно, сзади!'],
        ['nice shot', 'отличный выстрел', 'Nice shot! One more enemy.', 'Отличный выстрел! Ещё один враг.'],
        ['gg', 'хорошая игра (good game)', 'gg, nice match!', 'хорошая игра, классный матч!'],
        ['wp', 'хорошо сыграно (well played)', 'wp, you are very good!', 'хорошо сыграно, ты очень крут!'],
        ['glhf', 'удачи и хорошей игры (good luck, have fun)', 'Hi all, glhf!', 'Всем привет, удачи!'],
        ['afk', 'отошёл (away from keyboard)', 'Where is Lina? — She is afk.', 'Где Лина? — Она отошла.'],
        ['brb', 'сейчас вернусь (be right back)', 'brb, I need water.', 'сейчас вернусь, мне нужна вода.'],
        ['np', 'без проблем (no problem)', 'ty! — np', 'спасибо! — без проблем'],
        ['ty', 'спасибо (thank you)', 'ty for the heal!', 'спасибо за хил!'],
        ['lag', 'лаг, задержка; лагать', 'Sorry, I\'m lagging.', 'Извините, у меня лагает.'],
        ['noob', 'нуб, новичок', 'I\'m a noob, can you help me?', 'Я новичок, можешь помочь?'],
        ['nerf', 'ослабить (в патче)', 'They need to nerf this weapon.', 'Это оружие нужно ослабить.'],
        ['buff', 'усилить; усиление', 'They need to buff my character.', 'Моего персонажа нужно усилить.'],
        ['op', 'имба, слишком сильный', 'This skill is so op!', 'Этот навык просто имба!'],
        ['respawn', 'возрождение; возродиться', 'Wait for respawn.', 'Жди возрождения.'],
        ['carry', 'тащить (команду)', 'Lina, you\'re carrying us!', 'Лина, ты нас тащишь!'],
        ['lobby', 'лобби', 'We are in the lobby.', 'Мы в лобби.'],
        ['match', 'матч', 'The match starts now.', 'Матч начинается.'],
        ['queue', 'очередь; встать в очередь', 'Let\'s queue together.', 'Давай пойдём в поиск вместе.'],
        ['rank', 'ранг', 'What is your rank?', 'Какой у тебя ранг?'],
        ['teammate', 'союзник, товарищ по команде', 'Help your teammate!', 'Помоги союзнику!'],
        ['ready', 'готов', 'Are you ready?', 'Ты готов?'],
        ['wait', 'ждать', 'Wait for me!', 'Подожди меня!'],
        ['heal', 'лечить; хил', 'Can you heal me?', 'Можешь меня полечить?'],
        ['push', 'давить, наступать', 'Push now!', 'Давим!'],
        ['fall back', 'отступить', 'Too many enemies, fall back!', 'Слишком много врагов, отходим!'],
        ['let\'s', 'давай(те)', 'Let\'s go!', 'Погнали!'],
        ['repeat', 'повторять', 'Can you repeat, please?', 'Можешь повторить, пожалуйста?'],
        ['chat', 'чат; болтать', 'Can you write it in chat?', 'Можешь написать это в чат?'],
        ['mic', 'микрофон', 'Sorry, no mic.', 'Извините, нет микрофона.']
      ],
      texts: [
        {
          id: 't-g-3-1', title: 'Team Chat', level: 'A1',
          text: `[Lobby] Waiting for players… 5/5
[Team] SkyFox: hi all, glhf
[Team] IronBear: glhf!
[Team] You: hi! sorry, my english is not very good
[Team] SkyFox: np :)
[Team] Lina_07: brb
[Team] SkyFox: ok, we are waiting for Lina
[Team] Lina_07: back. ready
MATCH STARTS IN 5… 4… 3…
[Team] IronBear: lag again :(
[Team] SkyFox: follow me, let's go to the tower
[Team] You: on my way
[Team] Lina_07: need help!! 3 enemies
[Team] SkyFox: Lina, fall back!
[Team] You: I'm healing Lina, cover me
[Team] IronBear: this weapon is so op, they need to nerf it
[Team] Lina_07: ty for the heal :)
[Team] SkyFox: they are pushing! don't push, wait
[Team] IronBear: I'm behind you, SkyFox
YOU WIN!
[All] RedKnight: gg wp
[Team] SkyFox: gg! ty for the carry, Lina
[Team] Lina_07: ty :) queue again?
[Team] You: sure! let's go`,
          questions: [
            { q: 'What does Lina write in the lobby?', o: ['brb', 'gg', 'lag again'], a: 0 },
            { q: 'What does IronBear write about the weapon?', o: ['They need to nerf it', 'They need to buff it', 'He wants to sell it'], a: 0 },
            { q: 'The team wins. What do they want to do now?', o: ['Queue again', 'Go to the lobby and wait', 'Write to RedKnight'], a: 0 }
          ]
        },
        {
          id: 't-g-3-2', title: 'Voice Chat: One More Match', level: 'A1',
          text: `Max: OK, team, one more match. Is everyone ready?
Anna: Ready.
You: Sorry, can you repeat? I don't understand.
Max: One more match. Are you ready?
You: Yes, ready!
Max: OK. Follow me. Let's go to the tower.
Anna: Wait, I need to heal. Cover me!
You: I'm covering you. Go, go!
Max: Behind you! Two enemies!
You: Where are they?
Max: Behind the tower!
Anna: Nice shot, Max!
Max: Need help! Can you heal me?
You: On my way!
Anna: Too many enemies. Fall back!
Max: Wait… now there is only one enemy. Let's push!
Anna: We win! gg!
You: gg wp, everyone. Thank you, you are a very good team.
Max: ty! Let's play again!`,
          questions: [
            { q: 'What does Anna need to do?', o: ['To heal', 'To buy a weapon', 'To write in chat'], a: 0 },
            { q: 'The player doesn\'t understand Max. What does the player ask?', o: ['Can you repeat?', 'Can you heal me?', 'Is everyone ready?'], a: 0 },
            { q: 'Who wins the match?', o: ['Max\'s team', 'The enemies', 'We don\'t know'], a: 0 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: 'brb =', o: ['сейчас вернусь', 'удачи', 'хорошая игра'], a: 0, why: 'brb = be right back, «сейчас вернусь».' },
        { t: 'choice', q: 'Что пишут в начале матча?', o: ['gg', 'glhf', 'brb'], a: 1, why: 'glhf = good luck, have fun — пожелание перед игрой; gg — в конце.' },
        { t: 'choice', q: 'Cover me! =', o: ['За мной!', 'Прикрой меня!', 'Подожди меня!'], a: 1, why: 'cover — прикрывать; «за мной» — Follow me, «подожди» — Wait for me.' },
        { t: 'choice', q: 'Какое слово грубо сказать о другом игроке?', o: ['teammate', 'noob', 'wp'], a: 1, why: 'noob о другом — обзывательство; teammate и wp — нейтральные и добрые.' },
        { t: 'choice', q: 'Правильно:', o: ['Can you to heal me?', 'Can you heal me?', 'Can you healing me?'], a: 1, why: 'После can — глагол без to и без -ing.' },
        { t: 'choice', q: '___ go to the tower together!', o: ['Let\'s', 'Let\'s to', 'Let\'s we'], a: 0, why: 'Let\'s + глагол: без to и без we.' },
        { t: 'choice', q: 'Вы прямо сейчас лечите союзника. Как сказать?', o: ['I heal my teammate.', 'I\'m healing my teammate.', 'I healing my teammate.'], a: 1, why: 'Прямо сейчас → am + глагол-ing.' },
        { t: 'choice', q: 'Can you heal ___? (его)', o: ['he', 'him', 'his'], a: 1, why: 'После глагола — him; his — «его» в значении «чей».' },
        { t: 'gap', q: '___ me! I know the way. (за мной)', a: ['follow'], why: 'Команда начинается с глагола: Follow me — за мной.' },
        { t: 'gap', q: 'On my ___! (уже бегу)', a: ['way'], why: 'On my way = я в пути, уже бегу.' },
        { t: 'gap', q: 'Look out, ___ you! (сзади)', a: ['behind'], why: 'behind — позади, сзади.' },
        { t: 'gap', q: 'They need to ___ this weapon. (ослабить)', a: ['nerf'], why: 'nerf — ослабить, buff — усилить.' },
        { t: 'gap', q: 'Wait ___ me! (подожди меня)', a: ['for'], why: 'Ждать кого-то = wait for + кто.' },
        { t: 'order', a: 'Sorry my English is not very good', ru: 'Извините, у меня не очень хороший английский.' },
        { t: 'order', a: 'Can you write it in chat', ru: 'Можешь написать это в чат?' },
        { t: 'order', a: 'Let\'s queue together', ru: 'Давай вместе в поиск.' },
        { t: 'tr', q: 'Нужна помощь!', a: ['need help', 'i need help'] },
        { t: 'tr', q: 'Можешь подождать?', a: ['can you wait', 'could you wait', 'can you wait please', 'could you wait please'] },
        { t: 'listen', say: 'Nice shot', a: ['nice shot'] }
      ],
      test: [
        { t: 'choice', q: 'gg wp — это…', o: ['«хорошая игра, хорошо сыграно»', '«удачи, веселись»', '«сейчас вернусь»'], a: 0, why: 'gg = good game, wp = well played — пишут в конце матча.' },
        { t: 'choice', q: 'This skill is so op! Значит, навык…', o: ['слабый', 'слишком сильный', 'новый'], a: 1, why: 'op = overpowered, «имба».' },
        { t: 'choice', q: 'Fall back! =', o: ['Давим!', 'Отходим!', 'За мной!'], a: 1, why: 'fall back — отступить; «давим» — Push, «за мной» — Follow me.' },
        { t: 'choice', q: '«Можно мне с вами поиграть?»', o: ['I can play with you?', 'Can I play with you?', 'Can I to play with you?'], a: 1, why: 'Вопрос: Can первым, потом I, потом глагол без to.' },
        { t: 'choice', q: '«Давайте не будем лезть вперёд!»', o: ['Let\'s not push!', 'Let\'s don\'t push!', 'Not let\'s push!'], a: 0, why: 'Отрицание с Let\'s — Let\'s not + глагол.' },
        { t: 'choice', q: 'Как вежливее всего попросить незнакомого игрока повторить?', o: ['Repeat!', 'Could you repeat, please?', 'You repeat?'], a: 1, why: 'Could you…, please? — мягкая вежливая просьба.' },
        { t: 'choice', q: 'Тиммейт пишет afk. Это значит, что он…', o: ['отошёл от компьютера', 'лагает', 'сдаётся'], a: 0, why: 'afk = away from keyboard, «не у клавиатуры».' },
        { t: 'choice', q: 'Как коротко крикнуть «Я готов!»?', o: ['I ready!', 'Ready!', 'Am ready I!'], a: 1, why: 'Сокращаем всё начало целиком: Ready! (или полностью: I\'m ready).' },
        { t: 'gap', q: 'Wait for ___. (возрождения)', a: ['respawn'], why: 'respawn — возрождение персонажа.' },
        { t: 'gap', q: '___ push! Wait! (не)', a: ['don\'t', 'do not'], why: 'Запрет = Don\'t + глагол.' },
        { t: 'gap', q: 'Anna ___ healing me right now.', a: ['is'], why: 'Прямо сейчас → is + -ing; Anna — она (she) → is.' },
        { t: 'gap', q: 'Can you cover ___? (нас)', a: ['us'], why: 'После глагола «нас» = us.' }
      ]
    }
  ].forEach(put);
})();
