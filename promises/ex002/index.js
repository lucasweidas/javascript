const userLeft = false;
const userprocrastinating = false;

function studyingPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({ name: 'User Left', message: ':(' });
    } else if (userprocrastinating) {
      reject({ name: 'User Procrastinating', message: 'Without Discipline' });
    } else {
      resolve('User Studying a lot!');
    }
  });
}

studyingPromise()
  .then(message => console.log(message))
  .catch(error => console.log(`${error.name} ${error.message}`));
