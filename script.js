 // Get the canvas element and context
 const canvas = document.getElementById('gameCanvas');
 const ctx = canvas.getContext('2d');

 // Set the canvas dimensions
 canvas.width = 640;
 canvas.height = 480;

 // Define some constants
 const GAME_WIDTH = canvas.width;
 const GAME_HEIGHT = canvas.height;
 const PADDLE_WIDTH = 100;
 const PADDLE_HEIGHT = 20;
 const BALL_RADIUS = 10;

 // Define the player paddle properties
 let paddleX = (GAME_WIDTH - PADDLE_WIDTH) / 2;
 let paddleY = GAME_HEIGHT - PADDLE_HEIGHT - 10;
 let paddleVel = 5;

 // Define the ball properties
 let ballX = Math.random() * (GAME_WIDTH - BALL_RADIUS * 2) + BALL_RADIUS;
 let ballY = Math.random() * (GAME_HEIGHT / 2) + BALL_RADIUS;
 let ballVelX = Math.random() * 2 + 1;
 let ballVelY = Math.random() * 2 + 1;

 // Define the score
 let score = 0;

 // Listen for keyboard events to move the paddle
 let rightPressed = false;
 let leftPressed = false;

 document.addEventListener('keydown', (e) => {
     if (e.key === 'Right' || e.key === 'ArrowRight') {
         rightPressed = true;
     } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
         leftPressed = true;
     }
 });

 document.addEventListener('keyup', (e) => {
     if (e.key === 'Right' || e.key === 'ArrowRight') {
         rightPressed = false;
     } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
         leftPressed = false;
     }
 });

 // Main game loop
 function update() {
     // Clear the canvas
     ctx.fillStyle = '#000';
     ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

     // Move the paddle
     if (rightPressed && paddleX < GAME_WIDTH - PADDLE_WIDTH) {
         paddleX += paddleVel;
     } else if (leftPressed && paddleX > 0) {
         paddleX -= paddleVel;
     }

     // Draw the paddle
     ctx.fillStyle = 'red';
     ctx.fillRect(paddleX, paddleY, PADDLE_WIDTH, PADDLE_HEIGHT);

     // Update and draw the ball
     ballX += ballVelX;
     ballY += ballVelY;

     if (ballX > GAME_WIDTH - BALL_RADIUS || ballX < BALL_RADIUS) {
         ballVelX = -ballVelX;
     }
     if (ballY > GAME_HEIGHT - BALL_RADIUS || ballY < BALL_RADIUS) {
         ballVelY = -ballVelY;
     }

     ctx.fillStyle = 'yellow';
     ctx.beginPath();
     ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
     ctx.fill();

     // Collision with paddle
     if (ballX > paddleX && ballX < paddleX + PADDLE_WIDTH &&
         ballY > paddleY - BALL_RADIUS && ballY < paddleY + PADDLE_HEIGHT) {
         score++;
         ballVelY = -ballVelY;
         ballVelX = (Math.random() * 2 + 1) * (ballVelX > 0 ? 1 : -1);
         ballVelY = (Math.random() * 2 + 1) * (ballVelY > 0 ? 1 : -1);
     }

     // Draw the score
     ctx.fillStyle = 'white';
     ctx.font = '24px Arial';
     ctx.textAlign = 'left';
     ctx.textBaseline = 'top';
     ctx.fillText(`Score: ${score}`, 10, 10);

     requestAnimationFrame(update);
 }

 update();