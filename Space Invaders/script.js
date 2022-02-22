const grid = document.querySelector('.grid');
shooterShipLocation = 204;
const width = 15;
let direction = 1;
let aliensId;
let directionRight = true;
const displayMessage = message => {
  document.querySelector('#messages').textContent = message;
};
let score = 0;
let game_over = false;
let removeKilledAlien = [];
for (let i = 0; i < 225; i++) {
  const net = document.createElement('div');
  grid.appendChild(net);
}

const squares = Array.from(document.querySelectorAll('.grid div'));

// alien invaders
const invaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];

// Draw the objects to the scene
function draw() {
  for (let i = 0; i < invaders.length; i++) {
    if (!removeKilledAlien.includes(i)) {
      squares[invaders[i]].classList.add('invader');
    }
  }
}
draw();
function remove() {
  for (let i = 0; i < invaders.length; i++) {
    squares[invaders[i]].classList.remove('invader');
  }
}
// Create shooter ship
squares[shooterShipLocation].classList.add('shooter');
// move shooter by event
function moveSpaceShip(e) {
  // Remove class 'shooter' to add it in a different place.
  squares[shooterShipLocation].classList.remove('shooter');
  // listen to keyboard event
  switch (e.key) {
    case 'ArrowLeft':
      // check the left edge
      if (shooterShipLocation % width !== 0) {
        shooterShipLocation -= 1;
      }
      break;
    case 'ArrowRight':
      // check the right edge
      if (shooterShipLocation % width < width - 1) {
        shooterShipLocation += 1;
      }
  }
  // Draw the space ship after it had been deleted
  squares[shooterShipLocation].classList.add('shooter');
}
document.addEventListener('keydown', moveSpaceShip);

function moveInvaders() {
  const leftEdge = invaders[0] % width === 0;
  const rightEdge = invaders[invaders.length - 1] % width === width - 1;
  remove();

  if (rightEdge && directionRight) {
    for (let i = 0; i < invaders.length; i++) {
      invaders[i] += width + 1;
      direction = -1; // move invaders to left direction
      directionRight = false;
    }
  }
  if (leftEdge && !directionRight) {
    for (let i = 0; i < invaders.length; i++) {
      invaders[i] += width - 1;
      direction = 1; // move invaders to right direction
      directionRight = true;
    }
  }
  for (let i = 0; i < invaders.length; i++) {
    invaders[i] += direction;
  }
  draw();
  if (squares[shooterShipLocation].classList.contains('invader', 'shooter')) {
    displayMessage('Game Over!');
    endGame();
  }
  for (let i = 0; i < invaders.length; i++) {
    if (invaders[i] > squares.length) {
      endGame();
    }
  }
}

aliensId = setInterval(moveInvaders, 2000);

function shoot(e) {
  let laserId;
  let laserLocation = shooterShipLocation;
  // move the bullet to the alien direction ⬆️
  function moveLaser() {
    // remove any laser location before you draw a laser
    squares[laserLocation].classList.remove('laser');
    // move it up
    laserLocation -= width;
    // redraw the laser
    squares[laserLocation].classList.add('laser');
    if (laserLocation <= 14) {
      squares[laserLocation].classList.remove('laser');
      laserLocation = shooterShipLocation;
      clearInterval(laserId);
    }

    if (squares[laserLocation].classList.contains('invader')) {
      squares[laserLocation].classList.remove('laser');
      squares[laserLocation].classList.remove('invader');
      squares[laserLocation].classList.add('boom');

      setTimeout(() => {
        squares[laserLocation].classList.remove('boom');
        ++score;
        document.querySelector('#score').textContent = score;
      }, 200);

      clearInterval(laserId);

      const alienGotKilled = invaders.indexOf(laserLocation);
      removeKilledAlien.push(alienGotKilled);
      if (removeKilledAlien.length === invaders.length) {
        youWin();
      }
    }
  }
  switch (e.key) {
    case 'ArrowUp':
      laserId = setInterval(moveLaser, 200);
  }
}
function endGame() {
  displayMessage('Game Over!');
  clearInterval(aliensId);
  game_over = true;
}
if (!game_over) {
  document.addEventListener('keydown', shoot);
}
function youWin() {
  displayMessage('You Win!');
  clearInterval(aliensId);
  game_over = true;
}
