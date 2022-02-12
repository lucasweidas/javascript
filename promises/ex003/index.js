const wakeUp = new Promise((resolve, reject) => resolve('Woke up'));

const breakfast = new Promise((resolve, reject) => resolve('Had breakfast'));

const brushTeeth = new Promise((resolve, reject) => resolve('Teeth brushed'));

// Promise.all will wait until all callback are completed before returning the result
Promise.all([wakeUp, breakfast, brushTeeth]).then(messages => messages.forEach(message => console.log(message)));

// Promise.race will return the result as soon as the first callback has been completed
Promise.race([wakeUp, breakfast, brushTeeth]).then(message => console.log(message));