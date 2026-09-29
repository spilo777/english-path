// Грамматика по шагам для юнита a2-18: страдательный залог (passive) — важно не кто, а что случилось; be + третья форма; is / are + V3; was / were + V3 и was born; by; is being done и has been done; will be done, can be done; типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-18'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: '«Меня зовут», «сделано», «построен» — важно не кто, а что случилось', steps: [
      { t: 'idea', text: `Скажите по-русски «Меня зовут Илья». А кто зовёт? Неважно. Так же «дом построен», «телефон украли», «игра сделана в Японии»: главное — что случилось с предметом, а кто это сделал, не говорим.`,
        ex: [['My phone was stolen.', 'Мой телефон украли.'], ['This game was made in Japan.', 'Эта игра сделана в Японии.'], ['I was born in Kazan.', 'Я родился в Казани.']] },
      { t: 'idea', text: `Одно событие можно рассказать двумя способами. «Кто-то убирает офис» — в центре тот, кто делает. «Офис убирают» — в центре офис, а кто убирает, неважно.`,
        rows: [['Somebody cleans the office.', 'Кто-то убирает офис.'], ['The office is cleaned.', 'Офис убирают.']],
        tip: `Второй способ называется <b>страдательный залог</b>, по-английски <b>passive</b>. «Страдательный» — не про страдания: предмет не делает, а с ним делают.` },
      { t: 'idea', text: `Как сказать «офис убирают» по-английски? Предмет ставим в начало, а дальше — is и особая форма слова-действия. Дословно: «офис есть убранный».`,
        lit: [['The office', 'офис'], ['is', '(есть)'], ['cleaned', 'убранный'], ['every day', 'каждый день']],
        ex: [['The office is cleaned every day.', 'Офис убирают каждый день.'], ['My car was repaired.', 'Мою машину починили.']] },
      { t: 'check', q: 'Скажите: «Мою машину починили»', o: ['My car repaired.', 'My car was repaired.', 'My car was repair.'], a: 1,
        why: 'Машина сама себя не чинила: с ней сделали → was + repaired.' },
      { t: 'idea', text: `Итог: русское «убирают», «украли», «построен», «сделано» без слова «кто» — сигнал, что по-английски нужен passive.`,
        rows: [['кто-то делает', 'Somebody cleans the office.'], ['с предметом делают', 'The office is cleaned.']] }
    ]},

    // ───────────── 2. be + третья форма ─────────────
    { title: 'Формула: be + третья форма', steps: [
      { t: 'idea', text: `Вся схема из двух кусков: <b>be</b> (am / is / are, was / were…) + <b>третья форма</b> слова-действия. be показывает время, а третья форма — само действие.`,
        lit: [['The game', 'игра'], ['was', '(была)'], ['made', 'сделана'], ['in Poland', 'в Польше']],
        ex: [['The game was made in Poland.', 'Игру сделали в Польше.'], ['The app is updated every month.', 'Приложение обновляют каждый месяц.']] },
      { t: 'idea', text: `Третью форму вы уже знаете по have done, have seen. У правильных слов это просто <b>-ed</b>: cleaned, invented (изобретён), designed, released (выпущен), invited (приглашён).`,
        ex: [['We were invited.', 'Нас пригласили.'], ['The logo was designed in our studio.', 'Логотип нарисовали в нашей студии.']] },
      { t: 'idea', text: `У неправильных — третья колонка таблицы. Самые нужные в этой теме:`,
        rows: [['make — made', 'build — built', 'sell — sold'], ['steal — stolen', 'write — written', 'speak — spoken'], ['take — taken', 'give — given', 'break — broken']],
        bad: 'The game was make in Poland.', good: 'The game was <b>made</b> in Poland.' },
      { t: 'check', q: 'These photos were ___ by my sister.', ru: 'Эти фото сделала моя сестра.', o: ['take', 'took', 'taken'], a: 2,
        why: 'После be — третья форма: take → taken.' },
      { t: 'idea', text: `Итог: passive = <b>be + третья форма</b>. be меняется по времени, третья форма остаётся.`,
        rows: [['be', 'am / is / are, was / were'], ['третья форма', 'cleaned, made, stolen, written']] }
    ]},

    // ───────────── 3. is / are + V3 ─────────────
    { title: '«Масло делают из молока» — обычно и всегда: is / are + третья форма', steps: [
      { t: 'idea', text: `Что делают обычно, регулярно, всегда — <b>am / is / are</b> + третья форма. is — для одного предмета, are — для многих.`,
        ex: [['Butter is made from milk.', 'Масло делают из молока.'], ['Our servers are updated every Tuesday.', 'Наши серверы обновляют по вторникам.'], ['I’m never invited to these meetings.', 'Меня никогда не зовут на эти встречи.']] },
      { t: 'idea', text: `Частая ошибка — сказать «Football plays». Но футбол сам не играет: в него играют. Значит, нужен passive.`,
        bad: 'Football plays in many countries.', good: 'Football <b>is played</b> in many countries.',
        ex: [['English is spoken everywhere.', 'По-английски говорят везде.'], ['Tickets are sold online.', 'Билеты продают онлайн.']] },
      { t: 'check', q: 'Coffee ___ in Brazil.', ru: 'Кофе выращивают (grow — grown) в Бразилии.', o: ['grown', 'is grown', 'is grow'], a: 1,
        why: 'Кофе сам не растит себя → is + третья форма grown.' },
      { t: 'idea', text: `«Не» — как всегда, not после is / are: <b>isn’t</b>, <b>aren’t</b>.`,
        ex: [['This room isn’t used very much.', 'Эту комнату мало используют.'], ['Phones aren’t allowed in the exam.', 'На экзамене телефоны запрещены.']] },
      { t: 'idea', text: `Вопрос — как с am / is / are в A1: is / are выходит вперёд, потом предмет, третья форма — в самом конце.`,
        lit: [['Where', 'где'], ['are', '(есть)'], ['these phones', 'эти телефоны'], ['made?', 'сделаны?']],
        ex: [['Are dogs allowed in the café?', 'В кафе можно с собаками?'], ['How often are the windows cleaned?', 'Как часто моют окна?']] },
      { t: 'check', q: 'How often ___ the servers updated?', ru: 'Как часто обновляют серверы?', o: ['do', 'are', 'have'], a: 1,
        why: 'В passive вопрос делает be: are + серверы + updated. do тут не нужен.' },
      { t: 'idea', text: `Итог: обычно, всегда → <b>is / are</b> + третья форма.`,
        rows: [['+', 'Paper is made from wood.'], ['−', 'Dogs aren’t allowed.'], ['?', 'Where are they made?']] }
    ]},

    // ───────────── 4. was / were + V3, was born ─────────────
    { title: '«Дом построили сто лет назад» — прошлое: was / were + третья форма', steps: [
      { t: 'idea', text: `Что сделали когда-то в прошлом — <b>was / were</b> + третья форма. Как в A1: was — для одного, were — для многих.`,
        ex: [['This house was built a hundred years ago.', 'Этот дом построили сто лет назад.'], ['These houses were built a hundred years ago.', 'Эти дома построили сто лет назад.'], ['The game was released in March.', 'Игра вышла в марте.']] },
      { t: 'check', q: 'Скажите: «Мой велосипед украли вчера»', o: ['My bike stole yesterday.', 'My bike was stolen yesterday.', 'My bike is stolen yesterday.'], a: 1,
        why: 'Велосипед не крал сам, и это вчера → was + stolen.' },
      { t: 'idea', text: `«Не» и вопрос — тоже через was / were. Третья форма снова в конце.`,
        ex: [['We weren’t invited to the wedding.', 'Нас не пригласили на свадьбу.'], ['When was the telephone invented?', 'Когда изобрели телефон?'], ['Was anybody hurt?', 'Кто-нибудь пострадал? (hurt — ранен)']],
        bad: 'When was invented the telephone?', good: 'When was <b>the telephone invented</b>?' },
      { t: 'idea', text: `А вот «Я родился». По-английски родиться — тоже passive: «я был рождён». И почти всегда в прошлом: <b>was born</b> / <b>were born</b>.`,
        lit: [['I', 'я'], ['was', '(был)'], ['born', 'рождён'], ['in 1995', 'в 1995']],
        ex: [['I was born in 1995.', 'Я родился в 1995 году.'], ['Where were you born? — In Minsk.', 'Где ты родился? — В Минске.']],
        bad: 'I am born in Moscow. / I born in 1995.', good: 'I <b>was born</b> in Moscow.' },
      { t: 'check', q: 'Where ___ your parents born?', ru: 'Где родились твои родители?', o: ['was', 'were', 'are'], a: 1,
        why: 'Родились — в прошлом, parents — их много → were born.' },
      { t: 'idea', text: `Итог: в прошлом → <b>was / were</b> + третья форма. Родился → <b>was born</b>.`,
        rows: [['один', 'The house was built in 1900.'], ['много', 'The houses were built in 1900.'], ['родиться', 'I was born in April.']] }
    ]},

    // ───────────── 5. by ─────────────
    { title: '«Написан кем?» — by', steps: [
      { t: 'idea', text: `Если всё-таки хотим сказать, <b>кто</b> сделал, добавляем <b>by</b> + кто. По-русски это «кем?»: написан кем? изобретён кем?`,
        lit: [['The logo', 'логотип'], ['was designed', 'нарисован'], ['by', 'кем:'], ['my friend', 'мой друг']],
        ex: [['This logo was designed by my friend.', 'Этот логотип нарисовал мой друг.'], ['The game is played by millions of people.', 'В игру играют миллионы людей.'], ['I was bitten by a dog.', 'Меня укусила (bite — bitten) собака.']] },
      { t: 'check', q: 'This song was written ___ a famous DJ.', ru: 'Эту песню написал известный диджей.', o: ['from', 'by', 'with'], a: 1,
        why: '«Кем сделано» — всегда by. from и with тут — русская ошибка.' },
      { t: 'idea', text: `Если «кто» неважен или и так понятен — by не нужен. «Украден кем-то» — ничего не добавляет.`,
        bad: 'My phone was stolen by somebody.', good: 'My phone was stolen.' },
      { t: 'idea', text: `Как выбрать: спросите себя, <b>о чём</b> фраза. О Максе → Max designed the logo. О логотипе → The logo was designed by Max.`,
        rows: [['о человеке', 'Max designed the logo.'], ['о предмете', 'The logo was designed by Max.']] },
      { t: 'check', q: 'Скажите: «Эту книгу написала Джоан Роулинг»', o: ['This book wrote by J. K. Rowling.', 'This book was written by J. K. Rowling.', 'This book was written from J. K. Rowling.'], a: 1,
        why: 'Книга написана кем-то → was written + by.' },
      { t: 'idea', text: `Итог: кто сделал — через <b>by</b>; если неважно — без него.`,
        rows: [['с «кем»', 'It was painted by my sister.'], ['без «кем»', 'My keys were stolen.']] }
    ]},

    // ───────────── 6. is being done, has been done ─────────────
    { title: '«Телефон сейчас чинят», «аккаунт взломали!» — is being done, has been done', steps: [
      { t: 'idea', text: `Работа идёт прямо сейчас, ещё не закончена — <b>is / are being</b> + третья форма. Помните хвостик -ing (I am doing)? Здесь being — это «есть» с хвостиком: «находится в процессе».`,
        lit: [['My car', 'моя машина'], ['is being', '(сейчас находится)'], ['repaired', 'в ремонте']],
        ex: [['My car is being repaired.', 'Мою машину сейчас чинят.'], ['New flats are being built near my house.', 'Возле моего дома строят новые квартиры.'], ['The office is cleaned every day, but today it isn’t being cleaned.', 'Офис убирают каждый день, но сегодня не убирают.']],
        bad: 'My laptop is repairing now.', good: 'My laptop <b>is being repaired</b> now.' },
      { t: 'check', q: 'You can’t use the lift. It ___ at the moment.', ru: 'Лифтом пользоваться нельзя. Его сейчас ремонтируют.', o: ['is repaired', 'is being repaired', 'has repaired'], a: 1,
        why: 'Прямо сейчас, в процессе → is being + третья форма.' },
      { t: 'idea', text: `Уже сделано и важен итог сейчас — <b>has / have been</b> + третья форма. Это Present Perfect из a2-2, только в passive.`,
        lit: [['My account', 'мой аккаунт'], ['has been', '(уже был)'], ['hacked', 'взломан']],
        ex: [['My account has been hacked!', 'Мой аккаунт взломали!'], ['The room has been cleaned.', 'Комнату убрали.'], ['Has the bug been fixed yet?', 'Баг уже исправили?']] },
      { t: 'check', q: 'Good news! The server ___ — you can play again.', ru: 'Хорошая новость! Сервер починили — можно снова играть.', o: ['has been fixed', 'has fixed', 'is fixing'], a: 0,
        why: 'Уже сделано, итог сейчас → has been + fixed. Сервер сам себя не чинил.' },
      { t: 'idea', text: `Как и с have done: если назвали <b>когда</b> (yesterday, last week) — это рассказ о прошлом, нужен was / were.`,
        bad: 'My keys have been stolen last week.', good: 'My keys <b>were stolen</b> last week.' },
      { t: 'idea', text: `Итог: схема та же — be в нужном времени + третья форма.`,
        rows: [['сейчас, в процессе', 'is / are being + V3', 'It’s being repaired.'], ['уже сделано', 'has / have been + V3', 'It has been fixed.']] }
    ]},

    // ───────────── 7. will be done, can be done ─────────────
    { title: '«Игру выпустят», «не починить» — will be, can be + третья форма', steps: [
      { t: 'idea', text: `После <b>will, can, must, should, might</b> слово-действие стоит в форме как в словаре. Значит, и be остаётся просто <b>be</b>: will be + третья форма.`,
        lit: [['The results', 'результаты'], ['will be', '(будут)'], ['announced', 'объявлены'], ['tomorrow', 'завтра']],
        ex: [['The results will be announced tomorrow.', 'Результаты объявят завтра.'], ['My old phone can’t be repaired.', 'Мой старый телефон не починить.'], ['The report must be finished by Friday.', 'Отчёт должен быть готов к пятнице.']] },
      { t: 'idea', text: `Главная ошибка — потерять be. Без него выходит «игра выпустит» — будто она сама что-то выпускает.`,
        bad: 'The game will released next year.', good: 'The game will <b>be released</b> next year.' },
      { t: 'check', q: 'The new level ___ next month.', ru: 'Новый уровень выпустят в следующем месяце.', o: ['will release', 'will be released', 'will released'], a: 1,
        why: 'Будущее + с ним делают → will be + третья форма.' },
      { t: 'idea', text: `С going to и have to — так же: после to стоит <b>be</b> + третья форма.`,
        ex: [['A new stadium is going to be built here.', 'Здесь построят новый стадион.'], ['These files have to be deleted.', 'Эти файлы нужно удалить.'], ['This sweater should be washed by hand.', 'Этот свитер надо стирать вручную.']] },
      { t: 'check', q: 'Скажите: «Его нельзя починить»', o: ['It can’t repair.', 'It can’t be repaired.', 'It can’t repaired.'], a: 1,
        why: 'После can — be, потом третья форма: can’t be repaired.' },
      { t: 'idea', text: `Итог: will / can / must / should / going to + <b>be</b> + третья форма.`,
        rows: [['будущее', 'It will be released.'], ['можно / нельзя', 'It can’t be repaired.'], ['надо', 'It must be finished.']] }
    ]},

    // ───────────── 8. Типичные ошибки ─────────────
    { title: 'Проверьте себя: самые частые ошибки', steps: [
      { t: 'check', q: 'English ___ in many countries.', ru: 'По-английски говорят во многих странах.', o: ['speaks', 'is spoken', 'is speak'], a: 1,
        why: 'Язык сам не говорит → is + третья форма spoken.' },
      { t: 'check', q: 'Скажите: «Когда построили этот дом?»', o: ['When was built this house?', 'When was this house built?', 'When this house was built?'], a: 1,
        why: 'was — вперёд, потом дом, третья форма — в конце.' },
      { t: 'check', q: 'Скажите: «Баг скоро исправят»', o: ['The bug will fixed soon.', 'The bug will be fixed soon.', 'The bug is fixing soon.'], a: 1,
        why: 'После will — be, потом третья форма.' },
      { t: 'idea', text: `Итог урока: passive = <b>be + третья форма</b>. Меняется только be; «кем» — через by; родиться — was born.`,
        rows: [['is made · was made', 'обычно · в прошлом'], ['is being made · has been made', 'сейчас · уже сделано'], ['will be made · can be made', 'будущее · можно']] }
    ]}
  ];
})();
