// import React, { useState } from 'react'
// import ConditionReandring from './conditionalReandring/ConditionReandring'
// import ConditionalReandring2 from './conditionalReandring/ConditionalReandring2'
// import ConditionalRendring3 from './conditionalReandring/ConditionalRendring3'
// import P1 from './props/P1'
// import ThemContext from './contextAPI/ThemContext'
// import Home from './contextAPI/Home'

// const App = () => {
//    let[theam,setTheam]= useState("White")
//     console.log( useState())
//   return (
//     <div >
//      {/* <ConditionReandring/>
//      <ConditionalReandring2/>
//      <ConditionalRendring3/> */}

//      {/* <P1/> */}

//      <ThemContext.Provider value={theam}>
//       <Home/>
//      </ThemContext.Provider>
//     </div>
//   )
// }

// export default App

// day2

import React, { useState } from "react";
import LifeCycleMethods from "./lifeCycleMethods/LifeCycleMethods";
import UseEffect from "./useEffect/UseEffect";

const App = () => {
  let [toggel, setToggel] = useState(true);
  return (
    <div>
      {/* <button onClick={() => setToggel(!toggel)}>Remove Component </button>
      {toggel === true && <LifeCycleMethods />} */}

      <hr />




         <button onClick={() => setToggel(!toggel)}>Remove Component </button>
      {toggel === true &&
      <UseEffect />}
    </div>
  );
};

export default App;
