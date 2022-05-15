import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import PageHelmet from '../../components/shared/PageHelmet';
import Footer from '../../components/shared/Footer';
import Header from '../Home/Header/Header';
import NewsDetailsArea from './NewsDetailsArea/NewsDetailsArea';

const NewsDetails = () => {
   return (
      <>
         <PageHelmet pageTitle="News" />

         <Header />
         <CommonPageHeader title="Belle rentrée estival pour les BPM" subtitle="News" />
         <NewsDetailsArea />
         <Footer />
      </>
   );
};

export default NewsDetails;