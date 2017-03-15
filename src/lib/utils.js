import readlineSync from 'readline-sync';

export const print = text => console.log(text);

export const getName = () => readlineSync.question('May I have your name? ');

export const getAnswer = () => readlineSync.question('Your answer: ');

export const getRandomInt = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min)) + min;
