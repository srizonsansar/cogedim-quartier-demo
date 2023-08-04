import React, { useEffect } from 'react';

// Page Blocks
import Header from '../common/Header';
import HomeIntro from './components/Intro';
import LesEquipments from  './components/Les-Equipments';
import FormBlock from './components/Form';
import Footer from '../common/Footer';

// SCSS Files
import '../../assets/scss/home-page.scss';

const HomePage = () => {

    useEffect(() => {
        // Update title
        document.title = 'Quartier des Hirondelles à Annecy (74) - Cogedim';
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', 'Vivez le meilleur de la ville dans votre nouveau quartier des Hirondelles');
        }
      }, []);

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