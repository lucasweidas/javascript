
// document.addEventListener('click', e => {
//   // This will only do the console.log, if the user clicks in a div
//   if (e.target.matches('div')) {
//     console.log('Hi');
//   }
// });

addGlobalEventListener('click', '.child', () => console.log('Hi!'));

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    // This will only involke the callback, if the user clicks in the selector
    if (e.target.matches(selector)) {
      callback();
    }
  });
}

function printHi() {
  console.log('Hi!');
}

const newDiv = document.createElement('div');
newDiv.style.width = '400px';
newDiv.style.height = '400px';
newDiv.style.backgroundColor = 'blue';
document.body.appendChild(newDiv);
