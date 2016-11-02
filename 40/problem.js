function digits(ns) {
  if (ns === undefined) {
    return [];
  }
  var greatest = Math.max.apply(null, ns);
  var sequence = '';
  var n = 1;
  while (sequence.length <= greatest) {
    sequence += String(n);
    n += 1;
  }
  return sequence
    .split('')
    .filter((_, idx) => ns.indexOf(idx + 1) !== -1)
    .map(e => Number(e));
}

function solve() {
  console.log(digits([1, 100, 1000, 10000, 100000, 1000000]));
  return digits([1, 100, 1000, 10000, 100000, 1000000]).reduce((a, b) => a * b);
}

module.exports = {
  digits: digits,
  solve: solve,
};
