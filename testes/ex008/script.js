const menu = document.querySelector('.menu');
const button = document.querySelector('.button');

button.addEventListener('click', () => {
  if (menu.classList.contains('open')) return closeMenu();
  openMenu();
});

addGlobalEventListener('click', '.menu', closeMenu);

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches('.para') && menu.classList.contains('open')) return;
    if (!e.target.matches(selector) && !e.target.matches('.button')) {
      callback();
    }
  });
}

function openMenu() {
  menu.classList.add('open');
}

function closeMenu() {
  menu.classList.remove('open');
}
