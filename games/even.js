import { getRandomNumber } from '../src/index.js';

const getQuestionAndAnswerCorrect = () => {
  console.log('Answer yes if the number is even, otherwise answer no.');

  const question = getRandomNumber();
  const answerCorrect = question % 2 === 0 ? 'yes' : 'no';

  return [question, answerCorrect];
};

export default getQuestionAndAnswerCorrect;
