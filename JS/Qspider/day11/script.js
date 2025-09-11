// function parent() {
//   console.log("object");
//   let a = 10;
//   let b = 20;
//   return function child1() {
//     let c = 30;
//     console.log(a, c);
//     return function gchild() {
//       let d = 40;
//       console.log(a, b, c, d);
//     };
//   };
// }
// parent()()();
// console.log("this is without function")

// (function () {
//   let a = 10;
//   let b = 20;
//   console.log("this is the iif function");
//   console.log(a, b);
// })();

// (function ashish1() {
//   let a = 10;
//   let b = 20;
//   console.log("this is the iif function");
//   console.log(a, b);
// })();


// explecit return
const add = (a, b) => {
  console.log(a, b);
  let sum = a + b;
  console.log(sum);
};
add(10, 20);

const add1 = (a, b) => {
  return a + b;
};
console.log(add1(10, 20))





// implesit retun 


let a=(a,b)=>a+b
console.log(a(2,3))