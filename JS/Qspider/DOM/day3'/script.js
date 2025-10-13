// getElementsByClassName

const box=document.getElementsByClassName("box")
const ol=document.querySelectorAll("li")
console.log(box)
console.log(ol)

box[2].style.backgroundColor='red'
box[2].style.borderRadius='20px'
box[2].style.alignItem='center'
box[2].style.textAlign='center'


ol[0].style.background='red';
ol[1].style.background='yellow';
ol[2].style.background='gray';
ol[3].style.background='pink';