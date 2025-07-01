### Hexlet tests and linter status:
[![Actions Status](https://github.com/Dsx1029/fullstack-javascript-project-98/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Dsx1029/fullstack-javascript-project-98/actions)

[![Maintainability](https://qlty.sh/badges/ee0b5658-7939-4a69-a72b-f1da1bd070e6/maintainability.svg)](https://qlty.sh/gh/Dsx1029/projects/fullstack-javascript-project-98) 

Brain Games
¡Bienvenido a Brain Games! Esta es una colección de pequeños juegos de consola diseñados para mejorar tus habilidades lógicas y matemáticas de una manera divertida.

Descripción del Proyecto
Brain Games es un conjunto de cinco juegos interactivos de consola:

Brain Even: Determina si un número es par o impar.

Brain Calc: Resuelve operaciones matemáticas básicas.

Brain GCD: Encuentra el máximo común divisor de dos números.

Brain Progression: Identifica el número que falta en una progresión aritmética.

Brain Prime: Determina si un número dado es primo o no.

Cada juego consta de 3 rondas. Si respondes correctamente todas las rondas, ¡ganas! Si te equivocas en alguna pregunta, el juego termina y te invita a intentarlo de nuevo.

Requisitos Mínimos
Para ejecutar este proyecto, necesitas tener instalado:

Node.js (versión 18.18.2 o superior recomendada)

npm (Node Package Manager)

Instalación y Ejecución
Sigue estos pasos para instalar y ejecutar los juegos en tu máquina local:

Clona el repositorio:

Bash

git clone https://github.com/Dsx1029/fullstack-javascript-project-98.git
Navega al directorio del proyecto:

Bash

cd fullstack-javascript-project-98
Instala las dependencias:

Bash

npm install
Enlaza los ejecutables de los juegos (para poder ejecutarlos globalmente):

Bash

npm link
Ejecutar los juegos:
Una vez instalados y enlazados, puedes ejecutar cada juego usando sus respectivos comandos en tu terminal:

Juego Principal (menú): brain-games

¿Es par?: brain-even

Calculadora: brain-calc

Máximo Común Divisor (GCD): brain-gcd

Progresión: brain-progression

¿Es Primo?: brain-prime

Demostraciones (Asciinema)
Aquí puedes ver el flujo de cada juego, mostrando tanto un caso exitoso como uno fallido:

Brain Even:
https://asciinema.org/a/bKlil8bF0YdhfbwqeAJK4Y4Q6

Brain Calc:
https://asciinema.org/a/exoLPM7MK7IpGS9AuSTQ7ITGA

Brain GCD:
https://asciinema.org/a/QGlzTBxQ4WTwq1wFjKXHLgHLm

Brain Progression:
https://asciinema.org/a/aFz3qcjBVRjbY6if66wHDEOvq

Brain Prime:
https://asciinema.org/a/GEOfKWsOjB6c8Kocm7pFzu8A9

Estado de Pruebas y Estándares de Codificación
Hexlet tests and linter status:
Calidad y Mantenibilidad del Código:
Estructura del Código y Principios de Diseño
El proyecto está diseñado siguiendo las mejores prácticas para un código limpio y mantenible:

Funcional y Modular: El código está organizado en funciones puras y se evita el uso de clases.

Sin "Números Mágicos": Se evitan valores numéricos sin un significado claro directamente en el código.

Ejecución Segura: No hay código que se ejecute a nivel de módulo; todas las funciones solo se invocan desde sus respectivos archivos ejecutables.

Lógica Separada: La lógica general del juego (manejo de rondas, interacciones de usuario) reside en src/index.js.

Módulos de Juego Específicos: Cada juego tiene su lógica encapsulada en un módulo dedicado dentro del directorio src/games/.

Estándares de Codificación: El código cumple con los estándares de linting, asegurando consistencia y legibilidad.

Contacto
Si tienes alguna pregunta o sugerencia sobre el proyecto, no dudes en contactarme.