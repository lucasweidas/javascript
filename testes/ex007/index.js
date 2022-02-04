function digital_root(n) {
    n = String(n).split('').reduce((sum, num) => sum += parseInt(num), 0);
    if (n > 9) return digital_root(n);
    return n;
}
console.log(digital_root(456));