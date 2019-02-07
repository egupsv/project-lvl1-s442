import { getRandomInt, game } from '..';

const even = () => {
  const startMessage = 'Answer "yes" if number even otherwise answer "no".';
  const num = getRandomInt();
  const isEven = num % 2 === 0;
  const getRightAnswer = isEven(num) ? 'yes' : 'no';
  return game(startMessage, num, getRightAnswer);
};

export default even;
