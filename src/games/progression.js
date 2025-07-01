import getRandomNumber from '../utils.js'; // Asumiendo que tienes una utilidad para números aleatorios
import runGame from '../index.js'; // La función para iniciar el juego principal

const gameDescription = '¿Qué número falta en la progresión?';
const progressionLength = 10; // La progresión tendrá 10 números

const generateRound = () => {
  const start = getRandomNumber(1, 50); // Número de inicio de la progresión (entre 1 y 50)
  const step = getRandomNumber(1, 10); // Diferencia entre números (entre 1 y 10)
  const hiddenIndex = getRandomNumber(0, progressionLength - 1); // Posición del número oculto

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) { // Usar i += 1 en lugar de i++ para consistencia
    progression.push(start + i * step); // Calcula cada número de la progresión
  }

  const correctAnswer = progression[hiddenIndex]; // El número que estará oculto
  progression[hiddenIndex] = '..'; // Oculta el número con ".."

  const question = progression.join(' '); // Convierte el array en un string para la pregunta
  return [question, String(correctAnswer)]; // Devuelve la pregunta y la respuesta correcta (como string)
};

const playProgression = () => {
  runGame(gameDescription, generateRound);
};

export default playProgression;