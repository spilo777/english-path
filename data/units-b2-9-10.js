// Юниты B2 9–10: by (как, кем, чем, на сколько, рядом); существительное + предлог (reason for, cause of, increase in, solution to, relationship with); прилагательное + предлог (nice of / nice to, angry about / with, proud of, keen on, crowded with); глагол + предлог (to/at, about/for/of/after, about/of, of/for/from/on, in/into/with/to/on)
COURSE.units.push(
  // ───────────────────────────── UNIT B2-9 ─────────────────────────────
  {
    id: 'b2-9', level: 'B2', num: 9, track: 'main',
    books: { blue: [128, 129, 130, 131] },
    title: 'By; noun + предлог; adjective + предлог',
    summary: 'Разберёмся со всеми значениями by (by train, by mistake, by Nolan, by 20%, by the window) и выучим «свои» предлоги у существительных и прилагательных: reason for, cause of, increase in, solution to, nice of you, angry with, proud of, keen on, crowded with.',
    grammar: [
      {
        title: '1. Главная идея: предлог держится за слово, а не за смысл',
        html: `
<div class="g-idea">Что вы уже знаете: <b>afraid of, good at, interested in, married to</b> (урок A2-17), <b>by accident / on purpose</b> и <b>by Friday</b> (B1-24), <b>written by</b> в пассиве (B1-12), <b>-ing после предлога</b> (B2-3). Теперь собираем полную картину: у многих существительных и прилагательных есть «свой» предлог, и русский перевод тут почти всегда подсказывает <b>неправильно</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>причина <b>чего</b> (без предлога)</p><p>решение <b>для</b> проблемы / проблемы</p><p>рост <b>цен</b></p><p>злиться <b>на</b> кого-то</p><p>похож <b>на</b></p><p>знаменит <b>своими</b> пляжами</p></div>
  <div><div class="g-h">English</div><p><span class="say">the reason <b>for</b> the delay</span></p><p><span class="say">a solution <b>to</b> the problem</span></p><p><span class="say">a rise <b>in</b> prices</span></p><p><span class="say">angry <b>with</b> somebody</span></p><p><span class="say">similar <b>to</b></span></p><p><span class="say">famous <b>for</b> its beaches</span></p></div>
</div>
<div class="g-tip">Учите не слово, а <b>пару</b>: не «reason — причина», а <b>reason for</b>. Так же, как вы учите не «look», а <b>look for / look after</b>. Одна карточка — одно сочетание.</div>
<div class="mini" data-q="Nobody explained the reason ___ the delay." data-o="of|for|to" data-a="1" data-why="Причина чего-то → reason for (не reason of)."></div>`
      },
      {
        title: '2. by — «как»: транспорт, оплата, способ, случайность',
        html: `
<div class="g-idea"><b>by + существительное без артикля</b> отвечает на вопрос «каким способом?». Как только появляется <b>my, the, a</b> — by уходит, и нужен обычный предлог места.</div>
<table>
<tr><th>Способ (by, без артикля)</th><th>Конкретная вещь</th></tr>
<tr><td><span class="say">by car</span>, <span class="say">by taxi</span></td><td><span class="say">in my car</span>, <span class="say">in a taxi</span></td></tr>
<tr><td><span class="say">by train</span>, <span class="say">by bus</span>, <span class="say">by plane</span></td><td><span class="say">on the train</span>, <span class="say">on the 8:15 bus</span></td></tr>
<tr><td><span class="say">by bike</span></td><td><span class="say">on my bike</span></td></tr>
<tr><td>пешком — <b>on foot</b></td><td><span class="muted">(by foot звучит странно)</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">I usually get to the studio by metro, but today I came in Oleg's car.</span> — Обычно я езжу на метро, но сегодня приехал на машине Олега.</li>
<li><span class="say">Is it far? Can we get there on foot?</span> — Туда можно дойти пешком?</li>
<li><span class="say">Can I pay by card?</span> — Можно картой? <span class="muted">(by card, by bank transfer; но <b>pay cash</b> или <b>pay in cash</b>)</span></li>
<li><span class="say">The contract came by post, and I signed it by hand.</span> — Договор пришёл почтой, я подписал его от руки.</li>
<li><span class="say">We'll send you the files by email.</span> — Пришлём файлы по почте.</li>
<li><span class="say">I deleted the wrong layer by mistake.</span> — Я по ошибке удалил не тот слой.</li>
<li><span class="say">We met by chance at a game jam.</span> — Мы случайно познакомились на геймджеме.</li>
</ul>
<div class="g-bad">I came by my car. · I was by the train. · I'll pay by cash. · We met by a chance.</div>
<div class="g-good">I came <b>in</b> my car. · I was <b>on</b> the train. · I'll pay <b>in</b> cash. · We met <b>by chance</b>.</div>
<div class="g-tip">Противоположность by mistake / by accident / by chance — <b>on purpose</b> («нарочно»). И запомните: <b>in</b> — в то, во что садятся пригнувшись (car, taxi); <b>on</b> — в то, по чему можно пройти (bus, train, plane, ship).</div>
<div class="mini" data-q="I didn't recognise her at first — she was ___ the same train as me." data-o="by|on|in" data-a="1" data-why="Конкретный поезд (the train) → on; by только без артикля."></div>
<div class="mini" data-q="Sorry, I don't have a card on me. Can I pay ___ cash?" data-o="by|in|with" data-a="1" data-why="Наличными → pay cash или pay in cash; by — для card, transfer."></div>`
      },
      {
        title: '3. by — «кем», «чем», «на сколько» и «рядом»',
        html: `
<div class="g-idea">У by есть ещё четыре значения: <b>автор / исполнитель</b>, <b>разница в цифрах</b>, <b>рядом с</b>. А инструмент, которым что-то сделали, — не by, а <b>with</b>.</div>
<table>
<tr><th>Значение</th><th>Пример</th></tr>
<tr><td>кем сделано (пассив)</td><td><span class="say">The level was designed by two interns.</span></td></tr>
<tr><td>автор произведения</td><td><span class="say">a film by Nolan</span>, <span class="say">a song by Radiohead</span></td></tr>
<tr><td>на сколько (разница)</td><td><span class="say">Sales went up by 20%.</span></td></tr>
<tr><td>рядом, у</td><td><span class="say">My desk is by the window.</span></td></tr>
</table>
<p><b>by или with?</b> <b>by</b> — кто (или что) сделал. <b>with</b> — чем, каким инструментом.</p>
<ul class="g-list">
<li><span class="say">The icons were drawn by Masha.</span> — Иконки нарисовала Маша. <span class="muted">(кто)</span></li>
<li><span class="say">The icons were drawn with a tablet pen.</span> — Иконки нарисованы стилусом. <span class="muted">(чем)</span></li>
<li><span class="say">The server was hit by a DDoS attack.</span> — На сервер обрушилась DDoS-атака. <span class="muted">(причина-«исполнитель» тоже by)</span></li>
<li><span class="say">Who's this painting by?</span> — Чья это картина? <span class="muted">(вопрос об авторе)</span></li>
</ul>
<p><b>Разница в цифрах</b> — очень частое место в новостях и отчётах:</p>
<ul class="g-list">
<li><span class="say">We lost by one point.</span> — Мы проиграли с разницей в одно очко.</li>
<li><span class="say">The price has been reduced by half.</span> — Цену снизили вдвое.</li>
<li><span class="say">I missed the bus by two minutes.</span> — Я опоздал на автобус на две минуты.</li>
<li><span class="say">The update cut loading time by three seconds.</span> — Обновление сократило загрузку на три секунды.</li>
</ul>
<div class="g-bad">The door was opened by a key. · It increased on 20%. · a book of Tolkien</div>
<div class="g-good">The door was opened <b>with</b> a key. · It increased <b>by</b> 20%. · a book <b>by</b> Tolkien</div>
<div class="g-tip">Русское «на» в «вырос на 20%», «опоздал на 5 минут» → <b>by</b>. Другие by вы уже знаете: <b>by Friday</b> — не позже (B1-24), <b>by myself</b> — сам, один, <b>by doing</b> — тем, что делаешь (B2-3).</div>
<div class="mini" data-q="The number of players has increased ___ 15% since the update." data-o="on|by|in" data-a="1" data-why="На сколько изменилось → by + цифра."></div>
<div class="mini" data-q="He fixed the chair ___ a screwdriver." data-o="by|with|of" data-a="1" data-why="Инструмент, которым сделали, → with."></div>`
      },
      {
        title: '4. Существительное + for / of / in: reason for, cause of, increase in',
        html: `
<div class="g-idea">Здесь три группы. <b>for</b> — «зачем, для чего нужно»; <b>of</b> — «чего / кого»; <b>in</b> — «рост / падение <i>в чём</i>».</div>
<table>
<tr><th>Предлог</th><th>Существительные</th><th>Пример</th></tr>
<tr><td><b>for</b></td><td>reason, need, demand, excuse</td><td><span class="say">There's no excuse for rudeness.</span></td></tr>
<tr><td><b>of</b></td><td>cause, picture, photo, map, plan, drawing</td><td><span class="say">What was the cause of the crash?</span></td></tr>
<tr><td><b>of</b></td><td>advantage, disadvantage</td><td><span class="say">The main advantage of remote work is time.</span></td></tr>
<tr><td><b>in</b></td><td>increase, decrease, rise, fall</td><td><span class="say">There's been a sharp rise in prices.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">There's a huge demand for pixel artists right now.</span> — На пиксель-художников сейчас огромный спрос.</li>
<li><span class="say">Is there any need for a second meeting?</span> — Есть ли необходимость во второй встрече?</li>
<li><span class="say">She sent me a photo of her new setup.</span> — Она прислала фото своего нового сетапа.</li>
<li><span class="say">We noticed a big fall in the number of new players.</span> — Мы заметили сильное падение числа новых игроков.</li>
</ul>
<p><b>Тонкость с advantage:</b> «преимущество чего-то» — <b>of</b>; «есть преимущества в том, чтобы…» — <b>in</b> или <b>to</b> + -ing.</p>
<ul class="g-list">
<li><span class="say">The advantage of a big monitor is obvious.</span></li>
<li><span class="say">There are many advantages in working from home.</span> = <span class="say">There are many advantages to working from home.</span></li>
</ul>
<p><b>reason for, но cause of</b> — это пара, на которой ошибаются даже продвинутые. <b>reason</b> — объяснение, «почему». <b>cause</b> — то, что вызвало событие.</p>
<p><b>rise in или rise by?</b> <b>in</b> — в чём рост, <b>by</b> — на сколько (см. блок 3): <span class="say">a rise in prices</span>, но <span class="say">prices rose by 10%</span>. Бывает и вместе: <span class="say">a 10% rise in prices</span>.</p>
<div class="g-bad">the reason of the bug · an increase of sales · a demand on the product</div>
<div class="g-good">the reason <b>for</b> the bug · an increase <b>in</b> sales · a demand <b>for</b> the product</div>
<div class="mini" data-q="Doctors are still looking for the ___ of the illness." data-o="reason|cause|need" data-a="1" data-why="То, что вызвало событие, → cause of; reason требует for."></div>
<div class="mini" data-q="Last quarter there was a small decrease ___ downloads." data-o="of|in|on" data-a="1" data-why="increase / decrease / rise / fall + in — рост или падение в чём."></div>`
      },
      {
        title: '5. Существительное + to / with / between: solution to, relationship with',
        html: `
<div class="g-idea"><b>to</b> — «ответ, реакция, доступ <i>к чему-то</i>». <b>with</b> — связь с кем-то одним. <b>between</b> — связь или разница между двумя.</div>
<table>
<tr><th>Предлог</th><th>Существительные</th></tr>
<tr><td><b>to</b></td><td>solution, answer, reply, reaction, key, invitation, damage, attitude (to / towards)</td></tr>
<tr><td><b>with</b></td><td>relationship, connection, contact</td></tr>
<tr><td><b>between</b></td><td>difference, relationship, connection, contact (двух сторон)</td></tr>
</table>
<ul class="g-list">
<li><span class="say">We still haven't found a solution to the lag problem.</span> — Мы так и не нашли решения проблемы с лагами.</li>
<li><span class="say">I'm still waiting for a reply to my email.</span> — Я всё ещё жду ответа на письмо.</li>
<li><span class="say">The players' reaction to the trailer was amazing.</span> — Реакция игроков на трейлер была потрясающей.</li>
<li><span class="say">Did you get an invitation to the launch party?</span> — Тебе пришло приглашение на вечеринку в честь запуска?</li>
<li><span class="say">The flood caused serious damage to the office.</span> — Потоп нанёс офису серьёзный ущерб.</li>
<li><span class="say">His attitude to feedback has changed a lot.</span> — Его отношение к критике сильно изменилось.</li>
<li><span class="say">I have a great relationship with my art director.</span> — У меня отличные отношения с арт-директором.</li>
<li><span class="say">Do you keep in contact with your old team?</span> — Ты поддерживаешь связь со старой командой?</li>
<li><span class="say">What's the difference between UX and UI?</span> — В чём разница между UX и UI?</li>
</ul>
<div class="g-bad">a solution of the problem · the answer on my question · an invitation on the party · a relationship to her</div>
<div class="g-good">a solution <b>to</b> the problem · the answer <b>to</b> my question · an invitation <b>to</b> the party · a relationship <b>with</b> her</div>
<div class="g-tip">Представьте стрелку <b>→</b>: ответ летит <b>к</b> вопросу, ключ подходит <b>к</b> двери, реакция — <b>на</b> новость, урон — <b>по</b> машине. Везде, где есть такая стрелка, — <b>to</b>.</div>
<div class="mini" data-q="What was your boss's reaction ___ your idea?" data-o="on|to|for" data-a="1" data-why="Реакция на что-то → reaction to."></div>
<div class="mini" data-q="There's no connection ___ the two bugs." data-o="with|between|of" data-a="1" data-why="Связь двух вещей между собой → between."></div>`
      },
      {
        title: '6. Прилагательное + предлог 1: люди и чувства',
        html: `
<div class="g-idea">Прилагательные о поведении и эмоциях часто меняют предлог в зависимости от того, <b>на кого</b> или <b>на что</b> направлено чувство.</div>
<p><b>nice of или nice to?</b></p>
<ul class="g-list">
<li><span class="say">It was really kind of you to review my portfolio.</span> — Очень мило с твоей стороны, что посмотрел моё портфолио. <span class="muted">(оценка поступка: <b>of</b> + кто + to do; так же stupid, silly, generous, rude, honest, polite of sb)</span></li>
<li><span class="say">It was stupid of me to forget my charger.</span> — Глупо было с моей стороны забыть зарядку.</li>
<li><span class="say">The moderators were very rude to him.</span> — Модераторы были с ним очень грубы. <span class="muted">(отношение к человеку: nice / kind / rude / friendly / cruel <b>to</b> sb)</span></li>
</ul>
<table>
<tr><th>Сочетание</th><th>Пример</th></tr>
<tr><td>pleased / happy / delighted / disappointed <b>with</b> что-то полученное</td><td><span class="say">The client was delighted with the new logo.</span></td></tr>
<tr><td>surprised / shocked / amazed <b>at</b> или <b>by</b></td><td><span class="say">I was shocked by the ending.</span></td></tr>
<tr><td>excited / worried / nervous <b>about</b></td><td><span class="say">I'm a bit nervous about the demo.</span></td></tr>
<tr><td>impressed <b>with</b> или <b>by</b></td><td><span class="say">We were really impressed with your test task.</span></td></tr>
<tr><td>fed up / bored <b>with</b></td><td><span class="say">I'm bored with this map.</span></td></tr>
<tr><td>tired <b>of</b> (надоело)</td><td><span class="say">I'm tired of fixing the same bug.</span></td></tr>
</table>
<p><b>angry, annoyed, furious, upset:</b> <b>about</b> — из-за чего, <b>with</b> — на кого, <b>for</b> — за что.</p>
<ul class="g-list">
<li><span class="say">Fans are furious about the new prices.</span> — Фанаты в ярости из-за новых цен.</li>
<li><span class="say">Are you still annoyed with me for missing the stream?</span> — Ты всё ещё злишься на меня за то, что я пропустил стрим?</li>
</ul>
<p><b>sorry:</b> <b>about</b> — ситуация; <b>for / about</b> — то, что вы сделали; <b>feel sorry for</b> — жалеть человека.</p>
<ul class="g-list">
<li><span class="say">Sorry about the noise — the neighbours are renovating.</span> — Извини за шум.</li>
<li><span class="say">Sorry for interrupting.</span> = <span class="say">Sorry about interrupting.</span> = <span class="say">Sorry I interrupted.</span></li>
<li><span class="say">I feel sorry for the new guy — he got the worst task.</span> — Мне жаль новичка.</li>
</ul>
<div class="g-bad">angry on him · nice with me · I feel sorry about Max · tired from waiting (надоело)</div>
<div class="g-good">angry <b>with</b> him · nice <b>to</b> me · I feel sorry <b>for</b> Max · tired <b>of</b> waiting</div>
<div class="g-tip"><b>tired from</b> тоже бывает, но это «устал физически от»: <span class="say">tired from the trip</span>. А «надоело» — всегда <b>tired of</b>.</div>
<div class="mini" data-q="It was very generous ___ your parents to pay for the course." data-o="to|of|with" data-a="1" data-why="Оценка поступка: generous / kind / nice of somebody to do."></div>
<div class="mini" data-q="Why are you so angry ___ me? I didn't do anything!" data-o="on|with|about" data-a="1" data-why="Злиться на человека → angry with; about — из-за ситуации."></div>`
      },
      {
        title: '7. Прилагательное + предлог 2: proud of, keen on, crowded with',
        html: `
<div class="g-idea">Самая большая группа — прилагательные с <b>of</b>. Остальные надо запомнить поштучно. После всех этих предлогов глагол — с <b>-ing</b>: <span class="say">capable of leading a team</span>, <span class="say">keen on streaming</span>.</div>
<table>
<tr><th>of</th><th>Пример</th></tr>
<tr><td>afraid, scared, frightened, terrified</td><td><span class="say">She's terrified of public speaking.</span></td></tr>
<tr><td>fond, proud, ashamed, jealous, envious</td><td><span class="say">I'm really proud of this project.</span></td></tr>
<tr><td>suspicious, critical, tolerant</td><td><span class="say">Players are suspicious of free games.</span></td></tr>
<tr><td>aware, conscious</td><td><span class="say">Are you aware of the risks?</span></td></tr>
<tr><td>capable / incapable</td><td><span class="say">She's capable of leading a team.</span></td></tr>
<tr><td>typical</td><td><span class="say">It's typical of him to be late.</span></td></tr>
<tr><td>full, short</td><td><span class="say">We're short of time.</span></td></tr>
</table>
<table>
<tr><th>Другие</th><th>Пример</th></tr>
<tr><td>good / bad / brilliant / hopeless <b>at</b></td><td><span class="say">I'm hopeless at drawing hands.</span></td></tr>
<tr><td>similar <b>to</b></td><td><span class="say">This UI is similar to Figma.</span></td></tr>
<tr><td>different <b>from</b> (или to)</td><td><span class="say">It's different from what I expected.</span></td></tr>
<tr><td>dependent <b>on</b>, но independent <b>of</b></td><td><span class="say">I don't want to be dependent on one client.</span></td></tr>
<tr><td>interested <b>in</b></td><td><span class="say">Are you interested in motion design?</span></td></tr>
<tr><td>famous <b>for</b>, responsible <b>for</b></td><td><span class="say">Who's responsible for the menus?</span></td></tr>
<tr><td>sure / certain <b>of</b> или <b>about</b></td><td><span class="say">Are you sure about that?</span></td></tr>
<tr><td>keen <b>on</b></td><td><span class="say">I'm not very keen on horror games.</span></td></tr>
<tr><td>crowded <b>with</b>, но full <b>of</b></td><td><span class="say">The hall was crowded with fans.</span></td></tr>
<tr><td>married / engaged <b>to</b></td><td><span class="say">She's engaged to a sound designer.</span></td></tr>
</table>
<p><b>married to</b> кого-то, но <b>married with children</b> — «женат, и есть дети»: <span class="say">He's married with two kids.</span></p>
<div class="g-bad">similar with · famous by · dependent from · crowded of people · good in maths · jealous on her</div>
<div class="g-good">similar <b>to</b> · famous <b>for</b> · dependent <b>on</b> · crowded <b>with</b> people · good <b>at</b> maths · jealous <b>of</b> her</div>
<div class="g-tip">Русское «от» почти всегда обманывает: «зависеть <b>от</b>» — depend <b>on</b>, «независимый <b>от</b>» — independent <b>of</b>, «отличаться <b>от</b>» — different <b>from</b>. Три разных предлога на одно «от».</div>
<div class="mini" data-q="Florence is famous ___ its art." data-o="by|for|with" data-a="1" data-why="Знаменит чем-то → famous for."></div>
<div class="mini" data-q="I'm not sure I'm capable ___ finishing it by Monday." data-o="to|of|for" data-a="1" data-why="capable of + -ing; capable to не говорят."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">I came here by my car.</div><div class="g-good">I came here <b>in</b> my car. / I came here <b>by car</b>.</div>
<div class="g-bad">Sales grew on 30%.</div><div class="g-good">Sales grew <b>by</b> 30%.</div>
<div class="g-bad">What's the reason of this bug?</div><div class="g-good">What's the reason <b>for</b> this bug?</div>
<div class="g-bad">We need a solution of this problem.</div><div class="g-good">We need a solution <b>to</b> this problem.</div>
<div class="g-bad">It was nice from you to help.</div><div class="g-good">It was nice <b>of</b> you to help.</div>
<div class="g-bad">Don't be angry on me.</div><div class="g-good">Don't be angry <b>with</b> me.</div>
<div class="g-bad">Your idea is similar with mine.</div><div class="g-good">Your idea is similar <b>to</b> mine.</div>
<div class="g-bad">She is married with a programmer.</div><div class="g-good">She is married <b>to</b> a programmer.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>by</b> — способ, автор, разница, рядом; <b>reason for · cause of · increase in · solution to · relationship with · difference between</b>; <b>nice of you / nice to me · angry with sb about sth · proud of · keen on · similar to</b> — учим парами.</div>`
      }
    ],
    words: [
      ["reason", "причина (reason for — чего)", "Is there a reason for the delay?", "Есть ли причина задержки?"],
      ["cause", "причина; вызывать (cause of — чего)", "The cause of the crash is still unknown.", "Причина вылета всё ещё неизвестна."],
      ["demand", "спрос; требование (demand for — на что)", "There's a big demand for UX designers.", "На UX-дизайнеров большой спрос."],
      ["excuse", "оправдание, отговорка (excuse for)", "There's no excuse for missing the deadline.", "Срыву дедлайна нет оправдания."],
      ["increase", "рост, увеличение; расти (increase in)", "We saw an increase in sales.", "Мы увидели рост продаж."],
      ["decrease", "снижение; уменьшаться (decrease in)", "There was a decrease in crashes after the patch.", "После патча вылетов стало меньше."],
      ["advantage", "преимущество (advantage of)", "The advantage of this tool is speed.", "Преимущество этого инструмента — скорость."],
      ["disadvantage", "недостаток", "The main disadvantage is the price.", "Главный недостаток — цена."],
      ["solution", "решение (solution to — проблемы)", "We found a solution to the problem.", "Мы нашли решение проблемы."],
      ["reaction", "реакция (reaction to — на что)", "Her reaction to the news surprised me.", "Её реакция на новость меня удивила."],
      ["damage", "ущерб, повреждение (damage to)", "The storm caused damage to the roof.", "Буря повредила крышу."],
      ["invitation", "приглашение (invitation to)", "Thanks for the invitation to your wedding!", "Спасибо за приглашение на свадьбу!"],
      ["attitude", "отношение (attitude to / towards)", "I like his attitude to work.", "Мне нравится его отношение к работе."],
      ["relationship", "отношения (relationship with / between)", "I have a good relationship with my boss.", "У меня хорошие отношения с начальником."],
      ["connection", "связь (connection with / between)", "Is there a connection between the two bugs?", "Есть ли связь между этими двумя багами?"],
      ["proud", "гордый (proud of — гордиться)", "I'm proud of my team.", "Я горжусь своей командой."],
      ["ashamed", "стыдящийся (ashamed of — стыдиться)", "He's ashamed of his first game.", "Он стыдится своей первой игры."],
      ["jealous", "завистливый, ревнивый (jealous of)", "Don't be jealous of other people's success.", "Не завидуй чужому успеху."],
      ["aware", "знающий, осознающий (aware of)", "I wasn't aware of the problem.", "Я не знал о проблеме."],
      ["capable", "способный (capable of + -ing)", "She's capable of doing much more.", "Она способна на гораздо большее."],
      ["typical", "типичный (typical of — для кого)", "It's typical of Max to forget.", "Это так похоже на Макса — забыть."],
      ["similar", "похожий (similar to — на)", "Your style is similar to mine.", "Твой стиль похож на мой."],
      ["dependent", "зависимый (dependent on — от)", "The project is dependent on one person.", "Проект зависит от одного человека."],
      ["responsible", "ответственный (responsible for — за)", "Who's responsible for the icons?", "Кто отвечает за иконки?"],
      ["crowded", "переполненный (crowded with — людьми)", "The expo was crowded with gamers.", "Выставка была забита геймерами."],
      ["keen", "увлечённый (keen on — любить, хотеть)", "I'm not keen on early meetings.", "Я не в восторге от ранних созвонов."],
      ["fond", "любящий (be fond of — очень любить)", "She's very fond of her cat.", "Она очень любит свою кошку."],
      ["suspicious", "подозрительный; с подозрением (suspicious of)", "I'm suspicious of free apps.", "Я с подозрением отношусь к бесплатным приложениям."],
      ["impressed", "впечатлённый (impressed with / by)", "We were impressed with your portfolio.", "Нас впечатлило ваше портфолио."],
      ["furious", "в ярости (furious about / with)", "The fans were furious about the ending.", "Фанаты были в ярости из-за концовки."],
      ["delighted", "очень довольный, в восторге (delighted with)", "The client was delighted with the result.", "Клиент был в восторге от результата."],
      ["rude", "грубый (rude to — с кем)", "Don't be rude to the support team.", "Не груби поддержке."]
    ],
    texts: [
      {
        id: 't-b2-9-1', title: 'Patch 1.3: what went wrong', level: 'B2',
        text: `Last month our small studio released patch 1.3 for our strategy game, and for about a week it felt like the end of the world.

The patch was supposed to be a small one. It fixed a few bugs, improved the menus and added a new map. The map was designed by Lena, our youngest level designer, and she was very proud of it. The rest of us were impressed with it too: it was full of hidden paths and looked similar to a real mountain valley.

The first reaction to the patch was positive. Then, on the second day, we noticed a sudden fall in the number of active players. At the same time there was a sharp increase in angry reviews. Players were furious about one thing: their old saves didn't load any more. Some of them had spent hundreds of hours on those saves.

Our producer, Denis, called an emergency meeting. At first, everybody was looking for someone to be angry with. "Who is responsible for the save system?" Denis asked. The answer was me. I felt terrible. I wasn't aware of any problem, because I had tested the patch on a new save, not an old one. It was a typical mistake, and I was ashamed of it.

But Denis wasn't interested in blaming people. "I don't care whose fault it is," he said. "We need a solution to the problem, not a reason for it." So we split into two groups. One group searched for the cause of the bug. The other wrote a message to the players. We apologised, explained what had happened and promised a fix within 48 hours.

The cause turned out to be tiny: one line of code had been deleted by mistake. We fixed it in twenty minutes, but testing took two days. This time we tested it on every kind of save we could find.

When patch 1.3.1 came out, the number of players went up by 40% in a single weekend. Many people wrote that they were surprised by our honesty. One player said: "It was kind of you to explain everything instead of hiding." Our relationship with the community actually became better than before.

What did I learn? The advantage of making a mistake in public is that you can't pretend it didn't happen. And now I'm a little less nervous about releases, because I know what our team is capable of.`,
        questions: [
          { q: 'Why were players angry after patch 1.3?', o: ['The new map was too hard', 'Their old saves didn\'t load', 'The game became more expensive'], a: 1 },
          { q: 'What was the cause of the bug?', o: ['A line of code was deleted by mistake', 'Lena\'s map was too big', 'The servers were attacked'], a: 0 },
          { q: 'What happened after patch 1.3.1?', o: ['More players left the game', 'The studio stopped making patches', 'The number of players went up by 40%'], a: 2 }
        ]
      },
      {
        id: 't-b2-9-2', title: 'Road trip to the expo', level: 'B2',
        text: `Kira: So, how are we getting to the game expo? By train or by car?
Artem: I was thinking of going in my car. It's cheaper for four people, and we can stop wherever we want.
Kira: Your car? The one with no air conditioning? I'm not keen on spending six hours in an oven.
Artem: Fair point. Then by train. There's one at 7:10 that arrives just before the doors open.
Kira: Perfect. I've got a photo of the timetable somewhere. Oh, and can we pay by card on the train, or only in cash?
Artem: By card, I think. But let's buy the tickets online. The demand for tickets is huge this year — the whole city will be crowded with gamers.
Kira: True. By the way, it was really nice of you to get us the press passes. How did you do that?
Artem: My cousin is responsible for the indie section. She's very fond of our game, so she sent me an invitation.
Kira: That's so kind of her! I'm a bit nervous about our demo, though. What if the build crashes in front of everyone?
Artem: It won't. And if it does, we'll say it was on purpose — "a surprise boss fight".
Kira: Very funny. Seriously, I'm tired of hearing that our game is similar to that other farming game. It's completely different from it!
Artem: Don't worry. Anyone who plays for five minutes will see the difference between them. Ours has dragons.
Kira: Good answer. What about Pasha? Is he coming? He was annoyed with us for not inviting him last year.
Artem: He's coming. He was upset about it for a month, but now he's excited about the trip. He's even learned the whole route by heart.
Kira: Typical of Pasha. And the hotel? Is it far from the station?
Artem: Ten minutes on foot. It's by the river, and apparently the rooms are small but clean. I'm not sure about the breakfast, though.
Kira: As long as there's coffee, I'll survive. I'm sorry about all the questions, by the way. I just want everything to go well.
Artem: Don't be sorry. It's typical of good producers to ask questions. And I'm sure people will be impressed with the demo.
Kira: I hope you're right. See you at the station at 6:45!`,
        questions: [
          { q: 'Why don\'t they go in Artem\'s car?', o: ['It has no air conditioning', 'It is too small for four people', 'Artem can\'t drive'], a: 0 },
          { q: 'How did Artem get the press passes?', o: ['He bought them online', 'His cousin sent him an invitation', 'He won them in a contest'], a: 1 },
          { q: 'How far is the hotel from the station?', o: ['Six hours by car', 'Ten minutes on foot', 'One stop by train'], a: 1 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: "I usually go to work by bike, but today I went ___ the bus.", o: ["by", "on", "in"], a: 1, why: "Конкретный автобус (the bus) → on; by только без артикля." },
      { t: 'choice', q: "Our game lost the award ___ just two votes.", o: ["on", "by", "with"], a: 1, why: "Разница в цифрах (на сколько) → by." },
      { t: 'choice', q: "The lock was opened ___ a paperclip.", o: ["by", "with", "of"], a: 1, why: "Инструмент, которым сделали, → with; by — кто сделал." },
      { t: 'choice', q: "Nobody knows the ___ of the fire.", o: ["reason", "cause", "excuse"], a: 1, why: "cause of — то, что вызвало событие; reason и excuse требуют for." },
      { t: 'choice', q: "Have you found an answer ___ my question?", o: ["on", "for", "to"], a: 2, why: "answer / reply / solution / reaction + to." },
      { t: 'choice', q: "It was silly ___ me to leave my laptop in the taxi.", o: ["of", "for", "from"], a: 0, why: "Оценка поступка: silly / stupid / kind of somebody to do." },
      { t: 'choice', q: "I feel sorry ___ Anton — he worked all weekend for nothing.", o: ["about", "for", "with"], a: 1, why: "Жалеть человека → feel sorry for somebody." },
      { t: 'choice', q: "The old town was crowded ___ tourists.", o: ["of", "with", "by"], a: 1, why: "crowded with, но full of." },
      { t: 'gap', q: "There's been a big rise ___ the price of graphics cards.", a: ["in"], why: "rise / increase / fall + in — рост в чём." },
      { t: 'gap', q: "I have a good relationship ___ all my clients.", a: ["with"], why: "Отношения с кем-то → relationship with." },
      { t: 'gap', q: "Are you still annoyed with me ___ forgetting your birthday?", a: ["for", "about"], why: "annoyed / angry with кого-то for (about) то, что он сделал." },
      { t: 'gap', q: "I'm getting tired ___ waiting for this update.", a: ["of"], why: "Надоело → tired of + -ing." },
      { t: 'gap', q: "This new app is very similar ___ the one we made last year.", a: ["to"], why: "Похож на → similar to." },
      { t: 'gap', q: "Who is responsible ___ the sound design?", a: ["for"], why: "Отвечать за → responsible for." },
      { t: 'order', a: 'What was the reason for his decision', ru: 'Какова была причина его решения?' },
      { t: 'order', a: 'It was kind of you to help', ru: 'Было очень мило с твоей стороны помочь' },
      { t: 'tr', q: 'Я горжусь этим проектом.', a: ["i am proud of this project", "i'm proud of this project"] },
      { t: 'tr', q: 'Цены выросли на десять процентов.', a: ["prices went up by ten percent", "prices went up by 10 percent", "prices went up by 10%", "prices rose by ten percent", "prices rose by 10 percent", "prices rose by 10%", "prices increased by ten percent", "prices increased by 10 percent", "prices increased by 10%", "prices went up by ten per cent", "prices rose by ten per cent", "prices increased by ten per cent", "prices have gone up by ten percent", "prices have risen by ten percent", "prices have increased by ten percent", "prices have gone up by 10%", "prices have risen by 10%", "prices have increased by 10%"] },
      { t: 'listen', say: "We met by chance at a conference", a: ["we met by chance at a conference"] },
      { t: 'listen', say: "I'm not very keen on horror games", a: ["i'm not very keen on horror games", "i am not very keen on horror games"] }
    ],
    test: [
      { t: 'choice', q: "Did you come here ___ Sasha's car or ___ taxi?", o: ["by … by", "in … by", "on … in"], a: 1, why: "С притяжательным (Sasha's car) — in; способ без артикля — by taxi." },
      { t: 'choice', q: "Unemployment has fallen ___ 2% this year.", o: ["in", "by", "on"], a: 1, why: "На сколько изменилось → by + цифра; in — в чём (a fall in unemployment)." },
      { t: 'choice', q: "Have you seen the new series ___ the creators of «Arcane»?", o: ["of", "from", "by"], a: 2, why: "Автор произведения → a film / series / book by." },
      { t: 'choice', q: "There are many advantages ___ living near the office.", o: ["of", "in", "for"], a: 1, why: "«Есть преимущества в том, чтобы…» → advantages in / to + -ing; of — «преимущество чего-то»." },
      { t: 'choice', q: "She's always been very friendly ___ new colleagues.", o: ["with", "of", "to"], a: 2, why: "Отношение к человеку → friendly / nice / rude to somebody." },
      { t: 'choice', q: "Sorry ___ the mess — I'm in the middle of moving.", o: ["for", "about", "with"], a: 1, why: "Извиниться за ситуацию → sorry about." },
      { t: 'choice', q: "He's completely independent ___ his parents now.", o: ["from", "on", "of"], a: 2, why: "dependent on, но independent of." },
      { t: 'gap', q: "The storm caused a lot of damage ___ the building.", a: ["to"], why: "Ущерб чему-то → damage to." },
      { t: 'gap', q: "Is there any connection ___ these two crashes?", a: ["between"], why: "Связь двух вещей → connection between." },
      { t: 'gap', q: "I was really impressed ___ your presentation.", a: ["with", "by"], why: "Впечатлён чем-то → impressed with или by." },
      { t: 'gap', q: "Tim is married ___ two children.", a: ["with"], why: "married with children — женат, и есть дети; married to — за кем." },
      { t: 'gap', q: "We're a bit short ___ money this month.", a: ["of"], why: "Не хватает чего-то → short of." }
    ]
  },

  // ───────────────────────────── UNIT B2-10 ─────────────────────────────
  {
    id: 'b2-10', level: 'B2', num: 10, track: 'main',
    books: { blue: [132, 133, 134, 135, 136] },
    title: 'Глагол + предлог: at, about, for, of, from, on, into, with',
    summary: 'Выучим, какой предлог нужен после десятков частых глаголов (explain to, shout at, apply for, think of / about, hear from, accuse of, blame on, rely on, believe in, succeed in, spend on), где предлог не нужен вовсе (call you, discuss it, answer the email) и как один предлог меняет смысл глагола.',
    grammar: [
      {
        title: '1. Главная идея: глагол и предлог — одна единица',
        html: `
<div class="g-idea">Что вы уже знаете (урок A2-17): <b>listen to, wait for, depend on, look at / for / after</b> и то, что <b>call, text, discuss</b> работают без предлога. В уроке B2-3 — <b>insist on doing, succeed in doing</b>. Теперь проходим глаголы с предлогами систематично, по предлогам, и смотрим, как <b>смена предлога меняет смысл</b>: shout <b>at</b> и shout <b>to</b>, think <b>of</b> и think <b>about</b>, hear <b>of</b> и hear <b>from</b>.</div>
<div class="g-compare">
  <div><div class="g-h">Русский</div><p>объясни <b>мне</b></p><p>ответь <b>на</b> письмо</p><p>поздравить <b>с</b> релизом</p><p>состоять <b>из</b></p><p>обвинить <b>в</b></p><p>тратить <b>на</b></p></div>
  <div><div class="g-h">English</div><p><span class="say">explain it <b>to</b> me</span></p><p><span class="say">answer <span class="g-gap">_</span> the email</span></p><p><span class="say">congratulate <b>on</b> the release</span></p><p><span class="say">consist <b>of</b></span></p><p><span class="say">accuse <b>of</b></span></p><p><span class="say">spend <b>on</b></span></p></div>
</div>
<div class="g-tip">Три типа ловушек: 1) предлог другой, чем в русском (поздравить <b>с</b> → congratulate <b>on</b>); 2) в русском предлог есть, а в английском нет (ответить <b>на</b> → answer); 3) в русском нет, а в английском есть (объяснить <b>мне</b> → explain <b>to</b> me).</div>
<div class="mini" data-q="Can you explain ___ how this plugin works?" data-o="me|to me|for me" data-a="1" data-why="explain (something) to somebody; explain me нельзя."></div>`
      },
      {
        title: '2. to — или вообще без предлога: explain to, но call, answer, ask',
        html: `
<div class="g-idea">После <b>explain, describe, apologise, talk, listen, write, reply</b> человеку нужен <b>to</b>. А <b>call, phone, text, email, answer, ask, discuss</b> берут человека или предмет <b>напрямую</b>.</div>
<table>
<tr><th>С to</th><th>Без предлога</th></tr>
<tr><td><span class="say">explain the task to the team</span></td><td><span class="say">call the client</span>, <span class="say">text me</span></td></tr>
<tr><td><span class="say">describe to me what happened</span></td><td><span class="say">answer the email</span></td></tr>
<tr><td><span class="say">apologise to her for the delay</span></td><td><span class="say">ask the manager</span></td></tr>
<tr><td><span class="say">talk / speak to him</span> <span class="muted">(можно with)</span></td><td><span class="say">discuss the plan</span></td></tr>
<tr><td><span class="say">reply to the email</span></td><td><span class="say">thank him for the help</span></td></tr>
<tr><td><span class="say">write to the publisher</span></td><td><span class="say">email the publisher</span></td></tr>
</table>
<p><b>explain / describe + вопросительное слово:</b> человек идёт с to и стоит до what / why / how.</p>
<ul class="g-list">
<li><span class="say">I explained to them why the release was late.</span> — Я объяснил им, почему релиз задержался.</li>
<li><span class="say">Can you describe to me what the error looks like?</span> — Опиши мне, как выглядит ошибка.</li>
<li><span class="say">He apologised to the players for the bug.</span> — Он извинился перед игроками за баг.</li>
<li><span class="say">She never answers my messages, but she always replies to Max.</span> — answer без предлога, reply to.</li>
</ul>
<div class="g-bad">Explain me this rule. · He apologised me. · Answer to my question. · I called to the bank.</div>
<div class="g-good">Explain this rule <b>to</b> me. · He apologised <b>to</b> me. · Answer my question. · I called the bank.</div>
<div class="g-tip">answer и reply означают одно и то же, но <b>reply</b> всегда хочет <b>to</b>. Можно запомнить так: «ре-плай ту» звучит как одно слово.</div>
<div class="mini" data-q="Nobody has replied ___ my comment yet." data-o="—|to|on" data-a="1" data-why="reply to something; answer — без предлога."></div>
<div class="mini" data-q="I'll ask ___ about the deadline." data-o="the boss|to the boss|for the boss" data-a="0" data-why="Спросить кого-то → ask somebody, без предлога."></div>`
      },
      {
        title: '3. at или to: shout at — «на», shout to — «чтобы услышал»',
        html: `
<div class="g-idea"><b>at</b> — направлено <b>в цель</b>, часто с агрессией или вниманием. <b>to</b> — передаём человеку, чтобы он услышал или поймал.</div>
<table>
<tr><th>at (в цель)</th><th>Пример</th></tr>
<tr><td>look, stare, glance at; have / take a look at</td><td><span class="say">Take a look at this mockup.</span></td></tr>
<tr><td>laugh at</td><td><span class="say">Everyone laughed at my avatar.</span></td></tr>
<tr><td>aim, point, shoot, fire at</td><td><span class="say">Aim at the head and shoot at the red barrels.</span></td></tr>
</table>
<p>Две пары, где предлог полностью меняет смысл:</p>
<ul class="g-list">
<li><span class="say">The coach shouted at us after we lost.</span> — Тренер наорал на нас. <span class="muted">(злость → at)</span></li>
<li><span class="say">She shouted to me from the other side of the hall.</span> — Она крикнула мне с другого конца зала. <span class="muted">(чтобы я услышал → to)</span></li>
<li><span class="say">Somebody threw a bottle at the stage.</span> — Кто-то швырнул бутылку в сцену. <span class="muted">(попасть → at)</span></li>
<li><span class="say">Throw the ball to me!</span> — Кинь мне мяч! <span class="muted">(чтобы поймал → to)</span></li>
</ul>
<div class="g-bad">Don't laugh on me. · Look on this! · He stared to me.</div>
<div class="g-good">Don't laugh <b>at</b> me. · Look <b>at</b> this! · He stared <b>at</b> me.</div>
<div class="g-tip">Русское «смеяться <b>над</b>», «смотреть <b>на</b>», «целиться <b>в</b>» — в английском всё это одно <b>at</b>. Где цель — там at.</div>
<div class="mini" data-q="Stop pointing that laser ___ my eyes!" data-o="to|at|on" data-a="1" data-why="point / aim / shoot at — направить в цель."></div>
<div class="mini" data-q="Can you throw the charger ___ me? I'll catch it." data-o="at|to|for" data-a="1" data-why="Бросить, чтобы поймали → throw to; at — чтобы попасть в кого-то."></div>`
      },
      {
        title: '4. about, for, after: apply for, search for, look after, care about',
        html: `
<div class="g-idea"><b>about</b> — тема («о чём»). <b>for</b> — цель, то, что хотим получить. У <b>care</b> и <b>look</b> смысл полностью зависит от предлога.</div>
<table>
<tr><th>Глагол</th><th>Пример</th></tr>
<tr><td>talk / read / know <b>about</b></td><td><span class="say">What do you know about Unreal Engine?</span></td></tr>
<tr><td>do something / nothing <b>about</b></td><td><span class="say">We have to do something about the lag.</span></td></tr>
<tr><td>apply (to a company) <b>for</b> a job</td><td><span class="say">I applied to three studios for a junior role.</span></td></tr>
<tr><td>ask (sb) <b>for</b> — попросить что-то</td><td><span class="say">I asked them for more time.</span></td></tr>
<tr><td>search (a place) <b>for</b></td><td><span class="say">I searched the whole flat for my headphones.</span></td></tr>
<tr><td>leave (a place) <b>for</b> — уехать в</td><td><span class="say">She left Moscow for Berlin.</span></td></tr>
<tr><td>wait <b>for</b> sth <b>to</b> happen</td><td><span class="say">I'm waiting for the build to finish.</span></td></tr>
</table>
<p><b>Три тонкости:</b></p>
<ul class="g-list">
<li><span class="say">We had a long discussion about the budget.</span> — но <span class="say">We discussed the budget.</span> <span class="muted">(существительное discussion — с about, глагол discuss — без)</span></li>
<li><span class="say">Can I ask you the time?</span> · <span class="say">I asked a local the way.</span> — <span class="muted">спросить время, дорогу — без for</span></li>
<li><span class="say">She left for work at eight.</span> — Она ушла на работу. <span class="muted">(не left to work)</span></li>
</ul>
<table>
<tr><th>Сочетание</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>care about</b></td><td>считать важным</td><td><span class="say">He only cares about money.</span></td></tr>
<tr><td><b>care for</b> / <b>look after</b> / <b>take care of</b></td><td>заботиться, ухаживать</td><td><span class="say">Who looks after your cat?</span></td></tr>
<tr><td><b>not care for</b></td><td>не любить</td><td><span class="say">I don't care for spicy food.</span></td></tr>
<tr><td><b>care</b> + what / how / if</td><td>без about</td><td><span class="say">I don't care what they think.</span></td></tr>
<tr><td><b>look for</b></td><td>искать</td><td><span class="say">I'm looking for a new job.</span></td></tr>
</table>
<p><b>take care of</b> — ещё и «взять на себя»: <span class="say">Don't worry, I'll take care of the tickets.</span></p>
<div class="g-bad">Let's discuss about it. · I'm applying on this job. · She left to Kazan. · I don't care about what they say.</div>
<div class="g-good">Let's discuss it. · I'm applying <b>for</b> this job. · She left <b>for</b> Kazan. · I don't care what they say.</div>
<div class="mini" data-q="Can you ___ my plants while I'm away?" data-o="look for|look after|care about" data-a="1" data-why="Присмотреть, ухаживать → look after (или take care of)."></div>
<div class="mini" data-q="The police searched his bag ___ drugs." data-o="for|about|on" data-a="0" data-why="search (место / вещь) for (то, что ищем)."></div>`
      },
      {
        title: '5. about или of: hear, think, dream, complain, remind',
        html: `
<div class="g-idea">Эти пять глаголов — самые коварные: предлог меняет смысл, и русский перевод не помогает.</div>
<table>
<tr><th>Сочетание</th><th>Смысл</th><th>Пример</th></tr>
<tr><td><b>hear about</b></td><td>узнать новость</td><td><span class="say">Did you hear about the layoffs?</span></td></tr>
<tr><td><b>hear of</b></td><td>знать, что существует</td><td><span class="say">I've never heard of this studio.</span></td></tr>
<tr><td><b>hear from</b></td><td>получить весточку</td><td><span class="say">Have you heard from Lena lately?</span></td></tr>
<tr><td><b>think about</b></td><td>обдумывать</td><td><span class="say">I'll think about your offer.</span></td></tr>
<tr><td><b>think of</b></td><td>придумать; мнение</td><td><span class="say">Who thought of this name?</span> · <span class="say">What do you think of it?</span></td></tr>
<tr><td><b>dream about</b></td><td>видеть во сне</td><td><span class="say">I dreamt about the deadline again.</span></td></tr>
<tr><td><b>dream of / about</b> + -ing</td><td>мечтать</td><td><span class="say">I dream of making my own game.</span></td></tr>
<tr><td><b>complain (to sb) about</b></td><td>жаловаться на</td><td><span class="say">We complained to the landlord about the noise.</span></td></tr>
<tr><td><b>complain of</b></td><td>жаловаться на боль</td><td><span class="say">He complained of a headache.</span></td></tr>
<tr><td><b>remind sb about</b></td><td>напомнить, чтобы не забыл</td><td><span class="say">Remind me about the call.</span></td></tr>
<tr><td><b>remind sb of</b></td><td>напоминать, быть похожим</td><td><span class="say">This game reminds me of my childhood.</span></td></tr>
</table>
<ul class="g-list">
<li><span class="say">We're thinking of moving to Tbilisi.</span> = <span class="say">We're thinking about moving to Tbilisi.</span> — Подумываем переехать. <span class="muted">(про возможные планы — оба)</span></li>
<li><span class="say">I couldn't think of anything to say.</span> — Мне ничего не пришло в голову. <span class="muted">(придумать → только of)</span></li>
<li><span class="say">I didn't think much of the finale.</span> — Финал мне не особо понравился.</li>
<li><span class="say">Cheat? I wouldn't dream of it!</span> — Жульничать? Да ни за что!</li>
</ul>
<div class="g-bad">I've never heard from this game. · I'll think of it and tell you tomorrow. · She reminds me about my sister.</div>
<div class="g-good">I've never heard <b>of</b> this game. · I'll think <b>about</b> it and tell you tomorrow. · She reminds me <b>of</b> my sister.</div>
<div class="g-tip"><b>from</b> — «от кого пришло» (письмо, звонок). <b>of</b> у remind — «похож на», у hear — «слышал о существовании». <b>about</b> — «на тему».</div>
<div class="mini" data-q="Who is Hideo Kojima? — You've never heard ___ him? Seriously?" data-o="from|of|about" data-a="1" data-why="Знать, что кто-то существует, → hear of."></div>
<div class="mini" data-q="That song always reminds me ___ our first trip." data-o="about|of|for" data-a="1" data-why="Напоминать, вызывать воспоминание → remind of; about — «напомнить, чтобы не забыл»."></div>`
      },
      {
        title: '6. of, for, from, on: accuse of, blame for, suffer from, rely on',
        html: `
<div class="g-idea">Глаголы обвинения, благодарности, защиты и зависимости. Структура часто такая: <b>глагол + кого + предлог + что</b>. После предлога — существительное или -ing.</div>
<table>
<tr><th>Предлог</th><th>Глаголы</th><th>Пример</th></tr>
<tr><td><b>of</b></td><td>accuse / suspect sb of</td><td><span class="say">They accused him of cheating.</span></td></tr>
<tr><td><b>of</b></td><td>approve / disapprove of; consist of</td><td><span class="say">The team consists of six people.</span></td></tr>
<tr><td><b>of / from</b></td><td>die of / from</td><td><span class="say">My laptop died from overheating.</span></td></tr>
<tr><td><b>for</b></td><td>thank / forgive / blame sb for; apologise for; pay for</td><td><span class="say">I'll never forgive them for cancelling the show.</span></td></tr>
<tr><td><b>from</b></td><td>suffer from; protect sb / sth from</td><td><span class="say">This case protects the phone from falls.</span></td></tr>
<tr><td><b>on</b></td><td>depend / rely on; live on; congratulate / compliment sb on</td><td><span class="say">Congratulations on the release!</span></td></tr>
</table>
<p><b>blame — два порядка слов:</b></p>
<ul class="g-list">
<li><span class="say">They blamed me for the crash.</span> — Меня обвинили в вылете. <span class="muted">(blame кого for что)</span></li>
<li><span class="say">They blamed the crash on me.</span> — Вину за вылет свалили на меня. <span class="muted">(blame что on кого)</span></li>
<li><span class="say">Who is to blame for this mess?</span> — Кто виноват в этом бардаке?</li>
</ul>
<p><b>pay for, но pay the bill:</b> платим <b>за</b> вещь, но сам счёт, аренду, налог, штраф — без предлога.</p>
<ul class="g-list">
<li><span class="say">Who paid for the pizza?</span> — Кто заплатил за пиццу?</li>
<li><span class="say">I need to pay the rent and the internet bill.</span> — Мне нужно заплатить за аренду и интернет.</li>
<li><span class="say">You can rely on Nika — she never misses a deadline.</span> — На Нику можно положиться.</li>
<li><span class="say">Freelancers can't always live on one project.</span> — Фрилансеру не всегда хватает на жизнь одного проекта.</li>
<li><span class="say">Will you buy it? — It depends how much it costs.</span> <span class="muted">(перед how / what / when можно без on)</span></li>
</ul>
<div class="g-bad">She accused me in lying. · Congratulations with your birthday! · The course consists from ten lessons. · I paid the coffee.</div>
<div class="g-good">She accused me <b>of</b> lying. · Congratulations <b>on</b> your birthday! <span class="muted">(или просто Happy birthday!)</span> · The course consists <b>of</b> ten lessons. · I paid <b>for</b> the coffee.</div>
<div class="g-tip">Самая частая ошибка русскоговорящих — «поздравляю <b>с</b>» → congratulations <b>with</b>. Правильно только <b>on</b>: поздравление «ложится <b>на</b>» событие.</div>
<div class="mini" data-q="Don't blame the bug ___ me — I didn't touch that file!" data-o="for|on|to" data-a="1" data-why="blame что-то on кого-то; blame кого-то for что-то."></div>
<div class="mini" data-q="Millions of people suffer ___ back pain after long hours at the computer." data-o="of|from|with" data-a="1" data-why="Страдать от → suffer from."></div>`
      },
      {
        title: '7. in, into, with, to, on: believe in, crash into, provide with, spend on',
        html: `
<div class="g-idea">Последняя большая группа. <b>into</b> — удар или деление на части; <b>with</b> — «наполнить, снабдить чем»; <b>on</b> — «сосредоточить, потратить на».</div>
<table>
<tr><th>Предлог</th><th>Глаголы</th><th>Пример</th></tr>
<tr><td><b>in</b></td><td>believe in, specialise in, succeed in</td><td><span class="say">Our studio specialises in pixel art.</span></td></tr>
<tr><td><b>into</b></td><td>break into; crash / drive / bump / run into</td><td><span class="say">Someone broke into my account.</span></td></tr>
<tr><td><b>into</b></td><td>divide / split / cut into; translate from … into</td><td><span class="say">Let's split the task into three parts.</span></td></tr>
<tr><td><b>with</b></td><td>collide with; fill with; provide / supply sb with</td><td><span class="say">The studio provides us with laptops.</span></td></tr>
<tr><td><b>to</b></td><td>happen to; invite to; prefer X to Y</td><td><span class="say">I prefer dark mode to light mode.</span></td></tr>
<tr><td><b>on</b></td><td>concentrate on, insist on, spend on</td><td><span class="say">How much do you spend on games?</span></td></tr>
</table>
<p><b>believe или believe in?</b></p>
<ul class="g-list">
<li><span class="say">I don't believe him.</span> — Я ему не верю. <span class="muted">(считаю, что он врёт)</span></li>
<li><span class="say">I don't believe the rumours.</span> — Я не верю слухам. <span class="muted">(что это правда)</span></li>
<li><span class="say">Do you believe in ghosts?</span> — Ты веришь в привидения? <span class="muted">(что существуют)</span></li>
<li><span class="say">I believe in giving honest feedback.</span> — Я считаю, что правильно давать честный фидбек. <span class="muted">(что это хорошо)</span></li>
</ul>
<ul class="g-list">
<li><span class="say">I finally succeeded in fixing the build.</span> — Мне наконец удалось починить сборку.</li>
<li><span class="say">I bumped into my old teacher at the mall.</span> — Я случайно встретил бывшего учителя. <span class="muted">(bump / run into — ещё и «случайно встретить»)</span></li>
<li><span class="say">The game has been translated into twelve languages.</span> — Игру перевели на двенадцать языков.</li>
<li><span class="say">Fill the bottle with water.</span> — Налей в бутылку воды. <span class="muted">(fill with, но full of — B2-9)</span></li>
<li><span class="say">What happened to your old Twitch channel?</span> — Что стало с твоим старым каналом?</li>
</ul>
<div class="g-bad">I prefer tea than coffee. · He spent all his money for skins. · Translate it on English. · Concentrate at your work.</div>
<div class="g-good">I prefer tea <b>to</b> coffee. · He spent all his money <b>on</b> skins. · Translate it <b>into</b> English. · Concentrate <b>on</b> your work.</div>
<div class="g-tip">«Переводить <b>на</b> язык» — <b>into</b>: текст как будто «переливается» в другой язык. А «говорить <b>на</b> языке» — <b>in</b> English (B1-24).</div>
<div class="mini" data-q="A delivery robot crashed ___ a lamp post this morning." data-o="in|into|on" data-a="1" data-why="Врезаться → crash / drive / bump into."></div>
<div class="mini" data-q="The company provides all new employees ___ a laptop." data-o="for|with|by" data-a="1" data-why="provide somebody with something."></div>`
      },
      {
        title: '8. Типичные ошибки — проверьте себя',
        html: `
<div class="g-mistakes">
<div class="g-bad">Can you explain me the task?</div><div class="g-good">Can you explain the task <b>to</b> me?</div>
<div class="g-bad">Please answer to my email.</div><div class="g-good">Please answer my email. / Please reply <b>to</b> my email.</div>
<div class="g-bad">Don't laugh on him.</div><div class="g-good">Don't laugh <b>at</b> him.</div>
<div class="g-bad">We discussed about the new level.</div><div class="g-good">We discussed the new level.</div>
<div class="g-bad">I've never heard from this band.</div><div class="g-good">I've never heard <b>of</b> this band.</div>
<div class="g-bad">Congratulations with the new job!</div><div class="g-good">Congratulations <b>on</b> the new job!</div>
<div class="g-bad">It depends from the budget.</div><div class="g-good">It depends <b>on</b> the budget.</div>
<div class="g-bad">She accused him in stealing her idea.</div><div class="g-good">She accused him <b>of</b> stealing her idea.</div>
<div class="g-bad">I spend a lot of money for coffee.</div><div class="g-good">I spend a lot of money <b>on</b> coffee.</div>
</div>
<div class="g-sum"><div class="g-h">Итог юнита в одной строке</div><b>explain to · shout at / to · apply for · look after · hear of / from · think of / about · remind of / about · accuse of · blame for / on · suffer from · rely on · congratulate on · believe in · crash into · provide with · prefer to · spend on</b> — а <b>call, answer, ask, discuss</b> — без предлога.</div>`
      }
    ],
    words: [
      ["explain", "объяснять (explain sth to sb)", "Can you explain the rules to me?", "Объяснишь мне правила?"],
      ["describe", "описывать", "Describe to me what you saw.", "Опиши мне, что ты видел."],
      ["apologise", "извиняться (apologise to sb for sth)", "He apologised to us for the delay.", "Он извинился перед нами за задержку."],
      ["reply", "отвечать (reply to)", "She hasn't replied to my message.", "Она не ответила на моё сообщение."],
      ["stare", "пристально смотреть (stare at)", "Why are you staring at me?", "Почему ты на меня уставился?"],
      ["laugh", "смеяться (laugh at — над)", "Don't laugh at my drawing!", "Не смейся над моим рисунком!"],
      ["aim", "целиться (aim at); цель", "Aim at the red target.", "Цельтесь в красную мишень."],
      ["apply", "подавать заявку (apply for)", "I applied for a job at Ubisoft.", "Я подал заявку на работу в Ubisoft."],
      ["search", "обыскивать, искать (search sth for)", "I searched my bag for the keys.", "Я обыскал сумку в поисках ключей."],
      ["care", "заботиться; быть важным (care about / for)", "I really care about this project.", "Этот проект для меня очень важен."],
      ["complain", "жаловаться (complain to sb about)", "We complained to support about the bug.", "Мы пожаловались в поддержку на баг."],
      ["remind", "напоминать (remind sb of / about)", "This city reminds me of Prague.", "Этот город напоминает мне Прагу."],
      ["accuse", "обвинять (accuse sb of)", "They accused him of cheating.", "Его обвинили в жульничестве."],
      ["suspect", "подозревать (suspect sb of); подозреваемый", "Who do you suspect of leaking the trailer?", "Кого ты подозреваешь в утечке трейлера?"],
      ["approve", "одобрять (approve of)", "My parents didn't approve of my choice.", "Родители не одобрили мой выбор."],
      ["consist", "состоять (consist of — из)", "The course consists of twelve units.", "Курс состоит из двенадцати юнитов."],
      ["blame", "винить (blame sb for / sth on sb)", "Don't blame me for your mistakes.", "Не вини меня в своих ошибках."],
      ["forgive", "прощать (forgive sb for)", "Forgive me for being late.", "Прости, что опоздал."],
      ["suffer", "страдать (suffer from — от)", "Many designers suffer from burnout.", "Многие дизайнеры страдают от выгорания."],
      ["protect", "защищать (protect from — от)", "A VPN protects your data from hackers.", "VPN защищает твои данные от хакеров."],
      ["rely", "полагаться (rely on — на)", "You can always rely on me.", "На меня всегда можно положиться."],
      ["congratulate", "поздравлять (congratulate sb on — с)", "I congratulated her on the new job.", "Я поздравил её с новой работой."],
      ["compliment", "делать комплимент, хвалить (compliment sb on)", "He complimented me on my portfolio.", "Он похвалил моё портфолио."],
      ["specialise", "специализироваться (specialise in)", "She specialises in character design.", "Она специализируется на дизайне персонажей."],
      ["succeed", "добиться успеха, суметь (succeed in + -ing)", "Did you succeed in finding a flat?", "Тебе удалось найти квартиру?"],
      ["collide", "столкнуться (collide with)", "Two cars collided with each other.", "Две машины столкнулись друг с другом."],
      ["provide", "обеспечивать (provide sb with sth)", "They provided us with free coffee.", "Нас обеспечили бесплатным кофе."],
      ["concentrate", "сосредоточиться (concentrate on)", "I can't concentrate on anything today.", "Я сегодня ни на чём не могу сосредоточиться."],
      ["insist", "настаивать (insist on + -ing)", "She insisted on paying for dinner.", "Она настояла на том, чтобы заплатить за ужин."],
      ["translate", "переводить (translate from … into)", "The book was translated into Russian.", "Книгу перевели на русский."],
      ["divide", "делить (divide into — на части)", "The map is divided into four zones.", "Карта разделена на четыре зоны."]
    ],
    texts: [
      {
        id: 't-b2-10-1', title: 'Somebody broke into my account', level: 'B2',
        text: `Last Tuesday I woke up to forty-seven notifications. At first I thought people were congratulating me on something. Then I read them. Someone had broken into my gaming account overnight and spent all my savings on skins.

I've always believed in strong passwords, so I couldn't understand how it had happened. I searched my inbox for any suspicious emails and finally found one: a fake "security check" that I had clicked on a week before. I was furious — not with the hackers, but with myself.

The first thing I did was contact support. I described to them exactly what had happened and explained that I hadn't made any of those purchases. The reply came quickly, but it was a template: "We are sorry to hear about your problem. Please wait for a specialist to contact you." So I waited. And waited.

Meanwhile, my friend Gleb called me. He had heard about the hack from our clan chat. "Did you use the same password for your email?" he asked. I didn't want to answer him, because the honest answer was yes. He didn't laugh at me, though. He just said, "Change it now. Then we'll think about the rest."

He was right. I changed every password, turned on two-factor authentication and asked my bank to block the card. The bank was great: they didn't accuse me of lying, they simply refunded the money within three days.

The game company was a different story. Four days later a specialist finally wrote to me. At first he seemed to blame the problem on me: "Our system cannot protect users from their own mistakes." I complained to his manager about his tone, and after that things moved faster. They didn't give me the skins back, but they restored my progress and apologised for the delay.

A week later, my account was mine again. I was relieved, but I also learned a few things. You can't rely on support to fix everything. You shouldn't use one password for everything. And you should never click on a link just because it looks official.

Now, whenever I get an email that asks me to "confirm my details", it reminds me of that Tuesday morning. I don't click. I delete it — and I think of Gleb, who still hasn't let me forget it.`,
        questions: [
          { q: 'How did the hacker get into the account?', o: ['The author clicked on a fake email', 'Gleb told the hacker the password', 'The game company was hacked'], a: 0 },
          { q: 'How did the bank react?', o: ['They accused the author of lying', 'They refunded the money within three days', 'They blocked his account for a month'], a: 1 },
          { q: 'What did the game company do in the end?', o: ['Gave all the skins back', 'Restored his progress and apologised', 'Did nothing at all'], a: 1 }
        ]
      },
      {
        id: 't-b2-10-2', title: 'The job offer', level: 'B2',
        text: `Dasha: Hey! Did you hear from the studio in Belgrade?
Ilya: Yes, this morning. They offered me the job!
Dasha: No way! Congratulations on the offer! So when do you leave for Belgrade?
Ilya: Hold on, I haven't said yes yet. I'm still thinking about it.
Dasha: What is there to think about? You've been dreaming of working on a big game for years.
Ilya: I know. But it's complicated. The team consists of forty people, and I'd be responsible for the whole interface. At my current job we're five, and I can concentrate on the things I love.
Dasha: That sounds like fear talking. You're capable of much more than menus for a match-three game.
Ilya: Maybe. But I care about my current team. I don't want them to think I've left them in the middle of a project.
Dasha: Have you talked to your boss about it?
Ilya: Not yet. I'm afraid he'll blame me for the delay on our release.
Dasha: He won't. He's the one who always insists on "growing as a designer". And anyway, you can't depend on one small studio forever.
Ilya: True. Oh, and there's another thing. They asked me for a test task last week, and I think I made it in a rush. When they described to me what they wanted, I only understood half of it.
Dasha: And they still offered you the job. That tells you what they think of you.
Ilya: Fair. The art director even complimented me on the colour choices.
Dasha: See? What about money? Is it enough to live on over there?
Ilya: More than enough. They'll pay for the flat for the first three months and provide me with all the equipment.
Dasha: Then I really don't understand the problem.
Ilya: The problem is that everything reminds me of the first time I moved. I was lonely for a year.
Dasha: That was different. You didn't know anybody. Now you've got me, and I'll call you every weekend. I'll even learn some Serbian so you can explain the jokes to me.
Ilya: Ha. OK. I'll talk to my boss tomorrow and reply to them by Friday.
Dasha: Promise?
Ilya: Promise. And remind me about it on Thursday, in case I lose my nerve.`,
        questions: [
          { q: 'Why hasn\'t Ilya accepted the offer yet?', o: ['The salary is too low', 'He cares about his current team and is nervous about moving', 'The studio didn\'t like his test task'], a: 1 },
          { q: 'What will the studio pay for?', o: ['The flat for the first three months', 'His flights home every month', 'Serbian lessons'], a: 0 },
          { q: 'What does Ilya ask Dasha to do?', o: ['Call his boss', 'Help him with the test task', 'Remind him about his decision on Thursday'], a: 2 }
        ]
      }
    ],
    practice: [
      { t: 'choice', q: "Could you explain ___?", o: ["me the problem", "the problem to me", "to me the problem"], a: 1, why: "explain something to somebody; explain me нельзя." },
      { t: 'choice', q: "I called ___ to cancel the order.", o: ["to the shop", "the shop", "at the shop"], a: 1, why: "call / phone / text / email + сразу кто, без предлога." },
      { t: 'choice', q: "The streamer got angry and started shouting ___ the chat.", o: ["to", "at", "on"], a: 1, why: "Кричать на кого-то в гневе → shout at; to — чтобы услышали." },
      { t: 'choice', q: "Don't worry about the tickets — I'll take care ___ them.", o: ["of", "for", "about"], a: 0, why: "Взять на себя, позаботиться → take care of." },
      { t: 'choice', q: "Has anyone ___ a good name for the new character?", o: ["thought about", "thought of", "thought on"], a: 1, why: "Придумать идею → think of; think about — обдумывать." },
      { t: 'choice', q: "Have you ___ Kate recently? She hasn't posted anything.", o: ["heard of", "heard from", "heard about"], a: 1, why: "Получать весточку от человека → hear from." },
      { t: 'choice', q: "She was accused ___ copying another artist's work.", o: ["in", "for", "of"], a: 2, why: "accuse somebody of (doing) something." },
      { t: 'choice', q: "I prefer working at night ___ working in the morning.", o: ["than", "to", "over"], a: 1, why: "prefer одно to другое." },
      { t: 'gap', q: "We need to do something ___ the loading times.", a: ["about"], why: "Что-то предпринять насчёт проблемы → do something about." },
      { t: 'gap', q: "He's applying ___ a job as a level designer.", a: ["for"], why: "Подавать заявку на должность → apply for." },
      { t: 'gap', q: "My sister has to pay ___ her own phone now.", a: ["for"], why: "Платить за вещь → pay for; но pay the bill / the rent без предлога." },
      { t: 'gap', q: "Congratulations ___ passing your driving test!", a: ["on"], why: "Поздравлять с → congratulate on (не with)." },
      { t: 'gap', q: "The new level is divided ___ five zones.", a: ["into"], why: "Делить на части → divide / split into." },
      { t: 'gap', q: "I can't concentrate ___ my work with all this noise.", a: ["on"], why: "Сосредоточиться на → concentrate on." },
      { t: 'order', a: 'He apologised to me for the mistake', ru: 'Он извинился передо мной за ошибку' },
      { t: 'order', a: 'This place reminds me of my childhood', ru: 'Это место напоминает мне о детстве' },
      { t: 'tr', q: 'Не вини меня в этом.', a: ["don't blame me for this", "do not blame me for this", "don't blame me for it", "do not blame me for it", "don't blame this on me", "do not blame this on me", "don't blame it on me", "do not blame it on me", "don't blame me for that", "don't blame that on me"] },
      { t: 'tr', q: 'Сколько ты тратишь на игры?', a: ["how much do you spend on games", "how much money do you spend on games"] },
      { t: 'listen', say: "You can always rely on me", a: ["you can always rely on me"] },
      { t: 'listen', say: "Let's discuss it tomorrow", a: ["let's discuss it tomorrow", "let us discuss it tomorrow"] }
    ],
    test: [
      { t: 'choice', q: "Can you describe ___ what the man looked like?", o: ["us", "to us", "for us"], a: 1, why: "describe / explain to somebody what / how / why…" },
      { t: 'choice', q: "Lisa shouted «Catch!» and threw the keys ___ me.", o: ["at", "to", "on"], a: 1, why: "Бросить, чтобы поймали → throw to; at — чтобы попасть." },
      { t: 'choice', q: "I don't care ___ people think of my hair.", o: ["about what", "what", "for what"], a: 1, why: "care + what / how / if — без about." },
      { t: 'choice', q: "I searched the whole office ___ my badge.", o: ["about", "for", "after"], a: 1, why: "search a place for something — искать там что-то." },
      { t: 'choice', q: "Grandpa complained ___ a pain in his back.", o: ["about", "of", "for"], a: 1, why: "Жаловаться на боль, болезнь → complain of; about — на ситуацию." },
      { t: 'choice', q: "I wouldn't dream ___ selling my old consoles.", o: ["about", "of", "for"], a: 1, why: "Ни за что бы не стал → I wouldn't dream of + -ing." },
      { t: 'choice', q: "The police blamed the accident ___ the driver of the bus.", o: ["on", "for", "to"], a: 0, why: "blame something on somebody; blame somebody for something." },
      { t: 'gap', q: "Sunscreen protects your skin ___ the sun.", a: ["from"], why: "Защищать от → protect from." },
      { t: 'gap', q: "I don't believe ___ luck — I believe in hard work.", a: ["in"], why: "Верить, что существует или что это правильно, → believe in." },
      { t: 'gap', q: "A car drove ___ the back of our bus.", a: ["into"], why: "Въехать, врезаться → drive / crash into." },
      { t: 'gap', q: "What happened ___ your old laptop?", a: ["to"], why: "Что стало с чем-то → happen to." },
      { t: 'gap', q: "The hotel supplied us ___ towels and slippers.", a: ["with"], why: "supply / provide somebody with something." }
    ]
  }
);
