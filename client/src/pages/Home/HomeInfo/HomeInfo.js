import React from 'react';
import SingleInfo from "../../../components/SingleInfo/SingleInfo";

const HomeInfo = () => {
    return (
        <>
            <section className="contact__help p-relative pt-115 pb-150">
                <div className="contact__shape">
                    <img className="dot" src="assets/img/icon/contact/dot.png" alt="" />
                    <img className="shape" src="assets/img/icon/contact/shape.png" alt="" />
                </div>
                <div className="container">
                    <div className="row p-relative">
                        <SingleInfo
                            title="Prochains Events"
                            info={
                                <p>
                                    <div className="services__list mb-40">
                                        <ul>
                                            <li>
                                                <a
                                                    href="https://www.riwa.be/WP_Fichiers/Evenements/Jogging_Du_Buchet_2022/Index.htm"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    26/05/2022 | Jogging du Buchet | Challenge de Jogging du BW
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/04/2022-04-23_RESULTATS_Championnat_BW_RIWA.pdf'
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    RÉSULTATS | Championnat Provincial du Brabant Wallon | Samedi 23 avril *sous réserve d’homologation du Juge Arbitre
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/05/2022-05-07_RESULTATS_IC_Dames_D1_RIWA.pdf'
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    RÉSULTATS | Intercercles Dames D1 | Samedi 7 mai
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/05/2022-05-15_HORAIRE_Epreuves_multiples_CSDY.pdf'
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    HORAIRE | Challenge Eric De Meu – Épreuves Multiples | BPM | Dimanche 15 mai | 12h | CSDYLE | Perwez
                                                </a>
                                                <a
                                                    href='https://www.liveathletics.be/csdy/'
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    ☞ Pré-inscription jusqu’au 12 mai (21h) ☜
                                                </a>

                                            </li>
                                        </ul>
                                    </div>
                                </p>
                            } />
                        <SingleInfo
                            title="À Épingler"
                            info={
                                <p>
                                    <div className="services__list mb-40">
                                        <ul>
                                            <li>
                                                <a
                                                    href='/stages'
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    STAGES ÉTÉ 2022 | Infos & Inscriptions | 6 – 13 ans
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href='assets/pdf/flyer-riwa.pdf'
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    Saison 2021-2022 | Infos & Horaire | École d’Athlétisme / TC (dès 13 ans) / Jogging & Trail / Riwa For Fun
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href='assets/pdf/Reglement-Challenge-JOG-TRAIL.pdf'
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    Calendrier Challenge Jogging-Trail 2022 (update 2/01/22)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </p>
                            } />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeInfo;