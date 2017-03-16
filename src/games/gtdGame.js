import { cons, car, cdr } from 'hexlet-pairs';

import getAnswer from '../lib/userInteraction';
import getRandomInt from '../lib/randomData';
import game from './baseGame';

const firstInt = pair => car(pair);
const secondInt = pair => cdr(pair);

const getExpectedAnswer = (pair) => {
  const iter = (first, second) =>
    ((second === 0) ? Math.abs(first) : iter(second, first % second));
  return iter(firstInt(pair), secondInt(pair));
};

const generateExercise = () => {
  const first = getRandomInt();
  const second = getRandomInt();
  return cons(first, second);
};

const generateQuestion = pair => `${firstInt(pair)} ${secondInt(pair)}`;

const getActualAnswer = () => parseInt(getAnswer(), 10);

const gtdGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.\n';
  return game(gameRules, getActualAnswer, getExpectedAnswer,
    generateExercise, generateQuestion);
};

export default gtdGame;
