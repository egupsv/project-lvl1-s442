import game from '..';
import getRandomInt from '../utils';

const startMessage = 'What number is missing in the progression?';
const progressionLength = 10;
const maxDelta = 10;
const gameStep = () => {
  const firstNum = getRandomInt();
  const delta = getRandomInt(1, maxDelta);
  const positionOfMissingElement = getRandomInt(0, progressionLength - 1);
  const getArrayForQuestion = (acc, counter) => {
    if (counter === progressionLength) {
      return acc;
    }
    return getArrayForQuestion([...acc, counter * delta + firstNum], counter + 1);
  };
  const question = getArrayForQuestion([], 0)
    .map((e, i) => (i === positionOfMissingElement ? '..' : e))
    .join(' ');
  const getRightAnswer = String(getArrayForQuestion([], 0)[positionOfMissingElement]);
  return [question, getRightAnswer];
};
const progression = () => game(startMessage, gameStep);

export default progression;
