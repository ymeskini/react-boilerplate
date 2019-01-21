import React from 'react';
import { UserProvider, UserConsumer } from './UserContext';
import { EmailProvider } from './EmailContext';
import { NotificationProvider } from './NotificationContext';
import Loadable from 'react-loadable';

const LoginPage = Loadable({
  loader: () => import('./LoginPage'),
  loading: () => <div>loading...</div>
});

const MainPage = Loadable({
  loader: () => import('./MainPage'),
  loading: () => <div>loading...</div>
});

function Root() {
  return (
    <UserConsumer>
      {({ user, handleLogin }) =>
        user ? <MainPage /> : <LoginPage onLogin={handleLogin} />
      }
    </UserConsumer>
  );
}

export default () => {
  return (
    <NotificationProvider>
      <UserProvider>
        <EmailProvider>
          <Root />
        </EmailProvider>
      </UserProvider>
    </NotificationProvider>
  );
};
