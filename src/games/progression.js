import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const lengthProgression = getRandomNumber(5, 10);

const makeProgression = (startNumber, step) => {
  const progression = [];

  for (let i = 0; i <= lengthProgression; i += 1) {
    progression[i] = startNumber + (step * i);
  }

  return progression;
};

const getGameData = () => {
  const startNumber = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 5);
  const progression = makeProgression(startNumber, step);
  const hiddenNumber = getRandomNumber(0, lengthProgression);
  const correctAnswer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

const startGameProgression = () => {
  runGame(getGameData, description);
};

export default startGameProgression;
