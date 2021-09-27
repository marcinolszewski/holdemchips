import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <App text="This should be deployed on master only" />
  </React.StrictMode>,
  document.getElementById('root'),
);
