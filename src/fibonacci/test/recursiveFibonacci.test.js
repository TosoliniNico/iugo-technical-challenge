const recursiveFibonacci = require("../recursiveFibonacci");

describe("Test for recursive Fibonacci", () => {
  test("Fibonacci number for n = 0", () => {
    expect(recursiveFibonacci(0)).toBe(0);
  });

  test("Fibonacci number for n = 1", () => {
    expect(recursiveFibonacci(1)).toBe(1);
  });

  test("Fibonacci number for n = 2", () => {
    expect(recursiveFibonacci(2)).toBe(1);
  });

  test("Fibonacci number for n = 3", () => {
    expect(recursiveFibonacci(3)).toBe(2);
  });

  test("Fibonacci number for n = 4", () => {
    expect(recursiveFibonacci(4)).toBe(3);
  });

  test("Fibonacci number for n = 8", () => {
    expect(recursiveFibonacci(8)).toBe(21);
  });
});
