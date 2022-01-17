// Exemplo

function a() {
    var b = 10;
    c();
    function c() {
        console.log(b);
    }
}

a();

/******************/
// Exemplo

// let b = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// console.log(b);

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