// Escopo Léxico e Closures

function x() {
    var a = 10;
    function y() {
        console.log(a);
    }
    y();
}
x();