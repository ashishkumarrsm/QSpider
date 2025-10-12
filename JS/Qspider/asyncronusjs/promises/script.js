// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (10 < 20) {
//       res("succes");
//     } else {
//       rej("fail");
//     }
//   }, 2000);
// });

// console.log(promise);

// const data = fetch("https://api.github.com/users")
//   .then((data) =>
//     data
//       .json()
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       })
//   )
//   .catch((err) => {
//     console.log(err);
//   });

// console.log(data);

// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((users) => {
//     // users is the array of user objects
//     users.forEach((user) => {
//       console.log(user.login); // Print usernames one by one
//     });

//     // Example: Collect all usernames in an array
//     const usernames = users.map((user) => user.login);
//     console.log(usernames);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const api = fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((products) => {
//     products.forEach((product) => {
//       console.log(product.title); // Print product titles one by one
//     });

//     // Example: Collect all product titles in an array
//     const productTitles = products.map((product) => product.title);
//     console.log(productTitles);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let data =document.querySelector("#data")
// data.contains;

// const api1 = fetch("https://fakestoreapi.com/products")
//   .then((res) => {
//     res
//       .json()
//       .then((jsonRes) => {
//         jsonRes.forEach((data) => {
//           // data.innerHTML=`
//           //     <h1>this is the title ${data.title}</h1>
//           //     <h1>this is the price ${data.price}</h1>
//           //     this is the description :   ${data.description}</h1>
//           // `
//           // console.log(data)
//           console.log(`this is the title ${data.title}`);
//           console.log(`this is the price ${data.price}`);
//           console.log(`this is the description :   ${data.description}`);
//         });
//       })
//       .catch((err) => {
//         console.log(`error`);
//       });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const data = fetch(`https://fakestoreapi.com/products`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.dir(`error `+err );
//   });

// let div=document.getElementById("data")

// let myPromis=new Promise((resolve,reject)=>{
//  const data = fetch('https://fakestoreapi.com/products')
//  return data ? resolve(data) : reject('error')
// })

// myPromis.then((res)=>  res.json())
// .then((data)=>{
//   data.forEach(element => {
//     div.innerHTML+=`
//         <h1>this is the title ${element.title}</h1>
//         <h1>this is the price ${element.price}</h1>
//         <h1>this is the description :   ${element.description}</h1>
//     `
//     // console.log(`this is the title ${element.title}`);
//     // console.log(`this is the price ${element.price}`);
//     // console.log(`this is the description :   ${element.description}`);
//   });
// })
// .catch((err)=>{
//   console.log(err)
// })

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(10), 2000);
});

promise
  .then((result) => {
    console.log(result); // 10
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 20
    return result * 3;
  })
  .then((result) => {
    console.log(result); // 60
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => console.log("Promise chain complete"));

// In this example, each .then() receives the result of the previous one,
// allowing for a sequence of asynchronous operations to be performed in order.
