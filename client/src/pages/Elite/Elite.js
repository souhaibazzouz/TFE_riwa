import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import EliteArea from './EliteArea/EliteArea';

const Elite = () => {
   return (
      <>
         <PageHelmet pageTitle="Nos Elites" />

         <Header />
         <CommonPageHeader title="Nos Elites" subtitle="Elites" />
         <EliteArea />
         <Footer />
      </>
   );
};

export default Elite;