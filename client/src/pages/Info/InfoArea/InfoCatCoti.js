import React from 'react';
import { BsCurrencyEuro } from 'react-icons/bs';
import { BiRun } from 'react-icons/bi';
import { AiOutlineStop } from 'react-icons/ai';
import { FaCheck, FaArrowRight } from 'react-icons/fa';


const InfoCatCoti = () => {
    return (
        <>
            <section className="services__area-3 pt-115 pb-160">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="section-title section__title-3 mb-70">
                                <h2>Catégories et Cotisations</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="services__nav wow fadeInUp" data-wow-delay=".4s">
                                <ul className="nav nav-pills " id="services-tab" role="tablist">
                                    <li className="nav-item mb-30">
                                        <a className="nav-link active" data-bs-toggle="pill" href="#categories" role="tab" aria-controls="categories" aria-selected="true">
                                            <i ><BiRun /></i> Catégories
                                        </a>
                                    </li>
                                    <li className="nav-item mb-30">
                                        <a className="nav-link" data-bs-toggle="pill" href="#cotisation" role="tab" aria-controls="cotisation" aria-selected="true">
                                            <i ><BsCurrencyEuro /></i> Cotisations
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-12">
                            <div className="services__tab grey-bg-18">
                                <div className="tab-content" id="services-content">
                                    <div className="tab-pane fade show active" id="categories" role="tabpanel" aria-labelledby="categories-tab">
                                        <div className="services__nav-content pt-90 pb-90">
                                            <div className="row">
                                                <div className="col-xl-7 col-lg-6">
                                                    <div className="services__content-3 pl-70 pr-70">
                                                        <ul>
                                                            <li ><span><i > <FaCheck /> </i>Kangourous né(e)s en <b>2015</b> <sub>(6 ans accompli lors de l’inscription)</sub></span></li>
                                                            <li ><span><i > <FaCheck /> </i>Benjamin(e)s né(e)s en <b>2014-2013</b></span></li>
                                                            <li ><span><i > <FaCheck /> </i>Pupilles né(e)s en <b>2012-2011</b></span></li>
                                                            <li ><span><i > <FaCheck /> </i>Minimes né(e)s en <b>2010-2009</b></span></li>
                                                            <li ><span><i > <FaCheck /> </i>Cadets né(e)s en <b>2008-2007</b></span></li>
                                                            <li ><span><i > <FaCheck /> </i>Scolaires né(e)s en <b>2006-2005</b></span></li>
                                                            <li ><span><i > <FaCheck /> </i>Juniors né(e)s en <b>2004-2003</b></span></li>
                                                            <li ><span><i > <FaCheck /> </i>Seniors né(e)s en <b>2002 jusque 34 ans</b></span></li>
                                                            <li ><span><i > <FaCheck /> </i>Masters Hommes/Dames <b>35 ans et plus</b></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5 col-lg-6">
                                                    <div className="services__thumb text-lg-right m-img">
                                                        <span>Les Kangourous ne peuvent pas participer aux compétitions.<br /><br /></span>
                                                        <img src="assets/img/info/info_categorie.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="cotisation" role="tabpanel" aria-labelledby="cotisation-tab">
                                        <div className="services__nav-content pt-90 pb-90">
                                            <div className="row">
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="services__content-3 pl-70 pr-70">
                                                        <ul>
                                                            <li ><span>Kangourous/Benjamins/Pupilles/Minimes : <b>160€ (*)</b></span></li>
                                                            <li ><span>Cadets/Scolaires : <b>160€ (*)</b></span></li>
                                                            <li ><span>Juniors/Seniors : <b>160€ (*)</b></span></li>
                                                            <li ><span>Masters/Joggeurs (Avec dossard LBFA) : <b>160€ (*)</b></span></li>
                                                            <li ><span>Joggeurs (Sans dossard LBFA) : <b>120€</b></span></li>
                                                            <li ><span>Riwa For Fun (6 mois) : <b>50€</b></span></li>
                                                        </ul>

                                                        <b>Réductions « Famille-même toit »:</b>
                                                        <ul>
                                                            <li ><span><i > <FaArrowRight /> </i>2 ème membre de famille: <b>– 20€</b></span></li>
                                                            <li ><span><i > <FaArrowRight /> </i>3 ème membre de famille: <b>– 35€</b></span></li>
                                                            <li ><span><i > <FaArrowRight /> </i>4 ème membre de famille: <b>– 50€</b></span></li>
                                                            <li ><span><i > <FaArrowRight /> </i>5 ème membre de famille: <b>– 65€</b></span></li>
                                                        </ul>
                                                        <p><b><i><AiOutlineStop />Pas de remboursement de cotisation en cours d’année athlétique<AiOutlineStop /></i></b></p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-6">
                                                    <div className="services__content-3 pl-70 pr-70">
                                                        <p>
                                                            <b>Infos nouvelles inscriptions :</b>
                                                            <ul>
                                                                <b><li>- 2 essais libres sans engagement</li></b>
                                                                <b><li>- 15€ par mois afin de couvrir septembre et octobre avant la nouvelle saison</li></b>
                                                            </ul>
                                                            La cotisation comprend un t-shirt du club ainsi que le maillot officiel du club <small>(maillot offert pour les nouvelles inscriptions)</small>.<br />
                                                            Le maillot est obligatoire pour les compétitions à partir de Cadet.
                                                        </p>
                                                        <ul>
                                                            <li><span>
                                                                <b>(*)</b> Une <b>attestation sur l’honneur</b> est <b>obligatoire </b>
                                                                pour l’assurance LBFA et pour l’obtention d’un dossard.</span></li>
                                                        </ul>

                                                        <b>Compte bancaire du RIWA :</b>
                                                        <ul>
                                                            <li ><span>Code IBAN : <b>BE17 3100 9082 4321</b></span></li>
                                                            <li ><span>Code BIC : <b>BBRU BE BB</b></span></li>
                                                        </ul>
                                                    </div>
                                                </div>
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

export default InfoCatCoti;