function sum(a, b) {
  return a * b;
}

let arr1 = [20, 30, 40, 50];
let arr2 = [20, 30, 40, 50];

function findArea(squar) {
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += squar(arr1[i], arr2[i]);
  }
  console.log(sum);
}
findArea(sum);




function* data(a){
    yield a+20
    yield a+30
    yield a+40
    yield a+50
    yield a+260
}

let result= data(10);
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
console.log(result.next().value)
