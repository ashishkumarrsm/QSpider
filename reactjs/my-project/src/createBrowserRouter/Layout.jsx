import React from "react";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <ul>
        <li>
          {" "}
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          {" "}
          <Link to={"/about"}>about</Link>
        </li>
        <li>
          {" "}
          <Link to={"/contact"}>contact</Link>
        </li>
        <li>
          {" "}
          <Link to={"/service"}>Service</Link>
        </li>
        <li>
          {" "}
          <Link to={"/*"}>Note Found</Link>
        </li>
      </ul>
      <hr />
    <Outlet/>
    </>
  );
};

export default Layout;
