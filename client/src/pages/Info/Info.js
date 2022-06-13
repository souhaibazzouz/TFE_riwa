import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import InfoArea from './InfoArea/InfoArea';
import InfoCatCoti from './InfoArea/InfoCatCoti';
import InfoStatuts from './InfoArea/InfoStatuts';

const Contact = () => {
   return (
      <>
         <PageHelmet pageTitle="Infos" />
         <Header />
         <CommonPageHeader title="Informations" subtitle="Infos" />
         <InfoArea />
         <InfoCatCoti
            bpm="true"
            tc="true"
            jt="true"
            rff="true"
         />
         <InfoStatuts />
         <Footer />
      </>
   );
};

export default Contact;