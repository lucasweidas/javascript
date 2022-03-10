// Nested Object Destructuring
const object = {
  name: 'Maria',
  age: 60,
  child: {
    name: 'Julia',
    age: 40,
    child: {
      name: 'Lucas',
      age: 20,
      child: {
        name: 'Carol',
        age: 2,
        child: {},
      },
    },
  },
};

printObject(object);

function printObject({ name = 'Not found', age = 0, child }) {
  console.log(`First Name: ${name} | Age: ${age}`);
  if (child) printObject(child);
}

// Nested Array Destructuring
const array = [['Banana', 'Berry', 'Grape'], [11, 22, 33], { name: 'Audrey', age: 30 }, 110, 'Random String'];

printArray(array);

function printArray([[, fruit], [, , , number = 0], { name, age }, ...rest]) {
  console.log(fruit);
  console.log(number);
  console.log(name, age);
  console.log(rest);
}
