// Грамматика по шагам для юнита a1-12: считаем / не считаем, a key / keys, water без a, a bottle of water, a или some, слова-ловушки (advice, news, hair), much / many / a lot of, How much / How many, где much звучит странно.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-12'); if (!u) return;
  u.walk = [
    // ───────────── 1. Два вида слов ─────────────
    { title: 'Что можно посчитать, а что нет', steps: [
      { t: 'idea', text: `Хотите сказать «две бутылки» — легко: <b>two bottles</b>. А «две воды»? Странно и по-русски, и по-английски. Английский делит все слова на две группы: что считаем штуками и что нет.`,
        rows: [['считаем штуками', 'a bottle, two bottles', 'бутылка, две бутылки'], ['не считаем', 'water', 'вода']],
        ex: [['one key, two keys', 'один ключ, два ключа'], ['a game, three games', 'игра, три игры'], ['water, milk, money', 'вода, молоко, деньги']] },
      { t: 'idea', text: `Как проверить слово: можно ли сказать «одна штука, две штуки»? Одна игра, две игры — да, считаем. «Две соли», «три музыки» — нельзя, значит salt и music не считаем.`,
        ex: [['a game, two games', 'игра, две игры'], ['salt', 'соль'], ['music', 'музыка']],
        tip: `Не считаем то, что льётся, сыплется или «вообще»: вода, рис, соль, деньги, музыка, еда.` },
      { t: 'check', q: 'Какое слово нельзя посчитать штуками?', o: ['apple', 'rice', 'key'], a: 1,
        why: 'Рис не считают штуками: «два риса» не скажешь. Яблоки и ключи — считают.' },
      { t: 'check', q: 'Какое слово считаем штуками?', o: ['money', 'milk', 'bottle'], a: 2,
        why: 'Одна бутылка, две бутылки — да. «Два молока», «три деньги» — нет.' },
      { t: 'idea', text: `Итог: у каждого слова есть группа, и от неё зависит всё дальше — ставить ли a, бывает ли -s, какое «много» выбрать.`,
        rows: [['считаем штуками', 'a key, two keys, a game'], ['не считаем', 'water, money, music, rice']] }
    ]},

    // ───────────── 2. Одна штука не стоит одна ─────────────
    { title: '«Мне нужен ключ» — одна штука не стоит одна', steps: [
      { t: 'idea', text: `Хотите сказать «Мне нужен ключ». По-русски два слова, по-английски три: перед «ключ» обязательно стоит <b>a</b>. Одна штука по-английски не может стоять одна.`,
        lit: [['I', 'мне'], ['need', 'нужен'], ['a', '(один)'], ['key', 'ключ']],
        ex: [['I need a key.', 'Мне нужен ключ.'], ['She’s got a new laptop.', 'У неё новый ноутбук.'], ['Can I have an apple?', 'Можно мне яблоко?']] },
      { t: 'idea', text: `Без a предложение сломано — так же, как «I designer» без am. Слово a значит «один, какой-то», и русское ухо его не слышит.`,
        bad: 'I need key.', good: 'I need <b>a</b> key.',
        tip: `Перед словом, которое начинается с гласного звука (a, e, i, o, u), a превращается в <b>an</b>: an apple, an egg.` },
      { t: 'check', q: 'Скажите: «Мне нужна сумка»', o: ['I need bag.', 'I need a bag.', 'I need some bag.'], a: 1,
        why: 'Сумка — одна штука, а одна штука не стоит одна: a bag.' },
      { t: 'idea', text: `А если штук много — a пропадает, зато на конце появляется <b>-s</b>: keys, two keys, some keys, many keys.`,
        rows: [['одна', 'a key, the key, my key'], ['много', 'keys, two keys, some keys']],
        ex: [['New phones are expensive.', 'Новые телефоны дорогие.'], ['I’ve got two keys.', 'У меня два ключа.'], ['We need some new chairs.', 'Нам нужны новые стулья.']] },
      { t: 'check', q: 'I bought three ___ yesterday.', ru: 'Вчера я купил три игры.', o: ['game', 'a game', 'games'], a: 2,
        why: 'Три штуки → без a и с -s: games.' },
      { t: 'idea', text: `Итог: слово, которое считаем, бывает в двух видах — одна штука (с a) и много (с -s).`,
        rows: [['одна штука', 'a key · an apple'], ['много', 'keys · two keys · some keys'], ['нельзя', 'I need key.']] }
    ]},

    // ───────────── 3. Вода без a — но с бутылкой ─────────────
    { title: '«Мне нужна вода» — без a, но с бутылкой', steps: [
      { t: 'idea', text: `Хотите сказать «Мне нужна вода». Воду не считаем, поэтому никакого a: <b>I need water</b>. И -s тоже не бывает: слова «waters» нет.`,
        lit: [['I', 'мне'], ['need', 'нужна'], ['water', 'вода']],
        ex: [['I need water.', 'Мне нужна вода.'], ['I love music.', 'Я люблю музыку.'], ['Money isn’t everything.', 'Деньги — это не всё. (everything — всё)']],
        bad: 'I need a water.', good: 'I need water.' },
      { t: 'idea', text: `После таких слов ставим <b>is / was</b> — как для одного, даже если по-русски «деньги», «они». Для английского вода, деньги, еда — одна масса.`,
        lit: [['The', '—'], ['money', 'деньги'], ['is', '(есть)'], ['on the table.', 'на столе.']],
        ex: [['The water is cold.', 'Вода холодная.'], ['The money is on the table.', 'Деньги на столе.'], ['The food was good.', 'Еда была хорошая.']] },
      { t: 'check', q: 'Скажите: «Молоко холодное»', o: ['The milk is cold.', 'The milks are cold.', 'A milk is cold.'], a: 0,
        why: 'Молоко не считаем: без a, без -s, а после него is.' },
      { t: 'idea', text: `А как всё-таки посчитать воду? Через ёмкость: <b>a bottle of water</b> — бутылка воды, two bottles of water. Считаем бутылки, а не воду.`,
        lit: [['a bottle', 'бутылка'], ['of', '(чего?)'], ['water', 'воды']],
        ex: [['a bottle of water', 'бутылка воды'], ['two cups of coffee', 'две чашки кофе'], ['a piece of cheese', 'кусок сыра']] },
      { t: 'idea', text: `Ёмкость или «кусок» подбираем по смыслу. Самые нужные пары:`,
        rows: [['a bottle of', 'water, juice'], ['a cup of', 'coffee, tea'], ['a glass of', 'milk, juice'], ['a piece of', 'cheese, bread, cake (торт)'], ['a bar of', 'chocolate'], ['a bowl of', 'rice']],
        tip: `<b>of</b> здесь работает как русское «чего?»: бутылка (чего?) воды, чашка (чего?) кофе.` },
      { t: 'check', q: 'Can I have ___, please?', ru: 'Можно мне воды, пожалуйста?', o: ['a water', 'a glass of water', 'waters'], a: 1,
        why: 'Воду не считаем; чтобы попросить порцию — a glass of water.' },
      { t: 'check', q: 'Two ___, please.', ru: 'Две чашки кофе, пожалуйста.', o: ['coffees cup', 'cups of coffee', 'cup of coffees'], a: 1,
        why: 'Считаем чашки: two cups. Потом of, потом кофе без -s.' },
      { t: 'idea', text: `Итог: то, что не считаем, стоит без a и без -s, а после него is / was. Считать помогает ёмкость + of.`,
        rows: [['без a, без -s', 'water · money · music'], ['после него', 'is / was'], ['посчитать', 'a bottle of water · two cups of tea']] }
    ]},

    // ───────────── 4. a или some ─────────────
    { title: 'a или some?', steps: [
      { t: 'idea', text: `Слово <b>some</b> («немного, несколько») вы знаете. Правило простое: одна штука — <b>a</b>; много штук или то, что не считаем, — <b>some</b>.`,
        rows: [['одна штука', 'a', 'I need a new keyboard.'], ['много штук', 'some', 'I need some new games.'], ['не считаем', 'some', 'I need some coffee.']] },
      { t: 'idea', text: `В одной фразе они спокойно живут рядом — смотрите, как a и some чередуются.`,
        lit: [['I bought', 'я купил'], ['a keyboard,', 'клавиатуру,'], ['some games', 'несколько игр'], ['and some chocolate.', 'и шоколад.']],
        ex: [['I bought a keyboard, some games and some chocolate.', 'Я купил клавиатуру, несколько игр и шоколад.'], ['Do you want some cheese? — Yes, a piece, please.', 'Хочешь сыра? — Да, кусочек, пожалуйста.']] },
      { t: 'check', q: 'I’m hungry. I want ___ bread.', ru: 'Я голоден. Хочу хлеба.', o: ['a', 'some', 'an'], a: 1,
        why: 'Хлеб не считаем → some bread. a bread сказать нельзя.' },
      { t: 'check', q: 'Скажите: «Мне нужен новый ноутбук»', o: ['I need some new laptop.', 'I need a new laptop.', 'I need new laptop.'], a: 1,
        why: 'Ноутбук — одна штука → a. some ставят к «много» или «не считаем».' },
      { t: 'idea', opt: true, text: `Некоторые слова бывают в обеих группах, и смысл меняется. <b>a cake</b> — торт целиком, <b>some cake</b> — кусок торта. <b>a paper</b> — газета, <b>some paper</b> — бумага.`,
        rows: [['a cake', 'торт целиком'], ['some cake', 'кусок торта'], ['a paper / some paper', 'газета / бумага']],
        bad: 'I need a paper for my sketch. (sketch — эскиз)', good: 'I need <b>some</b> paper for my sketch.' },
      { t: 'idea', text: `Итог: a — одна штука, some — всё остальное.`,
        rows: [['одна штука', 'a keyboard · an apple'], ['много штук', 'some games'], ['не считаем', 'some coffee · some bread']] }
    ]},

    // ───────────── 5. Ловушки ─────────────
    { title: 'Ловушки: советы, новости, волосы', steps: [
      { t: 'idea', opt: true, text: `По-русски «советы» и «новости» считаем, а по-английски <b>advice</b>, <b>news</b>, <b>information</b> — нет. Значит без a и без -s: some advice, some news.`,
        ex: [['I need some advice.', 'Мне нужен совет.'], ['I’ve got some news.', 'У меня есть новости.'], ['Where can I get some information?', 'Где взять информацию?']],
        bad: 'Can you give me an advice?', good: 'Can you give me <b>some</b> advice?' },
      { t: 'idea', opt: true, text: `Раз не считаем — после них <b>is</b>, как для одного. То же с hair (волосы), weather (погода), furniture (мебель): her hair is long, it’s nice weather.`,
        ex: [['The news is good!', 'Новости хорошие!'], ['Her hair is very long.', 'У неё очень длинные волосы.'], ['It’s nice weather today.', 'Сегодня хорошая погода.']],
        tip: `Нужна ровно одна новость или один совет? Берите «кусочек»: a piece of news, a piece of advice.` },
      { t: 'check', q: 'The news ___ good!', ru: 'Новости хорошие!', o: ['is', 'are', 'am'], a: 0,
        why: 'news не считаем, поэтому после него is — как для одного.' },
      { t: 'idea', opt: true, text: `Ещё одна ловушка — «работа». <b>work</b> — работа вообще, не считаем: a lot of work. <b>job</b> — место работы, должность, штука: a new job.`,
        ex: [['I’ve got a lot of work today.', 'У меня сегодня много работы.'], ['She’s got a new job.', 'У неё новая работа (место).']],
        bad: 'I’m looking for a work. (look for — искать)', good: 'I’m looking for a <b>job</b>.' },
      { t: 'check', q: 'I’ve got a new ___ at a game studio.', ru: 'У меня новая работа в игровой студии.', o: ['work', 'job', 'works'], a: 1,
        why: 'Место работы — штука, поэтому a job. work с a не бывает.' },
      { t: 'idea', text: `Итог: несколько слов по-русски считаются, а по-английски нет — без a, без -s, после них is.`,
        rows: [['не считаем', 'advice · news · information · hair · weather · work'], ['правильно', 'some advice · The news is good.'], ['работа-место', 'a job']] }
    ]},

    // ───────────── 6. Много ─────────────
    { title: '«Много» — much, many, a lot of', steps: [
      { t: 'idea', text: `Хотите сказать «много игр» и «много времени». По-русски одно слово «много», по-английски два: штуки → <b>many</b>, не считаем → <b>much</b>.`,
        rows: [['штуки', 'many', 'many games, many people'], ['не считаем', 'much', 'much time, much money']],
        ex: [['We haven’t got much time.', 'У нас мало времени.'], ['Are there many people online?', 'Много людей онлайн?']] },
      { t: 'check', q: 'We haven’t got ___ time.', ru: 'У нас мало времени.', o: ['many', 'much', 'a lot'], a: 1,
        why: 'Время не считаем → much.' },
      { t: 'idea', text: `Есть третье слово — <b>a lot of</b>. Оно подходит к обеим группам: a lot of games, a lot of time. Сомневаетесь — говорите a lot of, не ошибётесь.`,
        ex: [['I’ve got a lot of friends in this game.', 'У меня много друзей в этой игре.'], ['There was a lot of food at the party.', 'На вечеринке было много еды.']],
        tip: `После a lot of слово is / are смотрит на то, что дальше: a lot of food → is, a lot of people → are.` },
      { t: 'check', q: 'There ___ a lot of people at the party.', ru: 'На вечеринке было много людей.', o: ['was', 'were', 'is'], a: 1,
        why: 'people — много людей, прошлое → were.' },
      { t: 'idea', text: `Вопрос «сколько?» тоже двух видов: <b>How many</b> + штуки, <b>How much</b> + то, что не считаем. А «сколько стоит?» — How much is it?`,
        lit: [['How much', 'сколько'], ['money', 'денег'], ['do you', 'ты'], ['need?', 'нуждаешься?']],
        ex: [['How many photos did you take?', 'Сколько фото ты сделал?'], ['How much money do you need?', 'Сколько денег тебе нужно?'], ['How much is this game?', 'Сколько стоит эта игра?']] },
      { t: 'check', q: 'How ___ sugar do you want?', ru: 'Сколько сахара ты хочешь?', o: ['many', 'much', 'a lot'], a: 1,
        why: 'Сахар не считаем → How much.' },
      { t: 'idea', text: `Итог: «много» — по группе слова, a lot of — для обеих. «Сколько?» — тоже по группе.`,
        rows: [['штуки', 'many · How many…?'], ['не считаем', 'much · How much…?'], ['обе группы', 'a lot of']] }
    ]},

    // ───────────── 7. Где much звучит странно ─────────────
    { title: 'Где much звучит странно', steps: [
      { t: 'idea', text: `<b>much</b> любит вопросы и «не». В обычной фразе «Я пью много кофе» англичанин вместо much скажет <b>a lot of</b>.`,
        rows: [['вопрос', 'Do you drink much coffee?'], ['с not', 'I don’t drink much coffee.'], ['просто говорите', 'I drink a lot of coffee.']],
        bad: 'I drink much coffee.', good: 'I drink <b>a lot of</b> coffee.',
        tip: `many и a lot of подходят везде. Странно звучит только much в простой фразе без вопроса и без not.` },
      { t: 'check', q: 'Скажите: «У меня много работы»', o: ['I’ve got much work.', 'I’ve got a lot of work.', 'I’ve got many work.'], a: 1,
        why: 'Простая фраза без not → a lot of. much тут звучит странно, а many к work нельзя.' },
      { t: 'idea', text: `much и a lot можно говорить и без слова после них: Do you play much? — Yes, <b>a lot</b>. / No, <b>not much</b>. Без слова после — a lot, без of.`,
        ex: [['Do you watch TV much? — No, not much.', 'Ты много смотришь телевизор? — Нет, не особо.'], ['We go to the cinema a lot.', 'Мы часто ходим в кино.'], ['I don’t like this game very much.', 'Мне не очень нравится эта игра.']],
        tip: `С предметом — a lot <b>of</b> games. Без предмета — просто a lot.` },
      { t: 'check', q: 'Do you play games? — Yes, ___.', ru: 'Ты играешь в игры? — Да, много.', o: ['much', 'a lot', 'a lot of'], a: 1,
        why: 'Ответ «да, много» без предмета → a lot. much в ответе-да не говорят, а of без предмета не нужно.' },
      { t: 'check', q: 'She didn’t say ___.', ru: 'Она мало что сказала.', o: ['many', 'much', 'a lot of'], a: 1,
        why: 'С not и без предмета → much.' },
      { t: 'idea', text: `Итог: much — в вопросах и с not; в простой фразе — a lot of; без предмета — a lot / not much.`,
        rows: [['вопрос, not', 'much coffee?', 'not much'], ['простая фраза', 'a lot of coffee', 'a lot'], ['везде', 'many · a lot of']] }
    ]}
  ];
})();
