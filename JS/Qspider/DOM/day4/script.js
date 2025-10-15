// console.log(`object`)

const button = document.querySelector("button");
const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const changeText = () => {
  //   if (button.innerText == "Login") {
  //     button.innerText = "logOut";
  //   } else {
  //     button.innerText = "Login";
  //   }

  button.innerText == "Login"
    ? (button.innerText = "logOut")
    : (button.innerText = "Login");
};

button.addEventListener("click", (e) => {
  // console.log(e.target)
  e.target.innerText == "Login"
    ? (e.target.innerText = "logOut")
    : (e.target.innerText = "Login");
});

box1.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("this is the box no 1");
  e.preventDefault();
  box1.style.background = "gray";
});
box2.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("this is the box no 2");
  e.preventDefault();
  box2.style.background = "green";
});
box3.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("this is the box no 3 ");
  e.preventDefault();
  box3.style.background = "red";
});
box4.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("this is the box no 4");
  e.preventDefault();
  box4.style.background = "pink";
});






const emp={
    ename:"Ashish Kumar",
    empId:10,
    sal:20000,
    skill:{
        frountend:["html","css","js","react "]
    }
}

let person=emp
person.sal=30000000


console.log(person)
console.log(emp)






const submit=document.querySelector("#submit")


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(e)
})