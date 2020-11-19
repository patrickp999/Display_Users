import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import './styles/main.scss';
import App from './App';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
