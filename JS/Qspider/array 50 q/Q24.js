// finde the union of two array

let arr1 = [1, 5, 3, 44, 33, 11];
let arr2 = [1, 23.1, 3, 44, 55];

let newArray = [];

arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

let unionArray = (arr1, arr2) => {
    newArray=arr1.concat(arr2)
    newArray.sort((a,b)=>a-b)
    return newArray
};

console.log(unionArray(arr1,arr2))