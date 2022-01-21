// Escopo Léxico e Closures

function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    a = 20;
    return y;
}
var z = x();
z();

// Vai imprimir '2', porque a função 'y' leva a referência da variável 'a' e não somente seu valor.