import { getRandomNumber } from '../src/index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswerCorrect = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;

  const minNumber = Math.min(number1, number2);
  let answerCorrect = null;

  for (let i = minNumber; i >= 1; i -= 1) {
    if ((number1 % i === 0 && number2 % i === 0) || (number1 === number2)) {
      answerCorrect = i;
      break;
    }

    answerCorrect = 1;
  }

  return [question, answerCorrect];
};

export { getQuestionAndAnswerCorrect, description };
