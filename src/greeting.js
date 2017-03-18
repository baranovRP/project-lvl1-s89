import readlineSync from 'readline-sync';

const greeting = (ruleText = '') => {
  console.log(`Welcome to the Brain Games!\n${ruleText}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);

  return name;
};

export default greeting;
