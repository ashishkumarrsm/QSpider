// finde the second largest element in an array

let arr = [22, 33, 2, 44, 2, 54, 67, 88];

let findSecondLargestNo = (arr) => {
  let isLarge = 0;
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[isLarge]) {
      arr[isLarge] = arr[i];
    }
  }return arr[isLarge]
};

console.log(findSecondLargestNo(arr));
