import React from 'react';
import SingleTeamInfo from '../../../components/SingleTeam/SingleTeamInfo';

const InfoArea = () => {
   return (
      <>
         <section className="contact__help p-relative pt-115 pb-150">
            <div className="contact__shape">
               <img className="dot" src="assets/img/icon/contact/dot.png" alt="" />
               <img className="shape" src="assets/img/icon/contact/shape.png" alt="" />
            </div>
            <div className="container">
               <div className="row p-relative">
                  <div className="col-xl-4 col-lg-5 col-md-5">
                     <h2>Informations Générales</h2>
                     <div className='info__content'>
                        <div className='card'>
                           <p>Notre piste d’athlétisme est située au <span>Complexe
                              Sportif de Rixensart</span> Avenue Clermont Tonnerre, 26a
                              1330 – Rixensart
                           </p>
                           <p><span>Permanence</span>  au bord de la piste</p>
                           <p>La secrétaire est présente à la permanence secrétariat au
                              bord de la piste lors des entraînements du  mardi soir et du
                              samedi matin. Si vous avez un document « mutuelle, attestation .. » à
                              reprendre ou à donner, si vous devez prendre votre dossard
                              ou pour tout autre renseignement, nous sommes à votre disposition.</p>
                           <div className='personne'>
                              <p><span>Roseline Leloup Bero</span> – <span><a href="mailto:secretariat@riwa.be">Secrétaire</a></span></p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-5 offset-xl-4 offset-lg-2">
                     <div className="statut__team">
                        <SingleTeamInfo
                           image="comite/secretaire"
                           name="Roseline Bero"
                           mail="secretariat@riwa.be"
                           titre="Secrétaire du RIWA"
                        />
                     </div>
                  </div>
                  <div className='info__content'>
                     <div className='card'>
                        <div className='infoaddition'>
                           <div className='row'>
                              <div className="col-xl-7 col-lg-7 col-md-7">
                                 <p><span>Pour des questions liées aux entraînements et aux compétitions :</span></p>
                                 <p>
                                    <ul>
                                       <li><span>École d’Athlétisme (KBPM) :</span> Marc Ryckeboer (0474 22 36 52)</li>
                                       <li><span>Cadets/Scolaires :</span> Christophe Lejeune (0486 06 44 81)</li>
                                       <li><span>Toutes Catégories :</span> Olivier Mairesse (0472 42 75 00)</li>
                                       <li><span>Masters :</span> Nadia Vander Cuylen (0475 95 67 76)</li>
                                       <li><span>Jogging/Trail :</span> Daniel Leloup (0477 94 75 63)</li>
                                    </ul>
                                 </p>
                              </div>
                              <div className='col-xl-5 col-lg-5 col-md-5'>
                                 <p><span>Pour des questions administratives et de cotisations :</span></p>
                                 <p>Renseignements au bord de la piste ou par email :</p>
                                 <div className='personne'>
                                    <p><span><a href="mailto:secretariat@riwa.be">secretariat@riwa.be</a></span></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default InfoArea;