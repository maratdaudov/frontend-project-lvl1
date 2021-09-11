import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

const getGameData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;

  const correctAnswer = getGcd(number1, number2);

  return [question, correctAnswer];
};

const startGameGcd = () => {
  runGame(getGameData, description);
};

export default startGameGcd;
