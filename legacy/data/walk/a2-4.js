// Грамматика по шагам для юнита a2-4: одно русское прошедшее — два английских, вопрос 1 «есть когда?» → Past Simple, вопрос 2 «время ещё идёт?» → Present Perfect, вопрос 3 «сейчас или история?», новость → подробности, похожие пары (for), игры и сериалы, типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-4'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Одно русское «потерял» — два английских', steps: [
      { t: 'idea', text: `Хотите сказать «Я потерял ключи». По-русски фраза одна, а по-английски их две — и выбирать приходится каждый раз.`,
        lit: [['I', 'я'], ['’ve', '(имею)'], ['lost', 'потерянными'], ['my keys', 'ключи']],
        ex: [['I’ve lost my keys.', 'Я потерял ключи. (и сейчас их нет — войти не могу)'], ['I lost my keys yesterday.', 'Я потерял ключи вчера.']] },
      { t: 'idea', text: `Как выбрать? Спросите себя: мне важно, <b>что есть сейчас</b>, или <b>когда это было</b>? «Сейчас» → have + третья форма (have lost), «когда» → вторая форма, как в A1 (lost).`,
        rows: [['важно, что сейчас', 'I’ve lost my keys.'], ['важно, когда было', 'I lost my keys yesterday.']],
        tip: `Past Simple — фото в альбоме с датой: «Сочи, лето 2022». Present Perfect — ачивка (достижение) в игре: видна сейчас, а когда получена — не написано.` },
      { t: 'check', q: 'Скажите: «Смотри, я купил новую мышку!» (вот она, у меня)', o: ['Look, I buy a new mouse!', 'Look, I’ve bought a new mouse!', 'Look, I have buy a new mouse!'], a: 1,
        why: 'Новость, результат виден сейчас, «когда» не сказано → have bought.' },
      { t: 'check', q: 'I ___ the game last night at two a.m.', ru: 'Я прошёл игру вчера в два ночи.', o: ['have finished', 'finished', 'have finish'], a: 1,
        why: 'Есть «когда» — last night, в два ночи. Это фото с датой → finished.' },
      { t: 'idea', text: `Итог: в английском для «сделал» нужно выбрать одно из двух. Решает вопрос «что мне важно?».`,
        rows: [['важно сейчас', 'have / has + третья форма', 'I’ve lost'], ['важно когда', 'вторая форма (Past Simple)', 'I lost yesterday']] }
    ]},

    // ───────────── 2. Вопрос 1: есть «когда» ─────────────
    { title: 'Вопрос 1: есть «когда»? → только Past Simple', steps: [
      { t: 'idea', text: `Первое, что проверяем: есть ли в фразе <b>момент в прошлом, который закончился</b>? Yesterday, last week, two days ago, in 2019, on Saturday — если есть, нужна вторая форма.`,
        ex: [['I saw Anna yesterday.', 'Я видел Анну вчера.'], ['We didn’t have a holiday last year.', 'В прошлом году у нас не было отпуска.'], ['I sent the file an hour ago.', 'Я отправил файл час назад.']] },
      { t: 'idea', text: `Даже если результат виден и сейчас — с таким словом have ставить нельзя. У Present Perfect даты не бывает, в этом его смысл.`,
        bad: 'I have seen Anna yesterday.', good: 'I <b>saw</b> Anna yesterday.',
        tip: `Правило-щит: «когда?» и have done — враги. Есть дата — нет have.` },
      { t: 'check', q: 'Steve’s cat ___ two years ago.', ru: 'Кот Стива умер два года назад.', o: ['has died', 'died', 'is died'], a: 1,
        why: 'two years ago — точка в прошлом → Past Simple: died.' },
      { t: 'idea', text: `То же с вопросами <b>When…?</b> (когда?) и <b>What time…?</b> (во сколько?). Они сами спрашивают про точку в прошлом — значит did, как в A1.`,
        lit: [['When', 'когда'], ['did', '(вопрос о прошлом)'], ['you', 'ты'], ['buy', 'купил'], ['your computer?', 'компьютер?']],
        ex: [['When did you buy your computer?', 'Когда ты купил компьютер?'], ['What time did the stream start?', 'Во сколько начался стрим?']],
        bad: 'When have you bought your computer?', good: 'When <b>did</b> you <b>buy</b> your computer?' },
      { t: 'check', q: 'When ___ this game?', ru: 'Когда ты купил эту игру?', o: ['have you bought', 'did you buy', 'did you bought'], a: 1,
        why: 'When…? спрашивает о точке в прошлом → did + buy (как в словаре).' },
      { t: 'idea', text: `Итог: есть ответ на «когда?» или сам вопрос «когда?» — только Past Simple.`,
        rows: [['yesterday, last…, … ago', 'Past Simple'], ['in 2019, on Monday, at five', 'Past Simple'], ['When…? What time…?', 'did + слово как в словаре']] }
    ]},

    // ───────────── 3. Вопрос 2: время ещё идёт ─────────────
    { title: 'Вопрос 2: время ещё идёт? → have done', steps: [
      { t: 'idea', text: `Второе, что проверяем: есть ли слова «до сих пор»? Ever, never, just, already, yet, for / since, How long…?, а ещё today, this week, so far (пока что) — время не закончилось → have done.`,
        ex: [['Have you ever been to Japan?', 'Ты когда-нибудь был в Японии? (за всю жизнь)'], ['Sam hasn’t answered yet.', 'Сэм ещё не ответил. (всё ещё жду)'], ['I’ve drunk three coffees today.', 'Я сегодня выпил три кофе. (день не кончился)']],
        tip: `Сравните: today → I’ve had three coffees. Yesterday → I had one. Вчера закончилось — и время тоже.` },
      { t: 'check', q: 'I ___ this film. Let’s watch something else.', ru: 'Я уже видел этот фильм. Давай посмотрим что-нибудь другое.', o: ['saw already', 'have already seen', 'already see'], a: 1,
        why: 'already — слово «до сих пор» → have + already + seen.' },
      { t: 'idea', text: `Так же с людьми и компаниями. Подруга-писательница (writer) жива и ещё пишет → has written. Толстого уже нет, его время закончено → wrote.`,
        rows: [['время идёт', 'My friend has written three books.'], ['время закончилось', 'Tolstoy wrote a lot of books.']],
        ex: [['This studio has made five games.', 'Эта студия сделала пять игр. (и работает дальше)'], ['The studio made five games before it closed.', 'Студия сделала пять игр, пока не закрылась.']] },
      { t: 'check', q: 'My friend is a writer. She ___ three books.', ru: 'Моя подруга — писательница. Она написала три книги.', o: ['wrote', 'has written', 'have written'], a: 1,
        why: 'Она жива и пишет — время не закончилось. Она одна → has written.' },
      { t: 'idea', opt: true, text: `Тонкость: <b>this morning</b> (сегодня утром). В 10 утра утро ещё идёт → have had. Вечером утро уже прошло → had.`,
        ex: [['I’ve had two coffees this morning.', 'Я выпил два кофе сегодня утром. (говорю в 10 утра)'], ['I had two coffees this morning.', 'Я выпил два кофе сегодня утром. (говорю вечером)']] },
      { t: 'idea', text: `Итог: время ещё не закончилось — жизнь, «уже», «ещё не», сегодня, эта неделя → have done.`,
        rows: [['ever, never, just, already, yet', 'have done'], ['for / since, How long…?', 'have done'], ['today, this week, so far', 'have done']] }
    ]},

    // ───────────── 4. Вопрос 3 и весь алгоритм ─────────────
    { title: 'Вопрос 3: подсказок нет — «сейчас» или «история»?', steps: [
      { t: 'idea', text: `Часто нет ни «когда», ни «до сих пор». Тогда спросите себя: я сообщаю, <b>что есть сейчас</b> (результат, новость), или рассказываю, <b>как это было</b>?`,
        ex: [['I’ve broken my mouse!', 'Я сломал мышку! (она не работает сейчас)'], ['How did you break it?', 'Как ты её сломал? (подробности истории)']] },
      { t: 'check', q: 'Look! Somebody ___ the window!', ru: 'Смотри! Кто-то разбил окно!', o: ['has broken', 'broken', 'breaks'], a: 0,
        why: 'Новость, результат виден сейчас → has broken. Без has нельзя.' },
      { t: 'idea', text: `Вот и весь способ — три вопроса по порядку. Первый, который сработал, даёт ответ.`,
        rows: [['1. Есть «когда»? (ago, yesterday, When…?)', '→ Past Simple'], ['2. Есть «до сих пор»? (ever, yet, since, today)', '→ have done'], ['3. Подсказок нет: сейчас или история?', 'сейчас → have done, история → Past Simple']] },
      { t: 'check', q: 'I ___ my room, and then I went to the gym.', ru: 'Я убрал комнату, а потом пошёл в спортзал.', o: ['have cleaned', 'cleaned', 'have clean'], a: 1,
        why: 'Рассказ по порядку (then I went) — это история → Past Simple.' },
      { t: 'check', q: '___ Max? I need him right now.', ru: 'Ты не видел Макса? Он мне нужен прямо сейчас.', o: ['Have you seen', 'Have you saw', 'You have seen'], a: 0,
        why: 'Подсказок нет, важно, где он сейчас → Have you seen…?' },
      { t: 'idea', text: `Итог: не угадывайте — задайте три вопроса по порядку. Коротко всё сводится к этому:`,
        rows: [['есть точка в прошлом', 'Past Simple'], ['точки нет, важно «сейчас» или «до сих пор»', 'have / has + третья форма']] }
    ]},

    // ───────────── 5. Новость → подробности ─────────────
    { title: 'Новость → подробности: живой разговор', steps: [
      { t: 'idea', text: `В жизни эти два времени ходят парой. <b>Новость</b> — без даты, через have done; как только уточняем «где? когда? как?» — переходим на Past Simple.`,
        ex: [['— I’ve lost my phone!', '— Я потерял телефон! (новость)'], ['— Oh no! Where did you lose it?', '— Ой! Где ты его потерял? (подробности)'], ['— Have you called the taxi company? — Yes, I called them ten minutes ago.', '— Ты позвонил в такси? — Да, десять минут назад.']] },
      { t: 'check', q: '— I’ve broken my headphones. — Oh no! How ___ that?', ru: '— Я сломал наушники. — Ой! Как ты это сделал?', o: ['have you done', 'did you do', 'you did'], a: 1,
        why: '«Как это случилось?» — подробности истории → did you do.' },
      { t: 'idea', text: `С опытом та же схема: <b>Have you ever…?</b> → Yes, I have. А подробности — когда, где, понравилось ли — уже Past Simple.`,
        ex: [['Have you ever been to Italy?', 'Ты когда-нибудь был в Италии?'], ['Yes, I have. I went there two years ago.', 'Да. Ездил туда два года назад.'], ['Did you like it? — Yes, it was amazing.', 'Понравилось? — Да, было потрясающе.']],
        bad: 'Yes, I have been there in 2019. It has been great.', good: 'Yes, I <b>went</b> there in 2019. It <b>was</b> great.' },
      { t: 'check', q: '— Have you ever been to Spain? — Yes, I ___ there last summer.', ru: '— Ты был в Испании? — Да, ездил туда прошлым летом.', o: ['have been', 'went', 'have gone'], a: 1,
        why: 'Подробность с last summer → Past Simple: went.' },
      { t: 'idea', text: `Итог: начинаем с новости или опыта, продолжаем историей.`,
        rows: [['новость, «результат есть?», опыт', 'have done'], ['подробности: где, когда, как', 'Past Simple']] }
    ]},

    // ───────────── 6. Похожие пары ─────────────
    { title: 'Похожие пары: вся разница — в «сейчас»', steps: [
      { t: 'idea', text: `Бывают почти одинаковые фразы. Have done говорит о <b>сейчас</b>, Past Simple — о <b>том моменте</b> в прошлом.`,
        rows: [['I’ve lost my key.', 'не могу найти сейчас'], ['I lost my key last week.', 'может, уже нашёл'], ['Ben has gone home.', 'его здесь нет']],
        ex: [['Sam hasn’t called yet.', 'Сэм ещё не позвонил. (жду)'], ['Sam didn’t call yesterday.', 'Сэм вчера не позвонил.']] },
      { t: 'check', q: 'Ben ___ home ten minutes ago.', ru: 'Бен ушёл домой десять минут назад.', o: ['has gone', 'went', 'has went'], a: 1,
        why: 'ten minutes ago — точка в прошлом → went.' },
      { t: 'idea', text: `Ловушка — слово <b>for</b> (в течение): оно бывает в обоих временах. Решает одно: это продолжается сейчас?`,
        rows: [['живём там и сейчас', 'We’ve lived in Moscow for six years.'], ['теперь не живём', 'We lived in Kazan for six years.']],
        bad: 'I have lived in London for two years, but now I live in Berlin.', good: 'I <b>lived</b> in London for two years, but now I live in Berlin.' },
      { t: 'check', q: 'I ___ at that studio for three years. Then I moved to a new company.', ru: 'Я проработал в той студии три года. Потом перешёл в новую компанию.', o: ['have worked', 'worked', 'work'], a: 1,
        why: 'Та работа закончилась → Past Simple, даже с for.' },
      { t: 'idea', text: `Итог: одинаковые слова, разный смысл. Спросите: это видно или продолжается сейчас?`,
        rows: [['да, сейчас', 'have done'], ['нет, закончилось', 'Past Simple']] }
    ]},

    // ───────────── 7. Игры и сериалы ─────────────
    { title: 'В играх и сериалах', steps: [
      { t: 'idea', text: `Игры и сериалы переключают времена так же. Статус и новости — have done, история — Past Simple.`,
        ex: [['Quest completed: you have found the lost sword.', 'Задание выполнено: вы нашли потерянный меч (sword).'], ['Achievement unlocked: you have died 100 times.', 'Достижение: вы умерли 100 раз.'], ['You’ve finally arrived! I sent you a letter three days ago.', 'Наконец-то ты пришёл! Я отправил тебе письмо три дня назад.']] },
      { t: 'idea', text: `Частая пара — «Где ты был?». Человек уже здесь, время не названо → <b>Where have you been?</b> Есть момент (last night) → <b>Where were you?</b>`,
        ex: [['Where have you been? We looked for you!', 'Где ты пропадал? Мы тебя искали!'], ['Where were you last night?', 'Где ты был вчера вечером?']],
        bad: 'Where have you been last night?', good: 'Where <b>were</b> you last night?' },
      { t: 'check', q: 'Where ___ on Sunday afternoon?', ru: 'Где ты был в воскресенье днём?', o: ['have you been', 'were you', 'you were'], a: 1,
        why: 'on Sunday afternoon — закончившееся время → were you (was / were — тоже Past Simple).' },
      { t: 'idea', opt: true, text: `В американских сериалах часто слышно Past Simple вместо have done: Did you eat yet? I already saw it. I just got home. Понимать это надо, а сами говорите по правилу: Have you eaten yet?`,
        tip: `Обратного не бывает: с yesterday, ago, last… have done неправильно и в Лондоне, и в Нью-Йорке.` },
      { t: 'idea', text: `Итог: статус и новость — have done, история с моментом — Past Simple.`,
        rows: [['статус, новость', 'You have found the sword.'], ['история, момент', 'I sent you a letter three days ago.']] }
    ]},

    // ───────────── 8. Типичные ошибки ─────────────
    { title: 'Быстрые проверки: какое выбрать?', steps: [
      { t: 'idea', text: `Последний круг — самые частые ошибки. Перед ответом задайте три вопроса: «когда?», «до сих пор?», «сейчас или история?».` },
      { t: 'check', q: 'I ___ the project at five o’clock.', ru: 'Я закончил проект в пять часов.', o: ['have finished', 'finished', 'have finish'], a: 1,
        why: 'at five o’clock — точное время → Past Simple.' },
      { t: 'check', q: 'Скажите: «Я ездил в Испанию в 2018 году»', ru: 'Я ездил в Испанию в 2018 году.', o: ['I’ve been to Spain in 2018.', 'I went to Spain in 2018.', 'I have gone to Spain in 2018.'], a: 1,
        why: 'in 2018 — есть «когда» → went. Have been — только без даты.' },
      { t: 'check', q: 'I ___ here for five years.', ru: 'Я живу здесь пять лет.', o: ['live', 'have lived', 'lived'], a: 1,
        why: 'Живу до сих пор + for → have lived. Русское «живу» тянет к live — это ловушка.' },
      { t: 'check', q: '___ your homework yet?', ru: 'Ты уже сделал домашку?', o: ['Did you finished', 'Have you finished', 'Do you finish'], a: 1,
        why: 'yet — «уже?» в вопросе, время до сих пор → Have you finished.' },
      { t: 'check', q: 'I’ve had three coffees today, but yesterday I ___ only one.', ru: 'Сегодня я выпил три кофе, а вчера — только один.', o: ['have had', 'had', 'have'], a: 1,
        why: 'today идёт → have had; yesterday закончился → had.' },
      { t: 'idea', text: `Итог урока в одной строке: есть точка в прошлом → Past Simple; точки нет, важно «сейчас» или «до сих пор» → have done.`,
        rows: [['когда? ago, yesterday, last…, in 2019', 'Past Simple: I saw, did you see?'], ['сейчас, до сих пор: ever, yet, since, today', 'have / has + третья форма: I’ve seen']] }
    ]}
  ];
})();
