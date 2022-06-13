import React from 'react';

const SingleInfo = ({ title, info }) => {
   return (
      <>
         <div className="col-xl-5 col-lg-6 col-md-6 offset-xl-1">
            <div className="contact__help-item white-bg text-center mb-30 wow fadeInLeft" data-wow-delay=".3s">
               <div className="contact__text">
                  <h3>{title}</h3>
                  <div>
                     {info}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleInfo;