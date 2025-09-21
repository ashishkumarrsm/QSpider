// remove duplicate from array

let arr = [1, 1, 1, 2, 3, 4, 5, 666, 777, 666];
let newArray = [];



let removeDuplicate = (arr) => {
    newArray = [];  // reset to empty for each call
    for (let i = 0; i < arr.length; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

console.log(removeDuplicate(arr));

// let newArray=[... new Set(arr)]
// A Set in JavaScript is a special data structure that stores unique values, meaning it automatically prevents duplicates. It can hold any type of value — primitives like numbers or strings, as well as objects

console.log(newArray)