import { cons } from 'hexlet-pairs';

import getRandomInt from '../lib/randomData';
import game from '../baseGame';

const generateSequence = (startNum, interval, length) => {
  const iter = (acc, counter) => {
    if (counter === 0) {
      return acc;
    }
    const newVal = acc[(acc.length - 1)] + interval;
    return iter([...acc, newVal], counter - 1);
  };

  return iter([startNum], length - 1);
};

const generateExercise = () => {
  const startNum = getRandomInt();
  const interval = getRandomInt(1, 11);
  const sequenceLength = 10;
  const sequence = generateSequence(startNum, interval, sequenceLength);
  const missingValue = sequence[interval - 1];
  sequence[interval - 1] = '..';
  const expression = sequence.reduce((acc, item, idx) =>
    (idx === 0 ? `${item}` : `${acc} ${item}`), '');
  return cons(expression, String(missingValue));
};

const rule = 'What number is missing in this progression?';

const progressionGame = () => game(rule, generateExercise);

export default progressionGame;
