import * as pair from 'hexlet-pairs';

import * as msg from '../lib/message';
import * as util from '../lib/util';

const firstInt = couple => pair.car(couple);
const secondInt = couple => pair.cdr(couple);

const findGtd = (quiz) => {
  const iter = (first, second) =>
    ((second === 0) ? Math.abs(first) : iter(second, first % second));
  return iter(firstInt(quiz), secondInt(quiz));
};

const isAnswerCorrect = (answer, expression) =>
  (findGtd(expression) === parseInt(answer, 10));

const puzzle = () => {
  const first = util.getRandomInt();
  const second = util.getRandomInt();
  return pair.cons(first, second);
};

const quizMsg = quiz => `${firstInt(quiz)} ${secondInt(quiz)}`;

const gtdGame = (attemptTotal = 3) => {
  console.log(msg.greetMsg('Find the greatest common divisor of given numbers.\n'));
  const userName = util.getName();
  console.log(msg.helloMsg(userName));

  const iter = (attemptCount, quiz) => {
    if (attemptTotal <= attemptCount) {
      console.log(msg.congratsMsg(userName));
      return;
    }

    console.log(msg.questionMsg(quizMsg(quiz)));
    const actualAnswer = util.getAnswer();
    const expectedAnswer = findGtd(quiz);
    const isCorrect = isAnswerCorrect(actualAnswer, quiz);

    const message = isCorrect ?
      msg.successMsg() : msg.failureMsg(actualAnswer, expectedAnswer, userName);

    console.log(message);
    iter(attemptCount + 1, puzzle());
  };

  return iter(0, puzzle());
};

export default gtdGame;
