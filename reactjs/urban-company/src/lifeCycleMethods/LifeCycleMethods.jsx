import React, { Component } from "react";

export default class LifeCycleMethods extends Component {
  state = {
    value: 0,
  };
  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };
  componentDidMount() {
    console.log(`the component are mounte....... `);
  }
  componentDidUpdate() {
    console.log(`this component is update ${this.state.value} time`);
  }
  componentWillUnmount(){
    console.log(`component is unmounte or remove ......`)
  }
  render() {
    return (
      <div>
        <h2>LifeCycleMethods {this.state.value}</h2>
        <button onClick={this.increment}>click me </button>
      </div>
    );
  }
}
