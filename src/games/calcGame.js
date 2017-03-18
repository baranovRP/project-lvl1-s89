import { cons, car, cdr } from 'hexlet-pairs';

import getRandomInt, { getRandomSign } from '../lib/randomData';
import game from '../baseGame';

const num1 = pair => car(cdr(pair));
const num2 = pair => cdr(cdr(pair));
const sign = pair => car(pair);

const generateQuestion = pair =>
  `Question: ${num1(pair)} ${sign(pair)} ${num2(pair)}`;

const getExpectedAnswer = (expression) => {
  let result;
  switch (sign(expression)) {
    case '+':
      result = num1(expression) + num2(expression);
      break;
    case '-':
      result = num1(expression) - num2(expression);
      break;
    case '*':
      result = num1(expression) * num2(expression);
      break;
    default:
      console.log(`Argument ${sign(expression)} doesn't match with any sign`);
  }
  return String(result);
};

const generateExercise = () => {
  const pair = cons(getRandomInt(), getRandomInt());
  const expression = cons(getRandomSign(), pair);
  const answer = getExpectedAnswer(expression);

  return cons(generateQuestion(expression), answer);
};

const rule = 'What is the result of the expression?';

const calcGame = () => game(rule, generateExercise);

export default calcGame;
