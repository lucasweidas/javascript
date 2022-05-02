const firstName = ['Lucas', 'Maria', 'Fernanda'];
const lastName = ['Ferreira', 'Queiros', 'Rodrigues'];

const names = [...firstName, ...lastName];

const [name1, name2, ...rest] = ['Lucas', 'Fernanda', 'Maria', 'Ferreira'];

const [name3 = 'Marcos'] = [];

console.log(name1, name2, name3, rest);

/**********************************************/

const person = {
  name: 'Lucas',
  age: 22,
};

const personWithPhoneNumber = { ...person, phoneNumber: 2314124141 };

const { name: personName } = person;

console.log(person, personWithPhoneNumber, personName);

/**********************************************/

const cars = [
  {
    model: 'Tesla X',
    color: 'White',
    price: 85000.0,
  },
  {
    model: 'Ferrari',
    color: 'Red',
    price: 250000.0,
  },
  {
    model: 'Bugatti',
    color: 'Blue',
    price: 400000.0,
  },
];

cars.forEach(car => printCars(car));

function printCars({ model, color, price }) {
  console.log(`Model: ${model} | Color: ${color} | Price: US$${price}`);
}
