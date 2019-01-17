import * as React from 'react';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import * as Loadable from 'react-loadable';

const Home = () => (
  <div>
    Home <Link to="/counter">Counter</Link>
  </div>
);

function Loading({ pastDelay }) {
  return pastDelay ? <h3>Loading...</h3> : null;
}

const Counter = Loadable({
  loader: () => import('./Counter'),
  loading: Loading,
  delay: 60
});

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/counter" component={Counter} />
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
