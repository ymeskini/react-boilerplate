import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Counter from './Counter';
import reducers from './reducers';

const store = createStore(reducers);

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}

export default hot(App);
