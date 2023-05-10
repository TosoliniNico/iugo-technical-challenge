function sum(int1, int2) {
  if (
    typeof int1 !== "number" ||
    typeof int2 !== "number" ||
    !Number.isInteger(int1) ||
    !Number.isInteger(int2)
  ) {
    throw new Error("Parameters must be integers");
  }
  return int1 + int2;
}
