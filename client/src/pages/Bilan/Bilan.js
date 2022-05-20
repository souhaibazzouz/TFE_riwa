import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import BilanArea from './BilanArea/BilanArea';


const Bilan = () => {
    return (
        <>
            <PageHelmet pageTitle="Bilan" />
            <Header />
            <CommonPageHeader title="Les Bilans" subtitle="Bilans" />
            <BilanArea />
            <Footer />
        </>
    );
};

export default Bilan;