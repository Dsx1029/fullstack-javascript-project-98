import readlineSync from 'readline-sync';

const runGame = (game, userName) => {
  console.log(game.DESCRIPTION); // La descripción del juego específico

  const WINNING_STREAK = 3;
  let correctAnswersInRow = 0;

  while (correctAnswersInRow < WINNING_STREAK) {
    const [question, correctAnswer] = game.generateRound();
    console.log(`Pregunta: ${question}`);
    const userAnswer = readlineSync.question('Tu respuesta: ').toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('¡Correcto!');
      correctAnswersInRow++;
    } else {
      console.log(`'${userAnswer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      correctAnswersInRow = 0; // Reiniciar la racha si la respuesta es incorrecta
    }
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default runGame;