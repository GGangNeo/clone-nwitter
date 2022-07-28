import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Firebase from './firebase';
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(Firebase);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
