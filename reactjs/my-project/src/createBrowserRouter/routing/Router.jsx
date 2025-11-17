// import React from "react";
// import { createBrowserRouter } from "react-router-dom";
// import Layout from "../Layout";
// import Home from "../../Pages/Home";
// import About from "../../Pages/About";
// import Contact from "../../Pages/Contact";
// import Service from "../../Pages/service";
// import NotFound from "../../Pages/NotFound";

// const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//       {
//         path: "/service",
//         element: <Service />,
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);

// export default Router;


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../Layout";

import Home from "../../Pages/Home";
import About from "../../Pages/About";
import Contact from "../../Pages/Contact";
import Service from "../../Pages/service";
import NotFound from "../../Pages/NotFound";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<Layout />}>
      <Route index element={<Home />} />
      <Route path={"about"} element={<About />} />
      <Route path={"/contact"} element={<Contact />} />
      <Route path={"/service"} element={<Service />} />
      <Route path={"*"} element={<NotFound />} />
    </Route>
  ),
);

export default Router;
