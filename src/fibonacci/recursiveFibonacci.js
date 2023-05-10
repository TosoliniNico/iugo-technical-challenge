function recursiveFibonacci(k) {
  if (k < 2) {
    return k;
  } else {
    return recursiveFibonacci(k - 1) + recursiveFibonacci(k - 2);
  }
}

module.exports = recursiveFibonacci;
