// Escopo Léxico e Closures

const addTo = a => b => a + b;

const increment = addTo(1);
const increment10 = addTo(10);
const increment20 = addTo(20);

console.log(increment(5));
console.log(increment10(5));
console.log(increment20(5));