import * as msg from '../lib/message';
import * as util from '../lib/util';

const yes = 'yes';
const no = 'no';

const isEven = num => (!(num % 2) ? yes : no);

const isAnswerCorrect = (answer, num) => isEven(num) === answer;

const puzzle = () => util.getRandomInt();

const evenGame = (attemptTotal = 3) => {
  console.log(msg.greetMsg('Answer "yes" if number even otherwise answer "no".\n'));
  const userName = util.getName();
  console.log(msg.helloMsg(userName));

  const iter = (attemptCount, quiz) => {
    if (attemptTotal <= attemptCount) {
      console.log(msg.congratsMsg(userName));
      return;
    }

    console.log(msg.questionMsg(quiz));
    const actualAnswer = util.getAnswer();
    const expectedAnswer = isEven(quiz);
    const isCorrect = isAnswerCorrect(actualAnswer.toLowerCase(), quiz);

    const message = isCorrect ?
      msg.successMsg() : msg.failureMsg(actualAnswer, expectedAnswer, userName);

    console.log(message);
    iter(attemptCount + 1, puzzle());
  };

  return iter(0, puzzle());
};

export default evenGame;
