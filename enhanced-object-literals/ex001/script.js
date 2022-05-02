// Enhanced Object Literals

/* Com esse método, você não precisa mais utilizar o "key: value" pairs, caso queira criar uma propriedade em um objeto literal, com base em uma variável. */

const name = 'Black';
const breed = 'Cat';
const age = 2;

const pet = {
  name,
  breed,
  age,
  printPetInfos() {
    console.log(`The pet is a ${this.breed}, with name of ${this.name} and is ${this.age} years old.`);
  },
};

console.log(pet);

pet.printPetInfos();

/**********************************************************/
// Computed Properties

/* É utilizada para definir o nome de uma propriedade em um objeto literal, com base no valor de uma variável ou propriedade. */

const model = 'Tesla X';
const color = 'Red';
const type = 'Eletric';

const car = {
  model,
  color,
  type,
  [type]: true, // Computed Property
};

console.log(car);
