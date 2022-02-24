// If the module only exports one thing, you don't need to expecify export name.
// Example: module.exports.printName = name => console.log(name);

// const printName = function (name) {
//   console.log(name);
// };
// module.exports = printName;

module.exports = name => console.log(`name: ${name}`);

module.exports = text => console.log(`text: ${text}`);

module.exports = what => console.log(`what: ${what}`);

module.exports.pAge = function printAge(age) {
  console.log(`age: ${age}`);
};
