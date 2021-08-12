import { getRandomNumber } from '../src/index.js';

const calc = () => {
  console.log('What is the result of the expression?');

  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const operators = ['+', '-', '*'];
  const lengthOperators = operators.length - 1;

  let answerCorrectCompute = 0;
  let randomOperator = null;

  for (let i = 0; i <= lengthOperators; i += 1) {
    randomOperator = operators[getRandomNumber(0, lengthOperators)];
  }

  switch (randomOperator) {
    case '+':
      answerCorrectCompute = number1 + number2;
      break;

    case '-':
      answerCorrectCompute = number1 - number2;
      break;

    case '*':
      answerCorrectCompute = number1 * number2;
      break;

    default:
  }

  const question = `${number1} ${randomOperator} ${number2}`;
  const answerCorrect = answerCorrectCompute.toString();

  return [question, answerCorrect];
};

export default calc;
