// console.log(`hello `)




// const obj={
//     ename :"ahsi"
// }

// const emp={
//     ename1:"ashu"
// }

// console.log(Object.assign({},obj,emp))


// console.log(obj)
// console.log(emp)


// console.log(obj.hasOwnProperty("ename"))


let otp=Math.round(Math.random()*10000)

console.log(otp)


let arr=[1,[2,3,[4]]]


let add=(a,b,c,d,e)=>{
    console.log(a,b,c)
}
add(...arr)