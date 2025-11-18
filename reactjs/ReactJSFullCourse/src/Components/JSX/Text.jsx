import React from "react";

const Text = () => {
  let arr = [1, 2, 3, 4, 5, 67, 8, 3];
  return (
    <div>
      <p>This is the way how we will use the jsx </p>
      {arr?.map((value) => 
      {
        <p>
              This is the way how we will return the data inside the jsx file or
              this is the way how we will work with jsx format or html like code{" "}
            </p>
        return (
          <>
            {" "}
            
            <p>{value}</p>
          </>
        );
      })}
    </div>
  );
};

export default Text;
