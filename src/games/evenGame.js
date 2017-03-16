import getAnswer from '../lib/userInteraction';
import getRandomInt from '../lib/randomData';
import game from './baseGame';

const yes = 'yes';
const no = 'no';

const getExpectedAnswer = num => (!(num % 2) ? yes : no);

const generateExercise = () => getRandomInt();

const generateQuestion = msg => msg;

const getActualAnswer = () => getAnswer().toLowerCase();

const evenGame = () => {
  const gameRules = 'Answer "yes" if number even otherwise answer "no".\n';
  return game(gameRules, getActualAnswer, getExpectedAnswer,
    generateExercise, generateQuestion);
};

export default evenGame;
