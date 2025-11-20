import React, { useCallback, useState } from "react";
import UserCbChild from "./UserCbChild";

const UserCbParent = () => {
  let [count, setCount] = useState(0);
  function handeler() {
    console.log(`object`);
  }
  let hendel = useCallback(handeler, []);
  hendel;
  // handeler()
  return (
    <>
      <div>UserCbParent</div>

      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}> increment</button>

      <UserCbChild />
    </>
  );
};

export default UserCbParent;
