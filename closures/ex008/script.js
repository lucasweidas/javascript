// Escopo Léxico e Closures

function outer() {
    function inner() {
        console.log(a);
    }
    const a = 10;
    return inner;
}
var closure = outer();
closure();
