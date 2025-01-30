// import capitalize from "./main";
// test("capitalize the first letter of a string", () => {
//   expect(capitalize("hello")).toBeDefined();
// });
import { capitalize, reverseString } from "./main";
test("capitalize a string", () => {
  expect(capitalize("hello")).toBe("Hello");
});
test("reverse a string", () => {
  expect(reverseString()).toBeDefined();
});
