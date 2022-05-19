import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleElite = ({ image, name, title, palmares }) => {
   return (
      <>
         <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team__item p-relative text-center fix mb-30">
               <div className="team__thumb mb-25">
                  <img src={`assets/img/team/elite/elite-${image}.jpg`} alt={`Elite ${name}`} />
                  <div className="team__info text-start">
                     <h3>{name}</h3>
                     <span>{palmares}</span>
                  </div>
                  <div className="team__social theme-social">
                     <ul>
                        <li>
                           <a href="https://www.facebook.com/">
                              <i > <FaFacebookF /> </i>
                              <i > <FaFacebookF /> </i>
                           </a>
                        </li>
                        <li>
                           <a href="https://www.instagram.com/1248_performers/">
                              <i > <FaInstagram /> </i>
                              <i > <FaInstagram /> </i>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="team__content">
                  <h3><Link to="/teamDetails">{name}</Link></h3>
                  <span>{title}</span>
               </div>
            </div>
         </div>
      </>
   );
};

export default SingleElite;