import readlineSync from 'readline-sync';
import { print, getName, sayHello } from './greeting';

const YES = 'yes';
const NO = 'no';
const MIN = 0;
const MAX = 100;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const askQuestion = num => print(`Question: ${num}`);

const getAnswer = () => readlineSync.question('Your answer: ');

const isEven = num => !(num % 2);

const isAnswerCorrect = (answer, num) =>
  (isEven(num) ? (answer.toLowerCase() === YES) : (answer.toLowerCase() === NO));

const evenGame = () => {
  const correctAnswerTotal = 3;
  const userName = getName();
  sayHello(userName);

  const iter = (correctAnswerCount, num) => {
    if (correctAnswerTotal <= correctAnswerCount) {
      print(`Congratulations, ${userName}!`);
      return;
    }

    askQuestion(num);
    const answer = getAnswer();
    const isCorrect = isAnswerCorrect(answer, num);
    const oppositeAnswer = isEven(num) ? YES : NO;

    if (isCorrect) {
      print('Correct!');
      iter(correctAnswerCount + 1, getRandomInt(MIN, MAX));
    } else {
      const message =
        `'${answer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'.\nLet's try again, ${userName}!`;
      print(message);
      iter(correctAnswerCount, getRandomInt(MIN, MAX));
    }
  };

  return iter(0, getRandomInt(MIN, MAX));
};

export default evenGame;
