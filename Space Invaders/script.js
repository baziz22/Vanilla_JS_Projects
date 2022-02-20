const grid = document.querySelector(".grid");
shooterShipLocation = 204;
const width = 15;
for (let i = 0; i < 225; i++) {
  const net = document.createElement("div");
  grid.appendChild(net);
}

const squares = Array.from(document.querySelectorAll(".grid div"));

// alien invaders
const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];

// Draw the objects to the scene
function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.add("invader");
  }
}
draw();
// Create shooter ship
squares[shooterShipLocation].classList.add("shooter");
console.log(shooterShipLocation / width);
// move shooter by event
function moveSpaceShip(e) {
  // Remove class 'shooter' to add it in a different place.
  squares[shooterShipLocation].classList.remove("shooter");
  // listen to keyboard event
  switch (e.key) {
    case "ArrowLeft":
      console.log(shooterShipLocation % width);
      // check the left edge
      if (shooterShipLocation % width !== 0) {
        shooterShipLocation -= 1;
      }
      break;
    case "ArrowRight":
      // check the right edge
      console.log(shooterShipLocation % width);
      if (shooterShipLocation % width < width - 1) {
        shooterShipLocation += 1;
      }
  }
  // Draw the space ship after it had been deleted
  squares[shooterShipLocation].classList.add("shooter");
}
document.addEventListener("keydown", moveSpaceShip);
