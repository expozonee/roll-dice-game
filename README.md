# Dice Game

This is a simple dice game built with React and Vite, where two players take turns rolling dice and accumulating scores. The goal is to reach a preset max score first, but be careful—if both dice show the same number, your score for that turn resets to 0!

## Game Rules

- **Set Max Score**: On the first page, players can set their max score, which determines the score threshold for winning the game.
- **Turns**: Players take turns by clicking the "Roll Dice" button.
  - Each player gets **5 rolls** per turn.
  - After each roll, the total value of both dice is added to the player's score.
  - If both dice show the **same number**, the player's score for that turn resets to **0**.
- **Hold**: Players can click the "Hold" button to keep their score for that turn and pass the turn to the other player.
- **Winning**: The first player to reach the set **max score** wins the game.

## Features

- **Two-player gameplay**: Players alternate turns rolling dice.
- **Dynamic score tracking**: Scores are updated in real-time after each roll.
- **Max score setting**: Players can set a max score before the game starts.
- **Responsive design**: The game works well on both desktop and mobile devices.
- **Turn-based**: Each player has a chance to play with clear visual indicators of whose turn it is.

## Play the Game

You can play the game directly in your browser:

[**Play Dice Game**](https://roll-dice-game-mu.vercel.app/)

## Technologies Used

- **React**: Frontend framework used for building the user interface.
- **Vite**: Next-generation build tool for fast development and bundling.
- **CSS**: Styling for the user interface, ensuring a smooth and responsive experience.
