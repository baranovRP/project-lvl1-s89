import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

import greeting from './greeting';

const failureMsg = (actualVal, expectedVal, name) =>
  `'${actualVal}' is wrong answer ;(. Correct answer was '${expectedVal}'.\nLet's try again, ${name}!`;

const game = (rule, assignment, attemptTotal = 3) => {
  const userName = greeting(rule);

  const iter = (attemptCount, exercise, correctAnswerCount) => {
    if (attemptTotal <= attemptCount) {
      if (correctAnswerCount === 3) {
        console.log(`Congratulations, ${userName}!`);
      }
      return;
    }

    console.log(car(exercise));
    const actualAnswer = readlineSync.question('Your answer: ');
    const expectedAnswer = cdr(exercise);

    const isAnswerCorrect = expectedAnswer === actualAnswer;
    const message = isAnswerCorrect ?
      'Correct!' : failureMsg(actualAnswer, expectedAnswer, userName);

    console.log(message);
    iter(attemptCount + 1, assignment(),
      isAnswerCorrect ? correctAnswerCount + 1 : correctAnswerCount);
  };

  return iter(0, assignment(), 0);
};

export default game;
