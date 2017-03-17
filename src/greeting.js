import readlineSync from 'readline-sync';

import greetMsg, { helloMsg } from './lib/message';

const greeting = () => {
  console.log(greetMsg());
  const name = readlineSync.question('May I have your name? ');
  console.log(helloMsg(name));
  return name;
};

export default greeting;
