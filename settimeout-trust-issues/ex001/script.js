console.log('Start');

setTimeout(() => {
    console.log('Callback');
}, 5000);

console.log('End');

let startTimer = new Date().getTime();
let endTimer = startTimer;
console.log(endTimer);

while (endTimer < startTimer + 10000) {
    endTimer = new Date().getTime();
}

console.log(endTimer);
