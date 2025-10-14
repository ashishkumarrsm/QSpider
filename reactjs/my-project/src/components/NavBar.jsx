import React, { Component } from "react";
import "./NavBar.css";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <nav className="navbar">
        <div className="nav-logo">
          🛒 <span>ShopEase</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <div className="nav-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>

        <div className="nav-buttons">
          <p>count: {this.state.count}</p>
          <button
            className="login"
            onClick={() => {
              this.setState({ ...this.state, count: this.state.count + 1 });
            }}
          >
            Add To Cart
          </button>

          <button
            className="login"
            onClick={() => {
              this.setState({
                ...this.state,
                count: this.state.count > 0 ? this.state.count - 1 : 0,
              });
            }}
          >
            Remove From cart
          </button>
        </div>
      </nav>
    );
  }
}
