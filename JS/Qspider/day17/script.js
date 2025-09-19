let marks = [20,30,20, 40, 60, 70, 30, 80, 90];

// forEach
//  
let a2= marks.forEach((ele,index,array) => {
        console.log(ele+1)
});

// console.log(a2)
// console.log(marks)

let sum=0
marks.forEach(element => {
    sum+=element
});
console.log(sum)


// reduce

let a= marks.reduce((first,second)=>{
    let newArray=[]
    if(first===second){
        newArray.push(first)
        return newArray
    }
   
})

console.log(a)