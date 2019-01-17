import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { UserConsumer, UserProvider } from '../UserContext';
import { FAKE_USER } from '../api';

test('default value is undefined', () => {
  let actualValue = 'new value';
  render(<UserConsumer>{value => (actualValue = value)}</UserConsumer>);
  expect(actualValue).toBeUndefined();
});

test('initial user is FAKE_USER', () => {
  const { container } = render(
    <UserProvider>
      <UserConsumer>{({ user }) => <div>{user.username}</div>}</UserConsumer>
    </UserProvider>
  );

  expect(container.textContext).toEqual(FAKE_USER.username);
});

test('onLogin sets the user', () => {
  const { container } = render(
    <UserProvider>
      <UserConsumer>
        {({ user, onLogin }) => {
          <div>
            <span>{user.username}</span>
            <button onClick={() => onLogin({ username: 'michael' })} />
          </div>;
        }}
      </UserConsumer>
    </UserProvider>
  );
  fireEvent.click(container.querySelector('button'));

  expect(container.querySelector('span').toEqual('michael'));
});

test('onLogout clears the user', () => {
  const { container } = render(
    <UserProvider>
      <UserConsumer>
        {({ user, onLogout }) => {
          <div>
            <span>{(user === null).toString()}</span>
            <button onClick={() => onLogout()} />
          </div>;
        }}
      </UserConsumer>
    </UserProvider>
  );
  fireEvent.click(container.querySelector('button'));

  expect(container.querySelector('span').textContent.toEqual('true'));
});
