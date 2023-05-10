const isEven = require("../isEven");

describe("isEven", () => {
  test("should return true for even numbers", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(10)).toBe(true);
    expect(isEven(100)).toBe(true);
  });

  test("should return false for odd numbers", () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(7)).toBe(false);
    expect(isEven(99)).toBe(false);
  });

  test("should return true for the number 0", () => {
    expect(isEven(0)).toBe(true);
  });
});
