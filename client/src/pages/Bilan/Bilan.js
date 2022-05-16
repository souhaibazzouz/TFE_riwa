import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';

const Bilan = () => {
    return (
        <>
            <PageHelmet pageTitle="Bilan" />
            <Header />
            <CommonPageHeader title="Le Bilan" subtitle="Bilan" />
            <Footer />
        </>
    );
};

export default Bilan;