// "reduce" function
// This Higher-Order function will execute a callback function for each element of the array. The reduce method can receive two arguments, a callback and an initial value. The initial value will be passed to the first argument (accumulator) of the callback. The callback receives at least two arguments, the accumulator and the current element. The accumulator will store the value after each invocation of the callback, and the accumulator value will be returned upon completion of the reduce.

const arr = [5, 2, 6, 9, 4, 7];

/*----------------------------------------------*/
// What is the Sum of all values inside the "arr"?

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(findSum(arr));

// The argument "0" in the reduce, is the InitialValue of the "previousValue" at the first invocation of the callback.
const output = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
);
console.log(output);

/*----------------------------------------------*/
// What is the Max value inside the "arr"?

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        max = max < arr[i] ? arr[i] : max;
    }
    return max;
}
console.log(findMax(arr));

const output2 = arr.reduce((max, curr) => (max < curr ? curr : max), 0);
console.log(output2);
