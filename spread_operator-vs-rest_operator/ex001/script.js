// Spread Operator
/* A sintaxe de espalhamento (spread) 'expande' um array ou objeto literal em vários elementos. Pode ser usado em qualquer parte do destructuring. */

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

console.log(arr2);
///////////////////////////////////////////////////////

const obj1 = { lastName: 'Ferreira', age: 22 };
const obj2 = { firstName: 'Lucas', ...obj1, eyes: 'Brown' };

console.log(obj2);
/*****************************************************/

// Rest Operator
/* A sintaxe rest coleta multiplos elementos e 'condensa' eles em um único elemento. Só pode ser usado no final do destructuring. */

function printSomething(a, ...rest) {
  console.log(a, rest);
}

printSomething(2, 3, 5);
///////////////////////////////////////////////////////

const numbers = [1, 2, 3, 4, 5, 6, 7];
const [a, b, , , ...others] = numbers;

console.log(a, b, others);
///////////////////////////////////////////////////////

const person = { name: 'Maria', age: 25, eyes: 'Blue' };
const { name, eyes, ...rest } = person;

console.log(name, eyes, rest);
