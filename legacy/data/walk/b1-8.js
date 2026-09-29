// Грамматика по шагам для юнита b1-8: одно «мочь» — много оттенков; be able to во всех формах; could или managed to («умел» и «сумел»), couldn’t везде, could с see / hear; could — «можем…», «я бы мог», «вполне возможно», couldn’t = «я бы не смог»; could have done — «мог бы, но не…»; must / can’t — уверенные догадки; must have done / can’t have done — догадки о прошлом; типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-8'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Одно «мочь» — много оттенков', steps: [
      { t: 'idea', text: `Вы уже знаете <b>can</b> (умею, можно), <b>could</b> (мог в прошлом, «не могли бы вы…») и <b>might</b> (возможно). Теперь — тонкости, где русское «мочь» по-английски звучит иначе.`,
        ex: [['I managed to find the keys.', 'Я смог (сумел) найти ключи.'], ['You could have told me!', 'Ты мог бы мне сказать!'], ['We could go to the cinema.', 'Можем сходить в кино.'], ['You must be tired.', 'Ты, должно быть, устал.'], ['He can’t have said that.', 'Он не мог этого сказать.']] },
      { t: 'check', q: 'Скажите: «Ты, должно быть, устал»', o: ['You must be tired.', 'You must tired.', 'You can’t be tired.'], a: 0,
        why: 'Уверенная догадка «должно быть» → must be.' },
      { t: 'idea', text: `Итог: can и could вы знаете, а в этом уроке — пять новых оттенков «мочь».`,
        rows: [['где can не встаёт', 'be able to'], ['сумел в этот раз', 'managed to'], ['мог бы / должно быть / не может быть', 'could have / must / can’t']] }
    ]},

    // ───────────── 2. be able to ─────────────
    { title: 'be able to — «мочь» там, где can не встаёт', steps: [
      { t: 'idea', text: `Вы уже знаете: <b>can</b> — «умею», «можно» или «так бывает». Но у can всего две формы — can и could. Ни будущего, ни have done у него нет.`,
        ex: [['You can see the sea from our window.', 'Из нашего окна видно море.'], ['You can use my charger.', 'Можешь взять мою зарядку.'], ['Life can be unfair sometimes.', 'Жизнь иногда бывает несправедливой.']] },
      { t: 'idea', text: `Хотите сказать «Завтра я смогу тебе помочь». will can — нельзя: два таких слова подряд не ставят. Вместо can берём <b>be able to</b> — «быть в состоянии».`,
        lit: [['I', 'я'], ['will', '(будущее)'], ['be able to', 'быть в состоянии'], ['help', 'помочь'], ['you', 'тебе'], ['tomorrow', 'завтра']],
        bad: 'I will can help you tomorrow.', good: 'I’ll <b>be able to</b> help you tomorrow.',
        tip: `Можно и просто I can help you tomorrow — can иногда говорит о будущем сам.` },
      { t: 'check', q: 'Скажите: «Скоро ты сможешь читать без словаря»', o: ['Soon you will can read without a dictionary.', 'Soon you’ll be able to read without a dictionary.', 'Soon you’ll able to read without a dictionary.'], a: 1,
        why: 'will can не бывает → will be able to. И be не пропускаем.' },
      { t: 'idea', text: `Тот же приём после might, must, should и после to / -ing: второе «мочь» всегда превращается в <b>be able to</b>.`,
        rows: [['might be able to', 'Tom might be able to help us.'], ['to be able to', 'I’d love to be able to draw like her.'], ['being able to', 'I love being able to work from home.']],
        ex: [['I used to be able to play for ten hours.', 'Раньше я мог играть по десять часов.'], ['You must be able to speak English.', 'Вы должны уметь говорить по-английски.']] },
      { t: 'idea', text: `И с have done: «В последнее время я не могу уснуть» — <b>haven’t been able to</b>. Помните Present Perfect (have + третья форма)? been — третья форма от be.`,
        lit: [['I', 'я'], ['haven’t been able to', 'не был в состоянии'], ['sleep', 'спать'], ['lately', 'в последнее время']],
        bad: 'I haven’t could sleep this week.', good: 'I <b>haven’t been able to</b> sleep this week.' },
      { t: 'check', q: 'I’d love ___ draw like her.', ru: 'Я бы очень хотел уметь рисовать, как она.', o: ['to can', 'to be able to', 'can'], a: 1,
        why: 'После to can не ставят → to be able to.' },
      { t: 'idea', text: `Итог: где can «не влезает» — будущее, have done, после другого такого слова или после to — ставим be able to.`,
        rows: [['будущее', 'I’ll be able to come.'], ['have done', 'I haven’t been able to sleep.'], ['после might / to', 'might be able to / to be able to']] }
    ]},

    // ───────────── 3. could или managed to ─────────────
    { title: '«Умел» и «сумел»: could или managed to', steps: [
      { t: 'idea', text: `Помните could — «мог, умел» в прошлом? Оно хорошо для умения <b>вообще</b> или для «было можно».`,
        ex: [['My grandad could fix any radio.', 'Мой дед умел чинить любое радио.'], ['At my old job we could work from anywhere.', 'На старой работе нам можно было работать откуда угодно.']] },
      { t: 'idea', text: `А «сумел <b>в этот раз</b>», «удалось» — это <b>managed to</b> (или was / were able to). Здесь could не подходит — главная ловушка для русскоговорящих.`,
        lit: [['I', 'я'], ['managed to', 'сумел'], ['find', 'найти'], ['my phone', 'свой телефон']],
        bad: 'I lost my phone, but I could find it in the evening.', good: 'I lost my phone, but I <b>managed to</b> find it in the evening.',
        ex: [['The server crashed, but I was able to save the file.', 'Сервер упал, но я успел сохранить файл.'], ['We managed to persuade Max to join us.', 'Нам удалось уговорить Макса присоединиться.']],
        tip: `Если по-русски можно сказать «удалось» — берите managed to.` },
      { t: 'check', q: 'Скажите: «Было трудно, но мы сумели решить головоломку»', o: ['It was hard, but we could solve the puzzle.', 'It was hard, but we managed to solve the puzzle.', 'It was hard, but we managed solve the puzzle.'], a: 1,
        why: 'Удалось в конкретный раз → managed to, и to не теряем.' },
      { t: 'check', q: 'When grandad was young, he ___ fix any radio.', ru: 'Когда дед был молодым, он умел чинить любое радио.', o: ['could', 'managed to', 'can'], a: 0,
        why: 'Умение вообще, не один случай → could.' },
      { t: 'idea', text: `С «не» проще: <b>couldn’t</b> подходит везде — и «не умел», и «не сумел в этот раз».`,
        ex: [['My grandad couldn’t swim.', 'Дедушка не умел плавать.'], ['I tried for an hour, but I couldn’t beat the boss.', 'Я целый час пытался, но не смог победить босса.']] },
      { t: 'idea', opt: true, text: `Исключение: с see, hear, smell, feel, remember, understand could нормально и для одного момента.`,
        ex: [['When I opened the door, I could smell smoke.', 'Открыв дверь, я почувствовал запах дыма.'], ['I could understand every word of the podcast!', 'Я понимал каждое слово подкаста!']] },
      { t: 'idea', text: `Итог: умел вообще — could; сумел в этот раз — managed to; не смог — couldn’t в обоих случаях.`,
        rows: [['умел вообще', 'He could swim.'], ['сумел, удалось', 'I managed to find it.'], ['не смог / не умел', 'I couldn’t find it.']] }
    ]},

    // ───────────── 4. could — «можем», «я бы», «вполне возможно» ─────────────
    { title: 'could — не только прошлое', steps: [
      { t: 'idea', text: `Хотите предложить: «Можем посмотреть новую серию». Это <b>could</b> — и оно про сейчас, а не про прошлое. Звучит мягче, чем can: просто идея.`,
        lit: [['We', 'мы'], ['could', 'можем (как вариант)'], ['watch', 'посмотреть'], ['the new episode', 'новую серию']],
        ex: [['What shall we do tonight? — We could watch the new episode.', 'Что будем делать вечером? — Можем посмотреть новую серию.'], ['You could ask Kate.', 'Можешь спросить Кейт.']] },
      { t: 'check', q: 'Can I suggest something? We ___ meet on Friday.', ru: 'Можно предложить? Мы могли бы встретиться в пятницу.', o: ['could', 'could to', 'managed to'], a: 0,
        why: 'Мягкое предложение → could, дальше слово-действие без to.' },
      { t: 'idea', text: `«Я бы мог», нереальное или преувеличение — только <b>could</b>, не can.`,
        ex: [['I’m so tired I could sleep for a week.', 'Я так устал, что проспал бы неделю.'], ['I could stay here forever.', 'Я бы остался здесь навсегда.']],
        bad: 'I’m so tired I can sleep for a week.', good: 'I’m so tired I <b>could</b> sleep for a week.' },
      { t: 'idea', text: `И ещё «вполне возможно» про конкретный случай — <b>could</b>. А <b>can</b> — «так бывает вообще».`,
        rows: [['вообще (can)', 'сейчас / потом (could)'], ['Online games can be addictive.', 'This game could be a hit.'], ['The weather can change fast here.', 'It’s sunny, but it could rain later.']],
        tip: `addictive — «вызывающий привыкание», a hit — «хит».` },
      { t: 'check', q: 'It’s sunny now, but it ___ rain later.', ru: 'Сейчас солнечно, но позже вполне может пойти дождь.', o: ['can', 'could', 'coulds'], a: 1,
        why: 'Конкретный случай, «сегодня позже» → could.' },
      { t: 'idea', text: `<b>couldn’t</b> про сейчас — «я бы не смог», «невозможно представить».`,
        ex: [['I couldn’t live without the internet.', 'Я бы не смог жить без интернета.'], ['Things couldn’t be better!', 'Лучше и быть не может!']] },
      { t: 'idea', text: `Итог: could — ещё и мягкое «можем…», «я бы…» и «вполне возможно».`,
        rows: [['предложение', 'We could go to the cinema.'], ['я бы', 'I could sleep for a week.'], ['вполне возможно', 'It could rain later.']] }
    ]},

    // ───────────── 5. could have done ─────────────
    { title: 'could have done — «мог бы, но не…»', steps: [
      { t: 'idea', text: `Хотите сказать «Зачем ты взял такси? Я мог бы тебя забрать». Это уже прошлое, и этого не случилось. Формула: <b>could have</b> + третья форма.`,
        lit: [['I', 'я'], ['could', 'мог бы'], ['have', '(прошлое)'], ['picked you up', 'забрать тебя']],
        ex: [['I could have picked you up.', 'Я мог бы тебя забрать.'], ['I could have gone to art school, but I chose design.', 'Я мог пойти в художку, но выбрал дизайн.']] },
      { t: 'idea', text: `Часто это упрёк: «Мог бы и сказать!». Про прошлое просто could не хватает — нужно have.`,
        bad: 'You could tell me yesterday!', good: 'You <b>could have told</b> me yesterday!' },
      { t: 'check', q: 'Скажите: «Мог бы и позвонить!»', o: ['You could call me!', 'You could have called me!', 'You could have call me!'], a: 1,
        why: 'Упрёк о прошлом → could have + третья форма (called).' },
      { t: 'idea', text: `Ещё — «могло случиться, но не случилось». Сравните сейчас и прошлое:`,
        ex: [['You were lucky. You could have broken your leg.', 'Тебе повезло. Ты мог сломать ногу.'], ['We could have won, but our healer disconnected.', 'Мы могли выиграть, но наш хилер отключился.']],
        rows: [['сейчас', 'It could be worse.'], ['в прошлом', 'It could have been worse.']] },
      { t: 'check', q: 'It was bad, but it ___ worse.', ru: 'Было плохо, но могло быть и хуже.', o: ['could be', 'could have been', 'could has been'], a: 1,
        why: 'Прошлое (was) → could have been. have не меняется на has.' },
      { t: 'idea', opt: true, text: `В речи could have звучит как «куд-ов» — <b>could’ve</b>. Поэтому иногда пишут could of — это ошибка.`,
        bad: 'I could of helped you.', good: 'I <b>could have</b> (could’ve) helped you.' },
      { t: 'idea', text: `Итог: мог бы, но не случилось — could have + третья форма.`,
        rows: [['мог бы (не сделал)', 'I could have picked you up.'], ['мог бы и сказать!', 'You could have told me!']] }
    ]},

    // ───────────── 6. must и can’t — догадки ─────────────
    { title: 'must и can’t — «должно быть» и «не может быть»', steps: [
      { t: 'idea', text: `Вы знаете must — «надо». У него есть второе значение — уверенная догадка: «должно быть», «наверняка». Как детектив: есть факты — делаем вывод.`,
        lit: [['You', 'ты'], ['must', 'должно быть'], ['be', '(есть)'], ['exhausted', 'вымотанный']],
        ex: [['You’ve been coding all day. You must be exhausted.', 'Ты весь день программировал. Ты, должно быть, вымотан.'], ['There must be an explanation.', 'Должно быть какое-то объяснение.']] },
      { t: 'idea', text: `Противоположность — <b>can’t</b>: «я уверен, что это не так». Не mustn’t: mustn’t — это «нельзя».`,
        rows: [['почти точно да', 'He must be at home.'], ['возможно', 'He might / could be at home.'], ['почти точно нет', 'He can’t be at home.']],
        bad: 'You’ve just woken up. You mustn’t be tired.', good: 'You’ve just woken up. You <b>can’t</b> be tired.' },
      { t: 'check', q: 'You’ve just had lunch. You ___ hungry again!', ru: 'Ты только что пообедал. Не может быть, что ты опять голоден!', o: ['must be', 'can’t be', 'don’t must be'], a: 1,
        why: 'Уверены, что нет → can’t be.' },
      { t: 'idea', text: `После must / can’t может стоять be + хвостик -ing (что происходит сейчас) или любое слово-действие.`,
        ex: [['Kate isn’t answering. She must be driving.', 'Кейт не отвечает. Наверняка она за рулём.'], ['He does the same task every day. He must get bored.', 'Он каждый день делает одно и то же. Ему, должно быть, скучно.'], ['You must be joking!', 'Шутишь, что ли!']] },
      { t: 'check', q: 'Kate isn’t answering. She ___.', ru: 'Кейт не отвечает. Наверняка она за рулём (прямо сейчас).', o: ['must drive', 'must be driving', 'must driving'], a: 1,
        why: 'Догадка о том, что происходит сейчас → must be + -ing.' },
      { t: 'idea', text: `Итог: уверены, что да, — must; уверены, что нет, — can’t.`,
        rows: [['должно быть', 'You must be tired.'], ['не может быть', 'That can’t be Tom.']] }
    ]},

    // ───────────── 7. must have done / can’t have done ─────────────
    { title: 'Догадки о прошлом: must have done', steps: [
      { t: 'idea', text: `Хотите сказать «Не могу найти кошелёк. Видимо, оставил в кафе». Догадка о прошлом — <b>must have</b> + третья форма.`,
        lit: [['I', 'я'], ['must', 'наверняка'], ['have', '(прошлое)'], ['left', 'оставил'], ['it', 'его'], ['in the café', 'в кафе']],
        ex: [['I must have left it in the café.', 'Видимо, я оставил его в кафе.'], ['Nobody is answering. They must have gone out.', 'Никто не открывает. Наверно, ушли.']],
        bad: 'He must went home.', good: 'He <b>must have gone</b> home.' },
      { t: 'check', q: 'I can’t find my keys. I ___ them somewhere.', ru: 'Не могу найти ключи. Наверно, я их где-то уронил.', o: ['must drop', 'must have dropped', 'must dropped'], a: 1,
        why: 'Догадка о прошлом → must have + третья форма.' },
      { t: 'idea', text: `«Не может быть, чтобы было» — <b>can’t have</b> или <b>couldn’t have</b> + третья форма.`,
        ex: [['Anna hasn’t replied. She can’t have seen my message.', 'Анна не ответила. Не может быть, чтобы она видела сообщение.'], ['There’s no evidence. It can’t have been him.', 'Улик нет. Это не мог быть он.']] },
      { t: 'check', q: 'Скажите: «Он не мог прочитать бриф» (уверены, что не читал)', o: ['He can’t have read the brief.', 'He can’t read the brief yesterday.', 'He can’t has read the brief.'], a: 0,
        why: 'Уверены, что в прошлом не было → can’t have + третья форма.' },
      { t: 'idea', text: `Про «сейчас» — must be, про прошлое — must have been. А «наверно, спал» — must have been + -ing.`,
        rows: [['сейчас', 'She must be at work.'], ['прошлое', 'She must have been at work.'], ['прошлое, процесс', 'I must have been sleeping.']] },
      { t: 'check', q: 'I didn’t hear the phone. I ___ sleeping.', ru: 'Я не слышал телефон. Наверно, я спал.', o: ['must be', 'must have been', 'must was'], a: 1,
        why: 'Прошлое → must have been, дальше -ing.' },
      { t: 'idea', text: `Итог: have + третья форма даёт тройку догадок о прошлом.`,
        rows: [['наверняка было', 'must have done'], ['могло быть / мог бы', 'could / might have done'], ['не могло быть', 'can’t / couldn’t have done']] }
    ]},

    // ───────────── 8. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'idea', text: `Почти все ошибки урока — от русского «мочь». Это самое частое место ошибок — не переживайте, потренируемся.`,
        rows: [['I will can come.', 'I’ll be able to come.'], ['I could find it after two hours.', 'I managed to find it after two hours.'], ['She mustn’t be at home.', 'She can’t be at home.']] },
      { t: 'check', q: 'I’ll ___ come on Friday.', ru: 'Я смогу прийти в пятницу.', o: ['can', 'be able to', 'able to'], a: 1,
        why: 'После will — be able to, can туда не ставят.' },
      { t: 'check', q: 'They ___ about the meeting yesterday.', ru: 'Наверно, они забыли о встрече вчера.', o: ['must forget', 'must have forgotten', 'must forgot'], a: 1,
        why: 'Догадка о прошлом → must have + третья форма.' },
      { t: 'check', q: 'She ___ at home — her car isn’t here.', ru: 'Не может быть, что она дома, — её машины нет.', o: ['must be', 'can’t be', 'can’t is'], a: 1,
        why: 'Уверены, что нет → can’t be.' },
      { t: 'idea', text: `Итог урока: где can не встаёт — be able to; «сумел» — managed to; could — «можем», «я бы»; could have done — мог, но не случилось; must / can’t (+ have done) — уверенные догадки.`,
        rows: [['сумел / смогу', 'managed to / will be able to'], ['мог бы, но не…', 'could have done'], ['должно быть / не может быть', 'must / can’t (+ have done)']] }
    ]}
  ];
})();
