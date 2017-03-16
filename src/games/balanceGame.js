import { getRandomInt, getAnswer } from '../lib/util';
import game from './baseGame';

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
  const sum = digits.reduce((acc, item) => acc + parseInt(item, 10), 0);
  const reminder = sum % digits.length;
  const quotient = parseInt(sum / digits.length, 10);
  return balance(digits, reminder, quotient);
};

const generateExercise = () => getRandomInt(0, 1000);

const generateQuestion = msg => msg;

const getActualAnswer = () => parseInt(getAnswer(), 10);

const balanceGame = () => {
  const gameRules = 'Balance the given number.\n';
  return game(gameRules, getActualAnswer, getExpectedAnswer,
    generateExercise, generateQuestion);
};

export default balanceGame;
