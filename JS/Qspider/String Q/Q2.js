// chack if a given string is palindrome or not


let str='asa'

let palindrome=(str)=>{
    let revStr=''
    for(let i=str.length-1;i>=0;i--){
        revStr+=str[i]
    }
    if(str===revStr){
        console.log(`yaaa this is a   return palindrome string and the string is ${str} and the revrse string is ${revStr}`)
    }
    else {
        console.log(`this is not a palindrme string `)
    }
}


palindrome(str)