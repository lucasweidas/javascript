function addition(num, num2) {
  return num + num2;
}

function subtraction(num, num2) {
  return num - num2;
}

// You can also export the function in its definition line
exports.mult = function multiplication(num, num2) {
  return num * num2;
};

module.exports.division = (num, num2) => num / num2;

// Exporting your function
module.exports.add = addition;

// You can use the shorthand for "module.exports"
exports.sub = subtraction;