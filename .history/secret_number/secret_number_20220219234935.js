'use strict';
let secretNumber;
let score = 20;
let high_score = 0;
let start_btn = document.getElementById('start-btn');
let secretNumberBox = document.getElementById('the-secret');
let level = document.getElementById('level');
let guess_btn = document.getElementById('guess-btn');
let rules = document.getElementById('rules');
let userInput = document.getElementById('guess-box');
const displayMessage = message => {
  document.getElementById('message').textContent = message;
};

function startGame() {
  rules.style.display = 'none';
  guess_btn.disabled = true;
  userInput.disabled = true;
  start_btn.addEventListener('click', () => {
    start_btn.disabled = true;
    guess_btn.disabled = false;
    userInput.disabled = false;
    console.log(level.value);
    if (level.value === 'beginner') {
      secretNumber = Math.ceil(Math.random() * 10);
      rule('1 - 10', 10);
    } else if (level.value === 'medium') {
      secretNumber = Math.ceil(Math.random() * 50);
      rule('1 - 50', 50);
    } else {
      secretNumber = Math.ceil(Math.random() * 100);
      rule('1 - 100', 100);
    }
    console.log(secretNumber);
    displayMessage('Start Guessing!!!');
    level.disabled = true;
  });
}
function validateBox() {
  if (level.value === 'beginner') {
    if (userInput.value > 10 || userInput.value < 1) {
      displayMessage('Please See Beginner Rules ');
    } else {
      wrongAnswer();
    }
  }
  if (level.value === 'medium') {
    if (userInput.value > 50 || userInput.value < 1) {
      displayMessage('Please See Beginner Rules ');
    } else {
      wrongAnswer();
    }
  }
  if (level.value === 'hard') {
    if (userInput.value > 100 || userInput.value < 1) {
      displayMessage('Please See Beginner Rules ');
    } else {
      wrongAnswer();
    }
  }
}

const rule = (between, attrValue) => {
  rules.style.display = 'block';
  document.getElementById('between').textContent = between;
  document.getElementById('guess-box').setAttribute('max', attrValue);
};

guess_btn.addEventListener('click', gameProcessing);
function gameProcessing() {
  console.log(Number(userInput.value), typeof userInput.value);
  if (userInput.value == secretNumber) {
    displayMessage('You made it!');
    if (high_score > score) {
    }
    console.log('h-s: ' + high_score);
    return endGame();
  }
  validateBox();
}
function wrongAnswer() {
  score--;
  if (userInput > secretNumber) {
    displayMessage('too high');
    if (score === 0) {
      displayMessage('You Lost!');
      endGame();
    }
  } else if (userInput < secretNumber) {
    displayMessage('too low');
    if (score === 0) {
      displayMessage('You Lost!');
      endGame();
    }
  }
}
function endGame() {
  start_btn.disabled = false;
  guess_btn.disabled = true;
  userInput = null;
  userInput.disabled = true;
  level.disabled = false;
  secretNumberBox.textContent = secretNumber;
}

startGame();

// TODO
