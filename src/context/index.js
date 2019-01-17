import React from 'react';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, UserConsumer } from './UserContext';
import { EmailProvider } from './EmailContext';
import { NotificationProvider } from './NotificationContext';

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
