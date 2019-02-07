import { getRandomInt, game } from '..';

const even = () => {
  const startMessage = 'Answer "yes" if number even otherwise answer "no".';
  const gameStep = () => {
    const num = getRandomInt();
    const isEven = n => n % 2 === 0;
    const getRightAnswer = isEven(num) ? 'yes' : 'no';
    return [num, getRightAnswer];
  };
  return game(startMessage, gameStep);
};

export default even;
