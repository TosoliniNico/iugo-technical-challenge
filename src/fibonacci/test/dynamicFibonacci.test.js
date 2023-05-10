const dynamicFibonacci = require("../dynamicFibonacci");

describe("Test for dynamic Fibonacci", () => {
  test("Fibonacci number for n = 0", () => {
    expect(dynamicFibonacci(0)).toBe(0);
  });

  test("Fibonacci number for n = 1", () => {
    expect(dynamicFibonacci(1)).toBe(1);
  });

  test("Fibonacci number for n = 2", () => {
    expect(dynamicFibonacci(2)).toBe(1);
  });

  test("Fibonacci number for n = 3", () => {
    expect(dynamicFibonacci(3)).toBe(2);
  });

  test("Fibonacci number for n = 4", () => {
    expect(dynamicFibonacci(4)).toBe(3);
  });

  test("Fibonacci number for n = 8", () => {
    expect(dynamicFibonacci(8)).toBe(21);
  });
});
