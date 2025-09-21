// count even and odd no in array

let arr = [1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 100, 5];

let isEven = (arr) => {
  let isEvenNo = 0;
  let isNotEven = 0;
  for (let i in arr) {
    if (i % 2 == 0) {
      isEvenNo++;
    } else  isNotEven++;
  }
  return { isEvenNo, isNotEven };
};
console.log(isEven(arr));
