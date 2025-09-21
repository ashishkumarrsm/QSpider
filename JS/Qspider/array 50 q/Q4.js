// Add an elemet at the bigining and end of an array''




let arr=[1,2,3,4,56,7,8]
let findFirstElement=(arr)=>{
   let first= arr.unshift(222)
   console.log(arr)
}
let findLastElemet =(arr)=>{
    let last=arr.push(3333)
    console.log(arr)
}
findFirstElement(arr)
findLastElemet(arr)