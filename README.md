# Basic Paddle Game

This project is a simple HTML5 canvas game where a player controls a paddle to keep a ball bouncing. The objective is to prevent the ball from falling off the screen by moving the paddle left or right using the arrow keys. Each time the ball hits the paddle, the player scores a point. The game features randomized initial ball positions and velocities to add variability and challenge.

## Features

- **Simple Controls**: Use the left and right arrow keys to move the paddle.
- **Score Tracking**: The score increases each time the ball successfully bounces off the paddle.
- **Randomized Ball Movement**: The ball starts at a random position and moves in a random direction to keep the game engaging.
- **Responsive Canvas**: The game canvas adapts to different screen sizes while maintaining aspect ratio.

## How to Play

1. Clone or download the repository.
2. Open the `index.html` file in your web browser.
3. Use the left and right arrow keys to move the paddle and keep the ball bouncing.
4. Try to achieve the highest score possible by keeping the ball from falling off the bottom of the screen.

## Code Overview

The game is implemented using JavaScript and the HTML5 Canvas API. The main game loop handles rendering the paddle and ball, updating their positions, and checking for collisions. User input is captured via keyboard events to control the paddle.

### Key Components

- **Canvas Setup**: The canvas element is dynamically sized and the drawing context is obtained for rendering.
- **Paddle Movement**: Event listeners for keyboard input allow the player to move the paddle left and right.
- **Ball Physics**: The ball's position and velocity are updated in each frame, with collision detection to bounce off the walls and the paddle.
- **Score Display**: The current score is displayed on the canvas.

## Installation

To run the game locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/basic-paddle-game.git
    ```
2. Navigate to the project directory:
    ```bash
    cd basic-paddle-game
    ```
3. Open the `index.html` file in your preferred web browser:
    ```bash
    open index.html
    ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please feel free to open an issue or submit a pull request.

