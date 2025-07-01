# 🚀 Brain Games

¡Bienvenido a **Brain Games**! Esta es una colección de pequeños juegos de consola diseñados para **mejorar tus habilidades lógicas y matemáticas** de una manera divertida e interactiva. Sumérgete en el desafío y entrena tu mente con cada partida.

---

## 🎮 Juegos Incluidos

Brain Games te ofrece una serie de desafíos rápidos y adictivos para mantenerte entretenido y agudizar tu ingenio:

* **Brain Even**: ¿Es el número par o impar? Demuestra tu rapidez mental al clasificar números.
* **Brain Calc**: Resuelve operaciones matemáticas básicas. ¡Pon a prueba tu agilidad numérica y precisión!
* **Brain GCD**: Encuentra el **Máximo Común Divisor (MCD)** de dos números. Un clásico para ejercitar la lógica y la factorización.
* **Brain Progression**: Descubre el número que falta en una progresión aritmética. ¡La observación es clave para completar la secuencia!
* **Brain Prime**: ¿Es el número dado **primo** o no? Un reto para los amantes de las matemáticas y la teoría de números.

Cada juego consta de **3 rondas**. Si respondes correctamente las 3, ¡ganas el juego! Si te equivocas en alguna pregunta, el juego termina y te invita a intentarlo de nuevo.

---

## 🛠️ Requisitos del Sistema

Para ejecutar estos juegos en tu máquina local, solo necesitas tener instalado:

* **Node.js**: Versión **18.18.2** o superior recomendada.
* **npm**: El gestor de paquetes de Node.js, que se instala automáticamente con Node.js.

---

## 🚀 Instalación y Ejecución

Sigue estos sencillos pasos para clonar el repositorio, instalar las dependencias y poner en marcha los juegos en tu entorno local:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/Dsx1029/fullstack-javascript-project-98.git](https://github.com/Dsx1029/fullstack-javascript-project-98.git)
    ```

2.  **Navega al directorio del proyecto:**
    ```bash
    cd fullstack-javascript-project-98
    ```

3.  **Instala las dependencias:**
    ```bash
    npm install
    ```

4.  **Enlaza los ejecutables de los juegos:**
    Este paso es crucial para que puedas ejecutar los juegos directamente desde cualquier parte de tu terminal.
    ```bash
    npm link
    ```

### ¡A Jugar! 🕹️

Una vez completada la instalación y el enlace, puedes iniciar cada juego utilizando su comando específico en tu terminal:

* **Menú principal de Brain Games:** `brain-games`
* **¿Es par?:** `brain-even`
* **Calculadora:** `brain-calc`
* **Máximo Común Divisor (GCD):** `brain-gcd`
* **Progresión:** `brain-progression`
* **¿Es Primo?:** `brain-prime`

---

## 👀 Demostraciones del Juego (Asciinema)

A continuación, puedes observar el flujo de cada juego a través de grabaciones de Asciinema. Cada enlace muestra un **escenario de victoria** y un **escenario de derrota**, para que puedas ver el comportamiento completo del juego.

* **Brain Even:**
    [https://asciinema.org/a/bKlil8bF0YdhfbwqeAJK4Y4Q6](https://asciinema.org/a/bKlil8bF0YdhfbwqeAJK4Y4Q6)

* **Brain Calc:**
    [https://asciinema.org/a/exoLPM7MK7IpGS9AuSTQ7ITGA](https://asciinema.org/a/exoLPM7MK7IpGS9AuSTQ7ITGA)

* **Brain GCD:**
    [https://asciinema.org/a/QGlzTBxQ4WTwq1wFjKXHLgHLm](https://asciinema.org/a/QGlzTBxQ4WTwq1wFjKXHLgHLm)

* **Brain Progression:**
    [https://asciinema.org/a/aFz3qcjBVRjbY6if66wHDEOvq](https://asciinema.org/a/aFz3qcjBVRjbY6if66wHDEOvq)

* **Brain Prime:**
    [https://asciinema.org/a/GEOfKWsOjB6c8Kocm7pFzu8A9](https://asciinema.org/a/GEOfKWsOjB6c8Kocm7pFzu8A9)

---

## ✅ Estado del Proyecto

Estas insignias te permiten verificar el estado actual de las pruebas automatizadas y la calidad del código, asegurando que el proyecto cumple con los estándares establecidos por Hexlet.

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Dsx1029/fullstack-javascript-project-98/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Dsx1029/fullstack-javascript-project-98/actions)

### Calidad y Mantenibilidad del Código:
[![Maintainability](https://qlty.sh/badges/ee0b5658-7939-4a69-a72b-f1da1bd070e6/maintainability.svg)](https://qlty.sh/gh/Dsx1029/projects/fullstack-javascript-project-98)

---

## 🏗️ Estructura del Código y Principios de Diseño

El proyecto ha sido diseñado y desarrollado siguiendo principios de **código limpio, modularidad** y **mantenibilidad**, pilares fundamentales en el desarrollo de software moderno:

* **Enfoque Funcional:** El código se basa en funciones puras y se evita el uso de clases, lo que simplifica la lógica y promueve la reutilización.
* **Sin "Números Mágicos":** Todos los valores numéricos importantes tienen un significado claro o están definidos explícitamente como constantes.
* **Ejecución Controlada:** No hay código que se ejecute a nivel de módulo; todas las funciones se invocan de forma explícita desde sus respectivos archivos ejecutables.
* **Modularidad Clara:**
    * La **lógica general** del juego (manejo de rondas, interacción con el usuario y la salida de consola) se encuentra centralizada en `src/index.js`.
    * La lógica **específica de cada juego** está encapsulada de forma independiente en módulos dedicados, ubicados dentro del directorio `src/games/`.
* **Estándares de Codificación:** El código cumple rigurosamente con las reglas de linting, lo que garantiza consistencia, legibilidad y reduce la probabilidad de errores.

---

## ✉️ Contacto

Si tienes alguna pregunta, comentario o sugerencia sobre este proyecto, no dudes en contactarme a través de mi perfil de GitHub.

---
