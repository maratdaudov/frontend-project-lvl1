import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const makeProgression = (startNumber, step, length) => {
  const progression = [];

  for (let i = 0; i <= length; i += 1) {
    progression.push(startNumber + step * i);
  }

  return progression;
};

const getGameData = () => {
  const lengthProgression = 10;
  const startNumber = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 5);
  const progression = makeProgression(startNumber, step, lengthProgression);
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
