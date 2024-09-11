import React, { Component } from "react"

export default class StateInClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "1",
      name: props.name,
      counter: 0,
    };
  }
  plus = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  de = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <div>
        Name: {this.state.name} <br></br>
        counter = {this.state.counter}
        <button onClick={this.plus}>+</button>
        <button onClick={this.de}>-</button>
      </div>
    );
  }
}
