import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

const Warning = React.lazy(() => import('./Warning'));

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  decrement = () => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello World</h1>
        <h2>Count: {count}</h2>
        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default hot(module)(App);
