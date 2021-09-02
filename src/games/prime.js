import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  let result = 'yes';
  const sqrt = Math.sqrt(num);

  for (let i = 2; i <= sqrt; i += 1) {
    if (num % i === 0) {
      result = 'no';
    }
  }

  return result;
};

const getGameData = () => {
  const randomNumber = getRandomNumber(0, 100);

  const question = randomNumber;
  const correctAnswer = isPrime(randomNumber);

  return [question, correctAnswer];
};

export { getGameData, description };
