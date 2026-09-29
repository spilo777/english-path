// Грамматика по шагам для юнита a1-4: помощник do, don’t / doesn’t, Do / Does…?, короткие ответы, where / what / when, be или do, in / on / at со временем.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-4'); if (!u) return;
  u.walk = [
    // ───────────── 1. Зачем нужен помощник do ─────────────
    { title: 'Слово-помощник do: зачем оно', steps: [
      { t: 'idea', text: `Хотите спросить «Ты играешь в игры?». По-русски это те же слова, только голос идёт вверх. По-английски так нельзя: в вопросе нужно слово-помощник, и для обычных слов-действий (play, work, like) это <b>do</b>.`,
        lit: [['Do', '(помощник)'], ['you', 'ты'], ['play', 'играешь'], ['games', 'в игры'], ['?', '']],
        ex: [['Do you play games?', 'Ты играешь в игры?'], ['Do you like coffee?', 'Ты любишь кофе?'], ['Do you speak English?', 'Ты говоришь по-английски?']],
        bad: 'You play games?', good: '<b>Do</b> you play games?' },
      { t: 'idea', text: `Почему так? Вспомните am / is / are: в вопросе оно прыгало вперёд — Are you tired? У слова-действия своего «is» нет, поэтому английский берёт помощника <b>do</b> и ставит его на то же место.`,
        rows: [['Are you tired?', 'are — сам себе помощник'], ['Do you work?', 'work — нужен помощник do']],
        tip: `Здесь do ничего не значит — это не «делать». Это просто сигнал: «внимание, вопрос».` },
      { t: 'check', q: 'Скажите: «Ты знаешь Тома?»', o: ['You know Tom?', 'Do you know Tom?', 'Know you Tom?'], a: 1,
        why: 'know — слово-действие, без помощника do вопрос не получается.' },
      { t: 'idea', text: `То же самое с «не». К слову-действию нельзя приклеить not напрямую — нужен помощник: do + not, коротко <b>don’t</b>.`,
        lit: [['I', 'я'], ['don’t', 'не (do + not)'], ['drink', 'пью'], ['coffee', 'кофе']],
        ex: [['I don’t drink coffee.', 'Я не пью кофе.'], ['I don’t know.', 'Я не знаю.'], ['We don’t play every day.', 'Мы не играем каждый день.']],
        bad: 'I not drink coffee.', good: 'I <b>don’t</b> drink coffee.' },
      { t: 'check', q: 'Скажите: «Я не понимаю»', o: ['I not understand.', 'I don’t understand.', 'I understand not.'], a: 1,
        why: '«не» + слово-действие = don’t перед ним. Просто not — нельзя.' },
      { t: 'idea', text: `Итог: как is у be, у слов-действий есть помощник <b>do</b>. Он нужен в вопросе и при «не», а в обычном предложении его нет.`,
        rows: [['Обычное предложение', 'I play games.'], ['Вопрос', 'Do you play games?'], ['Не', 'I don’t play games.']] }
    ]},

    // ───────────── 2. don’t / doesn’t ─────────────
    { title: 'Не: don’t и doesn’t', steps: [
      { t: 'idea', text: `В прошлом уроке у he / she / it слово-действие получало хвостик -s: he works. Тот же хвостик получает помощник: для he / she / it (Tom, my cat) — <b>doesn’t</b>, для остальных — <b>don’t</b>.`,
        rows: [['I / you / we / they', 'don’t', 'I don’t know.'], ['he / she / it, Tom, my cat', 'doesn’t', 'She doesn’t like tea.']],
        tip: `don’t = do not, doesn’t = does not. Полный вид — в письме или когда говорят строго; в разговоре почти всегда коротко.` },
      { t: 'check', q: 'Tom ___ speak English.', ru: 'Том не говорит по-английски.', o: ['don’t', 'doesn’t', 'not'], a: 1, why: 'Tom — один, он → doesn’t.' },
      { t: 'idea', text: `Хвостик -s может быть только один — и он уже в do<b>es</b>. Поэтому слово-действие после doesn’t стоит в словарном виде, без -s.`,
        bad: 'She doesn’t likes coffee.', good: 'She doesn’t <b>like</b> coffee.',
        ex: [['He doesn’t play games.', 'Он не играет в игры.'], ['My cat doesn’t sleep at night.', 'Мой кот не спит ночью.'], ['She doesn’t work here.', 'Она здесь не работает.']],
        tip: `Хвостик «уехал» вперёд: does + like, а не does + likes.` },
      { t: 'check', q: 'He doesn’t ___ here.', ru: 'Он здесь не живёт.', o: ['live', 'lives', 'living'], a: 0, why: 'После doesn’t — слово-действие без -s: live.' },
      { t: 'idea', text: `Это касается и has: после doesn’t — снова <b>have</b>. А «не делает» — doesn’t do: помощник do и «делать» do — два разных слова, оба нужны.`,
        ex: [['Anna doesn’t have a car.', 'У Анны нет машины.'], ['Max doesn’t do sport.', 'Макс не занимается спортом.']],
        bad: 'He doesn’t has a dog.', good: 'He doesn’t <b>have</b> a dog.' },
      { t: 'check', q: 'Скажите: «У Анны нет машины»', o: ['Anna doesn’t has a car.', 'Anna doesn’t have a car.', 'Anna don’t have a car.'], a: 1,
        why: 'Anna → doesn’t, а после него have без -s.' },
      { t: 'idea', text: `Итог: «не» = don’t / doesn’t перед словом-действием, а само слово-действие — без -s.`,
        rows: [['I / you / we / they', 'don’t play'], ['he / she / it', 'doesn’t play'], ['после doesn’t', 'have, do — без -s']] }
    ]},

    // ───────────── 3. Do / Does…? и короткие ответы ─────────────
    { title: 'Вопрос: Do / Does…? и короткий ответ', steps: [
      { t: 'idea', text: `В вопросе помощник идёт первым, и у него тоже два вида: <b>Do</b> для I / you / we / they и <b>Does</b> для he / she / it. Слово-действие — опять без -s.`,
        lit: [['Does', '(помощник)'], ['he', 'он'], ['work', 'работает'], ['from home', 'из дома'], ['?', '']],
        rows: [['You play games.', 'Do you play games?'], ['He works from home.', 'Does he work from home?']],
        bad: 'Does she speaks English?', good: 'Does she <b>speak</b> English?' },
      { t: 'check', q: '___ your friend play games?', ru: 'Твой друг играет в игры?', o: ['Do', 'Does', 'Is'], a: 1, why: 'your friend — один человек (он) → Does.' },
      { t: 'idea', text: `«Кто» может быть длинным — Anna, your friends, Tom and Kate. Он целиком стоит между Do / Does и словом-действием и не разрывается.`,
        bad: 'Does work Anna on Sunday?', good: 'Does <b>Anna work</b> on Sunday?',
        ex: [['Do your friends live here?', 'Твои друзья живут здесь?'], ['Do Tom and Kate play together?', 'Том и Кейт играют вместе?']],
        tip: `always / usually / often — сразу после «кто»: Do you usually get up early?` },
      { t: 'check', q: 'Скажите: «Макс работает из дома?»', o: ['Does work Max from home?', 'Does Max work from home?', 'Max works from home?'], a: 1,
        why: 'Does → Max → work. Без помощника это не вопрос.' },
      { t: 'idea', text: `Отвечать одним «Yes» по-английски суховато. Короткий ответ — «да / нет» + кто + тот же помощник: Yes, I do. No, she doesn’t.`,
        rows: [['Do you like music?', 'Yes, I do.', 'No, I don’t.'], ['Does she work here?', 'Yes, she does.', 'No, she doesn’t.'], ['Do they play?', 'Yes, they do.', 'No, they don’t.']],
        bad: 'Yes, I like.', good: 'Yes, I <b>do</b>.',
        tip: `Каким словом начали вопрос, тем и отвечаем: Do → do, Does → does.` },
      { t: 'check', q: 'Does Kate live in London? — Yes, ___.', ru: 'Кейт живёт в Лондоне? — Да.', o: ['she does', 'she is', 'she lives'], a: 0,
        why: 'Спросили Does → отвечаем does.' },
      { t: 'idea', text: `Итог: Do / Does → кто → слово-действие без -s. Короткий ответ — тем же помощником.`,
        rows: [['Вопрос', 'Do you play? / Does he play?'], ['Да', 'Yes, I do. / Yes, he does.'], ['Нет', 'No, I don’t. / No, he doesn’t.']] }
    ]},

    // ───────────── 4. Where / What / When ─────────────
    { title: 'Где? Когда? Что? Как часто?', steps: [
      { t: 'idea', text: `Хотите спросить «Где ты живёшь?». Слово-вопрос (where — где) ставим в самое начало, а дальше — уже знакомый вопрос с помощником: do you live.`,
        lit: [['Where', 'где'], ['do', '(помощник)'], ['you', 'ты'], ['live', 'живёшь'], ['?', '']],
        ex: [['Where do you live?', 'Где ты живёшь?'], ['When do you get up?', 'Когда ты встаёшь?'], ['How often do you play?', 'Как часто ты играешь?']],
        bad: 'Where you live?', good: 'Where <b>do</b> you live?' },
      { t: 'check', q: 'Скажите: «Когда ты заканчиваешь работу?»', o: ['When you finish work?', 'When do you finish work?', 'When finish you work?'], a: 1,
        why: 'Слово-вопрос → do → you → finish. Помощник не выпадает.' },
      { t: 'idea', text: `Для he / she / it — does, и слово-действие снова без -s: Where does Max work? Что-то одно (фильм, слово) — это it, значит тоже does.`,
        ex: [['Where does Max work?', 'Где работает Макс?'], ['What time does the film start?', 'Во сколько начинается фильм?'], ['What does this word mean?', 'Что значит это слово?']],
        tip: `what time — «во сколько», дословно «какое время».` },
      { t: 'check', q: 'What time ___ the film start?', ru: 'Во сколько начинается фильм?', o: ['do', 'does', 'is'], a: 1, why: 'the film — один предмет (it) → does, а start без -s.' },
      { t: 'idea', text: `Одну фразу выучите целиком: <b>What do you do?</b> — «кем ты работаешь?», а не «что ты делаешь сейчас». Первый do — помощник, второй — «делать».`,
        lit: [['What', 'что'], ['do', '(помощник)'], ['you', 'ты'], ['do', 'делаешь'], ['?', '']],
        ex: [['What do you do? — I’m a designer.', 'Кем ты работаешь? — Я дизайнер.'], ['What does Anna do? — She’s a teacher.', 'Кем работает Анна? — Она учитель.']] },
      { t: 'check', q: 'Вопрос «What do you do?» — о чём он?', ru: 'дословно: «Что ты делаешь?»', o: ['о работе', 'о том, что человек делает сейчас', 'о том, что человек любит'], a: 0,
        why: 'What do you do? — вопрос о работе, ответ: I’m a designer.' },
      { t: 'idea', text: `Итог: слово-вопрос → do / does → кто → слово-действие без -s.`,
        rows: [['Where do you live?', 'Где ты живёшь?'], ['What time does it start?', 'Во сколько начинается?'], ['What do you do?', 'Кем ты работаешь?']] }
    ]},

    // ───────────── 5. be или do ─────────────
    { title: 'be или do? Главная путаница', steps: [
      { t: 'idea', text: `Хотите сказать «Я не голоден» и «Я не хочу завтрак». По-русски «не» одно, по-английски — два разных: с am / is / are → not, со словом-действием → don’t.`,
        rows: [['I am not hungry.', 'hungry — не действие, а «какой»'], ['I don’t want breakfast.', 'want — действие']],
        bad: 'I am not like this game.', good: 'I <b>don’t</b> like this game.' },
      { t: 'idea', text: `Проверка за секунду: есть ли в предложении слово-действие (work, like, play, know)? Есть → do / does / don’t / doesn’t. Нет (какой? где? кто?) → am / is / are.`,
        rows: [['Вопрос', 'Are you tired?', 'Do you work?'], ['Не', 'She isn’t at home.', 'She doesn’t live here.'], ['Да', 'Yes, I am.', 'Yes, I do.']],
        tip: `Вместе они не встречаются никогда: «Do you are…» и «Is he play…» не бывает.` },
      { t: 'check', q: '___ they at home?', ru: 'Они дома?', o: ['Do', 'Are', 'Does'], a: 1, why: 'at home — «где?», действия нет → Are.' },
      { t: 'check', q: '___ they like this film?', ru: 'Им нравится этот фильм?', o: ['Do', 'Are', 'Does'], a: 0, why: 'like — слово-действие, they → Do.' },
      { t: 'check', q: 'Скажите: «Он здесь не работает»', o: ['He isn’t work here.', 'He doesn’t work here.', 'He not work here.'], a: 1,
        why: 'work — действие → doesn’t. isn’t — только для «какой / где / кто».' },
      { t: 'idea', text: `Итог: два набора, и они не смешиваются.`,
        rows: [['am / is / are', 'Are you…? / isn’t / Yes, I am.'], ['слово-действие', 'Do you…? / doesn’t / Yes, I do.']] }
    ]},

    // ───────────── 6. Дни недели и in / on / at ─────────────
    { title: 'В понедельник, в семь, утром: on / at / in', steps: [
      { t: 'idea', text: `Хотите сказать «Я работаю в понедельник». Дни недели пишутся с большой буквы, а русское «в» перед днём — это <b>on</b>.`,
        lit: [['I', 'я'], ['work', 'работаю'], ['on', 'в'], ['Monday', 'понедельник']],
        ex: [['I work on Monday.', 'Я работаю в понедельник.'], ['See you on Tuesday!', 'Увидимся во вторник!'], ['We play on Saturday.', 'Мы играем в субботу.']],
        tip: `Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday — все с большой буквы, как имена.` },
      { t: 'check', q: 'See you ___ Friday!', ru: 'Увидимся в пятницу!', o: ['in', 'on', 'at'], a: 1, why: 'День недели → on.' },
      { t: 'idea', text: `Точное время — <b>at</b>: at seven o’clock, at six. o’clock — «ровно», можно и без него. Ночь — тоже at: at night.`,
        ex: [['I get up at seven o’clock.', 'Я встаю в семь.'], ['The film starts at eight.', 'Фильм начинается в восемь.'], ['My cat doesn’t sleep at night.', 'Мой кот не спит ночью.']],
        tip: `at — точка на часах.` },
      { t: 'check', q: 'The film starts ___ eight o’clock.', ru: 'Фильм начинается в восемь.', o: ['in', 'on', 'at'], a: 2, why: 'Точное время → at.' },
      { t: 'idea', text: `Часть дня (утро, вечер) — <b>in</b>: in the morning, in the evening. Но если рядом день недели, побеждает on: on Friday evening.`,
        rows: [['at', 'точка на часах, ночь', 'at six, at night'], ['on', 'день', 'on Monday, on Friday evening'], ['in', 'кусок дня', 'in the morning']],
        bad: 'I work in Monday.', good: 'I work <b>on</b> Monday.',
        tip: `Выходные — готовая фраза: at the weekend (в Америке — on the weekend).` },
      { t: 'check', q: 'She drinks coffee ___ the morning.', ru: 'Она пьёт кофе утром.', o: ['in', 'on', 'at'], a: 0, why: 'Часть дня → in the morning.' },
      { t: 'idea', text: `Итог: at — часы, on — день, in — кусок дня.`,
        rows: [['at', 'at six, at night'], ['on', 'on Monday, on Friday evening'], ['in', 'in the morning, in the evening']] }
    ]}
  ];
})();
