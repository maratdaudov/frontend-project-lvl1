import { getRandomNumber } from '../src/index.js';

const description = 'Answer yes if the number is even, otherwise answer no.';

const getQuestionAndAnswerCorrect = () => {
  const question = getRandomNumber();
  const answerCorrect = question % 2 === 0 ? 'yes' : 'no';

  return [question, answerCorrect, description];
};

export { getQuestionAndAnswerCorrect, description };
