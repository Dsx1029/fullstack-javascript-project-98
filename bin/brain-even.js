#!/usr/bin/env node
import runGame from '../src/index.js'; // Importar el motor del juego
import evenGame from '../src/games/even.js'; // Importar la lógica específica del juego

runGame(evenGame, userName); // Luego ejecutar el juego con el nombre obtenido