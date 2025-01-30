// export function capitalize(str) {
//   return str.toUpperCase();
// }
export function capitalize(str) {
  if (typeof str !== "string") return;
  let array = str.split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
}

export function reverseString(str) {
  if (typeof str !== "string") return;
  let array = str.split("");
  let reverse = [];
  for (let index = array.length - 1; index >= 0; index--) {
    reverse.push(array[index]);
  }
  return reverse.join("");
}

export let calulator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2,
};

export function caesarChiper(str, shiftNum) {
  let i = str.length;
  let j = str.length;
  let array = str.split("");
  for (let index = 0; index < array.length; index++) {
    array[index] =
      array[index].charCodeAt(0) - 32 + shiftNum < 90
        ? String.fromCharCode(array[index].charCodeAt(0) - 32 + shiftNum)
        : String.fromCharCode(
            array[index].charCodeAt(0) - (32 + 26) + shiftNum
          );
  }
  return array.join("");
}
