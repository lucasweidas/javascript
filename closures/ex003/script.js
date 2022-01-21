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