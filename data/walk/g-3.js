// Грамматика по шагам для юнита g-3: обрывки в бою (Need help!), команды и Let's, Present Continuous в бою (I'm healing), просьбы Can you…? / Can I…?, фразы «если английский слабый», сленг чата и что звучит грубо.
(function () {
  const u = COURSE.units.find((x) => x.id === 'g-3'); if (!u) return;
  u.walk = [
    // ───────────── 1. В бою говорят обрывками ─────────────
    { title: 'В бою говорят обрывками', steps: [
      { t: 'idea', text: `Хотите крикнуть команде «Нужна помощь!». В бою нет времени на полные предложения — и по-английски тоже кричат коротко: <b>Need help!</b> Начало «I» просто выкинули.`,
        lit: [['(I)', '(я)'], ['need', 'нужна'], ['help!', 'помощь!']],
        ex: [['Need help!', 'Нужна помощь!'], ['Behind you!', 'Сзади!'], ['Two enemies!', 'Два врага!']] },
      { t: 'idea', text: `Выкидывают всё, что и так понятно: I, am / is / are, «там есть». Тут английский похож на русский: мы тоже кричим «Сзади!», а не «Враг находится сзади тебя».`,
        rows: [['Need help!', 'I need help.', 'Нужна помощь!'], ['On my way!', 'I am on my way.', 'Уже бегу!'], ['Ready?', 'Are you ready?', 'Готовы?']],
        ex: [['Nice shot!', 'Классный выстрел!'], ['On my way!', 'Иду!']] },
      { t: 'check', q: 'Союзник кричит: On my way! Что он имеет в виду?', ru: 'On my way — уже бегу', o: ['Уйди с дороги', 'Уже бегу к тебе', 'Это моя дорога'], a: 1,
        why: 'On my way = I am on my way — я в пути, уже бегу.' },
      { t: 'idea', text: `Одно правило: выкидывать можно только <b>всё начало целиком</b>. Если уже сказали I — договаривайте с am: <b>I’m ready</b>. Половинка «I ready» — ошибка.`,
        bad: 'I ready.', good: 'Ready! <span class="muted">или</span> I’m ready.',
        tip: `Либо совсем коротко (Ready!), либо полностью (I’m ready). В упражнениях курса и в письмах — всегда полностью.` },
      { t: 'check', q: 'Как коротко крикнуть «Я готов!»?', o: ['I ready!', 'Ready!', 'Am ready!'], a: 1,
        why: 'Выкидываем всё начало целиком: Ready! Или полностью: I’m ready.' },
      { t: 'idea', text: `Итог: в бою — коротко, без I и без am / is / are. Начали с I — договорите до конца.`,
        rows: [['Need help!', 'Нужна помощь!'], ['On my way!', 'Уже бегу!'], ['Ready! / I’m ready.', 'Готов!']] }
    ]},

    // ───────────── 2. Команды и Let's ─────────────
    { title: 'Команды: Follow me! Don’t push! Let’s go!', steps: [
      { t: 'idea', text: `Хотите сказать «За мной!». Приказ в войсе — та же форма, что в меню игры: <b>слово-действие первым</b>. Follow — «идти за», me — «мной».`,
        lit: [['Follow', 'иди за'], ['me!', 'мной!']],
        ex: [['Follow me!', 'За мной!'], ['Cover me!', 'Прикрой меня!'], ['Fall back!', 'Отходим!'], ['Don’t push, wait!', 'Не лезь, жди!']],
        tip: `Запрет — тоже как в меню: Don’t + слово-действие. Don’t push! — Не лезь!` },
      { t: 'idea', text: `«Подожди меня» — тут одна ловушка. По-русски ждём «кого», а по-английски ждём «для кого»: <b>wait for</b> me. Без for нельзя.`,
        lit: [['Wait', 'жди'], ['for', '(для)'], ['me!', 'меня!']],
        bad: 'Wait me!', good: 'Wait <b>for</b> me!',
        ex: [['Wait for me!', 'Подожди меня!'], ['Wait for Lina.', 'Подожди Лину.'], ['Wait for respawn.', 'Жди возрождения.']] },
      { t: 'check', q: 'Скажите: «Подожди меня!»', o: ['Wait me!', 'Wait for me!', 'Wait for I!'], a: 1,
        why: 'Ждать кого-то = wait for; после for — me, а не I.' },
      { t: 'idea', text: `А если позвать всех сделать что-то <b>вместе</b>? «Погнали!», «Давайте к башне!» — это <b>Let’s</b> + слово-действие. Let’s значит «давайте мы».`,
        lit: [['Let’s', 'давайте'], ['go', 'пойдём'], ['to the tower.', 'к башне.']],
        ex: [['Let’s go!', 'Погнали!'], ['Let’s queue together.', 'Давай вместе в поиск.'], ['Let’s go to the tower.', 'Давайте к башне.']],
        bad: 'Let’s to go! / Let’s we go!', good: 'Let’s <b>go</b>!',
        tip: `Let’s = let us — «позволь нам». Поэтому «мы» второй раз не ставим, а слово-действие после Let’s — голое, без to.` },
      { t: 'check', q: 'Скажите: «Давайте подождём Лину»', o: ['Let’s wait for Lina.', 'Let’s to wait for Lina.', 'Let’s we wait Lina.'], a: 0,
        why: 'Let’s + слово-действие без to и без we; ждать кого-то = wait for.' },
      { t: 'idea', text: `«Давайте не будем лезть» — <b>Let’s not</b> + слово-действие. Не Let’s don’t: not ставится сразу после Let’s.`,
        lit: [['Let’s', 'давайте'], ['not', 'не'], ['push.', 'давить.']],
        bad: 'Let’s don’t push.', good: 'Let’s <b>not</b> push.',
        ex: [['Let’s not push. Let’s wait.', 'Давайте не будем лезть. Подождём.'], ['Let’s not go to the cave.', 'Давайте не пойдём в пещеру.']] },
      { t: 'check', q: 'Скажите: «Давайте не будем давить!»', o: ['Let’s don’t push!', 'Let’s not push!', 'Not let’s push!'], a: 1,
        why: 'С Let’s «не» = Let’s not + слово-действие.' },
      { t: 'idea', text: `Итог: приказ — слово-действие первым, запрет — Don’t, вместе — Let’s.`,
        rows: [['Follow me! / Wait for me!', 'За мной! / Подожди меня!'], ['Don’t push!', 'Не лезь!'], ['Let’s go! / Let’s not push.', 'Погнали! / Давайте не будем лезть.']] }
    ]},

    // ───────────── 3. Прямо сейчас: I'm healing! ─────────────
    { title: 'Что происходит прямо сейчас: I’m healing!', steps: [
      { t: 'idea', text: `Хотите сказать «Я лечусь, прикрой!». Это происходит <b>прямо сейчас</b>, и для этого у вас уже есть форма из урока 5: am / is / are + слово-действие с <b>-ing</b>.`,
        lit: [['I', 'я'], ['am', '(есть)'], ['healing,', 'лечащийся,'], ['cover me!', 'прикрой меня!']],
        ex: [['I’m healing, cover me!', 'Я лечусь, прикрой!'], ['They’re pushing!', 'Они давят!'], ['Lina is lagging.', 'У Лины лаги.']],
        bad: 'I healing, cover me!', good: 'I<b>’m</b> healing, cover me!',
        tip: `-ing без am / is / are — как «Я лечащийся». Маленькое слово перед -ing обязательно.` },
      { t: 'idea', text: `Кто говорит → какое слово перед -ing. Как в уроке 1: I — am, один (он, она, Лина) — is, много (они, мы, ты) — are.`,
        rows: [['I', 'am', 'I’m waiting for you.'], ['he / she, Lina', 'is', 'Lina is healing me.'], ['you / we / they', 'are', 'They’re pushing!']],
        ex: [['Where are you going?', 'Куда ты идёшь?'], ['I’m following you.', 'Я иду за тобой.']] },
      { t: 'check', q: 'Прямо сейчас они давят. Как сказать?', o: ['They push!', 'They’re pushing!', 'They pushing!'], a: 1,
        why: 'Прямо сейчас → are + -ing: They’re pushing. Без are нельзя.' },
      { t: 'check', q: 'Anna ___ healing me right now.', ru: 'Анна лечит меня прямо сейчас.', o: ['am', 'is', 'are'], a: 1,
        why: 'Anna — одна (she) → is + healing.' },
      { t: 'idea', text: `Итог: прямо сейчас = am / is / are + -ing. А «обычно, всегда» — слово-действие без -ing, как в уроке 3.`,
        rows: [['Прямо сейчас', 'I’m healing!', 'She’s healing me.'], ['Обычно', 'I play every evening.', 'She heals the team.']] }
    ]},

    // ───────────── 4. Просьбы: Can you…? Can I…? ─────────────
    { title: 'Просьбы: Can you…? Can I…?', steps: [
      { t: 'idea', text: `Хотите попросить «Можешь меня полечить?». По-русски вопрос делает голос. По-английски <b>can</b> переезжает в начало: <b>Can you</b> heal me?`,
        lit: [['Can', 'можешь'], ['you', 'ты'], ['heal', 'полечить'], ['me?', 'меня?']],
        ex: [['Can you heal me?', 'Можешь меня полечить?'], ['Can you wait for us?', 'Можешь нас подождать?'], ['Can you cover me?', 'Можешь прикрыть?']] },
      { t: 'idea', text: `«Можно мне…?» — то же самое, только <b>Can I</b>: Can I play with you? Слово-действие после can — голое, без to (урок 7).`,
        bad: 'Can I to play with you?', good: 'Can I <b>play</b> with you?',
        ex: [['Can I play with you?', 'Можно с вами поиграть?'], ['Can I heal first?', 'Можно я сначала полечусь? (first — сначала)']] },
      { t: 'check', q: 'Скажите: «Можно мне с вами поиграть?»', o: ['I can play with you?', 'Can I play with you?', 'Can I to play with you?'], a: 1,
        why: 'Вопрос: Can первым, потом I, потом слово-действие без to.' },
      { t: 'idea', text: `Кого лечить, кого прикрыть — после слова-действия ставим <b>me, him, her, us, them</b> (урок 7), а не I, he, she.`,
        bad: 'Can you heal he?', good: 'Can you heal <b>him</b>?',
        rows: [['heal me / us', 'полечи меня / нас'], ['cover him / her', 'прикрой его / её'], ['help them', 'помоги им']],
        ex: [['Can you help him?', 'Можешь ему помочь?'], ['Can you cover her?', 'Можешь её прикрыть?']] },
      { t: 'check', q: 'Can you cover ___?', ru: 'Можешь её прикрыть?', o: ['she', 'her', 'hers'], a: 1,
        why: 'После слова-действия — her, а не she.' },
      { t: 'idea', text: `Если английский пока слабый — не молчите. Пять фраз из того, что вы уже знаете, решают почти любую проблему.`,
        rows: [['Sorry, my English is not very good.', 'Извините, у меня не очень хороший английский.'], ['Can you repeat, please?', 'Можете повторить?'], ['I don’t understand.', 'Я не понимаю.']],
        ex: [['Can you write it in chat?', 'Можешь написать это в чат?'], ['No mic, sorry.', 'Нет микрофона, извините.']],
        bad: 'I not understand. / My English not good.', good: 'I <b>don’t</b> understand. / My English <b>is</b> not very good.',
        tip: `В онлайн-играх полно людей, для которых английский тоже не родной. Одна фраза про ваш английский сразу делает всех терпеливее.` },
      { t: 'check', q: 'Вы не поняли союзника. Что написать?', o: ['I not understand.', 'I don’t understand.', 'I doesn’t understand.'], a: 1,
        why: '«Не» с I — don’t: I don’t understand.' },
      { t: 'idea', text: `<b>Could you…?</b> — то же самое, что Can you…?, но мягче. Хорошо для незнакомых: Could you repeat, please?`, opt: true,
        ex: [['Could you repeat, please?', 'Не могли бы вы повторить?'], ['Could you wait, please?', 'Не могли бы вы подождать?']] },
      { t: 'idea', text: `Итог: просьба = Can + you / I + слово-действие без to. После него — me / him / her / us / them.`,
        rows: [['Can you heal me?', 'Можешь меня полечить?'], ['Can I play with you?', 'Можно с вами поиграть?'], ['I don’t understand.', 'Я не понимаю.']] }
    ]},

    // ───────────── 5. Сленг чата ─────────────
    { title: 'Сленг чата и что звучит грубо', steps: [
      { t: 'idea', text: `В чате пишут сокращениями — первыми буквами слов. Три самых главных: <b>glhf</b> в начале, <b>gg wp</b> в конце, <b>ty</b> за помощь.`,
        rows: [['glhf', 'good luck, have fun', 'удачи! (в начале)'], ['gg / wp', 'good game / well played', 'хорошая игра (в конце)'], ['ty / np', 'thank you / no problem', 'спасибо / без проблем']],
        ex: [['Hi all, glhf!', 'Всем привет, удачи!'], ['ty for the heal! — np', 'спасибо за хил! — без проблем']] },
      { t: 'idea', text: `Про то, что вы отходите: <b>brb</b> — «сейчас вернусь», <b>afk</b> — «отошёл от компьютера». Про лаги так и пишут: lag.`,
        rows: [['brb', 'be right back', 'сейчас вернусь'], ['afk', 'away from keyboard', 'отошёл'], ['lag', '—', 'лаги']],
        ex: [['brb, I need water.', 'сейчас вернусь, мне нужна вода.'], ['Where is Lina? — She is afk.', 'Где Лина? — Она отошла.']] },
      { t: 'check', q: 'Союзник пишет brb. Что делать?', ru: 'brb — сейчас вернусь', o: ['Он сдаётся — выходить', 'Он скоро вернётся — подождать', 'Он лагает — перезапустить'], a: 1,
        why: 'brb = be right back, сейчас вернусь.' },
      { t: 'idea', text: `Слова про силу: <b>op</b> — имба, слишком сильный; <b>nerf</b> — ослабить; <b>buff</b> — усилить; <b>carry</b> — тащить команду.`,
        ex: [['This skill is so op!', 'Этот навык просто имба!'], ['They need to nerf this weapon.', 'Это оружие нужно ослабить.'], ['Lina, you’re carrying us!', 'Лина, ты нас тащишь!']] },
      { t: 'idea', text: `Теперь осторожно. <b>noob</b> о себе — нормально (Sorry, I’m a noob), о другом — обзывательство. <b>ez</b> (easy — легко) после победы — насмешка над соперником.`,
        bad: 'you noob, cover me', good: 'can you cover me? ty!',
        tip: `И ещё: gg в середине проигранного матча — «всё, сдаёмся». Команду это злит. gg — только в конце.` },
      { t: 'check', q: 'Что вежливо написать сопернику после матча?', o: ['ez', 'gg wp', 'noob'], a: 1,
        why: 'gg wp — хорошая игра, хорошо сыграно. ez и noob звучат как насмешка.' },
      { t: 'idea', text: `Итог: glhf в начале, gg wp в конце, ty за помощь — и вас везде примут за своего. ez и noob о других — не пишем.`,
        rows: [['glhf', 'в начале матча'], ['gg wp', 'в конце матча'], ['ty / np', 'спасибо / без проблем']] }
    ]}
  ];
})();
