window.LIBRARY = (window.LIBRARY || []).concat([
  // ===================== B1 =====================
  {
    id: 'dlg-b1-scr-interrogation', title: 'The Receipt', level: 'B1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Детектив · комната допросов',
    emoji: '🕵️',
    ru: 'Детектив допрашивает бармена, у которого, кажется, идеальное алиби, — пока не всплывает один чек',
    text: `Detective Hale: Sit down, Mr. Brody. Coffee? It's terrible, but it's hot.
Brody: No, thanks. How long is this going to take? I've already told the officers everything.
Detective Hale: Then it won't take long. Where were you on Friday night, between ten and midnight?
Brody: At work. I'm a bartender at the Blue Anchor. Ask anyone.
Detective Hale: We have asked. Your manager says you left early. At nine thirty.
Brody: Oh, right. I had a headache, so I went home and went straight to bed.
Detective Hale: Alone?
Brody: Yes, alone. Is that a crime now?
Detective Hale: Not at all. But here's my problem. Someone has broken into the pharmacy on Kent Street. Same night, around eleven.
Brody: And you think it was me? I've never been in trouble in my life.
Detective Hale: I know. I've checked. Your record is cleaner than this table.
Brody: So why am I here?
Detective Hale: Because of this. A receipt. We found it on the floor of the pharmacy. It's from the Blue Anchor. Two lemonades, Friday, ten forty-five.
Brody: Anyone could drop a receipt. Half the town drinks at our bar.
Detective Hale: True. But the bar was closed for a private party after ten. The only person with a key who wasn't at the party was... you.
Brody: If I tell you something, will it stay in this room?
Detective Hale: That depends on what it is.
Brody: I didn't break in. But I know who did. And if I tell you, I'm going to need more than coffee. I'm going to need protection.`,
    questions: [
      { q: "What is Brody's first explanation for leaving work early?", o: ["He had a headache", "He had a private party", "His manager sent him home"], a: 0 },
      { q: "Why is the receipt important?", o: ["It shows Brody bought medicine", "It was printed when the bar was closed and only Brody had a key", "It has Brody's fingerprints on it"], a: 1 },
      { q: "How does the scene end?", o: ["Brody admits he broke in", "Brody asks for a lawyer and leaves", "Brody says he knows the real criminal but wants protection"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-scr-starship-bridge', title: 'Signal from Nowhere', level: 'B1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Sci-fi · мостик корабля',
    emoji: '🚀',
    ru: 'Экипаж исследовательского корабля ловит сигнал с планеты, где никого не должно быть',
    text: `Captain Ortiz: Status report, everyone. Nobody has slept in two days, so keep it short.
Lieutenant Park: Engines are fine, Captain. Fuel is at sixty percent. We can get home if nothing goes wrong.
Captain Ortiz: Something always goes wrong, Lieutenant. What else?
Dr. Yuen: The crew is tired but healthy. Except for Morris. He's eaten all the chocolate again.
Captain Ortiz: Put that in my report as a crime. Kai, what's that noise?
Kai: That's the thing I wanted to show you. We've picked up a signal. It's coming from the fourth planet.
Lieutenant Park: That's impossible. That planet has been dead for millions of years. No air, no water.
Kai: I know. But listen. It repeats every seven seconds. It's not natural. Someone made it.
Dr. Yuen: Could it be an old probe? From one of the first missions?
Kai: I've checked every mission in the database. Nobody has ever landed there.
Captain Ortiz: If we go down there, how long will it take?
Lieutenant Park: Six hours there and back. But if we use that fuel, we won't have enough to get home safely.
Captain Ortiz: So we have a choice. We go home, or we find out who is calling us.
Dr. Yuen: With respect, Captain, "who" is a strong word. We don't know that it's a someone.
Kai: Captain... the signal has just changed. It isn't repeating anymore.
Captain Ortiz: What is it doing?
Kai: It's spelling something. In our language. It's spelling the name of our ship.`,
    questions: [
      { q: "What is the problem if the crew flies to the fourth planet?", o: ["The planet has dangerous animals", "They may not have enough fuel to get home safely", "The captain is too tired"], a: 1 },
      { q: "Why does Kai think the signal is not natural?", o: ["It repeats every seven seconds", "It is very loud", "It comes from an old probe"], a: 0 },
      { q: "What is surprising at the end?", o: ["The signal stops completely", "Morris sent the signal as a joke", "The signal spells the name of their ship"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-scr-heist-plan', title: 'Five Minutes, Not Six', level: 'B1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Ограбление · план',
    emoji: '💎',
    ru: 'Команда в последний раз проговаривает план кражи бриллианта из музея — и один участник что-то скрывает',
    text: `Vera: Okay, listen carefully, because I'm only going to explain this once more.
Tony: You've said that three times already.
Vera: And you've asked the same questions three times. Tomorrow night the museum has a charity party. Five hundred guests.
Lina: And we're guests number five hundred and one, two, three and four. I've already printed the invitations.
Vera: At ten o'clock the guards change shifts. We have exactly five minutes when nobody is watching the cameras.
Tony: Five minutes? Last week you said six.
Vera: Last week I was optimistic. Lina, the lights?
Lina: At ten oh one, I turn off the lights in the east wing. Everyone will think it's a problem with the electricity.
Vera: Tony, you open the case. Can you do it in two minutes?
Tony: If my hands don't shake, yes. If they shake, maybe three.
Vera: Then don't drink coffee tomorrow. Max, you're quiet tonight. What's wrong?
Max: Nothing. I'm just thinking about the car. If the traffic is bad, we'll need another way out.
Vera: We've talked about that. You take the river road.
Max: Right. The river road. Of course.
Lina: Why does he sound like a man who has already changed the plan?
Max: I haven't changed anything. I've just... made a phone call.
Vera: What phone call, Max?
Max: Let's just say the diamond we're stealing tomorrow... isn't the real one.`,
    questions: [
      { q: "Why do they have only five minutes?", o: ["The party ends at ten", "The guards change shifts and nobody watches the cameras", "The lights go off automatically"], a: 1 },
      { q: "What will Lina do?", o: ["Open the case", "Drive the car", "Turn off the lights in the east wing"], a: 2 },
      { q: "What does Max reveal at the end?", o: ["The diamond they plan to steal is not the real one", "He has lost the invitations", "The party has been cancelled"], a: 0 }
    ]
  },
  {
    id: 'dlg-b1-scr-office-meeting', title: 'The Mysterious Fish', level: 'B1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Офисная комедия · переговорка',
    emoji: '🐟',
    ru: 'Начальник собирает экстренное совещание из-за запаха рыбы в офисе — и расследование выходит из-под контроля',
    text: `Gary: Thank you all for coming to this emergency meeting.
Priya: Gary, it's Friday afternoon. Can we make it quick? I have a real job.
Gary: This IS your real job, Priya. Somebody has put fish in the office microwave. Again.
Tom: Oh no. Not the salmon incident again.
Gary: Yes, Tom. The salmon incident. Part two. The whole second floor smells like a harbour.
Priya: Have you tried opening a window?
Gary: The windows don't open. Management thinks we'll jump. I'm asking a simple question. Who did it?
Tom: Well, it wasn't me. I've been vegetarian since March.
Priya: You ate a burger yesterday, Tom.
Tom: That was a very emotional day.
Gary: Dana, you haven't said anything. That's suspicious.
Dana: I haven't said anything because I've been in this meeting for four minutes and it already feels like a year.
Gary: If nobody admits it, I'll have to check the security cameras.
Priya: We have security cameras in the kitchen?
Gary: We have one camera. It points at the coffee machine. But the microwave is next to it.
Tom: Gary, I think you should look at the camera before you say anything else.
Gary: Why?
Tom: Because I've just remembered who warmed up his lunch at eleven. You, Gary. You had a fish pie.`,
    questions: [
      { q: "Why can't they open a window?", o: ["It's too cold outside", "The windows in the office don't open", "Gary has lost the key"], a: 1 },
      { q: "What do we learn about Tom?", o: ["He says he's vegetarian, but he ate a burger yesterday", "He cooked the fish", "He installed the camera"], a: 0 },
      { q: "Who probably warmed up the fish?", o: ["Dana", "Priya", "Gary himself"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-scr-er-night', title: 'Not a Normal Night', level: 'B1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Медицинская драма · приёмный покой',
    emoji: '🚑',
    ru: 'Молодой врач впервые дежурит ночью в приёмном покое, и пациент оказывается не тем, кем кажется',
    text: `Nurse Carla: Dr. Evans, you look pale. Is this your first night shift?
Dr. Evans: Is it that obvious? I've read every book, but books don't smell like this.
Nurse Carla: You'll get used to it. Okay, bed three. Man, about forty, fell off a ladder.
Dr. Evans: Good evening, sir. I'm Dr. Evans. Can you tell me what happened?
Patient: I was changing a light bulb, and the ladder decided it had other plans.
Dr. Evans: Does it hurt when I press here?
Patient: Ow! Yes. Yes, it does. Please stop doing that.
Dr. Evans: Sorry. I think you've broken your wrist. We'll need an X-ray.
Patient: How long will that take? I really need to leave soon.
Nurse Carla: On a Saturday night? Maybe an hour. If you're lucky.
Patient: I can't wait an hour. Just give me something for the pain and I'll go.
Dr. Evans: I'm afraid I can't do that. If the bone isn't fixed properly, you could have problems for years.
Patient: You don't understand. Somebody is waiting for me. Somebody important.
Nurse Carla: Your wife? We can call her for you.
Patient: No, no. It's better if nobody calls anybody.
Dr. Evans: Sir, you said you fell off a ladder. But there's paint on your hands. Fresh paint. And a hospital bracelet from another hospital on your other arm.
Patient: Doctor, you're very clever for your first night. Maybe too clever.
Nurse Carla: Dr. Evans... I'm going to call security. Just in case.`,
    questions: [
      { q: "What injury does Dr. Evans think the patient has?", o: ["A broken leg", "A broken wrist", "A head injury"], a: 1 },
      { q: "Why doesn't the patient want to wait?", o: ["He is afraid of doctors", "He says someone important is waiting for him", "He has no money"], a: 1 },
      { q: "What makes Dr. Evans suspicious?", o: ["The patient's wife calls", "The patient knows his name", "Fresh paint and a bracelet from another hospital"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-scr-airport-romcom', title: 'Gate Twelve', level: 'B1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Романтическая комедия · аэропорт',
    emoji: '✈️',
    ru: 'Двое незнакомцев застряли в аэропорту из-за отменённого рейса и спорят о последнем свободном месте',
    text: `Announcer: We're sorry, flight 408 to Dublin has been cancelled due to bad weather.
Nora: No, no, no. Not today. I have a wedding tomorrow!
Sam: Your own wedding? Congratulations. And I'm sorry.
Nora: My sister's. I'm giving a speech. I've written it four times.
Sam: I'm going to Dublin for a job interview. So we're both having a great day.
Clerk: There's one seat left on the flight at six a.m. Just one.
Nora: I'll take it!
Sam: Wait, I was in the queue before you.
Nora: You were looking at your phone. That doesn't count as a queue.
Sam: Okay, let's be fair. A job interview is more important than a speech.
Nora: Is it? If I miss the wedding, my sister will never talk to me again. If you miss the interview, you'll find another job.
Sam: That's a very optimistic view of the job market.
Clerk: Could you decide, please? There are forty people behind you.
Sam: Fine. Let's toss a coin. Heads, you get the seat.
Nora: Heads! Ha! Sorry. Not sorry.
Sam: Enjoy the wedding. I'll just sleep here on this very comfortable metal chair.
Nora: Wait. What's your interview? Which company?
Sam: A small travel company. Green Island Tours. Why?
Nora: Because that's my sister's company. And guess who's going to be at the wedding tomorrow... with the boss?`,
    questions: [
      { q: "Why is Nora going to Dublin?", o: ["For her own wedding", "For her sister's wedding", "For a job interview"], a: 1 },
      { q: "How do they decide who gets the seat?", o: ["The clerk decides", "They toss a coin", "Sam gives it to Nora immediately"], a: 1 },
      { q: "What is the twist at the end?", o: ["The flight is cancelled again", "Nora's sister owns the company where Sam has the interview", "Sam and Nora already know each other"], a: 1 }
    ]
  },
  {
    id: 'dlg-b1-scr-royal-council', title: 'The Dragon Tax', level: 'B1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Фэнтези · совет королевства',
    emoji: '🐉',
    ru: 'Молодая королева на первом совете решает, что делать с драконом, который требует налог с королевства',
    text: `Lord Brannock: Your Majesty, the dragon has sent another letter.
Queen Isolde: Dragons can write?
Lord Brannock: This one can. Very politely, actually. He wants three hundred sheep by the end of the month.
Queen Isolde: And if we don't give them to him?
General Maro: Then he'll burn the northern villages. Like he did fifty years ago.
Queen Isolde: So my grandfather gave him sheep every year?
Lord Brannock: Every year, Your Majesty. We call it the dragon tax. The farmers hate it.
General Maro: Give me two hundred soldiers and I'll get rid of him in a week.
Mira: With respect, General, the last army that tried that came back with no eyebrows.
General Maro: Who let the librarian into the council?
Queen Isolde: I did. Go on, Mira.
Mira: I've read every book about this dragon. He's lived in the mountain for four hundred years. He has never attacked first. Not once.
Lord Brannock: Are you saying we should trust a dragon?
Mira: I'm saying nobody has ever asked him why he wants the sheep.
Queen Isolde: Then I'll ask him. Prepare my horse. I'm going to the mountain.
General Maro: Your Majesty, that's madness! If something happens to you, the kingdom will fall apart!
Queen Isolde: If I keep paying for things I don't understand, it will fall apart anyway. Mira, you're coming with me.
Mira: Me? I'm a librarian! Oh, well. I've always wanted to see a dragon. From very, very far away.`,
    questions: [
      { q: "What does the dragon want?", o: ["Gold", "Three hundred sheep", "The queen's crown"], a: 1 },
      { q: "What does Mira know about the dragon?", o: ["It has never attacked first", "It is very young", "It cannot read"], a: 0 },
      { q: "What does the queen decide?", o: ["To send the army", "To pay the tax as usual", "To go to the mountain and talk to the dragon"], a: 2 }
    ]
  },
  {
    id: 'dlg-b1-scr-sitcom-cafe', title: 'The Wrong Name on the Cup', level: 'B1', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Ситком · кафе',
    emoji: '☕',
    ru: 'Друзья в кафе пытаются помочь приятелю, который месяц не может признаться бариста, что его зовут не Кевин',
    text: `Jess: Why did the barista just call you Kevin? Your name is Leo.
Leo: Because a month ago she wrote "Kevin" on my cup, and I didn't correct her.
Omar: A month? You've been Kevin for a whole month?
Leo: It's too late now! She says, "Morning, Kevin!" every day. With a big smile.
Jess: So just tell her. "Actually, my name is Leo." Five words. Easy.
Leo: That's four words. And it's not easy. She'll think I'm a crazy person.
Omar: You ARE a crazy person. You answer to a stranger's name for a coffee.
Leo: It's a very good coffee.
Jess: Wait. You like her, don't you?
Leo: What? No. Maybe. She laughs at my jokes.
Omar: She laughs at Kevin's jokes, my friend.
Leo: Okay, if I tell her the truth and she hates me, I'll have to find a new café. And I've tried them all. This is the only good one.
Jess: Look, she's coming over. This is your chance. Be brave.
Barista: Here's your muffin, Kevin. Oh, and I've been meaning to ask you something.
Leo: Sure! Anything!
Barista: Would you like to come to my birthday party on Saturday? I've told all my friends about you.
Leo: Oh! Wow! Yes! I'd love to!
Barista: Great! They can't wait to meet you. Especially my brother. His name is Kevin too!`,
    questions: [
      { q: "Why does the barista call Leo 'Kevin'?", o: ["It's his middle name", "She wrote the wrong name a month ago and he never corrected her", "Omar told her to"], a: 1 },
      { q: "Why is Leo afraid to tell the truth?", o: ["He doesn't want to lose the only good café, and he likes her", "He owes her money", "He is Kevin's brother"], a: 0 },
      { q: "Why is the ending a problem for Leo?", o: ["The party is on a work day", "Her brother is also called Kevin, so the lie will get bigger", "She has a boyfriend"], a: 1 }
    ]
  },

  // ===================== B2 =====================
  {
    id: 'dlg-b2-scr-courtroom', title: 'The Witness Who Saw Too Much', level: 'B2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Судебная драма · зал суда',
    emoji: '⚖️',
    ru: 'Адвокат защиты разбирает показания уверенного свидетеля и находит деталь, которая переворачивает дело',
    text: `Judge Whitmore: Ms. Adeyemi, you may cross-examine the witness.
Ms. Adeyemi: Thank you, Your Honour. Mr. Crane, you told the prosecution you saw my client leave the building at exactly eleven fifteen.
Crane: That's right. Clear as day.
Ms. Adeyemi: Clear as night, surely. It was dark, it was raining, and you were across the street.
Crane: I've got good eyes. Never needed glasses in my life.
Ms. Adeyemi: Good for you. How can you be so sure about the time?
Crane: The church bell. It rang a quarter past just as he came out. You can set your watch by it.
Ms. Adeyemi: Can you? Interesting. And you recognised his face from forty metres, in the rain, at night.
Crane: Not just his face. His coat. Bright yellow. You can't miss it.
Prosecutor Lang: Objection, Your Honour. Counsel is badgering the witness.
Judge Whitmore: I'll allow it, but get to the point, Ms. Adeyemi. We haven't got all day.
Ms. Adeyemi: I'm getting there, Your Honour. Mr. Crane, you said the bell rang at a quarter past. Are you aware the church bell has been out of order since March? The parish fixed it last week.
Crane: Well... maybe I heard a different bell.
Ms. Adeyemi: Maybe. There aren't any others in that part of town, but let's not split hairs. What I find more curious is the coat.
Crane: What about it?
Ms. Adeyemi: The police never released a description of the coat. Not to the press, not to anyone. It's only in the evidence file.
Prosecutor Lang: Your Honour, where is this going?
Ms. Adeyemi: It's going exactly where it needs to. Mr. Crane, the only people who knew about that yellow coat were the police, the killer, and whoever helped the killer get rid of it.
Crane: I... I want to talk to a lawyer.
Ms. Adeyemi: That's the first sensible thing you've said all morning. No further questions.
Judge Whitmore: Order! Order in the court. We'll take a thirty-minute recess. And someone had better get Mr. Crane that lawyer.`,
    questions: [
      { q: "Why is Crane's claim about the church bell weak?", o: ["The bell rings every hour, not every quarter", "The bell was broken at the time", "Crane is deaf"], a: 1 },
      { q: "Why is the yellow coat so important?", o: ["It proves the defendant was there", "Its description was never made public, so Crane shouldn't know about it", "It belongs to Crane"], a: 1 },
      { q: "What does 'let's not split hairs' mean in context?", o: ["Let's not argue about small details", "Let's stop the trial", "Let's look at the evidence carefully"], a: 0 }
    ]
  },
  {
    id: 'dlg-b2-scr-political-thriller', title: 'Off the Record', level: 'B2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Политический триллер · кабинет министра',
    emoji: '🏛️',
    ru: 'Советник пытается убедить министра замять утечку документов, но у министра свои планы',
    text: `Hollis: Minister, have you seen the morning papers?
Minister Kerr: I've seen my phone, which is worse. Forty missed calls before breakfast. Who leaked it?
Hollis: We don't know yet. But whoever it was knew exactly what they were doing. Page one, full contract, your signature at the bottom.
Minister Kerr: My signature is on a lot of things, Hollis. That's rather the job.
Hollis: Not usually on a deal that sends two hundred million to a company your brother-in-law happens to sit on the board of.
Minister Kerr: Happens to. I love that phrase. It does a lot of heavy lifting.
Hollis: Here's the plan. We say the contract went through the proper channels. We say you didn't know about the family connection. And we find someone junior to take the fall.
Minister Kerr: You've thought this through remarkably quickly.
Hollis: It's what you pay me for. The PM's office wants a statement by noon.
Minister Kerr: And who's the unlucky junior?
Hollis: Grayson, from procurement. He's young, he'll land on his feet. We'll find him something quiet in a year or two.
Minister Kerr: How generous. Tell me, Hollis, who actually brought me that contract to sign?
Hollis: I... I did, Minister. But it had been checked. Twice.
Minister Kerr: By whom?
Hollis: That's hardly the point right now.
Minister Kerr: On the contrary, it's the only point. You see, I've had a very long night. I read the whole file. Every email. Including the ones you sent to my brother-in-law from your private account.
Hollis: Minister, I can explain—
Minister Kerr: I'm sure you can. You're very good at explaining. So here's my statement for noon. The leak didn't come from outside this office. It came from me.
Hollis: You leaked it? You leaked your own scandal?
Minister Kerr: Better to light the fire yourself than be caught standing in the smoke. Sit down, Hollis. The police will be here at eleven, and I'd hate for you to miss them.`,
    questions: [
      { q: "What does Hollis suggest to solve the problem?", o: ["The Minister should resign", "Blame a junior employee called Grayson", "Deny that the contract exists"], a: 1 },
      { q: "What is the big twist?", o: ["The Minister leaked the documents himself and has evidence against Hollis", "Grayson is the Minister's brother-in-law", "The newspapers made up the story"], a: 0 },
      { q: "What does the Minister mean by 'It does a lot of heavy lifting'?", o: ["The phrase hides something important", "The contract is very expensive", "His brother-in-law works hard"], a: 0 }
    ]
  },
  {
    id: 'dlg-b2-scr-old-house', title: 'Nobody Lives Upstairs', level: 'B2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Хоррор · старый дом',
    emoji: '🕯️',
    ru: 'Пара переезжает в дешёвый старый дом, и первая ночь начинается со странных звуков сверху',
    text: `Dan: Well, it's no palace, but for this price I'm not complaining.
Rachel: That's what worries me. Houses this big don't go for peanuts unless there's a catch.
Dan: The catch is the plumbing. The agent said so. And the wallpaper, which is frankly a crime.
Rachel: The agent also couldn't get out of here fast enough. Did you notice? She didn't even come past the front door.
Dan: She had another viewing. Estate agents are always in a rush. Come on, let's order pizza and argue about who gets which side of the bed.
Rachel: Dan. Shh. Did you hear that?
Dan: Hear what? It's an old house, it creaks. It's basically a hundred years of wood complaining about the weather.
Rachel: That wasn't creaking. That was footsteps. Upstairs.
Dan: Rach, we're the only ones here. The door was locked. I've got the only key.
Rachel: Then who's walking around in the attic?
Dan: Probably a pigeon. A big, heavy, confident pigeon.
Rachel: Pigeons don't close doors.
Dan: Okay. Okay, I heard that one. Stay here. I'll go and have a look.
Rachel: Absolutely not. Have you never seen a single scary film? The guy who says "I'll go and have a look" never comes back.
Dan: Fine. Then we both go. Hold the torch. And stop gripping my arm like that, I'll need it later.
Rachel: The attic door's open. It wasn't open when we came in. I checked.
Dan: There's nothing up here. Just boxes and... a rocking chair. Why is it moving?
Rachel: Dan, look at the box next to it. It's got our names on it.
Dan: That's impossible. We only signed the contract yesterday.
Rachel: It's not new, Dan. It's covered in dust. And the date on it is nineteen twenty-three.`,
    questions: [
      { q: "Why was the house so cheap, according to Dan?", o: ["It's in a dangerous area", "Because of the plumbing and the wallpaper", "The agent made a mistake"], a: 1 },
      { q: "What does Rachel mean when she says houses like this 'don't go for peanuts unless there's a catch'?", o: ["Big houses aren't sold cheaply without a hidden problem", "The house needs a new kitchen", "They should buy food first"], a: 0 },
      { q: "What do they find in the attic?", o: ["A pigeon", "The estate agent", "An old dusty box with their names and the year 1923"], a: 2 }
    ]
  },
  {
    id: 'dlg-b2-scr-spy-cafe', title: 'The Wrong Umbrella', level: 'B2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Шпионский триллер · кафе на вокзале',
    emoji: '🕶️',
    ru: 'Встреча двух агентов на вокзале идёт не по плану: пароль не совпадает, а время на исходе',
    text: `Agent Novak: Is this seat taken?
Elise: That depends. Do you prefer tea or coffee in the rain?
Agent Novak: Neither. I prefer the rain in Lisbon.
Elise: Wrong answer. The correct reply is "only in Vienna". Sit down anyway, before you draw attention.
Agent Novak: They changed the phrase last night. You didn't get the memo?
Elise: I don't get memos. That's rather the point of what I do. Who sent you?
Agent Novak: The same people who sent you. Look, we don't have time to play twenty questions. The train leaves in eleven minutes.
Elise: Then you've got eleven minutes to convince me you're not the reason my last contact ended up in the river.
Agent Novak: Fair enough. Your contact's name was Felix. He hated sugar in his coffee and he always sat facing the door. Like you are now.
Elise: Anyone with a camera could know that.
Agent Novak: True. But not anyone knows he gave you a spare key the night before he disappeared. Blue tag. You've kept it in your left shoe ever since.
Elise: All right. You've got my attention. Where's the package?
Agent Novak: Under the table. Brown umbrella. Don't look down.
Elise: I wasn't going to. I'm not an amateur.
Agent Novak: Could've fooled me. You've checked the clock four times since I sat down.
Elise: Because someone's been watching us from the newsstand since you walked in. Grey coat, reading the same page for ten minutes.
Agent Novak: I know. He's with me.
Elise: With you? Then why does he have his hand inside his jacket?
Agent Novak: That's... a very good question. Change of plan. Take the umbrella, walk slowly to platform six, and don't run until I say so.
Elise: And what are you going to do?
Agent Novak: Something stupid, probably. It's been that kind of week.`,
    questions: [
      { q: "Why doesn't Elise trust Novak at first?", o: ["He is late", "He gives the wrong password reply", "He orders coffee instead of tea"], a: 1 },
      { q: "How does Novak finally convince her?", o: ["He shows her an ID card", "He mentions the spare key Felix gave her", "He gives her the train tickets"], a: 1 },
      { q: "What does 'Could've fooled me' suggest about Novak's opinion?", o: ["He thinks she is acting like an amateur", "He thinks she is lying", "He admires her skills"], a: 0 }
    ]
  },
  {
    id: 'dlg-b2-scr-family-dinner', title: 'The Announcement', level: 'B2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Семейная драма · воскресный ужин',
    emoji: '🍽️',
    ru: 'Воскресный ужин, на котором каждый член семьи пытается сообщить свою новость — и никто не хочет быть первым',
    text: `Margaret: Well, isn't this nice? All of us at one table. It only took a year and a half.
Tom: Mum, you say that every time. It's been four months.
Margaret: Four months is a long time when you're my age. Pass the potatoes, Claire.
Claire: Here. So, Dad, you said on the phone you had something to tell us.
Richard: Did I? I don't think I said that. Your mother said that.
Margaret: I said nothing of the sort. Richard, just say it.
Richard: Fine. I've sold the shop.
Tom: You've what? Dad, that shop's been in the family for fifty years!
Richard: Fifty-two. And for the last ten, it's been losing money hand over fist. I'm tired, Tom.
Tom: You could've asked me. I'd have taken it over.
Richard: You've said that for fifteen years. You've never once come in on a Saturday.
Claire: Okay, let's all take a breath. This is good news, isn't it? You'll finally have time to travel.
Margaret: That's the other thing. We're moving to Portugal. In March.
Tom: Portugal? You don't speak Portuguese. You barely speak to the neighbours.
Margaret: Then I'll have nothing to lose, will I? Claire, darling, you've been awfully quiet. What's your news?
Claire: Who says I have news?
Margaret: You've pushed the same pea around your plate for ten minutes. I'm your mother, not a fool.
Claire: All right. I'm pregnant. Twins.
Richard: Twins! Oh, love, that's wonderful!
Margaret: Twins. In March? Oh. Oh dear.
Claire: Yes, Mum. In March. So I was rather hoping you'd be around.
Tom: Well. I suppose that makes me the only one with nothing to announce. Pass the gravy, someone, before this family says anything else.`,
    questions: [
      { q: "Why is Tom upset about the shop?", o: ["He wanted to take it over, although he never helped", "He owns half of it", "It was sold for too little money"], a: 0 },
      { q: "Why is Margaret's reaction to Claire's news complicated?", o: ["She doesn't like children", "The twins are due in March, when she plans to move to Portugal", "She already knew about it"], a: 1 },
      { q: "What does 'losing money hand over fist' mean?", o: ["Losing money slowly", "Losing money very fast", "Hiding money from the family"], a: 1 }
    ]
  },
  {
    id: 'dlg-b2-scr-newsroom', title: 'Two Sources or Nothing', level: 'B2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Журналистское расследование · редакция',
    emoji: '📰',
    ru: 'Молодая журналистка приносит редактору сенсацию за час до сдачи номера, но источник всего один',
    text: `Fiona: Walt, have you got a minute?
Walt: I've got fifty-three minutes until we go to print, and every one of them is spoken for. What is it?
Fiona: The water company story. I've cracked it. They knew about the contamination for two years and buried the report.
Walt: That's a big claim. How do you know?
Fiona: I've got an insider. Senior engineer. She gave me the internal emails.
Walt: One insider. And how many other sources?
Fiona: Well... that's the thing. Just her. For now.
Walt: Then it's not a story. It's a rumour with a nice haircut. Two sources or nothing, Fiona. You know the rules.
Fiona: Walt, if we wait, someone else will run it first. The Tribune's been sniffing around all week.
Walt: Let them. I'd rather be second and right than first and sued into the ground.
Fiona: The emails are real. I've checked the metadata, the names, the dates. It all adds up.
Walt: Everything adds up when you want it to. Why is she talking to you? What's in it for her?
Fiona: She says she can't sleep at night. Kids drinking that water, and she's sitting on the proof.
Walt: Very noble. Has she been passed over for promotion lately? Fired? Divorced from the CEO?
Fiona: That's a bit cynical, isn't it?
Walt: Twenty-five years in this business, Fiona. Cynical is just what we call experience that's been lied to.
Fiona: Fine. Give me forty minutes. I'll get you a second source.
Walt: Forty minutes? From where?
Fiona: The report she mentioned was sent to three people. One of them retired last spring and lives twenty minutes from here.
Walt: And you think he'll just open the door and confess over tea?
Fiona: No. But he's already left me a voicemail. Yesterday. He said, and I quote, "I've been waiting two years for someone to ask."
Walt: Why didn't you lead with that?
Fiona: Because I wanted to see if you'd trust me without it. Hold the front page, Walt.`,
    questions: [
      { q: "Why doesn't Walt want to publish the story yet?", o: ["It's not interesting enough", "There is only one source", "The Tribune has already published it"], a: 1 },
      { q: "What does Walt mean by 'a rumour with a nice haircut'?", o: ["A rumour that looks more convincing than it is", "A story about a hairdresser", "A true story told badly"], a: 0 },
      { q: "Why did Fiona not mention the voicemail at first?", o: ["She forgot about it", "She wanted to test whether Walt would trust her", "The retired man asked her not to"], a: 1 }
    ]
  },
  {
    id: 'dlg-b2-scr-hero-hq', title: 'Performance Review', level: 'B2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Супергерои · штаб',
    emoji: '🦸',
    ru: 'Супергероиня проходит ежегодную аттестацию у бюрократа из отдела кадров — и спасение мира в показатели не входит',
    text: `Mr. Pembleton: Please, take a seat. Try not to break it. We've had issues.
Nightwing Nova: That was one chair. And it was during an earthquake.
Mr. Pembleton: Which you caused.
Nightwing Nova: Which I stopped. There's a difference.
Mr. Pembleton: Let's not get bogged down in semantics. This is your annual performance review. I'll be frank: the numbers aren't great.
Nightwing Nova: I saved the city three times this year. What numbers could possibly be better than that?
Mr. Pembleton: Property damage, for one. Four bridges, two car parks, and the statue of our founder. Which now has no head.
Nightwing Nova: The statue was being used as a weapon by a giant robot, Mr. Pembleton.
Mr. Pembleton: I'm not disputing that. I'm simply noting it's on your record. Then there's punctuality. You were late to eleven team briefings.
Nightwing Nova: Because I was busy stopping the things the briefings were about!
Mr. Pembleton: Be that as it may, Captain Granite is always on time.
Nightwing Nova: Captain Granite once spent an entire battle stuck in a revolving door.
Mr. Pembleton: But he was stuck there punctually. Now, feedback from colleagues. Someone describes you as, and I quote, "a lone wolf who doesn't play well with others".
Nightwing Nova: Let me guess. Granite.
Mr. Pembleton: I couldn't possibly comment. Anyway, we're putting you on a three-month improvement plan. Weekly check-ins, a teamwork workshop, and no more flying indoors.
Nightwing Nova: Fine. Whatever keeps the paperwork happy.
Mr. Pembleton: That's the spirit. Oh, one more thing. Have you noticed anything odd about our new head of security, Mr. Vale?
Nightwing Nova: Other than the fact he never blinks? No. Why?
Mr. Pembleton: Because he signed off on your review this morning. And the signature matches the one on the giant robot's shipping order.
Nightwing Nova: And you're telling me this now? After twenty minutes on chairs and car parks?
Mr. Pembleton: Priorities, Nova. HR has a process.`,
    questions: [
      { q: "What is Mr. Pembleton's main complaint?", o: ["Nova didn't save the city", "Property damage, lateness and poor teamwork", "Nova refuses to fly"], a: 1 },
      { q: "What is ironic about Captain Granite being praised?", o: ["He is always late", "He was once stuck in a revolving door during a battle", "He caused the earthquake"], a: 1 },
      { q: "What important information does Pembleton share only at the end?", o: ["Nova is fired", "Mr. Vale's signature matches the robot's shipping order", "The statue will be repaired"], a: 1 }
    ]
  },
  {
    id: 'dlg-b2-scr-western-saloon', title: 'The Stranger at the Bar', level: 'B2', cat: 'Диалоги из фильмов и сериалов', kind: 'dialogue',
    about: 'Вестерн · салун',
    emoji: '🤠',
    ru: 'В салун маленького городка входит незнакомец, и хозяйка быстро понимает, что он приехал не за виски',
    text: `Ada: Evening, stranger. You look like you've been riding since last Tuesday.
Stranger: Since Sunday. Coffee, if you've got it. Black.
Ada: This is a saloon, mister. Coffee's what we serve to people who've given up on life.
Stranger: Then it'll suit me fine.
Ada: Coming up. Passing through, or planning to stay?
Stranger: Depends on what I find. I'm looking for a man called Harlan Reed.
Ada: Never heard of him.
Stranger: That's funny. His name's carved into the bar right in front of you.
Ada: Folks carve all sorts of things into that bar. Last week somebody carved a pretty unflattering picture of the mayor.
Stranger: Ma'am, I'm not here to cause trouble. I just want to talk to him.
Ada: Men who "just want to talk" usually bring a lot of iron for a conversation.
Stranger: Fair point. But I've come a long way, and I'm not about to turn back empty-handed.
Ada: Let me give you some free advice, since the coffee isn't. This town looks sleepy, but it doesn't take kindly to questions. Especially that question.
Stranger: Why's that?
Ada: Because Harlan Reed built half of it. The church, the school, the bank. People here owe him more than money.
Stranger: Then they'll be surprised to learn what he paid for it with.
Ada: Go on, then. I'm listening.
Stranger: Twenty years ago, a gold shipment went missing near Copper Creek. Three men took it. Two of them hanged. The third changed his name and disappeared.
Ada: And you think the third one's Harlan.
Stranger: I don't think it. I know it. The two who hanged were my father and my uncle.
Ada: Well, mister. Then you and I have more in common than you'd think.
Stranger: How so?
Ada: Harlan Reed's my husband. And he's been dead for three years. I buried an empty coffin.`,
    questions: [
      { q: "Why does the stranger doubt Ada when she says she's never heard of Harlan Reed?", o: ["She looks nervous", "Harlan's name is carved into the bar", "The mayor told him the truth"], a: 1 },
      { q: "Why does the stranger want to find Harlan?", o: ["Harlan owes him money", "Harlan was part of a robbery for which the stranger's father and uncle were hanged", "He wants to buy the saloon"], a: 1 },
      { q: "What does Ada's last line suggest?", o: ["Harlan faked his death and may still be alive", "Harlan is buried in the church", "Ada is the third robber"], a: 0 }
    ]
  }
]);
