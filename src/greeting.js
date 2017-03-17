import readlineSync from 'readline-sync';

import greetMsg, { helloMsg } from './lib/message';

const greeting = (ruleText = '') => {
  console.log(`${greetMsg()}${ruleText}`);
  const name = readlineSync.question('May I have your name? ');
  console.log(helloMsg(name));

  return name;
};

export default greeting;
