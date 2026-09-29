// Юнит 0 — старт: алфавит, звуки, числа, первые фразы. Стиль «как у Мерфи, только проще».
(function () {
  const u = COURSE.units.find((x) => x.id === 'a1-0');
  if (!u) return;
  u.grammar = [
    {
      title: '1. Главная идея: пишется одно, читается другое',
      html: `
<div class="g-idea">В русском почти всегда <b>как пишем, так и читаем</b>. В английском — нет: одна и та же буква в разных словах звучит по-разному. Поэтому английские слова учат <b>ушами</b>, а не глазами.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>кот → к-о-т → «кот»</p><p>Буква <b>а</b> везде «а».</p></div>
  <div><div class="g-h">English</div><p><span class="say">cat</span> → «кэт»</p><p>Буква <b>a</b>: <span class="say">cat</span>, <span class="say">name</span>, <span class="say">car</span> — три разных звука.</p></div>
</div>
<p>В английском <b>26 букв</b>. У каждой буквы есть <b>название</b> (как «эм», «эс» в русском). Название нужно, чтобы <b>продиктовать</b> имя или почту по буквам. Нажмите на букву, чтобы услышать её название:</p>
<div class="alphabet" data-alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"></div>
<div class="g-tip">Буквы, которые чаще всего путают: <b>E</b> («и»), <b>I</b> («ай»), <b>A</b> («эй»), <b>G</b> («джи»), <b>J</b> («джей»), <b>R</b> («а»), <b>Y</b> («уай»). Послушайте их по два-три раза.</div>
<div class="mini" data-q="Как называется буква I?" data-o="и|ай|эй" data-a="1" data-why="I называется «ай» — как слово I (я). А «и» — это название буквы E."></div>
<div class="mini" data-q="Зачем знать названия букв?" data-o="Чтобы читать слова по буквам|Чтобы продиктовать имя или почту|Незачем" data-a="1" data-why="Слова по названиям букв не читаются. Названия нужны, чтобы продиктовать: My name is Anna, A-N-N-A."></div>`
    },
    {
      title: '2. Как читать новые слова: сначала слушать',
      html: `
<div class="g-idea">Не складывайте английское слово из букв, как по-русски. Сначала <b>послушайте</b>, потом <b>повторите вслух</b>, и только потом посмотрите, как оно пишется.</div>
<div class="g-steps"><div class="g-h">Как учить каждое новое слово</div><ol>
<li>Нажмите на слово и <b>послушайте</b> 2–3 раза.</li>
<li><b>Повторите вслух</b> — не шёпотом, а голосом.</li>
<li>Посмотрите, <b>как оно пишется</b>, и заметьте, где «лишние» буквы.</li>
<li>Скажите слово ещё раз в короткой фразе: <span class="say">Two coffees, please.</span></li>
</ol></div>
<p>Слова, которые по буквам прочитать невозможно — только слушать:</p>
<ul class="g-list">
<li><span class="say">one</span> — один <span class="muted">(звучит «уан», хотя пишется o-n-e)</span></li>
<li><span class="say">eight</span> — восемь <span class="muted">(«эйт», буквы g и h молчат)</span></li>
<li><span class="say">two</span> — два <span class="muted">(«ту», w молчит)</span></li>
<li><span class="say">please</span> — пожалуйста <span class="muted">(«плииз», e на конце молчит)</span></li>
</ul>
<div class="g-bad">«о-н-е» — читаю one по буквам</div>
<div class="g-good">one — «уан», запоминаю по звуку</div>
<div class="g-tip">Представьте, что английское слово — это <b>картинка</b>: вы запоминаете её целиком, как логотип, а не по отдельным пикселям.</div>
<div class="mini" data-q="Как звучит слово eight (8)?" data-o="эйгхт|эйт|эйгт" data-a="1" data-why="Буквы gh здесь молчат, слово звучит «эйт»."></div>`
    },
    {
      title: '3. Звуки, которых нет в русском',
      html: `
<div class="g-idea">Большинство английских звуков похожи на русские. Но несколько звуков у нас <b>нет</b> — именно по ним слышен русский акцент. Их стоит потренировать с самого начала.</div>
<table>
<tr><th>Буквы</th><th>Как сказать</th><th>Примеры</th></tr>
<tr><td><b>th</b></td><td>кончик языка между зубами и выдох</td><td><span class="say">three</span>, <span class="say">thank you</span>, <span class="say">this</span></td></tr>
<tr><td><b>w</b></td><td>губы трубочкой, быстро «уэ»</td><td><span class="say">we</span>, <span class="say">what</span>, <span class="say">twenty</span></td></tr>
<tr><td><b>h</b></td><td>лёгкий выдох, как на стекло</td><td><span class="say">hi</span>, <span class="say">hello</span>, <span class="say">house</span></td></tr>
<tr><td><b>r</b></td><td>язык загнут, не дрожит</td><td><span class="say">red</span>, <span class="say">sorry</span>, <span class="say">three</span></td></tr>
</table>
<div class="g-bad">th как «с» или «ф»: «сенк ю», «фри»</div>
<div class="g-good"><span class="say">thank you</span>, <span class="say">three</span> — язык между зубами</div>
<p><b>Краткое и долгое «и»</b>. В русском «и» одно. В английском их два, и от длины меняется слово:</p>
<table>
<tr><th>Краткое i</th><th>Долгое ee / ea</th></tr>
<tr><td><span class="say">six</span> — шесть</td><td><span class="say">three</span> — три</td></tr>
<tr><td><span class="say">ship</span> — корабль</td><td><span class="say">sheep</span> — овца</td></tr>
<tr><td><span class="say">it</span> — это</td><td><span class="say">eat</span> — есть (кушать)</td></tr>
</table>
<div class="g-tip">Краткое <b>i</b> — быстрое и расслабленное, почти как «ы/и» в слове «шить». Долгое <b>ee</b> — улыбнитесь и тяните: «иии».</div>
<div class="mini" data-q="В каком слове долгое «иии»?" data-o="six|three|it" data-a="1" data-why="ee в three — долгий звук. В six и it — краткое i."></div>
<div class="mini" data-q="Как правильно сказать th в слове three?" data-o="как русское ф|как русское с|язык между зубами" data-a="2" data-why="Звука th в русском нет: кончик языка между зубами и выдох."></div>`
    },
    {
      title: '4. Числа 1–20',
      html: `
<div class="g-idea">Первые 12 чисел нужно просто выучить. С 13 до 19 работает правило: число + <b>-teen</b> («тиин»).</div>
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
<div class="g-formula"><span class="g-part">four / six / seven…</span><span class="g-plus">+</span><span class="g-part g-v">teen</span><span class="g-sep">·</span><span class="g-part">fourteen, sixteen, seventeen</span></div>
<p>Три числа меняются сильнее: <b>three → thirteen</b>, <b>five → fifteen</b>, <b>eight → eighteen</b> (одна t, а не две).</p>
<div class="g-bad">fiveteen, threeteen</div>
<div class="g-good"><span class="say">fifteen</span>, <span class="say">thirteen</span></div>
<div class="g-tip">Русское «-надцать» = английское <b>-teen</b>: четыр<b>надцать</b> — four<b>teen</b>. В -teen ударение на конце: «фоо-ТИИН». А в 40 (<span class="say">forty</span>) — в начале. Так их и различают на слух.</div>
<ul class="g-list">
<li><span class="say">Level twelve.</span> — Уровень двенадцать.</li>
<li><span class="say">Fifteen minutes.</span> — Пятнадцать минут.</li>
<li><span class="say">Twenty points.</span> — Двадцать очков.</li>
</ul>
<div class="mini" data-q="15 по-английски:" data-o="fiveteen|fifteen|fifty" data-a="1" data-why="five превращается в fif-: fifteen. fifty — это 50."></div>
<div class="mini" data-q="Six, seven, eight, nine, ___" data-o="eleven|ten|twenty" data-a="1" data-why="После nine (9) идёт ten (10)."></div>`
    },
    {
      title: '5. Вежливые фразы',
      html: `
<div class="g-idea">В английском <b>please</b> и <b>thank you</b> говорят гораздо чаще, чем у нас. Просьба без please звучит грубо, как приказ.</div>
<table>
<tr><th>English</th><th>Русский</th><th>Когда</th></tr>
<tr><td><span class="say">Hello!</span> / <span class="say">Hi!</span></td><td>Здравствуйте / Привет</td><td>hi — для своих</td></tr>
<tr><td><span class="say">Goodbye!</span> / <span class="say">Bye!</span></td><td>До свидания / Пока</td><td>bye — проще</td></tr>
<tr><td><span class="say">Please.</span></td><td>Пожалуйста</td><td>когда просите</td></tr>
<tr><td><span class="say">Thank you!</span> / <span class="say">Thanks!</span></td><td>Спасибо</td><td>thanks — проще</td></tr>
<tr><td><span class="say">Sorry!</span></td><td>Извините / Прости</td><td>ошибся, опоздал</td></tr>
<tr><td><span class="say">Yes, please.</span> / <span class="say">No, thank you.</span></td><td>Да, пожалуйста / Нет, спасибо</td><td>ответ на предложение</td></tr>
</table>
<p>Русское «пожалуйста» бывает двух видов. По-английски это <b>разные</b> слова:</p>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Кофе, <b>пожалуйста</b>. <span class="muted">(прошу)</span></p><p>— Спасибо! — <b>Пожалуйста</b>. <span class="muted">(отвечаю)</span></p></div>
  <div><div class="g-h">English</div><p><span class="say">Coffee, please.</span></p><p><span class="say">Thank you! — You're welcome.</span></p></div>
</div>
<div class="g-bad">— Thank you! — Please.</div>
<div class="g-good">— Thank you! — <span class="say">You're welcome.</span></div>
<div class="g-tip"><b>please</b> — только когда вы <b>просите</b>. Если вас благодарят — <b>You're welcome</b> (или проще: <span class="say">No problem.</span>).</div>
<div class="mini" data-q="Вам сказали Thank you! Что ответить?" data-o="Please.|You're welcome.|Sorry." data-a="1" data-why="На спасибо отвечают You're welcome. Please — только для просьбы."></div>
<div class="mini" data-q="Два кофе, пожалуйста." data-o="Two coffees, please.|Two coffees, thank you.|Please two coffees you're welcome." data-a="0" data-why="Просим — значит please, обычно в конце фразы."></div>`
    },
    {
      title: '6. Как представиться: Hi, I\'m …',
      html: `
<div class="g-idea">Чтобы познакомиться, хватит одной формулы: <b>Hi, I'm</b> + имя. I'm — это коротко от I am («я есть»).</div>
<div class="g-formula"><span class="g-part">Hi,</span><span class="g-plus">+</span><span class="g-part g-v">I'm</span><span class="g-plus">+</span><span class="g-part">имя</span></div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Привет, я <span class="g-gap">_</span> Илья.</p><p>Меня зовут Анна.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Hi, I'm Ilya.</span></p><p><span class="say">My name is Anna.</span></p></div>
</div>
<div class="g-steps"><div class="g-h">Короткий диалог знакомства</div><ol>
<li><span class="say">Hi, I'm Tom.</span> — Привет, я Том.</li>
<li><span class="say">Hi, Tom! I'm Anna.</span> — Привет, Том! Я Анна.</li>
<li><span class="say">Nice to meet you.</span> — Приятно познакомиться.</li>
<li><span class="say">Nice to meet you too.</span> — Мне тоже.</li>
</ol></div>
<ul class="g-list">
<li><span class="say">I'm a designer.</span> — Я дизайнер.</li>
<li><span class="say">I'm from Russia.</span> — Я из России.</li>
<li><span class="say">My name is Anna, A-N-N-A.</span> — Меня зовут Анна, по буквам: A-N-N-A.</li>
</ul>
<div class="g-bad">I Tom. <span class="muted">— «я Том» без глагола</span></div>
<div class="g-good"><span class="say">I'm Tom.</span></div>
<div class="g-bad">Me name is Anna.</div>
<div class="g-good"><span class="say">My name is Anna.</span></div>
<div class="g-tip">Буква <b>I</b> («я») всегда <b>большая</b>, даже в середине предложения. А <b>'m</b> — хвостик от am, без него фраза «ломается».</div>
<div class="mini" data-q="Привет, я Макс." data-o="Hi, I Max.|Hi, I'm Max.|Hi, me Max." data-a="1" data-why="Нужно I'm (= I am): Hi, I'm Max."></div>`
    },
    {
      title: '7. Типичные ошибки — проверьте себя',
      html: `
<div class="g-mistakes">
<div class="g-bad">one — читаю «о-н-е»</div><div class="g-good">one — «уан», учу на слух</div>
<div class="g-bad">«сенк ю», «фри»</div><div class="g-good"><span class="say">thank you</span>, <span class="say">three</span> — язык между зубами</div>
<div class="g-bad">fiveteen</div><div class="g-good"><span class="say">fifteen</span></div>
<div class="g-bad">— Thank you! — Please.</div><div class="g-good">— Thank you! — <span class="say">You're welcome.</span></div>
<div class="g-bad">I Anna. / i'm Anna.</div><div class="g-good"><span class="say">I'm Anna.</span></div>
</div>
<div class="mini" data-q="Как сказать «Двенадцать очков»?" data-o="Twelve points.|Twoteen points.|Twenty points." data-a="0" data-why="12 — twelve, его просто запоминаем. twenty — это 20."></div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div>Слова <b>слушаем, а не читаем по буквам</b> · числа 13–19 = число + <b>teen</b> · просим с <b>please</b>, благодарим <b>thank you</b> · знакомимся: <b>Hi, I'm …</b></div>`
    }
  ];
})();
