// console.log("hello");

// document.writeln(`<pre> Q1. this is the firs pattern 
       
//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *
//     * * * * *
    
    
    
// Ans: 

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     document.writeln("* ");
//   }
//   document.writeln("<br/>");
// }
// </pre>`);
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     document.writeln("* ");
//   }
//   document.writeln("<br/>");
// }

// document.writeln(`<pre> Q2. this is the 2nd pattern 
       
//     * 
//     * * 
//     * * *
//     * * * * 
//     * * * * *
    
    
    
// Ans: 


// for (let a = 0; a <= 5; a++) {
//   for (let b = 0; b < a; b++) {
//     document.writeln("*");
//   }
//   document.writeln("<br/>");
// }


// </pre>`);

// for (let a = 0; a <= 5; a++) {
//   for (let b = 0; b < a; b++) {
//     document.writeln("*");
//   }
//   document.writeln("<br/>");
// }

// document.writeln(`<pre> Q2. this is the 2nd pattern 
       
//     1
//     1 2
//     1 2 3
//     1 2 3 4 
//     1 2 3 4 5
// Ans: 



// for (let c = 0; c < 5; c++) {
//   for (let d = 0; d < c; d++) {
//     document.writeln(d);
//   }
//   document.writeln("<br />");
// }


// </pre>`);

// for (let c = 0; c < 5; c++) {
//   for (let d = 0; d < c; d++) {
//     document.writeln(d);
//   }
//   document.writeln("<br />");
// }

// document.writeln(`<pre> Q3. this is the 3rd pattern 
       
//     1
//     2 2
//     3 3 3
//     4 4 4 4 
//     5 5 5 5 5
// Ans: 



// for (let i = 0; i < 8; i++) {
//   for (let j = 0; j < i; j++) {
//     document.writeln(i);
//   }
//   document.writeln("<br/>");
// }



// </pre>`);

// for (let i = 0; i < 8; i++) {
//   for (let j = 0; j < i; j++) {
//     document.writeln(i);
//   }
//   document.writeln("<br/>");
// }

// document.writeln(`<pre> Q4. this is the 4th pattern 
       
//    * * * * *
//    * * * *
//    * * * 
//    * *  
//    * 
// Ans: 


// for (let i = 5; i > 0; i--) {
//   for (let j = 5; j >i; j--) {
//     document.writeln("*");
//   }
//   document.writeln("<br/>");
// }



// </pre>`);

// // for (let i = 5; i > 0; i--) {
// //   for (let j = 0; j >5; j--) {
// //     document.writeln("*");
// //   }
// //   document.writeln("<br/>");
// // }

// document.writeln(`<pre> Q4. this is the 4th pattern 
       
//    * * * * *
//    * * * *
//    * * * 
//    * *  
//    * 
// Ans: 


// for (let i = 5; i > 0; i--) {
//   for (let j = 5; j >i; j--) {
//     document.writeln("*");
//   }
//   document.writeln("<br/>");
// }



// </pre>`);

// // for(let i="A";i<"E";i++){
// //     for(let j="A";j<"E";j++){
// //       document.writeln(j)
// //     }
// //     document.writeln("<br/>")
// // }

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j < 5; j++) {
//     document.writeln("*");
//   }
//   document.writeln("<br/>");
//   for (let q = 0; q < 5; q++) {
//     document.writeln("#");
//   }
//   document.writeln("<br/>");
// }

// document.writeln(`
  
//          <pre>
//                      *
//                    * * *
//               * * * * * * * *
//               *             *
//               * * * * * * * *    
//          </pre>`);




        

         let a=5;
         let b=1
         for(let i=0;i<7;i++){
              for(let j=0;j<b;j++){
                document.writeln(a)
                a+=5;
              }
              b++
              
             document.writeln("<br/>")
         }
         