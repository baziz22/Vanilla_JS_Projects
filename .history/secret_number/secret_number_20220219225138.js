function startGame() {
  rules.style.display = 'none';
  guess_btn.disabled = true;
  userInput.disabled = true;
  begin_btn.addEventListener('click', () => {
    begin_btn.disabled = true;
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
    maxScore = 20;
    score.textContent = maxScore;
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
const displayMessage = message => {
  document.getElementById('message').textContent = message;
};
const rule = (between, attrValue) => {
  rules.style.display = 'block';
  document.getElementById('between').textContent = between;
  document.getElementById('guess-box').setAttribute('max', attrValue);
};

let begin_btn = document.getElementById('reset');
begin_btn.textContent = 'Start';
let secretNumber;
let secretNumberBox = document.getElementById('the-secret');

let level = document.getElementById('level');
let userInput = document.getElementById('guess-box');
let guess_btn = document.getElementById('guess-btn');
// assign max score
let maxScore;
let rules = document.getElementById('rules');
const score = document.getElementById('max-score');

/* High Score */
let highScoreCalc = 0;
let highScore = document.getElementById('high-score');
highScore.textContent = highScoreCalc;

guess_btn.addEventListener('click', gameProcessing);
function gameProcessing() {
  console.log(userInput.value);
  if (userInput.value === secretNumber) {
    displayMessage('You made it!');
    if (ScoreCalc > maxScore) {
      highScoreCalc = highScore.textContent;
      highScore.textContent = highScoreCalc;
    } else if (highScoreCalc < maxScore) {
      highScoreCalc = maxScore;
      highScore.textContent = highScoreCalc;
    }
    console.log('h-s: ' + highScoreCalc);
    return endGame();
  }
  validateBox();
}
function wrongAnswer() {
  maxScore--;
  if (userInput.value > secretNumber) {
    displayMessage('too high');
    if (maxScore === 0) {
      displayMessage('You Lost!');
      endGame();
    }
  } else if (userInput.value < secretNumber) {
    displayMessage('too low');
    if (maxScore === 0) {
      displayMessage('You Lost!');
      endGame();
    }
  }
  score.textContent = maxScore;
}
function endGame() {
  begin_btn.disabled = false;
  guess_btn.disabled = true;
  userInput.value = null;
  userInput.disabled = true;
  level.disabled = false;
  secretNumberBox.textContent = secretNumber;
}

startGame();

// TODO