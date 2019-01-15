import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import App from './App';
import './styles.css';
import DefaultErrorBoundary from './DefaultErrorBoundary';

ReactDOM.render(
  <StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </StrictMode>,
  document.getElementById('app')
);
