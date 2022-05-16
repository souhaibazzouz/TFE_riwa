import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';

const Entrainement = () => {
    return (
        <>
            <PageHelmet pageTitle="Entrainements" />
            <Header />
            <CommonPageHeader title="Les Horaires" subtitle="Entrainements" />
            <Footer />
        </>
    );
};

export default Entrainement;