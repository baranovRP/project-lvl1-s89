import { getRandomInt, getAnswer } from '../lib/util';
import game from '../game';

const yes = 'yes';
const no = 'no';

const getExpectedAnswer = num => (!(num % 2) ? yes : no);

const generateExercise = () => getRandomInt();

const generateQuestion = msg => msg;

const getActualAnswer = () => getAnswer().toLowerCase();

const evenGame = (attemptTotal = 3) => {
  const gameRules = 'Answer "yes" if number even otherwise answer "no".\n';
  return game(gameRules, getActualAnswer, getExpectedAnswer,
    generateExercise, generateQuestion, attemptTotal);
};

export default evenGame;
