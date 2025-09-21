// shorting an array in descending order without using .short() method
let arr = [3, 1, 2, 4, 2, 4, 55, 6];
let shortingUsingBubbleShort = (arr) => {
  let isSwop = false;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSwop = true;
      }
    }
  }
  if (!isSwop) {
    return;
  }
  return arr;
};

console.log(shortingUsingBubbleShort(arr));
