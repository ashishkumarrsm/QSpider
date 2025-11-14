// import React from 'react'

// const App = () => {
//   return (
//     <div className='bg-black'>
//       hello
//     </div>
//   )
// }

// export default App

// import React, { Component } from 'react'
// import NavBar from './components/NavBar'
// import Products from './components/Products'
// import Footer from './components/Footer'
// import Test from './components/Test1'

// export default class App extends Component {
//   render() {
//     return (
//       <>
//       <NavBar/>
//       <Products/>
//       <Footer/>
//       <Test/>

//       {/* <h1 className='bg-red-500'> Hello</h1> */}

//       </>
//     )
//   }
// }

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Service from "./Pages/service";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/service"}>Servece</Link>
          </li>
          {/* <Link to={'/'}>Home</Link> */}
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
