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

// let otp=Math.round(Math.random()*10000)

// console.log(otp)

// let arr=[1,[2,3,[4]]]

// let add=(a,b,c,d,e)=>{
//     console.log(a,b,c)
// }
// add(...arr)

// array  destructring and object destructring

// 1. when we destructure an array we use [] only
// 2. when we destructring an array we can use any variable name
// 3. we can skip the elemntes

// let emp={
//     name :"Ashish",
//     class:"mca",
//     skil:{
//         fe:['html','css','js','react','nextjs'],
//         be:['js','node','expres','mongodb']
//     }
// }

// let {name,skil:{fe:[a,b,c,d,e]},}={...emp}

// console.log(a,b,c)

const data = {
  salary: 50000,
  age: 24,
  name: "ashish",
  skills: {
    frontEnd: ["html", "css", "js", "react", "nextjs"],
    backEnd: ["node", "express", "mongodb"],
  },
  comm: {
    year: [2019, 2020, 2021, 2022, 2023, 2024, 2025],
    hikePercent: [10, 15, 20, 25, 8, 30, 30],
    incremwent: [],
  },
};

let {
  salary,
  age,
  name,
  skills: {
    frontEnd: [a, b, c, d, e, q, r, t],
  },
  comm: {
    year: [f, g, h, i],
    hikePercent: [j, k, l, m, z, x, w],
    incremwent: n,
  },
} = { ...data };

for (let i = 0; i < data.comm.hikePercent.length; i++) {
  data.comm.incremwent.push((data.salary * data.comm.hikePercent[i]) / 100);
  data.salary += data.comm.incremwent[i];
}
console.log(data.comm.incremwent);

