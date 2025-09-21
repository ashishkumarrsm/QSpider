// finde the max no in array 


let arr=[1,2,3,4,5,6,7,8,9,99,3333,100000]


let maxNo=arr[0]

let isMaxNo=(arr)=>{
    for(let i of arr){
        if(i>arr[0]){
            maxNo=i
        }
    }
    return maxNo
}

console.log(isMaxNo(arr))