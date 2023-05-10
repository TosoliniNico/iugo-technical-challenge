function dynamicFibonacci(k) {
  let fib = [0, 1];
  for (let i = 2; i <= k; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[k];
}

module.exports = dynamicFibonacci;
