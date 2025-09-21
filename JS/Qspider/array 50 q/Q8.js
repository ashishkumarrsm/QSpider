// find the min no in array

let arr=[11,334,6,67,7,99]
let minNo=arr[0]

let isMinNo=(arr)=>{
    for(let i of arr){
        if(i<minNo){
            minNo=i
        }
    }
    return minNo
}

console.log(isMinNo(arr))