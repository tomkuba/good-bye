/* eslint-disable no-await-in-loop */
const symbols = require('../../symbols');

const delay = async millisec => new Promise((resolve) => {
  setTimeout(() => resolve(), millisec);
});

const frames = {
  hi: (text = '') => `

   {\\__/}
    (●_●)    ${text}
    (> <)

`,
  threeLineText: (text1 = '', text2 = '', text3 = '') => `

   {\\__/}    ${text1}
    (●_●)    ${text2}
    (>  )>   ${text3}

`,
  team: (text1 = '', text2 = '') => `

    (__]__
    (●_●)    ${text1}
    (> <)    ${text2}

   `,
  teamCloseEye: (text1 = '', text2 = '') => `

    (__]__
    ( _ )    ${text1}
    (> <)    ${text2}

   `,
  myCollege: () => `

    (__]__    I've met most of you only on Zoom or Slack,    ~~~
    (●_●)     but it was always fun to work with you.       (●_●)
    (> <)                                                  <(   )>

   `,
  myCollegeBlink: () => `

    (__]__    I've met most of you only on Zoom or Slack,    ~~~
    (●_●)     but it was always fun to work with you.       ( _ )
    (> <)                                                  <(   )>

   `,
  intern: (text1 = '', text2 = '') => `

     ~~~      ${text1}
    (●_●)     ${text2}
    (> <)

 `,
  internCloseEyes: (text1 = '', text2 = '') => `

     ~~~      ${text1}
    ( _ )     ${text2}
    (> <)

 `,
  levelupIntern: () => `

   ~~~                                              ___
  (●_●)   You have all been an inspiration to me   (●_●)
  (> <)   and I have learned many things here.    <[ \\/ ]>

 `,
  levelupInternBlink: () => `

   ~~~                                              ___
  (●_●)   You have all been an inspiration to me   (●_●)
 <(   )>  and I have learned many things here.    <[ \\/ ]>

 `,
  owl: (text1 = '', text2 = '', header = '') => `
    ${header}
   ___
  (●_●)      ${text1}
 <[ \\/ ]>    ${text2}

`,
  owlCloseEyes: (text1 = '', text2 = '', header = '') => `
    ${header}
   ___
  ( _ )      ${text1}
 <[ \\/ ]>    ${text2}

`,
  levelupMck: () => `

   ___                                 ^^^
  (●_●)       I wish you all          (●_●)
 <[ \\/ ]>     the best for future..   (> <)

`,
  levelupMckBlink: () => `

   ___                                 ^^^
  (●_●)       I wish you all          (■_■)
 <[ \\/ ]>     the best for future...  (> <)

`,
  exmck: (text1 = '', text2 = '', text3 = '', header = '') => `
    ${header}
   ^^^        ${text1}
  (■_■)       ${text2}
  (> <)       ${text3}

 `,
  bye: () => `
  ★─▄█▀▀║░▄█▀▄║▄█▀▄║██▀▄║──★
  ★─██║▀█║██║█║██║█║██║█║──★
  ★─▀███▀║▀██▀║▀██▀║███▀║──★
  ★────────────────────────★
  ★───▐█▀▄─ ▀▄─▄▀ █▀▀──█───★
  ★───▐█▀▀▄ ──█── █▀▀──▀───★
  ★───▐█▄▄▀ ──▀── ▀▀▀──▄───★
 `
};


const animHi = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.hi(' Hi 👋'));
  await delay(2500);
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.hi(
    'July 27 is my last day in Netsuite ☹️'));
  await delay(4000);
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.threeLineText(
    'I wanted to take a moment to let',
    'you know how much I’ve enjoyed',
    'my time here...', 
    ));
  await delay(6000);
};

const animScene1 = async (stream) => {
  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.team('I joined CSE all⭐team during COVID', 'pandemic in September 2020.'));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.teamCloseEye('I joined CSE all⭐team during COVID', 'pandemic in September 2020.'));
    await delay(500);
  }
  
  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.team('I appreciate the support and help','you all have provided to me.'));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.teamCloseEye('I appreciate the support and help','you all have provided to me.'));
    await delay(500);
  }

  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.myCollegeBlink());
    await delay(500);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.myCollege());
    await delay(600);
  }
 
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.threeLineText('It was great adventure to fix all the bugs,',' implement all the features,',
                                   '  and to finish all the upgrades.'));
  await delay(5000);
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.threeLineText());

};

const animScene2 = async (stream) => {
  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.intern('But also learn from mistakes and struggles', 'and make new memories and frienships.'));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.internCloseEyes('But also learn from mistakes and struggles', 'and make new memories and frienships.'));
    await delay(500);
  }
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.intern());
  await delay(500);

  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupInternBlink());
    await delay(500);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupIntern());
    await delay(600);
  }
};

const animScene3 = async (stream) => {
  for (let i = 0; i < 6; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.owl('I am grateful for having had the chance', ' to work alongside every one of you.', ''));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.owlCloseEyes('I am grateful for having had the chance', ' to work alongside every one of you.', ''));
    await delay(500);
  }

  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.owl('I am leaving now to pursue other opportunities!', 'So it is time to say...', ''));
  await delay(4000);

  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.bye());
  await delay(5000);
};

const animScene4 = async (stream) => {

  for (let i = 0; i < 4; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupMckBlink());
    await delay(500);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupMck());
    await delay(600);
  }
  await delay(1000);
};

const contact = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.exmck(
    '✉️  tom.kuba@gmail.com',
    '👨‍💻  https://www.linkedin.com/in/tomkuba/',
    '📱 ➕4️2️0️7️2️4️7️9️0️0️2️7️',
    'and I hope we can stay in touch',
  ));
  await delay(1000);
};

const animFinalBye = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.bye());
};

module.exports = async (stream) => {
  await animHi(stream);
  await animScene1(stream);
  await animScene2(stream);
  await animScene3(stream);
  await animScene4(stream);
  await contact(stream);
  stream.push('\n');
  stream.push(null);
  
};
