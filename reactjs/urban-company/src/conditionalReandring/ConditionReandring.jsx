import React, { useState } from "react";

const ConditionReandring = () => {
  let [mode, setMode] = useState("ax");
  if (mode === "a") {
    return (
      <>
        <h1>Lorem, ipsum.</h1>
      </>
    );
  } else if (mode === "b") {
    return (
      <>
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit,
          eligendi amet qui voluptas voluptates iure eveniet reprehenderit
          doloremque veritatis labore cum, exercitationem dolorum?
        </h1>
      </>
    );
  } else {
    return (
      <>
        <h1>kdbdschsidc</h1>
      </>
    );
  }
};

export default ConditionReandring;
