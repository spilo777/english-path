// Грамматика по шагам для юнита a2-3: время «от прошлого до сейчас», Have you ever…? (опыт, never, сколько раз), been или gone, How long…? + have + 3-я форма, have been + -ing, for или since, ago + Past Simple.
(function () {
  const u = COURSE.units.find((x) => x.id === 'a2-3'); if (!u) return;
  u.walk = [
    // ───────────── 1. Главная идея ─────────────
    { title: 'Время, которое ещё не закончилось', steps: [
      { t: 'idea', text: `Хотите сказать «Я живу в Москве три года» — и живёте там до сих пор. Это началось в прошлом и идёт до сейчас, поэтому по-английски — знакомое вам <b>have + третья форма</b>: I have lived.`,
        lit: [['I', 'я'], ['have lived', 'прожил (и живу)'], ['in Moscow', 'в Москве'], ['for three years', 'три года']],
        ex: [['I have lived in Moscow for three years.', 'Я живу в Москве три года.'], ['I have known Kate for ten years.', 'Я знаю Кейт десять лет.']],
        bad: 'I live in Moscow for three years.', good: 'I <b>have lived</b> in Moscow for three years.',
        tip: `Представьте мост из прошлого в «сейчас». Время ещё открыто — идите по мосту: have + третья форма.` },
      { t: 'check', q: 'Скажите: «Я живу в Москве три года» (и живу сейчас)', o: ['I live in Moscow for three years.', 'I have lived in Moscow for three years.', 'I lived in Moscow for three years.'], a: 1,
        why: 'Началось в прошлом и длится до сих пор → have lived.' },
      { t: 'idea', text: `Второй такой случай — <b>опыт</b>: было ли это хоть раз в жизни. Жизнь ещё не закончилась — значит, тоже have + третья форма.`,
        ex: [['Have you ever been to Japan?', 'Ты когда-нибудь был в Японии?'], ['I have never played Dota.', 'Я никогда не играл в Dota.']] },
      { t: 'check', q: 'Скажите: «Я никогда не играл в шахматы онлайн»', o: ['I never played chess online.', 'I have never played chess online.', 'I don’t never play chess online.'], a: 1,
        why: 'Опыт за всю жизнь → have + never + played.' },
      { t: 'idea', text: `Итог: время ещё открыто (вся жизнь или «уже столько-то») → have / has + третья форма.`,
        rows: [['опыт в жизни', 'Have you ever been to Japan?'], ['сколько уже длится', 'I have lived here for three years.']] }
    ]},

    // ───────────── 2. Have you ever…? ─────────────
    { title: 'Have you ever…? — было ли это в жизни', steps: [
      { t: 'idea', text: `Хотите спросить: «Ты когда-нибудь играл в Elden Ring?» Ставим have вперёд, как do в вопросах, а «когда-нибудь» — это <b>ever</b>, между «ты» и третьей формой.`,
        lit: [['Have', '(вопрос)'], ['you', 'ты'], ['ever', 'когда-нибудь'], ['played', 'играл'], ['Elden Ring?', 'в Elden Ring?']],
        ex: [['Have you ever played Elden Ring?', 'Ты когда-нибудь играл в Elden Ring?'], ['Has your sister ever been to London? — No, never.', 'Твоя сестра была когда-нибудь в Лондоне? — Нет, никогда.'], ['Have you ever tried sushi? — Yes, I have.', 'Ты когда-нибудь пробовал суши? — Да.']],
        tip: `Время («когда») здесь не называем: важно не когда, а было ли вообще.` },
      { t: 'check', q: 'Have you ___ played golf? — Yes, once.', ru: 'Ты когда-нибудь играл в гольф? — Да, один раз.', o: ['ever', 'never', 'yet'], a: 0,
        why: 'В вопросе про опыт «когда-нибудь» → ever.' },
      { t: 'idea', text: `«Никогда» — это <b>never</b>, и оно встаёт между have и третьей формой. Но never уже само значит «не», второе «не» не нужно: в английском только одно отрицание.`,
        lit: [['I', 'я'], ['have', '(have)'], ['never', 'никогда (не)'], ['been', 'был'], ['to Paris', 'в Париже']],
        bad: 'I haven’t never been to Paris.', good: 'I have <b>never</b> been to Paris.',
        tip: `Русское «никогда не» — два отрицания. Английское never — одно слово на всё. Либо never, либо haven’t ever — но не вместе.` },
      { t: 'check', q: 'Скажите: «Я никогда не летал на самолёте»', o: ['I haven’t never flown on a plane.', 'I have never flown on a plane.', 'I never have flown on a plane.'], a: 1,
        why: 'Одно отрицание: have + never + flown.' },
      { t: 'idea', text: `«Сколько раз» — тоже опыт: <b>once</b> (один раз), <b>twice</b> (два раза), <b>three times</b>, <b>many times</b>. Слово <b>before</b> — «раньше».`,
        ex: [['I’ve finished it twice.', 'Я прошёл её два раза.'], ['How many times have you watched Friends?', 'Сколько раз ты смотрел «Друзей»?'], ['I’ve seen this actor before.', 'Я видел этого актёра раньше.']] },
      { t: 'check', q: 'How many times ___ this series?', ru: 'Сколько раз ты смотрел этот сериал?', o: ['did you ever watch', 'have you watched', 'are you watching'], a: 1,
        why: 'Сколько раз за жизнь до сих пор — опыт → have you watched.' },
      { t: 'idea', text: `Итог: опыт — have + третья форма, без «когда».`,
        rows: [['вопрос', 'Have you ever tried it?'], ['никогда', 'I have never tried it.'], ['сколько раз', 'I have tried it twice.']] }
    ]},

    // ───────────── 3. been или gone ─────────────
    { title: 'been или gone: вернулся или ещё там', steps: [
      { t: 'idea', text: `Хотите сказать «Макс бывал в Испании». Для опыта «был где-то» говорим <b>been to</b>: съездил и уже вернулся.`,
        lit: [['Max', 'Макс'], ['has been', 'был (и вернулся)'], ['to Spain', 'в Испании']],
        ex: [['Max has been to Spain.', 'Макс бывал в Испании.'], ['I’ve been to Paris three times.', 'Я был в Париже три раза.']] },
      { t: 'idea', text: `А «Макс уехал в Испанию» (и сейчас он там) — это <b>has gone</b>. gone — третья форма от go: ушёл и ещё не вернулся.`,
        rows: [['Max has been to Spain.', 'ездил и вернулся'], ['Max has gone to Spain.', 'уехал, сейчас там']],
        tip: `been — сходил туда и обратно, круг замкнулся. gone — стрелка в одну сторону.` },
      { t: 'check', q: 'Kate isn’t here. She’s ___ to the gym.', ru: 'Кейт здесь нет. Она ушла в спортзал.', o: ['been', 'gone', 'went'], a: 1,
        why: 'Её нет, она сейчас там → gone.' },
      { t: 'check', q: 'I’ve ___ to Italy three times.', ru: 'Я был в Италии три раза.', o: ['been', 'gone', 'went'], a: 0,
        why: 'Опыт: ездил и вернулся → been to.' },
      { t: 'idea', text: `Где ты был? — <b>Where have you been?</b> (ты вернулся, вот ты). Куда ушла Кейт? — <b>Where has Kate gone?</b> (её здесь нет). И после been ставим <b>to</b>, а не in.`,
        bad: 'Have you ever been in Japan?', good: 'Have you ever been <b>to</b> Japan?' },
      { t: 'idea', text: `Итог: вернулся — been, ещё там — gone.`,
        rows: [['опыт, вернулся', 'He has been to Spain.'], ['сейчас там', 'He has gone to Spain.']] }
    ]},

    // ───────────── 4. How long…? ─────────────
    { title: 'How long…? — «сколько уже»', steps: [
      { t: 'idea', text: `Хотите спросить «Сколько ты знаешь Кейт?». По-русски «знаешь» — настоящее. Но знакомство началось давно и идёт до сейчас — значит, <b>How long have you known</b>…?`,
        lit: [['How long', 'как долго'], ['have', '(вопрос)'], ['you', 'ты'], ['known', 'знал (и знаешь)'], ['Kate?', 'Кейт?']],
        ex: [['How long have you known Kate?', 'Сколько ты знаешь Кейт?'], ['How long has he had this laptop?', 'Сколько у него этот ноутбук?']] },
      { t: 'idea', text: `Это самое частое место ошибок: русское настоящее тянет сказать do you know. Не переживайте, дальше потренируемся.`,
        bad: 'How long do you know her? · I know her for ten years.', good: 'How long <b>have</b> you <b>known</b> her? · I<b>’ve known</b> her for ten years.' },
      { t: 'check', q: 'How long ___ this phone?', ru: 'Сколько у тебя этот телефон?', o: ['do you have', 'have you had', 'are you having'], a: 1,
        why: 'Сколько уже длится → have + had (третья форма от have).' },
      { t: 'idea', text: `С am / is / are — то же самое: «сколько уже» → <b>have been</b>. «Они женаты пять лет» — They have been married for five years.`,
        ex: [['How long have you been a designer?', 'Сколько ты уже работаешь дизайнером?'], ['She has been in Paris since Monday.', 'Она в Париже с понедельника.']],
        bad: 'How long are you married?', good: 'How long <b>have</b> you <b>been</b> married?' },
      { t: 'check', q: 'They ___ married since 2020.', ru: 'Они женаты с 2020 года.', o: ['are', 'have been', 'were'], a: 1,
        why: 'since 2020 — с тех пор до сейчас → have been.' },
      { t: 'idea', text: `Итог: сигнал «уже … лет», «с …», «сколько ты…?» → have + третья форма. Нет «сколько» — просто настоящее: I know her very well.`,
        rows: [['просто сейчас', 'I know Lisa.', 'They are married.'], ['сколько уже', 'I have known Lisa for years.', 'They have been married for five years.']] }
    ]},

    // ───────────── 5. have been + -ing ─────────────
    { title: 'I have been learning — если это процесс', steps: [
      { t: 'idea', text: `Хотите сказать «Я учу английский полгода». Сейчас это процесс (I’m learning). Чтобы сказать, сколько он уже идёт, берём <b>have been + хвостик -ing</b>.`,
        lit: [['I', 'я'], ['have been', '(уже столько-то)'], ['learning', 'учу'], ['English', 'английский'], ['for six months', 'полгода']],
        ex: [['I’ve been learning English for six months.', 'Я учу английский полгода.'], ['It’s been raining all day.', 'Весь день идёт дождь.']] },
      { t: 'idea', text: `Сравните: сейчас идёт → am / is / are + -ing. Сколько уже идёт → have / has been + -ing.`,
        rows: [['I’m learning English.', 'I’ve been learning English for a year.'], ['Max is streaming.', 'He’s been streaming since eight.'], ['Are you waiting?', 'How long have you been waiting?']],
        tip: `Осторожно: she’s been = she has been, а не she is.` },
      { t: 'check', q: 'Sorry I’m late! How long ___?', ru: 'Извини, я опоздал! Сколько ты уже ждёшь?', o: ['are you waiting', 'have you been waiting', 'did you wait'], a: 1,
        why: 'Ждёт до сих пор, «сколько уже» → have been waiting.' },
      { t: 'idea', text: `А know, have (иметь), be, like — это не процесс, а состояние. С ними -ing не ставим: have known, have had.`,
        bad: 'I have been knowing her since school.', good: 'I <b>have known</b> her since school.' },
      { t: 'check', q: 'I ___ Max since school.', ru: 'Я знаю Макса со школы.', o: ['have been knowing', 'have known', 'know'], a: 1,
        why: 'know — состояние, без -ing → have known.' },
      { t: 'idea', text: `Итог: процесс — have been + -ing; состояние — have + третья форма.`,
        rows: [['процесс', 'We’ve been playing since ten.'], ['состояние', 'I’ve known him for years.']] },
      { t: 'idea', opt: true, text: `live (жить) и work (работать) можно и так и так — смысл одинаковый.`,
        ex: [['I’ve lived here for two years.', 'Я живу здесь два года.'], ['I’ve been living here for two years.', 'Я живу здесь два года.']] }
    ]},

    // ───────────── 6. for или since ─────────────
    { title: 'for или since', steps: [
      { t: 'idea', text: `«Три года» — сколько времени, это <b>for</b>. «С 2023 года» — с какого момента, это <b>since</b>. Число минут, дней, лет — всегда for; дата, день, событие — since.`,
        ex: [['I’ve worked at this studio for three years.', 'Я работаю в этой студии три года.'], ['I’ve worked at this studio since 2023.', 'Я работаю в этой студии с 2023 года.']],
        rows: [['for + отрезок', 'for ten minutes, for five years, for ages'], ['since + точка старта', 'since Monday, since May, since 2019']],
        bad: 'I’ve lived here since three years.', good: 'I’ve lived here <b>for</b> three years.',
        tip: `Подставьте «в течение» → for. Подставьте «начиная с» → since.` },
      { t: 'check', q: 'I’ve worked here ___ March.', ru: 'Я работаю здесь с марта.', o: ['for', 'since', 'ago'], a: 1,
        why: 'Март — точка старта → since.' },
      { t: 'check', q: 'We’ve been in the queue ___ forty minutes.', ru: 'Мы стоим в очереди сорок минут.', o: ['for', 'since', 'ago'], a: 0,
        why: 'Сорок минут — отрезок → for.' },
      { t: 'idea', text: `После since может идти целая фраза про момент в прошлом — со второй формой: since I <b>was</b> ten. А с отрицанием: «сто лет не играл» — I haven’t played it for ages.`,
        ex: [['I’ve played the guitar since I was ten.', 'Я играю на гитаре с десяти лет.'], ['We’ve been friends since we met at university.', 'Мы дружим с тех пор, как познакомились в универе.'], ['I haven’t seen Max since Friday.', 'Я не видел Макса с пятницы.']] },
      { t: 'check', q: 'Lena has lived in Kazan ___ she was five.', ru: 'Лена живёт в Казани с пяти лет.', o: ['for', 'since', 'when'], a: 1,
        why: '«она была пятилетней» — точка старта → since.' },
      { t: 'idea', text: `Итог: for — сколько, since — с какого момента.`,
        rows: [['for', 'for three years, for ages'], ['since', 'since 2023, since I was ten']] },
      { t: 'idea', opt: true, text: `Со словом <b>all</b> ни for, ни since не нужно: all my life (всю жизнь), all day (весь день).`,
        ex: [['I’ve lived here all my life.', 'Я живу здесь всю жизнь.'], ['It’s been raining all day.', 'Весь день идёт дождь.']] }
    ]},

    // ───────────── 7. ago ─────────────
    { title: 'ago — «назад», и это уже вторая форма', steps: [
      { t: 'idea', text: `Хотите сказать «Я начал эту работу три года назад». «Назад» — это <b>ago</b>, и оно ставится <b>после</b> срока: three years ago.`,
        lit: [['I', 'я'], ['started', 'начал'], ['this job', 'эту работу'], ['three years', 'три года'], ['ago', 'назад']],
        ex: [['The game came out a month ago.', 'Игра вышла месяц назад.'], ['When did you buy it? — A week ago.', 'Когда ты это купил? — Неделю назад.']] },
      { t: 'idea', text: `ago указывает на точку в прошлом, которая закончилась. Поэтому здесь вторая форма, как с yesterday (помните did из A1?), а не have + третья форма.`,
        bad: 'I have started three years ago. · I came here ago two years.', good: 'I <b>started</b> three years ago. · I came here two years <b>ago</b>.' },
      { t: 'check', q: 'She ___ the studio two years ago.', ru: 'Она пришла в студию два года назад.', o: ['has joined', 'joined', 'joins'], a: 1,
        why: 'ago — законченная точка → вторая форма: joined.' },
      { t: 'idea', text: `Одну ситуацию можно сказать двумя способами. Когда? → ago и вторая форма. Сколько уже? → for и have + третья форма.`,
        rows: [['I met Kate ten years ago.', 'I’ve known Kate for ten years.'], ['I bought this laptop a year ago.', 'I’ve had it for a year.']],
        tip: `Ловушка «Как давно…?»: идёт до сих пор → How long have you known Kate? Случилось и закончилось → When did you buy it?` },
      { t: 'check', q: 'I met Max five years ___.', ru: 'Я познакомился с Максом пять лет назад.', o: ['ago', 'for', 'since'], a: 0,
        why: 'Встреча — точка в прошлом, «назад» → ago.' },
      { t: 'check', q: 'Скажите: «Когда ты купил этот ноутбук?»', o: ['How long have you bought this laptop?', 'When did you buy this laptop?', 'When have you bought this laptop?'], a: 1,
        why: 'Покупка — точка в прошлом → When did…?' },
      { t: 'idea', text: `Итог урока: опыт и «сколько уже» → have + третья форма (или have been + -ing); точка с ago → вторая форма.`,
        rows: [['опыт', 'I’ve never been to Paris.'], ['сколько уже', 'I’ve lived here for two years.'], ['назад', 'I came here two years ago.']] }
    ]}
  ];
})();
