fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Lucas',
  }),
})
  .then(response => response.json())
  .then(data => console.log(data));
