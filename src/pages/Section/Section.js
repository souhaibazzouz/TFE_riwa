import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';

const Section = () => {
    return (
        <>
            <PageHelmet pageTitle="Sections" />
            <Header />
            <CommonPageHeader title="Les Sections" subtitle="Sections" />
            <Footer />
        </>
    );
};

export default Section;