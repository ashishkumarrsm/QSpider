// how we can select the elemnt in js we have 


let h1=document.getElementById('abc')


console.dir(h1)

 

// manuplation 
//  text changing 

h1.innerHTML=`Ashish kumar`

let a=document.querySelector('a')
// atribute manuplation 
a.setAttribute('href','https://google.com')


let img=document.querySelector('img')
img.setAttribute('src','https://cdn.pixabay.com/photo/2023/11/21/19/47/fall-8404115_1280.jpg')


console.log(a.getAttribute( "href"))



console.log(a.removeAttribute('href'))


// dynamic dom manipulation 
// 1. create element 
// create 
// append /prepand 

let p=document.createElement('p')
p.textContent='Ashish Kumar and '
document.querySelector('div').appendChild(p)




// style update 
let div=document.querySelector("div")
div.style.color='red'
let body =document.querySelector('body')
body.style.backgroundColor=b