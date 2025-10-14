import React, { useState } from "react";

const Test1 = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count:{count}</p>
      <button
        onClick={() => {
          setCount(() => count + 1);
        }}
      >
        {" "}
        count{" "}
      </button>

      <button
        onClick={() => {
          setCount(count > 0 ? count - 1 : 0);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Test1;
