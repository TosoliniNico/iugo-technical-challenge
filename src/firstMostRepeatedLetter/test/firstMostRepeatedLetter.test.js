const firstMostRepeatedLetter = require("../firstMostRepeatedLetter");

test("returns correct index of first most repeated letter", () => {
  expect(firstMostRepeatedLetter("Ahora")).toBe(0);
  expect(firstMostRepeatedLetter("Color")).toBe(1);
  expect(firstMostRepeatedLetter("Rotor")).toBe(0);
  expect(firstMostRepeatedLetter("Corral")).toBe(2);
});

test("returns -1 for empty string input", () => {
  expect(firstMostRepeatedLetter("")).toBe(-1);
});
