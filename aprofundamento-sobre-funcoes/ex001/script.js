/*  O que é Function Statement (Function Declaration)?
É a declaração de uma função com 'nome'. Em outras palavras, é a declaração normal de uma função, e será executada depois, quando for invocada 'chamada'. */
function a() {
    console.log('function statement');
}
a();

/*********************************************/
/*  O que é Function Expression?
É uma função 'anônima' atribuida a uma variável. Em outras palavras, é quando você declara uma variável e faz à atribuição de uma função sem nome (anônima) */
var b = function () {
    console.log('function expression');
};
b();

/*********************************************/
/*  Diferença entre Function Statement e Function Expression? 
A maior diferença entre as duas é o "Hoisting". Lembre-se de como o hoisting funciona. As funções recebem referência para seu bloco de código e as variáveis recebem o valor temporário "undefined". Se você "chamar" uma "function statement" antes da sua declaração no código, ela será executada normalmente. Se você "chamar" uma "function expression" antes da atribuição da função no código, você irá receber um erro "TypeError", pois você está tentando acessar uma função que ainda não foi atribuida à variável, pois à variável antes da atribuição da função, possui o valor "undefined" e undefined não é uma função. */
c();
function c() {
    console.log('hoisted');
}

// d(); // TypeError: d is not a function
var d = function () {
    console.log('não é hoisted');
};

/*********************************************/
/*  O que é Anonymous Function?
É uma função sem nome. Sempre que uma função sem nome é criada, isso é conhecida com uma função anônima (anonymous function). Função anônima não possui uma identidade, e caso você crie uma igual à abaixo, vai resultar em um "SyntaxError", pois de acordo com as epecificações da ECMA, function statement devem obrigatóriamente possuir um nome "identidade". */
/* function () {
    console.log('função anônima que dá erro de Syntax');
} */

/*********************************************/
/*  Qual o uso para uma Anonymous Function?
Funções anônimas são utilizadas em um lugar onde funções são usadas como valores. Isso diz respeito à quando você atribui uma função à um variável, no caso de uma function expression. */

/*********************************************/
/*  O que é Named Function Expression? 
Named function expression é básicamente o mesmo que uma "function expression". A diferença entre "named function expression" e "function expression", é que em uma named function expression, você atribui uma função com nome à uma variável. Diferente de uma function expression, onde você atribui uma função anônima. */
var e = function nome() {
    console.log('named function expression:', nome);
};
e();

/*********************************************/
/*  Diferença entre Parâmetros e Argumentos? 
"Parâmetros" são variável locais dentro do escopo da função, que recebem o valor passado como "argumento" na chamada da função. */
function f(parametro) {
    console.log(parametro);
}
f(10);

/*********************************************/
/*  O que são First Class Functions?
É à habilidade de usar funções como valores. Isso significa que uma função pode ser atribuida a uma variável, passada como argumento para outra função ou ser retorna de outra função. Essa habilidade é conhecida como first class functions em JavaScript. First class functions também são conhecidas com "first class citizens". */
