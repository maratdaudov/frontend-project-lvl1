import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const lengthProgression = getRandomNumber(5, 10);

const makeProgression = () => {
  const startNumber = getRandomNumber(0, 100);
  const step = getRandomNumber(1, 5);

  const progression = [];

  for (let i = 0; i <= lengthProgression; i += 1) {
    progression[i] = startNumber + (step * i);
  }

  return progression;
};

const getGameData = () => {
  const progression = makeProgression();
  const hiddenNumber = getRandomNumber(0, lengthProgression);
  const correctAnswer = progression[hiddenNumber];
  progression[hiddenNumber] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export { getGameData, description };
