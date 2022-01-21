// Escopo Léxico e Closures

function z() {
    var b = 50;
    function x() {
        var a = 10;
        function y() {
            console.log(a, b);
        }
        a = 20;
        return y;
    }
    b = 25;
    return x();
}
var f = z();
f();

/*  Usos de Closures
    - Module Design Pattern
    - Currying
    = Function like once
    - memoiza
    - maintaining state in async world
    - setTimeouts
    - Iterators
    - e muito mais...
 */