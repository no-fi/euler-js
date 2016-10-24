function fibs (n) {
  let a = 1;
  let b = 2;
  const result = [];
  while (a < n) {
    result.push(a);
    const tmp = a;
    a = b;
    b += tmp;
  }
  return result;
}

function solve (n) {
  return fibs(n).filter(e => e % 2 === 0).reduce((a, b) => a + b);
}

module.exports = {
    fibs: fibs,
    solve: solve,
};
