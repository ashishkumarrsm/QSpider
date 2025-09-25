// finde the majority element (appears more than n/2 times)

let arr = [
  1, 1, 1, 1, 1, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3
];

arr.sort((a, b) => a - b);
console.log(arr[arr.length / 2]);



let start =0
let end =arr.length-1
let mid = (start+end)/2


// let frequencyfounder = (arr) => {
//   let freq = {};
//   let majority = null;
//   for (let element in arr) {
//     freq[element] = (freq[element] || 0) + 1;
//     if (freq[element] > arr.length / 2) {
//       majority = element;
//       break;
//     }
//   }
//   return majority
// };
