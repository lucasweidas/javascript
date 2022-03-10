// Another Array destructuring examples
function sumAndMultiply(a, b) {
  return [a + b, a * b];
}

// const [sum, multiply] = sumAndMultiply(2, 4);
// console.log(sum, multiply);

/********************************/

// You can also set a "default" value for a destructuring variable.
// If the function returns a third value, the "default" value is not used.

const [sum, multiply, division = 'No division'] = sumAndMultiply(3, 5);
console.log(sum, multiply, division);
