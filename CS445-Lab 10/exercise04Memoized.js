var fibonacci = (function () {
  var memo = {};

  function fibon(n) {
    var value;
    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) value = n;
      else value = fibon(n - 1) + fibon(n - 2);

      memo[n] = value;
    }

    return value;
  }

  return fibon;
})();

console.log(fibonacci(7));
