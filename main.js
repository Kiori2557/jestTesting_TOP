export function capitalize(str) {
  if (typeof str !== "string") return;
  let array = str.split("");
  array[0] = array[0].toUpperCase();
  return array.join("");
}

export function reverseString(str) {
  if (typeof str !== "string") return;
  return str.split("").reverse().join("");
}

export let calulator = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2,
};

export function caesarChiper(str, shiftNum) {
  let array = str.split("");
  for (let i = 0; i < array.length; i++) {
    let code = array[i].charCodeAt(0);
    let shiftedCode = code + shiftNum;
    if ((code > 64 && code < 91) || (code > 96 && code < 123)) {
      if ((shiftedCode > 90 && shiftedCode < 97) || shiftedCode > 122) {
        array[i] = String.fromCharCode(shiftedCode - 26);
      } else if (
        (shiftedCode > 64 && shiftedCode < 91) ||
        (shiftedCode > 96 && shiftedCode < 123)
      ) {
        array[i] = String.fromCharCode(shiftedCode);
      }
    }
  }
  return array.join("");
}
export function analyzeArray(arr) {
  let length = arr.length;
  let average = arr.reduce((accu, current) => accu + current, 0) / length;
  let min = arr[0];
  let max = arr[0];
  arr.forEach((num) => {
    if (num < min) min = num;
    if (num > max) max = num;
  });
  return {
    average,
    min,
    max,
    length,
  };
}
