// find the sum of no in array

//  we have one in bild mathod and also we can do it without inbild mathod

// 1. inbild mathod


let arr=[12,2,4,5,7]

let isSum=(arr)=>{
   return arr.reduce((a,b)=>{
        return a+b
    })
}
console.log(`With Built-in Method`)
console.log(isSum(arr))


// 2.  Without Built-in Method


let sum=0
let isSum1=(arr)=>{
    for(let i of arr){
        sum+=i

    }
    return sum
}
console.log(`this mathod is Without Built-in Method`)
console.log(isSum1(arr))