import game from '..';
import getRandomInt from '../utils';

const operators = ['+', '-', '*'];
const expression = (n1, n2, operator) => {
  switch (operator) {
    case '+':
      return n1 + n2;
    case '-':
      return n1 - n2;
    default:
      return n1 * n2;
  }
};

const startMessage = 'What is the result of the expression?';
const gameStep = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operatorNum = getRandomInt(0, operators.length);
  const operator = operators[operatorNum];
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = `${expression(num1, num2, operator)}`;
  return [question, rightAnswer];
};
const calc = () => game(startMessage, gameStep);

export default calc;
