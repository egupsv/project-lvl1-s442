import game from '..';
import getRandomInt from '../utils';

const startMessage = 'What number is missing in the progression?';
const progressionLength = 10;
const maxDelta = 10;
const getArrayForQuestion = (firstNum, delta) => {
  const iter = (acc, counter) => {
    if (counter === progressionLength) {
      return acc;
    }
    return iter([...acc, counter * delta + firstNum], counter + 1);
  };
  return iter([], 0);
};

const gameStep = () => {
  const firstNum = getRandomInt();
  const delta = getRandomInt(1, maxDelta);
  const positionOfMissingElement = getRandomInt(0, progressionLength - 1);
  const question = getArrayForQuestion(firstNum, delta)
    .map((e, i) => (i === positionOfMissingElement ? '..' : e))
    .join(' ');
  const getRightAnswer = String(positionOfMissingElement * delta + firstNum);
  return [question, getRightAnswer];
};

export default () => game(startMessage, gameStep);
