// finde the majority element (appears more than n/2 times)

let arr = [1,1,1,1,1,2,2,2];

let frequencyfounder = (arr) => {
  let freq = {};
  let majority = null;
  for (let element of arr) {
    freq[element] = (freq[element] || 0) + 1;
    if (freq[element] > arr.length / 2) {
      majority = element;
      break;
    }
  }
  return majority
};

console.log(frequencyfounder(arr));
