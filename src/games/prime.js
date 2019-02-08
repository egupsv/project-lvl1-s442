import game from '..';
import getRandomInt from '../utils';

const isPrime = (n) => {
  const iter = (acc, counter) => {
    if (counter > n / 2) {
      return [...acc];
    }
    if (n % counter === 0) {
      return iter([...acc, counter], counter + 1);
    }
    return iter(acc, counter + 1);
  };
  return iter([], 1).length === 1;
};
const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameStep = () => {
  const num = getRandomInt();
  const question = `${num}`;
  const getRightAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, getRightAnswer];
};
const prime = () => game(startMessage, gameStep);

export default prime;
