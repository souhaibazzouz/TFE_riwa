import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import { FaEnvelope, FaLocationArrow } from 'react-icons/fa';

const Sidebar = ({ show, handleClose }) => {

   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  <div className="logo">
                     <a href="index.html">
                        <img src="assets/img/logo/logo.png" alt="logo" />
                     </a>
                  </div>
               </Offcanvas.Header>

               <Offcanvas.Body>


                  <section>
                     <div className="p-0">
                        <div className="sidebar__tab">
                           <ul className="nav nav-tabs" id="sidebar-tab" role="tablist">
                              <li className="nav-item">
                                 <a className="nav-link active" id="menu-tab" data-bs-toggle="tab" href="#menu" role="tab" aria-controls="menu" aria-selected="true">menu</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link" id="info-tab" data-bs-toggle="tab" href="#info" role="tab" aria-controls="info" aria-selected="false">info</a>
                              </li>
                           </ul>
                        </div>
                        <div className="sidebar__content">

                           <div className="tab-content" id="sidebar-tab-content">
                              <div className="tab-pane fade show active" id="menu" role="tabpanel" aria-labelledby="menu-tab">

                                 <div className='side_navBar'>
                                    <Collapsible
                                       trigger={<NavLink to="/">Le Riwa</NavLink>}
                                       triggerTagName="div"
                                       triggerOpenedClassName="icon_close"
                                       triggerClassName="iconAdd"
                                       open={false}
                                    >
                                       <ul className="sidebar_sub_menu text-white">

                                          <li className='border-0'>
                                             <NavLink to="/infos">
                                                Infos
                                             </NavLink>
                                          </li>

                                          <li className='pt-10'>
                                             <NavLink to="/entrainement">
                                                Entrainements
                                             </NavLink>
                                          </li>

                                          <li className='pt-10'>
                                             <NavLink to="/comite">
                                                Le Comité
                                             </NavLink>
                                          </li>

                                          <li className='pt-10'>
                                             <NavLink to="/coordinateur">
                                                Les Coordinateurs
                                             </NavLink>
                                          </li>

                                          <li className='pt-10'>
                                             <NavLink to="/officiels">
                                                Les Officiels
                                             </NavLink>
                                          </li>

                                       </ul>
                                    </Collapsible>


                                    <div className='noIcon'><NavLink to="/sections">Sections</NavLink></div>
                                    <div className='noIcon'><NavLink to="/elites">Elites</NavLink></div>

                                    <Collapsible
                                       trigger={<NavLink to="/competitions">Compétitions</NavLink>}
                                       triggerTagName="div"
                                       triggerOpenedClassName="icon_close"
                                       triggerClassName="iconAdd"
                                       open={false}
                                    >
                                       <ul className="sidebar_sub_menu text-white">

                                          <li className='pt-10'>
                                             <NavLink to="/organisations">
                                                Nos Organisations
                                             </NavLink>
                                          </li>

                                          <li className='pt-10'>
                                             <NavLink to="/resultats">
                                                Résultats
                                             </NavLink>
                                          </li>

                                          <li className='pt-10'>
                                             <NavLink to="/bilan">
                                                Bilan
                                             </NavLink>
                                          </li>

                                          <li className='pt-10'>
                                             <NavLink to="/rc">
                                                Records Clubs
                                             </NavLink>
                                          </li>

                                       </ul>
                                    </Collapsible>

                                    <div className='noIcon'><NavLink to="/stages">Stages</NavLink></div>


                                    <Collapsible
                                       trigger={<Link to="">Galeries</Link>}
                                       triggerTagName="div"
                                       triggerOpenedClassName="icon_close"
                                       triggerClassName="iconAdd"
                                       open={false}
                                    >
                                       <ul className="sidebar_sub_menu text-white">

                                          <li className='pt-10'>
                                             <a
                                                href='https://galerie-ecole-athletisme.riwa.be/#collections'
                                                target="_blank"
                                                rel="noreferrer"
                                             >
                                                KBPM
                                             </a>
                                          </li>

                                          <li className='pt-10'>
                                             <a
                                                href='https://galerie-toutes-categorie.riwa.be/#collections'
                                                target="_blank"
                                                rel="noreferrer"
                                             >
                                                TC
                                             </a>
                                          </li>

                                          <li className='pt-10'>
                                             <a
                                                href='https://galerie-jogging.riwa.be/#collections'
                                                target="_blank"
                                                rel="noreferrer"
                                             >
                                                Jogging-Trail
                                             </a>
                                          </li>

                                          <li className='pt-10'>
                                             <a
                                                href='https://galerie-riwaforfun.riwa.be/#collections'
                                                target="_blank"
                                                rel="noreferrer"
                                             >
                                                Riwa For Fun
                                             </a>
                                          </li>

                                          <li className='pt-10'>
                                             <a
                                                href='https://galerie-photos-divers.riwa.be/#collections'
                                                target="_blank"
                                                rel="noreferrer"
                                             >
                                                Autres
                                             </a>
                                          </li>

                                       </ul>
                                    </Collapsible>
                                 </div>

                              </div>

                              <div className="tab-pane fade" id="info" role="tabpanel" aria-labelledby="info-tab">
                                 <div className="sidebar__info">
                                    <p>La création du club du <span>RIXENSART WAVRE ATHLETIC CLUB – RIWA A.C.</span>
                                       est le résultat, le 19 octobre 1989, de la fusion des clubs
                                       d’athlétisme de l’<b>ACRI</b> (Athletic Club Rixensart) et du <b>RACW</b> (Royal Athlétic Club Wavre).
                                       Cette fusion fait suite à la mauvaise qualité de la piste d’athlétisme (cendrée) et
                                       aux modifications aux infrastructures du complexe sportif de Wavre
                                       (suppression de la piste pour l’élargissement du terrain de football du Racing Jet de Wavre)
                                       au stade Justin Peeters.</p>
                                    <a href="contact.html" className="z-btn z-btn-white">Nous contacter</a>
                                    <div className="sidebar__contact mt-30">
                                       <ul>
                                          <li>
                                             <div className="icon">
                                                <i > <FaLocationArrow /> </i>
                                             </div>
                                             <div className="text">
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
                                             <div className="icon">
                                                <i > <FaEnvelope /> </i>
                                             </div>
                                             <div className="text ">
                                                <span>
                                                   <a
                                                      href="mailto:secretariat@riwa.be"
                                                   >
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
                  </section>

               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;