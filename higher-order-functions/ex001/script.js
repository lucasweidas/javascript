// Higher-Order Functions:
// This is when a function takes another function as an argument or returns another function.
// The function passed as an argument to the higher-order function is known as a callback function.
// This is only possible, because functions are First Class Citizens (First Class Function) in JavaScript.

const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
};

const circumference = function (radius) {
    return 2 * Math.PI * radius;
};

const diameter = function (radius) {
    return 2 * radius;
};

// This function is almost identical to the "map" function.
Array.prototype.calculate = function (logic) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i]));
    }
    return output;
};

// "map" function
console.log(radius.map(area));

// "calculate" function
console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
