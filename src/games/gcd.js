import { getRandomInt, game } from '..';

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

const gcd = () => {
  const startMessage = 'Find the greatest common divisor of given numbers.';
  const gameStep = () => {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const denoms1 = denoms(num1);
    const denoms2 = denoms(num2);
    const maxDenom = denoms1
      .filter(e => denoms2.includes(e))
      .reduce((acc, e) => e, 0);
    const question = `${num1} ${num2}`;
    const getRightAnswer = String(maxDenom);
    return [question, getRightAnswer];
  };
  return game(startMessage, gameStep);
};

export default gcd;
