// Грамматика по шагам для юнита a2-20: реальное условие (if + настоящее, will в другой половине), if или when, «если бы» (if I had… I would…), What would you do if…?, could, If I were you, if I have / if I had, who / which / that, «который» можно пропустить (the game I bought), предлог в конце, where, типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-20'); if (!u) return;
  u.walk = [
    // ───────────── 1. If it rains — после if нет will ─────────────
    { title: '«Если пойдёт дождь» — после if нет will', steps: [
      { t: 'idea', text: `Хотите сказать: «Если завтра будет дождь, мы останемся дома». По-русски будущее в обеих половинах. По-английски после <b>if</b> (если) — настоящее время: if it <b>rains</b>.`,
        lit: [['If', 'если'], ['it', '(оно)'], ['rains', 'идёт дождь'], ['we’ll stay', 'мы останемся'], ['at home', 'дома']],
        ex: [['If it rains, we’ll stay at home.', 'Если пойдёт дождь, мы останемся дома.'], ['If I have time tonight, I’ll finish the icons.', 'Если вечером будет время, я доделаю иконки.'], ['If you call, I’ll answer.', 'Если позвонишь, я отвечу.']] },
      { t: 'idea', text: `Почему так? Слово if уже говорит, что это про потом, — второй раз будущее не нужно. <b>will</b> живёт только в другой половине фразы.`,
        bad: 'If it will rain, we’ll stay at home.', good: 'If it <b>rains</b>, we’ll stay at home.',
        tip: `По-русски «если пойдёт дождь» — будущее. По-английски «если идёт дождь» — настоящее. Это самое частое место ошибок — не переживайте, дальше потренируемся.` },
      { t: 'check', q: 'Скажите: «Если ты увидишь Макса, я позвоню»', o: ['If you will see Max, I’ll call.', 'If you see Max, I’ll call.', 'If you see Max, I call.'], a: 1,
        why: 'После if — настоящее (see), will — в другой половине (I’ll call).' },
      { t: 'idea', text: `После if всё как в обычном настоящем: с he / she / it хвостик -s, «не» — don’t / doesn’t. А в другой половине кроме will можно can или просьбу.`,
        ex: [['If you don’t save, you’ll lose everything.', 'Если не сохранишься (save), потеряешь всё.'], ['If you’re tired, go to bed.', 'Если устал, иди спать.'], ['If the courier comes, can you open the door?', 'Если придёт курьер (courier), откроешь дверь?']] },
      { t: 'check', q: 'If you ___ hungry, there’s soup in the fridge.', ru: 'Если проголодаешься, в холодильнике есть суп.', o: ['will be', 'are', 'would be'], a: 1,
        why: 'После if — настоящее: if you are.' },
      { t: 'idea', text: `if можно поставить и в середину. В начале после условия ставим запятую, в середине запятая не нужна. А в разговоре часто звучит одна if-половина.`,
        ex: [['You’ll miss the bus if you don’t hurry.', 'Опоздаешь на автобус, если не поторопишься (hurry).'], ['Are you coming? — Yes, if I finish work on time.', 'Придёшь? — Да, если закончу работу вовремя.'], ['Is it OK if I sit here?', 'Можно я здесь сяду?']] },
      { t: 'idea', text: `Итог: может случиться → if + настоящее, will — в другой половине.`,
        rows: [['if + настоящее', 'If it rains,'], ['will / can / просьба', 'we’ll stay at home.']] }
    ]},

    // ───────────── 2. If или when ─────────────
    { title: '«Если» или «когда» — if или when', steps: [
      { t: 'idea', text: `<b>if</b> — может быть, а может и нет. <b>when</b> (когда) — это точно случится, вопрос только во времени. Спросите себя: «А это точно будет?»`,
        ex: [['Maybe. If I go out, I’ll buy some bread.', 'Может быть. Если пойду, куплю хлеба.'], ['Yes. When I go out, I’ll buy some bread.', 'Да. Когда пойду, куплю хлеба.'], ['If I get the job, I’ll buy a new monitor.', 'Если получу эту работу, куплю новый монитор.']] },
      { t: 'idea', text: `После when про будущее — тоже настоящее время, как после if. Помните when из Past Continuous? Там оно было про прошлое, а здесь — про потом, но без will.`,
        ex: [['When I get home, I’ll have dinner.', 'Когда приду домой, поужинаю.'], ['When the film ends, let’s order pizza.', 'Когда фильм кончится, давай закажем пиццу.']],
        bad: 'When I will get home, I’ll call you.', good: 'When I <b>get</b> home, I’ll call you.' },
      { t: 'check', q: 'I’m going to the shop. ___ I come back, we can play.', ru: 'Я иду в магазин. Когда вернусь, можем поиграть.', o: ['If', 'When', 'Would'], a: 1,
        why: 'Я точно вернусь → when.' },
      { t: 'check', q: 'Скажите: «Если я опоздаю, начинайте без меня»', o: ['When I’m late, start without me.', 'If I’m late, start without me.', 'If I’ll be late, start without me.'], a: 1,
        why: 'Опаздывать вы не планируете → if, и после него без will.' },
      { t: 'idea', text: `Итог: точно будет — when, не знаю — if. После обоих — настоящее время.`,
        rows: [['может быть', 'If it doesn’t rain, we’ll play football.'], ['точно будет', 'When you finish the level, save the game.']] }
    ]},

    // ───────────── 3. If I had… I’d… — «если бы» ─────────────
    { title: '«Если бы у меня была машина» — If I had…, I’d…', steps: [
      { t: 'idea', text: `Хотите помечтать: «Если бы у меня была машина, я бы ездил на ней на работу». Машины нет. По-английски: после if — вторая форма (<b>had</b>), в другой половине — <b>would</b> + слово-действие.`,
        lit: [['If', 'если'], ['I', 'я'], ['had', '(бы) имел'], ['a car,', 'машину,'], ['I would', 'я бы'], ['drive', 'ездил'], ['to work', 'на работу']],
        ex: [['I don’t have a car. If I had a car, I would drive to work.', 'У меня нет машины. Если бы была, я бы ездил на работу на ней.']] },
      { t: 'idea', text: `Вторая форма тут <b>не про прошлое</b>. Она показывает: «на самом деле не так, я только представляю». Это русское «бы».`,
        ex: [['If I knew Japanese, I’d play games without translation.', 'Если бы я знал японский, играл бы без перевода (translation).'], ['If we lived near the sea, we’d swim every day.', 'Если бы мы жили у моря, мы бы плавали каждый день.'], ['If I earned more, I’d move to a bigger flat.', 'Если бы я больше зарабатывал, я бы переехал в квартиру побольше.']],
        tip: `had здесь значит «было бы сейчас», а не «было вчера».` },
      { t: 'check', q: 'If I ___ more free time, I’d learn to draw.', ru: 'Если бы у меня было больше свободного времени, я бы научился рисовать.', o: ['have', 'had', 'would have'], a: 1,
        why: 'Мечта о настоящем → после if вторая форма: had.' },
      { t: 'idea', text: `<b>would</b> — это и есть «бы». Помните I’d like (я бы хотел)? Это то же would. В разговоре I would → <b>I’d</b>, would not → <b>wouldn’t</b>.`,
        rows: [['I would / you would', 'I’d / you’d'], ['would not', 'wouldn’t']],
        ex: [['She wouldn’t be happy if she worked in an office.', 'Она не была бы счастлива, если бы работала в офисе.']] },
      { t: 'idea', text: `Главная ловушка: по-русски «бы» стоит в обеих частях. В английском would — только в одной, а в if-части его работу делает вторая форма.`,
        bad: 'If I would have money, I would buy a PS5.', good: 'If I <b>had</b> money, I would buy a PS5.' },
      { t: 'check', q: 'Скажите: «Если бы у меня были деньги, я бы купил дом у моря»', o: ['If I would have money, I would buy a house by the sea.', 'If I had money, I would buy a house by the sea.', 'If I had money, I will buy a house by the sea.'], a: 1,
        why: 'В if-части — had, would — только в другой половине.' },
      { t: 'idea', text: `Итог: «если бы» → if + вторая форма, в другой половине would.`,
        rows: [['if + had / knew / lived', 'If I had a car,'], ['would (’d) + слово-действие', 'I’d drive to work.']] }
    ]},

    // ───────────── 4. What would you do? и could ─────────────
    { title: '«Что бы ты сделал?» — вопрос и could', steps: [
      { t: 'idea', text: `Хотите спросить: «Что бы ты сделал, если бы выиграл в лотерею?» В вопросе would встаёт перед «ты» — так же, как do в обычных вопросах.`,
        lit: [['What', 'что'], ['would', 'бы'], ['you', 'ты'], ['do', 'сделал'], ['if you won', 'если бы выиграл'], ['the lottery?', 'в лотерею?']],
        ex: [['What would you do if you won the lottery?', 'Что бы ты сделал, если бы выиграл в лотерею?'], ['If you didn’t have a job, what would you do?', 'Если бы у тебя не было работы, чем бы ты занимался?']] },
      { t: 'check', q: 'What ___ you do if you lost your phone?', ru: 'Что бы ты сделал, если бы потерял телефон?', o: ['will', 'would', 'did'], a: 1,
        why: 'Вопрос-мечта «что бы…» → What would you do if…?' },
      { t: 'idea', text: `«Мог бы» — <b>could</b>. И в if-части can тоже превращается в could. Не смешивайте половины: после if I had — would или could, а не will.`,
        ex: [['If we had more time, we could finish the level.', 'Если бы у нас было больше времени, мы могли бы пройти уровень.'], ['I’d come to the party if I could, but I have to work.', 'Я бы пришёл, если бы мог, но мне надо работать.']],
        bad: 'If I had money, I will buy a PS5.', good: 'If I had money, I <b>would</b> buy a PS5.' },
      { t: 'check', q: 'I’d help you if I ___, but I’m busy.', ru: 'Я бы тебе помог, если бы мог, но я занят.', o: ['can', 'could', 'will can'], a: 1,
        why: '«Если бы мог» → if I could.' },
      { t: 'idea', text: `Итог: вопрос-мечта и «мог бы».`,
        rows: [['что бы ты…?', 'What would you do if…?'], ['мог бы', 'could + слово-действие'], ['если бы мог', 'if I could']] }
    ]},

    // ───────────── 5. If I were you; if I have или if I had ─────────────
    { title: '«На твоём месте» и два разных «если»', steps: [
      { t: 'idea', text: `В «если бы» с am / is / are ставим вторую форму: <b>was</b> или <b>were</b>. Оба варианта нормальные: if I was rich = if I were rich.`,
        ex: [['If Max were here, he would know what to do.', 'Если бы Макс был здесь, он бы знал, что делать.'], ['It would be nice if the weather was warmer.', 'Было бы хорошо, если бы было потеплее.']] },
      { t: 'idea', text: `Совет «на твоём месте я бы…» — устойчивая фраза <b>If I were you</b>. Её запоминайте именно с were.`,
        lit: [['If', 'если бы'], ['I', 'я'], ['were', 'был'], ['you,', 'тобой,'], ['I’d', 'я бы'], ['talk to the boss', 'поговорил с начальником']],
        ex: [['If I were you, I’d talk to the boss.', 'На твоём месте я бы поговорил с начальником.'], ['I wouldn’t buy that laptop if I were you.', 'На твоём месте я бы не покупал этот ноутбук.']],
        bad: 'If I am you, I would call her.', good: 'If I <b>were</b> you, I would call her.' },
      { t: 'check', q: 'Скажите: «На твоём месте я бы согласился на эту работу»', o: ['If I am you, I’d take the job.', 'If I were you, I’d take the job.', 'If I would be you, I take the job.'], a: 1,
        why: 'Совет «на твоём месте» → If I were you, I’d…' },
      { t: 'idea', text: `Теперь сравните два «если». <b>if I have</b> — может быть, так и будет. <b>if I had</b> — на самом деле нет, я только представляю.`,
        rows: [['может, время будет', 'If I have time, I’ll call Anna.'], ['времени нет', 'If I had time, I’d call Anna.']],
        ex: [['I’ll buy the game if it isn’t expensive.', 'Куплю игру, если она недорогая (цену пока не знаю).'], ['I’d buy the game if it wasn’t so expensive.', 'Я бы купил игру, если бы она не была такой дорогой (а она дорогая).']] },
      { t: 'check', q: 'I don’t know his number. If I ___ it, I’d call him.', ru: 'Я не знаю его номер. Если бы знал, позвонил бы.', o: ['know', 'knew', 'would know'], a: 1,
        why: 'Номера на самом деле нет → если бы: if I knew.' },
      { t: 'check', q: 'Maybe I’ll finish early. If I ___ early, I’ll come to the party.', ru: 'Может, я закончу рано. Если закончу рано, приду на вечеринку.', o: ['finish', 'finished', 'would finish'], a: 0,
        why: 'Это возможно (maybe) → if + настоящее, will в другой половине.' },
      { t: 'idea', text: `Итог: сначала решите — это может случиться или это только мечта?`,
        rows: [['может случиться', 'if + настоящее → will'], ['если бы (на самом деле нет)', 'if + вторая форма → would'], ['на твоём месте', 'If I were you, I’d…']] }
    ]},

    // ───────────── 6. who / which / that ─────────────
    { title: '«Девушка, которая…» — who, which, that', steps: [
      { t: 'idea', text: `Хотите сказать: «Девушка, которая нарисовала этот арт, живёт в Казани». «Который» для людей — <b>who</b>. Ставим его сразу после того, о ком говорим.`,
        lit: [['The girl', 'девушка'], ['who', 'которая'], ['drew', 'нарисовала'], ['this art', 'этот арт'], ['lives', 'живёт'], ['in Kazan', 'в Казани']],
        ex: [['A customer is a person who buys something.', 'Покупатель — это человек, который что-то покупает.'], ['I have a friend who can fix any laptop.', 'У меня есть друг, который может починить любой ноутбук.']] },
      { t: 'idea', text: `Для вещей и животных — <b>which</b>. А <b>that</b> подходит для всех. Для людей всё же естественнее who, а which для людей — ошибка.`,
        rows: [['who', 'люди', 'a developer who fixed the bug'], ['which', 'вещи, животные', 'a game which has no ending'], ['that', 'все', 'a tool that designers use']],
        ex: [['The game that won the prize is from Poland.', 'Игра, которая получила приз, — из Польши.'], ['Where is the charger which was on the table?', 'Где зарядка (charger), которая лежала на столе?']] },
      { t: 'check', q: 'I know a girl ___ speaks four languages.', ru: 'Я знаю девушку, которая говорит на четырёх языках.', o: ['who', 'which', 'what'], a: 0,
        why: 'Девушка — человек → who.' },
      { t: 'idea', text: `who уже заменяет he / she — второй раз их не повторяем. И ещё: запятых перед who в таких фразах нет, хотя по-русски перед «который» она всегда стоит.`,
        bad: 'I have a friend who he lives in London.', good: 'I have a friend <b>who lives</b> in London.',
        ex: [['The man who called me was angry.', 'Человек, который мне звонил, был зол.']] },
      { t: 'check', q: 'Скажите: «Мне нравятся люди, которые честные»', o: ['I like people who are honest.', 'I like people which are honest.', 'I like people who they are honest.'], a: 0,
        why: 'Люди → who, и they после него не нужно.' },
      { t: 'check', q: 'This is the app ___ changed my life.', ru: 'Это приложение, которое изменило мою жизнь.', o: ['who', 'that', 'what'], a: 1,
        why: 'Приложение — вещь → that (или which).' },
      { t: 'idea', text: `Итог: «который» → who / which / that, сразу после слова, без запятой и без лишнего he / it.`,
        rows: [['люди', 'who (или that)'], ['вещи, животные', 'which или that']] }
    ]},

    // ───────────── 7. The game I bought — «который» можно пропустить ─────────────
    { title: '«Игра, которую я купил» — The game I bought', steps: [
      { t: 'idea', text: `Хотите сказать: «Игра, которую я купил, — отличная». Англичане чаще всего говорят так: The game I bought is great. «Которую» просто выбросили. И it второй раз не ставим.`,
        lit: [['The game', 'игра'], ['(that)', '(которую)'], ['I bought', 'я купил'], ['is great', 'отличная']],
        ex: [['The series you recommended is great.', 'Сериал, который ты посоветовал, отличный.'], ['The people we met were funny.', 'Люди, которых мы встретили, были весёлые.']],
        bad: 'The film we watched it was boring.', good: 'The film we watched <b>was</b> boring.' },
      { t: 'check', q: 'Did you like the pizza ___?', ru: 'Тебе понравилась пицца, которую я заказал?', o: ['I ordered', 'I ordered it', 'who I ordered'], a: 0,
        why: 'После «которую» идёт I → слово можно убрать, а it не повторяем.' },
      { t: 'idea', text: `Когда выбрасывать можно? Посмотрите, что стоит сразу после «который». Другой человек (I, you, Anna) → можно. Сразу слово-действие → нельзя: «который» сам его делает.`,
        rows: [['the game (that) I bought', 'дальше I → можно убрать'], ['the man who called me', 'дальше called → нельзя']],
        bad: 'The girl lives upstairs is a pilot.', good: 'The girl <b>who</b> lives upstairs is a pilot.' },
      { t: 'check', q: 'The man ___ helped me was very kind.', ru: 'Человек, который мне помог, был очень добрым.', o: ['who', '(ничего)', 'which'], a: 0,
        why: 'Сразу слово-действие helped → нужен who.' },
      { t: 'idea', text: `А куда деть «с которым», «о которой»? Маленькое слово (to, about, with) уезжает <b>в конец</b>. Для места можно сказать <b>where</b> (где).`,
        lit: [['the guy', 'парень'], ['you were talking', 'ты разговаривал'], ['to', 'с (ним)']],
        ex: [['Who is the guy you were talking to?', 'Кто тот парень, с которым ты разговаривал?'], ['This is the song I told you about.', 'Вот песня, о которой я тебе рассказывал.'], ['The hotel we stayed at = The hotel where we stayed.', 'Отель, в котором мы жили.']] },
      { t: 'check', q: 'The colleague I work ___ is from Minsk.', ru: 'Коллега, с которым я работаю, из Минска.', o: ['with', '(ничего)', 'who'], a: 0,
        why: '«С которым» → with уезжает в конец: the colleague I work with.' },
      { t: 'idea', text: `Итог: дальше другой человек — «который» можно выбросить; дальше слово-действие — who / which / that обязательно.`,
        rows: [['можно убрать', 'the game I bought'], ['нельзя убрать', 'the man who called me'], ['слово в конец', 'the team I work with']] }
    ]}
  ];
})();
