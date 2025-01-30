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
  let tmp = [];
  for (let index = array.length - 1; index >= 0; index--) {
    tmp.push(array[index]);
  }
  return tmp.join("");
}
