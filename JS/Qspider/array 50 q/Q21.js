// check if two array are equal

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 1, 3, 5, 4];

arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

let equalArray = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};
if (equalArray(arr1, arr2)) {
  console.log(`the arrays are equal `);
} else console.log(`the arrays are not equal`);
