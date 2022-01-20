// Shadowing válido
var a = 1;
let b = 2;
{
    let a = 3;
    const b = 4;
}

// Shadowing inválido: Vai dar SyntaxError
let a = 1;
{
    // var a = 2;
}
