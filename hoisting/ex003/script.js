// Exemplo 1
var a = 5;
console.log(a); // resultado: 5
function hoisted() {
    console.log(a); // resultado: undefined
    var a = 7;
    console.log(a); // resultado: 7
}
hoisted();

// Funcionamento do Hoisting (Içamento) no Exemplo 1

/* var a = 5;
console.log(a);
function hoisted() {
    var a = undefined;
    console.log(a);
    a = 7;
    console.log(a);
} */

/**************************************************/
// Exemplo 2
function getValor() {
    function retornarValor() {
        return 1;
    }
    return retornarValor();
    function retornarValor() {
        return 2;
    }
}
var resultado = getValor();
console.log(resultado); // resultado: 2

// Funcionamento do Hoisting (Içamento) no Exemplo 2

/* function getValor() {
    function retornarValor() {
        return 1;
    }
    function retornarValor() {
        return 2;
    }
    return retornarValor();
} */

/**************************************************/
// Exemplo 3
function getValor2() {
    var retornarValor = function () {
        return 1;
    }
    return retornarValor();
    var retornarValor = function () {
        return 2;
    }
}
var resultado2 = getValor2();
console.log(resultado2); // resultado: 1

// Funcionamento do Hoisting (Içamento) no Exemplo 3

/* function getValor() {
    var retornarValor = undefined;
    var retornarValor = undefined;
    retornarValor = function () {
        return 1;
    }
    return retornarValor();
    retornarValor = function () { // Nunca será alcaçado
        return 2;
    }
} */