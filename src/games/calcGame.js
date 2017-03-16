import { cons, car, cdr } from 'hexlet-pairs';

import greetMsg, { congratsMsg, successMsg, failureMsg, helloMsg, questionMsg } from '../lib/message';
import getName, { getRandomInt, getRandomSign, getAnswer } from '../lib/util';

const firstInt = couple => car(cdr(couple));
const secondInt = couple => cdr(cdr(couple));
const sign = couple => car(couple);

const calcExpression = (quiz) => {
  let result;
  switch (sign(quiz)) {
    case '+':
      result = firstInt(quiz) + secondInt(quiz);
      break;
    case '-':
      result = firstInt(quiz) - secondInt(quiz);
      break;
    case '*':
      result = firstInt(quiz) * secondInt(quiz);
      break;
    default:
      console.log(`Argument ${sign(quiz)} doesn't match with any sign`);
  }
  return result;
};

const isAnswerCorrect = (answer, expression) =>
  (calcExpression(expression) === parseInt(answer, 10));

const puzzle = () => {
  const first = getRandomInt();
  const second = getRandomInt();
  const digitPair = cons(first, second);
  return cons(getRandomSign(), digitPair);
};

const quizMsg = quiz => `${firstInt(quiz)} ${sign(quiz)} ${secondInt(quiz)}`;

const calcGame = (attemptTotal = 3) => {
  console.log(greetMsg('What is the result of the expression?\n'));
  const userName = getName();
  console.log(helloMsg(userName));

  const iter = (attemptCount, quiz) => {
    if (attemptTotal <= attemptCount) {
      console.log(congratsMsg(userName));
      return;
    }

    console.log(questionMsg(quizMsg(quiz)));
    const actualAnswer = getAnswer();
    const expectedAnswer = calcExpression(quiz);
    const isCorrect = isAnswerCorrect(actualAnswer, quiz);

    const message = isCorrect ?
      successMsg() : failureMsg(actualAnswer, expectedAnswer, userName);

    console.log(message);
    iter(attemptCount + 1, puzzle());
  };

  return iter(0, puzzle());
};

export default calcGame;
