function getSenha() {
    var senha = '1234567';
    return function verificarSenha(senhaP) {
        if (senha === senhaP) return true;
        return false;
    };
}

var verificar = getSenha();
console.log(verificar('1234567'));
