import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';

// Importing Components
import Header from './pages/common/Header';
import Footer from './pages/common/Footer';

// SCSS Files
import './assets/scss/common.scss';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <AppRouter />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
)