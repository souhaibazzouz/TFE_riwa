import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';

const RecordClub = () => {
    return (
        <>
            <PageHelmet pageTitle="Les Records du Club" />
            <Header />
            <CommonPageHeader title="Les Records du Club" subtitle="Records Club" />
            <Footer />
        </>
    );
};

export default RecordClub;