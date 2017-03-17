import readlineSync from 'readline-sync';

import getRandomInt from '../lib/randomData';
import game from '../baseGame';
import greeting from '../greeting';

const yes = 'yes';
const no = 'no';

const getExpectedAnswer = num => (!(num % 2) ? yes : no);

const generateExercise = () => getRandomInt();

const generateQuestion = msg => msg;

const getActualAnswer = () => readlineSync.question('Your answer: ').toLowerCase();

const getUserName = () => greeting('Answer "yes" if number even otherwise answer "no".\n');

const evenGame = () => game(getUserName, getActualAnswer, getExpectedAnswer,
  generateExercise, generateQuestion);

export default evenGame;
