import React from 'react';
import Header from './Header/Header';
import HomeSlider from './HomeSlider/HomeSlider';
import HomeInfo from './HomeInfo/HomeInfo';
import HomeNews from './HomeNews/HomeNews';
import HomeBrands from './HomeBrands/HomeBrands';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';


const Home = () => {
    return (
        <>
            <PageHelmet pageTitle="Accueil" />

            <Header />
            <HomeSlider />
            <HomeInfo />
            <HomeNews />
            <HomeBrands />
            <Footer />
        </>
    );
};

export default Home;