// // console.log(`hello`);

// // const element = document.querySelectorAll(".box");

// // element.forEach((element) => {
// //   console.log(element);
// // });

// const element1 = document.querySelectorAll("li");
// const container = document.querySelector(".container");
// const listItems = ["assa", "addsacsdc", "asdfsfasd"];

// // listItems.forEach((element) => {
// //   const li = document.createElement("li");
// //   li.innerText = element;
// //   element1[element1.length - 1].append(li);
// // });

// const colour=['pink','red','black','yellow']
// let count = 0;
// let changeProperty = () => {
//   if (count < container.length) {
//     container.style.backgroundColor = colour[count];
//     container.style.borderRadius = "50%";
//     count++
//   } else {
//     count = 0;
//     container.style.backgroundColor = colour[count];
//     container.style.borderRadius = "50%";
//   }
// };







const input=document.querySelector("#input")
const list =document.querySelectorAll('li')


const addCity=()=>{
    const li=document.createElement("li")
    li.setAttribute("class",`li${list.length+1}`)

    li.innerText=input.value 
    input.value=''
    list[   list.length-1].append(li)
}