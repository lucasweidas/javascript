console.log('Primeiro');

setTimeout(function cb() {
    console.log('Quinto');
}, 100);

console.log('Segundo');

setTimeout(function cb2() {
    console.log('Quarto');
});

console.log('Terceiro');
