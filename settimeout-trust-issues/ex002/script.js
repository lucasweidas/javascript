// Trust issue with setTimeout

// A callback passed in a setTimeout with timer "0" will not be executed until the call stack is empty. This is because even if the timer is "0", the callback still needs to wait for the event loop to do its job. The event loop will only add a callback from the "callback queue" or "microtask queue" if the call stack is empty.

console.log('Start');

setTimeout(() => {
    console.log('Callback');
}, 0);

console.log('End');
