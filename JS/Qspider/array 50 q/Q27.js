// find the frequency of each element in array 


let arr=[1,1,2,3,4,4,55,55,55,3,3,2]

let frequencyfounder=(arr)=>{
  let freq={};
  for(let element of arr){
    freq[element]=(freq[element] || 0)+1
  }
  return freq
}
console.log(frequencyfounder(arr))