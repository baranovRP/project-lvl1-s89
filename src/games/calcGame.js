import { cons, car, cdr } from 'hexlet-pairs';

import getAnswer from '../lib/userInteraction';
import getRandomInt, { getRandomSign } from '../lib/randomData';
import game from './baseGame';

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
  return result;
};

const generateExercise = () => {
  const first = getRandomInt();
  const second = getRandomInt();
  const digitPair = cons(first, second);
  return cons(getRandomSign(), digitPair);
};

const generateQuestion = quiz => `${firstInt(quiz)} ${sign(quiz)} ${secondInt(quiz)}`;

const getActualAnswer = () => parseInt(getAnswer(), 10);

const calcGame = () => {
  const gameRules = 'What is the result of the expression?\n';
  return game(gameRules, getActualAnswer, getExpectedAnswer,
    generateExercise, generateQuestion);
};

export default calcGame;
