import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './app/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();