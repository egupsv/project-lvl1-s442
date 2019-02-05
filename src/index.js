import readlineSync from 'readline-sync';

const userName = readlineSync.question('May I have your name? ');

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Hello, ${userName}!`);
};

const nForQuestions = [15, 6, 7];
const rightAnswer = n => (n % 2 === 1 ? 'no' : 'yes');
const isCorrect = (n) => {
  console.log(`Question: ${n}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === rightAnswer(n)) {
    console.log('Correct!');
    return true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer(n)}'.`);
    console.log(`Let's try again, ${userName}!`);
    return false;
  }
};

export const even = () => {
  for (let i = 0; i < nForQuestions.length; i = i + 1) {
    if (isCorrect(nForQuestions[i]) === false) {
      break;
    }
    if (isCorrect(nForQuestions[i]) === true && i === nForQuestions.length - 1) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
