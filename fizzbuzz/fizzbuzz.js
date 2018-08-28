const output = fizzBuzz(15);
console.log(output);

function fizzBuzz(input) {
  if (typeof input !== 'number') return NaN;
  else if (input % 5 === 0 && input % 3 === 0) return 'FizzBuzz';
  else if (input % 3 === 0) return 'Fizz';
  else if (input % 5 === 0) return 'Buzz';
  else return input;
}
