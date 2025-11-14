import React, { useState } from "react";

let data = [1, 2, 3, 34, 2, 34, 2];
function add(a,b){
    return console.log(a+b)
}
add()
const ConditionalRendring3 = () => {
  let [message, setMessage] = useState(data);
  return (
    <>
      notification
      {/* ternary operater */}
      {/* {message.length > 1 ? <sup>{message.length}</sup> : ""} */}
      {/* sjorte sharkitre operater  */}
      {message.length > 1 && <sup>{message.length}</sup>}
    </>
  );
};

export default ConditionalRendring3;
