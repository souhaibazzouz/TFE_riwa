import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { BiMap } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const Footer = () => {
   return (
      <>
         <footer>
            <div className="footer__area grey-bg pt-100">
               <div className="footer__top pb-45">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>RIWA</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li><Link to="/news">News</Link></li>
                                       <li><Link to="/competitions">Compétitions</Link></li>
                                       <li><Link to="/resultats">Résultats</Link></li>
                                       <li><Link to="/elites">Elites</Link></li>
                                       <li><Link to="/galeries">Galeries</Link></li>
                                       <li><Link to="/login">Support</Link></li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".4s">
                              <div className="footer__widget-title">
                                 <h4>Ressources</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li>
                                          <a
                                             href="https://www.lbfa.be/web/"
                                             target="_blank"
                                             rel="noreferrer"
                                          >
                                             LBFA
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="https://www.atletiek.be/"
                                             target="_blank"
                                             rel="noreferrer"
                                          >
                                             VAL
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="https://aisf.be/"
                                             target="_blank"
                                             rel="noreferrer"
                                          >
                                             AISF
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="http://challenge-bw.imagefields.com/fr/accueil"
                                             target="_blank"
                                             rel="noreferrer"
                                          >
                                             Challenge du Brabant Wallon
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>RGPD</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__links">
                                    <ul>
                                       <li>
                                          <a
                                             href="https://www.riwa.be/WPRIWA/wp-content/uploads/2019/04/RIWA_Document_RGPD_NEW19.pdf"
                                             target="_blank"
                                             rel="noreferrer">
                                             Règlement Général Protection des Données RIWA
                                          </a>
                                       </li>
                                       <li>
                                          <a
                                             href="https://www.riwa.be/WPRIWA/wp-content/uploads/2019/04/LBFA_Document_RGPD.pdf"
                                             target="_blank"
                                             rel="noreferrer">
                                             Règlement Général Protection des Données LBFA
                                          </a>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xl-3 offset-xl-1 col-lg-3 offset-lg-1 col-md-4 col-sm-6">
                           <div className="footer__widget mb-45">
                              <div className="footer__widget-title">
                                 <h4>Informations</h4>
                              </div>
                              <div className="footer__widget-content">
                                 <div className="footer__info">
                                    <ul>
                                       <li>
                                          <div className="icon">
                                             <i > <BiMap /> </i>
                                          </div>
                                          <div className="text theme-color ">
                                             <span>
                                                <a
                                                   href="http://maps.google.com/?q=26, Avenue Clermont Tonnerre 1330 Rixensart"
                                                   target="_blank"
                                                   rel="noreferrer"
                                                >
                                                   26, Avenue Clermont Tonnerre 1330 Rixensart
                                                </a>
                                             </span>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="icon theme-color ">
                                             <i > <FaEnvelope /> </i>
                                          </div>
                                          <div className="text theme-color ">
                                             <span>
                                                <a
                                                   href="mailto:secretariat@riwa.be">
                                                   secretariat@riwa.be
                                                </a>
                                             </span>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="footer__copyright-3">
                  <div className="container">
                     <div className="footer__copyright-inner">
                        <div className="row align-items-center">
                           <div className="col-xl-12">
                              <div className="footer__copyright-text text-center">
                                 <p>© Copyright 2022 -
                                    <a
                                       href="https://souhaibazzouz.github.io/portfolio/"
                                       target="_blank"
                                       rel="noreferrer"
                                    >
                                       Souhaïb Azzouz
                                    </a>
                                    . All Rights Reserved.</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;