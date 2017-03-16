import greetMsg, { congratsMsg, successMsg, failureMsg, helloMsg, questionMsg } from './lib/message';
import getName from './lib/util';

const game = (greetingText, getActualAnswer, getExpectedAnswer,
              generateExercise, generateQuestion, attemptTotal = 3) => {
  console.log(greetMsg(greetingText));
  const userName = getName();
  console.log(helloMsg(userName));

  const iter = (attemptCount, exercise) => {
    if (attemptTotal <= attemptCount) {
      console.log(congratsMsg(userName));
      return;
    }

    console.log(questionMsg(generateQuestion(exercise)));
    const actualAnswer = getActualAnswer();
    const expectedAnswer = getExpectedAnswer(exercise);

    const message = expectedAnswer === actualAnswer ?
      successMsg() : failureMsg(actualAnswer, expectedAnswer, userName);

    console.log(message);
    iter(attemptCount + 1, generateExercise());
  };

  return iter(0, generateExercise());
};

export default game;
