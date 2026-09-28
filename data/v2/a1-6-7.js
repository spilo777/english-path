// Уроки A1 (новая версия): a1-6 — there is / there are, have got, some / any; a1-7 — can / could, me / him / her, my / his / their.
(function () {
  const put = (u) => { const i = COURSE.units.findIndex((x) => x.id === u.id); if (i >= 0) COURSE.units[i] = u; else COURSE.units.push(u); };
  [
    // ───────────────────────────── UNIT 6 ─────────────────────────────
    {
      id: 'a1-6', level: 'A1', num: 6, track: 'main',
      books: { red: [9, 37, 76] },
      title: 'There is, there are — have got — some / any',
      summary: 'Научимся говорить, что где есть («рядом парк»), что у кого есть («у меня есть кот») и сколько чего-то есть («есть немного молока»).',
      grammar: [
        {
          title: '1. Главная идея: «где-то что-то есть»',
          html: `
<div class="g-idea">По-русски мы говорим <b>«В комнате диван»</b> или <b>«Рядом парк»</b> — и глагола нет. По-английски такое предложение начинают с особой рамки <b>there is / there are</b> — «есть, имеется». Так мы сообщаем что-то <b>новое</b>: что где-то что-то находится.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>В комнате <span class="g-gap">_</span> диван.</p><p>Рядом с офисом <span class="g-gap">_</span> кафе.</p><p>В моей квартире <span class="g-gap">_</span> три комнаты.</p></div>
  <div><div class="g-h">English</div><p><span class="say"><b>There is</b> a sofa in the room.</span></p><p><span class="say"><b>There's</b> a café near the office.</span></p><p><span class="say"><b>There are</b> three rooms in my flat.</span></p></div>
</div>
<div class="g-formula"><span class="g-part g-v">There is / There are</span><span class="g-plus">+</span><span class="g-part">что</span><span class="g-plus">+</span><span class="g-part">где</span></div>
<p>Порядок обратный русскому: сначала <b>что</b>, потом <b>где</b>. «В комнате есть стол» → «Есть стол в комнате».</p>
<ul class="g-list">
<li><span class="say">There is a park near my house.</span> — Рядом с моим домом парк.</li>
<li><span class="say">There's a cat on the sofa.</span> — На диване кот.</li>
<li><span class="say">There are two cafés in my street.</span> — На моей улице два кафе.</li>
</ul>
<div class="g-bad">In the room is a sofa.</div>
<div class="g-good">There is a sofa in the room.</div>
<div class="g-tip">Слово <b>there</b> здесь не значит «там». Это просто «заглушка» в начале, как невидимое «вот, имеется…». Переводить его не нужно. <b>there is</b> коротко — <b>there's</b>.</div>
<div class="mini" data-q="Рядом с моим домом парк." data-o="Near my house is a park.|There is a park near my house.|A park is near there my house." data-a="1" data-why="Сообщаем, что где-то что-то есть: There is + что + где."></div>`
        },
        {
          title: '2. is или are? Отрицание, вопрос, How many',
          html: `
<p>Выбор такой же, как в юните 1: <b>один</b> предмет → <b>is</b>, <b>много</b> → <b>are</b>.</p>
<table>
<tr><th></th><th>Один</th><th>Много</th></tr>
<tr><td>+</td><td><span class="say">There is a bed.</span></td><td><span class="say">There are two beds.</span></td></tr>
<tr><td>−</td><td><span class="say">There isn't a cinema.</span></td><td><span class="say">There aren't any shops.</span></td></tr>
<tr><td>?</td><td><span class="say">Is there a café?</span></td><td><span class="say">Are there any eggs?</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Как построить вопрос</div><ol>
<li>Берём утверждение: <span class="say">There is a shop near here.</span></li>
<li>Меняем местами первые два слова: <b>There is</b> → <b>Is there</b>.</li>
<li>Готово: <span class="say">Is there a shop near here?</span></li>
</ol></div>
<p>Короткие ответы: <span class="say">Yes, there is.</span> / <span class="say">No, there isn't.</span> · <span class="say">Yes, there are.</span> / <span class="say">No, there aren't.</span></p>
<p><b>Сколько?</b> — <b>How many</b> + много предметов + <b>are there</b>:</p>
<ul class="g-list">
<li><span class="say">How many rooms are there in your flat?</span> — Сколько комнат в твоей квартире?</li>
<li><span class="say">There are three.</span> — Три.</li>
<li><span class="say">There are a lot of people in the park.</span> — В парке много людей.</li>
</ul>
<div class="g-bad">There is three bedrooms.</div>
<div class="g-good">There are three bedrooms. <span class="muted">— много → are</span></div>
<div class="g-tip">Смотрите на слово <b>сразу после</b> is/are: <b>a</b> sofa → is, <b>two</b> sofas → are, <b>a lot of</b> people → are.</div>
<div class="mini" data-q="___ there a cinema in your city?" data-o="Are|Is|Do" data-a="1" data-why="Один кинотеатр → is; в вопросе is идёт первым."></div>
<div class="mini" data-q="Are there any eggs? — Yes, there ___." data-o="is|are|have" data-a="1" data-why="Вопрос с are (много яиц) → и ответ с are."></div>`
        },
        {
          title: '3. There is или It is?',
          html: `
<div class="g-idea"><b>There is</b> — сообщаем, что что-то <b>есть</b> (новая вещь). <b>It is</b> — говорим <b>про эту вещь</b>, какая она, когда о ней уже знаем.</div>
<ul class="g-list">
<li><span class="say">There's a café near my office. It's small and cheap.</span> — Рядом с офисом есть кафе. Оно маленькое и дешёвое.</li>
<li><span class="say">There's a new game on my laptop. It's very good.</span> — У меня на ноутбуке новая игра. Она очень хорошая.</li>
<li><span class="say">Look at this sofa! It's very big.</span> — Посмотри на этот диван! Он очень большой.</li>
</ul>
<table>
<tr><th>Вопрос в голове</th><th>Начинаем с</th><th>Пример</th></tr>
<tr><td>Что там есть?</td><td><b class="g-v">There is</b></td><td><span class="say">There's a book on the table.</span></td></tr>
<tr><td>Какой он? Что это?</td><td><b class="g-v">It is</b></td><td><span class="say">It's an old book.</span></td></tr>
</table>
<div class="g-bad">It's a book on the table. <span class="muted">— когда сообщаем, что там лежит книга</span></div>
<div class="g-good">There's a book on the table. It's my book.</div>
<div class="g-tip">Сначала <b>there</b> «ставит» вещь на сцену, потом <b>it</b> про неё рассказывает.</div>
<div class="mini" data-q="There's a park opposite my house. ___ very big." data-o="There's|It's|Is" data-a="1" data-why="Парк уже назвали, теперь говорим, какой он → It's."></div>`
        },
        {
          title: '4. have got — «у меня есть»',
          html: `
<div class="g-idea">Про <b>«у кого-то есть»</b> англичане часто говорят <b>have got</b>. Смысл тот же, что у <b>I have</b> из юнита 3, — просто это очень частый разговорный вариант, особенно в британском английском.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>У меня есть кот.</p><p>У Кейт новая квартира.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I've got a cat.</span> = <span class="say">I have a cat.</span></p><p><span class="say">Kate's got a new flat.</span> = <span class="say">Kate has a new flat.</span></p></div>
</div>
<table>
<tr><th>Кто</th><th>+</th><th>−</th><th>?</th></tr>
<tr><td>I / you / we / they</td><td><span class="say">I've got</span></td><td><span class="say">I haven't got</span></td><td><span class="say">Have you got…?</span></td></tr>
<tr><td>he / she / it</td><td><span class="say">She's got</span></td><td><span class="say">He hasn't got</span></td><td><span class="say">Has she got…?</span></td></tr>
</table>
<p>Короткие ответы: <span class="say">Yes, I have.</span> / <span class="say">No, I haven't.</span> · <span class="say">Yes, she has.</span> / <span class="say">No, she hasn't.</span> <span class="muted">(got в коротком ответе не нужен)</span></p>
<ul class="g-list">
<li><span class="say">I've got a new laptop.</span> — У меня новый ноутбук.</li>
<li><span class="say">My flat hasn't got a garden.</span> — У моей квартиры нет сада.</li>
<li><span class="say">How many rooms has your flat got?</span> — Сколько комнат в твоей квартире?</li>
<li><span class="say">What have you got in your bag?</span> — Что у тебя в сумке?</li>
</ul>
<div class="g-bad">Do you have got a laptop?</div>
<div class="g-good">Have you got a laptop? <span class="muted">или</span> Do you have a laptop?</div>
<div class="g-tip">Не смешивайте два способа. <b>have got</b> — сам себе помощник, do ему не нужен. А <b>she's got</b> — это she <b>has</b> got, а не she is.</div>
<div class="g-tip"><b>Где есть?</b> → there is. <b>У кого есть?</b> → have got. <span class="say">There is a cat in the room.</span> — В комнате кот. <span class="say">I've got a cat.</span> — У меня кот.</div>
<div class="mini" data-q="___ you got a car?" data-o="Do|Have|Are" data-a="1" data-why="С have got вопрос начинается с Have, без do."></div>
<div class="mini" data-q="Kate ___ got a new flat." data-o="have|has|is" data-a="1" data-why="Kate = she → has got."></div>`
        },
        {
          title: '5. have или have got? Два способа — одно значение',
          html: `
<p>«У меня есть» можно сказать двумя способами. Главное — не смешивать их внутри одного предложения.</p>
<table>
<tr><th></th><th>have (+ do)</th><th>have got</th></tr>
<tr><td>+</td><td><span class="say">I have a dog.</span></td><td><span class="say">I've got a dog.</span></td></tr>
<tr><td>−</td><td><span class="say">I don't have a car.</span></td><td><span class="say">I haven't got a car.</span></td></tr>
<tr><td>?</td><td><span class="say">Does she have a cat?</span></td><td><span class="say">Has she got a cat?</span></td></tr>
<tr><td>Ответ</td><td><span class="say">Yes, she does.</span></td><td><span class="say">Yes, she has.</span></td></tr>
</table>
<p>Вопрос с <b>do / does</b> → ответ с do / does. Вопрос с <b>have / has</b> → ответ с have / has.</p>
<div class="g-steps"><div class="g-h">Когда got нельзя</div><ol>
<li><b>have got</b> — только «иметь, у меня есть».</li>
<li>Если <b>have</b> — это действие (есть, пить, делать), got не ставим: <span class="say">I have breakfast at eight.</span> — Я завтракаю в восемь.</li>
</ol></div>
<div class="g-bad">I've got breakfast at eight.</div>
<div class="g-good">I have breakfast at eight.</div>
<div class="mini" data-q="Do you have a car? — No, I ___." data-o="haven't|don't|am not" data-a="1" data-why="Вопрос с do → короткий ответ с don't."></div>`
        },
        {
          title: '6. some и any — «немного, какие-то»',
          html: `
<div class="g-idea"><b>some</b> и <b>any</b> значат «немного, несколько, какие-то». Часто по-русски их вообще не переводят. Какое слово ставить — зависит от типа предложения.</div>
<table>
<tr><th>Предложение</th><th>Слово</th><th>Пример</th></tr>
<tr><td>+ утверждение</td><td><b class="g-v">some</b></td><td><span class="say">There is some milk.</span></td></tr>
<tr><td>− отрицание</td><td><b class="g-v">any</b></td><td><span class="say">There isn't any bread.</span></td></tr>
<tr><td>? вопрос</td><td><b class="g-v">any</b></td><td><span class="say">Have you got any water?</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I've got some apples.</span> — У меня есть яблоки.</li>
<li><span class="say">We haven't got any eggs.</span> — У нас нет яиц.</li>
<li><span class="say">Are there any shops near here?</span> — Тут рядом есть магазины?</li>
</ul>
<p>some / any ставим перед <b>множественным числом</b> (eggs, shops) и перед тем, что <b>нельзя посчитать</b>: milk, water, bread, cheese, tea, coffee.</p>
<div class="g-steps"><div class="g-h">Неисчисляемое (молоко, вода, хлеб, сыр)</div><ol>
<li>Без <b>a</b>: не a milk, а <b>some milk</b>.</li>
<li>Без <b>-s</b>: не breads, а <b>bread</b>.</li>
<li>С <b>there is</b>, не there are: <span class="say">There is some cheese.</span></li>
</ol></div>
<p><b>Когда предлагаем</b> что-то, в вопросе обычно <b>some</b> — мы ждём «да»: <span class="say">Do you want some tea?</span> — Хочешь чаю?</p>
<p><b>Без существительного</b> — если уже ясно, о чём речь: <span class="say">Is there any milk? — Yes, there's some in the fridge.</span> · <span class="say">I want some coffee. — Sorry, there isn't any.</span></p>
<p>Так же работают <b>something</b> (что-то) и <b>anything</b> (что-нибудь, ничего): <span class="say">There's something on the chair.</span> · <span class="say">There isn't anything in my bag.</span></p>
<div class="g-bad">There are some breads.</div>
<div class="g-good">There is some bread.</div>
<div class="g-tip"><b>any</b> любит «сомнение и нет»: вопрос и отрицание. <b>some</b> — когда точно «да, есть».</div>
<div class="mini" data-q="There isn't ___ cheese." data-o="some|any|a" data-a="1" data-why="Отрицание → any."></div>
<div class="mini" data-q="There ___ some water on the table." data-o="is|are|have" data-a="0" data-why="Вода неисчисляемая → there is."></div>`
        },
        {
          title: '7. Где? near, next to, opposite',
          html: `
<p>В конце предложения с there is часто стоит <b>где</b>. Три полезных слова:</p>
<table>
<tr><th>Слово</th><th>Значит</th><th>Пример</th></tr>
<tr><td><b>near</b></td><td>рядом, недалеко</td><td><span class="say">I live near the park.</span></td></tr>
<tr><td><b>next to</b></td><td>вплотную, возле</td><td><span class="say">My bag is next to the sofa.</span></td></tr>
<tr><td><b>opposite</b></td><td>напротив</td><td><span class="say">The shop is opposite the station.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">There's a nice café opposite my office.</span> — Напротив моего офиса хорошее кафе.</li>
<li><span class="say">Is there a supermarket near here?</span> — Тут рядом есть супермаркет?</li>
<li><span class="say">There's a cinema next to the station.</span> — Возле вокзала кинотеатр.</li>
</ul>
<div class="g-bad">The shop is next the café.</div>
<div class="g-good">The shop is next <b>to</b> the café.</div>
<div class="g-tip"><b>next to</b> — всегда вдвоём, как «рядом <i>с</i>». А <b>near</b> и <b>opposite</b> — без to.</div>
<div class="mini" data-q="Магазин напротив вокзала: The shop is ___ the station." data-o="next|opposite|near to" data-a="1" data-why="Напротив = opposite, без to."></div>`
        },
        {
          title: '8. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">In my room is a big bed.</div><div class="g-good"><b>There is</b> a big bed in my room.</div>
<div class="g-bad">There is two eggs.</div><div class="g-good">There <b>are</b> two eggs.</div>
<div class="g-bad">It's a café near my house.</div><div class="g-good"><b>There's</b> a café near my house. <b>It's</b> small.</div>
<div class="g-bad">Do you have got a laptop?</div><div class="g-good"><b>Have</b> you got a laptop?</div>
<div class="g-bad">She have got a dog.</div><div class="g-good">She <b>has</b> got a dog.</div>
<div class="g-bad">There isn't some milk.</div><div class="g-good">There isn't <b>any</b> milk.</div>
<div class="g-bad">There are some breads.</div><div class="g-good">There <b>is</b> some <b>bread</b>.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>где</b> есть → <b>there is / are</b> · <b>у кого</b> есть → <b>have / has got</b> · «да» → <b>some</b>, «нет» и «?» → <b>any</b>.</div>`
        }
      ],
      words: [
        ['there is', 'есть, имеется (одно)', 'There is a park near my house.', 'Рядом с моим домом есть парк.'],
        ['there are', 'есть, имеются (много)', 'There are three rooms in my flat.', 'В моей квартире три комнаты.'],
        ['have got', 'иметь; у меня есть', "I've got a new laptop.", 'У меня новый ноутбук.'],
        ['some', 'немного, несколько', 'There is some milk in the fridge.', 'В холодильнике есть немного молока.'],
        ['any', 'какой-нибудь; нисколько (в вопросе и отрицании)', 'Have you got any bread?', 'У тебя есть хлеб?'],
        ['flat', 'квартира', "My flat is small, but it's nice.", 'Моя квартира маленькая, но милая.'],
        ['kitchen', 'кухня', 'There is a big table in the kitchen.', 'На кухне большой стол.'],
        ['bedroom', 'спальня', 'The flat has got two bedrooms.', 'В квартире две спальни.'],
        ['bathroom', 'ванная', 'Is there a bathroom here?', 'Здесь есть ванная?'],
        ['bed', 'кровать', 'The cat is sleeping on my bed.', 'Кот спит на моей кровати.'],
        ['sofa', 'диван', 'There is a big sofa in the room.', 'В комнате большой диван.'],
        ['fridge', 'холодильник', 'Is there any cheese in the fridge?', 'В холодильнике есть сыр?'],
        ['door', 'дверь', 'There is a cat at the door.', 'У двери сидит кот.'],
        ['garden', 'сад', "My house hasn't got a garden.", 'У моего дома нет сада.'],
        ['street', 'улица', 'There are a lot of cafés in my street.', 'На моей улице много кафе.'],
        ['shop', 'магазин', 'Is there a shop near here?', 'Здесь рядом есть магазин?'],
        ['supermarket', 'супермаркет', 'The supermarket is next to the station.', 'Супермаркет рядом с вокзалом.'],
        ['park', 'парк', "There's a big park in my city.", 'В моём городе есть большой парк.'],
        ['café', 'кафе', "There's a nice café opposite my office.", 'Напротив моего офиса хорошее кафе.'],
        ['restaurant', 'ресторан', 'This restaurant is expensive.', 'Этот ресторан дорогой.'],
        ['cinema', 'кинотеатр', 'Is there a cinema in your city?', 'В твоём городе есть кинотеатр?'],
        ['station', 'вокзал, станция', 'The station is near my house.', 'Станция недалеко от моего дома.'],
        ['near', 'рядом, недалеко', 'I live near the park.', 'Я живу рядом с парком.'],
        ['next to', 'рядом с, возле', 'My bag is next to the sofa.', 'Моя сумка возле дивана.'],
        ['opposite', 'напротив', 'The shop is opposite the station.', 'Магазин напротив вокзала.'],
        ['bread', 'хлеб', "There isn't any bread.", 'Хлеба нет.'],
        ['milk', 'молоко', "I've got some milk.", 'У меня есть немного молока.'],
        ['egg', 'яйцо', 'There are two eggs in the fridge.', 'В холодильнике два яйца.'],
        ['cheese', 'сыр', 'Do you want some cheese?', 'Хочешь сыра?'],
        ['water', 'вода', 'Have you got any water?', 'У тебя есть вода?'],
        ['vegetables', 'овощи', 'There are some vegetables on the table.', 'На столе есть овощи.'],
        ['a lot of', 'много', 'There are a lot of people in the park.', 'В парке много людей.']
      ],
      texts: [
        {
          id: 't-a1-6-1', title: "Max's new flat", level: 'A1',
          text: `Max has got a new flat in the city. It isn't big, but it's nice, and it isn't expensive.
There are two rooms: a bedroom and a big room. There's a small kitchen and a bathroom too.
In the big room there is a sofa and a big table. Max's laptop is on the table. There aren't any chairs! Max usually sits on the sofa and works there.
There's a fridge in the kitchen. There's some milk and there are some eggs in it, but there isn't any bread.
The flat hasn't got a garden, but there's a park opposite the house. It's very big. There are a lot of cafés in the street, and there's a supermarket next to the station. The station is near.
Max is happy. He's got a new flat, and he loves it.`,
          questions: [
            { q: 'How many rooms are there in the flat?', o: ['one', 'two', 'three'], a: 1 },
            { q: 'What is opposite the house?', o: ['a park', 'a station', 'a supermarket'], a: 0 },
            { q: "What isn't there in the big room?", o: ['a sofa', 'a table', 'chairs'], a: 2 }
          ]
        },
        {
          id: 't-a1-6-2', title: 'Is there any milk?', level: 'A1',
          text: `Anna: Tom, I'm making breakfast. Is there any milk?
Tom: Yes, there is. There's some milk in the fridge.
Anna: Good. Are there any eggs?
Tom: Yes, there are. There are two eggs. That's all.
Anna: Two eggs? And have we got any bread?
Tom: No, we haven't. There isn't any bread, and there isn't any cheese.
Anna: Oh no! Is there a shop near here?
Tom: Yes, there's a small shop opposite the park. But it isn't near, and it's cold today.
Anna: Hmm. Is there a café near here?
Tom: Yes, there's a café next to the station. It's small, but it's nice and cheap. There's good coffee there.
Anna: Breakfast in the café, then?
Tom: Yes! I'm very hungry. Where is my jacket?
Anna: It's on the chair, next to the door.`,
          questions: [
            { q: 'What is there in the fridge?', o: ['some milk and two eggs', 'some bread and cheese', 'some vegetables'], a: 0 },
            { q: 'Where is the small shop?', o: ['next to the station', 'opposite the park', 'next to the café'], a: 1 },
            { q: 'Where do Anna and Tom want to have breakfast?', o: ['at home', 'in a café', 'at work'], a: 1 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: 'There ___ two bedrooms in my flat.', o: ['is', 'are', 'am'], a: 1, why: 'Две спальни — много → there are.' },
        { t: 'choice', q: '___ there a cinema near here?', o: ['Are', 'Is', 'Has'], a: 1, why: 'Один кинотеатр → is; в вопросе is стоит перед there.' },
        { t: 'choice', q: 'Max ___ got a new laptop.', o: ['have', 'has', 'is'], a: 1, why: 'Max = he → has got.' },
        { t: 'choice', q: '___ you got a car?', o: ['Do', 'Have', 'Are'], a: 1, why: 'С have got вопрос начинается с Have, do не нужен.' },
        { t: 'choice', q: "There isn't ___ milk in the fridge.", o: ['some', 'any', 'a'], a: 1, why: 'В отрицании ставим any.' },
        { t: 'choice', q: "I've got ___ apples.", o: ['some', 'any', 'a'], a: 0, why: 'Утверждение + много яблок → some.' },
        { t: 'choice', q: "There's a café near my office. ___ small and cheap.", o: ["There's", "It's", 'Is'], a: 1, why: 'Кафе уже назвали, теперь говорим, какое оно → It\'s.' },
        { t: 'choice', q: 'Мой дом рядом с парком: My house is ___ the park.', o: ['near', 'opposite', 'next'], a: 0, why: 'Рядом = near (без to); opposite — напротив, next без to не бывает.' },
        { t: 'gap', q: 'Are there any eggs? — Yes, there ___.', a: ['are'], why: 'Вопрос с are → короткий ответ тоже с are.' },
        { t: 'gap', q: 'Has Kate got a garden? — No, she ___.', a: ["hasn't", 'has not'], why: 'Вопрос с has got → ответ No, she hasn\'t (без got).' },
        { t: 'gap', q: 'I ___ got a new phone. (have)', a: ['have', "'ve"], why: 'I → have got (коротко I\'ve got).' },
        { t: 'gap', q: 'There ___ some bread on the table.', a: ['is', "'s"], why: 'Хлеб неисчисляемый → there is.' },
        { t: 'gap', q: 'My bag is ___ to the sofa. (рядом с)', a: ['next'], why: 'Рядом с, вплотную = next to.' },
        { t: 'gap', q: 'How many rooms ___ there in your flat?', a: ['are'], why: 'How many + много комнат → are there.' },
        { t: 'order', a: 'There is a park near my house', ru: 'Рядом с моим домом есть парк' },
        { t: 'order', a: 'Have you got any water', ru: 'У тебя есть вода?' },
        { t: 'tr', q: 'В комнате есть стол.', a: ['there is a table in the room', "there's a table in the room", 'in the room there is a table', "in the room there's a table"] },
        { t: 'tr', q: 'У меня нет машины.', a: ["i haven't got a car", 'i have not got a car', "i don't have a car", 'i do not have a car'] },
        { t: 'tr', q: 'В холодильнике есть молоко?', a: ['is there any milk in the fridge', 'is there milk in the fridge'] },
        { t: 'listen', say: 'Is there a shop near here?', a: ['is there a shop near here'] }
      ],
      test: [
        { t: 'gap', q: 'There ___ a lot of people in the park.', a: ['are'], why: 'People — много людей → there are.' },
        { t: 'gap', q: 'Кафе возле кинотеатра: The café is ___ the cinema.', a: ['next to', 'near'], why: 'Возле, рядом с = next to (или near).' },
        { t: 'gap', q: "We haven't got ___ cheese.", a: ['any'], why: 'Отрицание (haven\'t) → any.' },
        { t: 'choice', q: 'Выберите правильный вопрос:', o: ['Do you have got a bag?', 'Have you got a bag?', 'Are you got a bag?'], a: 1, why: 'Либо Have you got…?, либо Do you have…? — не смешиваем.' },
        { t: 'choice', q: 'There ___ some cheese in the fridge.', o: ['is', 'are', 'have'], a: 0, why: 'Сыр неисчисляемый → there is.' },
        { t: 'choice', q: 'Look at this sofa! ___ very big.', o: ["There's", "It's", 'Is'], a: 1, why: 'Говорим, какой этот диван → It\'s.' },
        { t: 'choice', q: 'Do you have a car? — No, I ___.', o: ["haven't", "don't", 'not'], a: 1, why: 'Вопрос с do → короткий ответ с don\'t.' },
        { t: 'choice', q: 'Has Max got a garden? — Yes, he ___.', o: ['has', 'has got', 'is'], a: 0, why: 'В коротком ответе got не нужен: Yes, he has.' },
        { t: 'choice', q: "She's got a dog. She's = ?", o: ['She is', 'She has', 'She does'], a: 1, why: 'В have got сокращение \'s = has.' },
        { t: 'choice', q: 'Я завтракаю в восемь.', o: ['I have breakfast at eight.', "I've got breakfast at eight.", 'I has breakfast at eight.'], a: 0, why: 'have breakfast — действие, got здесь нельзя.' },
        { t: 'gap', q: "Is there any milk? — Yes, there's ___ in the fridge.", a: ['some'], why: 'Утверждение, слово milk уже было → some без существительного.' },
        { t: 'choice', q: "There isn't ___ in my bag.", o: ['something', 'anything', 'nothing'], a: 1, why: 'Отрицание isn\'t → anything; nothing с not не ставят.' }
      ]
    },

    // ───────────────────────────── UNIT 7 ─────────────────────────────
    {
      id: 'a1-7', level: 'A1', num: 7, track: 'main',
      books: { red: [30, 59, 60] },
      title: "I can, you can't — умения и возможность",
      summary: 'Научимся говорить, что умеем и можем, вежливо просить и разрешения спрашивать, а ещё правильно говорить «меня, ему, с ней» и «мой, его, их».',
      grammar: [
        {
          title: '1. Главная идея: can — «умею» и «могу»',
          html: `
<div class="g-idea">По-русски есть два слова: <b>«умею»</b> (навык) и <b>«могу»</b> (есть возможность). В английском оба — одно короткое <b>can</b>. После него идёт глагол <b>как в словаре</b>: без to и без -s.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Я умею плавать.</p><p>Она умеет рисовать.</p><p>Я могу поиграть в пять.</p></div>
  <div><div class="g-h">English</div><p><span class="say">I <b>can</b> swim.</span></p><p><span class="say">She <b>can</b> draw.</span></p><p><span class="say">I <b>can</b> play at five.</span></p></div>
</div>
<div class="g-formula"><span class="g-part">Кто</span><span class="g-plus">+</span><span class="g-part g-v">can</span><span class="g-plus">+</span><span class="g-part">глагол</span></div>
<p>Форма одна для всех: I can, he can, they can. Никаких <b>cans</b> и никаких do / does.</p>
<ul class="g-list">
<li><span class="say">He can play the guitar.</span> — Он умеет играть на гитаре.</li>
<li><span class="say">We can play chess on Friday.</span> — Мы можем поиграть в шахматы в пятницу.</li>
<li><span class="say">Max can draw very fast.</span> — Макс умеет очень быстро рисовать.</li>
</ul>
<div class="g-bad">She can plays tennis. · I can to swim.</div>
<div class="g-good">She can play tennis. · I can swim.</div>
<div class="g-tip">can — «сильное» слово: оно всё делает само. Глагол после него отдыхает — голый, без to и без -s.</div>
<div class="mini" data-q="He ___ the guitar." data-o="can plays|can play|cans play" data-a="1" data-why="После can глагол как в словаре: can play."></div>`
        },
        {
          title: '2. can’t и вопрос Can…?',
          html: `
<table>
<tr><th></th><th>Пример</th><th>Перевод</th></tr>
<tr><td>+</td><td><span class="say">I can drive.</span></td><td>Я умею водить.</td></tr>
<tr><td>−</td><td><span class="say">I can't drive.</span></td><td>Я не умею водить.</td></tr>
<tr><td>?</td><td><span class="say">Can you drive?</span></td><td>Ты умеешь водить?</td></tr>
</table>
<p><b>can't</b> = <b>cannot</b> (полная форма пишется слитно).</p>
<div class="g-steps"><div class="g-h">Как построить вопрос</div><ol>
<li>Утверждение: <span class="say">He can cook.</span></li>
<li>Переносим <b>can</b> в начало: <span class="say">Can he cook?</span></li>
<li>Ответ коротко: <span class="say">Yes, he can.</span> / <span class="say">No, he can't.</span></li>
</ol></div>
<p>С вопросительным словом: <span class="say">What can you do?</span> — Что ты умеешь? <span class="say">Where can I sit?</span> — Где мне можно сесть? <span class="say">When can you play?</span> — Когда ты можешь поиграть?</p>
<p>Насколько хорошо — в конце: <span class="say">I can swim very well.</span> · <span class="say">I can cook a bit.</span> (немного) · <span class="say">I can't dance at all.</span> (совсем не)</p>
<div class="g-bad">Do you can swim? — No, I don't.</div>
<div class="g-good">Can you swim? — No, I can't.</div>
<div class="mini" data-q="Can he cook? — No, he ___." data-o="doesn't|can't|isn't" data-a="1" data-why="Вопрос с can → и ответ с can: No, he can't."></div>`
        },
        {
          title: '3. Просьбы и разрешение: Can you…? Can I…? Could…?',
          html: `
<div class="g-idea">С <b>can</b> удобно вежливо просить. <b>Can you…?</b> — просим другого что-то сделать. <b>Can I…?</b> — просим разрешения для себя или просим дать нам что-то.</div>
<table>
<tr><th>Фраза</th><th>Значит</th><th>Пример</th></tr>
<tr><td><b>Can you…?</b></td><td>Можешь…?</td><td><span class="say">Can you help me?</span></td></tr>
<tr><td><b>Can I…?</b></td><td>Можно мне…?</td><td><span class="say">Can I sit here?</span></td></tr>
<tr><td><b>Can I have…?</b></td><td>Дайте мне…</td><td><span class="say">Can I have a coffee, please?</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">Can you repeat, please?</span> — Можете повторить, пожалуйста?</li>
<li><span class="say">Can I look at your laptop?</span> — Можно посмотреть твой ноутбук?</li>
<li><span class="say">Can you call me at six?</span> — Можешь позвонить мне в шесть?</li>
</ul>
<p>Ответы: <span class="say">Sure!</span> / <span class="say">Of course.</span> / <span class="say">Sorry, I can't.</span></p>
<p><b>could</b> — это «мягкий» can. <span class="say">Could you help me, please?</span> — Не могли бы вы мне помочь? <span class="say">Could I sit here?</span> — Можно мне здесь сесть? Так вежливее, например с незнакомыми людьми.</p>
<p>А ещё <b>could / couldn't</b> — это can в прошлом: <span class="say">I couldn't sleep.</span> — Я не мог уснуть. Прошлое мы подробно пройдём в юнитах 8–9.</p>
<div class="g-tip">Русское «Можно…?» без слова «мне» по-английски всегда <b>Can I…?</b> — «я» нужно назвать.</div>
<div class="mini" data-q="Можно мне поиграть?" data-o="Can you play?|Can I play?|Can play?" data-a="1" data-why="Просим разрешения для себя → Can I…?"></div>
<div class="mini" data-q="Самая вежливая просьба к незнакомому:" data-o="Could you help me, please?|You help me.|Do you can help me?" data-a="0" data-why="Could you…, please? — мягкая вежливая просьба."></div>`
        },
        {
          title: '4. me, him, her… — «меня, ему, с ней»',
          html: `
<div class="g-idea">Когда человек не делает действие, а <b>получает</b> его (кого? кому? с кем?), местоимение меняет форму. По-русски форм много (меня, мне, мной), а по-английски — <b>одна</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>Помоги <b>мне</b>. Я знаю <b>его</b>. Поиграй с <b>нами</b>.</p></div>
  <div><div class="g-h">English</div><p><span class="say">Help <b>me</b>.</span> <span class="say">I know <b>him</b>.</span> <span class="say">Play with <b>us</b>.</span></p></div>
</div>
<table>
<tr><th>Кто делает</th><th>Кого / кому</th><th>Пример</th></tr>
<tr><td>I</td><td><b class="g-v">me</b></td><td><span class="say">Can you teach me?</span></td></tr>
<tr><td>you</td><td><b class="g-v">you</b></td><td><span class="say">I can help you.</span></td></tr>
<tr><td>he</td><td><b class="g-v">him</b></td><td><span class="say">Talk to him.</span></td></tr>
<tr><td>she</td><td><b class="g-v">her</b></td><td><span class="say">Call her.</span></td></tr>
<tr><td>it</td><td><b class="g-v">it</b></td><td><span class="say">I like it.</span></td></tr>
<tr><td>we</td><td><b class="g-v">us</b></td><td><span class="say">Help us!</span></td></tr>
<tr><td>they</td><td><b class="g-v">them</b></td><td><span class="say">I know them.</span></td></tr>
</table>
<div class="g-steps"><div class="g-h">Какую форму выбрать</div><ol>
<li>Слово стоит <b>перед</b> глаголом (делает действие)? → I, he, she, we, they.</li>
<li>Стоит <b>после</b> глагола или после <b>with, to, for, at</b>? → me, him, her, us, them.</li>
</ol></div>
<ul class="g-list">
<li><span class="say">This message is for you.</span> — Это сообщение для тебя.</li>
<li><span class="say">Why are you looking at her?</span> — Почему ты на неё смотришь?</li>
<li><span class="say">Listen to me!</span> — Послушай меня!</li>
</ul>
<div class="g-bad">Tom is my friend. I play with he.</div>
<div class="g-good">Tom is my friend. I play with <b>him</b>.</div>
<div class="g-tip">Про вещи тоже: одна вещь — <b>it</b>, много — <b>them</b>. <span class="say">I don't like milk. I never drink it.</span> · <span class="say">Where are my shoes? — You're wearing them!</span></div>
<div class="mini" data-q="Can you help ___?" data-o="I|me|my" data-a="1" data-why="После глагола (кому помочь?) → me."></div>
<div class="mini" data-q="We are here! Can you help ___?" data-o="we|our|us" data-a="2" data-why="Кому помочь? нам → us."></div>`
        },
        {
          title: '5. my, his, their… — «чей?»',
          html: `
<div class="g-idea">Чтобы сказать <b>чей</b> предмет, ставим перед ним притяжательное слово. Оно зависит от <b>хозяина</b>, а не от предмета.</div>
<table>
<tr><th>Кто</th><th>Чей</th><th>Пример</th></tr>
<tr><td>I</td><td><b class="g-v">my</b></td><td><span class="say">my hobby</span></td></tr>
<tr><td>you</td><td><b class="g-v">your</b></td><td><span class="say">your bag</span></td></tr>
<tr><td>he</td><td><b class="g-v">his</b></td><td><span class="say">his guitar</span></td></tr>
<tr><td>she</td><td><b class="g-v">her</b></td><td><span class="say">her laptop</span></td></tr>
<tr><td>it</td><td><b class="g-v">its</b></td><td><span class="say">its name</span></td></tr>
<tr><td>we</td><td><b class="g-v">our</b></td><td><span class="say">our game</span></td></tr>
<tr><td>they</td><td><b class="g-v">their</b></td><td><span class="say">their house</span></td></tr>
</table>
<p>Слова <b>«свой»</b> в английском нет. Смотрим, кто хозяин:</p>
<ul class="g-list">
<li><span class="say">He loves his dog.</span> — Он любит свою собаку.</li>
<li><span class="say">She loves her dog.</span> — Она любит свою собаку.</li>
<li><span class="say">They love their house.</span> — Они любят свой дом.</li>
</ul>
<div class="g-bad">Anna loves his cat. <span class="muted">— про кошку Анны</span></div>
<div class="g-good">Anna loves <b>her</b> cat.</div>
<div class="g-tip"><b>his</b> — хозяин мужчина, <b>her</b> — хозяйка женщина. Что это за предмет, неважно: <span class="say">her phone</span>, <span class="say">his bag</span>.</div>
<div class="g-tip"><b>its</b> (чей) — без апострофа. <b>it's</b> = it is. <span class="say">It's a good game. I like its music.</span></div>
<div class="mini" data-q="Они любят свою квартиру: They love ___ flat." data-o="our|their|them" data-a="1" data-why="Хозяин — they → their."></div>
<div class="mini" data-q="Max has got a bike. ___ bike is new." data-o="His|Her|Him" data-a="0" data-why="Хозяин — Max (he) → his."></div>`
        },
        {
          title: '6. Всё вместе: I — me — my',
          html: `
<p>Одна таблица на все случаи. Выбор зависит от того, <b>какую роль</b> играет слово.</p>
<table>
<tr><th>Кто? (делает)</th><th>Кого? Кому?</th><th>Чей?</th></tr>
<tr><td>I</td><td>me</td><td>my</td></tr>
<tr><td>you</td><td>you</td><td>your</td></tr>
<tr><td>he</td><td>him</td><td>his</td></tr>
<tr><td>she</td><td>her</td><td>her</td></tr>
<tr><td>it</td><td>it</td><td>its</td></tr>
<tr><td>we</td><td>us</td><td>our</td></tr>
<tr><td>they</td><td>them</td><td>their</td></tr>
</table>
<ul class="g-list">
<li><span class="say">I like my friends, and they like me.</span> — Я люблю своих друзей, а они любят меня.</li>
<li><span class="say">She can help us with our game.</span> — Она может помочь нам с нашей игрой.</li>
<li><span class="say">They know him, and he knows their team.</span> — Они знают его, а он знает их команду.</li>
</ul>
<div class="g-tip"><b>her</b> стоит в двух колонках: <span class="say">I like her.</span> — Она мне нравится. <span class="say">I like her game.</span> — Мне нравится её игра. Если после her есть предмет — это «чей».</div>
<div class="mini" data-q="Kate is my friend. ___ can draw very well." data-o="Her|She|Him" data-a="1" data-why="Слово делает действие (кто умеет?) → She."></div>`
        },
        {
          title: '7. Типичные ошибки — проверьте себя',
          html: `
<div class="g-mistakes">
<div class="g-bad">He cans draw.</div><div class="g-good">He <b>can</b> draw.</div>
<div class="g-bad">I can to swim.</div><div class="g-good">I can <b>swim</b>.</div>
<div class="g-bad">She can plays chess.</div><div class="g-good">She can <b>play</b> chess.</div>
<div class="g-bad">Do you can cook?</div><div class="g-good"><b>Can you</b> cook?</div>
<div class="g-bad">Help I, please!</div><div class="g-good">Help <b>me</b>, please!</div>
<div class="g-bad">She loves his cat. <span class="muted">— свою</span></div><div class="g-good">She loves <b>her</b> cat.</div>
<div class="g-bad">I like this game. I like it's music.</div><div class="g-good">I like <b>its</b> music.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>can</b> + голый глагол для всех · кто делает — <b>I / he / she</b>, кого — <b>me / him / her</b>, чей — <b>my / his / her</b>.</div>`
        }
      ],
      words: [
        ['can', 'мочь, уметь', 'I can swim.', 'Я умею плавать.'],
        ["can't", 'не мочь, не уметь (cannot)', "I can't play today.", 'Я не могу играть сегодня.'],
        ['swim', 'плавать', 'Can you swim?', 'Ты умеешь плавать?'],
        ['dance', 'танцевать', 'She can dance very well.', 'Она очень хорошо танцует.'],
        ['sing', 'петь', "I can't sing at all.", 'Я совсем не умею петь.'],
        ['draw', 'рисовать', 'Max can draw cats.', 'Макс умеет рисовать котов.'],
        ['cook', 'готовить (еду)', 'Tom can cook very well.', 'Том очень хорошо готовит.'],
        ['drive', 'водить (машину)', 'Can you drive a car?', 'Ты умеешь водить машину?'],
        ['ride a bike', 'кататься на велосипеде', 'Kate can ride a bike.', 'Кейт умеет кататься на велосипеде.'],
        ['play the guitar', 'играть на гитаре', 'He can play the guitar.', 'Он умеет играть на гитаре.'],
        ['chess', 'шахматы', 'Can you play chess?', 'Ты умеешь играть в шахматы?'],
        ['football', 'футбол', 'They play football on Sunday.', 'Они играют в футбол в воскресенье.'],
        ['tennis', 'теннис', 'I can play tennis a bit.', 'Я немного умею играть в теннис.'],
        ['board game', 'настольная игра', "We've got a lot of board games.", 'У нас много настольных игр.'],
        ['hobby', 'хобби', 'What is your hobby?', 'Какое у тебя хобби?'],
        ['well', 'хорошо (как?)', 'You speak English well.', 'Ты хорошо говоришь по-английски.'],
        ['a bit', 'немного', 'I can speak English a bit.', 'Я немного говорю по-английски.'],
        ['at all', 'совсем (в отрицании)', "He can't cook at all.", 'Он совсем не умеет готовить.'],
        ['fast', 'быстро; быстрый', 'Max can draw very fast.', 'Макс умеет очень быстро рисовать.'],
        ['learn', 'учить, учиться', 'I want to learn English.', 'Я хочу выучить английский.'],
        ['teach', 'учить (кого-то)', 'Can you teach me?', 'Можешь меня научить?'],
        ['repeat', 'повторять', 'Can you repeat, please?', 'Можете повторить, пожалуйста?'],
        ['sure', 'конечно', 'Can you help me? — Sure!', 'Поможешь мне? — Конечно!'],
        ['of course', 'конечно', 'Of course I can.', 'Конечно, могу.'],
        ['me', 'меня, мне, мной', 'Play with me!', 'Поиграй со мной!'],
        ['him', 'его, ему, им', 'I know him.', 'Я его знаю.'],
        ['her', 'её, ей; её (чья)', "Call her. It's her phone.", 'Позвони ей. Это её телефон.'],
        ['us', 'нас, нам', 'Can you help us?', 'Можешь нам помочь?'],
        ['them', 'их, им', 'I like them.', 'Они мне нравятся.'],
        ['his', 'его (чей)', 'This is his bike.', 'Это его велосипед.'],
        ['our', 'наш', 'Our flat is small.', 'Наша квартира маленькая.'],
        ['their', 'их (чей)', 'Their house is big.', 'Их дом большой.']
      ],
      texts: [
        {
          id: 't-a1-7-1', title: 'Can you help me?', level: 'A1',
          text: `Max: Hi, Kate! Can you help me?
Kate: Sure! What is it?
Max: Tom and I are playing a new game. It's very hard. We can't finish it.
Kate: Oh, I know this game! Can I look at your laptop?
Max: Of course. Here it is.
Kate: OK. There's a man near the old house. Talk to him. He can help you.
Max: Him? I can't talk to him. He never answers me!
Kate: He's busy in the morning. Talk to him in the evening. Then he can help you.
Max: Wow, it works! Thank you! You can play very well.
Kate: I play a lot. Can you and Tom play with us on Saturday?
Max: Yes, we can! What time?
Kate: At eight. My friends Lisa and Anna play too. You know them.
Max: Yes, I know them. They're very nice. Bye!`,
          questions: [
            { q: "Who can't finish the game?", o: ['Kate', 'Max and Tom', 'Lisa and Anna'], a: 1 },
            { q: 'When can the man help?', o: ['in the morning', 'in the evening', 'at night'], a: 1 },
            { q: 'When can Max and Tom play with Kate?', o: ['on Friday', 'on Saturday', 'on Sunday'], a: 1 }
          ]
        },
        {
          id: 't-a1-7-2', title: 'Our hobbies', level: 'A1',
          text: `There are five people in our office, and we all have hobbies.
Max can draw very well. He draws cats, and they are very nice. He can't sing at all, but he sings every morning. We always listen to him.
Kate can play the guitar, and she can dance. Her music is very good. She often plays for us.
Tom can cook. He often makes breakfast for us. He can't swim, but he can ride a bike very fast.
Anna and Lisa can play tennis. Their game is very fast. Sometimes they play with me, but I can play only a bit.
And me? I can draw a bit, and I can play chess well. My friends play chess with me every Friday. Our office has got a small kitchen, and we play there.
What can you do? What is your hobby?`,
          questions: [
            { q: 'Who can cook?', o: ['Max', 'Tom', 'Kate'], a: 1 },
            { q: "What can't Tom do?", o: ['ride a bike', 'swim', 'cook'], a: 1 },
            { q: 'When do they play chess?', o: ['every Friday', 'every Saturday', 'every morning'], a: 0 }
          ]
        }
      ],
      practice: [
        { t: 'choice', q: 'She ___ swim.', o: ['can', 'cans', 'can to'], a: 0, why: 'can одинаковый для всех, без -s и без to.' },
        { t: 'choice', q: 'He can ___ the guitar.', o: ['plays', 'play', 'to play'], a: 1, why: 'После can глагол как в словаре: can play.' },
        { t: 'choice', q: '___ you drive?', o: ['Do', 'Are', 'Can'], a: 2, why: 'Вопрос «умеешь?» строим с can в начале, do не нужен.' },
        { t: 'choice', q: 'Please listen to ___!', o: ['I', 'me', 'my'], a: 1, why: 'После to (кого слушать?) → me.' },
        { t: 'choice', q: 'Tom is my friend. I play chess with ___ every Friday.', o: ['he', 'his', 'him'], a: 2, why: 'После with (с кем?) → him.' },
        { t: 'choice', q: 'Anna loves ___ cat.', o: ['her', 'his', 'she'], a: 0, why: 'Хозяйка — Anna (she) → her.' },
        { t: 'choice', q: 'Они любят свой дом: They love ___ house.', o: ['our', 'their', 'them'], a: 1, why: '«Свой» при хозяине they → their.' },
        { t: 'choice', q: 'I like this game. I like ___ music.', o: ["it's", 'its', 'it'], a: 1, why: 'Чья музыка? игры → its (без апострофа); it\'s = it is.' },
        { t: 'gap', q: 'Can you swim? — Yes, I ___.', a: ['can'], why: 'Вопрос с can → короткий ответ тоже с can.' },
        { t: 'gap', q: 'I ___ sing at all. (не умею)', a: ["can't", 'cannot'], why: 'Не умею = can\'t (cannot), at all усиливает: совсем.' },
        { t: 'gap', q: 'We are here! Can you help ___? (нам)', a: ['us'], why: 'Кому помочь? нам → us.' },
        { t: 'gap', q: 'Max has got a bike. ___ bike is new. (его)', a: ['his'], why: 'Хозяин — Max (he) → his.' },
        { t: 'gap', q: 'Where are my shoes? — You are wearing ___! (их)', a: ['them'], why: 'Много вещей после глагола → them.' },
        { t: 'gap', q: '___ I sit here? (можно мне)', a: ['can', 'could'], why: 'Просим разрешения для себя → Can I…? (вежливее Could I…?).' },
        { t: 'order', a: 'Can you teach me', ru: 'Можешь меня научить?' },
        { t: 'order', a: 'My friend can ride a bike', ru: 'Мой друг умеет кататься на велосипеде' },
        { t: 'order', a: 'What can you do', ru: 'Что ты умеешь?' },
        { t: 'tr', q: 'Я не умею плавать.', a: ["i can't swim", 'i cannot swim', 'i can not swim'] },
        { t: 'tr', q: 'Можете повторить, пожалуйста?', a: ['can you repeat please', 'can you repeat it please', 'please can you repeat', 'could you repeat please', 'could you repeat it please'] },
        { t: 'listen', say: 'Can you play chess?', a: ['can you play chess'] }
      ],
      test: [
        { t: 'choice', q: "Can Tom cook? — No, he ___.", o: ["doesn't", "can't", "isn't"], a: 1, why: 'Вопрос с can → ответ с can: No, he can\'t.' },
        { t: 'choice', q: 'I know Lisa. I like ___.', o: ['she', 'her', 'their'], a: 1, why: 'Кто нравится? её → her (после глагола).' },
        { t: 'choice', q: 'Мы любим свой город: We love ___ city.', o: ['us', 'our', 'we'], a: 1, why: '«Свой» при хозяине we → our.' },
        { t: 'gap', q: 'My friend can ___ very fast. (рисовать)', a: ['draw'], why: 'После can глагол как в словаре: can draw.' },
        { t: 'gap', q: "This message isn't for me. It's for ___. (он)", a: ['him'], why: 'После for → форма «кого/кому»: him.' },
        { t: 'choice', q: 'Вежливая просьба к незнакомому: ___ you help me, please?', o: ['Could', 'Do', 'Are'], a: 0, why: 'Could you…? — мягкая вежливая просьба.' },
        { t: 'choice', q: 'Я не мог уснуть: I ___ sleep.', o: ["can't", "couldn't", "don't"], a: 1, why: 'Не мог (в прошлом) → couldn\'t.' },
        { t: 'choice', q: 'She can ___ English a bit.', o: ['speaks', 'speak', 'speaking'], a: 1, why: 'После can глагол без -s: can speak.' },
        { t: 'choice', q: 'Что умеет твой друг? What ___ your friend do?', o: ['does', 'can', 'is'], a: 1, why: 'Спрашиваем об умении → What can…?' },
        { t: 'gap', q: 'I like Max and Kate. I often play with ___.', a: ['them'], why: 'С кем? с ними → them.' },
        { t: 'gap', q: 'Tom and Anna love ___ flat. (свою)', a: ['their'], why: 'Хозяева — Tom and Anna (they) → their.' },
        { t: 'choice', q: "I can't dance ___. (совсем)", o: ['at all', 'a bit', 'very well'], a: 0, why: 'Совсем не = can\'t … at all.' }
      ]
    }
  ].forEach(put);
})();
