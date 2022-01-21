// Escopo Léxico e Closures

const outer = () => {
    const nome = "Lucas";
    const inner = () => {
        console.log(nome.toUpperCase());
    }
    inner();
}
outer();