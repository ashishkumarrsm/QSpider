// Access the first and the last element of an array 

let arr=[1,2,3,4,56,7,8]
let findFirstElement=(arr)=>{
   let first= arr.shift()
   console.log(`This is the first elemet of an array ${first}`)
}
let findLastElemet =(arr)=>{
    let last=arr.pop()
    console.log(`this is the last elemet of array ${last}`)
}
findFirstElement(arr)
findLastElemet(arr)