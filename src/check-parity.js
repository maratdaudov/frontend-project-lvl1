import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const randomNumberGenerator = () => Math.floor(Math.random() * 100) + 1;

const checkParity = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const currentNumber = randomNumberGenerator();

    console.log(`Question: ${currentNumber}`);

    const isEvenExpectedNumber = currentNumber % 2 === 0 ? 'yes' : 'no';
    const getAnswer = readlineSync.question('Your answer: ');

    if (getAnswer === isEvenExpectedNumber) {
      console.log('Correct!');
    } else {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return console.log(`Let's try again, ${userName}!`);
    }
  }

  return console.log(`Congratulations, ${userName}!`);
};

export default checkParity;
