// Escopo Léxico e Closures

/***************/
// Exemplo

// const external = () => {
//     const nome = "Lucas";
//     const internal = () => {
//         console.log(nome.toUpperCase());
//     }
//     internal();
// }
// external();

/***************/
// Exemplo

// const addTo = a => b => a + b;

// const increment = addTo(1);
// const increment10 = addTo(10);
// const increment20 = addTo(20);

// console.log(increment(5));
// console.log(increment10(5));
// console.log(increment20(5));

/***************/
// Exemplo

// function closure() {
//     for (var i = 1; i <= 5; i++) {

//         (c => {
//             setTimeout(() => {
//                 console.log(c);
//             }, c * 1000);
//         })(i);
//     }
// }
// closure();

/***************/
// Exemplo