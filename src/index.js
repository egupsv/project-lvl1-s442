import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

const getRandomInt = (min = 1, max = 100) => Math.floor(Math.random() * (max - min)) + min;
const isEven = number => (number % 2 === 1 ? 'no' : 'yes');

export const even = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('');
  for (let i = 0; i < 3; i += 1) {
    const currentNum = getRandomInt();
    console.log(`Question: ${currentNum}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven(currentNum) !== answer) {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${isEven(currentNum)}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
