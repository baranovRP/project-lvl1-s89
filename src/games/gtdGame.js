import { cons, car, cdr } from 'hexlet-pairs';

import { getRandomInt, getAnswer } from '../lib/util';
import game from '../game';

const firstInt = couple => car(couple);
const secondInt = couple => cdr(couple);

const getExpectedAnswer = (quiz) => {
  const iter = (first, second) =>
    ((second === 0) ? Math.abs(first) : iter(second, first % second));
  return iter(firstInt(quiz), secondInt(quiz));
};

const generateExercise = () => {
  const first = getRandomInt();
  const second = getRandomInt();
  return cons(first, second);
};

const generateQuestion = quiz => `${firstInt(quiz)} ${secondInt(quiz)}`;

const getActualAnswer = () => parseInt(getAnswer(), 10);

const gtdGame = (attemptTotal = 3) => {
  const gameRules = 'Find the greatest common divisor of given numbers.\n';
  return game(gameRules, getActualAnswer, getExpectedAnswer,
    generateExercise, generateQuestion, attemptTotal);
};

export default gtdGame;
