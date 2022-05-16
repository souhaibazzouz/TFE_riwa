import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/shared/Footer';
import PageHelmet from '../../components/shared/PageHelmet';
import Header from '../Home/Header/Header';
import NewsArea from './NewsArea/NewsArea';



const News = () => {
   return (
      <>
         <PageHelmet pageTitle="News" />
         <Header />
         <CommonPageHeader title="News" subtitle="Toutes les News" />
         <NewsArea />
         <Footer />
      </>
   );
};

export default News;