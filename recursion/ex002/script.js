function sumRange(n) {
  let total = 0;
  for (let i = n; i > 0; i--) {
    total += i;
  }
  return total;
}
// console.log(sumRange(3));

function sumRangeRecursive(n, total = 0) {
  if (n > 0) {
    return sumRangeRecursive(n - 1, total + n);
  }
  return total;
}
console.log(sumRangeRecursive(3));