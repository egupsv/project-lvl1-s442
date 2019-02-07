import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;

const amountOfSteps = 3;
export const game = (startMessage, gameStep) => {
  console.log('Welcome to the Brain Games!');
  console.log(startMessage);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('');
  for (let stepNum = 1; stepNum <= amountOfSteps; stepNum += 1) {
    const step = gameStep();
    console.log(`Question: ${step[0]}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== step[1]) {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${gameStep[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
