import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

import getRandomInt, { getRandomSign } from '../lib/randomData';
import game from '../baseGame';
import greeting from '../greeting';

const firstInt = couple => car(cdr(couple));
const secondInt = couple => cdr(cdr(couple));
const sign = couple => car(couple);

const getExpectedAnswer = (expression) => {
  let result;
  switch (sign(expression)) {
    case '+':
      result = firstInt(expression) + secondInt(expression);
      break;
    case '-':
      result = firstInt(expression) - secondInt(expression);
      break;
    case '*':
      result = firstInt(expression) * secondInt(expression);
      break;
    default:
      console.log(`Argument ${sign(expression)} doesn't match with any sign`);
  }
  return String(result);
};

const generateExercise = () => {
  const first = getRandomInt();
  const second = getRandomInt();
  const digitPair = cons(first, second);
  return cons(getRandomSign(), digitPair);
};

const generateQuestion = quiz => `${firstInt(quiz)} ${sign(quiz)} ${secondInt(quiz)}`;

const getActualAnswer = () => readlineSync.question('Your answer: ');

const getUserName = () => greeting('What is the result of the expression?\n');

const calcGame = () => game(getUserName, getActualAnswer, getExpectedAnswer,
  generateExercise, generateQuestion);

export default calcGame;
