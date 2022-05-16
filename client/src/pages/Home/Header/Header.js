import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLocationArrow, FaEnvelope } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';

const Header = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="header__top header__top-4 d-none d-md-block header__style-6">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-5 col-md-4">
                        <div className="header__social">
                           <ul>
                              <li>
                                 <a
                                    href="https://www.facebook.com/RIWAInfos"
                                    target="_blank"
                                    rel="noreferrer"
                                 >
                                    <i >
                                       <FaFacebookF />
                                    </i>
                                 </a>
                              </li>
                              <li>
                                 <a
                                    href="https://twitter.com/home"
                                    target="_blank"
                                    rel="noreferrer"
                                 >
                                    <i >
                                       <FaTwitter />
                                    </i>
                                 </a>
                              </li>
                              <li>
                                 <a
                                    href="https://www.instagram.com/1248_performers/"
                                    target="_blank"
                                    rel="noreferrer"
                                 >
                                    <i >
                                       <FaInstagram />
                                    </i>
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-7 col-md-8">
                        <div className="header__info f-right">
                           <ul>
                              <li>
                                 <a
                                    href="http://maps.google.com/?q=26, Avenue Clermont Tonnerre 1330 Rixensart"
                                    target="_blank"
                                    rel="noreferrer"
                                 >
                                    <i > <FaLocationArrow /> </i>
                                    26, Avenue Clermont Tonnerre 1330 Rixensart
                                 </a>
                              </li>
                              <li>
                                 <a href="mailto:secretariat@riwa.be">
                                    <i > <FaEnvelope /> </i>
                                    secretariat@riwa.be
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="header__sticky" className={stickyMenu ? "sticky header__bottom" : "header__bottom"}>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                        <div className="logo">
                           <NavLink to="/">
                              <img src="assets/img/logo/logo.png" alt="logo" />
                           </NavLink>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                        <div className="header__bottom-right d-flex justify-content-end align-items-center">
                           <div className="main-menu header__style-4-menu header__style-1-menu header_style_six_menu">
                              <nav id="mobile-menu">
                                 <ul>
                                    <li>
                                       <NavLink to="/">Le Riwa </NavLink>
                                       <ul className="submenu">
                                          <li>
                                             <NavLink to="/infos">Infos</NavLink>
                                          </li>
                                          <li><NavLink to="/entrainement">Entrainements</NavLink></li>
                                          <li><NavLink to="/comite">Le Comité</NavLink></li>
                                          <li><NavLink to="/coordinateur">Les Coordinateurs</NavLink></li>
                                          <li><NavLink to="/officiels">Les Officiels</NavLink></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <NavLink to="/sections">Sections </NavLink>
                                    </li>
                                    <li>
                                       <NavLink to="/elites">Élites </NavLink>
                                    </li>
                                    <li>
                                       <NavLink to="/competitions">Compétitions</NavLink>
                                       <ul className="submenu">
                                          <li><NavLink to="/organisations">Nos Organisations</NavLink></li>
                                          <li><NavLink to="/resultats">Résultats</NavLink></li>
                                          <li><NavLink to="/bilan">Bilan</NavLink></li>
                                          <li><NavLink to="/rc">Records Clubs</NavLink></li>
                                       </ul>
                                    </li>
                                    <li>
                                       <NavLink to="/stages">Stages</NavLink>
                                    </li>
                                    <li>
                                       <Link to="">Galeries</Link>
                                       <ul className="submenu">
                                          <li>
                                             <a
                                                href='https://galerie-ecole-athletisme.riwa.be/#collections'
                                                target="_blank"
                                                rel="noreferrer"
                                             >
                                                KBPM
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                href='https://galerie-toutes-categorie.riwa.be/#collections'
                                                target="_blank"
                                                rel="noreferrer"
                                             >
                                                TC
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                href='https://galerie-jogging.riwa.be/#collections'
                                                target="_blank"
                                                rel="noreferrer"
                                             >
                                                Jogging-Trail
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                href='https://galerie-riwaforfun.riwa.be/#collections'
                                                target="_blank"
                                                rel="noreferrer"
                                             >
                                                Riwa For Fun
                                             </a>
                                          </li>
                                          <li>
                                             <a
                                                href='https://galerie-photos-divers.riwa.be/#collections'
                                                target="_blank"
                                                rel="noreferrer"
                                             >
                                                Autres
                                             </a>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </nav>
                           </div>
                           <div className="header__btn d-none d-sm-block d-lg-none d-xl-block ml-50">
                              <Link to="/boutique" className="z-btn">Boutique</Link>
                           </div>
                           <div onClick={handleShow} className="sidebar__menu d-lg-none">
                              <div className="sidebar-toggle-btn sidebar-toggle-btn-3" id="sidebar-toggle">
                                 <span className="line"></span>
                                 <span className="line"></span>
                                 <span className="line"></span>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="body-overlay-2"></div>
         </header>


         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default Header;