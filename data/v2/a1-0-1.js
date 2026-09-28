// Уроки A1 (новая версия): a1-0 — старт (алфавит, чтение, числа, приветствия, знакомство); a1-1 — глагол to be (am / is / are).
(function () {
  const put = (u) => { const i = COURSE.units.findIndex((x) => x.id === u.id); if (i >= 0) COURSE.units[i] = u; else COURSE.units.push(u); };
  [
    // ───────────────────────────── UNIT 0 ─────────────────────────────
    {
      id: 'a1-0', level: 'A1', num: 0, track: 'main',
      books: {},
      title: 'Старт: алфавит, числа, приветствия',
      summary: 'Английский алфавит, как учить слова на слух, звуки, которых нет в русском, числа 1–20, вежливые фразы и как представиться.',
      grammar: [
        {
          title: '1. Главная идея: пишется одно, читается другое',
          html: `
<div class="g-idea">В русском почти всегда <b>как пишем, так и читаем</b>. В английском — нет: одна и та же буква в разных словах звучит по-разному. Поэтому английские слова учат <b>ушами</b>, а не глазами.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>чай → ч-а-й → «чай»</p><p>Буква <b>а</b> везде звучит «а».</p></div>
  <div><div class="g-h">English</div><p><span class="say">tea</span> → «тии», а не «теа»</p><p>Буква <b>a</b>: <span class="say">name</span>, <span class="say">thanks</span>, <span class="say">what</span> — три разных звука.</p></div>
</div>
<p>В английском <b>26 букв</b>. У каждой буквы есть <b>название</b> (как «эм», «эс» в русском). Название нужно, чтобы <b>продиктовать</b> имя по буквам: <span class="say">Anna, A-N-N-A.</span> Нажмите на букву, чтобы услышать её название:</p>
<div class="alphabet" data-alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"></div>
<table>
<tr><th>Буква</th><th>Называется</th><th>Не путать с</th></tr>
<tr><td><b>A</b></td><td>«эй»</td><td>русским «а»</td></tr>
<tr><td><b>E</b></td><td>«ии»</td><td>русским «е»</td></tr>
<tr><td><b>I</b></td><td>«ай»</td><td>русским «и»</td></tr>
<tr><td><b>G</b> / <b>J</b></td><td>«джи» / «джей»</td><td>друг с другом</td></tr>
<tr><td><b>R</b> / <b>Y</b></td><td>«аа» / «уай»</td><td>русскими «р» и «у»</td></tr>
</table>
<div class="g-tip">Самые коварные — <b>E</b> («ии») и <b>I</b> («ай»): они как будто поменялись местами с русскими «е» и «и». Послушайте их по два-три раза.</div>
<div class="mini" data-q="Как называется буква I?" data-o="и|ай|эй" data-a="1" data-why="I называется «ай». А «ии» — это название буквы E."></div>
<div class="mini" data-q="Зачем знать названия букв?" data-o="Чтобы читать слова по буквам|Чтобы продиктовать имя по буквам|Незачем" data-a="1" data-why="Слова по названиям букв не читаются. Названия нужны, чтобы продиктовать имя: Anna, A-N-N-A."></div>`
        },
        {
          title: '2. Как учить новые слова: сначала слушать',
          html: `
<div class="g-idea">Не складывайте английское слово из букв, как по-русски. Сначала <b>послушайте</b>, потом <b>повторите вслух</b>, и только потом посмотрите, как оно пишется.</div>
<div class="g-steps"><div class="g-h">Как учить каждое новое слово</div><ol>
<li>Нажмите на слово и <b>послушайте</b> 2–3 раза.</li>
<li><b>Повторите вслух</b> — не шёпотом, а голосом.</li>
<li>Посмотрите, <b>как оно пишется</b>, и заметьте «молчащие» буквы.</li>
<li>Скажите слово ещё раз в короткой фразе: <span class="say">Two teas, please.</span></li>
</ol></div>
<p>Слова, которые по буквам прочитать невозможно — только слушать:</p>
<ul class="g-list">
<li><span class="say">one</span> — один <span class="muted">(звучит «уан», хотя пишется o-n-e)</span></li>
<li><span class="say">two</span> — два <span class="muted">(«ту», буква w молчит)</span></li>
<li><span class="say">eight</span> — восемь <span class="muted">(«эйт», буквы g и h молчат)</span></li>
<li><span class="say">please</span> — пожалуйста <span class="muted">(«плииз», e на конце молчит)</span></li>
<li><span class="say">sorry</span> — извините <span class="muted">(«сори», две r звучат как одна)</span></li>
</ul>
<div class="g-bad">«о-н-е» — читаю one по буквам</div>
<div class="g-good"><span class="say">one</span> — «уан», запоминаю по звуку</div>
<div class="g-tip">Представьте, что английское слово — это <b>иконка</b>: вы запоминаете её целиком, как логотип, а не по отдельным пикселям.</div>
<div class="mini" data-q="Как звучит слово eight (8)?" data-o="эйгхт|эйт|эйгт" data-a="1" data-why="Буквы g и h здесь молчат, слово звучит «эйт»."></div>
<div class="mini" data-q="Как лучше учить новое слово?" data-o="Прочитать по буквам|Послушать и повторить вслух|Только посмотреть" data-a="1" data-why="Буквы часто обманывают, поэтому сначала слушаем и повторяем вслух."></div>`
        },
        {
          title: '3. Звуки, которых нет в русском',
          html: `
<div class="g-idea">Большинство английских звуков похожи на русские. Но нескольких звуков у нас <b>нет</b> — именно по ним слышен русский акцент. Их стоит потренировать с самого начала.</div>
<table>
<tr><th>Буквы</th><th>Как сказать</th><th>Примеры</th></tr>
<tr><td><b>th</b></td><td>кончик языка между зубами и выдох</td><td><span class="say">three</span>, <span class="say">thank you</span></td></tr>
<tr><td><b>w</b></td><td>губы трубочкой, быстро «уэ»</td><td><span class="say">twelve</span>, <span class="say">twenty</span>, <span class="say">what</span></td></tr>
<tr><td><b>h</b></td><td>лёгкий выдох, как на стекло</td><td><span class="say">hi</span>, <span class="say">hello</span></td></tr>
<tr><td><b>r</b></td><td>язык загнут, не дрожит</td><td><span class="say">sorry</span>, <span class="say">three</span></td></tr>
</table>
<div class="g-bad">th как «с» или «ф»: «сенк ю», «фри»</div>
<div class="g-good"><span class="say">thank you</span>, <span class="say">three</span> — язык между зубами</div>
<p><b>Краткое и долгое «и»</b>. В русском «и» одно. В английском их два:</p>
<table>
<tr><th>Краткое i — быстро</th><th>Долгое ee / ea — тянем</th></tr>
<tr><td><span class="say">six</span> — шесть</td><td><span class="say">three</span> — три</td></tr>
<tr><td><span class="say">fif</span>… в fifteen</td><td>…<span class="say">teen</span> в fifteen</td></tr>
<tr><td><span class="say">it's</span> — это</td><td><span class="say">tea</span> — чай</td></tr>
</table>
<div class="g-tip">Краткое <b>i</b> — быстрое и расслабленное, почти «ы». Долгое <b>ee</b> — улыбнитесь и тяните: «иии». В слове <span class="say">please</span> тоже долгое «ии».</div>
<div class="mini" data-q="В каком слове долгое «иии»?" data-o="six|three|it's" data-a="1" data-why="ee в three — долгий звук. В six и it's — краткое i."></div>
<div class="mini" data-q="Как сказать th в слове three?" data-o="как русское ф|как русское с|язык между зубами" data-a="2" data-why="Звука th в русском нет: кончик языка между зубами и выдох."></div>`
        },
        {
          title: '4. Числа 1–20',
          html: `
<div class="g-idea">Первые 12 чисел нужно просто выучить. С 13 до 19 работает правило: число + <b>-teen</b> («тиин»). Это как русское «-надцать».</div>
<table>
<tr><th>1–10</th><th></th><th>11–20</th><th></th></tr>
<tr><td>1</td><td><span class="say">one</span></td><td>11</td><td><span class="say">eleven</span></td></tr>
<tr><td>2</td><td><span class="say">two</span></td><td>12</td><td><span class="say">twelve</span></td></tr>
<tr><td>3</td><td><span class="say">three</span></td><td>13</td><td><span class="say">thirteen</span></td></tr>
<tr><td>4</td><td><span class="say">four</span></td><td>14</td><td><span class="say">fourteen</span></td></tr>
<tr><td>5</td><td><span class="say">five</span></td><td>15</td><td><span class="say">fifteen</span></td></tr>
<tr><td>6</td><td><span class="say">six</span></td><td>16</td><td><span class="say">sixteen</span></td></tr>
<tr><td>7</td><td><span class="say">seven</span></td><td>17</td><td><span class="say">seventeen</span></td></tr>
<tr><td>8</td><td><span class="say">eight</span></td><td>18</td><td><span class="say">eighteen</span></td></tr>
<tr><td>9</td><td><span class="say">nine</span></td><td>19</td><td><span class="say">nineteen</span></td></tr>
<tr><td>10</td><td><span class="say">ten</span></td><td>20</td><td><span class="say">twenty</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">four / six / seven / nine</span><span class="g-plus">+</span><span class="g-part g-v">teen</span><span class="g-sep">·</span><span class="g-part">fourteen, sixteen, seventeen, nineteen</span></div>
<p>Три числа меняются сильнее: <b>three → thirteen</b>, <b>five → fifteen</b>, <b>eight → eighteen</b> (одна t, а не две).</p>
<div class="g-bad">fiveteen, threeteen</div>
<div class="g-good"><span class="say">fifteen</span>, <span class="say">thirteen</span></div>
<div class="g-tip">Русское «четыр<b>надцать</b>» = английское «four<b>teen</b>». Ударение в -teen — на конце: «фоо-ТИИН».</div>
<p>Сколько вам лет — тоже просто число: <b>I'm</b> + число.</p>
<ul class="g-list">
<li><span class="say">Two teas, please.</span> — Два чая, пожалуйста.</li>
<li><span class="say">Three coffees, please.</span> — Три кофе, пожалуйста.</li>
<li><span class="say">I'm twenty.</span> — Мне двадцать (лет).</li>
<li><span class="say">I'm nineteen.</span> — Мне девятнадцать.</li>
</ul>
<div class="mini" data-q="15 по-английски:" data-o="fiveteen|fifteen|fiften" data-a="1" data-why="five превращается в fif- и получает -teen: fifteen."></div>
<div class="mini" data-q="Six, seven, eight, nine, ___" data-o="eleven|ten|twenty" data-a="1" data-why="После nine (9) идёт ten (10)."></div>`
        },
        {
          title: '5. Вежливые фразы: please, thank you, sorry',
          html: `
<div class="g-idea">В английском <b>please</b> и <b>thank you</b> говорят гораздо чаще, чем у нас. Просьба без please звучит грубо, как приказ.</div>
<table>
<tr><th>English</th><th>Русский</th><th>Когда</th></tr>
<tr><td><span class="say">Hello!</span> / <span class="say">Hi!</span></td><td>Здравствуйте / Привет</td><td>hi — для своих</td></tr>
<tr><td><span class="say">Goodbye!</span> / <span class="say">Bye!</span></td><td>До свидания / Пока</td><td>bye — для своих</td></tr>
<tr><td><span class="say">Please.</span></td><td>Пожалуйста</td><td>когда просите</td></tr>
<tr><td><span class="say">Thank you!</span> / <span class="say">Thanks!</span></td><td>Спасибо</td><td>thanks — проще</td></tr>
<tr><td><span class="say">Sorry!</span></td><td>Извините / Прости</td><td>ошиблись, не расслышали</td></tr>
<tr><td><span class="say">Yes, please.</span> / <span class="say">No, thank you.</span></td><td>Да, пожалуйста / Нет, спасибо</td><td>ответ, когда вам что-то предлагают</td></tr>
<tr><td><span class="say">OK.</span></td><td>Хорошо / Ладно</td><td>согласие</td></tr>
</table>
<p>Русское «пожалуйста» бывает двух видов. По-английски это <b>разные</b> фразы:</p>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Кофе, <b>пожалуйста</b>. <span class="muted">(прошу)</span></p><p>— Спасибо! — <b>Пожалуйста</b>. <span class="muted">(отвечаю)</span></p></div>
  <div><div class="g-h">English</div><p><span class="say">Coffee, please.</span></p><p><span class="say">Thank you! — You're welcome.</span></p></div>
</div>
<div class="g-bad">— Thank you! — Please.</div>
<div class="g-good">— Thank you! — <span class="say">You're welcome.</span></div>
<div class="g-tip"><b>please</b> — только когда вы <b>просите</b>. Когда благодарят вас — <b>You're welcome</b>. Ещё мелочь: две чашки кофе — <span class="say">two coffees</span>, два чая — <span class="say">two teas</span> (на конце -s, как в меню).</div>
<div class="mini" data-q="Вам сказали Thank you! Что ответить?" data-o="Please.|You're welcome.|Sorry." data-a="1" data-why="На спасибо отвечают You're welcome. Please — только для просьбы."></div>
<div class="mini" data-q="Два кофе, пожалуйста." data-o="Two coffees, please.|Two coffees, thank you.|Please two coffees, you're welcome." data-a="0" data-why="Просим — значит please, обычно в конце фразы."></div>`
        },
        {
          title: '6. Как представиться: Hi, I\'m … / My name is …',
          html: `
<div class="g-idea">Чтобы познакомиться, хватит одной формулы: <b>Hi, I'm</b> + имя. <b>I'm</b> — это «я» (коротко от I am). Можно и чуть официальнее: <b>My name is</b> + имя.</div>
<div class="g-formula"><span class="g-part">Hi,</span><span class="g-plus">+</span><span class="g-part g-v">I'm</span><span class="g-plus">+</span><span class="g-part">имя</span></div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Привет, я <span class="g-gap">_</span> Илья.</p><p>Меня зовут Анна.</p><p>Как тебя зовут?</p></div>
  <div><div class="g-h">English</div><p><span class="say">Hi, I'm Ilya.</span></p><p><span class="say">My name is Anna.</span></p><p><span class="say">What's your name?</span></p></div>
</div>
<div class="g-steps"><div class="g-h">Короткий диалог знакомства</div><ol>
<li><span class="say">Hi! What's your name?</span> — Привет! Как тебя зовут?</li>
<li><span class="say">Hi! I'm Tom.</span> — Привет! Я Том.</li>
<li><span class="say">I'm Anna. Nice to meet you.</span> — Я Анна. Приятно познакомиться.</li>
<li><span class="say">Nice to meet you too.</span> — Мне тоже.</li>
</ol></div>
<p>Если имя непривычное, его диктуют по буквам — вот где пригодится алфавит:</p>
<ul class="g-list">
<li><span class="say">My name is Kate. K-A-T-E.</span> — Меня зовут Кейт. По буквам: K-A-T-E.</li>
<li><span class="say">Sorry? — Ilya. I-L-Y-A.</span> — Простите? — Илья. По буквам: I-L-Y-A.</li>
</ul>
<div class="g-bad">I Tom. <span class="muted">— «я Том» без 'm</span></div>
<div class="g-good"><span class="say">I'm Tom.</span></div>
<div class="g-bad">Me name is Anna.</div>
<div class="g-good"><span class="say">My name is Anna.</span></div>
<div class="g-tip">Буква <b>I</b> («я») всегда <b>большая</b>, даже в середине предложения. А <b>'m</b> — хвостик, без которого фраза «ломается». Подробно про I'm, you're, he's — в уроке 1.</div>
<div class="mini" data-q="Привет, я Макс." data-o="Hi, I Max.|Hi, I'm Max.|Hi, me Max." data-a="1" data-why="Нужно I'm: Hi, I'm Max."></div>
<div class="mini" data-q="Nice to meet you! — ___" data-o="Nice to meet you too.|You're welcome.|Goodbye, please." data-a="0" data-why="На «приятно познакомиться» отвечают тем же + too (тоже)."></div>`
        },
        {
          title: '7. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">one — читаю «о-н-е»</div><div class="g-good"><span class="say">one</span> — «уан», учу на слух</div>
<div class="g-bad">«сенк ю», «фри»</div><div class="g-good"><span class="say">thank you</span>, <span class="say">three</span> — язык между зубами</div>
<div class="g-bad">fiveteen, threeteen</div><div class="g-good"><span class="say">fifteen</span>, <span class="say">thirteen</span></div>
<div class="g-bad">— Thank you! — Please.</div><div class="g-good">— Thank you! — <span class="say">You're welcome.</span></div>
<div class="g-bad">I Anna. / i'm Anna.</div><div class="g-good"><span class="say">I'm Anna.</span></div>
<div class="g-bad">Me name is Max.</div><div class="g-good"><span class="say">My name is Max.</span></div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Слова <b>слушаем, а не читаем по буквам</b> · числа 13–19 = число + <b>teen</b> · просим с <b>please</b>, на спасибо — <b>You're welcome</b> · знакомимся: <b>Hi, I'm …</b> / <b>My name is …</b></div>`
        }
      ],
      words: [
        ['hello', 'привет, здравствуйте', 'Hello, Anna!', 'Здравствуй, Анна!'],
        ['hi', 'привет', 'Hi, Tom!', 'Привет, Том!'],
        ['goodbye', 'до свидания', 'Goodbye, Kate!', 'До свидания, Кейт!'],
        ['bye', 'пока', 'Bye, Max!', 'Пока, Макс!'],
        ['yes', 'да', 'Yes, please.', 'Да, пожалуйста.'],
        ['no', 'нет', 'No, thank you.', 'Нет, спасибо.'],
        ['please', 'пожалуйста (просьба)', 'Tea, please.', 'Чай, пожалуйста.'],
        ['thank you', 'спасибо', 'Thank you, Tom!', 'Спасибо, Том!'],
        ['thanks', 'спасибо (проще)', 'Thanks, Max!', 'Спасибо, Макс!'],
        ['you\'re welcome', 'пожалуйста (в ответ на спасибо)', 'Thank you! — You\'re welcome.', 'Спасибо! — Пожалуйста.'],
        ['sorry', 'извините, прости; простите? (не расслышал)', 'Sorry, Anna!', 'Прости, Анна!'],
        ['OK', 'хорошо, ладно', 'Two teas? — OK!', 'Два чая? — Хорошо!'],
        ['one', 'один', 'One coffee, please.', 'Один кофе, пожалуйста.'],
        ['two', 'два', 'Two coffees, please.', 'Два кофе, пожалуйста.'],
        ['three', 'три', 'Three teas, please.', 'Три чая, пожалуйста.'],
        ['four', 'четыре', 'Four coffees? — Yes, four.', 'Четыре кофе? — Да, четыре.'],
        ['five', 'пять', 'One, two, three, four, five!', 'Раз, два, три, четыре, пять!'],
        ['six', 'шесть', 'Six teas? — No, sorry. Two teas.', 'Шесть чаёв? — Нет, простите. Два чая.'],
        ['seven', 'семь', 'Seven coffees, please!', 'Семь кофе, пожалуйста!'],
        ['eight', 'восемь', 'Eight? — Yes, eight.', 'Восемь? — Да, восемь.'],
        ['nine', 'девять', 'I\'m nine! — No, you\'re twenty!', 'Мне девять! — Нет, тебе двадцать!'],
        ['ten', 'десять', 'Ten teas, please.', 'Десять чаёв, пожалуйста.'],
        ['eleven', 'одиннадцать', 'Ten, eleven, twelve.', 'Десять, одиннадцать, двенадцать.'],
        ['twelve', 'двенадцать', 'Twelve coffees? — No, sorry! Two.', 'Двенадцать кофе? — Нет, простите! Два.'],
        ['twenty', 'двадцать', 'I\'m twenty.', 'Мне двадцать (лет).'],
        ['coffee', 'кофе', 'Coffee, please.', 'Кофе, пожалуйста.'],
        ['tea', 'чай', 'Tea? — Yes, please.', 'Чай? — Да, пожалуйста.'],
        ['I\'m …', 'я … (чтобы представиться)', 'Hi, I\'m Anna.', 'Привет, я Анна.'],
        ['my name is …', 'меня зовут …', 'My name is Max. M-A-X.', 'Меня зовут Макс. По буквам: M-A-X.'],
        ['what\'s your name?', 'как тебя (вас) зовут?', 'What\'s your name? — Kate.', 'Как тебя зовут? — Кейт.'],
        ['nice to meet you', 'приятно познакомиться', 'Nice to meet you! — Nice to meet you too!', 'Приятно познакомиться! — Мне тоже!']
      ],
      texts: [
        {
          id: 't-a1-0-1', title: 'In a café', level: 'A1',
          text: `Anna: Hello!
Tom: Hi! Coffee, please.
Anna: One coffee?
Tom: No, sorry. Two coffees, please.
Anna: Two coffees. OK! Tea?
Tom: No, thank you.
Max: Hi, Tom! Hi, Anna!
Tom: Hi, Max! Coffee?
Max: No, thanks. Tea, please.
Tom: OK. Sorry, Anna! Two coffees and one tea, please.
Anna: Two coffees and one tea. OK!
Tom: Thank you!
Anna: You're welcome.
Max: Thanks, Tom!
Tom: You're welcome, Max.
Anna: Coffee, coffee and tea. Please!
Tom: Thank you, Anna!
Kate: Hello, Anna! Hi, Tom! Hi, Max!
Anna: Hi, Kate! Coffee? Tea?
Kate: Tea, please. Two teas! One, two.
Anna: Two teas. OK! Thank you, Kate.
Kate: Thanks, Anna!
Max: Thanks! Bye, Anna!
Anna: Bye! Goodbye, Tom!
Tom: Goodbye!`,
          questions: [
            { q: 'Tom: coffees — one, two or three?', o: ['one', 'two', 'three'], a: 1 },
            { q: 'Max: coffee or tea?', o: ['coffee', 'tea', 'coffee and tea'], a: 1 },
            { q: 'Tom: Thank you! Anna: …', o: ['Please.', 'Sorry.', 'You\'re welcome.'], a: 2 }
          ]
        },
        {
          id: 't-a1-0-2', title: 'What\'s your name?', level: 'A1',
          text: `Kate: Hello! What's your name?
Ilya: Hi! My name is Ilya.
Kate: Sorry?
Ilya: Ilya. I-L-Y-A.
Kate: I-L-Y-A. OK! Thank you. I'm Kate. K-A-T-E.
Ilya: Nice to meet you, Kate.
Kate: Nice to meet you too, Ilya.
Max: Hi! I'm Max.
Kate: Hi, Max! Max — M-A-X?
Max: Yes! M-A-X. Nice to meet you, Kate.
Kate: Nice to meet you too. Coffee, Max?
Max: No, thank you. Tea, please.
Kate: Ilya? Tea or coffee?
Ilya: Coffee, please. Thanks!
Kate: You're welcome. One tea and two coffees.
Ilya: Two coffees?
Kate: Yes. Coffee, please! I'm Kate — coffee, coffee, coffee!
Max: OK, Kate! Thank you. Bye!
Kate: Bye, Max! Bye, Ilya!`,
          questions: [
            { q: 'Ilya: I-L-…?', o: ['I-L-Y-A', 'I-L-I-A', 'E-L-Y-A'], a: 0 },
            { q: 'Max: coffee or tea?', o: ['coffee', 'tea', 'no, thank you'], a: 1 },
            { q: 'Coffees: one, two or three?', o: ['one', 'two', 'three'], a: 1 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: '«Спасибо» по-английски:', o: ['please', 'thank you', 'sorry'], a: 1, why: 'thank you (или thanks) — спасибо; please — пожалуйста, sorry — извините.' },
        { t: 'choice', q: '«Пожалуйста» — когда вы просите:', o: ['please', 'you\'re welcome', 'yes'], a: 0, why: 'Просим — please. You\'re welcome — ответ на спасибо.' },
        { t: 'choice', q: 'Как называется буква E?', o: ['«е»', '«ии»', '«ай»'], a: 1, why: 'E называется «ии»; «ай» — это название буквы I.' },
        { t: 'choice', q: 'Как звучит слово one (1)?', o: ['«онэ»', '«уан»', '«он»'], a: 1, why: 'one читается не по буквам: «уан». Такие слова учим на слух.' },
        { t: 'choice', q: 'seventeen = ?', o: ['7', '17', '70'], a: 1, why: 'seven + teen = seventeen: -teen — это «-надцать», 17.' },
        { t: 'choice', q: '12 по-английски:', o: ['twelve', 'twenty', 'two'], a: 0, why: '12 — twelve, его просто запоминаем. twenty — 20, two — 2.' },
        { t: 'choice', q: 'Привет, я Том.', o: ['Hi, I Tom.', 'Hi, I\'m Tom.', 'Hi, me Tom.'], a: 1, why: 'Представляемся формулой Hi, I\'m + имя; без \'m нельзя.' },
        { t: 'gap', q: 'One, two, ___, four, five.', a: ['three'], why: 'Считаем по порядку: после two (2) идёт three (3).' },
        { t: 'gap', q: 'Six, seven, eight, ___, ten.', a: ['nine'], why: 'Между eight (8) и ten (10) стоит nine (9).' },
        { t: 'gap', q: 'Coffee, ___. (пожалуйста)', a: ['please'], why: 'Когда просим, добавляем please — обычно в конце.' },
        { t: 'gap', q: 'six + teen = ___', a: ['sixteen'], why: '13–19 = число + teen: six → sixteen (16).' },
        { t: 'gap', q: 'What\'s your ___? — Anna.', a: ['name'], why: 'What\'s your name? — как тебя зовут? Отвечаем именем.' },
        { t: 'gap', q: 'Nice to meet you ___. (тоже)', a: ['too'], why: 'Отвечая на Nice to meet you, добавляем too — «тоже».' },
        { t: 'order', a: 'My name is Kate', ru: 'Меня зовут Кейт' },
        { t: 'order', a: 'Nice to meet you too', ru: 'Мне тоже приятно познакомиться' },
        { t: 'tr', q: 'Привет!', a: ['hello', 'hi'] },
        { t: 'tr', q: 'Нет, спасибо.', a: ['no thank you', 'no thanks'] },
        { t: 'tr', q: 'Меня зовут Макс.', a: ['my name is max', 'i am max', 'i\'m max'] },
        { t: 'listen', say: 'Thank you', a: ['thank you'] },
        { t: 'listen', say: 'fifteen', a: ['fifteen', '15'] }
      ],
      test: [
        { t: 'choice', q: '«Извините» по-английски:', o: ['sorry', 'OK', 'hi'], a: 0, why: 'sorry — извините, прости. OK — хорошо, hi — привет.' },
        { t: 'choice', q: '— Thank you! — ___', o: ['You\'re welcome.', 'Please.', 'Thanks.'], a: 0, why: 'На спасибо отвечают You\'re welcome. Please — только для просьбы.' },
        { t: 'choice', q: '«Пока!» (другу):', o: ['Hello!', 'Bye!', 'Sorry!'], a: 1, why: 'Bye — пока, коротко и для своих. Hello — привет.' },
        { t: 'choice', q: '13 по-английски:', o: ['threeteen', 'thirteen', 'three'], a: 1, why: 'three меняется на thir- и получает -teen: thirteen.' },
        { t: 'choice', q: 'Какое число звучит «эйт»?', o: ['8', '18', '10'], a: 0, why: 'eight — «эйт», 8. 18 — eighteen («эйтиин»), 10 — ten.' },
        { t: 'choice', q: 'Как называется буква G?', o: ['«гэ»', '«джи»', '«джей»'], a: 1, why: 'G — «джи», а «джей» — это название буквы J.' },
        { t: 'choice', q: 'В каком слове звук th (язык между зубами)?', o: ['three', 'sorry', 'tea'], a: 0, why: 'th есть в three; в sorry и tea его нет.' },
        { t: 'choice', q: 'Меня зовут Анна.', o: ['Me name is Anna.', 'My name is Anna.', 'My name Anna.'], a: 1, why: 'Формула: My name is + имя. Me — не «мой», а is пропускать нельзя.' },
        { t: 'gap', q: 'Eleven, ___, thirteen.', a: ['twelve'], why: 'Между 11 и 13 — twelve (12). Его не строят по правилу -teen, а запоминают.' },
        { t: 'gap', q: 'Two ___, please. (кофе)', a: ['coffees'], why: 'Две чашки кофе — two coffees: на конце -s, как в меню.' },
        { t: 'gap', q: 'Nineteen, ___. (20)', a: ['twenty'], why: 'После nineteen (19) идёт twenty (20).' },
        { t: 'gap', q: '— Tea? — No, thank ___.', a: ['you'], why: 'Вежливый отказ — No, thank you (нет, спасибо).' }
      ]
    },

    // ───────────────────────────── UNIT 1 ─────────────────────────────
    {
      id: 'a1-1', level: 'A1', num: 1, track: 'main',
      books: { red: [1] },
      title: 'I am, you are — глагол to be',
      summary: 'Как сказать «я студент», «она дома», «мы из России», «мне двадцать» и «я не устал»: am / is / are, короткие формы и местоимения.',
      grammar: [
        {
          title: '1. Главная идея: в английском нельзя без глагола',
          html: `
<div class="g-idea">По-русски мы говорим <b>«Я студент»</b> — и глагола тут нет. По-английски так <b>нельзя</b>: в каждом предложении обязательно должен быть глагол. Если «действия» нет, ставим глагол-связку <b>be</b> («быть, являться»).</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я <span class="g-gap">_</span> студент.</p><p>Она <span class="g-gap">_</span> дома.</p><p>Мы <span class="g-gap">_</span> из России.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>am</b> a student.</span></p><p><span class="say">She <b>is</b> at home.</span></p><p><span class="say">We <b>are</b> from Russia.</span></p></div>
</div>
<p>be отвечает на три вопроса: <b>кто?</b> (<span class="say">I am a designer.</span>), <b>какой?</b> (<span class="say">I am tired.</span>), <b>где / откуда?</b> (<span class="say">I am at work.</span> <span class="say">I am from Kazan.</span>).</p>
<div class="g-tip">Представьте, что в русском на месте пропуска стоит невидимое слово «есть»: «Я <i>есть</i> студент». В английском это слово всегда видно — это <b>am / is / are</b>.</div>
<div class="mini" data-q="Как сказать «Я голоден»?" data-o="I hungry.|I am hungry.|Am I hungry." data-a="1" data-why="Нужен глагол: I + am + hungry."></div>
<div class="mini" data-q="Как сказать «Она на работе»?" data-o="She at work.|She is at work.|She work." data-a="1" data-why="«Где?» — тоже через be: She + is + at work."></div>`
        },
        {
          title: '2. Какую форму ставить: am, is или are',
          html: `
<p>У глагола <b>be</b> три формы. Какую ставить — зависит только от того, <b>кто</b> в начале предложения.</p>
<table>
<tr><th>Кто</th><th>Форма</th><th>Пример</th></tr>
<tr><td><b>I</b> — я</td><td><b class="g-v">am</b></td><td><span class="say">I am tired.</span></td></tr>
<tr><td><b>he</b> — он, <b>she</b> — она, <b>it</b> — оно/это</td><td><b class="g-v">is</b></td><td><span class="say">She is happy.</span></td></tr>
<tr><td><b>you</b> — ты/вы, <b>we</b> — мы, <b>they</b> — они</td><td><b class="g-v">are</b></td><td><span class="say">They are friends.</span></td></tr>
</table>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">am / is / are</span><span class="g-plus">+</span><span class="g-part">кто / какой / где</span></div>
<div class="g-steps"><div class="g-h">Запомнить легко — всего три правила</div><ol>
<li><b>I</b> → всегда <b>am</b>. Только так и никак иначе.</li>
<li><b>Один</b> человек или предмет (he, she, it, Tom, my friend, the game) → <b>is</b>.</li>
<li><b>Все остальные</b> (you, we, they, Tom and Anna, my friends) → <b>are</b>.</li>
</ol></div>
<p>Осторожно с <b>«Том и я»</b>: это «мы», значит <b>are</b>: <span class="say">Tom and I are friends.</span></p>
<div class="g-bad">Tom and I am at work.</div>
<div class="g-good"><span class="say">Tom and I are at work.</span></div>
<div class="mini" data-q="My friends ___ from London." data-o="am|is|are" data-a="2" data-why="My friends — много людей (они = they) → are."></div>
<div class="mini" data-q="Tom ___ a designer." data-o="am|is|are" data-a="1" data-why="Tom — один человек (он = he) → is."></div>`
        },
        {
          title: '3. Коротко, как говорят в жизни: I\'m, she\'s, we\'re',
          html: `
<p>В разговоре и в чатах почти всегда используют <b>короткие формы</b>. Буква пропадает, вместо неё — апостроф <b>'</b>.</p>
<table>
<tr><th>Полная форма</th><th>Коротко</th><th>Звучит</th></tr>
<tr><td>I am</td><td><b>I'm</b></td><td><span class="say">I'm</span></td></tr>
<tr><td>he is / she is / it is</td><td><b>he's / she's / it's</b></td><td><span class="say">she's</span></td></tr>
<tr><td>you are / we are / they are</td><td><b>you're / we're / they're</b></td><td><span class="say">they're</span></td></tr>
</table>
<p>Смысл тот же, просто быстрее:</p>
<ul class="g-list">
<li><span class="say">I'm fine.</span> = I am fine. — Я в порядке.</li>
<li><span class="say">It's late.</span> = It is late. — Уже поздно.</li>
<li><span class="say">We're friends.</span> = We are friends. — Мы друзья.</li>
<li><span class="say">Tom's at work.</span> = Tom is at work. — Том на работе.</li>
</ul>
<div class="g-tip">В официальном письме пишут полностью (I am), в чате с другом — коротко (I'm). Произносить почти всегда удобнее коротко.</div>
<div class="mini" data-q="Короткая форма от «we are»:" data-o="we's|we're|wer" data-a="1" data-why="are → 're, поэтому we're."></div>
<div class="mini" data-q="Короткая форма от «she is»:" data-o="she's|she're|shes" data-a="0" data-why="is → 's, поэтому she's."></div>`
        },
        {
          title: '4. «Не»: I\'m not, isn\'t, aren\'t',
          html: `
<div class="g-idea">Чтобы сказать «не», ставим <b>not</b> сразу <b>после</b> am / is / are. В русском «не» стоит перед словом, в английском — после глагола.</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">am / is / are</span><span class="g-plus">+</span><span class="g-part g-v">not</span><span class="g-plus">+</span><span class="g-part">…</span></div>
<table>
<tr><th>Полно</th><th>Коротко</th><th>Пример</th></tr>
<tr><td>I am not</td><td><b>I'm not</b></td><td><span class="say">I'm not tired.</span></td></tr>
<tr><td>he / she / it is not</td><td><b>isn't</b></td><td><span class="say">She isn't at home.</span></td></tr>
<tr><td>you / we / they are not</td><td><b>aren't</b></td><td><span class="say">We aren't students.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">He isn't a teacher. He's a designer.</span> — Он не учитель. Он дизайнер.</li>
<li><span class="say">I'm tired, but I'm not hungry.</span> — Я устал, но не голоден.</li>
</ul>
<div class="g-bad">I amn't tired. / I not tired.</div>
<div class="g-good"><span class="say">I'm not tired.</span> <span class="muted">— для I есть только I'm not</span></div>
<div class="g-tip">Как задавать вопросы (Are you…? Is it…?) и больше про «не» — в следующем уроке.</div>
<div class="mini" data-q="They ___ at work. They are at home." data-o="isn't|aren't|amn't" data-a="1" data-why="They → are → are not = aren't."></div>`
        },
        {
          title: '5. it и you — два слова, где русский мешает',
          html: `
<p><b>it</b> — это «он/она/оно» для <b>предметов</b>, а ещё «это» в коротких фразах. Рода у предметов в английском нет.</p>
<ul class="g-list">
<li><span class="say">The game? It is good.</span> — Игра? Она хорошая.</li>
<li><span class="say">The coffee? It's good.</span> — Кофе? Он хороший.</li>
<li><span class="say">It's late.</span> — (Уже) поздно. <span class="muted">(время — всегда it)</span></li>
</ul>
<div class="g-bad">The game? She is good.</div>
<div class="g-good"><span class="say">The game? It is good.</span></div>
<p><b>you</b> — это и «ты», и «вы» (одному человеку или многим). Форма всегда <b>are</b>, даже если вы говорите с одним человеком.</p>
<ul class="g-list">
<li><span class="say">You are my friend.</span> — Ты мой друг.</li>
<li><span class="say">You are late, Tom and Anna!</span> — Вы опоздали, Том и Анна!</li>
</ul>
<div class="g-bad">You is my friend.</div>
<div class="g-good"><span class="say">You are my friend.</span></div>
<div class="g-tip">Русский «он/она» для вещей (кофе — <i>он</i>, игра — <i>она</i>) в английском всегда превращается в <b>it</b>.</div>
<div class="mini" data-q="Про игру: «Она хорошая»" data-o="She is good.|It is good.|He is good." data-a="1" data-why="Игра — предмет, значит it."></div>`
        },
        {
          title: '6. a / an перед профессией',
          html: `
<p>Когда говорим, <b>кем</b> является человек (профессия, роль), перед словом ставим маленькое <b>a</b>. На русский оно не переводится.</p>
<ul class="g-list">
<li><span class="say">I am a student.</span> — Я студент.</li>
<li><span class="say">She is a teacher.</span> — Она учитель.</li>
<li><span class="say">He is a designer.</span> — Он дизайнер.</li>
<li><span class="say">Anna is an artist.</span> — Анна художница.</li>
</ul>
<div class="g-formula"><span class="g-part g-v">a</span><span class="g-part">перед согласным звуком: a student, a good artist</span><span class="g-sep">·</span><span class="g-part g-v">an</span><span class="g-part">перед гласным звуком: an artist</span></div>
<p>Смотрим на <b>следующее слово</b>, а не на профессию: <span class="say">an artist</span>, но <span class="say">a good artist</span>.</p>
<p>Если людей много — <b>a</b> не нужен: <span class="say">They are students.</span></p>
<p>А вот если после am / is / are идёт <b>какой?</b> или <b>где?</b> — артикль <b>не нужен</b>:</p>
<div class="g-bad">I am a tired.</div>
<div class="g-good"><span class="say">I am tired.</span> <span class="muted">— «уставший» отвечает на вопрос «какой?»</span></div>
<div class="g-bad">She is teacher.</div>
<div class="g-good"><span class="say">She is a teacher.</span></div>
<div class="mini" data-q="Она художница." data-o="She is artist.|She is a artist.|She is an artist." data-a="2" data-why="Профессия → нужен артикль; artist начинается с гласного звука → an."></div>
<div class="mini" data-q="We are ___ happy." data-o="a|an|—" data-a="2" data-why="happy отвечает на «какой?», артикль не нужен."></div>`
        },
        {
          title: '7. Живые фразы с be: как дела, откуда ты, сколько лет',
          html: `
<div class="g-idea">Многие вещи, которые по-русски говорят <b>без глагола</b> или <b>с «у меня»</b>, по-английски говорят с <b>be</b>.</div>
<table>
<tr><th>Русский</th><th>English</th></tr>
<tr><td>Как дела? — Хорошо, спасибо.</td><td><span class="say">How are you? — I'm fine, thanks.</span></td></tr>
<tr><td>А ты?</td><td><span class="say">And you?</span></td></tr>
<tr><td>Я из Казани.</td><td><span class="say">I'm from Kazan.</span></td></tr>
<tr><td>Мне двадцать (лет).</td><td><span class="say">I'm twenty.</span></td></tr>
<tr><td>Я опоздал. Извините!</td><td><span class="say">Sorry, I'm late!</span></td></tr>
<tr><td>Меня зовут Илья.</td><td><span class="say">My name is Ilya.</span></td></tr>
</table>
<div class="g-bad">I have twenty years.</div>
<div class="g-good"><span class="say">I'm twenty.</span> <span class="muted">— возраст: «я есть двадцать»</span></div>
<div class="g-bad">I am late. <span class="muted">— это верно, но без sorry звучит резко</span></div>
<div class="g-good"><span class="say">Sorry, I'm late.</span></div>
<p><b>my</b> — мой, <b>your</b> — твой / ваш: <span class="say">Tom is my friend.</span> <span class="say">What's your name?</span></p>
<div class="g-tip">«Опоздал» по-английски — не действие, а состояние: <b>I'm late</b> = «я поздний». Так же <b>I'm hungry</b> — «я голодный», а не «я хочу есть».</div>
<div class="mini" data-q="Мне девятнадцать." data-o="I have nineteen.|I'm nineteen.|My nineteen." data-a="1" data-why="Возраст говорим через be: I'm + число."></div>
<div class="mini" data-q="How are you? — ___" data-o="I'm fine, thanks.|I fine, thanks.|I'm twenty." data-a="0" data-why="На «как дела?» отвечают I'm fine: с глаголом be (I'm)."></div>`
        },
        {
          title: '8. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">I student.</div><div class="g-good">I <b>am a</b> student.</div>
<div class="g-bad">He are my friend.</div><div class="g-good">He <b>is</b> my friend.</div>
<div class="g-bad">I is happy.</div><div class="g-good">I <b>am</b> happy.</div>
<div class="g-bad">My friends is from Kazan.</div><div class="g-good">My friends <b>are</b> from Kazan.</div>
<div class="g-bad">I amn't tired.</div><div class="g-good">I<b>'m not</b> tired.</div>
<div class="g-bad">The game? She is good.</div><div class="g-good">The game? <b>It</b> is good.</div>
<div class="g-bad">I have twenty years.</div><div class="g-good"><b>I'm</b> twenty.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>I am</b> · <b>he / she / it is</b> · <b>you / we / they are</b> · «не» = <b>not</b> после глагола — и никогда не пропускаем этот глагол.</div>`
        }
      ],
      words: [
        ['I', 'я', 'I am Ilya.', 'Я Илья.'],
        ['you', 'ты, вы', 'You are my friend.', 'Ты мой друг.'],
        ['he', 'он', 'He is a teacher.', 'Он учитель.'],
        ['she', 'она', 'She is at home.', 'Она дома.'],
        ['it', 'оно, это (предмет)', 'It is a good game.', 'Это хорошая игра.'],
        ['we', 'мы', 'We are from Russia.', 'Мы из России.'],
        ['they', 'они', 'They are students.', 'Они студенты.'],
        ['be', 'быть (am / is / are)', 'Be happy!', 'Будь счастлив!'],
        ['student', 'студент, ученик', 'I am a student.', 'Я студент.'],
        ['teacher', 'учитель', 'She is a good teacher.', 'Она хороший учитель.'],
        ['designer', 'дизайнер', 'He is a designer.', 'Он дизайнер.'],
        ['artist', 'художник', 'Anna is an artist.', 'Анна художница.'],
        ['friend', 'друг', 'Tom is my friend.', 'Том мой друг.'],
        ['name', 'имя', 'My name is Anna.', 'Меня зовут Анна.'],
        ['my', 'мой', 'Kate is my friend.', 'Кейт моя подруга.'],
        ['your', 'твой, ваш', 'What\'s your name?', 'Как тебя зовут?'],
        ['from', 'из, от', 'I am from Moscow.', 'Я из Москвы.'],
        ['happy', 'счастливый, довольный', 'We are happy.', 'Мы счастливы.'],
        ['tired', 'уставший', 'I am tired.', 'Я устал.'],
        ['hungry', 'голодный', 'I\'m hungry!', 'Я голоден!'],
        ['good', 'хороший', 'The game is good.', 'Игра хорошая.'],
        ['fine', 'хорошо, в порядке', 'I am fine, thanks.', 'Я в порядке, спасибо.'],
        ['nice', 'приятный, милый', 'She is a nice woman.', 'Она приятная женщина.'],
        ['meet', 'встречать, знакомиться', 'Nice to meet you.', 'Приятно познакомиться.'],
        ['at home', 'дома', 'She is at home.', 'Она дома.'],
        ['at work', 'на работе', 'He is at work.', 'Он на работе.'],
        ['late', 'поздно, опоздавший', 'Sorry, I\'m late.', 'Простите, я опоздал.'],
        ['and', 'и, а', 'Tom and Anna are friends.', 'Том и Анна друзья.'],
        ['man', 'мужчина', 'He is a nice man.', 'Он приятный мужчина.'],
        ['woman', 'женщина', 'She is a good woman.', 'Она хорошая женщина.'],
        ['how', 'как', 'How are you?', 'Как дела?'],
        ['game', 'игра', 'It\'s a good game.', 'Это хорошая игра.']
      ],
      texts: [
        {
          id: 't-a1-1-1', title: 'Nice to meet you', level: 'A1',
          text: `Hi! My name is Anna. I'm nineteen. I'm an artist, and I'm from Moscow.
Tom is my friend. He is from London. He isn't an artist. He is a designer, and he is a good designer.
Tom and I are at work. It's late. We are tired and hungry, but we are happy. The game is good!
Kate is my friend too. She is a teacher. She isn't at work. She is at home.
Kate: Hi, Anna! Hi, Tom! How are you?
Anna: Hi, Kate! I'm fine, thanks. And you?
Kate: I'm fine too. I'm at home, and you are at work. It's late!
Tom: Yes, it's late. We're tired, but we aren't at home. Sorry, Kate.
Kate: OK! Tom, you are a good friend, and Anna is a good friend too. But you are tired!
Anna: Yes, we are. Bye, Kate!
Kate: Bye!`,
          questions: [
            { q: 'Anna is …', o: ['a teacher', 'an artist', 'a designer'], a: 1 },
            { q: 'Tom is from …', o: ['Moscow', 'London', 'Kazan'], a: 1 },
            { q: 'Anna and Tom are …', o: ['at home', 'at work', 'students'], a: 1 }
          ]
        },
        {
          id: 't-a1-1-2', title: 'My team', level: 'A1',
          text: `My name is Ilya. I'm a designer, and I'm from Kazan.
Max, Kate, Sam and Lily are my friends. We are five friends. We are at work, and the game is good!
Max is a designer too. He is from Kazan. He is a nice man, and he is a good friend.
Kate is an artist. She is from London. She isn't a designer, but she is a good artist.
Sam and Lily aren't designers. They are students. They are from New York.
It's late. We are tired, but we aren't at home. We are at work.
Sam and Lily are happy. The game is good! Kate is happy too.
Max isn't happy. He is hungry and tired.
Max: Sorry, friends. I'm hungry, and I'm tired. Bye!
Kate: Bye, Max! You're a good friend.
I'm tired too, but I'm happy. We are good friends!`,
          questions: [
            { q: 'Ilya is …', o: ['a student', 'a designer', 'an artist'], a: 1 },
            { q: 'Kate is from …', o: ['London', 'Kazan', 'New York'], a: 0 },
            { q: 'Max is …', o: ['happy', 'hungry', 'at home'], a: 1 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: 'I ___ a designer.', o: ['am', 'is', 'are'], a: 0, why: 'После I всегда am.' },
        { t: 'choice', q: 'Kate ___ my friend.', o: ['am', 'is', 'are'], a: 1, why: 'Kate — один человек (она = she) → is.' },
        { t: 'choice', q: 'Tom and I ___ at work.', o: ['am', 'is', 'are'], a: 2, why: 'Tom and I = мы (we) → are.' },
        { t: 'choice', q: 'It ___ late.', o: ['am', 'is', 'are'], a: 1, why: 'it → is.' },
        { t: 'choice', q: 'She is ___ artist.', o: ['a', 'an', '—'], a: 1, why: 'Профессия → нужен артикль; artist начинается с гласного звука → an.' },
        { t: 'choice', q: 'I am ___ happy.', o: ['a', 'an', '—'], a: 2, why: 'happy отвечает на «какой?» — артикль не нужен.' },
        { t: 'choice', q: 'He ___ a student. He is a designer.', o: ['isn\'t', 'aren\'t', 'amn\'t'], a: 0, why: 'he → is → is not = isn\'t.' },
        { t: 'choice', q: 'Про игру: «Она хорошая».', o: ['She is good.', 'It is good.', 'He is good.'], a: 1, why: 'Игра — предмет, для предметов — it.' },
        { t: 'gap', q: 'They ___ students.', a: ['are'], hint: 'be', why: 'they → are.' },
        { t: 'gap', q: 'Max ___ from Kazan.', a: ['is'], hint: 'be', why: 'Max — один человек (он = he) → is.' },
        { t: 'gap', q: 'I ___ tired.', a: ['am'], hint: 'be', why: 'I → am.' },
        { t: 'gap', q: 'You ___ late!', a: ['are'], hint: 'be', why: 'you (ты и вы) → всегда are.' },
        { t: 'gap', q: 'we are → ___ (коротко)', a: ['we\'re'], why: 'are → \'re: we\'re.' },
        { t: 'gap', q: 'I ___ not at home. I\'m at work.', a: ['am'], hint: 'be', why: 'Отрицание: I am not — not ставим после am.' },
        { t: 'order', a: 'My friend is a good designer', ru: 'Мой друг — хороший дизайнер' },
        { t: 'order', a: 'We are from Moscow', ru: 'Мы из Москвы' },
        { t: 'tr', q: 'Я студент.', a: ['i am a student', 'i\'m a student'] },
        { t: 'tr', q: 'Она дома.', a: ['she is at home', 'she\'s at home'] },
        { t: 'tr', q: 'Они мои друзья.', a: ['they are my friends', 'they\'re my friends'] },
        { t: 'listen', say: 'Nice to meet you', a: ['nice to meet you'] }
      ],
      test: [
        { t: 'gap', q: 'We ___ happy.', a: ['are'], hint: 'be', why: 'we → are.' },
        { t: 'gap', q: 'Tom ___ from London.', a: ['is'], hint: 'be', why: 'Tom — один человек (он = he) → is.' },
        { t: 'gap', q: 'My friends ___ tired.', a: ['are'], hint: 'be', why: 'My friends — много людей (они = they) → are.' },
        { t: 'gap', q: 'she is → ___ (коротко)', a: ['she\'s'], why: 'is → \'s: she\'s.' },
        { t: 'gap', q: 'They ___ at home. They are at work. (не, коротко)', a: ['aren\'t'], why: 'they → are; are not = aren\'t.' },
        { t: 'choice', q: 'Мне двадцать.', o: ['I have twenty years.', 'I am twenty.', 'I twenty.'], a: 1, why: 'Возраст говорим через be: I am (I\'m) + число.' },
        { t: 'choice', q: 'Про игру говорим:', o: ['he', 'she', 'it'], a: 2, why: 'Игра — предмет, а у предметов нет рода: it.' },
        { t: 'choice', q: 'Anna is ___ good artist.', o: ['a', 'an', '—'], a: 0, why: 'Смотрим на следующее слово: good начинается с согласного звука → a.' },
        { t: 'choice', q: 'you = ?', o: ['только «ты»', 'только «вы»', 'и «ты», и «вы»'], a: 2, why: 'you — это и «ты», и «вы»; форма всегда are.' },
        { t: 'choice', q: 'I ___ from London. I\'m from Moscow.', o: ['am not', 'isn\'t', 'aren\'t'], a: 0, why: 'Для I отрицание только am not (I\'m not).' },
        { t: 'choice', q: '— How are you? — ___', o: ['I\'m fine, thanks.', 'I fine, thanks.', 'I is fine.'], a: 0, why: 'Нужен глагол be, и с I — только am: I\'m fine.' },
        { t: 'choice', q: 'Kate and Anna ___ teachers. They are students.', o: ['isn\'t', 'aren\'t', 'am not'], a: 1, why: 'Kate and Anna = they → are not = aren\'t.' }
      ]
    }
  ].forEach(put);
})();
