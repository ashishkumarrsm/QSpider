// 1object literals 

let secr='account'

const obj={
    ename: 'ashsis kumar',
    eid:'typoo3',
    sal:20000,
    [secr]:"sdsbsiwg"
}

//  thare are two way to acces the data from object 
// 1. dit notation
// 2. [] /*------------------------ whenever the keyname is in string format ---------------------------------


const resiltArr=Object.keys(obj)
resiltArr.forEach((ele,i)=>{
    console.log(obj[ele])
    console.log(ele)
})


//  2. 



const employee=(a,b)=>{
    this.abc=a
    this.bc=b
    console.log(this.abc,this.bc)

}


console.log(employee(20,30))

















// binding in js 

// binding is the process of pointing a function with the particular object 

//  binding can be achive by 3 way 
// 1 call
// 2. apply
// 3. bind 
// thay 3 are the function 
// binding are use to optimize the code 