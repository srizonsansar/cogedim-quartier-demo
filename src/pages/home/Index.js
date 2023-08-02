import React from 'react';
import HomeIntro from './components/Intro';
import Header from '../common/Header';
import Footer from '../common/Footer';

const HomePage = () => {
  return(
    <main className="home-page">
      <Header />
      <HomeIntro />
      <Footer />
    </main>
  )
}

export default HomePage;