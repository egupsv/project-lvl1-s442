import { getRandomInt, game } from '..';

const operators = ['+', '-', '*'];
const expression = (n1, n2, operator) => {
  if (operator === '+') {
    return n1 + n2;
  }
  if (operator === '-') {
    return n1 - n2;
  }
  return n1 * n2;
};

const calc = () => {
  const startMessage = 'What is the result of the expression?';
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operatorNum = getRandomInt(0, 3);
  const operator = operators[operatorNum];
  const question = `${num1} ${operator} ${num2}`;
  const getRightAnswer = expression(num1, num2, operator);
  return game(startMessage, question, getRightAnswer);
};

export default calc;
