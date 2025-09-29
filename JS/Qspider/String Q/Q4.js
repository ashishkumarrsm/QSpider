// finde the lengthe of a string without  using .length h


let str='ashi,ashu'

let custmLength=(str)=>{
    let count=0
    for(let i=0;i<str.length;i++){
        count++
    }
    return count
}
console.log(custmLength(str))