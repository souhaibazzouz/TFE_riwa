import React from 'react';
import SingleOrga from '../../../components/SingleOrga/SingleOrga';

const OrganisationArea = () => {
    return (
        <>
            <section className="contact__help p-relative pt-115 pb-150">
                <div className="contact__shape">
                    <img className="dot" src="assets/img/icon/contact/dot.png" alt="" />
                    <img className="shape" src="assets/img/icon/contact/shape.png" alt="" />
                </div>

                <div className="container">
                    <div className="row p-relative">
                        <h2>Outdoor</h2>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <SingleOrga
                                date="Samedi 23 avril 2022"
                                competition="Championnat Provincial du Brabant Wallon"
                                heure="10h"
                                nom_a1="Pré-inscription obligatoire (ouverte du 4 au 21 avril inclus). Pas d’inscription sur place !"
                                nom_a2="Horaire : Championnat Provincial du Brabant Wallon"
                                lien_a3="https://www.riwa.be/WPRIWA/wp-content/uploads/2022/04/2022-04-23_RESULTATS_Championnat_BW_RIWA.pdf"
                                nom_a3="Résultats *Sous réserve d’homologation du Juge Arbitre"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <SingleOrga
                                date="Samedi 7 mai 2022"
                                competition="Intercercles Dames – Div 1"
                                heure="14h"
                                nom_a2="Horaire : Intercercles Dames – Div 1"
                                lien_a3="https://www.riwa.be/WPRIWA/wp-content/uploads/2022/05/2022-05-07_RESULTATS_IC_Dames_D1_RIWA.pdf"
                                nom_a3="Résultats"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <SingleOrga
                                date="Vendredi 24 juin 2022"
                                competition="Meeting Relais Nocturne (BPM)"
                                heure="19h"
                                nom_a1="Pré-inscription obligatoire"
                                nom_a2="Horaire – Meeting Relais Nocturne (BPM)"
                                nom_a3="Résultats"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <SingleOrga
                                date="Dimanche 28 août 2022"
                                competition="3e Manche du Challenge du Brabant Wallon (BPM)"
                                heure="13h"
                                nom_a1="Pré-inscription obligatoire"
                                nom_a2="Horaire : 3e manche du Challenge du Brabant Wallon (BPM)"
                                nom_a3="Résultats"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <SingleOrga
                                date="Vendredi 9 septembre 2022"
                                competition="Meeting Nocturne"
                                heure="18h"
                                nom_a1="Pré-inscription obligatoire"
                                nom_a2="Horaire – Meeting Nocturne + Perche Minimes"
                                nom_a3="Résultats"
                            />
                        </div>
                    </div>
                    <div className="row p-relative">
                        <h2>Indoor</h2>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <SingleOrga
                                date="Dimanche 30 janvier 2022"
                                competition="Challenge du Brabant Wallon des jeunes"
                                heure="13h"
                                nom_a1="Manche du Challenge du Brabant Wallon (École d’Athlétisme)"
                                lien_a2="https://www.riwa.be/WPRIWA/wp-content/uploads/2022/01/2022-01-30_RESULTATS_meeting_Indoor_RIWA.pdf"
                                nom_a2="Résultats (sous réserve d’homologation du Juge Arbitre)"
                            />
                        </div>
                    </div>
                    <div className="row p-relative">
                        <h2>Cross</h2>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <SingleOrga
                                date="Dimanche 5 décembre 2021                                "
                                competition="8e Cross du RIWA"
                                heure="12h"
                                nom_a1="8e Cross du RIWA (Horaire & Parcours) ☞ Les inscriptions se font sur place"
                                lien_a2="https://www.riwa.be/WPRIWA/wp-content/uploads/2022/02/2021-12-05_RESULTATS_HOMOLOGUE_8e_CROSS_RIWA.pdf"
                                nom_a2="Résultats"
                                lien_a3="https://www.facebook.com/RIWAInfos "
                                nom_a3="📸 ☞ Toutes les photos du Cross du RIWA sont disponibles ☜ 📸"
                            />
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <SingleOrga
                                date="Mercredi – mai 2022 (pas de cross cette année)"
                                competition="Cross des Écoles"
                                heure="14h"
                                nom_a1="Cross des Écoles (Infos, Horaire & Parcours)"
                                nom_a2=""
                                nom_a3=""
                            />
                        </div>
                    </div>
                    <div className="row p-relative">
                        <h2>Jogging - Trail</h2>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <SingleOrga
                                date="Jeudi 26 mai 2022"
                                competition="Jogging du Bûchet"
                                heure="15 h"
                                lien_a1="https://www.riwa.be/WP_Fichiers/Evenements/Jogging_Du_Buchet_2022/Index.htm"
                                nom_a1="Infos & Parcours"
                                nom_a2=""
                                nom_a3=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default OrganisationArea;