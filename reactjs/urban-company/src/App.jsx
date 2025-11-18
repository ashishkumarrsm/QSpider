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

// import React, { useState } from "react";
// import LifeCycleMethods from "./lifeCycleMethods/LifeCycleMethods";
// import UseEffect from "./useEffect/UseEffect";

// const App = () => {
//   let [toggel, setToggel] = useState(true);
//   return (
//     <div>
//       {/* <button onClick={() => setToggel(!toggel)}>Remove Component </button>
//       {toggel === true && <LifeCycleMethods />} */}

//       <hr />

//          <button onClick={() => setToggel(!toggel)}>Remove Component </button>
//       {toggel === true &&
//       <UseEffect />}
//     </div>
//   );
// };

// export default App;

// day 3

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// day4

// import React from "react";
// import UseReducer from "./useReducer/UseReducer";

// const App = () => {
//   return (
//     <div className="bg-black w-full h-96">
//       <UseReducer />
//     </div>
//   );
// };

// export default App;

// day4

import React from "react";
import ReactMemoParent from "./Memoization/ReactMemeo/ReactMemoParent";

const App = () => {
  return (
    <div>
      <ReactMemoParent />
    </div>
  );
};

export default App;
