const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandparent.addEventListener('click', e => console.log('Granparent Bubble'));

parent.addEventListener('click', e => console.log('Parent Bubble'));

// child.addEventListener('click', e => {
//   e.stopPropagation();
//   console.log('Child Capture');
// }, { capture: true, once: true});

child.addEventListener('click', printHello);

setTimeout(() => {
  child.removeEventListener('click', printHello);
}, 2000);

document.addEventListener('click', e => console.log('Document Bubble'));

function printHello() {
  console.log('Hello!');
}
