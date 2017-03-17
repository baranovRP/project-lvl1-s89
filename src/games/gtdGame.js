import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

import getRandomInt from '../lib/randomData';
import game from '../baseGame';
import greeting from '../greeting';

const firstInt = pair => car(pair);
const secondInt = pair => cdr(pair);

const getExpectedAnswer = (pair) => {
  const iter = (first, second) =>
    ((second === 0) ? Math.abs(first) : iter(second, first % second));
  return String(iter(firstInt(pair), secondInt(pair)));
};

const generateExercise = () => {
  const first = getRandomInt();
  const second = getRandomInt();
  return cons(first, second);
};

const generateQuestion = pair => `${firstInt(pair)} ${secondInt(pair)}`;

const getActualAnswer = () => readlineSync.question('Your answer: ');

const getUserName = () => greeting('Find the greatest common divisor of given numbers.\n');

const gtdGame = () => game(getUserName, getActualAnswer, getExpectedAnswer,
  generateExercise, generateQuestion);

export default gtdGame;
