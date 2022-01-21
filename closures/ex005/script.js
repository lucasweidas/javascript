// Escopo Léxico e Closures

function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
z();

// Outra forma de escrever o mesmo código
/* 
function x() {
    var a = 10;
    return function y() {
        console.log(a);
    }
}
var z = x();
z(); */