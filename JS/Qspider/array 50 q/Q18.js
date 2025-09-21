// rotate an array by k positin
let k=parseInt(prompt("Entert the no of rotation......"))
let arr=[1,2,3,4,5,6]

let rotateByK=(arr)=>{
    for(let i=0;i<k;i++){
        arr.push(arr.shift())
    }
    return arr
}
console.log(rotateByK(arr))