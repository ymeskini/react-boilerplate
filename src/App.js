import React, { Component } from "react";
import { hot } from "react-hot-loader";

const Warning = React.lazy(() => import("./Warning"));

class App extends Component {
  state = {
    counter: 0
  };

  increment = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  decrement = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>Hello World</h1>
        <h2>Counter {counter}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        {counter > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    );
  }
}

export default hot(module)(App);
