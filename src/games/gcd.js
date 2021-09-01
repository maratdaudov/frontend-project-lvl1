import { getRandomNumber } from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const getQuestionAndAnswerCorrect = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const question = `${number1} ${number2}`;

  const answerCorrect = gcd(number1, number2);

  return [question, answerCorrect];
};

export { getQuestionAndAnswerCorrect, description };
