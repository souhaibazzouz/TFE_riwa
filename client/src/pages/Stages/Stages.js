import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';

const Stages = () => {
    return (
        <>
            <PageHelmet pageTitle="Stages" />
            <Header />
            <CommonPageHeader title="Les Stages" subtitle="Stages" />
            <Footer />
        </>
    );
};

export default Stages;