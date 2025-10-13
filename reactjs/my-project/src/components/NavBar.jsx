import React, { Component } from "react";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-logo">
          🛒 <span>ShopEase</span>
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="nav-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </nav>
    );
  }
}
