/*  Função Normal

    Quando uma função com "nome" é criada, seu nome será usado "criar" uma variável que faz referência a função na qual ela guarda. */

function soma(a, b) {
    return a + b;
}

console.log(soma(1, 2));

/////////////////////////////
// Arrow function

/* Se você quiser armazenar uma Arrow function para chamar depois, basta criar uma variável para guardar sua estrutura e referência. */

let soma2 = (a, b) => {
    return a + b;
};

console.log(soma2(1, 2));

// Se a Arrow function tiver apenas uma linha e retorno, basta escrever desse jeito

let soma3 = (a, b) => a + b;

console.log(soma3(1, 2));

// Se a Arrow function tiver apenas um parâmetro, não é necessário o uso dos parênteses

let isPositivo = numero => numero >= 0;

console.log(isPositivo(5));

// Se a Arrow function não tiver parâmetro(s), você deve colocar os parênteses antes do Arrow para indicar que é uma função

let numeroRandom = () => 5 * 5;

console.log(numeroRandom());

// Se a Arrow function tiver apenas uma linha e retorna um objeto, envelope o objeto entre parênteses

let nome = () => ({ nome: "Lucas" });

console.log(nome());
