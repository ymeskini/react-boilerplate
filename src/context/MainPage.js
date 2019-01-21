import React from 'react';
import { EmailConsumer } from './EmailContext';
import Loadable from 'react-loadable';

const MessageList = Loadable({
  loader: () => import('./MessageList'),
  loading: () => <div>loading...</div>
});

const MessageViewer = Loadable({
  loader: () => import('./MessageViewer'),
  loading: () => <div>loading...</div>
});

const Header = Loadable({
  loader: () => import('./Header'),
  loading: () => <div>loading...</div>
});

const MainPage = () => (
  <EmailConsumer>
    {({ currentEmail }) => (
      <main>
        <Header />
        {currentEmail ? <MessageViewer /> : <MessageList />}
      </main>
    )}
  </EmailConsumer>
);

export default MainPage;
