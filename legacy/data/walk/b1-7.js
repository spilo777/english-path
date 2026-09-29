// Грамматика по шагам для юнита b1-7: две идеи будущего (в процессе / уже готово), will be doing — «буду в процессе» и will be doing или will do, will be doing — «так и так будет» и вежливый вопрос о планах, will have done — «к тому моменту уже» (by, by then, by the time; I’ll have been… for), when / until / as soon as + настоящее вместо will, when I’ve done, if или when, типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-7'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Будущее «в процессе» и будущее «уже готово»', steps: [
      { t: 'idea', text: `Вы уже знаете will, а в прошлом — was doing («был в процессе») и had done («уже сделал к тому моменту»). Теперь те же две идеи переносим в будущее: <b>will be doing</b> и <b>will have done</b>.`,
        ex: [['At eight tomorrow I’ll be sitting on a plane.', 'Завтра в восемь я буду сидеть в самолёте.'], ['By Friday I’ll have finished the mockups.', 'К пятнице я уже закончу макеты (mockups).'], ['I’ll call you when I arrive.', 'Позвоню, когда приеду.']],
        tip: `Русский глагол сам делится на «буду делать» и «сделаю». Английскому для этого нужны разные формы.` },
      { t: 'check', q: '«К пятнице я уже закончу» — какая идея?', o: ['в процессе: will be doing', 'уже готово: will have done', 'просто will do'], a: 1,
        why: '«Уже закончу к сроку» — результат готов → will have done.' },
      { t: 'idea', text: `Итог: в уроке три новых кусочка. Третий — «когда приеду»: после when по-английски нет will.`,
        rows: [['в тот момент буду в процессе', 'I’ll be working.'], ['к тому моменту уже сделаю', 'I’ll have finished.'], ['«когда…» про будущее', 'when I arrive']] }
    ]},

    // ───────────── 2. will be doing — в процессе ─────────────
    { title: '«Завтра в десять я буду рисовать» — will be doing', steps: [
      { t: 'idea', text: `Помните «вчера в десять я рисовал» — I was drawing? Сдвиньте тот же момент в завтра: was меняется на <b>will be</b>, хвостик -ing остаётся. Это Future Continuous — «буду посередине дела».`,
        rows: [['вчера в 10', 'I was drawing icons.'], ['сейчас', 'I’m drawing icons.'], ['завтра в 10', 'I’ll be drawing icons.']] },
      { t: 'idea', text: `Дело началось раньше того момента и ещё не закончилось. Формула: кто + <b>will be</b> + слово-действие с -ing; «не» — <b>won’t be</b> + -ing.`,
        lit: [['This time next week', 'через неделю в это время'], ['we’ll be', 'мы будем'], ['lying', 'лежать'], ['on a beach', 'на пляже']],
        ex: [['Don’t call me at nine. I’ll be streaming.', 'Не звони в девять. Я буду на стриме.'], ['Will you be sleeping when I get home?', 'Ты уже будешь спать, когда я приду?'], ['I won’t be working tomorrow.', 'Завтра я не буду работать.']] },
      { t: 'check', q: 'Скажите: «Завтра в это время я буду лететь в Испанию»', o: ['This time tomorrow I’ll flying to Spain.', 'This time tomorrow I’ll be flying to Spain.', 'This time tomorrow I’ll be fly to Spain.'], a: 1,
        why: 'Нужны оба кусочка: will be + хвостик -ing (flying).' },
      { t: 'idea', text: `А чем это отличается от простого will? <b>will be doing</b> — дело уже идёт в тот момент. <b>will do</b> — начнётся после.`,
        ex: [['When Max comes, we’ll be playing.', 'Когда Макс придёт, мы уже будем играть (начали до него).'], ['When Max comes, we’ll play.', 'Когда Макс придёт, мы начнём играть (после его прихода).']],
        bad: 'Tomorrow at nine I will working on the logo.', good: 'Tomorrow at nine I’<b>ll be working</b> on the logo.' },
      { t: 'check', q: 'We start at seven. Max arrives at eight. When Max arrives, we ___.', ru: 'Начинаем в семь, Макс приходит в восемь. Когда он придёт, мы уже будем играть.', o: ['will play', 'will be playing', 'will playing'], a: 1,
        why: 'Игра началась до его прихода и идёт → will be playing.' },
      { t: 'idea', text: `Итог: will be + -ing — «в тот момент буду в процессе».`,
        rows: [['будет идти в тот момент', 'At ten I’ll be working.'], ['начнётся после', 'When he comes, I’ll work.']] }
    ]},

    // ───────────── 3. will be doing — «так и так будет» ─────────────
    { title: '«Позже я всё равно поговорю…» — планы, новости, вежливые вопросы', steps: [
      { t: 'idea', text: `У will be doing есть второй смысл: так будет по обычному ходу дел, всё уже запланировано. Похоже на going to из прошлого урока, но звучит спокойнее и «официальнее».`,
        ex: [['Later in the stream I’ll be talking to the lead designer.', 'Позже на стриме я поговорю с ведущим дизайнером.'], ['The studio will be releasing a new trailer tomorrow.', 'Студия завтра выпустит новый трейлер.'], ['We’ll be landing in twenty minutes.', 'Через двадцать минут мы приземлимся.']] },
      { t: 'idea', text: `Так же говорят «я и так туда пойду»: I’ll be going to the shop later. Do you need anything? И «так не будет»: he won’t be playing on Saturday.`,
        tip: `Слышите в самолёте «we’ll be landing» — это не «будем в процессе», а «по плану приземлимся».` },
      { t: 'check', q: 'According to the schedule, the studio ___ the game in May.', ru: 'По графику студия выпустит игру в мае.', o: ['will be releasing', 'will releasing', 'is release'], a: 0,
        why: 'Запланировано по ходу дел → will be + -ing: will be releasing.' },
      { t: 'idea', text: `Очень полезный приём — вежливо узнать планы, не давя. Will you use the car? звучит почти как просьба. <b>Will you be using</b> the car? — «какие у тебя планы?»: легко ответить «нет».`,
        rows: [['Will you use the car tonight?', 'прямо, почти просьба'], ['Will you be using the car tonight?', 'мягко: «а какие планы?»']] },
      { t: 'check', q: 'Ваш ноутбук сломался. Мягко спросите соседа о его планах: «Ты вечером будешь пользоваться ноутбуком?»', o: ['Will you be use your laptop this evening?', 'Will you be using your laptop this evening?', 'Will you using your laptop this evening?'], a: 1,
        why: 'Мягкий вопрос о планах — will you be + -ing: нужны и be, и хвостик -ing.' },
      { t: 'idea', text: `Итог: will be doing — ещё и «так и так будет» и вежливый вопрос о планах.`,
        rows: [['по плану, по ходу дел', 'We’ll be landing soon.'], ['мягко узнать планы', 'Will you be using the car?']] }
    ]},

    // ───────────── 4. will have done ─────────────
    { title: '«К пятнице уже закончу» — will have done', steps: [
      { t: 'idea', text: `Помните had done — «к тому моменту в прошлом уже сделал»? Теперь то же в будущем: <b>will have</b> + третья форма (done, finished, gone). Это Future Perfect — «к сроку уже будет готово».`,
        lit: [['By Friday', 'к пятнице'], ['I’ll have', 'я буду иметь'], ['finished', 'законченными'], ['all the screens', 'все экраны']],
        ex: [['By Friday I’ll have finished all the screens.', 'К пятнице я закончу все экраны.'], ['By the deadline we’ll have tested everything.', 'К дедлайну мы всё протестируем.']] },
      { t: 'idea', text: `Почти всегда рядом стоит <b>by</b>: by Friday (к пятнице), by then (к тому времени), by the time… (к тому времени, как…).`,
        ex: [['We’re late. The film will have started by the time we get there.', 'Опаздываем. Когда доберёмся, фильм уже начнётся.'], ['Don’t come at nine. Anna will have gone to work.', 'Не приходи в девять. Анна уже уйдёт на работу.']] },
      { t: 'check', q: 'Скажите: «К июлю я закончу курс»', o: ['By July I’ll have finish the course.', 'By July I’ll have finished the course.', 'By July I’ll finished the course.'], a: 1,
        why: 'will have + третья форма: finished. Без have и с finish — ошибка.' },
      { t: 'idea', text: `«Не» и вопрос — как с обычным will: <b>won’t have</b> + третья форма, <b>Will you have</b> + третья форма…?`,
        ex: [['The meeting is at three. I won’t have read the brief by then.', 'Встреча в три. К тому времени я ещё не прочитаю бриф.'], ['Will you have fixed the bug by tomorrow?', 'Ты исправишь баг к завтрашнему дню?']] },
      { t: 'check', q: 'I’m free after ten. By ten I ___ the report.', ru: 'После десяти я свободен. К десяти я уже напишу отчёт.', o: ['will be writing', 'will have written', 'will have write'], a: 1,
        why: 'К десяти отчёт уже готов (после — свободен) → will have written.' },
      { t: 'idea', text: `С «состояниями» (быть, знать, жить) так говорят «к тому моменту будет уже столько-то лет». Сравните одну мысль в трёх временах:`,
        rows: [['сейчас', 'I’ve been a designer for four years.'], ['в будущем', 'Next June I’ll have been a designer for five years.'], ['в прошлом', 'When I got this job, I’d been a designer for two years.']] },
      { t: 'idea', opt: true, text: `Для процесса «уже столько-то времени к моменту» есть и <b>will have been doing</b>. Встречается редко, но узнавать полезно.`,
        ex: [['By May I’ll have been working here for a year.', 'В мае будет год, как я здесь работаю.']] },
      { t: 'idea', text: `Итог: will have + третья форма — «к сроку уже сделаю». Ищите рядом by.`,
        rows: [['к сроку уже готово', 'By Friday I’ll have finished.'], ['к сроку ещё нет', 'I won’t have read it by then.']] }
    ]},

    // ───────────── 5. when I arrive ─────────────
    { title: '«Позвоню, когда приеду» — без will после when', steps: [
      { t: 'idea', text: `Помните: после if — настоящее, а не will. С when (когда) то же самое! Хотите сказать «Позвоню, когда приеду»: will — только в главной половине, после when — <b>настоящее</b>.`,
        lit: [['I’ll call', 'я позвоню'], ['you', 'тебе'], ['when', 'когда'], ['I arrive', 'я приезжаю']],
        bad: 'I’ll call you when I will arrive.', good: 'I’ll call you when I <b>arrive</b>.' },
      { t: 'idea', text: `Так же со всеми словами времени: after, before, while (пока), as soon as (как только), until (пока не), once (как только), by the time (к тому времени, как).`,
        ex: [['I’ll send you the file as soon as I get home.', 'Пришлю файл, как только приду домой.'], ['What will you do while I’m away?', 'Что ты будешь делать, пока меня нет?'], ['By the time the patch comes out, I’ll have reached level 60.', 'К выходу патча (обновления) я уже дойду до 60-го уровня.']] },
      { t: 'check', q: 'Call me as soon as you ___.', ru: 'Позвони, как только приземлишься.', o: ['will land', 'land', 'landed'], a: 1,
        why: 'После as soon as — настоящее, хотя речь о будущем: you land.' },
      { t: 'idea', text: `В главной половине вместо will может быть просьба, can или must. А until значит «пока не…» — но своего «не» у него нет.`,
        ex: [['Wait here until I come back.', 'Жди здесь, пока я не вернусь.'], ['When you’re in Kazan again, you must visit us.', 'Когда снова будешь в Казани, обязательно заходи.']],
        bad: 'Wait until the download will finish.', good: 'Wait until the download <b>finishes</b>.' },
      { t: 'check', q: 'I’ll wait until you ___ ready.', ru: 'Я подожду, пока ты не будешь готов.', o: ['won’t be', 'will be', 'are'], a: 2,
        why: 'После until — настоящее и без «не»: until you are ready.' },
      { t: 'idea', text: `Но! Если when — это вопрос «когда именно?», will остаётся. «Не знаю, когда выйдет обновление» — мы спрашиваем о времени, а не «в момент, когда».`,
        ex: [['I don’t know when the update will come out.', 'Не знаю, когда выйдет обновление.'], ['I wonder where I’ll be when I’m forty.', 'Интересно, где я буду, когда мне будет сорок.']] },
      { t: 'check', q: 'В каком предложении будущее время стоит правильно?', o: ['I’ll call you when I will arrive.', 'I don’t know when Max will arrive.', 'Wait until Max will arrive.'], a: 1,
        why: '«Не знаю, когда?» — вопрос о времени, will можно. В двух других — «в момент, когда / пока не» → настоящее.' },
      { t: 'idea', text: `Итог: «когда / пока / как только» про будущее → настоящее. «Не знаю, когда…» → will.`,
        rows: [['в момент, когда', 'I’ll call you when I arrive.'], ['когда именно?', 'I don’t know when he’ll arrive.']] }
    ]},

    // ───────────── 6. when I’ve done ─────────────
    { title: '«Когда уже сделаю» — when I’ve done', steps: [
      { t: 'idea', text: `После when, after, until, as soon as, once можно поставить have + третья форма. Так вы подчёркиваете: сначала одно <b>полностью закончится</b>, потом начнётся другое.`,
        lit: [['Can I borrow', 'можно взять'], ['the book', 'книгу'], ['when', 'когда'], ['you’ve finished', 'ты уже закончишь'], ['it', 'её']],
        ex: [['When I’ve sent the report, we can go for lunch.', 'Когда отправлю отчёт, можем пойти обедать.'], ['Once you’ve tried this game, you won’t stop.', 'Стоит попробовать эту игру — не остановишься.'], ['Don’t say anything until he has left.', 'Ничего не говори, пока он не уйдёт.']] },
      { t: 'check', q: 'Скажите: «Я позвоню, когда соберу вещи»', o: ['I’ll call you when I’ll have packed.', 'I’ll call you when I’ve packed.', 'I’ll call you when I will pack.'], a: 1,
        why: 'После when нет will. «Уже соберу» → when I’ve packed.' },
      { t: 'idea', text: `Если два дела идут <b>одновременно</b>, have не нужен. Спрашивать Кейт буду во время звонка — значит, просто when I call.`,
        bad: 'When I’ve called Kate, I’ll ask her about the party.', good: 'When I <b>call</b> Kate, I’ll ask her about the party.' },
      { t: 'check', q: 'Скажите: «Когда буду говорить с Максом, спрошу про игру» (спрошу во время разговора)', o: ['When I’ve talked to Max, I’ll ask him about the game.', 'When I will talk to Max, I’ll ask him about the game.', 'When I talk to Max, I’ll ask him about the game.'], a: 2,
        why: 'Всё происходит одновременно → просто настоящее: when I talk.' },
      { t: 'idea', text: `Часто подходит и то и другое — смысл почти тот же.`,
        ex: [['I’ll join as soon as I finish. = …as soon as I’ve finished.', 'Присоединюсь, как только закончу.'], ['You’ll feel better after you eat. = …after you’ve eaten.', 'Станет лучше, когда поешь.']],
        tip: `Русское «когда сделаю» (уже) хорошо ложится на when I’ve done, а «когда буду делать» — на when I do.` },
      { t: 'idea', text: `Итог: «сначала закончу, потом…» → when I’ve done. Одновременно → when I do.`,
        rows: [['сначала одно, потом другое', 'when I’ve finished it'], ['одновременно', 'when I call her']] }
    ]},

    // ───────────── 7. if или when ─────────────
    { title: '«Если» или «когда» — if или when', steps: [
      { t: 'idea', text: `Вы уже знаете из A2: после if тоже настоящее. Разница по смыслу: <b>when</b> — это точно случится, <b>if</b> — может, случится, а может, нет.`,
        rows: [['точно иду', 'I’m going out later. When I go out, I’ll buy some milk.'], ['может, пойду', 'I might go out later. If I go out, I’ll buy some milk.']] },
      { t: 'check', q: 'Maybe I’ll have time tonight. ___ I have time, I’ll help you.', ru: 'Может, вечером будет время. Если будет, помогу.', o: ['When', 'If', 'Will'], a: 1,
        why: '«Может быть» — неизвестно, случится ли → if.' },
      { t: 'idea', text: `Если сказать when про неприятное, звучит так, будто это неизбежно. «Если проиграю» — только if.`,
        ex: [['Don’t worry if I’m late tonight.', 'Не волнуйся, если я сегодня задержусь.'], ['If they don’t come soon, I’m not going to wait.', 'Если они скоро не придут, ждать не стану.']],
        bad: 'When I lose, I’ll delete the game. (будто проигрыш точно будет)', good: '<b>If</b> I lose, I’ll delete the game.' },
      { t: 'check', q: 'Don’t worry ___ late tonight.', ru: 'Не волнуйся, если я сегодня задержусь.', o: ['if I’ll be', 'if I’m', 'when I’ll be'], a: 1,
        why: '«Если» → if, и после if — настоящее: if I’m late.' },
      { t: 'idea', text: `Как с when: если if значит «<b>ли</b>», will остаётся. Проверка: можно заменить на «ли»? Да → will можно.`,
        ex: [['I don’t know if Max will come.', 'Не знаю, придёт ли Макс.'], ['I wonder if the update will be good.', 'Интересно, хорошим ли будет обновление.']] },
      { t: 'check', q: 'I don’t know if Anna ___ to the party.', ru: 'Не знаю, придёт ли Анна на вечеринку.', o: ['come', 'will come', 'will comes'], a: 1,
        why: 'if = «ли» → will остаётся: will come (без -s после will).' },
      { t: 'idea', text: `Итог: точно будет → when, может быть → if. После обоих — настоящее, кроме «ли» и «когда именно?».`,
        rows: [['точно', 'When I go out, I’ll…'], ['может быть', 'If I go out, I’ll…'], ['«ли»', 'I don’t know if he’ll come.']] }
    ]},

    // ───────────── 8. Проверьте себя ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'check', q: 'I’ll text you when I ___ home.', ru: 'Напишу тебе, когда приду домой.', o: ['will get', 'get', 'am get'], a: 1,
        why: 'После when про будущее — настоящее: when I get.' },
      { t: 'check', q: 'Don’t call at midnight. I ___.', ru: 'Не звони в полночь. Я буду спать.', o: ['sleep', 'will sleeping', 'will be sleeping'], a: 2,
        why: 'В тот момент буду в процессе → will be + -ing.' },
      { t: 'check', q: 'If it ___, we’ll stay at home.', ru: 'Если пойдёт дождь, останемся дома.', o: ['will rain', 'rains', 'rain'], a: 1,
        why: 'После if — настоящее, с it хвостик -s: rains.' },
      { t: 'check', q: 'By the time you arrive, we ___.', ru: 'К тому времени, как ты приедешь, мы уже поедим.', o: ['will have eaten', 'will eating', 'have eat'], a: 0,
        why: 'К сроку уже сделано → will have + третья форма: eaten.' },
      { t: 'check', q: 'I don’t know when he ___ back.', ru: 'Не знаю, когда он вернётся (спрашиваю о времени).', o: ['will come', 'will comes', 'come'], a: 0,
        why: '«Когда именно?» — will остаётся, после will без -s.' },
      { t: 'idea', text: `Итог урока: will be doing — буду в процессе; will have done — к сроку уже сделаю; после when / until / as soon as / if — настоящее или have done, а не will.`,
        rows: [['в процессе', 'I’ll be working.'], ['уже готово', 'I’ll have finished.'], ['когда / если', 'when I arrive, if I have time']] }
    ]}
  ];
})();
