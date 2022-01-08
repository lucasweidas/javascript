const body = document.body;
const form = document.createElement('form');
const password = document.createElement('input');
const button = document.createElement('button');

form.classList.add('form');
form.onsubmit = e => e.preventDefault();

password.classList.add('password');
password.setAttribute('type', 'password');
password.setAttribute('placeholder', 'Digite sua senha');

button.classList.add('btn');
button.innerText = 'Verificar';
button.addEventListener('click', verificarSenha);

form.appendChild(password);
form.appendChild(button);
body.appendChild(form);

function verificarSenha() {
    const senha = password.value.toString();
    if (getSenha() === senha) {
        password.classList.remove('invalido');
        password.classList.add('valido');
        return;
    }
    password.classList.remove('valido');
    password.classList.toggle('invalido');
}

function getSenha() {
    const senha = 'teste123';
    return senha;
}
