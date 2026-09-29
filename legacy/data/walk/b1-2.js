// Грамматика по шагам для юнита b1-2: три прошлых (played / was playing / used to), тонкости Past Simple (did + do, was/were без did, коварные формы), Past Continuous (момент, прерывание, два процесса), одно when — два смысла и слова-состояния, have / have got «есть», have как действие, used to глубже, used to / was doing / be used to, частые ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-2'); if (!u) return;
  u.walk = [
    // ───────────── 1. Три прошлых ─────────────
    { title: 'Три разных «играл»', steps: [
      { t: 'idea', text: `Вы уже знаете три прошлых: <b>played</b> (вторая форма, Past Simple), <b>was playing</b> (Past Continuous) и <b>used to play</b>. Русское «играл» по-английски бывает любым из них — смотря что вы хотите показать.`,
        ex: [['I was playing when the power went off.', 'Я играл, когда отключили свет. (игра шла)'], ['I played for three hours yesterday.', 'Вчера я играл три часа. (целиком)'], ['As a kid, I used to play outside every day.', 'В детстве я каждый день играл во дворе. (раньше, теперь нет)']] },
      { t: 'check', q: 'Скажите: «В детстве я смотрел мультики каждое утро»', o: ['As a kid, I was watching cartoons every morning.', 'As a kid, I used to watch cartoons every morning.', 'As a kid, I use to watch cartoons every morning.'], a: 1,
        why: 'Регулярная привычка в прошлом, которой больше нет, → used to (с d).' },
      { t: 'idea', text: `Итог: перед фразой задайте себе вопрос — и он подскажет форму.`,
        rows: [['Что случилось?', 'I played.'], ['Что шло тогда?', 'I was playing.'], ['Как было раньше?', 'I used to play.']],
        tip: `Как в сериале: was playing — декорации и фоновая музыка, played — повороты сюжета, used to — флешбэк «как было раньше».` }
    ]},

    // ───────────── 2. Past Simple: тонкости ─────────────
    { title: 'Past Simple: где спотыкаются', steps: [
      { t: 'idea', text: `Вы уже знаете: вопрос и «не» в прошлом — через <b>did</b>, а слово-действие после него в простом виде. Ловушка: в «Что ты делал?» нужен did и ещё <b>do</b> — само «делать».`,
        lit: [['What', 'что'], ['did', '(вопрос о прошлом)'], ['you', 'ты'], ['do', 'делать'], ['on Saturday?', 'в субботу?']],
        bad: 'What did you on Saturday? · I didn’t anything.', good: 'What did you <b>do</b> on Saturday? · I didn’t <b>do</b> anything.' },
      { t: 'check', q: 'Скажите: «Вчера я ничего не делал»', o: ['I didn’t anything yesterday.', 'I didn’t do anything yesterday.', 'I didn’t did anything yesterday.'], a: 1,
        why: 'didn’t — помощник, do — само «делать». После didn’t — простое do.' },
      { t: 'idea', text: `А с was / were помощник did не нужен: они сами строят вопрос и «не». В одной фразе часто встречаются оба.`,
        rows: [['Were you tired?', 'Did you sleep well?'], ['I wasn’t hungry.', 'I didn’t eat.']],
        ex: [['I wasn’t hungry, so I didn’t eat anything.', 'Я не был голоден, поэтому ничего не ел.'], ['Did you go out last night, or were you too tired?', 'Ты вчера выходил или слишком устал?']] },
      { t: 'check', q: '___ you at the office yesterday?', ru: 'Ты был вчера в офисе?', o: ['Did', 'Were', 'Was'], a: 1,
        why: 'Здесь «был» — это were (you → were), did не нужен.' },
      { t: 'idea', text: `У некоторых слов-действий все формы одинаковые: cut (резать), put, shut, cost, hurt (ушибить, болеть), hit, let, set. read пишется так же, но в прошлом звучит «рэд».`,
        ex: [['The ticket cost fifty euros.', 'Билет стоил пятьдесят евро.'], ['It was cold, so I shut the window.', 'Было холодно, и я закрыл окно.'], ['I fell off my bike and hurt my knee.', 'Я упал с велосипеда и ушиб колено (knee).']],
        tip: `Не перепутайте: fell (упал) — felt (почувствовал), left (ушёл) — lived (жил).` },
      { t: 'check', q: 'I ___ my finger while I was cooking.', ru: 'Я порезал палец, пока готовил.', o: ['cut', 'cutted', 'cuted'], a: 0,
        why: 'cut — cut — cut: все формы одинаковые, -ed не нужно.' },
      { t: 'idea', text: `Итог: «делал» — did + do, «был» — was / were без did. А цепочку событий «одно за другим» рассказываем только вторыми формами.`,
        rows: [['делал?', 'What did you do?'], ['был?', 'Were you tired?'], ['цепочка', 'I opened my laptop, checked the mail and made coffee.']] }
    ]},

    // ───────────── 3. Past Continuous ─────────────
    { title: 'Past Continuous: «был в процессе»', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>was / were + -ing</b> — действие было в середине: уже началось и ещё не закончилось. Первый случай — конкретный момент или период прошлого.`,
        lit: [['At eleven', 'в одиннадцать'], ['I', 'я'], ['was', '(был)'], ['still', 'всё ещё'], ['working', 'работающий']],
        ex: [['At eleven last night I was still working.', 'Вчера в одиннадцать вечера я всё ещё работал.'], ['This time last year I was living in Riga.', 'Год назад в это время я жил в Риге.']] },
      { t: 'idea', text: `Второй случай — процесс, который прервало короткое событие. Процесс — was / were + -ing, событие — вторая форма. Связывают их when или while.`,
        lit: [['Someone stole my phone', 'украли телефон (раз!)'], ['while', 'пока'], ['I was sleeping', 'я спал (шло)']],
        ex: [['Someone stole my phone while I was sleeping on the train.', 'У меня украли телефон, пока я спал в поезде.'], ['I was crossing the street when I noticed Max.', 'Я переходил улицу, когда заметил Макса.']] },
      { t: 'check', q: 'When the power went off, I ___ an important file.', ru: 'Когда отключили свет, я как раз сохранял важный файл.', o: ['saved', 'was saving', 'save'], a: 1,
        why: 'Сохранение шло, и его прервало событие → was saving.' },
      { t: 'idea', text: `Третий случай — два процесса одновременно. Тогда оба с -ing.`,
        ex: [['While I was cooking, my flatmate was playing FIFA.', 'Пока я готовил, сосед по квартире (flatmate) играл в FIFA.'], ['I was listening to music while I was working.', 'Я слушал музыку, пока работал.']] },
      { t: 'check', q: 'While I was testing the app, Max ___ the icons.', ru: 'Пока я тестировал приложение, Макс рисовал иконки.', o: ['was drawing', 'were drawing', 'drawing'], a: 0,
        why: 'Два процесса одновременно → оба с -ing; Max — он → was.' },
      { t: 'idea', text: `Итог: три случая для was / were + -ing.`,
        rows: [['момент', 'At ten I was working.'], ['прервали', 'I was sleeping when she called.'], ['два процесса', 'While I was cooking, he was playing.']] }
    ]},

    // ───────────── 4. Одно when — два смысла ─────────────
    { title: 'Одно when — два смысла', steps: [
      { t: 'idea', text: `Хотите сказать: «Когда пришла Лена, мы ужинали». Осторожно: от одной формы зависит, что было раньше — ужин или Лена.`,
        rows: [['When Lena arrived, we were having dinner.', 'ужин уже шёл, Лена пришла посреди'], ['When Lena arrived, we had dinner.', 'сначала пришла Лена, потом поужинали']],
        tip: `was / were + -ing — «уже шло». Вторая форма — «после этого».` },
      { t: 'check', q: 'When Lena arrived, we ___ dinner.', ru: 'Когда пришла Лена, мы уже сидели за столом и ужинали.', o: ['had', 'were having', 'was having'], a: 1,
        why: 'Ужин уже шёл, Лена пришла посреди → were having (we → were).' },
      { t: 'idea', text: `Помните слова-состояния из прошлого урока — know, want, like, need, understand? Они не берут -ing и в прошлом тоже, даже рядом с процессом.`,
        bad: 'We were knowing each other. · Max was wanting to leave.', good: 'We <b>knew</b> each other. · I was enjoying the party, but Max <b>wanted</b> to leave.' },
      { t: 'check', q: 'We ___ each other well at school.', ru: 'В школе мы хорошо знали друг друга.', o: ['were knowing', 'knew', 'was knowing'], a: 1,
        why: 'know — состояние, с -ing не бывает → knew.' },
      { t: 'idea', text: `Итог: смотрим, что было раньше, и не ставим -ing к словам-состояниям.`,
        rows: [['уже шло', 'we were having dinner'], ['потом', 'we had dinner'], ['состояние', 'I knew · he wanted']] }
    ]},

    // ───────────── 5. have / have got ─────────────
    { title: 'have и have got: «у меня есть»', steps: [
      { t: 'idea', text: `Вы уже знаете из A1: <b>I have</b> и <b>I’ve got</b> — «у меня есть». Так говорят о вещах, родных, болезнях (a cold — простуда) и встречах в расписании. have got чаще у британцев, have — везде.`,
        rows: [['+', 'I have a headache.', 'I’ve got a headache.'], ['−', 'She doesn’t have a car.', 'She hasn’t got a car.'], ['?', 'Do you have a charger?', 'Have you got a charger?']],
        ex: [['She’s got two sisters.', 'У неё две сестры.'], ['We’ve got a meeting at three.', 'У нас встреча в три.']] },
      { t: 'check', q: '___ you have a charger?', ru: 'У тебя есть зарядка (charger)?', o: ['Do', 'Have', 'Are'], a: 0,
        why: 'have без got — вопрос через do. С Have было бы Have you got…?' },
      { t: 'idea', text: `В прошлом всё проще: только <b>had</b>, без got. Вопрос и «не» — через did.`,
        ex: [['I had long hair at university.', 'В универе у меня были длинные волосы.'], ['Did you have a phone back then?', 'У тебя тогда был телефон?'], ['I didn’t have my phone, so I couldn’t call you.', 'У меня не было телефона, и я не мог позвонить.']],
        bad: 'Lisa had got long hair at school. · Had you a car?', good: 'Lisa <b>had</b> long hair at school. · <b>Did</b> you <b>have</b> a car?' },
      { t: 'check', q: 'When I was a student, I ___ a car.', ru: 'Когда я был студентом, у меня была машина.', o: ['had got', 'had', 'have got'], a: 1,
        why: 'В прошлом «было, имелось» — просто had, без got.' },
      { t: 'idea', text: `«Есть» — это состояние, а не процесс. Поэтому в этом значении have не бывает с -ing — даже про простуду, которая «прямо сейчас».`,
        bad: 'I’m having a cold. · He’s having a beard.', good: 'I<b>’ve got</b> a cold. · He <b>has</b> a beard.',
        tip: `Форма без do и без got (Have you a car? She hasn’t a car.) встречается в старых книгах, но в речи звучит странно — не используйте.` },
      { t: 'check', q: 'Скажите: «У меня простуда»', o: ['I’m having a cold.', 'I’ve got a cold.', 'I’m have a cold.'], a: 1,
        why: 'Простуда — это «есть», состояние → I’ve got (или I have), без -ing.' },
      { t: 'idea', text: `Итог: «есть» — have или have got, в прошлом — had, и никогда с -ing.`,
        rows: [['есть сейчас', 'I have… / I’ve got…'], ['было', 'I had… / Did you have…?']] }
    ]},

    // ───────────── 6. have как действие ─────────────
    { title: 'have как действие: have lunch, have fun', steps: [
      { t: 'idea', text: `Хотите сказать: «Не могу говорить — обедаю». По-английски: I’m having lunch. Здесь have — не «иметь», а действие: есть, принимать душ, болтать, отдыхать.`,
        lit: [['I’m', 'я (есть)'], ['having lunch', 'обедающий'], ['right now', 'прямо сейчас']],
        ex: [['Sorry, I can’t talk — I’m having lunch.', 'Извини, не могу говорить — обедаю.'], ['We’re having a great time here!', 'Мы тут отлично проводим время!']] },
      { t: 'idea', text: `Таких выражений много — учите их целиком, как одно слово. got здесь невозможен: got бывает только у «есть».`,
        rows: [['еда', 'have breakfast / lunch / a coffee / a snack'], ['отдых', 'have a shower / a rest / a break / a nap (поспать днём)'], ['общение, опыт', 'have a chat / an argument / fun / a good time / trouble / a dream']],
        bad: 'I’ve got breakfast at eight every day.', good: 'I <b>have</b> breakfast at eight every day.',
        tip: `Ещё два частых: have a look (at) — взглянуть, have a go — попробовать. Can you have a look at my design? · Let me have a go.` },
      { t: 'check', q: 'Sorry, I can’t answer. I ___ a shower.', ru: 'Извини, не могу ответить — я в душе.', o: ['have got', 'am having', 'have'], a: 1,
        why: 'have a shower — действие, и оно идёт сейчас → am having; got тут невозможен.' },
      { t: 'check', q: 'I ___ a strange dream last night.', ru: 'Прошлой ночью мне приснился странный сон.', o: ['had got', 'had', 'have got'], a: 1,
        why: 'have a dream — действие в прошлом: просто had, без got.' },
      { t: 'idea', text: `Вопрос и «не» — всегда через do / does / did, как у обычного слова-действия.`,
        bad: 'How often have you a break? · Had you trouble finding the office?', good: 'How often <b>do</b> you <b>have</b> a break? · <b>Did</b> you <b>have</b> trouble finding the office?' },
      { t: 'check', q: 'How often ___ a break at work?', ru: 'Как часто у тебя перерыв на работе?', o: ['have you got', 'do you have', 'have you'], a: 1,
        why: 'have a break — действие → вопрос через do: do you have.' },
      { t: 'idea', text: `Итог: have бывает «есть» и бывает действием. У действия нет got, зато можно -ing.`,
        rows: [['есть', 'I’ve got some sandwiches. Want one?'], ['действие', 'I usually have a sandwich for lunch.'], ['действие сейчас', 'I’m having lunch.']] }
    ]},

    // ───────────── 7. used to глубже ─────────────
    { title: 'used to: что ещё нужно знать', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>used to</b> + слово-действие = «раньше, а теперь нет». Новое: так говорят не только о привычках, но и о том, что раньше было правдой.`,
        ex: [['I used to think Max was arrogant.', 'Раньше я думал, что Макс заносчивый (arrogant).'], ['This café used to be a game shop.', 'Раньше здесь был магазин игр.'], ['I never used to like coffee.', 'Раньше я совсем не любил кофе.']],
        tip: `«Раньше не…»: обычно didn’t use to, в речи очень часто never used to. used not to — книжное и редкое.` },
      { t: 'check', q: 'This building ___ a cinema. Now it’s a gym.', ru: 'Раньше в этом здании был кинотеатр. Теперь там спортзал.', o: ['used to be', 'use to be', 'used to being'], a: 0,
        why: 'Раньше было правдой, теперь нет → used to + простое be.' },
      { t: 'idea', text: `В коротком ответе слово-действие после used to можно не повторять — но to остаётся.`,
        ex: [['Do you still play chess? — Not really, but I used to.', 'Ты ещё играешь в шахматы? — Уже нет, но раньше играл.']],
        bad: '…but I used.', good: '…but I <b>used to</b>.' },
      { t: 'check', q: 'Do you still watch anime? — Not much, but I ___.', ru: 'Ты ещё смотришь аниме? — Почти нет, но раньше смотрел.', o: ['used', 'used to', 'use to'], a: 1,
        why: 'В коротком ответе остаётся used to, глагол можно опустить.' },
      { t: 'idea', text: `used to — только «регулярно в прошлом». Для «сейчас» — usually + настоящее. А если сказано, сколько раз или сколько лет, — это законченный факт, вторая форма.`,
        bad: 'I use to get up at seven. · We used to go there three times.', good: 'I <b>usually get</b> up at seven. · We <b>went</b> there three times.' },
      { t: 'check', q: 'I ___ to the gym three times last week.', ru: 'На прошлой неделе я три раза сходил в спортзал.', o: ['used to go', 'went', 'use to go'], a: 1,
        why: 'Точное число раз — законченный факт → went, не used to.' },
      { t: 'idea', text: `Итог: used to — «раньше регулярно или было правдой». Сколько раз и сколько лет — вторая форма.`,
        rows: [['было правдой', 'This café used to be a shop.'], ['короткий ответ', 'No, but I used to.'], ['сколько раз', 'We went there three times.']] }
    ]},

    // ───────────── 8. used to / was doing / be used to ─────────────
    { title: 'used to, was doing или be used to?', steps: [
      { t: 'idea', text: `Эти фразы внешне похожи, но значат разное. Сравните.`,
        rows: [['I used to watch TV a lot.', 'раньше часто смотрел, теперь нет'], ['I was watching TV when you called.', 'был в процессе в тот момент'], ['I’m used to working at night.', 'я привык работать ночью']] },
      { t: 'idea', text: `Новое выражение: <b>am / is / are used to + -ing</b> = «привык, мне это нормально». Подробно — на уровне B2, пока достаточно его узнавать.`,
        lit: [['I’m', 'я (есть)'], ['used to', 'привыкший к'], ['living', 'жизни'], ['alone', 'одному']],
        ex: [['I used to live alone.', 'Раньше я жил один. (теперь нет)'], ['I’m used to living alone.', 'Я привык жить один. (живу, и мне нормально)']],
        tip: `Есть am / is / are перед used — «привык». Нет — «раньше».` },
      { t: 'check', q: 'I ___ early — I’ve done it for years.', ru: 'Я привык рано вставать — делаю так уже много лет.', o: ['used to get up', 'am used to getting up', 'use to get up'], a: 1,
        why: 'Привык и сейчас так живу → am used to + -ing.' },
      { t: 'check', q: 'I ___ a book when the lights went out.', ru: 'Я читал книгу, когда погас свет.', o: ['used to read', 'was reading', 'am used to reading'], a: 1,
        why: 'Процесс, который прервало событие, → Past Continuous.' },
      { t: 'idea', text: `Итог: три похожих на вид, но разных выражения.`,
        rows: [['раньше, теперь нет', 'used to + слово'], ['в процессе', 'was / were + -ing'], ['привык', 'am / is / are used to + -ing']] }
    ]},

    // ───────────── 9. Проверьте себя ─────────────
    { title: 'Проверьте себя: частые ошибки', steps: [
      { t: 'idea', text: `Соберём главные места ошибок. Не переживайте — это последняя разминка.`,
        rows: [['What did you at the weekend?', '→ What did you do at the weekend?'], ['I’m having a cold.', '→ I’ve got a cold.'], ['I use to play every day.', '→ I usually play every day.']] },
      { t: 'check', q: 'She ___ to like spicy food, but now she loves it.', ru: 'Раньше она совсем не любила острую (spicy) еду, а теперь обожает.', o: ['never used', 'never use', 'was never used'], a: 0,
        why: 'never used to — разговорное «раньше не»; did нет, поэтому used с d.' },
      { t: 'idea', text: `Итог урока: события — вторая форма, фон и процесс — was / were + -ing, «раньше, а теперь нет» — used to. have got — только «есть», have — и «есть», и действие.`,
        rows: [['событие', 'I played.'], ['процесс, фон', 'I was playing.'], ['раньше', 'I used to play.']] }
    ]}
  ];
})();
