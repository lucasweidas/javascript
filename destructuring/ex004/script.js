const getData = async () => {
  const response = await fetch('data.json');
  return await response.json();
};

// Object Destructuring
const printData = ({ first_name, email, gender }) => {
  console.log(`First Name: ${first_name} | Email: ${email} | Gender: ${gender}`);
};

const doSomething = async () => {
  const data = await getData();
  data.forEach(user => printData(user));
};

doSomething();
