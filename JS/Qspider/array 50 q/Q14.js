// replace the specific element in array

let value = 2;
let newValue = 33;
let arr = [1, 2, 3, 4, 5, 6, 2, 7];

let replaceArrayElemet = (arr) => {
 for(let i=0;i<arr.length;i++){
    if(arr[i]===value)
        arr[i]=newValue
 }
  return newValue;
};

console.log(replaceArrayElemet(arr));
console.log(arr);



