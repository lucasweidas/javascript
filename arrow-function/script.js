// Normal function

function somaNormal(numero1, numero2) {
    return numero1 + numero2;
}

/*****************************************
 * Arrow functions
 *****************************************/

// Arrow function sem abreviações de código.
const somaArrow = (numero1, numero2) => {
    return numero1 + numero2;
};

/*  Arrow function de "apenas uma" linha e com retorno, de forma abreviada.
    Quando a Arrow function possui 2 ou mais parâmetros, os parênteses são obrigatórios. */
const somaArrow2 = (numero1, numero2) => numero1 + numero2;

// Arrow function sem parâmetro(s).
const mensagem = () => "Hello World!";

// Arrow function com "apenas um" parâmetro, não precisa ter os parênteses.
const dobro = numero => numero * 2;

// Arrow function com chaves "{}" e retorno, é obrigatório o uso do "return"
const parImpar = numero => {
    if (numero % 2 === 0) {
        return "PAR";
    }
    return "IMPAR";
};

// Se a Arrow function retornar um "objeto", utilize uma das duas opções abaixo:
const pessoa = () => ({ nome: "Lucas" }); // Envelopando o objeto com parênteses "()"

const animal = () => {
    return { tipo: "Gato" }; // Utilizando a palavra "return"
};

/*  IIFE: é uma função que é executada assim que for definida. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global. AVISO: Evite utilizar o mesmo nome de variável várias vezes! */

// IIFE em uma Normal function, possui duas formas de escrita:
(function () {
    const getSalario = () => ({ salario: 3000.0 });
    console.log(getSalario());
})(); // IIFE com parênteses no final

(function () {
    const getSalario = () => ({ salario: 3500.0 });
    console.log(getSalario());
}()); // IIFE com parênteses após as chaves "{}"

// IIFE em uma Arrow function, possui apenas uma forma de escrita:
(() => {
    const getSalario = () => ({ salario: 4000.0 });
    console.log(getSalario());
})();

/* O "this" dentro da Arrow function vs Normal function */

// Essa é a forma de reverter a limitação de "escopo" da Normal function sobre o "this"
// (() => {
//     function Pessoa () {
//         const that = this
//         that.idade = 0

//         setInterval(function () {
//             that.idade++
//             console.log(`Qual é o this? ${that}`)
//             console.log(`Idade: ${that.idade}`)
//         }, 1000);
//     }
//     const p1 = new Pessoa();
// })();

// Com a Arrow function, você não precisa mais criar uma variável para guardar o "escopo" do "this"
(() => {
    function Pessoa () {
        this.idade = 0

        setInterval(() => {
            this.idade++
            console.log('Qual é o this?', this)
            console.log(`Idade: ${this.idade}`)
        }, 1000);
    }
    const p1 = new Pessoa();
})();