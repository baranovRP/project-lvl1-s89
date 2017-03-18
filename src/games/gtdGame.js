import { cons, car, cdr } from 'hexlet-pairs';

import getRandomInt from '../lib/randomData';
import game from '../baseGame';

const num1 = pair => car(pair);
const num2 = pair => cdr(pair);

const generateQuestion = pair =>
  `Question: ${num1(pair)} ${num2(pair)}`;

const getExpectedAnswer = (pair) => {
  const iter = (first, second) =>
    ((second === 0) ? Math.abs(first) : iter(second, first % second));
  return String(iter(num1(pair), num2(pair)));
};

const generateExercise = () => {
  const pair = cons(getRandomInt(), getRandomInt());
  const answer = getExpectedAnswer(pair);
  return cons(generateQuestion(pair), answer);
};

const rule = 'Find the greatest common divisor of given numbers.';

const gtdGame = () => game(rule, generateExercise);

export default gtdGame;
