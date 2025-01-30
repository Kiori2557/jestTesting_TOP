// import capitalize from "./main";
// test("capitalize the first letter of a string", () => {
//   expect(capitalize("hello")).toBeDefined();
// });
import { capitalize, reverseString, calulator, caesarChiper } from "./main";
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
  expect(caesarChiper("hello", 20)).toBe("BYFFI");
});
