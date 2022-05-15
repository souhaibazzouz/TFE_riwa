import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import OfficielArea from './OfficielArea/OfficielArea';


const Officiels = () => {
    return (
        <>
            <PageHelmet pageTitle="Officiels" />
            <Header />
            <CommonPageHeader title="Les Officiels" subtitle="Officiels" />
            <OfficielArea />
            <Footer />
        </>
    );
};

export default Officiels;