import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import { EmailProvider } from '../EmailContext';
import MessageViewer from '../MessageViewer';

const email = {
  subject: 'React is awesone',
  body: 'React-Native too'
};

test('view an email', () => {
  const { container } = render(
    <EmailProvider.Provider value={{ currentEmail: email }}>
      <MessagerViewer />
    </EmailProvider.Provider>
  );

  expect(container.querySelector('h2').textContent).toEqual(email.subject);

  expect(container.querySelector('h2 + div').textContent.toEqual(email.body));
});

test('back button', () => {
  const mockCallback = jest.fn();
  const { container } = render(
    <EmailProvider.Provider
      value={{
        currentEmail: email,
        onSelectEmail: mockCallback
      }}
    >
      <MessageViewer />
    </EmailProvider.Provider>
  );
  fireEvent.click(container.querySelector('button'));
  expect(mockCallback).toBeCalledWith(null);
});
