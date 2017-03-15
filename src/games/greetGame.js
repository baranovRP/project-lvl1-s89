import { print, getName } from '../lib/util';
import { greetMsg, helloMsg } from '../lib/message';

const greeting = () => {
  print(greetMsg());
  print(helloMsg(getName()));
};

export default greeting;
