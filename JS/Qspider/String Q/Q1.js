//  wright a programe to revrce a atring without using in bulit function


let str='Ashish Kumar'

let reverse=(str)=>{
    let reverse=''
    for(let i=str.length-1;i>=0;i--){
        reverse+=str[i]
    }
    return reverse
}
console.log(reverse(str))