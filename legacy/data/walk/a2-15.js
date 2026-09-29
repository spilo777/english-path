// Грамматика по шагам для юнита a2-15: from… to и until (до какого момента, How long? vs When?, «пока не» без not, until + настоящее о будущем), since и for (с have done, три способа рассказать историю), during / while / for, before / after + -ing, to и in / at (go home, arrive in / at, get to), предлоги движения (into, off, through / across / over, along, past, round), готовые выражения (on holiday, by bus, on foot, at 30, with, without, about).
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-15'); if (!u) return;
  u.walk = [
    // ───────────── 1. from… to, until ─────────────
    { title: '«С понедельника по пятницу», «до семи» — from… to и until', steps: [
      { t: 'idea', text: `Помните at eight, on Monday, in April из A1? Это ответ на «когда?». Теперь — отрезок: «Я работаю с понедельника по пятницу». Начало — <b>from</b>, конец — <b>to</b>.`,
        lit: [['I', 'я'], ['work', 'работаю'], ['from', 'с'], ['Monday', 'понедельника'], ['to', 'по'], ['Friday', 'пятницу']],
        ex: [['I work from Monday to Friday.', 'Я работаю с понедельника по пятницу.'], ['The shop is open from nine to eight.', 'Магазин открыт с девяти до восьми.'], ['We lived in Kazan from 2015 to 2021.', 'Мы жили в Казани с 2015 по 2021.']] },
      { t: 'idea', text: `А если важен только конец — «до семи», «до воскресенья»? Тогда слово <b>until</b>: действие идёт до этого момента и там останавливается.`,
        lit: [['I’ll be', 'я буду'], ['at the office', 'в офисе'], ['until', 'до'], ['seven', 'семи']],
        ex: [['I’ll be at the office until seven.', 'Я буду в офисе до семи.'], ['The festival lasts until Sunday.', 'Фестиваль длится до воскресенья.'], ['I stayed in bed until eleven.', 'Я валялся в кровати до одиннадцати.']],
        tip: `В разговоре вместо until часто говорят короче — <b>till</b>. Это одно и то же. И from 2015 until 2021 — тоже можно.` },
      { t: 'check', q: 'Скажите: «Я буду дома до шести»', o: ['I’ll be at home to six.', 'I’ll be at home until six.', 'I’ll be at home since six.'], a: 1,
        why: 'Только конец, без начала → until six. to работает только в паре с from.' },
      { t: 'idea', text: `Не путайте два вопроса. How long…? (как долго?) — отвечаем until: «до понедельника». When…? (когда?) — отвечаем on / at / in: «в понедельник».`,
        rows: [['How long will you be away?', 'Until Monday.', 'До понедельника.'], ['When are you coming back?', 'On Monday.', 'В понедельник.']] },
      { t: 'idea', text: `until может стоять перед целой фразой: «Подожди, пока я не вернусь». Русское «не» здесь не переводим — until уже значит «до того момента». И will после until не ставим, как после when.`,
        lit: [['Wait', 'подожди'], ['until', 'пока не / до того как'], ['I', 'я'], ['come back', 'вернусь']],
        ex: [['Wait here until I come back.', 'Подожди здесь, пока я не вернусь.'], ['Don’t turn off the PC until the update finishes.', 'Не выключай компьютер, пока не закончится обновление (update).']],
        bad: 'Wait until I don’t come back. / Wait until I will finish.', good: 'Wait until I <b>come</b> back. / Wait until I <b>finish</b>.' },
      { t: 'check', q: 'Wait until I ___ this level.', ru: 'Подожди, пока я не пройду этот уровень.', o: ['will finish', 'finish', 'don’t finish'], a: 1,
        why: 'После until про будущее — настоящее время и без not: until I finish.' },
      { t: 'idea', text: `Итог: from — начало, to / until — конец. until отвечает на How long? и не любит will и not после себя.`,
        rows: [['from… to…', 'from Monday to Friday'], ['until + момент', 'until seven, until Sunday'], ['until + фраза', 'Wait until I come back.']] }
    ]},

    // ───────────── 2. since и for ─────────────
    { title: '«С 2022 года» и «уже пять лет» — since и for', steps: [
      { t: 'idea', text: `Помните since из урока «How long?»: <b>since</b> — «с какого-то момента в прошлом и до сих пор». Поэтому рядом стоит have done, а не простое настоящее, как в русском.`,
        lit: [['I’ve worked', 'я работаю (и работал)'], ['at this studio', 'в этой студии'], ['since', 'с'], ['2022', '2022 года']],
        ex: [['I’ve worked at this studio since 2022.', 'Я работаю в этой студии с 2022 года.'], ['I’ve played this game since Monday.', 'Я играю в эту игру с понедельника.'], ['I’ve known him since I was a kid.', 'Я знаю его с детства.']],
        bad: 'I live here since 2018.', good: 'I <b>have lived</b> here since 2018.' },
      { t: 'idea', text: `<b>for</b> — «сколько длится»: for two hours, for a week, for five years. Работает в любом времени: и в прошлом, и в будущем, и с have done.`,
        ex: [['I stayed at my friend’s flat for a week.', 'Я жил у друга неделю.'], ['I’m going to Spain for the weekend.', 'Я еду в Испанию на выходные.'], ['I’ve known him for five years.', 'Я знаю его уже пять лет.']],
        tip: `since — точка на календаре (since Monday). for — линейка: сколько времени (for three days). Русское «уже пять лет» — всегда for.` },
      { t: 'check', q: 'I’ve lived here ___ three years.', ru: 'Я живу здесь уже три года.', o: ['since', 'for', 'during'], a: 1,
        why: 'Три года — это отрезок, «сколько» → for.' },
      { t: 'check', q: 'Скажите: «Я знаю Макса с 2019 года»', o: ['I know Max since 2019.', 'I’ve known Max for 2019.', 'I’ve known Max since 2019.'], a: 2,
        why: '2019 — точка → since. И «до сих пор» → have known, а не know.' },
      { t: 'idea', text: `Одну и ту же историю можно рассказать тремя способами — смотря что случилось потом.`,
        rows: [['I lived in Moscow from 2010 to 2018.', 'с… по… (закончилось)'], ['I lived in Moscow until 2018.', 'до 2018 (потом уехал)'], ['I’ve lived in Kazan since 2018.', 'с 2018 и до сих пор']] },
      { t: 'idea', text: `Итог: since — с какой точки (и до сих пор, с have done). for — сколько длится.`,
        rows: [['since + точка', 'since Monday, since 2019, since I was a kid'], ['for + отрезок', 'for two hours, for five years, for a long time']] }
    ]},

    // ───────────── 3. during, while, for ─────────────
    { title: '«Во время фильма», «пока я говорил» — during и while', steps: [
      { t: 'idea', text: `Хотите сказать «Он уснул во время фильма». «Во время» + событие (фильм, матч, встреча) — это <b>during</b>.`,
        lit: [['He', 'он'], ['fell asleep', 'уснул'], ['during', 'во время'], ['the film', 'фильма']],
        ex: [['He fell asleep during the film.', 'Он уснул во время фильма.'], ['My internet died during the match.', 'Интернет упал во время матча.'], ['Phones off during the meeting, please.', 'Выключите телефоны во время встречи, пожалуйста.']] },
      { t: 'idea', text: `А «Он уснул, <b>пока я говорил</b>»? После «пока» — целая фраза: кто + что делает. Тут нужно другое слово — <b>while</b>.`,
        lit: [['He fell asleep', 'он уснул'], ['while', 'пока'], ['I', 'я'], ['was talking', 'говорил']],
        ex: [['Somebody called while you were out.', 'Кто-то звонил, пока тебя не было.'], ['I listen to podcasts while I’m drawing.', 'Я слушаю подкасты, пока рисую.'], ['Please don’t talk while I’m watching.', 'Не разговаривайте, пока я смотрю.']],
        tip: `during + одно слово-событие (during the film). while + фраза с кем-то и действием (while I’m watching).` },
      { t: 'check', q: 'He called ___ I was sleeping.', ru: 'Он позвонил, пока я спал.', o: ['during', 'while', 'for'], a: 1,
        why: 'Дальше целая фраза (I was sleeping) → while.' },
      { t: 'idea', text: `«Мы играли три часа» — это «сколько длилось», значит снова <b>for</b>. during отвечает на «когда?», for — на «сколько?».`,
        bad: 'We played during three hours.', good: 'We played <b>for</b> three hours.',
        ex: [['I was on the phone for an hour.', 'Я час говорил по телефону.'], ['I fell asleep during the lesson.', 'Я уснул во время урока.']] },
      { t: 'check', q: 'We talked ___ two hours.', ru: 'Мы проговорили два часа.', o: ['during', 'for', 'while'], a: 1,
        why: 'Два часа — «сколько» → for.' },
      { t: 'idea', text: `Итог: «во время» — during или while, смотря что дальше. «Сколько» — for.`,
        rows: [['during + событие', 'during the film, during the match'], ['while + фраза', 'while I was reading'], ['for + сколько', 'for three hours']] }
    ]},

    // ───────────── 4. before, after ─────────────
    { title: '«До встречи», «после обеда» — before и after', steps: [
      { t: 'idea', text: `С <b>before</b> (до, перед) и <b>after</b> (после) проще: после них можно поставить и одно слово-событие, и целую фразу.`,
        ex: [['Call me before the meeting.', 'Позвони мне до встречи.'], ['Call me before you go out.', 'Позвони мне, перед тем как выйдешь.'], ['I’ll call you after we finish.', 'Я позвоню тебе, после того как мы закончим.']] },
      { t: 'idea', text: `Есть короткий вариант: после before / after — слово-действие с хвостиком -ing. «Перед тем как закрыть» → before closing. to тут не ставим.`,
        lit: [['I', 'я'], ['save the file', 'сохраняю файл'], ['before', 'перед'], ['closing it', 'закрыванием его']],
        ex: [['I always save the file before closing it.', 'Я всегда сохраняю файл, перед тем как закрыть.'], ['After finishing the game, I watched the credits.', 'Пройдя игру, я посмотрел титры (credits).']],
        bad: 'Before to leave, turn off the light.', good: 'Before <b>leaving</b>, turn off the light.' },
      { t: 'check', q: 'Wash your hands before ___.', ru: 'Мойте руки перед едой.', o: ['to eat', 'eating', 'eat'], a: 1,
        why: 'После before — слово-действие с -ing: before eating.' },
      { t: 'idea', text: `Итог: before и after — с чем угодно, а слово-действие после них — с -ing.`,
        rows: [['before / after + событие', 'before the meeting, after lunch'], ['before / after + фраза', 'after we finished'], ['before / after + -ing', 'before leaving, after eating']] }
    ]},

    // ───────────── 5. to / in / at, home, arrive, get to ─────────────
    { title: '«Иду в офис» и «я в офисе» — to, in / at, arrive', steps: [
      { t: 'idea', text: `«Я еду в Берлин» и «Я живу в Берлине» — по-русски оба раза «в». По-английски зависит от вопроса: куда? → <b>to</b>. Где? → <b>in</b> / <b>at</b>.`,
        rows: [['Куда? → to', 'I’m going to Berlin.', 'She went to work.'], ['Где? → in / at', 'I live in Berlin.', 'She is at work.']],
        ex: [['We went to a party.', 'Мы пошли на вечеринку.'], ['We met at a party.', 'Мы познакомились на вечеринке.'], ['What time do you go to bed?', 'Во сколько ты ложишься спать?']] },
      { t: 'check', q: 'She isn’t here. She’s ___ work.', ru: 'Её здесь нет. Она на работе.', o: ['to', 'at', 'on'], a: 1,
        why: 'Где она? → at work. to — только когда движемся куда-то.' },
      { t: 'idea', text: `Помните из A1 go home? <b>home</b> — особое слово: «куда» — без to, «где» — at home.`,
        bad: 'I’m going to home. / I work in home.', good: 'I’m going <b>home</b>. / I work <b>at home</b>.' },
      { t: 'check', q: 'Скажите: «Я иду домой»', o: ['I’m going to home.', 'I’m going home.', 'I’m going at home.'], a: 1,
        why: 'С home «куда» идёт без to: go home.' },
      { t: 'idea', text: `<b>arrive</b> (прибыть) никогда не бывает с to: город, страна → arrive in, другое место → arrive at. Проще всего — <b>get to</b> (добраться до): подходит для любого места. Но домой — get home.`,
        rows: [['arrive in', 'We arrived in Tokyo at night.'], ['arrive at', 'I arrived at the airport early.'], ['get to / get home', 'What time did you get to the office? I got home at midnight.']],
        bad: 'We arrived to London.', good: 'We arrived <b>in</b> London. / We <b>got to</b> London.' },
      { t: 'check', q: 'We arrived ___ Paris at noon.', ru: 'Мы приехали в Париж в полдень.', o: ['to', 'in', 'at'], a: 1,
        why: 'arrive без to; Париж — город → arrive in.' },
      { t: 'idea', text: `Итог: куда — to, где — in / at. home — без to. Приехать — arrive in / at или get to.`,
        rows: [['куда', 'go to work, но go home'], ['где', 'in Berlin, at work, at home'], ['приехать', 'arrive in Paris, arrive at the airport, get to the office']] }
    ]},

    // ───────────── 6. Предлоги движения ─────────────
    { title: '«Через», «вдоль», «мимо» — предлоги движения', steps: [
      { t: 'idea', text: `Представьте персонажа в игре — куда он бежит. Для этого есть пары слов: в — из, на — с, вверх — вниз, над — под.`,
        rows: [['into / out of', 'в(нутрь) / из', 'She ran into the room.'], ['on / off', 'на / с (поверхности)', 'The phone fell off the table.'], ['up / down, over / under', 'вверх / вниз, над / под', 'Don’t run down the stairs!']],
        ex: [['He took a key out of his bag.', 'Он достал ключ из сумки.'], ['Go under the bridge and turn left.', 'Пройдите под мостом и поверните налево.']] },
      { t: 'check', q: 'She ran ___ the room.', ru: 'Она вбежала в комнату.', o: ['in', 'into', 'to'], a: 1,
        why: 'Движение внутрь → into.' },
      { t: 'idea', text: `Русское «через» — три разных слова. <b>through</b> — сквозь, внутри чего-то (лес, туннель). <b>across</b> — с одной стороны на другую (улица, река). <b>over</b> — сверху (забор, стена).`,
        ex: [['The train went through a long tunnel.', 'Поезд прошёл через длинный туннель.'], ['Walk across the street.', 'Перейдите через улицу.'], ['The cat jumped over the fence.', 'Кот перепрыгнул через забор.']],
        tip: `through — как поезд сквозь туннель. across — как мост поперёк реки. over — как мяч над сеткой.` },
      { t: 'check', q: 'We walked ___ the forest.', ru: 'Мы шли через лес (forest).', o: ['across', 'through', 'over'], a: 1,
        why: 'Лес вокруг нас, идём внутри него → through.' },
      { t: 'idea', text: `Как объяснить дорогу: <b>along</b> — вдоль, по; <b>past</b> — мимо; <b>round the corner</b> — за углом; <b>towards</b> — к, в сторону.`,
        ex: [['Go along this street, past the bank.', 'Идите по этой улице, мимо банка.'], ['The café is round the corner.', 'Кафе за углом.'], ['The monster is coming towards us!', 'Монстр идёт к нам!']] },
      { t: 'check', q: 'The bus went ___ me.', ru: 'Автобус проехал мимо меня.', o: ['along', 'past', 'across'], a: 1,
        why: '«Мимо» → past.' },
      { t: 'idea', opt: true, text: `Три мелочи. «Выглянуть в окно» — look <b>out of</b> the window. «Гулять по городу» — walk <b>around</b> the town. С put обычно просто <b>in</b>, а не into.`,
        ex: [['Look out of the window!', 'Выгляни в окно!'], ['We walked around the old town.', 'Мы гуляли по старому городу.'], ['Put the charger in your bag.', 'Положи зарядку в сумку.']],
        bad: 'Put your feet off the table.', good: '<b>Take</b> your feet off the table.' },
      { t: 'idea', text: `Итог: у движения свои слова. Главное — три «через».`,
        rows: [['through', 'сквозь: through the forest, through a tunnel'], ['across', 'на другую сторону: across the street'], ['over', 'сверху: over the fence']] }
    ]},

    // ───────────── 7. Готовые выражения ─────────────
    { title: '«На автобусе», «пешком», «ножом» — готовые выражения', steps: [
      { t: 'idea', text: `Некоторые предлоги логикой не вывести — их учат вместе со словом, блоком. Самые частые с <b>on</b>: on holiday (в отпуске), on TV, on the phone, on time (вовремя), on fire (горит).`,
        ex: [['Anna isn’t at work. She’s on holiday.', 'Анны нет на работе. Она в отпуске.'], ['The meeting started on time.', 'Встреча началась вовремя.'], ['The building in the game is on fire!', 'Здание в игре горит!']] },
      { t: 'idea', text: `«Еду на автобусе» — <b>by</b> + транспорт, и без the: by bus, by car, by plane, by bike. Но «пешком» — <b>on foot</b>.`,
        lit: [['I', 'я'], ['go', 'езжу'], ['to work', 'на работу'], ['by', '(с помощью)'], ['bus', 'автобус']],
        ex: [['I go to work by bus.', 'Я езжу на работу на автобусе.'], ['It’s close. Let’s go on foot.', 'Это близко. Пойдём пешком.']],
        bad: 'I go to work on bus. / I came by foot.', good: 'I go to work <b>by</b> bus. / I came <b>on</b> foot.' },
      { t: 'check', q: 'Скажите: «Я летаю самолётом»', o: ['I travel by the plane.', 'I travel by plane.', 'I travel on plane.'], a: 1,
        why: 'Транспорт → by, и без the: by plane.' },
      { t: 'idea', text: `by ещё показывает автора: a song <b>by</b> Adele (песня Адели). А <b>at</b> — возраст и скорость: at 30 (в 30 лет), at 100 km an hour.`,
        ex: [['Have you read any books by Stephen King?', 'Ты читал книги Стивена Кинга?'], ['He started his own studio at 30.', 'Он открыл свою студию в 30 лет.']] },
      { t: 'idea', text: `Русское «рисую <b>планшетом</b>», «режу <b>ножом</b>» — это <b>with</b> (с, при помощи). without — без. about — о, про.`,
        ex: [['I draw with a tablet, not with a mouse.', 'Я рисую планшетом, а не мышкой.'], ['I can’t work without coffee.', 'Я не могу работать без кофе.'], ['It’s a series about a hacker.', 'Это сериал про хакера.']],
        bad: 'I cut it by knife.', good: 'I cut it <b>with</b> a knife.' },
      { t: 'check', q: 'I cut it ___ a knife.', ru: 'Я порезал это ножом.', o: ['by', 'with', 'on'], a: 1,
        why: '«Чем?» (ножом, планшетом) → with. by — только транспорт и автор.' },
      { t: 'idea', text: `Итог: эти предлоги учим блоками.`,
        rows: [['by / on', 'by bus, by car — но on foot; on holiday, on time'], ['with / without', 'with a knife, coffee with milk, without me'], ['at / about', 'at 30; a film about space']] }
    ]}
  ];
})();
