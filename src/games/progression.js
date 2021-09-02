import getRandomNumber from '../utils.js';

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const randomNumber = getRandomNumber(0, 100);
  const progressionLength = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 5);
  const hiddenPosition = getRandomNumber(1, 5);

  let question = '';
  let correctAnswer = null;
  const arr = [randomNumber];

  for (let i = 0; i <= progressionLength; i += 1) {
    arr[i + 1] = arr[i] + step;

    if (i === hiddenPosition) {
      arr[i] = '..';
      correctAnswer = arr[i - 1] + step;
    }
  }

  question = arr.join(' ');

  return [question, correctAnswer];
};

export { getGameData, description };
