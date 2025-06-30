// src/index.js

import readlineSync from 'readline-sync'; // Asegúrate de tener instalado 'readline-sync' (npm install readline-sync)

const ROUNDS_COUNT = 3;

const runGame = (description, generateRound) => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log(description);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = generateRound();
    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ');

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return; // Termina el juego si la respuesta es incorrecta
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runGame;