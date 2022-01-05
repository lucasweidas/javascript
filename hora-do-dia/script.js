(() => {
    setInterval(() => {
        const tempo = new Date();
        const hora = tempo.getHours();
        const minutos = tempo.getMinutes();
        const segundos = tempo.getSeconds();

        horaAtual.innerText = `${hora}:${minutos}:${segundos}`;

        if (hora >= 0 && hora <= 5) {
            image.src = "images/madrugada.png";
            document.body.style.backgroundColor = "var(--clr-madrugada)";
        } else if (hora < 12) {
            image.src = "images/manha.png";
            document.body.style.backgroundColor = "var(--clr-manha)";
        } else if (hora < 19) {
            image.src = "images/tarde.png";
            document.body.style.backgroundColor = "var(--clr-tarde)";
        } else if (hora >= 19 && hora <= 23) {
            image.src = "images/noite.png";
            document.body.style.backgroundColor = "var(--clr-noite)";
        }
    }, 1000);
})();

function mula() {
    console.log("mula");
}

const horaAtual = document.querySelector("#hora-atual");
const image = document.querySelector("#image");