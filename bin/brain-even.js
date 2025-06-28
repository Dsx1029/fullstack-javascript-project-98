#!/usr/bin/env node
import greetUser from '../src/cli.js'; // Importar la función de bienvenida
import runGame from '../src/index.js'; // Importar el motor del juego
import evenGame from '../src/games/even.js'; // Importar la lógica específica del juego

const userName = greetUser(); // Obtener el nombre del usuario primero
runGame(evenGame, userName); // Luego ejecutar el juego con el nombre obtenido