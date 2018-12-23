/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './Component/App';

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);

export default hot(module)(App);
