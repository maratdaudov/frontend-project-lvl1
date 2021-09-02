import readlineSync from 'readline-sync';
import getUserName from './cli.js';

export const getRandomNumber = (min = 0, max = 100) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const roundsCount = 3;
const compareResults = (getGameData, description) => {
  const userName = getUserName();
  console.log(description);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = getGameData();

    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default compareResults;
