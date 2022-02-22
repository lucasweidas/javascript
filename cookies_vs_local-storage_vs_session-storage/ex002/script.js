// Storing an Object in a Local or Session Storage

// Setting a JSON Object in the Session Storage
const user = JSON.stringify({
  firstName: 'Juliana',
  lastName: 'Ferreira',
  age: 25,
});
sessionStorage.setItem('user', user);

// Getting the Object from Session Storage
const user1 = JSON.parse(sessionStorage.getItem('user'));
console.log(user1);
