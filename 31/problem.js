function coinSums(total) {
  var count = 0;
  (function helper(n, coins) {
    if (coins.length === 0) {
      count += 1;
      return;
    }
    var nextCoins = coins.slice();
    var coin = nextCoins.pop();
    for (var i = 0; i <= n; i += coin) {
    	helper(n - i, nextCoins);
    }
  })(total, [2, 5, 10, 20, 50, 100, 200]);
  return count;
}

function solve() {
  return coinSums(200);
}

module.exports = {
  coinSums: coinSums,
  solve: solve,
};
