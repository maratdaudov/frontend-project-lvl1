import { getRandomNumber } from '../src/index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getQuestionAndAnswerCorrect = () => {
  const randomNumber = getRandomNumber(0, 100);

  const question = randomNumber;
  let answerCorrect = 'yes';

  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      answerCorrect = 'no';
    }
  }

  return [question, answerCorrect];
};

export { getQuestionAndAnswerCorrect, description };
