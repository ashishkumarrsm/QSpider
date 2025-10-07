const p = new Promise((res, rej) => {
    res("Hello");
});

p.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("eroor :"+error); 
}).finally(console.log("I am finally"))

