function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log('End!');
}
// countDown(5);

function countDownRecursive(n) {
  if (n > 0) { // 3, 2, 1, 0
    console.log(n); // 3, 2, 1
    return countDownRecursive(n - 1); // 2, 1, 0
  }
  console.log('End!');
}
countDownRecursive(3);