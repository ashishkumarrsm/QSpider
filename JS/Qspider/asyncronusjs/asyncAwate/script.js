let api = `https://api.github.com/users`;
// const jsonData = async (api) => {
//   let response = await fetch(api);
//   let jsonD = await response.json();
//   return jsonD;
// };

// jsonData(api)
//   .then((res) => {
//     res.forEach((element) => {
//       console.log(element.login);
//     });
//   })
//   .catch((err) => console.log(err));


const data =async (api)=>{
   try{
     let response=await fetch(api)
    if(!response.ok){
        throw new Error('the responce not work ')
    };
    const data= await response.json
    data.forEach((element)=>console.log(element))
   }
   catch{
    console.log(`faild to fact the data `)
   }
}
data(api)