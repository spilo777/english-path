// Грамматика по шагам для юнита a2-12: одно отрицание на предложение (not + any… или no…), no / not any / none, nobody / nothing — anybody / anything, some- / any- / no- + body / thing / where, something new и nothing to do, every / all, everybody / everything, every day / all day, типичные ошибки.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-12'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея: одно «не» ─────────────
    { title: '«Я ничего не знаю» — одно «не» на предложение', steps: [
      { t: 'idea', text: `Хотите сказать «Я ничего не знаю». По-русски тут два «минуса»: <b>ни</b>чего и <b>не</b>. По-английски минус в предложении только <b>один</b>: don’t — и дальше слово без минуса <b>anything</b>.`,
        lit: [['I', 'я'], ['don’t', 'не'], ['know', 'знаю'], ['anything', '(что-нибудь)']],
        ex: [['I don’t know anything.', 'Я ничего не знаю.'], ['He didn’t say anything.', 'Он ничего не сказал.'], ['I can’t see anything.', 'Я ничего не вижу.']] },
      { t: 'idea', text: `Есть второй способ: минус переносим в само слово — <b>nothing</b> (ничего). Тогда у слова-действия минуса уже нет: никаких don’t и didn’t.`,
        lit: [['I', 'я'], ['know', 'знаю'], ['nothing', 'ничего']],
        ex: [['I know nothing.', 'Я ничего не знаю.'], ['He said nothing.', 'Он ничего не сказал.']],
        tip: `Оба способа правильные и значат одно и то же. В разговоре чаще первый: I don’t know anything.` },
      { t: 'idea', text: `А вот сложить оба минуса нельзя. По-русски «ничего не» — норма, а по-английски don’t + nothing звучит как ошибка.`,
        bad: 'I don’t know nothing.', good: 'I don’t know <b>anything</b>. / I know <b>nothing</b>.',
        tip: `Считайте минусы: not, n’t, nothing, nobody, no — каждый считается. В английском предложении ровно <b>один</b> минус.` },
      { t: 'check', q: 'Скажите: «Он ничего не сказал»', o: ['He didn’t say nothing.', 'He didn’t say anything.', 'He said anything.'], a: 1,
        why: 'Один минус: didn’t + anything (или said nothing).' },
      { t: 'idea', text: `Итог: русское «ничего не» по-английски — <b>один</b> минус из двух на выбор.`,
        rows: [['not + any…', 'I don’t know anything.'], ['no… без not', 'I know nothing.']] }
    ]},

    // ───────────── 2. no, not any, none ─────────────
    { title: '«Нет времени» — no, not any и none', steps: [
      { t: 'idea', text: `Хотите сказать «У нас нет молока». Можно через not: We don’t have <b>any</b> milk. А можно одним словом <b>no</b> (никакой): We have <b>no</b> milk. Смысл одинаковый.`,
        lit: [['We', 'мы'], ['have', 'имеем'], ['no', 'никакого'], ['milk', 'молока']],
        ex: [['There aren’t any bugs. = There are no bugs.', 'Багов нет.'], ['They don’t have any kids. = They have no kids.', 'У них нет детей.']] },
      { t: 'idea', text: `no особенно любит <b>have</b> и <b>there is / there are</b>. Для одной вещи no заменяет not a: There isn’t a lift = There’s no lift (лифта нет).`,
        ex: [['I have no idea.', 'Понятия не имею.'], ['There’s no time!', 'Нет времени!'], ['There’s no lift in this building.', 'В этом здании нет лифта.']] },
      { t: 'check', q: 'Everything was OK. There were ___ problems.', ru: 'Всё было нормально. Проблем не было.', o: ['any', 'no', 'none'], a: 1,
        why: 'У were нет not → минус в слове: no problems.' },
      { t: 'idea', text: `<b>none</b> — «ни одного, нисколько». Главное отличие: после none <b>ничего не ставим</b>. Чаще всего это короткий ответ на How much? / How many?`,
        ex: [['How much money have you got? — None.', 'Сколько у тебя денег? — Нисколько.'], ['How many mistakes did you find? — None.', 'Сколько ошибок нашёл? — Ни одной.'], ['I wanted some cookies, but there were none.', 'Я хотел печенья (cookies), но его не было.']],
        bad: 'I have none money.', good: 'I have <b>no</b> money.' },
      { t: 'check', q: 'How many tickets are left? — ___.', ru: 'Сколько билетов осталось? — Ни одного.', o: ['No', 'None', 'Nobody'], a: 1,
        why: 'Ответ на How many одним словом, без слова после → None.' },
      { t: 'idea', text: `Итог: no стоит <b>перед</b> словом, none — <b>вместо</b> него.`,
        rows: [['not any + слово', 'We don’t have any milk.'], ['no + слово', 'We have no milk.'], ['none (одно)', 'How much milk? — None.']] }
    ]},

    // ───────────── 3. nobody, nothing — anybody, anything ─────────────
    { title: '«Никто не пришёл» — nobody, nothing', steps: [
      { t: 'idea', text: `Для людей слова кончаются на <b>-body</b> или <b>-one</b> (это одно и то же), для вещей — на <b>-thing</b>. anybody = anyone, nobody = no-one.`,
        rows: [['люди', 'anybody / anyone', 'nobody / no-one'], ['вещи', 'anything', 'nothing']] },
      { t: 'idea', text: `Правило то же: либо not + any-слово, либо no-слово без not. Выбирайте любой, но один.`,
        lit: [['There’s', 'имеется'], ['nobody', 'никто'], ['here', 'здесь']],
        ex: [['There isn’t anybody here. = There’s nobody here.', 'Здесь никого нет.'], ['I don’t know anyone in this city.', 'Я никого не знаю в этом городе.'], ['There’s nothing in the fridge.', 'В холодильнике ничего нет.']] },
      { t: 'check', q: 'I can’t remember ___.', ru: 'Я ничего не могу вспомнить.', o: ['nothing', 'anything', 'nobody'], a: 1,
        why: 'Минус уже есть (can’t) → anything.' },
      { t: 'idea', text: `Хотите сказать «Никто не пришёл». Если слово стоит <b>первым</b>, это всегда nobody / nothing. А русское «не» просто исчезает: минус уже в nobody.`,
        lit: [['Nobody', 'никто'], ['came', 'пришёл']],
        ex: [['Nobody came.', 'Никто не пришёл.'], ['Nothing happened.', 'Ничего не случилось.'], ['Nobody lives in that house.', 'В том доме никто не живёт.']],
        bad: 'Nobody didn’t come. · Anybody came.', good: '<b>Nobody came</b>.' },
      { t: 'idea', text: `После nobody слово-действие — как после «он»: Nobody <b>knows</b>, Nobody <b>has</b> called. И nobody / nothing — готовый ответ из одного слова.`,
        ex: [['Nobody knows.', 'Никто не знает.'], ['Who did you talk to? — Nobody.', 'С кем ты говорил? — Ни с кем.'], ['What’s in the box? — Nothing.', 'Что в коробке? — Ничего.']] },
      { t: 'check', q: 'Скажите: «Никто не отвечает»', o: ['Nobody doesn’t answer.', 'Nobody answers.', 'Anybody answers.'], a: 1,
        why: 'Слово первое → Nobody, минус в нём; слово-действие как после he → answers.' },
      { t: 'idea', text: `Итог: как выбрать.`,
        rows: [['у слова-действия есть not', 'anybody / anything'], ['not нет', 'nobody / nothing'], ['слово первое или ответ одним словом', 'nobody / nothing']] }
    ]},

    // ───────────── 4. some- / any- / no- + body / thing / where ─────────────
    { title: 'Кто-то, кто-нибудь, никто — схема из кирпичиков', steps: [
      { t: 'idea', text: `Все эти слова собраны из двух кирпичиков: начало (some / any / no) + конец (-body — люди, -thing — вещи, -where — места). Одна схема — и сразу 9 слов.`,
        rows: [['some- «-то»', 'somebody · something · somewhere', 'кто-то · что-то · где-то'], ['any- «-нибудь»', 'anybody · anything · anywhere', 'кто-нибудь · что-нибудь · где-нибудь'], ['no- «ни-»', 'nobody · nothing · nowhere', 'никто · ничего · нигде']] },
      { t: 'idea', text: `Помните из A1: some — в «да», any — в «нет» и вопросе? Здесь так же. <b>some-</b> — обычная фраза «да», когда мы не знаем, кто, что или где именно.`,
        ex: [['Somebody is at the door.', 'Кто-то у двери.'], ['Kate said something, but I didn’t hear.', 'Кейт что-то сказала, но я не расслышал.'], ['Max lives somewhere near the station.', 'Макс живёт где-то у станции.']] },
      { t: 'check', q: 'My keys are ___ in the flat.', ru: 'Мои ключи где-то в квартире.', o: ['anywhere', 'somewhere', 'nowhere'], a: 1,
        why: 'Фраза «да», место неизвестно → somewhere.' },
      { t: 'idea', text: `<b>any-</b> — в вопросе и после not. В вопросе это «-нибудь», после not — «ни-».`,
        ex: [['Is anybody online?', 'Кто-нибудь в сети?'], ['Did you go anywhere in the summer?', 'Ты куда-нибудь ездил летом?'], ['I’m not going anywhere today.', 'Я сегодня никуда не иду.']],
        bad: 'Somebody knows? · I didn’t go nowhere.', good: 'Does <b>anybody</b> know? · I didn’t go <b>anywhere</b>.' },
      { t: 'check', q: 'Скажите: «Кто-нибудь знает?»', o: ['Somebody knows?', 'Does anybody know?', 'Does nobody know?'], a: 1,
        why: 'Вопрос → any-: Does anybody know?' },
      { t: 'idea', opt: true, text: `Одно исключение: если вы что-то <b>предлагаете</b> или <b>просите</b>, в вопросе берут some-. Вы ждёте ответа «да».`,
        ex: [['Would you like something to drink?', 'Хочешь чего-нибудь выпить?'], ['Can I ask you something?', 'Можно тебя кое о чём спросить?']] },
      { t: 'idea', text: `Итог: some- — «да», any- — вопрос и после not, no- — без not.`,
        rows: [['да', 'Somebody called.'], ['вопрос / not', 'Did anybody call? · Nobody… / I didn’t see anybody.'], ['no- без not', 'Nobody called.']] }
    ]},

    // ───────────── 5. something new, nothing to do ─────────────
    { title: '«Что-нибудь новое», «нечего делать»', steps: [
      { t: 'idea', text: `Хотите сказать «Давай поиграем во что-нибудь новое». Слово-признак (новый, интересный) ставим <b>после</b> something, а не перед, как обычно.`,
        lit: [['Let’s play', 'давай поиграем'], ['something', 'что-нибудь'], ['new', 'новое']],
        ex: [['Let’s play something new.', 'Давай поиграем во что-нибудь новое.'], ['Did you meet anybody interesting?', 'Ты встретил кого-нибудь интересного?'], ['It’s nothing important.', 'Ничего важного.']],
        bad: 'I want to watch new something.', good: 'I want to watch <b>something new</b>.' },
      { t: 'check', q: 'Скажите: «Пойдём куда-нибудь в другое место»', o: ['Let’s go different somewhere.', 'Let’s go somewhere different.', 'Let’s go different anywhere.'], a: 1,
        why: 'Слово-признак идёт после: somewhere different.' },
      { t: 'idea', text: `Второй «прицеп»: <b>to + слово-действие</b> — «что-то, что можно сделать».`,
        lit: [['something', 'что-нибудь'], ['to', '(чтобы)'], ['eat', 'поесть']],
        ex: [['I’m hungry. I want something to eat.', 'Я голоден. Хочу чего-нибудь поесть.'], ['Have you got anything to read?', 'У тебя есть что почитать?']] },
      { t: 'idea', text: `Русские «нечего», «негде», «не с кем» — это nothing to…, nowhere to…, nobody to… Минус один — в no-слове, у have и is его нет.`,
        ex: [['There’s nothing to do in this town.', 'В этом городе нечего делать.'], ['There’s nowhere to park here.', 'Здесь негде припарковаться.'], ['Tom has nobody to talk to.', 'Тому не с кем поговорить.']],
        tip: `I have nothing to wear! — Мне нечего надеть! Любимая фраза перед вечеринкой.` },
      { t: 'check', q: 'Скажите: «Мне нечего делать»', o: ['I don’t have nothing to do.', 'I have nothing to do.', 'I have nothing do.'], a: 1,
        why: 'nothing + to + слово-действие, и без второго not.' },
      { t: 'idea', text: `Итог: слово-признак — после, дело — через to.`,
        rows: [['something + новое', 'something new, nothing important'], ['something + to + действие', 'something to eat, nowhere to go']] }
    ]},

    // ───────────── 6. every и all ─────────────
    { title: '«Каждый» и «все»: every, all, everybody', steps: [
      { t: 'idea', text: `<b>every</b> = каждый. После него — <b>одна</b> вещь, и слово-действие как после «он»: every player <b>has</b>, не have.`,
        lit: [['Every', 'каждый'], ['player', 'игрок'], ['has', 'имеет'], ['a role', 'роль']],
        ex: [['Every level is different.', 'Каждый уровень другой.'], ['Every student passed the test.', 'Каждый студент сдал тест.']] },
      { t: 'idea', text: `<b>all</b> = все. После него — <b>много</b> (-s на конце), часто с the.`,
        rows: [['every + один', 'Every level is different.'], ['all (the) + много', 'All the levels are different.']],
        bad: 'Every houses in the street are the same.', good: 'Every <b>house</b> in the street <b>is</b> the same.' },
      { t: 'check', q: 'Every ___ different.', ru: 'Каждая игра — другая.', o: ['game is', 'games are', 'games is'], a: 0,
        why: 'После every — одна вещь: game is.' },
      { t: 'idea', text: `<b>every day</b> и <b>all day</b> — совсем разные. every day — каждый день (как часто?), all day — весь день, целый день (как долго?).`,
        rows: [['I play every day.', 'каждый день'], ['I played all day.', 'весь день']],
        tip: `Так же: every morning — каждое утро, all morning — всё утро; every night / all night.` },
      { t: 'check', q: 'It rained ___ yesterday, from morning to night.', ru: 'Вчера весь день шёл дождь, с утра до вечера.', o: ['every day', 'all day', 'all days'], a: 1,
        why: 'С утра до вечера, один день целиком → all day.' },
      { t: 'idea', text: `every- + body / thing / where: <b>everybody</b> (= everyone) — все, <b>everything</b> — всё, <b>everywhere</b> — везде. По-русски «все» — много, но everybody — как «каждый»: Everybody <b>is</b>, <b>knows</b>.`,
        ex: [['Everybody knows this song.', 'Все знают эту песню.'], ['Have you got everything you need?', 'У тебя есть всё, что нужно?'], ['I’ve looked everywhere for my headphones.', 'Я везде искал наушники.']],
        bad: 'Everybody are here.', good: 'Everybody <b>is</b> here.' },
      { t: 'check', q: 'Everyone ___ tired after the release.', ru: 'Все устали после релиза.', o: ['are', 'is', 'am'], a: 1,
        why: 'После everyone слово-действие как после he → is.' },
      { t: 'idea', text: `Итог: every и everybody — как «он», all — как «они».`,
        rows: [['every + один / everybody', 'Everybody is here. Every player has…'], ['all + много', 'All players have…'], ['every day / all day', 'каждый день / весь день']] }
    ]},

    // ───────────── 7. Типичные ошибки ─────────────
    { title: 'Ловушки: проверьте себя', steps: [
      { t: 'idea', text: `Последняя ловушка: none и nobody — оба «ноль», но на разные вопросы. How many? (сколько?) → <b>None</b>. Who? (кто?) → <b>Nobody</b> / <b>No-one</b>.`,
        rows: [['How many people came?', 'None.'], ['Who came?', 'Nobody. / No-one.']] },
      { t: 'check', q: 'Who called? — ___.', ru: 'Кто звонил? — Никто.', o: ['None', 'Nobody', 'Nothing'], a: 1,
        why: 'Вопрос Who? (кто?) о человеке → Nobody.' },
      { t: 'check', q: 'Скажите: «Некуда сесть»', o: ['There isn’t nowhere to sit.', 'There’s nowhere to sit.', 'There’s anywhere to sit.'], a: 1,
        why: 'Один минус — в nowhere; у is минуса нет.' },
      { t: 'check', q: 'Everybody ___ this game.', ru: 'Все любят эту игру.', o: ['love', 'loves', 'are love'], a: 1,
        why: 'everybody → как he → loves.' },
      { t: 'check', q: 'I worked ___ yesterday.', ru: 'Вчера я работал весь день.', o: ['every day', 'all day', 'all the days'], a: 1,
        why: 'Весь день (как долго?) → all day.' },
      { t: 'idea', text: `Итог урока: в английском один минус на предложение. some- — «да», any- — вопрос и после not, every / everybody — как «он».`,
        rows: [['один минус', 'I don’t know anything. / I know nothing.'], ['no / none', 'I have no time. — How much? None.'], ['every / all', 'every day — каждый, all day — весь']] }
    ]}
  ];
})();
