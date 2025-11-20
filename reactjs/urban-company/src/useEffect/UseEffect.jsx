// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {
//     // console.log(useEffect)
// let [count,setCount]=useState(0)
//     useEffect(()=>{
//         console.log(`that component are mount ......`)
//     },[])

// useEffect(()=>{
//     console.log(`that component is update at ${count} time`)
// },[count])

// useEffect(()=>{
// return ()=>{
//     console.log(`unmounte.....`)
// }
// },[])

//   return (
//     <div>
//         <p>this is the cout {count}</p>
//       <button onClick={()=>setCount(count+1)}>click me </button>
//     </div>
//   )
// }

// export default UseEffect








// Assignment
import React, { useEffect, useState } from "react";

const UseEffect = () => {
  // console.log(useEffect)
  let [count, setCount] = useState(0);
  let [users, setUsers] = useState([]);
  let [intervalCount, setIntaevalCount] = useState(0);

  useEffect(() => {
    console.log(`that component are mount ......`);

    const fetchData = async () => {
      let result = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await result.json();
      console.log(data);
      setUsers(data);
      return data;
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(`that component is update at ${count} time`);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntaevalCount((pre) => pre + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="bg-red-500">
        {" "}
        this is the set interval{" "}
        <span className="bg-red-700 text-2xl">{intervalCount}</span>
      </p>
      <p>this is the cout {count}</p>
      <button onClick={() => setCount(count + 1)}>click me </button>

      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Website</th>
          <th>Company-Name</th>
        </tr>
        {users?.map((data) => {
          return (
            <React.Fragment key={data.id}>
              <tr>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>{data.website}</td>
                <td>{data.company.name}</td>
              </tr>
            </React.Fragment>
          );
        })}
      </table>
    </div>
  );
};

export default UseEffect;
