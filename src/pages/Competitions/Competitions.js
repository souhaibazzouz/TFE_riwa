import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';

const Competitions = () => {
    return (
        <>
            <PageHelmet pageTitle="Compétitions" />
            <Header />
            <CommonPageHeader title="Les Compétitions" subtitle="Compétitions" />
            <Footer />
        </>
    );
};

export default Competitions;