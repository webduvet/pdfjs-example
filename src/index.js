import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

import './workers'

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root') || document.createElement('div'),
);
