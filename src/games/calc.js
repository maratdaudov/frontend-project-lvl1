import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (number1, number2, operation) => {
  let result = null;

  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
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

const startGameCalc = () => {
  runGame(getGameData, description);
};

export default startGameCalc;
