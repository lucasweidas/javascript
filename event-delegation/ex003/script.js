const list = document.querySelector('#list');

list.addEventListener('click', evt => {
  if (evt.target.tagName === 'LI') {
    console.log(evt.target.innerText);
  }
});
