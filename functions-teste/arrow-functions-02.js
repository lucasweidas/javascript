/*  Por que usar Arrow function em Classes?
    
    Normal function utiliza o scopo de onde ela é chamada.
    Normal function gera um novo "contexto" para o this.

    Arrow function utiliza o scopo de onde ela é definida.
    Arrow function mantém o "contexto" existente do this.
*/

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    escreverNomeArrow() {
        setTimeout(() => {
            console.log("Arrow function: " + this.nome);
        }, 100);
    }

    escreverNomeFunction() {
        setTimeout(function () {
            console.log("Função normal: " + this.nome);
        }, 100);
    }
}

const pessoa = new Pessoa("Lucas");
pessoa.escreverNomeArrow();
pessoa.escreverNomeFunction();
