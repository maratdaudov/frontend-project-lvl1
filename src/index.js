import readlineSync from 'readline-sync';

export const getRandomNumber = (min = 0, max = 100) => (
  Math.floor(Math.random() * (max - min + 1)) + min
);

const roundsCount = 3;

const compareResults = (getQuestionAndAnswerCorrect) => {
  console.log('Welcome to Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answerCorrect] = getQuestionAndAnswerCorrect();

    console.log(typeof answerCorrect);

    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser === answerCorrect) {
      console.log('Correct!');
    } else {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answerCorrect}.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}`);
};

export default compareResults;
