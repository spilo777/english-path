// Грамматика по шагам для юнита a2-2: Present Perfect — прошлое с итогом сейчас, have / has + третья форма, не и вопрос, неправильные третьи формы, итог сейчас или did, just / already, yet, still.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-2'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: '«Я потерял ключи!» — прошлое, которое важно сейчас', steps: [
      { t: 'idea', text: `Хотите сказать «Я потерял ключи!» — и домой теперь не попасть. Потеряли раньше, но говорите вы о <b>сейчас</b>: ключей нет. Для такого прошлого в английском особая форма: <b>I have lost my keys</b>.`,
        lit: [['I', 'я'], ['have', '(имею)'], ['lost', 'потерянными'], ['my keys', 'мои ключи']],
        ex: [['I have lost my keys.', 'Я потерял ключи. (их нет сейчас)'], ['She has gone.', 'Она ушла. (её тут нет)'], ['We have bought a new TV.', 'Мы купили новый телевизор. (он у нас есть)']] },
      { t: 'idea', text: `Помните прошлое из A1: I lost, I went, did? Это <b>рассказ</b> о том, что было тогда. А have lost — <b>новость</b> о том, что мы имеем сейчас в итоге.`,
        rows: [['I lost my keys yesterday.', 'рассказ: вчера было такое'], ['I have lost my keys.', 'новость: ключей нет сейчас']],
        tip: `Эта форма называется Present Perfect. Present — «настоящее»: смотрим из сегодня назад и спрашиваем «что в итоге?»` },
      { t: 'check', q: 'Скажите: «Где мой телефон? Я его потерял!» (сейчас его нет)', o: ['I have lost it!', 'I am lost it!', 'I lose it!'], a: 0,
        why: 'Потерял раньше, а нет его сейчас → have + lost.' },
      { t: 'idea', text: `Итог: было раньше, а важен итог сейчас → <b>have</b> + особая форма слова-действия.`,
        rows: [['рассказ о вчера', 'I lost my keys yesterday.'], ['итог сейчас', 'I have lost my keys.']] }
    ]},

    // ───────────── 2. have / has + третья форма ─────────────
    { title: 'Как построить: have / has + третья форма', steps: [
      { t: 'idea', text: `Здесь <b>have</b> — не «иметь». Это помощник, как did в A1: сам ничего не переводится, а показывает «итог к сейчас». После него — третья форма слова-действия.`,
        lit: [['I', 'я'], ['have', '(помощник)'], ['finished', 'закончил']],
        ex: [['I have finished.', 'Я закончил.'], ['We have cleaned the kitchen.', 'Мы убрали кухню.'], ['You have fixed the bug!', 'Ты исправил баг!']] },
      { t: 'idea', text: `Что такое третья форма? Помните таблицу из A1: go — went — <b>gone</b>? Третья колонка — она. У правильных слов она такая же, как вторая: просто <b>-ed</b>.`,
        rows: [['finish', 'finished', 'have finished'], ['clean', 'cleaned', 'have cleaned'], ['download', 'downloaded', 'have downloaded']] },
      { t: 'idea', text: `Как с do / does: для he, she, it (Max, Anna, телефон) — <b>has</b>. Для всех остальных — <b>have</b>.`,
        rows: [['I / you / we / they', 'have finished'], ['he / she / it, Max', 'has finished']],
        bad: 'She have finished.', good: 'She <b>has</b> finished.' },
      { t: 'check', q: 'My brother ___ bought a new console.', ru: 'Мой брат купил новую приставку.', o: ['have', 'has', 'is'], a: 1,
        why: 'My brother — он (he) → has.' },
      { t: 'idea', text: `В речи have и has почти всегда сжимают: I have → <b>I’ve</b>, we’ve, they’ve; she has → <b>she’s</b>, he’s.`,
        ex: [['I’ve finished.', 'Я закончил.'], ['She’s gone home.', 'Она ушла домой.'], ['They’ve cleaned the kitchen.', 'Они убрали кухню.']],
        tip: `He’s бывает и he is, и he has. Смотрите на следующее слово: He’s tired — это is. He’s gone (третья форма) — это has.` },
      { t: 'idea', text: `Итог: кто + have / has + третья форма.`,
        rows: [['I / you / we / they', 'have (’ve) + третья форма'], ['he / she / it', 'has (’s) + третья форма']] }
    ]},

    // ───────────── 3. Не и вопрос ─────────────
    { title: '«Я не закончил», «Ты закончил?»', steps: [
      { t: 'idea', text: `Хотите сказать «Я не закончил». Слово <b>not</b> встаёт после have / has, как после is. Коротко: <b>haven’t</b>, <b>hasn’t</b>.`,
        lit: [['I', 'я'], ['haven’t', 'не'], ['finished', 'закончил']],
        ex: [['I haven’t finished.', 'Я не закончил.'], ['She hasn’t called.', 'Она не позвонила.'], ['We haven’t decided.', 'Мы не решили.']] },
      { t: 'check', q: 'Скажите: «Том не исправил баг» (баг всё ещё есть)', o: ['Tom not fixed the bug.', 'Tom hasn’t fixed the bug.', 'Tom haven’t fixed the bug.'], a: 1,
        why: 'Tom — он → has; «не» → hasn’t + третья форма.' },
      { t: 'idea', text: `Вопрос: have / has выходит <b>вперёд</b>, как is в вопросе Is she…? Слово-действие остаётся в третьей форме.`,
        lit: [['Have', '(вопрос)'], ['you', 'ты'], ['finished?', 'закончил?']],
        ex: [['Have you finished?', 'Ты закончил?'], ['Has Max fixed the bug?', 'Макс исправил баг?'], ['Where have they gone?', 'Куда они ушли?']],
        bad: 'Did you have finished?', good: '<b>Have</b> you finished?',
        tip: `Помните Did you…? из A1? Здесь did не нужен: have сам делает вопрос. Два помощника сразу не ставят.` },
      { t: 'check', q: '___ you fixed the bug? — Yes, I have.', ru: 'Ты исправил баг? — Да.', o: ['Did', 'Have', 'Has'], a: 1,
        why: 'Дальше третья форма fixed → вопрос с have; you → have.' },
      { t: 'idea', text: `Итог: «не» и вопрос делает сам have / has. Короткий ответ повторяет его — как Yes, I did в A1.`,
        rows: [['не', 'I haven’t / she hasn’t + третья форма'], ['вопрос', 'Have you / Has she + третья форма?'], ['короткий ответ', 'Yes, I have. / No, she hasn’t.']] }
    ]},

    // ───────────── 4. Неправильные третьи формы ─────────────
    { title: 'Третья форма у неправильных слов', steps: [
      { t: 'idea', text: `У неправильных слов третью форму надо знать. Хорошая новость: часто она <b>такая же, как вторая</b>, а вторую вы уже знаете с A1.`,
        rows: [['buy', 'bought', 'have bought'], ['lose', 'lost', 'have lost'], ['make', 'made', 'have made'], ['send', 'sent', 'have sent']],
        ex: [['I’ve lost my keys again.', 'Я опять потерял ключи.'], ['I’ve sent the file.', 'Я отправил файл.']],
        tip: `Так же: have → had, find → found, tell → told, say → said, get → got, win → won, pay → paid.` },
      { t: 'check', q: 'Oh no! I’ve ___ my phone!', ru: 'О нет! Я потерял телефон!', o: ['lost', 'lose', 'losed'], a: 0,
        why: 'lose — lost — lost: третья форма совпадает со второй.' },
      { t: 'idea', text: `А у самых частых слов третья форма <b>своя</b>. Первые три вы видели в таблице A1:`,
        rows: [['go — went', 'gone'], ['see — saw', 'seen'], ['do — did', 'done']],
        ex: [['She’s gone home.', 'Она ушла домой.'], ['I’ve seen this film.', 'Я видел этот фильм.'], ['I’ve done my homework.', 'Я сделал домашнее задание.']] },
      { t: 'idea', text: `Ещё несколько частых. Заметьте: многие кончаются на <b>-n / -en</b>. Слышите «-н» после have — это наша форма.`,
        rows: [['eat — ate', 'eaten'], ['take — took', 'taken'], ['write — wrote', 'written'], ['break — broke', 'broken'], ['forget — forgot', 'forgotten']],
        bad: 'I have went. / She has saw it. / We have eat.', good: 'I have <b>gone</b>. / She has <b>seen</b> it. / We have <b>eaten</b>.',
        tip: `Главная ловушка — поставить после have вторую форму. Это самое частое место ошибок — не переживайте, дальше потренируемся.` },
      { t: 'check', q: 'Oh no! Somebody has ___ the window.', ru: 'О нет! Кто-то разбил окно.', o: ['broke', 'broken', 'breaked'], a: 1,
        why: 'После has — третья форма: break — broke — broken.' },
      { t: 'idea', text: `Ещё несколько: give — gave — <b>given</b>, choose (выбирать) — chose — <b>chosen</b>, fall (падать) — fell — <b>fallen</b>. А у come и begin (начинать) третья форма почти как первая: <b>come</b>, <b>begun</b>.`, opt: true,
        ex: [['The boss has given us a day off.', 'Начальник дал нам выходной.'], ['The new season has come out.', 'Вышел новый сезон.']] },
      { t: 'idea', text: `Итог: после have / has — третья колонка.`,
        rows: [['правильные', 'finished, cleaned (-ed)'], ['как вторая', 'lost, bought, made, sent'], ['своя форма', 'gone, seen, done, eaten, taken']] }
    ]},

    // ───────────── 5. Итог сейчас или did ─────────────
    { title: 'Итог сейчас или «вчера» с did', steps: [
      { t: 'idea', text: `С have говорящему важно не <b>когда</b> это было, а что <b>теперь</b>. Поэтому точного времени (yesterday, last week, in 2020) рядом с have обычно нет.`,
        rows: [['I’ve lost my passport.', 'Паспорта нет.'], ['Anna has gone to bed.', 'Она в кровати.'], ['They’ve gone out.', 'Их нет дома.']],
        ex: [['Look! It has stopped raining.', 'Смотри, дождь кончился.'], ['I’ve forgotten his name.', 'Я забыл, как его зовут. (не помню сейчас)'], ['It’s her birthday, and I haven’t bought a present.', 'У неё день рождения, а я не купил подарок.']] },
      { t: 'idea', text: `Есть yesterday или last week — это уже рассказ о прошлом. Берём форму из A1: вторую форму, did, didn’t.`,
        bad: 'I have lost my keys yesterday.', good: 'I <b>lost</b> my keys yesterday. / I<b>’ve lost</b> my keys.',
        tip: `Подробнее сравним эти два прошлых в следующих уроках. Пока правило простое: есть «когда» — did-форма.` },
      { t: 'check', q: 'I ___ my phone yesterday, but I found it this morning.', ru: 'Вчера я потерял телефон, но сегодня утром нашёл.', o: ['have lost', 'lost', 'has lost'], a: 1,
        why: 'Есть yesterday, и сейчас телефон уже нашёлся → lost.' },
      { t: 'check', q: 'Tom isn’t here. He ___ home.', ru: 'Тома здесь нет. Он ушёл домой.', o: ['has gone', 'have gone', 'is go'], a: 0,
        why: 'Ушёл — и сейчас его нет → has gone (he → has).' },
      { t: 'idea', text: `Итог: есть «когда» — вторая форма; важно «что сейчас» — have + третья.`,
        rows: [['yesterday, last week, in 2020', 'I lost my keys.'], ['без времени, итог сейчас', 'I’ve lost my keys.']] }
    ]},

    // ───────────── 6. just и already ─────────────
    { title: '«Только что» и «уже»: just, already', steps: [
      { t: 'idea', text: `Хотите сказать «Я только что пообедал». «Только что» — <b>just</b>. Ставим его между have и третьей формой.`,
        lit: [['I', 'я'], ['have', '(помощник)'], ['just', 'только что'], ['had', 'поел'], ['lunch', 'обед']],
        ex: [['— Are you hungry? — No, I’ve just had lunch.', '— Ты голоден? — Нет, я только что пообедал.'], ['Sorry, Max has just gone.', 'Извини, Макс только что ушёл.'], ['The stream has just started.', 'Стрим только что начался.']] },
      { t: 'check', q: 'The bus ___ left. We can’t catch it.', ru: 'Автобус только что ушёл. Мы на него не успеем.', o: ['has just', 'just has', 'have just'], a: 0,
        why: 'just — между has и третьей формой; the bus → has.' },
      { t: 'idea', text: `«Уже» — <b>already</b>: случилось раньше, чем ждали. Место то же — между have и третьей формой.`,
        ex: [['It’s only nine, and Kate has already gone to bed.', 'Только девять, а Кейт уже легла.'], ['— This is Emma. — I know. We’ve already met.', '— Это Эмма. — Знаю, мы уже знакомы.'], ['Sorry, I’ve already watched it.', 'Извини, я уже посмотрел.']],
        bad: 'I have finished already it. / She already has gone.', good: 'I have <b>already</b> finished it. / She has <b>already</b> gone.',
        tip: `just — как лента «1 минуту назад». already — «опа, уже!», быстрее, чем думали.` },
      { t: 'check', q: 'Выберите правильный порядок: «Я уже закончил это»', o: ['I have finished already it.', 'I have already finished it.', 'I already have finished it.'], a: 1,
        why: 'already стоит между have и третьей формой.' },
      { t: 'idea', text: `Итог: just и already — в середине.`,
        rows: [['только что', 'have / has + just + третья форма'], ['уже', 'have / has + already + третья форма']] }
    ]},

    // ───────────── 7. yet ─────────────
    { title: '«Ещё не» и «уже?»: yet', steps: [
      { t: 'idea', text: `Хотите сказать «Я ещё не закончил» (но скоро закончу). Ставим haven’t, а в самый <b>конец</b> — <b>yet</b>.`,
        lit: [['I', 'я'], ['haven’t', 'не'], ['finished', 'закончил'], ['yet', 'ещё']],
        ex: [['I haven’t finished yet.', 'Я ещё не закончил.'], ['The film hasn’t started yet.', 'Фильм ещё не начался.'], ['We haven’t eaten yet.', 'Мы ещё не ели.']] },
      { t: 'idea', text: `В вопросе yet значит «<b>уже?</b>» — и тоже в конце. Короткий ответ: <b>Not yet.</b> — Ещё нет.`,
        ex: [['Have you seen the new trailer yet?', 'Ты уже видел новый трейлер?'], ['Has Kate called yet?', 'Кейт уже звонила?'], ['— Have you finished yet? — Not yet.', '— Ты уже закончил? — Ещё нет.']],
        tip: `Already в вопросе — это удивление: Have you already finished? Wow! — «Как, ты уже?!» Обычное «уже?» — yet.` },
      { t: 'check', q: '— Have you paid the bill ___? — No, not yet.', ru: '— Ты уже оплатил счёт? — Нет, ещё нет.', o: ['already', 'yet', 'just'], a: 1,
        why: 'Обычный вопрос «уже?» → yet в конце.' },
      { t: 'idea', text: `yet бывает только с <b>не</b> или в <b>вопросе</b>, и только в конце. И обратите внимание: с yet здесь нужен have, а не did из A1.`,
        bad: 'I didn’t decide yet. / Did you finish yet? / I haven’t yet finished.', good: 'I <b>haven’t decided</b> yet. / <b>Have</b> you <b>finished</b> yet? / I haven’t finished <b>yet</b>.' },
      { t: 'check', q: 'Скажите: «Я ещё не решил»', o: ['I didn’t decide yet.', 'I haven’t decided yet.', 'I have decided yet.'], a: 1,
        why: '«Ещё не» к сейчас → haven’t + третья форма, yet в конце. Без not yet не ставим.' },
      { t: 'idea', text: `Итог: yet — в конце, только с «не» или в вопросе.`,
        rows: [['ещё не', 'I haven’t finished yet.'], ['уже?', 'Have you finished yet?'], ['ещё нет', 'Not yet.']] }
    ]},

    // ───────────── 8. still, и yet / already без have ─────────────
    { title: '«Всё ещё»: still. И yet / already без have', steps: [
      { t: 'idea', text: `Хотите сказать «Всё ещё идёт дождь». «Всё ещё» — <b>still</b>: как было, так и есть, ничего не изменилось.`,
        lit: [['It', '(оно)'], ['is', 'есть'], ['still', 'всё ещё'], ['raining', 'идёт дождь']],
        ex: [['I ate a pizza, but I’m still hungry.', 'Я съел пиццу, но всё ещё голоден.'], ['Do you still live in Kazan?', 'Ты всё ещё живёшь в Казани?']],
        rows: [['после am / is / are', 'She is still at work.'], ['перед словом-действием', 'He still plays that game.'], ['после have / has', 'I’ve already seen it. / I’ve still got it.']],
        tip: `still и already стоят как just: после am / is / are и have, но перед обычным словом-действием. I’ve still got it — «он всё ещё у меня».` },
      { t: 'check', q: 'The download started an hour ago, and it’s ___ going.', ru: 'Скачивание началось час назад и всё ещё идёт.', o: ['yet', 'still', 'already'], a: 1,
        why: 'Процесс продолжается, ничего не изменилось → still.' },
      { t: 'idea', text: `yet и already работают не только с have. С am / is / are и do тоже: «ещё не» — yet в конце, «уже» — already.`,
        ex: [['Emma isn’t here yet.', 'Эммы ещё нет. (скоро будет)'], ['I don’t know yet.', 'Я пока не знаю.'], ['He’s already here.', 'Он уже здесь.'], ['Don’t explain. I already know.', 'Не объясняй, я уже знаю.']] },
      { t: 'check', q: 'Where is he? — I don’t know. He isn’t here ___.', ru: 'Где он? — Не знаю. Его ещё нет.', o: ['still', 'yet', 'just'], a: 1,
        why: '«Ещё нет» (но должен прийти) → yet в конце.' },
      { t: 'idea', text: `still и yet — две стороны одного. «Она ещё не ушла» = «Она всё ещё здесь». Но в фразе без not — только still.`,
        rows: [['She hasn’t gone yet.', 'She’s still here.'], ['I haven’t finished yet.', 'I’m still working.']],
        bad: 'She is yet here. / I yet play this game.', good: 'She is <b>still</b> here. / I <b>still</b> play this game.' },
      { t: 'check', q: 'She hasn’t gone yet. = She’s ___ here.', ru: 'Она ещё не ушла. = Она всё ещё здесь.', o: ['yet', 'still', 'already'], a: 1,
        why: 'Без not «всё ещё» — только still.' },
      { t: 'idea', text: `Итог урока: have / has + третья форма — прошлое с итогом сейчас; just и already — в середине, yet — в конце, still — «всё ещё».`,
        rows: [['итог сейчас', 'I’ve lost my keys.'], ['только что / уже', 'I’ve just / already finished.'], ['ещё не / всё ещё', 'I haven’t finished yet. / I’m still working.']] }
    ]}
  ];
})();
