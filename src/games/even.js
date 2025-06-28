import getRandomNumber from '../utils.js';

const DESCRIPTION = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const questionNumber = getRandomNumber(1, 100);
  const correctAnswer = isEven(questionNumber) ? 'yes' : 'no';
  return [questionNumber, correctAnswer];
};

export default {
  DESCRIPTION,
  generateRound,
};