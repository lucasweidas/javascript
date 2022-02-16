const mainContainer = document.querySelector('main');

async function getUsersData() {
  const response = await fetch('https://reqres.in/api/users');
  const users = await response.json();
  users.data.forEach(user => configureUserContainer(user));
}
getUsersData();

function configureUserContainer(user) {
  const container = document.createElement('div');
  const img = document.createElement('img');
  const fullName = document.createElement('p');
  const email = document.createElement('p');

  container.classList.add('user-container');
  img.classList.add('user__avatar');
  fullName.classList.add('user__full-name');
  email.classList.add('user__email');

  img.src = user.avatar;
  fullName.innerText = `Name: ${user.first_name} ${user.last_name}`;
  email.innerText = `Email: ${user.email}`;
  container.append(img, fullName, email);
  mainContainer.appendChild(container);
}
