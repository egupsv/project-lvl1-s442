import game from '..';
import getRandomInt from '../utils';

const isPrime = (n) => {
  const iter = (counter) => {
    if (counter > n / 2 && n !== 1) {
      return true;
    }
    if (n % counter === 0 || n === 1) {
      return false;
    }
    return iter(counter + 1);
  };
  return iter(2);
};

const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const gameStep = () => {
  const num = getRandomInt();
  const question = `${num}`;
  const getRightAnswer = isPrime(num) ? 'yes' : 'no';
  return [question, getRightAnswer];
};

export default () => game(startMessage, gameStep);
