import { cons } from 'hexlet-pairs';

import getRandomInt from '../lib/randomData';
import game from '../baseGame';

const balance = (arr, reminder, quotient) => {
  let currentReminder = reminder;
  const result = arr.reduce((acc) => {
    if (currentReminder !== 0) {
      currentReminder -= 1;
      return [quotient + 1, ...acc];
    }
    return [quotient, ...acc];
  }, []);
  return parseInt(result.join(''), 10);
};

const getExpectedAnswer = (num) => {
  const digits = [...String(num)];
  const sum = digits.reduce((acc, item) =>
    acc + parseInt(item, 10), 0);
  const reminder = sum % digits.length;
  const quotient = parseInt(sum / digits.length, 10);
  return String(balance(digits, reminder, quotient));
};

const generateExercise = () => {
  const num = getRandomInt(0, 1000);
  const answer = getExpectedAnswer(num);
  return cons(`Question: ${num}`, answer);
};

const rule = 'Balance the given number.';

const balanceGame = () => game(rule, generateExercise);

export default balanceGame;
