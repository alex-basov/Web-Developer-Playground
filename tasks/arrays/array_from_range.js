const minNumInput = document.querySelector('#min-number');
const maxNumInput = document.querySelector('#max-number');
const submitBtn = document.querySelector('#submit-button');
const rangeOutput = document.querySelector('#resulting-array');

submitBtn.onclick = () => {
  let min = minNumInput.value;
  let max = maxNumInput.value;

  let array = arrayFromRange(min, max);

  showResult(array);
}

function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++)
    output.push(i)
  return output.join(", ");

}


function showResult(content) {
  rangeOutput.innerHTML = content;
}