/********** great-grandparent **********/
document.querySelector('#great-grandparent').addEventListener('click', event => {
  console.log('Bubbling:', event.currentTarget);
});

document.querySelector('#great-grandparent').addEventListener(
  'click',
  event => {
    console.log('Capturing:', event.currentTarget);
  },
  { capture: true }
);

/********** grandparent **********/
document.querySelector('#grandparent').addEventListener('click', event => {
  console.log('Bubbling:', event.currentTarget);
});

document.querySelector('#grandparent').addEventListener(
  'click',
  event => {
    console.log('Capturing:', event.currentTarget);
  },
  { capture: true }
);

/********** parent **********/
document.querySelector('#parent').addEventListener('click', event => {
  console.log('Bubbling:', event.currentTarget);
});

document.querySelector('#parent').addEventListener(
  'click',
  event => {
    console.log('Capturing:', event.currentTarget);
  },
  { capture: true }
);

/********** child **********/
document.querySelector('#child').addEventListener('click', event => {
  console.log('Bubbling:', event.currentTarget);
});

document.querySelector('#child').addEventListener(
  'click',
  event => {
    console.log('Capturing:', event.currentTarget);
  },
  { capture: true }
);
