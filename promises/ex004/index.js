const users = [
  { name: 'Maria', age: 20 },
  { name: 'Juliana', age: 30 },
];

function newUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);

      const a = true;
      if (a) {
        resolve();
      } else {
        reject('Some error!');
      }
    }, 500);
  });
}

function printUsers() {
  setTimeout(() => {
    users.forEach(user => {
      const li = document.createElement('li');
      li.innerText = `${user.name}, ${user.age} years old`;
      document.body.appendChild(li);
    });
  }, 1000);
}

newUser({ name: 'Lucas', age: 22 })
  .then(printUsers)
  .catch(message => console.log(message));