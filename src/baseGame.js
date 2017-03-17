import { congratsMsg, successMsg, failureMsg, questionMsg } from './lib/message';

const game = (getUserName, getActualAnswer, getExpectedAnswer,
              generateExercise, generateQuestion, attemptTotal = 3) => {
  const userName = getUserName();

  const iter = (attemptCount, exercise, correctAnswerCount) => {
    if (attemptTotal <= attemptCount) {
      if (correctAnswerCount === 3) {
        console.log(congratsMsg(userName));
      }
      return;
    }

    console.log(questionMsg(generateQuestion(exercise)));
    const actualAnswer = getActualAnswer();
    const expectedAnswer = getExpectedAnswer(exercise);

    const isAnswerCorrect = expectedAnswer === actualAnswer;
    const message = isAnswerCorrect ?
      successMsg() : failureMsg(actualAnswer, expectedAnswer, userName);

    console.log(message);
    iter(attemptCount + 1, generateExercise(),
      isAnswerCorrect ? correctAnswerCount + 1 : correctAnswerCount);
  };

  return iter(0, generateExercise(), 0);
};

export default game;
