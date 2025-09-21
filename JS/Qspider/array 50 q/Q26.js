// find all paires of numbers in  an array whos sum is equal to a target

let findeThePairOf = 4;
let arr = [1, 3, 3, 1];

let pair = (arr) => {
  let pairCount = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === findeThePairOf) {
        pairCount++;
      }
    }
  }
  return pairCount;
};

console.log(`the all pair is :- ${ pair(arr)}`);
