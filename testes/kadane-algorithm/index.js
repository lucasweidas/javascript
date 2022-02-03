// Maximum Subarray Sum (Kadane's Algorithm)

const maxSequence = function (arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (sum > max) max = sum;
        if (sum < 0) sum = 0;
    }
    if (max < 0) return 0;
    return max;
};
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// What each loop interation does, considering the array: [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// i = 0 | sum = 0 > 0 + (-2) = -2 > 0
// i = 0 | max = -2

// i = 1 | sum = 0 > 0 + 1 = 1
// i = 1 | max = -2 > 1

// i = 2 | sum = 1 > 1 + (-3) = -2 > 0
// i = 2 | max = 1

// i = 3 | sum = 0 > 0 + 4 = 4
// i = 3 | max = 1 > 4

// i = 4 | sum = 4 > 4 + (-1) = 3
// i = 4 | max = 4

// i = 5 | sum = 3 > 3 + 2 = 5
// i = 5 | max = 4 > 5

// i = 6 | sum = 5 > 5 + 1 = 6
// i = 6 | max = 5 > 6

// i = 7 | sum = 6 > 6 + (-5) = 1
// i = 7 | max = 6

// i = 8 | sum = 1 > 1 + 4 = 5
// i = 8 | max = 6

// return 6;