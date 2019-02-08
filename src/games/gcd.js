import game from '..';
import getRandomInt from '../utils';

const maxCommonDenom = (n1, n2) => (n2 === 0 ? n1 : maxCommonDenom(n2, n1 % n2));
const startMessage = 'Find the greatest common divisor of given numbers.';
const gameStep = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const question = `${num1} ${num2}`;
  const getRightAnswer = String(maxCommonDenom(num1, num2));
  return [question, getRightAnswer];
};
const gcd = () => game(startMessage, gameStep);

export default gcd;
