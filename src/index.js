import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { authService } from 'fbase';
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(authService);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
