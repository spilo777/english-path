// Грамматика по шагам для юнита g-2: задание в журнале = команда, два разных to («куда» и «чтобы»), want to / need to, have to, диалог с NPC и торговцем.
(function () {
  const u = COURSE.units.find((x) => x.id === 'g-2'); if (!u) return;
  u.walk = [
    // ───────────── 1. Задание — это команда ─────────────
    { title: 'Как понять задание в журнале', steps: [
      { t: 'idea', text: `В журнале появилось: <b>Deliver the letter to the merchant.</b> Это та же команда, что в меню из прошлого урока: первое слово — слово-действие (что делать). Нашли его — и вы уже поняли половину задания.`,
        lit: [['Deliver', 'доставьте'], ['the letter', 'письмо'], ['to the merchant', 'торговцу']],
        ex: [['Deliver the letter to the merchant.', 'Доставьте письмо торговцу.'], ['Defeat the wolves.', 'Одолейте волков.'], ['Collect five herbs.', 'Соберите пять трав.']] },
      { t: 'idea', text: `Дальше идут подробности, всегда в одном порядке: сначала <b>что / кого</b>, потом <b>to</b> + куда или кому. Читайте задание по трём кусочкам.`,
        rows: [['1. Что делать', 'Return'], ['2. Что / кого', 'the key'], ['3. to — куда / кому', 'to Mira']],
        ex: [['Return the key to Mira.', 'Верните ключ Мире.'], ['Escort the merchant to the village.', 'Сопроводите торговца до деревни.'], ['Give the sword to the traveler.', 'Отдайте меч путнику.']] },
      { t: 'check', q: 'Скажите: «Верните ключ Мире»', o: ['Return to Mira the key.', 'Return the key to Mira.', 'The key return to Mira.'], a: 1,
        why: 'Сначала слово-действие, потом что (the key), потом to + кому (to Mira).' },
      { t: 'check', q: 'Скажите игроку: «Доставьте письмо Мире»', o: ['To Mira deliver the letter.', 'Deliver the letter to Mira.', 'The letter deliver to Mira.'], a: 1,
        why: 'Сначала слово-действие, потом что (the letter), потом to + кому.' },
      { t: 'idea', text: `Одно слово хитрое: <b>reach</b> уже само значит «добраться <b>до</b>». Поэтому после него to не ставят.`,
        bad: 'Reach to the tower.', good: 'Reach the tower.',
        ex: [['Reach the old tower.', 'Доберитесь до старой башни.'], ['Reach the cave.', 'Доберитесь до пещеры.']],
        tip: `Reach — как «достигни»: достигни башни, без «до».` },
      { t: 'check', q: 'Скажите: «Доберитесь до башни»', o: ['Reach to the tower.', 'Reach the tower.', 'Reach in the tower.'], a: 1,
        why: 'reach уже значит «добраться до» — to после него не нужно.' },
      { t: 'idea', text: `Итог: задание в журнале — это команда. Читаем по кусочкам:`,
        rows: [['слово-действие', 'Deliver'], ['что / кого', 'the letter'], ['to + куда / кому', 'to the merchant']],
        tip: `Мелочи рядом: <b>2/6</b> — сделано 2 из 6; <b>(Optional)</b> — эту цель можно пропустить; <b>Quest complete!</b> — квест выполнен.` }
    ]},

    // ───────────── 2. Два разных to ─────────────
    { title: 'Два разных to: «куда» и «чтобы»', steps: [
      { t: 'idea', text: `В задании <b>Go to the cave to find the key</b> слово to стоит два раза — и это два разных to. Первое — «в / к»: после него место или человек.`,
        lit: [['Go', 'идите'], ['to the cave', 'в пещеру'], ['to find', 'чтобы найти'], ['the key', 'ключ']],
        ex: [['Go to the cave.', 'Идите в пещеру.'], ['Talk to the merchant.', 'Поговорите с торговцем.'], ['Return to Mira.', 'Вернитесь к Мире.']] },
      { t: 'idea', text: `Второе to вы знаете из меню: Press A <b>to jump</b> — «чтобы прыгнуть». Если после to стоит слово-действие, это всегда «чтобы».`,
        rows: [['to + место / человек', 'куда, к кому', 'to the cave'], ['to + слово-действие', 'чтобы', 'to find the key']],
        ex: [['Sell herbs to get gold.', 'Продавайте травы, чтобы получить золото.'], ['Defeat the wolves to reach the tower.', 'Одолейте волков, чтобы добраться до башни.'], ['Talk to Mira to start the quest.', 'Поговорите с Мирой, чтобы начать квест.']] },
      { t: 'check', q: 'Talk to Mira ___ start the quest.', ru: 'Поговорите с Мирой, чтобы начать квест.', o: ['for', 'to', 'and'], a: 1,
        why: 'После пропуска слово-действие start → to, «чтобы начать».' },
      { t: 'idea', text: `Ловушка: по-русски «чтобы получить» и «для золота» — похожие мысли, и хочется сказать for. Правило: перед словом-действием — только <b>to</b>. А <b>for</b> ставим перед предметом: «за что».`,
        bad: 'Sell herbs for get gold.', good: 'Sell herbs <b>to</b> get gold.',
        ex: [['Sell the sword to get gold.', 'Продайте меч, чтобы получить золото.'], ['Sell the sword for 100 gold.', 'Продайте меч за 100 золотых.']] },
      { t: 'check', q: 'Скажите: «Идите в деревню, чтобы купить зелье»', o: ['Go to the village for buy a potion.', 'Go to the village to buy a potion.', 'Go the village to buy a potion.'], a: 1,
        why: 'Куда — to the village; чтобы + действие — to buy. For перед действием нельзя.' },
      { t: 'idea', text: `Итог: смотрите, что стоит после to.`,
        rows: [['to + the … / имя', 'куда, к кому', 'Go to the cave.'], ['to + слово-действие', 'чтобы', 'Go to find the key.'], ['for + предмет', 'за что', 'Sell it for 50 gold.']] }
    ]},

    // ───────────── 3. want to / need to ─────────────
    { title: 'Хочу и нужно: want to / need to', steps: [
      { t: 'idea', text: `Хотите сказать торговцу «Я хочу купить меч». По-английски между want и buy обязательно стоит маленькое <b>to</b>: want <b>to</b> buy. Два слова-действия подряд без to не ставят.`,
        lit: [['I', 'я'], ['want', 'хочу'], ['to buy', 'купить'], ['a sword', 'меч']],
        ex: [['I want to buy a sword.', 'Я хочу купить меч.'], ['I want to help.', 'Я хочу помочь.'], ['We want to go to the cave.', 'Мы хотим пойти в пещеру.']],
        bad: 'I want buy a sword.', good: 'I want <b>to</b> buy a sword.' },
      { t: 'idea', text: `«Вам нужно найти ключ» — так же, только с <b>need to</b>. По-русски «вам нужно», а по-английски начинаем с того, кто: <b>you</b> need to — как будто «вы нуждаетесь».`,
        lit: [['You', 'вы'], ['need', 'нуждаетесь'], ['to find', 'найти'], ['the key', 'ключ']],
        ex: [['You need to find the key.', 'Вам нужно найти ключ.'], ['I need to buy potions.', 'Мне нужно купить зелья.'], ['We need to talk to Mira.', 'Нам нужно поговорить с Мирой.']],
        bad: 'To you need to find the key.', good: '<b>You</b> need to find the key.',
        tip: `Фраза You need to… в подсказке — ваш главный друг: всё, что после неё, и есть то, чего игра от вас хочет.` },
      { t: 'check', q: 'Скажите: «Мне нужно купить зелье»', o: ['I need buy a potion.', 'I need to buy a potion.', 'To me need to buy a potion.'], a: 1,
        why: 'Начинаем с I; между need и buy обязательно to.' },
      { t: 'idea', text: `want и need — обычные слова-действия, как play или work. Поэтому для he / she / it (Mira, the merchant) они получают хвостик -s: <b>wants</b>, <b>needs</b>. Хвостик — к want / need, а не к слову после to.`,
        bad: 'Mira need to find the key.', good: 'Mira need<b>s</b> to find the key.',
        ex: [['Mira needs to find the key.', 'Мире нужно найти ключ.'], ['The merchant wants to sell potions.', 'Торговец хочет продать зелья.']] },
      { t: 'idea', text: `«Не хочу» и вопросы — тоже как у любого слова-действия: с помощником do / does из урока 4.`,
        rows: [['не', 'I don’t want to sell it.', 'Я не хочу это продавать.'], ['вопрос', 'Do you want to help?', 'Хотите помочь?'], ['что?', 'What do I need to do?', 'Что мне нужно сделать?']],
        bad: 'What I need to do?', good: 'What <b>do</b> I need to do?' },
      { t: 'check', q: 'Спросите персонажа: «Что мне нужно сделать?»', o: ['What I need to do?', 'What do I need to do?', 'What need I do?'], a: 1,
        why: 'Вопрос со словом-действием: What + do + I + need to + действие.' },
      { t: 'idea', text: `А если после want / need стоит не действие, а предмет — to не нужно. «Мне нужно зелье» — просто I need a potion.`,
        rows: [['want / need + предмет', 'I need a potion.', 'Мне нужно зелье.'], ['want / need + to + действие', 'I need to buy a potion.', 'Мне нужно купить зелье.']],
        bad: 'I need to a sword.', good: 'I need a sword.' },
      { t: 'idea', text: `Итог: want / need + <b>to</b> + действие. Хвостик -s и помощник do — как у всех слов-действий.`,
        rows: [['I want to buy…', 'Я хочу купить…'], ['You need to find…', 'Вам нужно найти…'], ['Mira needs to…', 'Мире нужно…'], ['What do I need to do?', 'Что мне нужно сделать?']] }
    ]},

    // ───────────── 4. have to ─────────────
    { title: 'Должен: have to', steps: [
      { t: 'idea', text: `NPC говорит: <b>You have to defeat the wolves</b> — «Вы должны одолеть волков». <b>have to</b> + действие — «должен, придётся»: так требует игра, выбора нет. По смыслу это почти need to.`,
        lit: [['You', 'вы'], ['have to', 'должны'], ['defeat', 'одолеть'], ['the wolves', 'волков']],
        ex: [['You have to defeat the wolves.', 'Вы должны одолеть волков.'], ['I have to go, sorry.', 'Мне пора, извини.'], ['Mira has to work on Saturday.', 'Мире приходится работать в субботу.']],
        rows: [['I / you / we / they', 'have to'], ['he / she / it, Mira', 'has to']],
        bad: 'He have to go.', good: 'He <b>has</b> to go.',
        tip: `I have to go — самая частая фраза в чате, когда пора выходить из игры.` },
      { t: 'check', q: 'He ___ to find the key.', ru: 'Он должен найти ключ.', o: ['have', 'has', 'haves'], a: 1,
        why: 'he, she, it → has to.' },
      { t: 'idea', text: `Спросить «Мне обязательно идти?» — через помощника do, как у любого слова-действия. have на первое место не прыгает.`,
        lit: [['Do', '(помощник)'], ['I', 'я'], ['have to', 'должен'], ['go', 'идти'], ['?', '']],
        ex: [['Do I have to go now?', 'Мне обязательно идти сейчас (now — сейчас)?'], ['Does she have to go to the cave?', 'Ей нужно идти в пещеру?']],
        bad: 'Have I to talk to him?', good: '<b>Do</b> I have to talk to him?' },
      { t: 'check', q: 'Спросите: «Мне обязательно говорить с торговцем?»', o: ['Have I to talk to the merchant?', 'Do I have to talk to the merchant?', 'I have to talk to the merchant?'], a: 1,
        why: 'Вопрос со словом-действием — через do: Do I have to…?' },
      { t: 'idea', text: `Главная ловушка — «не». <b>don’t have to</b> значит «не обязательно», а вовсе не «нельзя». Запрет — это команда с Don’t из прошлого урока.`,
        rows: [['You don’t have to attack.', 'Можно не атаковать — как хотите.'], ['Don’t attack!', 'Не атакуйте! — запрет.']],
        tip: `don’t have to — это свобода: «не надо, если не хотите».` },
      { t: 'check', q: 'Персонаж говорит: «Травы собирать не обязательно». Как это по-английски?', o: ['Don’t collect the herbs!', 'You don’t have to collect the herbs.', 'You have to collect the herbs.'], a: 1,
        why: 'don’t have to = не обязательно. Don’t collect! — это запрет.' },
      { t: 'idea', text: `Итог: have to / has to + действие — «должен». Вопрос и «не» — через do.`,
        rows: [['You have to go.', 'Вы должны идти.'], ['Do I have to go?', 'Мне обязательно идти?'], ['You don’t have to go.', 'Идти не обязательно.']] }
    ]},

    // ───────────── 5. Диалог с NPC и торговцем ─────────────
    { title: 'Диалог с NPC и торговцем', steps: [
      { t: 'idea', text: `<b>NPC</b> — персонаж, которым управляет игра. Его реплики во всех играх похожи: просьба о помощи, команда «принеси», подсказка с You need to… и награда.`,
        rows: [['Please help me, traveler!', 'Пожалуйста, помогите мне, путник!'], ['Bring me five herbs.', 'Принесите мне пять трав.'], ['You need to find my key.', 'Вам нужно найти мой ключ.'], ['Here is your reward.', 'Вот ваша награда.']] },
      { t: 'idea', text: `Ваши ответы — короткие вопросы, которые вы уже умеете строить. Под диалогом две кнопки: <b>Accept</b> — принять квест, <b>Decline</b> — отказаться.`,
        rows: [['What do I need to do?', 'Что мне нужно сделать?'], ['Where is the cave?', 'Где пещера?'], ['What is the reward?', 'Какая награда?'], ['Not now. / Goodbye.', 'Не сейчас. / До свидания.']] },
      { t: 'idea', text: `У торговца две кнопки: <b>Buy</b> — купить, <b>Sell</b> — продать. Цену спрашиваем <b>How much is…?</b> — «сколько стоит». Один предмет → is, много → are, как в уроке 1.`,
        lit: [['How much', 'сколько'], ['is', 'стоит'], ['this sword', 'этот меч'], ['?', '']],
        rows: [['один', 'How much is this sword?', 'It costs 50 gold.'], ['много', 'How much are these potions?', 'They cost 30 gold.']],
        bad: 'How much is these potions?', good: 'How much <b>are</b> these potions?',
        tip: `Золото не считают по штукам: 50 <b>gold</b>, а не 50 golds.` },
      { t: 'check', q: 'How much ___ these herbs?', ru: 'Сколько стоят эти травы?', o: ['is', 'are', 'costs'], a: 1,
        why: 'these herbs — много предметов → are.' },
      { t: 'idea', text: `Про деньги торговец говорит <b>enough</b> — «достаточно», и ставит его перед предметом: enough gold. Not enough — вам чего-то не хватает.`,
        ex: [['You don’t have enough gold.', 'У вас недостаточно золота.'], ['I have enough potions.', 'У меня достаточно зелий.']],
        tip: `Not enough gold, not enough health — одна из самых частых надписей в любой игре.` },
      { t: 'check', q: 'Скажите торговцу: «У меня недостаточно золота»', o: ['I don’t have enough gold.', 'I don’t have gold enough.', 'I not have enough gold.'], a: 0,
        why: 'enough стоит перед предметом: enough gold; «не» — через don’t.' },
      { t: 'idea', text: `Итог: в диалоге с NPC вы спрашиваете, а у торговца — торгуетесь.`,
        rows: [['What do I need to do?', 'Что мне нужно сделать?'], ['How much is / are…?', 'Сколько стоит / стоят…?'], ['not enough gold', 'недостаточно золота']] }
    ]}
  ];
})();
