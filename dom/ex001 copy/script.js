// Objeto Literal
// Um objeto pode ter propriedades e métodos (funções).

let user = {
    nome: 'Lucas',
    idade: 22,
    localizacao: 'Brasil',
    email: 'teste@email.com',
    pets: [
        { nome: 'Black', idade: 2 },
        { nome: 'Lion', idade: 2 },
        { nome: 'Sam', idade: 1 },
    ],
    entrar: function () {
        console.log('O usuário entrou');
    },
    sair: function () {
        console.log('O usuário saiu');
    },
    // Outra maneira de declarar um método com uma função regular em um objeto
    logPets() {
        console.log('Meus pets são:')
        for (const pet of this.pets) {
            console.log(pet.nome, pet.idade);
        }
    },
};

/* 
console.log(user);
console.log(user.nome);

user.localizacao = 'Rio de Janeiro';
console.log(user.localizacao);

// Outra forma de acessar uma propriedade do objeto
console.log(user['idade']);

// Outra forma de modificar o valor de uma propriedade do objeto
user['nome'] = 'Lukas';
console.log(user['nome']);

// Uma das formas de se utilizar os "[]" para acessar uma propriedade do objeto
const key = 'idade';
console.log(user[key]); // É igual à: user['idade'] ou user.idade

console.log(typeof user); 
*/

user.entrar();
user.sair();
user.logPets();