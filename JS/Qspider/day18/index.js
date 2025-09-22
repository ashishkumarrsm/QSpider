// padEnd


let str="1234 56789009"

let part=str.slice(9,12)
let part1=str.slice(-4)
let p1=part.padEnd(12,"*")
let p2=part1.padStart(12,"*")
console.log(p1)
console.log(p2)
console.log(p1.concat(p2))


// charAt

console.log(str.charAt(5))
// charat return the charater at the perticular index 

// charcodeat methode are reture the askii valiue which is present at the particular index 


console.log(str.charCodeAt(6))

console.log(str.split())
console.log(str.split(""))
console.log(str.split(" "))