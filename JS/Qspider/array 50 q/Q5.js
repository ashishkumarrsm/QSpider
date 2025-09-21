// remove the first and the last elemet of the array 
let arr=[1,2,3,4,56,7,8]
console.log(`this is the orignal array  ${arr}`)
let findFirstElement=(arr)=>{
   let first= arr.shift()
   console.log(`This is the first elemet of an array ${first}`)
   console.log(arr)
}
let findLastElemet =(arr)=>{
    let last=arr.pop()
    console.log(`this is the last elemet of array ${last}`)
    console.log(arr)
}
findFirstElement(arr)
findLastElemet(arr)