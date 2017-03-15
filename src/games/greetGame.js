import { print, getName } from '../lib/utils';
import { greetMsg, helloMsg } from '../lib/messages';

const greeting = () => {
  print(greetMsg());
  print(helloMsg(getName()));
};

export default greeting;
