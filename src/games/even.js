import game from '..';
import getRandomInt from '../utils';

const startMessage = 'Answer "yes" if number even otherwise answer "no".';
const isEven = n => n % 2 === 0;
const even = () => {
  const gameStep = () => {
    const question = getRandomInt();
    const rightAnswer = isEven(question) ? 'yes' : 'no';
    return [question, rightAnswer];
  };
  return game(startMessage, gameStep);
};

export default even;
