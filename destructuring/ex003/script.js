// Object Destructuring Examples

const personOne = {
  name: 'Julia',
  age: 28,
  pet: 'Dog',
  parents: {
    mother: 'Maria',
    father: 'Bruno',
  },
};

const personTwo = {
  name: 'Lindsey',
  age: 20,
  // parents: {
  //   mother: 'Kendra',
  //   father: 'John',
  // },
};

// const { name, age } = personOne;
// console.log(name, age);

/********************************/

// You can also change the variable name, to a different name than the name of the property on the object.

// const { name: firstName, age } = personTwo;
// console.log(firstName, age);

/********************************/

// You can also set a "default" value in a Object Destructuring

// const { name: firstName, age, pet = 'do not have' } = personTwo;
// console.log(firstName, age, pet);

/********************************/

// You can also use the Spread Operator, to get all the other properties

// const { name: firstName, ...rest} = personOne;
// console.log(firstName, rest);

/********************************/

// You can also Destructuring "Nested" Objects

// const { name: firstName, parents: { mother } } = personOne;
// console.log(firstName, mother);

/********************************/

// You can also combine Objects with the Spread Operator and Destructuring.
// The second Object Spread Operator, will override all the same properties in the first Object Spread Operator.

// const personThree = { ...personOne, ...personTwo };
// console.log(personThree);

/********************************/

// One of the most useful things you can do, is to destructuring within a function

function printUser({ name, age, pet = 'do not have' }) {
  console.log(`Name: ${name} | Age: ${age} | Pet: ${pet}`);
}

printUser(personOne);
