import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import ComiteArea from './ComiteArea/ComiteArea';


const Comite = () => {
    return (
        <>
            <PageHelmet pageTitle="Comite" />
            <Header />
            <CommonPageHeader title="Le Comité" subtitle="Comite" />
            <ComiteArea />
            <Footer />
        </>
    );
};

export default Comite;