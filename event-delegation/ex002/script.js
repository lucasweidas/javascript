document.querySelector('#container').addEventListener('input', event => {
  if (event.target.hasAttribute('data-uppercase')) {
    event.target.value = event.target.value.toUpperCase();
  }
});
