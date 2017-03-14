import readlineSync from 'readline-sync';

export const print = text => console.log(text);

export const getName = () => readlineSync.question('May I have your name? ');

export const sayHello = name => print(`Hello, ${name}!\n`);

const greeting = () => sayHello(getName());

export default greeting;
