// reverse the array ywithout using .reverse() methode

let arr = [3, 4, 56, 23, 1, 112, 33];
let newArray = [];

let isReverse = (arr)=>{
  for(let i=arr.length -1;i>=0;i--){
    newArray.push(arr[i])
  }
return newArray
}
console.log(isReverse(arr))




// let arr = [3, 4, 56, 23, 1, 112, 33];
// let newArray = [];

// let isReverse = (arr) => {
//   for(let i = arr.length - 1; i >= 0; i--) {
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }

// console.log(isReverse(arr));