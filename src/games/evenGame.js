import greetMsg, { congratsMsg, successMsg, failureMsg, helloMsg, questionMsg } from '../lib/message';
import getName, { getRandomInt, getAnswer } from '../lib/util';

const yes = 'yes';
const no = 'no';

const isEven = num => (!(num % 2) ? yes : no);

const isAnswerCorrect = (answer, num) => isEven(num) === answer;

const puzzle = () => getRandomInt();

const evenGame = (attemptTotal = 3) => {
  console.log(greetMsg('Answer "yes" if number even otherwise answer "no".\n'));
  const userName = getName();
  console.log(helloMsg(userName));

  const iter = (attemptCount, quiz) => {
    if (attemptTotal <= attemptCount) {
      console.log(congratsMsg(userName));
      return;
    }

    console.log(questionMsg(quiz));
    const actualAnswer = getAnswer();
    const expectedAnswer = isEven(quiz);
    const isCorrect = isAnswerCorrect(actualAnswer.toLowerCase(), quiz);

    const message = isCorrect ?
      successMsg() : failureMsg(actualAnswer, expectedAnswer, userName);

    console.log(message);
    iter(attemptCount + 1, puzzle());
  };

  return iter(0, puzzle());
};

export default evenGame;
