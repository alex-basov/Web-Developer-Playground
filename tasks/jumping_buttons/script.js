// grab all you need
const jumpingButtons = document.querySelectorAll('.btn-jumping');

//set random background to buttons

jumpingButtons.forEach(button => {
  button.style.backgroundColor = setRandomColor(0, 200);
});

function setRandomColor(min, max) {
  const red = Math.floor(Math.random() * (max - min + 1)) + min;
  const green = Math.floor(Math.random() * (max - min + 1)) + min;
  const blue = Math.floor(Math.random() * (max - min + 1)) + min;

  return `rgb(${red}, ${green}, ${blue})`;
}

// define our functions
function jumpAway() {
  // get a random number for the left offset
  const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
  // random number for the top offset
  const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);

  // apply these numbers to the button
  this.style.top = offsetTop + 'px';
  this.style.left = offsetLeft + 'px';
}

// add event listeners
jumpingButtons.forEach(button =>
  button.addEventListener('mouseenter', jumpAway)
);
