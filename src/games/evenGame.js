import {
  greetMsg,
  congratsMsg,
  successMsg,
  failureMsg,
  helloMsg,
  questionMsg,
} from '../lib/message';
import * as util from '../lib/util';

const yes = 'yes';
const no = 'no';

const isEven = num => !(num % 2);

const isAnswerCorrect = (answer, num) =>
  (isEven(num) ? (answer === yes) : (answer === no));

const evenGame = (attemptTotal) => {
  util.print(greetMsg('Answer "yes" if number even otherwise answer "no".\n'));
  const userName = util.getName();
  util.print(helloMsg(userName));

  const iter = (attemptCount, num) => {
    if (attemptTotal <= attemptCount) {
      util.print(congratsMsg(userName));
      return;
    }

    util.print(questionMsg(num));
    const actualAnswer = util.getAnswer();
    const isCorrect = isAnswerCorrect(actualAnswer.toLowerCase(), num);
    const expectedAnswer = isEven(num) ? yes : no;

    const message = isCorrect ?
      successMsg() : failureMsg(actualAnswer, expectedAnswer, userName);

    util.print(message);
    iter(attemptCount + 1, util.getRandomInt());
  };

  return iter(0, util.getRandomInt());
};

export default evenGame;
