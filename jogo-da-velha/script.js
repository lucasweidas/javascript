function fillArray() {
    return [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ];
}

function verificarJogada(buttonValue, button) {
    if (buttonValue != "X" && buttonValue != "O" && !fim) {
        empate++;
        novaJogada(buttonValue, button);
    }
}

function novaJogada(buttonValue, button) {
    const jogadorValue = jogador.innerText;
    for (let c = 0; c < 3; c++) {
        for (let i = 0; i < 3; i++) {
            if (posicoes[c][i] == buttonValue) {
                posicoes[c][i] = jogadorValue;
            }
        }
    }
    button.classList.add("selected");
    button.innerText = jogadorValue;
    if (verificarFim(jogadorValue)) {
        return;
    }
    mudarJogador(jogadorValue);
}

function mudarJogador(jogadorValue) {
    if (jogadorValue == "X") {
        jogador.innerText = "O";
    } else {
        jogador.innerText = "X";
    }
}

function verificarFim(jogadorValue) {
    let linha = [0, 0];
    let coluna = [0, 0];
    for (let c = 0; c < 3; c++) {
        for (let l = 0; l < 3; l++) {
            // Verifica final em coluna
            if (posicoes[l][c] == jogadorValue) {
                coluna[0]++;
                coluna[1] = c;
            }
            // Verifica final em linha
            if (posicoes[c][l] == jogadorValue) {
                linha[0]++;
                linha[1] = c;
            }
        }
        if (linha[0] === 3) {
            jogoFinalizado("linha", linha[1], jogadorValue);
            return (fim = true);
        } else if (coluna[0] === 3) {
            jogoFinalizado("coluna", coluna[1], jogadorValue);
            return (fim = true);
        }
        linha = [0, 0];
        coluna = [0, 0];
    }
    // Verifica final na diágonal
    if (
        posicoes[0][0] == jogadorValue &&
        posicoes[1][1] == jogadorValue &&
        posicoes[2][2] == jogadorValue
    ) {
        jogoFinalizado("diagonal 1", 0, jogadorValue);
        return (fim = true);
    } else if (
        posicoes[0][2] == jogadorValue &&
        posicoes[1][1] == jogadorValue &&
        posicoes[2][0] == jogadorValue
    ) {
        jogoFinalizado("diagonal 2", 0, jogadorValue);
        return (fim = true);
    }
    if (empate === 9) {
        jogoFinalizado("empate", 0, "empate");
    }
}

function jogoFinalizado(tipo, posicao, jogadorValue) {
    display.classList.add("mostrar");
    if (tipo === "empate") {
        display.classList.add("empate");
        resultado.innerText = "EMPATE!";
        return (fim = true);
    }
    vencedor.innerText = `"${jogadorValue}"`;
    resultado.innerText = "GANHOU!";
    let locais = [];

    if (tipo === "linha") {
        if (posicao === 0) {
            locais.push(1, 2, 3);
        } else if (posicao === 1) {
            locais.push(4, 5, 6);
        } else {
            locais.push(7, 8, 9);
        }
    } else if (tipo === "coluna") {
        if (posicao === 0) {
            locais.push(1, 4, 7);
        } else if (posicao === 1) {
            locais.push(2, 5, 8);
        } else {
            locais.push(3, 6, 9);
        }
    } else if (tipo === "diagonal 1") {
        locais.push(1, 5, 9);
    } else if (tipo === "diagonal 2") {
        locais.push(3, 5, 7);
    }

    let i = 1;
    for (const button of buttons) {
        if (locais.includes(i)) {
            button.classList.add("posicao-ganhador");
        }
        i++;
    }
}

function resetar() {
    fim = false;
    empate = 0;
    display.classList.remove("mostrar");
    display.classList.remove("empate");
    vencedor.innerText = "";
    resultado.innerText = "";
    jogador.innerText = "X";
    posicoes = fillArray();
    let num = 1;
    buttons.forEach(button => {
        button.classList.remove("selected");
        button.classList.remove("posicao-ganhador");
        button.innerText = num++;
    });
}

const buttons = document.querySelectorAll(".btn");
const reset = document.querySelector("#btn-reset");
const jogador = document.querySelector("#jogador span");
const display = document.querySelector(".display-c");
const vencedor = document.querySelector("#vencedor");
const resultado = document.querySelector("#resultado");
let posicoes = fillArray();
let fim = false;
let empate = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.innerText;
        verificarJogada(buttonValue, button);
    });
});

reset.addEventListener("click", resetar);