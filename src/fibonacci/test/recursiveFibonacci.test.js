const recursiveFibonacci = require("../recursiveFibonacci");

// test("Test for recursive fibonacci", () => {
//   expect(recursiveFibonacci(0)).toBe(0);
//   expect(recursiveFibonacci(1)).toBe(1);
//   expect(recursiveFibonacci(2)).toBe(1);
//   expect(recursiveFibonacci(3)).toBe(2);
//   expect(recursiveFibonacci(4)).toBe(3);
//   expect(recursiveFibonacci(5)).toBe(5);
//   expect(recursiveFibonacci(6)).toBe(8);
//   expect(recursiveFibonacci(7)).toBe(13);
//   expect(recursiveFibonacci(8)).toBe(21);
// });

test('Fibonacci number for n = 0', () => {
  expect(recursiveFibonacci(0)).toBe(0);
});

test('Fibonacci number for n = 1', () => {
  expect(recursiveFibonacci(1)).toBe(1);
});

test('Fibonacci number for n = 10', () => {
  expect(recursiveFibonacci(10)).toBe(55);
});