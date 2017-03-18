import { cons } from 'hexlet-pairs';

import getRandomInt from '../lib/randomData';
import game from '../baseGame';

const yes = 'yes';
const no = 'no';

const getExpectedAnswer = num =>
  (!(num % 2) ? yes : no);

const generateExercise = () => {
  const query = getRandomInt();
  const answer = getExpectedAnswer(query);
  return cons(`Question: ${query}`, answer);
};

const rule = 'Answer "yes" if number even otherwise answer "no".';

const evenGame = () => game(rule, generateExercise);

export default evenGame;
