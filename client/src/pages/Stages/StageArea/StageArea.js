import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';


const StageArea = () => {
    return (
        <>
            <section className="contact__help p-relative pt-115 pb-150">
                <div className="contact__shape">
                    <img className="dot" src="assets/img/icon/contact/dot.png" alt="" />
                    <img className="shape" src="assets/img/icon/contact/shape.png" alt="" />
                </div>

                <div className="container">
                    <h2>Stages de Pâques</h2>
                    <div className="row p-relative">
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <h3>Ecole d'athlétisme</h3>
                            <div className='info__content'>
                                <div className='card'>
                                    <p>
                                        Stage de <b>perfectionnement</b> à Pâques, du lundi 11 au vendredi 15 avril 2022
                                    </p>
                                    <p><span>***RÉSERVÉ AUX MEMBRES DU RIWA***</span></p>
                                    <p>
                                        <div className="services__action grey-bg-18 mb-15">
                                            <a
                                                href='https://docs.google.com/forms/d/e/1FAIpQLSfMCXMLU2A_dMY7jRnkBVwFfPddE-WAK23_BUg9_Ct5mC8yag/viewform'
                                                target="_blank"
                                                rel="noreferrer">
                                                <i > <AiOutlineFilePdf /> </i>
                                                Infos & Inscription</a>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 col-md-5">
                            <div className='info__content'>
                                <h3>Toutes Catégories (Touquet)</h3>
                                <div className='card'>
                                    <p>
                                        Stage de perfectionnement pour les CAD+ du dimanche 3 au samedi 9 avril 2022.
                                    </p>
                                    <p><span>Réservé aux membres du RIWA !</span></p>
                                    <p>
                                        <div className="services__action grey-bg-18 mb-15">
                                            <span>Les inscriptions sont clôturées !!!</span>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h2>Stages d'Ete</h2>
                        <div className="row p-relative">
                            <div className="col-xl-8 col-lg-10 col-md-10">
                                <div className='info__content'>
                                    <h3>Ecole d'athlétisme</h3>
                                    <div className='card'>
                                        <p>
                                            Stage d’initiation et de perfectionnement pour les enfants (6-13 ans) – Juillet & Août 2022
                                        </p>
                                        <p><span>Stages ouverts à tous !</span></p>
                                        <p>
                                            <ul>
                                                <li><div className="services__action grey-bg-18 mb-15">
                                                    <a
                                                        href='https://docs.google.com/forms/d/e/1FAIpQLSdlEn2osqimB5mfhIZMGh_JJGOQHB5SeKX31Xt5dEUE7X8Auw/viewform'
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        <i > <AiOutlineFilePdf /> </i>
                                                        Inscriptions – Semaine 1 : 4 au 8 juillet</a>
                                                </div></li>
                                                <li><div className="services__action grey-bg-18 mb-15">
                                                    <a
                                                        href='https://docs.google.com/forms/d/e/1FAIpQLSdAsjILnmUviv2ct2rjHAOg_NaETC5mJ7QAmNKwb-nzFl4pKQ/viewform'
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        <i > <AiOutlineFilePdf /> </i>
                                                        Inscriptions – Semaine 2 : 11 au 15 juillet</a>
                                                </div></li>
                                                <li><div className="services__action grey-bg-18 mb-15">
                                                    <a
                                                        href='https://docs.google.com/forms/d/e/1FAIpQLScbwBkv7d9inoSRYAWP3Y7JWD9yDocwiuLf7lFoWKyABzIRtg/viewform'
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        <i > <AiOutlineFilePdf /> </i>
                                                        Inscriptions – Semaine 3 : 25 au 29 juillet</a>
                                                </div></li>
                                                <li><div className="services__action grey-bg-18 mb-15">
                                                    <a
                                                        href='https://docs.google.com/forms/d/e/1FAIpQLSdjO-qzk0MttApjm1XkuAo3iOxvCV8EPuX7JawVIsG_2klnkA/viewform'
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        <i > <AiOutlineFilePdf /> </i>
                                                        Inscriptions – Semaine 4 : 15 au 19 août</a>
                                                </div></li>
                                                <li><div className="services__action grey-bg-18 mb-15">
                                                    <a
                                                        href='https://docs.google.com/forms/d/e/1FAIpQLScjPLbgQguxGRbKrEkuVN4tjdDu1RGi2L61DLoTH40m9NAc8g/viewform'
                                                        target="_blank"
                                                        rel="noreferrer">
                                                        <i > <AiOutlineFilePdf /> </i>
                                                        Inscriptions – Semaine 5 : 22 au 26 août</a>
                                                </div></li>
                                            </ul>
                                        </p>
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

export default StageArea;