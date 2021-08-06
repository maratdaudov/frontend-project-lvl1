import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');
const askName = () => {
  console.log(`Hello, ${userName}!`);
};

export { askName, userName };
