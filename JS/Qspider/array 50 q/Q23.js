// find the intersection of two array

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5, 6];

let intersectionArray = [];

arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

let interSection = (arr1, arr2) => {
  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    if ((arr1[i] = arr2[index])) {
      intersectionArray.push(arr1[i]);
      index++;
    }
  }
  return intersectionArray;
};
console.log(interSection(arr1, arr2));
