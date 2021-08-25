import { getRandomNumber } from '../src/index.js';

const description = 'What number is missing in the progression?';

const getQuestionAndAnswerCorrect = () => {
  const randomNumber = getRandomNumber(0, 100);
  const progressionLength = getRandomNumber(5, 10);
  const step = getRandomNumber(1, 5);
  const hiddenPosition = getRandomNumber(1, 5);

  let question = '';
  let answerCorrect = null;
  const arr = [randomNumber];

  for (let i = 0; i <= progressionLength; i += 1) {
    arr[i + 1] = arr[i] + step;

    if (i === hiddenPosition) {
      arr[i] = '..';
      answerCorrect = arr[i - 1] + step;
    }
  }

  question = arr.join(' ');

  return [question, answerCorrect];
};

export { getQuestionAndAnswerCorrect, description };
