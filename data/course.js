// Программа курса. Уровни → юниты. Каждый юнит: грамматика, слова, тексты, практика, тест.
// Типы упражнений:
//   gap    — вписать слово: {t:'gap', q:'I ___ a student.', a:['am'], hint:'be'}
//   choice — выбрать вариант: {t:'choice', q:'...', o:['..','..'], a:0}
//   order  — собрать предложение: {t:'order', a:'My name is Anna', ru:'Меня зовут Анна'}
//   tr     — перевести на английский: {t:'tr', q:'Я студент.', a:['I am a student']}
//   listen — написать услышанное: {t:'listen', say:'Good morning', a:['good morning']}

window.COURSE = {
  levels: [
    { id: 'A1', title: 'A1 — Начальный', goal: 'Читаете простые тексты, знаете базовые фразы, понимаете меню и интерфейсы игр' },
    { id: 'A2', title: 'A2 — Элементарный', goal: 'Понимаете сюжет простых игр, пишете в чат, говорите о себе и быте', soon: true },
    { id: 'B1', title: 'B1 — Средний', goal: 'Играете в большинство игр без словаря, читаете адаптированные книги, общаетесь', soon: true },
    { id: 'B2', title: 'B2 — Выше среднего', goal: 'Сложные сюжетные игры, обычные книги, сериалы, свободное общение', soon: true }
  ],

  units: [
    // ───────────────────────────── UNIT 0 ─────────────────────────────
    {
      id: 'a1-0', level: 'A1', num: 0, track: 'main',
      title: 'Старт: алфавит, числа, приветствия',
      summary: 'Английский алфавит, как читаются буквы, числа 1–10 и первые фразы.',
      grammar: [
        {
          title: 'Алфавит',
          html: `
<p>В английском 26 букв. Название буквы и звук, который она даёт в слове, часто <b>не совпадают</b>: буква <b>A</b> называется «эй», но в слове <i>cat</i> читается как «э/а».</p>
<p>Нажмите на букву, чтобы услышать, как она называется.</p>
<div class="alphabet" data-alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"></div>
<p>Сначала запоминать правила чтения не обязательно. Лучше слушайте каждое новое слово (кнопка 🔊 есть везде) и повторяйте вслух. Правила сами начнут «проступать».</p>`
        },
        {
          title: 'Несколько звуков, которых нет в русском',
          html: `
<table>
<tr><th>Буквы</th><th>Звук</th><th>Примеры</th></tr>
<tr><td><b>th</b></td><td>кончик языка между зубами, как шепелявое «с» или «з»</td><td><span class="say">thank you</span>, <span class="say">this</span></td></tr>
<tr><td><b>w</b></td><td>губы трубочкой, быстрое «уэ»</td><td><span class="say">what</span>, <span class="say">we</span></td></tr>
<tr><td><b>h</b></td><td>просто выдох, мягче русского «х»</td><td><span class="say">hello</span>, <span class="say">house</span></td></tr>
<tr><td><b>r</b></td><td>язык не вибрирует, загнут назад</td><td><span class="say">red</span>, <span class="say">run</span></td></tr>
</table>
<p class="tip">Нажимайте на подчёркнутые слова, чтобы послушать.</p>`
        },
        {
          title: 'Числа 1–10',
          html: `
<table>
<tr><td><span class="say">one</span></td><td>1</td><td><span class="say">six</span></td><td>6</td></tr>
<tr><td><span class="say">two</span></td><td>2</td><td><span class="say">seven</span></td><td>7</td></tr>
<tr><td><span class="say">three</span></td><td>3</td><td><span class="say">eight</span></td><td>8</td></tr>
<tr><td><span class="say">four</span></td><td>4</td><td><span class="say">nine</span></td><td>9</td></tr>
<tr><td><span class="say">five</span></td><td>5</td><td><span class="say">ten</span></td><td>10</td></tr>
</table>`
        },
        {
          title: 'Первые фразы',
          html: `
<table>
<tr><td><span class="say">Hello!</span> / <span class="say">Hi!</span></td><td>Привет! (hi — проще, для друзей)</td></tr>
<tr><td><span class="say">Goodbye!</span> / <span class="say">Bye!</span></td><td>До свидания! / Пока!</td></tr>
<tr><td><span class="say">Please</span></td><td>Пожалуйста (когда просите)</td></tr>
<tr><td><span class="say">Thank you!</span> / <span class="say">Thanks!</span></td><td>Спасибо!</td></tr>
<tr><td><span class="say">Sorry!</span></td><td>Извините! / Прости!</td></tr>
<tr><td><span class="say">Yes</span> / <span class="say">No</span></td><td>Да / Нет</td></tr>
<tr><td><span class="say">OK</span></td><td>Хорошо / Ладно</td></tr>
</table>`
        }
      ],
      words: [
        ['hello', 'привет, здравствуйте', 'Hello! How are you?', 'Привет! Как дела?'],
        ['hi', 'привет', 'Hi, Tom!', 'Привет, Том!'],
        ['goodbye', 'до свидания', 'Goodbye, see you!', 'До свидания, увидимся!'],
        ['bye', 'пока', 'Bye! See you tomorrow.', 'Пока! Увидимся завтра.'],
        ['yes', 'да', 'Yes, please.', 'Да, пожалуйста.'],
        ['no', 'нет', 'No, thank you.', 'Нет, спасибо.'],
        ['please', 'пожалуйста (просьба)', 'Tea, please.', 'Чай, пожалуйста.'],
        ['thank you', 'спасибо', 'Thank you very much!', 'Большое спасибо!'],
        ['sorry', 'извините, прости', 'Sorry, I am late.', 'Извините, я опоздал.'],
        ['one', 'один', 'I have one cat.', 'У меня один кот.'],
        ['two', 'два', 'Two coffees, please.', 'Два кофе, пожалуйста.'],
        ['three', 'три', 'Level three.', 'Уровень три.'],
        ['four', 'четыре', 'Four players.', 'Четыре игрока.'],
        ['five', 'пять', 'Five minutes.', 'Пять минут.'],
        ['six', 'шесть', 'Six days.', 'Шесть дней.'],
        ['seven', 'семь', 'Seven days in a week.', 'Семь дней в неделе.'],
        ['eight', 'восемь', 'Eight o\'clock.', 'Восемь часов.'],
        ['nine', 'девять', 'Nine lives.', 'Девять жизней.'],
        ['ten', 'десять', 'Ten points.', 'Десять очков.']
      ],
      texts: [
        {
          id: 't-a1-0-1', title: 'In a café', level: 'A1',
          text: `Hello!
Hi! Coffee, please.
One coffee? OK.
No, two coffees, please.
Two coffees. Thank you!
Thank you! Goodbye!
Bye!`
        }
      ],
      practice: [
        { t: 'listen', say: 'hello', a: ['hello'] },
        { t: 'listen', say: 'thank you', a: ['thank you'] },
        { t: 'listen', say: 'five', a: ['five', '5'] },
        { t: 'listen', say: 'eight', a: ['eight', '8'] },
        { t: 'choice', q: '«Спасибо» по-английски:', o: ['please', 'thank you', 'sorry'], a: 1 },
        { t: 'choice', q: '«Пожалуйста» (когда просите):', o: ['please', 'yes', 'bye'], a: 0 },
        { t: 'choice', q: 'three = ?', o: ['2', '3', '8'], a: 1 },
        { t: 'choice', q: 'seven = ?', o: ['6', '7', '9'], a: 1 },
        { t: 'gap', q: 'One, two, ___, four, five.', a: ['three'] },
        { t: 'gap', q: 'Six, seven, eight, ___, ten.', a: ['nine'] },
        { t: 'tr', q: 'Привет!', a: ['hello', 'hi'] },
        { t: 'tr', q: 'Нет, спасибо.', a: ['no thank you', 'no thanks'] }
      ],
      test: [
        { t: 'listen', say: 'goodbye', a: ['goodbye'] },
        { t: 'listen', say: 'six', a: ['six', '6'] },
        { t: 'choice', q: '«Извините» по-английски:', o: ['sorry', 'OK', 'hi'], a: 0 },
        { t: 'choice', q: 'ten = ?', o: ['1', '10', '2'], a: 1 },
        { t: 'gap', q: 'Coffee, ___. (пожалуйста)', a: ['please'] },
        { t: 'gap', q: 'Two, three, ___, five. ', a: ['four'] },
        { t: 'tr', q: 'Да, пожалуйста.', a: ['yes please'] },
        { t: 'tr', q: 'Пока!', a: ['bye', 'goodbye', 'bye bye'] }
      ]
    },

    // ───────────────────────────── UNIT 1 ─────────────────────────────
    {
      id: 'a1-1', level: 'A1', num: 1, track: 'main',
      title: 'I am, you are — глагол to be',
      summary: 'Как сказать «я студент», «она дома», «мы из России». Личные местоимения.',
      grammar: [
        {
          title: 'Зачем нужен to be',
          html: `
<p>В русском мы говорим «Я дизайнер», «Она дома». Глагол «есть/являться» пропускаем. В английском <b>так нельзя</b>: в каждом предложении должен быть глагол. Если другого глагола нет, ставим <b>be</b> (быть).</p>
<table>
<tr><th>Русский</th><th>Английский</th></tr>
<tr><td>Я дизайнер.</td><td><span class="say">I am a designer.</span></td></tr>
<tr><td>Она дома.</td><td><span class="say">She is at home.</span></td></tr>
<tr><td>Мы из России.</td><td><span class="say">We are from Russia.</span></td></tr>
</table>`
        },
        {
          title: 'Формы: am / is / are',
          html: `
<table>
<tr><th>Кто</th><th>Форма</th><th>Коротко</th></tr>
<tr><td>I (я)</td><td><b>am</b></td><td>I'm</td></tr>
<tr><td>he (он) / she (она) / it (оно, это)</td><td><b>is</b></td><td>he's / she's / it's</td></tr>
<tr><td>you (ты, вы) / we (мы) / they (они)</td><td><b>are</b></td><td>you're / we're / they're</td></tr>
</table>
<p>Правило, которое стоит запомнить: <b>I → am</b>, <b>один человек или предмет → is</b>, <b>всё остальное → are</b>.</p>
<p>В речи почти всегда используют короткие формы: <span class="say">I'm tired.</span> <span class="say">She's my friend.</span> <span class="say">We're late.</span></p>`
        },
        {
          title: 'it — для предметов и животных',
          html: `
<p>Про предметы и животных говорим <b>it</b> (не he/she): <span class="say">It is a good game.</span> <span class="say">It's cold.</span></p>
<p><b>you</b> — это и «ты», и «вы». Разницы в вежливости нет.</p>`
        },
        {
          title: 'a / an перед профессией',
          html: `
<p>Когда говорим, <i>кто</i> человек (профессия, роль), ставим <b>a</b>: <span class="say">I am a student.</span> <span class="say">She is a teacher.</span></p>
<p>Если слово начинается с гласного звука, вместо <b>a</b> пишем <b>an</b>: <span class="say">an artist</span>, <span class="say">an engineer</span>.</p>
<p>Если после be идёт прилагательное (какой?), артикль не нужен: <span class="say">I am happy.</span></p>`
        }
      ],
      words: [
        ['I', 'я', 'I am Ilya.', 'Я Илья.'],
        ['you', 'ты, вы', 'You are my friend.', 'Ты мой друг.'],
        ['he', 'он', 'He is a teacher.', 'Он учитель.'],
        ['she', 'она', 'She is at home.', 'Она дома.'],
        ['it', 'оно, это (предмет, животное)', 'It is a cat.', 'Это кот.'],
        ['we', 'мы', 'We are from Russia.', 'Мы из России.'],
        ['they', 'они', 'They are students.', 'Они студенты.'],
        ['be', 'быть (am / is / are)', 'I want to be a designer.', 'Я хочу быть дизайнером.'],
        ['student', 'студент, ученик', 'I am a student.', 'Я студент.'],
        ['teacher', 'учитель', 'She is a good teacher.', 'Она хороший учитель.'],
        ['designer', 'дизайнер', 'He is a designer.', 'Он дизайнер.'],
        ['friend', 'друг', 'Tom is my friend.', 'Том мой друг.'],
        ['name', 'имя', 'My name is Anna.', 'Меня зовут Анна.'],
        ['my', 'мой', 'This is my phone.', 'Это мой телефон.'],
        ['your', 'твой, ваш', 'What is your name?', 'Как тебя зовут?'],
        ['from', 'из, от', 'I am from Moscow.', 'Я из Москвы.'],
        ['happy', 'счастливый, довольный', 'We are happy.', 'Мы счастливы.'],
        ['tired', 'уставший', 'I am tired.', 'Я устал.'],
        ['hungry', 'голодный', 'Are you hungry?', 'Ты голоден?'],
        ['good', 'хороший', 'It is a good game.', 'Это хорошая игра.'],
        ['fine', 'хорошо, в порядке', 'I am fine, thanks.', 'Я в порядке, спасибо.'],
        ['nice', 'приятный, милый', 'Nice to meet you!', 'Приятно познакомиться!'],
        ['meet', 'встречать, знакомиться', 'Nice to meet you.', 'Приятно познакомиться.'],
        ['at home', 'дома', 'She is at home.', 'Она дома.'],
        ['at work', 'на работе', 'He is at work.', 'Он на работе.'],
        ['late', 'поздно, опоздавший', 'Sorry, I\'m late.', 'Простите, я опоздал.'],
        ['and', 'и, а', 'Tom and Anna are friends.', 'Том и Анна друзья.'],
        ['man', 'мужчина', 'He is a nice man.', 'Он приятный мужчина.'],
        ['woman', 'женщина', 'She is a smart woman.', 'Она умная женщина.'],
        ['how', 'как', 'How are you?', 'Как дела?']
      ],
      texts: [
        {
          id: 't-a1-1-1', title: 'Nice to meet you', level: 'A1',
          text: `Hi! My name is Anna. I am a student. I am from Moscow.
This is Tom. He is my friend. He is from London. He is a designer.
Tom and I are good friends. We are at work now. We are tired, but we are happy.
Hello, Anna! How are you?
I'm fine, thank you. And you?
I'm OK. I'm hungry!`
        },
        {
          id: 't-a1-1-2', title: 'My team', level: 'A1',
          text: `We are a team. We are five people.
Max is a designer. He is from Kazan.
Kate is a teacher. She is from London.
Sam and Lily are students. They are from New York.
I am a student too. My name is Ilya.
It is late. We are tired. But the game is good!`
        }
      ],
      practice: [
        { t: 'choice', q: 'I ___ a designer.', o: ['am', 'is', 'are'], a: 0 },
        { t: 'choice', q: 'She ___ my friend.', o: ['am', 'is', 'are'], a: 1 },
        { t: 'choice', q: 'We ___ from Russia.', o: ['am', 'is', 'are'], a: 2 },
        { t: 'choice', q: 'It ___ cold.', o: ['am', 'is', 'are'], a: 1 },
        { t: 'gap', q: 'They ___ students.', a: ['are'], hint: 'be' },
        { t: 'gap', q: 'He ___ at work.', a: ['is'], hint: 'be' },
        { t: 'gap', q: 'You ___ late!', a: ['are'], hint: 'be' },
        { t: 'gap', q: 'I ___ tired.', a: ['am'], hint: 'be' },
        { t: 'choice', q: 'She is ___ engineer.', o: ['a', 'an', '—'], a: 1 },
        { t: 'choice', q: 'I am ___ happy.', o: ['a', 'an', '—'], a: 2 },
        { t: 'order', a: 'My name is Anna', ru: 'Меня зовут Анна' },
        { t: 'order', a: 'We are from Moscow', ru: 'Мы из Москвы' },
        { t: 'tr', q: 'Я студент.', a: ['i am a student'] },
        { t: 'tr', q: 'Она дома.', a: ['she is at home'] },
        { t: 'tr', q: 'Они мои друзья.', a: ['they are my friends'] },
        { t: 'listen', say: 'Nice to meet you', a: ['nice to meet you'] }
      ],
      test: [
        { t: 'gap', q: 'We ___ happy.', a: ['are'], hint: 'be' },
        { t: 'gap', q: 'Tom ___ from London.', a: ['is'], hint: 'be' },
        { t: 'gap', q: 'I ___ hungry.', a: ['am'], hint: 'be' },
        { t: 'choice', q: 'Anna and Kate ___ teachers.', o: ['is', 'are', 'am'], a: 1 },
        { t: 'choice', q: 'Про кота говорим:', o: ['he', 'she', 'it'], a: 2 },
        { t: 'choice', q: 'He is ___ artist.', o: ['a', 'an', '—'], a: 1 },
        { t: 'order', a: 'She is a good teacher', ru: 'Она хороший учитель' },
        { t: 'tr', q: 'Я устал.', a: ['i am tired'] },
        { t: 'tr', q: 'Мы на работе.', a: ['we are at work'] },
        { t: 'tr', q: 'Меня зовут Илья.', a: ['my name is ilya'] },
        { t: 'listen', say: 'How are you?', a: ['how are you'] }
      ]
    },

    // ───────────────────────────── UNIT 2 ─────────────────────────────
    {
      id: 'a1-2', level: 'A1', num: 2, track: 'main',
      title: 'Is it? It isn\'t — вопросы и отрицания, this/that',
      summary: 'Как спросить «Ты дома?», сказать «Это не мой телефон», this/that, множественное число.',
      grammar: [
        {
          title: 'Отрицание: be + not',
          html: `
<p>Чтобы сказать «не», ставим <b>not</b> сразу после am/is/are.</p>
<table>
<tr><th>Полная форма</th><th>Коротко</th></tr>
<tr><td>I am not tired.</td><td><span class="say">I'm not tired.</span></td></tr>
<tr><td>She is not at home.</td><td><span class="say">She isn't at home.</span></td></tr>
<tr><td>They are not students.</td><td><span class="say">They aren't students.</span></td></tr>
</table>
<p class="tip">is not → <b>isn't</b>, are not → <b>aren't</b>. «I amn't» не бывает, только <b>I'm not</b>.</p>`
        },
        {
          title: 'Вопрос: меняем местами',
          html: `
<p>В вопросе <b>am/is/are</b> переезжает в начало:</p>
<table>
<tr><th>Утверждение</th><th>Вопрос</th></tr>
<tr><td>You are tired.</td><td><span class="say">Are you tired?</span></td></tr>
<tr><td>It is expensive.</td><td><span class="say">Is it expensive?</span></td></tr>
<tr><td>He is at home.</td><td><span class="say">Is he at home?</span></td></tr>
</table>
<p>Короткие ответы: <span class="say">Yes, I am.</span> / <span class="say">No, I'm not.</span> <span class="say">Yes, it is.</span> / <span class="say">No, it isn't.</span></p>
<p>С вопросительными словами: <span class="say">What is it?</span> (что это?) <span class="say">Where are you?</span> (где ты?) <span class="say">How old are you?</span> (сколько тебе лет?)</p>`
        },
        {
          title: 'this / that / these / those',
          html: `
<table>
<tr><th></th><th>Близко (здесь)</th><th>Далеко (там)</th></tr>
<tr><td>Один предмет</td><td><b>this</b> — этот</td><td><b>that</b> — тот</td></tr>
<tr><td>Много предметов</td><td><b>these</b> — эти</td><td><b>those</b> — те</td></tr>
</table>
<p><span class="say">This is my phone.</span> <span class="say">That car is expensive.</span> <span class="say">These games are new.</span></p>`
        },
        {
          title: 'Множественное число и a / an',
          html: `
<p>Обычно добавляем <b>-s</b>: book → books, game → games. После s, sh, ch, x добавляем <b>-es</b>: box → boxes.</p>
<p>Несколько исключений, которые надо запомнить: <span class="say">man → men</span>, <span class="say">woman → women</span>, <span class="say">child → children</span>, <span class="say">person → people</span>.</p>
<p><b>a / an</b> ставим перед одним предметом, когда говорим о нём впервые или «какой-то»: <span class="say">a phone</span>, <span class="say">an apple</span>. Во множественном числе <b>a/an</b> не ставится: <span class="say">phones</span>, <span class="say">apples</span>.</p>`
        }
      ],
      words: [
        ['this', 'этот, это (близко)', 'This is my room.', 'Это моя комната.'],
        ['that', 'тот, то (далеко)', 'That is a big house.', 'Тот дом большой.'],
        ['these', 'эти', 'These books are new.', 'Эти книги новые.'],
        ['those', 'те', 'Those people are my friends.', 'Те люди — мои друзья.'],
        ['not', 'не', 'It is not my phone.', 'Это не мой телефон.'],
        ['what', 'что, какой', 'What is this?', 'Что это?'],
        ['where', 'где, куда', 'Where are you?', 'Где ты?'],
        ['here', 'здесь, сюда', 'I am here.', 'Я здесь.'],
        ['there', 'там, туда', 'Your bag is there.', 'Твоя сумка там.'],
        ['phone', 'телефон', 'Where is my phone?', 'Где мой телефон?'],
        ['book', 'книга', 'This book is good.', 'Эта книга хорошая.'],
        ['table', 'стол', 'The phone is on the table.', 'Телефон на столе.'],
        ['chair', 'стул', 'This chair is old.', 'Этот стул старый.'],
        ['room', 'комната', 'My room is small.', 'Моя комната маленькая.'],
        ['house', 'дом (здание)', 'Their house is big.', 'Их дом большой.'],
        ['car', 'машина', 'Is that your car?', 'Это твоя машина?'],
        ['cat', 'кошка, кот', 'The cat is on the chair.', 'Кот на стуле.'],
        ['dog', 'собака', 'My dog is friendly.', 'Моя собака дружелюбная.'],
        ['apple', 'яблоко', 'An apple, please.', 'Яблоко, пожалуйста.'],
        ['big', 'большой', 'It is a big city.', 'Это большой город.'],
        ['small', 'маленький', 'The room is small.', 'Комната маленькая.'],
        ['new', 'новый', 'Is this game new?', 'Эта игра новая?'],
        ['old', 'старый', 'My laptop is old.', 'Мой ноутбук старый.'],
        ['expensive', 'дорогой', 'This phone is expensive.', 'Этот телефон дорогой.'],
        ['cheap', 'дешёвый', 'The game is cheap.', 'Игра дешёвая.'],
        ['hot', 'горячий, жаркий', 'The tea is hot.', 'Чай горячий.'],
        ['cold', 'холодный', 'It is cold today.', 'Сегодня холодно.'],
        ['on', 'на', 'The book is on the table.', 'Книга на столе.'],
        ['in', 'в', 'The cat is in the box.', 'Кот в коробке.'],
        ['people', 'люди', 'Those people are nice.', 'Те люди приятные.'],
        ['laptop', 'ноутбук', 'My laptop is on the table.', 'Мой ноутбук на столе.'],
        ['bag', 'сумка, рюкзак', 'Is this your bag?', 'Это твоя сумка?']
      ],
      texts: [
        {
          id: 't-a1-2-1', title: 'My room', level: 'A1',
          text: `This is my room. It is not big. It is small, but it is nice.
This is my table. My laptop is on the table. It is old, but it is fast.
That is my chair. It is new. It is not cheap!
Where is my cat? Is she on the chair? No, she isn't. Is she in the bag? Yes, she is!
These are my books. They are in English. Those are my games.`
        },
        {
          id: 't-a1-2-2', title: 'Where is my phone?', level: 'A1',
          text: `Anna: Tom, where is my phone?
Tom: Is it in your bag?
Anna: No, it isn't. My bag is here, but the phone is not in it.
Tom: Is it on the table?
Anna: No. The table is empty.
Tom: What is that on the chair?
Anna: Oh! That is my phone! Thank you, Tom!
Tom: No problem.`
        }
      ],
      practice: [
        { t: 'choice', q: 'She ___ at home. (нет)', o: ['isn\'t', 'aren\'t', 'not'], a: 0 },
        { t: 'choice', q: 'We ___ tired. (нет)', o: ['isn\'t', 'aren\'t', 'amn\'t'], a: 1 },
        { t: 'choice', q: '___ you hungry?', o: ['Is', 'Am', 'Are'], a: 2 },
        { t: 'choice', q: '___ it expensive?', o: ['Is', 'Are', 'Am'], a: 0 },
        { t: 'choice', q: '___ is my phone. (близко, один)', o: ['This', 'These', 'Those'], a: 0 },
        { t: 'choice', q: '___ are my friends. (далеко, много)', o: ['That', 'This', 'Those'], a: 2 },
        { t: 'gap', q: 'Is he at work? — No, he ___.', a: ['isn\'t', 'is not'] },
        { t: 'gap', q: 'Are you OK? — Yes, I ___.', a: ['am'] },
        { t: 'gap', q: 'one book — two ___', a: ['books'] },
        { t: 'gap', q: 'one man — two ___', a: ['men'] },
        { t: 'order', a: 'Where is my phone', ru: 'Где мой телефон?' },
        { t: 'order', a: 'This is not my bag', ru: 'Это не моя сумка' },
        { t: 'tr', q: 'Это дорого?', a: ['is it expensive', 'is this expensive', 'is that expensive'] },
        { t: 'tr', q: 'Я не голоден.', a: ['i am not hungry'] },
        { t: 'tr', q: 'Что это?', a: ['what is this', 'what is it', 'what is that'] },
        { t: 'listen', say: 'Where are you?', a: ['where are you'] }
      ],
      test: [
        { t: 'gap', q: 'They ___ at home. (нет, коротко)', a: ['aren\'t'] },
        { t: 'gap', q: '___ she your friend?', a: ['is'] },
        { t: 'gap', q: 'one child — two ___', a: ['children'] },
        { t: 'choice', q: '___ games are new. (близко, много)', o: ['These', 'This', 'That'], a: 0 },
        { t: 'choice', q: 'Are you tired? — No, ___.', o: ['I amn\'t', 'I\'m not', 'I not'], a: 1 },
        { t: 'choice', q: 'It is ___ apple.', o: ['a', 'an', '—'], a: 1 },
        { t: 'order', a: 'Is that your car', ru: 'Это твоя машина? (та, далеко)' },
        { t: 'tr', q: 'Кот на столе.', a: ['the cat is on the table', 'a cat is on the table'] },
        { t: 'tr', q: 'Моя комната не большая.', a: ['my room is not big'] },
        { t: 'tr', q: 'Где ты?', a: ['where are you'] },
        { t: 'listen', say: 'This is not my bag', a: ['this is not my bag'] }
      ]
    },

    // ───────────────────────────── UNIT 3 ─────────────────────────────
    {
      id: 'a1-3', level: 'A1', num: 3, track: 'main',
      title: 'I work, she works — Present Simple',
      summary: 'Как рассказать о привычках и распорядке дня. Окончание -s у he/she/it.',
      grammar: [
        {
          title: 'Когда нужен Present Simple',
          html: `
<p>Present Simple — время для того, что происходит <b>обычно, регулярно, всегда</b>: привычки, распорядок, факты.</p>
<p><span class="say">I work in an office.</span> — Я работаю в офисе (вообще, это моя работа).<br>
<span class="say">She plays games every day.</span> — Она играет в игры каждый день.<br>
<span class="say">Cats like fish.</span> — Кошки любят рыбу (факт).</p>`
        },
        {
          title: 'Форма: глагол как в словаре, но у he/she/it + s',
          html: `
<table>
<tr><th>Кто</th><th>Глагол</th></tr>
<tr><td>I / you / we / they</td><td><span class="say">I work</span>, <span class="say">they play</span></td></tr>
<tr><td>he / she / it</td><td><span class="say">he works</span>, <span class="say">she plays</span></td></tr>
</table>
<p>Главная ловушка для русскоговорящих — забыть <b>-s</b> у he/she/it. Запоминайте так: <b>«он, она, оно — хвостик s»</b>.</p>
<p class="tip">Сюда же: любое имя или одно существительное: <i>Tom works, my cat sleeps</i>.</p>`
        },
        {
          title: 'Как пишется -s',
          html: `
<table>
<tr><th>Правило</th><th>Пример</th></tr>
<tr><td>Обычно + s</td><td>work → works, read → reads</td></tr>
<tr><td>После s, sh, ch, x, o + es</td><td>watch → <b>watches</b>, go → <b>goes</b>, do → <b>does</b></td></tr>
<tr><td>Согласная + y → ies</td><td>study → <b>studies</b> (но play → plays)</td></tr>
<tr><td>Исключение</td><td>have → <b>has</b></td></tr>
</table>`
        },
        {
          title: 'Как часто: always, usually, often, sometimes, never',
          html: `
<p>Эти слова ставятся <b>перед</b> обычным глаголом, но <b>после</b> am/is/are:</p>
<p><span class="say">I usually get up at seven.</span><br><span class="say">She never drinks coffee.</span><br><span class="say">He is always late.</span></p>
<table>
<tr><td>always</td><td>всегда</td><td>100%</td></tr>
<tr><td>usually</td><td>обычно</td><td>~80%</td></tr>
<tr><td>often</td><td>часто</td><td>~60%</td></tr>
<tr><td>sometimes</td><td>иногда</td><td>~30%</td></tr>
<tr><td>never</td><td>никогда</td><td>0%</td></tr>
</table>`
        }
      ],
      words: [
        ['work', 'работать; работа', 'I work from home.', 'Я работаю из дома.'],
        ['live', 'жить', 'She lives in Moscow.', 'Она живёт в Москве.'],
        ['play', 'играть', 'We play games at night.', 'Мы играем в игры ночью.'],
        ['read', 'читать', 'He reads every evening.', 'Он читает каждый вечер.'],
        ['watch', 'смотреть (видео, фильм)', 'I watch videos on YouTube.', 'Я смотрю видео на YouTube.'],
        ['drink', 'пить', 'I drink coffee in the morning.', 'Я пью кофе утром.'],
        ['eat', 'есть, кушать', 'We eat at home.', 'Мы едим дома.'],
        ['go', 'идти, ехать', 'She goes to work by car.', 'Она ездит на работу на машине.'],
        ['get up', 'вставать (с кровати)', 'I get up at seven.', 'Я встаю в семь.'],
        ['sleep', 'спать', 'The cat sleeps all day.', 'Кот спит весь день.'],
        ['like', 'нравиться, любить', 'I like this game.', 'Мне нравится эта игра.'],
        ['love', 'любить, обожать', 'She loves music.', 'Она обожает музыку.'],
        ['want', 'хотеть', 'I want a new laptop.', 'Я хочу новый ноутбук.'],
        ['speak', 'говорить (на языке)', 'He speaks English.', 'Он говорит по-английски.'],
        ['have', 'иметь (у меня есть)', 'I have a dog.', 'У меня есть собака.'],
        ['study', 'учиться, изучать', 'I study English every day.', 'Я учу английский каждый день.'],
        ['English', 'английский язык', 'English is not hard.', 'Английский не сложный.'],
        ['coffee', 'кофе', 'A coffee, please.', 'Кофе, пожалуйста.'],
        ['tea', 'чай', 'I like green tea.', 'Я люблю зелёный чай.'],
        ['breakfast', 'завтрак', 'I have breakfast at eight.', 'Я завтракаю в восемь.'],
        ['game', 'игра', 'This game is fun.', 'Эта игра весёлая.'],
        ['every day', 'каждый день', 'I read every day.', 'Я читаю каждый день.'],
        ['morning', 'утро', 'Good morning!', 'Доброе утро!'],
        ['evening', 'вечер', 'In the evening I play games.', 'Вечером я играю в игры.'],
        ['night', 'ночь', 'Good night!', 'Спокойной ночи!'],
        ['office', 'офис', 'He works in an office.', 'Он работает в офисе.'],
        ['always', 'всегда', 'She is always happy.', 'Она всегда весёлая.'],
        ['usually', 'обычно', 'I usually get up early.', 'Я обычно встаю рано.'],
        ['often', 'часто', 'We often play together.', 'Мы часто играем вместе.'],
        ['sometimes', 'иногда', 'I sometimes drink tea.', 'Я иногда пью чай.'],
        ['never', 'никогда', 'He never eats breakfast.', 'Он никогда не завтракает.'],
        ['early', 'рано', 'I get up early.', 'Я встаю рано.']
      ],
      texts: [
        {
          id: 't-a1-3-1', title: 'Max and his day', level: 'A1',
          text: `This is Max. He is a designer. He lives in Moscow.
Max usually gets up at seven. He drinks coffee and has breakfast. He never eats a big breakfast.
He works from home. He has a big table and a new laptop. He likes his work.
In the evening Max plays games. He often plays with his friends from London. They speak English in the game.
Max studies English every day. He reads short texts and watches videos.
At night he is tired, but he is happy. He goes to bed at twelve.`
        },
        {
          id: 't-a1-3-2', title: 'My cat', level: 'A1',
          text: `I have a cat. Her name is Luna. She is small and black.
Luna sleeps all day. She sleeps on my chair, on my bag and on my laptop!
She eats fish and drinks water. She never drinks milk.
In the evening she wants to play. She always runs after my phone.
I love my cat. She is my best friend.`
        }
      ],
      practice: [
        { t: 'choice', q: 'She ___ in London.', o: ['live', 'lives', 'living'], a: 1 },
        { t: 'choice', q: 'They ___ games every day.', o: ['play', 'plays', 'playes'], a: 0 },
        { t: 'choice', q: 'My cat ___ all day.', o: ['sleep', 'sleeps', 'is sleep'], a: 1 },
        { t: 'gap', q: 'He ___ TV in the evening. (watch)', a: ['watches'] },
        { t: 'gap', q: 'She ___ to work by bus. (go)', a: ['goes'] },
        { t: 'gap', q: 'Tom ___ a new car. (have)', a: ['has'] },
        { t: 'gap', q: 'Anna ___ English. (study)', a: ['studies'] },
        { t: 'gap', q: 'I ___ coffee every morning. (drink)', a: ['drink'] },
        { t: 'choice', q: 'Правильный порядок:', o: ['I get up usually at seven.', 'I usually get up at seven.', 'Usually I get at seven up.'], a: 1 },
        { t: 'choice', q: 'Правильный порядок:', o: ['He always is late.', 'He is always late.', 'Always he late is.'], a: 1 },
        { t: 'order', a: 'She never drinks coffee', ru: 'Она никогда не пьёт кофе' },
        { t: 'order', a: 'We often play games together', ru: 'Мы часто играем в игры вместе' },
        { t: 'tr', q: 'Я работаю из дома.', a: ['i work from home', 'i work at home'] },
        { t: 'tr', q: 'Он говорит по-английски.', a: ['he speaks english'] },
        { t: 'tr', q: 'Мне нравится эта игра.', a: ['i like this game'] },
        { t: 'listen', say: 'She lives in Moscow', a: ['she lives in moscow'] }
      ],
      test: [
        { t: 'gap', q: 'He ___ in an office. (work)', a: ['works'] },
        { t: 'gap', q: 'We ___ breakfast at eight. (have)', a: ['have'] },
        { t: 'gap', q: 'My friend ___ books every day. (read)', a: ['reads'] },
        { t: 'gap', q: 'She ___ videos on YouTube. (watch)', a: ['watches'] },
        { t: 'choice', q: 'Kate ___ tea.', o: ['love', 'loves', 'lovies'], a: 1 },
        { t: 'choice', q: '«иногда»:', o: ['never', 'sometimes', 'always'], a: 1 },
        { t: 'order', a: 'I usually get up early', ru: 'Я обычно встаю рано' },
        { t: 'tr', q: 'Она живёт в Москве.', a: ['she lives in moscow'] },
        { t: 'tr', q: 'Я учу английский каждый день.', a: ['i study english every day', 'i learn english every day'] },
        { t: 'tr', q: 'У него есть собака.', a: ['he has a dog'] },
        { t: 'listen', say: 'He plays games every evening', a: ['he plays games every evening'] }
      ]
    },

    // ───────────────────────────── UNIT 4 ─────────────────────────────
    {
      id: 'a1-4', level: 'A1', num: 4, track: 'main',
      title: 'Do you…? I don\'t — вопросы и отрицания в Present Simple',
      summary: 'Как спросить «Ты играешь?» и сказать «Я не пью кофе». Дни недели и время.',
      grammar: [
        {
          title: 'Отрицание: don\'t / doesn\'t',
          html: `
<p>С обычными глаголами <b>not</b> не ставится просто так. Нужен помощник <b>do</b>:</p>
<table>
<tr><th>Кто</th><th>Отрицание</th></tr>
<tr><td>I / you / we / they</td><td><span class="say">I don't drink coffee.</span></td></tr>
<tr><td>he / she / it</td><td><span class="say">She doesn't drink coffee.</span></td></tr>
</table>
<p class="tip">Важно: после <b>doesn't</b> у глагола <b>нет -s</b>. «Хвостик» уже забрал помощник: does<b>n't</b> drink, а не <s>doesn't drinks</s>.</p>
<p>don't = do not, doesn't = does not.</p>`
        },
        {
          title: 'Вопрос: Do / Does в начале',
          html: `
<table>
<tr><th>Утверждение</th><th>Вопрос</th></tr>
<tr><td>You play games.</td><td><span class="say">Do you play games?</span></td></tr>
<tr><td>He speaks English.</td><td><span class="say">Does he speak English?</span></td></tr>
</table>
<p>Снова: после <b>Does</b> глагол без -s.</p>
<p>Короткие ответы: <span class="say">Yes, I do.</span> / <span class="say">No, I don't.</span> <span class="say">Yes, she does.</span> / <span class="say">No, she doesn't.</span></p>`
        },
        {
          title: 'С вопросительными словами',
          html: `
<p>Вопросительное слово + do/does + кто + глагол:</p>
<p><span class="say">Where do you live?</span> — Где ты живёшь?<br>
<span class="say">What do you do?</span> — Чем ты занимаешься? (кем работаешь)<br>
<span class="say">What time does the game start?</span> — Во сколько начинается игра?<br>
<span class="say">When do you get up?</span> — Когда ты встаёшь?</p>`
        },
        {
          title: 'be или do? Главная путаница',
          html: `
<p>Если в предложении <b>am/is/are</b>, помощник do не нужен. Если обычный глагол — нужен.</p>
<table>
<tr><th>С be</th><th>С обычным глаголом</th></tr>
<tr><td>Are you tired?</td><td>Do you work?</td></tr>
<tr><td>She isn't at home.</td><td>She doesn't live here.</td></tr>
</table>
<p class="tip">Ошибки вида <s>Do you are…</s> или <s>I am not like…</s> встречаются очень часто. Проверяйте: есть ли другой глагол?</p>`
        },
        {
          title: 'Дни недели и время',
          html: `
<p>Дни недели пишутся <b>с большой буквы</b> и используются с <b>on</b>: <span class="say">on Monday</span>, <span class="say">on Friday</span>.</p>
<p>Время: <b>at</b> + число: <span class="say">at seven o'clock</span>, <span class="say">at nine</span>. o'clock — «ровно, часов».</p>
<p><b>in</b> the morning / in the evening, но <b>at</b> night, <b>on</b> the weekend (амер.) / <b>at</b> the weekend (брит.).</p>`
        }
      ],
      words: [
        ['do', 'делать; вспомогательный глагол', 'What do you do?', 'Чем ты занимаешься?'],
        ['don\'t', 'не (do not)', 'I don\'t know.', 'Я не знаю.'],
        ['doesn\'t', 'не (does not, для he/she/it)', 'She doesn\'t like tea.', 'Она не любит чай.'],
        ['know', 'знать', 'Do you know him?', 'Ты его знаешь?'],
        ['understand', 'понимать', 'I don\'t understand.', 'Я не понимаю.'],
        ['start', 'начинать(ся)', 'The film starts at eight.', 'Фильм начинается в восемь.'],
        ['finish', 'заканчивать(ся)', 'I finish work at six.', 'Я заканчиваю работу в шесть.'],
        ['when', 'когда', 'When do you play?', 'Когда ты играешь?'],
        ['time', 'время; раз', 'What time is it?', 'Который час?'],
        ['o\'clock', 'ровно (о времени)', 'It is five o\'clock.', 'Сейчас пять часов.'],
        ['Monday', 'понедельник', 'I work on Monday.', 'Я работаю в понедельник.'],
        ['Tuesday', 'вторник', 'See you on Tuesday.', 'Увидимся во вторник.'],
        ['Wednesday', 'среда', 'We play on Wednesday.', 'Мы играем в среду.'],
        ['Thursday', 'четверг', 'The meeting is on Thursday.', 'Встреча в четверг.'],
        ['Friday', 'пятница', 'I love Friday!', 'Обожаю пятницу!'],
        ['Saturday', 'суббота', 'On Saturday I sleep late.', 'В субботу я сплю долго.'],
        ['Sunday', 'воскресенье', 'Sunday is a quiet day.', 'Воскресенье — тихий день.'],
        ['week', 'неделя', 'I study five days a week.', 'Я учусь пять дней в неделю.'],
        ['weekend', 'выходные', 'What do you do at the weekend?', 'Что ты делаешь на выходных?'],
        ['film', 'фильм', 'Do you like this film?', 'Тебе нравится этот фильм?'],
        ['music', 'музыка', 'She listens to music.', 'Она слушает музыку.'],
        ['listen', 'слушать', 'Listen to me!', 'Послушай меня!'],
        ['sport', 'спорт', 'He doesn\'t do sport.', 'Он не занимается спортом.'],
        ['question', 'вопрос', 'I have a question.', 'У меня есть вопрос.'],
        ['answer', 'ответ; отвечать', 'I know the answer.', 'Я знаю ответ.'],
        ['need', 'нуждаться, нужно', 'I need help.', 'Мне нужна помощь.'],
        ['help', 'помощь; помогать', 'Can you help me?', 'Можешь мне помочь?'],
        ['often', 'часто', 'Do you often play?', 'Ты часто играешь?'],
        ['city', 'город', 'Do you live in a big city?', 'Ты живёшь в большом городе?'],
        ['together', 'вместе', 'We play together.', 'Мы играем вместе.']
      ],
      texts: [
        {
          id: 't-a1-4-1', title: 'A new friend', level: 'A1',
          text: `Kate: Hi! Are you new here?
Max: Yes, I am. I'm Max. Nice to meet you.
Kate: Nice to meet you too. Where do you live, Max?
Max: I live in Moscow. And you?
Kate: I live in London. What do you do?
Max: I'm a designer. I work from home.
Kate: Cool! Do you play games?
Max: Yes, I do. I play every evening. Do you?
Kate: Yes, but I don't play every day. I work a lot. I play at the weekend.
Max: What time do you usually play?
Kate: On Saturday at eight o'clock. Do you want to play together?
Max: Yes! But my English is not very good.
Kate: That's OK. I don't speak Russian at all!`
        },
        {
          id: 't-a1-4-2', title: 'Anna\'s week', level: 'A1',
          text: `Anna is a teacher. She works from Monday to Friday.
She gets up at six o'clock. She doesn't drink coffee. She drinks tea.
On Monday and Wednesday she goes to the gym. On Tuesday and Thursday she studies Spanish.
On Friday evening she watches a film with her friends.
Anna doesn't work at the weekend. On Saturday she sleeps late. On Sunday she reads and listens to music.
Does Anna like her week? Yes, she does!`
        }
      ],
      practice: [
        { t: 'choice', q: 'I ___ like coffee.', o: ['don\'t', 'doesn\'t', 'am not'], a: 0 },
        { t: 'choice', q: 'He ___ play games.', o: ['don\'t', 'doesn\'t', 'isn\'t'], a: 1 },
        { t: 'choice', q: '___ you speak English?', o: ['Are', 'Do', 'Does'], a: 1 },
        { t: 'choice', q: '___ she live here?', o: ['Do', 'Does', 'Is'], a: 1 },
        { t: 'choice', q: '___ you tired?', o: ['Do', 'Does', 'Are'], a: 2 },
        { t: 'choice', q: 'She doesn\'t ___ tea.', o: ['like', 'likes', 'liking'], a: 0 },
        { t: 'gap', q: 'Do you play games? — Yes, I ___.', a: ['do'] },
        { t: 'gap', q: 'Does he work here? — No, he ___.', a: ['doesn\'t', 'does not'] },
        { t: 'gap', q: 'The game starts ___ eight o\'clock.', a: ['at'] },
        { t: 'gap', q: 'I play ___ Saturday.', a: ['on'] },
        { t: 'order', a: 'Where do you live', ru: 'Где ты живёшь?' },
        { t: 'order', a: 'She does not drink coffee', ru: 'Она не пьёт кофе' },
        { t: 'tr', q: 'Я не понимаю.', a: ['i don\'t understand', 'i do not understand'] },
        { t: 'tr', q: 'Ты играешь в игры?', a: ['do you play games'] },
        { t: 'tr', q: 'Он не говорит по-английски.', a: ['he doesn\'t speak english', 'he does not speak english'] },
        { t: 'listen', say: 'What time is it?', a: ['what time is it'] }
      ],
      test: [
        { t: 'gap', q: 'We ___ work on Sunday. (не)', a: ['don\'t', 'do not'] },
        { t: 'gap', q: '___ your friend play games?', a: ['does'] },
        { t: 'gap', q: 'Anna doesn\'t ___ coffee. (drink)', a: ['drink'] },
        { t: 'choice', q: '___ they at home?', o: ['Do', 'Are', 'Does'], a: 1 },
        { t: 'choice', q: 'Does she like music? — Yes, she ___.', o: ['is', 'do', 'does'], a: 2 },
        { t: 'choice', q: 'пятница:', o: ['Thursday', 'Friday', 'Tuesday'], a: 1 },
        { t: 'order', a: 'What do you do at the weekend', ru: 'Что ты делаешь на выходных?' },
        { t: 'tr', q: 'Я не знаю.', a: ['i don\'t know', 'i do not know'] },
        { t: 'tr', q: 'Когда ты встаёшь?', a: ['when do you get up'] },
        { t: 'tr', q: 'Она не живёт здесь.', a: ['she doesn\'t live here', 'she does not live here'] },
        { t: 'listen', say: 'Do you want to play together?', a: ['do you want to play together'] }
      ]
    },

    // ───────────────────────────── GAMING 1 ─────────────────────────────
    {
      id: 'g-1', level: 'A1', num: 1, track: 'games',
      title: 'Игры: меню и интерфейс',
      summary: 'Слова, которые встречаются в любой игре: меню, настройки, сохранение, базовые действия.',
      grammar: [
        {
          title: 'Повелительное наклонение — язык игр',
          html: `
<p>Игры постоянно дают команды: <span class="say">Press A to jump.</span> <span class="say">Find the key.</span> <span class="say">Talk to the old man.</span></p>
<p>Это самая простая форма в английском: <b>глагол как в словаре</b>, без «you» и окончаний.</p>
<table>
<tr><th>Команда</th><th>Перевод</th></tr>
<tr><td><span class="say">Press any key</span></td><td>Нажмите любую клавишу</td></tr>
<tr><td><span class="say">Select a character</span></td><td>Выберите персонажа</td></tr>
<tr><td><span class="say">Don't move!</span></td><td>Не двигайся!</td></tr>
</table>
<p>Отрицание: <b>Don't</b> + глагол: <span class="say">Don't die!</span> <span class="say">Don't press this button.</span></p>`
        },
        {
          title: 'Типичное главное меню',
          html: `
<table>
<tr><td><span class="say">New Game</span></td><td>Новая игра</td></tr>
<tr><td><span class="say">Continue</span></td><td>Продолжить</td></tr>
<tr><td><span class="say">Load Game</span></td><td>Загрузить игру</td></tr>
<tr><td><span class="say">Settings</span> / <span class="say">Options</span></td><td>Настройки</td></tr>
<tr><td><span class="say">Quit</span> / <span class="say">Exit</span></td><td>Выйти</td></tr>
</table>
<p>В настройках: <span class="say">Audio</span> (звук), <span class="say">Graphics</span> (графика), <span class="say">Controls</span> (управление), <span class="say">Difficulty</span> (сложность), <span class="say">Subtitles</span> (субтитры).</p>
<p class="tip">Лайфхак: включите в своих играх английский язык и субтитры. Меню вы и так знаете на память, а слова будут перед глазами каждый день.</p>`
        }
      ],
      words: [
        ['new game', 'новая игра', 'Select New Game to start.', 'Выберите «Новая игра», чтобы начать.'],
        ['continue', 'продолжить', 'Press Continue.', 'Нажмите «Продолжить».'],
        ['load', 'загружать', 'Load your last save.', 'Загрузите последнее сохранение.'],
        ['save', 'сохранять; сохранение', 'Save the game before the boss.', 'Сохраните игру перед боссом.'],
        ['settings', 'настройки', 'Open the settings.', 'Откройте настройки.'],
        ['quit', 'выйти, бросить', 'Do you want to quit?', 'Вы хотите выйти?'],
        ['press', 'нажимать', 'Press any key.', 'Нажмите любую клавишу.'],
        ['select', 'выбирать', 'Select your character.', 'Выберите персонажа.'],
        ['character', 'персонаж', 'This character is strong.', 'Этот персонаж сильный.'],
        ['level', 'уровень', 'You are level ten.', 'У вас десятый уровень.'],
        ['quest', 'квест, задание', 'Talk to the king to start the quest.', 'Поговорите с королём, чтобы начать квест.'],
        ['health', 'здоровье', 'Your health is low.', 'У вас мало здоровья.'],
        ['enemy', 'враг', 'The enemy is behind you!', 'Враг позади тебя!'],
        ['weapon', 'оружие', 'Pick up the weapon.', 'Подберите оружие.'],
        ['skill', 'навык, умение', 'You have a new skill.', 'У вас новый навык.'],
        ['inventory', 'инвентарь', 'Your inventory is full.', 'Ваш инвентарь заполнен.'],
        ['map', 'карта', 'Open the map.', 'Откройте карту.'],
        ['attack', 'атаковать; атака', 'Attack the enemy!', 'Атакуйте врага!'],
        ['jump', 'прыгать', 'Press A to jump.', 'Нажмите A, чтобы прыгнуть.'],
        ['run', 'бежать', 'Run!', 'Беги!'],
        ['find', 'находить', 'Find the key.', 'Найдите ключ.'],
        ['key', 'ключ; клавиша', 'You need a key.', 'Вам нужен ключ.'],
        ['win', 'побеждать', 'You win!', 'Вы победили!'],
        ['lose', 'проигрывать, терять', 'Don\'t lose your items.', 'Не потеряйте свои предметы.'],
        ['try again', 'попробовать снова', 'You died. Try again?', 'Вы погибли. Попробовать снова?'],
        ['item', 'предмет', 'You found a rare item.', 'Вы нашли редкий предмет.'],
        ['reward', 'награда', 'Complete the quest to get a reward.', 'Выполните квест, чтобы получить награду.'],
        ['difficulty', 'сложность', 'Choose the difficulty.', 'Выберите сложность.'],
        ['easy', 'лёгкий', 'This level is easy.', 'Этот уровень лёгкий.'],
        ['hard', 'трудный, сложный', 'The boss is very hard.', 'Босс очень сложный.'],
        ['player', 'игрок', 'Waiting for players…', 'Ожидание игроков…'],
        ['team', 'команда', 'Join a team.', 'Присоединитесь к команде.']
      ],
      texts: [
        {
          id: 't-g-1-1', title: 'Tutorial', level: 'A1',
          text: `Welcome to the game!
Press any key to start.
Select your character. You can be a warrior or a mage.
Use the left stick to move. Press A to jump. Press X to attack.
Your health is on the top of the screen. Don't let it go to zero!
Open the map. Find the old house. Talk to the old man. He has a quest for you.
Find the key and open the door. You get a reward: a new weapon!
Your inventory is full. Drop an item.
Save the game. Good luck!`
        },
        {
          id: 't-g-1-2', title: 'Game over', level: 'A1',
          text: `You died.
The enemy is too strong. Your weapon is old and your level is low.
Do you want to try again? Yes / No
Tip: Change the difficulty in the settings. Easy mode is not a shame!
Tip: Save the game often.
Loading…
Continue from the last save point.`
        }
      ],
      practice: [
        { t: 'choice', q: '«Продолжить» в меню:', o: ['Quit', 'Continue', 'Load'], a: 1 },
        { t: 'choice', q: '«Настройки»:', o: ['Settings', 'Save', 'Select'], a: 0 },
        { t: 'choice', q: 'Your health is low. Что происходит?', o: ['Мало здоровья', 'Мало денег', 'Низкий уровень'], a: 0 },
        { t: 'choice', q: 'Your inventory is full.', o: ['Карта открыта', 'Инвентарь заполнен', 'Квест выполнен'], a: 1 },
        { t: 'choice', q: 'Press X to attack.', o: ['Нажмите X, чтобы прыгнуть', 'Нажмите X, чтобы атаковать', 'Нажмите X, чтобы сохранить'], a: 1 },
        { t: 'gap', q: 'Press A to ___. (прыгнуть)', a: ['jump'] },
        { t: 'gap', q: '___ the game before the boss. (сохраните)', a: ['save'] },
        { t: 'gap', q: 'You died. Try ___?', a: ['again'] },
        { t: 'gap', q: '___ the key. (найдите)', a: ['find'] },
        { t: 'order', a: 'Talk to the old man', ru: 'Поговорите со стариком' },
        { t: 'order', a: 'Select your character', ru: 'Выберите своего персонажа' },
        { t: 'tr', q: 'Откройте карту.', a: ['open the map'] },
        { t: 'tr', q: 'Не атакуй!', a: ['don\'t attack', 'do not attack'] },
        { t: 'listen', say: 'Press any key to start', a: ['press any key to start'] }
      ],
      test: [
        { t: 'choice', q: 'enemy =', o: ['друг', 'враг', 'игрок'], a: 1 },
        { t: 'choice', q: 'reward =', o: ['награда', 'оружие', 'навык'], a: 0 },
        { t: 'choice', q: 'Difficulty: Easy / Normal / Hard. Это про…', o: ['графику', 'сложность', 'звук'], a: 1 },
        { t: 'gap', q: 'Do you want to ___? (выйти)', a: ['quit', 'exit'] },
        { t: 'gap', q: 'You ___! (победили)', a: ['win', 'won'] },
        { t: 'gap', q: 'Pick up the ___. (оружие)', a: ['weapon'] },
        { t: 'order', a: 'Save the game often', ru: 'Сохраняйте игру почаще' },
        { t: 'tr', q: 'Нажмите любую клавишу.', a: ['press any key'] },
        { t: 'tr', q: 'Выберите сложность.', a: ['select the difficulty', 'choose the difficulty', 'select difficulty', 'choose difficulty'] },
        { t: 'listen', say: 'Your inventory is full', a: ['your inventory is full'] }
      ]
    }
  ]
};
