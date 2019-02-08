import game from '..';
import getRandomInt from '../utils';

const denoms = (n) => {
  const iter = (acc, counter) => {
    if (counter > n / 2) {
      return [...acc, n];
    }
    if (n % counter === 0) {
      return iter([...acc, counter], counter + 1);
    }
    return iter(acc, counter + 1);
  };
  return iter([], 1);
};
const maxDenom = (n1, n2) => denoms(n1)
  .filter(e => denoms(n2).includes(e))
  .reduce((acc, e) => e, 0);
const startMessage = 'Find the greatest common divisor of given numbers.';
const gcd = () => {
  const gameStep = () => {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const question = `${num1} ${num2}`;
    const getRightAnswer = String(maxDenom(num1, num2));
    return [question, getRightAnswer];
  };
  return game(startMessage, gameStep);
};

export default gcd;
