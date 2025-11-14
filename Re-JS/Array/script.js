const  strs = ["flower","flow","flight"]


const longestCommonPrefix=(strs)=>{
   for(let i of strs){
    console.log(i)
    let result=i.split(" ")
    console.log(result)
   }
}
longestCommonPrefix(strs)