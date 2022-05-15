import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import CoordinateurArea from './CoordinateurArea/CoordinateurArea';


const Coordinateur = () => {
    return (
        <>
            <PageHelmet pageTitle="Coordinateurs" />
            <Header />
            <CommonPageHeader title="Les Coordinateurs" subtitle="Coordinateurs" />
            <CoordinateurArea />
            <Footer />
        </>
    );
};

export default Coordinateur;