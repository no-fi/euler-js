function collatz(n) {
  if (n === 1) {
    return 1;
  }
  if (n % 2 === 0) {
    // n is even
    return 1 + collatz(n / 2);
  } else {
    // n is odd
    return 1 + collatz(3 * n + 1);
  }
}

function solve() {
  let n = 0;
  let max = 0;
  for (var i = 1; i < 1e6; i++) {
    let c = collatz(i);
    if (c > max) {
      n = i;
      max = c;
    }
  }
  return n;
}

module.exports = {
    collatz: collatz,
    solve: solve,
};
