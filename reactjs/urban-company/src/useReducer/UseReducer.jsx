import React from "react";
import { useReducer } from "react";

let initalValue = {
  count: 0,
};
const UseReducer = () => {
  console.log(useReducer);
  let [val, setVal] = useReducer((stateValue, action) => {
    console.log(action.type);
    if (action.type === "Increment") {
      return {
        count: stateValue.count + 1,
      };
    } else if (action.type === "Decrement") {
      return {
        count: stateValue.count - 1,
      };
    } else if (action.type === "reset") {
      return {
        count: 0,
      };
    } else {
      throw Error(action.type);
    }
  }, initalValue);
  return (
    <>
      <div>UseReducer</div>
      <h2>{val.count}</h2>
      <button
        onClick={() => {
          setVal({ type: "Increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setVal({ type: "Decrement" });
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          setVal({ type: "reset" });
        }}
      >
        reset
      </button>
    </>
  );
};

export default UseReducer;
