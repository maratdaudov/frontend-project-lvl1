import getRandomNumber from '../utils.js';

const description = 'What is the result of the expression?';

const calculate = (a, b, operation) => {
  let result = null;

  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      console.log('Something went wrong');
      break;
  }

  return result;
};

const getGameData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const operators = ['+', '-', '*'];
  const getRandomIndex = getRandomNumber(0, operators.length - 1);
  const operator = operators[getRandomIndex];

  const question = `${number1} ${operator} ${number2}`;
  const correctAnswer = calculate(number1, number2, operator);

  return [question, correctAnswer];
};

export { getGameData, description };
