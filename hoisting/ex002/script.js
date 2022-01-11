// Hoisted

getName();
// getName2(); // Vai dar erro, pois a função ainda não foi atribuida
// getName3(); // Vai dar erro, pois a função ainda não foi atribuida
console.log(x);

var x = 5;
function getName() { // Declaração de função
    console.log('getName');
}
var getName2 = () => { // Expressão de função
    console.log('getName2');
}
var getName3 = function () { // Expressão de função
    console.log('getName3');
}

// Não Hoisted

getName();
getName2();
getName3();
console.log(x);