import getRandomNumber from '../utils.js'; // Asumiendo que tienes un util para números aleatorios
import runGame from '../index.js'; // Para la lógica común de los juegos

const description = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';

// Función para determinar si un número es primo
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomNumber(1, 100); // Genera un número aleatorio entre 1 y 100
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [String(number), correctAnswer];
};

const startGame = () => {
  runGame(description, generateRound);
};

export default startGame;