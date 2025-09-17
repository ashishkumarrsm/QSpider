// // Questions based on Functions and Array:

// // 1. WAJSP to find the sum of array elements.

// let arr = [1, 2, 3, 4, 6,4,5,56];
let arr = [1, 2, 3, 4, 6, 4, 5, 5, 56, 23, 444, 555, 666, 33, 1221, 2112, 3223];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(`this is the sum of the array ${sum}`);

// // 2. WAJSP to find the maximum value inside the array.

// let max = 0;
// function findMax() {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log(max);
// }
// findMax();

// // Q3. 3. WAJSP to find the duplicate values from the array.

// let duplicateValue = [];
// function duplicateValues(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         duplicateValue.push(arr[i]);
//       }
//     }
//   }
//   return duplicateValue;
// }
// console.log(duplicateValues(arr));
// // Q4.  WAJSP to find the frequency of repeated elements.

// let freq = 0;
// function findFrequency(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         freq++;
//       }
//     }
//   }
//   return freq;
// }

// console.log(findFrequency(arr));

// // Q5.  WAJSP to find the prime number from the given array.

// let primeNum = [];
// function primeNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i]!==)
//   }
// }

// Q6 WAJSP to sort the array in ascending and descending order.
// that function for assendin orser and it is used inside the sort methode or function
// let comparsion =(a,b)=>{
//  return a-b
// }

// this is the method or function foe desending order sorting of an array

// let comparsion =(a,b)=>{
//  return b-a
// }

// in ascending order

// let ascending = (a, b) => {
//   return a - b;
// };
// let ascendingShortArray = arr.sort(ascending);
// console.log(ascendingShortArray);

// we can  use two approch 1. reverce() method and 2nd is desending function using

// 1. reverce methode

// let descendingShortArray = arr.reverse();
// console.log(descendingShortArray);

// 2. using comparison method or we can say using one descending function

// let descending = (a, b) => {
//   return b - a;
// };

// let descendingShortArray1 = arr.sort(descending);
// console.log(descendingShortArray1);

// Q7. WAJSP to reverse the array without using inbuilt functions.

// let newArray = [];
// function reverseArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//      let pop=arr.pop()
//      console.log(pop)
//      newArray.push(pop)
//   }
//   return newArray;
// }

// console.log(reverseArray(arr))

// Q8.  WAJSP to findout the palindrome numbers from the given array.
// let palindromNumber = [];
// function isPalindrome(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let orignalArray = arr[i].toString();
//     let reverse = orignalArray.split("").reverse().join("");
//     if (orignalArray === reverse) {
//       palindromNumber.push(arr[i]);
//     }
//   }
//   return palindromNumber;
// }
// console.log(isPalindrome(arr));


// Q9. WAJSP to find out the armstrong number.


// Q10. WAJSP to rotate the array by the given number of rotation

