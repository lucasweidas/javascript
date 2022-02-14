function bestFpsGame(game) {
  return new Promise((resolve, reject) => {
    if (game === 'Battlefield 4') {
      resolve(`Nice, ${game} is so good!`);
    } else {
      reject('Ok, not what I expected');
    }
  });
}

function bestStoryGame(game) {
  return new Promise((resolve, reject) => {
    if (game === 'Last of Us') {
      resolve(`Nice, ${game} is perfect!`);
    } else {
      reject('Ok, it is not bad');
    }
  });
}

// bestFpsGame('Battlefield 5')
//   .then(message => console.log(message))
//   .catch(message => console.log(message));

// bestStoryGame('Last of Uss')
//   .then(message => console.log(message))
//   .catch(message => console.log(message));

async function makeIt() {
  try {
    const bestFpsGameResponse = await bestFpsGame('Battlefield 4');
    const bestStoryGameResponse = await bestStoryGame('Last of Us');
    console.log(bestFpsGameResponse);
    console.log(bestStoryGameResponse);
  } catch (error) {
    console.log(error);
  }
}
makeIt();
