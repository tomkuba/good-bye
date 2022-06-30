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
  lastDay: (text1 = '', text2 = '', text3 = '') => `

   {\\__/}    ${text1}
    (●_●)    ${text2}
    (>  )>   ${text3}

`,
  college: (text1 = '', text2 = '') => `

    (__]__
    (●_●)    ${text1}
    (> <)    ${text2}

   `,
  collegeCloseEye: (text1 = '', text2 = '') => `

    (__]__
    ( _ )    ${text1}
    (> <)    ${text2}

   `,
  levelupCollege: () => `
  Basically,
    (__]__     ======== LEVEL UP ========        ~~~
    (●_●)    ~ Single DevOps/sysadmin 
                          -> 
                 member of big team ~        (●_●)
    (> <)      =======================      <(   )>

   `,
  levelupCollegeBlink: () => `
  Basically,
    (__]__     ==== LEVEL UP =====        ~~~
    (●_●)    ~ UNEMPLOYED to INTERN ~    (●_●)
    (> <)      ===================      <(   )>

   `,
  intern: (text1 = '', text2 = '') => `

   ~~~        ${text1}
  (●_●)       ${text2}
  (> <)

 `,
  internCloseEyes: (text1 = '', text2 = '') => `

   ~~~        ${text1}
  ( _ )       ${text2}
  (> <)

 `,
  levelupIntern: () => `
Finally,
   ~~~       ==== LEVEL UP =====        ___
  (●_●)       ~ INTERN -> FTE ~        (●_●)
  (> <)      ===================      <[ \\/ ]>

 `,
  levelupInternBlink: () => `
Finally,
   ~~~       ==== LEVEL UP =====        ___
  (●_●)       ~ INTERN to FTE ~        (●_●)
  (> <)      ===================      <[ \\/ ]>

 `,
  fte: (text1 = '', text2 = '', header = '') => `
    ${header}
   ___
  (●_●)       ${text1}
 <[ \\/ ]>    ${text2}

`,
  fteCloseEyes: (text1 = '', text2 = '', header = '') => `
    ${header}
   ___
  ( _ )       ${text1}
 <[ \\/ ]>    ${text2}

`,
  levelupMck: () => `
    And now,
   ___       ==== LEVEL UP =====        ^^^
  (●_●)       ~ MCK -> Ex-MCK ~        (●_●)
 <[ \\/ ]>    ===================       (> <)

`,
  levelupMckBlink: () => `
    And now,
   ___       ==== LEVEL UP =====        ^^^
  (●_●)       ~ MCK to Ex-MCK ~        (■_■)
 <[ \\/ ]>    ===================       (> <)

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
  stream.push(frames.hi('Hi 👋'));
  await delay(2500);
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.hi(
    'This is my last week in Netsuite ☹️'));
  await delay(4000);
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.lastDay(
    'I wanted to take a moment to let',
    'you know how much I’ve enjoyed',
    'my time here...', 
    ));
  await delay(6000);
};

const animScene1 = async (stream) => {
  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.college('I joined CSE ⭐ team during COVID pandemic', 'in September 2020.'));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.collegeCloseEye('I joined CSE ⭐ team during COVID pandemic', 'in September 2020.'));
    await delay(500);
  }
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.college());

  for (let i = 0; i < 5; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupCollegeBlink());
    await delay(500);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupCollege());
    await delay(600);
  }
};

const animScene2 = async (stream) => {
  for (let i = 0; i < 4; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.intern('Lots of learnings📚, mistakes🔥 and struggles💀', 'later...'));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.internCloseEyes('Lots of learnings📚, mistakes💣 and struggles💀', 'later...'));
    await delay(500);
  }
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.intern());

  for (let i = 0; i < 4; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupInternBlink());
    await delay(500);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.levelupIntern());
    await delay(600);
  }
};

const animScene3 = async (stream) => {
  for (let i = 0; i < 8; i += 1) {
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.fte('Things that went well: Memories💐, Friendships😎 & *Values*🌈', ' Things to improve: Bugs🐞, escalations🔪 & nightouts🤤', 'Last 2 years..'));
    await delay(600);
    stream.push(symbols.PAGE_BREAK);
    stream.push(frames.fteCloseEyes('Things that went well: Memories💐, Friendships😎 & *Values*🌈', ' Things to improve: Bugs🐞, escalations🔪 & nightouts🤤', 'Last 2 years...'));
    await delay(500);
  }

  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.fte('PEOPLE !!! 🎉', '', 'Things I\'ll miss 😞 '));
  await delay(3000);

  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.fte('PEOPLE !!!', ' Also: fancy Thinkpad running Fedora; and Saltstack 😜 ', 'Things I\'ll miss 😞 '));
  await delay(5000);

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

const animContact = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.exmck(
    '✉️  tom.kuba@gmail.com',
    '🇱  https://www.linkedin.com/in/tomkuba/',
    '📱 +420724790027',
    'I hope we can stay in touch',
  ));
  await delay(10000);
};

const animCredits = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.exmck(
    'Made with love, in Terraform learning mode,',
    'running in OCI, using this code:',
    'https://github.com/tomkuba/good-bye/',
    'Credits:'
  ));
  await delay(5000);
};

const animFinal = async (stream) => {
  stream.push(symbols.PAGE_BREAK);
  stream.push(frames.bye());
};

module.exports = async (stream) => {
  await animHi(stream);
  await animScene1(stream);
  await animScene2(stream);
  await animScene3(stream);
  await animContact(stream);
  await animCredits(stream);
  await animFinal(stream);
  stream.push('\n');
  stream.push(null);
  
};
