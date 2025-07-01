import getRandomNumber from '../utils.js'; // Importa la función para obtener números aleatorios
import runGame from '../index.js';         // Importa la función principal para ejecutar el juego

const description = 'Encuentra el máximo común divisor de los números dados.';

// Función para calcular el Máximo Común Divisor (MCD) usando el algoritmo de Euclides
const calculateGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return calculateGcd(b, a % b);
};

// Función para generar una ronda del juego
const generateRound = () => {
  const num1 = getRandomNumber(1, 100); // Genera el primer número aleatorio entre 1 y 100
  const num2 = getRandomNumber(1, 100); // Genera el segundo número aleatorio entre 1 y 100

  const question = `${num1} ${num2}`; // La pregunta es los dos números separados por un espacio
  const correctAnswer = String(calculateGcd(num1, num2)); // Calcula el MCD y lo convierte a string

  return [question, correctAnswer]; // Retorna la pregunta y la respuesta correcta
};

// Función principal que inicia el juego MCD
const brainGcd = () => {
  runGame(description, generateRound); // Ejecuta el juego con la descripción y la función para generar rondas
};

export default brainGcd;
