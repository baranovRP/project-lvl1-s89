import * as msg from '../lib/message';
import * as util from '../lib/util';

const yes = 'yes';
const no = 'no';

const isEven = num => (!(num % 2) ? yes : no);

const isAnswerCorrect = (answer, num) => isEven(num) === answer;

const puzzle = () => util.getRandomInt();

const evenGame = (attemptTotal = 3) => {
  util.print(msg.greetMsg('Answer "yes" if number even otherwise answer "no".\n'));
  const userName = util.getName();
  util.print(msg.helloMsg(userName));

  const iter = (attemptCount, quiz) => {
    if (attemptTotal <= attemptCount) {
      util.print(msg.congratsMsg(userName));
      return;
    }

    util.print(msg.questionMsg(quiz));
    const actualAnswer = util.getAnswer();
    const expectedAnswer = isEven(quiz);
    const isCorrect = isAnswerCorrect(actualAnswer.toLowerCase(), quiz);

    const message = isCorrect ?
      msg.successMsg() : msg.failureMsg(actualAnswer, expectedAnswer, userName);

    util.print(message);
    iter(attemptCount + 1, puzzle());
  };

  return iter(0, puzzle());
};

export default evenGame;
