import * as React from 'react';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import * as Loadable from 'react-loadable';
const Home = () => (
  <div>
    <div>
      Home <Link to="/counter">Counter</Link>
    </div>
    <div>
      Context USE CASE with mail box <Link to="/context">MailBox</Link>
    </div>
    <div>
      E2E tested ToDoApp <Link to="/todo">ToDoApp</Link>
    </div>
  </div>
);

function Loading({ error, retry }) {
  if (error) {
    return (
      <div>
        Error! <button onClick={retry}>Retry</button>
      </div>
    );
  } else {
    return <h3>Loading...</h3>;
  }
}

const Counter = Loadable({
  loader: () => import('./Counter'),
  loading: Loading
});

const ContextAPI = Loadable({
  loader: () => import('./context'),
  loading: Loading
});

const ToDoApp = Loadable({
  loader: () => import('./ToDoApp'),
  loading: Loading
});

const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/context" component={ContextAPI} />
        <Route exact={true} path="/counter" component={Counter} />
        <Route exact={true} path="/todo" component={ToDoApp} />
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
