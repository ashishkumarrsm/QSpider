// // Questions based on Functions and Array:

// // 1. WAJSP to find the sum of array elements.

// let arr = [1, 2, 3, 4, 6,4,5,56];
let arr = [1, 2, 3, 4, 6, 4, 5, 5, 56, 23, 444, 555, 666, 33];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(`this is the sum of the array ${sum}`);

// // 2. WAJSP to find the maximum value inside the array.

let max = 0;
function findMax() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
// findMax();

// // Q3. 3. WAJSP to find the duplicate values from the array.

let duplicateValue = [];
function duplicateValues(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicateValue.push(arr[i]);
      }
    }
  }
  return duplicateValue;
}
console.log(duplicateValues(arr));
// // Q4.  WAJSP to find the frequency of repeated elements.

let freq = 0;
function findFrequency(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        freq++;
      }
    }
  }
  return freq;
}

console.log(findFrequency(arr));

// // Q5.  WAJSP to find the prime number from the given array.

// let primeNum = [];
// function primeNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i]!==)
//   }
// }

// Q6 WAJSP to sort the array in ascending and descending order.
// that function for assendin orser and it is used inside the sort methode or function
let comparsion =(a,b)=>{
 return a-b
}

// this is the method or function foe desending order sorting of an array 

// let comparsion =(a,b)=>{
//  return b-a
// }
console.log(arr.join("-"));
console.log(arr.toString());
arr.sort(comparsion)
console.log(arr)