function isEven(number) {
  if (number / 2 === Math.floor(number / 2)) {
    return true;
  } else {
    return false;
  }
}
module.exports = isEven;
