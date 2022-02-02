// Chain methods
// You can also use chained methods in JavaScript. This means that the return from the first method will be used in the second method, and the return from the second method will be used in the third method, and so on.

const users = [
    { firstName: 'Lucas', lastName: 'Ferreira', age: 22 },
    { firstName: 'Maria', lastName: 'Pereira', age: 26 },
    { firstName: 'Marcos', lastName: 'Rodrigues', age: 22 },
    { firstName: 'Luiza', lastName: 'Mel', age: 35 },
];

// All users under 25 years old
const under25 = users.filter(user => user.age < 25).map(user => user.firstName);
console.log(under25);
