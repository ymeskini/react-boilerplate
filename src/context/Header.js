import React from 'react';
import { EmailConsumer } from './EmailContext';
import Loadable from 'react-loadable';

const UserMenu = Loadable({
  loader: () => import('./UserMenu'),
  loading: () => <div>loading...</div>
});

const Header = () => (
  <EmailConsumer>
    {({ emails }) => (
      <header className="Header">
        <div>
          <h2>MyMail</h2>
          <div className="emails">{emails.length} emails</div>
        </div>
        <UserMenu />
      </header>
    )}
  </EmailConsumer>
);

export default Header;
