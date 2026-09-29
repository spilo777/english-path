// Грамматика по шагам для юнита a1-6: there is / there are, there is или it is, have got, have или have got, some / any, near / next to / opposite.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-6'); if (!u) return;
  u.walk = [
    // ───────────── 1. There is — «где-то что-то есть» ─────────────
    { title: '«Рядом парк» — как сказать, что где-то что-то есть', steps: [
      { t: 'idea', text: `Хотите сказать «Рядом с моим домом парк». По-русски слова «есть» тут нет. По-английски такая фраза начинается с рамки <b>There is</b> — «имеется».`,
        lit: [['There is', 'имеется'], ['a park', 'парк'], ['near my house', 'рядом с моим домом']],
        ex: [['There is a park near my house.', 'Рядом с моим домом парк.'], ['There is a sofa in the room.', 'В комнате диван.'], ['There is a cat on the chair.', 'На стуле кот.']] },
      { t: 'idea', text: `Порядок обратный русскому: сначала <b>что</b> есть, потом <b>где</b>. По-русски «В комнате диван», по-английски «Имеется диван в комнате».`,
        bad: 'In the room is a sofa.', good: '<b>There is</b> a sofa in the room.',
        tip: `Формула: There is + что + где.` },
      { t: 'check', q: 'Скажите: «В комнате стол»', o: ['In the room is a table.', 'There is a table in the room.', 'A table in the room.'], a: 1,
        why: 'Начинаем с There is, потом что (a table), потом где (in the room).' },
      { t: 'idea', text: `Слово there здесь не значит «там». Это «заглушка» в начале — переводить её не нужно. В разговоре There is сжимают в <b>There’s</b>.`,
        ex: [['There’s a café near the office.', 'Рядом с офисом кафе.'], ['There’s a cat on my bed.', 'На моей кровати кот.'], ['There’s a shop in my street.', 'На моей улице магазин.']],
        tip: `Сравните: There’s a phone on the table — «есть телефон». The phone is there — «телефон там». Разные there.` },
      { t: 'check', q: '___ a big table in the kitchen.', ru: 'На кухне большой стол.', o: ['It is', 'There is', 'Is'], a: 1,
        why: 'Сообщаем, что где-то что-то есть → There is.' },
      { t: 'idea', text: `Итог: «где-то что-то есть» → <b>There is + что + где</b>.`,
        rows: [['There is', 'a sofa', 'in the room.'], ['There’s', 'a café', 'near the office.']] }
    ]},

    // ───────────── 2. is или are, нет, вопрос, сколько ─────────────
    { title: 'is или are? «Нет», вопрос и «сколько?»', steps: [
      { t: 'idea', text: `Один предмет → <b>There is</b>. Много → <b>There are</b>. Тот же выбор, что в уроке 1: один — is, много — are.`,
        rows: [['один: a sofa', 'There is a sofa.'], ['много: two sofas', 'There are two sofas.'], ['много: a lot of people', 'There are a lot of people.']],
        tip: `Смотрите на слово сразу после is / are: a → is; two, three, a lot of → are.` },
      { t: 'check', q: 'There ___ three rooms in my flat.', ru: 'В моей квартире три комнаты.', o: ['is', 'are', 'am'], a: 1,
        why: 'Три комнаты — много → are.' },
      { t: 'idea', text: `«Нет» — знакомое not: There is not → <b>There isn’t</b>, There are not → <b>There aren’t</b>.`,
        ex: [['There isn’t a cinema in my city.', 'В моём городе нет кинотеатра.'], ['There isn’t a fridge in the office.', 'В офисе нет холодильника.'], ['There aren’t a lot of people here.', 'Здесь немного людей.']] },
      { t: 'idea', text: `Вопрос — меняем местами первые два слова: There is → <b>Is there</b>? Короткий ответ: Yes, there is. / No, there isn’t.`,
        lit: [['Is', '(есть)'], ['there', '—'], ['a café', 'кафе'], ['near here?', 'здесь рядом?']],
        ex: [['Is there a shop near here? — Yes, there is.', 'Тут рядом есть магазин? — Да.'], ['Are there two bedrooms? — No, there aren’t.', 'Там две спальни? — Нет.']] },
      { t: 'check', q: '___ there a cinema in your city?', ru: 'В твоём городе есть кинотеатр?', o: ['Are', 'Is', 'Do'], a: 1,
        why: 'Один кинотеатр → is; в вопросе is идёт первым.' },
      { t: 'idea', text: `«Сколько?» — <b>How many</b> + много предметов + <b>are there</b>. Ответ — коротко: There are three.`,
        lit: [['How many', 'сколько'], ['rooms', 'комнат'], ['are there', 'имеется'], ['in your flat?', 'в твоей квартире?']],
        ex: [['How many rooms are there in your flat? — There are three.', 'Сколько комнат в твоей квартире? — Три.'], ['How many people are there in the office?', 'Сколько людей в офисе?']] },
      { t: 'idea', text: `Итог: один — is, много — are; «нет» — isn’t / aren’t; вопрос — is / are в начало.`,
        rows: [['+', 'There is a bed.', 'There are two beds.'], ['−', 'There isn’t a bed.', 'There aren’t two beds.'], ['?', 'Is there a bed?', 'Are there two beds?']] }
    ]},

    // ───────────── 3. There is или It is ─────────────
    { title: 'There is или It is?', steps: [
      { t: 'idea', text: `Хотите сказать «Рядом с офисом есть кафе. Оно маленькое». Первая фраза сообщает, что кафе <b>есть</b> → There is. Вторая — <b>какое оно</b> → It is.`,
        ex: [['There’s a café near my office. It’s small and cheap.', 'Рядом с офисом есть кафе. Оно маленькое и дешёвое.'], ['There’s a new game on my laptop. It’s very good.', 'У меня на ноутбуке новая игра. Она очень хорошая.']] },
      { t: 'idea', text: `Сначала there «ставит» вещь на сцену, потом it про неё рассказывает. Если начать с It’s, слушатель спросит: «Что — оно?»`,
        bad: 'It’s a café near my office. (сообщаем, что кафе есть)', good: '<b>There’s</b> a café near my office. <b>It’s</b> nice.',
        rows: [['Что там есть?', 'There is', 'There’s a book on the table.'], ['Какая она? Что это?', 'It is', 'It’s an old book.']] },
      { t: 'check', q: 'There’s a park opposite my house. ___ very big.', ru: 'Напротив моего дома парк. Он очень большой.', o: ['There’s', 'It’s', 'Is'], a: 1,
        why: 'Парк уже назвали, теперь говорим, какой он → It’s.' },
      { t: 'check', q: 'Скажите: «На столе телефон» (сообщаем, что он там)', o: ['It’s a phone on the table.', 'There’s a phone on the table.', 'Phone is on the table.'], a: 1,
        why: 'Сообщаем, что телефон есть → There’s. It’s — только когда о вещи уже знают.' },
      { t: 'idea', text: `Итог: <b>есть</b> → There is, <b>какой</b> → It is.`,
        rows: [['есть (новая вещь)', 'There’s a sofa in the room.'], ['какой он (про эту вещь)', 'It’s big and old.']] }
    ]},

    // ───────────── 4. have got ─────────────
    { title: 'have got — «у меня есть»', steps: [
      { t: 'idea', text: `Хотите сказать «У меня есть кот». В уроке 3 мы говорили I have a cat. В живой речи чаще говорят <b>I’ve got a cat</b> — смысл тот же.`,
        lit: [['I', 'я'], ['have got', 'имею'], ['a cat', 'кота']],
        ex: [['I’ve got a new laptop.', 'У меня новый ноутбук.'], ['We’ve got two cats.', 'У нас два кота.'], ['They’ve got a big flat.', 'У них большая квартира.']] },
      { t: 'idea', text: `Для «он / она / оно» (Kate, my flat) — <b>has got</b>, коротко ’s got. Для всех остальных — have got, коротко ’ve got.`,
        rows: [['I / you / we / they', 'have got', 'I’ve got a dog.'], ['he / she / it, Kate', 'has got', 'Kate’s got a dog.']],
        tip: `Kate’s got — это Kate <b>has</b> got, а не Kate is. Если после ’s стоит got — это has.` },
      { t: 'check', q: 'Kate ___ got a new flat.', ru: 'У Кейт новая квартира.', o: ['have', 'has', 'is'], a: 1,
        why: 'Kate — она → has got.' },
      { t: 'idea', text: `«Нет» — not после have / has: <b>haven’t got</b>, <b>hasn’t got</b>. Вопрос — have / has в начало: <b>Have you got…?</b> Слово do тут не нужно.`,
        bad: 'Do you have got a laptop?', good: '<b>Have</b> you got a laptop?',
        ex: [['I haven’t got a car.', 'У меня нет машины.'], ['My flat hasn’t got a garden.', 'У моей квартиры нет сада.'], ['Has she got a cat? — Yes, she has.', 'У неё есть кот? — Да.']] },
      { t: 'check', q: '___ you got a car?', ru: 'У тебя есть машина?', o: ['Do', 'Have', 'Are'], a: 1,
        why: 'С have got вопрос начинается с Have, без do.' },
      { t: 'check', q: 'Has Max got a garden? — No, he ___.', ru: 'У Макса есть сад? — Нет.', o: ['hasn’t', 'isn’t', 'doesn’t'], a: 0,
        why: 'Вопрос с has → ответ с has: No, he hasn’t. got в коротком ответе не нужен.' },
      { t: 'idea', text: `Итог: <b>где</b> есть → there is, <b>у кого</b> есть → have got.`,
        rows: [['где есть', 'There is a cat in the room.'], ['у кого есть', 'I’ve got a cat.'], ['нет / вопрос', 'I haven’t got… / Have you got…?']] }
    ]},

    // ───────────── 5. have или have got ─────────────
    { title: 'have или have got? Два способа — одно значение', steps: [
      { t: 'idea', text: `Оба способа верны. Главное — не смешивать их в одном предложении: do работает с have, а have got обходится без do.`,
        rows: [['+', 'I have a dog.', 'I’ve got a dog.'], ['−', 'I don’t have a car.', 'I haven’t got a car.'], ['?', 'Do you have a cat?', 'Have you got a cat?']] },
      { t: 'idea', text: `Ответ повторяет вопрос. Вопрос с do → ответ с do. Вопрос с have → ответ с have.`,
        ex: [['Do you have a car? — No, I don’t.', 'У тебя есть машина? — Нет.'], ['Have you got a car? — No, I haven’t.', 'У тебя есть машина? — Нет.'], ['Does she have a cat? — Yes, she does.', 'У неё есть кот? — Да.']] },
      { t: 'check', q: 'Do you have a car? — No, I ___.', ru: 'У тебя есть машина? — Нет.', o: ['haven’t', 'don’t', 'am not'], a: 1,
        why: 'Вопрос с do → короткий ответ с don’t.' },
      { t: 'idea', opt: true, text: `got — только про «иметь». Когда have значит действие — завтракать, пить кофе, — got не ставят.`,
        bad: 'I’ve got breakfast at eight.', good: 'I <b>have</b> breakfast at eight.',
        ex: [['I have coffee in the morning.', 'Утром я пью кофе.'], ['We have breakfast together.', 'Мы завтракаем вместе.']] },
      { t: 'idea', text: `Итог: have (+ do) или have got — на выбор, но не вперемешку.`,
        rows: [['have', 'Do you have…? — Yes, I do.'], ['have got', 'Have you got…? — Yes, I have.']] }
    ]},

    // ───────────── 6. some и any ─────────────
    { title: 'some и any — «немного, какие-то»', steps: [
      { t: 'idea', text: `Хотите сказать «В холодильнике есть молоко» — не одна штука, а «немного». Перед таким словом ставят <b>some</b>. По-русски его часто не переводят.`,
        lit: [['There is', 'есть'], ['some', 'немного'], ['milk', 'молока'], ['in the fridge', 'в холодильнике']],
        ex: [['There is some milk in the fridge.', 'В холодильнике есть молоко.'], ['I’ve got some apples.', 'У меня есть яблоки.'], ['There are some eggs on the table.', 'На столе есть яйца.']] },
      { t: 'idea', text: `В вопросе и в «нет» вместо some ставят <b>any</b>: «есть ли какие-нибудь?», «нет никаких».`,
        rows: [['+ есть', 'some', 'There is some bread.'], ['− нет', 'any', 'There isn’t any bread.'], ['? вопрос', 'any', 'Is there any bread?']],
        tip: `any любит сомнение и «нет». some — когда точно «да, есть».` },
      { t: 'check', q: 'There isn’t ___ cheese.', ru: 'Сыра нет.', o: ['some', 'any', 'a'], a: 1,
        why: '«Нет» → any.' },
      { t: 'check', q: 'Скажите: «У тебя есть вода?»', o: ['Have you got some water?', 'Have you got any water?', 'Have you got a water?'], a: 1,
        why: 'Вопрос → any. Воду не считают по штукам, a не ставим.' },
      { t: 'idea', text: `Итог: «да, есть» → some; «нет» и «?» → any.`,
        rows: [['+', 'I’ve got some milk.'], ['−', 'I haven’t got any milk.'], ['?', 'Have you got any milk?']] }
    ]},

    // ───────────── 7. Что не считают по штукам ─────────────
    { title: 'milk, bread, water — что не считают по штукам', steps: [
      { t: 'idea', text: `some / any ставят перед тем, чего много (eggs, shops), и перед тем, что не считают по штукам: milk, water, bread, cheese, tea. Такие слова — без <b>a</b>, без <b>-s</b> и всегда с there <b>is</b>.`,
        bad: 'There are some breads. / a milk', good: 'There <b>is</b> some <b>bread</b>. / some milk',
        ex: [['There are some eggs.', 'Есть яйца.'], ['There is some water on the table.', 'На столе вода.'], ['Is there any cheese?', 'Сыр есть?']],
        tip: `Нельзя сказать «одно молоко, два молока» — значит, это не «штуки», и -s не нужно.` },
      { t: 'check', q: 'There ___ some water on the table.', ru: 'На столе вода.', o: ['is', 'are', 'have'], a: 0,
        why: 'Воду не считают по штукам → there is.' },
      { t: 'check', q: 'Скажите: «Хлеба нет»', o: ['There isn’t any bread.', 'There aren’t any breads.', 'There isn’t a bread.'], a: 0,
        why: 'Хлеб — не «штуки»: is, без -s; «нет» → any.' },
      { t: 'idea', opt: true, text: `Когда предлагаете что-то и ждёте «да», в вопросе всё же some: Do you want some tea? А если ясно, о чём речь, слово после some / any можно не повторять.`,
        ex: [['Do you want some coffee?', 'Хочешь кофе?'], ['Is there any milk? — Yes, there’s some in the fridge.', 'Молоко есть? — Да, в холодильнике есть.'], ['I want some cheese. — Sorry, there isn’t any.', 'Хочу сыра. — Извини, его нет.']] },
      { t: 'idea', opt: true, text: `Так же работают <b>something</b> (что-то) и <b>anything</b> (что-нибудь, ничего): something — «да», anything — «нет» и «?».`,
        ex: [['There’s something on the chair.', 'На стуле что-то есть.'], ['There isn’t anything in my bag.', 'В моей сумке ничего нет.'], ['Is there anything in the fridge?', 'В холодильнике что-нибудь есть?']] },
      { t: 'idea', text: `Итог: milk, bread, water — без a, без -s, с there is.`,
        rows: [['штуки: eggs', 'There are some eggs.'], ['не штуки: bread', 'There is some bread.']] }
    ]},

    // ───────────── 8. near / next to / opposite ─────────────
    { title: 'Где? near, next to, opposite', steps: [
      { t: 'idea', text: `В конце фразы с there is часто стоит «где». Три полезных слова: <b>near</b> — рядом, недалеко; <b>next to</b> — возле, вплотную; <b>opposite</b> — напротив.`,
        rows: [['near', 'рядом, недалеко', 'I live near the park.'], ['next to', 'возле, вплотную', 'My bag is next to the sofa.'], ['opposite', 'напротив', 'The shop is opposite the station.']] },
      { t: 'idea', text: `next to — всегда два слова, как русское «рядом <i>с</i>». А near и opposite — без to.`,
        bad: 'The shop is next the café. / near to the café.', good: 'The shop is next <b>to</b> the café. / <b>near</b> the café.',
        ex: [['There’s a café next to the station.', 'Возле вокзала кафе.'], ['Is there a supermarket near here?', 'Тут рядом есть супермаркет?'], ['There’s a park opposite my office.', 'Напротив моего офиса парк.']] },
      { t: 'check', q: 'The shop is ___ the station.', ru: 'Магазин напротив вокзала.', o: ['next', 'opposite', 'near to'], a: 1,
        why: 'Напротив = opposite, без to.' },
      { t: 'check', q: 'Скажите: «Моя сумка возле дивана»', o: ['My bag is next the sofa.', 'My bag is next to the sofa.', 'My bag is near to the sofa.'], a: 1,
        why: 'Возле, вплотную = next to — всегда с to. near — без to.' },
      { t: 'idea', text: `Итог: near — рядом, next to — возле, opposite — напротив.`,
        rows: [['near the park', 'рядом с парком'], ['next to the sofa', 'возле дивана'], ['opposite the station', 'напротив вокзала']] }
    ]}
  ];
})();
