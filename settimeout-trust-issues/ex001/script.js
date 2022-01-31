// Trust issue with setTimeout

// A callback passed in a setTimeout may not be executed after the timer expires. This is because the event loop will only add a callback from the "callback queue" or "microtask queue" if the call stack is empty.

console.log('Start');

setTimeout(() => {
    console.log('Callback');
}, 5000);

console.log('End');

// Blocking the Call Stack

let startTimer = new Date().getTime();
let endTimer = startTimer;

while (endTimer < startTimer + 10000) {
    endTimer = new Date().getTime();
}

console.log('Timer ended');
