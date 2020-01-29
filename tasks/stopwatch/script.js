const startButton = document.querySelector('[data-action="start"');
const stopButton = document.querySelector('[data-action="stop"');
const resetButton = document.querySelector('[data-action="reset"');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
let timerTime = 0;
let isRunning = false;
let interval;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);


function startTimer() {
  if (isRunning) return;

  isRunning = true;
  interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
  if (!isRunning) return;

  isRunning = false;
  clearInterval(interval);
}

function resetTimer() {
  stopTimer();

  timerTime = 0;
  minutes.innerText = '00';
  seconds.innerText = '00';
}

function incrementTimer() {
  timerTime++;

  const numberOfMinutes = Math.floor(timerTime / 60);
  const numberOfSeconds = timerTime % 60;


  console.log(numberOfMinutes, numberOfSeconds);
  minutes.innerText = pad(numberOfMinutes);
  seconds.innerText = pad(numberOfSeconds);
}

function pad(number) {
  return (number < 10) ? '0' + number : number;
}

// TODO:
//  * Add milliseconds
//  * Change text on start button to 'Continue' if stopped
//  * Add multiple timers
//  * redesign
