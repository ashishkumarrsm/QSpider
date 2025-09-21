let array =[25,3,45,2,445]
let big=0

for(let i=0;i<array.length;i++){
    for(let j=i+1;j<array.length;j++){
        if(array[i]>array[j]){
           big=array[i]
           array[i]=array[j]
           array[j]=big
        }
        
    }
}
console.log(array)



array.sort((a,b)=>{
    return a-b
})


// let a='hello'
// console.log(a.slice(-5,-3))
// console.log(a.substring(0,3))
// console.log(a.replace("h","A"))
// console.log(a.replaceAll("l","A"))
// console.log(a.toLowerCase())
// console.log(a.toUpperCase())
