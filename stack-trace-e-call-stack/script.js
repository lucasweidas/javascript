function fazerAlgo(a, b, nome) {
    escrever(soma(a, b))
    escrever(digaOi(nome))
}

function escrever(variavel) {
    console.log(variavel)
}

function soma(a, b) {
    // aaaaaa // Vai causar um error
    return a + b
}

function digaOi(nome) {
    return "Oi " + nome
}

fazerAlgo(2, 2, "Lucas")