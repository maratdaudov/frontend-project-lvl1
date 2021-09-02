import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const getGameData = () => {
  const randomNumber = getRandomNumber(0, 100);

  const question = randomNumber;
  let correctAnswer = 'yes';

  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      correctAnswer = 'no';
    }
  }

  return [question, correctAnswer];
};

export { getGameData, description };
