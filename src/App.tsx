import * as React from 'react';
import { hot } from 'react-hot-loader/root';

const Warning = React.lazy(() => import('./Warning'));

interface IState {
  count: number;
}

class App extends React.Component<{}, IState> {
  public state = {
    count: 0
  };

  private increment = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  };

  private decrement = () => {
    this.setState(state => ({
      count: state.count - 1
    }));
  };

  public render() {
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

export default hot(App);
