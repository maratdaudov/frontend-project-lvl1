import readlineSync from 'readline-sync';

const roundsCount = 3;
const compareResults = (getGameData, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
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
