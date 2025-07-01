#!/usr/bin/env node
import runGame from '../src/index.js'; // Importa el motor del juego
import evenGame from '../src/games/even.js'; // Importa la lógica específica del juego

// Llama a runGame con la descripción del juego y su función para generar rondas.
// La función 'runGame' (en src/index.js) ahora se encarga de saludar al usuario y obtener su nombre.
runGame(evenGame.description, evenGame.generateRound);