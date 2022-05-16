import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import ResultatsArea from './ResultatsArea/ResultatsArea';


const Resultats = () => {
    return (
        <>
            <PageHelmet pageTitle="Résultats" />
            <Header />
            <CommonPageHeader title="Les Résultats" subtitle="Résultats" />
            <ResultatsArea />
            <Footer />
        </>
    );
};

export default Resultats;