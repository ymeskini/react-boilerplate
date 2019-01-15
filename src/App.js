import React, { Component } from "react";

class App extends Component {
  state = {
    counter: 0
  };
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h2>Count: {this.state.counter}</h2>
        <button
          onClick={() =>
            this.setState(state => ({
              counter: state.counter + 1
            }))
          }
        >
          +
        </button>
        <button
          onClick={() =>
            this.setState(state => ({
              counter: state.counter - 1
            }))
          }
        >
          -
        </button>
      </div>
    );
  }
}

export default App;
