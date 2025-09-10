
// function doc(){
//     let a=10
//     let b=10

//     function inside() {
//         let c=90
//         document.writeln(a,c)
//     }
//     inside()
// }
// doc()

function doc(){
    let a=10
    let b=10

    function inside() {
        let c=90
        document.writeln(a,c)
        function gchild(){
            let d=30;
            document.writeln(a,b,c)
        }
        gchild()
    }
    inside()
}
doc()