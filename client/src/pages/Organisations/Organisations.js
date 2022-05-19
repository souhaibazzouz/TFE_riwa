import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import OrganisationArea from './OrganisationArea/OrganisationArea';


const Organisations = () => {
    return (
        <>
            <PageHelmet pageTitle="Organisations" />
            <Header />
            <CommonPageHeader title="Nos Organisations" subtitle="Organisations" />
            <OrganisationArea />
            <Footer />
        </>
    );
};

export default Organisations;