// check if ann element exists in an array

let elemntSearch = parseInt(
  prompt("enetr  the elemt you want to search in array ")
);
let arr = [1, 2, 3, 4, 566, 33, 6, 777, 88, 7];

let isExist = (arr) => {
  for (let i of arr) {
    if (i == elemntSearch) {
      console.log(`that element is exist in the array and the elemet is ${i}`);
    }
    console.log(`this elemnt are not present `);
  }

  return elemntSearch;
};

console.log(isExist(arr));
