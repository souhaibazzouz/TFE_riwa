import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';

const RFFK = ({ distance }) => {
    return (
        <>
            <div className="col-xl-12 col-lg-12">
                {distance === "5k" &&
                    <h3>Objectif 5km –  Préparation de 10 semaines</h3>
                }
                {distance === "10k" &&
                    <h3>Objectif 10km –  Préparation de 10 semaines</h3>
                }
                <hr />
                <div className="services__content-3">
                    {distance === "5k" &&
                        <div>
                            <p>
                                Chaque séance se déroulera selon un scénario identique en 5 temps :
                            </p>
                            <ul>
                                <li><span>1. Un échauffement de 5 minutes de marche <b>(ECH)</b>.</span></li>
                                <li><span>2. Quelques étirements: stretching <b>(STR)</b>.</span></li>
                                <li>
                                    <span>
                                        3. Le thème du jour consistant en une succession
                                        de périodes de marche <b>(M)</b>et de périodes
                                        de course <b>(C)</b> ou de trottinement <b>(T)</b>. Ces périodes
                                        sont exprimées en minutes.
                                    </span></li>
                                <li><span>4. Un retour au calme de 5 minutes de marche <b>(RAC)</b>.</span></li>
                                <li><span>5. Quelques étirements: stretching <b>(STR)</b>.</span></li>
                                <br />
                                <li><div className="services__action grey-bg-18 mb-15">
                                    <a
                                        href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/01/RFF_2022_03_Schema_5Km.pdf'
                                        target="_blank"
                                        rel="noreferrer">
                                        <i > <AiOutlineFilePdf /> </i>
                                        Téléchargez le schéma de 05 km</a>
                                </div></li>
                                <li><div className="services__action grey-bg-18 mb-15">
                                    <a
                                        href='https://www.riwa.be/WPRIWA/wp-content/uploads/2018/01/RFF_2018_03_Tableau_Progression_5Km.pdf'
                                        target="_blank"
                                        rel="noreferrer">
                                        <i > <AiOutlineFilePdf /> </i>
                                        Téléchargez le Tableau de Progression de 05 km</a>
                                </div></li>
                            </ul>
                        </div>
                    }
                    {distance === "10k" &&
                        <div>
                            <p>
                                Chaque séance se déroulera selon un scénario identique en 3 temps :
                            </p>
                            <ul>
                                <li>
                                    <span>
                                        1. Un échauffement de 2 minutes de marche <b>(ECH)</b>, quelques
                                        exercices d’assouplissements bras/tronc, 5 minutes
                                        de trottinement <b>(T)</b>.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        2. Le thème du jour consistant en une succession de périodes de
                                        marche <b>(M)</b> et de périodes de course <b>(C)</b> ou de trottinement <b>(T)</b>.
                                        Ces périodes sont exprimées en minutes.
                                    </span>
                                </li>
                                <li>
                                    <span>
                                        3. Un retour au calme de 2 minutes de marche <b>(RAC)</b> ainsi
                                        que 4 minutes de trottinement <b>(T)</b> et quelques
                                        étirements <b>(ETR)</b>.
                                    </span></li>
                                <br />
                                <li><div className="services__action grey-bg-18 mb-15">
                                    <a
                                        href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/01/RFF_2022_03_Schema_10Km.pdf'
                                        target="_blank"
                                        rel="noreferrer">
                                        <i > <AiOutlineFilePdf /> </i>
                                        Téléchargez le schéma de 10 km</a>
                                </div></li>
                                <li><div className="services__action grey-bg-18 mb-15">
                                    <a
                                        href='https://www.riwa.be/WPRIWA/wp-content/uploads/2018/01/RFF_2018_03_Tableau_Progression_10Km.pdf'
                                        target="_blank"
                                        rel="noreferrer">
                                        <i > <AiOutlineFilePdf /> </i>
                                        Téléchargez le Tableau de Progression de 10 km</a>
                                </div></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default RFFK;