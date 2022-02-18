document.querySelector('#category').addEventListener('click', event => {
  console.log(event);
  if (event.target.tagName === 'LI') {
    location.href = `http://127.0.0.1:5500/event-delegation/ex001/${event.target.id}`;
    console.log('LI')
  } else {
    console.log('Is not an li');
  }
});
