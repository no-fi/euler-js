function solve(n) {
  return Array(n - 1)
    .fill()
    .map((_, i) => i + 1)
    .filter(e => e % 3 === 0 || e % 5 === 0)
    .reduce((a,b) => a + b);
}

module.exports = solve;
