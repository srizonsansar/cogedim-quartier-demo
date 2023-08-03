import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './AppRouter';

// SCSS Files
import './assets/scss/common.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);