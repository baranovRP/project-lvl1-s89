import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name? ');

export const getAnswer = () => readlineSync.question('Your answer: ');

export const getRandomInt = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;

export const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  return signs[getRandomInt(0, 2)];
};

export default getName;
