// Грамматика по шагам для юнита a2-14: myself / yourself… (себя), by myself (сам, один), each other (друг друга), ловушка «-ся», учим сочетания, go to / on / for / -ing, get (получить, стать, добраться, сесть / выйти), do или make, have (есть у меня / действие), типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-14'); if (!u) return;
  u.walk = [
    // ───────────── 1. myself, yourself — себя ─────────────
    { title: '«Я порезался» — myself, yourself', steps: [
      { t: 'idea', text: `Хотите сказать «Я посмотрел на себя в зеркало (mirror)». Русское «себя» по-английски зависит от того, кто действует. Для «я» это <b>myself</b>.`,
        lit: [['I', 'я'], ['looked at', 'посмотрел на'], ['myself', 'себя (меня самого)'], ['in the mirror', 'в зеркало']],
        ex: [['I looked at myself in the mirror.', 'Я посмотрел на себя в зеркало.'], ['I cut myself.', 'Я порезался.'], ['Sometimes I talk to myself.', 'Иногда я разговариваю сам с собой.']] },
      { t: 'idea', text: `Слово собирается из «кого» (me, him, her…) или «чей» (my, your, our) плюс хвостик <b>-self</b>. Если людей много — <b>-selves</b>.`,
        rows: [['I → myself', 'you (один) → yourself', 'you (много) → yourselves'], ['he → himself', 'she → herself', 'it → itself'], ['we → ourselves', 'they → themselves', '']] },
      { t: 'idea', text: `Как выбрать: другой человек или тот же? Если действие уходит на другого — him, her, me. Если возвращается на того, кто делает, — слово на -self.`,
        ex: [['She’s looking at him.', 'Она смотрит на него (на другого).'], ['She’s looking at herself.', 'Она смотрит на себя.']],
        bad: 'He looked at him in the mirror. (про себя)', good: 'He looked at <b>himself</b> in the mirror.' },
      { t: 'check', q: 'Be careful with that knife! Don’t cut ___.', ru: 'Осторожно с ножом! Не порежься.', o: ['you', 'yourself', 'yourselves'], a: 1,
        why: 'Тот же человек, и он один → yourself.' },
      { t: 'idea', text: `Две готовые фразы. <b>Help yourself!</b> — «Угощайся!» (гостям — Help yourselves!). И <b>enjoy</b> не стоит один: enjoy the party или <b>enjoy myself</b> — хорошо провести время.`,
        ex: [['Pizza is on the table. Help yourselves!', 'Пицца на столе. Угощайтесь!'], ['We enjoyed ourselves at the festival.', 'Мы отлично провели время на фестивале.'], ['Enjoy yourself!', 'Повеселись!']],
        bad: 'We enjoyed very much.', good: 'We enjoyed <b>ourselves</b> very much.' },
      { t: 'check', q: 'The kids had a great time. They really enjoyed ___.', ru: 'Дети отлично провели время. Им очень понравилось.', o: ['them', 'themselves', 'theirselves'], a: 1,
        why: 'they → themselves. Слова theirselves нет.' },
      { t: 'idea', text: `Итог: действие возвращается на того же человека → слово на -self (много людей → -selves).`,
        rows: [['один', 'myself, yourself, himself, herself, itself'], ['много', 'ourselves, yourselves, themselves']] }
    ]},

    // ───────────── 2. by myself, each other ─────────────
    { title: '«Сам» и «друг друга» — by myself, each other', steps: [
      { t: 'idea', text: `Хотите сказать «Я живу один» или «Я сделал это сам, без помощи». Добавьте <b>by</b> перед словом на -self: <b>by myself</b> = один, в одиночку, сам.`,
        lit: [['I', 'я'], ['live', 'живу'], ['by myself', 'один (сам по себе)']],
        ex: [['I live by myself.', 'Я живу один.'], ['Did you make this game by yourself?', 'Ты сделал эту игру сам?'], ['Was she with friends? — No, she was by herself.', 'Она была с друзьями? — Нет, одна.']] },
      { t: 'check', q: 'Nobody helped him. He did it ___ himself.', ru: 'Никто ему не помогал. Он сделал это сам.', o: ['with', 'by', 'for'], a: 1,
        why: 'Сам, без помощи → by himself.' },
      { t: 'idea', text: `Теперь «друг друга». Когда двое (или больше) делают что-то <b>один другому</b>, говорим <b>each other</b>. Это одна готовая пара слов.`,
        lit: [['Anna and Max', 'Анна и Макс'], ['know', 'знают'], ['each other', 'друг друга']],
        ex: [['Anna and Max know each other well.', 'Анна и Макс хорошо знают друг друга.'], ['We live near each other.', 'Мы живём рядом друг с другом.'], ['They send each other memes all day.', 'Они весь день шлют друг другу мемы.']] },
      { t: 'idea', text: `Не путайте с themselves. each other — он на неё, она на него. themselves — каждый на себя.`,
        ex: [['Tom and Kate looked at each other.', 'Том и Кейт посмотрели друг на друга.'], ['Tom and Kate looked at themselves.', 'Том и Кейт посмотрели каждый на себя (в зеркало).']],
        bad: 'They love themselves. (про пару)', good: 'They love <b>each other</b>.' },
      { t: 'check', q: 'Anna and I help ___ with homework.', ru: 'Мы с Анной помогаем друг другу с домашкой.', o: ['ourselves', 'each other', 'us'], a: 1,
        why: 'Я помогаю ей, она — мне → each other.' },
      { t: 'idea', text: `Итог: «сам, один» и «друг друга» — две готовые пары.`,
        rows: [['by myself / by yourself…', 'сам, один, без помощи'], ['each other', 'друг друга, друг другу']] }
    ]},

    // ───────────── 3. Ловушка «-ся» ─────────────
    { title: 'Ловушка: не каждое «-ся» — это myself', steps: [
      { t: 'idea', text: `По-русски «-ся» везде, а myself нужен не всегда. Проверка: замените «-ся» на «себя». Звучит нормально (порезал себя, ушиб себя) — нужен myself. Звучит странно («встретили себя», «проснул себя») — ничего не добавляем.`,
        rows: [['порезался = порезал себя ✓', 'I cut myself.'], ['проснулся = «проснул себя» ✗', 'I woke up.'], ['встретились = «встретили себя» ✗', 'We met.']],
        bad: 'We met ourselves in the café.', good: 'We <b>met</b> in the café.',
        tip: `Это самое частое место ошибок у русскоговорящих — не переживайте, дальше потренируемся.` },
      { t: 'check', q: 'Скажите: «Давай встретимся в шесть»', o: ['Let’s meet ourselves at six.', 'Let’s meet at six.', 'Let’s meet each other ourselves at six.'], a: 1,
        why: '«Встретим себя» — бессмыслица, значит, без ourselves.' },
      { t: 'idea', text: `Одна хитрая пара: «чувствовать <b>себя</b>». Здесь «себя» есть даже в русском, но по-английски — просто <b>feel</b>. И «расслабься» — просто <b>Relax!</b>`,
        ex: [['I feel great.', 'Я чувствую себя отлично.'], ['How do you feel?', 'Как ты себя чувствуешь?'], ['Relax!', 'Расслабься!']],
        bad: 'I feel myself tired.', good: 'I <b>feel</b> tired.' },
      { t: 'check', q: 'Скажите: «Как ты себя чувствуешь?»', o: ['How do you feel yourself?', 'How do you feel?', 'How are you feel?'], a: 1,
        why: 'feel всегда без yourself.' },
      { t: 'idea', text: `Вторая подсказка: если «-ся» значит «стать другим» (заблудиться, одеться, жениться, поправиться), часто нужен <b>get</b> + слово. Подробнее — в части про get.`,
        ex: [['I got dressed.', 'Я оделся.'], ['We got lost.', 'Мы заблудились.'], ['Hurry up!', 'Поторопись!']] },
      { t: 'idea', text: `Итог: «-ся» → myself, только если можно сказать «сделал это с собой, как с другим человеком».`,
        rows: [['порезался, ушибся, посмотрел на себя', 'cut / hurt / looked at myself'], ['встретились, проснулся, чувствую себя', 'met, woke up, feel — без myself'], ['оделся, заблудился', 'got dressed, got lost']] }
    ]},

    // ───────────── 4. go ─────────────
    { title: 'Учим пары: go to, go on, go for, go shopping', steps: [
      { t: 'idea', text: `Дальше — пять главных рабочих слов-действий: go, get, do, make, have. Один русский глагол тут часто распадается на несколько, поэтому учим не слово, а готовую пару «слово + что после него».`,
        ex: [['I did my homework.', 'Я сделал домашку.'], ['I made coffee.', 'Я сделал кофе.'], ['I had a shower.', 'Я принял душ.']],
        tip: `Заведите в заметках пять колонок — go, get, do, make, have — и записывайте туда новые пары из игр и сериалов.` },
      { t: 'idea', text: `Начнём с go. Идём куда-то в место — <b>go to</b> + место. Это вы уже знаете. go to bed — лечь спать, go to sleep — заснуть.`,
        ex: [['I go to work at nine.', 'Я иду на работу в девять.'], ['I went to the dentist yesterday.', 'Вчера я ходил к стоматологу (dentist).'], ['Where’s Max? — He’s gone to bed.', 'Где Макс? — Он пошёл спать.']],
        bad: 'I’m going to home.', good: 'I’m going <b>home</b>.',
        tip: `home — без to, как here и there: go home, go there.` },
      { t: 'check', q: 'Скажите: «Я рано ушёл домой»', o: ['I went to home early.', 'I went home early.', 'I went at home early.'], a: 1,
        why: 'home после go — без to.' },
      { t: 'idea', text: `Поездка — <b>go on</b>: go on holiday (в отпуск), go on a trip (в поездку). Короткое занятие «сходить на…» — <b>go for a…</b>: a walk, a run, a swim, a coffee.`,
        ex: [['We’re going on holiday in July.', 'В июле мы едем в отпуск.'], ['Let’s go for a walk.', 'Пойдём погуляем.'], ['We went for a coffee.', 'Мы пошли выпить кофе.']],
        tip: `С on ещё go on a tour (в тур) и go on strike (объявить забастовку, strike): The taxi drivers have gone on strike.` },
      { t: 'check', q: 'The weather is great. Let’s go ___ a walk.', ru: 'Погода отличная. Пошли погуляем.', o: ['to', 'on', 'for'], a: 2,
        why: 'a walk, a run, a swim → go for.' },
      { t: 'idea', text: `Спорт и занятия на хвостик -ing ставим <b>сразу</b> после go, без to и без for: go shopping, go swimming, go skiing (на лыжах).`,
        ex: [['Are you going shopping?', 'Ты идёшь по магазинам?'], ['It’s hot. Let’s go swimming.', 'Жарко. Пошли плавать.'], ['We go skiing every winter.', 'Мы каждую зиму катаемся на лыжах.']],
        bad: 'Let’s go to shopping.', good: 'Let’s go <b>shopping</b>.' },
      { t: 'check', q: 'Richard has a boat. He often goes ___.', ru: 'У Ричарда есть лодка. Он часто ходит под парусом.', o: ['sailing', 'to sailing', 'for sailing'], a: 0,
        why: 'Слово на -ing идёт сразу после go, без предлога.' },
      { t: 'idea', text: `Итог: смотрим на слово после go — оно выбирает «прицеп».`,
        rows: [['go to + место', 'go to work, go to bed'], ['go on + поездка / go for a…', 'go on holiday, go for a walk'], ['go + -ing / go home', 'go shopping, go home']] }
    ]},

    // ───────────── 5. get ─────────────
    { title: '«Получил, стал, добрался» — всё это get', steps: [
      { t: 'idea', text: `<b>get</b> — самое «резиновое» слово английского (вторая форма — <b>got</b>). Главная мысль одна: было не так — стало так. Первое значение: get + вещь = получить, купить, найти.`,
        ex: [['I got a message from Max.', 'Я получил сообщение от Макса.'], ['I like your hoodie. Where did you get it?', 'Классное худи. Где ты его купил?'], ['It’s hard to get a job in game dev.', 'В геймдеве трудно найти работу.']] },
      { t: 'idea', text: `Второе: get + слово-описание (голодный, мокрый, холодный) = <b>стать, становиться</b>. По-русски часто одно слово: проголодаться, промокнуть, остыть.`,
        lit: [['It’s', 'оно'], ['getting', 'становится'], ['cold', 'холодным']],
        ex: [['If you don’t eat, you get hungry.', 'Если не есть, проголодаешься.'], ['Drink your tea. It’s getting cold.', 'Пей чай, он остывает.'], ['We didn’t have a map, so we got lost.', 'У нас не было карты, и мы заблудились.']],
        bad: 'It becomes dark.', good: 'It’s <b>getting</b> dark.',
        tip: `Так же многие русские «-ся»: get lost — заблудиться, get dressed — одеться, get married — пожениться, get better — поправиться.` },
      { t: 'check', q: 'Put on a jacket or you’ll ___ cold.', ru: 'Надень куртку, а то замёрзнешь.', o: ['become', 'get', 'go'], a: 1,
        why: '«Стать» + слово-описание в живой речи → get.' },
      { t: 'idea', text: `Третье: <b>get to</b> + место = добраться. Но home, here, there — без to, как с go.`,
        ex: [['I got to work at nine.', 'Я добрался до работы в девять.'], ['What time did you get home?', 'Во сколько ты добрался домой?'], ['How did you get here?', 'Как ты сюда добрался?']],
        bad: 'I got to home at 11.', good: 'I got <b>home</b> at 11.' },
      { t: 'check', q: 'What time did you get ___ last night?', ru: 'Во сколько ты вчера добрался домой?', o: ['home', 'to home', 'at home'], a: 0,
        why: 'get home — без to.' },
      { t: 'idea', text: `Четвёртое — транспорт. В машину и такси «залезаем внутрь»: <b>get in / get out of</b>. На автобус, поезд, самолёт «заходим как на платформу»: <b>get on / get off</b>. А просто «поехал на автобусе» — got the bus.`,
        rows: [['машина, такси', 'get in — сесть', 'get out of — выйти'], ['автобус, поезд, самолёт', 'get on — сесть', 'get off — выйти']],
        bad: 'I got off the car.', good: 'I got <b>out of</b> the car.' },
      { t: 'check', q: 'We got ___ the train in Tver.', ru: 'Мы вышли из поезда в Твери.', o: ['out', 'off', 'from'], a: 1,
        why: 'Поезд → get off (выйти).' },
      { t: 'idea', text: `Итог: get = «было не так — стало так».`,
        rows: [['get + вещь', 'получить, купить: get a message'], ['get + описание', 'стать: get hungry, get lost'], ['get to + место / get home', 'добраться; in/out of — машина, on/off — автобус']] }
    ]},

    // ───────────── 6. do или make ─────────────
    { title: '«Делать»: do или make', steps: [
      { t: 'idea', text: `Русское «делать» по-английски бывает двух видов. Правило-проверка: на выходе появилась <b>новая вещь</b>, которую можно показать (кофе, игра, сайт)? Тогда <b>make</b>.`,
        ex: [['I’m making coffee. Do you want some?', 'Я делаю кофе. Хочешь?'], ['My friends make indie games.', 'Мои друзья делают инди-игры.'], ['She made a website.', 'Она сделала сайт.']],
        tip: `Если по-русски можно сказать «приготовить, создать, смастерить» — это make.` },
      { t: 'idea', text: `Новой вещи нет — просто занятие, работа, «что-то делать вообще»? Тогда <b>do</b>. Все вопросы «что делаешь?» — с do.`,
        ex: [['What are you doing tonight?', 'Что делаешь вечером?'], ['I’ll do it.', 'Я сделаю.'], ['What do you do? — I’m a designer.', 'Чем занимаешься? — Я дизайнер.']] },
      { t: 'check', q: 'Скажите: «Что ты делаешь?»', o: ['What are you making?', 'What are you doing?', 'What do you doing?'], a: 1,
        why: '«Что делаешь вообще» — занятие, без новой вещи → doing.' },
      { t: 'idea', text: `С do живут задания и дела: <b>do homework</b>, do housework (дела по дому), do an exam, do a course, do exercises, do the shopping, do the washing-up (помыть посуду), <b>do me a favour</b> (сделай одолжение).`,
        ex: [['I must do my homework.', 'Мне надо сделать домашку.'], ['I’m doing a course in 3D modelling.', 'Я прохожу курс 3D-моделирования.'], ['Could you do me a favour?', 'Можешь сделать мне одолжение?']],
        bad: 'I made my homework.', good: 'I <b>did</b> my homework.' },
      { t: 'check', q: 'Have you ___ your homework yet?', ru: 'Ты уже сделал домашку?', o: ['made', 'done', 'did'], a: 1,
        why: 'homework → do; после have — третья форма done.' },
      { t: 'idea', text: `Несколько пар с make надо просто запомнить: <b>make a mistake</b> (ошибиться), make an appointment (записаться к врачу), make a phone call, make a list, make a noise (шуметь), make the bed (заправить кровать).`,
        ex: [['Everybody makes mistakes.', 'Все ошибаются.'], ['I need to make an appointment with the dentist.', 'Мне надо записаться к стоматологу.'], ['Please don’t make a noise.', 'Пожалуйста, не шумите.']],
        bad: 'I did a mistake.', good: 'I <b>made</b> a mistake.',
        tip: `А фото не «делают», а «берут»: <b>take a photo</b> — Can I take a photo of your cat?` },
      { t: 'check', q: 'Sorry, I ___ a mistake in your name.', ru: 'Извини, я ошибся в твоём имени.', o: ['did', 'made', 'had'], a: 1,
        why: 'Ошибка — готовая пара make a mistake.' },
      { t: 'idea', text: `Итог: новая вещь — make, занятие и задание — do. Плюс несколько пар наизусть.`,
        rows: [['make — создать', 'make coffee, make a game, make a mistake, make a noise'], ['do — выполнить', 'do homework, do a course, do me a favour'], ['фото', 'take a photo']] }
    ]},

    // ───────────── 7. have ─────────────
    { title: '«У меня есть» и «я завтракаю» — два лица have', steps: [
      { t: 'idea', text: `Первое лицо have вы знаете из A1: «у меня есть». Тут можно <b>have</b> или <b>have got</b> — смысл один. Так говорят о вещах, внешности и простуде (a cold).`,
        ex: [['I have a new monitor. = I’ve got a new monitor.', 'У меня новый монитор.'], ['Kate has got long hair.', 'У Кейт длинные волосы.'], ['Have you got a cold?', 'Ты простыл?']] },
      { t: 'idea', text: `В прошлом got пропадает: только <b>had</b>, а вопрос и «не» — с did, как обычно.`,
        ex: [['I had a cold last week.', 'На прошлой неделе я простыл.'], ['Did you have enough time?', 'Тебе хватило времени?'], ['He didn’t have any money.', 'У него не было денег.']],
        bad: 'I had got a cold.', good: 'I <b>had</b> a cold.' },
      { t: 'idea', text: `Второе лицо — действие. «Позавтракать», «принять душ», «отдохнуть» по-английски — have + слово. Здесь <b>только have</b>, без got.`,
        lit: [['I', 'я'], ['have', '(делаю)'], ['a shower', 'душ'], ['every morning', 'каждое утро']],
        ex: [['I have breakfast at eight.', 'Я завтракаю в восемь.'], ['I have a shower every morning.', 'Я принимаю душ каждое утро.'], ['We’re having a party on Friday.', 'У нас вечеринка в пятницу.']] },
      { t: 'check', q: 'Скажите: «Я принимаю душ каждое утро»', o: ['I take shower every morning.', 'I have a shower every morning.', 'I’ve got a shower every morning.'], a: 1,
        why: 'Принять душ — действие → have a shower, без got.' },
      { t: 'idea', text: `Раз это действие, у него бывает хвостик -ing: «Она сейчас обедает» — She’s having lunch. С «есть у меня» так нельзя.`,
        ex: [['Where’s Lisa? — She’s having lunch.', 'Где Лиза? — Обедает.'], ['I’ve got a shower in my flat.', 'В квартире есть душ.'], ['I’m having a shower now.', 'Я сейчас в душе.']] },
      { t: 'check', q: 'Where’s Tom? — He’s ___ dinner.', ru: 'Где Том? — Ужинает.', o: ['got', 'having', 'making'], a: 1,
        why: 'have dinner — действие, поэтому having.' },
      { t: 'idea', text: `Другие частые пары с have: have a rest (отдохнуть), have a good time, have fun, <b>have a look</b> (взглянуть), have a dream (увидеть сон).`, opt: true,
        ex: [['Have a good time!', 'Хорошо вам провести время!'], ['Can I have a look at your sketches?', 'Можно взглянуть на твои скетчи?'], ['I had a strange dream last night.', 'Мне приснился странный сон.']] },
      { t: 'idea', text: `Итог: «есть у меня» — have или have got; действие — только have, можно с -ing.`,
        rows: [['у меня есть', 'I have / I’ve got a cold. (прошлое — had)'], ['действие', 'have breakfast, have a shower, She’s having lunch.']] }
    ]},

    // ───────────── 8. Проверьте себя ─────────────
    { title: 'Ловушки: проверьте себя', steps: [
      { t: 'check', q: 'Tom and Kate looked at ___ and smiled.', ru: 'Том и Кейт посмотрели друг на друга и улыбнулись.', o: ['themselves', 'each other', 'them'], a: 1,
        why: 'Он на неё, она на него → each other.' },
      { t: 'check', q: 'The water is warm. Let’s go for ___.', ru: 'Вода тёплая. Пошли поплаваем.', o: ['swimming', 'a swim', 'swim'], a: 1,
        why: 'go for + a…: go for a swim. А go swimming — без for.' },
      { t: 'check', q: 'I usually ___ my bed in the morning.', ru: 'Я обычно заправляю кровать утром.', o: ['do', 'make', 'have'], a: 1,
        why: 'Заправить кровать — готовая пара make the bed.' },
      { t: 'idea', text: `Итог урока: себя — myself, сам — by myself, друг друга — each other; не каждое «-ся» — myself. Пять слов учим парами.`,
        rows: [['go to / on / for / -ing', 'go to bed, go on holiday, go for a walk, go shopping'], ['get / have', 'get = получить, стать, добраться; have = есть или действие'], ['make / do', 'make создаёт, do выполняет']] }
    ]}
  ];
})();
