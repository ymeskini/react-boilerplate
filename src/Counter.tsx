import * as React from 'react';
import { connect } from 'react-redux';
import { IReduxState } from './reducers';
import { Dispatch } from 'redux';
import { increment, decrement } from './actions/counter';

const Warning = React.lazy(() => import('./Warning'));

interface IProps {
  onIncrement: () => void;
  onDecrement: () => void;
  counter: number;
}

class Counter extends React.Component<IProps, {}> {
  public render() {
    const { onIncrement, onDecrement, counter } = this.props;
    return (
      <div>
        <h1>Hello World</h1>
        <h2>Count: {counter}</h2>
        {counter > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state: IReduxState) => ({
  counter: state.counter.counter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
