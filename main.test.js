import {
  capitalize,
  reverseString,
  calulator,
  caesarChiper,
  analyzeArray,
} from "./main";
test("capitalize a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});
test("reverse a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});
test("calculate 2 number", () => {
  expect(calulator.add(1, 2)).toBe(3);
  expect(calulator.subtract(1, 2)).toBe(-1);
  expect(calulator.divide(1, 2)).toBeCloseTo(0.5);
  expect(calulator.multiply(1, 2)).toBeCloseTo(2);
});
test("encrypt string with caesar cipher", () => {
  expect(caesarChiper("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
test("analyze a number array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    length: 6,
    max: 8,
    min: 1,
  });
});
