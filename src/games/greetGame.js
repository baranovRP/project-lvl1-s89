import getName from '../lib/util';
import greetMsg, { helloMsg } from '../lib/message';

const greeting = () => {
  console.log(greetMsg());
  console.log(helloMsg(getName()));
};

export default greeting;
