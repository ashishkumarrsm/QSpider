// find the index of the given elemet in an array

let value = parseInt(prompt("enter the value you wante to finde the index "));
let array = [1, 2, 3, 4, 5, 6, 7, 8];

let findIndex = (array) => {
  for (let i = 0; i <= array.length; i++) {
    if (value === array[i]) {
      console.log(
        `this is the index of the ${array[i]} and this is the index ${i}`
      );
    }
  }
  return value;
};
console.log(findIndex(array));
