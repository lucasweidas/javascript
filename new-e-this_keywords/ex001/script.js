// A keyword "New"
// Em JavaScript, a palavra-chave (keyword) "new" é usada para criar uma instância de um objeto que tem uma constructor function (função construtora).

// É recomendado escrever a primeira letra de uma constructor function em Capital (Maiúsculo). Isso é usado para diferenciar um normal function, de uma constructor function.

/*****************************************/

// A keyword "This"
// Em JavaScript, a keyword "this" nos permite reutilizar funções em diferentes execution context. Isto significa que, uma vez definida, uma função pode ser invocada para diferentes objetos usando esta palavra-chave. Assim, identificando o "this", como relativo ao execution context atual do objeto quando invocamos um método (função).

// Sempre que um objeto é criado, você ganha acesso ao "this" keyword. O this é relativo ao seu Execution Context atual. Isso significa que, o this pode acabar não sendo referênte ao execution context que você queria, caso o código não seja escrito que maneira correta.

/*****************************************/

// Exemplo com "new" e "this"

const User = function (primeiroNome, idade, pc) {
    // Constructor function
    this.primeiroNome = primeiroNome;
    this.idade = idade;
    this.pc = pc;
    this.getUserInfo = function () {
        console.log(`O usuário ${primeiroNome}, possui ${idade} anos.`);
    };
};

function Computador(cpu, ram, gpu) {
    // Constructor function
    this.cpu = cpu;
    this.ram = ram;
    this.gpu = gpu;
    this.getPcInfo = function () {
        console.log(`CPU: ${cpu} | RAM: ${ram}GB | GPU: ${gpu}`);
    };
}

// Criando uma nova (new) instância de um objeto
const lucas = new User('Lucas', 22, new Computador('i5', 16, 'GTX 1060'));
lucas.getUserInfo();
lucas.pc.getPcInfo();
console.log(lucas);

// Criando uma nova (new) instância de um objeto
const pcMaria = new Computador('i9', 32, 'RTX 2080 ti');
const maria = new User('Maria', 30, pcMaria);
maria.getUserInfo();
maria.pc.getPcInfo();
console.log(maria);
