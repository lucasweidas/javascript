function newItem(value) {
  const item = document.createElement('li');
  item.classList.add('list-item');
  item.innerText = value;
  item.addEventListener('click', () => item.remove());
  return item;
}

const form = document.querySelector('#new-item-form');
const input = document.querySelector('#item-input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

form.addEventListener('submit', e => {
  e.preventDefault();
  if (input.value.trim() === '') return alert('Enter a name to the task!');
  list.append(newItem(input.value));
  input.value = '';
  input.focus();
});
