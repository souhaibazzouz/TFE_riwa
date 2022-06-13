import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';

const Boutique = () => {
    return (
        <>
            <PageHelmet pageTitle="Boutique" />
            <Header />
            <CommonPageHeader title="La Boutique" subtitle="Boutique" />
            <Footer />
        </>
    );
};

export default Boutique;