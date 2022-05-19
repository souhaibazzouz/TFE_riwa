import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import SectionArea from './SectionArea/SectionArea';


const Section = () => {
    return (
        <>
            <PageHelmet pageTitle="Sections" />
            <Header />
            <CommonPageHeader title="Les Sections" subtitle="Sections" />
            <SectionArea />
            <Footer />
        </>
    );
};

export default Section;