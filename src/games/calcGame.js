import * as pair from 'hexlet-pairs';

import * as msg from '../lib/message';
import * as util from '../lib/util';

const firstInt = couple => pair.car(pair.cdr(couple));
const secondInt = couple => pair.cdr(pair.cdr(couple));
const sign = couple => pair.car(couple);

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
      util.print(`Argument ${sign(quiz)} doesn't match with any sign`);
  }
  return result;
};

const isAnswerCorrect = (answer, expression) =>
  (calcExpression(expression) === parseInt(answer, 10));

const puzzle = () => {
  const first = util.getRandomInt();
  const second = util.getRandomInt();
  const digitPair = pair.cons(first, second);
  return pair.cons(util.getRandomSign(), digitPair);
};

const quizMsg = quiz => `${firstInt(quiz)} ${sign(quiz)} ${secondInt(quiz)}`;

const calcGame = (attemptTotal = 3) => {
  util.print(msg.greetMsg('What is the result of the expression?\n'));
  const userName = util.getName();
  util.print(msg.helloMsg(userName));

  const iter = (attemptCount, quiz) => {
    if (attemptTotal <= attemptCount) {
      util.print(msg.congratsMsg(userName));
      return;
    }

    util.print(msg.questionMsg(quizMsg(quiz)));
    const actualAnswer = util.getAnswer();
    const expectedAnswer = calcExpression(quiz);
    const isCorrect = isAnswerCorrect(actualAnswer, quiz);

    const message = isCorrect ?
      msg.successMsg() : msg.failureMsg(actualAnswer, expectedAnswer, userName);

    util.print(message);
    iter(attemptCount + 1, puzzle());
  };

  return iter(0, puzzle());
};

export default calcGame;
