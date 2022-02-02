// More examples using map, filter and reduce

const users = [
    { firstName: 'Lucas', lastName: 'Ferreira', age: 22 },
    { firstName: 'Maria', lastName: 'Pereira', age: 26 },
    { firstName: 'Marcos', lastName: 'Rodrigues', age: 22 },
    { firstName: 'Luiza', lastName: 'Mel', age: 35 },
];

// List of full names
const fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
// console.log(fullNames);

// Same age
const sameAge = users.reduce((same, user) => {
    if (same[user.age]) {
        same[user.age] += 1;
    } else {
        same[user.age] = 1;
    }
    return same;
}, {});
// console.log(sameAge);

// Age under 30
const under30 = users.reduce((under, user) => {
    if (user.age < 30) {
        under.push(user.firstName);
    }
    return under;
}, []);
console.log(under30);
