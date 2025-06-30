import getRandomNumber from '../utils.js'; // Asumiendo que tienes un archivo utils.js para getRandomNumber
import runGame from '../index.js'; // Importa la función runGame desde index.js

const description = '¿Cuál es el resultado de la expresión?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operador desconocido: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100); // Números entre 1 y 100
  const num2 = getRandomNumber(1, 100); // Números entre 1 y 100
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator)); // Convertir a string porque la entrada del usuario será un string

  return [question, correctAnswer];
};

const brainCalc = () => {
  runGame(description, generateRound);
};

export default brainCalc;