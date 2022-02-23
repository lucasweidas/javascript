// You can only "export default" one thing for JavaScript file. This usually is the class that your file is defining

export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export function printName(user) {
  console.log(`The user name is ${user.name}`);
}

export function printAge(user) {
  console.log(`The user is ${user.age} years old`);
}

// export default User
// export { printName, printAge }

// You can also change the name of an export
export { printAge as printUserAge };

// You can export a module from a module.
export * as c from './car.js';
