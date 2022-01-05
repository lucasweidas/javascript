// Passando função como parâmetro para outra função

function escrever(x, y, z) {
    console.log(`x: ${x}`);
    console.log(`y: ${y.name}`);
    console.log(`z: ${z()}`);
    console.log("\nFunção 'escrever()', executada!");
}

function a() {
    return 'Retorno da função "a"';
}

const b = { name: "lucas", idade: 22 };

const c = () => {
    console.log("Chamando a função dentro de 'c'");
    return "Retorno da função dentro de 'c'";
};

console.log("A função \"escrever()\", será executada em 3 segundos...")
setTimeout(() => {
    escrever(a(), b, c);
}, 3000);
console.log("Vou ser executado, antes da função 'escrever()'\n")