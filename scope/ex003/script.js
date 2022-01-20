// Exemplo

// if (true) {
//     let a = 10;
//     const b = 20;
//     if (true) {
//         console.log(a);
//         console.log(b);
//     }
// }

// Shadowing válido
var a = 1;
let b = 2;
{
    let a = 3;
    const b = 4;
}

// Shadowing inválido
let a = 1;
{
    // var a = 2;
}

/******************/
// Exemplo

// const a = 20;
// {
//     const a = 40;
//     {
//         const a = 60;
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);

/******************/
// Exemplo

// function outer() {

//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }
// var a = 10;
// var close = outer();
// close();
