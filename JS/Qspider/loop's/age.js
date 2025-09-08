console.log("hello");

let userAge = parseInt(prompt("Enter the age of user "));

if (userAge < 18) {
  if (userAge >= 1 && userAge <= 3) {
    document.writeln("<h1>that website user by a child </h1>");
  } else if (userAge > 3 && userAge <= 18) {
    document.writeln("<h1> That website user by a boy</h1>");
  }
}
else if(userAge>18){
    if(userAge>21 && userAge<55){
        document.writeln("<h1> Do marrig</h1>")
    }
    else if(userAge>=55 && userAge<=65){
        document.writeln("<h1> sinior citysan</h1>")
    }
    else{
        document.writeln("<h1>super senior citzen</h1>")
    }
}