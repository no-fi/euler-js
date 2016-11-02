function coinSums(total) {
  var count = 0;
  var coins = [2, 5, 10, 20, 50, 100, 200];
  (function helper(n) {
    if (coins.length === 0) {
      count += 1;
      return;
    }
    var coin = coins.pop();
    helper(n);
    for (var i = coin; i <= n; i += coin) {
    	helper(n - i);
    }
  })(total);
  return count;
}

module.exports = coinSums;
