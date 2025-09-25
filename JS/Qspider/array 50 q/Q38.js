// implement the .reduce() methode manualy


let arr=[1,2,2,3,4,2,3,4,5,5]

let reduce =(arr)=>{
    let sum=0
    for(let element of arr){
        sum+=element
    }
    return sum 
}
console.log(reduce(arr))
