import { getRandomNumber } from '../index.js';

const description = 'What is the result of the expression?';

const getGameData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const operators = ['+', '-', '*'];
  const lengthOperators = operators.length - 1;

  let correctAnswerCompute = 0;
  let randomOperator = null;

  for (let i = 0; i <= lengthOperators; i += 1) {
    randomOperator = operators[getRandomNumber(0, lengthOperators)];
  }

  switch (randomOperator) {
    case '+':
      correctAnswerCompute = number1 + number2;
      break;

    case '-':
      correctAnswerCompute = number1 - number2;
      break;

    case '*':
      correctAnswerCompute = number1 * number2;
      break;

    default:
  }

  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = correctAnswerCompute;

  return [question, correctAnswer];
};

export { getGameData, description };
