import React from 'react';
import CatSideBar from '../../../components/Sidebar/CatSideBar';
import { AiOutlineFilePdf } from 'react-icons/ai';

const ResultatsArea = () => {
    return (
        <>
            <section className="table__area pt-115 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 order-lg-first">
                            <CatSideBar />
                        </div>
                        <div className="col-xl-8 col-lg-8">
                            <h2>Résultats</h2>
                            <div className="resultat__content">
                                <hr />
                                <ul>
                                    <li >
                                        <a
                                            href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/05/2022-05-15_RESULTATS_Memorial_Pierre_Ninforge_OCAN.pdf'
                                            target="_blank"
                                            rel="noreferrer">
                                            <span><i > <AiOutlineFilePdf /> </i>2022/05/15 –  Mémorial Pierre Ninforge – OCAN (Andenne)</span>
                                        </a>
                                    </li>
                                    <li >
                                        <a
                                            href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/05/2022-05-14_RESULTATS_Chmpt_LBFA_TC.pdf'
                                            target="_blank"
                                            rel="noreferrer">
                                            <span><i > <AiOutlineFilePdf /> </i>2022/05/14 –  Championnats LBFA TC – WS (Woluwé St-Lambert)</span>
                                        </a>
                                    </li>
                                    <li >
                                        <a
                                            href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/05/2022-05-08_RESULTATS_IC_Hommes_Elite_SER.pdf'
                                            target="_blank"
                                            rel="noreferrer">
                                            <span><i > <AiOutlineFilePdf /> </i>2022/05/08 –  Intercercles Hommes D Élites (résultats) – SER (Seraing)</span>
                                        </a>
                                    </li>
                                    <li >
                                        <a
                                            href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/05/2022-05-08_CLASSEMENT_IC_Hommes_Elite_SER.pdf'
                                            target="_blank"
                                            rel="noreferrer">
                                            <span><i > <AiOutlineFilePdf /> </i>2022/05/08 –  Intercercles Hommes D Élites (classement) – SER (Seraing)</span>
                                        </a>
                                    </li>
                                    <li >
                                        <a
                                            href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/05/2022-05-07_RESULTATS_IC_Dames_D1_RIWA.pdf'
                                            target="_blank"
                                            rel="noreferrer">
                                            <span><i > <AiOutlineFilePdf /> </i><b>2022/05/07 –  Intercercles Dames D1 (résultats + classement) – RIWA (Rixensart)</b></span>
                                        </a>
                                    </li>
                                    <li >
                                        <a
                                            href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/05/2022-04-30_RESULTATS_Champ_BEL_10.000m_MALM.pdf'
                                            target="_blank"
                                            rel="noreferrer">
                                            <span><i > <AiOutlineFilePdf /> </i>2022/04/30 –  Championnats de Belgique de 10.000m – MALM (Malmédy)</span>
                                        </a>
                                    </li>
                                    <li >
                                        <a
                                            href='https://www.riwa.be/WPRIWA/wp-content/uploads/2022/05/2022-04-30_RESULTATS_Grand_Prix_Mingels_RESC.pdf'
                                            target="_blank"
                                            rel="noreferrer">
                                            <span><i > <AiOutlineFilePdf /> </i>2022/04/30 –  Grand Prix Mingels – RESC (Heysel)</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ResultatsArea;