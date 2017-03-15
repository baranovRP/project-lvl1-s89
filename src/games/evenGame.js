import {
  greetMsg,
  congratsMsg,
  successMsg,
  failureMsg,
  helloMsg,
  questionMsg,
} from '../lib/messages';
import * as utils from '../lib/utils';

const yes = 'yes';
const no = 'no';

const isEven = num => !(num % 2);

const isAnswerCorrect = (answer, num) =>
  (isEven(num) ? (answer === yes) : (answer === no));

const evenGame = (attempts) => {
  utils.print(greetMsg('Answer "yes" if number even otherwise answer "no".\n'));
  const userName = utils.getName();
  utils.print(helloMsg(userName));

  const iter = (correctAnswerCount, num) => {
    if (attempts <= correctAnswerCount) {
      utils.print(congratsMsg(userName));
      return;
    }

    utils.print(questionMsg(num));
    const actualAnswer = utils.getAnswer();
    const isCorrect = isAnswerCorrect(actualAnswer.toLowerCase(), num);
    const expectedAnswer = isEven(num) ? yes : no;

    const message = () => (isCorrect ?
      successMsg() : failureMsg(actualAnswer, expectedAnswer, userName));

    utils.print(message);
    iter(correctAnswerCount + 1, utils.getRandomInt());
  };

  return iter(0, utils.getRandomInt());
};

export default evenGame;
