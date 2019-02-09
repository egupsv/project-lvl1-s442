import readlineSync from 'readline-sync';

const amountOfSteps = 3;
export default (startMessage, gameStep) => {
  console.log('Welcome to the Brain Games!');
  console.log(startMessage);
  console.log('');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log('');
  for (let stepNum = 1; stepNum <= amountOfSteps; stepNum += 1) {
    const [question, rightAnswer] = gameStep();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
