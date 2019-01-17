import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { AppRouter } from './router';

const store = createStore(reducers);

const App: React.SFC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default hot(App);
