// sort an array in ascending order without using .sort() methode 
let arr=[3,1,2,4,2,4,55,6]
// we have some methode to do that like 



// 1. bubble short 
let shortingUsingBubbleShort=(arr)=>{
    let isSwop=false
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                isSwop=true
            }
        }
    }
    if(!isSwop){
        return;
    }
    return arr
   
}
console.log(shortingUsingBubbleShort(arr))


// 2.  Selection Short



let sortingUsingSelectionShort=(arr)=>{
    for(let i=0;i<arr.length;i++){
        let smalIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[smalIndex]){
                smalIndex=j
            }
        }
        [arr[i],arr[smalIndex]]=[arr[smalIndex],arr[i]]
    }
    return arr
}

console.log(sortingUsingSelectionShort(arr))