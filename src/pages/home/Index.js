import React from 'react';

// Page Blocks
import Header from '../common/Header';
import HomeIntro from './components/Intro';
import LesEquipments from  './components/Les-Equipments';
import FormBlock from './components/Form';
import Footer from '../common/Footer';

// SCSS Files
import '../../assets/scss/home-page.scss';

const HomePage = () => {
  return(
    <main className="home-page">
      <Header />
      <HomeIntro />
      <LesEquipments />
      <FormBlock />
      <Footer />
    </main>
  )
}

export default HomePage;