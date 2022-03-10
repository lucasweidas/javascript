// Array destructuring examples
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

// Simple destructuring of a Array.

// const [a, b, c] = alphabet;
// console.log(a, b, c);

/********************************/

// If you don't need an value between other values, you just need to add a ",".
// This "comma" is to especify to JavaScript just skip this value.

// const [a, , c] = alphabet;
// console.log(a, c);

/********************************/

// But what if we need the rest of the values?
// To do this, you need to use the Spread Operator "...".

// const [a, , c, ...rest] = alphabet;
// console.log(a, c, rest);

/********************************/

// Another thing you can do with Spread Operators, is to combine multiple Arrays.
// You can also do this with the "concat" method!

const newArray = [...alphabet, ...numbers];
const newArray2 = alphabet.concat(numbers);

console.log(newArray);
console.log(newArray2);
