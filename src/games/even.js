import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Answer yes if the number is even, otherwise answer no.';

const isEven = (number) => number % 2 === 0;

const getGameData = () => {
  const randomNumber = getRandomNumber(0, 50);

  const question = randomNumber;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const startGameEven = () => {
  runGame(getGameData, description);
};

export default startGameEven;
