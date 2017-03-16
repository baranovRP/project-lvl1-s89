import greetMsg, { congratsMsg, successMsg, failureMsg, helloMsg, questionMsg } from '../lib/message';
import getName, { getRandomInt, getAnswer } from '../lib/util';

const balance = (arr, reminder, divider) => {
  let bal = reminder;
  const result = arr.reduce((acc) => {
    if (bal !== 0) {
      bal -= 1;
      return [divider + 1, ...acc];
    }
    return [divider, ...acc];
  }, []);
  return parseInt(result.join(''), 10);
};

const calcExpression = (quiz) => {
  const digits = [...String(quiz)];
  const sum = digits.reduce((acc, item) => acc + parseInt(item, 10), 0);
  const reminder = sum % digits.length;
  const divider = parseInt(sum / digits.length, 10);
  return balance(digits, reminder, divider);
};

const isAnswerCorrect = (answer, expression) =>
  (calcExpression(expression) === parseInt(answer, 10));

const puzzle = () => getRandomInt(0, 1000);

const balanceGame = (attemptTotal = 3) => {
  console.log(greetMsg('Balance the given number.\n'));
  const userName = getName();
  console.log(helloMsg(userName));

  const iter = (attemptCount, quiz) => {
    if (attemptTotal <= attemptCount) {
      console.log(congratsMsg(userName));
      return;
    }

    console.log(questionMsg(quiz));
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

export default balanceGame;
