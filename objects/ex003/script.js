// Valores Primitivos (primitive)
// Quando uma variável recebe um "valor primitivo" de outra variável, isso cria um novo espaço na memória. Com isso, ambas variáveis agora possuem um espaço próprio na memória, que aponta para o seu valor primitivo.

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 70;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// Valores Referência (reference)
// Quando uma variável recebe um "valor referência" de outra variável, isso não cria um novo espaço na memória. Com isso, ambas variáveis agora apontam para o mesmo espaço na memória, o valor referência.

const userOne = { name: 'Mel', age: 20 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 30;
console.log(userOne, userTwo);