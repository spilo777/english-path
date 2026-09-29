// Грамматика по шагам для юнита b1-11: прошедшая форма после if и wish — «шаг от реальности»; if I find или if I found — решает оценка шанса, I’d be surprised if…; would только в одной половине, could и might вместо would, could в обеих половинах; фантазия о настоящем — «переворачиваем факт»; if I were / if I was, If I were you; I wish I knew — «жаль, что…» без not; glad или wish; What if…, Suppose…, It would be great if…, I would if I could; типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'b1-11'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Прошедшая форма — «шаг в сторону», а не назад', steps: [
      { t: 'idea', text: `Вы уже знаете (урок A2-20): <b>if I have</b> — «если будет», <b>if I had…, I’d…</b> — «если бы». Теперь тоньше: одно и то же событие можно сказать обоими способами — и смысл будет разный.`,
        ex: [['If I find your headphones, I’ll text you.', 'Если найду твои наушники, напишу. (вполне может быть)'], ['If you found a wallet in the street, what would you do?', 'Если бы ты нашёл кошелёк (wallet) на улице, что бы ты сделал? (просто представляем)']] },
      { t: 'idea', text: `Тот же сигнал работает после <b>wish</b> (желать, хотеть, чтобы было иначе). Форма прошедшая — knew, а говорим о <b>сейчас</b>: сейчас не знаю, и мне жаль.`,
        lit: [['I wish', 'жаль, что / вот бы'], ['I', 'я'], ['knew', '(бы) знал'], ['his nickname', 'его ник']],
        ex: [['I wish I knew his nickname.', 'Жаль, что я не знаю его ник.'], ['I wish we could fly!', 'Вот бы мы умели летать!']],
        tip: `Прошедшая форма после if и wish — это шаг <b>в сторону</b> от реальности, а не шаг назад во времени.` },
      { t: 'check', q: 'I wish I knew the answer. — это про какое время?', ru: 'Вот бы знать ответ.', o: ['Про прошлое: я не знал ответ.', 'Про сейчас: я не знаю ответ, и мне жаль.', 'Про будущее: я узнаю ответ.'], a: 1,
        why: 'После wish прошедшая форма говорит о настоящем: сейчас не знаю — жаль.' },
      { t: 'idea', text: `Итог: после if и wish прошедшая форма значит «на самом деле не так», а время — сейчас или потом.`,
        rows: [['может быть по-настоящему', 'If I find it, I’ll text you.'], ['не по-настоящему', 'If I found it, I’d… / I wish I knew…']] }
    ]},

    // ───────────── 2. If I find или if I found ─────────────
    { title: 'If I find или if I found: решает ваша оценка шанса', steps: [
      { t: 'idea', text: `Считаете, что это реально может случиться, — <b>if + настоящее, will</b>. Не ждёте этого, фантазируете или «вряд ли» — <b>if + прошедшее, would</b>.`,
        rows: [['Макс живёт рядом', 'If Max comes on Friday, we’ll play together.'], ['Макс живёт в Канаде', 'If Max came on Friday, we’d play together.']],
        ex: [['I think I left my charger at your place. If you find it, can you text me?', 'Кажется, я оставил зарядку у тебя. Если найдёшь, напишешь? (скорее всего, найдёт)'], ['If you found a phone on the bus, would you give it to the driver?', 'Если бы ты нашёл телефон в автобусе, отдал бы водителю? (вопрос «на подумать»)']] },
      { t: 'idea', text: `Если сказать фантазию через will, звучит так, будто вы правда этого ждёте. Про лотерею (lottery) — почти всегда прошедшая форма.`,
        bad: 'If I won the lottery, I’ll buy an island.', good: 'If I <b>won</b> the lottery, I<b>’d</b> buy an island.',
        tip: `Спросите себя: «Я правда думаю, что это будет?» Да → find, will. Нет → found, would.` },
      { t: 'check', q: 'I never buy lottery tickets. If I ___ a million, I’d quit my job.', ru: 'Я никогда не покупаю лотерейные билеты. Если бы я выиграл миллион, я бы уволился (quit).', o: ['win', 'won', 'will win'], a: 1,
        why: 'Вы этого не ждёте, и во второй половине I’d → if + прошедшая форма: won.' },
      { t: 'check', q: 'Anna often visits us. If she ___ tomorrow, I’ll show her the new design.', ru: 'Анна часто к нам заходит. Если она придёт завтра, я покажу ей новый дизайн.', o: ['comes', 'came', 'would come'], a: 0,
        why: 'Вполне реально, и во второй половине I’ll → if + настоящее: comes.' },
      { t: 'idea', text: `Полезная фраза: <b>I’d be surprised if…</b> — «я бы удивился, если бы…». Её говорят, когда ждут <b>обратного</b>. Сильнее — <b>I’d be amazed if…</b> (я был бы поражён).`,
        ex: [['I’d be surprised if the update came out on time.', 'Я бы удивился, если бы обнова вышла вовремя. (думаю, задержат)'], ['I’d be amazed if they didn’t win the tournament.', 'Я был бы поражён, если бы они не выиграли турнир. (думаю, выиграют)'], ['If there was a zombie apocalypse tomorrow, who would you want on your team?', 'Если бы завтра начался зомби-апокалипсис, кого бы ты взял в команду?']] },
      { t: 'check', q: 'The bus is always late. I’d be surprised if it ___ on time today.', ru: 'Автобус всегда опаздывает. Я бы удивился, если бы он сегодня пришёл вовремя.', o: ['came', 'will come', 'would come'], a: 0,
        why: 'I’d be surprised if… — фантазия → после if прошедшая форма: came.' },
      { t: 'idea', text: `Итог: не грамматика решает, а вы — насколько реален шанс.`,
        rows: [['реально', 'if + настоящее → will'], ['вряд ли / фантазия', 'if + прошедшее → would'], ['жду обратного', 'I’d be surprised if + прошедшее']] }
    ]},

    // ───────────── 3. would — только в одной половине; could и might ─────────────
    { title: 'would — только в одной половине; could и might', steps: [
      { t: 'idea', text: `Вы уже знаете: в if-половине <b>would не ставим</b>. Там его работу делает прошедшая форма, а would живёт только во второй половине.`,
        bad: 'If somebody would steal my phone, I would call the police.', good: 'If somebody <b>stole</b> my phone, I would call the police.',
        ex: [['I’d be really angry if somebody hacked my account.', 'Я бы очень разозлился, если бы кто-то взломал мой аккаунт.']] },
      { t: 'check', q: 'If you ___ a famous actor in a café, would you ask for a photo?', ru: 'Если бы ты встретил знаменитого актёра в кафе, ты бы попросил фото?', o: ['would meet', 'met', 'will meet'], a: 1,
        why: 'В if-половине would и will не бывает → прошедшая форма met.' },
      { t: 'idea', text: `Во второй половине вместо would можно поставить <b>could</b> (смог бы, была бы возможность) или <b>might</b> (может быть, стал бы — я не уверен).`,
        rows: [['would', 'сделал бы', 'If I had a better PC, I’d stream in 4K.'], ['could', 'смог бы', 'If it stopped raining, we could go for a walk.'], ['might', 'может, и стал бы', 'If I got a bonus, I might take a week off.']],
        ex: [['If we left right now, we might catch the last train.', 'Если бы мы вышли прямо сейчас, может, и успели бы на последнюю электричку.'], ['I’m not tired. If I went to bed now, I wouldn’t sleep.', 'Я не устал. Если бы я сейчас лёг, я бы не уснул.']] },
      { t: 'check', q: 'If I got a bonus, I ___ take a week off — I’m not sure yet.', ru: 'Если бы я получил премию (bonus), может, и взял бы неделю отпуска — пока не уверен.', o: ['will', 'might', 'must'], a: 1,
        why: '«Может быть, стал бы», не уверен → might.' },
      { t: 'idea', opt: true, text: `could бывает и в if-половине — тогда оно значит «если бы умел / мог». Во второй половине — «смог бы».`,
        rows: [['вторая половина', 'She could get a job there… — смогла бы'], ['if-половина', '…if she could speak English. — если бы умела']],
        ex: [['She could get a job in that studio if she could speak English.', 'Она могла бы получить работу в той студии, если бы говорила по-английски.']] },
      { t: 'idea', text: `Итог: if-половина — прошедшая форма, вторая — would, could или might.`,
        rows: [['If + прошедшая форма', 'If it stopped raining,'], ['would / could / might + слово-действие', 'we could go for a walk.']] }
    ]},

    // ───────────── 4. Переворачиваем факт ─────────────
    { title: 'Фантазия о настоящем: переворачиваем факт', steps: [
      { t: 'idea', text: `Часто «если бы» — это факт наоборот. Факт: I don’t know Korean. Переворачиваем в прошедшую форму: don’t know → <b>knew</b>. Добавляем вторую половину с would.`,
        lit: [['If', 'если бы'], ['I', 'я'], ['knew', 'знал'], ['Korean,', 'корейский,'], ['I’d watch', 'я бы смотрел'], ['dramas', 'дорамы'], ['without subtitles', 'без субтитров']],
        ex: [['If I knew Korean, I’d watch dramas without subtitles.', 'Если бы я знал корейский, смотрел бы дорамы без субтитров (subtitles).']] },
      { t: 'idea', text: `Так переворачивается любой факт: have to → didn’t have to, can’t → could, is → wasn’t, there are → there weren’t.`,
        rows: [['I have to work tomorrow.', 'If I didn’t have to work tomorrow, I’d finish the season.'], ['He can’t drive.', 'It would be really useful if he could drive.'], ['There are so many bugs.', 'If there weren’t so many bugs, it would be a perfect game.']] },
      { t: 'check', q: 'I can’t draw. If I ___ draw, I’d make my own game.', ru: 'Я не умею рисовать. Если бы умел, сделал бы свою игру.', o: ['can', 'could', 'would'], a: 1,
        why: 'Факт can’t → переворачиваем в could.' },
      { t: 'idea', text: `Обе половины должны быть из одного «мира». Настоящее в if-половине и would во второй — не пара.`,
        bad: 'If I don’t have to work tomorrow, I would stay up late.', good: 'If I <b>didn’t have to</b> work tomorrow, I would stay up late.',
        ex: [['There are lots of things I’d do if I had more time.', 'Есть куча всего, что я бы сделал, будь у меня больше времени.'], ['If you were in my position, what would you do?', 'Как бы ты поступил на моём месте (position)?']] },
      { t: 'check', q: 'Скажите: «Я бы купил эту игру, если бы она не была такой дорогой»', o: ['I’d buy this game if it wasn’t so expensive.', 'I’ll buy this game if it wasn’t so expensive.', 'I’d buy this game if it isn’t so expensive.'], a: 0,
        why: 'Игра на самом деле дорогая → wasn’t, и во второй половине would (’d).' },
      { t: 'idea', text: `Итог: берём факт, переворачиваем, ставим в прошедшую форму — и добавляем would.`,
        rows: [['факт', 'I don’t have much time.'], ['если бы', 'If I had more time, I’d…']] }
    ]},

    // ───────────── 5. If I were или if I was ─────────────
    { title: 'If I were или if I was', steps: [
      { t: 'idea', text: `Вы уже знаете: в «если бы» подходят и was, и were. Разница в том, как звучит: <b>were</b> — нейтрально, его ставят со всеми (I, he, it). <b>was</b> — разговорнее. В письме и на экзаменах надёжнее were.`,
        rows: [['разговорно', 'I’d go for a run if it wasn’t so cold.'], ['нейтрально, в письме', 'I’d go for a run if it weren’t so cold.']],
        ex: [['If Anna were here, she’d fix this layout in five minutes.', 'Будь Анна здесь, она бы поправила макет за пять минут.'], ['If the server were faster, we wouldn’t lag all the time.', 'Если бы сервер был быстрее, у нас бы не лагало постоянно.']] },
      { t: 'idea', text: `Самая частая форма совета — <b>If I were you</b> (на твоём месте). Запомните её целиком, как одно слово. Похожая фраза — <b>in your shoes</b> (дословно «в твоих ботинках»).`,
        ex: [['If I were you, I’d take the offer.', 'На твоём месте я бы принял это предложение (offer).'], ['I wouldn’t worry if I were in your shoes.', 'На твоём месте я бы не переживал.']],
        bad: 'If I would be rich, I’d travel.', good: 'If I <b>were</b> rich, I’d travel.' },
      { t: 'check', q: 'I’d play with you if my internet ___ so slow.', ru: 'Я бы поиграл с тобой, если бы мой интернет не был таким медленным.', o: ['isn’t', 'weren’t', 'wouldn’t be'], a: 1,
        why: 'Интернет на самом деле медленный, во второй половине I’d → weren’t (или wasn’t).' },
      { t: 'check', q: 'Скажите: «На твоём месте я бы ей позвонил»', o: ['If I am you, I’d call her.', 'If I were you, I’d call her.', 'If I would be you, I’d call her.'], a: 1,
        why: 'Совет «на твоём месте» → If I were you.' },
      { t: 'idea', text: `Итог: в «если бы» — were со всеми (was — разговорно), совет — If I were you.`,
        rows: [['if it were / was', 'если бы было'], ['If I were you, I’d…', 'на твоём месте я бы…']] }
    ]},

    // ───────────── 6. I wish I knew ─────────────
    { title: 'I wish I knew — «жаль, что…», «вот бы…»', steps: [
      { t: 'idea', text: `Хотите сказать: «Жаль, что у меня нет второго монитора». По-английски: <b>I wish</b> + прошедшая форма. Работает как if: та же форма, тот же смысл «на самом деле нет».`,
        lit: [['I wish', 'вот бы / жаль, что'], ['I', 'у меня'], ['had', '(бы) был'], ['a second monitor', 'второй монитор']],
        ex: [['I wish I had a second monitor.', 'Жаль, что у меня нет второго монитора.'], ['I wish you lived closer.', 'Жаль, что ты живёшь так далеко.'], ['I wish it were Friday.', 'Вот бы сейчас была пятница.']] },
      { t: 'idea', text: `Главная ловушка: русское «жаль, что <b>не</b>…» → по-английски <b>без not</b>. Ведь после wish вы говорите, как <b>хотите</b>, чтобы было.`,
        bad: 'I wish I didn’t know his number. (= жаль, что не знаю)', good: 'I wish I <b>knew</b> his number.',
        tip: `Читайте I wish как «вот бы»: вот бы я знал его номер → I wish I knew.` },
      { t: 'check', q: 'Скажите: «Жаль, что я не говорю по-японски»', o: ['I wish I don’t speak Japanese.', 'I wish I spoke Japanese.', 'I wish I didn’t speak Japanese.'], a: 1,
        why: 'Хотите, чтобы было «говорю» → wish + spoke, без not.' },
      { t: 'idea', text: `Переворачиваем факт, как с if: can’t → could, have to → didn’t have to, there are → weren’t. И после wish, как после if, — никакого would.`,
        rows: [['I can’t draw.', 'I wish I could draw.'], ['I have to get up early.', 'I wish I didn’t have to get up early.'], ['There are so many ads.', 'I wish there weren’t so many ads.']],
        bad: 'I wish I would have a cat.', good: 'I wish I <b>had</b> a cat.' },
      { t: 'check', q: 'I wish I ___ help you, but I’m really busy.', ru: 'Жаль, что я не могу тебе помочь, но я очень занят.', o: ['can', 'could', 'would'], a: 1,
        why: 'Факт can’t → после wish could.' },
      { t: 'idea', text: `Итог: жалею о настоящем → I wish + прошедшая форма, без not там, где по-русски «не».`,
        rows: [['жаль, что не знаю', 'I wish I knew.'], ['жаль, что не могу', 'I wish I could.'], ['вот бы не надо было', 'I wish I didn’t have to.']] }
    ]},

    // ───────────── 7. glad или wish ─────────────
    { title: 'glad или wish', steps: [
      { t: 'idea', text: `<b>glad</b> (рад) — факт хороший, и вы ему радуетесь: после glad обычное настоящее. <b>wish</b> — факта нет, вы жалеете: после wish прошедшая форма.`,
        ex: [['I’m glad I live near the park.', 'Я рад, что живу рядом с парком. (живу — и хорошо)'], ['I wish I lived near the park.', 'Жаль, что я не живу рядом с парком. (не живу)'], ['Do you ever wish you could fly?', 'Тебе никогда не хотелось уметь летать?']] },
      { t: 'check', q: 'I love my job. I’m ___ I chose design.', ru: 'Я люблю свою работу. Я рад, что выбрал дизайн.', o: ['wish', 'glad', 'sorry'], a: 1,
        why: 'Факт хороший, радуемся → glad.' },
      { t: 'idea', opt: true, text: `А «жаль, что я тогда не купил» — это сожаление о <b>прошлом</b>. Там другая форма: I wish I had bought. Её разберём в уроке B2-1.`,
        ex: [['I wish I had bought that game on sale.', 'Жаль, что я не купил ту игру со скидкой.']] },
      { t: 'idea', text: `Итог: хорошо, что так, — glad; жаль, что не так, — wish.`,
        rows: [['рад, что живу', 'I’m glad I live here.'], ['жаль, что не живу', 'I wish I lived here.']] }
    ]},

    // ───────────── 8. What if…, Suppose…, It would be great if… ─────────────
    { title: 'Живой английский: What if…, Suppose…, I would if I could', steps: [
      { t: 'idea', text: `В жизни «если бы» часто начинается не с if. <b>What if…?</b> — «а что, если…?». Правило то же: прошедшая форма — мягкое предложение-фантазия, настоящая — реальное беспокойство.`,
        ex: [['What if we moved the button to the top?', 'А что, если перенести кнопку наверх? (мягко предлагаю)'], ['What if it rains tomorrow?', 'А если завтра дождь? (правда волнуюсь)']],
        bad: 'What if we would change the colours?', good: 'What if we <b>changed</b> the colours?' },
      { t: 'idea', text: `<b>Suppose…</b> (допустим) и <b>Imagine…</b> (представь) — тоже начало фантазии. Дальше — прошедшая форма и would.`,
        ex: [['Suppose you got an offer from a big studio. Would you take it?', 'Допустим, тебе предложили работу в большой студии. Согласился бы?'], ['Imagine you could live in any game world. Which one would you choose?', 'Представь, что можешь жить в любом игровом мире. Какой бы выбрал?']] },
      { t: 'check', q: 'Suppose you ___ invisible for a day. What would you do?', ru: 'Допустим, ты бы стал невидимым (invisible) на день. Что бы ты делал?', o: ['are', 'were', 'would be'], a: 1,
        why: 'Suppose — та же фантазия, что и if → прошедшая форма were.' },
      { t: 'idea', text: `Вежливая просьба — <b>It would be great if you could…</b> Мягкое согласие — <b>I wouldn’t mind if…</b> А часто половину «если бы» вообще не произносят — она понятна из ситуации.`,
        ex: [['It would be great if you could send the files today.', 'Было бы здорово, если бы ты прислал файлы сегодня.'], ['Are you coming? — I would if I could.', 'Пойдёшь? — Пошёл бы, если бы мог.'], ['I wouldn’t do that.', 'Я бы так не делал. (= если бы я был тобой)']] },
      { t: 'check', q: 'It would be great if you ___ come a bit earlier.', ru: 'Было бы здорово, если бы ты мог прийти чуть пораньше.', o: ['could to', 'could', 'would can'], a: 1,
        why: 'It would be great if… — фантазия-просьба → could.' },
      { t: 'idea', text: `Итог: What if, Suppose, Imagine, It would be great if — всё то же «если бы» с прошедшей формой.`,
        rows: [['мягкое предложение', 'What if we changed…?'], ['представь', 'Suppose you got… Would you…?'], ['вежливая просьба', 'It would be great if you could…']] }
    ]},

    // ───────────── 9. Типичные ошибки ─────────────
    { title: 'Типичные ошибки — проверьте себя', steps: [
      { t: 'check', q: 'If I ___ the answer, I would tell you.', ru: 'Если бы я знал ответ, я бы тебе сказал.', o: ['would know', 'knew', 'know'], a: 1,
        why: 'В if-половине would не бывает, а с would во второй — прошедшая форма knew.' },
      { t: 'check', q: 'If I had more time, I ___ learn Korean.', ru: 'Если бы у меня было больше времени, я бы выучил корейский.', o: ['will', 'would', 'am going to'], a: 1,
        why: 'После if I had — вторая половина с would, не will.' },
      { t: 'check', q: 'I’m ___ here — I love this city.', ru: 'Я рад, что живу здесь, — я люблю этот город.', o: ['glad I live', 'glad I lived', 'wish I lived'], a: 0,
        why: 'Живу сейчас и радуюсь → glad + обычное настоящее: live.' },
      { t: 'check', q: 'Скажите: «Жаль, что у меня нет квартиры побольше»', o: ['I wish I would have a bigger flat.', 'I wish I had a bigger flat.', 'I wish I have a bigger flat.'], a: 1,
        why: 'После wish — прошедшая форма had, без would.' },
      { t: 'idea', text: `Итог урока: реально → if I find, I’ll…; вряд ли или фантазия → if I found, I’d / could / might…; жалею о настоящем → I wish I knew / had / were / could. И никакого would после if и wish.`,
        rows: [['реально', 'If I find it, I’ll text you.'], ['фантазия', 'If I found it, I’d…'], ['жаль, что не…', 'I wish I knew.']] }
    ]}
  ];
})();
