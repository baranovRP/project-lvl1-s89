import { cons, car, cdr } from 'hexlet-pairs';

import greetMsg, { congratsMsg, successMsg, failureMsg, helloMsg, questionMsg } from '../lib/message';
import getName, { getRandomInt, getAnswer } from '../lib/util';

const firstInt = couple => car(couple);
const secondInt = couple => cdr(couple);

const findGtd = (quiz) => {
  const iter = (first, second) =>
    ((second === 0) ? Math.abs(first) : iter(second, first % second));
  return iter(firstInt(quiz), secondInt(quiz));
};

const isAnswerCorrect = (answer, expression) =>
  (findGtd(expression) === parseInt(answer, 10));

const puzzle = () => {
  const first = getRandomInt();
  const second = getRandomInt();
  return cons(first, second);
};

const quizMsg = quiz => `${firstInt(quiz)} ${secondInt(quiz)}`;

const gtdGame = (attemptTotal = 3) => {
  console.log(greetMsg('Find the greatest common divisor of given numbers.\n'));
  const userName = getName();
  console.log(helloMsg(userName));

  const iter = (attemptCount, quiz) => {
    if (attemptTotal <= attemptCount) {
      console.log(congratsMsg(userName));
      return;
    }

    console.log(questionMsg(quizMsg(quiz)));
    const actualAnswer = getAnswer();
    const expectedAnswer = findGtd(quiz);
    const isCorrect = isAnswerCorrect(actualAnswer, quiz);

    const message = isCorrect ?
      successMsg() : failureMsg(actualAnswer, expectedAnswer, userName);

    console.log(message);
    iter(attemptCount + 1, puzzle());
  };

  return iter(0, puzzle());
};

export default gtdGame;
