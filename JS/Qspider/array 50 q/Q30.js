// split an array into chunks of given size
let arr = [1, 12, 3, 3, 44, 5, 6, 88, 9];
let k = 2;

const chunks = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(chunks(arr, k));