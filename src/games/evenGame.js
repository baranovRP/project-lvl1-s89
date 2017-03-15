import * as msg from '../lib/message';
import * as util from '../lib/util';

const yes = 'yes';
const no = 'no';

const isEven = num => !(num % 2);

const isAnswerCorrect = (answer, num) =>
  (isEven(num) ? (answer === yes) : (answer === no));

const evenGame = (attemptTotal) => {
  util.print(msg.greetMsg('Answer "yes" if number even otherwise answer "no".\n'));
  const userName = util.getName();
  util.print(msg.helloMsg(userName));

  const iter = (attemptCount, num) => {
    if (attemptTotal <= attemptCount) {
      util.print(msg.congratsMsg(userName));
      return;
    }

    util.print(msg.questionMsg(num));
    const actualAnswer = util.getAnswer();
    const isCorrect = isAnswerCorrect(actualAnswer.toLowerCase(), num);
    const expectedAnswer = isEven(num) ? yes : no;

    const message = isCorrect ?
      msg.successMsg() : msg.failureMsg(actualAnswer, expectedAnswer, userName);

    util.print(message);
    iter(attemptCount + 1, util.getRandomInt());
  };

  return iter(0, util.getRandomInt());
};

export default evenGame;
