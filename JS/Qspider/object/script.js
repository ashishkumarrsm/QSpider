// object 

const obj={
    "Ename":"Ashish Kumar",
    "class":"MCA",
    "Roll No ":20,
    "Add":"RSM"
}

// by using cunstructure function 






Object.keys(obj).forEach((key,index)=>{
    console.log(`this is the value of key  ${key} and the value of this is ${obj[key]}`)
})
Object.values(obj).forEach((value,index)=>{
    console.log(`this is the value ${value} `)
})

Object.entries(obj).forEach((key,index)=>{
    console.log(key)
})