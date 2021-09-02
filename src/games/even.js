import { getRandomNumber } from '../index.js';

const description = 'Answer yes if the number is even, otherwise answer no.';

const getGameData = () => {
  const question = getRandomNumber();
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';

  return [question, correctAnswer, description];
};

export { getGameData, description };
