// Escopo Léxico e Closures

function closure() {
    for (var i = 1; i <= 5; i++) {
        (c => {
            setTimeout(() => {
                console.log(c);
            }, c * 1000);
        })(i);
    }
}
closure();

// O mesmo código também pode ser encrito desta forma
/* 
function closure() {
    for (var i = 1; i <= 5; i++) {
        function copia(c) {
            setTimeout(function () {
                console.log(c);
            }, c * 1000);
        }
        copia(i);
    }
}
closure(); */
