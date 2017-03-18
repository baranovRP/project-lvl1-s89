import { cons } from 'hexlet-pairs';

import getRandomInt from '../lib/randomData';
import game from '../baseGame';

const isPrimeNum = (num) => {
  if (num === 1) {
    return true;
  }
  const iter = (counter) => {
    if (counter > num) {
      return false;
    }
    if (num === counter) {
      return true;
    }
    if (num % counter === 0) {
      return false;
    }
    return iter(counter + 1);
  };
  return iter(2);
};

const generateExercise = () => {
  const num = getRandomInt(1, 1000);
  return cons(num, isPrimeNum(num) ? 'yes' : 'no');
};

const rule = 'Answer "yes" if number is prime otherwise answer "no".';

const primeGame = () => game(rule, generateExercise);

export default primeGame;
