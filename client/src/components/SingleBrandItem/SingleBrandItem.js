import React from 'react';

const SingleBrandItem = ({ img_1, a_1 }) => {
   return (
      <>
         <div className="brand__item-wrapper">
            <div className="brand__item">
               <a
                  href={`${a_1}`}
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <img src={`assets/img/brand/brand-${img_1}.png`} alt="" />
               </a>
            </div>
         </div>
      </>
   );
};

export default SingleBrandItem;