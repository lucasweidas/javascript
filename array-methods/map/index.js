// "map" function
// This Higher-Order function will execute a callback function for each element of the array, and the result of each callback will be stored in a new array. After all elements have been changed by the callback, the new array will be returned.

const arr = [5, 2, 6, 9, 4, 7];

// Binary number of all values
function binary(value) {
    return value.toString(2);
}
const output = arr.map(binary);

// Double all values
const output2 = arr.map(value => value * 2);

console.log(output, output2);
