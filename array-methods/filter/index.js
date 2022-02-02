// "filter" function
// This Higher-Order function will execute a callback function for each element of the array, and only the elements that meet the requirements of the callback logic will be stored in a new array. After all elements have been checked by the callback, the new array will be returned.

const arr = [5, 2, 6, 9, 4, 7];

// All odd values
function isOdd(value) {
    // if equal 0 will return false | if differente of 0 will return true.
    return value % 2;
}

// All even values
function isEven(value) {
    return value % 2 === 0;
}

const output = arr.filter(isOdd); // filter all odd values

const output2 = arr.filter(value => value % 2 === 0); // filter all even values

console.log(output, output2);
