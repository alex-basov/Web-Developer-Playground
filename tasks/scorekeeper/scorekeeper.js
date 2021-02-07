//
// Score-keeping app
//

console.clear()

// Players data
function Player(name) {
  this.name = name;
  this.score = 0;
}

const player1 = new Player('Bill');
const player2 = new Player('Jennifer');

// DOM constants
let numberInput = document.querySelector('#max-score');
let resetButton = document.getElementById('reset');
let gameResult = document.querySelector('#result');
let player1ScoreDisplay = document.querySelector('#player1Display');
let player2ScoreDisplay = document.querySelector('#player2Display');
let winningScoreDisplay = document.querySelector('#info span');
let player1Button = document.querySelector('#player1');
let player2Button = document.querySelector('#player2');

// Game variables
let gameOver = false;
let winningScore = 5;

numberInput.placeholder = 'Type max score';
player1Button.textContent = player1.name;
player2Button.textContent = player2.name;

player1Button.addEventListener('click', function() {
  if (!gameOver) {
    player1.score++;
    if (player1.score === winningScore) {
      player1ScoreDisplay.classList.add('winner');
      gameOver = true;
      gameResult.textContent = `${player1.name} wins`
      gameResult.style.display = 'block';
    }
    player1ScoreDisplay.textContent = player1.score;
  }
});

player2Button.addEventListener('click', function() {
  if (!gameOver) {
    player2.score++;
    if (player2.score === winningScore) {
      player2ScoreDisplay.classList.add('winner');
      gameOver = true;
      gameResult.textContent = `${player2.name} wins`
      gameResult.style.display = 'block';
    }
    player2ScoreDisplay.textContent = player2.score;
  }
});

resetButton.addEventListener('click', reset);

numberInput.addEventListener('change', function() {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});

function reset() {
  player1.score = 0;
  player2.score = 0;
  player1ScoreDisplay.textContent = 0;
  player2ScoreDisplay.textContent = 0;
  player1ScoreDisplay.classList.remove('winner');
  player2ScoreDisplay.classList.remove('winner');
  gameOver = false;
  gameResult.style.display = 'none';
}