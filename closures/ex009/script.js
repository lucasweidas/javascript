// Escopo Léxico e Closures

function Contador() {
    var contar = 0;
    this.aumentarContador = function () {
        contar++;
        console.log(contar);
    };
    this.diminuirContador = function () {
        contar--;
        console.log(contar);
    };
}
var contador1 = new Contador();

contador1.aumentarContador();
contador1.diminuirContador();
contador1.aumentarContador();
