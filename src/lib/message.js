const greetMsg = (rules = '') => `Welcome to the Brain Games!\n${rules}`;

export const congratsMsg = name => `Congratulations, ${name}!`;

export const successMsg = () => 'Correct!';

export const failureMsg = (actualVal, expectedVal, name) =>
  `'${actualVal}' is wrong answer ;(. Correct answer was '${expectedVal}'.\nLet's try again, ${name}!`;

export const helloMsg = name => `Hello, ${name}!\n`;

export const questionMsg = question => `Question: ${question}`;

export default greetMsg;
