import readlineSync from 'readline-sync';

import getRandomInt from '../lib/randomData';
import game from '../baseGame';
import greeting from '../greeting';

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
  return String(balance(digits, reminder, quotient));
};

const generateExercise = () => getRandomInt(0, 1000);

const generateQuestion = msg => msg;

const getActualAnswer = () => readlineSync.question('Your answer: ');

const getUserName = () => greeting('Balance the given number.\n');

const balanceGame = () => game(getUserName, getActualAnswer, getExpectedAnswer,
  generateExercise, generateQuestion);

export default balanceGame;
