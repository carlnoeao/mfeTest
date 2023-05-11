import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('TEMPLATE'));
root.render(
  <React.StrictMode>
    <App />
    {test}
  </React.StrictMode>
);


const test = <p>test</p>;