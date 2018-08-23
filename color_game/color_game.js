const colors = generateRandomColors(6);
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.getElementById('message');
const pickedColor = pickColor();
const h1 = document.querySelector('h1');

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners to squares
  squares[i].addEventListener('click', function() {
    // grab color of clicked square
    let clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = 'Correct!';
      changeColors(clickedColor);
      h1.style.backgroundColor = pickedColor;
    } else {
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try again';
    }
  });
}

function changeColors(color) {
  //loop through all squares
  for (let i = 0; i < colors.length; i++) {
    //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // make an array
  let array = [];
  // repeat num times
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    array.push(randomColor());
  }
  // return that array
  return array;
}

function randomColor() {
  // pick a 'red' from 0 to 255
  let red = Math.floor(Math.random() * 256);
  // pick a 'green' from 0 to 255
  let green = Math.floor(Math.random() * 256);
  // pick a 'blue' from 0 to 255
  let blue = Math.floor(Math.random() * 256);
  // rgb (red, green, blue);
  return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}
