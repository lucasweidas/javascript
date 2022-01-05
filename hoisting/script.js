// Hoisted

// Durante a fase de compilação, o motor do JavaScript vai criar espaços na memória para as suas declarações de "variáveis" e "funções". Quando a fase de compilação terminar, começa a fase de execução.

// Durante a fase de execução, o motor JavaScript executa o código linha por linha. Nesta fase, ele "atribui" valores às "variáveis" e executa as chamadas de "funções".

// Com isso em mente, apenas as "declarações" são hoisted, fazem parte do "Hoisting", enquanto as "atribuições", não fazem parte do "Hoisting"!

funcao();
function funcao() {
    console.log("Uma função");
}

umaFuncao();
function umaFuncao() {
    variavel = "Uma variável";
    var variavel;
    console.log(variavel);
}


// Não Hoisted

// Como o você pediu para escrever o conteúdo da variável "falar" no console, antes da atribuição, e na fase de "compilação", todas as variáveis recebem o valor "undefined" como "placeholder". Na fase de "execução", quando as "atribuições" e execução do código acontecem, você está pedindo para escrever no console o conteúdo da variável "falar", antes da "atribuição" do valor, por isso o resultado será "undefined".

naoSei();
function naoSei() {
    console.log(falar); // resultado: "undefined"
    var falar = "Não importa..";
}

// Como você está "atribuindo" uma função a uma variável, e está chamando a função dentro da variável na fase de "compilação", você receberá um "error". Lembre-se, não é possível chamar a "função" dentro de uma "variável", antes da fase de execução.

// naoFunciona();
var naoFunciona = function() {
    console.log("Isso não importa..");
};

// Conclusão: evite utilizar "Hoisting" em "declarações" de variáveis, como visto na função "umaFuncao" acima. Isso evita que você tente acessar a variável, antes da "atribuição" de valor e deixa seu código menos confuso!

// Forma correta
umaFuncao2();
function umaFuncao2() {
    var variavel;
    variavel = "Uma variável";
    console.log(variavel);
}