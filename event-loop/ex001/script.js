function listener1() {
  setTimeout(() => console.log('#1 Hello form timeout 1'), 0);
  Promise.resolve().then(() => console.log('#1 Hello from promise 1'));
  const promise = Promise.resolve();
  setTimeout(() => console.log('#1 Hello form timeout 2'), 0);
  console.log('#1 Hello from main thread');
  setTimeout(() => promise.then(() => console.log('#1 Hello from promise 2')), 0);
}

function listener2() {
  setTimeout(() => console.log('#2 Hello form timeout 1'), 0);
  Promise.resolve().then(() => console.log('#2 Hello from promise 1'));
  const promise = Promise.resolve();
  setTimeout(() => console.log('#2 Hello form timeout 2'), 0);
  console.log('#2 Hello from main thread');
  setTimeout(() => promise.then(() => console.log('#2 Hello from promise 2')), 0);
}

const btn = document.querySelector('#btn1');
btn.addEventListener('click', listener1, false);
btn.addEventListener('click', listener2, false);

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => btn.click(), false);
