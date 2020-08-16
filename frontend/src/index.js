import React from 'react';
import ReactDOM from 'react-dom';
import BowserRouter, { BrowserRouter } from 'react-router-dom';

import './assets/main.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
