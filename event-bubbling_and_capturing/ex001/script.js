document.querySelector('#great-grandparent').addEventListener(
  'click',
  evt => {
    console.log(evt.currentTarget);
  },
  true
);

document.querySelector('#grandparent').addEventListener(
  'click',
  evt => {
    console.log(evt.currentTarget);
  },
  false
);

document.querySelector('#parent').addEventListener(
  'click',
  evt => {
    console.log(evt.currentTarget);
    evt.stopPropagation();
  },
  true
);

document.querySelector('#child').addEventListener(
  'click',
  evt => {
    console.log(evt.currentTarget);
  },
  false
);

// document.querySelector('#child').addEventListener(
//   'click',
//   evt => {
//     console.log(evt.currentTarget);
//   },
//   { capture: true }
// );
