// Exemplo

var a = 10;
let b = 20;
const c = 30;
function x() {
    var a = 1;
    let b = 2;
    const c = 3;
    // 'if' possui criação de bloco '{}' opcional, para 'uma' declaração
    if (true) console.log(a);

    // 'while' possui criação de bloco '{}' opcional, para 'uma' declaração
    while (a > 0) console.log(a--);

    // 'for' possui criação de bloco '{}' opcional, para 'uma' declaração
    for (let i = 0; i < 1; i++) console.log(b);

    // 'do while' possui criação de bloco '{}' obrigatório
    do {
        console.log(b);
    } while (b !== b);
    
    // 'switch' possui criação de bloco '{}' obrigatório
    switch (true) {
        default:
            console.log(c);
    }

    // Uma declaração vazia (empty statement) é usada para não fornecer nenhuma declaração, embora a sintaxe JavaScript esperasse uma. Declaração vazia só pode ser feita em 'if', 'for' e 'while'. Já que 'switch' e 'do while' possuem a criação de bloco obrigatório, isso não permite que eles possam receber declaração vazia.

    if (true); // Aceita Declaração vazia
    for (let i = 0; i < 1; i++); // Aceita Declaração vazia
    while (a !== a); // Aceita Declaração vazia
    switch (true) {
        // Somente declaração normal
    }
    do {
        // Somente declaração normal
    } while (a !== a);
}
x();