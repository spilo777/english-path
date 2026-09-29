// Грамматика по шагам для юнита b1-24: предлог — картинка (at / on / in, напоминание A1-14 и A2-15), время (at the moment, at the weekend, on Friday morning, без предлога перед next / last, in + отрезок = через / за), on time / in time, at the end / in the end, at first, during / for / while, until / by / by the time, место (in the photo, on the website, at the top, on the left, on the second floor), здания, события, транспорт, arrive in / at, get to, home, устойчивые выражения (in the rain, in my opinion, on purpose, on holiday, at the age of), итог уровня B1.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-24'); if (!u) return;
  u.walk = [
    // ───────────── 1. Предлог — это картинка ─────────────
    { title: 'Предлог — это картинка, а не перевод', steps: [
      { t: 'idea', text: `Вы уже знаете (A1 и A2): <b>at</b> 8, <b>on</b> Monday, <b>in</b> April; <b>in</b> the box, <b>on</b> the table, <b>at</b> the bus stop. За каждым из трёх слов стоит своя картинка — и для места, и для времени.`,
        rows: [['at — точка', 'at the entrance', 'at 6 pm'], ['on — поверхность, линия', 'on the wall', 'on Friday'], ['in — внутри, период', 'in the car, in Berlin', 'in June']] },
      { t: 'idea', text: `Хотите сказать «Кто это на фото?». Русское «на» тянет к on, но фото — это рамка, а люди <b>внутри</b> неё. Поэтому <b>in</b> the photo. Не переводите «на» — представьте картинку.`,
        lit: [['Who’s', 'кто (есть)'], ['that', 'это'], ['in', 'внутри'], ['the photo', 'фото']],
        bad: 'Who’s that on the photo?', good: 'Who’s that <b>in</b> the photo?' },
      { t: 'check', q: 'Who’s that guy ___ the picture?', ru: 'Кто этот парень на картинке?', o: ['on', 'in', 'at'], a: 1,
        why: 'Тот, кто изображён, — внутри рамки → in the picture.' },
      { t: 'idea', text: `Итог: at — точка, on — поверхность, in — внутри. Сначала картинка, потом слово.`,
        rows: [['точка', 'at the entrance, at 6 pm'], ['поверхность', 'on the wall, on Friday'], ['внутри', 'in the photo, in June']] }
    ]},

    // ───────────── 2. Время: тонкие места ─────────────
    { title: 'Время: at the moment, next Friday, in ten minutes', steps: [
      { t: 'idea', text: `Базовое правило вы знаете. А вот готовые пары, где путаются даже продвинутые: <b>at</b> the moment (сейчас), at night, at Christmas — но <b>in</b> the morning и <b>on</b> Friday morning (утро конкретного дня).`,
        rows: [['at', 'at the moment, at night, at the weekend, at Christmas'], ['in', 'in the morning, in the evening'], ['on', 'on Friday morning, on Sunday evening, on Christmas Day']],
        ex: [['I’m busy at the moment.', 'Я сейчас занят.'], ['See you on Sunday evening.', 'Увидимся в воскресенье вечером.']],
        tip: `at the weekend (брит.) = on the weekend (амер.) — оба верны. at night — ночью вообще, in the night — в одну конкретную ночь.` },
      { t: 'idea', text: `Перед <b>next, last, this, every</b> предлога нет совсем. Русское «в следующую пятницу» так и тянет сказать on — но не нужно.`,
        ex: [['See you next Friday.', 'Увидимся в следующую пятницу.'], ['We moved last June.', 'Мы переехали в июне прошлого года.'], ['I play every evening.', 'Я играю каждый вечер.']],
        bad: 'See you on next Friday.', good: 'See you next Friday.' },
      { t: 'check', q: 'Скажите: «Мы переехали в прошлом году»', o: ['We moved in last year.', 'We moved last year.', 'We moved at last year.'], a: 1,
        why: 'Перед last (и next, this, every) предлог не ставим.' },
      { t: 'idea', text: `«Стрим начнётся <b>через</b> десять минут» — это <b>in</b> ten minutes, а не after. И «выучил <b>за</b> две недели» — тоже in.`,
        lit: [['The stream', 'стрим'], ['starts', 'начинается'], ['in', 'через'], ['ten minutes', 'десять минут']],
        ex: [['The stream starts in ten minutes.', 'Стрим начнётся через десять минут.'], ['I learned Figma in two weeks.', 'Я выучил Figma за две недели.']],
        bad: 'I’ll call you after five minutes.', good: 'I’ll call you <b>in</b> five minutes.' },
      { t: 'check', q: 'I’ll be back ___ ten minutes.', ru: 'Я вернусь через десять минут.', o: ['after', 'in', 'during'], a: 1,
        why: '«Через» столько-то от сейчас → in ten minutes.' },
      { t: 'idea', text: `Итог: несколько готовых пар учим целиком. Перед next / last — пусто. «Через» — in.`,
        rows: [['at the moment, at night', 'on Friday morning'], ['next Friday, last June', 'без предлога'], ['in ten minutes', 'через десять минут']] }
    ]},

    // ───────────── 3. on time / in time, at the end / in the end ─────────────
    { title: '«Вовремя» и «в конце» — две пары-ловушки', steps: [
      { t: 'idea', text: `Русское «вовремя» — два разных выражения. <b>on time</b> — точно по плану, по расписанию, без опозданий.`,
        ex: [['The flight left on time.', 'Рейс вылетел вовремя.'], ['The meeting is at 10. Please be on time.', 'Встреча в 10. Пожалуйста, не опаздывайте.']] },
      { t: 'idea', text: `<b>in time</b> — «успеть», с запасом до какого-то момента: in time for dinner, in time to see the start. <b>just in time</b> — в последний момент.`,
        ex: [['Will you be home in time for dinner?', 'Ты успеешь домой к ужину?'], ['We got to the station just in time.', 'Мы успели на вокзал в последний момент.']],
        tip: `on time — «по часам» (как в расписании). in time — «успел до того, как стало поздно» (противоположность — too late).` },
      { t: 'check', q: 'The train left ___ time, at 9:15 exactly, as planned.', ru: 'Поезд ушёл вовремя, ровно в 9:15, по расписанию.', o: ['in', 'on', 'at'], a: 1,
        why: 'Точно по плану, по расписанию → on time.' },
      { t: 'check', q: 'We got to the cinema just ___ time to see the start.', ru: 'Мы успели в кино в последний момент — к самому началу.', o: ['in', 'at', 'by'], a: 0,
        why: '«Успели», в последний момент → just in time.' },
      { t: 'idea', text: `«В конце» — тоже два. <b>at the end of</b> — в конце чего-то (месяца, матча). <b>in the end</b> — «в итоге, в конце концов», пара к <b>at first</b> (сначала).`,
        ex: [['The deadline is at the end of the month.', 'Дедлайн в конце месяца.'], ['At first I hated the new interface, but in the end I got used to it.', 'Сначала я ненавидел новый интерфейс, но в итоге привык.']],
        bad: 'in the end of the month', good: '<b>at</b> the end of the month',
        tip: `Начало — тоже at: at the beginning of August (в начале августа).` },
      { t: 'check', q: 'We argued for an hour, but ___ we chose the blue logo.', ru: 'Мы спорили час, но в итоге выбрали синий логотип.', o: ['at end', 'in the end', 'on the end'], a: 1,
        why: '«В итоге, в конце концов» → in the end.' },
      { t: 'idea', text: `Итог: две пары, которые по-русски звучат одинаково.`,
        rows: [['on time', 'по плану, не опоздав'], ['in time', 'успеть (к чему-то)'], ['at the end of… / in the end', 'в конце чего-то / в итоге']] }
    ]},

    // ───────────── 4. during / for / while; until / by / by the time ─────────────
    { title: '«Во время», «до пятницы», «к тому времени» — during, until, by', steps: [
      { t: 'idea', text: `Вы уже знаете из A2: <b>during</b> + событие (когда?), <b>for</b> + отрезок (сколько?), <b>while</b> + кто + действие. На B1 главное — не путать их в спешке.`,
        rows: [['during the film', 'во время фильма'], ['for two hours', 'два часа (сколько)'], ['while I was driving', 'пока я вёл машину']],
        bad: 'It rained during three days. / during I was sleeping', good: 'It rained <b>for</b> three days. / <b>while</b> I was sleeping' },
      { t: 'check', q: 'I got a call ___ I was driving.', ru: 'Мне позвонили, пока я был за рулём.', o: ['during', 'while', 'for'], a: 1,
        why: 'Дальше кто + действие (I was driving) → while.' },
      { t: 'idea', text: `Русское «до пятницы» бывает двух видов. Действие <b>длится</b> до момента — <b>until</b>. Должно <b>случиться не позже</b> момента — <b>by</b> (к).`,
        lit: [['Send', 'пришли'], ['the mockups', 'макеты'], ['by', 'не позже, к'], ['Friday', 'пятнице']],
        rows: [['until — длится до', 'Max is away until Friday.', 'Макса нет до пятницы.'], ['by — не позже', 'Max will be back by Friday.', 'Макс вернётся к пятнице.']],
        tip: `not… until = «только в»: I didn’t get up until eleven — Я встал только в одиннадцать.` },
      { t: 'check', q: 'Send me the file ___ Monday — not later.', ru: 'Пришли мне файл к понедельнику, не позже.', o: ['until', 'by', 'during'], a: 1,
        why: 'Не позже определённого дня → by. until — только когда что-то длится.' },
      { t: 'idea', text: `<b>by the time</b> — «к тому времени, как». Про будущее — дальше настоящее время (как после when). Про прошлое — часто had done: что-то уже случилось раньше.`,
        ex: [['By the time we get to the shop, it will be closed.', 'Когда мы доберёмся до магазина, он уже закроется.'], ['By the time I logged in, the raid had already started.', 'К тому времени, как я зашёл, рейд уже начался.']],
        tip: `by then — «к тому моменту»: …but by then everyone had left. by now — «уже сейчас»: She should be here by now.` },
      { t: 'check', q: 'By the time we got to the conference, the first talk ___.', ru: 'Когда мы добрались до конференции, первый доклад (talk) уже закончился.', o: ['has finished', 'had finished', 'will finish'], a: 1,
        why: 'Закончился раньше, чем мы приехали (в прошлом) → had finished.' },
      { t: 'idea', text: `Итог: спросите себя — длится или «не позже»?`,
        rows: [['until', 'длится до: wait until Friday'], ['by', 'не позже: send it by Friday'], ['by the time', 'к тому времени, как: …it had started']] }
    ]},

    // ───────────── 5. Место: in, at, on ─────────────
    { title: 'Место: in the photo, on the website, at the top', steps: [
      { t: 'idea', text: `Одно и то же место меняет предлог, когда меняется картинка. Стоит <b>у</b> двери — at, записка висит <b>на</b> двери — on. Вода <b>внутри</b> бутылки — in.`,
        ex: [['Someone is at the door.', 'Кто-то у двери.'], ['There’s a note on the door.', 'На двери записка.'], ['There were a lot of people in the shop.', 'В магазине было много людей.']] },
      { t: 'idea', text: `Где русский говорит «на», английский часто думает иначе. «На фото, в небе» — <b>in</b>. «На сайте, на странице, в меню, в списке, на карте» — <b>on</b>. «Вверху, внизу» — <b>at</b> the top / bottom.`,
        rows: [['in', 'in the photo, in the sky, in a book, in a queue, in the front row'], ['on', 'on the website, on page 5, on the menu, on a list, on a map'], ['at', 'at the top, at the bottom, at reception, at the end of the street']] },
      { t: 'check', q: 'You’ll find the schedule ___ our website.', ru: 'Расписание вы найдёте на нашем сайте.', o: ['in', 'on', 'by'], a: 1,
        why: 'Сайт, страница, меню, список → on.' },
      { t: 'idea', text: `Ещё три частых места с <b>on</b>: on the left / right (слева / справа), on the second floor (на втором этаже), on the coast (на побережье). И по дороге — on the way.`,
        ex: [['Our office is on the third floor.', 'Наш офис на третьем этаже.'], ['The buttons were on the left.', 'Кнопки были слева.'], ['I bought coffee on the way to work.', 'Я купил кофе по дороге на работу.']],
        bad: 'in the left / at the second floor', good: '<b>on</b> the left / <b>on</b> the second floor' },
      { t: 'check', q: 'The meeting room is ___ the second floor.', ru: 'Переговорка на втором этаже.', o: ['at', 'on', 'in'], a: 1,
        why: 'Этаж → on the second floor.' },
      { t: 'idea', opt: true, text: `front / back и corner зависят от картинки. Машина — <b>in</b> the back. Зал, здание — <b>at</b> the back. Лист, открытка — <b>on</b> the back. Угол комнаты — <b>in</b> the corner, угол улицы — <b>on / at</b> the corner.`,
        ex: [['We sat at the back of the cinema.', 'Мы сидели в конце зала кинотеатра.'], ['The PC is in the corner of the room.', 'Компьютер в углу комнаты.'], ['There’s a café on the corner.', 'На углу есть кафе.']] },
      { t: 'idea', text: `Итог: не переводите «на» — смотрите, что это за место.`,
        rows: [['in', 'in the photo, in the sky, in a queue'], ['on', 'on the website, on the left, on the second floor'], ['at', 'at the door, at the top, at reception']] }
    ]},

    // ───────────── 6. Здания, события, транспорт, arrive ─────────────
    { title: '«На работе», «на концерте», «в автобусе», «приехали в»', steps: [
      { t: 'idea', text: `<b>at</b> — место как занятие или событие: at work, at university, at a party, at a conference, at the station, at Anna’s (у Ани). <b>in</b> — внутри здания или в городе: in the building, in Paris.`,
        ex: [['I met her at a conference in Berlin.', 'Я познакомился с ней на конференции в Берлине.'], ['We had dinner at the hotel. All the rooms in the hotel have a PS5.', 'Мы ужинали в отеле. Во всех номерах отеля есть PS5.']],
        tip: `Помните школу из b1-18: at university, in hospital, in bed — без the.` },
      { t: 'check', q: 'I saw Kate ___ a concert on Saturday.', ru: 'Я видел Кейт на концерте в субботу.', o: ['to', 'on', 'at'], a: 2,
        why: 'Событие (party, concert, conference) → at.' },
      { t: 'idea', text: `Транспорт: автобус, поезд, самолёт, велосипед — <b>on</b> (on a bus, on a train). Машина и такси — <b>in</b>. Садимся так же: get on / off the bus, но get into / out of a taxi.`,
        rows: [['on', 'on a bus, on a train, on a plane, on a bike'], ['in', 'in a car, in a taxi'], ['сесть / выйти', 'get on / off the bus, get into / out of a taxi']] },
      { t: 'check', q: 'Скажите: «Я был в автобусе, когда ты позвонил»', o: ['I was in bus when you called.', 'I was on the bus when you called.', 'I was at the bus when you called.'], a: 1,
        why: 'Автобус, поезд, самолёт → on the bus.' },
      { t: 'idea', text: `«Куда» — <b>to</b>: go to, fly to, welcome to. arrive — никогда не to: город → <b>arrive in</b>, здание или событие → <b>arrive at</b>. get → <b>get to</b>. А home — без предлога.`,
        rows: [['arrive in', 'We arrived in Berlin at night.'], ['arrive at', 'We arrived at the hotel at 2 am.'], ['get to / get home', 'What time did you get to the party? I got home late.']],
        bad: 'We arrived to Moscow. / Welcome in our team!', good: 'We arrived <b>in</b> Moscow. / Welcome <b>to</b> our team!' },
      { t: 'check', q: 'What time did you arrive ___ the airport?', ru: 'Во сколько ты приехал в аэропорт?', o: ['to', 'at', 'on'], a: 1,
        why: 'arrive + здание → at. arrive to не бывает.' },
      { t: 'idea', text: `Итог: at — событие или «функция» места, in — внутри и в городе. Куда — to, приехать — arrive in / at.`,
        rows: [['at', 'at work, at a party, at the station'], ['on / in', 'on the bus / in a taxi'], ['to / arrive', 'go to Berlin, arrive in Berlin, arrive at the hotel, go home']] }
    ]},

    // ───────────── 7. Устойчивые выражения ─────────────
    { title: '«Под дождём», «по-моему», «специально» — готовые блоки', steps: [
      { t: 'idea', text: `Эти сочетания картинкой не объяснить — их учат целиком, как одно слово. С <b>in</b>: in the rain, in the sun, in the shade (в тени), in English, in a good mood, in my opinion (по-моему).`,
        ex: [['Let’s find a table in the shade.', 'Давай найдём столик в тени.'], ['How do you say “patch” in Russian?', 'Как по-русски «патч»?'], ['In my opinion, the first season was better.', 'По-моему, первый сезон был лучше.']],
        bad: 'By my opinion / on English', good: '<b>In</b> my opinion / <b>in</b> English' },
      { t: 'idea', text: `С <b>on</b>: on TV, on the phone, on purpose (специально), on the whole (в целом), on holiday, on business (по работе), on strike (бастуют). «Случайно» — <b>by accident</b>.`,
        ex: [['I didn’t delete your save on purpose, I promise!', 'Я не специально удалил твоё сохранение, честно!'], ['My boss is away on business.', 'Начальник в командировке.'], ['On the whole, it was a good year.', 'В целом год был хороший.']] },
      { t: 'check', q: 'Sorry! I didn’t do it ___ purpose.', ru: 'Прости! Я сделал это не специально.', o: ['by', 'on', 'with'], a: 1,
        why: '«Специально» → on purpose. by — только в by accident.' },
      { t: 'check', q: 'Скажите: «По-моему, концовка слишком длинная»', o: ['On my opinion, the ending is too long.', 'In my opinion, the ending is too long.', 'By my opinion, the ending is too long.'], a: 1,
        why: '«По-моему» → только in my opinion.' },
      { t: 'idea', text: `Итог: три коробки готовых блоков. С <b>at</b> — ещё возраст и скорость: She started coding at 12 (в 12 лет).`,
        rows: [['in', 'in the rain, in English, in a good mood, in my opinion'], ['on', 'on TV, on purpose, on the whole, on holiday'], ['at', 'at the age of 12, at 100 km an hour']] }
    ]},

    // ───────────── 8. Итог B1 ─────────────
    { title: 'Итог B1: что вы теперь можете сказать', steps: [
      { t: 'idea', text: `Вы прошли весь уровень B1. Это не список правил — это фразы, которые вы теперь можете сказать сами. Сначала — время, очень точно.`,
        rows: [['сколько уже длится', 'I’ve been waiting for an hour.', 'b1-4'], ['раньше другого прошлого', 'When we arrived, the film had started.', 'b1-5'], ['будет готово к…', 'By June I’ll have finished the course.', 'b1-7']] },
      { t: 'idea', text: `Догадки, советы и фантазии: что наверняка случилось, что лучше сделать и что было бы, если…`,
        rows: [['догадка о прошлом', 'She must have forgotten.', 'b1-8'], ['совет', 'You’d better save the file.', 'b1-10'], ['нереальное', 'If I were you, I’d take it. I wish I knew.', 'b1-11']] },
      { t: 'check', q: 'She didn’t answer. She ___ asleep.', ru: 'Она не ответила. Наверно, она уснула.', o: ['must fall', 'must have fallen', 'must fell'], a: 1,
        why: 'Догадка о прошлом → must have + третья форма (b1-8).' },
      { t: 'idea', text: `Пересказ, вежливые вопросы и длинные фразы: чужие слова, «спрятанный» вопрос, пояснение через who / that.`,
        rows: [['пересказ', 'She asked me where I lived.', 'b1-13'], ['переспросить', 'You haven’t seen it, have you?', 'b1-14'], ['пояснение', 'The game I told you about is on sale.', 'b1-21']] },
      { t: 'check', q: 'She told me she ___ tired.', ru: 'Она сказала мне, что устала.', o: ['is being', 'was', 'were'], a: 1,
        why: 'Пересказ после told → время сдвигается назад: is → was (b1-13).' },
      { t: 'idea', text: `И тонкая настройка: -ing или to после слова-действия, some / none / most, so / such, сравнения — и предлоги из этого урока.`,
        ex: [['I enjoy working here, but I’ve decided to leave.', 'Мне нравится здесь работать, но я решил уйти.'], ['None of us knew the answer.', 'Никто из нас не знал ответа.'], ['Send it by Friday — we’re meeting at the entrance.', 'Пришли к пятнице — встречаемся у входа.']] },
      { t: 'idea', text: `Итог B1: вы умеете точно показывать время, строить догадки и советы, фантазировать, пересказывать и выбирать нужную форму. Дальше — B2: те же темы на уровне нюансов.`,
        rows: [['время', 'have been doing, had done, will have done'], ['догадки и «если бы»', 'must have done, should, if I were, I wish'], ['выбор формы', '-ing / to, by / until, in / on / at']] }
    ]}
  ];
})();
