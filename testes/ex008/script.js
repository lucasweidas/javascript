const menu = document.querySelector('.menu');
const button = document.querySelector('.button');

button.addEventListener('click', e => {
  if (menu.classList.contains('open')) {
    e.currentTarget.ariaExpanded = 'false';
    return closeMenu();
  }
  e.currentTarget.ariaExpanded = 'true';
  openMenu();
});

addGlobalEventListener('click', '.menu', closeMenu);

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (!e.target.matches(selector) && !e.target.matches('.button') && e.target.parentNode != menu) {
      button.ariaExpanded = 'false';
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
