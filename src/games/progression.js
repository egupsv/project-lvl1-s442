import game from '..';
import getRandomInt from '../utils';

const startMessage = 'What number is missing in the progression?';
const progressionLength = 10;
const maxDelta = 10;
const progression = () => {
  const gameStep = () => {
    const firstNum = getRandomInt();
    const delta = getRandomInt(1, maxDelta);
    const NumOfMissing = getRandomInt(0, progressionLength - 1);
    const getArrayForQuestion = (arr) => {
      if (arr.length === progressionLength) {
        return arr;
      }
      return getArrayForQuestion([...arr, arr.length * delta + firstNum]);
    };
    const arrayForQuestion = getArrayForQuestion([firstNum]);
    const question = arrayForQuestion
      .map((e, i) => (i === NumOfMissing ? '..' : e))
      .join(' ');
    const getRightAnswer = String(arrayForQuestion[NumOfMissing]);
    return [question, getRightAnswer];
  };
  return game(startMessage, gameStep);
};

export default progression;
