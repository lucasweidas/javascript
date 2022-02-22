// Local Storage

// localStorage.setItem('name', 'Lucas');
// console.log(localStorage.getItem('name'));
localStorage.removeItem('name');

/*********************************************/

// Session Storage

// sessionStorage.setItem('name', 'Juliana');
// console.log(sessionStorage.getItem('name'));
// console.log(sessionStorage.length);
// console.log(sessionStorage.key(0));
sessionStorage.removeItem('name');

/*********************************************/

// Cookies

// document.cookie = `name=Lucas; expires=${new Date(2022, 2, 1).toUTCString()}`;
// document.cookie = `lastName=Ferreira; expires=${new Date(9999, 0, 1).toUTCString()}`;

console.log(document.cookie);
