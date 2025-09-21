// merge two array into one 
// we have two way to do this 
// 1. Without Built-in Method
// 2. With Built-in Method

// 1. Without Built-in Method


let arr1=[1,2,3,4,5,6]
let arr2=[1,2,3,4,5]
let newArray=[]
let isMerge=(arr1,arr2)=>{
    for(let i of arr1){
        newArray.push(i)
    }
    for(let j of arr2){
        newArray.push(j)
    }
    return newArray
}

console.log(isMerge(arr1,arr2))

// With Built-in Method



let isMerge1=(arr1,arr2)=>{
    return newArray=arr1.concat(arr2)
}
console.log(isMerge1(arr1,arr2))