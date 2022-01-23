/*  O que é Function Statement (Function Declaration)?
É a declaração normal de uma função com 'nome'. Em outras palavras, é a declaração normal de uma função, e será executada depois, quando for invocada 'chamada'. */
function a() {
    console.log('function statement');
}
a();

/*********************************************/
/*  O que é Function Expression?
É uma função 'anônima' atribuida a uma variável. Em outras palavras, é quando você declara uma variável e à atribui uma função sem nome (anônima). */
var b = function () {
    console.log('function expression');
};
b();

/*********************************************/
/*  Diferença entre Function Statement e Function Expression?
A maior diferença entre as duas é o "Hoisting". Lembre-se de como o hoisting funciona. As funções recebem referência para seu bloco de código e as variáveis recebem o valor temporário "undefined". Se você "chamar" uma "function statement" antes da sua declaração no código, ela será executada normalmente. Se você "chamar" uma "function expression" antes da atribuição da função no código, você irá receber um erro, pois você está tentando acessar uma função que ainda não foi atribuida à variável, pois à variável antes da atribuição da função, possui o valor "undefined" e undefined não é uma função. */
c();
function c() {
    console.log('hoisted');
}

// d(); // Erro
var d = function () {
    console.log('não é hoisted');
};

/*********************************************/
/*  O que é Anonymous Function?
É uma função sem nome. Sempre que uma função sem nome é criada, isso é conhecido como uma função anônima (anonymous function). Função anônima não possui uma "identidade", e caso você tente criar uma como se fosse uma function statement sem nome, isso irá resultar em um "SyntaxError", pois de acordo com as epecificações da ECMA, function statement devem obrigatóriamente possuir um nome (identidade). */
/* function () {
    console.log('função anônima que dá erro de Syntax');
} */

/*********************************************/
/*  Qual o uso para uma Anonymous Function?
Funções anônimas são utilizadas em um lugar onde funções são usadas como valores. Isso diz respeito à quando você atribui uma função à um variável, no caso de uma function expression. */
var e = function () {
    console.log('função anônima funcional');
};
e();

/*********************************************/
/*  O que é Named Function Expression?
Named function expression é básicamente o mesmo que uma "function expression". A diferença entre as duas, é que em uma named function expression você atribui uma função com nome à uma variável, e com isso, você pode referenciar essa função dentro do seu escopo. Diferente de uma function expression, onde você atribui uma função anônima (sem nome) à uma variável. */
var f = function comNome() {
    console.log('named function expression:', comNome);
};
f();

/*********************************************/
/*  Diferença entre Parâmetros e Argumentos?
"Parâmetros" são variável locais dentro do escopo da função, que recebem o valor passado como "argumento" na chamada da função. */
function g(parametro) {
    console.log(parametro);
}
g(10);

/*********************************************/
/*  O que são First Class Functions?
É à habilidade de usar funções como valores. Isso significa que uma função pode ser atribuida à uma variável, passada como argumento para outra função ou ser retornada de outra função. First class functions também são conhecidas como "first class citizens" em JavaScript. */
