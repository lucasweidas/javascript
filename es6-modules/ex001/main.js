// When importing a "class", the name doens't need to be the same as in the export file. Like, "User" can be called here as "U".
// When importing a "function", the name needs to be the same, but you can change it using the "as" keyword, followed by the new name.
import U, { printName as printUserName, printUserAge } from './user.js';

const user = new U('Lucas', 22);
printUserName(user);
printUserAge(user);

// If a module have a lot of things that can be imported, you can just do this and all then will be imported. The name after "as" keyword can be any valid variable name.
import * as util from './user.js';

const user2 = new util.default('Juliana', 25);
util.printName(user2);
util.printAge(user2);

// Importing a module, exported from another module
import { c } from './user.js';
const car = new c.default('Tesla Model S', 'White');
c.printCarInfos(car);
