let player1Button = document.querySelector('#player1');
let player2Button = document.querySelector('#player2');
let player1Display = document.querySelector('#player1Display');
let player2Display = document.querySelector('#player2Display');
let resetButton = document.getElementById('reset');
let numberInput = document.querySelector('input');
let paragraph = document.querySelector('p');
let winningScoreDisplay = document.querySelector('p span');
let player1Score = 0;
let player2Score = 0;
let gameOver = false;
let winningScore = 5;

player1Button.addEventListener('click', function() {
  if (!gameOver) {
    player1Score++;

    if (player1Score === winningScore) {
      player1Display.classList.add('winner');
      gameOver = true;
    }
    player1Display.textContent = player1Score;
  }
});

player2Button.addEventListener('click', function() {
  if (!gameOver) {
    player2Score++;
    if (player2Score === winningScore) {
      player2Display.classList.add('winner');
      gameOver = true;
    }
    player2Display.textContent = player2Score;
  }
});

resetButton.addEventListener('click', reset);

numberInput.addEventListener('change', function() {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});

function reset() {
  player1Score = 0;
  player2Score = 0;
  player1Display.textContent = 0;
  player2Display.textContent = 0;
  player1Display.classList.remove('winner');
  player2Display.classList.remove('winner');
  gameOver = false;
}
