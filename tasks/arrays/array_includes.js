const generateBtn = document.querySelector('#generate-btn');
const submitBtn = document.querySelector('#submit-btn');
const userNumberField = document.querySelector('#user-number');
const arrayLengthField = document.querySelector('#array-length');
const output = document.querySelector('#generated-array');
let array = [];

generateBtn.onclick = () => {
  arrayLength = arrayLengthField.value;
  for (let i = 0; i < arrayLength; i++) {
    let number = Math.round(Math.random() * 99);
    array.push(number);
  }
  console.log(array);
  printMessage('The array was generated', 'green');
  return array;
}

submitBtn.onclick = () => {
  let result;
  let userNumber = parseInt(userNumberField.value);
  let formattedArray = array.join(', ');

  negativeResult = `No, number <b>${userNumber}</b> is not in the array. <b>Try again</b>`;

  positiveResult = `Yes, number <b>${userNumber} < /b> is part of the array <br> [${formattedArray}]`;



  result = array.includes(userNumber) ? positiveResult : negativeResult;
  color = result === positiveResult ? 'green' : 'red';
  console.log(positiveResult);

  printMessage(result, color);
}

function printMessage(message, color) {
  output.innerHTML = message;
  output.style.color = color;
}