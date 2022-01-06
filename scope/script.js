/* Global Scope
    * As variáveis globais podem ser acessadas de qualquer lugar. 
    * No contexto do navegador, as variáveis "var" são encontradas no objeto "window" (diferente de "let" e "const"). */

var varGlobal = 1;
let letGlobal = 2;
const constGlobal = 3;

function globalScope() {
    console.log("Global Scope:", varGlobal, letGlobal, constGlobal);
}
globalScope();


/* Function Scope
    * As variáveis declaradas com "var", "let" ou "const" dentro de uma função, só podem ser acessadas dentro da própria função.
    * A palavra-chave "var" utiliza o function scope. */

function functionScope() {
    var varFunction = 4;
    let letFunction = 5;
    const constFuntion = 6;
    console.log("Function Scope:", varFunction, letFunction, constFuntion);
}
functionScope();

// console.log("Function Scope:", varFunction, letFunction, constFuntion);


/* Block Scope
    * O novo tipo de scope, onde variáveis declaradas dentro de chaves "{}", não podem ser acessadas fora do bloco ("block").
    * As palavras-chaves "let" e "const" utilizam o block scope. */

if (10 > 5) {
    var varBlock = 7;
    let letBlock = 8;
    const constBlock = 9;
    console.log("Block Scope:", varBlock, letBlock, constBlock);
}

console.log("Fora do Block Scope:", varBlock);