/* O que é uma Callback Function em JavaScript? 
Uma função callback é uma função passada a outra função como argumento, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação. */

// Exemplo de synchronous callback
function escrever(string) {
    console.log(string);
}
function texto(escrever) {
    escrever('synchronous callback function');
}
texto(escrever);

/***********************************************/
/* Qual o poder das Callbacks? 
Funções callback também nos dão acesso à todo um mundo "asynchronous" em uma linguagem "synchronous thread language".*/

// Exemplo de asynchronous callback
setTimeout(function () {
    console.log('asynchronous callback function');
}, 5000);

/***********************************************/
/* O que é Blocking the main thread? 
A "main thread" é onde o navegador processa eventos e estilos do usuário. Por padrão, o navegador usa uma única thread (fio) para executar todo o JavaScript de sua página, bem como para realizar o layout, reestilos e garbage collection. Isto significa que funções JavaScript de longa duração podem bloquear a main thread, levando a uma página sem resposta e a uma má experiência do usuário. */

/***********************************************/
/* Garbage Collection e removeEventListeners 
Event listeners são pesados, e com isso eu quero dizer que eles ocupam espaço na memória, mesmo se a call stack estiver vazia, caso possuam uma closure. Por causa disso, os event listeners precisam ser removidos devido ao seguinte motivo. 
Evitar memory leaks (vazamentos de memória), caso o navegador não seja manuseado (handled) corretamente. Os navegadores modernos coletam o lixo dos handlers de eventos de elementos DOM removidos, mas isso não é válido em casos de navegadores antigos como o IE, que irão criar vazamentos de memória. */

/***********************************************/
/* Exemplo de Callback Function, Closure e Event Listener */
function suporteEvent() {
    let contador = 0;
    document
        .querySelector('#click')
        .addEventListener('click', function clicou() {
            console.log('Botão clicado', ++contador);
        });
}
suporteEvent();
